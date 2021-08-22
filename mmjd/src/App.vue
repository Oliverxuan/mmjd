<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/common/mainTabBar/MainTabBar.vue";

export default {
  name: "app",
  components: {
    MainTabBar
  },
  created() {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    console.log("clear!");
  }
};
</script>

<style>
@import "assets/css/base.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
