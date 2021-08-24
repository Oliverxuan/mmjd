<template>
  <div>
    <navbar class="nav">
      <div class="left" slot="left">
        <span
          class="glyphicon glyphicon-chevron-left"
          @click="backClick"
        ></span>
      </div>
      <div class="center" slot="center">护肤品大全</div>
    </navbar>
    <div class="top"></div>
    <goods-list :goods="goods"></goods-list>
  </div>
</template>

<script>
import Scroll from "../../common/scroll/Scroll.vue";
import Navbar from "../../components/common/navbar/Navbar.vue";
import GoodsList from "../../components/content/goodslist/GoodsList.vue";
import { getGoods } from "../../network/goods";

export default {
  name: "Allgoods",

  components: {
    Navbar,
    GoodsList,
    Scroll
  },
  created() {
    this.getGoodsList();
  },

  directives: {},

  data() {
    return {
      goods: []
    };
  },

  mounted() {},

  methods: {
    backClick() {
      this.$router.go(-1);
    },
    getGoodsList() {
      getGoods().then(res => {
        this.goods = res;
      });
    }
  }
};
</script>

<style scoped>
.nav {
  width: 100vw;
  position: fixed;
  z-index: 9;
}
.top {
  height: 44px;
}
</style>
