<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.img" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "Homeswiper",
  components: {
    Swiper,
    SwiperItem
  },

  directives: {},

  data() {
    return {
      isLoad: false,
      banners: [
        {
          img: require("../../../assets/img/swiper/01.png"),
          link: "http://m.tb.cn/h.faS7zTF?sm=eac805"
        },
        {
          img: require("../../../assets/img/swiper/02.png"),
          link: "http://m.tb.cn/h.faS7zTF?sm=eac805"
        },
        {
          img: require("../../../assets/img/swiper/03.png"),
          link: "http://m.tb.cn/h.faS7zTF?sm=eac805"
        },
        {
          img: require("../../../assets/img/swiper/04.png"),
          link: "http://m.tb.cn/h.faS7zTF?sm=eac805"
        }
      ]
    };
  },

  mounted() {},

  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>
