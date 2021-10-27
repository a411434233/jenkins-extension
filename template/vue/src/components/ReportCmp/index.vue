<template>
  <div v-loading="glo_loading" class="ReportCmp-wrapper">
    <div class="t-search">
      <search-cmp
        v-model="query"
        :form-content="formContent"
        :btn-content="btnContent"
        @search-click="handleSearch"
        @btn-click="handleCommand"
        @btns-click="btnsClick"
      >
        <div slot="search_custemBtn">
          <slot name="custemBtn" />
        </div>
      </search-cmp>
    </div>

    <div class="t-table">
      <el-table
        v-if="query.data && query.data.data && query.data.data.length > 0"
        ref="table"
        size="mini"
        :data="query.data.data"
        style="width: 100%"
        :height="'100%'"
        border
        fit
        highlight-current-row
        :row-class-name="rowClassName"
        @selection-change="handleSelectionChange"
        @sort-change="customSortChange"
      >
        <!--:fixed="idx==0"-->
        <el-table-column
          :label="rowGroup.title"
          header-align="center"
        >
          <el-table-column
            v-for="col in rowGroup.columns"
            :key="col.field"
            :prop="col.field"
            :label="col.title"

            header-align="center"
            align="left"
            width="120"
          />
          f
        </el-table-column>

        <el-table-column
          v-for="(sheet,idx) in dataSheet"
          :key="idx"
          :label="sheet.title"
          header-align="center"
        >
          <el-table-column
            v-for="col in sheet.columns"
            :key="col.field"
            :prop="col.field"
            :label="col.title"
            header-align="center"
            align="right"
            width="120"
          />
        </el-table-column>
        <el-table-column />

      </el-table>
      <el-table v-else class="nullTable" :data="[]" style="width: 100%" />
    </div>
  </div>
</template>

<script>
import data from './data'
import methods from './methods'
import SearchCmp from '../Search'
import { mapState } from 'vuex'

export default {
  name: 'Report',
  props: {
    query: {
      type: [Object]
    },
    formContent: {
      type: [Object, Array]
    },
    btnContent: {
      type: [Object, Array]
    },
    rowClassName: {
      type: [String, Function]
    }
  },
  data,
  computed: {
    ...mapState(['glo_loading']),
    rowGroup: function() {
      return this.query.data.colGroups[0]
    },
    dataSheet: function() {
      return this.query.data.colGroups.filter((val, idx) => idx > 0)
    }
  },
  mounted() {},
  methods,
  components: { SearchCmp }
}
</script>
<style lang="scss" src="./index.scss" scoped></style>
