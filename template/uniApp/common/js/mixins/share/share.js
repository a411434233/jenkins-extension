import { http } from '@/common/http/index.js'

const shareCommon = {}

// 邀请好友拼团
shareCommon.sharePages = async (path, title, imgUrl, code) => {
	let newImgUrl = '';
	if (imgUrl || code) {
		if (imgUrl) {
			newImgUrl = imgUrl;
		} else {
			let data = await shareCommon.awaitGet('api.GetHomeBanner', {
				code: code
			})
			newImgUrl = data.data[0].imgUrl;
		}

	}
	let newPath = path

	//自定义分享图片二期先不做
	return {
		title: title,
		// #ifdef MP-WEIXIN
		imageUrl: newImgUrl,
		// #endif
		// #ifdef MP-ALIPAY
		bgImgUrl: newImgUrl,
		// #endif
		path: newPath
	}
}

shareCommon.awaitGet = async (url, query) => {
	let res = await http.get(url, query ? query : null)
	return new Promise(resolve => {
		resolve(res.data)
	})
}
export default shareCommon
