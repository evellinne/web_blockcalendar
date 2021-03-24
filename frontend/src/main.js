import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://localhost:3000'

new Vue({

  router,

  render: h => h(App),
}).$mount('#app')

