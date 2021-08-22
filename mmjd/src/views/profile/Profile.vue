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
        { icon: "message.svg", info: "我的评测", url: "/myeva" },
        { icon: "star.svg", info: "我的种草", url: "/store" },
        { icon: "skin.svg", info: "个人信息", url: "/MyInfo" }
      ],
      serviceList: [
        { icon: "flow.svg", info: "技术栈", url: "/skill" },
        { icon: "info.svg", info: "相关信息", url: "/info" }
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
