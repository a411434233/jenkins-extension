<!--
 * @Author: your name
 * @Date: 2021-01-15 15:38:04
 * @LastEditTime: 2021-01-18 17:56:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dev\src\components\im\pages\chatList\index.vue
-->
<template>
  <div class="rong-conversations">
    <ConversationList :conversationList="conversationList" @chatroom="chatroom"></ConversationList>
  </div>
</template>

<script>
export default {
  $$route: {
    meta: {
      title: "标题名称",
      icon: "菜单图标",
    },
  },
  props: {
    conversationList: [Array],
  },
  data() {
    return {
      delivery: false,
    };
  },
  methods: {
    chatroom(item) {
      this.$emit("chatroom", item);
    }
  },
};
</script>
<style scoped lang="scss">
.rong-conversations {
  height: 100vh;
  color: #8e969f;
  padding: 5px 20px;
  font-size: 13px;
}

</style>