//here we paste the logic that repeats in 2 components
//all the components options, data, computed,
//objects, watchers
export default {
  data() {
    return {
      alertIsVisible: false
    };
  },
  methods: {
    showAlert() {
      this.alertIsVisible = true;
    },
    hideAlert() {
      this.alertIsVisible = false;
    }
  }
};
