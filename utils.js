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
module.exports = {
  copy
}
