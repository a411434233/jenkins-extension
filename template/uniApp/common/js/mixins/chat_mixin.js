import ConfigDomain from 'config.js'

let envConfig = process.env.NODE_ENV === 'development' ? ConfigDomain.dev : ConfigDomain.pro;
// let envConfig = ConfigDomain.pre;

export const chatMixin = {
    methods: {
        getImToken() {
            this.$http.get("im.GetToken").then((res) => {
                if (res.data.code == 0) {
                    this.initIm(res.data.data)
                }
            });

        },
        // 传入appkey token初始化im实例
        initIm(token) {
            let appkey = envConfig.chatToolsAppkey
            const Config = {
                appkey,
                token
            };
            this.$Service.Init(Config);
            this.RYConnect()
            this.watchMessage()
        },
        RYConnect() {
            const CONNECTION_STATUS = this.$Service.CONNECTION_STATUS;
            const Status = this.$Service.Status;
            Status.watch((status) => {
                switch (status) {
                    case CONNECTION_STATUS.CONNECTED:
                        uni.hideLoading();
                        break;
                    case CONNECTION_STATUS.NETWORK_UNAVAILABLE:
                        // uni.showLoading({
                        // 	content: "重连中 ...",
                        // });
                        break;
                    case CONNECTION_STATUS.KICKED_OFFLINE_BY_OTHER_CLIENT:
                        uni.alert({
                            title: "提示",
                            content: "当前用户已在其他端登录",
                        });
                        break;
                    default:
                        break
                }
            });

            Status.connect({
                    name: "cyy"
                })
                .then(() => {
                    this.getUnreadMessageCount();
                })
                .catch((err) => {
                    console.log("连接失败", err);
                });
        },
        watchMessage() {
            this.$Service.Message.watch((message) => {
                if (message.isOffLineMessage) {
                    return;
                }
                this.getUnreadMessageCount();
            });
        },
        // 判断是否有未读消息
        getUnreadMessageCount() {
            this.$Service.Conversation.getList().then((list) => {
                let unreadMsgCount = list.some(item => {
                    return item.unreadMessageCount > 0
                });
                uni.setTabBarItem({
                    index: 1,
                    text: "消息",
                    iconPath: 'static/tabbar/' + unreadMsgCount ? 'unread-0.png' : 'msg-0.png',
                    selectedIconPath: 'static/tabbar/' + unreadMsgCount ? 'unread-1.png' : 'msg-1.png'
                });
            });
        },
        // -------------------联系客服---------------------
        concatSale(skuId) {
            this.$http.get("api.GetSkuSellerInfo", {
                skuId
            }).then(res => {
                if (res.data.code == 0) {
                    this.chatroom(res.data.data)
                }
            })
        },
        // 进入聊天室
        chatroom(data) {
            let {
                sellerId,
                sellerName
            } = data
            let url = `/mainPages/im/chatRoom/index?sellerId=${sellerId}&type=${1}&sellerName=${sellerName}`;
            uni.navigateTo({
                url: url
            });
        },
        // -------------------联系客服---------------------结束
    }
}
