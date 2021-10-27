export default {
    'api.GetMerchantInfo': 'isvuser/api/UserCenter/GetMerchantInfo', //门店端店铺信息（首页+个人中心）
    'api.GetMerchantRecycleInfo': 'isvuser/api/Home/GetMerchantRecycleInfo', //门店端首页订单记录
    'api.GetNowSelfProductPrice': 'isvuser/api/Home/GetNowSelfProductPrice', //当前机型估价
    'api.capuser': 'capuser/api/Brand/query', //品牌列表查询






    // 公共服务
    'api.GetHomeBanner': 'comuser/api/Banner/GetBannerListByCode', //首页轮播
    "api.AliMpLogin": "ucuser/api/sys/SysAliMp/AliMpLogin", //支付宝登录
    'api.WxMpLogin': 'ucuser/api/sys/SysWxMp/WxMpLogin', //微信登录
    'api.UserAuthor': 'ucmng/api/AlipayMp', //获取userId，生成token,支付宝小程序
    "ucid4.userinfo": "ucid4/connect/userinfo", //获取UserId;

    // 非swagger的接口：如果同一域名下，多个服务，推荐加统一前缀
    'gumaApi.getcategoryList': 'gmDomain/product/getcategorylist', //回收种类
    'gumaApi.getBrandList': 'gmDomain/spu/brand/getlist', //获取品牌列表
    'pxpApi.getBrandList': 'pxpDomain/spu/brand/getlist', //获取品牌列表
    'pxpApi.getModelList': 'pxpDomain/spu/model/getlist', //获取机型列表
}