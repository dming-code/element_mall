import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('views/login/Login.vue')
const Home = () => import('views/home/Home.vue')
const HomeWelcome = () => import('views/home/homeChil/HomeWelcome.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/welcome',
    component: Home,
    children: [
      {
        path: 'welcome',
        component: HomeWelcome
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  if(to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if(!token){
    next('/login')
    return
  }
  next()

})

export default router
