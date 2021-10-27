export const MIX_Dlg = {
    props: {
        title: {
            type: String
        },
        visible: {
            type: Boolean
        },
        width: {
            type: String,
            default: '80%'
        }
    },
    data: function () {
        return {}
    },
    computed: {
        _visible: {
            get() {
                return this.visible;
            },
            set(val) {
                if (val) {
                    this.handleOpen();
                    this.$emit("open");
                } else {
                    this.$emit("close");
                }
            },
        },
    },
    watch: {
        visible(val) {
            this.self_visible = val;
        }
    },
    methods: {
        handleOpen() {
            console.log("mixn 执行初始化函数");
        },
        handleClose() {
            console.log("mixn 执行销毁函数");
            this.$emit("update:visible", false);
        },
    },
}
