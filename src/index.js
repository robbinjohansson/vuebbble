import Vuebbble from './components/Vuebbble.vue'

const plugin = {
  install: Vue => {
    Vue.component('vuebbble', Vuebbble)
  }
}

Vuebbble.install = plugin.install

export default Vuebbble
