import { Vuebbble } from '../src';
import Vue from 'vue/dist/vue.js';

describe('Vuebbble', () => {
    Vue.component('vuebbble', Vuebbble);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <vuebbble token="8828b898f4e2cec33f65f5342ba736b5e35e70f03681aa7435ad26c3b1830847" user="robbinfellow"></vuebbble>
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
