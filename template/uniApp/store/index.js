import Vue from 'vue'
import Vuex from 'vuex'

import state from './index/states'
import mutations from './index/mutations'

// 使用 Vue 内部提供的插件
// 作用: mutation 在修改 state 的时候，会在控制台打印这次修改的信息
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// vuex调试工具：检测对state的修改是不是通过mutation修改，如果不是会报错
// 判断开发模式下，开启检测
const debug = process.env.NODE_ENV !== 'production'

// 相当于一个单例模式
export default new Vuex.Store({
  state,
  mutations,
  // 严格模式下，开启 debug 检测工具，会消耗性能，检测 state 是不是被 mutations 修改该的,如果不是会有警告
  strict: false,
  plugins: debug ? [createLogger()] : [],
})
