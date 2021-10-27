import { http } from '../http/index.js'

export function pageMore(pThis, propName, url, isInit) {
	if (isInit) {
		pThis[propName].data.length = 0
		pThis[propName].pageInfo.page = 0
		pThis[propName].pageInfo.hasMore = true
	}
	return new Promise((resolve, reject) => {
		let query = pThis[propName];
		if (!isInit && query.data.length >= query.pageInfo.totalCount) return
		query.pageInfo.page++

		let list = query.data

		http.post(url, query).then(function(e) {
				let middleVariable = e.data.data;
				query.pageInfo = middleVariable.pageInfo;
				query.data = [...query.data, ...middleVariable.data]
				resolve(e)
			}, (err) => {
				reject(err)
			}).catch(()=>{
				uni.hideLoading();
			})
	})
}

export default pageMore
