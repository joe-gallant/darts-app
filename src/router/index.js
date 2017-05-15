import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Setup from '@/components/Setup'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/setup',
      name: 'Setup',
      component: Setup
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})
