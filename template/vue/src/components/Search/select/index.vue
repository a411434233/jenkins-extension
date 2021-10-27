<!--
 * @Author: your name
 * @Date: 2021-02-18 16:00:31
 * @LastEditTime: 2021-02-22 09:08:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dev\src\components\Search\select\index.vue
-->
<template>
  <div class="select-wrapper">
    <!-- 通过 Api 获取下拉框内容, 内容格式: [label:value] -->
    <!-- 1. clearable  支持清空 -->
    <!-- 2. filterable  是否可搜索 -->
    <!-- 3. remote  是否为远程搜索 -->
    <!-- 4. remote-method  远程搜索方法 -->
    <el-select v-if="option.dataSourceType == 0" v-model="inputValue" :placeholder="option.defaultValue" clearable
      :filterable="
        option.fifilterable === undefined ? true : option.fifilterable
      " remote :remote-method="remoteMethod" :loading="loading" @focus="handleFocus">
      <el-option v-for="(item, index) in selectData" :key="index" :label="item"
        :value="option && option.props && option.props.value=='label'?item:index">{{ item }}</el-option>
    </el-select>

    <!-- 通过 Api 获取下拉框内容, 内容格式: [{value:xxx,label:xxx}] -->
    <el-select v-else-if="option.dataSourceType == 10" v-model="inputValue" :placeholder="option.defaultValue" clearable
      filterable remote default-first-option :remote-method="remoteMethod" @focus="handleFocus">
      <el-option v-for="(item, index) in selectData" :key="index" :label="item.label" :value="item.value"></el-option>
    </el-select>

    <!-- 通过配置项获取下拉框内容 -->
    <el-select v-else-if="option.dataSourceType == 1" v-model="inputValue" :placeholder="option.defaultValue" clearable>
      <el-option v-for="item in option.dataSource" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>

    <!--通过枚举获取下拉框内容，仅支持单选-->
    <el-select v-else-if="option.dataSourceType == 2" v-model="inputValue" :placeholder="option.defaultValue"
      value-key="Name" @clear="clearOption" clearable>
      <!-- clearable -->
      <el-option v-for="item in enumList" :key="item.Id" :label="item.Text"
        :value="option.valueKey?item[option.valueKey]:item.Id">{{ item.Text }}
      </el-option>
    </el-select>

    <!-- 通过枚举获取下拉框内容，支持多选 -->
    <el-select v-else-if="option.dataSourceType == 4" v-model="tempArray" :placeholder="option.defaultValue" multiple
      :multiple-limit="option.multiplelimit" value-key="Name" collapse-tags>
      <el-option v-for="item in enumList" :key="item.Id" :label="item.Text" :value="item.Id">{{ item.Text }}</el-option>
    </el-select>
  </div>
</template>

<script>
import methods from './methods'
import { MIX_VMODEL } from '@/mixin/vmodel'

export default {
  $$route: {
    meta: {
      title: "标题名称",
      icon: "菜单图标",
      hidden: true,
    },
  },
  props: {
    option: Object,
  },
  data() {
    return {
      selectData: [],
      loading: false,
      tempArray: [],
    };
  },
  methods,
  mixins: [MIX_VMODEL],
  components: {},
  watch: {
    tempArray: {
      handler(nVal) {
        this.inputValue = nVal;
      },
      deep: true,
    },
  },
  computed: {
    enumList() {
      if (this.option.dataSourceType == 4 || this.option.dataSourceType == 2) {
        return this.$orgEnum[this.option.url].slice(0, -1);
      }
    },
  },
  // ------------------------------------------------------------------
  // pragma mark - Life Cycle(生命周期)
  // ------------------------------------------------------------------
  created() {
    this.createdInit();
  },
  mounted() {
    this.mountedInit();
  },
};
</script>
<style lang="scss" src="./index.scss" scoped></style>
