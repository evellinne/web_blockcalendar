import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Cadastro from './components/Cadastro.vue'
import Teste from './components/Teste.vue'


Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/cadastro', component: Cadastro},
        {path: '/teste', component: Teste}
    ]
})