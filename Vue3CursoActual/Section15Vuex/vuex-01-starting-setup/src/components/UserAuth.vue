<template>
  <button v-if="!userIsAuthenticated" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
  <!-- we can't acces to this getters because the state from the module store
  is local -->
  <!-- <p>{{ testAuth }}</p> -->
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['userIsAuthenticated', 'testAuth'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>
<style lang=""></style>
