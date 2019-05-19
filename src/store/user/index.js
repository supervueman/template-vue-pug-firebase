import * as firebase from 'firebase';

export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    /**
     * @function fetchUser
     * @async
     * @param {String} payload user.id
     * @var {Object} response
     * @var {Object} user
     */
    async fetchUser({
      commit
    }, payload) {
      const response = await firebase.firestore().collection("users").doc(payload).get().catch(err => {
        console.error(err);
        return;
      });

      if (response.exists) {
        const user = response.data();
        commit('setUser', user);
      }
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  }
}
