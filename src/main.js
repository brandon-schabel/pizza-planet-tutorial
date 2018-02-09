import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home},
  { path: '/menu', component: Menu},
]

const router = new VueRouter({ // new vue router instance
  // writing routes is the same as routes: routes in es6
  routes
}) 

new Vue({
  el: '#app',
  render: h => h(App)
})
