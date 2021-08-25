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
          <div class="tit">
            <p class="name">{{ good.name }}</p>
            <span id="heart" :class="isActive" @click="heartC"></span>
          </div>
          <div id="star">已有：{{ good.starts + 1 }} 位小伙伴已种草</div>
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
          <input class="contents" v-model="content" type="text" />
          <button class="btn" @click="contentClick">提交评论</button>
        </div>
        <!-- 获取评论 -->
        <div class="getmoment">
          <div v-for="(item, index) in contentList" class="contentitem">
            <div class="infos">
              <div class="us">{{ item.name }}:</div>
              <div class="co">{{ item.content }}</div>
            </div>
            <div class="da">{{ dateFormat(item.createAt) }}</div>
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
import { deleteCheck, downStore, getCheck, upStore } from "../../network/user";

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
      if (this.add) {
        return "glyphicon glyphicon-heart";
      } else {
        return "glyphicon glyphicon-heart-empty";
      }
    }
  },

  data() {
    return {
      gid: null,
      id: null,
      good: {},
      mis: "1",
      add: false,
      content: "",
      contentList: []
    };
  },
  created() {
    this.gid = this.$route.params.id - 1;
    this.id = this.gid + 1;
    console.log(this.gid);
    getGoods().then(res => {
      this.good = res[this.gid];
    });
    GetMoment(this.id).then(res => {
      this.contentList = res;
    });
    getCheck(this.id).then(res => {
      if (res[0]) {
        this.add = true;
      } else {
        this.add = false;
      }
    });
  },
  mounted() {},

  methods: {
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
    },
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
      if (this.add == false) {
        upStore(this.id);
        changeUserStore(this.id).then(res => {
          return res;
        });
      } else {
        downStore(this.id);
        deleteCheck(this.id).then(res => {
          return res;
        });
      }
      this.add = !this.add;
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
  border-radius: 10px 10px 10px 10px;
}
.moment {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 10px;
}

.title {
  padding: 0;
  margin: 0;
  padding-bottom: 10px;
}
.detil {
  background: rgb(253, 253, 253);
  padding-bottom: 10px;
  font-size: 18px;
  border-radius: 5px 5px 0px 0px;
}

.buy {
  background: rgb(253, 253, 253);
  border-radius: 5px 5px 5px 5px;

  display: flex;
  flex-direction: row;
}
.type {
  background: rgb(253, 253, 253);

  padding-bottom: 5px;
}
.flag {
  background: rgb(253, 253, 253);

  padding-bottom: 5px;
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
  background: rgb(253, 253, 253);
  border-radius: 5px 5px 5px 5px;
}
.huse {
  margin-bottom: 5px;
  background: rgb(253, 253, 253);
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

.contentitem {
  margin-top: 10px;
  padding: 5px;
  background-color: #fff;
  border-radius: 10px 10px 10px 10px;
}
.tit {
  display: flex;
  width: 120%;
}
.name {
  flex: 1;

  font-size: 25px;
  color: rgb(243, 59, 114);
  padding-bottom: 0;
  background: rgb(253, 253, 253);
  border-radius: 5px 5px 5px 5px;
}
.infos {
  display: flex;
}
.co {
  margin-left: 8px;
  font-weight: 350;
}
.us {
  font-weight: 500;
}
.da {
  font-size: 10px;
  font-weight: 300;
}
</style>
