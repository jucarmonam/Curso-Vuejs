<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="newUser.username" />
    </div>
    <div>
      <label>Age</label>
      <input type="age" v-model="newUser.age" />
    </div>
    <div>
      <button>Add User</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: {
    "add-user": function(user) {
      if (user.username && user.age) {
        return true;
      } else {
        alert("name or age is missing!");
        return false;
      }
    },
  },
  data() {
    return {
      newUser: {
        username: "",
        age: "",
      },
    };
  },
  methods: {
    submitData() {
      this.$emit("add-user", { ...this.newUser });
      //this.newUser.username = "";
      //this.newUser.age = "";
    },
  },
};
</script>
<style lang=""></style>
