<template>
  <section>
    <input v-model="count" />
    <button v-on:click="count += 1;">count up!!!</button>
  </section>
</template>

<script>
export default {
  data() {
    return { count: 0 };
  }
};
</script>

<style></style>
