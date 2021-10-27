<template>
  <div class="home-wrapper" />
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.apartyGetToken(to, next, vm)
    })
  },
  methods: {
    async apartyGetToken(to, next, vm) {
      // 识别被哪个 iframe 引用;qualityTestParty=质检详情
      if (window.parent !== window.self && window.name === 'qualityTestParty') {
        if (to.query.orderId && to.query.orderId != 'undefined') {
          sessionStorage.setItem('iframeOrderId', to.query.orderId)
        }
        next('/zhijian-details')
      } else {
        next()
      }
    }
  }
}
</script>
