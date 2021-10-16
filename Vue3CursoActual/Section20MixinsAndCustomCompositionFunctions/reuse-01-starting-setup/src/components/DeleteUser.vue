<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert.js';

export default {
  components: {
    UserAlert
  },
  //here we are using a data options but in the mixins also we have this
  //however both merge and we can used it separetely but like it was only one
  //but this components option rewrites the mixins so if we have the same data
  //in both the component option wins no the mixin
  data() {
    return {
      alertTitle: 'Delete the user?',
      alertIsVisible: true
    };
  },
  mixins: [alertMixin]
};
</script>
