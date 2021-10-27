import pageMore from 'common/js/pagemore'
import { chatMixin } from './chat_mixin'
import { evalProResellOrSave } from './eval_resell_save'
import { mapMutations, mapState } from 'vuex'
import { getInputtips } from '@/common/js/maptools/maptools.js'
import platAuth from '@/common/js/loginAndPay/platform.js'

export const ISVMixin = {
    mixins: [chatMixin, evalProResellOrSave],
    data() {
        return {
            //爆款/热门产品------开始
            queryPopPro: {
                sortType: 3,
                orderAsc: false,
                publishChannelInc: [0],
                data: [],
                pageInfo: {
                    pageSize: 6, //默认 6
                    page: 1,
                    hasMore: true,
                }
            },
            popProductList: [],
            //爆款/热门产品-----结束
            totalCount: 0,
            showLogin: true,
            phoneOrderDetail: {},
            userInfo: {}, //用户的个人信息
            showText: "加载中...",
            showLoading: false, //防止用户多次点击创建多个订单
            imgBannerBig: [], //大尺寸图片
            state: [{
                    title: "待付款",
                    number: 0,
                    alias: "waitPayCount",
                    url: "/pages/order_center/list/index?type=1"
                },
                {
                    title: "待发货",
                    number: 0,
                    alias: "waitSendCount",
                    url: "/pages/order_center/list/index?type=2"
                },
                {
                    title: "待收货",
                    number: 0,
                    alias: "waitReceivedCount",
                    url: "/pages/order_center/list/index?type=3"
                },
                {
                    title: "退款/售后",
                    number: 0,
                    alias: "afterCount",
                    url: "/pages/return_goods/return_Exchange/index"
                }
            ],
            balanceInfo: {
                balance: 0
            }
        }
    },
    computed: {
        ...mapState(["phoneToLogin", "mockUserIdentity", "realUserIdentity", "storeInfoObj", "hasJudgRole"])
    },
    methods: {
        ...mapMutations({
            setPhoneToLogin: "SET_PHONETOLOGIN",
            setMockUserIdentity: "SET_MOCKUSERIDENTITY",
            setRealUserIdentity: "SET_REALUSERIDENTITY",
            setHasJudgRole: "SET_HASJUDGROLE"
        }),
        //订单详情
        getOrderDetail(orderId) {
            let orderParams = {
                id: orderId
            }
            this.$http.get("orderApi.GetOrderDetail", orderParams).then(res => {
                if (res.data.code == 0) {
                    this.phoneOrderDetail = res.data.data;
                }
            })
        },
        // 微信端-授权或者登录成功必须要手机号
        //授权注册+登录
        handleAuthReg() {
            platAuth.handleLogin().then(res => {
                let tmpRes = res.data.data;
                if (tmpRes.openId) {
                    uni.setStorageSync("openId", tmpRes.openId);
                }
                if (res.data.code == 0) {
                    this._loginOrRegSuccess(tmpRes);
                } else {
                    if (!tmpRes.subCode) {
                        this.$baseCommon.toastTxt(res.data.message)
                    }
                }
            })
        },
        //更新用户头像+昵称
        handleUpUserInfo() {
            platAuth.handleUpdateUserInfo().then(res => {
                if (res.data.code == 0) {
                    if (res.data.data) {
                        uni.setStorageSync("getUserInfo", true);
                    }
                }
            })
        },
        _loginOrRegSuccess(tmpRes) {
            uni.setStorageSync("vuetoken", tmpRes.accessToken);
            if (!uni.getStorageSync("userId")) {
                if (tmpRes.userId) {
                    uni.setStorageSync("userId", tmpRes.userId);
                } else {
                    platAuth.getUserId().then(res => {
                        let tmpRes = res.data;
                        uni.setStorageSync("userinfo", tmpRes);
                        uni.setStorageSync("userPhone", tmpRes.phone_number);
                        uni.setStorageSync("userId", tmpRes.id);
                    })
                }
            }

            this.GetUserIdentity(); //获取角色
            this.getImToken()
            this.initStoreInfo(); //门店信息
            /**微信
             subCode:2000登录成功；2001未绑定手机号；2002用户不存在；5000系统错误
             **/
            if (tmpRes.subCode == 2000) {
                uni.setStorageSync("postUserInfo", true)
                this.setPhoneToLogin(true);
            }
        },
        //手机号登录-----------------开始
        isPhoneLogined() {
            this.showLogin = !(this.phoneToLogin || uni.getStorageSync("userPhone"));
        },
        //手机号登录-----------------结束

        //获取角色：用户还是商户--------------------------开始
        GetUserIdentity() {
            this.$http.get('api.GetUserIdentity').then(res => {
                if (res.data.code == 0) {
                    this.setHasJudgRole(true);
                    // this.setMockUserIdentity(res.data.data);
                    //正常流程
                    this.setMockUserIdentity(!res.data.data);
                }
            })
        },
        //获取角色：用户还是商户--------------------------结束
        //用户端个人中心订单状态数据
        selfState() {
            this.$http.post("api.GetUserAllPrice", {}).then(res => {
                if (res.data.code == 0) {
                    let state1 = res.data.data;
                    this.state.forEach(item => {
                        item.number = state1[item.alias]
                    })
                }
            })
        },
        //banner图，static中的图换成调取接口
        getBannerByCode(code) {
            return this.$http.get("api.GetHomeBanner", {
                code: code
            })
        },
        //热卖机型
        getPopList(init) {
            pageMore(this, "queryPopPro", "api.SkuList", init).then((data) => {
                if (data.data.code == 0) {
                    this.popProductList = this.queryPopPro.data;
                }
            })
        },
        //请求店铺信息
        initStoreInfo() {
            this.$baseCommon.setNavTitle(this.storeInfoObj.shopName)
        },
        //通用提示
        commonToast() {
            this.$baseCommon.toastTxt("功能开发中，敬请期待~")
        },
        //复制方法
        copyInfo(num) {
            this.$baseCommon.copyTxt(num);
        },
        //展示加载中
        changeShowLoading(list) {
            if (list.length == 0) {
                this.showText = "抱歉，暂未找到相关数据"
            }
        },
        getStoreSession() {
            return this.$http.get("api.GetUserSession")
        },
        //支付--------微信+支付宝------------------------------------------------------开始
        _payModel(tradeParams, orderId, fromPath) {
            let that = this;
            platAuth.payModel(tradeParams).then(res => {
                that.showLoading = false;
                // #ifdef MP-ALIPAY
                if (res.resultCode == 9000) {
                    uni.redirectTo({
                        url: `/pages/order_center/result_page/index?orderId=${orderId}`
                    });
                } else if (fromPath) {
                    uni.redirectTo({
                        url: `/pages/order_center/topay_order/index?orderId=${orderId}`
                    });
                }
                // #endif

                // #ifdef MP-WEIXIN
                uni.redirectTo({
                    url: `/pages/order_center/result_page/index?orderId=${orderId}`
                });
                // #endif

            }).catch(() => {
                that.showLoading = false;
                uni.redirectTo({
                    url: `/pages/order_center/topay_order/index?orderId=${orderId}`
                });
                setTimeout(() => {
                    that.devPayTurnPath(orderId);
                }, 5000)
            })
        },
        devPayTurnPath(orderId) {
            // if (process.env.NODE_ENV === 'development') {
            // 	uni.redirectTo({
            // 		url: `/pages/order_center/result_page/index?orderId=${orderId}`
            // 	});
            // }
        },
        //支付--------------------------------------------------------------结束
        //取消订单
        _cancelGeneralAct(item) {
            this.$http.get("orderApi.CancelOrderInfo", {
                orderId: item.id
            }).then(res => {
                if (res.data.code == 0) {
                    this.$baseCommon.toastTxt("取消成功", 'none', () => {
                        uni.redirectTo({
                            url: `/pages/order_center/order_detail/index?orderId=${item.id}`
                        })
                    });
                }
            })
        },
        //注册
        wechatReg() {
            platAuth.handleReg(false).then(res => {
                if (res.data.code == 0) {
                    let tmpRes = res.data.data;
                    this._loginOrRegSuccess(tmpRes);
                }
            })
        },
        //获取手机号密钥--微信端，支付宝不支持
        getPhoneByEncry(e) {
            platAuth.hanleBindPhoneEncry(e).then(res => {
                let tmpRes = res.data.data;
                if (tmpRes.openId) {
                    uni.setStorageSync("openId", tmpRes.openId);
                }
                if (res.data.code == 0) {
                    this._loginOrRegSuccess(tmpRes);
                }
            })
        },
        //大尺寸背景图+icons
        getHeaderImg(code) {
            this.getBannerByCode(code).then(res => {
                this.imgBannerBig = res.data.data.length ? res.data.data : [];
            })
        },
        isNoAuthToast() {
            this.$baseCommon.toastTxt("为了您更好的服务体验，请在个人中心完成授权")
        },
        //获取余额
        getUserWithdrawInfo() {
            this.$http.get("api.GetCPCNBankInfo").then(res => {
                if (res.data.code == 0) {
                    this.balanceInfo = res.data.data;
                }
            })
        },
        //打开地图
        async toTarget() {
            let targetAddress = this.storeInfoObj.shopAddress;
            let inputLoca = await getInputtips(targetAddress);
            let location = inputLoca[0].location.split(",").map(Number);
            uni.openLocation({
                latitude: location[1],
                longitude: location[0],
                name: this.storeInfoObj.shopName,
                address: this.storeInfoObj.shopAddress,
                success: function() {
                    console.log('success');
                }
            });
        },
        //联系门店
        concatStorePhone() {
            uni.makePhoneCall({
                phoneNumber: this.storeInfoObj.servicePhone
            });
        }
    }
}
