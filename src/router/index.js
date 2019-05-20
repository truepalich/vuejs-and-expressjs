import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import TrackSession from '@/pages/TrackSession'
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
      path: '/track-session',
      name: 'TrackSession',
      component: TrackSession
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
