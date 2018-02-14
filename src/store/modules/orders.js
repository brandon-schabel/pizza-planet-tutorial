const state = {
  orders: []
}

const getters = {
  numberOfOrders: state => state.orders.length + 10
}

const mutations = {
  addOrder: (state, orders) => state.orders.push(orders) // pushes to the states "orders" array
}

const actions = {
  
}

export default {
  state,
  mutations,
  getters,
  actions
}