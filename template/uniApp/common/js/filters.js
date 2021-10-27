import Vue from 'vue'

Vue.filter('timeMmDd', function(value) {
	if (!value) return '';
	let time = value.substring(5,11).replace('/','-');
	return time;
})

Vue.filter('timeHhMm', function(value) {
	if (!value) return '';
	let time = value.substring(11,16);
	return time;
})

Vue.filter('remainTwoDeci', function(value) {
	if (!value) return '';
	let num = Math.round(value*100)/100;
	return num;
})

Vue.filter('retainBetween', function (value) {
    if (!value) return '';
    return value.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
})

Vue.filter('bankNoDesen', function (value) {
    if (!value) return '';
    return value.replace(/(\d{4})\d+(\d{3})$/, "$1 ****** $2");
})