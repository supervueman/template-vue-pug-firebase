import * as firebase from 'firebase';

const defaultProfile = {
  firstname: 'Rinat',
  lastname: 'Davlikamov',
  nickname: 'supervueman',
  age: 28,
  avatar: 'avatar.jpg',
  email: ''
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
    /**
     * @function fetchProfile
     * @async
     * @var {Object} profile
     * @var {Object} curProfile
     */
    async fetchProfile({
      commit
    }) {
      const profile = await firebase.firestore().collection("users").doc(localStorage.getItem('uid')).get().catch(err => {
        console.log(err);
      });

      if (profile) {
        const curProfile = profile.data();
        curProfile.id = profile.id
        commit('setProfile', curProfile);
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
      const createProfile = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).catch(err => {
        console.error(err);
        return;
      });

      if (createProfile) {
        localStorage.setItem('uid', createProfile.user.uid);

        await firebase.firestore().collection("users").doc(createProfile.user.uid).set(payload).catch(err => {
          console.log(err);
          return;
        });
      }
    },

    async signIn({
      commit
    }, payload) {
      const profile = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(err => {
        console.error(err);
      });

      console.log(profile)

      localStorage.setItem('uid', profile.uid);
      // commit('setProfile', profile);
    }
  },
  getters: {
    getProfile(state) {
      return state.profile;
    }
  }
};
