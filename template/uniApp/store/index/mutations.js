import * as types from './mutation-types'

// 定义 mutations
const mutations = {
	[types.SET_PHONETOLOGIN](state, value) {
		state.phoneToLogin = value;
	},
	[types.SET_MOCKUSERIDENTITY](state, value) {
		state.mockUserIdentity = value;
	},
	[types.SET_REALUSERIDENTITY](state, value) {
		state.realUserIdentity = value;
	},
	[types.SET_HASJUDGROLE](state, value) {
		state.hasJudgRole = value;
	},

	[types.SET_STOREINFOOBJ](state, value) {
		state.storeInfoObj = value;
	},

};

export default mutations;
