<template>
	<view class="msg-text">{{ message.content.content }}</view>
</template>
<script>
export default {
	props: {
		message: Object
	}
};
</script>
<style lang="scss">
.msg-text {
	/* #ifdef MP-ALIPAY */
	padding: 18rpx 10rpx;
	/* #endif */
	/* #ifdef MP-WEIXIN */
	padding: 34rpx 10rpx;
	/* #endif */
	line-height: 40rpx;
}
</style>
