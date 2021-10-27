<template>
  <div class="XSSelect">
    <el-select 
        v-model="selectVal" 
        default-first-option
        :placeholder="placeholder" 
        :disabled="disabled" 
        :clearable="clearable" 
        :multiple="multiple"
        :collapse-tags="collapseTags"
        :filterable="filterable"
        :remote="remote"
        :remote-method="remoteMethod"
        @change="changeMethod"
        @remove-tag="removeTag"
        @clear="clear"
        @blur="blur"
        @focus="focus"
    >
        <el-option
            v-for="(item, index) in options"
            :key="index"
            :label="item[label]"
            :value="item[code]"
        >
            <template v-if="label2">
                <span style="float: left">{{ item[label] }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item[label2] }}</span>
            </template>
        </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
    name: 'XSSelect',
    props: {
        placeholder: {
            type: String,
            default: '请选择'
        },
        value: {
            type: [String, Number, Array]
        },
        options: { // 下拉列表
            type: [Array, String],
        },
        label: { // 下拉显示的值
            type: String,
            default: 'name'
        },
        label2: { // 下拉要显示两栏， 第二栏显示的值
            type: String,
        },
        code: { // 下拉选项绑定value 的字段
            type: String,
            default: 'id'
        },
        disabled: {  // 禁用
            type: [Boolean, String],
            default: false
        },
        clearable:{ // 可删除
            type: [Boolean, String],
            default: true
        },
        multiple: { // 多选
            type: [Boolean, String],
            default: false
        },
        collapseTags: { // 多选超过一条显示+号
            type: [Boolean, String],
            default: false
        },
        filterable: { // 可搜索
            type: [Boolean, String],
            default: true
        },
        remote: { // 远程搜索
            type: [Boolean, String],
            default: false
        },
    },
    data() {
        return {
            selectVal: this.value,
        }
    },
    watch: {
        value: {
            handler (newVal) {
                this.selectVal = newVal
            },
            deep: true,
            immediate: true
        },
    },
    methods: {
        remoteMethod (val) {
            this.$emit("remoteMethod", val)
        },
        changeMethod (val){
            let row = this.options.find(item => item[this.code] == val)
            this.$emit('input', val)
            this.$emit('change', row?row:[])
        },
        removeTag (val) {
            this.$emit('removeTag', val)
        },
        clear () {
            this.$emit('clear')
        },
        blur (e) {
            this.$emit('blur', e)
        },
        focus (e) {
            this.$emit('blur', e)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>