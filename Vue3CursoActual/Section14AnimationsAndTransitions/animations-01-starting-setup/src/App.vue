<template>
  <!-- animating routes in vue 3 it's like this, we use a 
  v-slot prop whre you get the component that actually 
  is getting render in the DOM -->
  <!-- When animating route changes as shown in the previous lecture, 
  there's one important thing you have to keep in mind:
  Your route components must NOT have multiple root elements! -->
  <router-view v-slot="slotProps">
    <!-- <transition name="route" mode="out-in"> -->
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    enterCancelled(el) {
      console.log(el);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log('beforeEnter');
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          //done it's used to say vue that when we call this method
          //we have finished all the execution that we want in this
          //state of the transition
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          //done it's used to say vue that when we call this method
          //we have finished all the execution that we want in this
          //state of the transition
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave');
      console.log(el);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toogleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* we specify what properties we want to animate */
  /* any chages apply to transform would be animated */
  /* we have to provide also a time */
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* propertie to move the shape and work together with transition */
  /* transform: translateX(-150px); */

  /* forwards is for the final state 100% keep like the final state */
  animation: slide-fade 0.3s ease-out forwards;
}

/* vue classes
default names: 
.v-enter-from
.v-enter-active {
.v-enter-to {
.v-leave-from {
.v-leave-active {
.v-leave-to { */

/*
.para-enter-from {
   opacity: 0;
  transform: translateY(-30px); 
}

.para-enter-active {
   transition: all 0.3s ease-out; 
  animation: slide-scale 2s ease-out;
}

.para-enter-to {
   opacity: 1;
  transform: translateY(0); 
}

.para-leave-from {
   opacity: 1;
  transform: translateY(0); 
}

.para-leave-active {
   transition: all 0.3s ease-in; 
  animation: slide-scale 0.3s ease-out;
}

.para-leave-to {
   opacity: 0;
  transform: translateY(-30px); 
}
*/

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.route-enter-from {
}

.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}

.route-enter-to {
}

.route-leave-active {
  animation: slide-scale 0.4s ease-in;
}

/* here we can define in detail how the anymation would be */
@keyframes slide-scale {
  0% {
    /* scale is for the size of the figure where 1 is the original size */
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.5);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
