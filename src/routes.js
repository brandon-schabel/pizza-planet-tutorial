import About from './components/About'
import Admin from './components/Admin'
import Contact from './components/Contact'
import Delivery from './components/Delivery'
import History from './components/History'
import Home from './components/Home'
import Menu from './components/Menu'

import OrderingGuide from './components/OrderingGuide.vue'

export const routes = [
  { path: '/', 
    name: 'homeLink', 
    components: {
      default: Home,
      "ordering-guide": OrderingGuide, // passing a name and component to the page at '/', if you go to App, you will see <router-view name="ordering-guide">
      "delivery": Delivery,
      "history": History
    }},
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



/****** Dynamic Imports ******/
// const About = () => import(/* webpackChunkName: "footer-group" */ './components/About') // dynamic import
// this makes it so it only loads this component when we visit the route, 
// if you go to the network tab in developer tools and click on these dynmaic routes
// you will see additional build files.. ex. 1.build.js 2.build.js, so it doesnt download everything at once
 
// const Admin = () => import(/* webpackChunkName: "footer-group" */ './components/Admin')
// anything with the comment webpackChunName: "footer-group" will be grouped together in a bundle by webpack,
// this is used for combining mutliple components that may rely on eachother into one bundle.
// if you go to network tab in browser you will see if you go to admin, then about there will only be one bundle

// const Menu = () => import('./components/Menu')