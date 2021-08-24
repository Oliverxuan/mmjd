<template>
  <div>
    <!-- 导航栏 -->
    <navbar>
      <div class="center" slot="center">种草</div>
    </navbar>
    <!--  购物车信息 -->
    <div class="store" v-for="item in goods">
      <img class="img" :src="item.img" alt="" />
      <div>{{ item.name }}</div>
      <div>{{ item.price }}</div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import { getUserStore } from "../../network/goods";
export default {
  name: "Store",

  components: {
    Navbar
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
.img {
  width: 20%;
}
</style>
