<template>
  <div class="box">
      <xs-date-picker v-model="dateSlot" @change="getDateTime" />
  </div>
</template>

<script>
export default {
    data () {
        return {
            dateSlot: [],
        }
    },
    methods: {
        getDateTime (val) {
            console.log(this.dateSlot)
            console.log("change事件", val)
        }
    }
}
</script>
<style  scoped>
    .box {
        display: flex;
    }
</style>