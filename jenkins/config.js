const vscode = require('vscode');

module.exports = () => {
	let xsjenkinsConfig = vscode.workspace.getConfiguration('xsjenkinsConfig');
	let username = xsjenkinsConfig.get('userName');
	let loginHost = xsjenkinsConfig.get('loginHost');
	let password = xsjenkinsConfig.get('password');
	if (!username || !loginHost || !password) {
		vscode.window.showErrorMessage('jenkins配置有误');
		return [];
	}

	const jenkins = require('jenkins')({
		baseUrl: `https://${username}:${password}@${loginHost}`,
		crumbIssuer: true
	});
	return jenkins;
};
