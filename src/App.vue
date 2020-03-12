<template>
  <div id="app">
    <app-message></app-message>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Message from "./components/Message.vue";

export default {
  name: "App",
  components: {
    'app-message': Message
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
