<template>
    <div>
        <h3><i class="left iconfont icon-fanhui" @click="back"></i><slot name="head">默认标题</slot><slot name="right" class="right"></slot></h3>
    </div>
</template>
<script>
export default {
    methods: {
        back(){
            this.$router.back()
        }
    },
}
</script>
<style lang="less" scope>
    h3{
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
        line-height: 45px;
        .left{
            float: left;
            margin-top: 5px;
        }
        .right{
            float: right;
            font-size: 14px;
            line-height: 45px;
            margin-right: 10px;
        }
    }
</style>