import rowCmp from './rowCmp'
import colCmp from './colCmp'

export default {
    install: function (Vue) {
        Vue.component("rowCmp", rowCmp);
        Vue.component("colCmp", colCmp);
    }
}

// 调用如下：
// <!-- <row-cmp :column='2'>
// <col-cmp name="仓库编码1" :column='2'>{{ scope.row.code }}565656</col-cmp>
// <col-cmp name="更新时间3" :column='2'>{{ scope.row.createTime | dateFormat("MM-DD HH:mm:ss") }}</col-cmp>
// <col-cmp name="联电话电话" :column='2'>{{ scope.row.tel }}</col-cmp>
// <col-cmp name="更新时间4" :column='2'>{{ scope.row.createTime | dateFormat("MM-DD HH:mm:ss") }}</col-cmp>
// <col-cmp name="更新时间5" :column='2'>{{ scope.row.createTime | dateFormat("MM-DD HH:mm:ss") }}联系电话联系电话联系</col-cmp>
// <col-cmp name="更新时间6" :column='2'>{{ scope.row.createTime | dateFormat("MM-DD HH:mm:ss") }}</col-cmp>
// <col-cmp name="更新时间7" :column='2'>{{ scope.row.createTime | dateFormat("MM-DD HH:mm:ss") }}</col-cmp>
// <col-cmp name="更新时间8" :column='2'>{{ scope.row.createTime | dateFormat("MM-DD HH:mm:ss") }}</col-cmp>
// </row-cmp> -->
