import Vue from 'vue'
import App from './App.vue'
import VueParallaxJs from 'vue-parallax-js'

// add vue-parallax-js to vue
Vue.use(VueParallaxJs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
