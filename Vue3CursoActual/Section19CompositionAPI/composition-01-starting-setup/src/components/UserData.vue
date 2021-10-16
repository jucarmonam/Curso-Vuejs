<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <slot></slot>
  </div>
</template>
<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';
export default {
  props: ['firstName', 'lastName'],
  //   computed: {
  //     userName() {
  //       return this.firstName + ' ' + this.lastName;
  //     }
  //   }

  //how setups is called very early it doesn't have
  //acces to this.props however we receive a parameter
  //with the props, so the props object is reactive too
  setup(props, context) {
    const uName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');
    //age.value = 23 //don't make this

    //we can see in context props or attrs defined
    //by us, also we can see slots if we use it
    //and we can also emit methods
    console.log(context);

    onBeforeMount(function() {
      console.log('onBeforeMount');
    });

    onMounted(() => {
      console.log('onMounted');
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    onUpdated(() => {
      console.log('onUpdated');
    });

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });

    onUnmounted(() => {
      console.log('onUnmounted');
    });

    //context.emit('save-data', 1); // this.$emit('save-data',1)

    return {
      userName: uName,
      age
    };
  }
};
</script>
<style lang=""></style>
