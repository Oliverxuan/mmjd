<template>
  <div class="goods-item" @click="goodsClick">
    <img :src="goodsItem.img" alt="" @load="imageload" />
    <div class="goods-info">
      <p>{{ goodsItem.name }}</p>
      <span class="price">RMB:{{ goodsItem.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goodsitem",

  components: {},

  directives: {},
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    imageload() {
      this.$bus.$emit("itemImageLoad");
    },
    goodsClick() {
      this.$router.push("/goods/" + this.goodsItem.id);
    }
  }
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 50px;
  position: relative;
  width: 48%;
  margin-top: 10px;
  margin-bottom: 5px;
  border-radius: 10px 10px 10px 10px;
  -webkit-box-shadow: 3px 3px 3px 2px #c8c8c8;
  -moz-box-shadow: 3px 3px 3px 2px #c8c8c8;
  box-shadow: 3px 3px 3px 2px #c8c8c8;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
  height: 200px;
}

.goods-info {
  font-size: 15px;
  font-weight: 350;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  color: rgba(0, 0, 0, 0.808);
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  margin-left: 20px;
  color: rgba(255, 0, 0, 0.479);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
}
</style>
