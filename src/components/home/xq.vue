<template>
  <div>
    <img :src="daa.bookImg" alt="">
   <p>{{daa.bookInfo}}</p>
    {{daa}}
  </div>
</template>
<script>

    export default {
        name: "xq",
      data(){
          return {
            daa:[]
          }
      },
      created() {
        console.log(this.$route.query.xq);
        this.daa=this.$route.query.xq;
      }
    }
</script>

<style scoped>

</style>
