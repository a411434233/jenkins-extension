<template>
  <div class="checkbox-wrap">
    <el-checkbox-group v-model="checkList" @change="handleChecked">
      <el-checkbox
        v-for="(item,index) in checkSourceList"
        :key="index"
        :label="item.Id"
      >{{ item.Text }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  props: {
    value: [String, Number],
    sourceData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      checkSourceList: this.sourceData,
      checkList: [],
      selfValue: this.value
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.selfValue = val
      }
    }
  },
  created() {
    this.backFill()
  },
  methods: {
    handleChecked(val) {
      let count = 0
      val.forEach((item) => {
        this.checkSourceList.forEach((_item) => {
          if (item == _item.Id) {
            count += item
          }
        })
      })
      this.$emit('input', count)
    },
    backFill() {
      const _this = this
      const arr = this.checkSourceList.map(item => { return item.Id })
      arr.forEach((item, index) => {
        if ((_this.selfValue & item) > 0) {
          this.checkList.push(this.checkSourceList[index].Id)
        }
      })
    }
  }
}
</script>
