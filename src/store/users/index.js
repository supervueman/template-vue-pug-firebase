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
    async fetchUsers({
      commit
    }, payload) {

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
