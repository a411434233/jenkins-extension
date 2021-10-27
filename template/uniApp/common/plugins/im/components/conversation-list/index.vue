<template>
	<view>
		<view class="rong-conversation" v-for="conversation in conversationList" :key="conversation.targetId" @click="chatroom(conversation)">
			<image class="rong-avatar rong-conversation-avatar" :src="conversation.target.avatar"></image>
			<!-- name -->
			<view v-if="mockUserIdentity" class="rong-conversation-title">{{ conversation.latestMessage.content.userInfo.targetName }}</view>
			<view v-else class="rong-conversation-title">{{ conversation.latestMessage.content.userInfo.userName }}</view>
			<!-- 消息内容 -->
			<view class="rong-conversation-message">
				<view class="rong-conversation-messagecontent">{{ conversation.content }}</view>
			</view>
			<!-- 消息时间 -->
			<view class="rong-conversation-senttime">{{ conversation._sentTime }}</view>
			<!-- 未读消息条数 -->
			<view v-if="conversation.unReadCount > 0" class="rong-conversation-unreadcount">{{ conversation.unReadCount }}</view>
		</view>
		<view class="nodata" v-if="!conversationList.length"><empty-cmp showText="暂无消息" /></view>
	</view>
</template>
<script>
const utils = require('../../utils/utils.js');
import emptyCmp from '@/components/self-empty'

export default {
	data() {
		return {};
	},
	props: {
		conversationList: {
			type: Array,
			default: []
		},
		mockUserIdentity: [String, Boolean]
	},
	components: {
		emptyCmp
	},
	mounted() {},
	methods: {
		// 进入聊天室
		chatroom(item) {
			let { type, targetId, target } = item;
			this.$emit('chatroom', item);

			let isSame = (conversation, another) => {
				let isSaveType = conversation.type == another.type;
				let isSaveTarget = conversation.targetId == another.targetId;
				return isSaveType && isSaveTarget;
			};
			console.log('conversationList', this.conversationList);
			let _conversationList = this.conversationList;
			utils.map(_conversationList, conversation => {
				if (isSame(conversation, item)) {
					conversation.unReadCount = 0;
				}
				return conversation;
			});
			this.$Service.Conversation.clearUnreadCount(item);
			this.$emit('setConversationList', _conversationList);
		}
	}
};
</script>
<style lang="css" scoped src="./index.css"></style>
