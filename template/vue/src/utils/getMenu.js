import { getToken } from '@/utils/auth.js'
import { getConfig } from '@/utils/global-config'
import menu from '@/automatically/menu.js'
import ask from '@/automatically/api'
import store from '@/store'

function main () {
  if(process.env.NODE_ENV == "development") return
  getVersion();
}

function getVersion() {
    const token = getToken(`${getConfig('CLIENT_ID')}_token`)
    if(!token) return;
    ask.ucmng.api.sysmng.MenuOper.GetVersion({clientId: window.$baseCfg.CLIENT_ID}).then((res)=> {
      if(res.code == 0) {
        getMenuTree(res.data)//获取菜单树
      }
    })
}

function getMenuTree (version) {
    let apiVersion = menu.version;
    if (version == null || apiVersion > Number(version)) {
      if(!(menu && menu.list)) return;
      let moduleName = menu.list[0].moduleName ? menu.list[0].moduleName : ''
      let menuList = menu.list;
      getMenuPowerList(menuList) // 菜单权限映射关系 浅拷贝， 直接影响原数组
      let obj = {
        clientId: window.$baseCfg ?  window.$baseCfg.CLIENT_ID : '',
        moduleName: moduleName,
        menus: menuList,
        version: menu.version +''
      }
      ask.ucmng.api.sysmng.MenuOper.UpdateMenu.post(obj).then(() => {
        // 新版本菜单
        initMenu()
      });
    } else {
      // 新版本菜单
      initMenu()
    }
}

function getMenuPowerList (list) {
  list.forEach(item => {
    if(item.apis && item.apis.length > 0) {
      item.apis.forEach(it => {
        it[0] = window.$baseCfg.apis[it[0]] ? window.$baseCfg.apis[it[0]].Name: ''
      })
    }
    if(item.moduleName) { // 清空内部多余moduleName
      delete item.moduleName
    }
    if(item.children) {
      getMenuPowerList(item.children)
    }
  });
}


function initMenu () {
  ask.ucuser.api.sys.CurUser.InitMenu().then(res => {
    if(res.code == 0) {
      let { subItems } = hasChildren({subItems: res.data})
      store.dispatch("app/getMenuList", subItems);
    }
  })
}

function hasChildren(obj) {
  let list = obj.subItems
  if(list && list.length > 0) {
    if(list.every(i => i['hide'] === true)) {
      obj.subItems = []
    } else {
      obj.subItems = list.filter(item => item['hide'] !== true)
      obj.subItems.forEach(item => hasChildren(item))
    }
  }
  return obj
}

export {

  main

}
