import http from 'xs-request'

function connect (src, append) {
            for (const key in src) {
                append[key] = src[key]
            }
            return append
        }
        let ucuserapisysAuthorLogin = () => {}
ucuserapisysAuthorLogin = (query, headers) => http.get('ucuser/api/sys/Author/Login', query, headers)
ucuserapisysAuthorLogin.url = 'ucuser/api/sys/Author/Login'
ucuserapisysAuthorLogin.type = 'get'
ucuserapisysAuthorLogin.get = (query, headers) => http.get('ucuser/api/sys/Author/Login', query, headers)
 ucuserapisysAuthorLogin.get.url = 'ucuser/api/sys/Author/Login'
ucuserapisysAuthorLogin.get.type = 'get'
let ucuserapisysAuthorReg = () => {}
ucuserapisysAuthorReg.post = (query, headers) => http.post('ucuser/api/sys/Author/Reg', query, headers)
 ucuserapisysAuthorReg.post.url = 'ucuser/api/sys/Author/Reg'
ucuserapisysAuthorReg.post.type = 'post'
let ucuserapisysAuthorBindMobile = () => {}
ucuserapisysAuthorBindMobile.post = (query, headers) => http.post('ucuser/api/sys/Author/BindMobile', query, headers)
 ucuserapisysAuthorBindMobile.post.url = 'ucuser/api/sys/Author/BindMobile'
ucuserapisysAuthorBindMobile.post.type = 'post'
let ucuserSdkSysAuthorRoleIds = () => {}
ucuserSdkSysAuthorRoleIds = (query, headers) => http.get('ucuser/SdkSys/Author/RoleIds/{operId}', query, headers)
ucuserSdkSysAuthorRoleIds.url = 'ucuser/SdkSys/Author/RoleIds/{operId}'
ucuserSdkSysAuthorRoleIds.type = 'get'
ucuserSdkSysAuthorRoleIds.get = (query, headers) => http.get('ucuser/SdkSys/Author/RoleIds/{operId}', query, headers)
 ucuserSdkSysAuthorRoleIds.get.url = 'ucuser/SdkSys/Author/RoleIds/{operId}'
ucuserSdkSysAuthorRoleIds.get.type = 'get'
let ucuserSdkSysAuthorRegApi = () => {}
ucuserSdkSysAuthorRegApi.post = (query, headers) => http.post('ucuser/SdkSys/Author/RegApi', query, headers)
 ucuserSdkSysAuthorRegApi.post.url = 'ucuser/SdkSys/Author/RegApi'
ucuserSdkSysAuthorRegApi.post.type = 'post'
let ucuserapisysClientGeProject = () => {}
ucuserapisysClientGeProject = (query, headers) => http.get('ucuser/api/sys/Client/GeProject', query, headers)
ucuserapisysClientGeProject.url = 'ucuser/api/sys/Client/GeProject'
ucuserapisysClientGeProject.type = 'get'
ucuserapisysClientGeProject.get = (query, headers) => http.get('ucuser/api/sys/Client/GeProject', query, headers)
 ucuserapisysClientGeProject.get.url = 'ucuser/api/sys/Client/GeProject'
ucuserapisysClientGeProject.get.type = 'get'
let ucuserapisysCurUser = () => {}
ucuserapisysCurUser = (query, headers) => http.get('ucuser/api/sys/CurUser', query, headers)
ucuserapisysCurUser.url = 'ucuser/api/sys/CurUser'
ucuserapisysCurUser.type = 'get'
ucuserapisysCurUser.get = (query, headers) => http.get('ucuser/api/sys/CurUser', query, headers)
 ucuserapisysCurUser.get.url = 'ucuser/api/sys/CurUser'
ucuserapisysCurUser.get.type = 'get'
let ucuserapisysCurUserMenu = () => {}
ucuserapisysCurUserMenu = (query, headers) => http.get('ucuser/api/sys/CurUser/Menu', query, headers)
ucuserapisysCurUserMenu.url = 'ucuser/api/sys/CurUser/Menu'
ucuserapisysCurUserMenu.type = 'get'
ucuserapisysCurUserMenu.get = (query, headers) => http.get('ucuser/api/sys/CurUser/Menu', query, headers)
 ucuserapisysCurUserMenu.get.url = 'ucuser/api/sys/CurUser/Menu'
ucuserapisysCurUserMenu.get.type = 'get'
let ucuserapisysCurUserInitMenu = () => {}
ucuserapisysCurUserInitMenu = (query, headers) => http.get('ucuser/api/sys/CurUser/InitMenu', query, headers)
ucuserapisysCurUserInitMenu.url = 'ucuser/api/sys/CurUser/InitMenu'
ucuserapisysCurUserInitMenu.type = 'get'
ucuserapisysCurUserInitMenu.get = (query, headers) => http.get('ucuser/api/sys/CurUser/InitMenu', query, headers)
 ucuserapisysCurUserInitMenu.get.url = 'ucuser/api/sys/CurUser/InitMenu'
ucuserapisysCurUserInitMenu.get.type = 'get'
let ucuserapisysCurUserChangePwd = () => {}
ucuserapisysCurUserChangePwd.put = (query, headers) => http.put('ucuser/api/sys/CurUser/ChangePwd', query, headers)
 ucuserapisysCurUserChangePwd.put.url = 'ucuser/api/sys/CurUser/ChangePwd'
ucuserapisysCurUserChangePwd.put.type = 'put'
let ucuserapisysCurUserLogin = () => {}
ucuserapisysCurUserLogin.post = (query, headers) => http.post('ucuser/api/sys/CurUser/Login', query, headers)
 ucuserapisysCurUserLogin.post.url = 'ucuser/api/sys/CurUser/Login'
ucuserapisysCurUserLogin.post.type = 'post'
let ucuserapisysOauthLoginByPhone = () => {}
ucuserapisysOauthLoginByPhone.post = (query, headers) => http.post('ucuser/api/sys/Oauth/LoginByPhone', query, headers)
 ucuserapisysOauthLoginByPhone.post.url = 'ucuser/api/sys/Oauth/LoginByPhone'
ucuserapisysOauthLoginByPhone.post.type = 'post'
let ucuserapisysOauthLogin = () => {}
ucuserapisysOauthLogin.post = (query, headers) => http.post('ucuser/api/sys/Oauth/Login', query, headers)
 ucuserapisysOauthLogin.post.url = 'ucuser/api/sys/Oauth/Login'
ucuserapisysOauthLogin.post.type = 'post'
let ucuserapisysOauthReg = () => {}
ucuserapisysOauthReg.post = (query, headers) => http.post('ucuser/api/sys/Oauth/Reg', query, headers)
 ucuserapisysOauthReg.post.url = 'ucuser/api/sys/Oauth/Reg'
ucuserapisysOauthReg.post.type = 'post'
let ucuserapisysOauthBindMobile = () => {}
ucuserapisysOauthBindMobile.post = (query, headers) => http.post('ucuser/api/sys/Oauth/BindMobile', query, headers)
 ucuserapisysOauthBindMobile.post.url = 'ucuser/api/sys/Oauth/BindMobile'
ucuserapisysOauthBindMobile.post.type = 'post'
let ucuserapisysScanCallBackAuthCallBack = () => {}
ucuserapisysScanCallBackAuthCallBack = (query, headers) => http.get('ucuser/api/sys/ScanCallBack/AuthCallBack', query, headers)
ucuserapisysScanCallBackAuthCallBack.url = 'ucuser/api/sys/ScanCallBack/AuthCallBack'
ucuserapisysScanCallBackAuthCallBack.type = 'get'
ucuserapisysScanCallBackAuthCallBack.get = (query, headers) => http.get('ucuser/api/sys/ScanCallBack/AuthCallBack', query, headers)
 ucuserapisysScanCallBackAuthCallBack.get.url = 'ucuser/api/sys/ScanCallBack/AuthCallBack'
ucuserapisysScanCallBackAuthCallBack.get.type = 'get'
let ucuserapisysScanConfigGetConfig = () => {}
ucuserapisysScanConfigGetConfig = (query, headers) => http.get('ucuser/api/sys/ScanConfig/GetConfig', query, headers)
ucuserapisysScanConfigGetConfig.url = 'ucuser/api/sys/ScanConfig/GetConfig'
ucuserapisysScanConfigGetConfig.type = 'get'
ucuserapisysScanConfigGetConfig.get = (query, headers) => http.get('ucuser/api/sys/ScanConfig/GetConfig', query, headers)
 ucuserapisysScanConfigGetConfig.get.url = 'ucuser/api/sys/ScanConfig/GetConfig'
ucuserapisysScanConfigGetConfig.get.type = 'get'
let ucuserapisysSysAliMpAliMpLogin = () => {}
ucuserapisysSysAliMpAliMpLogin = (query, headers) => http.get('ucuser/api/sys/SysAliMp/AliMpLogin', query, headers)
ucuserapisysSysAliMpAliMpLogin.url = 'ucuser/api/sys/SysAliMp/AliMpLogin'
ucuserapisysSysAliMpAliMpLogin.type = 'get'
ucuserapisysSysAliMpAliMpLogin.get = (query, headers) => http.get('ucuser/api/sys/SysAliMp/AliMpLogin', query, headers)
 ucuserapisysSysAliMpAliMpLogin.get.url = 'ucuser/api/sys/SysAliMp/AliMpLogin'
ucuserapisysSysAliMpAliMpLogin.get.type = 'get'
let ucuserapisysSysAliMpAliMpReg = () => {}
ucuserapisysSysAliMpAliMpReg.post = (query, headers) => http.post('ucuser/api/sys/SysAliMp/AliMpReg', query, headers)
 ucuserapisysSysAliMpAliMpReg.post.url = 'ucuser/api/sys/SysAliMp/AliMpReg'
ucuserapisysSysAliMpAliMpReg.post.type = 'post'
let ucuserapisysSysAliMpBindMobile = () => {}
ucuserapisysSysAliMpBindMobile.post = (query, headers) => http.post('ucuser/api/sys/SysAliMp/BindMobile', query, headers)
 ucuserapisysSysAliMpBindMobile.post.url = 'ucuser/api/sys/SysAliMp/BindMobile'
ucuserapisysSysAliMpBindMobile.post.type = 'post'
let ucuserapisysSysWxMpWxMpLogin = () => {}
ucuserapisysSysWxMpWxMpLogin = (query, headers) => http.get('ucuser/api/sys/SysWxMp/WxMpLogin', query, headers)
ucuserapisysSysWxMpWxMpLogin.url = 'ucuser/api/sys/SysWxMp/WxMpLogin'
ucuserapisysSysWxMpWxMpLogin.type = 'get'
ucuserapisysSysWxMpWxMpLogin.get = (query, headers) => http.get('ucuser/api/sys/SysWxMp/WxMpLogin', query, headers)
 ucuserapisysSysWxMpWxMpLogin.get.url = 'ucuser/api/sys/SysWxMp/WxMpLogin'
ucuserapisysSysWxMpWxMpLogin.get.type = 'get'
let ucuserapisysSysWxMpWxMpReg = () => {}
ucuserapisysSysWxMpWxMpReg.post = (query, headers) => http.post('ucuser/api/sys/SysWxMp/WxMpReg', query, headers)
 ucuserapisysSysWxMpWxMpReg.post.url = 'ucuser/api/sys/SysWxMp/WxMpReg'
ucuserapisysSysWxMpWxMpReg.post.type = 'post'
let ucuserapisysSysWxMpBindMobile = () => {}
ucuserapisysSysWxMpBindMobile.post = (query, headers) => http.post('ucuser/api/sys/SysWxMp/BindMobile', query, headers)
 ucuserapisysSysWxMpBindMobile.post.url = 'ucuser/api/sys/SysWxMp/BindMobile'
ucuserapisysSysWxMpBindMobile.post.type = 'post'
let ucuserapisysUserLoginByPhoneCode = () => {}
ucuserapisysUserLoginByPhoneCode.post = (query, headers) => http.post('ucuser/api/sys/User/LoginByPhoneCode', query, headers)
 ucuserapisysUserLoginByPhoneCode.post.url = 'ucuser/api/sys/User/LoginByPhoneCode'
ucuserapisysUserLoginByPhoneCode.post.type = 'post'
let ucuserapisysVerifyCodeGetVerifyCode = () => {}
ucuserapisysVerifyCodeGetVerifyCode.post = (query, headers) => http.post('ucuser/api/sys/VerifyCode/GetVerifyCode', query, headers)
 ucuserapisysVerifyCodeGetVerifyCode.post.url = 'ucuser/api/sys/VerifyCode/GetVerifyCode'
ucuserapisysVerifyCodeGetVerifyCode.post.type = 'post'
let ucuserapisysVerifyCodeGetVerifyCodeMac = () => {}
ucuserapisysVerifyCodeGetVerifyCodeMac.post = (query, headers) => http.post('ucuser/api/sys/VerifyCode/GetVerifyCodeMac', query, headers)
 ucuserapisysVerifyCodeGetVerifyCodeMac.post.url = 'ucuser/api/sys/VerifyCode/GetVerifyCodeMac'
ucuserapisysVerifyCodeGetVerifyCodeMac.post.type = 'post'
let ucuserapisysVerifyCodeVerifyCode = () => {}
ucuserapisysVerifyCodeVerifyCode.post = (query, headers) => http.post('ucuser/api/sys/VerifyCode/VerifyCode', query, headers)
 ucuserapisysVerifyCodeVerifyCode.post.url = 'ucuser/api/sys/VerifyCode/VerifyCode'
ucuserapisysVerifyCodeVerifyCode.post.type = 'post'
let commngapicommmngBannerQuery = () => {}
commngapicommmngBannerQuery.post = (query, headers) => http.post('commng/api/commmng/Banner/Query', query, headers)
 commngapicommmngBannerQuery.post.url = 'commng/api/commmng/Banner/Query'
commngapicommmngBannerQuery.post.type = 'post'
let commngapicommmngBanner = () => {}
commngapicommmngBanner.post = (query, headers) => http.post('commng/api/commmng/Banner', query, headers)
 commngapicommmngBanner.post.url = 'commng/api/commmng/Banner'
commngapicommmngBanner.post.type = 'post'
commngapicommmngBanner.delete = (query, headers) => http.delete('commng/api/commmng/Banner', query, headers)
 commngapicommmngBanner.delete.url = 'commng/api/commmng/Banner'
commngapicommmngBanner.delete.type = 'delete'
let commngapireportBannerReportQuery = () => {}
commngapireportBannerReportQuery.post = (query, headers) => http.post('commng/api/report/BannerReport/Query', query, headers)
 commngapireportBannerReportQuery.post.url = 'commng/api/report/BannerReport/Query'
commngapireportBannerReportQuery.post.type = 'post'
let commngapicommmngContentQuery = () => {}
commngapicommmngContentQuery.post = (query, headers) => http.post('commng/api/commmng/Content/Query', query, headers)
 commngapicommmngContentQuery.post.url = 'commng/api/commmng/Content/Query'
commngapicommmngContentQuery.post.type = 'post'
let commngapicommmngContent = () => {}
commngapicommmngContent.post = (query, headers) => http.post('commng/api/commmng/Content', query, headers)
 commngapicommmngContent.post.url = 'commng/api/commmng/Content'
commngapicommmngContent.post.type = 'post'
let commngapicommmngContentQuerySubSystem = () => {}
commngapicommmngContentQuerySubSystem.post = (query, headers) => http.post('commng/api/commmng/Content/QuerySubSystem', query, headers)
 commngapicommmngContentQuerySubSystem.post.url = 'commng/api/commmng/Content/QuerySubSystem'
commngapicommmngContentQuerySubSystem.post.type = 'post'
let commngapicommmngGetArsInfoGetArea = () => {}
commngapicommmngGetArsInfoGetArea = (query, headers) => http.get('commng/api/commmng/GetArsInfo/GetArea', query, headers)
commngapicommmngGetArsInfoGetArea.url = 'commng/api/commmng/GetArsInfo/GetArea'
commngapicommmngGetArsInfoGetArea.type = 'get'
commngapicommmngGetArsInfoGetArea.get = (query, headers) => http.get('commng/api/commmng/GetArsInfo/GetArea', query, headers)
 commngapicommmngGetArsInfoGetArea.get.url = 'commng/api/commmng/GetArsInfo/GetArea'
commngapicommmngGetArsInfoGetArea.get.type = 'get'
let commngapicommmngGetArsInfoGetArsInfoDic = () => {}
commngapicommmngGetArsInfoGetArsInfoDic = (query, headers) => http.get('commng/api/commmng/GetArsInfo/GetArsInfoDic', query, headers)
commngapicommmngGetArsInfoGetArsInfoDic.url = 'commng/api/commmng/GetArsInfo/GetArsInfoDic'
commngapicommmngGetArsInfoGetArsInfoDic.type = 'get'
commngapicommmngGetArsInfoGetArsInfoDic.get = (query, headers) => http.get('commng/api/commmng/GetArsInfo/GetArsInfoDic', query, headers)
 commngapicommmngGetArsInfoGetArsInfoDic.get.url = 'commng/api/commmng/GetArsInfo/GetArsInfoDic'
commngapicommmngGetArsInfoGetArsInfoDic.get.type = 'get'
let commngapicommmngImageUploadPhoneImage = () => {}
commngapicommmngImageUploadPhoneImage.post = (query, headers) => http.post('commng/api/commmng/Image/UploadPhoneImage', query, headers)
 commngapicommmngImageUploadPhoneImage.post.url = 'commng/api/commmng/Image/UploadPhoneImage'
commngapicommmngImageUploadPhoneImage.post.type = 'post'
let commngapicommmngInvitateQuery = () => {}
commngapicommmngInvitateQuery.post = (query, headers) => http.post('commng/api/commmng/Invitate/Query', query, headers)
 commngapicommmngInvitateQuery.post.url = 'commng/api/commmng/Invitate/Query'
commngapicommmngInvitateQuery.post.type = 'post'
let commngapicommmngInvitate = () => {}
commngapicommmngInvitate.post = (query, headers) => http.post('commng/api/commmng/Invitate', query, headers)
 commngapicommmngInvitate.post.url = 'commng/api/commmng/Invitate'
commngapicommmngInvitate.post.type = 'post'
commngapicommmngInvitate.delete = (query, headers) => http.delete('commng/api/commmng/Invitate', query, headers)
 commngapicommmngInvitate.delete.url = 'commng/api/commmng/Invitate'
commngapicommmngInvitate.delete.type = 'delete'
let commngapicommmngNotificationQuery = () => {}
commngapicommmngNotificationQuery.post = (query, headers) => http.post('commng/api/commmng/Notification/Query', query, headers)
 commngapicommmngNotificationQuery.post.url = 'commng/api/commmng/Notification/Query'
commngapicommmngNotificationQuery.post.type = 'post'
let commngapicommmngNotification = () => {}
commngapicommmngNotification.post = (query, headers) => http.post('commng/api/commmng/Notification', query, headers)
 commngapicommmngNotification.post.url = 'commng/api/commmng/Notification'
commngapicommmngNotification.post.type = 'post'
let commngapiSysMngOpenAppQuery = () => {}
commngapiSysMngOpenAppQuery.post = (query, headers) => http.post('commng/api/SysMng/OpenApp/Query', query, headers)
 commngapiSysMngOpenAppQuery.post.url = 'commng/api/SysMng/OpenApp/Query'
commngapiSysMngOpenAppQuery.post.type = 'post'
let commngapiSysMngOpenApp = () => {}
commngapiSysMngOpenApp = (query, headers) => http.get('commng/api/SysMng/OpenApp/{id}', query, headers)
commngapiSysMngOpenApp.url = 'commng/api/SysMng/OpenApp/{id}'
commngapiSysMngOpenApp.type = 'get'
commngapiSysMngOpenApp.get = (query, headers) => http.get('commng/api/SysMng/OpenApp/{id}', query, headers)
 commngapiSysMngOpenApp.get.url = 'commng/api/SysMng/OpenApp/{id}'
commngapiSysMngOpenApp.get.type = 'get'
commngapiSysMngOpenApp.put = (query, headers) => http.put('commng/api/SysMng/OpenApp/{id}', query, headers)
 commngapiSysMngOpenApp.put.url = 'commng/api/SysMng/OpenApp/{id}'
commngapiSysMngOpenApp.put.type = 'put'
let commngapiSysMngOpenAppAdd = () => {}
commngapiSysMngOpenAppAdd.post = (query, headers) => http.post('commng/api/SysMng/OpenApp/Add', query, headers)
 commngapiSysMngOpenAppAdd.post.url = 'commng/api/SysMng/OpenApp/Add'
commngapiSysMngOpenAppAdd.post.type = 'post'
let commngUserCurOssConfig = () => {}
commngUserCurOssConfig = (query, headers) => http.get('commng/UserCur/Oss/Config/{dir}', query, headers)
commngUserCurOssConfig.url = 'commng/UserCur/Oss/Config/{dir}'
commngUserCurOssConfig.type = 'get'
commngUserCurOssConfig.get = (query, headers) => http.get('commng/UserCur/Oss/Config/{dir}', query, headers)
 commngUserCurOssConfig.get.url = 'commng/UserCur/Oss/Config/{dir}'
commngUserCurOssConfig.get.type = 'get'
let commngapicommmngPhoneSegQueryPhoneSeg = () => {}
commngapicommmngPhoneSegQueryPhoneSeg.post = (query, headers) => http.post('commng/api/commmng/PhoneSeg/QueryPhoneSeg', query, headers)
 commngapicommmngPhoneSegQueryPhoneSeg.post.url = 'commng/api/commmng/PhoneSeg/QueryPhoneSeg'
commngapicommmngPhoneSegQueryPhoneSeg.post.type = 'post'
let commngapicommmngPhoneSegAddPhoneSeg = () => {}
commngapicommmngPhoneSegAddPhoneSeg.post = (query, headers) => http.post('commng/api/commmng/PhoneSeg/AddPhoneSeg', query, headers)
 commngapicommmngPhoneSegAddPhoneSeg.post.url = 'commng/api/commmng/PhoneSeg/AddPhoneSeg'
commngapicommmngPhoneSegAddPhoneSeg.post.type = 'post'
let commngapicommmngPhoneSegBatchPhoneSeg = () => {}
commngapicommmngPhoneSegBatchPhoneSeg.post = (query, headers) => http.post('commng/api/commmng/PhoneSeg/BatchPhoneSeg', query, headers)
 commngapicommmngPhoneSegBatchPhoneSeg.post.url = 'commng/api/commmng/PhoneSeg/BatchPhoneSeg'
commngapicommmngPhoneSegBatchPhoneSeg.post.type = 'post'
let commngapicommmngPhoneSeg = () => {}
commngapicommmngPhoneSeg = (query, headers) => http.get('commng/api/commmng/PhoneSeg/{id}', query, headers)
commngapicommmngPhoneSeg.url = 'commng/api/commmng/PhoneSeg/{id}'
commngapicommmngPhoneSeg.type = 'get'
commngapicommmngPhoneSeg.get = (query, headers) => http.get('commng/api/commmng/PhoneSeg/{id}', query, headers)
 commngapicommmngPhoneSeg.get.url = 'commng/api/commmng/PhoneSeg/{id}'
commngapicommmngPhoneSeg.get.type = 'get'
commngapicommmngPhoneSeg.put = (query, headers) => http.put('commng/api/commmng/PhoneSeg/{number}', query, headers)
 commngapicommmngPhoneSeg.put.url = 'commng/api/commmng/PhoneSeg/{number}'
commngapicommmngPhoneSeg.put.type = 'put'
let commngapicommmngReportQuery = () => {}
commngapicommmngReportQuery.post = (query, headers) => http.post('commng/api/commmng/Report/Query', query, headers)
 commngapicommmngReportQuery.post.url = 'commng/api/commmng/Report/Query'
commngapicommmngReportQuery.post.type = 'post'
let commngapicommmngReportBatchHandled = () => {}
commngapicommmngReportBatchHandled.post = (query, headers) => http.post('commng/api/commmng/Report/BatchHandled', query, headers)
 commngapicommmngReportBatchHandled.post.url = 'commng/api/commmng/Report/BatchHandled'
commngapicommmngReportBatchHandled.post.type = 'post'
let commngapicommmngReport = () => {}
commngapicommmngReport.put = (query, headers) => http.put('commng/api/commmng/Report', query, headers)
 commngapicommmngReport.put.url = 'commng/api/commmng/Report'
commngapicommmngReport.put.type = 'put'
let commngapireportReportCfgQuery = () => {}
commngapireportReportCfgQuery.post = (query, headers) => http.post('commng/api/report/ReportCfg/Query', query, headers)
 commngapireportReportCfgQuery.post.url = 'commng/api/report/ReportCfg/Query'
commngapireportReportCfgQuery.post.type = 'post'
let commngapireportReportCfgUserReports = () => {}
commngapireportReportCfgUserReports.post = (query, headers) => http.post('commng/api/report/ReportCfg/UserReports', query, headers)
 commngapireportReportCfgUserReports.post.url = 'commng/api/report/ReportCfg/UserReports'
commngapireportReportCfgUserReports.post.type = 'post'
let commngapireportReportCfgReports = () => {}
commngapireportReportCfgReports = (query, headers) => http.get('commng/api/report/ReportCfg/Reports/{id}', query, headers)
commngapireportReportCfgReports.url = 'commng/api/report/ReportCfg/Reports/{id}'
commngapireportReportCfgReports.type = 'get'
commngapireportReportCfgReports.get = (query, headers) => http.get('commng/api/report/ReportCfg/Reports/{id}', query, headers)
 commngapireportReportCfgReports.get.url = 'commng/api/report/ReportCfg/Reports/{id}'
commngapireportReportCfgReports.get.type = 'get'
let commngapireportReportCfgGetModuleList = () => {}
commngapireportReportCfgGetModuleList = (query, headers) => http.get('commng/api/report/ReportCfg/GetModuleList', query, headers)
commngapireportReportCfgGetModuleList.url = 'commng/api/report/ReportCfg/GetModuleList'
commngapireportReportCfgGetModuleList.type = 'get'
commngapireportReportCfgGetModuleList.get = (query, headers) => http.get('commng/api/report/ReportCfg/GetModuleList', query, headers)
 commngapireportReportCfgGetModuleList.get.url = 'commng/api/report/ReportCfg/GetModuleList'
commngapireportReportCfgGetModuleList.get.type = 'get'
let commngapireportReportCfg = () => {}
commngapireportReportCfg.post = (query, headers) => http.post('commng/api/report/ReportCfg', query, headers)
 commngapireportReportCfg.post.url = 'commng/api/report/ReportCfg'
commngapireportReportCfg.post.type = 'post'
commngapireportReportCfg.put = (query, headers) => http.put('commng/api/report/ReportCfg', query, headers)
 commngapireportReportCfg.put.url = 'commng/api/report/ReportCfg'
commngapireportReportCfg.put.type = 'put'
commngapireportReportCfg.delete = (query, headers) => http.delete('commng/api/report/ReportCfg/{id}', query, headers)
 commngapireportReportCfg.delete.url = 'commng/api/report/ReportCfg/{id}'
commngapireportReportCfg.delete.type = 'delete'
let commngapiSubscribeGetTemplateBySceneId = () => {}
commngapiSubscribeGetTemplateBySceneId = (query, headers) => http.get('commng/api/Subscribe/GetTemplateBySceneId', query, headers)
commngapiSubscribeGetTemplateBySceneId.url = 'commng/api/Subscribe/GetTemplateBySceneId'
commngapiSubscribeGetTemplateBySceneId.type = 'get'
commngapiSubscribeGetTemplateBySceneId.get = (query, headers) => http.get('commng/api/Subscribe/GetTemplateBySceneId', query, headers)
 commngapiSubscribeGetTemplateBySceneId.get.url = 'commng/api/Subscribe/GetTemplateBySceneId'
commngapiSubscribeGetTemplateBySceneId.get.type = 'get'
let commngapicommmngVerifyCodeQuery = () => {}
commngapicommmngVerifyCodeQuery.post = (query, headers) => http.post('commng/api/commmng/VerifyCode/Query', query, headers)
 commngapicommmngVerifyCodeQuery.post.url = 'commng/api/commmng/VerifyCode/Query'
commngapicommmngVerifyCodeQuery.post.type = 'post'
let ypmngapiActivityQuery = () => {}
ypmngapiActivityQuery.post = (query, headers) => http.post('ypmng/api/Activity/Query', query, headers)
 ypmngapiActivityQuery.post.url = 'ypmng/api/Activity/Query'
ypmngapiActivityQuery.post.type = 'post'
let ypmngapiActivity = () => {}
ypmngapiActivity = (query, headers) => http.get('ypmng/api/Activity/{id}', query, headers)
ypmngapiActivity.url = 'ypmng/api/Activity/{id}'
ypmngapiActivity.type = 'get'
ypmngapiActivity.get = (query, headers) => http.get('ypmng/api/Activity/{id}', query, headers)
 ypmngapiActivity.get.url = 'ypmng/api/Activity/{id}'
ypmngapiActivity.get.type = 'get'
ypmngapiActivity.put = (query, headers) => http.put('ypmng/api/Activity/{id}', query, headers)
 ypmngapiActivity.put.url = 'ypmng/api/Activity/{id}'
ypmngapiActivity.put.type = 'put'
ypmngapiActivity.delete = (query, headers) => http.delete('ypmng/api/Activity/{id}', query, headers)
 ypmngapiActivity.delete.url = 'ypmng/api/Activity/{id}'
ypmngapiActivity.delete.type = 'delete'
ypmngapiActivity.post = (query, headers) => http.post('ypmng/api/Activity', query, headers)
 ypmngapiActivity.post.url = 'ypmng/api/Activity'
ypmngapiActivity.post.type = 'post'
let ypmngapiActivityBatchDelete = () => {}
ypmngapiActivityBatchDelete.put = (query, headers) => http.put('ypmng/api/Activity/BatchDelete', query, headers)
 ypmngapiActivityBatchDelete.put.url = 'ypmng/api/Activity/BatchDelete'
ypmngapiActivityBatchDelete.put.type = 'put'
let ypmngapiActivityBatchUpdateStatus = () => {}
ypmngapiActivityBatchUpdateStatus.put = (query, headers) => http.put('ypmng/api/Activity/BatchUpdateStatus', query, headers)
 ypmngapiActivityBatchUpdateStatus.put.url = 'ypmng/api/Activity/BatchUpdateStatus'
ypmngapiActivityBatchUpdateStatus.put.type = 'put'
let ypmngapiActivityActivityDic = () => {}
ypmngapiActivityActivityDic = (query, headers) => http.get('ypmng/api/Activity/ActivityDic', query, headers)
ypmngapiActivityActivityDic.url = 'ypmng/api/Activity/ActivityDic'
ypmngapiActivityActivityDic.type = 'get'
ypmngapiActivityActivityDic.get = (query, headers) => http.get('ypmng/api/Activity/ActivityDic', query, headers)
 ypmngapiActivityActivityDic.get.url = 'ypmng/api/Activity/ActivityDic'
ypmngapiActivityActivityDic.get.type = 'get'
let ypmngapiActivityProdQuery = () => {}
ypmngapiActivityProdQuery.post = (query, headers) => http.post('ypmng/api/ActivityProd/Query', query, headers)
 ypmngapiActivityProdQuery.post.url = 'ypmng/api/ActivityProd/Query'
ypmngapiActivityProdQuery.post.type = 'post'
let ypmngapiActivityProd = () => {}
ypmngapiActivityProd = (query, headers) => http.get('ypmng/api/ActivityProd/{id}', query, headers)
ypmngapiActivityProd.url = 'ypmng/api/ActivityProd/{id}'
ypmngapiActivityProd.type = 'get'
ypmngapiActivityProd.get = (query, headers) => http.get('ypmng/api/ActivityProd/{id}', query, headers)
 ypmngapiActivityProd.get.url = 'ypmng/api/ActivityProd/{id}'
ypmngapiActivityProd.get.type = 'get'
ypmngapiActivityProd.put = (query, headers) => http.put('ypmng/api/ActivityProd/{id}', query, headers)
 ypmngapiActivityProd.put.url = 'ypmng/api/ActivityProd/{id}'
ypmngapiActivityProd.put.type = 'put'
ypmngapiActivityProd.delete = (query, headers) => http.delete('ypmng/api/ActivityProd/{id}', query, headers)
 ypmngapiActivityProd.delete.url = 'ypmng/api/ActivityProd/{id}'
ypmngapiActivityProd.delete.type = 'delete'
ypmngapiActivityProd.post = (query, headers) => http.post('ypmng/api/ActivityProd', query, headers)
 ypmngapiActivityProd.post.url = 'ypmng/api/ActivityProd'
ypmngapiActivityProd.post.type = 'post'
let ypmngapiActivityProdBatchDelete = () => {}
ypmngapiActivityProdBatchDelete.put = (query, headers) => http.put('ypmng/api/ActivityProd/BatchDelete', query, headers)
 ypmngapiActivityProdBatchDelete.put.url = 'ypmng/api/ActivityProd/BatchDelete'
ypmngapiActivityProdBatchDelete.put.type = 'put'
let ypmngapiActivityRecordQuery = () => {}
ypmngapiActivityRecordQuery.post = (query, headers) => http.post('ypmng/api/ActivityRecord/Query', query, headers)
 ypmngapiActivityRecordQuery.post.url = 'ypmng/api/ActivityRecord/Query'
ypmngapiActivityRecordQuery.post.type = 'post'
let ypmngapiAttributesQuery = () => {}
ypmngapiAttributesQuery.post = (query, headers) => http.post('ypmng/api/Attributes/Query', query, headers)
 ypmngapiAttributesQuery.post.url = 'ypmng/api/Attributes/Query'
ypmngapiAttributesQuery.post.type = 'post'
let ypmngapiAttributes = () => {}
ypmngapiAttributes = (query, headers) => http.get('ypmng/api/Attributes/{id}', query, headers)
ypmngapiAttributes.url = 'ypmng/api/Attributes/{id}'
ypmngapiAttributes.type = 'get'
ypmngapiAttributes.get = (query, headers) => http.get('ypmng/api/Attributes/{id}', query, headers)
 ypmngapiAttributes.get.url = 'ypmng/api/Attributes/{id}'
ypmngapiAttributes.get.type = 'get'
ypmngapiAttributes.put = (query, headers) => http.put('ypmng/api/Attributes/{id}', query, headers)
 ypmngapiAttributes.put.url = 'ypmng/api/Attributes/{id}'
ypmngapiAttributes.put.type = 'put'
ypmngapiAttributes.delete = (query, headers) => http.delete('ypmng/api/Attributes/{id}', query, headers)
 ypmngapiAttributes.delete.url = 'ypmng/api/Attributes/{id}'
ypmngapiAttributes.delete.type = 'delete'
ypmngapiAttributes.post = (query, headers) => http.post('ypmng/api/Attributes', query, headers)
 ypmngapiAttributes.post.url = 'ypmng/api/Attributes'
ypmngapiAttributes.post.type = 'post'
let ypmngapiAttributesBatchDelete = () => {}
ypmngapiAttributesBatchDelete.put = (query, headers) => http.put('ypmng/api/Attributes/BatchDelete', query, headers)
 ypmngapiAttributesBatchDelete.put.url = 'ypmng/api/Attributes/BatchDelete'
ypmngapiAttributesBatchDelete.put.type = 'put'
let ypmngapiAttrSpecsQuery = () => {}
ypmngapiAttrSpecsQuery.post = (query, headers) => http.post('ypmng/api/AttrSpecs/Query', query, headers)
 ypmngapiAttrSpecsQuery.post.url = 'ypmng/api/AttrSpecs/Query'
ypmngapiAttrSpecsQuery.post.type = 'post'
let ypmngapiAttrSpecs = () => {}
ypmngapiAttrSpecs = (query, headers) => http.get('ypmng/api/AttrSpecs/{id}', query, headers)
ypmngapiAttrSpecs.url = 'ypmng/api/AttrSpecs/{id}'
ypmngapiAttrSpecs.type = 'get'
ypmngapiAttrSpecs.get = (query, headers) => http.get('ypmng/api/AttrSpecs/{id}', query, headers)
 ypmngapiAttrSpecs.get.url = 'ypmng/api/AttrSpecs/{id}'
ypmngapiAttrSpecs.get.type = 'get'
ypmngapiAttrSpecs.put = (query, headers) => http.put('ypmng/api/AttrSpecs/{id}', query, headers)
 ypmngapiAttrSpecs.put.url = 'ypmng/api/AttrSpecs/{id}'
ypmngapiAttrSpecs.put.type = 'put'
let ypmngapiAttrSpecsAttrSpecsSel = () => {}
ypmngapiAttrSpecsAttrSpecsSel = (query, headers) => http.get('ypmng/api/AttrSpecs/AttrSpecsSel', query, headers)
ypmngapiAttrSpecsAttrSpecsSel.url = 'ypmng/api/AttrSpecs/AttrSpecsSel'
ypmngapiAttrSpecsAttrSpecsSel.type = 'get'
ypmngapiAttrSpecsAttrSpecsSel.get = (query, headers) => http.get('ypmng/api/AttrSpecs/AttrSpecsSel', query, headers)
 ypmngapiAttrSpecsAttrSpecsSel.get.url = 'ypmng/api/AttrSpecs/AttrSpecsSel'
ypmngapiAttrSpecsAttrSpecsSel.get.type = 'get'
let ypmngapiAttrSpecsBatchPost = () => {}
ypmngapiAttrSpecsBatchPost.post = (query, headers) => http.post('ypmng/api/AttrSpecs/BatchPost', query, headers)
 ypmngapiAttrSpecsBatchPost.post.url = 'ypmng/api/AttrSpecs/BatchPost'
ypmngapiAttrSpecsBatchPost.post.type = 'post'
ypmngapiAttrSpecs.post = (query, headers) => http.post('ypmng/api/AttrSpecs', query, headers)
 ypmngapiAttrSpecs.post.url = 'ypmng/api/AttrSpecs'
ypmngapiAttrSpecs.post.type = 'post'
let ypmngapiAttrSpecsBatchUpdate = () => {}
ypmngapiAttrSpecsBatchUpdate.put = (query, headers) => http.put('ypmng/api/AttrSpecs/BatchUpdate', query, headers)
 ypmngapiAttrSpecsBatchUpdate.put.url = 'ypmng/api/AttrSpecs/BatchUpdate'
ypmngapiAttrSpecsBatchUpdate.put.type = 'put'
let ypmngapiAttrSpecsBatchDelete = () => {}
ypmngapiAttrSpecsBatchDelete.put = (query, headers) => http.put('ypmng/api/AttrSpecs/BatchDelete', query, headers)
 ypmngapiAttrSpecsBatchDelete.put.url = 'ypmng/api/AttrSpecs/BatchDelete'
ypmngapiAttrSpecsBatchDelete.put.type = 'put'
let ypmngapiBrandQuery = () => {}
ypmngapiBrandQuery.post = (query, headers) => http.post('ypmng/api/Brand/Query', query, headers)
 ypmngapiBrandQuery.post.url = 'ypmng/api/Brand/Query'
ypmngapiBrandQuery.post.type = 'post'
let ypmngapiBrand = () => {}
ypmngapiBrand = (query, headers) => http.get('ypmng/api/Brand/{id}', query, headers)
ypmngapiBrand.url = 'ypmng/api/Brand/{id}'
ypmngapiBrand.type = 'get'
ypmngapiBrand.get = (query, headers) => http.get('ypmng/api/Brand/{id}', query, headers)
 ypmngapiBrand.get.url = 'ypmng/api/Brand/{id}'
ypmngapiBrand.get.type = 'get'
ypmngapiBrand.put = (query, headers) => http.put('ypmng/api/Brand/{id}', query, headers)
 ypmngapiBrand.put.url = 'ypmng/api/Brand/{id}'
ypmngapiBrand.put.type = 'put'
ypmngapiBrand.delete = (query, headers) => http.delete('ypmng/api/Brand/{id}', query, headers)
 ypmngapiBrand.delete.url = 'ypmng/api/Brand/{id}'
ypmngapiBrand.delete.type = 'delete'
ypmngapiBrand.post = (query, headers) => http.post('ypmng/api/Brand', query, headers)
 ypmngapiBrand.post.url = 'ypmng/api/Brand'
ypmngapiBrand.post.type = 'post'
let ypmngapiBrandBatchDelete = () => {}
ypmngapiBrandBatchDelete.put = (query, headers) => http.put('ypmng/api/Brand/BatchDelete', query, headers)
 ypmngapiBrandBatchDelete.put.url = 'ypmng/api/Brand/BatchDelete'
ypmngapiBrandBatchDelete.put.type = 'put'
let ypmngapiBrandBrandDic = () => {}
ypmngapiBrandBrandDic = (query, headers) => http.get('ypmng/api/Brand/BrandDic', query, headers)
ypmngapiBrandBrandDic.url = 'ypmng/api/Brand/BrandDic'
ypmngapiBrandBrandDic.type = 'get'
ypmngapiBrandBrandDic.get = (query, headers) => http.get('ypmng/api/Brand/BrandDic', query, headers)
 ypmngapiBrandBrandDic.get.url = 'ypmng/api/Brand/BrandDic'
ypmngapiBrandBrandDic.get.type = 'get'
let ypmngapiBrandBrandModelInfo = () => {}
ypmngapiBrandBrandModelInfo = (query, headers) => http.get('ypmng/api/Brand/BrandModelInfo', query, headers)
ypmngapiBrandBrandModelInfo.url = 'ypmng/api/Brand/BrandModelInfo'
ypmngapiBrandBrandModelInfo.type = 'get'
ypmngapiBrandBrandModelInfo.get = (query, headers) => http.get('ypmng/api/Brand/BrandModelInfo', query, headers)
 ypmngapiBrandBrandModelInfo.get.url = 'ypmng/api/Brand/BrandModelInfo'
ypmngapiBrandBrandModelInfo.get.type = 'get'
let ypmngapiCategoryQuery = () => {}
ypmngapiCategoryQuery.post = (query, headers) => http.post('ypmng/api/Category/Query', query, headers)
 ypmngapiCategoryQuery.post.url = 'ypmng/api/Category/Query'
ypmngapiCategoryQuery.post.type = 'post'
let ypmngapiCategory = () => {}
ypmngapiCategory = (query, headers) => http.get('ypmng/api/Category/{id}', query, headers)
ypmngapiCategory.url = 'ypmng/api/Category/{id}'
ypmngapiCategory.type = 'get'
ypmngapiCategory.get = (query, headers) => http.get('ypmng/api/Category/{id}', query, headers)
 ypmngapiCategory.get.url = 'ypmng/api/Category/{id}'
ypmngapiCategory.get.type = 'get'
ypmngapiCategory.put = (query, headers) => http.put('ypmng/api/Category/{id}', query, headers)
 ypmngapiCategory.put.url = 'ypmng/api/Category/{id}'
ypmngapiCategory.put.type = 'put'
ypmngapiCategory.post = (query, headers) => http.post('ypmng/api/Category', query, headers)
 ypmngapiCategory.post.url = 'ypmng/api/Category'
ypmngapiCategory.post.type = 'post'
let ypmngapiCategoryCategoryDic = () => {}
ypmngapiCategoryCategoryDic = (query, headers) => http.get('ypmng/api/Category/CategoryDic', query, headers)
ypmngapiCategoryCategoryDic.url = 'ypmng/api/Category/CategoryDic'
ypmngapiCategoryCategoryDic.type = 'get'
ypmngapiCategoryCategoryDic.get = (query, headers) => http.get('ypmng/api/Category/CategoryDic', query, headers)
 ypmngapiCategoryCategoryDic.get.url = 'ypmng/api/Category/CategoryDic'
ypmngapiCategoryCategoryDic.get.type = 'get'
let ypmngapiCategoryCategoryEnumDic = () => {}
ypmngapiCategoryCategoryEnumDic = (query, headers) => http.get('ypmng/api/Category/CategoryEnumDic', query, headers)
ypmngapiCategoryCategoryEnumDic.url = 'ypmng/api/Category/CategoryEnumDic'
ypmngapiCategoryCategoryEnumDic.type = 'get'
ypmngapiCategoryCategoryEnumDic.get = (query, headers) => http.get('ypmng/api/Category/CategoryEnumDic', query, headers)
 ypmngapiCategoryCategoryEnumDic.get.url = 'ypmng/api/Category/CategoryEnumDic'
ypmngapiCategoryCategoryEnumDic.get.type = 'get'
let ypmngapiChannelChannelList = () => {}
ypmngapiChannelChannelList.post = (query, headers) => http.post('ypmng/api/Channel/ChannelList', query, headers)
 ypmngapiChannelChannelList.post.url = 'ypmng/api/Channel/ChannelList'
ypmngapiChannelChannelList.post.type = 'post'
let ypmngapiChannelChannelDownList = () => {}
ypmngapiChannelChannelDownList = (query, headers) => http.get('ypmng/api/Channel/ChannelDownList', query, headers)
ypmngapiChannelChannelDownList.url = 'ypmng/api/Channel/ChannelDownList'
ypmngapiChannelChannelDownList.type = 'get'
ypmngapiChannelChannelDownList.get = (query, headers) => http.get('ypmng/api/Channel/ChannelDownList', query, headers)
 ypmngapiChannelChannelDownList.get.url = 'ypmng/api/Channel/ChannelDownList'
ypmngapiChannelChannelDownList.get.type = 'get'
let ypmngapiChannelAddChannel = () => {}
ypmngapiChannelAddChannel.post = (query, headers) => http.post('ypmng/api/Channel/AddChannel', query, headers)
 ypmngapiChannelAddChannel.post.url = 'ypmng/api/Channel/AddChannel'
ypmngapiChannelAddChannel.post.type = 'post'
let ypmngapiChannelEditChannel = () => {}
ypmngapiChannelEditChannel.post = (query, headers) => http.post('ypmng/api/Channel/EditChannel', query, headers)
 ypmngapiChannelEditChannel.post.url = 'ypmng/api/Channel/EditChannel'
ypmngapiChannelEditChannel.post.type = 'post'
let ypmngapiChInfoQuery = () => {}
ypmngapiChInfoQuery.post = (query, headers) => http.post('ypmng/api/ChInfo/Query', query, headers)
 ypmngapiChInfoQuery.post.url = 'ypmng/api/ChInfo/Query'
ypmngapiChInfoQuery.post.type = 'post'
let ypmngapiChInfo = () => {}
ypmngapiChInfo = (query, headers) => http.get('ypmng/api/ChInfo/{id}', query, headers)
ypmngapiChInfo.url = 'ypmng/api/ChInfo/{id}'
ypmngapiChInfo.type = 'get'
ypmngapiChInfo.get = (query, headers) => http.get('ypmng/api/ChInfo/{id}', query, headers)
 ypmngapiChInfo.get.url = 'ypmng/api/ChInfo/{id}'
ypmngapiChInfo.get.type = 'get'
ypmngapiChInfo.put = (query, headers) => http.put('ypmng/api/ChInfo/{id}', query, headers)
 ypmngapiChInfo.put.url = 'ypmng/api/ChInfo/{id}'
ypmngapiChInfo.put.type = 'put'
ypmngapiChInfo.post = (query, headers) => http.post('ypmng/api/ChInfo', query, headers)
 ypmngapiChInfo.post.url = 'ypmng/api/ChInfo'
ypmngapiChInfo.post.type = 'post'
let ypmngapiChInfoChPorts = () => {}
ypmngapiChInfoChPorts = (query, headers) => http.get('ypmng/api/ChInfo/ChPorts', query, headers)
ypmngapiChInfoChPorts.url = 'ypmng/api/ChInfo/ChPorts'
ypmngapiChInfoChPorts.type = 'get'
ypmngapiChInfoChPorts.get = (query, headers) => http.get('ypmng/api/ChInfo/ChPorts', query, headers)
 ypmngapiChInfoChPorts.get.url = 'ypmng/api/ChInfo/ChPorts'
ypmngapiChInfoChPorts.get.type = 'get'
let ypmngapiCommentQuery = () => {}
ypmngapiCommentQuery.post = (query, headers) => http.post('ypmng/api/Comment/Query', query, headers)
 ypmngapiCommentQuery.post.url = 'ypmng/api/Comment/Query'
ypmngapiCommentQuery.post.type = 'post'
let ypmngapiComment = () => {}
ypmngapiComment.post = (query, headers) => http.post('ypmng/api/Comment', query, headers)
 ypmngapiComment.post.url = 'ypmng/api/Comment'
ypmngapiComment.post.type = 'post'
ypmngapiComment = (query, headers) => http.get('ypmng/api/Comment', query, headers)
ypmngapiComment.url = 'ypmng/api/Comment'
ypmngapiComment.type = 'get'
ypmngapiComment.get = (query, headers) => http.get('ypmng/api/Comment', query, headers)
 ypmngapiComment.get.url = 'ypmng/api/Comment'
ypmngapiComment.get.type = 'get'
ypmngapiComment = connect(ypmngapiComment, (query, headers) => http.get('ypmng/api/Comment/{id}', query, headers))
ypmngapiComment.url = 'ypmng/api/Comment/{id}'
ypmngapiComment.type = 'get'
ypmngapiComment.get = (query, headers) => http.get('ypmng/api/Comment/{id}', query, headers)
 ypmngapiComment.get.url = 'ypmng/api/Comment/{id}'
ypmngapiComment.get.type = 'get'
let ypmngapiCouponQuery = () => {}
ypmngapiCouponQuery.post = (query, headers) => http.post('ypmng/api/Coupon/Query', query, headers)
 ypmngapiCouponQuery.post.url = 'ypmng/api/Coupon/Query'
ypmngapiCouponQuery.post.type = 'post'
let ypmngapiCoupon = () => {}
ypmngapiCoupon.post = (query, headers) => http.post('ypmng/api/Coupon', query, headers)
 ypmngapiCoupon.post.url = 'ypmng/api/Coupon'
ypmngapiCoupon.post.type = 'post'
let ypmngapiCouponQueryCoupon = () => {}
ypmngapiCouponQueryCoupon.post = (query, headers) => http.post('ypmng/api/Coupon/QueryCoupon', query, headers)
 ypmngapiCouponQueryCoupon.post.url = 'ypmng/api/Coupon/QueryCoupon'
ypmngapiCouponQueryCoupon.post.type = 'post'
let ypmngapiCouponRecordQuery = () => {}
ypmngapiCouponRecordQuery.post = (query, headers) => http.post('ypmng/api/CouponRecord/Query', query, headers)
 ypmngapiCouponRecordQuery.post.url = 'ypmng/api/CouponRecord/Query'
ypmngapiCouponRecordQuery.post.type = 'post'
let ypmngapiCouponRecord = () => {}
ypmngapiCouponRecord = (query, headers) => http.get('ypmng/api/CouponRecord/{id}', query, headers)
ypmngapiCouponRecord.url = 'ypmng/api/CouponRecord/{id}'
ypmngapiCouponRecord.type = 'get'
ypmngapiCouponRecord.get = (query, headers) => http.get('ypmng/api/CouponRecord/{id}', query, headers)
 ypmngapiCouponRecord.get.url = 'ypmng/api/CouponRecord/{id}'
ypmngapiCouponRecord.get.type = 'get'
ypmngapiCouponRecord.put = (query, headers) => http.put('ypmng/api/CouponRecord', query, headers)
 ypmngapiCouponRecord.put.url = 'ypmng/api/CouponRecord'
ypmngapiCouponRecord.put.type = 'put'
let ypmngapiDockingErpSupplyProducts = () => {}
ypmngapiDockingErpSupplyProducts.post = (query, headers) => http.post('ypmng/api/DockingErp/SupplyProducts', query, headers)
 ypmngapiDockingErpSupplyProducts.post.url = 'ypmng/api/DockingErp/SupplyProducts'
ypmngapiDockingErpSupplyProducts.post.type = 'post'
let ypmngapiDockingErpSoldOut = () => {}
ypmngapiDockingErpSoldOut.post = (query, headers) => http.post('ypmng/api/DockingErp/SoldOut', query, headers)
 ypmngapiDockingErpSoldOut.post.url = 'ypmng/api/DockingErp/SoldOut'
ypmngapiDockingErpSoldOut.post.type = 'post'
let ypmngapiDockingErpDeliverGoods = () => {}
ypmngapiDockingErpDeliverGoods.post = (query, headers) => http.post('ypmng/api/DockingErp/DeliverGoods', query, headers)
 ypmngapiDockingErpDeliverGoods.post.url = 'ypmng/api/DockingErp/DeliverGoods'
ypmngapiDockingErpDeliverGoods.post.type = 'post'
let ypmngapiDockingErpAfterRefund = () => {}
ypmngapiDockingErpAfterRefund.post = (query, headers) => http.post('ypmng/api/DockingErp/AfterRefund', query, headers)
 ypmngapiDockingErpAfterRefund.post.url = 'ypmng/api/DockingErp/AfterRefund'
ypmngapiDockingErpAfterRefund.post.type = 'post'
let ypmngapiFreezeInfoQuery = () => {}
ypmngapiFreezeInfoQuery.post = (query, headers) => http.post('ypmng/api/FreezeInfo/Query', query, headers)
 ypmngapiFreezeInfoQuery.post.url = 'ypmng/api/FreezeInfo/Query'
ypmngapiFreezeInfoQuery.post.type = 'post'
let ypmngapiFreezeInfo = () => {}
ypmngapiFreezeInfo = (query, headers) => http.get('ypmng/api/FreezeInfo', query, headers)
ypmngapiFreezeInfo.url = 'ypmng/api/FreezeInfo'
ypmngapiFreezeInfo.type = 'get'
ypmngapiFreezeInfo.get = (query, headers) => http.get('ypmng/api/FreezeInfo', query, headers)
 ypmngapiFreezeInfo.get.url = 'ypmng/api/FreezeInfo'
ypmngapiFreezeInfo.get.type = 'get'
let ypmngapiFreezeInfoId = () => {}
ypmngapiFreezeInfoId = (query, headers) => http.get('ypmng/api/FreezeInfo/Id', query, headers)
ypmngapiFreezeInfoId.url = 'ypmng/api/FreezeInfo/Id'
ypmngapiFreezeInfoId.type = 'get'
ypmngapiFreezeInfoId.get = (query, headers) => http.get('ypmng/api/FreezeInfo/Id', query, headers)
 ypmngapiFreezeInfoId.get.url = 'ypmng/api/FreezeInfo/Id'
ypmngapiFreezeInfoId.get.type = 'get'
let ypmngapiImagesUpLoadPhoto = () => {}
ypmngapiImagesUpLoadPhoto.post = (query, headers) => http.post('ypmng/api/Images/UpLoadPhoto', query, headers)
 ypmngapiImagesUpLoadPhoto.post.url = 'ypmng/api/Images/UpLoadPhoto'
ypmngapiImagesUpLoadPhoto.post.type = 'post'
let ypmngapiModelQuery = () => {}
ypmngapiModelQuery.post = (query, headers) => http.post('ypmng/api/Model/Query', query, headers)
 ypmngapiModelQuery.post.url = 'ypmng/api/Model/Query'
ypmngapiModelQuery.post.type = 'post'
let ypmngapiModel = () => {}
ypmngapiModel = (query, headers) => http.get('ypmng/api/Model/{id}', query, headers)
ypmngapiModel.url = 'ypmng/api/Model/{id}'
ypmngapiModel.type = 'get'
ypmngapiModel.get = (query, headers) => http.get('ypmng/api/Model/{id}', query, headers)
 ypmngapiModel.get.url = 'ypmng/api/Model/{id}'
ypmngapiModel.get.type = 'get'
ypmngapiModel.put = (query, headers) => http.put('ypmng/api/Model/{id}', query, headers)
 ypmngapiModel.put.url = 'ypmng/api/Model/{id}'
ypmngapiModel.put.type = 'put'
ypmngapiModel.delete = (query, headers) => http.delete('ypmng/api/Model/{id}', query, headers)
 ypmngapiModel.delete.url = 'ypmng/api/Model/{id}'
ypmngapiModel.delete.type = 'delete'
let ypmngapiModelModelDic = () => {}
ypmngapiModelModelDic = (query, headers) => http.get('ypmng/api/Model/ModelDic/{pBId}', query, headers)
ypmngapiModelModelDic.url = 'ypmng/api/Model/ModelDic/{pBId}'
ypmngapiModelModelDic.type = 'get'
ypmngapiModelModelDic.get = (query, headers) => http.get('ypmng/api/Model/ModelDic/{pBId}', query, headers)
 ypmngapiModelModelDic.get.url = 'ypmng/api/Model/ModelDic/{pBId}'
ypmngapiModelModelDic.get.type = 'get'
ypmngapiModel.post = (query, headers) => http.post('ypmng/api/Model', query, headers)
 ypmngapiModel.post.url = 'ypmng/api/Model'
ypmngapiModel.post.type = 'post'
let ypmngapiModelBatchDelete = () => {}
ypmngapiModelBatchDelete.put = (query, headers) => http.put('ypmng/api/Model/BatchDelete', query, headers)
 ypmngapiModelBatchDelete.put.url = 'ypmng/api/Model/BatchDelete'
ypmngapiModelBatchDelete.put.type = 'put'
let ypmngapiModelModelAttrs = () => {}
ypmngapiModelModelAttrs = (query, headers) => http.get('ypmng/api/Model/ModelAttrs/{id}', query, headers)
ypmngapiModelModelAttrs.url = 'ypmng/api/Model/ModelAttrs/{id}'
ypmngapiModelModelAttrs.type = 'get'
ypmngapiModelModelAttrs.get = (query, headers) => http.get('ypmng/api/Model/ModelAttrs/{id}', query, headers)
 ypmngapiModelModelAttrs.get.url = 'ypmng/api/Model/ModelAttrs/{id}'
ypmngapiModelModelAttrs.get.type = 'get'
let ypmngapiModelSaveModelAndSku = () => {}
ypmngapiModelSaveModelAndSku.post = (query, headers) => http.post('ypmng/api/Model/SaveModelAndSku', query, headers)
 ypmngapiModelSaveModelAndSku.post.url = 'ypmng/api/Model/SaveModelAndSku'
ypmngapiModelSaveModelAndSku.post.type = 'post'
let ypmngapiModelGetModelAndSku = () => {}
ypmngapiModelGetModelAndSku = (query, headers) => http.get('ypmng/api/Model/GetModelAndSku', query, headers)
ypmngapiModelGetModelAndSku.url = 'ypmng/api/Model/GetModelAndSku'
ypmngapiModelGetModelAndSku.type = 'get'
ypmngapiModelGetModelAndSku.get = (query, headers) => http.get('ypmng/api/Model/GetModelAndSku', query, headers)
 ypmngapiModelGetModelAndSku.get.url = 'ypmng/api/Model/GetModelAndSku'
ypmngapiModelGetModelAndSku.get.type = 'get'
let ypmngapiModelEnable = () => {}
ypmngapiModelEnable.post = (query, headers) => http.post('ypmng/api/Model/Enable', query, headers)
 ypmngapiModelEnable.post.url = 'ypmng/api/Model/Enable'
ypmngapiModelEnable.post.type = 'post'
let ypmngapiModelChangeSDK = () => {}
ypmngapiModelChangeSDK = (query, headers) => http.get('ypmng/api/Model/ChangeSDK', query, headers)
ypmngapiModelChangeSDK.url = 'ypmng/api/Model/ChangeSDK'
ypmngapiModelChangeSDK.type = 'get'
ypmngapiModelChangeSDK.get = (query, headers) => http.get('ypmng/api/Model/ChangeSDK', query, headers)
 ypmngapiModelChangeSDK.get.url = 'ypmng/api/Model/ChangeSDK'
ypmngapiModelChangeSDK.get.type = 'get'
let ypmngapiModelGetModelList = () => {}
ypmngapiModelGetModelList.post = (query, headers) => http.post('ypmng/api/Model/GetModelList', query, headers)
 ypmngapiModelGetModelList.post.url = 'ypmng/api/Model/GetModelList'
ypmngapiModelGetModelList.post.type = 'post'
let ypmngapiModelGetModelDetail = () => {}
ypmngapiModelGetModelDetail = (query, headers) => http.get('ypmng/api/Model/GetModelDetail', query, headers)
ypmngapiModelGetModelDetail.url = 'ypmng/api/Model/GetModelDetail'
ypmngapiModelGetModelDetail.type = 'get'
ypmngapiModelGetModelDetail.get = (query, headers) => http.get('ypmng/api/Model/GetModelDetail', query, headers)
 ypmngapiModelGetModelDetail.get.url = 'ypmng/api/Model/GetModelDetail'
ypmngapiModelGetModelDetail.get.type = 'get'
let ypmngapiModelSaveModelDetail = () => {}
ypmngapiModelSaveModelDetail.post = (query, headers) => http.post('ypmng/api/Model/SaveModelDetail', query, headers)
 ypmngapiModelSaveModelDetail.post.url = 'ypmng/api/Model/SaveModelDetail'
ypmngapiModelSaveModelDetail.post.type = 'post'
let ypmngapiModelBannerGetBanner = () => {}
ypmngapiModelBannerGetBanner = (query, headers) => http.get('ypmng/api/ModelBanner/GetBanner', query, headers)
ypmngapiModelBannerGetBanner.url = 'ypmng/api/ModelBanner/GetBanner'
ypmngapiModelBannerGetBanner.type = 'get'
ypmngapiModelBannerGetBanner.get = (query, headers) => http.get('ypmng/api/ModelBanner/GetBanner', query, headers)
 ypmngapiModelBannerGetBanner.get.url = 'ypmng/api/ModelBanner/GetBanner'
ypmngapiModelBannerGetBanner.get.type = 'get'
let ypmngapiModelBannerGetProdBanner = () => {}
ypmngapiModelBannerGetProdBanner = (query, headers) => http.get('ypmng/api/ModelBanner/GetProdBanner/{pId}', query, headers)
ypmngapiModelBannerGetProdBanner.url = 'ypmng/api/ModelBanner/GetProdBanner/{pId}'
ypmngapiModelBannerGetProdBanner.type = 'get'
ypmngapiModelBannerGetProdBanner.get = (query, headers) => http.get('ypmng/api/ModelBanner/GetProdBanner/{pId}', query, headers)
 ypmngapiModelBannerGetProdBanner.get.url = 'ypmng/api/ModelBanner/GetProdBanner/{pId}'
ypmngapiModelBannerGetProdBanner.get.type = 'get'
let ypmngapiModelBannerSaveBanner = () => {}
ypmngapiModelBannerSaveBanner.post = (query, headers) => http.post('ypmng/api/ModelBanner/SaveBanner', query, headers)
 ypmngapiModelBannerSaveBanner.post.url = 'ypmng/api/ModelBanner/SaveBanner'
ypmngapiModelBannerSaveBanner.post.type = 'post'
let ypmngapiModelBannerSaveProdBanner = () => {}
ypmngapiModelBannerSaveProdBanner.put = (query, headers) => http.put('ypmng/api/ModelBanner/SaveProdBanner', query, headers)
 ypmngapiModelBannerSaveProdBanner.put.url = 'ypmng/api/ModelBanner/SaveProdBanner'
ypmngapiModelBannerSaveProdBanner.put.type = 'put'
let ypmngapiOldOrder = () => {}
ypmngapiOldOrder.post = (query, headers) => http.post('ypmng/api/OldOrder', query, headers)
 ypmngapiOldOrder.post.url = 'ypmng/api/OldOrder'
ypmngapiOldOrder.post.type = 'post'
let ypmngapiOldProduct = () => {}
ypmngapiOldProduct.post = (query, headers) => http.post('ypmng/api/OldProduct', query, headers)
 ypmngapiOldProduct.post.url = 'ypmng/api/OldProduct'
ypmngapiOldProduct.post.type = 'post'
let ypmngapiOldProductUpdateStock = () => {}
ypmngapiOldProductUpdateStock.post = (query, headers) => http.post('ypmng/api/OldProduct/UpdateStock', query, headers)
 ypmngapiOldProductUpdateStock.post.url = 'ypmng/api/OldProduct/UpdateStock'
ypmngapiOldProductUpdateStock.post.type = 'post'
let ypmngapiOpenAppOpenAppDic = () => {}
ypmngapiOpenAppOpenAppDic = (query, headers) => http.get('ypmng/api/OpenApp/OpenAppDic', query, headers)
ypmngapiOpenAppOpenAppDic.url = 'ypmng/api/OpenApp/OpenAppDic'
ypmngapiOpenAppOpenAppDic.type = 'get'
ypmngapiOpenAppOpenAppDic.get = (query, headers) => http.get('ypmng/api/OpenApp/OpenAppDic', query, headers)
 ypmngapiOpenAppOpenAppDic.get.url = 'ypmng/api/OpenApp/OpenAppDic'
ypmngapiOpenAppOpenAppDic.get.type = 'get'
let ypmngapiOrderAfter = () => {}
ypmngapiOrderAfter = (query, headers) => http.get('ypmng/api/OrderAfter/{orderId}', query, headers)
ypmngapiOrderAfter.url = 'ypmng/api/OrderAfter/{orderId}'
ypmngapiOrderAfter.type = 'get'
ypmngapiOrderAfter.get = (query, headers) => http.get('ypmng/api/OrderAfter/{orderId}', query, headers)
 ypmngapiOrderAfter.get.url = 'ypmng/api/OrderAfter/{orderId}'
ypmngapiOrderAfter.get.type = 'get'
ypmngapiOrderAfter.post = (query, headers) => http.post('ypmng/api/OrderAfter', query, headers)
 ypmngapiOrderAfter.post.url = 'ypmng/api/OrderAfter'
ypmngapiOrderAfter.post.type = 'post'
let ypmngapiOrderAfterNotify = () => {}
ypmngapiOrderAfterNotify.post = (query, headers) => http.post('ypmng/api/OrderAfter/Notify', query, headers)
 ypmngapiOrderAfterNotify.post.url = 'ypmng/api/OrderAfter/Notify'
ypmngapiOrderAfterNotify.post.type = 'post'
let ypmngapiOrderExcelGetTXTAsync = () => {}
ypmngapiOrderExcelGetTXTAsync.post = (query, headers) => http.post('ypmng/api/OrderExcel/GetTXTAsync', query, headers)
 ypmngapiOrderExcelGetTXTAsync.post.url = 'ypmng/api/OrderExcel/GetTXTAsync'
ypmngapiOrderExcelGetTXTAsync.post.type = 'post'
let ypmngapiOrderExcelGetSheetValues = () => {}
ypmngapiOrderExcelGetSheetValues.post = (query, headers) => http.post('ypmng/api/OrderExcel/GetSheetValues', query, headers)
 ypmngapiOrderExcelGetSheetValues.post.url = 'ypmng/api/OrderExcel/GetSheetValues'
ypmngapiOrderExcelGetSheetValues.post.type = 'post'
let ypmngapiOrderInfoQuery = () => {}
ypmngapiOrderInfoQuery.post = (query, headers) => http.post('ypmng/api/OrderInfo/Query', query, headers)
 ypmngapiOrderInfoQuery.post.url = 'ypmng/api/OrderInfo/Query'
ypmngapiOrderInfoQuery.post.type = 'post'
let ypmngapiOrderInfo = () => {}
ypmngapiOrderInfo = (query, headers) => http.get('ypmng/api/OrderInfo/{id}', query, headers)
ypmngapiOrderInfo.url = 'ypmng/api/OrderInfo/{id}'
ypmngapiOrderInfo.type = 'get'
ypmngapiOrderInfo.get = (query, headers) => http.get('ypmng/api/OrderInfo/{id}', query, headers)
 ypmngapiOrderInfo.get.url = 'ypmng/api/OrderInfo/{id}'
ypmngapiOrderInfo.get.type = 'get'
ypmngapiOrderInfo.put = (query, headers) => http.put('ypmng/api/OrderInfo/{id}', query, headers)
 ypmngapiOrderInfo.put.url = 'ypmng/api/OrderInfo/{id}'
ypmngapiOrderInfo.put.type = 'put'
let ypmngapiOrderInfoGetOrder = () => {}
ypmngapiOrderInfoGetOrder = (query, headers) => http.get('ypmng/api/OrderInfo/GetOrder', query, headers)
ypmngapiOrderInfoGetOrder.url = 'ypmng/api/OrderInfo/GetOrder'
ypmngapiOrderInfoGetOrder.type = 'get'
ypmngapiOrderInfoGetOrder.get = (query, headers) => http.get('ypmng/api/OrderInfo/GetOrder', query, headers)
 ypmngapiOrderInfoGetOrder.get.url = 'ypmng/api/OrderInfo/GetOrder'
ypmngapiOrderInfoGetOrder.get.type = 'get'
let ypmngapiOrderInfoDelivergoods = () => {}
ypmngapiOrderInfoDelivergoods.put = (query, headers) => http.put('ypmng/api/OrderInfo/Delivergoods', query, headers)
 ypmngapiOrderInfoDelivergoods.put.url = 'ypmng/api/OrderInfo/Delivergoods'
ypmngapiOrderInfoDelivergoods.put.type = 'put'
let ypmngapiOrderInfoConfirmOrder = () => {}
ypmngapiOrderInfoConfirmOrder = (query, headers) => http.get('ypmng/api/OrderInfo/ConfirmOrder/{orderId}', query, headers)
ypmngapiOrderInfoConfirmOrder.url = 'ypmng/api/OrderInfo/ConfirmOrder/{orderId}'
ypmngapiOrderInfoConfirmOrder.type = 'get'
ypmngapiOrderInfoConfirmOrder.get = (query, headers) => http.get('ypmng/api/OrderInfo/ConfirmOrder/{orderId}', query, headers)
 ypmngapiOrderInfoConfirmOrder.get.url = 'ypmng/api/OrderInfo/ConfirmOrder/{orderId}'
ypmngapiOrderInfoConfirmOrder.get.type = 'get'
let ypmngapiOrderInfoUpPrice = () => {}
ypmngapiOrderInfoUpPrice = (query, headers) => http.get('ypmng/api/OrderInfo/UpPrice', query, headers)
ypmngapiOrderInfoUpPrice.url = 'ypmng/api/OrderInfo/UpPrice'
ypmngapiOrderInfoUpPrice.type = 'get'
ypmngapiOrderInfoUpPrice.get = (query, headers) => http.get('ypmng/api/OrderInfo/UpPrice', query, headers)
 ypmngapiOrderInfoUpPrice.get.url = 'ypmng/api/OrderInfo/UpPrice'
ypmngapiOrderInfoUpPrice.get.type = 'get'
let ypmngapiOrderInfoUpAddress = () => {}
ypmngapiOrderInfoUpAddress.put = (query, headers) => http.put('ypmng/api/OrderInfo/UpAddress', query, headers)
 ypmngapiOrderInfoUpAddress.put.url = 'ypmng/api/OrderInfo/UpAddress'
ypmngapiOrderInfoUpAddress.put.type = 'put'
let ypmngapiOrderInfoGetOrderList = () => {}
ypmngapiOrderInfoGetOrderList.post = (query, headers) => http.post('ypmng/api/OrderInfo/GetOrderList', query, headers)
 ypmngapiOrderInfoGetOrderList.post.url = 'ypmng/api/OrderInfo/GetOrderList'
ypmngapiOrderInfoGetOrderList.post.type = 'post'
let ypmngapiOrderInfoGetRemarkList = () => {}
ypmngapiOrderInfoGetRemarkList.post = (query, headers) => http.post('ypmng/api/OrderInfo/GetRemarkList', query, headers)
 ypmngapiOrderInfoGetRemarkList.post.url = 'ypmng/api/OrderInfo/GetRemarkList'
ypmngapiOrderInfoGetRemarkList.post.type = 'post'
let ypmngapiOrderInfoSaveRemark = () => {}
ypmngapiOrderInfoSaveRemark.post = (query, headers) => http.post('ypmng/api/OrderInfo/SaveRemark', query, headers)
 ypmngapiOrderInfoSaveRemark.post.url = 'ypmng/api/OrderInfo/SaveRemark'
ypmngapiOrderInfoSaveRemark.post.type = 'post'
let ypmngapiPointEventInstructionList = () => {}
ypmngapiPointEventInstructionList.post = (query, headers) => http.post('ypmng/api/Point/EventInstructionList', query, headers)
 ypmngapiPointEventInstructionList.post.url = 'ypmng/api/Point/EventInstructionList'
ypmngapiPointEventInstructionList.post.type = 'post'
let ypmngapiPointEnableEventInstructionList = () => {}
ypmngapiPointEnableEventInstructionList = (query, headers) => http.get('ypmng/api/Point/EnableEventInstructionList', query, headers)
ypmngapiPointEnableEventInstructionList.url = 'ypmng/api/Point/EnableEventInstructionList'
ypmngapiPointEnableEventInstructionList.type = 'get'
ypmngapiPointEnableEventInstructionList.get = (query, headers) => http.get('ypmng/api/Point/EnableEventInstructionList', query, headers)
 ypmngapiPointEnableEventInstructionList.get.url = 'ypmng/api/Point/EnableEventInstructionList'
ypmngapiPointEnableEventInstructionList.get.type = 'get'
let ypmngapiPointAddEventInstruction = () => {}
ypmngapiPointAddEventInstruction.post = (query, headers) => http.post('ypmng/api/Point/AddEventInstruction', query, headers)
 ypmngapiPointAddEventInstruction.post.url = 'ypmng/api/Point/AddEventInstruction'
ypmngapiPointAddEventInstruction.post.type = 'post'
let ypmngapiPointEditEventInstruction = () => {}
ypmngapiPointEditEventInstruction.post = (query, headers) => http.post('ypmng/api/Point/EditEventInstruction', query, headers)
 ypmngapiPointEditEventInstruction.post.url = 'ypmng/api/Point/EditEventInstruction'
ypmngapiPointEditEventInstruction.post.type = 'post'
let ypmngapiProdModelSyncAliPaySyncProdModel = () => {}
ypmngapiProdModelSyncAliPaySyncProdModel = (query, headers) => http.get('ypmng/api/ProdModelSyncAliPay/SyncProdModel', query, headers)
ypmngapiProdModelSyncAliPaySyncProdModel.url = 'ypmng/api/ProdModelSyncAliPay/SyncProdModel'
ypmngapiProdModelSyncAliPaySyncProdModel.type = 'get'
ypmngapiProdModelSyncAliPaySyncProdModel.get = (query, headers) => http.get('ypmng/api/ProdModelSyncAliPay/SyncProdModel', query, headers)
 ypmngapiProdModelSyncAliPaySyncProdModel.get.url = 'ypmng/api/ProdModelSyncAliPay/SyncProdModel'
ypmngapiProdModelSyncAliPaySyncProdModel.get.type = 'get'
let ypmngapiProdModelSyncAliPaySyncAliPaySkuID = () => {}
ypmngapiProdModelSyncAliPaySyncAliPaySkuID = (query, headers) => http.get('ypmng/api/ProdModelSyncAliPay/SyncAliPaySkuID', query, headers)
ypmngapiProdModelSyncAliPaySyncAliPaySkuID.url = 'ypmng/api/ProdModelSyncAliPay/SyncAliPaySkuID'
ypmngapiProdModelSyncAliPaySyncAliPaySkuID.type = 'get'
ypmngapiProdModelSyncAliPaySyncAliPaySkuID.get = (query, headers) => http.get('ypmng/api/ProdModelSyncAliPay/SyncAliPaySkuID', query, headers)
 ypmngapiProdModelSyncAliPaySyncAliPaySkuID.get.url = 'ypmng/api/ProdModelSyncAliPay/SyncAliPaySkuID'
ypmngapiProdModelSyncAliPaySyncAliPaySkuID.get.type = 'get'
let ypmngapiProductQuery = () => {}
ypmngapiProductQuery.post = (query, headers) => http.post('ypmng/api/Product/Query', query, headers)
 ypmngapiProductQuery.post.url = 'ypmng/api/Product/Query'
ypmngapiProductQuery.post.type = 'post'
let ypmngapiProduct = () => {}
ypmngapiProduct = (query, headers) => http.get('ypmng/api/Product/{id}', query, headers)
ypmngapiProduct.url = 'ypmng/api/Product/{id}'
ypmngapiProduct.type = 'get'
ypmngapiProduct.get = (query, headers) => http.get('ypmng/api/Product/{id}', query, headers)
 ypmngapiProduct.get.url = 'ypmng/api/Product/{id}'
ypmngapiProduct.get.type = 'get'
ypmngapiProduct.put = (query, headers) => http.put('ypmng/api/Product/{id}', query, headers)
 ypmngapiProduct.put.url = 'ypmng/api/Product/{id}'
ypmngapiProduct.put.type = 'put'
ypmngapiProduct.delete = (query, headers) => http.delete('ypmng/api/Product/{id}', query, headers)
 ypmngapiProduct.delete.url = 'ypmng/api/Product/{id}'
ypmngapiProduct.delete.type = 'delete'
ypmngapiProduct.post = (query, headers) => http.post('ypmng/api/Product', query, headers)
 ypmngapiProduct.post.url = 'ypmng/api/Product'
ypmngapiProduct.post.type = 'post'
let ypmngapiProductBatchDelete = () => {}
ypmngapiProductBatchDelete.put = (query, headers) => http.put('ypmng/api/Product/BatchDelete', query, headers)
 ypmngapiProductBatchDelete.put.url = 'ypmng/api/Product/BatchDelete'
ypmngapiProductBatchDelete.put.type = 'put'
let ypmngapiProductMacInfo = () => {}
ypmngapiProductMacInfo = (query, headers) => http.get('ypmng/api/Product/MacInfo', query, headers)
ypmngapiProductMacInfo.url = 'ypmng/api/Product/MacInfo'
ypmngapiProductMacInfo.type = 'get'
ypmngapiProductMacInfo.get = (query, headers) => http.get('ypmng/api/Product/MacInfo', query, headers)
 ypmngapiProductMacInfo.get.url = 'ypmng/api/Product/MacInfo'
ypmngapiProductMacInfo.get.type = 'get'
let ypmngapiProductBatchTeamAsync = () => {}
ypmngapiProductBatchTeamAsync.put = (query, headers) => http.put('ypmng/api/Product/BatchTeamAsync', query, headers)
 ypmngapiProductBatchTeamAsync.put.url = 'ypmng/api/Product/BatchTeamAsync'
ypmngapiProductBatchTeamAsync.put.type = 'put'
let ypmngapiProductBatchUpdate = () => {}
ypmngapiProductBatchUpdate.put = (query, headers) => http.put('ypmng/api/Product/BatchUpdate', query, headers)
 ypmngapiProductBatchUpdate.put.url = 'ypmng/api/Product/BatchUpdate'
ypmngapiProductBatchUpdate.put.type = 'put'
let ypmngapiProductProductDic = () => {}
ypmngapiProductProductDic = (query, headers) => http.get('ypmng/api/Product/ProductDic', query, headers)
ypmngapiProductProductDic.url = 'ypmng/api/Product/ProductDic'
ypmngapiProductProductDic.type = 'get'
ypmngapiProductProductDic.get = (query, headers) => http.get('ypmng/api/Product/ProductDic', query, headers)
 ypmngapiProductProductDic.get.url = 'ypmng/api/Product/ProductDic'
ypmngapiProductProductDic.get.type = 'get'
let ypmngapiProductBatchUpListImgUrl = () => {}
ypmngapiProductBatchUpListImgUrl.put = (query, headers) => http.put('ypmng/api/Product/BatchUpListImgUrl', query, headers)
 ypmngapiProductBatchUpListImgUrl.put.url = 'ypmng/api/Product/BatchUpListImgUrl'
ypmngapiProductBatchUpListImgUrl.put.type = 'put'
let ypmngapiProductGetProductList = () => {}
ypmngapiProductGetProductList.post = (query, headers) => http.post('ypmng/api/Product/GetProductList', query, headers)
 ypmngapiProductGetProductList.post.url = 'ypmng/api/Product/GetProductList'
ypmngapiProductGetProductList.post.type = 'post'
let ypmngapiProductBatchPutaway = () => {}
ypmngapiProductBatchPutaway.post = (query, headers) => http.post('ypmng/api/Product/BatchPutaway', query, headers)
 ypmngapiProductBatchPutaway.post.url = 'ypmng/api/Product/BatchPutaway'
ypmngapiProductBatchPutaway.post.type = 'post'
let ypmngapiProductOperateRegion = () => {}
ypmngapiProductOperateRegion.post = (query, headers) => http.post('ypmng/api/Product/OperateRegion', query, headers)
 ypmngapiProductOperateRegion.post.url = 'ypmng/api/Product/OperateRegion'
ypmngapiProductOperateRegion.post.type = 'post'
let ypmngapiProductGetProductInfo = () => {}
ypmngapiProductGetProductInfo = (query, headers) => http.get('ypmng/api/Product/GetProductInfo', query, headers)
ypmngapiProductGetProductInfo.url = 'ypmng/api/Product/GetProductInfo'
ypmngapiProductGetProductInfo.type = 'get'
ypmngapiProductGetProductInfo.get = (query, headers) => http.get('ypmng/api/Product/GetProductInfo', query, headers)
 ypmngapiProductGetProductInfo.get.url = 'ypmng/api/Product/GetProductInfo'
ypmngapiProductGetProductInfo.get.type = 'get'
let ypmngapiProductSaveProductInfo = () => {}
ypmngapiProductSaveProductInfo.post = (query, headers) => http.post('ypmng/api/Product/SaveProductInfo', query, headers)
 ypmngapiProductSaveProductInfo.post.url = 'ypmng/api/Product/SaveProductInfo'
ypmngapiProductSaveProductInfo.post.type = 'post'
let ypmngapiProductSpecialPriceProducts = () => {}
ypmngapiProductSpecialPriceProducts.post = (query, headers) => http.post('ypmng/api/Product/SpecialPriceProducts', query, headers)
 ypmngapiProductSpecialPriceProducts.post.url = 'ypmng/api/Product/SpecialPriceProducts'
ypmngapiProductSpecialPriceProducts.post.type = 'post'
let ypmngapiProductGetSpecialPriceProduct = () => {}
ypmngapiProductGetSpecialPriceProduct = (query, headers) => http.get('ypmng/api/Product/GetSpecialPriceProduct', query, headers)
ypmngapiProductGetSpecialPriceProduct.url = 'ypmng/api/Product/GetSpecialPriceProduct'
ypmngapiProductGetSpecialPriceProduct.type = 'get'
ypmngapiProductGetSpecialPriceProduct.get = (query, headers) => http.get('ypmng/api/Product/GetSpecialPriceProduct', query, headers)
 ypmngapiProductGetSpecialPriceProduct.get.url = 'ypmng/api/Product/GetSpecialPriceProduct'
ypmngapiProductGetSpecialPriceProduct.get.type = 'get'
let ypmngapiProductEditSpecialPrice = () => {}
ypmngapiProductEditSpecialPrice.post = (query, headers) => http.post('ypmng/api/Product/EditSpecialPrice', query, headers)
 ypmngapiProductEditSpecialPrice.post.url = 'ypmng/api/Product/EditSpecialPrice'
ypmngapiProductEditSpecialPrice.post.type = 'post'
let ypmngapiProductEditPrice = () => {}
ypmngapiProductEditPrice.post = (query, headers) => http.post('ypmng/api/Product/EditPrice', query, headers)
 ypmngapiProductEditPrice.post.url = 'ypmng/api/Product/EditPrice'
ypmngapiProductEditPrice.post.type = 'post'
let ypmngapiProductExcelGetProducts = () => {}
ypmngapiProductExcelGetProducts.post = (query, headers) => http.post('ypmng/api/ProductExcel/GetProducts', query, headers)
 ypmngapiProductExcelGetProducts.post.url = 'ypmng/api/ProductExcel/GetProducts'
ypmngapiProductExcelGetProducts.post.type = 'post'
let ypmngapiProductExcelGetSheetValues = () => {}
ypmngapiProductExcelGetSheetValues.post = (query, headers) => http.post('ypmng/api/ProductExcel/GetSheetValues', query, headers)
 ypmngapiProductExcelGetSheetValues.post.url = 'ypmng/api/ProductExcel/GetSheetValues'
ypmngapiProductExcelGetSheetValues.post.type = 'post'
let ypmngapiProductExcelCreateProducts = () => {}
ypmngapiProductExcelCreateProducts.post = (query, headers) => http.post('ypmng/api/ProductExcel/CreateProducts', query, headers)
 ypmngapiProductExcelCreateProducts.post.url = 'ypmng/api/ProductExcel/CreateProducts'
ypmngapiProductExcelCreateProducts.post.type = 'post'
let ypmngapiReportAddReportSource = () => {}
ypmngapiReportAddReportSource.post = (query, headers) => http.post('ypmng/api/Report/AddReportSource', query, headers)
 ypmngapiReportAddReportSource.post.url = 'ypmng/api/Report/AddReportSource'
ypmngapiReportAddReportSource.post.type = 'post'
let ypmngapiReportAddChannelTurnoverSource = () => {}
ypmngapiReportAddChannelTurnoverSource.post = (query, headers) => http.post('ypmng/api/Report/AddChannelTurnoverSource', query, headers)
 ypmngapiReportAddChannelTurnoverSource.post.url = 'ypmng/api/Report/AddChannelTurnoverSource'
ypmngapiReportAddChannelTurnoverSource.post.type = 'post'
let ypmngapiReportAddChannelVisitSource = () => {}
ypmngapiReportAddChannelVisitSource.post = (query, headers) => http.post('ypmng/api/Report/AddChannelVisitSource', query, headers)
 ypmngapiReportAddChannelVisitSource.post.url = 'ypmng/api/Report/AddChannelVisitSource'
ypmngapiReportAddChannelVisitSource.post.type = 'post'
let ypmngapiReportReportDataQuery = () => {}
ypmngapiReportReportDataQuery.post = (query, headers) => http.post('ypmng/api/Report/ReportDataQuery', query, headers)
 ypmngapiReportReportDataQuery.post.url = 'ypmng/api/Report/ReportDataQuery'
ypmngapiReportReportDataQuery.post.type = 'post'
let ypmngapiReportChannelVisitQuery = () => {}
ypmngapiReportChannelVisitQuery.post = (query, headers) => http.post('ypmng/api/Report/ChannelVisitQuery', query, headers)
 ypmngapiReportChannelVisitQuery.post.url = 'ypmng/api/Report/ChannelVisitQuery'
ypmngapiReportChannelVisitQuery.post.type = 'post'
let ypmngapiReportChannelTurnoverQuery = () => {}
ypmngapiReportChannelTurnoverQuery.post = (query, headers) => http.post('ypmng/api/Report/ChannelTurnoverQuery', query, headers)
 ypmngapiReportChannelTurnoverQuery.post.url = 'ypmng/api/Report/ChannelTurnoverQuery'
ypmngapiReportChannelTurnoverQuery.post.type = 'post'
let ypmngapiReportChannelVisitCylindrical = () => {}
ypmngapiReportChannelVisitCylindrical.post = (query, headers) => http.post('ypmng/api/Report/ChannelVisitCylindrical', query, headers)
 ypmngapiReportChannelVisitCylindrical.post.url = 'ypmng/api/Report/ChannelVisitCylindrical'
ypmngapiReportChannelVisitCylindrical.post.type = 'post'
let ypmngapiReportChannelTurnoverCylindrical = () => {}
ypmngapiReportChannelTurnoverCylindrical.post = (query, headers) => http.post('ypmng/api/Report/ChannelTurnoverCylindrical', query, headers)
 ypmngapiReportChannelTurnoverCylindrical.post.url = 'ypmng/api/Report/ChannelTurnoverCylindrical'
ypmngapiReportChannelTurnoverCylindrical.post.type = 'post'
let ypmngapiReportDownLoad = () => {}
ypmngapiReportDownLoad.post = (query, headers) => http.post('ypmng/api/Report/DownLoad', query, headers)
 ypmngapiReportDownLoad.post.url = 'ypmng/api/Report/DownLoad'
ypmngapiReportDownLoad.post.type = 'post'
let ypmngapiReportChannelVisitDownLoad = () => {}
ypmngapiReportChannelVisitDownLoad.post = (query, headers) => http.post('ypmng/api/Report/ChannelVisitDownLoad', query, headers)
 ypmngapiReportChannelVisitDownLoad.post.url = 'ypmng/api/Report/ChannelVisitDownLoad'
ypmngapiReportChannelVisitDownLoad.post.type = 'post'
let ypmngapiReportChannelTurnoverDownLoad = () => {}
ypmngapiReportChannelTurnoverDownLoad.post = (query, headers) => http.post('ypmng/api/Report/ChannelTurnoverDownLoad', query, headers)
 ypmngapiReportChannelTurnoverDownLoad.post.url = 'ypmng/api/Report/ChannelTurnoverDownLoad'
ypmngapiReportChannelTurnoverDownLoad.post.type = 'post'
let ypmngapiShopQuery = () => {}
ypmngapiShopQuery.post = (query, headers) => http.post('ypmng/api/Shop/Query', query, headers)
 ypmngapiShopQuery.post.url = 'ypmng/api/Shop/Query'
ypmngapiShopQuery.post.type = 'post'
let ypmngapiShop = () => {}
ypmngapiShop = (query, headers) => http.get('ypmng/api/Shop/{id}', query, headers)
ypmngapiShop.url = 'ypmng/api/Shop/{id}'
ypmngapiShop.type = 'get'
ypmngapiShop.get = (query, headers) => http.get('ypmng/api/Shop/{id}', query, headers)
 ypmngapiShop.get.url = 'ypmng/api/Shop/{id}'
ypmngapiShop.get.type = 'get'
ypmngapiShop.put = (query, headers) => http.put('ypmng/api/Shop/{id}', query, headers)
 ypmngapiShop.put.url = 'ypmng/api/Shop/{id}'
ypmngapiShop.put.type = 'put'
ypmngapiShop.post = (query, headers) => http.post('ypmng/api/Shop', query, headers)
 ypmngapiShop.post.url = 'ypmng/api/Shop'
ypmngapiShop.post.type = 'post'
let ypmngapiShopBatchUpdateStatus = () => {}
ypmngapiShopBatchUpdateStatus.put = (query, headers) => http.put('ypmng/api/Shop/BatchUpdateStatus', query, headers)
 ypmngapiShopBatchUpdateStatus.put.url = 'ypmng/api/Shop/BatchUpdateStatus'
ypmngapiShopBatchUpdateStatus.put.type = 'put'
let ypmngapiShopShopDic = () => {}
ypmngapiShopShopDic = (query, headers) => http.get('ypmng/api/Shop/ShopDic', query, headers)
ypmngapiShopShopDic.url = 'ypmng/api/Shop/ShopDic'
ypmngapiShopShopDic.type = 'get'
ypmngapiShopShopDic.get = (query, headers) => http.get('ypmng/api/Shop/ShopDic', query, headers)
 ypmngapiShopShopDic.get.url = 'ypmng/api/Shop/ShopDic'
ypmngapiShopShopDic.get.type = 'get'
let ypmngapiShopOrderInfoQuery = () => {}
ypmngapiShopOrderInfoQuery.post = (query, headers) => http.post('ypmng/api/ShopOrderInfo/Query', query, headers)
 ypmngapiShopOrderInfoQuery.post.url = 'ypmng/api/ShopOrderInfo/Query'
ypmngapiShopOrderInfoQuery.post.type = 'post'
let ypmngapiShopProductQuery = () => {}
ypmngapiShopProductQuery.post = (query, headers) => http.post('ypmng/api/ShopProduct/Query', query, headers)
 ypmngapiShopProductQuery.post.url = 'ypmng/api/ShopProduct/Query'
ypmngapiShopProductQuery.post.type = 'post'
let ypmngapiShopProduct = () => {}
ypmngapiShopProduct.post = (query, headers) => http.post('ypmng/api/ShopProduct', query, headers)
 ypmngapiShopProduct.post.url = 'ypmng/api/ShopProduct'
ypmngapiShopProduct.post.type = 'post'
let ypmngapiShopUserUserDic = () => {}
ypmngapiShopUserUserDic = (query, headers) => http.get('ypmng/api/ShopUser/UserDic', query, headers)
ypmngapiShopUserUserDic.url = 'ypmng/api/ShopUser/UserDic'
ypmngapiShopUserUserDic.type = 'get'
ypmngapiShopUserUserDic.get = (query, headers) => http.get('ypmng/api/ShopUser/UserDic', query, headers)
 ypmngapiShopUserUserDic.get.url = 'ypmng/api/ShopUser/UserDic'
ypmngapiShopUserUserDic.get.type = 'get'
let ypmngapiShopUserUserSelModel = () => {}
ypmngapiShopUserUserSelModel = (query, headers) => http.get('ypmng/api/ShopUser/UserSelModel', query, headers)
ypmngapiShopUserUserSelModel.url = 'ypmng/api/ShopUser/UserSelModel'
ypmngapiShopUserUserSelModel.type = 'get'
ypmngapiShopUserUserSelModel.get = (query, headers) => http.get('ypmng/api/ShopUser/UserSelModel', query, headers)
 ypmngapiShopUserUserSelModel.get.url = 'ypmng/api/ShopUser/UserSelModel'
ypmngapiShopUserUserSelModel.get.type = 'get'
let ypmngapiSpecialAreasQuery = () => {}
ypmngapiSpecialAreasQuery.post = (query, headers) => http.post('ypmng/api/SpecialAreas/Query', query, headers)
 ypmngapiSpecialAreasQuery.post.url = 'ypmng/api/SpecialAreas/Query'
ypmngapiSpecialAreasQuery.post.type = 'post'
let ypmngapiSpecialAreas = () => {}
ypmngapiSpecialAreas = (query, headers) => http.get('ypmng/api/SpecialAreas/{id}', query, headers)
ypmngapiSpecialAreas.url = 'ypmng/api/SpecialAreas/{id}'
ypmngapiSpecialAreas.type = 'get'
ypmngapiSpecialAreas.get = (query, headers) => http.get('ypmng/api/SpecialAreas/{id}', query, headers)
 ypmngapiSpecialAreas.get.url = 'ypmng/api/SpecialAreas/{id}'
ypmngapiSpecialAreas.get.type = 'get'
ypmngapiSpecialAreas.put = (query, headers) => http.put('ypmng/api/SpecialAreas/{id}', query, headers)
 ypmngapiSpecialAreas.put.url = 'ypmng/api/SpecialAreas/{id}'
ypmngapiSpecialAreas.put.type = 'put'
ypmngapiSpecialAreas.delete = (query, headers) => http.delete('ypmng/api/SpecialAreas/{id}', query, headers)
 ypmngapiSpecialAreas.delete.url = 'ypmng/api/SpecialAreas/{id}'
ypmngapiSpecialAreas.delete.type = 'delete'
ypmngapiSpecialAreas.post = (query, headers) => http.post('ypmng/api/SpecialAreas', query, headers)
 ypmngapiSpecialAreas.post.url = 'ypmng/api/SpecialAreas'
ypmngapiSpecialAreas.post.type = 'post'
let ypmngapiSpecialAreasBatchDelete = () => {}
ypmngapiSpecialAreasBatchDelete.put = (query, headers) => http.put('ypmng/api/SpecialAreas/BatchDelete', query, headers)
 ypmngapiSpecialAreasBatchDelete.put.url = 'ypmng/api/SpecialAreas/BatchDelete'
ypmngapiSpecialAreasBatchDelete.put.type = 'put'
let ypmngapiWxOrderMng = () => {}
ypmngapiWxOrderMng = (query, headers) => http.get('ypmng/api/WxOrderMng/{id}', query, headers)
ypmngapiWxOrderMng.url = 'ypmng/api/WxOrderMng/{id}'
ypmngapiWxOrderMng.type = 'get'
ypmngapiWxOrderMng.get = (query, headers) => http.get('ypmng/api/WxOrderMng/{id}', query, headers)
 ypmngapiWxOrderMng.get.url = 'ypmng/api/WxOrderMng/{id}'
ypmngapiWxOrderMng.get.type = 'get'
let ucmngapiAlipayMp = () => {}
ucmngapiAlipayMp.post = (query, headers) => http.post('ucmng/api/AlipayMp', query, headers)
 ucmngapiAlipayMp.post.url = 'ucmng/api/AlipayMp'
ucmngapiAlipayMp.post.type = 'post'
ucmngapiAlipayMp = (query, headers) => http.get('ucmng/api/AlipayMp', query, headers)
ucmngapiAlipayMp.url = 'ucmng/api/AlipayMp'
ucmngapiAlipayMp.type = 'get'
ucmngapiAlipayMp.get = (query, headers) => http.get('ucmng/api/AlipayMp', query, headers)
 ucmngapiAlipayMp.get.url = 'ucmng/api/AlipayMp'
ucmngapiAlipayMp.get.type = 'get'
let ucmngapiucmsdkExternalUserOpenExternal = () => {}
ucmngapiucmsdkExternalUserOpenExternal.post = (query, headers) => http.post('ucmng/api/ucmsdk/ExternalUser/OpenExternal', query, headers)
 ucmngapiucmsdkExternalUserOpenExternal.post.url = 'ucmng/api/ucmsdk/ExternalUser/OpenExternal'
ucmngapiucmsdkExternalUserOpenExternal.post.type = 'post'
let ucmngapiucmsdkExternalUserRegisterUserAuthor = () => {}
ucmngapiucmsdkExternalUserRegisterUserAuthor.post = (query, headers) => http.post('ucmng/api/ucmsdk/ExternalUser/RegisterUserAuthor', query, headers)
 ucmngapiucmsdkExternalUserRegisterUserAuthor.post.url = 'ucmng/api/ucmsdk/ExternalUser/RegisterUserAuthor'
ucmngapiucmsdkExternalUserRegisterUserAuthor.post.type = 'post'
let ucmngapisysmngMenu = () => {}
ucmngapisysmngMenu = (query, headers) => http.get('ucmng/api/sysmng/Menu', query, headers)
ucmngapisysmngMenu.url = 'ucmng/api/sysmng/Menu'
ucmngapisysmngMenu.type = 'get'
ucmngapisysmngMenu.get = (query, headers) => http.get('ucmng/api/sysmng/Menu', query, headers)
 ucmngapisysmngMenu.get.url = 'ucmng/api/sysmng/Menu'
ucmngapisysmngMenu.get.type = 'get'
let ucmngapisysmngMenuAdd = () => {}
ucmngapisysmngMenuAdd.post = (query, headers) => http.post('ucmng/api/sysmng/Menu/Add', query, headers)
 ucmngapisysmngMenuAdd.post.url = 'ucmng/api/sysmng/Menu/Add'
ucmngapisysmngMenuAdd.post.type = 'post'
ucmngapisysmngMenu.put = (query, headers) => http.put('ucmng/api/sysmng/Menu/{id}', query, headers)
 ucmngapisysmngMenu.put.url = 'ucmng/api/sysmng/Menu/{id}'
ucmngapisysmngMenu.put.type = 'put'
let ucmngapiucmsdkMenuOperBuildApi = () => {}
ucmngapiucmsdkMenuOperBuildApi.post = (query, headers) => http.post('ucmng/api/ucmsdk/MenuOper/BuildApi', query, headers)
 ucmngapiucmsdkMenuOperBuildApi.post.url = 'ucmng/api/ucmsdk/MenuOper/BuildApi'
ucmngapiucmsdkMenuOperBuildApi.post.type = 'post'
let ucmngapisysmngMenuOperGetVersion = () => {}
ucmngapisysmngMenuOperGetVersion = (query, headers) => http.get('ucmng/api/sysmng/MenuOper/GetVersion', query, headers)
ucmngapisysmngMenuOperGetVersion.url = 'ucmng/api/sysmng/MenuOper/GetVersion'
ucmngapisysmngMenuOperGetVersion.type = 'get'
ucmngapisysmngMenuOperGetVersion.get = (query, headers) => http.get('ucmng/api/sysmng/MenuOper/GetVersion', query, headers)
 ucmngapisysmngMenuOperGetVersion.get.url = 'ucmng/api/sysmng/MenuOper/GetVersion'
ucmngapisysmngMenuOperGetVersion.get.type = 'get'
let ucmngapisysmngMenuOperUpdateMenu = () => {}
ucmngapisysmngMenuOperUpdateMenu.post = (query, headers) => http.post('ucmng/api/sysmng/MenuOper/UpdateMenu', query, headers)
 ucmngapisysmngMenuOperUpdateMenu.post.url = 'ucmng/api/sysmng/MenuOper/UpdateMenu'
ucmngapisysmngMenuOperUpdateMenu.post.type = 'post'
let ucmngapisysmngMenuOperBuildMenu = () => {}
ucmngapisysmngMenuOperBuildMenu.post = (query, headers) => http.post('ucmng/api/sysmng/MenuOper/BuildMenu', query, headers)
 ucmngapisysmngMenuOperBuildMenu.post.url = 'ucmng/api/sysmng/MenuOper/BuildMenu'
ucmngapisysmngMenuOperBuildMenu.post.type = 'post'
let ucmngapisysmngMenuOper = () => {}
ucmngapisysmngMenuOper = (query, headers) => http.get('ucmng/api/sysmng/MenuOper', query, headers)
ucmngapisysmngMenuOper.url = 'ucmng/api/sysmng/MenuOper'
ucmngapisysmngMenuOper.type = 'get'
ucmngapisysmngMenuOper.get = (query, headers) => http.get('ucmng/api/sysmng/MenuOper', query, headers)
 ucmngapisysmngMenuOper.get.url = 'ucmng/api/sysmng/MenuOper'
ucmngapisysmngMenuOper.get.type = 'get'
let ucmngapiucmsdkMerchantAliCreate = () => {}
ucmngapiucmsdkMerchantAliCreate.post = (query, headers) => http.post('ucmng/api/ucmsdk/Merchant/AliCreate', query, headers)
 ucmngapiucmsdkMerchantAliCreate.post.url = 'ucmng/api/ucmsdk/Merchant/AliCreate'
ucmngapiucmsdkMerchantAliCreate.post.type = 'post'
let ucmngapiucmsdkMerchantAliQuery = () => {}
ucmngapiucmsdkMerchantAliQuery.post = (query, headers) => http.post('ucmng/api/ucmsdk/Merchant/AliQuery', query, headers)
 ucmngapiucmsdkMerchantAliQuery.post.url = 'ucmng/api/ucmsdk/Merchant/AliQuery'
ucmngapiucmsdkMerchantAliQuery.post.type = 'post'
let ucmngapiucmsdkMerchantAliModify = () => {}
ucmngapiucmsdkMerchantAliModify.post = (query, headers) => http.post('ucmng/api/ucmsdk/Merchant/AliModify', query, headers)
 ucmngapiucmsdkMerchantAliModify.post.url = 'ucmng/api/ucmsdk/Merchant/AliModify'
ucmngapiucmsdkMerchantAliModify.post.type = 'post'
let ucmngapiucmsdkMerchantCIccCreate = () => {}
ucmngapiucmsdkMerchantCIccCreate.post = (query, headers) => http.post('ucmng/api/ucmsdk/Merchant/CIccCreate', query, headers)
 ucmngapiucmsdkMerchantCIccCreate.post.url = 'ucmng/api/ucmsdk/Merchant/CIccCreate'
ucmngapiucmsdkMerchantCIccCreate.post.type = 'post'
let ucmngapiucmsdkMerchantCIccQuery = () => {}
ucmngapiucmsdkMerchantCIccQuery.post = (query, headers) => http.post('ucmng/api/ucmsdk/Merchant/CIccQuery', query, headers)
 ucmngapiucmsdkMerchantCIccQuery.post.url = 'ucmng/api/ucmsdk/Merchant/CIccQuery'
ucmngapiucmsdkMerchantCIccQuery.post.type = 'post'
let ucmngapiucmsdkOpenAppGetOpenApp = () => {}
ucmngapiucmsdkOpenAppGetOpenApp = (query, headers) => http.get('ucmng/api/ucmsdk/OpenApp/GetOpenApp', query, headers)
ucmngapiucmsdkOpenAppGetOpenApp.url = 'ucmng/api/ucmsdk/OpenApp/GetOpenApp'
ucmngapiucmsdkOpenAppGetOpenApp.type = 'get'
ucmngapiucmsdkOpenAppGetOpenApp.get = (query, headers) => http.get('ucmng/api/ucmsdk/OpenApp/GetOpenApp', query, headers)
 ucmngapiucmsdkOpenAppGetOpenApp.get.url = 'ucmng/api/ucmsdk/OpenApp/GetOpenApp'
ucmngapiucmsdkOpenAppGetOpenApp.get.type = 'get'
let ucmngapiucmsdkOpenAppGetAllOpenApp = () => {}
ucmngapiucmsdkOpenAppGetAllOpenApp.post = (query, headers) => http.post('ucmng/api/ucmsdk/OpenApp/GetAllOpenApp', query, headers)
 ucmngapiucmsdkOpenAppGetAllOpenApp.post.url = 'ucmng/api/ucmsdk/OpenApp/GetAllOpenApp'
ucmngapiucmsdkOpenAppGetAllOpenApp.post.type = 'post'
let ucmngapiucmsdkOpenAppAllOpenApp = () => {}
ucmngapiucmsdkOpenAppAllOpenApp = (query, headers) => http.get('ucmng/api/ucmsdk/OpenApp/AllOpenApp', query, headers)
ucmngapiucmsdkOpenAppAllOpenApp.url = 'ucmng/api/ucmsdk/OpenApp/AllOpenApp'
ucmngapiucmsdkOpenAppAllOpenApp.type = 'get'
ucmngapiucmsdkOpenAppAllOpenApp.get = (query, headers) => http.get('ucmng/api/ucmsdk/OpenApp/AllOpenApp', query, headers)
 ucmngapiucmsdkOpenAppAllOpenApp.get.url = 'ucmng/api/ucmsdk/OpenApp/AllOpenApp'
ucmngapiucmsdkOpenAppAllOpenApp.get.type = 'get'
let ucmngapisysmngOpenAppQuery = () => {}
ucmngapisysmngOpenAppQuery.post = (query, headers) => http.post('ucmng/api/sysmng/OpenApp/Query', query, headers)
 ucmngapisysmngOpenAppQuery.post.url = 'ucmng/api/sysmng/OpenApp/Query'
ucmngapisysmngOpenAppQuery.post.type = 'post'
let ucmngapisysmngOpenApp = () => {}
ucmngapisysmngOpenApp = (query, headers) => http.get('ucmng/api/sysmng/OpenApp/{id}', query, headers)
ucmngapisysmngOpenApp.url = 'ucmng/api/sysmng/OpenApp/{id}'
ucmngapisysmngOpenApp.type = 'get'
ucmngapisysmngOpenApp.get = (query, headers) => http.get('ucmng/api/sysmng/OpenApp/{id}', query, headers)
 ucmngapisysmngOpenApp.get.url = 'ucmng/api/sysmng/OpenApp/{id}'
ucmngapisysmngOpenApp.get.type = 'get'
ucmngapisysmngOpenApp.put = (query, headers) => http.put('ucmng/api/sysmng/OpenApp/{id}', query, headers)
 ucmngapisysmngOpenApp.put.url = 'ucmng/api/sysmng/OpenApp/{id}'
ucmngapisysmngOpenApp.put.type = 'put'
let ucmngapisysmngOpenAppAdd = () => {}
ucmngapisysmngOpenAppAdd.post = (query, headers) => http.post('ucmng/api/sysmng/OpenApp/Add', query, headers)
 ucmngapisysmngOpenAppAdd.post.url = 'ucmng/api/sysmng/OpenApp/Add'
ucmngapisysmngOpenAppAdd.post.type = 'post'
let ucmngapisysmngOperateLogQuery = () => {}
ucmngapisysmngOperateLogQuery.post = (query, headers) => http.post('ucmng/api/sysmng/OperateLog/Query', query, headers)
 ucmngapisysmngOperateLogQuery.post.url = 'ucmng/api/sysmng/OperateLog/Query'
ucmngapisysmngOperateLogQuery.post.type = 'post'
let ucmngapisysmngOperateLog查询 = () => {}
ucmngapisysmngOperateLog查询.post = (query, headers) => http.post('ucmng/api/sysmng/OperateLog/查询', query, headers)
 ucmngapisysmngOperateLog查询.post.url = 'ucmng/api/sysmng/OperateLog/查询'
ucmngapisysmngOperateLog查询.post.type = 'post'
let ucmngapiucmsdkResourcesQuery = () => {}
ucmngapiucmsdkResourcesQuery.post = (query, headers) => http.post('ucmng/api/ucmsdk/Resources/Query', query, headers)
 ucmngapiucmsdkResourcesQuery.post.url = 'ucmng/api/ucmsdk/Resources/Query'
ucmngapiucmsdkResourcesQuery.post.type = 'post'
let ucmngapiucmsdkRoleGetRoleIdByApi = () => {}
ucmngapiucmsdkRoleGetRoleIdByApi = (query, headers) => http.get('ucmng/api/ucmsdk/Role/GetRoleIdByApi', query, headers)
ucmngapiucmsdkRoleGetRoleIdByApi.url = 'ucmng/api/ucmsdk/Role/GetRoleIdByApi'
ucmngapiucmsdkRoleGetRoleIdByApi.type = 'get'
ucmngapiucmsdkRoleGetRoleIdByApi.get = (query, headers) => http.get('ucmng/api/ucmsdk/Role/GetRoleIdByApi', query, headers)
 ucmngapiucmsdkRoleGetRoleIdByApi.get.url = 'ucmng/api/ucmsdk/Role/GetRoleIdByApi'
ucmngapiucmsdkRoleGetRoleIdByApi.get.type = 'get'
let ucmngapisysmngRoleQuery = () => {}
ucmngapisysmngRoleQuery.post = (query, headers) => http.post('ucmng/api/sysmng/Role/Query', query, headers)
 ucmngapisysmngRoleQuery.post.url = 'ucmng/api/sysmng/Role/Query'
ucmngapisysmngRoleQuery.post.type = 'post'
let ucmngapisysmngRole = () => {}
ucmngapisysmngRole = (query, headers) => http.get('ucmng/api/sysmng/Role/{id}', query, headers)
ucmngapisysmngRole.url = 'ucmng/api/sysmng/Role/{id}'
ucmngapisysmngRole.type = 'get'
ucmngapisysmngRole.get = (query, headers) => http.get('ucmng/api/sysmng/Role/{id}', query, headers)
 ucmngapisysmngRole.get.url = 'ucmng/api/sysmng/Role/{id}'
ucmngapisysmngRole.get.type = 'get'
let ucmngapisysmngRoleUpdateRole = () => {}
ucmngapisysmngRoleUpdateRole.post = (query, headers) => http.post('ucmng/api/sysmng/Role/UpdateRole', query, headers)
 ucmngapisysmngRoleUpdateRole.post.url = 'ucmng/api/sysmng/Role/UpdateRole'
ucmngapisysmngRoleUpdateRole.post.type = 'post'
ucmngapisysmngRole.post = (query, headers) => http.post('ucmng/api/sysmng/Role', query, headers)
 ucmngapisysmngRole.post.url = 'ucmng/api/sysmng/Role'
ucmngapisysmngRole.post.type = 'post'
let ucmngapisysmngRoleMenuOper = () => {}
ucmngapisysmngRoleMenuOper = (query, headers) => http.get('ucmng/api/sysmng/RoleMenuOper', query, headers)
ucmngapisysmngRoleMenuOper.url = 'ucmng/api/sysmng/RoleMenuOper'
ucmngapisysmngRoleMenuOper.type = 'get'
ucmngapisysmngRoleMenuOper.get = (query, headers) => http.get('ucmng/api/sysmng/RoleMenuOper', query, headers)
 ucmngapisysmngRoleMenuOper.get.url = 'ucmng/api/sysmng/RoleMenuOper'
ucmngapisysmngRoleMenuOper.get.type = 'get'
let ucmngapisysmngScopeGetScope = () => {}
ucmngapisysmngScopeGetScope = (query, headers) => http.get('ucmng/api/sysmng/Scope/GetScope', query, headers)
ucmngapisysmngScopeGetScope.url = 'ucmng/api/sysmng/Scope/GetScope'
ucmngapisysmngScopeGetScope.type = 'get'
ucmngapisysmngScopeGetScope.get = (query, headers) => http.get('ucmng/api/sysmng/Scope/GetScope', query, headers)
 ucmngapisysmngScopeGetScope.get.url = 'ucmng/api/sysmng/Scope/GetScope'
ucmngapisysmngScopeGetScope.get.type = 'get'
let ucmngapisysmngSeachGetMenus = () => {}
ucmngapisysmngSeachGetMenus = (query, headers) => http.get('ucmng/api/sysmng/Seach/GetMenus', query, headers)
ucmngapisysmngSeachGetMenus.url = 'ucmng/api/sysmng/Seach/GetMenus'
ucmngapisysmngSeachGetMenus.type = 'get'
ucmngapisysmngSeachGetMenus.get = (query, headers) => http.get('ucmng/api/sysmng/Seach/GetMenus', query, headers)
 ucmngapisysmngSeachGetMenus.get.url = 'ucmng/api/sysmng/Seach/GetMenus'
ucmngapisysmngSeachGetMenus.get.type = 'get'
let ucmngapiucmsdkSubSystemQuery = () => {}
ucmngapiucmsdkSubSystemQuery.post = (query, headers) => http.post('ucmng/api/ucmsdk/SubSystem/Query', query, headers)
 ucmngapiucmsdkSubSystemQuery.post.url = 'ucmng/api/ucmsdk/SubSystem/Query'
ucmngapiucmsdkSubSystemQuery.post.type = 'post'
let ucmngapiucmsdkSubSystem = () => {}
ucmngapiucmsdkSubSystem = (query, headers) => http.get('ucmng/api/ucmsdk/SubSystem', query, headers)
ucmngapiucmsdkSubSystem.url = 'ucmng/api/ucmsdk/SubSystem'
ucmngapiucmsdkSubSystem.type = 'get'
ucmngapiucmsdkSubSystem.get = (query, headers) => http.get('ucmng/api/ucmsdk/SubSystem', query, headers)
 ucmngapiucmsdkSubSystem.get.url = 'ucmng/api/ucmsdk/SubSystem'
ucmngapiucmsdkSubSystem.get.type = 'get'
ucmngapiucmsdkSubSystem.post = (query, headers) => http.post('ucmng/api/ucmsdk/SubSystem', query, headers)
 ucmngapiucmsdkSubSystem.post.url = 'ucmng/api/ucmsdk/SubSystem'
ucmngapiucmsdkSubSystem.post.type = 'post'
let ucmngapisysmngSubSystemQuery = () => {}
ucmngapisysmngSubSystemQuery.post = (query, headers) => http.post('ucmng/api/sysmng/SubSystem/Query', query, headers)
 ucmngapisysmngSubSystemQuery.post.url = 'ucmng/api/sysmng/SubSystem/Query'
ucmngapisysmngSubSystemQuery.post.type = 'post'
let ucmngapisysmngSubSystemDisabled = () => {}
ucmngapisysmngSubSystemDisabled.put = (query, headers) => http.put('ucmng/api/sysmng/SubSystem/Disabled', query, headers)
 ucmngapisysmngSubSystemDisabled.put.url = 'ucmng/api/sysmng/SubSystem/Disabled'
ucmngapisysmngSubSystemDisabled.put.type = 'put'
let ucmngapisysmngSubSystemSource = () => {}
ucmngapisysmngSubSystemSource.post = (query, headers) => http.post('ucmng/api/sysmng/SubSystem/Source', query, headers)
 ucmngapisysmngSubSystemSource.post.url = 'ucmng/api/sysmng/SubSystem/Source'
ucmngapisysmngSubSystemSource.post.type = 'post'
let ucmngapisysmngSubSystem = () => {}
ucmngapisysmngSubSystem = (query, headers) => http.get('ucmng/api/sysmng/SubSystem', query, headers)
ucmngapisysmngSubSystem.url = 'ucmng/api/sysmng/SubSystem'
ucmngapisysmngSubSystem.type = 'get'
ucmngapisysmngSubSystem.get = (query, headers) => http.get('ucmng/api/sysmng/SubSystem', query, headers)
 ucmngapisysmngSubSystem.get.url = 'ucmng/api/sysmng/SubSystem'
ucmngapisysmngSubSystem.get.type = 'get'
ucmngapisysmngSubSystem.post = (query, headers) => http.post('ucmng/api/sysmng/SubSystem', query, headers)
 ucmngapisysmngSubSystem.post.url = 'ucmng/api/sysmng/SubSystem'
ucmngapisysmngSubSystem.post.type = 'post'
let ucmngapisysmngSubSystemAdd = () => {}
ucmngapisysmngSubSystemAdd.post = (query, headers) => http.post('ucmng/api/sysmng/SubSystem/Add', query, headers)
 ucmngapisysmngSubSystemAdd.post.url = 'ucmng/api/sysmng/SubSystem/Add'
ucmngapisysmngSubSystemAdd.post.type = 'post'
ucmngapisysmngSubSystem.put = (query, headers) => http.put('ucmng/api/sysmng/SubSystem/{clientId}', query, headers)
 ucmngapisysmngSubSystem.put.url = 'ucmng/api/sysmng/SubSystem/{clientId}'
ucmngapisysmngSubSystem.put.type = 'put'
let ucmngapivueUserJsTicket = () => {}
ucmngapivueUserJsTicket = (query, headers) => http.get('ucmng/api/vue/User/JsTicket', query, headers)
ucmngapivueUserJsTicket.url = 'ucmng/api/vue/User/JsTicket'
ucmngapivueUserJsTicket.type = 'get'
ucmngapivueUserJsTicket.get = (query, headers) => http.get('ucmng/api/vue/User/JsTicket', query, headers)
 ucmngapivueUserJsTicket.get.url = 'ucmng/api/vue/User/JsTicket'
ucmngapivueUserJsTicket.get.type = 'get'
let ucmngapivueUserGetUserAuthor = () => {}
ucmngapivueUserGetUserAuthor = (query, headers) => http.get('ucmng/api/vue/User/GetUserAuthor', query, headers)
ucmngapivueUserGetUserAuthor.url = 'ucmng/api/vue/User/GetUserAuthor'
ucmngapivueUserGetUserAuthor.type = 'get'
ucmngapivueUserGetUserAuthor.get = (query, headers) => http.get('ucmng/api/vue/User/GetUserAuthor', query, headers)
 ucmngapivueUserGetUserAuthor.get.url = 'ucmng/api/vue/User/GetUserAuthor'
ucmngapivueUserGetUserAuthor.get.type = 'get'
let ucmngapiucmsdkUserGetAllUserId = () => {}
ucmngapiucmsdkUserGetAllUserId = (query, headers) => http.get('ucmng/api/ucmsdk/User/GetAllUserId', query, headers)
ucmngapiucmsdkUserGetAllUserId.url = 'ucmng/api/ucmsdk/User/GetAllUserId'
ucmngapiucmsdkUserGetAllUserId.type = 'get'
ucmngapiucmsdkUserGetAllUserId.get = (query, headers) => http.get('ucmng/api/ucmsdk/User/GetAllUserId', query, headers)
 ucmngapiucmsdkUserGetAllUserId.get.url = 'ucmng/api/ucmsdk/User/GetAllUserId'
ucmngapiucmsdkUserGetAllUserId.get.type = 'get'
let ucmngapiucmsdkUserGetUserId = () => {}
ucmngapiucmsdkUserGetUserId = (query, headers) => http.get('ucmng/api/ucmsdk/User/GetUserId/{userId}', query, headers)
ucmngapiucmsdkUserGetUserId.url = 'ucmng/api/ucmsdk/User/GetUserId/{userId}'
ucmngapiucmsdkUserGetUserId.type = 'get'
ucmngapiucmsdkUserGetUserId.get = (query, headers) => http.get('ucmng/api/ucmsdk/User/GetUserId/{userId}', query, headers)
 ucmngapiucmsdkUserGetUserId.get.url = 'ucmng/api/ucmsdk/User/GetUserId/{userId}'
ucmngapiucmsdkUserGetUserId.get.type = 'get'
let ucmngapiucmsdkUserGetUserByOpenId = () => {}
ucmngapiucmsdkUserGetUserByOpenId = (query, headers) => http.get('ucmng/api/ucmsdk/User/GetUserByOpenId', query, headers)
ucmngapiucmsdkUserGetUserByOpenId.url = 'ucmng/api/ucmsdk/User/GetUserByOpenId'
ucmngapiucmsdkUserGetUserByOpenId.type = 'get'
ucmngapiucmsdkUserGetUserByOpenId.get = (query, headers) => http.get('ucmng/api/ucmsdk/User/GetUserByOpenId', query, headers)
 ucmngapiucmsdkUserGetUserByOpenId.get.url = 'ucmng/api/ucmsdk/User/GetUserByOpenId'
ucmngapiucmsdkUserGetUserByOpenId.get.type = 'get'
let ucmngapiucmsdkUserGetListUserByIds = () => {}
ucmngapiucmsdkUserGetListUserByIds.post = (query, headers) => http.post('ucmng/api/ucmsdk/User/GetListUserByIds', query, headers)
 ucmngapiucmsdkUserGetListUserByIds.post.url = 'ucmng/api/ucmsdk/User/GetListUserByIds'
ucmngapiucmsdkUserGetListUserByIds.post.type = 'post'
let ucmngapiucmsdkUserGetUserAuthor = () => {}
ucmngapiucmsdkUserGetUserAuthor = (query, headers) => http.get('ucmng/api/ucmsdk/User/GetUserAuthor', query, headers)
ucmngapiucmsdkUserGetUserAuthor.url = 'ucmng/api/ucmsdk/User/GetUserAuthor'
ucmngapiucmsdkUserGetUserAuthor.type = 'get'
ucmngapiucmsdkUserGetUserAuthor.get = (query, headers) => http.get('ucmng/api/ucmsdk/User/GetUserAuthor', query, headers)
 ucmngapiucmsdkUserGetUserAuthor.get.url = 'ucmng/api/ucmsdk/User/GetUserAuthor'
ucmngapiucmsdkUserGetUserAuthor.get.type = 'get'
let ucmngapiucmsdkUserGetUserAuthorList = () => {}
ucmngapiucmsdkUserGetUserAuthorList.post = (query, headers) => http.post('ucmng/api/ucmsdk/User/GetUserAuthorList', query, headers)
 ucmngapiucmsdkUserGetUserAuthorList.post.url = 'ucmng/api/ucmsdk/User/GetUserAuthorList'
ucmngapiucmsdkUserGetUserAuthorList.post.type = 'post'
let ucmngapiucmsdkUserGetUserDetail = () => {}
ucmngapiucmsdkUserGetUserDetail = (query, headers) => http.get('ucmng/api/ucmsdk/User/GetUserDetail', query, headers)
ucmngapiucmsdkUserGetUserDetail.url = 'ucmng/api/ucmsdk/User/GetUserDetail'
ucmngapiucmsdkUserGetUserDetail.type = 'get'
ucmngapiucmsdkUserGetUserDetail.get = (query, headers) => http.get('ucmng/api/ucmsdk/User/GetUserDetail', query, headers)
 ucmngapiucmsdkUserGetUserDetail.get.url = 'ucmng/api/ucmsdk/User/GetUserDetail'
ucmngapiucmsdkUserGetUserDetail.get.type = 'get'
let ucmngapiucmsdkUserTryAddUser = () => {}
ucmngapiucmsdkUserTryAddUser = (query, headers) => http.get('ucmng/api/ucmsdk/User/TryAddUser', query, headers)
ucmngapiucmsdkUserTryAddUser.url = 'ucmng/api/ucmsdk/User/TryAddUser'
ucmngapiucmsdkUserTryAddUser.type = 'get'
ucmngapiucmsdkUserTryAddUser.get = (query, headers) => http.get('ucmng/api/ucmsdk/User/TryAddUser', query, headers)
 ucmngapiucmsdkUserTryAddUser.get.url = 'ucmng/api/ucmsdk/User/TryAddUser'
ucmngapiucmsdkUserTryAddUser.get.type = 'get'
let ucmngapiucmsdkUserTryAddUserDetail = () => {}
ucmngapiucmsdkUserTryAddUserDetail = (query, headers) => http.get('ucmng/api/ucmsdk/User/TryAddUserDetail', query, headers)
ucmngapiucmsdkUserTryAddUserDetail.url = 'ucmng/api/ucmsdk/User/TryAddUserDetail'
ucmngapiucmsdkUserTryAddUserDetail.type = 'get'
ucmngapiucmsdkUserTryAddUserDetail.get = (query, headers) => http.get('ucmng/api/ucmsdk/User/TryAddUserDetail', query, headers)
 ucmngapiucmsdkUserTryAddUserDetail.get.url = 'ucmng/api/ucmsdk/User/TryAddUserDetail'
ucmngapiucmsdkUserTryAddUserDetail.get.type = 'get'
let ucmngapiucmsdkUserGetUserDetailList = () => {}
ucmngapiucmsdkUserGetUserDetailList.post = (query, headers) => http.post('ucmng/api/ucmsdk/User/GetUserDetailList', query, headers)
 ucmngapiucmsdkUserGetUserDetailList.post.url = 'ucmng/api/ucmsdk/User/GetUserDetailList'
ucmngapiucmsdkUserGetUserDetailList.post.type = 'post'
let ucmngapiucmsdkUserGetUsers = () => {}
ucmngapiucmsdkUserGetUsers = (query, headers) => http.get('ucmng/api/ucmsdk/User/GetUsers', query, headers)
ucmngapiucmsdkUserGetUsers.url = 'ucmng/api/ucmsdk/User/GetUsers'
ucmngapiucmsdkUserGetUsers.type = 'get'
ucmngapiucmsdkUserGetUsers.get = (query, headers) => http.get('ucmng/api/ucmsdk/User/GetUsers', query, headers)
 ucmngapiucmsdkUserGetUsers.get.url = 'ucmng/api/ucmsdk/User/GetUsers'
ucmngapiucmsdkUserGetUsers.get.type = 'get'
let ucmngapiucmsdkUserModifyUser = () => {}
ucmngapiucmsdkUserModifyUser.post = (query, headers) => http.post('ucmng/api/ucmsdk/User/ModifyUser', query, headers)
 ucmngapiucmsdkUserModifyUser.post.url = 'ucmng/api/ucmsdk/User/ModifyUser'
ucmngapiucmsdkUserModifyUser.post.type = 'post'
let ucmngapiucmsdkUserThreeElementsIdentity = () => {}
ucmngapiucmsdkUserThreeElementsIdentity.post = (query, headers) => http.post('ucmng/api/ucmsdk/User/ThreeElementsIdentity', query, headers)
 ucmngapiucmsdkUserThreeElementsIdentity.post.url = 'ucmng/api/ucmsdk/User/ThreeElementsIdentity'
ucmngapiucmsdkUserThreeElementsIdentity.post.type = 'post'
let ucmngapiucmsdkUserTwoElementsIdentity = () => {}
ucmngapiucmsdkUserTwoElementsIdentity.post = (query, headers) => http.post('ucmng/api/ucmsdk/User/TwoElementsIdentity', query, headers)
 ucmngapiucmsdkUserTwoElementsIdentity.post.url = 'ucmng/api/ucmsdk/User/TwoElementsIdentity'
ucmngapiucmsdkUserTwoElementsIdentity.post.type = 'post'
let ucmngapiucmsdkUserCreateUserByPhone = () => {}
ucmngapiucmsdkUserCreateUserByPhone.post = (query, headers) => http.post('ucmng/api/ucmsdk/User/CreateUserByPhone', query, headers)
 ucmngapiucmsdkUserCreateUserByPhone.post.url = 'ucmng/api/ucmsdk/User/CreateUserByPhone'
ucmngapiucmsdkUserCreateUserByPhone.post.type = 'post'
let ucmngapisysmngUserQuery = () => {}
ucmngapisysmngUserQuery.post = (query, headers) => http.post('ucmng/api/sysmng/User/Query', query, headers)
 ucmngapisysmngUserQuery.post.url = 'ucmng/api/sysmng/User/Query'
ucmngapisysmngUserQuery.post.type = 'post'
let ucmngapisysmngUser = () => {}
ucmngapisysmngUser = (query, headers) => http.get('ucmng/api/sysmng/User/{userId}', query, headers)
ucmngapisysmngUser.url = 'ucmng/api/sysmng/User/{userId}'
ucmngapisysmngUser.type = 'get'
ucmngapisysmngUser.get = (query, headers) => http.get('ucmng/api/sysmng/User/{userId}', query, headers)
 ucmngapisysmngUser.get.url = 'ucmng/api/sysmng/User/{userId}'
ucmngapisysmngUser.get.type = 'get'
let ucmngapisysmngUserGetGroupRoles = () => {}
ucmngapisysmngUserGetGroupRoles = (query, headers) => http.get('ucmng/api/sysmng/User/GetGroupRoles', query, headers)
ucmngapisysmngUserGetGroupRoles.url = 'ucmng/api/sysmng/User/GetGroupRoles'
ucmngapisysmngUserGetGroupRoles.type = 'get'
ucmngapisysmngUserGetGroupRoles.get = (query, headers) => http.get('ucmng/api/sysmng/User/GetGroupRoles', query, headers)
 ucmngapisysmngUserGetGroupRoles.get.url = 'ucmng/api/sysmng/User/GetGroupRoles'
ucmngapisysmngUserGetGroupRoles.get.type = 'get'
ucmngapisysmngUser.post = (query, headers) => http.post('ucmng/api/sysmng/User', query, headers)
 ucmngapisysmngUser.post.url = 'ucmng/api/sysmng/User'
ucmngapisysmngUser.post.type = 'post'
let ucmngapisysmngUserResetPwd = () => {}
ucmngapisysmngUserResetPwd.put = (query, headers) => http.put('ucmng/api/sysmng/User/ResetPwd/{userId}', query, headers)
 ucmngapisysmngUserResetPwd.put.url = 'ucmng/api/sysmng/User/ResetPwd/{userId}'
ucmngapisysmngUserResetPwd.put.type = 'put'
let ucmngapiucmsdkUserAuthorCreateUserAuthor = () => {}
ucmngapiucmsdkUserAuthorCreateUserAuthor.post = (query, headers) => http.post('ucmng/api/ucmsdk/UserAuthor/CreateUserAuthor', query, headers)
 ucmngapiucmsdkUserAuthorCreateUserAuthor.post.url = 'ucmng/api/ucmsdk/UserAuthor/CreateUserAuthor'
ucmngapiucmsdkUserAuthorCreateUserAuthor.post.type = 'post'
let ucmngapiucmsdkUserAuthorRegAccountByOpenId = () => {}
ucmngapiucmsdkUserAuthorRegAccountByOpenId.post = (query, headers) => http.post('ucmng/api/ucmsdk/UserAuthor/RegAccountByOpenId', query, headers)
 ucmngapiucmsdkUserAuthorRegAccountByOpenId.post.url = 'ucmng/api/ucmsdk/UserAuthor/RegAccountByOpenId'
ucmngapiucmsdkUserAuthorRegAccountByOpenId.post.type = 'post'
let ucmngapiucmsdkUserAuthorRegAccountForInternal = () => {}
ucmngapiucmsdkUserAuthorRegAccountForInternal.post = (query, headers) => http.post('ucmng/api/ucmsdk/UserAuthor/RegAccountForInternal', query, headers)
 ucmngapiucmsdkUserAuthorRegAccountForInternal.post.url = 'ucmng/api/ucmsdk/UserAuthor/RegAccountForInternal'
ucmngapiucmsdkUserAuthorRegAccountForInternal.post.type = 'post'
let ucmngapiucmsdkUserBank = () => {}
ucmngapiucmsdkUserBank = (query, headers) => http.get('ucmng/api/ucmsdk/UserBank/{userId}', query, headers)
ucmngapiucmsdkUserBank.url = 'ucmng/api/ucmsdk/UserBank/{userId}'
ucmngapiucmsdkUserBank.type = 'get'
ucmngapiucmsdkUserBank.get = (query, headers) => http.get('ucmng/api/ucmsdk/UserBank/{userId}', query, headers)
 ucmngapiucmsdkUserBank.get.url = 'ucmng/api/ucmsdk/UserBank/{userId}'
ucmngapiucmsdkUserBank.get.type = 'get'
let ucmngapiucmsdkUserBankGetUserBank = () => {}
ucmngapiucmsdkUserBankGetUserBank = (query, headers) => http.get('ucmng/api/ucmsdk/UserBank/GetUserBank', query, headers)
ucmngapiucmsdkUserBankGetUserBank.url = 'ucmng/api/ucmsdk/UserBank/GetUserBank'
ucmngapiucmsdkUserBankGetUserBank.type = 'get'
ucmngapiucmsdkUserBankGetUserBank.get = (query, headers) => http.get('ucmng/api/ucmsdk/UserBank/GetUserBank', query, headers)
 ucmngapiucmsdkUserBankGetUserBank.get.url = 'ucmng/api/ucmsdk/UserBank/GetUserBank'
ucmngapiucmsdkUserBankGetUserBank.get.type = 'get'
let ucmngapiucmsdkUserCertLiveCert = () => {}
ucmngapiucmsdkUserCertLiveCert.post = (query, headers) => http.post('ucmng/api/ucmsdk/UserCert/LiveCert', query, headers)
 ucmngapiucmsdkUserCertLiveCert.post.url = 'ucmng/api/ucmsdk/UserCert/LiveCert'
ucmngapiucmsdkUserCertLiveCert.post.type = 'post'
let ucmngapiucmsdkUserInfoGetUserInfo = () => {}
ucmngapiucmsdkUserInfoGetUserInfo = (query, headers) => http.get('ucmng/api/ucmsdk/UserInfo/GetUserInfo', query, headers)
ucmngapiucmsdkUserInfoGetUserInfo.url = 'ucmng/api/ucmsdk/UserInfo/GetUserInfo'
ucmngapiucmsdkUserInfoGetUserInfo.type = 'get'
ucmngapiucmsdkUserInfoGetUserInfo.get = (query, headers) => http.get('ucmng/api/ucmsdk/UserInfo/GetUserInfo', query, headers)
 ucmngapiucmsdkUserInfoGetUserInfo.get.url = 'ucmng/api/ucmsdk/UserInfo/GetUserInfo'
ucmngapiucmsdkUserInfoGetUserInfo.get.type = 'get'
let ucmngapiucmsdkUserInfoGetUserInfoIntercept = () => {}
ucmngapiucmsdkUserInfoGetUserInfoIntercept = (query, headers) => http.get('ucmng/api/ucmsdk/UserInfo/GetUserInfoIntercept', query, headers)
ucmngapiucmsdkUserInfoGetUserInfoIntercept.url = 'ucmng/api/ucmsdk/UserInfo/GetUserInfoIntercept'
ucmngapiucmsdkUserInfoGetUserInfoIntercept.type = 'get'
ucmngapiucmsdkUserInfoGetUserInfoIntercept.get = (query, headers) => http.get('ucmng/api/ucmsdk/UserInfo/GetUserInfoIntercept', query, headers)
 ucmngapiucmsdkUserInfoGetUserInfoIntercept.get.url = 'ucmng/api/ucmsdk/UserInfo/GetUserInfoIntercept'
ucmngapiucmsdkUserInfoGetUserInfoIntercept.get.type = 'get'
let ucmngapiucmsdkinvoicedef = () => {}
ucmngapiucmsdkinvoicedef = (query, headers) => http.get('ucmng/api/ucmsdk/invoice/def', query, headers)
ucmngapiucmsdkinvoicedef.url = 'ucmng/api/ucmsdk/invoice/def'
ucmngapiucmsdkinvoicedef.type = 'get'
ucmngapiucmsdkinvoicedef.get = (query, headers) => http.get('ucmng/api/ucmsdk/invoice/def', query, headers)
 ucmngapiucmsdkinvoicedef.get.url = 'ucmng/api/ucmsdk/invoice/def'
ucmngapiucmsdkinvoicedef.get.type = 'get'
let ucmngapiucmsdkinvoicelist = () => {}
ucmngapiucmsdkinvoicelist = (query, headers) => http.get('ucmng/api/ucmsdk/invoice/list', query, headers)
ucmngapiucmsdkinvoicelist.url = 'ucmng/api/ucmsdk/invoice/list'
ucmngapiucmsdkinvoicelist.type = 'get'
ucmngapiucmsdkinvoicelist.get = (query, headers) => http.get('ucmng/api/ucmsdk/invoice/list', query, headers)
 ucmngapiucmsdkinvoicelist.get.url = 'ucmng/api/ucmsdk/invoice/list'
ucmngapiucmsdkinvoicelist.get.type = 'get'
let ucmngapiucmsdkinvoiceget = () => {}
ucmngapiucmsdkinvoiceget = (query, headers) => http.get('ucmng/api/ucmsdk/invoice/get', query, headers)
ucmngapiucmsdkinvoiceget.url = 'ucmng/api/ucmsdk/invoice/get'
ucmngapiucmsdkinvoiceget.type = 'get'
ucmngapiucmsdkinvoiceget.get = (query, headers) => http.get('ucmng/api/ucmsdk/invoice/get', query, headers)
 ucmngapiucmsdkinvoiceget.get.url = 'ucmng/api/ucmsdk/invoice/get'
ucmngapiucmsdkinvoiceget.get.type = 'get'
let ucmngapiucmsdkinvoicesetdef = () => {}
ucmngapiucmsdkinvoicesetdef.post = (query, headers) => http.post('ucmng/api/ucmsdk/invoice/setdef', query, headers)
 ucmngapiucmsdkinvoicesetdef.post.url = 'ucmng/api/ucmsdk/invoice/setdef'
ucmngapiucmsdkinvoicesetdef.post.type = 'post'
let ucmngapiucmsdkinvoicedel = () => {}
ucmngapiucmsdkinvoicedel.post = (query, headers) => http.post('ucmng/api/ucmsdk/invoice/del', query, headers)
 ucmngapiucmsdkinvoicedel.post.url = 'ucmng/api/ucmsdk/invoice/del'
ucmngapiucmsdkinvoicedel.post.type = 'post'
let ucmngapiucmsdkinvoiceadd = () => {}
ucmngapiucmsdkinvoiceadd.post = (query, headers) => http.post('ucmng/api/ucmsdk/invoice/add', query, headers)
 ucmngapiucmsdkinvoiceadd.post.url = 'ucmng/api/ucmsdk/invoice/add'
ucmngapiucmsdkinvoiceadd.post.type = 'post'
let ucmngapiucmsdkinvoicemodify = () => {}
ucmngapiucmsdkinvoicemodify.post = (query, headers) => http.post('ucmng/api/ucmsdk/invoice/modify', query, headers)
 ucmngapiucmsdkinvoicemodify.post.url = 'ucmng/api/ucmsdk/invoice/modify'
ucmngapiucmsdkinvoicemodify.post.type = 'post'
let ucmngapiucmsdkUserMerchant = () => {}
ucmngapiucmsdkUserMerchant.post = (query, headers) => http.post('ucmng/api/ucmsdk/UserMerchant', query, headers)
 ucmngapiucmsdkUserMerchant.post.url = 'ucmng/api/ucmsdk/UserMerchant'
ucmngapiucmsdkUserMerchant.post.type = 'post'
let ucmngapiucmsdkUserMerchantModify = () => {}
ucmngapiucmsdkUserMerchantModify.post = (query, headers) => http.post('ucmng/api/ucmsdk/UserMerchant/Modify', query, headers)
 ucmngapiucmsdkUserMerchantModify.post.url = 'ucmng/api/ucmsdk/UserMerchant/Modify'
ucmngapiucmsdkUserMerchantModify.post.type = 'post'
ucmngapiucmsdkUserMerchant = connect(ucmngapiucmsdkUserMerchant, (query, headers) => http.get('ucmng/api/ucmsdk/UserMerchant/{userId}', query, headers))
ucmngapiucmsdkUserMerchant.url = 'ucmng/api/ucmsdk/UserMerchant/{userId}'
ucmngapiucmsdkUserMerchant.type = 'get'
ucmngapiucmsdkUserMerchant.get = (query, headers) => http.get('ucmng/api/ucmsdk/UserMerchant/{userId}', query, headers)
 ucmngapiucmsdkUserMerchant.get.url = 'ucmng/api/ucmsdk/UserMerchant/{userId}'
ucmngapiucmsdkUserMerchant.get.type = 'get'
let ucmngapiucmsdkUserMerchantGetMerchantId = () => {}
ucmngapiucmsdkUserMerchantGetMerchantId = (query, headers) => http.get('ucmng/api/ucmsdk/UserMerchant/GetMerchantId', query, headers)
ucmngapiucmsdkUserMerchantGetMerchantId.url = 'ucmng/api/ucmsdk/UserMerchant/GetMerchantId'
ucmngapiucmsdkUserMerchantGetMerchantId.type = 'get'
ucmngapiucmsdkUserMerchantGetMerchantId.get = (query, headers) => http.get('ucmng/api/ucmsdk/UserMerchant/GetMerchantId', query, headers)
 ucmngapiucmsdkUserMerchantGetMerchantId.get.url = 'ucmng/api/ucmsdk/UserMerchant/GetMerchantId'
ucmngapiucmsdkUserMerchantGetMerchantId.get.type = 'get'
let ucmngapiucmsdkUserMerchantUpdateOpenId = () => {}
ucmngapiucmsdkUserMerchantUpdateOpenId.post = (query, headers) => http.post('ucmng/api/ucmsdk/UserMerchant/UpdateOpenId', query, headers)
 ucmngapiucmsdkUserMerchantUpdateOpenId.post.url = 'ucmng/api/ucmsdk/UserMerchant/UpdateOpenId'
ucmngapiucmsdkUserMerchantUpdateOpenId.post.type = 'post'
let ucmngapiucmsdkUserReceiverGetUserReceiver = () => {}
ucmngapiucmsdkUserReceiverGetUserReceiver = (query, headers) => http.get('ucmng/api/ucmsdk/UserReceiver/GetUserReceiver', query, headers)
ucmngapiucmsdkUserReceiverGetUserReceiver.url = 'ucmng/api/ucmsdk/UserReceiver/GetUserReceiver'
ucmngapiucmsdkUserReceiverGetUserReceiver.type = 'get'
ucmngapiucmsdkUserReceiverGetUserReceiver.get = (query, headers) => http.get('ucmng/api/ucmsdk/UserReceiver/GetUserReceiver', query, headers)
 ucmngapiucmsdkUserReceiverGetUserReceiver.get.url = 'ucmng/api/ucmsdk/UserReceiver/GetUserReceiver'
ucmngapiucmsdkUserReceiverGetUserReceiver.get.type = 'get'
let ucmngapiucmsdkUserReceiverGetUserReceiverList = () => {}
ucmngapiucmsdkUserReceiverGetUserReceiverList = (query, headers) => http.get('ucmng/api/ucmsdk/UserReceiver/GetUserReceiverList', query, headers)
ucmngapiucmsdkUserReceiverGetUserReceiverList.url = 'ucmng/api/ucmsdk/UserReceiver/GetUserReceiverList'
ucmngapiucmsdkUserReceiverGetUserReceiverList.type = 'get'
ucmngapiucmsdkUserReceiverGetUserReceiverList.get = (query, headers) => http.get('ucmng/api/ucmsdk/UserReceiver/GetUserReceiverList', query, headers)
 ucmngapiucmsdkUserReceiverGetUserReceiverList.get.url = 'ucmng/api/ucmsdk/UserReceiver/GetUserReceiverList'
ucmngapiucmsdkUserReceiverGetUserReceiverList.get.type = 'get'
let ucmngapiucmsdkUserReceiverSetDefault = () => {}
ucmngapiucmsdkUserReceiverSetDefault.post = (query, headers) => http.post('ucmng/api/ucmsdk/UserReceiver/SetDefault', query, headers)
 ucmngapiucmsdkUserReceiverSetDefault.post.url = 'ucmng/api/ucmsdk/UserReceiver/SetDefault'
ucmngapiucmsdkUserReceiverSetDefault.post.type = 'post'
let ucmngapiucmsdkUserReceiverModifyUserReceiver = () => {}
ucmngapiucmsdkUserReceiverModifyUserReceiver.post = (query, headers) => http.post('ucmng/api/ucmsdk/UserReceiver/ModifyUserReceiver', query, headers)
 ucmngapiucmsdkUserReceiverModifyUserReceiver.post.url = 'ucmng/api/ucmsdk/UserReceiver/ModifyUserReceiver'
ucmngapiucmsdkUserReceiverModifyUserReceiver.post.type = 'post'
let ucmngapiucmsdkUserReceiveraddUserReceiver = () => {}
ucmngapiucmsdkUserReceiveraddUserReceiver.post = (query, headers) => http.post('ucmng/api/ucmsdk/UserReceiver/addUserReceiver', query, headers)
 ucmngapiucmsdkUserReceiveraddUserReceiver.post.url = 'ucmng/api/ucmsdk/UserReceiver/addUserReceiver'
ucmngapiucmsdkUserReceiveraddUserReceiver.post.type = 'post'
let ucmngapiucmsdkUserReceiverDelete = () => {}
ucmngapiucmsdkUserReceiverDelete.post = (query, headers) => http.post('ucmng/api/ucmsdk/UserReceiver/Delete', query, headers)
 ucmngapiucmsdkUserReceiverDelete.post.url = 'ucmng/api/ucmsdk/UserReceiver/Delete'
ucmngapiucmsdkUserReceiverDelete.post.type = 'post'
let ucmngapiucmsdkVerifyCodeGetVerifyCode = () => {}
ucmngapiucmsdkVerifyCodeGetVerifyCode.post = (query, headers) => http.post('ucmng/api/ucmsdk/VerifyCode/GetVerifyCode', query, headers)
 ucmngapiucmsdkVerifyCodeGetVerifyCode.post.url = 'ucmng/api/ucmsdk/VerifyCode/GetVerifyCode'
ucmngapiucmsdkVerifyCodeGetVerifyCode.post.type = 'post'
let ucmngapiucmsdkVerifyCodeVerifyCode = () => {}
ucmngapiucmsdkVerifyCodeVerifyCode.post = (query, headers) => http.post('ucmng/api/ucmsdk/VerifyCode/VerifyCode', query, headers)
 ucmngapiucmsdkVerifyCodeVerifyCode.post.url = 'ucmng/api/ucmsdk/VerifyCode/VerifyCode'
ucmngapiucmsdkVerifyCodeVerifyCode.post.type = 'post'
let ucmngapiWxMpUserAuthor = () => {}
ucmngapiWxMpUserAuthor = (query, headers) => http.get('ucmng/api/WxMp/UserAuthor', query, headers)
ucmngapiWxMpUserAuthor.url = 'ucmng/api/WxMp/UserAuthor'
ucmngapiWxMpUserAuthor.type = 'get'
ucmngapiWxMpUserAuthor.get = (query, headers) => http.get('ucmng/api/WxMp/UserAuthor', query, headers)
 ucmngapiWxMpUserAuthor.get.url = 'ucmng/api/WxMp/UserAuthor'
ucmngapiWxMpUserAuthor.get.type = 'get'
let ucmngapiWxMpCheckUserInfo = () => {}
ucmngapiWxMpCheckUserInfo = (query, headers) => http.get('ucmng/api/WxMp/CheckUserInfo', query, headers)
ucmngapiWxMpCheckUserInfo.url = 'ucmng/api/WxMp/CheckUserInfo'
ucmngapiWxMpCheckUserInfo.type = 'get'
ucmngapiWxMpCheckUserInfo.get = (query, headers) => http.get('ucmng/api/WxMp/CheckUserInfo', query, headers)
 ucmngapiWxMpCheckUserInfo.get.url = 'ucmng/api/WxMp/CheckUserInfo'
ucmngapiWxMpCheckUserInfo.get.type = 'get'
let ucmngapiWxMpIndex = () => {}
ucmngapiWxMpIndex = (query, headers) => http.get('ucmng/api/WxMp/Index', query, headers)
ucmngapiWxMpIndex.url = 'ucmng/api/WxMp/Index'
ucmngapiWxMpIndex.type = 'get'
ucmngapiWxMpIndex.get = (query, headers) => http.get('ucmng/api/WxMp/Index', query, headers)
 ucmngapiWxMpIndex.get.url = 'ucmng/api/WxMp/Index'
ucmngapiWxMpIndex.get.type = 'get'
ucmngapiWxMpIndex.post = (query, headers) => http.post('ucmng/api/WxMp/Index', query, headers)
 ucmngapiWxMpIndex.post.url = 'ucmng/api/WxMp/Index'
ucmngapiWxMpIndex.post.type = 'post'
let ucmngapiucmsdkWxMpGetDecryptString = () => {}
ucmngapiucmsdkWxMpGetDecryptString = (query, headers) => http.get('ucmng/api/ucmsdk/WxMp/GetDecryptString', query, headers)
ucmngapiucmsdkWxMpGetDecryptString.url = 'ucmng/api/ucmsdk/WxMp/GetDecryptString'
ucmngapiucmsdkWxMpGetDecryptString.type = 'get'
ucmngapiucmsdkWxMpGetDecryptString.get = (query, headers) => http.get('ucmng/api/ucmsdk/WxMp/GetDecryptString', query, headers)
 ucmngapiucmsdkWxMpGetDecryptString.get.url = 'ucmng/api/ucmsdk/WxMp/GetDecryptString'
ucmngapiucmsdkWxMpGetDecryptString.get.type = 'get'
let ucmngapiucmsdkWxMpGetAccessToken = () => {}
ucmngapiucmsdkWxMpGetAccessToken = (query, headers) => http.get('ucmng/api/ucmsdk/WxMp/GetAccessToken', query, headers)
ucmngapiucmsdkWxMpGetAccessToken.url = 'ucmng/api/ucmsdk/WxMp/GetAccessToken'
ucmngapiucmsdkWxMpGetAccessToken.type = 'get'
ucmngapiucmsdkWxMpGetAccessToken.get = (query, headers) => http.get('ucmng/api/ucmsdk/WxMp/GetAccessToken', query, headers)
 ucmngapiucmsdkWxMpGetAccessToken.get.url = 'ucmng/api/ucmsdk/WxMp/GetAccessToken'
ucmngapiucmsdkWxMpGetAccessToken.get.type = 'get'
let ucmngapiucmsdkWxMpGetUnlimited = () => {}
ucmngapiucmsdkWxMpGetUnlimited = (query, headers) => http.get('ucmng/api/ucmsdk/WxMp/GetUnlimited', query, headers)
ucmngapiucmsdkWxMpGetUnlimited.url = 'ucmng/api/ucmsdk/WxMp/GetUnlimited'
ucmngapiucmsdkWxMpGetUnlimited.type = 'get'
ucmngapiucmsdkWxMpGetUnlimited.get = (query, headers) => http.get('ucmng/api/ucmsdk/WxMp/GetUnlimited', query, headers)
 ucmngapiucmsdkWxMpGetUnlimited.get.url = 'ucmng/api/ucmsdk/WxMp/GetUnlimited'
ucmngapiucmsdkWxMpGetUnlimited.get.type = 'get'
let ucmngapiucmsdkWxMpCreateComponentToken = () => {}
ucmngapiucmsdkWxMpCreateComponentToken = (query, headers) => http.get('ucmng/api/ucmsdk/WxMp/CreateComponentToken', query, headers)
ucmngapiucmsdkWxMpCreateComponentToken.url = 'ucmng/api/ucmsdk/WxMp/CreateComponentToken'
ucmngapiucmsdkWxMpCreateComponentToken.type = 'get'
ucmngapiucmsdkWxMpCreateComponentToken.get = (query, headers) => http.get('ucmng/api/ucmsdk/WxMp/CreateComponentToken', query, headers)
 ucmngapiucmsdkWxMpCreateComponentToken.get.url = 'ucmng/api/ucmsdk/WxMp/CreateComponentToken'
ucmngapiucmsdkWxMpCreateComponentToken.get.type = 'get'
let ucmngapiucmsdkWxMpGetComponentToken = () => {}
ucmngapiucmsdkWxMpGetComponentToken = (query, headers) => http.get('ucmng/api/ucmsdk/WxMp/GetComponentToken', query, headers)
ucmngapiucmsdkWxMpGetComponentToken.url = 'ucmng/api/ucmsdk/WxMp/GetComponentToken'
ucmngapiucmsdkWxMpGetComponentToken.type = 'get'
ucmngapiucmsdkWxMpGetComponentToken.get = (query, headers) => http.get('ucmng/api/ucmsdk/WxMp/GetComponentToken', query, headers)
 ucmngapiucmsdkWxMpGetComponentToken.get.url = 'ucmng/api/ucmsdk/WxMp/GetComponentToken'
ucmngapiucmsdkWxMpGetComponentToken.get.type = 'get'
let ucmngGetCode = () => {}
ucmngGetCode = (query, headers) => http.get('ucmng/GetCode', query, headers)
ucmngGetCode.url = 'ucmng/GetCode'
ucmngGetCode.type = 'get'
ucmngGetCode.get = (query, headers) => http.get('ucmng/GetCode', query, headers)
 ucmngGetCode.get.url = 'ucmng/GetCode'
ucmngGetCode.get.type = 'get'
let ucmngCheckLogin = () => {}
ucmngCheckLogin = (query, headers) => http.get('ucmng/CheckLogin', query, headers)
ucmngCheckLogin.url = 'ucmng/CheckLogin'
ucmngCheckLogin.type = 'get'
ucmngCheckLogin.get = (query, headers) => http.get('ucmng/CheckLogin', query, headers)
 ucmngCheckLogin.get.url = 'ucmng/CheckLogin'
ucmngCheckLogin.get.type = 'get'
let api = {}
api.ucuser = () => {};
api.ucuser.api = () => {};
api.ucuser.api.sys = () => {};
api.ucuser.api.sys.Author = () => {};
api.ucuser.api.sys.Author.Login = ucuserapisysAuthorLogin;
api.ucuser.api.sys.Author.Reg = ucuserapisysAuthorReg;
api.ucuser.api.sys.Author.BindMobile = ucuserapisysAuthorBindMobile;
api.ucuser.SdkSys = () => {};
api.ucuser.SdkSys.Author = () => {};
api.ucuser.SdkSys.Author.RoleIds = ucuserSdkSysAuthorRoleIds;
api.ucuser.SdkSys.Author.RegApi = ucuserSdkSysAuthorRegApi;
api.ucuser.api.sys.Client = () => {};
api.ucuser.api.sys.Client.GeProject = ucuserapisysClientGeProject;
api.ucuser.api.sys.CurUser = ucuserapisysCurUser;
api.ucuser.api.sys.CurUser.Menu = ucuserapisysCurUserMenu;
api.ucuser.api.sys.CurUser.InitMenu = ucuserapisysCurUserInitMenu;
api.ucuser.api.sys.CurUser.ChangePwd = ucuserapisysCurUserChangePwd;
api.ucuser.api.sys.CurUser.Login = ucuserapisysCurUserLogin;
api.ucuser.api.sys.Oauth = () => {};
api.ucuser.api.sys.Oauth.LoginByPhone = ucuserapisysOauthLoginByPhone;
api.ucuser.api.sys.Oauth.Login = ucuserapisysOauthLogin;
api.ucuser.api.sys.Oauth.Reg = ucuserapisysOauthReg;
api.ucuser.api.sys.Oauth.BindMobile = ucuserapisysOauthBindMobile;
api.ucuser.api.sys.ScanCallBack = () => {};
api.ucuser.api.sys.ScanCallBack.AuthCallBack = ucuserapisysScanCallBackAuthCallBack;
api.ucuser.api.sys.ScanConfig = () => {};
api.ucuser.api.sys.ScanConfig.GetConfig = ucuserapisysScanConfigGetConfig;
api.ucuser.api.sys.SysAliMp = () => {};
api.ucuser.api.sys.SysAliMp.AliMpLogin = ucuserapisysSysAliMpAliMpLogin;
api.ucuser.api.sys.SysAliMp.AliMpReg = ucuserapisysSysAliMpAliMpReg;
api.ucuser.api.sys.SysAliMp.BindMobile = ucuserapisysSysAliMpBindMobile;
api.ucuser.api.sys.SysWxMp = () => {};
api.ucuser.api.sys.SysWxMp.WxMpLogin = ucuserapisysSysWxMpWxMpLogin;
api.ucuser.api.sys.SysWxMp.WxMpReg = ucuserapisysSysWxMpWxMpReg;
api.ucuser.api.sys.SysWxMp.BindMobile = ucuserapisysSysWxMpBindMobile;
api.ucuser.api.sys.User = () => {};
api.ucuser.api.sys.User.LoginByPhoneCode = ucuserapisysUserLoginByPhoneCode;
api.ucuser.api.sys.VerifyCode = () => {};
api.ucuser.api.sys.VerifyCode.GetVerifyCode = ucuserapisysVerifyCodeGetVerifyCode;
api.ucuser.api.sys.VerifyCode.GetVerifyCodeMac = ucuserapisysVerifyCodeGetVerifyCodeMac;
api.ucuser.api.sys.VerifyCode.VerifyCode = ucuserapisysVerifyCodeVerifyCode;
api.commng = () => {};
api.commng.api = () => {};
api.commng.api.commmng = () => {};
api.commng.api.commmng.Banner = () => {};
api.commng.api.commmng.Banner.Query = commngapicommmngBannerQuery;
api.commng.api.commmng.Banner = connect(api.commng.api.commmng.Banner, commngapicommmngBanner);
api.commng.api.report = () => {};
api.commng.api.report.BannerReport = () => {};
api.commng.api.report.BannerReport.Query = commngapireportBannerReportQuery;
api.commng.api.commmng.Content = () => {};
api.commng.api.commmng.Content.Query = commngapicommmngContentQuery;
api.commng.api.commmng.Content = connect(api.commng.api.commmng.Content, commngapicommmngContent);
api.commng.api.commmng.Content.QuerySubSystem = commngapicommmngContentQuerySubSystem;
api.commng.api.commmng.GetArsInfo = () => {};
api.commng.api.commmng.GetArsInfo.GetArea = commngapicommmngGetArsInfoGetArea;
api.commng.api.commmng.GetArsInfo.GetArsInfoDic = commngapicommmngGetArsInfoGetArsInfoDic;
api.commng.api.commmng.Image = () => {};
api.commng.api.commmng.Image.UploadPhoneImage = commngapicommmngImageUploadPhoneImage;
api.commng.api.commmng.Invitate = () => {};
api.commng.api.commmng.Invitate.Query = commngapicommmngInvitateQuery;
api.commng.api.commmng.Invitate = connect(api.commng.api.commmng.Invitate, commngapicommmngInvitate);
api.commng.api.commmng.Notification = () => {};
api.commng.api.commmng.Notification.Query = commngapicommmngNotificationQuery;
api.commng.api.commmng.Notification = connect(api.commng.api.commmng.Notification, commngapicommmngNotification);
api.commng.api.SysMng = () => {};
api.commng.api.SysMng.OpenApp = () => {};
api.commng.api.SysMng.OpenApp.Query = commngapiSysMngOpenAppQuery;
api.commng.api.SysMng.OpenApp = connect(api.commng.api.SysMng.OpenApp, commngapiSysMngOpenApp);
api.commng.api.SysMng.OpenApp.Add = commngapiSysMngOpenAppAdd;
api.commng.UserCur = () => {};
api.commng.UserCur.Oss = () => {};
api.commng.UserCur.Oss.Config = commngUserCurOssConfig;
api.commng.api.commmng.PhoneSeg = () => {};
api.commng.api.commmng.PhoneSeg.QueryPhoneSeg = commngapicommmngPhoneSegQueryPhoneSeg;
api.commng.api.commmng.PhoneSeg.AddPhoneSeg = commngapicommmngPhoneSegAddPhoneSeg;
api.commng.api.commmng.PhoneSeg.BatchPhoneSeg = commngapicommmngPhoneSegBatchPhoneSeg;
api.commng.api.commmng.PhoneSeg = connect(api.commng.api.commmng.PhoneSeg, commngapicommmngPhoneSeg);
api.commng.api.commmng.PhoneSeg = connect(api.commng.api.commmng.PhoneSeg, commngapicommmngPhoneSeg);
api.commng.api.commmng.Report = () => {};
api.commng.api.commmng.Report.Query = commngapicommmngReportQuery;
api.commng.api.commmng.Report.BatchHandled = commngapicommmngReportBatchHandled;
api.commng.api.commmng.Report = connect(api.commng.api.commmng.Report, commngapicommmngReport);
api.commng.api.report.ReportCfg = () => {};
api.commng.api.report.ReportCfg.Query = commngapireportReportCfgQuery;
api.commng.api.report.ReportCfg.UserReports = commngapireportReportCfgUserReports;
api.commng.api.report.ReportCfg.Reports = commngapireportReportCfgReports;
api.commng.api.report.ReportCfg.GetModuleList = commngapireportReportCfgGetModuleList;
api.commng.api.report.ReportCfg = connect(api.commng.api.report.ReportCfg, commngapireportReportCfg);
api.commng.api.report.ReportCfg = connect(api.commng.api.report.ReportCfg, commngapireportReportCfg);
api.commng.api.Subscribe = () => {};
api.commng.api.Subscribe.GetTemplateBySceneId = commngapiSubscribeGetTemplateBySceneId;
api.commng.api.commmng.VerifyCode = () => {};
api.commng.api.commmng.VerifyCode.Query = commngapicommmngVerifyCodeQuery;
api.ypmng = () => {};
api.ypmng.api = () => {};
api.ypmng.api.Activity = () => {};
api.ypmng.api.Activity.Query = ypmngapiActivityQuery;
api.ypmng.api.Activity = connect(api.ypmng.api.Activity, ypmngapiActivity);
api.ypmng.api.Activity = connect(api.ypmng.api.Activity, ypmngapiActivity);
api.ypmng.api.Activity.BatchDelete = ypmngapiActivityBatchDelete;
api.ypmng.api.Activity.BatchUpdateStatus = ypmngapiActivityBatchUpdateStatus;
api.ypmng.api.Activity.ActivityDic = ypmngapiActivityActivityDic;
api.ypmng.api.ActivityProd = () => {};
api.ypmng.api.ActivityProd.Query = ypmngapiActivityProdQuery;
api.ypmng.api.ActivityProd = connect(api.ypmng.api.ActivityProd, ypmngapiActivityProd);
api.ypmng.api.ActivityProd = connect(api.ypmng.api.ActivityProd, ypmngapiActivityProd);
api.ypmng.api.ActivityProd.BatchDelete = ypmngapiActivityProdBatchDelete;
api.ypmng.api.ActivityRecord = () => {};
api.ypmng.api.ActivityRecord.Query = ypmngapiActivityRecordQuery;
api.ypmng.api.Attributes = () => {};
api.ypmng.api.Attributes.Query = ypmngapiAttributesQuery;
api.ypmng.api.Attributes = connect(api.ypmng.api.Attributes, ypmngapiAttributes);
api.ypmng.api.Attributes = connect(api.ypmng.api.Attributes, ypmngapiAttributes);
api.ypmng.api.Attributes.BatchDelete = ypmngapiAttributesBatchDelete;
api.ypmng.api.AttrSpecs = () => {};
api.ypmng.api.AttrSpecs.Query = ypmngapiAttrSpecsQuery;
api.ypmng.api.AttrSpecs = connect(api.ypmng.api.AttrSpecs, ypmngapiAttrSpecs);
api.ypmng.api.AttrSpecs.AttrSpecsSel = ypmngapiAttrSpecsAttrSpecsSel;
api.ypmng.api.AttrSpecs.BatchPost = ypmngapiAttrSpecsBatchPost;
api.ypmng.api.AttrSpecs = connect(api.ypmng.api.AttrSpecs, ypmngapiAttrSpecs);
api.ypmng.api.AttrSpecs.BatchUpdate = ypmngapiAttrSpecsBatchUpdate;
api.ypmng.api.AttrSpecs.BatchDelete = ypmngapiAttrSpecsBatchDelete;
api.ypmng.api.Brand = () => {};
api.ypmng.api.Brand.Query = ypmngapiBrandQuery;
api.ypmng.api.Brand = connect(api.ypmng.api.Brand, ypmngapiBrand);
api.ypmng.api.Brand = connect(api.ypmng.api.Brand, ypmngapiBrand);
api.ypmng.api.Brand.BatchDelete = ypmngapiBrandBatchDelete;
api.ypmng.api.Brand.BrandDic = ypmngapiBrandBrandDic;
api.ypmng.api.Brand.BrandModelInfo = ypmngapiBrandBrandModelInfo;
api.ypmng.api.Category = () => {};
api.ypmng.api.Category.Query = ypmngapiCategoryQuery;
api.ypmng.api.Category = connect(api.ypmng.api.Category, ypmngapiCategory);
api.ypmng.api.Category = connect(api.ypmng.api.Category, ypmngapiCategory);
api.ypmng.api.Category.CategoryDic = ypmngapiCategoryCategoryDic;
api.ypmng.api.Category.CategoryEnumDic = ypmngapiCategoryCategoryEnumDic;
api.ypmng.api.Channel = () => {};
api.ypmng.api.Channel.ChannelList = ypmngapiChannelChannelList;
api.ypmng.api.Channel.ChannelDownList = ypmngapiChannelChannelDownList;
api.ypmng.api.Channel.AddChannel = ypmngapiChannelAddChannel;
api.ypmng.api.Channel.EditChannel = ypmngapiChannelEditChannel;
api.ypmng.api.ChInfo = () => {};
api.ypmng.api.ChInfo.Query = ypmngapiChInfoQuery;
api.ypmng.api.ChInfo = connect(api.ypmng.api.ChInfo, ypmngapiChInfo);
api.ypmng.api.ChInfo = connect(api.ypmng.api.ChInfo, ypmngapiChInfo);
api.ypmng.api.ChInfo.ChPorts = ypmngapiChInfoChPorts;
api.ypmng.api.Comment = () => {};
api.ypmng.api.Comment.Query = ypmngapiCommentQuery;
api.ypmng.api.Comment = connect(api.ypmng.api.Comment, ypmngapiComment);
api.ypmng.api.Comment = connect(api.ypmng.api.Comment, ypmngapiComment);
api.ypmng.api.Coupon = () => {};
api.ypmng.api.Coupon.Query = ypmngapiCouponQuery;
api.ypmng.api.Coupon = connect(api.ypmng.api.Coupon, ypmngapiCoupon);
api.ypmng.api.Coupon.QueryCoupon = ypmngapiCouponQueryCoupon;
api.ypmng.api.CouponRecord = () => {};
api.ypmng.api.CouponRecord.Query = ypmngapiCouponRecordQuery;
api.ypmng.api.CouponRecord = connect(api.ypmng.api.CouponRecord, ypmngapiCouponRecord);
api.ypmng.api.CouponRecord = connect(api.ypmng.api.CouponRecord, ypmngapiCouponRecord);
api.ypmng.api.DockingErp = () => {};
api.ypmng.api.DockingErp.SupplyProducts = ypmngapiDockingErpSupplyProducts;
api.ypmng.api.DockingErp.SoldOut = ypmngapiDockingErpSoldOut;
api.ypmng.api.DockingErp.DeliverGoods = ypmngapiDockingErpDeliverGoods;
api.ypmng.api.DockingErp.AfterRefund = ypmngapiDockingErpAfterRefund;
api.ypmng.api.FreezeInfo = () => {};
api.ypmng.api.FreezeInfo.Query = ypmngapiFreezeInfoQuery;
api.ypmng.api.FreezeInfo = connect(api.ypmng.api.FreezeInfo, ypmngapiFreezeInfo);
api.ypmng.api.FreezeInfo.Id = ypmngapiFreezeInfoId;
api.ypmng.api.Images = () => {};
api.ypmng.api.Images.UpLoadPhoto = ypmngapiImagesUpLoadPhoto;
api.ypmng.api.Model = () => {};
api.ypmng.api.Model.Query = ypmngapiModelQuery;
api.ypmng.api.Model = connect(api.ypmng.api.Model, ypmngapiModel);
api.ypmng.api.Model.ModelDic = ypmngapiModelModelDic;
api.ypmng.api.Model = connect(api.ypmng.api.Model, ypmngapiModel);
api.ypmng.api.Model.BatchDelete = ypmngapiModelBatchDelete;
api.ypmng.api.Model.ModelAttrs = ypmngapiModelModelAttrs;
api.ypmng.api.Model.SaveModelAndSku = ypmngapiModelSaveModelAndSku;
api.ypmng.api.Model.GetModelAndSku = ypmngapiModelGetModelAndSku;
api.ypmng.api.Model.Enable = ypmngapiModelEnable;
api.ypmng.api.Model.ChangeSDK = ypmngapiModelChangeSDK;
api.ypmng.api.Model.GetModelList = ypmngapiModelGetModelList;
api.ypmng.api.Model.GetModelDetail = ypmngapiModelGetModelDetail;
api.ypmng.api.Model.SaveModelDetail = ypmngapiModelSaveModelDetail;
api.ypmng.api.ModelBanner = () => {};
api.ypmng.api.ModelBanner.GetBanner = ypmngapiModelBannerGetBanner;
api.ypmng.api.ModelBanner.GetProdBanner = ypmngapiModelBannerGetProdBanner;
api.ypmng.api.ModelBanner.SaveBanner = ypmngapiModelBannerSaveBanner;
api.ypmng.api.ModelBanner.SaveProdBanner = ypmngapiModelBannerSaveProdBanner;
api.ypmng.api.OldOrder = ypmngapiOldOrder;
api.ypmng.api.OldProduct = ypmngapiOldProduct;
api.ypmng.api.OldProduct.UpdateStock = ypmngapiOldProductUpdateStock;
api.ypmng.api.OpenApp = () => {};
api.ypmng.api.OpenApp.OpenAppDic = ypmngapiOpenAppOpenAppDic;
api.ypmng.api.OrderAfter = ypmngapiOrderAfter;
api.ypmng.api.OrderAfter = connect(api.ypmng.api.OrderAfter, ypmngapiOrderAfter);
api.ypmng.api.OrderAfter.Notify = ypmngapiOrderAfterNotify;
api.ypmng.api.OrderExcel = () => {};
api.ypmng.api.OrderExcel.GetTXTAsync = ypmngapiOrderExcelGetTXTAsync;
api.ypmng.api.OrderExcel.GetSheetValues = ypmngapiOrderExcelGetSheetValues;
api.ypmng.api.OrderInfo = () => {};
api.ypmng.api.OrderInfo.Query = ypmngapiOrderInfoQuery;
api.ypmng.api.OrderInfo = connect(api.ypmng.api.OrderInfo, ypmngapiOrderInfo);
api.ypmng.api.OrderInfo.GetOrder = ypmngapiOrderInfoGetOrder;
api.ypmng.api.OrderInfo.Delivergoods = ypmngapiOrderInfoDelivergoods;
api.ypmng.api.OrderInfo.ConfirmOrder = ypmngapiOrderInfoConfirmOrder;
api.ypmng.api.OrderInfo.UpPrice = ypmngapiOrderInfoUpPrice;
api.ypmng.api.OrderInfo.UpAddress = ypmngapiOrderInfoUpAddress;
api.ypmng.api.OrderInfo.GetOrderList = ypmngapiOrderInfoGetOrderList;
api.ypmng.api.OrderInfo.GetRemarkList = ypmngapiOrderInfoGetRemarkList;
api.ypmng.api.OrderInfo.SaveRemark = ypmngapiOrderInfoSaveRemark;
api.ypmng.api.Point = () => {};
api.ypmng.api.Point.EventInstructionList = ypmngapiPointEventInstructionList;
api.ypmng.api.Point.EnableEventInstructionList = ypmngapiPointEnableEventInstructionList;
api.ypmng.api.Point.AddEventInstruction = ypmngapiPointAddEventInstruction;
api.ypmng.api.Point.EditEventInstruction = ypmngapiPointEditEventInstruction;
api.ypmng.api.ProdModelSyncAliPay = () => {};
api.ypmng.api.ProdModelSyncAliPay.SyncProdModel = ypmngapiProdModelSyncAliPaySyncProdModel;
api.ypmng.api.ProdModelSyncAliPay.SyncAliPaySkuID = ypmngapiProdModelSyncAliPaySyncAliPaySkuID;
api.ypmng.api.Product = () => {};
api.ypmng.api.Product.Query = ypmngapiProductQuery;
api.ypmng.api.Product = connect(api.ypmng.api.Product, ypmngapiProduct);
api.ypmng.api.Product = connect(api.ypmng.api.Product, ypmngapiProduct);
api.ypmng.api.Product.BatchDelete = ypmngapiProductBatchDelete;
api.ypmng.api.Product.MacInfo = ypmngapiProductMacInfo;
api.ypmng.api.Product.BatchTeamAsync = ypmngapiProductBatchTeamAsync;
api.ypmng.api.Product.BatchUpdate = ypmngapiProductBatchUpdate;
api.ypmng.api.Product.ProductDic = ypmngapiProductProductDic;
api.ypmng.api.Product.BatchUpListImgUrl = ypmngapiProductBatchUpListImgUrl;
api.ypmng.api.Product.GetProductList = ypmngapiProductGetProductList;
api.ypmng.api.Product.BatchPutaway = ypmngapiProductBatchPutaway;
api.ypmng.api.Product.OperateRegion = ypmngapiProductOperateRegion;
api.ypmng.api.Product.GetProductInfo = ypmngapiProductGetProductInfo;
api.ypmng.api.Product.SaveProductInfo = ypmngapiProductSaveProductInfo;
api.ypmng.api.Product.SpecialPriceProducts = ypmngapiProductSpecialPriceProducts;
api.ypmng.api.Product.GetSpecialPriceProduct = ypmngapiProductGetSpecialPriceProduct;
api.ypmng.api.Product.EditSpecialPrice = ypmngapiProductEditSpecialPrice;
api.ypmng.api.Product.EditPrice = ypmngapiProductEditPrice;
api.ypmng.api.ProductExcel = () => {};
api.ypmng.api.ProductExcel.GetProducts = ypmngapiProductExcelGetProducts;
api.ypmng.api.ProductExcel.GetSheetValues = ypmngapiProductExcelGetSheetValues;
api.ypmng.api.ProductExcel.CreateProducts = ypmngapiProductExcelCreateProducts;
api.ypmng.api.Report = () => {};
api.ypmng.api.Report.AddReportSource = ypmngapiReportAddReportSource;
api.ypmng.api.Report.AddChannelTurnoverSource = ypmngapiReportAddChannelTurnoverSource;
api.ypmng.api.Report.AddChannelVisitSource = ypmngapiReportAddChannelVisitSource;
api.ypmng.api.Report.ReportDataQuery = ypmngapiReportReportDataQuery;
api.ypmng.api.Report.ChannelVisitQuery = ypmngapiReportChannelVisitQuery;
api.ypmng.api.Report.ChannelTurnoverQuery = ypmngapiReportChannelTurnoverQuery;
api.ypmng.api.Report.ChannelVisitCylindrical = ypmngapiReportChannelVisitCylindrical;
api.ypmng.api.Report.ChannelTurnoverCylindrical = ypmngapiReportChannelTurnoverCylindrical;
api.ypmng.api.Report.DownLoad = ypmngapiReportDownLoad;
api.ypmng.api.Report.ChannelVisitDownLoad = ypmngapiReportChannelVisitDownLoad;
api.ypmng.api.Report.ChannelTurnoverDownLoad = ypmngapiReportChannelTurnoverDownLoad;
api.ypmng.api.Shop = () => {};
api.ypmng.api.Shop.Query = ypmngapiShopQuery;
api.ypmng.api.Shop = connect(api.ypmng.api.Shop, ypmngapiShop);
api.ypmng.api.Shop = connect(api.ypmng.api.Shop, ypmngapiShop);
api.ypmng.api.Shop.BatchUpdateStatus = ypmngapiShopBatchUpdateStatus;
api.ypmng.api.Shop.ShopDic = ypmngapiShopShopDic;
api.ypmng.api.ShopOrderInfo = () => {};
api.ypmng.api.ShopOrderInfo.Query = ypmngapiShopOrderInfoQuery;
api.ypmng.api.ShopProduct = () => {};
api.ypmng.api.ShopProduct.Query = ypmngapiShopProductQuery;
api.ypmng.api.ShopProduct = connect(api.ypmng.api.ShopProduct, ypmngapiShopProduct);
api.ypmng.api.ShopUser = () => {};
api.ypmng.api.ShopUser.UserDic = ypmngapiShopUserUserDic;
api.ypmng.api.ShopUser.UserSelModel = ypmngapiShopUserUserSelModel;
api.ypmng.api.SpecialAreas = () => {};
api.ypmng.api.SpecialAreas.Query = ypmngapiSpecialAreasQuery;
api.ypmng.api.SpecialAreas = connect(api.ypmng.api.SpecialAreas, ypmngapiSpecialAreas);
api.ypmng.api.SpecialAreas = connect(api.ypmng.api.SpecialAreas, ypmngapiSpecialAreas);
api.ypmng.api.SpecialAreas.BatchDelete = ypmngapiSpecialAreasBatchDelete;
api.ypmng.api.WxOrderMng = ypmngapiWxOrderMng;
api.ucmng = () => {};
api.ucmng.api = () => {};
api.ucmng.api.AlipayMp = ucmngapiAlipayMp;
api.ucmng.api.ucmsdk = () => {};
api.ucmng.api.ucmsdk.ExternalUser = () => {};
api.ucmng.api.ucmsdk.ExternalUser.OpenExternal = ucmngapiucmsdkExternalUserOpenExternal;
api.ucmng.api.ucmsdk.ExternalUser.RegisterUserAuthor = ucmngapiucmsdkExternalUserRegisterUserAuthor;
api.ucmng.api.sysmng = () => {};
api.ucmng.api.sysmng.Menu = ucmngapisysmngMenu;
api.ucmng.api.sysmng.Menu.Add = ucmngapisysmngMenuAdd;
api.ucmng.api.sysmng.Menu = connect(api.ucmng.api.sysmng.Menu, ucmngapisysmngMenu);
api.ucmng.api.ucmsdk.MenuOper = () => {};
api.ucmng.api.ucmsdk.MenuOper.BuildApi = ucmngapiucmsdkMenuOperBuildApi;
api.ucmng.api.sysmng.MenuOper = () => {};
api.ucmng.api.sysmng.MenuOper.GetVersion = ucmngapisysmngMenuOperGetVersion;
api.ucmng.api.sysmng.MenuOper.UpdateMenu = ucmngapisysmngMenuOperUpdateMenu;
api.ucmng.api.sysmng.MenuOper.BuildMenu = ucmngapisysmngMenuOperBuildMenu;
api.ucmng.api.sysmng.MenuOper = connect(api.ucmng.api.sysmng.MenuOper, ucmngapisysmngMenuOper);
api.ucmng.api.ucmsdk.Merchant = () => {};
api.ucmng.api.ucmsdk.Merchant.AliCreate = ucmngapiucmsdkMerchantAliCreate;
api.ucmng.api.ucmsdk.Merchant.AliQuery = ucmngapiucmsdkMerchantAliQuery;
api.ucmng.api.ucmsdk.Merchant.AliModify = ucmngapiucmsdkMerchantAliModify;
api.ucmng.api.ucmsdk.Merchant.CIccCreate = ucmngapiucmsdkMerchantCIccCreate;
api.ucmng.api.ucmsdk.Merchant.CIccQuery = ucmngapiucmsdkMerchantCIccQuery;
api.ucmng.api.ucmsdk.OpenApp = () => {};
api.ucmng.api.ucmsdk.OpenApp.GetOpenApp = ucmngapiucmsdkOpenAppGetOpenApp;
api.ucmng.api.ucmsdk.OpenApp.GetAllOpenApp = ucmngapiucmsdkOpenAppGetAllOpenApp;
api.ucmng.api.ucmsdk.OpenApp.AllOpenApp = ucmngapiucmsdkOpenAppAllOpenApp;
api.ucmng.api.sysmng.OpenApp = () => {};
api.ucmng.api.sysmng.OpenApp.Query = ucmngapisysmngOpenAppQuery;
api.ucmng.api.sysmng.OpenApp = connect(api.ucmng.api.sysmng.OpenApp, ucmngapisysmngOpenApp);
api.ucmng.api.sysmng.OpenApp.Add = ucmngapisysmngOpenAppAdd;
api.ucmng.api.sysmng.OperateLog = () => {};
api.ucmng.api.sysmng.OperateLog.Query = ucmngapisysmngOperateLogQuery;
api.ucmng.api.sysmng.OperateLog.查询 = ucmngapisysmngOperateLog查询;
api.ucmng.api.ucmsdk.Resources = () => {};
api.ucmng.api.ucmsdk.Resources.Query = ucmngapiucmsdkResourcesQuery;
api.ucmng.api.ucmsdk.Role = () => {};
api.ucmng.api.ucmsdk.Role.GetRoleIdByApi = ucmngapiucmsdkRoleGetRoleIdByApi;
api.ucmng.api.sysmng.Role = () => {};
api.ucmng.api.sysmng.Role.Query = ucmngapisysmngRoleQuery;
api.ucmng.api.sysmng.Role = connect(api.ucmng.api.sysmng.Role, ucmngapisysmngRole);
api.ucmng.api.sysmng.Role.UpdateRole = ucmngapisysmngRoleUpdateRole;
api.ucmng.api.sysmng.Role = connect(api.ucmng.api.sysmng.Role, ucmngapisysmngRole);
api.ucmng.api.sysmng.RoleMenuOper = ucmngapisysmngRoleMenuOper;
api.ucmng.api.sysmng.Scope = () => {};
api.ucmng.api.sysmng.Scope.GetScope = ucmngapisysmngScopeGetScope;
api.ucmng.api.sysmng.Seach = () => {};
api.ucmng.api.sysmng.Seach.GetMenus = ucmngapisysmngSeachGetMenus;
api.ucmng.api.ucmsdk.SubSystem = () => {};
api.ucmng.api.ucmsdk.SubSystem.Query = ucmngapiucmsdkSubSystemQuery;
api.ucmng.api.ucmsdk.SubSystem = connect(api.ucmng.api.ucmsdk.SubSystem, ucmngapiucmsdkSubSystem);
api.ucmng.api.sysmng.SubSystem = () => {};
api.ucmng.api.sysmng.SubSystem.Query = ucmngapisysmngSubSystemQuery;
api.ucmng.api.sysmng.SubSystem.Disabled = ucmngapisysmngSubSystemDisabled;
api.ucmng.api.sysmng.SubSystem.Source = ucmngapisysmngSubSystemSource;
api.ucmng.api.sysmng.SubSystem = connect(api.ucmng.api.sysmng.SubSystem, ucmngapisysmngSubSystem);
api.ucmng.api.sysmng.SubSystem.Add = ucmngapisysmngSubSystemAdd;
api.ucmng.api.sysmng.SubSystem = connect(api.ucmng.api.sysmng.SubSystem, ucmngapisysmngSubSystem);
api.ucmng.api.vue = () => {};
api.ucmng.api.vue.User = () => {};
api.ucmng.api.vue.User.JsTicket = ucmngapivueUserJsTicket;
api.ucmng.api.vue.User.GetUserAuthor = ucmngapivueUserGetUserAuthor;
api.ucmng.api.ucmsdk.User = () => {};
api.ucmng.api.ucmsdk.User.GetAllUserId = ucmngapiucmsdkUserGetAllUserId;
api.ucmng.api.ucmsdk.User.GetUserId = ucmngapiucmsdkUserGetUserId;
api.ucmng.api.ucmsdk.User.GetUserByOpenId = ucmngapiucmsdkUserGetUserByOpenId;
api.ucmng.api.ucmsdk.User.GetListUserByIds = ucmngapiucmsdkUserGetListUserByIds;
api.ucmng.api.ucmsdk.User.GetUserAuthor = ucmngapiucmsdkUserGetUserAuthor;
api.ucmng.api.ucmsdk.User.GetUserAuthorList = ucmngapiucmsdkUserGetUserAuthorList;
api.ucmng.api.ucmsdk.User.GetUserDetail = ucmngapiucmsdkUserGetUserDetail;
api.ucmng.api.ucmsdk.User.TryAddUser = ucmngapiucmsdkUserTryAddUser;
api.ucmng.api.ucmsdk.User.TryAddUserDetail = ucmngapiucmsdkUserTryAddUserDetail;
api.ucmng.api.ucmsdk.User.GetUserDetailList = ucmngapiucmsdkUserGetUserDetailList;
api.ucmng.api.ucmsdk.User.GetUsers = ucmngapiucmsdkUserGetUsers;
api.ucmng.api.ucmsdk.User.ModifyUser = ucmngapiucmsdkUserModifyUser;
api.ucmng.api.ucmsdk.User.ThreeElementsIdentity = ucmngapiucmsdkUserThreeElementsIdentity;
api.ucmng.api.ucmsdk.User.TwoElementsIdentity = ucmngapiucmsdkUserTwoElementsIdentity;
api.ucmng.api.ucmsdk.User.CreateUserByPhone = ucmngapiucmsdkUserCreateUserByPhone;
api.ucmng.api.sysmng.User = () => {};
api.ucmng.api.sysmng.User.Query = ucmngapisysmngUserQuery;
api.ucmng.api.sysmng.User = connect(api.ucmng.api.sysmng.User, ucmngapisysmngUser);
api.ucmng.api.sysmng.User.GetGroupRoles = ucmngapisysmngUserGetGroupRoles;
api.ucmng.api.sysmng.User = connect(api.ucmng.api.sysmng.User, ucmngapisysmngUser);
api.ucmng.api.sysmng.User.ResetPwd = ucmngapisysmngUserResetPwd;
api.ucmng.api.ucmsdk.UserAuthor = () => {};
api.ucmng.api.ucmsdk.UserAuthor.CreateUserAuthor = ucmngapiucmsdkUserAuthorCreateUserAuthor;
api.ucmng.api.ucmsdk.UserAuthor.RegAccountByOpenId = ucmngapiucmsdkUserAuthorRegAccountByOpenId;
api.ucmng.api.ucmsdk.UserAuthor.RegAccountForInternal = ucmngapiucmsdkUserAuthorRegAccountForInternal;
api.ucmng.api.ucmsdk.UserBank = ucmngapiucmsdkUserBank;
api.ucmng.api.ucmsdk.UserBank.GetUserBank = ucmngapiucmsdkUserBankGetUserBank;
api.ucmng.api.ucmsdk.UserCert = () => {};
api.ucmng.api.ucmsdk.UserCert.LiveCert = ucmngapiucmsdkUserCertLiveCert;
api.ucmng.api.ucmsdk.UserInfo = () => {};
api.ucmng.api.ucmsdk.UserInfo.GetUserInfo = ucmngapiucmsdkUserInfoGetUserInfo;
api.ucmng.api.ucmsdk.UserInfo.GetUserInfoIntercept = ucmngapiucmsdkUserInfoGetUserInfoIntercept;
api.ucmng.api.ucmsdk.invoice = () => {};
api.ucmng.api.ucmsdk.invoice.def = ucmngapiucmsdkinvoicedef;
api.ucmng.api.ucmsdk.invoice.list = ucmngapiucmsdkinvoicelist;
api.ucmng.api.ucmsdk.invoice.get = ucmngapiucmsdkinvoiceget;
api.ucmng.api.ucmsdk.invoice.setdef = ucmngapiucmsdkinvoicesetdef;
api.ucmng.api.ucmsdk.invoice.del = ucmngapiucmsdkinvoicedel;
api.ucmng.api.ucmsdk.invoice.add = ucmngapiucmsdkinvoiceadd;
api.ucmng.api.ucmsdk.invoice.modify = ucmngapiucmsdkinvoicemodify;
api.ucmng.api.ucmsdk.UserMerchant = ucmngapiucmsdkUserMerchant;
api.ucmng.api.ucmsdk.UserMerchant.Modify = ucmngapiucmsdkUserMerchantModify;
api.ucmng.api.ucmsdk.UserMerchant = connect(api.ucmng.api.ucmsdk.UserMerchant, ucmngapiucmsdkUserMerchant);
api.ucmng.api.ucmsdk.UserMerchant.GetMerchantId = ucmngapiucmsdkUserMerchantGetMerchantId;
api.ucmng.api.ucmsdk.UserMerchant.UpdateOpenId = ucmngapiucmsdkUserMerchantUpdateOpenId;
api.ucmng.api.ucmsdk.UserReceiver = () => {};
api.ucmng.api.ucmsdk.UserReceiver.GetUserReceiver = ucmngapiucmsdkUserReceiverGetUserReceiver;
api.ucmng.api.ucmsdk.UserReceiver.GetUserReceiverList = ucmngapiucmsdkUserReceiverGetUserReceiverList;
api.ucmng.api.ucmsdk.UserReceiver.SetDefault = ucmngapiucmsdkUserReceiverSetDefault;
api.ucmng.api.ucmsdk.UserReceiver.ModifyUserReceiver = ucmngapiucmsdkUserReceiverModifyUserReceiver;
api.ucmng.api.ucmsdk.UserReceiver.addUserReceiver = ucmngapiucmsdkUserReceiveraddUserReceiver;
api.ucmng.api.ucmsdk.UserReceiver.Delete = ucmngapiucmsdkUserReceiverDelete;
api.ucmng.api.ucmsdk.VerifyCode = () => {};
api.ucmng.api.ucmsdk.VerifyCode.GetVerifyCode = ucmngapiucmsdkVerifyCodeGetVerifyCode;
api.ucmng.api.ucmsdk.VerifyCode.VerifyCode = ucmngapiucmsdkVerifyCodeVerifyCode;
api.ucmng.api.WxMp = () => {};
api.ucmng.api.WxMp.UserAuthor = ucmngapiWxMpUserAuthor;
api.ucmng.api.WxMp.CheckUserInfo = ucmngapiWxMpCheckUserInfo;
api.ucmng.api.WxMp.Index = ucmngapiWxMpIndex;
api.ucmng.api.ucmsdk.WxMp = () => {};
api.ucmng.api.ucmsdk.WxMp.GetDecryptString = ucmngapiucmsdkWxMpGetDecryptString;
api.ucmng.api.ucmsdk.WxMp.GetAccessToken = ucmngapiucmsdkWxMpGetAccessToken;
api.ucmng.api.ucmsdk.WxMp.GetUnlimited = ucmngapiucmsdkWxMpGetUnlimited;
api.ucmng.api.ucmsdk.WxMp.CreateComponentToken = ucmngapiucmsdkWxMpCreateComponentToken;
api.ucmng.api.ucmsdk.WxMp.GetComponentToken = ucmngapiucmsdkWxMpGetComponentToken;
api.ucmng.GetCode = ucmngGetCode;
api.ucmng.CheckLogin = ucmngCheckLogin;

export default api
