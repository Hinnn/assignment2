import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Bookings from '@/components/Bookings'
import Book from '@/components/Book'
import Room from '@/components/Room'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Login from '@/components/Login'
import Logout from '@/components/Logout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bookings',
      name: 'Bookings',
      component: Bookings
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/room',
      name: 'Room',
      component: Room
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
