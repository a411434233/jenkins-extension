<template>
    <xs-input v-model="inputVal" @input="changeInput" />
</template>

<script>

export default {
    data () {
        return {
            inputVal: ''
        }

    },
    methods: {
        changeInput (val) {
            console.log(val, 'input事件')
        },
    },
}
</script>