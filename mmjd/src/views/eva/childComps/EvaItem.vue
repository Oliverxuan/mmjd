<template>
  <div class="eva" @click="itemClick">
    <img class="img" :src="item.img" alt="" />
    <div class="info">
      <div class="name">{{ item.name }}</div>
      <div class="contents">
        <div class="username">{{ item.userName }}:</div>
        <div class="content">{{ item.content }}</div>
      </div>
      <div class="others">
        <div class="time">{{ dateFormat(item.createAt) }}</div>
        <div class="start">
          <span class="glyphicon glyphicon-heart"></span>
          <div class="starts">{{ item.starts }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Evaitem",

  components: {},

  directives: {},
  props: {
    item: {}
  },

  data() {
    return {};
  },
  computed: {},
  mounted() {},

  methods: {
    // goodsClick() {
    //   console.log(this.goodsItem.id);
    //   this.$router.push("/goods/" + this.goodsItem.id);
    // }
    itemClick() {
      this.$router.push("/goods/" + this.item.id);
    },
    dateFormat: function(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       * */
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    }
  }
};
</script>

<style scoped>
.eva {
  background-color: rgb(255, 255, 255);
  display: flex;
  margin: 10px;
  min-height: 100px;
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
.username {
  font-size: 14px;
  margin-right: 5px;
}
.img {
  width: 100px;
  height: 100px;
  border-radius: 10px 0px 0px 10px;
}
.content {
  background-color: rgba(5, 5, 5, 0.041);
  border-radius: 10px 10px 10px 10px;
  font-weight: 320;
}
.time {
  font-size: 10px;
  font-weight: 300;
}
.contents {
  margin-top: 10px;
  display: flex;
}
.others {
  margin-top: 10px;
  display: flex;
  line-height: 13px;
  width: 90%;
  justify-content: space-between;
}
.start {
  display: flex;
  line-height: 16px;
  width: 30px;
  justify-content: space-between;

  color: rgb(233, 62, 62);
}
</style>
