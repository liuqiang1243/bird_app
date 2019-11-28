<template>
  <div class="order">
    <div class="order-dome">
     <img src="./imges/shaobing.png" alt="" width="50px" height="50px" />
      <b>叉卷烧饼&nbsp;&gt;</b>&nbsp;&nbsp;&nbsp;<b>退款成功</b>
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
      <button>退款详情</button>
    </div>
    </div>
    
  </div>
</template>

<script>
import foter  from "../../foooter/footer"
export default {
  name: 'Dome',
  data () {
    return {
      msgg:"退款"

    }
  },
  components:{

  }

}
</script>

<style scoped>
.order{
  width:100%;
  background:#f2f2f2;
  height: 19rem;
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
  left: 5rem;
}
.order-dome>p>b{
  font-weight: normal;
  border: 1px solid red;
  padding: 0.1rem;
  font-size: 0.5rem;
  margin-left: 0.4rem;
}
.order-dome>b:nth-of-type(2){
  color: #fbd061;
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
</style>
