/*
轮播图插件：
下载轮播图插件(不要下载最高版本的，因为高版本的使用的是swiper4文档)
npm install vue-awesome-swiper@2.5.4 
vue-awesome-swiper文档：https://github.com/surmon-china/vue-awesome-swiper
https://blog.csdn.net/qq_41108402/article/details/80546626

项目中：
1，先在入口文件（main.js）引入
顺序是先引入，再调用css
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
（这个css路径根据node_modules中的swiper里面的css路径，如果报错，查看node_modules中的swiper路径）
Vue.use(VueAwesomeSwiper);
（使用Vue.use注册一下VueAwesomeSwiper，目的是供全局使用）

2,创建Swiper.vue

3,在首页引入Swiper.vue
import Swiper from '../base/Swiper';路径自己定
（注意：Swiper.vue中导入的是Swiper）
在首页中components注册一下Swiper组件，最后使用<Swiper></Swiper>

*/