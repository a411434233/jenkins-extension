<!--
 * @Author: your name
 * @Date: 2021-01-15 15:38:11
 * @LastEditTime: 2021-01-16 15:06:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dev\src\components\im\pages\chatRoom\index.vue
-->
<template>
  <div class="chatroom" id="chatroom">
    <div class="goback" @click="goback">
      <i class="el-icon-arrow-left" />
      {{
        currentItem.latestMessage.content.userInfo
          ? currentItem.latestMessage.content.userInfo.userName
          : ""
      }}
    </div>
    <chatCom
      :targetId="currentItem.targetId"
      :type="currentItem.type"
      :targetName="
        currentItem.content.userInfo
          ? currentItem.content.userInfo.targetName
          : '客服'
      "
      :chatObj="currentItem"
    >
      <div slot="message" slot-scope="props">
        <ImageMessage
          v-if="props.message.name == 'RC:ImgMsg'"
          :message="props.message"
        />
        <TextMessage
          v-if="props.message.name == 'RC:TxtMsg'"
          :message="props.message"
        />
      </div>
      <template slot="slot-top" slot-scope="row">
        <div class="fixedMessage" v-if="showFixed(row.list)">
          <div class="image">
            <img :src="goodInfo.url" />
          </div>
          <div class="info">
            <p class="title">{{ goodInfo.title }}</p>
            <p class="content"><span class="price"> ￥{{ goodInfo.price }} </span> <span>选货价：￥{{ goodInfo.costPrice }} </span></p>
          </div>
        </div>
      </template>
    </chatCom>
  </div>
</template>
<script>
export default {
  props: {
    currentItem: [Object]
  },
  data () {
    return {
      goodInfo: {
        title: '',
        price: '',
        costPrice: '',
        url: ''
      }
    }
  },
  methods: {
    goback() {
      this.$emit("goback");
    },
    showFixed(list) {
      const goodsList = list.filter(item => item.content && item.content.OutGoodsId)
      if (goodsList.length > 0) {
        this.getGoodInfo(goodsList[goodsList.length - 1])
      }
      return goodsList.length > 0 ? true : false;
    },
    getGoodInfo(row) {
      this.$http.post('api.Product.GetById', { productId: row.content.OutGoodsId }).then(res => { 
        const data = res.data
        this.goodInfo.title = data.baseInfo.title
        this.goodInfo.price = data.baseInfo.superPrice
        this.goodInfo.costPrice = data.baseInfo.costPrice
        this.goodInfo.url = data.baseInfo.listWapDescImg[0]
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.chatroom {
  width: 100%;
  height: 100vh;
  background: #dfdfe2;
}
.goback {
  cursor: pointer;
  background-color: #f4f4f5;
  color: #909399;
  width: 100%;
  padding: 12px 16px;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 13px;
  margin-bottom: 15px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
}
.fixedMessage {
  width: 400px;
  float: right;
  height: 80px;
  line-height: 80px;
  display: flex;
  z-index: 99;
  position: relative;
  background-color: #fff;
  margin-top: 18px;
  padding: 0 10px;
  &>div{
    height: 100%;
  }
  p {
    padding: 0px;
    margin: 0px;
    line-height: 30px;
  }
  .image {
    width: 60px;
    height: 60px;
    margin-right: 5px;
    margin-top: 10px;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
  .info {
    padding: 10px 0 10px 10px;
    .title {
      font-size: 15px;
      color: #666;
    }
    .price {
      color: #ff455b;
      font-size: 18px;
    }
    .content {
      font-size: 13px;
      color: #999;
    }
  }
}
</style>