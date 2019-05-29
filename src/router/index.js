import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/Home'
import Sessions from '@/pages/Sessions'
import Session from '@/pages/Session'
import LogIndividuals from '@/pages/LogIndividuals'
import SetCategories from '@/pages/SetCategories'

Vue.use(Router)

export default new Router({
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
      path: '/set-categories',
      name: 'SetCategories',
      component: SetCategories
    }
  ]
})
