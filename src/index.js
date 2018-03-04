import Vuebbble from './components/Vuebbble.vue';

export default {
    install(Vue, options) {
        Vue.component('vuebbble', Vuebbble);
    },
};

export { Vuebbble };
