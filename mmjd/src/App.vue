<template>
  <div id="app">
    <!-- <keep-alive exclude="Goods,Eva"> -->
    <router-view />
    <!-- </keep-alive> -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/common/mainTabBar/MainTabBar.vue";

export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
