<template>
    <div id="address">
        <Header><span slot="head">新增收获地址</span></Header>
        <ul>
            <li><span>收获地址:</span> <input placeholder="点击选择" v-model="location"></li>
            <li><span>门牌号:</span> <input type="text" placeholder="【详细地址, 例1层101室】" v-model="house"></li>
            <li><span>联系人:</span> <input type="text" placeholder="请填写收货人的姓名" v-model="name"></li>
            <li><p><mt-radio
                value.sync=""
                :options="['先生', '女士']" v-model="sex">
                </mt-radio></p></li>
            <li><span>手机号:</span> <input type="text" placeholder="请填写收货手机号码" v-model="phone"></li>
            <li><span>标签:</span> <p class="last" ref="color"> <span @click="dd(0)" :class="{cove:qq}">家</span><span @click="dd(1)" :class="{cove:qq1}" >公司</span><span @click="dd(2)" :class="{cove:qq2}">学校</span> </p> </li>
            <mt-button type="primary" size="large" @click="save">保存地址</mt-button>
            
        </ul>
    </div>
</template>
<script>
import Header from './header'
export default {
    data(){
        return{
            qq:true,
            qq1:false,
            qq2:false,
            location:'' ,
            house:'',
            name:'' ,
            sex:'女士',
            phone:'',
            type:'',
            id:'',
            list:[]
        }
    },
    created() {
        this.add()
    },
    methods: {
        dd(n){
            let color = this.$refs.color.children
            // console.log(color[0].innerHTML)
            if(n==0){
                this.type = color[n].innerHTML
                this.qq = true
                this.qq1 = false
                this.qq2 = false
            }else if(n==1){
                this.type = color[n].innerHTML
                this.qq = false
                this.qq1 = true
                this.qq2 = false
            }else{
                this.type = color[n].innerHTML
                this.qq = false
                this.qq1 = false
                this.qq2 = true
            }
        },
        save(){
            // let {location,house,name,sex,phone,type} = this
            const orderData = { "location": this.location, "house": this.list.house ,"name":this.name,"sex":this.sex,"phone":this.phone,"type":this.type,"id":this.id}
                sessionStorage.setItem('address', JSON.stringify(orderData))
                this.$router.back()
        },
        add(){
            // console.log(this.$route.params.id)
           if(this.$route.params.id!=="''"){
               let list = this.$route.params.id
                this.list = JSON.parse(list)
                let {location,house,name,sex,phone,classify} = this.list
                this.location = this.list.location
                this.house = this.list.house
                this.name = this.list.name
                this.sex = this.list.sex
                this.phone = this.list.phone
                this.type = this.list.type
                this.id = this.list.id
                
                }
        }
    },
    components:{
        Header
    }
}
</script>
<style lang="less">
    #address{
        padding:10px 10px;
        .mint-button--primary{
            background-color: #FFA500;
        }
        li:not(:nth-of-type(4)){
            // margin-top:20px;
            padding-bottom: 15px;
            margin:10px 0;
            border-bottom:1px solid #f3f3f3;
            display: flex;
            justify-content:space-between;
            span{
                display: inline-block;
                width: 30%;
            }
            input{
                width: 100%;
                border:0;
                outline: none;
            }
            .last{
                width: 100%;
                span{
                    width: 20%;
                    text-align: center;
                    border:1px solid #e4e3e3;
                    margin-right: 10px;
                    line-height: 24px;
                }
            }
        }
        li:nth-of-type(4){
            input{
                width: 100px;
            }
            span{
                // border:none;
                // width: auto;
                display: inline-block;
            }
            p{
                margin-left: 15%;
                input{
                    margin-right: 10px;
                    margin-left: 30px;               
                    }
            }
            .mint-radiolist-title{
                width: 30%;
            }
        }
        .cove{
            background-color: #FFA500;
            border:none;
        }
    }
</style>