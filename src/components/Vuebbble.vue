<template>
    <div class="vuebbble">
        <slot v-for="(shot, index) in shots" name="shot" :shot="shot"></slot>
        <slot v-if="error" name="error" :error="error">
            {{ error }}
        </slot>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'vuebbble',

    props: {
        token: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
            default: 5,
            required: false,
        },
    },

    data() {
        return {
            shots: [],
            url: '',
            error: '',
        };
    },

    mounted() {
        this.get();
    },

    methods: {
        get() {
            this.url = 'https://api.dribbble.com/v2/user/shots?access_token=' + this.token + '&per_page=' + this.count;
            axios.get(this.url)
                .then(response => {
                    this.shots = response.data;
                })
                .catch(error => {
                    this.error = error.response.data.message + ' (' + error.response.status + ')';
                });
        },
    },
};
</script>
