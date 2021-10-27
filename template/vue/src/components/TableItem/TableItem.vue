<template>
    <el-table-column
        :label="label"
        :width="width"
        :header-align="headerAlign" 
        :align="align"
    >
      <template slot-scope="scope">
        <template v-if="isSlot">
            <slot :name="slotName" :row="scope.row" :index="scope.$index"></slot>
        </template>
        <template v-else>
            <span>{{ scope.row[prop] }}</span>
        </template>
      </template>
    </el-table-column>
</template>

<script>
export default {
    name: 'tableItem',
    props: {
        label: {
            type: String,
        },
        width: {
            type: [String, Number],
        },
        value: {
            type: [String, Number]
        },
        headerAlign: {
            type: String,
            default:'center'
        },
        align: {
            type: String,
            default:'left'
        },
        prop: {
            type: String,
        },
        isSlot: {
            type: [String, Boolean],
            default: true
        },
        slotName: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>

</style>