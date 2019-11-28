<template>
  <div id="app">
    
    <!-- <router-view></router-view> -->
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
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
