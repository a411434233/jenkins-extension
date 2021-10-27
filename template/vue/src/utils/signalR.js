import * as signalR from '@microsoft/signalr'
import { getToken } from '@/utils/auth'
import { getConfig } from '@/utils/global-config'

const signalr = create('signalR/WorkerHub')
const tokenKey = `${getConfig('CLIENT_ID')}_token`


function create(url) {
  const signalUrl = `../${url}`

  return new signalR.HubConnectionBuilder()
    // 服务器地址
    .withUrl(signalUrl, { accessTokenFactory: () => getToken(tokenKey) })
    .withAutomaticReconnect({
      nextRetryDelayInMilliseconds: retryContext => {
        console.log(retryContext.elapsedMilliseconds, '重新链接所花费的时间')
        return 1001 // 每秒请求
      }
    }) // 自动重连
    .build()
}

export default signalr
