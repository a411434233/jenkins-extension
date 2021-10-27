
export const MIX_ColCellAnalysis = {
    data() {
        return {
            copyClass: false,
            hideClass: false
        }
    },
    props: {
        source: {
            type: Object,
            default: () => {
                return {};
            }
        },
        layout: {
            type: Array,
            default: []
        },
    },
    computed: {
        _layout: function () {
            const that = this;
            let _layoutObj = {};
            let _layoutArr = [];
            if (toString.call(this.layout[0]) !== '[object Array]') {
                const row = this.layout;
                row.forEach(item => {
                    const group = item.split("|");  //['(orderId)','订单','copy']
                    let isCopy, isHide = false;

                    // 判断是否有复制按钮
                    if (group[group.length - 1] == "copy") {
                        this.copyClass = true;
                        isCopy = true;
                    }

                    if (group[group.length - 1] == "hide") {
                        this.hideClass = true;
                        isHide = true;
                    }

                    let _value = "";

                    var reg = /(^\()?\D*\)$/;
                    //test()返回值bool类型，判断参数是否符合正则表达式
                    var result = reg.test(group[0]);
                    if (result) {
                        _value = group[0];
                    } else {
                        _value = that.source[group[0]]
                    }
                    _layoutArr.push({
                        value: _value,
                        label: group[1] ? group[1] !== "copy" ? group[1] : "" : "",
                        copy: isCopy,
                        hide: isHide
                    })
                });
              
                return _layoutArr;
            } else {
                this.layout.forEach(row => {
                    let newObj = row.map(item => {
                        const group = item.split("|");
                        if (item === "copy") {
                            this.copyClass = true;
                            return "copy";
                        }
                        let isCopy = false, isHide = false;
                        if (group[group.length - 1] == "copy") {
                            this.copyClass = true;
                            isCopy = true;
                        }
                        if (group[group.length - 1] == "hide") {
                            this.hideClass = true;
                            isHide = true;
                        }

                        let _value = "";
                        var reg = /(^\()?\D*\)$/;
                        //test()返回值bool类型，判断参数是否符合正则表达式
                        var result = reg.test(group[0]);
                        if (result) {
                            _value = group[0];
                        } else {
                            _value = that.source[group[0]]
                        }

                        return {
                            value: _value,
                            label: group[1] !== "copy" ? group[1] : "",
                            copy: isCopy,
                            hide: isHide
                        };
                    });
                    _layoutArr.push(newObj);
                });
                return _layoutArr;
            }
        }
    }
}
