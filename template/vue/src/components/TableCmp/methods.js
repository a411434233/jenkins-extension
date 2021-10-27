export default {
  // ------------------------------------------------------------------
  // pragma mark - inti(初始化行为)
  // ------------------------------------------------------------------
  handleSelectionChange(val) {
    this.$emit("select-change", val);
  },
  handleCommand(val) {
    this.$emit("btn-click", val);
  },
  btnsClick(obj) {
    this.$emit("btns-click", obj);
  },
  handleSearch() {
    this.handleCurrentChange(1);
  },

  handleSizeChange(val) {
    this.query.pageInfo.pageSize = val;
    this.$emit("loadData");
  },

  handleCurrentChange(val) {
    this.query.pageInfo.page = val;
    this.$emit("loadData");
  },

  customSortChange(obj) {
    this.query.orderAsc = obj.order == "ascending" ? true : false;
    this.query.orderBy = obj.prop;
    if (obj.order) {
      this.$emit("loadData");
    }
  }
};
