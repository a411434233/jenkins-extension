<template>
    <div class="all">
        <!-- 搜索 -->
        <xs-search-list :list="searchList" :queryData="data" @getList="getList"></xs-search-list>
        <!-- 表格 -->
        <xs-table-list :columns="columns" :data="data.data" style="height: calc(100% - 80px)"></xs-table-list>
        <!-- 分页条件 -->
        <xs-pagination
            :page.sync="data.pageInfo.page" 
            :pageSize.sync="data.pageInfo.pageSize" 
            :total="data.pageInfo.totalCount"
            @getList="getList"
        >
        </xs-pagination>
    </div>
</template>

<script>
export default {
    $$route: {
        meta: {
            title: '商品管理',
            icon: 'icon-shanghu',
        }
    },
    data () {
        return {
            buttonList: [
            ],
            searchList:[
                {prop: 'nameLike', name: '商品名称', type: 'input'},
                {prop: 'categoryId', name: '设备类型', type: 'select', options: 'ZR.DetectControlCenter.Base.Enum.CategoryEnum'},
                {prop: 'brandId', name: '品牌', type: 'select', dic: ['aidccapi', 'Brand']},
                {prop: 'modelBind', name: '是否绑定质检模型', type: 'select', options: 'ZR.DetectControlCenter.Base.Enum.ModelBindEnum'},
            ],
            columns: [
                {name:'商品ID', prop: 'id'},
                {name:'商品名称', prop: 'name'},
                {name:'设备类型', prop: 'categoryId', format: 'ZR.DetectControlCenter.Base.Enum.CategoryEnum'},
                {name:'品牌', prop: 'brandId', dic: ['aidccapi', 'Brand']},
                {name:'质检模型', prop: 'detectModelId', dic: ['aidccapi', 'DetectModel']},
                {name:'创建时间', prop: 'createTime', format: 'date', align: 'center'},
                {name:'操作', type:'button', buttonList:[{name: '修改', type: 'text', methodName: 'popup'}], sortable: false, align: 'center'},
            ],
            data: {
                data:[],
                pageInfo: {
                    page: 1,
                    pageSize: 30,
                    totalCount: 0
                }
            }
        }
    },
    created () {
        this.getList()
    },
    methods: {
        getList () {
            // this.$common.getList(this, 'ask.aidccapi.api.StandardProduct.Query.post') 
        }
    }
}
</script>
<style lang="scss" scoped>
    .all {
        width: 100%;
        padding: 20px 10px;
    }
</style>