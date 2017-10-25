<template>
    <div id="app">
        <vuebbble token="CLIENT_ACCESS_TOKEN" user="USERNAME"></vuebbble>
    </div>
</template>

<script>
import Vuebbble from './components/Vuebbble.vue'

export default {
    name: 'app',
    components: {
        Vuebbble
    }
}
</script>
