<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <router-link key="collapse" class="sidebar-logo-link" to="/" v-if="collapse">
      <img src="/Res/logo/small.png" class="sidebar-logo" />
    </router-link>
    <router-link key="expand" class="sidebar-logo-link" to="/">
      <img src="/Res/logo/big.png" class="sidebar-logo" />
    </router-link>
  </div>
</template>

<script>

export default {
  name: "SidebarLogo",
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 210px;
      height: 50px;
      vertical-align: middle;
      margin-right: 12px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
      width: 56px;
      height: 50px;
    }
  }
}
</style>
