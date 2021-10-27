<template>
	<view class="container">商城</view>
</template>
<script>
export default {
	data() {
		return {
			todoCount: 10
		};
	},
	components: {},
	methods: {},
	onShow() {
		console.log('shop-page');
	}
};
</script>

<style lang="scss">
.container {
	padding: 20px;
	font-size: 14px;
	line-height: 24px;
}
</style>
