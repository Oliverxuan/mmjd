<template>
  <div>
    <!-- 商品详情页nav -->
    <navbar>
      <div class="left" slot="left" @click="back">
        <span class="glyphicon glyphicon-chevron-left "></span>
      </div>
      <div class="center" slot="center">面面俱到</div>
    </navbar>

    <!--商品信息  -->
    <scroll class="content" ref="scroll">
      <img class="img" :src="good.img" alt="" @load="isload" />
      <div class="info">
        <div class="title">
          <div id="star"></div>
          <p class="name">商品名：{{ good.name }}</p>
          <div id="star">
            已有：{{ good.starts + 1 }} 位小伙伴已种草
            <span class="glyphicon glyphicon-heart"></span>
          </div>
        </div>
        <div class="detil">{{ good.detil }}</div>
        <div class="flag">{{ isFlag }}</div>
        <div class="type">{{ type }}</div>
        <div class="huse">{{ huse }}</div>
        <div class="store"><a :href="good.url">推荐商家</a></div>
        <div class="price">$: {{ good.price }}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../common/scroll/Scroll.vue";
import Navbar from "../../components/common/navbar/Navbar.vue";
import { getGood } from "../../network/goods";
export default {
  name: "Goods",

  components: { Navbar, Scroll },

  directives: {},
  computed: {
    isFlag() {
      if (this.good.isflag == 1) {
        return "推荐";
      } else {
        return "不推荐";
      }
    },
    type() {
      if (this.good.type == "l") {
        return "干皮适用";
      } else if (this.good.type == "m") {
        return "所有肤质适用";
      } else {
        return "油皮适用";
      }
    },
    huse() {
      if (this.good.huse == "fix") {
        return "修护";
      } else if (this.good.huse == "add") {
        return "滋润";
      } else {
        return "清洁";
      }
    }
  },

  data() {
    return {
      id: null,
      good: {},
      mis: "1"
    };
  },
  created() {
    this.id = this.$route.params.id;
    getGood().then(res => {
      this.good = res.data[this.id - 1];
    });
  },
  mounted() {},

  methods: {
    back() {
      this.$router.go(-1);
    },
    isload() {
      setTimeout(() => {
        this.$refs.scroll.scroll.refresh();
      }, 200);
    }
  }
};
</script>

<style scoped>
.img {
  width: 100%;
  max-height: 300px;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.name {
  font-size: 20px;
  color: rgb(243, 59, 114);
}
#star {
  color: brown;
  font-size: 15px;
  font-weight: 300;
}
.info {
  margin-top: 10px;
  background: rgba(207, 105, 176, 0.233);
}
</style>
