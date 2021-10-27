<template>
  <div class="product_option-wrapper">
    <el-select v-model="inputValue" collapse-tags clearable multiple clearable:placeholder="optionItem.defaultValue">
      <template slot="empty">
        <div class="select-empty-group">
          <div class="row J_Row">
            <div class="head">
              <span class="title">商品品类</span>
            </div>
            <div class="body">
              <el-radio-group class="product-type" v-model="selectedType" size="mini">
                <el-radio
                  v-for="typeItem in $enumList.EnumProductType"
                  :key="typeItem.Id"
                  :label="typeItem.Id"
                >{{typeItem.Text}}</el-radio>
              </el-radio-group>
            </div>
            <el-divider></el-divider>
          </div>

          <div class="row J_Row">
            <div class="head">
              <span class="title">运营商/类目</span>
            </div>
            <div class="body check-width" v-if="arsIdDicList.length">
              <el-checkbox-group
                v-model="selectedArsId"
                @change="checkboxHandle($event,optionItem.fieldName)"
              >
                <el-checkbox
                  v-for="(item,index) in arsIdDicList"
                  :key="index"
                  :label="item.value"
                >{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="body-empty" v-else>
              <span>暂无数据</span>
            </div>
            <el-divider></el-divider>
          </div>

          <div class="row J_Row">
            <div class="head">
              <span class="title">地区/种类</span>
            </div>
            <div class="body" v-if="areaCodeDicList.length">
              <el-cascader-panel
                v-model="selectedAreaCode"
                :options="areaCodeDicList"
                :props="props"
                collapse-tags
                @change="checkboxHandle($event,optionItem.fieldName)"
              ></el-cascader-panel>
            </div>
            <div class="body-empty" v-else>
              <span>暂无数据</span>
            </div>
            <el-divider></el-divider>
          </div>

          <div class="row J_Row">
            <div class="head">
              <span class="title">面值</span>
            </div>
            <div class="body check-width" v-if="denomIncList.length > 0">
              <el-checkbox-group
                v-model="selectedDenomInc"
                @change="checkboxHandle($event,optionItem.fieldName)"
              >
                <el-checkbox
                  v-for="(item,index) in denomIncList"
                  :key="index"
                  :label="item"
                >{{item}}</el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="body-empty" v-else>
              <span>暂无数据</span>
            </div>
            <el-divider></el-divider>
          </div>
        </div>
      </template>
    </el-select>
  </div>
</template>

<script>
import data from './data'
import methods from './methods'
import { MIX_VMODEL } from '@/mixin/vmodel'

export default {
  $$route: {
    meta: {
      title: "标题名称",
      icon: "菜单图标"
    }
  },
  props: {
    optionItem: Object
  },
  data() {
    return {
      selectedType: 0, // 选中的商品种类

      selectedArsId: [], // 选中的运营商/类目
      arsIdDicList: [], // 运营商/类目

      selectedAreaCode: [], // 选中的地区/种类
      areaCodeDicList: [], //地区/种类

      selectedDenomInc: [], //面值
      denomIncList: [], //面值

      props: { multiple: true, checkStrictly: true },

      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ]
    };
  },
  methods,
  mixins: [MIX_VMODEL],
  components: {},
  watch: {
    selectedType: {
      handler(nVal) {
        this.loadSource();
      },
      immediate: true
    },

    selectedAreaCode: {
      handler(nVal) {
        console.log(nVal, "=====>");
      },
      deep: true
    }
  },
  computed: {},
  // ------------------------------------------------------------------
  // pragma mark - Life Cycle(生命周期)
  // ------------------------------------------------------------------
  created() {
    this.createdInit();
  },
  mounted() {
    this.mountedInit();
  }
};
</script>
<style lang="scss" src="./index.scss" scoped></style>
