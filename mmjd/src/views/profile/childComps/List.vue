<template>
  <div>
    <div @click="btnClick">
      <span class="icon">
        <img :src="iconURL(list)" alt="" />
      </span>
      <div class="info">{{ list.info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",

  components: {},

  directives: {},

  data() {
    return {};
  },
  props: {
    list: {}
  },

  mounted() {},

  methods: {
    iconURL(list) {
      return require("assets/img/profile/" + list.icon);
    },
    btnClick() {
      console.log(this.list.info);
      this.$router.push(this.list.url);
    }
  }
};
</script>

<style scoped>
.normal-list {
  background-color: #fff;
  font-size: 15px;
  color: #333;
  margin-top: 15px;
}

.normal-list .item {
  height: 44px;
  line-height: 44px;
  position: relative;
}

.icon img {
  width: 20px;
  height: 20px;
}

.item .icon {
  margin-top: 10px;
  position: absolute;
  left: 16px;
  top: -7px;
}

.item .info {
  margin-left: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding-left: 5px;
}

.item:last-of-type .info {
  border-bottom: none;
}
</style>
