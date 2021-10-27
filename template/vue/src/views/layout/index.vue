<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container" :from-item="selectMenu" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'
import { main } from '@/utils/getMenu'

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  data() {
    return {
      selectMenu: 0
    };
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    fixedHeader() {
      // return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
      }
    }
  },
  methods: {
    async toSider(item, val) {
      await this.$router.push({
        name: "child-frame",
        params: {
          val,
          query: {
            t: +new Date() // 保证每次点击路由的query项都是不一样的，确保会重新刷新view
          }
        }
      });
      this.selectMenu = item;
    },
    addLocalMenu(onLineMenuList) {
      return onLineMenuList;
    }
  },
  mounted() {
    main()
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
@import '../../styles/variables.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
