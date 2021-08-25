<template>
  <div class="me">
    <navbar>
      <div class="left" slot="left">
        <span
          class="glyphicon glyphicon-chevron-left"
          @click="backClick"
        ></span>
      </div>
      <div class="center" slot="center">我的测评</div>
    </navbar>
    <div v-for="item in contentes">
      <eva-item :item="item"></eva-item>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import { GetUserMoment } from "../../network/moment";
import EvaItem from "../eva/childComps/EvaItem.vue";
export default {
  name: "MyEva",

  components: {
    Navbar,
    EvaItem
  },

  directives: {},
  created() {
    GetUserMoment().then(res => {
      console.log(res);
      this.contentes = res;
    });
  },

  data() {
    return {
      contentes: []
    };
  },

  mounted() {},

  methods: {
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.me {
  height: 100vh;
  background-color: rgba(54, 54, 53, 0.123);
}
.img {
  width: 20%;
}
</style>
