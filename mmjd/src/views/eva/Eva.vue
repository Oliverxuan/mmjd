<template>
  <div id="eva">
    <!-- 首页导航栏 -->
    <navbar>
      <div class="center" slot="center">测评</div>
      <!-- <div class="right" slot="right">
        <span class="glyphicon glyphicon-plus"></span>
      </div> -->
    </navbar>
    <scroll class="content" ref="scroll">
      <eva-item></eva-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../common/scroll/Scroll.vue";
import Navbar from "../../components/common/navbar/Navbar.vue";
import EvaItem from "./childComps/EvaItem.vue";
export default {
  name: "Eva",
  data() {
    return {
      name: ""
    };
  },
  created() {},
  components: { Navbar, Scroll, EvaItem },

  directives: {},

  mounted() {},

  methods: {}
};
</script>

<style scoped>
#eva {
  background: rgb(43, 43, 43);
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
