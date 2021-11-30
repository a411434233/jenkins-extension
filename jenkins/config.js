const vscode = require('vscode')
let jenkinsInit = require('jenkins')
module.exports = () => {
  let xsTemplateConfig = vscode.workspace.getConfiguration('xsTemplateConfig')
  let username = xsTemplateConfig.get('userName')
  let loginHost = xsTemplateConfig.get('loginHost')
  let password = xsTemplateConfig.get('password')
  if (!username || !loginHost || !password) {
    vscode.window.showErrorMessage('jenkins配置有误')
    return []
  }

  const jenkins = jenkinsInit({
    baseUrl: `https://${username}:${password}@${loginHost}`,
    crumbIssuer: true,
    promisify: true
  })

  return jenkins
}
