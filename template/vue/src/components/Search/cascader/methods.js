export default {
  // ------------------------------------------------------------------
  // pragma mark - inti(初始化行为)
  // ------------------------------------------------------------------
  createdInit() {
    this.getList();
  },

  mountedInit() {
  },


  clearOption() {
    this.inputValue = null
  },

  getList() {
    if (this.option.dataSourceType !== 0 && this.option.dataSourceType !== 10) return;
    this.loading = true
	if (!(this.option && this.option.url)) return
    this.$http.get(this.option.url).then(res => {
      if (res.data) {
        this.loading = false
        this.selectData = res.data
      }
    })
  },

  // request
  remoteMethod(query) {
    this.loading = true
    const params = {
      [this.option.urlParam]: query
    }
    this.$http.get(this.option.url, params).then(res => {
      if (res.data) {
        this.loading = false
        this.selectData = res.data
      }
    })
  },
}