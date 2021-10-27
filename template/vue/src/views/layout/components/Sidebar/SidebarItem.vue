<template>
  <div class="menu-wrapper">
    <template v-if="item.subItems.length == 0">
      <template v-if="item.title">
        <app-link :to="getUrl(item.url, item)">
          <el-menu-item  :class="{'submenu-title-noDropdown':!isNest}" :index="item.id">
            <item :title="item.title" :icon="item.icon"  />
          </el-menu-item>
        </app-link>
      </template>
    </template>
    <el-submenu v-else ref="subMenu" :index="item.id" popper-append-to-body>
      <template slot="title">
        <item v-if="item.title" :title="item.title" :icon="item.icon" />
      </template>
      <sidebar-item
        v-for="child in item.subItems"
        :key="child.id"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

export default {
  name: "SidebarItem",
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    getUrl (url, item) {
      if(process.env.NODE_ENV == 'development') {
        return url
      } else {
        return item.host + item.url
      }
    }
  }
};
</script>
