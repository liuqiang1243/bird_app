<template>
    <div id="my">
        <header>
                <span class="left" @click="picture">
                    <i class="iconfont icon-birdxiaoniao">
                        <mt-actionsheet
                :actions="actions"
                v-model="sheetVisible">
                </mt-actionsheet>
                    </i>
                </span>
                
                    <router-link :to='message' tag="span" class="login" >{{name}}</router-link>
                <span class="right">
                <i class="iconfont icon-shezhi">

                </i>
                <i class="iconfont icon-xiaoxi">

                </i>
            </span>
        </header>
        <div class="money">
            <p class="clear"><span class="left">我的钱包</span><span class="right">进入钱包></span></p>  
            <ul>
                <li>
                    <p class="top">10万元</p>
                    <p class="center">借钱</p>
                    <p class="bottom">最高额度(元)</p>
                </li>
                <li>
                    <p class="top">10万元</p>
                    <p class="center">美团信用卡</p>
                    <p class="bottom">最高额度(元)</p>
                </li>
                <li>
                    <p class="top">165元</p>
                    <p class="center">美团享优惠</p>
                    <p class="bottom">最高随机减</p>
                </li>
            </ul>
        </div>
        <div class="money">
            <span class="weight">我的功能</span>
            <ul>
                <li>
                    <i class="iconfont icon-zuobiao"></i>
                    <p>我的地址</p>
                </li>
                <li>
                    <i class="iconfont icon-zuji"></i>
                    <p>我的足迹</p>
                </li>
                <li>
                    <i class="iconfont icon-shoucang"></i>
                    <p>我的收藏</p>
                </li>
                <li>
                    <i class="iconfont icon-jilu"></i>
                    <p>答谢记录</p>
                </li>
            </ul>
            <p class="appraise">
                    <i class="iconfont icon-pingjia1"></i><br>
                    <span>我的评价</span>
            </p>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);
export default {
    data(){
        return{
            name:'登录/注册',
            login:'/login',
            actions:[{name:'拍照'},{name:'从相机中选择'}],
            sheetVisible:false
        }
    },
    created() {
        if(localStorage.getItem("name")){
            this.name = localStorage.getItem("name")
            if(this.$route.params.id){
                this.name = this.$route.params.id
            }
        }else{
            this.name = '登录/注册'
        }
        console.log(this.$route.params.id)
    },
    computed: {
        message(){
            if(this.name !== "登录/注册"){
                return '/message/'+this.name
            }else{
                return '/login'
            }
        }
    },
    methods: {
        picture(){
            this.sheetVisible = true
        }
    },

}
</script>
<style lang="less" scope>
    #my{
        width: 100%;
        background-color: #F5F5F5;
        a{
            text-decoration: none;
        }
        header{
            padding:10px 5px 20px;
            margin-top: 20px;
            background-color: #FAFAFA;
            border-radius: 4px;
            .left{
                margin-left:10px;
                margin-right: 10px;
                .iconfont{
                font-size: 40px;
                vertical-align: middle;
                color:#D5D5D4;
                }
            }
            .login{
                vertical-align: middle;
                font-size: 16px;
                color:#333333;
                font-weight: 600;
                
            }
            .right{
                float: right;
                margin-top: 10px;
                .iconfont{
                    font-size: 20px;
                    margin: 10px;
                }
            }
        }
        .money{
            margin:10px 10px 10px;
            padding: 20px 10px;
            background-color: #FFFFFF;
            border-radius: 10px;
            .weight{
                font-weight: bold;
            }
            .clear::after{
                content: '';
                clear: both;
                display: block;
            }
            .left{
                float: left;
                color:black;
                font-weight: bold;
            }
            .right{
                float: right;
                color:#666561;
                font-size: 14px;
            }
            ul{
                margin-top: 10px;
                font-size: 14px;
                list-style: none;
                display: flex;
                justify-content:space-around;
                li{
                    text-align: center;
                    .top{
                        font-weight: bold;
                    }
                    .center{
                        color:#32312D;
                        margin:5px 0;
                    }
                    .bottom{
                        color:#A09F9C;
                        font-size: 14px;
                    }
                    .iconfont{
                        font-size: 25px;
                        color:#F5C052;
                    }
                }
            }
            .appraise{
                width: 25%;
                text-align: center;
                margin-top: 20px;
                font-size: 14px;
                .iconfont{
                    color:#F5C052;
                    font-size: 25px;
                }
            }
        }

    }
    
</style>