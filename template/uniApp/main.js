import Vue from 'vue'
import App from './App'
import store from 'store'
import '@/common/font/iconfont.css'
import baseCommon from '@/common/js/baseCommon.js'
import { http } from '@/common/http/index.js'
//聊天
import ImPlugin from '@/common/plugins/im'

Vue.use(ImPlugin);

Vue.Http = http;
Vue.prototype.$http = http;
Vue.prototype.$store = store;
Vue.prototype.$baseCommon = baseCommon;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
