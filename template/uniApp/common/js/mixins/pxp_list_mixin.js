export const PXPMixin = {
    data() {
        return {
            productTypeList: [{
                    name: "手机",
                    categoryid: 0
                },
                {
                    name: "平板",
                    categoryid: 1
                },
                {
                    name: "笔记本",
                    categoryid: 2
                }
            ],
            leftBrandList: [],
            rightBrandList: [],
            defaultType: {
                actIndex: 0
            },
            defaultBrandIndex: 0,
            queryModel: {
                categoryid: 0,
                brandid: 0
            },
            page: 1,
            totalCount: 0,
            categoryid: 0,
            brandid: 0,
            defaultTabIndex: 0 //组件-筛选拍闲品列表数据
        }
    },
    onReachBottom() {
        let that = this;
        setTimeout(() => {
            that.handleRecycleModel(false);
        }, 500)
    },
    onPullDownRefresh() {
        this.handleRecycleModel(true);
        uni.stopPullDownRefresh()
    },
    methods: {
        async getSessionId() {
            if (!uni.getStorageSync("sessionid")) {
                let res = await this.$http.get("api.GetUserSession");
                if (res.data.code == 0) {
                    uni.setStorageSync("sessionid", res.data.data);
                    this.handleGetBrandList(this.productTypeList[0].categoryid);
                }
            } else {
                this.handleGetBrandList(this.productTypeList[0].categoryid);
            }
        },
        //请求该种类下的所有品牌-----获取品牌列表
        handleGetBrandList(categoryid) {
            let that = this;
            let params = {
                categoryid: categoryid
            }
            this.$http.post('pxpApi.getBrandList', params).then(res => {
                if (res.data.errcode == 0) {
                    that.leftBrandList = that.leftBrandList.concat(res.data.model);
                    that.queryModel = {
                        categoryid: categoryid,
                        brandid: that.brandid ? that.brandid : that.leftBrandList[0].brandid
                    }
                    that.page = 1;
                    that.totalCount = 0;
                    that.rightBrandList = [];
                    that.handleRecycleModel(true)
                }
            })
        },
        //根据品牌id-----获取机型列表
        handleRecycleModel(init) {
            let that = this;
            let params = {
                page: this.page,
                pagesize: 50
            }
            Object.assign(params, this.queryModel);
            if (!init && this.totalCount == this.rightBrandList.length) return;
            //筛选项中,增加全部------------开始
            if (this.defaultBrandIndex == 0 && this.leftBrandList[this.defaultBrandIndex].brandid < 0) {
                this.rightBrandList = [{
                    modelid: "-1",
                    modelname: "全部"
                }]
                return
            }
            //筛选项中,增加全部------------结束
            this.$http.post('pxpApi.getModelList', params).then(res => {
                if (res.data.errcode == 0) {
                    if (init) {
                        that.rightBrandList = res.data.model;
                    } else {
                        that.rightBrandList = that.rightBrandList.concat(res.data.model);
                    }
                    that.changeShowLoading(that.rightBrandList)
                    that.page += 1;
                    that.totalCount = res.data.pagecount;
                }
            })
        },
        //切换tab:手机,平板...
        tabSelectList(index) {
            this.defaultBrandIndex = 0;
            this.defaultTabIndex = index;
            this.leftBrandList = [];
            this.rightBrandList = [];
            if (!this.productTypeList.length) {
                this.$baseCommon.toastTxt("数据开小差了，请稍后~")
                this.getCategorylist();
                return
            }
            let categoryid = this.productTypeList[index].categoryid;
            this.handleGetBrandList(categoryid);
        },
        //选择左侧品牌列表
        selectBrand(index) {
            this.defaultBrandIndex = index;
            this.rightBrandList = [];
            this.page = 1;
            this.totalCount = 0;
            this.queryModel.brandid = this.leftBrandList[index].brandid;
            this.handleRecycleModel(true);
            uni.createSelectorQuery().select('.right-brand-item').boundingClientRect().exec(function(rect) {
                uni.pageScrollTo({
                    scrollTop: 0
                })
            })
        },
    }
}