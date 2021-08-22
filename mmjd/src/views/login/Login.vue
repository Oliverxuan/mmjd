<template>
  <div>
    <!-- 导航栏 -->
    <navbar>
      <div class="center" slot="center">
        个人中心
      </div>
    </navbar>
    <!-- 个人信息 -->
    <div id="all">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
          <div class="col-sm-10">
            <input
              type="name"
              class="form-control"
              id="inputEmail3"
              placeholder="UserName"
              v-model="username"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label"
            >密码</label
          >
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="Password"
              v-model="password"
            />
          </div>
        </div>
        <!-- <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <!-- <div class="checkbox">
            <label> <input type="checkbox" /> Remember me </label>
          </div> -->
        <!-- </div>
      </div> -->
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button
              type="submit"
              class="btn btn-default"
              id="logins"
              @click="submitClick"
            >
              登陆
            </button>
            <button
              type="register"
              class="btn btn-default"
              id="logins2"
              @click="registerCilck"
            >
              注册
            </button>
          </div>
          <!-- <button
            type="out"
            class="btn btn-default"
            id="logins3"
            @click="outClick"
          >
            注销
          </button> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { login } from "../../network/login";
import { register } from "../../network/register";
import { mapMutations } from "vuex";
import Navbar from "../../components/common/navbar/Navbar.vue";
export default {
  name: "Login",

  components: {
    Navbar
  },

  directives: {},

  data() {
    return {
      username: "",
      password: "",
      userToken: ""
    };
  },

  mounted() {},

  methods: {
    ...mapMutations(["changeLogin"]),
    registerCilck() {
      console.log("register");
      if (this.username === "" || this.password === "") {
        alert("账号或密码不能为空！");
      } else {
        register(this.username, this.password).then(res => {
          if (res) {
            console.log(res);
            alert("注册成功！");
          } else {
            alert("注册失败！");
          }
        });
      }
    },
    submitClick() {
      if (this.username === "" || this.password === "") {
        alert("账号或密码不能为空！");
      } else {
        login(this.username, this.password)
          .then(res => {
            this.userToken = "Bearer " + res.token;
            this.changeLogin({ Authorization: this.userToken });
            this.$router.push("/home");
            this.$store.commit("saveName", this.username);

            alert(`${this.username}欢迎回来`);
          })
          .catch(error => {
            console.log(error);
            console.log("123");
            alert("账号或密码错误！");
          });
      }
    },
    outClick() {
      console.log("out");
      localStorage.removeItem("Authorization");
      localStorage.removeItem("userName");
      localStorage.removeItem("userId");
      alert("成功注销！");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#all {
  background: rgb(194, 165, 165);
  font-size: 20px;
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
#logins {
  margin: 5px;
}
#logins2 {
  margin: 5px;
}
</style>
