
const utils = require('../../utils/utils.js');
const { adapterHeight } = utils.getAdapterheight();

export default {
    onloadEvent(context) {
        this.adapterHeight = adapterHeight
        let type = this.type
        let targetId = this.targetId
        let keyboardHeight = 0;
        this.setKeyboardPos(context, keyboardHeight, adapterHeight)
        this.isCurrent = true

        let position = 0;
        let count = 5;
        this.getMessageList(context, { type, targetId, position, count });

        this.$Service.Message.watch((message) => {
            if (message.isOffLineMessage) {
                return;
            }
            console.log('收到消息', message)
            if (message.type == type && message.targetId === targetId && this.isCurrent) {
                this.messageList.push(message);
                this.scrollTopEvent()
                this.toView = message.uId
                this.$Service.Conversation.clearUnreadCount({
                    type, targetId
                });
            }
        });
    },
    setKeyboardPos(context, keyboardHeight, adapterHeight) {
        keyboardHeight = keyboardHeight || 0;
        let isScroll = (keyboardHeight > 0);
        if (isScroll) {
            this.bottom = adapterHeight + keyboardHeight
            this.isShowEmojiSent = false
            this.toView = this.getToView(context)
        } else {
            this.bottom = adapterHeight + keyboardHeight
            this.isShowEmojiSent = false
        }
    },
    getToView() {
        let index = this.messageList.length - 1;
        let message = this.messageList[index] || {};
        return message.uId || '';
    },
    getTime: function (time) {
        var today = new Date(utils.dateFormat(new Date(), 'yyyy/MM/dd'));
        var thisTime = today.getTime();
        if (thisTime - time < 0) {
            return utils.dateFormat(new Date(time), 'hh:mm');
        } else if (thisTime - time < 24 * 60 * 60 * 1000) {
            return '昨天 ' + utils.dateFormat(new Date(time), 'hh:mm');
        } else if (thisTime - time < 6 * 24 * 60 * 60 * 1000) {
            var week = new Date(time).getDay();
            switch (week) {
                case 0:
                    week = '星期日';
                    break;
                case 1:
                    week = '星期一';
                    break;
                case 2:
                    week = '星期二';
                    break;
                case 3:
                    week = '星期三';
                    break;
                case 4:
                    week = '星期四';
                    break;
                case 5:
                    week = '星期五';
                    break;
                case 6:
                    week = '星期六';
                    break;
            }
            return week + ' ' + utils.dateFormat(new Date(time), 'hh:mm');
        } else {
            return utils.dateFormat(new Date(time), 'yy/MM/dd hh:mm');
        }
    },
    // 获取历史消息
    getMessageList(context, params) {
        let { position } = params;
        let event = params.type == 4 ? this.$Service.Message.getChatRoomMessageList : this.$Service.Message.getList;
        return event(params).then((result) => {
            console.log('获取历史消息', result)
            let messages = result.messageList;
            let hasMore = result.hasMore;
            this.hasMore = hasMore

            let messageList = messages.concat(this.messageList);

            console.log('messageList', messageList)

            let toView = '';
            if (params.position == 0) {
                let index = messageList.length - 1;
                let message = messageList[index] || {};
                toView = message.uId || '';
            }
            let isFirst = (position == 0);
            if (!this.hasMore && !isFirst) {
                // 灰条提示
                toView = 'message-notify-without';
                this.hasMore = hasMore
            }
            if (isFirst) {
                this.isAllowScroll = true
                this.messageList = messageList
                this.toView = toView
            } else {
                this.isAllowScroll = true
                this.messageList = messageList
            }
            if (!this.isScrollTop) {
                this.scrollTopEvent()
            }
        })
    },
    // 查看更多
    getMoreMessages(context) {
        this.isScrollTop = true
        let messageList = this.messageList || [];
        let firstMessage = messageList[0] || {};
        let position = firstMessage.sentTime || 0;
        let count = 5;
        if (this.hasMore) {
            this.isAllowScroll = false
            this.getMessageList(context, { type: this.type, targetId: this.targetId, position, count });
        }
    },
    // 发送消息
    sendMsgEvent(message) {
        this.messageList.push(message)
        this.scrollTopEvent()
        this.toView = message.uId
    },
    // 滚动到页面底部
    scrollTopEvent() {
        let that = this;
        setTimeout(() => {
            uni.getSystemInfo({
                success: (res) => {
                    let info = uni.createSelectorQuery().in(this).select(".rongMessageWrapMainEl");
                    info && info.boundingClientRect(function (data) {
                        that.scrollTop = data.height - 100
                    }).exec()
                }
            });
        }, 20)
    }
}