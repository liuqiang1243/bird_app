<template>
    <div>
        <header>
            <span class="iconfont icon-fanhui fh" @click="gg"></span>
            <mt-header title="我的账号">
            <router-link to=""  >
            <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </header>
        <ul>
            <li>
                <span class="left">
                    头像
                </span>
                <span class="right">
                </span>
            </li>
            <li>
                <span class="left" @click="popupVisible=true">
                    用户名
                </span>
                <span class="right">
                    {{names}}
                </span>
                <mt-popup
                v-model="popupVisible"
                popup-transition="popup-fade" position='right' :modal='a' :closeOnClickModal="b" >
                <slot>
                    <div class="">
                        <h3><i class="iconfont icon-fanhui left" @click="confirm"></i> 修改昵称</h3>
                        <div class="names">
                            <p>用户名:</p>
                            <input type="text" v-model="names">
                            <p>以英文字母或汉字开头, 限4-16个字符,一个汉字为2个字符</p>
                            <button @click="confirm">确认</button>
                        </div>
                    </div>
                </slot>
                </mt-popup>
            </li>
            <li>
                <span class="left" @click="pwd=true">
                    账号密码
                </span>
                <span class="right">
                </span>
                <mt-popup
                v-model="pwd"
                popup-transition="popup-fade" position='right' :modal='a' :closeOnClickModal="b" >
                <slot>
                        <h3><i class="iconfont icon-fanhui left" @click="codePwd"></i> 设置密码</h3>
                        <div class="pwd">
                        <div class="names">
                            <p>密码: <input type="password" v-model="code"></p>
                            <p>确认密码: <input type="password" v-model="affirm"></p>
                            <p>密码长度8-32位, 须包含数字、字母、符号至少2种或以上元素</p>
                            <button @click="codePwd">确认</button>
                        </div>
                    </div>
                </slot>
                </mt-popup>
            </li>
        </ul>
            <p class="quit" @click="quit">退出当前账号</p>
    </div>
</template>
<script>
import Vue from 'vue'
import { Header,Popup,MessageBox } from 'mint-ui';
Vue.component(Header.name,Popup.name,MessageBox.name, Header,Popup,MessageBox);
export default {
    data(){
        return{
            popupVisible:false,
            b:false,
            a:true,
            names:this.$route.params.id,
            pwd:false,
            affirm:'',
            code:''
        }
    },
    methods: {
        confirm(){
            this.popupVisible = false
        },
        gg(){
            this.$router.push({name:"my",params:{id:this.names}})
        },
        codePwd(){
            if(this.code === this.affirm){
                this.pwd = false
                localStorage.setItem("pwd",this.code)
                 MessageBox({
                   title:'提示',
                   message:'操作成功',
                   closeOnClickModal:false
               });
            }else{
               MessageBox({
                   title:'提示',
                   message:'两次输入的不符合',
                   closeOnClickModal:false
                   
               });
            }
        },
        quit(){
            MessageBox.confirm("退出登录后将无法查看订单, 重新登录后即可查看").then(action => {
                   localStorage.removeItem("name");
                   this.$router.push({name:"my"})
                })
        }
    },
    // created() {
    //     this.names = this.$router.params.id
    //     console.log(this.$router.params.id)
    // },
}
</script>
<style lang="less" scope>
    .quit{
        position: fixed;
        bottom: 100px;
        width: 100%;
        text-align: center;
        background: white;
        color:red;
        height: 44px;
    }
    .fh{
        position: absolute;
        left: 10px;
        top:13px;
        z-index: 1000;
    }
    .pwd{
        padding:20px 20px;
    }
    .left{
        float: left;
        margin-top: 5px;
        margin-left: 10px;
    }
    .right{
        float: right;
    }
    ul{
        padding: 0 5px;
    }
    li{
        width: 100%;
        list-style: none;
        height: 40px;
        margin-top: 10px;
        border-bottom: 1px solid #F0F0F0;
    }
    .v-modal{
        background-color: white;
        opacity: 1;
    }
    .mint-popup{
        left: 0;
        top:0;
        transform: none;
        width: 100%;
        h3{
            text-align: center;
            font-weight: 500;
            padding: 10px 0;
            background-color: #F0F0F0;
        }
        p{
            margin-top: 10px;
            font-size: 16px;
        }
        input{
            margin-top: 15px;
            width: 100%;
            border:none;
            outline: none;
            border-bottom: 1px solid #F0F0F0;
            font-size: 16px;
        }
        .names{
            margin-left: 5px;
            margin-top: 20px;
            button{
                width: 98%;
                background-color: #F7CE45;
                height: 40px;
                margin-top: 10px;
                border:none;
                outline: none;
            }
        }
    }
</style>