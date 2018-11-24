<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <CountComponent />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CountComponent from "./components/CountComponent.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    CountComponent
  },
  date() {
    return { a: 1 };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
