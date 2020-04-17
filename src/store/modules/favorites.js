const state = {
  favorites: []
}

const getters = {
  getFavorites: state => {
    return state.favorites
  }
}

const mutations = {
  addToFavorites(state, object) {
    state.favorites.push(object)
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  },
  removeFromFavorites(state, object) {
    state.favorites = state.favorites.filter(el => el.id !== object.id)
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  },
  initFavorites(state, data) {
    state.favorites = data
  }
}

const actions = {
  loadFavorites({ commit }) {
    commit(
      'initFavorites',
      localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites'))
        : []
    )
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
