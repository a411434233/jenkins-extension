import SearchCmp from '@/components/Search'
import ReportCmp from '@/components/ReportCmp'

export const MIX_Report = {
  data: function () {
    return {
      query: {}, // 搜索按钮提交的表单
      searchBody: {}, // 搜索栏显示配置
      btnBody: {}, // 按钮显示配置
      tableData: [], // 表格数据源
      totalCount: 0,
      count: 50,
      id: 180,
      account: 175,
      product: 200,
      descripe: 250,
      link: 430,
      time: 150,
      price: 80,
      price_F: 100,
      status: 78,
      remark: 200,
      tableHeight: '100%',

      selection: 42, // 多选框 - 列宽
      tagHead: 42, // 序列号 - 列宽
      orderId: 210, // 订单号 - 列宽
      phone: 120, // 手机账号 - 列宽
      towW: 60, // 2个字宽度
      threeW: 69, // 3个字宽度
      fourW: 82, // 4个字宽度
      time_M: 77, // 从月开始的时间格式
      time_D: 110,
      time_Y: 200
    }
  },
  components: {
    SearchCmp,
    ReportCmp
  },
  created() { },
  methods: {
    /**
     *  搜索-按钮 响应事件
     */
    handleSearch() {
      this.loadData()
    },

    handleSizeChange(val) {
      this.query.pageInfo.pageSize = val
      this.loadData()
    },

    handleCurrentChange(val) {
      this.query.pageInfo.page = val
      this.loadData()
    },

    // 获取搜索表单内容
    getSearchBodyInfo() {
      setTimeout(() => {
        if (this.menuCfg[this.menuKey]) {
          this.searchBody = this.menuCfg[this.menuKey].queryPar
          this.btnBody = this.menuCfg[this.menuKey].menuOper

          console.log('this.btnBody ', this.btnBody)
        }
      }, 20)
    }
  },
  // -------- 路由钩子函数
  /** 页面进入前 - 监听路由 */
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.menuKey = to.meta.MenuId
      if (vm.searchCfg) {
        vm.searchBody = vm.searchCfg.queryPar
        vm.btnBody = vm.searchCfg.menuOper
      }
    })
  }
}
