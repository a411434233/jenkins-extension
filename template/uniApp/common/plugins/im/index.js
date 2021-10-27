import chat from './components/chat'

const components = {
  chat,
};

function Service(Config) {
  return require("./utils/services.js")(Config);
}

function install(Vue) {
  Object.keys(components).forEach((key) => {
    Vue.use(components[key]);
  });
  Vue.prototype.$Service = Service()
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);
export {
  chat,
  install
};
export default {
  install,
  chat,
  ...components
};

