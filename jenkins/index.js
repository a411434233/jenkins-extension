const vscode = require('vscode')
const path = require('path')

function getTreeItems(list) {
  let arr = []

  list.forEach((val, index) => {
    let iconPath = ''
    iconPath = path.join(__dirname, `../media/${val.color}.png`)
    arr.push({
      label: val.name,
      id: index,
      iconPath: iconPath,
      contextValue: 'fffff'
    })
  })
  return arr
}

const jenkinsJob = async function (jenkins) {
  return new Promise(resolve => {
    jenkins.info(function (err, data) {
      if (err) {
        vscode.window.showErrorMessage(JSON.stringify(err))
      }
      let list = getTreeItems(data.jobs)
      resolve(list)
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

const jenkinsLog = async function (name, nextBuildNumber, jenkins, htmlWebview) {
  let next = await getNowBuildNumber(name, jenkins)
  if (next > nextBuildNumber) {
    let log = jenkins.build.logStream(name, nextBuildNumber, { type: 'text', delay: 1000 })

    log.on('data', function (text) {
      htmlWebview.webview.html += `<div style="color: wheat;font-size: 14px;line-height: 1.6">${text}</div>`
    })

    log.on('error', function (err) {
      htmlWebview.webview.html += `<div style="color: red;font-size: 18px;line-height: 1.6">构建错误${err}</div>`
    })

    log.on('end', function () {
      htmlWebview.webview.html += `<div style="color: seagreen;font-size: 18px;line-height: 1.6">构建结束</div>`
    })
  } else {
    setTimeout(() => {
      htmlWebview.webview.html += `<div style="color: wheat;font-size: 14px;line-height: 1.6">执行中...</div>`
      jenkinsLog(name, nextBuildNumber, jenkins, htmlWebview)
    }, 1000)
  }
}

module.exports = {
  jenkinsJob,
  jenkinsLog
}
