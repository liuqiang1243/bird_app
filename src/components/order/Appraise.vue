<template>
  <div class="apre">
    <div class="apre-top">
      <b>
        <img @click="ret" src="./imges/left.png" alt />
      </b>
      <h2>{{msg}}</h2>
      <div></div>
    </div>
    <div class="qis">
      <h2>您对骑手满意吗？</h2>
      <div class="qis-1">
        <img src="./imges/qishou.jpg" alt width="60px" height="60px" />
        <p>青鸟快送</p>
        <p>匿名评价</p>
        <p>{{time | dataFormat}}</p>&nbsp;
        <p>左右送达</p>
      </div>
      <div class="qis-tp1" :class="this.f">
        <img src="./imges/fennu.png" alt width="40px" height="40px" />
        <p>不满意</p>
      </div>
      <div class="qis-tp2" >
        <img src="./imges/xiaolian.png" alt width="40px" height="40px" />
        <p>满意</p>
      </div>
    </div>
    <div class="merchant">
      <h2>您对商家/菜品满意吗？</h2>
      <div class="merchant-top">
        <img src="./imges/shaobing.png" alt width="60px" height="60px" />
        <p>叉卷烧饼(中关村食宝街店)</p>
        <input class="radio_type" type="checkbox" v-model="s" />
        <span>匿名评价</span>
      </div>
      <div class="insert">
        <b v-for="(item,i) in list" :key = 'i'>
         "{{item.text}}"
        </b>
      </div>
      
      <div class="small-all" >
        <div :class="item.issed==true ?'onsmall small':'small'"  v-for="(item,index) of ary" :key="index" @click="bg(item.n)"></div>
      </div>
      <div class="smaller-top">
        <span>口味</span>
        <div :class="[item.ised==true ?'onsmaller smaller':'smaller']"  v-for="(item,index) of arry" :key="index" @click="bg2(item.a)"></div>
      </div>
      <div class="smaller-bottom">
        <span>包装</span>
        <div :class="[item.ied==true ?'onsmaller smaller':'smaller']"  v-for="(item,index) of arrry" :key="index" @click="bg3(item.b)"></div>
      </div>
    </div>
     <router-link :to="'/order/fulfill/'+this.id"><button class="onsubmit" v-show="this.f" ><h4>提交评价</h4></button></router-link>
   <button class="submit" v-show="!this.f"><h4>提交评价</h4></button>
  </div>
</template>

<script>
import foter from "../../foooter/footer";

export default {
  name: "Appraise",
  data() {
    return {
      msg: "评价",
      id:'',
      time: "时间",
      list:[],
      f:false,
      s: "",
      ary: [{n:1,issed:false,text:"很差"},
      {n:2,issed:false,text:"一般"},
      {n:3,issed:false,text:"满意"},
      {n:4,issed:false,text:"非常满意"},
      {n:5,issed:false,text:"无可挑剔"}],
      arry:[{a:6,ised:false,txt:"很差"},
      {a:7,ised:false,txt:"一般"},
      {a:8,ised:false,txt:"满意"},
      {a:9,ised:false,txt:"非常满意"},
      {a:10,ised:false,txt:"无可挑剔"}],
      arrry:[{b:1,ied:false,tx:"很差"},
      {b:2,ied:false,tx:"一般"},
      {b:3,ied:false,tx:"满意"},
      {b:4,ied:false,tx:"非常满意"},
      {b:5,ied:false,tx:"无可挑剔"}]
    };
  },
  filters: {
    dataFormat: () => {
      var dt = new Date();
      var m = dt.getMonth() + 1;
      var d = dt.getDate();
      var h = dt.getHours();
      var ds = dt.getMinutes();
      return `${m}月${d}日${h}:${ds}`;
    }
  },
  methods: {
    ret() {
      this.$router.go(-1);
    },
    bg(n) {
      
       this.list=this.ary.filter(function(item){
               return n==item.n
        })
        this.id = this.list[0].n
        console.log(this.list[0].n)
       this.ary.forEach(element => {
                  // if(elment.n  1<=2)
         if(element.n<=n){
           element.issed = true;

         }else{
            element.issed = false;   
         }
         if(element.n==5 && element.issed==true){
           this.f=true;
            this.arry.forEach(item=>{
           item.ised=true;
           this.arrry.forEach(item=>{
            item.ied=true;
           })
         })
       } 
      })  
    },
    bg2(a){
      this.arry.forEach(element => {
         if(element.a<=a){
           element.ised = true;
         }else{
            element.ised = false;
         }
       })
    },
     bg3(b){
      this.arrry.forEach(element => {
         if(element.b<=b){
           element.ied = true;
           this.f=true;
         }else{
            element.ied = false;
         }
       })
    }
  }
};
</script>

<style scoped>
.insert{
  margin: 0.5rem 0 0 45%;
}
.apre {
  background: #f2f2f2;
  height: 60rem;
}
.apre-top {
  display: flex;
  justify-content: space-between;
  background: #f2f2f2;
  height: 5rem;
}
.apre-top > h2 {
  margin-top: 1rem;
  padding-right: 2rem;
  font-weight: normal;
}
.apre-top > b {
  padding: 1.5rem 0 0 1.5rem;
}
.qis > h2 {
  text-align: center;
  margin: 1.5rem 0 1.5rem 0;
  padding-top: 1rem;
}
.qis-1 {
  background: #f2f2f2;
  border-radius: 1rem;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  height: 3.7rem;
  width: 90%;
  margin-left: 1rem;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.qis-1 > p:nth-of-type(3) {
  position: absolute;
  top: 2rem;
  left: 5rem;
}
.qis-1 > p:nth-of-type(4) {
  position: absolute;
  top: 2rem;
  right: 4.5rem;
}
.qis-1 > p:nth-of-type(1),
.qis-1 > p:nth-of-type(2) {
  margin: 0.5rem 2rem 0;
}
.qis-1 > img {
  border-radius: 50%;
}
.qis {
  position: relative;
  height: 15rem;
  width: 90%;
  background: #fff;
  margin-left: 1.2rem;
  border-radius: 1rem;
}
.qis-tp1 {
  background: #f2f2f2;
  width: 35%;
  display: flex;
  position: absolute;
  top: 10rem;
  left: 2rem;
  height: 2.5rem;
  border-radius: 2rem;
}
.qis-tp1 > p {
  text-indent: 1em;
  line-height: 2.5rem;
}
.qis-tp2 {
  background: #f2f2f2;
  width: 35%;
  display: flex;
  position: absolute;
  top: 10rem;
  right: 2.5rem;
  height: 2.5rem;
  border-radius: 2rem;
}
.qis-tp2 > p {
  text-indent: 1em;
  line-height: 2.5rem;
}
.merchant {
  height: 24rem;
  width: 90%;
  background: #fff;
  margin: 2rem 0 0 1.2rem;
  border-radius: 1rem;
}
.merchant > h2 {
  text-align: center;
  padding-top: 2rem;
}
.merchant > .merchant-top {
  background: #f2f2f2;
  border-radius: 1rem;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  height: 3.7rem;
  width: 90%;
  margin-left: 1rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 1.5rem;
}
.merchant > .merchant-top > p,
.merchant > .merchant-top > span {
  line-height: 3.7rem;
}
/* -------单选框修改样式 --------*/
label {
  line-height: 3.7rem;
  display: inline-block;
  margin-left: 5px;
  margin-right: 15px;
  color: #777;
}
.radio_type {
  width: 20px;
  height: 20px;
  appearance: none;
  position: relative;
  line-height: 3.7rem;
}
.radio_type:before {
  content: "";
  width: 20px;
  height: 20px;
  border: 1px solid #7d7d7d;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
}
.radio_type:after {
  content: "";
  width: 10px;
  height: 5px;
  border: 1px solid #000;
  border-top: transparent;
  border-right: transparent;
  text-align: center;
  display: block;
  position: absolute;
  background: #fff;
  top: 1.6rem;
  left: 0.3rem;
  vertical-align: middle;
  transform: rotate(-45deg);
}
.radio_type:checked:before {
  content: "";
  width: 20px;
  height: 20px;
  border: 1px solid #f9c134;
  background: #f9c134;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
}
.radio_type:checked:after {
  content: "";
  width: 10px;
  height: 5px;
  border: 1px solid white;
  border-top: transparent;
  border-right: transparent;
  text-align: center;
  display: block;
  position: absolute;
  background: #f9c134;
  top: 1.6rem;
  left: 0.3rem;
  vertical-align: middle;
  transform: rotate(-45deg);
}
.radio_type:checked + label {
  color: #f9c134;
}
/* -----------小五角星样式---------- */
.smaller-top {
  display: flex;
  margin: 1rem 0;
}
.smaller-top > span {
  padding-left: 4rem;
  padding-right: 1rem;
}
.smaller-bottom {
  display: flex;
  margin: 1rem 0;
}
.smaller-bottom > span {
  padding-left: 4rem;
  padding-right: 1rem;
}
.onsmaller{
   border-color: #f9c134 transparent transparent transparent !important;
}
.onsmaller:before,
.onsmaller:after {
  border-color: #f9c134 transparent transparent transparent !important;
  }
.smaller {
  border-color: #7d7d7d transparent transparent transparent;
  border-style: solid;
  border-top-width: 5px;
  border-right-width: 10px;
  border-left-width: 10px;
  height: 0;
  margin-right: 1.2rem;
  margin-top: 5px;
  margin-bottom: 3.21429px;
  position: relative;
  width: 0;
}
.smaller:before,
.smaller:after {
  border-color: #7d7d7d transparent transparent transparent;
  border-style: solid;
  border-top-width: 5px;
  border-right-width: 10px;
  border-left-width: 10px;
  content: "";
  display: block;
  height: 0;
  left: -10px;
  position: absolute;
  top: -5px;
  width: 0;
}
.smaller:before {
  transform: rotate(70deg);
}
.smaller:after {
  transform: rotate(-70deg);
}

/* ------------------大五角星样式---------- */
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
.onsubmit{
  background:#f9c134;
  border-color: rgba(255,255,255,0.2);
  width: 80%;
  height: 2rem;
  border-radius: 2rem;
  margin: 0 auto;
  margin: 3rem 2.5rem;
}
.submit {
  width: 80%;
  height: 2rem;
  background: #7d7d7d;
  border-color: rgba(255,255,255,0.2);
  border-radius: 2rem;
  margin: 0 auto;
  margin: 3rem 2.5rem;
}
.submit > h4 {
  text-align: center;
  line-height: 2rem;
}
</style>
