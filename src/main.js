import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home},
  { path: '/menu/', component: Menu},
  { path: '*', redirect: '/' } // any invalid routes will redirect to home, otherwise you could create a 404 component
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