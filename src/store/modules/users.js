const state = {
  currentUser: null
}

const getters = {
  currentUser: state => state.currentUser // grab currentUser from state
}

const mutations = {
  userStatus (state, user) {
    if (user) {
      state.currentUser = user.email;
    } else {
      state.currentUser = null
    }
  }
}

const actions = {
  setUser ({ commit }, user) {
    commit('userStatus', user) // userStatus is the mutation
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}