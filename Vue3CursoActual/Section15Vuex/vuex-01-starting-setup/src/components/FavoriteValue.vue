<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>
<script>
export default {
  computed: {
    counter() {
      // return this.$store.getters.normalizedCounter;

      //here we are using the module with namespaced so we have acces
      // to his getters like this
      return this.$store.getters['numbers/normalizedCounter'];
    }
  }
};
</script>
<style lang=""></style>
