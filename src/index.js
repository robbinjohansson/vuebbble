import Vuebbble from './components/Vuebbble.vue';

const plugin = {
  install: Vue => {
    Vue.component('vuebbble', Vuebbble);
  },
};

export default plugin;
export { Vuebbble };
