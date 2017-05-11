require('./bootstrap');

Vue.component('dribbble', require('./components/Dribbble.vue'));

var app = new Vue({
  el: '#app'
});
