<template>
  <div>
    <!-- 导航栏 -->
    <navbar>
      <div class="center" slot="center">种草</div>
    </navbar>
    <!--  购物车信息 -->
    <eva-item></eva-item>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import EvaItem from "../eva/childComps/EvaItem.vue";
export default {
  name: "Store",

  components: {
    Navbar,
    EvaItem
  },

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped></style>
