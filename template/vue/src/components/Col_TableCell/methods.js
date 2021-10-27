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
  handle_copy(data) {
    const newArray = data.filter(function (item, index, arr) {
      return item !== 'copy'
    })
    this.$emit('copy-click', newArray)
  },
}