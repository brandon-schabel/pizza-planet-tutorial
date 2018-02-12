import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { routes } from './routes'
Vue.use(VueRouter)



const router = new VueRouter({ // new vue router instance
  // writing routes is the same as routes: routes in es6
  routes,
  mode: 'history', // takes advantage of html5 history mode
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return {
        selector: to.hash // if you use back/forward arrows & change routes in browser, it will saved your scroll position
      }
    }
  }
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



scrollBehavior example
scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 200 // will load page by num of pixels from top
      // you can also use a select for example
      // selector: .btn and it will take you to the first btn in that component
    }
  }
*/