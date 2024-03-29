export default {
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    return getters.requests.length > 0;
  },
  setRequests(state, payload) {
    state.requests = payload;
  }
};
