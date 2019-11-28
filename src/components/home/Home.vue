<template>
    <div class="c">
<!--header首页-->
      <header class="head">
<!--        <div>-->
          <div class="top_head">
            <a><img src="../../components/home/images/top.jpg"  id="userhead" alt=""/></a>
            <div class="div-left">
              <a>北京</a>
              <a>多云8&#176c</a>
            </div>
            <form  class="box-ipt">
              <i class="iconfont icon-sousuokuang"></i>
              <input type="text" placeholder="张亮麻辣烫">
              <i class="iconfont icon-microphone"></i>
            </form>
            <i class="iconfont  icon-jiahao"></i>
          </div>
<!--        </div>-->
      </header>
<!-- 轮播图------>
        <div class="context">
         <Swiper></Swiper>
        </div>
<!-- 导航列表------>
  <div class="center-box">
  <div>
    <router-link to=""  class="center-a">
      <i class="iconfont icon-meishi  "></i>
      <p>美食</p>
    </router-link>
    <router-link to=""  class="center-a">
      <i class="iconfont icon-dianying"></i>
      <p>电影/演出</p>
    </router-link>
    <router-link to=""  class="center-a">
      <i class="iconfont icon-jiudian"></i>
      <p>酒店/住宿</p>
    </router-link>
    <router-link to=""  class="center-a">
      <i class="iconfont icon-xiuxian"></i>
      <p>休闲/娱乐</p>
    </router-link>
    <router-link to=""  class="center-a">
      <i class="iconfont icon-waimai- "></i>
      <p>外卖</p>
    </router-link>
   </div>
    <div>
      <router-link to=""  class="center-a">
        <i class="iconfont icon-car"></i>
        <p>打车</p>
      </router-link>
      <router-link to=""  class="center-a">
        <i class="iconfont icon-40"></i>
        <p>丽人/美发</p>
      </router-link>
      <router-link to=""  class="center-a">
        <i class="iconfont icon-lvyou"></i>
        <p>周边游/旅游</p>
      </router-link>
      <router-link to=""  class="center-a">
        <i class="iconfont icon-daigou"></i>
        <p>跑腿/代购</p>
      </router-link>
      <router-link to=""  class="center-a">
        <i class="iconfont icon-huochepiao "></i>
        <p>火车票/机票</p>
      </router-link>
    </div>
    <div>
      <router-link to=""  class="center-a">
        <i class="iconfont icon-shuiguo  "></i>
        <p>免费领取水果</p>
      </router-link>
      <router-link to=""  class="center-a">
        <i class="iconfont icon-daishu"></i>
        <p>袋鼠快跑</p>
      </router-link>
      <router-link to=""  class="center-a">
        <i class="iconfont icon-hongbao"></i>
        <p>红包签到</p>
      </router-link>
      <router-link to=""  class="center-a">
        <i class="iconfont icon-chaoshi"></i>
        <p>送药上门</p>
      </router-link>
      <router-link to=""  class="center-a">
        <i class="iconfont icon-shuangsechangyongtubiao-"></i>
        <p>更多</p>
      </router-link>
    </div>
  </div>
<!-----详情页面----->
        <div class="hotlist">
            <ul>
              <li v-for="(item,index) of bookHotList" :key="index" @click="fn11(item)">
                  <img :src="item.bookImg" :alt="item.bookImg" class="imget">
                  <p>{{item.bookName}}</p>
                  <p><span>{{item.bookfen}}</span><span>{{item.bookInfo}}</span></p>
                  <p><span>人均</span><span>{{item.bookPrice|add}}</span>|<span>{{item.bookyue}}</span></p>
              </li>
            </ul>
        </div>
<!--公共底部----->
   <footer1></footer1>
    </div>
</template>
<script>
import Swiper from '../lunbo/Swiper';
import {getHotList} from '../../api';
import footer1 from '../../foooter/footer'
export default {
    name:'Home',
    data(){
      return {
          swiperImg:[],
          bookHotList:[]
          }
    },
  filters:{
    add(vals){
      return "￥"+vals;
    }
  },
    components:{
        Swiper,
        footer1,
    },
    created(){//初始化之后
      this.getl();
    },
    methods:{
       getl(){
         getHotList().then((res)=>{
          this.bookHotList=res.hotlist;//获取到hotlist.json的数据
         });
      },
      fn11(q){
         //传值
         this.$router.push({path:"/xq",query:{xq:q}})
      }
     }
}
</script>
<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
body{
  background: #f5f5f5;
  position: relative;
  ul{
    list-style:none;
  }
}
a{
  text-decoration: none;
}
.c{
  margin-bottom: 64px;
}
.head{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 35px;
  text-align: center;
  background:#FFCC0C;
  color: #fff;
  z-index: 2;
  border-bottom:  @border-botm;
}
.top_head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  color: #999;
  width: 120px;
}
#userhead{
  position: absolute;
  top: 6px;
  left: 22px;
  right: 0;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  text-align: center;
  background:#FFCC0C;
  color: #fff;
  z-index: 2;
}
.div-left{
  flex: 1;
  text-align: center;
  display: block;
  box-sizing: border-box;
}
.div-left>a:nth-of-type(1){
  display: block;
  width:100px;
  font-size: 10px;
  color: #00000E;
  background-position: 50% 50%;
  margin-left: 15px;
}
.div-left>a:nth-of-type(2){
  display: block;
  width:100px;
  font-size: 5px;
  color: #00000E;
  background-position: 50% 50%;
  margin-left: 18px;
}
.box-ipt{
  position: absolute;
  width:55%;
  height: 20px;
  background: whitesmoke;
  left:100px;
  border-radius: 4px;
}
.box-ipt>i:nth-of-type(1){
  position: absolute;
  left: 0;
  bottom: 1px;
}
.box-ipt>i:nth-of-type(2){
  position: absolute;
  right: 0;
  top:2px;
}
input{
  position: absolute;
  top:5px;
  width: 88%;
  font-size: 10px;
  left: 15px;
  outline: none;
  border: none;
}
.top_head>i:nth-of-type(1){
  position: absolute;
  right:25px;
  color: #00000E;
}
.context{
  margin-top: 20px;
  width: 100%;
}
@border-botm: 1px solid #f5f5f5;
.center-box{
  div{
    width: 100%;
    display: flex;
  }
}
.center-a{
  flex: 1;
  text-align: center;
  display: block;
  box-sizing: border-box;
  padding: 3px 1px;
  font-size: 6px;
}
.center-a i{
  display: block;
  background-position: 50% 50%;
  background-size:contain;
  background-repeat: no-repeat;
  font-size: 20px;
  padding: 2px;
  border:1px solid #FFCC0C;
  border-radius: 5px;
  background: #FFCC0C;
  color:green;
}
 .hotlist{
     width: 100%;
     display: flex;
     background: #fff;
     text-align: center;
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
         p:nth-of-type(2) span:nth-of-type(1){
           color:red;
           margin-right:7px;
         }
         p:nth-of-type(2) span:nth-of-type(2){
           color: #00000E;
         }
            &:nth-child(even){
                border-left: @border-botm;
            }
           .imget{
                width: 100%;
                cursor: pointer;
           }
       }
     }
  }
</style>
