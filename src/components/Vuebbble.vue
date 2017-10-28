<template>
    <div class="vuebbble">
        <div
            class="shot"
            v-for="(shot, index) in shots"
            :key="index"
        >
            <img :src="shot.images.hidpi">
            <h3 v-html="shot.title"></h3>
            <div class="description" v-html="shot.description"></div>
            <div class="likes">
                <p>{{ shot.likes_count }} likes</p>
            </div>
            <div class="views">
                <p>{{ shot.views_count }} views</p>
            </div>
            <div class="tags">
                <div
                    class="tag" 
                    v-for="(tag, index) in shot.tags"
                    :key="index"
                    v-html="tag"
                >
                </div>
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
