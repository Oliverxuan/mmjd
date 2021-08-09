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
          img:
            "https://img.alicdn.com/imgextra/i4/2206761970875/O1CN01WBQCav1IKnFceu3y9_!!2206761970875.jpg_760x760Q90s50.jpg_.webp",
          link: "http://m.tb.cn/h.faS7zTF?sm=eac805"
        },
        {
          img:
            "https://img.alicdn.com/imgextra/i4/2206761970875/O1CN01WBQCav1IKnFceu3y9_!!2206761970875.jpg_760x760Q90s50.jpg_.webp",
          link: "http://m.tb.cn/h.faS7zTF?sm=eac805"
        },
        {
          img:
            "https://img.alicdn.com/imgextra/i4/2206761970875/O1CN01WBQCav1IKnFceu3y9_!!2206761970875.jpg_760x760Q90s50.jpg_.webp",
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
