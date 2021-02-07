const app = Vue.createApp({
  data() {
    return { enteredGoalValue: "", goals: [], caption: "Hide" };
  },
  methods: {
    addGoal() {
      // this.goals.push(this.enteredGoalValue);
      this.goals = [...this.goals, this.enteredGoalValue];
      this.enteredGoalValue = "";
    },
    changeList() {
      if (this.caption === "Hide") {
        this.caption = "Show List";
      } else {
        this.caption = "Hide";
      }
    },
  },
});

app.mount("#assignment");

// teacher solution
// const app = Vue.createApp({
//   data() {
//     return {
//       enteredValue: '',
//       tasks: [],
//       taskListIsVisible: true,
//     };
//   },
//   computed: {
//     buttonCaption() {
//       return this.taskListIsVisible ? 'Hide List' : 'Show List';
//     },
//   },
//   methods: {
//     addTask() {
//       this.tasks.push(this.enteredValue);
//     },
//     toggleTaskList() {
//       this.taskListIsVisible = !this.taskListIsVisible;
//     },
//   },
// });

// app.mount('#assignment');
