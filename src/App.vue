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

</style>
