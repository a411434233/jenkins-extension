import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'
import widgetdata from './modules/widgetdata'
import dic from './modules/dic'
import storeConfig from '../modules/storeCfg.js'

const globalCfg = require("../modules/module.config");
const importModules = globalCfg.IMPORT_MODULES;

Vue.use(Vuex)

const modulesDB = storeConfig;

let mod = {};
if (importModules) {
  importModules.forEach(element => {
    if (modulesDB[`module_${element}`]) {
      mod[`module_${element}`] = Object.assign({}, {
        namespaced: true,
      }, modulesDB[`module_${element}`])
    }
  });
}

let storeCfg = {
  state: {
    search: null, // 全局搜索
    glo_loading: false
  },
  mutations: {
    setSearch(state, val) {
      state.search = val
    },

    setLoading(state, val) {
      state.glo_loading = val
    }
  },

  modules: {
    app,
    user,
    widgetdata,
    dic,
    ...mod
  },
  getters
}

const store = new Vuex.Store(storeCfg)

export default store
