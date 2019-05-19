import Vue from 'vue';
import VueFire from 'vuefire';
import * as firebase from 'firebase';
import commonComponentsRequire from '@/functions/commonComponentsRequire';
import App from './App.vue';
import router from './routers';
import {
  store
} from './store';
import axios from 'axios';
import '@/assets/sass/index.sass';

Vue.use(VueFire);

commonComponentsRequire();

Vue.config.productionTip = false;
const baseUrl =
  process.env.NODE_ENV === 'development' ?
  process.env.VUE_APP_SERVER_URL_DEV :
  process.env.VUE_APP_SERVER_URL_PROD;

axios.defaults.baseURL = baseUrl;

new Vue({
  router,
  store,
  async created() {
    await firebase.initializeApp({
      apiKey: process.env.VUE_APP_API_KEY,
      authDomain: process.env.VUE_APP_AUTH_DOMAIN,
      databaseURL: process.env.VUE_APP_DATABASE_URL,
      projectId: process.env.VUE_APP_PROJECT_ID,
      storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
      appId: process.env.VUE_APP_APP_ID
    })
    await firebase.auth().onAuthStateChanged((profile) => {
      if (profile) {
        localStorage.setItem('uid', profile.uid);
      }
    })
  },
  render: h => h(App),
}).$mount('#app')
