<template>
  <div>
    <h1 @click="btn">
      Eva
    </h1>
    <h1 @click="nameClick">name:{{ name }}</h1>
  </div>
</template>

<script>
import { moment } from "../../network/moment";
export default {
  name: "Eva",
  data() {
    return {
      name: ""
    };
  },
  created() {},
  components: {},

  directives: {},

  mounted() {
    this.nameClick();
  },

  methods: {
    btn() {
      console.log("1123");
      moment("123").then(res => {
        console.log(res);
      });
    },
    nameClick() {
      console.log("1");
      this.name = window.localStorage.getItem("userName");
      console.log(this.name);
    }
  }
};
</script>

<style scoped></style>
