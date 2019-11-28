<template>
    <div class="xian">
<!---头部----->
       <header class="f-header">
         <span>发现</span>
       </header>
<!---轮播条-->
      <div class="box-cony">

      </div>
<!--详情页-->
      <div class="box-vie">
        <ul>
          <li v-for="(a,index) of aaa" :key="index">
            <img :src="a.bookImg" alt="" class="img_app" >
            <p>{{a.bookName}}</p>
            <div  class="box-fl" >
              <span><img :src="a.bookTu" alt=""></span>
              <span>{{a.bookInfo}}</span>
              <span><img  :src="a.bookXin" alt="" class="img_app" @click="add(index)"> <i ref="span" class=" ">{{index}}</i></span>
            </div>
          </li>
        </ul>
      </div>
<!-----公共底部----->
      <footer2></footer2>
    </div>
</template>
<script>
  import {getFaxian} from "../../api"
  import footer2 from '../../foooter/footer'
    export default {
        name: "Xian",
      data(){
          return {
            aaa:[],
            like_count:2,
            flg:false,
            list:[]
          }
      },
      components:{
        // Swiper,
        footer2,
      },
      created() {
          this.aa();
         this.item()
      },
      methods:{
          aa(){
            getFaxian().then(arr=>{
              this.aaa=arr.hotlist
            })
          },
        add(i){
            // this.flg = !this.flg
          for(let i =0;i<this.$refs.span.length;i++){
            this.list.push(this.$refs.span[i].innerText)
          }
          if(this.$refs.span[i].innerText==this.list[i]){
            this.$refs.span[i].innerText = +this.$refs.span[i].innerText+1
          }else if(this.$refs.span[i].innerText>this.list[i]){
            this.$refs.span[i].innerText = +this.$refs.span[i].innerText-1
          }
        },
      item(i){
          if(this.flg){
            this.like_count++;
            console.log(i);
            this.flg=false;
          }else{
            this.like_count--;
            this.flg=true;
          }
        }

      }
    }
</script>
<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  html{
    left: 0;
  }
  body{
    background: #f5f5f5;
    position: relative;
  }
  .xian{
    margin-bottom: 64px;
  }
.f-header{
  position: fixed;
  top:0;
  left: 0;
  width:100%;
  height: 28px;
  background: #FFC810;
}
  .f-header span{
    display: block;
    text-align: center;
    font-size: 12px;
    line-height: 28px;
  }
  .box-vie{
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: space-between;
    justify-items: center;
  }
  .box-vie ul{
    display: flex;
    flex-wrap: wrap;
    list-style:none;
  }
  .box-vie li{
    width: 50%;
  }
  img{
    flex: 1;
    width: 100%;
    cursor: pointer;
  }
  .box-vie li p{
    box-sizing: border-box;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 100%;
    padding: 2px;
    color: #232326;
    font-size: 13px;
    left: 0;
  }
  .box-vie li p:nth-of-type(2) img{
     flex: 1;
     width:20px;
     height:20px;
    border-radius: 50%;
  }
  .box-vie li p:nth-of-type(2) span:nth-of-type(2){
     position: absolute;
     padding-left: 22px;
    text-align: right;
    line-height: 30px;
    font-size: 10px;
  }
  .box-vie li p:nth-of-type(2) span:nth-of-type(3){
    display: inline-block;
     height:25px;
    line-height: 25px;
    font-size: 6px;
  }
  .box-fl{
    position: relative;
    width:100%;
    height: 25px;
   line-height: 25px;
  }
  .box-fl span:nth-of-type(1) img:nth-of-type(1){
      float: left;
      width: 20px;
      height: 20px;
    border-radius: 50%;
  }
  .box-fl span:nth-of-type(2){
    position: absolute;
    left: 20px;
    font-size: 11px;
  }
  .box-fl span:nth-of-type(3){
    position: absolute;
    right: 6px;
    text-align: center;
    line-height: 28px;
    width: 17px;
  }
  .box-fl span:nth-of-type(3) .img_app{
   position: absolute;
    right: 17px;
     top: 7px;
     width: 15px;
    height: 15px;
  }






</style>
