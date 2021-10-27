<!--
 * @Author: your name
 * @Date: 2021-01-15 11:24:40
 * @LastEditTime: 2021-01-22 10:09:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dev\src\plugins\im\components\conversation-list\index.vue
-->
<template>
  <div class="conversation-wrapper">
    <div
      class="rong-conversation"
      v-for="(conversation, i) in conversationList"
      :key="i"
      @click="chatroom(conversation)"
    >
      <img
        v-if="conversation.avatarUrl"
        class="rong-avatar rong-conversation-avatar"
        :src="conversation.avatarUrl"
      />
      <img
        v-else
        class="rong-avatar rong-conversation-avatar"
        :src="conversation.target.avatar"
      />
      <div
        class="rong-conversation-title"
        v-if="conversation.latestMessage.content.userInfo"
      >
        {{ conversation.latestMessage.content.userInfo  ? conversation.latestMessage.content.userInfo.userName : ''}}
      </div>
      <div
        class="rong-conversation-title" v-else
      >
        {{ conversation.latestMessage.content.userName }}
      </div>

      <div class="rong-conversation-message">
        <div class="rong-conversation-messagecontent">
          {{ conversation.content }}
        </div>
      </div>
      <div class="rong-conversation-senttime">{{ conversation._sentTime }}</div>
      <div
        v-if="conversation.unReadCount > 0"
        class="rong-conversation-unreadcount"
      >
        {{ conversation.unReadCount }}
      </div>
    </div>
    <p v-if="!conversationList.length" class="nodata">暂无数据</p>
  </div>
</template>
<script>
const utils = require("../../utils/utils.js");
export default {
  name: "ConversationList",
  props: {},
  data() {
    return {};
  },
  props: {
    conversationList: [Array],
  },
  mounted() {},
  methods: {
    // 进入聊天室
    chatroom(item) {
      let { type, targetId, target } = item;
      let isSame = (conversation, another) => {
        let isSaveType = conversation.type == another.type;
        let isSaveTarget = conversation.targetId == another.targetId;
        return isSaveType && isSaveTarget;
      };
      this.$emit("chatroom", item);
      let _conversationList = this.conversationList;
      utils.map(_conversationList, (conversation) => {
        if (isSame(conversation, item)) {
          conversation.unReadCount = 0;
        }
        return conversation;
      });
      this.$Service.Conversation.clearUnreadCount(item);
      this.conversationList = _conversationList;
    },
  },
};
</script>
<style lang="css" scoped  src='./index.css'></style> 