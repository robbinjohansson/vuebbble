import Vuebbble from './components/Vuebbble.vue'

const plugin = {
  install: Vue => {
    Vue.component('vuebbble', Vuebbble)
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin
export { Vuebbble }
