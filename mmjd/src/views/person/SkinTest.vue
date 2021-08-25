<template>
  <div id="test">
    <navbar>
      <div class="left" slot="left">
        <span
          class="glyphicon glyphicon-chevron-left"
          @click="backClick"
        ></span>
      </div>
      <div class="center" slot="center">肤质自测</div>
    </navbar>
    <div class="test">
      <div>
        <div>1.时常皮肤刺痒，泛红或出现过敏现象：</div>
        <label
          ><input
            type="radio"
            v-model="isflag"
            name="isflag"
            value="Y"
          />是</label
        >
        <label
          ><input
            type="radio"
            v-model="isflag"
            name="isflag"
            value="N"
          />否</label
        >
      </div>
      <div>
        <div>2.皮肤通常比较干燥，感觉缺少水分:</div>
        <label
          ><input type="radio" v-model="low" name="low" value="Y" />是</label
        >
        <label
          ><input type="radio" v-model="low" name="low" value="N" />否</label
        >
      </div>
      <div>
        <div>3.皮肤感觉良好，并没有很油很缺水的感觉：</div>
        <label
          ><input
            type="radio"
            v-model="middle"
            name="middle"
            value="Y"
          />是</label
        >
        <label
          ><input
            type="radio"
            v-model="middle"
            name="middle"
            value="N"
          />否</label
        >
      </div>
      <div>
        <div>4.皮肤经常出油，一整天感觉很油腻:</div>
        <label
          ><input type="radio" v-model="high" name="high" value="Y" />是</label
        >
        <label
          ><input type="radio" v-model="high" name="high" value="N" />否</label
        >
      </div>
      <div>
        <div>5.皮肤状态很不好(起痘，晒伤...)需要修复：</div>
        <label
          ><input type="radio" v-model="fix" name="fix" value="Y" />是</label
        >
        <label
          ><input type="radio" v-model="fix" name="fix" value="N" />否</label
        >
      </div>
      <span class="btn">
        <button @click="subClick">提交</button>
      </span>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import { ChangeUserSkin } from "../../network/user";
export default {
  name: "Skintest",

  components: {
    Navbar
  },

  directives: {},

  data() {
    return {
      isflag: "N",
      low: "N",
      middle: "N",
      high: "N",
      fix: "N"
    };
  },

  mounted() {},

  methods: {
    backClick() {
      this.$router.go(-1);
    },
    subClick() {
      let type, flag, fix;
      if (this.isflag === "Y") {
        flag = 1;
      } else {
        flag = 0;
      }
      if (this.high === "Y") {
        type = "H";
      } else if (this.middle === "Y") {
        type = "M";
      } else {
        type = "low";
      }
      if (this.fix === "Y") {
        fix = 1;
      } else {
        fix = 0;
      }

      ChangeUserSkin(flag, type, fix).then(res => {
        if (res) {
          alert("提交成功!");
          this.$router.push("/home");
        } else {
          alert("提交失败！");
        }
      });
    }
  }
};
</script>

<style scoped>
.btn button {
  font-size: 25px;
  font-weight: 300;
  background: rgba(209, 209, 209, 0.329);
  border: 0;
  border-radius: 5px 5px 5px 5px;
}
.test {
  padding-top: 10px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.048);
}
.test div {
  margin: 8px;
  margin-top: 0;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px 10px 10px;
}
.test div div {
  padding-top: 20px;
  font-size: 16px;
  font-weight: 500;
}
.test div label {
  margin: 10px;
  margin-top: 0;
  font-size: 17px;
  font-weight: 300;
}
.btn {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
