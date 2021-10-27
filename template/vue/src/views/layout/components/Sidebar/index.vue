<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in getMenuList"
          :key="route.id"
          :item="route"
          :base-path="route.url"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

import { createMenuId } from '@/common/createMenuId'
//TODO
export default {
  data() {
    return {
      devMenuList: [],
    };
  },
  props: {
    fromItem: {
      type: Number,
      default: 0
    }
  },
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(["sidebar", "menuList"]),
    activeMenu() {
      const route = this.$route;
      const { path } = route;
      if (route.path) {
        return createMenuId(route.path);
      }
      const realUrl = decodeURIComponent(path).replace(`/child-frame/`, "");
      return realUrl;
    },
    showLogo() {
      // return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    getMenuList () {
      if(process.env.NODE_ENV === 'development') {
        return this.devMenuList
      }
      return this.menuList
    }
  },
  created() {
    if (process.env.NODE_ENV == "development") {
      let router = this.$root.$router.options.routes.find(
        item => item.path === "/"
      );
      let { subItems } =  this.formatRouter(router, {url:'/'})
      this.devMenuList = subItems || []
    }
  },
  methods: {
    formatRouter (obj, parent) {
      let item = {
        title: obj.meta && obj.meta.title || '',
        icon: obj.meta && obj.meta.icon || '',
        hide: obj.meta && obj.meta.hidden || false,
        url: '',
        host: window.location.host,
        subItems:  [],
        id: ''
      }
      if(parent.url == '/') {
        obj.url =  obj.path
      } else {
        obj.url = parent.url + '/'+ obj.path
      }
      item.url = obj.url
      item.id = createMenuId(item.url)
      if(obj.children && obj.children.length > 0) {
        let list = []
        obj.children.forEach((it)=>{
          list.push(this.formatRouter(it, obj))
        })
        if(!list.every(i => i['hide'] === true)) {
          item.subItems = list.filter(item => item['hide'] !== true)
        }
      }
      return item
    }
  }
};
</script>
