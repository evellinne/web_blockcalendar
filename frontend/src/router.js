import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Cadastro from './components/Cadastro.vue'
import PainelUsuario from './components/PainelUsuario.vue'
import Perfil from './components/Perfil.vue'
import MeusAgendamentos from './components/MeusAgendamentos.vue'
import Teste from './components/Teste.vue'
import Loading from './components/Loading.vue'


Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/cadastro', component: Cadastro},
        {path: '/home', component: PainelUsuario},
        {path: '/perfil', component: Perfil},
        {path: '/meus-agendamentos', component: MeusAgendamentos},
        {path: '/teste', component: Teste},
        {path: '/token/:token', component: Loading}
    ]
})