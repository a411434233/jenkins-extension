export default {
  // ------------------------------------------------------------------
  // pragma mark - inti(初始化行为)
  // ------------------------------------------------------------------
  createdInit() {
  },

  mountedInit() {
  },

  clearOption() {
    this.inputValue = null
  },

  getList() {
    if (this.option.dataSourceType !== 0 && this.option.dataSourceType !== 10) return;
    this.loading = true
    this.$http.get(this.option.url).then(res => {
      if (res.data) {
        this.loading = false
        this.selectData = res.data
      }
    })
  },

  handleFocus(event) {
    this.remoteMethod(this.inputValue);
  },

  // request
  remoteMethod(query) {
    this.loading = true
    let params = {};

    if (this.option.urlParam) {
      // 兼容老字段
      this.option.searchKey = this.option.urlParam
    }

    if (this.option.searchKey) {
      params = Object.assign(params, { [this.option.searchKey]: query })
    }

    params = Object.assign(params, this.option.param)
    this.$http.get(this.option.url, params).then(res => {
      if (res.data) {
        this.loading = false
        this.selectData = res.data
      }
    })
  },
}