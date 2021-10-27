export default {
  // ------------------------------------------------------------------
  // pragma mark - inti(初始化行为)
  // ------------------------------------------------------------------
  createdInit() {

  },
  mountedInit() {
  },

  // ------------------------------------------------------------------
  // pragma mark - Event Response(响应事件)
  // 命名规范: Name + EventHandler
  // ------------------------------------------------------------------
  toSearch() {
    this.$emit('searchForm')
    this.$emit('search-click')
  },
  toSelect(val, fieldName) {
    this.inputValue[fieldName] = val
  },
  handleCommand(obj) {
    this.$emit('btn-click', obj.remark)
    this.$emit('btns-click', obj)
  },
  getBtnContentIsOut(type) {
    let arr
    if (type == 'isOut') {
        arr = Array.isArray(this.btnContent) && this.btnContent.filter((item) => item.isOut);
    }else {
      arr = Array.isArray(this.btnContent) && this.btnContent.filter((item) => !item.isOut);
    }
    return arr
  },
  toMore(item) {
    this.isShow = !this.isShow
  },
  resetForm(formName) {
    this.$refs[formName].resetFields();
  },
  clearHandler(fieldName) {
    this.inputValue[fieldName] = [];
  },

  removeTag(fieldName, event) {
    this.keys = this.keys.splice(0, 1)
    this.inputValue[fieldName] = this.keys;
  },

  cascaderData(value, url) {
    if (value) {
      this.$http.get(url).then(res => {
        if (res.data) {
          this.brandModelList = res.data
        }
      })
    }
  },

  // ------------------------------------------------------------------
  // 报表相关事件
  // ------------------------------------------------------------------

  //报表名称按钮点击
  clickReportBtn(url, param) {
    const that = this;
    this.$http.get(url, param).then(res => {
      this.reportList = res.data;
      if (res.data.length > 0) {
        that.handlerSelReport(res.data[0])
        that.toSearch();
      }
    })
  },

  // 处理选择报表的配置内容
  handlerSelReport(command) {
    this.reloadReportForm = false;
    this.selReportName = command.title;
    this.reportDefs = command.jsonCfg;
    // TODO: report 硬编码
    this.inputValue['report'] = JSON.parse(command.jsonCfg)
    this.reloadReportForm = true;
  }

}
