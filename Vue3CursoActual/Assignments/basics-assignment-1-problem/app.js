const app = Vue.createApp({
  data() {
    return {
      name: "Juan Pablo",
      age: 20,
      url:
        "https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?resize=940,530",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
