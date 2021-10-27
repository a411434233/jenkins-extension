import { http } from '../../http/index.js'

/**
 * AlipayAuth: 支付宝静默授权登录
 */
class AlipayAuth {
    /**支付宝小程序授权接口
    appId如果是小程序是小程序的appId;
    如果是第三方模板，appId是模板appId
    **/
    aliUserAuthor(data) {
        let accessToken = uni.getStorageSync("extConfig") ? uni.getStorageSync("extConfig").accessToken :
            "";
        return http.post('api.UserAuthor', {
            avatarUrl: data.avatarUrl || "",
            userName: data.userName || "",
            phoneCipherText: data.phoneCipherText || "",
            code: data.code,
            scope: 'auth_base',
            appId: data.appId,
            accessToken: accessToken
        })
    }

    //通过userId获取token
    getTokenByUserId(data) {
        http.get("api.UserAuthor", {
            userId: uni.getStorageSync("userId"),
            clientId: data.clientId //"ali_youpin",应该是直接取，不需要传值
        })
    }

    // 支付宝
    alipayModel(data) {
        return new Promise((resolve, reject) => {
            my.tradePay({
                tradeNO: data,
                success: (res) => {
                    resolve(res)
                },
                fail: (err) => {
                    reject(err);
                }
            })
        })
    }

    //获取收货地址
    getAliReceiptAddress() {
        return new Promise((resolve, reject) => {
            my.getAddress({
                success: (res) => {
                    let tmpRes = res.result;
                    if (res.result) {
                        let tmpParams = {
                            userName: tmpRes.fullname,
                            phone: tmpRes.mobilePhone,
                            prov: tmpRes.prov,
                            city: tmpRes.city,
                            area: tmpRes.area,
                            addressDetail: tmpRes.street + tmpRes.address
                        }
                        resolve(tmpParams)
                    }
                },
                fail: (res) => {
                    reject(res);
                }
            })
        })
    }
}

export default AlipayAuth
