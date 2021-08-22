<template>
  <div>
    <navbar>
      <div class="left" slot="left">
        <span
          class="glyphicon glyphicon-chevron-left"
          @click="backClick"
        ></span>
      </div>
      <div class="center" slot="center">我的测评</div>
    </navbar>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
export default {
  name: "MyEva",

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
