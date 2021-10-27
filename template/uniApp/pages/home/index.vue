<template>
	<view class="container">首页</view>
</template>
<script>
export default {
	data() {
		return {
			todoCount: 10
		};
	},
	components: {},
	onLoad() {
		this.getShopList();
	},
	methods: {
		getShopList() {
			// 本项目api---参数，请求体+请求头
			this.$http.put('isvuser/api/Good/UpSkuPrice/1618848737200010', { skuId: 1618848737200010 }).then(res => {
				console.log('testNewApi', res);
			});
			// 公共服务接口
			this.$http.get('comuser/api/Banner/GetBannerListByCode', { code: 'uuu' }).then(res => {});
			// 外部接口
			// this.$http
			// 	.post('pxpDomain/spu/model/getlist', {
			// 		page: 1,
			// 		pagesize: 50
			// 	})
			// 	.then(res => {
			// 		console.log('外部接口--pxpDomain', res);
			// 	});
		}
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
