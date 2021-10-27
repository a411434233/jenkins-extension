
## im 插件  

## 插件==> /plugins/im

## 页面==> /page/im

## 1、在入口文件 main.js全局引入im插件 

<!-- 
 import ImPlugin from "@/common/plugins/im";
 Vue.use(ImPlugin);
-->

## 2、在app.vue 初始化
<!-- 
    2.1 // 传入appkey token初始化im实例
    const Config = {
      appkey: "cpj2xarlcm61n",
      token:
        "+bhcQzSVJ/gQdaxpHojgkxI+194W668pw9XRfFzsE4zFJQ/VieHz6A==@sktu.cn.rongnav.com;sktu.cn.rongcfg.com",
    };
    this.$Service.Init(Config);

    2.2 初始化成功 调用initRYConnect()

    initRYConnect() {
      const Status = this.$Service.Status;
      const CONNECTION_STATUS = this.$Service.CONNECTION_STATUS;

      Status.watch((status) => {
        switch (status) {
          case CONNECTION_STATUS.CONNECTED:
            uni.hideLoading();
            break;
          case CONNECTION_STATUS.NETWORK_UNAVAILABLE:
            uni.showLoading({
              content: "重连中 ...",
            });
            break;
          case CONNECTION_STATUS.KICKED_OFFLINE_BY_OTHER_CLIENT:
            uni.alert({
              title: "提示",
              content: "当前用户已在其他端登录",
            });
            break;
        }
      });

      Status.connect({ name: "张三" })
        .then((user) => {
          console.log("连接signalR 成功");
        })
        .catch((error) => {
          console.log("连接失败", err);
        });
    },

 -->

## 3、链接成功获取 消息列表 /page/im/chatList
<!-- 
const utils = require('@/common/plugins/im/utils/utils.js');

export default {
  
      // 获取消息列表
    connect() {
        const timer = setInterval(() => {
            this.$Service.Conversation.getList().then((list) => {
                clearInterval(timer);
                this.conversationList = list;
            });
        }, 200);
    },

    // 进入聊天室
    chatroom(item) {
        let { type, targetId, target } = item;
        let url = `/pages/im/chatRoom/index?targetId=${targetId}&type=${type}&title=${targetId}`;
        uni.navigateTo({
            url: url,
        });
    },
}
 -->
 ## 4、进入聊天室 /page/im/chatRoom  
 ## 通过 props.message.name 判断消息类型 传递对应得消息组件到插槽solt

  ##  <!-- 会话列表 -->
   ##  <chat-list :targetId="targetId" :type="type">

   ##    <!-- 消息插槽： props.message.name 判断消息类型 -->
   ##    <view slot="message" slot-scope="props">
   ##       <!-- 系统消息组件 -->
   ##       <image-message v-if="props.message.name == 'RC:ImgMsg'" :message="props.message" :messageList="messageList"/>
   ##      <text-message  v-else-if="props.message.name == 'RC:TxtMsg'" :message="props.message"/>

   ##      <!-- 自定义消息组件 -->
   ##       <order-info-message v-else-if="props.message.name == 'XS:OrderMsg'" :message="props.message" />
   ##      <view v-else>{{ props.message.name }}</view>
   ##     </view>

   ##     <!-- 顶部悬浮插槽 -->
   ##    <view slot="slot-top"></view>
   ##    <!-- 底部悬浮插槽 -->
   ##   <view slot="slot-bottom"></view>
   ##      <!-- 工具插槽 -->
   ##     <view slot="slot-tool"></view>
  ##   </chat-list>

<!-- 
 导入系统消息组件
import chatList from "@/common/plugins/im/components/chat-list";
import textMessage from "@/common/plugins/im/components/msg-text";
import imageMessage from "@/common/plugins/im/components/msg-image";
 导入自定义消息组件
import orderInfoMessage from "../components/msg-order-info";
export default {
  data() {
    return {
      targetId: "",
      type: "",
      messageList: [],
    };
  },
  components: { chatList, textMessage, imageMessage, orderInfoMessage },
  //获取上个页面传递得 targetId type
  onLoad(query) {
    this.targetId = query.targetId;
    this.type = query.type;
  },
};
-->

##  5、自定义消息组件 /page/im/compoments 
# 如：订单组件、商品组件 
## 6、静态资源 图片 /page/im/imgs

##  发送消息 例子 
<!-- 
## 来源：https://docs.rongcloud.cn/v4/views/im/noui/guide/private/msgmanage/msgsend/web.html?plat=uniapp
    // 发送消息
    sendText() {
        this.$Service.Message.sendText({
            targetId: '接收方的 userId',
            content: '要发送得内容',
            type: 1
        }).then(message => {
             console.log('发送 s:person 消息成功', message);
        });
    },
 -->
