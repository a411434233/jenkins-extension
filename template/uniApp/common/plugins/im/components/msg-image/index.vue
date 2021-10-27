<template>
  <image
    class="rong-message-image"
    :style="{
      width: message.content.extra.width + 'px',
      height: message.content.extra.width + 'px',
      'max-width': '99%',
    }"
    :src="message.content.imageUri"
    @click="onPreviewImage"
  ></image>
</template>
<script>
const utils = require("../../utils/utils.js");
export default {
  props: {
    message: Object, //当前一条消息
  },
  methods: {
    // 图片预览
    onPreviewImage() {
      let currentImageUrl = this.message.content.imageUri;
      uni.previewImage({
        current: currentImageUrl,
        urls: [currentImageUrl],
      });
    },
  },
};
</script>
<style lang="css">
.rong-message-image {
  border-radius: 12rpx;
  position: relative;
  top: 3rpx;
}
</style>