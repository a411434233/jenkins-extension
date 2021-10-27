<template>
  <div class="tab-layout">
    <div class="title">
      <span class="iconfont icon-dianpuguanli" />
      <span>{{ layoutItem.title }}</span>
    </div>
    <el-card class="box-card">
      <el-tabs type="border-card">
        <el-tab-pane v-for="(cellItem,pageIdx) in layoutItem.pages" :key="pageIdx">
          <span slot="label">
            <i class="el-icon-date" />
            {{ cellItem.title }}
          </span>
          <component
            :is="cellItem.id"
            :layout-item="cellItem"
            :root-data="rootData"
            :root-meta="rootMeta"
            :cur-data="rootData[cellItem.dataId]"
            :cur-meta="rootMeta[cellItem.dataId]"
          />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import Panel from './Panel'
import TabLayout from './TabLayout'
import TableList from './TableList'

export default {
  components: {
    CountTo,
    Panel,
    TabLayout,
    TableList
  },
  props: {
    layoutItem: Object,
    rootData: Object,
    rootMeta: Object,
    curData: Array,
    curMeta: Object
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" >
.tab-layout {
  position: relative;

  .title {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    height: 39px;
    display: flex;
    align-items: center;
    padding-left: 16px;

    > span:last-child {
      margin-left: 6px;
      display: inline-block;
      color: #333;
    }
  }

  .el-tabs__nav {
    float: right;
  }
  .el-card__body {
    padding: 0;
  }

  .el-tabs--border-card {
    border: 0;
  }
}
</style>
