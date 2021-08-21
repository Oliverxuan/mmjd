<template>
  <div>
    <h1>name:{{ userName }}</h1>
    <h1>type:{{ userType }}</h1>
    <h1>moment:{{ userMoment }}</h1>
  </div>
</template>

<script>
export default {
  name: "IsLogin",

  components: {},

  directives: {},

  data() {
    return {
      userName: window.localStorage.getItem("userName"),
      userType: "1",
      userMoment: "2"
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped></style>
