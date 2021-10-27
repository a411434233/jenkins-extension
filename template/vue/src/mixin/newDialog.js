export const mix_new_dialog = {
  data: function() {
    return {
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true
      return new Promise((resolve, reject) => {
        this.resolve = resolve
      })
    },
    hide(cb) {
      this.visible = false
      this.resolve(cb)
    }
  }
}
