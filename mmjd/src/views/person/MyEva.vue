<template>
  <div>
    <navbar>
      <div class="left" slot="left">
        <span
          class="glyphicon glyphicon-chevron-left"
          @click="backClick"
        ></span>
      </div>
      <div class="center" slot="center">我的测评</div>
    </navbar>
    <div class="content" v-for="(item, index) in contentes">
      <div>{{ item.content }}</div>
      <div>{{ item.name }}</div>
      <div>{{ item.createAt }}</div>
      <img class="img" :src="item.img" alt="" />
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import { GetUserMoment } from "../../network/moment";
export default {
  name: "MyEva",

  components: {
    Navbar
  },

  directives: {},
  created() {
    GetUserMoment().then(res => {
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
.img {
  width: 20%;
}
</style>
