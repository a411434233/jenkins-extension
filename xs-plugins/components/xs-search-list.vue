<template>
	<xs-search-list :queryData="queryData" :list="searchList" :buttonList="buttonList" @getList="getList" />
</template>
<script>
export default {
  data() {
    return {
      queryData: {
        createTime: '',
        endTime: '',
        input: '',
        date: '',
        select: ''
      },
      searchList: [
        { prop: 'createTime', type: 'daterange', prop2: 'endTime', width: 5 },
        { prop: 'createTime1', type: 'daterange', prop2: 'endTime1', title: '创建时间', width: 5 },
        { prop: 'date', type: 'date' },
        { prop: 'input', type: 'input', name: '输入框' },
        { prop: 'select', type: 'select', name: '下拉选择', options: [{ id: 1, name: '下拉' }] },
        { prop: 'stateVal', type: 'state', name: '下拉分类选择', options: 'ZR.Charge.Test' },
        { prop: 'goodCard', component: test, name: '插入其他组件' },
      ],
      buttonList: [
        { name: '新增', methodName: 'add' },
        { name: '修改', methodName: 'update', showType: 'X' },
      ]
    }
  },
  methods: {
    getList() {
      console.log('此次应该调用重查列表方法')
    },
    add() {
      console.log('按钮上的新增方法')
    },
    update() {
      console.log('按钮上的修改方法')
    }
  }
}
</script>
