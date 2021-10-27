/*
 * @Author: dusj
 * @Date: 2021-06-04 16:02:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-07 13:46:24
 * @Description: file content
 * @FilePath: \uniapp\common\js\utils.js
 */
import moment from './lib-utils/moment.min.js'

export function appendZero(obj) {
    return obj < 10 ? "0" + obj : obj
}

export function countDownTime(expireTime, addTime = 0) {
    let residueObj = {};
    let start = moment(); //获取开始时间
    expireTime = expireTime.replace(/-/g, '/');
    expireTime = moment(expireTime).add(addTime, 'm'); //结束时间
    let diff = expireTime.diff(start); //时间差
    residueObj.hours = appendZero(moment.duration(diff).hours());
    residueObj.minutes = appendZero(moment.duration(diff).minutes());
    residueObj.seconds = appendZero(moment.duration(diff).seconds());
    return residueObj
}

export function arrToObj(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        const el = array[i];
        obj[el.name || el.Name] = {
            name: el.Name || el.name,
            value: el.Value || el.value
        }
    }
    return obj
}

//格式化日期
export function formatDate(date) {
    return moment(date).format('YYYY-MM-DD');
}

//获得本周的开端日期(num=1)/截至日期(num=7)
export function getWeekStartOrEndDate(num) {
    return moment().weekday(num).format('YYYY-MM-DD')
}

//获取某个月份的起止日期
export function getMonthStartAndEnd(date) {
    let firstDay = moment(date).startOf("month").format("YYYY-MM-DD");
    let lastDay = moment(date).endOf("month").format("YYYY-MM-DD");
    return [firstDay, lastDay]
}

export function verifCompareTwoArr(array1, array2, totalStock) {
    array2 = array2.filter(res => typeof res != 'undefined');
    var newArr = [];
    for (var i = 0; i < array2.length; i++) {
        //我们将arr2中的元素依次放入函数中进行比较，然后接收函数的返回值
        if (_exist(array2[i], array1)) { //如果返回的值是true，我们将元素放入新的数组中
            newArr[newArr.length] = array2[i];
        }
    }
    if (newArr.length > 0 && totalStock > 0) {
        uni.showToast({
            title: "请选择" + newArr,
            icon: "none"
        });
        return false
    }
    return true;
}

export function _exist(num, arr1) {
    for (var j = 0; j < arr1.length; j++) {
        if (num === arr1[j].name || arr1[j].Name) {
            return false; //如果传过来的元素在arr1中能找到相匹配的元素，我们返回fasle
        }
    }
    return true; //如果不能找到相匹配的元素，返回true
}

/**
 * 函数防抖：对于频繁触发某个操作，只触发执行一次
 * @param {*} func 触发执行的函数
 * @param {*} wait 频繁界限
 * @param {*} immediate 默认多次触发，我们是别最后一次，如果为 true 则第一次立即执行
 */
export function debounce(func, wait = 300, immediate = false) {
    // 思路: 当前点击完成后，我们等待 wait 这么长的时间，看是否会触发第二次，如果没有触发第二次，属于非频繁操作，我们直接执行 func;
    //      如果触发了第二次，以前的不算，从当前这次再开始等待
    // 闭包  this 作用域
    let timer = null;
    return function(...params) {
        let firstRun = immediate && !timer; // 判断是否需要第一次立即执行
        clearTimeout(timer); // 间隔时间内再次进入，清空定时器任务, 关闭执行
        timer = setTimeout(() => {
            timer = null;
            // 这里的 this 是执行事件元素本身
            !immediate ? func.call(this, ...params) : null; // 非第一次立即执行
        }, wait);
        firstRun ? func.call(this, ...params) : null; // 第一次执行
    };
}

//支付宝小程序onshow方法不调用的情况
export function tabbarRefresh(cur) {
    // #ifdef MP-ALIPAY
    const onShow = cur.$mp.page.onShow;
    cur.$mp.page.onShow = function(...arg) {
        setTimeout(() => {
            onShow.apply(this, ...arg)
        }, 300)
    }

    // #endif
}
