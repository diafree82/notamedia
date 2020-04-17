import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersList from '../components/UsersList.vue'
import User from '../components/User.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/:page',
    name: 'Index',
    component: UsersList,
    props: true
  },
  {
    path: '/',
    name: 'default',
    component: UsersList
  },
  {
    path: '/user/:id/:name',
    name: 'User',
    component: User,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
