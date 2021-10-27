import { http } from '../http/index.js'
import h5Copy from './lib-utils/h5Copy.js'

const baseCommon = {};
// 请求公共服务图片
baseCommon.getBannerList = (url, code) => {
    let res = http.get(url, code)
    return new Promise(resolve => {
        resolve(res.data)
    })
};
// 复制
baseCommon.copyTxt = (text) => {
    // #ifdef H5
    h5Copy(text)
    baseCommon.toastTxt('复制成功')
    return
    // #endif
    uni.setClipboardData({
        data: text,
        success: () => {
            // #ifdef MP-ALIPAY
            uni.getClipboardData({
                    success: () => {
                        baseCommon.toastTxt('复制成功')
                    }
                })
                // #endif
        }
    })
};
//大图预览
baseCommon.perviewPic = (targetArr, current = 0) => {
    uni.previewImage({
        current: current,
        urls: targetArr
    })
};
//自定义设置页面标题：建议onReady中执行
baseCommon.setNavTitle = (title) => {
    uni.setNavigationBarTitle({
        title: title
    });
};
//自定义设置页面bar背景色：https://uniapp.dcloud.io/api/ui/navigationbar?id=shownavigationbarloading
baseCommon.setNavColor = (frontColor, bgColor) => {
    uni.setNavigationBarColor({
        frontColor: frontColor,
        backgroundColor: bgColor,
        animation: {
            duration: 400,
            timingFunc: 'easeIn'
        }
    });
};
//拼接路径+对象转请求参数
baseCommon.addQueryString = (pathUrl, params) => {
    let paramsData = '';
    Object.keys(params).forEach(function(key) {
        paramsData += key + '=' + encodeURIComponent(params[key]) + '&'
    })
    paramsData = paramsData.substring(0, paramsData.length - 1);
    pathUrl += pathUrl.indexOf('?') === -1 ? `?${paramsData}` : `&${paramsData}`;
    return pathUrl
};
//位数不足补0
baseCommon.toFixedTwoDeci = (value, num) => {
    if (!value) return '';
    let val = value.toFixed(num);
    return val;
};
//调用方法获取机型
baseCommon.getSysInfo = () => {
    var phone = uni.getSystemInfoSync();
    return phone.platform == 'ios'
};
//toast提醒
baseCommon.toastTxt = (title, icon = 'none', successFn) => {
    uni.showToast({
        title: title,
        icon: icon,
        success: () => {
            successFn()
        }
    })
}
export default baseCommon
