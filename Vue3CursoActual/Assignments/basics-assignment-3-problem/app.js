const app = Vue.createApp({
  data() {
    return {
      value: 0,
      //   result: 'not there yet'
    };
  },
  computed: {
    result() {
      if (this.value < 37) {
        return "Not there yet";
      } else if (this.value === 37) {
        return this.value;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    // value(value) {
    //   const that = this;
    //   setTimeout(function () {
    //     console.log("hola");
    //     that.value = 0;
    //     that.verifyNumber();
    //   }, 5000);
    // },

    result() {
      console.log("Watcher executing...");
      const that = this;
      setTimeout(function () {
        that.value = 0;
      }, 5000);
    },
  },
  methods: {
    // verifyNumber() {
    //   if (this.value < 37) {
    //     this.result = "Not there yet";
    //   } else if (this.value === 37) {
    //     this.result = 37;
    //   } else {
    //     this.result = "Too much!";
    //   }
    // },
    add(num) {
      this.value = this.value + num;
      //   this.verifyNumber();
    },
  },
});

app.mount("#assignment");
