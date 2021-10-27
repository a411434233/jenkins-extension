<template>
  <div class="textOVer">
    <span class="textOVerThree">
      {{ text }}
    </span>
    <el-button
      v-if="text"
      type="text"
      size="mini"
      v-clipboard:copy="text"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      >复制</el-button
    >
  </div>

  <!-- 
    导入 :import
    调用: <TextOVer :text="text"></TextOVer>
   -->
</template>
<script>
export default {
  props: {
    text: [String],
  },
  methods: {
    onCopy: function (e) {
      this.$message({
        type: "success",
        message: "复制成功",
      });
    },
    onError: function (e) {
      this.$message({
        type: "error",
        message: "复制失败",
      });
    },
  },
};
</script>
<style lang="scss">
.textOVer {
  text-align: center;
  .textOVerThree {
    display: -webkit-box;
    overflow: hidden;
    white-space: normal !important;
    text-overflow: ellipsis;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>