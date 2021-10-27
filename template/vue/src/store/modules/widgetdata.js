import Vue from 'vue'

const getDefaultState = () => {
  return {
    meta: {},
    itemMapper: {},
    widgetObj: {}
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  setWidgetMeta(state, val) {
    Vue.set(state.meta, val.id, val)
  },
  setWidgetData(state, val) {
    var widgetItem = state.widgetObj[val.metaId]

    if (typeof (widgetItem) === 'undefined') {
      widgetItem = []
      Vue.set(state.widgetObj, val.metaId, widgetItem)
    }

    var itemIdx = widgetItem.find(x => x.id === val.id)
    if (typeof (itemIdx) === 'undefined') {
      widgetItem.push(val)
    } else {
      Object.assign(itemIdx, val)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}

