<template>
  <base-container v-if="userIsAuthenticated" title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    ...mapGetters(['userIsAuthenticated'])
  },
  methods: {
    addOne() {
      // this.$store.commit('increment', { value: 10 });
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // });

      //to call the actions from the vuex store we "dispatch" an
      //action
      // this.$store.dispatch('increment', { value: 10 });
      this.$store.dispatch({
        //like this we defined and dispatch with a module with namespaced
        type: 'numbers/increase',
        value: 10
      });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
