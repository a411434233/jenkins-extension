<template>
	<view class="container">
		我是产品详情页
	</view>
</template>
<script>
export default {
	data() {
		return {
			todoCount: 10
		};
	},
	components: {},
	onLoad(options){
		console.log("options",options);
	},
	methods: {
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
