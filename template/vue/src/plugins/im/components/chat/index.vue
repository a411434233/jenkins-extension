<!--
 * @Author: your name
 * @Date: 2021-01-15 11:24:40
 * @LastEditTime: 2021-01-16 08:50:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dev\src\plugins\im\components\chat\index.vue
-->
<template>
  <div class="rong-chat" id="rong-chat-id" :style="{ bottom: bottom + 'px' }">
    <div id="rong-messages" ref="rongMessageWrapEl" :class="getFixClass">
      <div id="rong-message-wrap-el" ref="rongMessageWrapMainEl">
        <button
          v-if="hasMore"
          class="rong-messages-getbtn"
          type="primary"
          size="mini"
          @click="getMoreMessages"
        >
          加载更多
        </button>
        <loading v-if="!isAllowScroll"></loading>
        <withoutmessage
          v-if="!hasMore"
          id="message-notify-without"
        ></withoutmessage>
        <div
          v-for="(message, i) in messageList"
          :key="message.uId"
          :id="'U-' + message.uId"
          class="rong-message uni-page-wrapper"
        >
          <p class="sentTime" v-if="i % 3 === 0">
            {{ getTime(message.sentTime) }}
          </p>
          <div :class="['rong-message-avatar-' + message.direction]" v-if="message.name!=='XS:TextMsg'">
            <!-- <div class="rong-message-name">{{ message.sender.name }}</div> -->
            <img
              v-if="message.direction !== 'sender' && message.content.userInfo && message.content.userInfo.avatarUrl"
              class="rong-avatar rong-message-avatar"
              :src="message.content.userInfo.avatarUrl"
            />
            <img
              v-else
              class="rong-avatar rong-message-avatar"
              :src="
                message.direction == 'sender'
                  ? message.sender.avatar1
                  : message.sender.avatar2
              "
            />
          </div>
          <div
            :class="['rong-message-content rong-message-content-' + message.direction, ]"
          >
            <slot name="message" :message="message"></slot>
          </div>
          <TemplateMessage
            v-if="message.name == 'XS:TextMsg'"
            :message="message"
          />
          <div class="rong-clearfix"></div>
        </div>
      </div>
    </div>
    <!-- 顶部插槽 -->
    <div class="fixed-top">
      <slot name="slot-top" :list="messageList" />
    </div>
    <!-- 底部插槽 -->
    <div class="fixed-bottom">
      <slot name="slot-bottom"></slot>
    </div>
    <!-- 发送消息 -->
    <send-msg
      @sendMsgEvent="sendMsgEvent"
      :targetId="targetId"
      :type="type"
      :targetName="targetName"
      :userName="chatObj.latestMessage.content.userInfo ? chatObj.latestMessage.content.userInfo.userName : ''"
      :avatarUrl="chatObj.latestMessage.content.userInfo ? chatObj.latestMessage.content.userInfo.avatarUrl : ''"
      :chatObj="chatObj"
    >
      <div slot="slot-tool">
        <slot name="slot-tool"></slot>
      </div>
    </send-msg>
  </div>
</template>
<script>
import loading from '../loading/loading.vue'
import withoutmessage from '../without.vue'
import SendMsg from '../send-msg/index.vue'
import methods from './methods'
import TemplateMessage from '../template-message/index.vue'

export default {
  name: "chatCom",
  data() {
    return {
      messageList: [],
      bottom: 0,
      adapterHeight: 0,
      isShowEmojiSent: false,
      hasMore: true,
      todiv: "",
      isAllowScroll: true,
      isScrollTop: false,
      isCurrent: false,
    };
  },
  components: {
    withoutmessage,
    loading,
    SendMsg,
    TemplateMessage
  },
  props: {
    targetId: [String, Number],
    type: [String, Number],
    targetName: [String, Number],
    chatObj: [Object],
  },
  methods,
  computed: {
    getFixClass () {
      const goodsList = this.messageList.filter(item => item.content && item.content.OutGoodsId)
      return goodsList.length > 0 ? 'fixedWhite' : '';
    }
  },
  mounted() {
    const timer = setInterval(() => {
      if (this.targetId) {
        clearInterval(timer);
        this.onloadEvent();
      }
    }, 100);
  },
  beforeDestroy() {
    this.isCurrent = false;
  }
};
</script>
<style lang="scss" src='./index.scss'></style>
