<template>
    <div class="hint" >
       <div class="center">
        <img src="./images/out1.png" alt=""><br>
        {{news}} 
        <br>
        <span @click="hides">确定</span>
       </div>
    </div>
</template>
<script>
export default {
    props:["news"],
    methods: {
        hides(){
            this.$emit('hlive')
        }
    },
}
</script>
<style lang="less" scope>
    .hint{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        text-align:center;
        background-color: rgba(0,0,0,.5);
        z-index: 10;
        color:white;
        .center{
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%)
        }
        img{
            width: 100px;
        }
        span{
            background: #02a774;
            color:white;
            padding:5px 5px;
            display: block;
            width: 50%;
            margin:0 auto;
            margin-top: 10px;
        }
        
    }
    .hide{
            display: none;
        }
</style>