import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

//the state is local in this module
export default {
  //with this variable we make that not only the state is local but all
  //the module so if we don't change the code we now don't have acces to
  //this state and his methods, so we have to use his name spaced specyfied
  //in the root state modules section
  namespaced: true,
  state() {
    return {
      counter: 0
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
};
