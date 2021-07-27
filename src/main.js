import Vue from 'vue'
import App from './App.vue'
import VueParallaxJs from 'vue-parallax-js'

//Просмотр галереи
import VueEasyLightbox from 'vue-easy-lightbox';



Vue.use(VueEasyLightbox)

// add vue-parallax-js to vue
Vue.use(VueParallaxJs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
