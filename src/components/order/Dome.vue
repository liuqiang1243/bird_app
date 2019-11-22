<template>
  <div class="hello">
   <h4>{{msg}}</h4><div class="seek">
     <i class="iconfont icon-sousuo"></i>
     <i class="iconfont icon-lingdang"></i>
   </div>
   <div class="top">
      <h3>{{msgg}}</h3>
      <ul>
        <li>全部订单</li>
        <li>待评价</li>
        <li>退款</li>
      </ul>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Dome',
  data () {
    return {
      msg:"订单",
      msgg:"我的订单"

    }
  },
  components:{

  }

}
</script>

<style scoped>
h4{
  text-align: center;
  font-weight: normal;
}
.top{
  display: flex;
  justify-content: space-between;
  background: #f9f8f9;
}
h3{
  font-weight: normal;
}
</style>
