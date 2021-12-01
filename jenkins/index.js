const vscode = require('vscode')
const jenkins = require('./config')()
const localStore = require('../loaclStore/localStroe')
const { jenkinsUtils } = require('./jenkinsUtils')
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
            return await jenkinsUtils.jenkinsJob(views.jobs, element.label)
          }
          return await jenkinsUtils.jenkinsViews(jenkins)
        }
      },
      showCollapseAll: true
    })
    resolve()
  })
}
const createTreeViewLocal = function () {
  vscode.window.registerTreeDataProvider('localList', {
    getChildren() {
      return localStore.getItem('jenkinsStore')
    },
    getTreeItem(element) {
      return element
    },
  })
}


const jenkinsInit = async () => {
  await createTreeView()
  createTreeViewLocal()
}

module.exports = {
  jenkinsInit,
  createTreeView,
  createTreeViewLocal,
}
