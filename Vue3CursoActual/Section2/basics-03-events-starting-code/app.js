const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    // here we are telling to vue, when name property changes, exceute this method called with the same name
    // we dont return something because we are not to modify our html
    // we dont use this.name or something because the watches method receive the value like a property automatically by Vue
    // This method also can accept 2 arguments like this name(newValue, oldValue)
    // The problem with watchers is that we have to use more code as than computed properties
    // name(value) {
    //   console.log("here");
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },

    // one scenario where watchers shines it's for example we want to reset the counter when it's exceeds 50
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    // Here we can see that with computed properties its more easier the 2 binding with 2 values thah using watchers
    fullname() {
      console.log("Running again...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    // here we can see one problem with vue, if you for example use the method add or reduce that updates one part of the Dom Vue reexecutes this methos toolbar, because maybe this buttons updates or call this function that is in curlybrases {} or in v-bind or v-html for this reason we use a random to see this behavior
    // outputFullname() {
    //   console.log(Running again);
    //   let rand = Math.random();
    //   if (rand > 0.5) {
    //     return "jajajaj";
    //   }
    //   return this.name + " " + "Carmona";
    // },
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Carmona";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    getName(event, lastName) {
      this.name = event.target.value;
    },
    submitForm(e) {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
