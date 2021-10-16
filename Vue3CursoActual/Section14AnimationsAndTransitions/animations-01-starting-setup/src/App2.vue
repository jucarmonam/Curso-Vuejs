<template>
  <div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- in general we should olny have 1 child inside transition component -->
    <!-- and he would add some css clases that we define down -->
    <!-- we can change the default name with the "prop" name=  to use-->
    <!-- multiple diferent transitions -->
    <!-- also you can define thw whole name of the class with the prop of
    the same name and use whatever name class -->
    <!-- <transition enter-to-class="some-class"> -->
    <!-- we can tell directly to the trnsition component that we are not going to use
    css or css animation or transition, so we only use js, 
    with the :css prop and that can help for vue don't search 
    the respected classes, improving the
    performance -->
    <transition
      name="para"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toogleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <!-- only in this case when only one of the 2 elements would be rendered
    to the DOM we can have more of one child root element, but it only 
    works with v-if v-else not twice v-if
    also the mode allow us to define if render something firts, in this
    case the out execute after the in so we don't see the 2 buttons in the
    screen one dessapearing and one appearing-->
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <!-- here we have a problem because insice base-modal there are 2 root elements
  and vue doesn't know to who apply the animation -->
  <!-- so we can't add the transition component here -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue';
export default {
  components: {
    UsersList
  },
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
