import { http } from '../../http/index.js'

class WxMpAuth {
    //登录
    WxMpLogin(data) {
        return http.get("wechatUser.WxMpLogin", {
            authorCode: data.authorCode,
            deviceType: 3, //第三方平台
            componentAppId: data.componentAppId,
            appid: http.config.header.appId //商家小程序appid
        })
    }

    /**注册+用户头像和昵称
    如果是模拟头像不需要code;
    否则需要code登录取头像和昵称
    **/
    WxMpReg(data) {
        return http.post("wechatUser.WxMpReg", {
            name: data.name || '',
            avatarUrl: data.avatarUrl || '',
            encryptedData: data.encryptedData || '',
            iv: data.iv || '',
            isReg: true,
            openId: uni.getStorageSync("openId"),
            appId: data.componentAppId
        })
    }

    //用户绑定手机号--手机号码+验证码
    BindMobile(data) {
        return http.post("wechatUser.BindMobile", {
            // type:1登录，2注册，3绑定
            type: data.type || 3,
            mobile: data.mobile,
            code: data.code
        })
    }

    //更新用户信息:头像或昵称
    async ModifyUser(data) {
        let userId = uni.getStorageSync('userId');
        if (!userId) {
            let res = await this.getUserId();
            userId = res.data.id;
            uni.setStorageSync('userId', userId)
        }
        return http.post("ucmng.ModifyUser", {
            userId: userId,
            appId: data.appId,
            openId: uni.getStorageSync("openId"),
            "userName": data.nickName,
            "avatarUrl": data.avatarUrl
        })
    }

    //获取UserId
    getUserId() {
        return http.get("ucid4.userinfo")
    }

    //支付
    wxPayModel(data) {
        let resData = JSON.parse(data).QRAuthCode;
        resData = JSON.parse(resData);
        return new Promise((resolve, reject) => {
            wx.requestPayment({
                timeStamp: resData.timeStamp,
                nonceStr: resData.nonceStr,
                package: resData.package,
                signType: resData.signType,
                paySign: resData.paySign,
                success: function(res) {
                    resolve(res)
                },
                fail: function(res) {
                    reject(res)
                }
            })
        })
    }
}

export default WxMpAuth
