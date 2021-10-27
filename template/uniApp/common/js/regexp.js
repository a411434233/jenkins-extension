let regexp = {
	// 验证空
	isNull(content) {
		return content == null || (content == '' && content !== 0) || undefined;
	},

	// 验证手机号码
	isPhone(content) {
		var reg = /^1[3456789]\d{9}$/
		return reg.test(content)
	},

	//验证0和非0开头的数字
	isNum(content){
		var reg = /^(0|[1-9][0-9]*)$/g;
		return reg.test(content)
	}
}

export default regexp
