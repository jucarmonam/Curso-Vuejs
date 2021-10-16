<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="objectGoal.showGoal">{{ objectGoal.courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="changeShow">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';
export default {
  setup() {
    // const courseGoal = ref('Learn vue3');
    // const showGoal = ref(true);

    // const objectGoal = ref({
    //   courseGoal: 'Learn vue3',
    //   showGoal: true
    // });

    const objectGoal = reactive({
      courseGoal: 'Learn vue3',
      showGoal: true
    });

    function changeShow() {
      // showGoal.value = !showGoal.value;
      //objectGoal.value.showGoal = !objectGoal.value.showGoal;
      objectGoal.showGoal = !objectGoal.showGoal;
    }

    return {
      // courseGoal,
      // showGoal,
      objectGoal,
      changeShow
    };
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
