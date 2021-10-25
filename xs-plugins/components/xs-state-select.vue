<template>
  <xs-state-select
    v-model="stateVal"
    :options="list"
    @change="changeEvent"
  />
</template>

<script>
export default {
    data () {
        return {
            stateVal: [],
            list: [
                {"Id":0,"Name":"Wait","Text":"未用"},
                {"Id":1,"Name":"Success","Text":"成功"},
                {"Id":2,"Name":"Used","Text":"已用"},
                {"Id":3,"Name":"ErrCard","Text":"错卡"},
                {"处理中":[0,1,11], "完结":[2], "人工处理":[3]}
            ]
        }
    },
    methods: {
        changeEvent () {
            console.log(this.stateVal, 'stateVal')
        }
    }
}
</script>