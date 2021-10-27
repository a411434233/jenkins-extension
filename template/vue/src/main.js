import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import xs from 'xs-component' // 向上ui组件库
import '@/router/permission' // 路由守卫
import '@/plugins/index'

import '@/utils/prototype' // 全局变量
import '@/utils/filter' // 全局过滤器

Vue.use(xs)
Vue.use(ElementUI);
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
