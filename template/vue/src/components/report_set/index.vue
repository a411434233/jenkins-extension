<template>
  <div class="report-set-wrapper">
    <el-row>
      <el-col :span="24">
        <span>行分组</span>
        <el-select v-model="inputValue.rowGroups" clearable multiple placeholder="请选择" size="mini">
          <el-option v-for="item in jsonCfgToObj.rowGroups" :key="item" :label="item" :value="item" />
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <span>输出字段</span>
        <el-select v-model="inputValue.columns" clearable multiple placeholder="请选择" size="mini">
          <el-option v-for="item in jsonCfgToObj.columns" :key="item" :label="item" :value="item" />
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <span>列分组</span>
        <el-select v-model="inputValue.colGroup" clearable placeholder="请选择" size="mini">
          <el-option v-for="item in jsonCfgToObj.rowGroups" :key="item" :label="item" :value="item" />
        </el-select>
      </el-col>
    </el-row>
    <!-- <el-row>
      <el-col :span="24">
        <span>显示</span>
        <el-radio-group v-model="report.totalRow" size="mini">
          <el-radio-button label="表格"></el-radio-button>
          <el-radio-button label="柱状"></el-radio-button>
          <el-radio-button label="折线图"></el-radio-button>
        </el-radio-group>
      </el-col>
    </!-->
    <el-row>
      <el-col :span="24">
        <span>行合计</span>
        <el-radio-group v-model="inputValue.totalRow">
          <el-radio
            v-for="item in $orgEnum['ZR.PovitReport.ShowTotal']"
            v-if="JSON.stringify(item) !== '{}'"
            :key="item.id"
            :label="item.Id"
          >{{ item.Name }}</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <span>列合计</span>
        <el-radio-group v-model="inputValue.totalCol">
          <el-radio
            v-for="item in $orgEnum['ZR.PovitReport.ShowTotal']"
            v-if="JSON.stringify(item) !== '{}' "
            :key="item.id"
            :label="item.Id"
          >{{ item.Name }}</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <span>排序</span>
        <el-checkbox v-model="inputValue.colAsc">列升序排序</el-checkbox>
        <el-checkbox v-model="inputValue.rowAsc">行升序排序</el-checkbox>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { isPlainObject } from '@/common/utils'

export default {
  name: 'ReportSet',
  components: {},
  props: {
    value: [String, Object],
    jsonCfg: String,
    modelType: {
      type: String,
      default: 'json'
    }
  },
  data() {
    return {
      jsonCfgToObj: {},
      inputValue: {
        colAsc: false, // 列排序
        rowAsc: false, // 行排序
        colGroup: '',
        columns: [],
        rowGroups: [],
        totalCol: 2, // 枚举
        totalRow: 2 // 枚举
      }
    }
  },
  computed: {},
  watch: {
    value: {
      handler(newValue) {
        if (!newValue) return
        if (isPlainObject(newValue)) {
          this.inputValue = newValue
        } else {
          this.inputValue = JSON.parse(newValue)
        }
      },
      deep: true,
      immediate: true
    },
    inputValue: {
      handler(newValue) {
        // newValue["AllCollFields"] = newValue.columns;
        // newValue["AllGroupFields"] = newValue.rowGroups;

        if (this.modelType === 'Object') {
          this.$emit('input', newValue)
        } else {
          this.$emit('input', JSON.stringify(newValue))
        }
      },
      deep: true
    },
    jsonCfg: {
      handler(newValue) {
        console.log('load', newValue)
        if (isPlainObject(newValue)) {
          this.jsonCfgToObj = newValue
        } else {
          this.jsonCfgToObj = JSON.parse(newValue)
        }
      },
      deep: true,
      immediate: true
    }
  },
  // ------------------------------------------------------------------
  // pragma mark - Life Cycle(生命周期)
  // ------------------------------------------------------------------
  created() {
    this.defaultDataReport = JSON.parse(JSON.stringify(this.inputValue))
  },
  beforeDestroy() {
    // 组件销毁前，清空表单项
    this.inputValue = this.defaultDataReport
  }
}
</script>
<style lang="scss" src="./index.scss" ></style>

