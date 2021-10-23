<template>
	<xs-page-list :config="config" :data="data" @getList="getList" />
</template>
<script>
export default {
  name: 'Demo',
  data() {
    return {
      config: {
        // 表格项
        columns: [
          { name: '名称', prop: 'name' }
        ],
        // 搜索项
        searchList: [
          { name: '时间筛选', prop: 'createTimeGreaterEqual', prop2: 'createTimeLessEqual', type: 'daterange', width: 5 }
        ],
        // 附加按钮
        buttonList: [
          {
            name: '导出',
            methodName: 'exportReport'
          }
        ]
      },
      data: {}
    }
  },
  methods: {
    getList() {
      this.$common.getList(this, 'ask.')
    },
    exportReport() {}
  }
}
</script>
<style scoped></style>
