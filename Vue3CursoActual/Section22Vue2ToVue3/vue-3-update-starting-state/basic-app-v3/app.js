//in Vue3 we use createApp
const app = Vue.createApp({
  //in vue3 data has to be a method
  data() {
    return {
      message: "This works in Vue 2!",
    };
  },
  methods: {
    changeMessage() {
      this.message = "Will it work in Vue 3?";
    },
  },
});

//in Vue3 we use component directlry with the
//vue instance
app.component("the-button", {
  emits: ["update"],
  template: '<button @click="updateMessage">Click me</button>',
  methods: {
    updateMessage() {
      this.$emit("update");
    },
  },
});

//in Vue3 we use mount instead of "el"
app.mount("#app");
