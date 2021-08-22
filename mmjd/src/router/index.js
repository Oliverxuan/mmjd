import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";
import Eva from "@/views/eva/Eva.vue";
import Store from "@/views/store/Store.vue";
import Goods from "@/views/goods/Goods.vue";
import Login from "@/views/login/Login.vue";
import Profile from "@/views/profile/Profile.vue";
import AllGoods from "@/views/person/AllGoods.vue";
import Info from "@/views/person/Info.vue";
import MyEva from "@/views/person/MyEva.vue";
import MyInfo from "@/views/person/MyInfo.vue";
import PersonGoods from "@/views/person/PersonGoods.vue";
import Skill from "@/views/person/Skill.vue";
import SkinTest from "@/views/person/SkinTest.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/eva",
    component: Eva
  },
  {
    path: "/store",
    component: Store
  },

  {
    path: "/goods/:id",
    component: Goods
  },
  {
    path: "/login",
    component: Login
  },

  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/allgoods",
    component: AllGoods
  },
  {
    path: "/Info",
    component: Info
  },
  {
    path: "/myeva",
    component: MyEva
  },
  {
    path: "/myinfo",
    component: MyInfo
  },
  // {
  //   path: "/myinfo",
  //   component: MyInfo
  // },
  {
    path: "/persongoods",
    component: PersonGoods
  },
  {
    path: "/skill",
    component: Skill
  },
  {
    path: "/skintest",
    component: SkinTest
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("Authorization");
  if (token === "" || (token === null && to.path === "/skintest")) {
    alert("请先登陆！");
    next("/login");
  }

  next();

  // // if (to.path === "/login" || to.path === "/home" || to.path === "/") {
  // //   next();
  // // } else {
  // //   if (token === null || token === "") {
  // //     alert("请先登陆");
  // //     next("/login");
  // //   } else {
  // //     next();
  // //   }
  // // }
});

export default router;
