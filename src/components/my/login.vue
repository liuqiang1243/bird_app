<template>
    <div>
        <span>
            返回
        </span>
        <div class="header">
            <h2>青鸟外卖</h2>
            <div>
                <span  @click="flag=true" :class="{on:flag}">短信登录</span>
                <span @click="flag=false" :class="{on:!flag}">密码登录</span>
            </div>
        </div>
        <div class="login_content" :class="{show:flag}">
            <div class="phoneLogin">
            <input type="text" maxlength="11" placeholder='手机号' v-model="phone"><button :class="{blak:phoneadd}">获取验证码</button><br>
            <input type="text" placeholder='验证码' v-model="code">
            <p>
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
            </p>
            </div>
        </div>
        <div class="pwdLogin" :class="{show:!flag}">
            <input type="text" placeholder="手机/邮箱/用户名" v-model="postbox"><br>
            <input type="text" placeholder="密码"><br>
            <input type="text"   placeholder="验证码">
        </div>
        <div class="login_submit">
            <button @click="login">登录</button>
            <a href="javascipt:;">关于我们</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            flag:true,
            phone:'',
            code:'',
            postbox:'',
            pwd:''
        }
    },
    methods: {
        login(){
            const {flag,phone,code} = this 
            if(flag){
                if(/^1\d{10}$/.test(+this.phone)){
                    
                }else if(code){

                }
            }else{

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
<style lang="less">
    .header{
        text-align: center;
        margin-top: 60px;
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
        width: 300px;
        margin:6px auto;
        display: none;
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