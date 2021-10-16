<template>
  <section>
    <base-card>
      <!-- like this we reference to the name of the slot -->
      <!-- also we can see two ways of reference to the name of the slot
      with "#" or with the "v-slot:" -->
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>
