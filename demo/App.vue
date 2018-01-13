<template>
    <div id="app">
        <vuebbble token="CLIENT_ACCESS_TOKEN" user="USERNAME">
            <template slot="shots" slot-scope="props">
                <img :src="props.shot.images.hidpi" :alt="props.shot.title">
            </template>
        </vuebbble>
    </div>
</template>

<script>
import Vuebbble from '../src/components/Vuebbble.vue'

export default {
    name: 'app',

    components: {
        Vuebbble
    }
}
</script>
