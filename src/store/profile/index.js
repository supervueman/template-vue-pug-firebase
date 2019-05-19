const profile = {
  firstname: 'Rinat',
  lastname: 'Davlikamov',
  nickname: 'supervueman',
  age: 28,
  avatar: 'avatar.jpg'
}

export default {
  namespaced: true,
  state: {
    profile: {}
  },
  mutations: {
    setProfile(state, payload) {
      state.profile = payload;
    }
  },
  actions: {
    async fetchProfile({
      commit
    }) {
      commit('setProfile', profile);
    }
  },
  getters: {
    getProfile(state) {
      return state.profile;
    }
  }
};
