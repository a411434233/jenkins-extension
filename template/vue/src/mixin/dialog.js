export const MIX_Dialog = {
    data: function () {
        return {
            self_visible: false
        }
    },
    props: {
        title: {
            type: String
        },
        visible: {
            type: Boolean
        },
        width: {
            type: String
        }
    },
    watch: {
        visible(val) {
            this.self_visible = val;
        }
    },
    methods: {
        /**
         *  弹窗关闭同步给父组件
         */
        handleClose() {
            this.$emit("update:visible", false);
        }
    },
}
