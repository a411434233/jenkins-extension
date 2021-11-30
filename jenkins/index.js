const vscode = require('vscode')
const path = require('path')
const jenkins = require('./config')()
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

const jenkinsViews = function () {
  return new Promise(resolve => {
    jenkins.info().then(data => {
      let arr = []
      data.views.forEach((values, index) => {
        arr.push({
          label: values.name,
          collapsibleState: 1,
          id: index
        })
      })
      resolve(arr)
    }).catch(err => {
      vscode.window.showErrorMessage(JSON.stringify(err))
      return Promise.reject([])
    })
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
    let log = jenkins.build.logStream(name, nextBuildNumber, { type: 'text', delay: 1000 })
    log.on('data', function (text) {
      htmlWebview.webview.html += `<div style="color: #387cdf;font-size: 14px;line-height: 28px">${text}</div>`
    })

    log.on('error', function (err) {
      htmlWebview.webview.html += `<div style="color: red;font-size: 14px;line-height: 28px">构建错误${err}</div>`
    })

    log.on('end', function () {
      htmlWebview.webview.html += `<div style="color: seagreen;font-size: 14px;line-height: 28px">构建完成</div>`
    })
  } else {
    setTimeout(() => {
      num += 1
      htmlWebview.webview.html = `<div style="color: wheat;font-size: 14px;line-height: 28px">执行中...${num}</div>`
      if (num >= 15) {
        num = 0
        htmlWebview.webview.html = `<div style="color: wheat;font-size: 14px;line-height:28px">构建失败</div>`
        return
      }
      jenkinsLog(name, nextBuildNumber, jenkins, htmlWebview)
    }, 1000)
  }
}

/**
 * @param {vscode.ExtensionContext} context
 */
const jenkinsInit = context => {
  vscode.commands.registerCommand('jenkins.jenkinsConstruct', async function (res) {
    let job = await jenkins.job.get(res.label)
    let nextBuildNumber = job.nextBuildNumber
    let jobBuild = await jenkins.job.build(job.name)
    let htmlWebview = vscode.window.createWebviewPanel('web', 'jenkins 构建日志' + res.label, 3)
    htmlWebview.webview.html += `<div style="color: #387cdf;font-size: 14px;line-height: 28px">开始构建 ${res.label}</div>`
    jenkinsLog(res.label, nextBuildNumber, jenkins, htmlWebview).then()
  })
  vscode.commands.registerCommand('jenkins.jenkinsShowLog', async function (res) {
    let job = await jenkins.job.get(res.label)
    let nextBuildNumber = job.nextBuildNumber
    let buildLog = await jenkins.build.log(job.name, nextBuildNumber - 1)
    let htmlWebview = vscode.window.createWebviewPanel('web', 'jenkins 构建日志' + res.label, 3)
    htmlWebview.webview.html += `<div style="color: #eee;font-size: 14px;line-height: 28px">${buildLog}</div>`
  })
  vscode.commands.registerCommand('jenkins.getConfig', async function (res) {
    let configHtml = vscode.window.createWebviewPanel('catCoding', 'jenkins config', vscode.ViewColumn.One, { enableScripts: true })
    const jobConfig = await jenkins.job.config(res.label)
    configHtml.visible = true
    configHtml.webview.html = `
        <html lang="ch">
        <body>
          <textarea id="app" cols="120" rows="50">${jobConfig}</textarea>
          <button id="save" onclick="add()">保存并更新</button>
          <script>
               const vscode = acquireVsCodeApi(); 
                document.getElementById('save').onclick =function (){
                  let data = document.getElementById('app').value
                  vscode.postMessage({ xml:data});
                }
          </script>
        </body>
        </html>`
    configHtml.webview.onDidReceiveMessage(async ({ xml }) => {
      jenkins.job.config(res.label, xml).then(() => {
        vscode.window.showInformationMessage('保存成功')
      }).catch((err) => {
        vscode.window.showErrorMessage(JSON.stringify(err))
      })
    })
  })
  vscode.commands.registerCommand('jenkins.openURL', async res => {
    let job = await jenkins.job.get(res.label)
    vscode.env.openExternal(job.url)
  })
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
      },
    },
    showCollapseAll: true
  })
}
module.exports = {
  jenkinsJob,
  jenkinsLog,
  jenkinsInit,
}
