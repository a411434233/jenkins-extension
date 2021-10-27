import { http } from '../http/index.js'

class Auth {
    async getLoginStatus() {
        let code = await this.getCode();
        return new Promise((resolve, reject) => {
            function setResponse(response) {
                let data = response.data.data;
                // TODO:token过期时间
                uni.setStorageSync('tokenTime', new Date().getTime());
                if (data.accessToken) {

                    resolve(data);
                } else {
                    reject(data);
                }
            }

            // #ifdef MP-WEIXIN
            http.get('api.WxMpLogin', {
                params: {
                    authorCode: code
                }
            }).then(response => {
                setResponse(response);
            });
            return;
            // #endif

            // #ifdef MP-ALIPAY
            http.get('api.AliMpLogin', {
                params: {
                    appid: '2021001164698873',
                    clientId: 'ali_youpin',
                    authorCode: code,
                },
            }).then(response => {
                setResponse(response);
            });
            // #endif

        });
    }
    getCode() {
        return new Promise((resolve) => {
            uni.login({
                success: res => {
                    resolve(res.code);
                },
            });
        });
    }
}
export default new Auth();
