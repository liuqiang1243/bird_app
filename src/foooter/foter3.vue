<template>
<div>
  <div class="top">
    <h2>{{msg}}</h2>
    <div class="seek">
      <i class="iconfont icon-sousuo"></i>
      <i class="iconfont icon-lingdang"></i>
    </div>
    <div class="title">
    </div>
    <div class="foterr">
      <router-link to="/order/all">全部订单</router-link>
      <router-link to="/order/appraise">待评价</router-link>
      <router-link to="/order/reimburse">退款</router-link>
    </div>
    
  </div>
  <div class="orderlist">
   <router-view></router-view>
  </div>
  
</div>
</template>



<script>
import all from "../components/order/Order";
import appraise from "../components/order/Appraise";
import reimburse from "../components/order/Reimburse";
export default {
  name: "foter3",
  data() {
    return {
      msg: "我的订单"
    };
  }
};
</script>

<style scoped>
.orderlist{
    position: relative;
    z-index: 0;
}
a {
  text-decoration: none;
  color: black;
  margin-top: 1rem;
}
h2 {
  text-align: center;
  margin-top: 1.5rem;
}
.top {
  z-index: 1;
  height: 7rem;
  width: 100%;
  margin-top: 1rem;
}
.seek {
  position: absolute;
  
  top: 1.5rem;
  right: 2rem;
}
.seek i {
  padding: 0 0.5rem;
}
.foterr {
  background: #f2f2f2;
  width: 100%;
  height: 4rem;
  padding: 0.3rem 0;
  display: flex;
  justify-content: space-around;
}
.title {
  background: #f2f2f2;
  padding-top: 0.5rem;
}
</style>