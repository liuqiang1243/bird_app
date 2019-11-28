<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide"/>
     </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>

  </swiper>
</template>
<script>
  export default {
    name: 'carousel',
    data() {
      return {
        swiperOption:{
                // 参数选项,显示小点
                pagination:'.swiper-pagination',
                //循环
                loop:true,
                //每张播放时长3秒，自动播放
                autoplay:2000,
                //滑动速度
                speed:1000,
                // delay:1000

                observeParents: true,

            },
        swiperSlides: ["../../../static/images/lb1.jpg","../../../static/images/lb2.jpg","../../../static/images/lb3.jpg","../../../static/images/lb4.jpg",]
      }
    }
  }
</script>
<style lang="less" scoped>
 img{
   width: 100%;
   display: block;
 }
  .swiper-container{
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
</style>
