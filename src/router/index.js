import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import News from '../views/News.vue'
import Tomar from '../views/Tomar.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import dashboardNews from '../views/admin/dashboardNews.vue'
import dashboardTomar from '../views/admin/dashboardTomar.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Tomar',
    name: 'Tomar',
    component: Tomar
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Account',
    name: 'Account',
    component: Account
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/admin/dashboardNews',
    name: 'dashboardNews',
    component: dashboardNews
  },
  {
    path: '/admin/dashboardTomar',
    name: 'dashboardTomar',
    component: dashboardTomar
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
