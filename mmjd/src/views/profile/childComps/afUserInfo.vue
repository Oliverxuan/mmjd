<template>
  <div class="user-info">
    <img class="avatar" src="~assets/img/profile/avatar.svg" alt="" />
    <div class="info">
      <div class="login">{{ userName }}</div>
      <div class="phone">
        <span>欢迎回来！</span>
      </div>
    </div>
    <div class="arrow" @click="backClick">
      <span class="glyphicon glyphicon-off" id="icv"></span>
      <span>注销登陆</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AfUserInfo",
  data() {
    return {
      userName: window.localStorage.getItem("userName")
    };
  },
  methods: {
    backClick() {
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
.user-info {
  height: 85px;
  background-color: var(--color-tint);
  padding: 6px 15px;

  display: flex;
  color: #fff;
}

.user-info .avatar {
  width: 70px;
  height: 70px;
}

.info {
  padding-left: 15px;
  flex: 0.8;
}

.info .login {
  margin-top: 15px;
  font-size: 20px;
}

.phone img {
  width: 20px;
  height: 30px;
  vertical-align: middle;
  margin-left: -5px;
}

.phone span {
  font-size: 13px;
}

.arrow {
  flex: 0.3;
  line-height: 85px;
}

.arrow img {
  width: 20px;
}
</style>
