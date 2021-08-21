<template>
  <div id="profile">
    <navbar>
      <div class="center" slot="center">
        个人中心
      </div>
    </navbar>

    <div @click="userClick">
      <user-info v-show="!isToken" />
    </div>
    <af-user-info v-show="isToken" />

    <normal-list-view :list-data="orderList" />
    <normal-list-view :list-data="serviceList" />
  </div>
</template>

<script>
import UserInfo from "./childComps/UserInfo";
import AccountInfo from "./childComps/AccountInfo";
import NormalListView from "./childComps/NormalListView";
import Navbar from "../../components/common/navbar/Navbar.vue";
import AfUserInfo from "./childComps/afUserInfo.vue";

export default {
  name: "Profile",
  components: {
    UserInfo,
    AccountInfo,
    NormalListView,
    Navbar,
    AfUserInfo
  },
  data() {
    return {
      orderList: [
        { icon: "message.svg", info: "我的消息" },
        { icon: "pointer.svg", info: "积分商城" },
        { icon: "vip.svg", info: "会员卡" }
      ],
      serviceList: [
        { icon: "cart.svg", info: "我的购物车" },
        { icon: "shopping.svg", info: "下载购物APP" }
      ]
    };
  },
  computed: {
    isToken() {
      const token = localStorage.getItem("Authorization");
      if (token != null && token != "") {
        return true;
      }
      return false;
    }
  },
  methods: {
    userClick() {
      console.log("userClick!");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
#profile {
  background-color: #57565642;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
