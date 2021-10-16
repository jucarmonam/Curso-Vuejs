import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './modules/counter/index.js';

const store = createStore({
  //with the modules prop we can divide different modules of the store
  // and merged like if all of them was in only one store, in a main store
  // at the same level that this one
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  //mutations are the methods that we always are going to use to modify the state
  mutations: rootMutations, //mutation by it's self dont work with asyncrohous code so, you
  // have to use actions to work with that for example https requests
  // still it's a good practice always use actions, and actions are
  // the conections between components and mutations, so it's the real
  // connection between components and the store
  actions: rootActions,
  // getters are like computed properties defined directly in the store
  // which we can use in any component
  getters: rootGetters
});

export default store;
