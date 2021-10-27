import Vue from 'vue'
import { Module_Search } from '@modules/module.config'
import 'moment-duration-format'
import moment from 'moment' // 导入文件
import ask from '@/automatically/api'
import { requestApi } from 'xs-request'
import echarts from 'echarts'
import { countDownSetColor, loadReportData, loadTableData, msg, showDlg } from '@/utils/index'
import signalr from '@/utils/signalR'
import { Enum, EnumList, OrgEnum } from '@/utils/enum'
import common from '@/common/common'
import Common_Search from '@/utils/search'
import filterRules from './filterRules'

//新版api 请求
Vue.prototype.$ask = ask
//旧版 请求
Vue.prototype.$http = requestApi
Vue.prototype.$echarts = echarts;
// 日期格式
Vue.prototype.$moment = moment// 赋值使用
// 加载表格数据
Vue.prototype.loadTableData = loadTableData
// 加载报表数据
Vue.prototype.loadReportData = loadReportData
// 消息
Vue.prototype.$msg = msg
Vue.$SearchTool = Object.assign({}, Common_Search, Module_Search ? Module_Search : {})
Vue.prototype.countDownSetColor = countDownSetColor
Vue.prototype.signalr = signalr
Vue.prototype.$enum = Enum
Vue.prototype.$orgEnum = OrgEnum
Vue.prototype.$enumList = EnumList
Vue.prototype.$common = common
Vue.http = requestApi;
Vue.Enum = Enum;
Vue.OrgEnum = OrgEnum;
Vue.EnumList = EnumList;
// 显示弹出对话框
Vue.prototype.showDlg =showDlg

// 校验
Vue.prototype.$filterRules = filterRules
