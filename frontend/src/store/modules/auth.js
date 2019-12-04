// Initial State
const state = {
  signedIn: false,
  token: ''
}

const getters = {}

const actions = {}

const mutations = {
  login(state, token) {
    state.token = token
    state.signedIn = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
