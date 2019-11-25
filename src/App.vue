<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './foooter/footer'

import axios from 'axios'
export default {
  name: 'App',
  components:{
    Footer
  },
  created() {
     axios.get(`https://restapi.amap.com/v3/ip?ip=114.247.50.2&output=xml&key=c152b125b969bad141cbba50971ac8e1`).then((res)=>{
                    // this.list = res.data
                    console.log(res.data)
                }).catch((err) => {//调取失败后执行catch的回调，err是错误信息
                    console.log(err);
                })
  },
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
