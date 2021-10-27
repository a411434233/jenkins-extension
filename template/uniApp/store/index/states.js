const state = {
	phoneToLogin: "", //监听是否手机号登录
	mockUserIdentity: true, // 方便门店端和用户端切换用户true  商户false
	realUserIdentity: true ,// 当前环境：用户true  商户false
	hasJudgRole:false,//是否确定角色
	//门店信息
	storeInfoObj:{
		userId:0,
		outDoorPic:"",
		shopAddress:"",
		servicePhone:""
	},
};

export default state;
