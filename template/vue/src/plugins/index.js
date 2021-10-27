import Install_config from '@modules/module.config'
import { Enum, EnumList, OrgEnum } from '@/utils/enum'
import utils from 'xs-component/lib/utils'
import base from 'xs-component/lib/base'
import api from '@/automatically/api'
import Vue from 'vue'
import store from '../store/index'
import { request, requestApi } from 'xs-request'
import ossService from '@/utils/ossService'
import cellCmp from '@/plugins/row-col-cmp'
import ImCmp from '@/plugins/im'

import apiMap from '@/utils/api'

import { getConfig } from '@/utils/global-config'
import { getToken } from '@/utils/auth'
//  以上部分为 xs-component 引入
base.install(api ? api : {}) // 请求及api映射

// 字典， 调用方法， 取值缓存
function getDicVal (name, value) {
  store.dispatch('dic/GET_ASK', {props: name, value})
}

// 向ui组件库传值
utils.install({
  formatUtils: {Enum, OrgEnum, EnumList, format: Install_config.format ? Install_config.format: {}}, // Install_config.format 前端自定义枚举文件导出内容
  dicUtils: getDicVal, //  字典工具
  requestUtils: request, // 发送请求工具
  ossUtils: ossService,  // oss 图片上传
})


let clientId = getConfig('CLIENT_ID')
let apis = getConfig('apis')


// 获取 标识： 服务地址的映射关系
function getApi (type) {
  let serviceObj = {}  // 服务名: 服务地址 映射关系 （新版）
  let moduleObj = {} // 模块id: 服务地址 映射关系 （旧版）
  for (const key in apis) {
    // 服务名
    let apiList = apis[key].EndPoint.split("/")
    let serverkey = apiList[apiList.length - 2]
    serviceObj[serverkey] = apis[key].EndPoint
    //moduleId (模块id)
    moduleObj[apis[key]['ModuleId']] = apis[key].EndPoint
  }
  if(type == 'service') return serviceObj
  else if(type == 'moduleId') return moduleObj
}

// 向插件内部传值
Vue.use(requestApi, {apis: getApi('moduleId'), api:apiMap, clientId, token: getToken }) // 旧版api, 标识 为 moduleId
Vue.use(request, {apis: getApi('service'), clientId, token: getToken}) // 新版api， 标识为 service , 接口服务名
Vue.use(cellCmp)
Vue.use(ImCmp)

