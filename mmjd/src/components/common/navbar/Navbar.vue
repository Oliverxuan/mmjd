<template>
  <div>
    <div id="nav-bar" class="nav">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
    <div class="bo"></div>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  components: {},

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
#nav-bar {
  background: #ff9999;
  display: flex;
  height: 44px;
  align-items: center;
  text-align: center;
  box-shadow: 0 1px 1px rgba(150, 150, 150, 0.8);
  font-size: 20px;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
  font-weight: 300;
}
.bo {
  height: 44px;
}
</style>
