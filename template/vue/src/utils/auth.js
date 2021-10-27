import { getConfig } from '@/utils/global-config'
import Cookies from 'js-cookie'

const TokenKey = `${getConfig('CLIENT_ID')}_token`
let domain = 'localhost';
if (document.domain !== 'localhost') {
  domain = `.${document.domain.split('.').slice(-2).join('.')}`
}

export function getToken(tokenKey) {
  if (window.parent !== window.self) { // 作为第三方系统被嵌套在iframe中使用
    return sessionStorage.getItem('token')
  }
  if (tokenKey) return Cookies.get(tokenKey)
  return Cookies.get(TokenKey)
}

export function setToken(tokenKey, value) {

  if (arguments.length == 2) {
    return Cookies.set(tokenKey, value, { domain: domain, path: '/' })
  }
  return Cookies.set(TokenKey, tokenKey, { domain: domain, path: '/' })
}

export function removeToken(tokenKey) {
  if (tokenKey) return Cookies.remove(tokenKey, { domain: domain })
  return Cookies.remove(TokenKey, { domain: domain })
}


export function setLocalToken(tokenKey, value) {
  return Cookies.set(tokenKey, value, { domain: 'localhost', path: '/' });
}

export function removeLocalToken(tokenKey) {
  return Cookies.remove(tokenKey, { domain: 'localhost' });
}
