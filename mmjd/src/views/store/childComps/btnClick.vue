<template>
  <div class="store" @click="goodsClick">
    <img class="img" :src="item.img" alt="" />
    <div class="info">
      <div class="name">{{ item.name }}</div>
      <div class="price">{{ item.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Btnclick",

  components: {},

  directives: {},
  props: {
    item: {}
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    goodsClick() {
      this.$router.push("/goods/" + this.item.id);
    }
  }
};
</script>

<style scoped>
.img {
  width: 100px;
  height: 100px;
  border-radius: 10px 0px 0px 10px;
}
.store {
  background-color: rgb(255, 255, 255);
  display: flex;
  margin: 10px;
  height: 100px;

  border-radius: 10px 10px 10px 10px;
}
.info {
  flex: 1;
  display: flex;
  align-items: flex-start;
  margin-left: 15px;
  justify-content: center;
  flex-direction: column;
}
.name {
  font-size: 16px;
  font-weight: 500;
}
.price {
  font-size: 15px;
  font-weight: 300;
  color: rgb(255, 89, 13);
}
</style>
