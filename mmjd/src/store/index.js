import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem("Authorization")
      ? localStorage.getItem("Authorization")
      : "",
    userName: "",
    userId: ""
  },

  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem("Authorization", user.Authorization);
    },
    saveName(state, userName) {
      state.userName = userName;
      localStorage.setItem("userName", userName);
    },
    saveId(state, userId) {
      state.userId = userId;
      localStorage.setItem("userId", userId);
    }
  }
});

export default store;
