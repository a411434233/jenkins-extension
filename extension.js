// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')
const fs = require('fs')
const path = require('path')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('恭喜，您的扩展“xs-plugin”现已激活！')

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json

  context.subscriptions.push(vscode.commands.registerCommand('pushFiles', function () {

  }))



  context.subscriptions.push(vscode.commands.registerCommand('showDodia', (e) => {
    let files = fs.readdirSync(path.join(__dirname, 'xs-plugins/components'), { encoding: 'utf-8' })
    if (!files) return
    files = files.map(value => value.replace('.vue', ''))
    vscode.window.showQuickPick(files, {
      placeHolder: '请选择组件',
    }).then(res => {O
      if (!res) return
      vscode.window.showInputBox({
        placeHolder: '输入组件名称',
        value: 'index'
      }).then(fileName => {
        let urls = e.path.replace('/', '')
        if (fileName.indexOf('.vue') !== -1) return vscode.window.showInformationMessage('不允许添加.vue后缀，请重试')
        fs.readFile(path.join(__dirname, 'xs-plugins/components', `${res}.vue`), {}, function (err, data) {
          fs.writeFile(`${urls}/${fileName}.vue`, data, function () {
            vscode.window.showInformationMessage('添加成功')
          })
        })
      })
    })
  }))
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
  activate,
  deactivate
}
