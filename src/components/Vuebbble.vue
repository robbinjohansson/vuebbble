<template>
    <div class="vuebbble">
        <slot v-for="(shot, index) in shots" name="shots" :shot="shot"></slot>
        <slot v-if="error" name="error" :error="error">
            {{ error }}
        </slot>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'vuebbble',

    mounted(){
        this.get();
    },
    data() {
        return {
            shots: [],
            url: '',
            error: ''
        }
    },
    props: {
        token: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true
        }
    },
    methods: {
        get(){
            this.url = 'https://api.dribbble.com/v1/users/'+this.user+'/shots/?access_token='+this.token;
            axios.get(this.url)
                .then(response => {
                    this.shots = response.data;
                })
                .catch(error => {
                    this.error = error.response.data.message + ' ('+error.response.status+')';
                })
        }
    }
}
</script>
