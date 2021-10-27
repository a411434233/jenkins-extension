<!--
 * @Author: your name
 * @Date: 2020-12-31 14:26:45
 * @LastEditTime: 2021-01-27 09:20:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \isv\plugins\im\sendMsg\index.vue
-->
<template>
  <view class="input-field">
    <view class="rong-editor">
      <view class="input-wapper">
        <input
          :class="[
            'rong-editor-input',
            inputVal.length > 0 ? 'rong-editor-input-180' : '',
          ]"
          v-model="inputVal"
          @confirm="sendText"
        />
        <view class="rong-icon rong-editor-btn-more" v-if="!inputVal">
          <img :src="iconPuls" v-if="!inputOpen" @click="handleIcon('plus')" />
          <img :src="iconClose" v-else @click="inputOpen = ''" />
        </view>
        <view
          class="rong-editor-btn rong-editor-btn-emojisent"
          @click="sendText"
          v-else
        >
          发送
        </view>
        <view
          class="rong-icon rong-editor-btn-emoji"
          @click="handleIcon('emoji')"
        >
          <img :src="iconEmoji" />
        </view>
      </view>
      <view v-if="inputOpen === 'emoji'" class="input-open">
        <swiper :indicator-dots="true">
          <view v-for="(group, i) in swiperEmojiList" :key="i">
            <swiper-item class="rong-emojis-swiper">
              <ul
                class="rong-editor-emoji"
                v-for="item in group"
                :key="item.emoji"
                @click="handleEmoji(item)"
              >
                {{
                  item.emoji
                }}
              </ul>
            </swiper-item>
          </view>
        </swiper>
      </view>
      <view v-if="inputOpen === 'plus'" class="input-open">
        <view class="rong-editor-modules">
          <view
            class="rong-editor-module rong-editor-module-image"
            @click="sendImage"
          ></view>
        </view>
        <view class="rong-editor-modules-solt">
          <slot name="slot-tool"></slot>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import methods from './methods'

export default {
  data() {
    return {
      inputOpen: "",
      inputVal: "",
      swiperEmojiList: [],
      iconPuls: require("../../static/more.png"),
      iconEmoji: require("../../static/biaoqing.png"),
      iconClose: require("../../static/close.png"),
    };
  },
  methods,
  props: {
    targetId: {
      type: String,
      default: "",
    },
    targetName: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    userName: {
      type: String,
      default: "",
    },
    avatarUrl: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.swiperEmojiList = this.formatEmojis();
    this.initEvent();
  },
};
</script>
<style lang="scss" src="./index.scss"></style>
