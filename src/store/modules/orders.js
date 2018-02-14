import { firebaseAction } from 'vuexfire'

const state = {
  orders: []
}

const getters = {
  getOrders: state => state.orders,
  numberOfOrders: state => state.orders.length + 10
}

const mutations = {
  addOrder: (state, orders) => state.orders.push(orders) // pushes to the states "orders" array
}

const actions = {
  setOrdersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('orders', ref)
  })
}

export default {
  state,
  mutations,
  getters,
  actions
}