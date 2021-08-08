import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";
import Eva from "@/views/eva/Eva.vue";
import Add from "@/views/add/Add.vue";
import Me from "@/views/me/Me.vue";
import Store from "@/views/store/Store.vue";

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
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
