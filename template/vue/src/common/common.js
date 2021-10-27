import Vue from 'vue'
import { requestApi as http } from 'xs-request'
import ask from '@/automatically/api'
import router from '@/router/index'

const common = {}

/**
 * 查询列表数据
 * @param {*} that
 * @param {String} url  接口地址
 * @param {Object} query   接口参数， 默认取页面变量 data 为查询条件
 * @param {Function} callBack  返回函数， 页面在接口返回后自行处理
 */
common.getList = (that, url, query, callBack) => {
    let newQuery = {}
    if (query) newQuery = query
    else {
        let obj = Object.assign({}, that.data)
        if (obj.pageInfo === undefined) {
            that.$set(obj, 'pageInfo', {page: 1, pageSize: 30})
        }
        delete obj.data
        newQuery = obj
    }
    let request = common.getObject(url)
    request(query ? query : newQuery).then((res)=>{
        if(callBack) {
            callBack(res);
            return;
        }
        if(res.code == 0) {
            that.data = res.data
        }
    })
}

/**
 *根据请求URL解析对象
 **/
common.getObject = (url, obj = ask) => {
    let value = obj
    let keys = url.split('.')
    for (let i = 1; i < keys.length; i++) {
        value = value[keys[i]]
    }
    return value
}

/**
 * 表单的单据保存  
 * @param {*} that 指向 传入 this
 * @param {*} url  api 地址
 * @param {*} query  查询条件 默认this.postForm
 * @param {*} ref  表单校验 捆绑对象  想使用表单保存方法， 但不进行校验， 传值 false
 * @param {*} callBack 接口返回后， 页面要进行后续操作，默认
 * 
 * 调用方法后， 默认关闭弹窗页， 如果 不关闭弹窗， 或有其他业务处理， 参数 callBack(res) 回调当前页面处理
 * 表单校验后，调用 api 之前,  如果要修改保存的值， 默认执行页面上 beforeSaveData (data)方法， return 返回处理好格式的数据

 */
common.saveData = (that, url, query, ref, callBack) => {
    let newQuery = query ? query : that.postForm;
    if(ref === false) {
        common.handleData(that, url, newQuery, callBack)
    } else {
        let newRef = ref ? ref : that.$refs.pageDetail.$refs.postForm
        newRef.validate(res => {
            if(!res) return
            if (that.beforeSaveData) {
                newQuery = that['beforeSaveData'](newQuery);
            }
            common.handleData(that, url, newQuery, callBack)
        })
    }   
}
/**
 * 保存数据 一般作为 common.saveData 的内嵌方法使用， 不推荐单独使用 （表单提交，原则上要经过表单校验）
 * @param {*} that 指向 传入 this
 * @param {*} url api 地址
 * @param {*} query 查询条件 默认this.postForm
 * @param {*} callBack 接口返回后， 页面要进行后续操作
 */

common.handleData  = (that, url, query, callBack)=> {
    let newQuery = query ? query : that.postForm;
    if (that.loading !== undefined) that.loading = true;
    let request = common.getObject(url)
    request(newQuery ? newQuery : undefined).then((res) => {
        if (that.loading !== undefined) that.loading = false;
        if (res.code == 0) {
            that.$message('保存成功');
            if(!callBack) that.$emit('close')
        }
        if (callBack) callBack(res.data)
    })
    
}


/**
 * 查询单条信息
 * @param {*} that
 * @param {String} url 接口地址
 * @param {Object} param 接口参数
 * @param {Function} callBack  返回函数， 页面在接口返回后要进行其他处理
 */
common.getById = (that, url, param, callBack) => {
    http.get(url, param).then((res) => {
        if (res.code == 0) {
            callBack(res.data)
        } else {
            that.$message(res.message)
        }
    })
}

/**
 * 修改单条信息
 * @param {*} that
 * @param {String} url 接口地址
 * @param {Object} query 接口参数
 * @param {Function} callBack  返回函数， 页面在接口返回后要进行其他处理
 */
common.updateById = (that, url, query, callBack) => {
    let newQuery = query ? query : that.postForm;
    http.post(url, newQuery).then((res) => {
        if (that.loading !== undefined) that.loading = false;
        if (res.code == 0) {
            that.$message('操作成功');
            if (callBack) { callBack(res.data) }
        } else {
            that.$message(res.message)
        }
    })
}

/**
 * 消息弹窗---自动消失
 * @param {*} that
 * @param {String} message  内容
 * @param {String} type  类型 可选值：查看element ui 文档，  默认 success
 */
common.message = (that, message, type) => {
    that.$message({
        message: message,
        type: type ? type : 'success'
    });
}

/**
 * 对话框
 * @param {*} that
 * @param {String} message  内容
 * @param {String} title  标题 默认：提示
 * @param {Function} callBack 返回函数， 页面在接口返回后要进行其他处理
 */
common.confirm = (that, message, title, callBack) => {
    that.$confirm(message, title ? title : "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
    })
    .then(() => {
        callBack(true)
    })
    .catch(() => {
        callBack(false)
    });
}

/**
 * 发起弹窗
 * @param {*} options
 *  options { 参数
 *      title: string, 弹窗标题
 *      component: vue,  弹窗组件 --> 弹窗组内部取消弹窗 this.$emit('close', 要带给列表页的值)
 *      props: {id: '', name: '' }, 带给弹窗组件的 prop 集合
 *      srcData: {} ,  带给弹窗组件的值  （已废弃， 不推荐使用, 推荐使用 props）
 *      width： string, 弹窗宽度
 *      showButton： Boolean , 是否显示 确认/取消按钮 （默认不显示） 显示时， 确认按钮默认触发组件页面的 confirm() 方法
 *      callBack: function 获取 弹窗层返回值
 *      beforeClose: function 弹窗点击关闭事件， 返回参数 done , 关闭弹窗事件
 * }
 * 
 */
common.popup = (options) => {
    if (!options) return;
    let { title, component, srcData, width, showButton, callBack, beforeClose, props } = common.clone(options);
    if (!component) return;
    let e = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(e);
    let template = '';
    let v = '';
    if (typeof component == 'string') {
    } else {
        let button = '';
        if (showButton) {
            button = `<div style="text-align:right"><el-button size="medium" type='primary' @click="confirm">确认</el-button><el-button size="medium" @click="cancel()">取消</el-button></div>`
        }
        template = `<div v-if="visible"> <el-dialog :title="title" :visible.sync="visible" :width="width" :before-close="beforeClose" append-to-body><child ref="child"  v-bind="props" :srcData="srcData" @close="close" />${button}</el-dialog></div>`
    }
    v = new Vue({
        el: e,
        template: template,
        router,
        data: function () {
            return {
                title: title ? title : '弹窗组件',
                visible: true,
                width: width ? width : '30%',
                props: props ? props : null,
                srcData: srcData ? srcData : null
            }
        },
        components: {
            child: component
        },
        methods: {
            confirm() {
                if (this.$refs.child.confirm) {
                    this.$refs.child.confirm();
                }
            },
            beforeClose(done) {
                if(beforeClose) {
                    beforeClose(done)
                } else {
                    done();
                }
            },
            cancel () {
                this.visible = false
            },
            close(res) {
                if (callBack) {
                    callBack(res);
                }
                this.visible = false
            }
        }
    })
    return v
}

/**
 * 深度拷贝
 */
common.clone = (obj) => {
    // 其他类型
    if (null == obj || 'object' == typeof (obj)) {
        return obj
    }
    // 日期类型
    if (obj instanceof Date) {
        let copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    //数组类型
    if (obj instanceof Array) {
        let copy = [];
        for (let i = 0; index < obj.length; index++) {
            copy[i] = common.clone(obj[i])
        }
        return copy
    }
    //对象类型
    if (obj instanceof Object) {
        let copy = {}
        for (const key in obj) {
            if (Object.hasOwnProperty.call(object, key)) {
                copy[key] = common.copy(obj[key])
            }
        }
        return copy
    }

    throw new Error("无法复制对象！不支持其类型")
}


/**
 *导出数据报表
 *@param query 默认 列表上的 query 条件去掉 data
 *@param headers
 *@param {String} url 请求方法
 *@param {String} fileName 文件名
 */
 common.exportExcel = async (url, query, fileName = 'demo', headers = { responseType: 'arraybuffer' }) => {
    let newQuery = query // 考虑设置默认值
    const httpRequest = common.getObject(url)
    const response = await httpRequest(newQuery, headers)
    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' })
    const objectUrl = URL.createObjectURL(blob)
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.style = 'display: none'
    a.href = objectUrl
    a.download = `${fileName}.xlsx`
    a.click()
    document.body.removeChild(a)
}
export default common
