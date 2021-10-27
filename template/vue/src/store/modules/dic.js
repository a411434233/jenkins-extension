/**
 * 功能： 字典功能
 * 服务对象： 列表页面上需要通过 id 去调用接口得到具体名称的 字段
 */
import Vue from 'vue'
import common from '../../common/common'

const state = {
    ask: {

    }
}

const mutations = {
    SET_ASK(state, {name, val}) {
        Vue.set(state.ask, name, val)
    }
}

// 正在运行的 dic 字典
let dicing = {}

const actions = {
    GET_ASK ({state, commit}, name) {
        if(!state.ask[name]) {
            if(dicing[name]) return
            console.log("调用接口" + name);
            dicing[name] = setTimeout(()=>{
                let request = common.getObject(name)
                request().then(res => {
                   if( res.code !== 0 ) return
                    commit('SET_ASK', {name, val: res.data})
                    dicing[name] && clearTimeout(dicing[name])
                })
            }, 500)
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
