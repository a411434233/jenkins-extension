<template>
  <el-col :span="24 / column">
    <div class="grid-content">
      <span class="grid-content-key">{{ name }}:</span>
      <span class="grid-content-val" :title="title ? title: null" :class="{textOverflow: title}">
        <slot></slot>
        {{title ? title : ''}}
      </span>
    </div>
  </el-col>
</template>

<script>
import data from './data'
import methods from './methods'

export default {
  name: "rowCmp",
  $$route: {
    meta: {
      title: "标题名称",
      icon: "菜单图标",
    },
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    column: {
      type: [String, Number],
      default: "2",
    },
    title: {
      type: String
    }
  },
  data,
  methods,
  mixins: [],
  components: {},
  watch: {},
  computed: {},
  // ------------------------------------------------------------------
  // pragma mark - Life Cycle(生命周期)
  // ------------------------------------------------------------------
  created() {
    this.createdInit();
  },
  mounted() {
    this.mountedInit();
  },
};
</script>
<style lang="scss" src="./index.scss" scoped></style>
