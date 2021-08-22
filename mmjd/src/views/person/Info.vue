<template>
  <div>
    <navbar>
      <div class="left" slot="left">
        <span
          class="glyphicon glyphicon-chevron-left"
          @click="backClick"
        ></span>
      </div>
      <div class="center" slot="center">相关信息</div>
    </navbar>
    <h3>
      本作品仅供比赛使用，不可被用于商业用途。
    </h3>
    <h3>
      本作品的最终解释权归作者所有。
    </h3>
    <h3>
      如有侵权，请告知作者，删除侵权文件。
    </h3>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
export default {
  name: "Info",

  components: {
    Navbar
  },

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped></style>
