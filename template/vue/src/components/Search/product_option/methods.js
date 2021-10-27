export default {
  // ------------------------------------------------------------------
  // pragma mark - inti(初始化行为)
  // ------------------------------------------------------------------
  createdInit() {

  },
  mountedInit() {
  },

  checkboxHandle(event, fieldName) {
    this.keys = []
    this.checkboxForm = {
      areaCodes: this.selectedAreaCode,
      arsIdInc: this.selectedArsId,
      denomInc: this.selectedDenomInc,
      typeId: parseInt(this.selectedType)
    }
    this.$http.post('api.Seach.QueryStdProdIds', this.checkboxForm).then(res => {
      if (res.data) {
        var values = [];
        for (var key in res.data.pIdDic) {
          values.push(res.data[key])
          this.keys.push(parseInt(key))
        };
        this.inputValue = [].concat(this.keys);
      }
    })
  },

  // ------------------------------------------------------------------
  // HTTP
  // ------------------------------------------------------------------
  loadSource() {
    this.$http.post('api.Seach.QueryProdPlugin', {
      typeId: parseInt(this.selectedType)
    }).then(res => {
      if (res.data) {
        this.areaCodeDicList = res.data.areaCodeDic
        this.arsIdDicList = res.data.arsIdDic
        this.denomIncList = res.data.denomInc
      } else {
        this.areaCodeDicList = this.arsIdDicList = this.denomIncList = []
      }
    })
  }
}