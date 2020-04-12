import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioDetalhe from  './components/usuario/UsuarioDetalhe'
import UsuarioLista from  './components/usuario/UsuarioLista'
import UsuarioEditar from  './components/usuario/UsuarioEditar'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name:'inicio',
            component: Inicio
        },
        {
            path: '/usuario',
            component: Usuario,
            props: true,
            children: [
                { path: '', component: UsuarioLista },
                { path: ':id', component: UsuarioDetalhe, props: true },
                { path: ':id/editar', name:'editarUsuario', component: UsuarioEditar, props: true }
            ]
        }
    ]
})