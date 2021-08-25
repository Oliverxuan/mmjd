<template>
  <div id="app">
    <router-view />

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
  created() {}
};
</script>

<style>
@import "assets/css/base.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
