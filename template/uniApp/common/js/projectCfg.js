 //deviceType = 3 第三方平台模板小程序，如果不是模板小程序该参数可不传
 const wechat = {
     appId: 'wx2b668f79f73bbb80', //模板小程序appid,暂时用这个
     componentAppId: 'wx0e306f700994101a', //模板appId
     clientId: 'wx_isv',
     deviceType: 3
 }
 const alipay = {
     appId: 'wx2b668f79f73bbb80', //模板小程序appid
     componentAppId: '2021001189659235', //模板appId
     deviceType: 3
 }
 const pxpCfg = {
     pxpSignCode: 'CB1B6B4D0E7C3F8AB0C649A88EE030F6',
     channelid: '1019',
     version: '1.0.0.0',
     platform: 'Applets',
     gumaAppId: '2018010301537963',
     gumaChannel: 'alipayappletspxpisv'
 }
 const mapConfig = {
     mapKey: '239ff4c4d4087d30e6aa0df477c61291'
 };

 class config {
     constructor() {
         /*  #ifdef  MP-WEIXIN  */
         Object.assign(this, wechat, pxpCfg, mapConfig);
         /*  #endif  */
         // #ifdef  MP-ALIPAY
         Object.assign(this, alipay, pxpCfg, mapConfig);
         // #endif
     }
 }
 export default new config();