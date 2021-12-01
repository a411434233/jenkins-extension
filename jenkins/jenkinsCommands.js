const vscode = require('vscode')
const { getOutHtml, jenkinsWeb } = require('../utils')
const jenkins = require('./config')()
const localStore = require('../loaclStore/localStroe')
const { createTreeViewLocal, createTreeView } = require('./index')
const { jenkinsUtils } = require('./jenkinsUtils')

module.exports = () => {
  vscode.commands.registerCommand('jenkins.jenkinsConstruct', async function (res) {
    let job = await jenkins.job.get(res.label)
    let jobConfigXml = await jenkins.job.config(job.name)
    let xmlObj = await jenkinsUtils.getParameterDefinitions(jobConfigXml)
    let attr = { obj: null }
    jenkinsUtils.parameterDefinitions(xmlObj, attr)
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
      jenkinsUtils.jenkinsBuildLog(job)
    } else {
      await jenkins.job.build(job.name)
      jenkinsUtils.jenkinsBuildLog(job)
    }
  })

  vscode.commands.registerCommand('jenkins.jenkinsShowLog', async function (res) {
    let job = await jenkins.job.get(res.label)
    let nextBuildNumber = job.nextBuildNumber
    let buildLog = await jenkins.build.log(job.name, nextBuildNumber - 1, { type: 'html' })
    let htmlWebview = vscode.window.createWebviewPanel('html', 'jenkins 构建日志' + res.label, 3)
    htmlWebview.webview.html += getOutHtml(buildLog)
  })


  vscode.commands.registerCommand('jenkins.refreshEntry', async function () {
    await createTreeViewLocal()
    createTreeView().then(() => {
      vscode.window.showInformationMessage('已刷新')
    })
  })

  vscode.commands.registerCommand('jenkins.getConfig', async function (res) {
    let configHtml = vscode.window.createWebviewPanel('html', 'jenkins config', vscode.ViewColumn.One, { enableScripts: true })
    const jobConfig = await jenkins.job.config(res.label)
    configHtml.visible = true
    configHtml.webview.html = jenkinsWeb(jobConfig)
    configHtml.webview.onDidReceiveMessage(async ({ xml }) => {
      jenkins.job.config(res.label, xml, function (err) {
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

  vscode.commands.registerCommand('jenkins.addStore', async res => {
    let job = await jenkins.job.get(res.label)
    let jenkinsList = localStore.getItem('jenkinsStore')
    if (jenkinsList) {
      let some = jenkinsList.some(item => item.label === res.label)
      if (some) return
      jenkinsList.push(res)
    } else {
      jenkinsList = [job]
    }
    await localStore.setItem('jenkinsStore', jenkinsList)
    createTreeViewLocal()
  })

  vscode.commands.registerCommand('jenkins.removeAtStore', async res => {
    let jenkinsList = localStore.getItem('jenkinsStore')
    let index = jenkinsList.findIndex(item => item.label === res.label)
    jenkinsList.splice(index, 1)
    await localStore.setItem('jenkinsStore', jenkinsList)
    createTreeViewLocal()
  })
}
