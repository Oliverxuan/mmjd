<template>
  <div>
    <!-- 首页导航栏 -->
    <navbar class="home-nav-bar">
      <div class="nav-left" slot="left">
        <span class="glyphicon glyphicon-align-justify"></span>
      </div>
      <div class="nav-center" slot="center">面面俱到</div>
      <div class="nac-right" slot="right">
        <span class="glyphicon glyphicon-user"></span>
      </div>
    </navbar>
    <div class="mar-top" />
    <scroll class="content" ref="scroll">
      <home-swiper></home-swiper>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../common/scroll/Scroll.vue";
import Navbar from "../../components/common/navbar/Navbar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";

import { getHomeMultidata } from "../../network/home";

export default {
  name: "Home",
  computed: {},
  data() {
    return {
      // banners: []
    };
  },
  created() {
    // this.getHomeMultidata();
  },
  components: {
    Navbar,
    Scroll,
    HomeSwiper
  },
  methods: {
    //swiper
    // getHomeMultidata() {
    //   getHomeMultidata().then(res => {
    //     this.banners = res.data;
    //   });
    // }
  }
};
</script>

<style scoped>
.home-nav-bar {
  background: #ff9999;
  /*原生滚动 
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
/* .mar-top {
  height: 44px;
} */
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
