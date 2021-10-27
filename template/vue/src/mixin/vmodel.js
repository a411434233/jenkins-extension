const EVENT_INPUT = 'input'

export const MIX_VMODEL = {
  props: {
    value: [Object, Array, String, Number, Boolean]
  },
  data() {
    return {
      inputValue: {}
    }
  },
  watch: {
    value: {
      handler(newValue) {
        this.inputValue = newValue
      },
      deep: true
    },
    inputValue: {
      handler(newValue) {
        this.$emit(EVENT_INPUT, newValue)
      },
      deep: true
    }
  }
}
