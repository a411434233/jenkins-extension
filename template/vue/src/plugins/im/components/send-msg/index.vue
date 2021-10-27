<template>
  <div class="input-field">
    <div class="rong-editor">
      <div class="input-wapper">
        <input
          class="rong-editor-input"
          v-model="inputVal"
          @keyup.enter="sendText"
        />
        <div class="rong-icon rong-editor-btn-more" v-if="!inputVal">
          <img :src="iconPuls" v-if="!inputOpen" @click="handleIcon('plus')" />
          <img :src="iconClose" v-else @click="inputOpen = ''" />
        </div>
        <div
          class="rong-editor-btn rong-editor-btn-emojisent"
          @click="sendText"
          v-else
        >
          发送
        </div>
        <div
          class="rong-icon rong-editor-btn-emoji"
          @click="handleIcon('emoji')"
        >
          <img :src="iconEmoji" />
        </div>
      </div>
      <div v-if="inputOpen === 'emoji'" class="input-open">
        <el-carousel height="175px" :autoplay="false">
          <el-carousel-item v-for="(group, i) in swiperEmojiList" :key="i">
            <div class="rong-emojis-swiper">
              <ul
                class="rong-editor-emoji"
                v-for="item in group"
                :key="item.emoji"
                @click="handleEmoji(item)"
              >
                <span>{{ item.emoji }}</span>
              </ul>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div v-if="inputOpen === 'plus'" class="input-open">
        <div class="rong-editor-modules">
          <div class="rong-editor-module rong-editor-module-image">
            <input id="uploadEl" class="rong-editor-module-image-input" @change="uploadEvent" ref="uploadEl" type="file" />
          </div>
        </div>
        <div class="rong-editor-modules-solt">
          <slot name="slot-tool"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import methods from './methods'

export default {
  data() {
    return {
      inputOpen: "",
      inputVal: "",
      swiperEmojiList: [],
      iconPuls: require("../../../../../static/im/more.png"),
      iconEmoji: require("../../../../../static/im/biaoqing.png"),
      iconClose: require("../../../../../static/im/close.png"),
      headers: {},
      uploadData: {},
      formData: {},
      imToken: "",
    };
  },
  methods,
  props: {
    targetId: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: [String, Number],
      default: "",
    },
    targetName: {
      type: [String, Number],
      default: "",
    },
    userName: {
      type: [String, Number],
      default: "",
    },
    avatarUrl: {
      type: [String, Number],
      default: "",
    },
    chatObj: {
      type: [Object],
      default: {},
    },
  },
  mounted() {
    this.imToken = localStorage.getItem("imToken");
    this.swiperEmojiList = this.formatEmojis();
    this.initEvent();
  },
};
</script>
<style lang="scss" src="./index.scss"></style>
