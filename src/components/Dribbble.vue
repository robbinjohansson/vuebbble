<template>
<div>
    <ul class="shots">
    	<li v-for="shot in shots" class="shot">
    		<img :src="shot.images.hidpi">
    		<h2>{{ shot.title }}</h2>
    		<div class="description" v-html="shot.description"></div>
    		<div class="likes">{{ shot.likes_count }} likes</div>
    		<div class="views">{{ shot.views_count }} views</div>
    		<div class="tags">
    			<span v-for="tag in shot.tags" class="tag">{{ tag }} </span>
    		</div>
    	</li>
    </ul>
</div>
</template>

<script>
export default {
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
			required: true
		},
		user: {
			required: true
		}
    },

    methods: {
        get(){
        	var url = 'https://api.dribbble.com/v1/users/'+this.user+'/shots/?access_token='+this.token;
        	axios.get(url).then(response => {
                _.each(response.data, (shot) => {
                    this.shots.push(shot);
                }, this);
            });
        }
    }
}
</script>