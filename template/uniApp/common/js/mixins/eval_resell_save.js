export const evalProResellOrSave = {
    methods: {
        //一键转卖
        async resellOrder(checkValue, checkIdArr, modelId, forgetPage) {
            let id = checkIdArr[0];

            //多个订单一键转卖是转卖到闲品寄卖或者闲品商城，直接跳转到成功页
            if (checkIdArr.length > 1) {
                this.reqResellOrder(checkIdArr);
                return
            }
            //思路：取出当前项的modelid，checkids(所有选中质检项的id)，保存质检报告，跳转到发布页
            let checkValStringfy = JSON.parse(checkValue);
            let tmpCheckVal = checkValStringfy.map(item => item.id).toString();
            let params = {
                checkids: tmpCheckVal,
                memo: "快速询价",
                modelid: modelId
            }
            if (!uni.getStorageSync("sessionid")) {
                let sessionRes = await this.getStoreSession();
                if (sessionRes.data.code == 0) {
                    uni.setStorageSync("sessionid", sessionRes.data.data)
                }
            }
            this.$http.post('pxpApi.getPxpReport', params).then(res => {
                if (res.data.errcode == 0) {
                    let tmpObj = res.data.model;
                    tmpObj.levellist = checkValStringfy;
                    tmpObj.checkid = id;
                    this._saveOldSkuInfo(tmpObj, forgetPage); //发布--保存质检报告
                }
            })
        },
        //保存质检报告
        _saveOldSkuInfo(obj, forgetPage) {
            this.$http.post('api.SaveOldSkuInfo', obj).then(res => {
                if (res.data.code == 0) {
                    let tmpCheckId = obj.checkid;
                    let turnPage =
                        `/pages/shop/publish_old/index?checkid=${tmpCheckId}&tmpSkuId=${res.data.data}&fromPath=${this.fromPath}&categoryId=${obj.categoryid}&name=${obj.modelname}`
                    if (forgetPage) {
                        uni.redirectTo({
                            url: turnPage
                        })
                    } else {
                        uni.navigateTo({
                            url: turnPage
                        })
                    }
                }
            })
        },
        //一键转卖--请求
        reqResellOrder(checkIdArr) {
            this.$http.post('api.RecycleOrderResell', checkIdArr).then(res => {
                if (res.data.data) {
                    //多个订单一键转卖是转卖到闲品寄卖或者闲品商城，直接跳转到成功页
                    if (checkIdArr.length > 1) {
                        uni.redirectTo({
                            url: `pages/order_center/submit_success/index?type=1&skuType=0`
                        })
                    }
                }
            })
        },
        //编辑或改价：如果是拍闲品skuChannel=2,最低价=零售底价；最高价=零售底价/0.7
        pxpEditSalePrice(curObj) {
            let salePrice = parseFloat(curObj.salePrice);
            let highestPrice = parseInt(curObj.highestPrice); //最高价，四舍五入
            let saleBasePrice = parseFloat(curObj.price + curObj.postage); //零售底价price+邮费

            if (!salePrice || salePrice <= 0) {
                this.$baseCommon.toastTxt("请输入您在门店商城销售的价格")
                return false
            }
            if (curObj.skuChannel == 2) {
                if (salePrice <= saleBasePrice) {
                    this.$baseCommon.toastTxt("商城售价不能低于零售底价")
                    return false
                }
                if (salePrice > highestPrice) {
                    curObj.salePrice = highestPrice;
                    this.$baseCommon.toastTxt(`商城售价不得超过${highestPrice}元`)
                    return false
                }
                return true
            }
            return true
        },

    }
}