<!--@click添加点击事件;可设置背景色，字体颜色，字体大小，按钮宽，高；props分别为：bgcolor，fontColor，fontSize，width，height-->
<template>
  <div class="formClass" ref="formClass">
    <el-select
      v-model="inputValue"
      :placeholder="selectCont.defaultValue"
      clearable
      filterable
      remote
      :disabled="disabled"
      :remote-method="remoteMethod"
      @visible-change="visibleChange($event,selectCont)"
    >
      <el-option
        v-for="(value,key) in selectOption"
        :key="key"
        :label="value"
        :value="key"
      >{{value}}</el-option>
    </el-select>
  </div>
</template>
<script>
import methods from './methods'

const EVENT_INPUT = "input";
let id = 0;
export default {
  name: "Search",
  props: {
    //搜索内容集合
    selectCont: {
      type: [Object]
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: [Object,String]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectOption: [],
      inputValue: this.value
    };
  },
  methods,
  mixins: [],
  components: {},
  watch: {
    value: {
      handler(newValue) {
        this.inputValue = newValue;
      },
      deep: true
    },
    inputValue: {
      handler(newValue) {
        this.$emit(EVENT_INPUT, newValue);
      },
      deep: true
    }
  },
  // ------------------------------------------------------------------
  // pragma mark - Life Cycle(生命周期)
  // ------------------------------------------------------------------
  created() {
    this.createdInit();
  },
  mounted() {
    this.mountedInit();
    //点击文本自动点击前面的input触发选择
    setInterval(function() {
      document.querySelectorAll(".el-cascader-node__label").forEach(el => {
        el.onclick = function() {
          if (this.previousElementSibling) this.previousElementSibling.click();
        };
      });
    }, 1000);
  }
};
</script>
<style lang="scss" src="./index.scss" scoped></style>
