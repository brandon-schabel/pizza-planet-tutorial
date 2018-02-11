import Vue from 'vue'
import VueRouter from 'vue-router'

// app components
import About from './components/About'
import Admin from './components/Admin'
import App from './App.vue'
import Contact from './components/Contact'
import Delivery from './components/Delivery'
import History from './components/History'
import Home from './components/Home'
import Menu from './components/Menu'
import OrderingGuide from './components/OrderingGuide.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'homeLink', component: Home},
  { path: '*', redirect: '/' }, // any invalid routes will redirect to home, otherwise you could create a 404 component
  {path: '/about',  name: 'aboutLink', component: About, children: [
    { path: '/contact', name: 'contactLink', component: Contact },
    { path: '/delivery', name: 'deliveryLink', component: Delivery }, 
    { path: '/history', name: 'historyLink', component: History },
    { path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide }
  ]},
  { path: '/admin', name: 'adminLink', component: Admin, beforeEnter: (to, from, next) =>{
    alert('This area is for authorized users only, please login to continue.')
    next()
  }},
  { path: '/menu', name: 'menuLink', component: Menu}
]

const router = new VueRouter({ // new vue router instance
  // writing routes is the same as routes: routes in es6
  routes,
  mode: 'history' // takes advantage of html5 history mode
}) 

new Vue({
  el: '#app',
  router,  
  render: h => h(App)
})

/* before each example
router.beforeEach((to,from,next) => {
  // console.log('nav changed')
  // next() next() allows the route to load the component, 
  // if false is passed as arg to next, then it doesn't confirm the nav
  if(to.path === '/menu') {
    next()
  } else {
    next(false)
  }
}) there is also afterEach, args are to and from
*/