<template>
  <div>
    <!-- we can check if a slot was used or not and save recurses by not
      this header -->
    <header v-if="$slots.header">
      <!-- when we have mora than 1 slor we can name it and let on witout name 
        by default-->
      <slot name="header">
        <!-- we can put also default content that only render if when you use
          this slot you doesnt put anything inside -->
        <!-- <h2>The Default</h2> -->
      </slot>
    </header>
    <!-- slot works for render html exactly in this side dinamically
    and for example if we want to reuse css this is the place to do it -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$slots);
    console.log(this.$slots.header);
    console.log(this.$slots.default);
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
