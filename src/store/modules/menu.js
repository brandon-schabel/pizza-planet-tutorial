import { firebaseAction } from 'vuexfire'

const state = {
  menuItems: []
}

const getters = {
  getMenuItems: state => state.menuItems
}

const mutations = {

}

const actions = {
  setMenuRef: firebaseAction(({ bindFirebaseRef }, { ref }) => { 
    bindFirebaseRef('menuItems', ref) // binds firebase "menuItems" db collection to the state
  }),
}

export default {
  state,
  mutations,
  getters,
  actions
}