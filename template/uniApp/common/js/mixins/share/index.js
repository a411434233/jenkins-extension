import shareCommon from './share.js'
//仅限单页面分享，列表页分享需要自定义参数，支付宝和微信端返回参数名不一致(ali:skuType;wechat:skutype)
export const shareMixins = {
	data() {
		return {
			shareTit: "",
			shareSelfPath: "",
			shareBgImgCode: "", //分享背景图片code
			shareBgImgUrl: "", //分享背景图片url
		}
	},
	//分享
	onShareAppMessage(res) {
		let pages = getCurrentPages(),
			views = pages[pages.length - 1],
			shareTit = "",
			shareSelfPath = "";

		shareTit = this.shareTit ? this.shareTit : uni.getStorageSync('extConfig').shopName;
		shareSelfPath = this.shareSelfPath ? this.shareSelfPath : views.$page.fullPath;
		//自定义分享标题+路径
		if (res.from === 'button') {
			return shareCommon.sharePages(shareSelfPath, shareTit, this.shareBgImgUrl, this.shareBgImgCode);
		} else {
			//自定义分享标题，路径就是当前路径
			return shareCommon.sharePages(shareSelfPath, shareTit, this.shareBgImgUrl, this.shareBgImgCode)
		}
	},
}
