const path = require('path')
const vscode = require('vscode')
const jenkins = require('./config')()
const { getOutHtml } = require('../utils')
const xml2js = require('xml2js')
let num = 0

module.exports = {
  jenkinsJob: async function (jobs, viewName) {
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
  },

  jenkinsViews: async function () {
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
  },

  getNowBuildNumber: function (name, jenkins) {
    return new Promise((resolve, rej) => {
      jenkins.job.get(name).then(res => {
        if (res.nextBuildNumber) {
          resolve(res.nextBuildNumber)
        } else {
          rej(0)
        }
      })
    })
  },
  jenkinsLog: async function (name, nextBuildNumber, jenkins, htmlWebview) {
    let next = await this.getNowBuildNumber(name, jenkins)
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
        this.jenkinsLog(name, nextBuildNumber, jenkins, htmlWebview)
      }, 1000)
    }
  },
  jenkinsBuildLog: function (job) {
    let nextBuildNumber = job.nextBuildNumber
    let htmlWebview = vscode.window.createWebviewPanel('html', 'jenkins 构建日志' + job.name, 3)
    htmlWebview.webview.html += `<div>开始构建 ${job.name}</div></style>`
    this.jenkinsLog(job.name, nextBuildNumber, jenkins, htmlWebview).then()
  },
  parameterDefinitions: function (obj = {}, attr = {}, key = 'parameterDefinitions') {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let o = obj[key]
      for (let value of Object.keys(o)) {
        attr.obj = o[value]
      }
      return
    }
    for (let key2 in obj) {
      if (typeof obj[key2] === 'object' && !Array.isArray(obj[key2])) {
        this.parameterDefinitions(obj[key2], attr, key)
      }
    }
  },
  getParameterDefinitions: function (xml) {
    return new Promise(resolve => {
      xml2js.parseString(xml, { explicitArray: false }, (err, data) => {
        if (err) return resolve(null)
        resolve(data)
      })
    })
  }
}
