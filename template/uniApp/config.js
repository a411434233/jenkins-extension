/**
 * @Author: dusj
 * @description: 兼容没有swagger的接口
 * @param {*}
 * @return {*}
 */
module.exports = {
    "dev": {
        //TODO:，了解module.config.js
        'isvuser+capuser': {
            domain: 'https://isvlp194.365xs.cn/'
        },
        'comuser+ucuser+ucmng+ucid4': {
            domain: 'https://id4lp194.365xs.cn/'
        },
        //没有swagger的接口
        'pxpDomain': {
            domain: 'http://saleappser.251.bolext.cn',
            repPrefix: true
        },
        'chatToolsAppkey': "cpj2xarlcm61n", //聊天key
    },
    // 线上
    "pro": {
        'isvuser+capuser': {
            domain: 'https://isv.shinesun.cn/isvuser'
        },
        'comuser+ucuser+ucmng+ucid4': {
            domain: 'https://id4.shinesun.cn/'
        },
        'pxpDomain': {
            domain: 'https://api.paixianpin.com',
            repPrefix: true
        },
        'chatToolsAppkey': "pgyu6atqp289u", //聊天key
    }
}