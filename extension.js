// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const utils = require('./xsFunction/utils')

const vscode = require('vscode')

const { jenkinsJob, jenkinsLog } = require('./jenkins/index')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  // console.log('恭喜，您的扩展“xs-plugin”现已激活！');
  const jenkins = require('./jenkins/config')()
  vscode.commands.registerCommand('extension.jenkinsConstruct', function (res) {
    jenkins.job.get(res.label, function (err, getData) {
      let nextBuildNumber = getData.nextBuildNumber
      jenkins.job.build(res.label, function (err, data) {
        let htmlWebview = vscode.window.createWebviewPanel('web', 'jenkins 构建日志' + res.label, 3)
        htmlWebview.webview.html += `<div style="color: #387cdf;font-size: 14px;line-height: 28px">开始构建 ${res.label}</div>`
        jenkinsLog(res.label, nextBuildNumber, jenkins, htmlWebview)
      })
    })
  })
  vscode.commands.registerCommand('extension.jenkinsShowlog', function (res) {
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
      getTreeItem(element) {
        return element
      },
      async getChildren(element) {
        return await this.resolveTreeItem({}, element)
      },
      getParent(element) {
        return element
      },
      async resolveTreeItem(item, element, token) {
        let list = await jenkinsJob(jenkins)
        if (element) {
          return Promise.resolve([element])
        }
        return Promise.resolve(list)
      }
    },
    showCollapseAll: true
  })


  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  utils(context)
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
}
