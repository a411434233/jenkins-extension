const fs = require('fs')
const checkDirectory = function (src, dst, callback) {
  fs.access(dst, fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdirSync(dst)
      callback(src, dst)
    } else {
      callback(src, dst)
    }
  })
}
const copy = function (src, dst) {
  let paths = fs.readdirSync(src) //同步读取当前目录
  paths.forEach(function (path) {
    const _src = src + '/' + path
    const _dst = dst + '/' + path
    fs.stat(_src, function (err, stats) {  //stats  该对象 包含文件属性
      if (err) throw err
      if (stats.isFile()) { //如果是个文件则拷贝
        let readable = fs.createReadStream(_src)//创建读取流
        let writable = fs.createWriteStream(_dst)//创建写入流
        readable.pipe(writable)
      } else if (stats.isDirectory()) { //是目录则 递归
        checkDirectory(_src, _dst, copy)
      }
    })
  })
}


function pxToRpx(res) {
  let m = res.split(';')
  m = m.map(str => {
    return str.replace(/-?\d+(.\d+)?px/gi, (v) => {
      if (v.split(' ').length > 1) {
        return v.split(' ').map(val => {
          return (parseFloat(val) * 2).toFixed(0) + 'rpx'
        }).join(' ')
      }
      return (parseFloat(v) * 2).toFixed(0) + 'rpx'
    })
  })
  return m.join(';')
}


function rpxToPx(res) {
  let m = res.split(';')
  m = m.map(str => {
    return str.replace(/-?\d+(.\d+)?rpx/gi, (v) => {
      if (v.split(' ').length > 1) {
        return v.split(' ').map(val => {
          return (parseFloat(val) / 2).toFixed(0) + 'px'
        }).join(' ')
      }
      return (parseFloat(v) / 2).toFixed(0) + 'px'
    })
  })
  return m.join(';')
}

function pxToRem(res, num = 75) {
  let m = res.split(';')
  m = m.map(str => {
    return str.replace(/-?\d+(.\d+)?px/gi, (v) => {
      if (v.split(' ').length > 1) {
        return v.split(' ').map(val => {
          return (parseFloat(val) / num).toFixed(0) + 'rem'
        }).join(' ')
      }

      return (parseFloat(v) / 75).toFixed(0) + 'rem'
    })
  })
  return m.join(';')
}


module.exports = {
  copy,
  pxToRpx,
  rpxToPx,
  pxToRem
}
