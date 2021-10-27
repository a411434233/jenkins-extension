<!--
 * @Author: your name
 * @Date: 2021-06-07 14:37:47
 * @LastEditTime: 2021-06-07 14:40:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uniapp\components\test.vue
-->
<template>

    <view class="container">
        todoCount--{{todoCount}}
    </view>

</template>

<script>
export default {
	data() {
		return {
		};
	},
    props:{
        todoCount:String
    }
}