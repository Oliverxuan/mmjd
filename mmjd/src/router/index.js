import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";
import Eva from "@/views/eva/Eva.vue";
import Add from "@/views/add/Add.vue";
import Me from "@/views/me/Me.vue";
import Store from "@/views/store/Store.vue";
import Goods from "@/views/goods/Goods.vue";
import Login from "@/views/login/Login.vue";
import IsLogin from "@/views/login/IsLogin.vue";
import Profile from "@/views/profile/Profile.vue";

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
    path: "/add",
    component: Add
  },
  {
    path: "/store",
    component: Store
  },
  {
    path: "/me",
    component: Me
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
    path: "/islogin",
    component: IsLogin
  },
  {
    path: "/profile",
    component: Profile
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("Authorization");

  next();
  // if (token != null && token != '' && to.path) {

  // }

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
