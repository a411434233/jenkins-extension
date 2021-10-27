import Store from '@/store'
import { requestApi as http } from 'xs-request'
import { checkedBoxRe, isArray } from '@/common/utils'
import moment from 'moment'
import Vue from 'vue'
import { Message } from 'element-ui'

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  )
}
/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }
    return result
  }
}

export function loadTableData  (url, black) {
  Store.commit('setLoading', true)
  const that = this
  const search_query = {}
  if (!black) black = []
  let datapicName = ''

  for (var elKey in this.query) {
    if (elKey === 'data') continue // 判断返回数据
    if (black.findIndex((x) => x == elKey) != -1) continue

    if (elKey.startsWith('datepic')) {
      datapicName = elKey.replace('datepic', '')

      const dateIsNull = this.query[elKey] && this.query[elKey].length > 0
      if (datapicName) {
        search_query[datapicName + 'GreaterEqual'] = dateIsNull ? this.query[elKey][0] : null
        search_query[datapicName + 'LessEqual'] = dateIsNull ? this.query[elKey][1] : null
        search_query[datapicName + 'Greater'] = dateIsNull ? this.query[elKey][0] : null
        search_query[datapicName + 'Less'] = dateIsNull ? this.query[elKey][1] : null
      } else {
        search_query[datapicName + 'startTime'] = dateIsNull ? this.query[elKey][0] : null
        search_query[datapicName + 'endTime'] = dateIsNull ? this.query[elKey][1] : null
      }
      continue
    }
    search_query[elKey] = this.query[elKey]
  }

  return new Promise((resolve, reject) => {
    http.post(url, search_query).then(res => {
      Store.commit('setLoading', false)
      let result = res.data
      // 兼容非分页
      if (isArray(res.data) && !res.data.hasOwnProperty('data')) {
        result = {
          data: res.data
        }
      }
      let datapicName = ''
      const keyArray = ['GreaterEqual', 'Less', 'Greater', 'LessEqual', 'startTime', 'endTime']
      for (const key in result) {
        keyArray.forEach((el, elIndex) => {
          if (key.endsWith(el)) {
            datapicName = key.replace(el, '')
            datapicName = datapicName.charAt(0).toUpperCase() + datapicName.slice(1)
            if (!result['datepic' + datapicName]) {
              result['datepic' + datapicName] = ['', '']
            }
            result['datepic' + datapicName][elIndex % 2] = result[key]
            delete result[key]
          }
        })
      }
      that.query = result
      resolve()
    }, err => {
      reject()
    })
  })
}

export function loadReportData (url, black) {
  Store.commit('setLoading', true)
  const that = this
  const search_query = {}
  if (!black) black = []
  let datapicName = ''

  for (var elKey in this.query) {
    if (elKey === 'data') continue // 判断返回数据
    if (black.findIndex((x) => x == elKey) != -1) continue

    if (elKey.startsWith('datepic')) {
      datapicName = elKey.replace('datepic', '')

      const dateIsNull = this.query[elKey].length > 0

      if (datapicName) {
        search_query[datapicName + 'GreaterEqual'] = dateIsNull ? this.query[elKey][0] : ''
        search_query[datapicName + 'LessEqual'] = dateIsNull ? this.query[elKey][1] : ''
        search_query[datapicName + 'Greater'] = dateIsNull ? this.query[elKey][0] : ''
        search_query[datapicName + 'Less'] = dateIsNull ? this.query[elKey][1] : ''
      } else {
        search_query[datapicName + 'startTime'] = dateIsNull ? this.query[elKey][0] : ''
        search_query[datapicName + 'endTime'] = dateIsNull ? this.query[elKey][1] : ''
      }
      continue
    }
    search_query[elKey] = this.query[elKey]
  }

  return new Promise((resolve) => {
    http.post(url, search_query).then(res => {
      Store.commit('setLoading', false)
      if (!res) return;
      const result = res.data

      let datapicName = ''
      const keyArray = ['GreaterEqual', 'Less', 'Greater', 'LessEqual', 'startTime', 'endTime']
      for (const key in result) {
        keyArray.forEach((el, elIndex) => {
          if (key.endsWith(el)) {
            datapicName = key.replace(el, '')
            datapicName = datapicName.charAt(0).toUpperCase() + datapicName.slice(1)
            if (!result['datepic' + datapicName]) {
              result['datepic' + datapicName] = ['', '']
            }
            result['datepic' + datapicName][elIndex % 2] = result[key]
            delete result[key]
          }
        })
      }
      that.query = result
      resolve()
    })
  })
}

export function msg (res) {
  Message({
    message: res.message,
    type: res.code === 0 ? 'success' : 'warning'
  });
}

export function countDownSetColor (startTime, endTime) {
  if (endTime === '1970-01-01T00:00:00') endTime = moment()
  const doneTime = moment(endTime, 'YYYY-MM-DD HH:mm:ss')
  const beginTime = moment(startTime, 'YYYY-MM-DD HH:mm:ss')
  const time = moment.duration(doneTime.diff(beginTime))
  const res = time.asHours()
  return res
}

export function dateFormat (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  const defaultDate = ['0001-01-01T00:00:00', '1970-01-01T00:00:00']
  if (defaultDate.indexOf(dataStr) > -1) return '/'
  return moment(dataStr).format(pattern)
}

export function diff (start, done){
  const defaultDate = ['0001-01-01T00:00:00', '1970-01-01T00:00:00']
  if (defaultDate.indexOf(done) > -1) done = moment()
  const doneTime = moment(done, 'YYYY-MM-DD HH:mm:ss')
  const beginTime = moment(start, 'YYYY-MM-DD HH:mm:ss')
  const time = moment.duration(doneTime.diff(beginTime))

  const res = time.format('d天h时m分s秒')

  if (time.days() > 0) {
    return time.format('d天h时')
  } else if (time.hours() > 0) {
    return time.format('h时m分')
  } else if (time.minutes()) {
    return time.format('m分s秒')
  }
  return res && res.startsWith('-') ? '' : res
}

export function checkedBoxRes (val, enumName, Vues = Vue) {
  return checkedBoxRe(val, enumName, Vue)
}


export function showDlg(Component, props) {
  const vm = new Vue(
    Object.assign({}, vucfg, {
      render: (h) =>
        h(Component, {
          props
        })
    })).$mount()
  document.body.appendChild(vm.$el)
  const ele = vm.$children[0]
  ele.destroy = function() {
    vm.$el.remove()
    ele.$destroy()
    vm.$destroy()
  }
  return ele
}
