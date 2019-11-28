<template>
<div class="fll">
      <b>
        <img @click="ret" src="./imges/left.png" alt />
      </b>
      <div class="fll-1">
      <img src="./imges/yixuan.png" alt="" height="25px" width="25px"><h2>{{msg}}</h2>
      </div>
      <p>感谢您的反馈，我们会继续努力给您的更好的服务体验\(^o^)/~</p>
      <div class="footer">
          <h5>我的评价</h5>
      <div class="small-all" >
        <div :class="[item.issed==true ?'onsmall small':'small']"  v-for="(item,index) of ary" :key="index" @click="bg(item.n)"></div>
      </div>
      </div>
    </div>
</template>


<script>
export default {
     name: "Fulfill",
  data() {
    return {
      msg: "评价完成",
       ary: [{n:1,issed:false,text:"很差"},
      {n:2,issed:false,text:"一般"},
      {n:3,issed:false,text:"满意"},
      {n:4,issed:false,text:"非常满意"},
      {n:5,issed:false,text:"无可挑剔"}]
     }
    },
    created(){
        this.add(this.$route.params.id)
        console.log(this.$route.params.id)
    },
     methods: {
    ret() {
      this.$router.go(-1);
    },
    add(n){
        for(let i =0;i<n;i++){
            this.ary[i].issed = true
        }
    },
    bg(n) {
        
       this.list=this.ary.filter(function(item){
               return n==item.n
        })
        // console.log(this.list)
       this.ary.forEach(element => {
          
         if(element.n<=n){
           element.issed = true;

         }else{
            element.issed = false;   
         }
         })
       } 
    }
}
</script>


<style scoped>
.fll{
    background: #efefef;
    height: 25rem;
}
.fll>b>img{
    margin: 2rem 0 0 1rem;
}
.fll-1{
    display: flex;
    margin: 1rem 33%;
    width: 10rem;
    position: relative;
}
.fll>p{
   font-size: 0.9rem;
   margin-left: 0.4rem;
}
.fll-1>img{
    margin-top: 0.3rem;
}
.footer{
    background: #fff;
    width: 90%;
    height: 10rem;
    border-radius: 1rem;
    margin: 2rem auto;
}
.footer>h5{
    text-align: center;
    padding-top: 1rem;
    color: #7d7d7d;
    margin-bottom: 2rem;
}
/*-------------------五角星样式-------------*/
.small-all {
  display: flex;
  margin: 1rem 13%;
}
.onsmall{
   border-color: #f9c134 transparent transparent transparent !important;
}
.onsmall:before,
.onsmall:after {
  border-color: #f9c134 transparent transparent transparent !important;
  }
.small {
  border-color: #7d7d7d transparent transparent transparent;
  border-style: solid;
  border-top-width: 9.375px;
  border-right-width: 15px;
  border-left-width: 15px;
  height: 0;
  margin-top: 9.375px;
  margin-bottom: 6.02679px;
  position: relative;
  width: 0;
  margin: 2rem 0.8rem;
}

.small:before,
.small:after {
  border-color: #7d7d7d transparent transparent transparent;
  border-style: solid;
  border-top-width: 9.375px;
  border-right-width: 15px;
  border-left-width: 15px;
  content: "";
  display: block;
  height: 0;
  left: -15px;
  position: absolute;
  top: -9.375px;
  width: 0;
}
.small:before {
  transform: rotate(70deg);
}
.small:after {
  transform: rotate(-70deg);
}
</style>