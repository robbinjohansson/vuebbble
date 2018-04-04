import { Vuebbble } from '../src';
import Vue from 'vue/dist/vue.js';

describe('Vuebbble', () => {
    Vue.component('vuebbble', Vuebbble);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <vuebbble token="dff1b22ab880e411730dcb2c892e3db42411b8cd58dd4ed5b8078c9ef21640ee"></vuebbble>
            </div>
        `;
    });

    it('can mount', async () => {
        await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });
});

async function createVm() {
    const vm = new Vue({
        el: '#app',
    });

    await Vue.nextTick(() => {});

    return { app: vm, component: vm.$children[0] };
}
