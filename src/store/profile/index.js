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
    async fetchProfile({
      commit
    }) {
      console.log(localStorage.getItem('uid'))
      firebase.firestore().collection("users").doc(localStorage.getItem('uid')).get().then(doc => {
        console.log(doc.data())
      }).catch(err => {
        console.log(err);
      });
      // console.log(profile, '____Profile')
      // commit('setProfile', profile);
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

        const profile = await firebase.firestore().collection("users").doc(createProfile.user.uid).set(payload).catch(err => {
          console.log(err);
          return;
        });

        commit('setProfile', profile);
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
