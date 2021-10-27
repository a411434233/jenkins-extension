import Request from './request'
import ConfigDomain from 'config.js'
import projectCfg from '../js/projectCfg'

const http = new Request();
console.log("projectCfg===>>", projectCfg);
let envConfig = process.env.NODE_ENV === 'development' ? ConfigDomain.dev : ConfigDomain.pro;

http.setConfig((config) => {
    /* 设置全局配置 */
    config.header.appId = projectCfg.appId
    config.header = {
        ...config.header
    }
    return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
http.validateStatus = (statusCode) => {
    return statusCode === 200
}

http.interceptor.request((config, cancel) => {
    /* 请求之前拦截器 */
    config.header = {
            ...config.header
        }
        //定制化头部+传参---------------------------------------------开始
    const isPxpApi = config.url.startsWith('pxpDomain');
    if (isPxpApi) {
        //定制化头部
        // config.header = {
        //         "content-Type": "application/x-www-form-urlencoded",
        //         'applets': 'true'
        //     }
        //定制化传参
        // Object.assign(config.data, {
        //         channelid: projectCfg.pxpCfg.channelid
        //     });
    }
    /**
     * @Author: dusj
     * @description: Tips提醒，如果调用外部服务的接口，对方添加白名单，并且token不要带过期
     */
    if (!isPxpApi) {
        const token = uni.getStorageSync('vuetoken');
        if (token) {
            config.header.Authorization = token ? "Bearer " + token : "Bearer";
        }
    }
    //定制化头部+传参---------------------------------------------结束

    let curService = config.url.split("/")[0];
    for (let key in envConfig) {
        var comKey = key.split('+');
        if (comKey.includes(curService)) {
            config.baseUrl = envConfig[key].domain;
            config.url = envConfig[key].repPrefix ? config.url.replace(curService, '') : config.url
        }
    }
    return config
})

http.interceptor.response((response) => {
    /* 请求之后拦截器，接口code非0统一提醒*/
    if (response.data.code || response.data.errcode) {
        uni.showToast({
            title: response.data.message || response.data.errmsg,
            icon: "none"
        });
    }
    return response
}, (response) => {
    /**
     * @Author: dusj
     * @description: 401重新请求接口,授权成功后，刷新当前页，会保留当前页面的参数
     * @param {*} response
     * @return {*}
     */
    if (response.statusCode == 401) {
        // let pages = getCurrentPages();
        // let pageItem = pages.pop();
        // uni.redirectTo({ url: pageItem.$page.fullPath });
    }

    return response
})

export {
    http
}
