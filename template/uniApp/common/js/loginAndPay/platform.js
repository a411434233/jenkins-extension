import AlipayAuth from './aliAuth'
import WxMpAuth from './wechatAuth'
import projectCfg from 'projectCfg.js'

const aliPayAuth = new AlipayAuth();
const wechatAuth = new WxMpAuth();

let platEnv = [];

class PlatJudge {
    constructor() {
        this.appId = projectCfg.componentAppId;
        this.deviceType = projectCfg.deviceType;
        this.clientId = projectCfg.clientId;
        this.platFormIsAli = -1;

        //#ifdef MP-ALIPAY
        this.platFormIsAli = 0;
        //#endif

        //#ifdef MP-WEIXIN
        this.platFormIsAli = 1;
        //#endif

    }

    handleReg(isReal) {
        if (!this.platFormIsAli) {
            return this.aliAuthLogin()
        }
        if (this.platFormIsAli == 1) {
            return this.wxRegByUserInfo(isReal)
        }
    };

    handleLogin() {
        if (!this.platFormIsAli) {
            return this.aliAuthLogin()
        }
        if (this.platFormIsAli == 1) {
            return this.wxLogin()
        }
    };

    handleUpdateUserInfo() {
        if (!this.platFormIsAli) {
            return this.aliAuthLogin(true)
        }
        if (this.platFormIsAli == 1) {
            return this.wxUpUserInfo()
        }
    };
    //绑定手机号--明文
    hanleBindPhoneDirect(data) {
        if (this.platFormIsAli == 1) {
            return this.wxBindMobileByPhone(data)
        }
    };
    //绑定手机号--加密密钥
    hanleBindPhoneEncry(data) {
        if (!this.platFormIsAli) {
            return this.aliBindPhoneEncry()
        }
        if (this.platFormIsAli == 1) {
            return this.wxBindMobileByEncry(data)
        }
    };

    //支付
    async payModel(data) {
        if (!this.platFormIsAli) {
            return await aliPayAuth.alipayModel(data)
        }
        if (this.platFormIsAli == 1) {
            return await wechatAuth.wxPayModel(data)
        }
    };
    //获取用户id
    handleGetUserId() {
        return wechatAuth.getUserId()
    }
    async getReceiptAddress() {
        if (!this.platFormIsAli) {
            return await aliPayAuth.getAliReceiptAddress()
        }
        if (this.platFormIsAli == 1) {
            return await this.handleCommReceiptAddress()
        }
    }

    //支付宝端--------------------------------------------------------开始
    /*授权
    更新用户信息---upUserInfo为true
    */
    async aliAuthLogin(upUserInfo = false) {
        let code = await this.isAuthLogin()
        let tmpObj = {};
        if (code) {
            Object.assign(tmpObj, {
                code: code,
                appId: this.appId
            })
        }
        if (upUserInfo) {
            let userObj = await this.isGetUserInfo();
            Object.assign(tmpObj, userObj)
        }
        return aliPayAuth.aliUserAuthor(tmpObj);
    };
    //获取手机号，密钥
    async aliBindPhoneEncry() {
        let obj = await this.alipayGetPhoneEncry();
        return aliPayAuth.aliUserAuthor(obj);
    };
    //通过userId获取token
    getTokenByUserId() {
        return aliPayAuth.getTokenByUserId()
    };
    // 获取userId
    getUserId() {
        return wechatAuth.getUserId()
    };
    //支付宝端--------------------------------------------------------结束

    //微信端--------------------------------------------------------开始

    /**注册+用户头像和昵称
    如果是模拟头像不需要获取支付宝的code;
    否则需要code登录取头像和昵称
    **/
    async wxRegByUserInfo(isReal = true) {
        let tmpData = {};
        await this.isAuthLogin();
        if (isReal) {
            let userObj = await this.isGetUserInfo();
            Object.assign(tmpData, userObj)
        }
        Object.assign(tmpData, {
            componentAppId: this.appId
        })
        return wechatAuth.WxMpReg(tmpData);
    };
    //code登录
    async wxLogin() {
        let code = await this.isAuthLogin();
        let params = {
            authorCode: code,
            componentAppId: this.appId,
            deviceType: this.deviceType
        }
        return wechatAuth.WxMpLogin(params);
    };
    //绑定手机号--明文---手机号码+验证码
    wxBindMobileByPhone(data) {
        return wechatAuth.BindMobile(data)
    };
    /*
     已验证，isv模板微信端能通过密钥拿用户手机号，支付宝不行
     绑定手机号----加密数据绑定
    */
    async wxBindMobileByEncry(e) {
        let encryObj = await this.getPlatformEncry(e);
        Object.assign(encryObj, {
            appId: this.appId
        })
        return wechatAuth.WxMpReg(encryObj);
    };
    //更新用户信息
    async wxUpUserInfo() {
        await this.isAuthLogin();
        let userObj = await this.isGetUserInfo();
        Object.assign(userObj, {
            componentAppId: this.appId
        })
        return wechatAuth.ModifyUser(userObj)
    };

    //微信端--------------------------------------------------------结束

    //除支付宝外的通用获取收货地址
    handleCommReceiptAddress() {
        return new Promise((resolve, reject) => {
            uni.authorize({
                scope: 'scope.address',
                success() {
                    uni.chooseAddress({
                        success(res) {
                            if (res.errMsg == 'chooseAddress:ok') {
                                let tmpParams = {
                                    userName: res.userName,
                                    phone: res.telNumber,
                                    prov: res.provinceName,
                                    city: res.cityName,
                                    area: res.countyName,
                                    addressDetail: res.detailInfo
                                };
                                resolve(tmpParams)
                            }
                        }
                    })
                },
                fail() {
                    reject();
                }
            })
        })
    }

    //授权code----暂时用的是aliAuth
    // #ifndef H5
    //获取支付宝授权code
    isAuthLogin() {
        this.getPlatEnv();
        return new Promise((resolve, reject) => {
            uni.login({
                provider: platEnv[0],
                //#ifdef MP-ALIPAY
                scopes: 'auth_base',
                //#endif
                success: function(res) {
                    resolve(res.code);
                },
                fail: () => {
                    reject();
                }
            })
        })
    };
    //获取用户信息
    isGetUserInfo() {
        let that = this;
        return new Promise((resolve, reject) => {
            uni.getUserInfo({
                provider: platEnv[0],
                success: function(result) {
                    //如果用户没有设置头像，页面显示异常,模拟用户信息格式：用户：42890528
                    let userInfo = result.userInfo;
                    let isHaveAvatar = userInfo.avatarUrl.indexOf('undefined') == -1;
                    let randomNum = new Date().valueOf();
                    let obj = {
                        userName: userInfo.nickName ? userInfo.nickName : randomNum,
                        avatarUrl: isHaveAvatar ? userInfo.avatarUrl : ''
                    }
                    resolve(obj);
                },
                fail: err => {
                    reject(err);
                    that.errorToast();
                }
            })
        })
    };
    /*todo:待验证，isv模板不能通过密钥拿用户手机号（微信端已验证通过）
    获取用户手机号，通过支付宝密钥
    下面这种方式通过uni的通用方法获取手机号密钥
    */
    getPlatformEncry(e) {
        let that = this;
        return new Promise((resolve, reject) => {
            let detailObj = e.detail;
            if (detailObj.errMsg == 'getPhoneNumber:ok') {
                let phoneObj = {
                    iv: detailObj.iv,
                    encryptedData: detailObj.encryptedData,
                }
                resolve(phoneObj)
            } else {
                reject();
                that.errorToast();
            }
        })
    };
    // 支付宝小程序获取用户手机号
    async alipayGetPhoneEncry() {
        let that = this;
        let code = await this.isAuthLogin();
        return new Promise((resolve, reject) => {
            my.getPhoneNumber({
                success: (res) => {
                    let encryptedData = res.response.response;
                    if (!encryptedData) return;
                    Object.assign(encryptedData, code)
                    resolve(encryptedData)
                },
                fail: (err) => {
                    reject(err);
                    that.errorToast();
                },
            });
        })
    };
    // 微信小程序获取用户手机号---需先调用wx.login接口
    async wechatGetAuthorize(e) {
        await this.isAuthLogin();
        let encryptedData = e.detail;
        if (!encryptedData) return;
        return encryptedData
    }
    getPlatEnv() {
        uni.getProvider({
            service: 'oauth',
            success: function(res) {
                platEnv = res.provider
            }
        })
    };
    // #endif

    //获取用户信息或手机号用户拒绝时，强提醒
    errorToast() {
        uni.showToast({
            title: '为了您更好的服务体验，请在个人中心完成授权',
            icon: 'none'
        })
        return
    }

}
export default new PlatJudge()
