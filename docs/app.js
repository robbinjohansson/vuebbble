import Vue from 'vue';
import { Vuebbble } from '../src';

new Vue({
    components: { Vuebbble },

    el: '#app',

    data() {
        return {
            token: 'dff1b22ab880e411730dcb2c892e3db42411b8cd58dd4ed5b8078c9ef21640ee',
            count: 9,
        };
    },
});
