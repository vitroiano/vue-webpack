<template>
  <div id="app">
    <h1>Let's go somewhere!</h1>
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/users/10">Users for Team 10</router-link>
    <router-link to="/users/12">Users for Team 12</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Message from "./components/Message.vue";

export default {
  name: "App"
};
</script>

<style>

</style>
