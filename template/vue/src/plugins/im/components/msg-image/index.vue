<template>
  <el-image
    class="rong-message-image"
    :style="{
      width: message.content.extra.width + 'px',
      'max-width': '99%',
    }"
    :src="message.content.imageUri"
    :preview-src-list="currentImageUrl"
  ></el-image>
</template>
<script>
const utils = require("../../utils/utils.js");
export default {
  name: "ImageMessage",
  props: {
    message: Object, //当前一条消息
  },
  data() {
    return {
      currentImageUrl: [],
    };
  },
  mounted() {
    this.currentImageUrl = [this.message.content.imageUri];
  },
  methods: {
    // 图片预览
    onPreviewImage() {
      let currentImageUrl = this.message.content.imageUri;
    },
  },
};
</script>
<style lang="css">
.rong-message-image {
  border-radius: 12px;
  position: relative;
  top: 3px;
}
</style>