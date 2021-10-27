import chatCom from './components/chat'
import ConversationList from './components/conversation-list'
import TextMessage from './components/msg-text'
import ImageMessage from './components/msg-image'

const components = {
  ConversationList,
  chatCom,
  TextMessage,
  ImageMessage
};

function Service(Config) {
  return require("./utils/services.js")(Config);
}

function install(Vue) {
  Vue.prototype.$Service = Service()
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export default {
  install,
  ...components
};

