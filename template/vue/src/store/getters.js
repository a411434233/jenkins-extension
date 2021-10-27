const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  widgetObj: state => state.widgetdata.widgetObj,
  widgetMeta: state => state.widgetdata.meta,
  menuList: state => state.app.menuList
}
export default getters
