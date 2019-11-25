<template>
  <div class="order">
    <div class="order-dome">
     <img src="./imges/shaobing.png" alt="" width="50px" height="50px" />
      <b>叉卷烧饼（中关村食宝街店）</b>&gt;&nbsp;&nbsp;&nbsp;&nbsp;已完成
      <p><b>20减6</b><b>35减11</b><b>50减20</b><b>80减25</b></p>
    </div>
    <div class="order-dome2">
      <img src="./imges/shaobing.png" alt="" width="80px" height="60px">
      <img src="./imges/shaobing.png" alt="" width="80px" height="60px">
      <div>
      <b>￥19</b>
      <p>共2件</p>
      </div>
    </div>
    <div class="order-text">
    <p>经典掉渣烧...</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>经典掉渣烧...</p>
    <div class="btn">
      <button>再来一单</button>
      <router-link to="/order/appraise" tag="button"><button>评价</button></router-link>
    </div>
    </div>
    
     <div class="order-dome6">
     <img src="./imges/zhurou.png" alt="" width="50px" height="50px" />
      <b>麦多馅饼（知春路店）</b>&gt;&nbsp;&nbsp;&nbsp;&nbsp;已完成
      <p><b>30减16</b><b>40减19</b><b>60减21</b></p>
    </div>
    <div class="order-dome26">
      <img src="./imges/zhurou.png" alt="" width="80px" height="60px">
      <img src="./imges/kele.png" alt="" width="80px" height="60px">
      <div>
      <b>￥15</b>
      <p>共2件</p>
      </div>
    </div>
    <div class="order-text6">
    <p>猪肉香菇</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>可口可乐</p>
    <div class="btn6">
      <button>再来一单</button>
      <button>评价</button>
    </div>
    </div>
    
  </div>
  
  
</template>

<script>
import foter from "../../foooter/footer";
export default {
  name: "Orider",
  data() {
    return {
      a: ""
    };
  },
  methods:{
     
  }
};
</script>

<style scoped>
.order{
  position: relative;
  z-index: 9;
  width:100%;
  background:#f2f2f2;
  margin-bottom: 10rem;
}
.order-dome{
  background: #fff;
  width: 90%;
  height:5rem;
  padding: 1rem 0 0 0.6rem;
  margin-left:0.8rem; 
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: flex;
  justify-content: space-around;
  position: relative;
}
.order-dome>p{
  position: absolute;
  top: 2.8rem;
  left: 4rem;
}
.order-dome>p>b{
  font-weight: normal;
  border: 1px solid red;
  padding: 0.1rem;
  font-size: 0.5rem;
  margin-left: 0.4rem;
}
.order-dome2{
  background: #fff;
  width: 90%;
  height:5rem;
  padding: 0.1rem 0 0 0.6rem;
  margin-left:0.8rem;
  display: flex;
  justify-content: space-around;
}
.order-dome2>img:nth-of-type(2){
  margin-right: 4rem;
}
.order-text{
   background: #fff;
  width: 90%;
  height:5.5rem;
  padding: 0.1rem 0 0 0.6rem;
  margin-left:0.8rem; 
  display: flex;
  color: #7d7d7d;
  position: relative;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.btn{
position: absolute;
bottom: 1rem;
right: 1rem;
}
.btn>button{
  border: 1px solid #000;
  background: #fff;
  padding: 0.2rem 0.6rem;
}
.btn>button:nth-of-type(2){
  border: none;
  background: #fbd061;
  padding: 0.3rem 1.4rem;
}

.order-dome6{
  background: #fff;
  width: 90%;
  height:5rem;
  padding: 1rem 0 0 0.6rem;
  margin-left:0.8rem;
  margin-top: 3rem; 
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: flex;
  justify-content: space-around;
  position: relative;
}
.order-dome6>p{
  position: absolute;
  top: 2.8rem;
  left: 4rem;
}
.order-dome6>p>b{
  font-weight: normal;
  border: 1px solid red;
  padding: 0.1rem;
  font-size: 0.5rem;
  margin-left: 0.4rem;
}
.order-dome26{
  background: #fff;
  width: 90%;
  height:5rem;
  padding: 0.1rem 0 0 0.6rem;
  margin-left:0.8rem;
  display: flex;
  justify-content: space-around;
}
.order-dome26>img:nth-of-type(2){
  margin-right: 4rem;
}
.order-text6{
   background: #fff;
  width: 90%;
  height:5.5rem;
  padding: 0.1rem 0 0 0.6rem;
  margin-left:0.8rem; 
  display: flex;
  color: #7d7d7d;
  position: relative;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.btn6{
position: absolute;
bottom: 1rem;
right: 1rem;
}
.btn6>button{
  border: 1px solid #000;
  background: #fff;
  padding: 0.2rem 0.6rem;
}
.btn6>button:nth-of-type(2){
  border: none;
  background: #fbd061;
  padding: 0.3rem 1.4rem;
}
</style>
