<template>
  <div>
    <Header>
      <span>我的收货地址</span>
      <router-link to="/address/''" slot="right" tag="span" class="right">新增地址</router-link>
    </Header>
    <center>
      <div v-for="(item,i) in list" :key="i" >
          <p><span>{{item.type}}</span><span>{{item.location}}</span><span>{{item.house}}</span></p>
          <p><span>{{item.name}}</span><span>{{item.sex}}</span><span>{{item.phone}}</span></p>
          <i @click="back(i)">更改</i>
      </div>
    </center>
  </div>
</template>
<script>
import axios from 'axios'
import Header from './header'
export default {
  data(){
    return{
      list:[]
    }
  },
  components:{
    Header
  },
  methods: {
    message(){
      axios.get('../../../static/moke/location.json').then(res=>{
        this.list = res.data;
        this.address();
      })
    },
    back(i){
     
      let list = JSON.stringify(this.list[i])
      this.$router.push({
          path: `/address/${list}`,
        })
    },
    address(){
      const dataB = JSON.parse(sessionStorage.getItem('address'));
      console.log(dataB)
      if(dataB){
         this.list.splice(dataB.id,1,dataB)
        console.log(this.list)
        sessionStorage.removeItem("address");
      }
    }
  },
  created() {
   //因为掉接口时异步的，之前在初始的时候及调接口又改新地址，这个时候接口还没返回数据，你改新地址前，数据时空的
   //所以list只有改后的1条地址，之后接口返回了数据，又让list=接口里面的值，之前的1条被覆盖了 从
    this.message()
   
  },
}
</script>
<style lang="less">
center{
  div{
    border-bottom: 1px solid #ccc;
    position: relative;
    i{
      position: absolute;
      top:50%;
      right: 20px;
      transform: translate(-50%,-50%)
    }
  }
  p{
    text-align: left;
    margin:10px;
  }
  span{
    margin-right: 20px;
  }
}
</style>