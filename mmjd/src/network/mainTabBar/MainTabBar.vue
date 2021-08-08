<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/eva">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">测评</div>
      </tab-bar-item>
      <tab-bar-item path="/add">
        <img slot="item-icon" src="~assets/img/tabbar/add2.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/add.svg" alt="" />
        <div slot="item-text">发表</div>
      </tab-bar-item>
      <tab-bar-item path="/store">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">商店</div>
      </tab-bar-item>
      <tab-bar-item path="/me">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../../components/common/tabbar/TabBar.vue";
import TabBarItem from "../../components/common/tabbar/TabBarItem.vue";
export default {
  name: "Maintabbar",

  components: { TabBar, TabBarItem },

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped></style>
