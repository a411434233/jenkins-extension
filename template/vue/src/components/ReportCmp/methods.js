export default {
  // ------------------------------------------------------------------
  // pragma mark - inti(初始化行为)
  // ------------------------------------------------------------------
  handleSelectionChange(val) {
    this.$emit('select-change', val)
  },
  handleCommand(val) {
    this.$emit('btn-click', val)
  },
  btnsClick(obj) {
    this.$emit('btns-click', obj)
  },
  handleSearch() {
    this.$emit('loadData')
  },

  handleSizeChange(val) {
    this.query.pageInfo.pageSize = val
    this.$emit('loadData')
  },

  customSortChange(obj) {
    this.query.orderAsc = obj.order == 'ascending'
    this.query.orderBy = obj.prop
    if (obj.order) {
      this.$emit('loadData')
    }
  },
}
