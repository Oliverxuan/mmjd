<template>
  <div>
    <!-- 导航栏 -->
    <navbar>
      <div class="left" slot="left">
        <span
          class="glyphicon glyphicon-chevron-left"
          @click="backClick"
        ></span>
      </div>
      <div class="center" slot="center">个人信息</div>
    </navbar>
    <!-- 个人信息 -->
    <div class="info">
      <div>用户名称：{{ user.name }}</div>
      <div>肤质：{{ type }}</div>
      <div>皮肤敏感程度：{{ isflag }}</div>
      <div>皮肤状态：{{ fix }}</div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import { GetUser } from "../../network/user";
export default {
  name: "MyInfo",

  components: {
    Navbar
  },

  directives: {},

  data() {
    return {
      user: {
        name: "",
        isflag: "",
        type: "",
        fix: "",
        create: ""
      }
    };
  },
  computed: {
    isflag() {
      if (this.user.isflag === "0") {
        return "非敏感肌肤";
      } else {
        return "敏感肌肤";
      }
    },
    type() {
      if (this.user.type === "H") {
        return "油性皮肤";
      } else if (this.user.type === "M") {
        return "中性皮肤";
      } else {
        return "干性皮肤";
      }
    },
    fix() {
      if (this.user.fix === "0") {
        return "皮肤健康";
      } else {
        return "皮肤损伤需要修复";
      }
    }
  },

  mounted() {},
  created() {
    GetUser().then(res => {
      if (res.isflag === "" || res.isflag === null) {
        alert("您还未做皮肤测试，请先测试！");
        this.$router.push("/skintest");
      }
      this.user = res;
      console.log(res);
    });
  },

  methods: {
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped></style>
