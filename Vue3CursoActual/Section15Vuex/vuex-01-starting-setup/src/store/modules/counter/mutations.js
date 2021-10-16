export default {
  //this methods get always the current state as an argument in garante
  //by vue
  increment(state) {
    state.counter = state.counter + 2;
  },
  increase(state, payload) {
    //here we don't see the state from the main store
    // because the state it's local for the module
    console.log(state);
    state.counter = state.counter + payload.value;
  }
};
