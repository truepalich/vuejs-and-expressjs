import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Sessions from '@/pages/Sessions'
import SetAttendance from '@/pages/SetAttendance'
import SetCategories from '@/pages/SetCategories'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sessions',
      name: 'Sessions',
      component: Sessions
    },
    {
      path: '/set-attendance',
      name: 'SetAttendance',
      component: SetAttendance
    },
    {
      path: '/set-categories',
      name: 'SetCategories',
      component: SetCategories
    }
  ]
})
