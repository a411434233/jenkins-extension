<template>
	<xs-page-detail ref="pageDetail" :list="list" :data="postForm" :rules="rules"></xs-page-detail>
</template>
<script>
export default {
  $$route: {
    meta: {
      hidden: true,
      title: '页面名称'
    }
  },
  props: {
    srcData: { // 列表页 带来的数据， 根据不同情况调整
      type: [Object],
      default: () => {}
    }
  },
  watch: {
    srcData: {
      handler(newData) {
        if (newData) this.postForm = newData
      },
      immediate: true
    }
  },
  data() {
    return {
      list: [
        { name: '平台名称', prop: 'name' },
        { name: '状态', prop: 'status', type: 'radioGroup', options: [{ name: '启用', id: 1 }, { name: '禁用', id: 0 }] },
        { name: '平台地址', prop: 'address', type: 'textarea' },
        { name: '平台联系人', prop: 'contacts' },
        { name: '平台电话', prop: 'phone' },
      ],
      postForm: {
        name: '',
        status: '',
        address: '',
        contacts: '',
        phone: '',
      },
      rules: {
        name: this.$filterRules({ required: true }), // required 必填项， type :'xxx/ price'
        status: this.$filterRules({ required: true }),
      }
    }
  },
  methods: {
    confirm() {
      // 打开使用
      // this.$common.saveData(this, 'ask.cgmng.api.cg.Seach.MacPorts.post')
    }
  }
}
</script>
