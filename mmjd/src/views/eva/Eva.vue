<template>
  <div id="eva">
    <!-- 首页导航栏 -->
    <navbar>
      <div class="center" slot="center">测评</div>
    </navbar>
    <!-- 评论板块 -->
    <div v-for="item in contentList">
      <eva-item :item="item"></eva-item>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import EvaItem from "./childComps/EvaItem.vue";
import { GetAllMoment } from "../../network/moment";
export default {
  name: "Eva",
  data() {
    return {
      name: "",
      contentList: [],
      nums: 20
    };
  },
  created() {
    GetAllMoment(this.nums).then(res => {
      this.contentList = res;
    });
  },
  components: { Navbar, EvaItem },

  directives: {},

  mounted() {},

  methods: {}
};
</script>

<style scoped>
#eva {
  height: 100vh;
  background-color: rgba(5, 5, 5, 0.082);
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
