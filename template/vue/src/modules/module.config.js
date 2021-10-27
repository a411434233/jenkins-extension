const MODULE_NAME = 'moduleName'
let ID4_CLIENT_ID = 'js_cgmngvue'
const ID4_SCOPE = 'ucmng,ucuser,commng,cgmng'
if (process.env.VUE_APP_ID4_CLIENT_ID) { ID4_CLIENT_ID = process.env.VUE_APP_ID4_CLIENT_ID }

const Compile = {
  'ID4_CLIENT_ID': ID4_CLIENT_ID,
  'CUR_MODULES': MODULE_NAME, // 当前模块的名称
  'IMPORT_MODULES': ['base', MODULE_NAME], // 依赖注入模块
  'OUTPUT_DIR': './', // npm run build 打包生成的地址
  'DEV_CLIENT_URL': `../client.js?clientID=${ID4_CLIENT_ID}&scopes=${ID4_SCOPE}`
}

module.exports = Compile

