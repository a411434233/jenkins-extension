<template>
  <div class="home-wrapper">
    <el-row v-for="(rowItem,rowIdx) in layoutlayout.rows" :key="rowIdx">
      <el-col v-for="(colItem,colIdx) in rowItem.cols" :key="colIdx" :span="colItem.span">
        <div v-for="(cellItem,cellIdx) in colItem.cells" :key="cellIdx">
          <div v-if="cellItem.id=='info-box-small'">
            <div v-for="(value,name) in widgetObj[cellItem.dataId]" :key="name">
              <div>A: {{ value.Data }}</div>
            </div>
          </div>
          <div v-else-if="cellItem.id=='info-box'">{{ cellItem.dataId }}</div>
          <div v-else-if="cellItem.id=='tab-layout'">
            <el-tabs type="border-card">
              <el-tab-pane v-for="(pageItem,pageIdx) in cellItem.pages" :key="pageIdx">
                <span slot="label">
                  <i class="el-icon-date" />
                  {{ pageItem.title }}
                </span>
                <div v-if="pageItem.id=='info-box-small'">{{ pageItem }}</div>
                <div v-else-if="pageItem.id=='info-box'">{{ pageItem }}</div>
                <div v-else-if="pageItem.id=='table-list'">
                  <el-table :data="widgetObj[pageItem.dataId]" style="width: 100%">
                    <el-table-column prop="Id" label="日期" width="180" />
                    <el-table-column prop="name" label="姓名" width="180" />
                    <el-table-column prop="address" label="地址" />
                  </el-table>
                </div>
                <div v-else>{{ pageItem.id }}</div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div v-else>{{ cellItem.id }}</div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <div id="myChart" ref="myChart" :style="{width: '300px', height: '300px'}" />
    </el-row>
  </div>
</template>

<script>
import methods from './methods'

import { mapGetters } from 'vuex'

export default {
  $$route: {
    meta: {
      title: "标题名称",
      icon: "菜单图标"
    }
  },
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      layoutlayout: {
        id: "32ace96f9316c4f0e1608b4d9cfd55c7",
        title: "系统管理",
        rows: [
          {
            clsName: "row",
            cols: [
              {
                span: 8,
                cells: [
                  {
                    pages: [],
                    id: "panel",
                    dataId: "10000",
                    title: "用户数",
                    icon: "icon-youhuiquanguanli",
                    clsHeader: "info-box-icon bg-yellow"
                  }
                ]
              },
              {
                span: 8,
                cells: [
                  {
                    pages: [],
                    id: "panel",
                    dataId: "10000",
                    title: "在线情况",
                    icon: "icon-pinglun",
                    clsHeader: "info-box-icon bg-green"
                  }
                ]
              },
              {
                clsName: 8,
                cells: [
                  {
                    pages: [],
                    id: "panel",
                    dataId: "10000",
                    title: "资产负债平衡",
                    icon: "icon-dianpuguanli",
                    clsHeader: "info-box-icon bg-red"
                  }
                ]
              }
            ]
          }
          //   {
          //     clsName: "row",
          //     cols: [
          //       {
          //         span: 16,
          //         cells: [
          //           {
          //             pages: [
          //               {id: "table-list",dataId: "10000",title: "账户余额",icon: "fa fa-gears",clsHeader: null},
          //               {id: "table-list",dataId: "10000",title: "内存账户",icon: "fa fa-gears",clsHeader: null}
          //             ],
          //             id: "tab-layout",
          //             dataId: "n",
          //             title: "财务",
          //             icon: null,
          //             clsHeader: null
          //           },
          //           {
          //             pages: [
          //               {id: "table-list",dataId: "10000",title: "提现账户",icon: "fa fa-gears",clsHeader: null}
          //             ],
          //             id: "tab-layout",
          //             dataId: "0",
          //             title: "提现账户",
          //             icon: null,
          //             clsHeader: null
          //           }
          //         ]
          //       },
          //       {
          //         span: 8,
          //         cells: [
          //           {
          //             pages: [
          //               {
          //                 id: "table-list",
          //                 dataId: "10000",
          //                 title: "充值统计",
          //                 icon: "fa fa-gears",
          //                 clsHeader: null
          //               },
          //               {
          //                 id: "table-list",
          //                 dataId: "10000",
          //                 title: "处理中",
          //                 icon: "fa fa-gears",
          //                 clsHeader: null
          //               }
          //             ],
          //             id: "tab-layout",
          //             dataId: null,
          //             title: "充值",
          //             icon: "fa fa-gears",
          //             clsHeader: null
          //           },
          //           {
          //             pages: [
          //               {
          //                 id: "table-list",
          //                 dataId: "10000",
          //                 title: "用户日志",
          //                 icon: "fa fa-gears",
          //                 clsHeader: null
          //               }
          //             ],
          //             id: "tab-layout",
          //             dataId: null,
          //             title: "用户日志",
          //             icon: "fa fa-gears",
          //             clsHeader: null
          //           },
          //           {
          //             pages: [
          //               {
          //                 id: "table-list",
          //                 dataId: "10000",
          //                 title: "代理api余额",
          //                 icon: "fa fa-gears",
          //                 clsHeader: null
          //               },
          //               {
          //                 id: "table-list",
          //                 dataId: "10000",
          //                 title: "余额查询工号",
          //                 icon: "fa fa-gears",
          //                 clsHeader: null
          //               }
          //             ],
          //             id: "tab-layout",
          //             dataId: null,
          //             title: "账户余额",
          //             icon: "fa fa-gears",
          //             clsHeader: null
          //           }
          //         ]
          //       }
          //     ]
          //   }
        ]
      }
    };
  },
  watch: {
    widgetObj(nval) {
      console.log("up", nval);
    }
  },
  methods,
  computed: {
    ...mapGetters(["widgetObj"])
  },
  // ------------------------------------------------------------------
  // pragma mark - Life Cycle(生命周期)
  // ------------------------------------------------------------------
  created() {
    this.createdInit();
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = this.$echarts.init(this.$refs["myChart"]);
    // 绘制图表
    myChart.setOption({
      title: { text: "在Vue中使用echarts" },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
    this.mountedInit();
  }
};
</script>
<style lang="scss" src="./index.scss" scoped></style>
