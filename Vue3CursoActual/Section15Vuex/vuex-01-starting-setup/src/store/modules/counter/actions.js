export default {
  // always get a object called context, and we can called exacttly
  //like the mutations and it's a good practise
  increment(context) {
    setTimeout(function() {
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    console.log(context);
    context.commit('increase', payload);
  },
  login() {}
};
