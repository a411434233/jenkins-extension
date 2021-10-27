<template>
  <div v-loading="glo_loading" class="table-wrapper" style="display: flex">
    <div v-if="!hidSearch" class="t-search">
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
    <div class="t-handle">
      <slot name="total" />
    </div>
    <div class="t-table">
      <el-table
        :data="query.data || []"
        style="width: 100%"
        size="mini"
        border
        fit
        highlight-current-row
        default-expand-all
        :height="height ? height : '100%'"
        :row-class-name="rowClassName"
        @selection-change="handleSelectionChange"
        @sort-change="customSortChange"
        :row-key="rowKey"
        :tree-props="treeProps"
      >
        <slot />
      </el-table>
    </div>
    <div v-if="query.pageInfo" class="t-page">
      <el-pagination
        class="pages"
        :current-page.sync="query.pageInfo.page"
        :page-sizes="[10, 30, 50, 100, 200, 300, 400]"
        :page-size="query.pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="query.pageInfo.totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
import data from './data'
import methods from './methods'
import SearchCmp from '../Search'
import { mapState } from 'vuex'

export default {
  name: "Table",
  props: {
    height: [String],
    hidSearch: {
      type: [Boolean],
      default: false,
    },
    query: {
      type: [Object],
    },
    formContent: {
      type: [Object, Array],
    },
    btnContent: {
      type: [Object, Array],
    },
    rowClassName: {
      type: [String, Function],
    },
    treeProps: {
      type: [Object],
    },
    rowKey: [String, Function],
    defaultExpandAll: {
      type: Boolean,
      default: false,
    },
  },
  data,
  computed: {
    ...mapState(["glo_loading"]),
  },
  mounted() {},
  methods,
  components: { SearchCmp },
};
</script>
<style lang="scss" src="./index.scss" scoped></style>
