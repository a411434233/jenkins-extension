import AlipayAuth from './aliAuth'
import WxMpAuth from './wechatAuth'
import projectCfg from '../projectCfg.js'

const aliPayAuth = new AlipayAuth();
const wechatAuth = new WxMpAuth();

let platEnv = [];

class PlatJudge {
    constructor() {
        this.appId = projectCfg.wechat.componentAppId;
        this.deviceType = projectCfg.deviceType;
        this.clientId = projectCfg.clientId;
        this.platFormIsAli = false;

        //#ifdef MP-ALIPAY
        this.platFormIsAli = 0;
        //#endif

        //#ifdef MP-WEIXIN
        this.platFormIsAli = 1;
        //#endif

        // #ifdef MP-TOUTIAO
        this.platFormIsAli = 2;
        //#endif

    };
    /*原使用方式：new PlatJudge()
    platAuth.handleLogin().then()
    platAuth.handleUpdateUserInfo().then()
    通用的函数，根据不同端调接口,但是import名字唯一

    */
    //#ifdef MP-ALIPAY
    handleReg() {
        return this.aliAuthLogin()
    };
    //#endif

    //#ifdef MP-ALIPAY
    handleReg() {
        return this.wxRegByUserInfo()
    };
    //#endif

}


export default new PlatJudge()
