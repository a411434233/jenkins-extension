
<template>
  <div class="cascader-wrapper">
    <!--
      clearable: 可清空
      collapse-tags 折叠显示选中
      filterable: 支持搜索
    -->
    <el-cascader
      v-if="options.length > 0"
      :options="options"
      v-model="inputValue"
      :props="props"
      filterable
      collapse-tags
      clearable
      style="width:300px"
    ></el-cascader>

    <el-cascader v-else v-model="inputValue" :props="props" filterable collapse-tags clearable></el-cascader>
  </div>
</template>

<script>
let id = 0;
import methods from './methods'
import { MIX_VMODEL } from '@/mixin/vmodel'

export default {
  props: {
    option: Object
  },
  computed: {
    options: async function() {
      const { method = "all" } = this.option.config;
      if (method === "all") {
        return await that.$http.get(source[0].url).data;
      }
    },
    props: function() {
      const that = this;
      const { method, source, props } = this.option.config;
      let lazyProps = {};
      const defaultProps = {
        checkStrictly: false, // 支持任意一级
        multiple: false, // 支持多选
        value: "value",
        label: "label",
        children: "children"
      };
      if (method === "lazy") {
        lazyProps = {
          lazy: true,
          lazyLoad(node, resolve) {
            const { level } = node;
            const end = source.length - 1;
            if (level > end) return;

            let params = {};
            const searchKey = source[level]["searchKey"];
            const param = source[level]["param"];
            if (level > 0 && searchKey) {
              params = Object.assign(params, { [searchKey]: node.value });
            }

            if (param) {
              params = Object.assign(params, param);
            }
            that.$http.get(source[level].url, params).then(res => {
              const nodes = res.data.map(item => ({
                value: item.value,
                label: item.label,
                leaf: level >= end
              }));
              resolve(nodes);
            });
          }
        };
      }
      const res_props = Object.assign(lazyProps, defaultProps, props);
      return res_props;
    }
  },
  methods,
  mixins: [MIX_VMODEL],
  // ------------------------------------------------------------------
  // pragma mark - Life Cycle(生命周期)
  // ------------------------------------------------------------------
  created() {
    this.createdInit();
  },
  mounted() {
    this.mountedInit();
  }
};
</script>
<style lang="scss" src="./index.scss" scoped></style>
