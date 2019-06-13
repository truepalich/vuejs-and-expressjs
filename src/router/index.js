import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/Home'
import Sessions from '@/pages/Sessions'
import Session from '@/pages/Session'
import LogIndividuals from '@/pages/LogIndividuals'
import SessionFocus from '@/pages/SessionFocus'
import SetCategories from '@/pages/SetCategories'
import Logout from '../pages/Logout'

Vue.use(Router)

export default new Router({
  hashbang: false,
  base: '/',
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'Sessions',
      component: Sessions
    },
    {
      path: '/session',
      name: 'Session',
      component: Session
    },
    {
      path: '/log-individuals',
      name: 'LogIndividuals',
      component: LogIndividuals
    },
    {
      path: '/session-focus',
      name: 'SessionFocus',
      component: SessionFocus
    },
    {
      path: '/set-categories',
      name: 'SetCategories',
      component: SetCategories
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
