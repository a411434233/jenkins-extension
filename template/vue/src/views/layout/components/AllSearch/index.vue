<template>
  <div class="allSearch-wrapper">
    <el-input
      v-if="search"
      suffix-icon="el-icon-search"
      clearable
      size="small"
      v-model="globalSearch"
      placeholder="请输入内容"
      @change="changeHandler"
      maxlength="50"
    ></el-input>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      // 全局搜索
      globalSearch: ""
    };
  },
  methods: {
    /**
     * 搜索框选中操作
     */
    changeHandler(val) {
      this.search(val);
    }
  },
  computed: {
    ...mapState({
      search: state => state.search
    })
  }
};
</script>

<style lang="scss">
.allSearch-wrapper .el-input--small .el-input__inner {
  width: 300px;
}
</style>
