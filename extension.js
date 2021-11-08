// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')
const fs = require('fs')
const path = require('path')
const { copy, pxToRpx, pxToRem, rpxToPx } = require('./utils')

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

  //创建项目
  context.subscriptions.push(
    vscode.commands.registerCommand('xs-createApp', async function () {
      let response = await vscode.window.showQuickPick(['vue后台', 'uni-app'], { placeHolder: '创建vuedemo' })
      if (!response) return
      if (response === 'vue后台') {
        response = 'template/vue'
      } else {
        response = 'template/uniApp'
      }
      const res = await vscode.window.showOpenDialog({ canSelectFolders: true, canSelectFiles: false, canSelectMany: false })
      if (res.length) {
        let url = res[0].path.replace('/', '')
        copy(path.join(__dirname, response), url)
        await vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.parse(res[0], false))
      }
    })
  )

  //添加页面组件
  context.subscriptions.push(
    vscode.commands.registerCommand('showDialog', async e => {
      let files = fs.readdirSync(path.join(__dirname, 'xs-plugins/components'), { encoding: 'utf-8' })
      if (!files) return
      files = files.map(value => value.replace('.vue', ''))
      const templateName = await vscode.window.showQuickPick(files, { placeHolder: '请选择组件' })
      if (!templateName) return
      const fileName = await vscode.window.showInputBox({ placeHolder: '输入组件名称', value: 'index' })
      let urls = e.path.replace('/', '')
      if (fileName.indexOf('.vue') !== -1) return vscode.window.showInformationMessage('不允许添加.vue后缀，请重试')
      fs.readFile(path.join(__dirname, 'xs-plugins/components', `${templateName}.vue`), {}, function (err, data) {
        fs.writeFile(`${urls}/${fileName}.vue`, data, function () {
          vscode.window.showInformationMessage('添加成功')
        })
      })
    })
  )

  //创建添加文件夹包含的页面组件
  context.subscriptions.push(
    vscode.commands.registerCommand('addFolder', async function (e) {
      const fileName = await vscode.window.showInputBox({ placeHolder: '输入文件夹名称' })
      if (!fileName) return
      const urls = e.path.replace('/', '')
      let files = fs.readdirSync(path.join(__dirname, 'xs-plugins/components'), { encoding: 'utf-8' })
      if (!files) return
      files = files.map(value => value.replace('.vue', ''))
      const templateName = await vscode.window.showQuickPick(files, { placeHolder: '选择要创建的组件' })
      fs.mkdir(path.join(urls, fileName), (err) => {
        if (err == null && templateName) {
          fs.readFile(path.join(__dirname, 'xs-plugins/components', `${templateName}.vue`), {}, function (err, data) {
            fs.writeFile(`${urls}/${fileName}/${templateName}.vue`, data, writeErr => {
              if (writeErr) return vscode.window.showErrorMessage(`创建失败：${JSON.stringify(writeErr)}  -writeFile`)
              vscode.window.showInformationMessage('创建成功')
            })
          })
        } else if (err) {
          vscode.window.showErrorMessage(`创建失败：${JSON.stringify(err)}`)
        }
      })
    })
  )

  // px转rpx
  context.subscriptions.push(
    vscode.commands.registerCommand('pxToRpx', async function () {
      const actionsName = await vscode.window.showQuickPick(['rpx转px', 'px转rpx', 'px转rem'])
      const file = await vscode.window.showOpenDialog({ canSelectMany: false })
      if (!file) return
      const url = file[0].path.replace('/', '')
      fs.readFile(url, { encoding: 'utf-8' }, function (err, data) {
        let endData = ''
        if (actionsName === 'rpx转px') {
          endData = rpxToPx(data)
        }
        if (actionsName === 'px转rpx') {
          endData = pxToRpx(data)
        }
        if (actionsName === 'px转rem') {
          let m = vscode.window.showInputBox({ title: '请输入除数' }) ?? '75'
          if (isNaN(parseInt(m))) return
          endData = pxToRem(data, m)
        }

        fs.writeFile(url, endData, function (err) {})
      })
    })
  )

  // px转rpx
  context.subscriptions.push(
    vscode.commands.registerCommand('pxToRpxEvent', async function (e) {
        let config = vscode.workspace.getConfiguration('xsTemplateConfig')
        let factorNum = config.get('rpxFactorNum')
        const url = e.path.replace('/', '')
        fs.readFile(url, { encoding: 'utf-8' }, function (err, data) {
          let endData = ''
          endData = pxToRpx(data, factorNum)
          fs.writeFile(url, endData, function (err) {})
        })
      }
    )
  )

  //rpx转px
  context.subscriptions.push(
    vscode.commands.registerCommand('rpxToPxEvent', async function (e) {
        let config = vscode.workspace.getConfiguration('xsTemplateConfig')
        let factorNum = config.get('pxFactorNum')
        const url = e.path.replace('/', '')
        fs.readFile(url, { encoding: 'utf-8' }, function (err, data) {
          let endData = ''
          endData = rpxToPx(data, factorNum)
          fs.writeFile(url, endData, function (err) {})
        })
      }
    )
  )

}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
}
