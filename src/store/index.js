import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import profile from './profile';
import users from './users';
import user from './user';

export const store = new Vuex.Store({
  modules: {
    profile,
    users,
    user
  }
});
