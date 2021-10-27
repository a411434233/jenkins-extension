// import globalCfg from '@global'

const globalCfg = require('@/modules/module.config')
const modulesContext = require.context('../modules/', true, /..\.js$/)

let API = {
  'api.OldLogin': 'webApi/sysuser/Login',
  'api.GetValidateCode': 'webApi/sysuser/GetValidateCode', // 验证码获取
  'api.GetConfig': '@ucuser/api/sys/ScanConfig/GetConfig', //获取微信二维码参数
  'api.Id4Login': 'Account/Login', //认证服务登陆
  'api.ScanAuth': '@ucuser/api/sys/ScanCallBack/AuthCallBack',//扫码登陆回调地址
  'api.GetProject': '@ucuser/api/sys/Client/GeProject', //获取客户端名称
  'api.smsValidate': '/AccountBO/GetValidate',

  'api.bannerreport.query': '@commng/api/report/BannerReport/Query',//测试报表
  'api.report.GetById': '@commng/api/report/ReportCfg/Reports/{id}',

  'api.GetMenuTree': '@ucmng/api/sysmng/MenuOper',
  'api.SyncMenu': `@ucmng/api/sysmng/MenuOper/BuildMenu`,
  'api.GetMenuTreeByUser': `@ucuser/api/sys/CurUser/Menu`,
  'api.UpdatePwd': `@ucuser/api/sys/CurUser/ChangePwd`, //修改密码 PUT
  'api.Login': `@ucuser/api/sys/CurUser/Login`, //用户登录 POST
  'api.getUserInfo': `@ucuser/api/sys/CurUser/Menu`,
  'api.GetBySelf':'@ucuser/api/sys/CurUser', //获取当前用户信息

  'api.ChangePwd': 'webApi/sysuser/ChangePwd',
  'api.UserQuery': '@ucuser/api/User/Query', //查询用户数据 POST
  'api.GetUserById': '@ucuser/api/User/GetById/{id}', //获取单个用户数据 GET
  'api.UserBindRole': '@ucuser/api/User/BindRole', //用户绑定角色 PUT
  'api.UserEdit': '@ucuser/apu/User/Edit', //修改用户数据 Put
}

// 遍历所有 映射 api
const chunks = modulesContext.keys().reduce((modules, key) => {
  // 获取环境依赖模块名称,只整合依赖的模块映射的 api
  globalCfg.IMPORT_MODULES.forEach(moduleName => {
    // 正则判断整合的映射api 是不是依赖模块下的
    var reg = new RegExp(`${moduleName}/\api\/[A-Za-z_-]*.js$`)
    const res = reg.test(key)
    if (res) {
      // 跟踪整合的映射文件
      API = {
        ...API,
        ...modulesContext(key).default
      }
    }
    return API
  })
  return API
}, {})

export default {
  ...chunks
}
