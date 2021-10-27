const modulesContext = require.context('../../api/', false, /\.js$/)
let API = {}
const chunks = modulesContext.keys().reduce((modules, key) => {
    console.log("key--chunks", key);
    // if (key !== './index.js') {
    API = {
            ...API,
            ...modulesContext(key).default
        }
        // }
    return API
}, {})
export default {
    ...chunks
}