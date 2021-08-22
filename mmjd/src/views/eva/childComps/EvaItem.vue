<template>
  <div class="EI">
    <scroll class="content" ref="scroll">
      <div class="top"></div>
      <div class="item" @click="goodsClick">
        <img
          class="img"
          src="http://img.alicdn.com/imgextra/i1/2200877014436/O1CN01PROwJY1idjXvWRipN_!!2200877014436.jpg"
          alt=""
        />
        <div class="info">
          <div class="title">123</div>
          <div class="moment">123</div>
          <div class="time">2019/08/12</div>
        </div>
      </div>
      <div class="item">
        <img
          class="img"
          src="http://img.alicdn.com/imgextra/i1/2200877014436/O1CN01PROwJY1idjXvWRipN_!!2200877014436.jpg"
          alt=""
        />
        <div class="info">
          <div class="title">123</div>
          <div class="moment">123</div>
          <div class="time">2019/08/12</div>
        </div>
      </div>
      <div class="item">
        <img
          class="img"
          src="http://img.alicdn.com/imgextra/i1/2200877014436/O1CN01PROwJY1idjXvWRipN_!!2200877014436.jpg"
          alt=""
        />
        <div class="info">
          <div class="title">123</div>
          <div class="moment">123</div>
          <div class="time">2019/08/12</div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../common/scroll/Scroll.vue";
export default {
  name: "Evaitem",

  components: { Scroll },

  directives: {},

  data() {
    return {
      goodsItem: {
        id: 1
      }
    };
  },

  mounted() {},

  methods: {
    goodsClick() {
      console.log(this.goodsItem.id);
      this.$router.push("/goods/" + this.goodsItem.id);
    }
  }
};
</script>

<style scoped>
.top {
  height: 5px;
}

.item {
  background: rgb(255, 255, 255);

  padding-top: 10px;
  margin: 5px;
  display: flex;
}
.img {
  max-width: 100px;
}
.info {
  flex: 1;
}
.title {
  margin: 5px;
  font-size: 25px;
}
.moment {
  margin: 5px;
  font-size: 17px;
}
.time {
  margin: 5px;
}
</style>
