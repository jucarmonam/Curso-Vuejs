const app = Vue.createApp({
  data() {
    return {
      output: "",
      conOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hola que hace");
    },
    setInput(e) {
      this.output = e.target.value;
    },
    confirmOutput(e) {
      this.conOutput = e.target.value;
    },
  },
});

app.mount("#assignment");
