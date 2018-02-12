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