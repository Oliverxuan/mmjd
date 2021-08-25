<template>
  <div id="Store">
    <!-- 导航栏 -->
    <navbar>
      <div class="center" slot="center">种草</div>
    </navbar>
    <!--  购物车信息 -->
    <div v-for="item in goods">
      <btn-click :item="item"></btn-click>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import { getUserStore } from "../../network/goods";
import BtnClick from "./childComps/btnClick.vue";
export default {
  name: "Store",

  components: {
    Navbar,
    BtnClick
  },

  directives: {},

  data() {
    return {
      goods: {}
    };
  },
  created() {
    getUserStore().then(res => {
      this.goods = res;
    });
  },
  mounted() {},

  methods: {}
};
</script>

<style scoped>
#Store {
  height: 100vh;
  background-color: rgba(5, 5, 5, 0.082);
}
.bottom {
  height: 10px;
}
</style>
