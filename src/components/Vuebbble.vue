<template>
    <div class="vuebbble">
        <div v-for="shot in shots" class="shot">
            <img :src="shot.images.hidpi">
            <h2>{{ shot.title }}</h2>
            <div class="description" v-html="shot.description"></div>
            <div class="likes">
                <p>{{ shot.likes_count }} likes</p>
            </div>
            <div class="views">
                <p>{{ shot.views_count }} views</p>
            </div>
            <div class="tags">
                <div v-for="tag in shot.tags" class="tag">{{ tag }}</div>
            </div>
        </div>
    </div>
</template>

<script>
let axios = require('axios');

export default {
    name: 'vuebbble',

    mounted(){
        this.get();
    },
    data() {
        return {
            shots: [],
            url: ''
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
            axios.get(this.url).then(response => {
                this.shots = response.data;
            });
        }
    }
}
</script>
