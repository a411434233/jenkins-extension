<template>
  <div class="CellCmp-wrapper">
    <slot v-bind:column="column"></slot>
  </div>
</template>

<script>
import data from './data'
import methods from './methods'

export default {
  name:"rowCmp",
  $$route: {
    meta: {
      title: "标题名称",
      icon: "菜单图标",
    },
  },
  props: {
    column: {
      type: Number,
      default: 2,
    },
  },
  provide: {
    cellgroup: this,
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
