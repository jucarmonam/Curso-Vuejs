Vue.createApp({
  el: "#app",
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount("#app");
