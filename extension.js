// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const xsUtils = require('./xs-utils/index')
const vscode = require('vscode')
const { jenkinsInit } = require('./jenkins')
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('恭喜，您的扩展“xs-plugin”现已激活！')

  //注入jenkins
  jenkinsInit()
  //注入其它的操作
  xsUtils(context)
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
}
