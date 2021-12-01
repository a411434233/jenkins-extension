/**
 * build日志打印
 */
module.exports.getOutHtml = (html) => {
  return `  <style>
          .console-output{
            white-space: pre-wrap;
            word-wrap: break-word;
            margin: 0;
            line-height:1.4em
          }
      </style>
      <div class="console-output">${html}</div>
`
}

/**
 * jenkinsConfig
 * */
module.exports.jenkinsWeb = (jobConfig) => {
  return `
   <textarea id="app" cols="120" rows="50">${jobConfig}</textarea>
          <button id="save" onclick="add()">保存并更新</button>
          <script>
               const vscode = acquireVsCodeApi(); 
                document.getElementById('save').onclick =function (){
                  let data = document.getElementById('app').value
                  vscode.postMessage({ xml:data});
                }
          </script>
`
}
