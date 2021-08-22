<template>
  <div>
    <navbar>
      <div class="left" slot="left">
        <span
          class="glyphicon glyphicon-chevron-left"
          @click="backClick"
        ></span>
      </div>
      <div class="center" slot="center">技术栈</div>
    </navbar>
    <h4>前端：</h4>
    <h4>
      Html CSS JavaScript Vue Vuex VueRouter Axios Webpack node.js Bootstrap
    </h4>
    <h4>后端：</h4>
    <h4>node.js Koa mysql</h4>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
export default {
  name: "Skintest",

  components: {
    Navbar
  },

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped></style>
