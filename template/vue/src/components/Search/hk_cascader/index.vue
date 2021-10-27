<template>
  <div class="hk_cascader_qudao-wrapper">
    <el-cascader
      :placeholder="placeholder"
      :size="size"
      :options="selectData"
      :props="{ multiple: true, checkStrictly:true }"
      collapse-tags
      filterable
      @change="changesQuod"
    />
  </div>
</template>

<script>
import { MIX_VMODEL } from '@/mixin/vmodel'
/*
* @optionItem {Object} // 组件配置信息
* @placeholder {String} // 组件label
* @selectData {Array} // 多选数据
* */
export default {
  mixins: [MIX_VMODEL],
  props: {
    optionItem: Object,
    placeholder: {
      type: String,
      default: ''
    },
    size: String
  },
  data() {
    return {
      selectData: []
    }
  },
  // ------------------------------------------------------------------
  // pragma mark - Life Cycle(生命周期)
  // ------------------------------------------------------------------
  mounted() {
    this.mountedInit()
  },
  methods: {
    // async lazyLoad(node, resolve) {
    //   const { level, value } = node;
    //   let list = await this.getNext(value, level);
    //   resolve(list)
    // },
    changesQuod(val) {
      console.log(val)
      val = JSON.parse(JSON.stringify(val))
      let value = []
      if (this.optionItem.dataSourceType == 0 || this.optionItem.dataSourceType == 10) {
        value = [val.pop()]
      } else {
        value = val.map(v => {
          return v.pop()
        })
      }
      this.inputValue = value
    },
    mountedInit() {
      this.$http.get(this.optionItem.url).then(async res => {
        if (res.data) {
          this.selectData = res.data// this.fromDataSelectData(res.data)
        }
        return []
      })
    }
    // async getNext(portId, level) {
    //   var model={};
    //   model[this.optionItem.urlParam] = portId ;
    //   return await this.$http.get(this.optionItem.url, model).then(res => {
    //     if (res.data) {
    //       return this.fromDataSelectData(res.data, level);
    //     }
    //     return [];
    //   })
    // },
    // fromDataSelectData(data, level = 0) {
    //   //console.log(data);
    //   if (typeof data == 'object' && !Array.isArray(data)) {
    //     let selectData = [];
    //     for (let key in data) {
    //       this.addArray(data[key], selectData);
    //       // console.log(key);
    //       // selectData.push({
    //       //   value: key,
    //       //   label: data[key],
    //       //   children: [],
    //       //   leaf: level >= 1
    //       // })
    //     }
    //     return selectData;
    //   } else {
    //     if (Array.isArray(data)) return data
    //   }
    // },
    // addArray(data, selectData){
    //   console.log(data);
    // }
  }
}
</script>
