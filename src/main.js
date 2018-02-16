import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import { store } from './store/store.js'
import Accounting from 'accounting-js'
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

Vue.filter('currency', function(val) { // 'currency' is the filter tag, second arg is the function it runs
  return Accounting.formatMoney(val);
})

// Vue.component('global-components', () => import('./components/Menu.vue')) // when called webpack will asynchronously load a component using AJAX


new Vue({
  el: '#app',
  router,
  store,
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



global component example
Vue.component('global-components', {
  template: '<div>A Global Component</div>'
}) // a global component that can be used anywhere in the app in this case using <global-components></global-components>


Vue.component('global-components', function(resolve, reject) {
  setTimeout(function () {
    resolve({
      template: '<div>A global component</div>'
    })
  }, 2000) // loads a global component asynchronously 
})
*/