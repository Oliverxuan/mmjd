<template>
  <div class="goods">
    <goods-item
      v-for="(item, index) in goods"
      :goods-item="item"
      :key="index"
    ></goods-item>
  </div>
</template>

<script>
import GoodsItem from "../../content/goodslist/GoodsItem.vue";
export default {
  name: "Goodslist",

  components: { GoodsItem },

  directives: {},

  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
  background: rgba(185, 185, 185, 0.568);
}
</style>
