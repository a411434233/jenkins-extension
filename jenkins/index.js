const vscode = require('vscode')
const path = require('path')
const jenkins = require('./config')()
const fs = require('fs')
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
    jenkins.info(function (err, data) {
      if (err) {
        vscode.window.showErrorMessage(JSON.stringify(err))
        return Promise.reject([])
      }
      let arr = []
      data.views.forEach((values, index) => {
        arr.push({
          label: values.name,
          collapsibleState: 1,
          id: index
        })
      })
      resolve(arr)
    })
  })
}

const getNowBuildNumber = function (name, jenkins) {
  return new Promise((resolve, rej) => {
    jenkins.job.get(name, function (err, data) {
      if (data.nextBuildNumber) {
        resolve(data.nextBuildNumber)
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
const jenkinsInit = (context) => {
  vscode.commands.registerCommand('extension.jenkinsConstruct', function (res) {
    jenkins.job.get(res.label, function (err, getData) {
      let nextBuildNumber = getData.nextBuildNumber
      jenkins.job.build(res.label, function (err, data) {
        let htmlWebview = vscode.window.createWebviewPanel('web', 'jenkins 构建日志' + res.label, 3)
        htmlWebview.webview.html += `<div style="color: #387cdf;font-size: 14px;line-height: 28px">开始构建 ${res.label}</div>`
        jenkinsLog(res.label, nextBuildNumber, jenkins, htmlWebview).then()
      })
    })
  })
  vscode.commands.registerCommand('extension.jenkinsShowLog', function (res) {
    jenkins.job.get(res.label, function (err, getData) {
      let nextBuildNumber = getData.nextBuildNumber
      jenkins.build.log(getData.name, nextBuildNumber - 1, (err, data) => {
        let htmlWebview = vscode.window.createWebviewPanel('web', 'jenkins 构建日志' + res.label, 3)
        htmlWebview.webview.html += `<div style="color: #eee;font-size: 14px;line-height: 28px">${data}</div>`
      })
    })
  })
  vscode.window.createTreeView('nodeDependencies', {
    treeDataProvider: {
      async getTreeItem(element) {
        return element
      },
      async getChildren(element) {
        if (element) return await jenkinsJobberViews(element.label)
        return await jenkinsViews(jenkins)
      },
      getParent(element) {
        console.log('getParent', element)
      },
    },
    showCollapseAll: true,
  })
}
const jenkinsJobberViews = function (viewName) {
  return new Promise(resolve => {
    jenkins.view.get(viewName, async function (err, data) {
      let list = await jenkinsJob(data.jobs, viewName)
      resolve(list)
    })
  })
}

module.exports = {
  jenkinsJob,
  jenkinsLog,
  jenkinsInit,
  jenkinsJobberViews,
}
