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
import { ref } from 'vue';
import UserAlert from './UserAlert.vue';
import useAlert from '../hooks/alert.js';

export default {
  components: {
    UserAlert
  },
  setup() {
    const alertTitle = ref('Delete Use?');

    //we can pass parameters too
    //here we can see that hooks/composables
    //are better than mixins
    //because we can inmedialaty see where the functions
    //or variables come from
    const [alertIsVisible, showAlert, hideAlert] = useAlert(true);

    //we still have to return something it's not
    //replace with the return of our mixin useAlert
    return { alertIsVisible, showAlert, hideAlert, alertTitle };
  }
};
</script>
