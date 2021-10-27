import OSS from 'ali-oss'
import { requestApi as axios } from 'xs-request'
import store from '../store/index'
import { getLocalStorage } from '@/utils/localStorage'
import { getConfig } from '@/utils/global-config'

// 去哪个服务下 获取 token 信息
function getOssToken () {
  return axios.get('@commng/UserCur/Oss/Config/' + getConfig('CLIENT_ID'))
}

let ossCfg = {}
// 从 vuex 中 获取初始化值
const initToken = function() {
  ossCfg = store.getters.ossCfg
  let timestamp = new Date().getTime()
  // 有效期内不发送获取token 请求
  if (ossCfg.region && ossCfg.timeout > timestamp) { return }
  getOssToken()
    .then(({ data }) => {
      ossCfg.region = data.ossEndpoint
      ossCfg.bucket = data.bucketName
      ossCfg.accessKeyId = data.stsAccessKeyId
      ossCfg.accessKeySecret = data.stsAccessKeySecret
      ossCfg.stsToken = data.stsSecurityToken
      ossCfg.baseDir = data.baseDir
      ossCfg.timeout = timestamp + (data.durationSeconds * 1000)
      store.commit("oss/SET_OSS", ossCfg)
    })
    .catch((err) => {
      console.log('获取Token错误', err)
    })
}
const newFileName = function(id = getConfig('CLIENT_ID'), userid = getLocalStorage("userProfile").id) {
  let dt = new Date()
  let y = dt.getFullYear()
  let m = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1
  let d = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate()
  return `${ossCfg.baseDir}/${userid}/${y}${m}${d}/${id}_${dt.getTime()}` // 定义唯一的文件名
}

const ossService = {
  token: ossCfg,
  initToken,
  newFileName,
  _ossClient: null,
  getOssClient() {
    if (this._ossClient == null) { this._ossClient = new OSS(ossCfg) }
    return this._ossClient
  }
}

export default ossService


