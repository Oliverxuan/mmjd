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
    </div>
    <div class="btn">
      <button @click="subClick">提交</button>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
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
      console.log(this.isflag);
    }
  }
};
</script>

<style scoped>
.btn {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.btn button {
  font-size: 25px;
  background: rgb(233, 233, 233);
  border: 0;
  border-radius: 5px 5px 5px 5px;
}
.test {
  background-color: rgba(133, 133, 133, 0.342);
}
.test div {
  margin: 2px;

  background-color: rgb(255, 255, 255);
}
.test div div {
  padding-top: 20px;
  font-size: 18px;
  font-weight: 600;
}
.test div label {
  margin: 10px;
  margin-top: 0;
  font-size: 18px;
  font-weight: 400;
}
</style>
