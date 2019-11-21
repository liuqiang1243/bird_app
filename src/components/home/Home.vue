<template>
    <div class="c">
        <Header>
            <h3>首页</h3>
        </Header>
        <div class="context">
         <Swiper :swiperImgs="swiperImg"></Swiper>
        </div>
        <div class="hotlist">
            <h3>热门图书</h3>
            <ul>
              <li v-for="(item,index) of bookHotList" :key="index" >
                  <img :src="item.bookImg" :alt="item.bookImg">
                  <p>{{item.bookName}}</p>
                  <p class="price">{{item.bookPrice |mytofixed | price}}</p>
              </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Header from '../base/Header';
import Swiper from '../base/Swiper';
import {getBanner,getHotList} from '../api';
export default {
    name:'Home',
    data(){
      return {
          swiperImg:[],
          bookHotList:[]
          }
    },
  
    components:{
        Header,
        Swiper
    },
    created(){
      this.getn();
      this.getl();
      
    },
    methods:{
      getn(){
        getBanner().then((res)=>{
          this.swiperImg=res.banner;
        });
      },
      getl(){
         getHotList().then((res)=>{
          this.bookHotList=res.hotlist;
        });
      }
    }
}
</script>
<style lang="less" scoped>
.c{
   margin-bottom: 64px;
}
@border-botm: 1px solid #f5f5f5;
 .hotlist{
    width: 90%;
    margin: 0 auto;
     background: #fff;
    h3{
        color: #999;
        padding: 10px;
       border-bottom:  @border-botm;
    }
     ul{
         display: flex;
         flex-wrap: wrap;
       li{
            box-sizing: border-box;
            border-bottom:  @border-botm;
            width: 50%;
           
            p{
                box-sizing: border-box;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                width: 100%;
                padding: 5px;
                color: #232326;
                font-size: 13px;
            }
            .price{
                color:red;
                font-size: 15px;
            }
            &:nth-child(even){
                border-left: @border-botm;
            }
           img{
               width: 100%;
                cursor: pointer;
           }
       }
     }
  }
</style>