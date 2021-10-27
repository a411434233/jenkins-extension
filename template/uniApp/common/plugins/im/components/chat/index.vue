<template>
	<view class="rong-chat" id="rong-chat-id" :style="{ bottom: bottom + 'px' }">
		<scroll-view scroll-y="true" class="rongMessageWrapEl rong-messages" :scroll-with-animation="true" :scroll-top="scrollTop">
			<view id="rong-message-wrap-el" class="rongMessageWrapMainEl">
				<button v-if="hasMore" class="rong-messages-getbtn" type="primary" size="mini" @click="getMoreMessages">加载更多</button>
				<loading v-if="!isAllowScroll"></loading>
				<withoutmessage v-if="!hasMore" id="message-notify-without"></withoutmessage>
				<view v-for="(message, i) in messageList" :key="message.uId" :id="'U-' + message.uId" class="rong-message uni-page-wrapper">
					<p class="sentTime" v-if="i % 3 === 0">{{ getTime(message.sentTime) }}</p>
					<template>
						<view :class="['rong-message-avatar-' + message.direction]">
							<view v-if="message.direction == 'sender'"><image v-if="userAvatarUrl" class="rong-avatar rong-message-avatar" :src="userAvatarUrl"></image></view>
							<image
								v-else
								class="rong-avatar rong-message-avatar"
								:src="message.content.userInfo.avatarUrl ? message.content.userInfo.avatarUrl : message.sender.avatar1"
							></image>
						</view>
						<view :class="['rong-message-content rong-message-content-' + message.direction, 'todo-cmp']"><slot name="message" :message="message"></slot></view>
					</template>
					<view class="rong-clearfix"></view>
				</view>
			</view>
		</scroll-view>
		<!-- 顶部插槽 -->
		<view class="fixed-top"><slot name="slot-top"></slot></view>
		<!-- 底部插槽 -->
		<view class="fixed-bottom"><slot name="slot-bottom"></slot></view>
		<!-- 发送消息 -->
		<send-msg @sendMsgEvent="sendMsgEvent" :targetId="targetId" :targetName="targetName" :userName="userName" :avatarUrl="avatarUrl" :type="type">
			<view slot="slot-tool"><slot name="slot-tool"></slot></view>
		</send-msg>
	</view>
</template>
<script>
import loading from '../loading/loading.vue'
import withoutmessage from '../without.vue'
import SendMsg from '../send-msg/index.vue'
import methods from './methods'

export default {
	name: 'chatList',
	data() {
		return {
			messageList: [],
			bottom: 0,
			adapterHeight: 0,
			isShowEmojiSent: false,
			hasMore: true,
			toView: '',
			isAllowScroll: true,
			scrollTop: 0,
			isScrollTop: false,
			isCurrent: false
		};
	},
	components: { withoutmessage, loading, SendMsg },
	props: {
		targetId: [String, Number],
		type: [String, Number],
		targetName: [String, Number],
		userName: [String],
		avatarUrl: [String],
		userAvatarUrl: [String]
	},
	methods,
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
	},
	onPullDownRefresh() {
		console.log('onPullDownRefresh');
		// uni.stopPullDownRefresh();
	}
};
</script>
<style lang="scss" src="./index.scss"></style>
