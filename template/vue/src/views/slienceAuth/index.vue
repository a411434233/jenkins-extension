<template>
  <div class="slienceAuth">
    <!-- 静默授权， 获取平台token -->
  </div>
</template>
<script>
import http from 'xs-request/lib/requestApi'
import { getConfig } from '@/utils/global-config'
import { setLocalStorage } from '@/utils/localStorage'

export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.apartyGetToken(to, next, vm)
    });
  },
  methods: {
    async apartyGetToken(to, next, vm) {
      if(window.parent !== window.self && window.name === "qualityTestParty") { // 识别被哪个 iframe 引用
        if (!localStorage.getItem("token")) {
          await http.get(
            getConfig("ID4_AUTH") +
              "AccountIframe/Token?accountName=" +
              to.query.accountName
          ).then(async (res) => {
            if (res.code == 0) {
              localStorage.setItem('token', res.data)
              await http.get(getConfig("ID4_AUTH") + 'connect/userinfo').then((res) => {
                setLocalStorage("userProfile", res.data);
                next('/')
              })
            }
          });
        } else {
          localStorage.removeItem("token");
          vm.apartyGetToken(to, next, vm)
        }
      }
    }
  }
}
</script>
<style lang="sass" scoped></style>
