const vscode = require('vscode');
module.exports = function (context) {
	let xsjenkinsConfig = vscode.workspace.getConfiguration('xsjenkinsConfig');
	let username = xsjenkinsConfig.get('userName');
	let loginHost = xsjenkinsConfig.get('loginHost');
	let password = xsjenkinsConfig.get('password');
	console.log(username, xsjenkinsConfig);
	if (!username || !loginHost || !password) {
		vscode.window.showErrorMessage('jenkins配置有误');
		return;
	}

	const jenkins = require('jenkins')({
		baseUrl: `https://${username}:${password}@${loginHost}`,
		crumbIssuer: false
	});



	// jenkins.info(function (err, data) {
	// 	if (err) {
	// 		vscode.window.showErrorMessage(JSON.stringify(err));
	// 	}
	// 	console.log(data.jobs);
	// 	jenkins.job.get('TEST_YP_VUE分支',function(err,data){
	// 		console.log(data)
	// 	})
	// });
	console.log(1111);
};
