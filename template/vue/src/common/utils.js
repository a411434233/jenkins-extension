export function isPlainObject(val) {
  return toString.call(val) === "[object Object]";
}

export function isArray(val) {
  return toString.call(val) === "[object Array]";
}

/**
 * 获取指定的URL参数值
 * URL:http://www.quwan.com/index?name=tyler
 * 参数：paramName URL参数
 * 调用方法:getParam("name")
 * 返回值:tyler
 */
export function getParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  var q = window.location.pathname.substr(1).match(reg_rewrite);
  if (r != null) {
    return unescape(r[2]);
  } else if (q != null) {
    return unescape(q[2]);
  } else {
    return null;
  }
}

export function getQuery(_url, name) {
  let search = _url ? _url : window.location.search;
  if (search) {
    const KEY_REDIRECT = "?";
    const startIndex = window.location.href.indexOf(KEY_REDIRECT);
    search = window.location.href.substring(startIndex + 1);
  }

  var vars = search.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == name) {
      return pair[1];
    }
  }
  return false;
}
export function checkedBoxRe(val, enumName, target) {
  let attr = "";
  let sourceList =
    (target.OrgEnum && target.OrgEnum[enumName]) || target.$orgEnum[enumName];
  const arr = sourceList.slice(0, -1).map(item => {
    return item.Id;
  });
  arr.forEach((item, index) => {
    if ((val & item) > 0) {
      attr += sourceList[index].Text + ",";
    }
  });
  if (attr.length > 0) {
    attr = attr.substr(0, attr.length - 1);
  }
  return attr;
} /*节流函数，通过控制每次事件执行的时间间隔控制短时间多次执行方法
handler:要执行的方法
wait：每次点击事件执行的时间间隔(毫秒)
*/
export function throttle(handler, wait = 1000) {
  var lastTime = 0;
  var self = this,
    arg = arguments;

  return function() {
    var nowTime = new Date().getTime();
    if (nowTime - lastTime > wait) {
      handler.apply(self, arg);
      lastTime = nowTime;
    }
  };
}

/*防抖函数，通过推迟每次事件执行的时间来减少不必要的查询
  handler:要执行的方法
  delay：每次事件执行的推迟时间(毫秒)
  */
export function debounce(handler, delay) {
  var timer;
  return function() {
    var self = this,
      arg = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      handler.apply(self, arg);
    }, delay);
  };
}
