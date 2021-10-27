<template></template>
<script>
import { setToken } from '@/utils/auth' // get token from cookie
import { getQuery } from '@/common/utils'
import { getConfig } from '@/utils/global-config'
import { setLocalStorage } from '@utils/localStorage'
// TODO moduleConfig
import { main } from '@/utils/getMenu'

const endTimestamp = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1;

export default {
  mounted() {
    if (getConfig("ID4_LOGINTYPE")) {
      const that = this;
      window.$mgr.signinRedirectCallback().then(function () {
          window.$mgr.getUser().then((user) => {
            setToken(user.access_token);
            setToken("LoginUserName", user.profile.name);
            setLocalStorage("userProfile", user.profile);
            localStorage.setItem("token", user.access_token);
            // 作为第三方系统被嵌套在iframe中使用
            sessionStorage.setItem("token", user.access_token);
            sessionStorage.setItem("iframeAuthExpireTime", endTimestamp);
            var redic_url = getQuery(window.location.href, "redic_url");
            main();
            that.$router.push(
              redic_url ? decodeURIComponent(redic_url).substr(1) : `/`
            );
          })
          .catch(function (e) {
            console.log("getUser", e);
          });
        })
        .catch(function (e) {
          console.log("getToken", e);
        });
    }
  },
};
</script>
