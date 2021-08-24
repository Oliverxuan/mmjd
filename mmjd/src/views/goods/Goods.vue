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
    <scroll id="goods" class="content" ref="scroll">
      <img class="img" :src="good.img" alt="" @load="isload" />
      <div class="info">
        <div class="title">
          <div id="star"></div>
          <p class="name">{{ good.name }}</p>
          <div id="star">
            已有：{{ good.starts + 1 }} 位小伙伴已种草
            <span id="heart" :class="isActive" @click="heartC"></span>
          </div>
        </div>
        <div class="how">
          <div class="detil">
            功 效:&thinsp;&thinsp;&thinsp;&thinsp;&emsp;&emsp;{{ good.detil }}
          </div>
          <div class="flag">敏感肤质：{{ isFlag }}</div>
          <div class="type">适合肤质：{{ type }}</div>
          <div class="huse">改善方式：{{ huse }}</div>
        </div>
        <div class="buy">
          <div class="store"><a :href="good.url">推荐商家</a></div>
          <div class="price">RMB: {{ good.price }}</div>
        </div>
        <!-- 发表用户评论 -->
        <div class="moment">
          <div>
            发表评论:
          </div>
          <input class="contents" v-model="content" type="text" />
          <button @click="contentClick">提交评论</button>
        </div>
        <!-- 获取评论 -->
        <div class="getmoment">
          <div>
            获取评论
          </div>
          <div v-for="(item, index) in contentList" class="contentitem">
            <div>评论: {{ item.content }}</div>
            <div>用户：{{ item.name }}</div>
            <div>时间：{{ item.createAt }}</div>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../common/scroll/Scroll.vue";
import Navbar from "../../components/common/navbar/Navbar.vue";
import { changeUserStore, getGoods } from "../../network/goods";
import { PostMoment, GetMoment } from "../../network/moment";

export default {
  name: "Goods",

  components: { Navbar, Scroll },

  directives: {},
  computed: {
    userName() {},
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
    },
    isActive() {
      if (!this.add) {
        return "glyphicon glyphicon-heart";
      } else {
        return "glyphicon glyphicon-heart-empty";
      }
    }
  },

  data() {
    return {
      id: null,
      good: {},
      mis: "1",
      add: true,
      content: "",
      contentList: []
    };
  },
  created() {
    this.id = this.$route.params.id - 1;
    getGoods().then(res => {
      this.good = res[this.id];
    });
    GetMoment(this.id).then(res => {
      this.contentList = res;
    });
  },
  mounted() {},

  methods: {
    contentClick() {
      if (localStorage.getItem("userName")) {
        if (this.content === "" || this.content === null) {
          alert("不能发布空的评论哦");
        } else {
          PostMoment(this.content, this.id).then(res => {
            if (res) {
              GetMoment(this.id).then(res => {
                this.contentList = res;
              });
              alert("发布评论成功！");
            } else {
              alert("发布失败！");
            }
          });
        }
      } else {
        alert("请先登陆再发表评论！");
      }
    },
    back() {
      this.$router.go(-1);
    },
    isload() {
      setTimeout(() => {
        this.$refs.scroll.scroll.refresh();
      }, 200);
    },
    heartC() {
      this.add = !this.add;
      changeUserStore(this.id + 1).then(res => {
        return res;
      });
    }
  }
};
</script>

<style scoped>
.bottom {
  height: 50px;
}
#goods {
  /* background-color: rgba(207, 105, 176, 0.116); */
  background-color: rgba(54, 54, 53, 0.123);
}
.img {
  width: 100%;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.contents {
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.name {
  font-size: 25px;
  color: rgb(243, 59, 114);
  padding-bottom: 0;
  background: rgba(226, 102, 102, 0.198);
  border-radius: 5px 5px 5px 5px;
}
.title {
  padding: 0;
  margin: 0;
  padding-bottom: 10px;
}
.detil {
  background: rgba(226, 102, 102, 0.198);
  padding-bottom: 10px;
  font-size: 18px;
  border-radius: 5px 5px 0px 0px;
}

.buy {
  background: rgba(226, 102, 102, 0.198);
  border-radius: 5px 5px 5px 5px;

  display: flex;
  flex-direction: row;
}
.type {
  background: rgba(226, 102, 102, 0.198);

  padding-bottom: 10px;
}
.flag {
  background: rgba(226, 102, 102, 0.198);

  padding-bottom: 10px;
}
#heart {
  color: rgb(240, 65, 65);
  font-size: 25px;
  margin-right: 140px;
  float: right;
  line-height: 20px;
}
#star {
  color: brown;
  font-size: 15px;
  font-weight: 300;
  background: rgba(226, 102, 102, 0.198);
  border-radius: 5px 5px 5px 5px;
}
.huse {
  margin-bottom: 10px;
  background: rgba(226, 102, 102, 0.198);
  border-radius: 0px 0px 5px 5px;
}
.info {
  padding-left: 20px;
  margin-top: 10px;
  font-size: 18px;
  margin-right: 20px;
}
.price {
  margin-left: 10px;
}
.getmoment {
  background-color: rgb(166, 233, 245);
}
.contentitem {
  margin-top: 10px;
  background-color: #fff;
}
</style>
