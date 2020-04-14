import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/Inicio'
// import Usuario from './components/usuario/Usuario'
import UsuarioDetalhe from  './components/usuario/UsuarioDetalhe'
// import UsuarioLista from  './components/usuario/UsuarioLista'
// import UsuarioEditar from  './components/usuario/UsuarioEditar'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'

// Buscando componente de maneira tardia
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

const UsuarioLista = () => import( /* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return 
        } else if (to.hash) {
            return { selector: to.hash }
        } else{
            return { x: 0, y: 1000 }
        }
    },
    routes: [
        {
            path: '/',
            name:'inicio',
            // component: Inicio
            components: {
                default: Inicio,
                menu: Menu
            }
        },
        {
            path: '/usuario',
            // component: Usuario,
            components: {
                default: Usuario,
                menu: MenuAlt,
                menuInferior: MenuAlt
            },
            props: true,
            children: [
                { path: '', component: UsuarioLista },
                { path: ':id', component: UsuarioDetalhe, props: true },
                { path: ':id/editar', name:'editarUsuario', component: UsuarioEditar, props: true }
            ]
        },
        {
            path: '/redirecionar',
            redirect: '/usuario'
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})