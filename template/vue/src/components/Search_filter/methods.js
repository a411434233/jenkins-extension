export default {
  // ------------------------------------------------------------------
  // pragma mark - inti(初始化行为)
  // ------------------------------------------------------------------
  createdInit() {
      this.reqSeleOtion(this.selectCont, {});
  },
  mountedInit() {

  },

  // ------------------------------------------------------------------
  // pragma mark - Event Response(响应事件)
  // 命名规范: Name + EventHandler
  // ------------------------------------------------------------------
  visibleChange(status, val) {
    if (status) {
      this.curDataSourceObj = val;
      this.selectOption = [];
      this.reqSeleOtion(val, {})
    }
  },
  remoteMethod(query) {
    if (query) {
      let sourceObj = this.curDataSourceObj;
      let paramName = sourceObj.urlParam;
      let params = {};
      if (paramName) {
        params = {
          [paramName]: query
        }
      }
      this.reqSeleOtion(sourceObj, params)
    }
  },
  reqSeleOtion(val, params) {
    this.$http.get(val.url, params).then(res => {
      if (res.data) {
        this.selectOption = res.data;
      }
    })
  }
}
