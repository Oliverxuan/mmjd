<template>
  <div class="home">
    <!-- 首页导航栏 -->
    <navbar class="home-nav-bar">
      <div class="nav-center" slot="center">面面俱到</div>
      <!-- <div class="nac-right" slot="right" @click="userClick">
        <span class="glyphicon glyphicon-user"></span>
      </div> -->
    </navbar>
    <div class="mar-top" />
    <scroll class="content" ref="scroll">
      <!-- 首页轮播图 -->
      <home-swiper />
      <!-- 首页快捷栏 -->
      <home-go></home-go>
      <!-- 个性推荐 -->
      <div class="person">最 新 测 评</div>
      <eva-item></eva-item>
      <div class="person">个 性 推 荐</div>
      <!-- 商品展示列表 -->
      <goods-list :goods="goods"></goods-list>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../common/scroll/Scroll.vue";
import Navbar from "../../components/common/navbar/Navbar.vue";
import GoodsList from "../../components/content/goodslist/GoodsList.vue";
import HomeGo from "./childComps/HomeGo.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import { getGoods } from "../../network/goods";
import EvaItem from "../eva/childComps/EvaItem.vue";

export default {
  name: "Home",
  computed: {},
  data() {
    return {
      goods: []
    };
  },

  mounted() {
    this.$bus.$on("itemImageLoad", () => {
      this.$refs.scroll.scroll.refresh();
    });
  },
  created() {
    // this.getHomeMultidata();
    this.getGoodsList();
  },
  beforeDestroy() {},
  components: {
    Navbar,
    Scroll,
    HomeSwiper,
    HomeGo,
    GoodsList,
    EvaItem
  },
  methods: {
    getGoodsList() {
      getGoods().then(res => {
        this.goods = res;
      });
    },
    userClick() {
      this.$router.push("/profile");
    }
  }
};
</script>

<style scoped>
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.person {
  text-align: center;
  font-size: 20px;
  width: 100%;
  padding: 5px;
}
</style>
