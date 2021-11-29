const vscode = require('vscode')

module.exports = () => {
  let xsTemplateConfig = vscode.workspace.getConfiguration('xsTemplateConfig')
  let username = xsTemplateConfig.get('userName')
  let loginHost = xsTemplateConfig.get('loginHost')
  let password = xsTemplateConfig.get('password')
  if (!username || !loginHost || !password) {
    vscode.window.showErrorMessage('jenkins配置有误')
    return []
  }

  const jenkins = require('jenkins')({
    baseUrl: `https://${username}:${password}@${loginHost}`,
    crumbIssuer: true
  })
  return jenkins
}


//	"xsjenkinsConfig.loginHost": "jenkins.365xs.cn",
// 	"xsjenkinsConfig.password": "1170286d18bb5bae6f9c1b6ed4318bc744",
// 	"xsjenkinsConfig.userName": "18257170967"
