<template>
  <div v-loading="glo_loading" class="wg-search-page__wrapper">
    <div class="search-box">
      <wg-search
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
      </wg-search>
    </div>

    <div class="body">
      <slot />
    </div>

    <div v-if="query.pageInfo" class="paginations">
      <el-pagination
        class="pages"
        :current-page.sync="query.pageInfo.page"
        :page-sizes="[10,30,50,100, 200, 300, 400]"
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
import methods from './methods'
import { mapState } from 'vuex'
import WgSearch from '../../Search'

export default {
  name: "WGSearchPage",
  // componentName:'',
  mixins: [],
  components: { WgSearch },
  props: {
    query: {
      type: [Object]
    },
    formContent: {
      type: [Object, Array]
    },
    btnContent: {
      type: [Object, Array]
    }
  },
  data() {
    return {};
  },
  computed: { ...mapState(["glo_loading"]) },
  methods
};
</script>

<style lang="scss" >
.wg-search-page__wrapper {
  height: 100%;

  .body {
    height: 100%;
    padding: 0px 0px 67px 0px;

    overflow-y: auto;
  }
}
</style>
