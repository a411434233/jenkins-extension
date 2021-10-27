<!--
 * @Author: your name
 * @Date: 2021-01-15 11:24:40
 * @LastEditTime: 2021-01-16 09:35:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dev\src\plugins\im\components\msg-text\index.vue
-->
<template>
  <div class="msg-text">{{ message.content.content }}</div>
</template>
<script>
export default {
  name:"TextMessage",
  props: {
    message: Object,
  },
};
</script>
<style lang="scss">
.msg-text {
  padding: 8px 5px;
  line-height: 22px;
}
</style>