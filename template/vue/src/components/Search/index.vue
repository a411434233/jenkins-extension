<!--@click添加点击事件;可设置背景色，字体颜色，字体大小，按钮宽，高；props分别为：bgcolor，fontColor，fontSize，width，height-->
<!-- {
   displayName: "",             // 搜索框 label 名称
   fieldName: "datepic",        // 表单属性名称
   defaultValue: "时间控件",     //  placeholder 提示内容
   [{"Id":0,"Name":"input","Text":"输入框"},
    {"Id":3,"Name":"select","Text":"下拉框"},
    {"Id":4,"Name":"datePicker","Text":"时间选择框"},
    {"Id":5,"Name":"mixedSelect","Text":"混合选择框"},
    {"Id":6,"Name":"cascader","Text":"联级选择器"},
    {"Id":7,"Name":"radioCascader","Text":"单选联级选择器"},
    {"Id":8,"Name":"reportSet","Text":"报表配置"}
    {"Id":10,"Name":"HKQudao","Text":"；联级多选可动静态"}
    ]
   conditionType: 4,
   config: {
      method: "lazy",
      props: {
        multiple: true, // 支持多选
        checkStrictly: true // 是否支持任意一级
      },
      source: [
        {
          url: "api.service.select.getbrandlist",
          param: { pageSize: 0 }
        },
        {
          url: "api.service.select.getmodellist",
          param: { pageSize: 0 },
          searchKey: "brandId"
        }
      ]
    },
   url: "",             // 下拉框集合 api or enumName
   param:{xxx:aa},
   searchKey:'searchKey',
   dataSource: "",      // 下拉框集合自定义
   dataSourceType: 1,   // 0:api 单选+数据源格式是 {label:value} ,     1:单选+自定义  ,    2:枚举名称($orgEnum[optionItem.url])  4:枚举数据源+多选
                          10:api 单选+格式是 [value:xxx,label:xxx]，  21:多选+自定义                                           41: 枚举数据源 + 单选
                          20:api 多选+数据源格式是 {label:value}，
                          30:api 多选+格式是 [{value:xxx,label:xxx}]，
   sort: 0,
   isIndex: true,
   defaultTime: true
 }-->
<template>
  <div class="search-wrapper formClass" ref="formClass">
    <el-form
      :model="inputValue"
      :inline="true"
      fit
      size="small"
      ref="formContent"
      label-position="left"
      class="form"
    >
      <div class="contentBox" ref="contentBox">
        <div class="searchBox">
          <div v-for="(optionItem, indexs) in formContent" :key="indexs">
            <el-form-item
              :label="optionItem.displayName"
              v-if="optionItem.conditionType == $enum.conditionType.input"
              :style="{ width: optionItem.itemWidth }"
            >
              <el-input
                v-model="inputValue[optionItem.fieldName]"
                :placeholder="optionItem.defaultValue"
              ></el-input>
            </el-form-item>
            <!--下拉单选通过接口-->
            <el-form-item
              :label="optionItem.displayName"
              v-else-if="optionItem.conditionType == $enum.conditionType.select"
              :style="{ width: optionItem.itemWidth }"
            >
              <search-select-cmp
                :option="optionItem"
                v-model="inputValue[optionItem.fieldName]"
              >
              </search-select-cmp>
            </el-form-item>
            <el-form-item
              :label="optionItem.displayName"
              v-else-if="optionItem.conditionType == 9"
              :style="{ width: optionItem.itemWidth }"
            >
              <search-cascader-cmp
                :option="optionItem"
                v-model="inputValue[optionItem.fieldName]"
              >
              </search-cascader-cmp>
            </el-form-item>

            <el-form-item
              :label="optionItem.displayName"
              v-if="optionItem.conditionType == $enum.conditionType.mixedSelect"
              :style="{ width: optionItem.itemWidth }"
            >
              <!-- <select-cmp :selectType="optionItem.selectType" v-model="inputValue[optionItem.fieldName]" ></select-cmp> -->
              <el-select
                :multiple="optionItem.dataSourceType == 4"
                clearable
                collapse-tags
                popper-class="select-popper"
                class="select-style"
                v-model="inputValue[optionItem.fieldName]"
                :placeholder="optionItem.defaultValue"
              >
                <div
                  class="shortcut"
                  v-for="(item, index) in $orgEnum[optionItem.url].slice(-1)"
                  :key="index"
                >
                  <div
                    class="tabs"
                    v-for="(items, indexs) in item"
                    :key="items.id"
                  >
                    <el-button @click="toSelect(items, optionItem.fieldName)">{{
                      indexs
                    }}</el-button>
                  </div>
                </div>
                <div class="option">
                  <el-option
                    v-for="item in $orgEnum[optionItem.url].slice(0, -1)"
                    :key="item.Id"
                    :label="item.Text"
                    :value="item.Id"
                  >
                    <div class="item">{{ item.Text }}</div>
                  </el-option>
                </div>
              </el-select>
            </el-form-item>

            <el-form-item
              :label="optionItem.displayName"
              v-if="optionItem.conditionType == $enum.conditionType.cascader"
              :style="{ width: optionItem.itemWidth }"
            >
              <product-option-cmp
                v-model="inputValue[optionItem.fieldName]"
                :optionItem="optionItem"
              ></product-option-cmp>
            </el-form-item>
            <!--单选联级选择-->
            <el-form-item
              :label="optionItem.displayName"
              v-if="
                optionItem.conditionType == $enum.conditionType.radioCascader
              "
            >
              <el-cascader
                ref="radiocascader"
                class="radiocascader"
                v-model="inputValue[optionItem.fieldName]"
                :props="{ checkStrictly: true }"
                clearable
                :options="brandModelList"
                @visible-change="cascaderData($event, optionItem.url)"
              ></el-cascader>
            </el-form-item>
            <!--单选联级选择-->
            <el-form-item
              :label="optionItem.displayName"
              v-if="optionItem.conditionType === $enum.conditionType.datePicker"
              :style="{ width: optionItem.itemWidth }"
              class="dateRange"
            >
              <el-date-picker
                clearable
                v-model="inputValue[optionItem.fieldName]"
                v-if="optionItem.dataSourceType == 0"
                type="date"
                align="right"
                unlink-panels
                :placeholder="optionItem.defaultValue"
                value-format="yyyy-MM-dd"
              >
              </el-date-picker>
              <!--              时间选择器-->
              <el-date-picker
                v-else
                clearable
                v-model="inputValue[optionItem.fieldName]"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                value-format="yyyy-MM-dd"
                style="position:relative;top:-1px"
              >
              </el-date-picker>
              <!-- :value-format="optionItem.config?optionItem.config.timeFrom:'yyyy-MM-DD'" -->
            </el-form-item>

            <!--            -->
            <el-form-item
              :label="optionItem.displayName"
              v-if="optionItem.conditionType == $enum.conditionType.reportSet"
              :style="{ width: optionItem.itemWidth }"
              class="report-class"
            >
              <!-- v-model="inputValue[optionItem.fieldName]" -->
              <el-dropdown
                @command="handlerSelReport"
                @click="clickReportBtn(optionItem.url, optionItem.params)"
              >
                <el-button type="primary">{{ selReportName }}</el-button>
                <el-dropdown-menu slot="dropdown" v-if="reportList.length > 0">
                  <el-dropdown-item
                    v-for="report in reportList"
                    :key="report.id"
                    :command="report"
                  >
                    {{ report.title }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-popover
                placement="bottom"
                width="560"
                trigger="click"
                v-if="selReportName !== '选择报表'"
              >
                <report-set
                  v-if="reloadReportForm"
                  v-model="inputValue[optionItem.fieldName]"
                  model-type="Object"
                  :jsonCfg="reportDefs"
                ></report-set>
                <el-button
                  slot="reference"
                  type="primary"
                  class="set-class"
                  icon="el-icon-s-tools"
                >
                </el-button>
              </el-popover>
            </el-form-item>
            <!--多选联级选择可动态查询-->
            <el-form-item
              :label="optionItem.displayName"
              v-if="optionItem.conditionType == $enum.conditionType.hkqudao"
              :style="{ width: optionItem.itemWidth }"
              class="dateRange"
            >
              <HKQudao
                v-model="inputValue[optionItem.fieldName]"
                :placeholder="optionItem.defaultValue"
                :style="{ width: optionItem.itemWidth }"
                :optionItem="optionItem"
              ></HKQudao>
            </el-form-item>
            <el-form-item
              :label="optionItem.displayName"
              v-if="optionItem.conditionType == $enum.conditionType.hkarea"
              :style="{ width: optionItem.itemWidth }"
              class="dateRange"
            >
              <HKCascader
                v-model="inputValue[optionItem.fieldName]"
                :placeholder="optionItem.defaultValue"
                :style="{ width: optionItem.itemWidth }"
                :optionItem="optionItem"
              ></HKCascader>
            </el-form-item>
          </div>

          <el-form-item v-if="!!getBtnContentIsOut().length">
            <el-dropdown
              trigger="click"
              @command="handleCommand"
              split-button
              type="primary"
              @click="toSearch()"
            >
              查询
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in getBtnContentIsOut()"
                  :key="item.id"
                  :command="item"
                >
                  {{ item.actionText }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-form-item>
          <el-form-item v-else>
            <el-button
              @command="handleCommand"
              split-button
              type="primary"
              @click="toSearch()"
              >查询</el-button
            >
          </el-form-item>
          <div class="isOut-btn">
            <el-button
              v-for="(item, i) in getBtnContentIsOut('isOut')"
              :key="i"
              size="small"
              @click="handleCommand(item)"
              type="primary"
              >{{ item.actionText }}
            </el-button>
          </div>
        </div>
        <slot name="search_custemBtn" />
        <!-- <div class="buttonBox">

          <el-form-item v-if="!!getBtnContentIsOut().length">
            <el-dropdown
              trigger="click"
              @command="handleCommand"
              split-button
              type="primary"
              @click="toSearch()"
            >
              查询
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in getBtnContentIsOut()"
                  :key="item.id"
                  :command="item"
                >
                  {{ item.actionText }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-form-item>
          <el-form-item v-else>
            <el-button
              @command="handleCommand"
              split-button
              type="primary"
              @click="toSearch()"
              >查询</el-button
            >
          </el-form-item>
          <el-form-item style="margin-left:4px"  v-for="(item,i) in  getBtnContentIsOut('isOut')" :key="i">
            <el-button  @command="handleCommand" type="primary">{{item.actionText}} </el-button>
          </el-form-item>
        </div> -->
      </div>
    </el-form>
  </div>
</template>
<script>
import methods from './methods'
import { isArray } from '@/common/utils'

import reportSet from '@/components/report_set'
// 组件分离 2020-10-10 10:00
// 下拉框组件升级
import SearchSelectCmp from './select'
import SearchCascaderCmp from './cascader'

import ProductOptionCmp from './product_option'
import HKQudao from './hk_cascader_qudao'
import HKCascader from './hk_cascader'


const EVENT_INPUT = "input";
let id = 0;

export default {
  name: "Search",

  components: {
    reportSet,
    SearchSelectCmp,
    SearchCascaderCmp,
    ProductOptionCmp,
    HKQudao,
    HKCascader
  },
  props: {
    //搜索内容集合
    formContent: {
      type: [Object, Array],
    },
    btnContent: {
      type: [Object, Array],
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      brandModelList: [],
      keys: [],
      inputValue: this.value,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "本月",
            onClick(picker) {
              const end = new Date();
              var d = new Date();
              d.setDate(1);
              const start = d;
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "本周",
            onClick(picker) {
              const date = new Date();
              const weekday = date.getDay() || 7;
              const end = new Date();
              date.setDate(date.getDate() - weekday + 1);
              const start = date;
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      // 报表相关属性
      reportList: [], // 报表集合
      selReportName: "选择报表",
      reportDefs: "",
      reportParamStr: "",
      reloadReportForm: false,
    };
  },
  methods,
  mixins: [],
  watch: {
    value: {
      handler(newValue) {
        this.inputValue = newValue;
      },
      deep: true,
    },
    inputValue: {
      handler(newValue) {
        this.$emit(EVENT_INPUT, newValue);
      },
      deep: true,
    },
    formContent: {
      handler(newValue) {
        if (isArray(newValue)) {
          const reportObj = newValue.find((item) => {
            return item.conditionType == this.$enum.conditionType.reportSet;
          });
          if (reportObj) {
            this.clickReportBtn(reportObj.url, reportObj.params);
          }
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    getItem() {
      return function (val) {
        setTimeout(() => {
          const result = this.$http.get(val);
        }, 1000);
      };
    },
    // getBtnContentIsOut() {
    //   let arr = Array.isArray(this.btnContent)&&this.btnContent.filter((item) => item.isOut);
    //   console.log('xxx',arr)
    //   return arr
    // },
  },
  // ------------------------------------------------------------------
  // pragma mark - Life Cycle(生命周期)
  // ------------------------------------------------------------------
  created() {
    this.createdInit();
  },
  mounted() {
    //点击文本自动点击前面的input触发选择
    setInterval(function () {
      document.querySelectorAll(".el-cascader-node__label").forEach((el) => {
        el.onclick = function () {
          if (this.previousElementSibling) this.previousElementSibling.click();
        };
      });
    }, 1000);

    this.mountedInit();
  },
};
</script>
<style lang="scss" src="./index.scss" scoped></style>
