<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "./network/mainTabBar/MainTabBar.vue";

export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

MainTabBar<style>
@import "assets/css/base.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
