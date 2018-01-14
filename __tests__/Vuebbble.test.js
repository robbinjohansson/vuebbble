import { Vuebbble } from '../src';
import Vue from 'vue/dist/vue.js';

describe('Vuebbble', () => {
    Vue.component('vuebbble', Vuebbble);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <vuebbble token="CLIENT_ACCESS_TOKEN" user="USERNAME">
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
