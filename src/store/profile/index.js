import * as firebase from 'firebase';

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
    /**
     * @function fetchProfile
     * @async
     * @var {Object} profile
     * @var {Object} curProfile
     */
    async fetchProfile({
      commit
    }) {
      const uid = localStorage.getItem('uid');
      const isUid = uid !== undefined && uid !== null && uid !== '';

      if (isUid) {
        const response = await firebase.firestore().collection("users").doc(uid).get().catch(err => {
          console.error(err);
          return;
        });

        if (response.exists) {
          const profile = response.data();
          profile.id = response.id;
          commit('setProfile', profile);
        }
      }
    },

    /**
     * @function signUp
     * @async
     * @param {Object} payload {email, password}
     * @var {Object} createProfile
     * @var {Object} profile
     */
    async signUp({
      commit
    }, payload) {
      const response = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).catch(err => {
        console.error(err);
        return;
      });

      if (response) {
        localStorage.setItem('uid', response.user.uid);

        await firebase.firestore().collection("users").doc(response.user.uid).set({
          email: payload.email
        }).catch(err => {
          console.log(err);
          return;
        });

        await this.dispatch('profile/fetchProfile');
      }
    },

    /**
     * @function signIn
     * @async
     * @param {Object} payload {email, password}
     * @var {Object} authProfile
     */
    async signIn({
      commit
    }, payload) {
      const response = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(err => {
        console.error(err);
      });

      if (response) {
        localStorage.setItem('uid', response.user.uid);
        await this.dispatch('profile/fetchProfile');
      }
    },

    async logout({
      commit
    }) {
      await firebase.auth().signOut();
      localStorage.removeItem('uid');
      commit('setProfile', {});
    },

    /**
     * @function updateProfile
     * @async
     * @param {Object} payload {firstname, lastname, age}
     */
    async updateProfile({
      commit
    }, payload) {
      await firebase.firestore().collection('users').doc(localStorage.getItem('uid')).set(payload, {
        merge: true
      });
    }
  },
  getters: {
    getProfile(state) {
      return state.profile;
    }
  }
};
