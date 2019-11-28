<template>
    <div>
        <Prompt :news='clue' v-show="hide" @hlive="show"></Prompt>
        <p @click="back" class="iconfont icon-fanhui fot">
        </p>
        <div class="header">
            <img src="./images/logo.png" alt="">
            <h2>青鸟外卖</h2>
            <div>
                <span  @click="flag=true" :class="{on:flag}">短信登录</span>
                <span @click="flag=false" :class="{on:!flag}">密码登录</span>
            </div>
        </div>
        <div class="login_content" :class="{show:flag}">
            <div class="phoneLogin">
            <input type="text" maxlength="11" placeholder='手机号' v-model="phone"><button :class="{blak:phoneadd}" @click="gain">{{n?n+'s后从新获取':'获取验证码'}}</button><br>
            <input type="text" placeholder='验证码' v-model="code">
            <p>
                温馨提示：未注册青鸟外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
            </p>
            </div>
        </div>
        <div class="pwdLogin" :class="{show:!flag}">
            <input type="text" placeholder="手机/邮箱/用户名" v-model="postbox">
            <input type="password" placeholder="密码" v-show="!cut" v-model="value"><p class="slide"><mt-switch v-model="cut"></mt-switch></p>
            <input type="text" placeholder="密码" v-show="cut" v-model="value">
            <input type="text"   placeholder="验证码" v-model="auth">
        </div>
        <div class="login_submit">
            <button @click="login">登录</button>
            <a href="javascipt:;">关于我们</a>
        </div>
    </div>
</template>
<script>
import Prompt from './prompt'
import axios from 'axios'
import Vue from 'vue'
import { Switch,Indicator} from 'mint-ui';
Vue.component(Switch.name, Switch);
export default {
    data(){
        return{
            flag:true,
            cut:false,
            phone:'',
            code:'',
            postbox:'',
            pwd:'',
            clue:'',
            hide:false,
            num:'',
            n:0,
            intervalId:null,
            value:'',
            auth:''
        }
    },
    components:{
        Prompt
    },
    methods: {
        login(){
            let {flag,phone,code,clue,hide} = this 
            if(flag){
                if(!/^1\d{10}$/.test(phone)){
                    this.clue='请输入有效的手机号'
                    this.hide = true
                }else if(code !== this.num){
                    this.clue='请输入有效的验证码'
                    this.hide = true
                }else{
                    Indicator.open('加载中...')
                    localStorage.setItem("name",phone)
                    setTimeout(() => {
                        Indicator.close()
                    }, 2000);
                    setTimeout(() => {
                        this.hide = false
                        this.$router.back()
                    }, 2000);
                    
                }
            }else{
                let {postbox,value,auth} = this
                if(!postbox){
                    this.clue='请输入正确的账号'
                    this.hide = true
                }else if(!value){
                    this.clue='请输入正确的密码'
                    this.hide = true
                }else{
                    Indicator.open('登录中...')
                    localStorage.setItem("name",postbox)
                    localStorage.setItem("pwd",value)
                    setTimeout(() => {
                        Indicator.close()
                    }, 2000);
                    setTimeout(() => {
                        this.hide = false
                        this.$router.back()
                    }, 2000);
                }
            }
        },
        show(){
            
            this.hide=false
        },
        back(){
            this.$router.back()
        },
        gain(){
            if(/^1\d{10}$/.test(this.phone)){
                if(this.n == 0){
                this.n = 30
                for(let i =0;i<6;i++){
                this.num += parseInt(Math.random()*10)
            }
            console.log(this.num)
            axios.get(`http://sms.106jiekou.com/utf8/sms.aspx?account=Mrwang&password=123456&mobile=${this.phone}&content=您的订单编码：${this.num}。如需帮助请联系客服。`).then((res)=>{
                    // this.list = res.data
                    // console.log(res)
                }).catch((err) => {//调取失败后执行catch的回调，err是错误信息
                    console.log(err);
                })
                this.intervalId = setInterval(()=>{
                    this.n --
                    if(this.n === 0){
                        clearInterval(this.intervalId)
                        this.num = ''
                    }
                },1000)
            }
            }
        }
    },
    computed: {
        phoneadd(){
            return /^1\d{10}$/.test(+this.phone)
        }
    }
}
</script>
<style lang="less" scope>
    .mint-switch-core::after{
        width: 20px;
        height: 17px ;
    }
    .mint-switch-core{
        width: 40px;
        height: 20px;
    }
    .iconfont{
        font-size: 25px;
        color:#9F9F9F;
    }
    .fot{
        margin-top: 10px;
        margin-left: 5px;
    }
    .shoulist{
        display: none;
    }
    .header{
        img{
            width: 100px;
        }
        text-align: center;
        margin-top:30px;
        h2{
            font-size: 40px;
            font-weight: bold;
            color:#02a774;
        }
        div{
            margin-top:40px;
            span{
            margin:0 20px;
            font-size: 14px;
            padding-bottom: 4px;
            color:black;

            }
            .on{
            color:#02a774;
            border-bottom:2px solid #02a774;
            font-weight: 700;
            }
        }
        
    }
    .login_content{
        margin:0 auto;
        margin-top: 6px;
        font-size: 14px;
        width: 300px;
        text-align: center;
        display: none;
        position: relative;
        p{  
            width: 100%;
            color:#999;
            line-height: 20px;
            a{
                color:#02a774;
                text-decoration: none;
            }
        }
        button{
            position: absolute;
            border:0;
            color:#ccc;
            top:11.5%;
            right: 15px;
            font-size: 14px;
            background-color: transparent;
            outline:none;
        }
        .blak{
            color:black;
        }
    }
    .login_submit{
        width: 300px;
        margin: 0 auto;
        text-align: center;
        button{
            width: 100%;
            height: 42px;
            line-height: 42px;
            border-radius: 4px;
            color:white;
            background-color: #4cd96f;
            border:0;
            outline: #02a774;
            font-size: 16px;
            margin:30px 0 20px;
            text-align: center;
        }
        a{
            text-decoration: none;
            color:#999;
            font-size: 12px;
        }
    }
    .pwdLogin{
        position: relative;
        width: 300px;
        margin:6px auto;
        display: none;
        .slide{
            position: absolute;
            right: 0;
            top:80px;
        }
    }
    .phoneLogin{
        width: 100%;
        
    }
    input{
            margin:5px 0;
            height:48px;
            width:100%;
            border:1px solid #ddd;
            border-radius: 4px;
            padding-left: 10px;
            outline: #02a774;
            
        }
        .show{
            display: block;
        }
</style>