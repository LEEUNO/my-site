import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Works from '@/components/Works'
import About from '@/components/About'
import Contact from '@/components/Contact'
import IntroSequence from '@/components/introSequence/App'
import SignUp from '@/components/SignUp'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/introSequence',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'IntroSequence',
      component: IntroSequence
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

Vue.router = router

export default router
