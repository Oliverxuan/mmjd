<template>
  <div class="normal-list">
    <div v-for="(item, index) in listData" :key="index" class="item">
      <list :list="item" />
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
export default {
  components: { List },
  name: "NormalListView",
  props: {
    listData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {}
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
