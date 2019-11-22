<template>
    <div> <router-view></router-view>
    <div class="footer">
      <router-link to="/home" tag="span">
      <i class="iconfont icon-51"></i>
      <br>
      首页
      </router-link>
    <router-link to="/merchant" tag="span">
     <i class="iconfont icon-huiyuan"></i>
     <br>
     会员
    </router-link>
    <router-link to="/order" tag="span">
    <i class="iconfont icon-dingdanguanli"></i>
    <br>
    订单</router-link>
    <router-link to="/my" tag="span">
      <i class="iconfont icon-daishu"></i>
      <br>
      我的
    </router-link>
    </div></div>
</template>
<script>
export default {
    
}
</script>

<style lang="" scoped>
.footer{
      margin: 0;
      padding: 0;
     position: fixed;
     bottom: 0;
     width: 100%;
     height: 49px;
     text-align: center;
     display: flex;
     flex-direction: row;
}
span{
   flex: 1;
   color: dimgray;
}
.iconfont{
  font-size: 20px;
  color:orange;
}
</style>