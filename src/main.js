import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Users from "./components/Users.vue";
import Home from "./components/Home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/users", component: Users},
  { path: "/", component: Home },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
