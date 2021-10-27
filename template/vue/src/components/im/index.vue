<template>
  <div class="im-wrapper">
    <div class="switch">
      <span> {{ delivery ? "下线" : "上线" }}：</span>
      <el-switch v-model="delivery" @change="changeSwitch"></el-switch>
    </div>
    <chatList
      @chatroom="linkChatroom"
      v-if="isChatList"
      :conversationList="conversationList"
    ></chatList>
    <chatRoom v-else @goback="goback" :currentItem="currentItem"></chatRoom>
  </div>
</template>
<script>
import chatList from './pages/chatList/index.vue'
import chatRoom from './pages/chatRoom/index.vue'

export default {
  $$route: {
    meta: {
      title: "标题名称",
      icon: "菜单图标",
    },
  },
  props: {},
  data() {
    return {
      isChatList: true,
      currentItem: null,
      conversationList: [],
      delivery: false,
    };
  },
  methods: {
    // 获取im token
    getImToken() {
      this.delivery = localStorage.getItem("delivery") == "true" ? true : false;
      if (!this.delivery) return;
      this.$http.get("api.im.GetToken").then((res) => {
        this.initIm(res.data);
        localStorage.setItem("imToken", res.data);
      });
    },
    // im 初始化
    initIm(token) {
      let appkey =
        location.origin !=  'http://isvlp194.365xs.cn'
          ? "cpj2xarlcm61n"
          : "pgyu6atqp289u";

      this.$Service.Init({
        appkey,
        token,
      });
      this.initRYConnect();
    },
    //链接
    initRYConnect() {
      const Status = this.$Service.Status;
      const CONNECTION_STATUS = this.$Service.CONNECTION_STATUS;
      Status.disconnect();
      Status.watch((status) => {
        switch (status) {
          case CONNECTION_STATUS.CONNECTED:
            this.getConversationList();
            break;
          case CONNECTION_STATUS.NETWORK_UNAVAILABLE:
            this.$message("重连中...");
            break;
          case CONNECTION_STATUS.KICKED_OFFLINE_BY_OTHER_CLIENT:
            this.$message("当前用户已在其他端登录...");
            break;
        }
      });
      Status.connect({ name: "客服张三" })
        .then((user) => {
          console.log(" 链接成功", user);
        })
        .catch((error) => {
          console.log("连接失败", err);
        });
    },
    // 获取消息列表
    getConversationList() {
      this.$Service.Conversation.getList().then((list) => {
        let _list = [];
        list.forEach((item) => {
          let avatarUrl;
          if (item.latestMessage.content.userInfo) {
            avatarUrl = item.latestMessage.content.userInfo ? item.latestMessage.content.userInfo.avatarUrl : '';
          }
          _list.push({
            ...item,
            avatarUrl,
          });
        });
        this.conversationList = _list;
      });
    },
    // im开关
    changeSwitch(val) {
      localStorage.setItem("delivery", this.delivery);
      if (val) {
        this.getImToken();
      } else {
        this.closeCounect();
      }
    },
    linkChatroom(item) {
      this.currentItem = item;
      this.isChatList = false;
    },
    goback() {
      this.isChatList = true;
      this.getConversationList();
    },
    // 关闭链接
    closeCounect() {
      const Status = this.$Service.Status;
      Status.disconnect();
      this.conversationList = [];
    },
    watchMessage() {
      this.$Service.Message.watch((message) => {
        if (message.isOffLineMessage) {
          return;
        }
        this.getConversationList();
      });
    },
  },
  mixins: [],
  components: {
    chatList,
    chatRoom,
  },

  mounted() {
    this.getImToken();
    this.watchMessage();
  },
};
</script>
<style lang="scss"  scoped>
.switch {
  width: 100%;
  margin-top: 15px;
  margin-left: 28px;
  span {
    position: relative;
    top: 2px;
    left: 5px;
  }
}
</style>
