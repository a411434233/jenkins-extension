<template>
	<xs-table-list @getList="getList" :query="query" :data="data" :columns="columns" />
</template>
<script>
export default {
  data() {
    return {
      columns: [
        { name: 'ID', prop: 'id', type: 'popup', methodName: 'popup' },
        { name: '姓名', prop: 'name' },
        { name: '图片', prop: 'url', type: 'image' },
        { name: '状态', prop: 'state', type: 'color', format: 'stateList' },
        { name: '省份', prop: 'province' },
        { name: '市区', prop: 'city' },
        { name: '操作', prop: 'options', type: 'button', buttonList: [{ name: '添加', methodName: 'add' }] }
      ],
      query: {},
      data: [
        {
          id: 102635784854744,
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄上海市普陀区金沙江路',
          state: 0,
          url: 'http://hklp194.365xs.cn:8194/Res/210406025615297557.jpg',
        },
        {
          id: 565265268629658,
          date: '2020-08-13',
          name: '大明',
          province: '浙江省',
          city: '杭州市',
          address: '江干区 ******** 小区',
          state: 1,
          url: '',
        },
      ]
    }
  },
  methods: {
    popup(row, index) {
      console.log('此处应该发起弹窗', row, index)
    },
    getList() {
      console.log('此处应该调用查询列表方法')
    },
    add(row, index) {
      console.log('点击了列表中的按钮', row, index)
    }
  },
}
</script>
