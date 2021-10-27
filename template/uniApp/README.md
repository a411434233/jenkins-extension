<!--
 * @Author: dusj
 * @Date: 2021-06-04 16:09:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-05 15:02:44
 * @Description: file content
 * @FilePath: \uniapp\README.md
-->
## 自动打开开发工具
微信小程序：设置--》安全--服务端口open

## 支付宝智能客服（文档）
https://opendocs.alipay.com/mini/component/contact-button

## 配置数据统计
地址：(https://ask.dcloud.net.cn/article/36303)

## vscode配置uni-app
https://ask.dcloud.net.cn/article/36286

## 地图
在maptools.js配置key
Web服务地址转化坐标：引入插件[用户在高德地图官网申请Web服务API类型Key](https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值&plugin=AMap.Geocoder)

## 微信端isv第三方平台

## 关键词
open3rd：第三方平台，是小程序官方认可的第三方开发商 详情
3rdMiniProgramAppid：第三方平台申请的并绑定在该平台上的小程序，用于开发小程序模板
extAppid：授权给第三方平台的小程序
[地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html)

## 标题
如果是微信小程序，页面标题不显示：
原因：（1）只在globalStyle设置了custom自定义标题模式（2）微信小程序标题的背景色背身是黑色，字体颜色要是白色，只支持hex模式
修改pages.json：
"globalStyle": {
	"navigationBarTextStyle": "#F8F8F8",
	"navigationBarTitleText": "ISV模板",
	"backgroundColor": "#FFFFFF"
},

## 按钮
margin默认left和right值

## 透明背景色

# scroll-view标签
1.横向滚动
行间样式一定要加；2.hand-goods{display: inline-block}；
<scroll-view class="sw-goods" scroll-x="true" style="width: 100%;white-space: nowrap">
	<block class="swiper-item-wrap" v-for="(list,i) in data" :key="i">
		<view class='swiper-item hand-goods' @click="toRecycleBuy(list)"></view>
	</block>
</scroll-view>
2.纵向滚动加载更多；lower执行条件：right-brand-item设置固定高度，或者父级固定标签高100%，
<scroll-view class="right-brand-item" scroll-y="true" @scrolltolower="lower">
</scroll-view>

## swiper
图片只显示一半，image默认高是240px；增加swiper{height: 600rpx;}

## checkbox或者radio，@change事件
e.target.value，支付宝返回数字，微信返回字符串

## 设置placeholder样式
<input type="text" placeholder="请输入" placeholder-class="placeholderStyle"></input>
<input type="text" placeholder="请输入" placeholder-style="color:#e2e2e2;"></input>

## v-show不执行
和 display:flex或其他布局影响，把v-show放到需要隐藏元素的父级

## 作用域插槽(微信小程序作用域插槽需要特殊处理)
具名插槽：
子：<view class="fixed-bottom"><slot name="slot-bottom"></slot></view>
父：<view slot="slot-bottom"></view>
作用域插槽：
子：
<template>
<slot name="message" :message="message"></slot>
</template>
父：<template v-slot:message="{ message }">{{message.name}}</template>

## 微信小程序扫二维码打开
[(https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=180915061&lang=zh_CN)]-->扫普通链接二维码打开小程序(添加)

## h5滑动失效 :scroll-into-view="intoIndex" 
<scroll-view scroll-y :scroll-into-view="intoIndex" scroll-with-animation></scroll-view>
//setTimeout,兼容h5滑动失效
setTimeout(() => {
	this.intoIndex = 'eval-into-' + $Index;
}, 10);

## uni-pop-layer
位置：需要紧跟调取组件的标签，不然不显示
