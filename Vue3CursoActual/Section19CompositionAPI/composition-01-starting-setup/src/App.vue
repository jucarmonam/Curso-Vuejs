<template>
  <section class="container">
    <!-- we can use it with toRefs -->
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->

    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3> -->

    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->

    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" /> -->

      <!-- we can use v-model with ref vairables -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <!-- <input type="text" placeholder="Last Name" v-model="lastName" /> -->
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
//this ref is different from the variables
//reactive is like ref but is explicity for objects
// import { ref, reactive, isReactive, isRef } from 'vue';
// import { reactive, toRefs } from 'vue';
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData
  },
  setup() {
    //const uName = 'Maximilian';
    //it creates a reactive a String and watch this variables
    //when changes, that has to be a const to no rewrite the ref
    //ref creates an object that has a value property
    // const uName = ref('Maximilian');
    // const user = ref({
    //   name: 'Juan Pablo',
    //   age: 21
    // });
    const firstName = ref('');
    const lastName = ref('');
    //using refs of the html with the vue refs
    const lastNameInput = ref(null);
    const uAge = ref(21);

    provide('userAge', uAge);

    //use of watchers
    // watch(uAge, function(newValue, oldValue) {
    //   console.log('Old age: ' + oldValue);
    //   console.log('New age: ' + newValue);
    // });

    //this computed is a ref also but you can't write only read his value
    const uName = computed(function() {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], function(newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
    });

    // const user = reactive({
    //   name: 'Juan Pablo',
    //   age: 21
    // });

    // console.log(uAge, user);
    // console.log(isRef(uAge.value)); //false
    // console.log(isReactive(user.name), user.age); //false 21
    // console.log(isRef(uAge)); //true
    // console.log(isReactive(user), user.age); //true 21

    // setTimeout(() => {
    //   //we use .value to update the value but no to acces to it
    //   // uName.value = 'Max';
    //   // uAge.value = 22;
    //   // user.value.name = 'Juanchis';
    //   // user.value.age = 22;

    //   //with reactive we don't have the extra value ""
    //   user.name = 'Juanchis';
    //   user.age = 22;
    // }, 2000);

    function setNewAge() {
      //user.age = 32;
      uAge.value = 33;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }

    // return {
    //   userName: uName,
    //   age: uAge
    // };

    //converts the properties of the objects in refs or in reactive elements
    // const userRefs = toRefs(user);
    // return {
    //   user,
    //   userName: userRefs.name,
    //   age: userRefs.age
    // };

    return {
      //here we are returning literally a string and a number and no
      //a reactive variable for that we are not going to see the update
      //of this variables, in the other hand the root variables has all
      //the reactivity so we have to return this object
      // userName: user.value.name,
      // age: user.value.age,
      //user: user,
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      // setFirstName,
      // setLastName,
      firstName,
      lastName,
      lastNameInput,
      setLastName
    };
  }
  // provide(){
  //   return { age: this.age}
  // }

  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
