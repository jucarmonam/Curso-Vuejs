<template>
  <h3>{{ finalCounter }}</h3>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    //   counter() {
    //     // return this.$store.state.counter * 2;
    //     return this.$store.getters.finalCounter;
    //   }
    //this is a property from vuex that is a method full of
    //computed properties where you can get all the getters from
    // the store only using this and the array that he get with the
    // getteers
    ...mapGetters('numbers', ['finalCounter'])
  }
};
</script>
<style lang=""></style>
