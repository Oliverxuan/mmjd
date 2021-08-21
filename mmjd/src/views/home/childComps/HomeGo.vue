<template>
  <div id="home-go">
    <div class="left">
      <span
        class="glyphicon glyphicon-eye-open
"
      ></span>
      肤质测评
    </div>
    <div class="center">
      <span
        class="glyphicon glyphicon-gift
"
      ></span>
      护肤品推荐
    </div>
    <div class="right">
      <span class="glyphicon glyphicon-warning-sign"></span> 踩雷避坑
    </div>
  </div>
</template>

<script>
export default {
  name: "Homego",

  components: {},

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped>
#home-go {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left,
.center,
.right {
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  line-height: 50px;
  width: 32%;
  height: 50px;
  margin: 2.5px;
  background: #faababab;
  -webkit-box-shadow: 0px 3px 3px #c8c8c8;
  -moz-box-shadow: 0px 3px 3px #c8c8c8;
  box-shadow: 0px 3px 3px #c8c8c8;

  font-size: 18px;
  display: block;
}
</style>
