const fs = require('fs')
const path = require('path')
module.exports = {
  getItem(key) {
    if (!this.isFile()) {
      return null
    }
    let data = this.getFileData()
    return data[key]
  },

  setItem(key, value) {
    return new Promise((resolve, reject) => {
      let data = this.getFileData()
      data[key] = value
      fs.writeFileSync(path.join(__dirname, 'store.json'), JSON.stringify(data))
      resolve(true)
    })
  },

  isFile() {
    return fs.existsSync(path.join(__dirname, 'store.json'))
  },

  clearStore() {
    fs.writeFileSync(path.join(__dirname, 'store.json'), JSON.stringify({}))
    return true
  },

  removeItem(key) {
    if (!this.isFile()) {
      return false
    }
    let data = this.getFileData()
    delete data[key]
    fs.writeFileSync(path.join(__dirname, 'store.json'), JSON.stringify(data))
    return true
  },

  getFileData() {
    if (this.isFile) {
      let fileData = fs.readFileSync(path.join(__dirname, 'store.json'), { encoding: 'utf8' })
      return JSON.parse(fileData)
    }
    return {}
  }

}
