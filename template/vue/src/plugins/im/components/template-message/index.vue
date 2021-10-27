<template>
  <div class="template-message">
    <div class="image">
        <img :src="message.content.GoodsCoverImg" />
    </div>
    <div class="info">
        <p class="title"> {{ message.content && message.content.ReceiverTitle }}</p>
        <p class="content"> {{ message.content && message.content.ReceiverContent }}</p>
    </div>
    <div class="look" @click="goToOrderList">
        查看订单
    </div>
  </div>
</template>

<script>
export default {
    name: 'templateMessage',
    props: {
        message: {
            type: Object,
            default: ()=> {return {content: ''}}
        },
    },
    methods: {
        goToOrderList (){
            this.$router.push({path:'/10-views-erp/60-order/50-order', query:{orderId: this.message.content.OrderId}})
        }
    }
}
</script>

<style lang="scss" scoped>
    .template-message {
        width: 90%;
        height: 80px;
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        position: relative;
        margin: 0 auto;
        p{
            padding: 0px;
            margin: 0px;
            line-height: 30px;
        }
        .image {
            width: 60px;
            margin-right: 5px;
            height: 60px;
            overflow: hidden;
            border-radius: 5px;
            img {
                width: 100%;
            }
        }
        .info {
            .title {
                font-size: 15px;
            }
            .content {
                font-size: 13px;
                color: #333;
            }
        }
        .look {
            position: absolute;
            right: 15px;
            top: 32px;
            font-size: 14px;
            color: #999;
            cursor: pointer;
        }
    }
</style>
