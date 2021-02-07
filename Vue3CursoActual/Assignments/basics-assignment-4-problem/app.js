const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      paragraphIsVisible: true,
      color: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
  methods: {
    buttonClick() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
      //   if (this.selected) {
      //     this.data = "hidden";
      //   } else {
      //     this.data = "visible";
      //   }
    },
    // setClass(e) {
    //   if (e.target.value === "user1") {
    //     this.data = "user1";
    //   } else if (e.target.value === "user2") {
    //     this.data = "user2";
    //   } else {
    //     this.data = "";
    //   }
    // },
  },
});

app.mount("#assignment");
