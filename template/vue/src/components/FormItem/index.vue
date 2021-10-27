<template>
    <el-col :span="width">
        <el-form-item :label="name" :prop="prop">
            <template v-if="!isSlot">
                <div class="space">
                    <el-input v-if="type == 'input'"  v-model="formVal" />
                    <XSSelect v-else-if="type == 'select'" v-model="formVal" :options="options" :multiple="multiple  ? multiple : false" />
                    <UploadImg v-else-if="type == 'image'" v-model="formVal" />
                    <el-input  v-else-if="type == 'textarea'" v-model="formVal" type="textarea"  :autosize="{ minRows: 2, maxRows: 4}"  placeholder="请输入内容"></el-input>
                </div>
            </template>
            <template>
                <div class="space">
                    <slot :name="slotName"></slot>
                </div>
            </template>
        </el-form-item>
    </el-col>
</template>

<script>
import XSSelect from '@/components/xsSelect/index'
import UploadImg from '@/components/UploadImg/index'

export default {
    name: 'formItem',
    components: {
        XSSelect,
        UploadImg
    },
    props: {
        options: {
            type: Array,
            default: () => []
        },
        width: {
            type: [String, Number],
            default: 12
        },
        multiple: {
            type: [String, Boolean],
            default: false
        },
        name: {
            type: String
        },
        type: {
            type: String,
            default: 'input'
        },
        value: {
            type: [String, Number, Array]
        },
        isSlot: {
            type: [String, Boolean],
            default: false
        },
        slotName: {
            type: String
        },
        prop: {
            type: String
        }
    },
    watch: {
        value: {
            handler (newVal) {
                this.formVal = newVal
            },
            immediate: true,
            deep: true
        },
        formVal: {
            handler(newVal) {
                this.$emit('input', newVal)
            },
            deep: true,
            immediate: true,
        }
    },
    data () {
        return {
            formVal: this.value,
            url: '',
        }
    }
}
</script>

<style lang="scss" scoped>
    .space {
        margin: 3px 0;
    }
</style>
