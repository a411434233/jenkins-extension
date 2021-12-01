const vscode = require('vscode')
const path = require('path')
const jenkins = require('./config')()

const getOutHtml = html => {
  return `
      <style>
          .console-output{
            white-space: pre-wrap;
            word-wrap: break-word;
            margin: 0;
            line-height:1.4em
          }
      </style>
      <div class="console-output">${html}</div>`
}
const jenkinsJob = async function (jobs, viewName) {
  return new Promise(resolve => {
    let arr = []
    jobs.forEach((val, index) => {
      let iconPath = path.join(__dirname, `../media/${val.color ? val.color : 'notbuilt'}.png`)
      arr.push({
        label: val.name,
        id: viewName + '_' + val.name + '_' + index,
        iconPath: iconPath,
        contextValue: 'jenkins'
      })
    })
    resolve(arr)
  })
}

const jenkinsViews = async function () {
  return await jenkins.info().then(data => {
    let arr = data.views.map((view, index) => {
      return {
        label: view.name,
        collapsibleState: 1,
        id: index
      }
    })
    return Promise.resolve(arr)
  }).catch(err => {
    vscode.window.showErrorMessage(JSON.stringify(err))
    return Promise.reject([])
  })
}

const getNowBuildNumber = function (name, jenkins) {
  return new Promise((resolve, rej) => {
    jenkins.job.get(name).then(res => {
      if (res.nextBuildNumber) {
        resolve(res.nextBuildNumber)
      } else {
        rej(0)
      }
    })
  })
}

let num = 0
const jenkinsLog = async function (name, nextBuildNumber, jenkins, htmlWebview) {
  let next = await getNowBuildNumber(name, jenkins)
  if (next > nextBuildNumber) {
    num = 0
    let log = jenkins.build.logStream(name, nextBuildNumber, { type: 'html', delay: 1000 })
    log.on('data', function (text) {
      htmlWebview.webview.html += getOutHtml(text)
    })
  } else {
    setTimeout(() => {
      num += 1
      htmlWebview.webview.html = `<div>执行中...${num}</div>`
      if (num >= 15) {
        num = 0
        htmlWebview.webview.html = '执行超时'
        return
      }
      jenkinsLog(name, nextBuildNumber, jenkins, htmlWebview)
    }, 1000)
  }
}
let xml2js = require('xml2js')
const getParameterDefinitions = function (xml) {
  return new Promise(resolve => {
    xml2js.parseString(xml, { explicitArray: false }, (err, data) => {
      if (err) return resolve(null)
      resolve(data)
    })
  })
}

const parameterDefinitions = function (obj = {}, attr = {}, key = 'parameterDefinitions') {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    let o = obj[key]
    for (let value of Object.keys(o)) {
      attr.obj = o[value]
    }
    return
  }
  for (let key2 in obj) {
    if (typeof obj[key2] === 'object' && !Array.isArray(obj[key2])) {
      parameterDefinitions(obj[key2], attr, key)
    }
  }
}

const jenkinsBuildLog = function (job) {
  let nextBuildNumber = job.nextBuildNumber
  let htmlWebview = vscode.window.createWebviewPanel('html', 'jenkins 构建日志' + job.name, 3)
  htmlWebview.webview.html += `<div>开始构建 ${job.name}</div></style>`
  jenkinsLog(job.name, nextBuildNumber, jenkins, htmlWebview).then()
}

const jenkinsInit = () => {
  vscode.commands.registerCommand('jenkins.jenkinsConstruct', async function (res) {
    let job = await jenkins.job.get(res.label)
    let jobConfigXml = await jenkins.job.config(res.label)
    let xmlObj = await getParameterDefinitions(jobConfigXml)
    let attr = { obj: null }
    parameterDefinitions(xmlObj, attr)
    let { obj } = attr
    if (obj) {
      let items = undefined
      if (Array.isArray(obj)) {
        items = []
        obj.forEach(item => {
          items.push(...item.value.split(',').map(value => ({ label: value })))
        })
      } else {
        items = obj.value.split(',').map(value => ({ label: value }))
      }
      let picker = await vscode.window.showQuickPick(items, { canPickMany: true, title: '请选择需要构建的服务名称' })
      if (!picker || picker.length <= 0) return
      picker.forEach(v => jenkins.job.build({ name: job.name, parameters: { name: v.label } }))
      jenkinsBuildLog(job)
    } else {
      await jenkins.job.build(job.name)
      jenkinsBuildLog(job)
    }
  })

  vscode.commands.registerCommand('jenkins.jenkinsShowLog', async function (res) {
    let job = await jenkins.job.get(res.label)
    let nextBuildNumber = job.nextBuildNumber
    let buildLog = await jenkins.build.log(job.name, nextBuildNumber - 1, { type: 'html' })
    let htmlWebview = vscode.window.createWebviewPanel('html', 'jenkins 构建日志' + res.label, 3)
    htmlWebview.webview.html += getOutHtml(buildLog)
  })


  vscode.commands.registerCommand('jenkins.refreshEntry', async function (res) {
    createTreeView().then(() => {
      vscode.window.showInformationMessage('已刷新')
    })
  })

  vscode.commands.registerCommand('jenkins.getConfig', async function (res) {
    let configHtml = vscode.window.createWebviewPanel('html', 'jenkins config', vscode.ViewColumn.One, { enableScripts: true })
    const jobConfig = await jenkins.job.config(res.label)
    configHtml.visible = true
    configHtml.webview.html = `
          <textarea id="app" cols="120" rows="50">${jobConfig}</textarea>
          <button id="save" onclick="add()">保存并更新</button>
          <script>
               const vscode = acquireVsCodeApi(); 
                document.getElementById('save').onclick =function (){
                  let data = document.getElementById('app').value
                  vscode.postMessage({ xml:data});
                }
          </script>`
    configHtml.webview.onDidReceiveMessage(async ({ xml }) => {
      jenkins.job.config(res.label, xml, function (err, data) {
        if (err) return vscode.window.showErrorMessage(JSON.stringify(err))
        vscode.window.showInformationMessage('保存成功')
        configHtml.dispose()
      })
    })
  })

  vscode.commands.registerCommand('jenkins.openURL', async res => {
    let job = await jenkins.job.get(res.label)
    vscode.env.openExternal(job.url)
  })
  createTreeView()
}
const createTreeView = () => {
  return new Promise((resolve) => {
    vscode.window.createTreeView('nodeDependencies', {
      treeDataProvider: {
        async getTreeItem(element) {
          return element
        },
        async getChildren(element) {
          if (element) {
            let views = await jenkins.view.get(element.label)
            return await jenkinsJob(views.jobs, element.label)
          }
          return await jenkinsViews(jenkins)
        }
      },
      showCollapseAll: true
    })
    resolve()
  })
}
module.exports = {
  jenkinsInit
}
