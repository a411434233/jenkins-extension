const MODULE_NAME = 'ai'
let ID4_CLIENT_ID = 'js_uniapp_frame';
const ID4_SCOPE = "comuser,ucuser,ucmng,ucid4,isvuser,capuser";

if (process.env.VUE_APP_ID4_CLIENT_ID) { ID4_CLIENT_ID = process.env.VUE_APP_ID4_CLIENT_ID }

const Compile = {
    "ID4_CLIENT_ID": ID4_CLIENT_ID,
    'CUR_MODULES': MODULE_NAME, // 当前模块的名称
    'IMPORT_MODULES': ['base', MODULE_NAME], // 依赖注入模块
    'OUTPUT_DIR': '../../publish-test/app/vue', // npm run build 打包生成的地址
    'DEV_CLIENT_URL': `../client.js?clientID=${ID4_CLIENT_ID}&scopes=${ID4_SCOPE}`,
    newApi: true
}

module.exports = Compile;