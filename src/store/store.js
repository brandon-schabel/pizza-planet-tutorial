import Vue from 'vue'
import Vuex from 'vuex'

import menu from './modules/menu'
import orders from './modules/orders'
import users from './modules/users'

Vue.use(Vuex);


export const store = new Vuex.Store({
  modules: {
    menu,
    orders,
    users
  }
})

/*
using context example
actions: {
  setUser(context, user) {
    // context always us access any methods and properties in the store instance 
    context.commit('userStatus', user) // userStatus is the mutation
  }
}
*/