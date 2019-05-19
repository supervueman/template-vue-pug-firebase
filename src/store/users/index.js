import * as firebase from 'firebase';

export default {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    /**
     * @function fetchUsers
     * @async
     * @var {Object} response
     * @var {Array} users
     */
    async fetchUsers({
      commit
    }) {

      const response = await firebase.firestore().collection("users").get().catch(err => {
        console.error(err);
        return;
      });

      const users = response.docs.map(el => {
        const user = el.data();
        user.id = el.id;
        return user;
      });

      commit('setUsers', users);
    }
  },
  getters: {
    getUsers(state) {
      return state.users;
    }
  }
}
