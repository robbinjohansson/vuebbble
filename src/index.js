import Vuebbble from './components/Vuebbble.vue';

function plugin (Vue) {
    Vue.component('vuebbble', Vuebbble)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'

// Export all components too
export {
    Vuebbble,
    version
}
