import App from './App.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://localhost:3000'

new Vue({
  render: h => h(App),
}).$mount('#app')

