export default {
  //with rootState and rootGetters we have acces to the root state
  // testAuth(state, _, rootState, rootGetters) {
  testAuth(state) {
    return state.isLoggedIn;
  },
  finalCounter(state) {
    return state.counter * 3;
  },
  normalizedCounter(_, getters) {
    //const finalCounter = state.counter * 3;
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  }
};
