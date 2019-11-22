<template>
<div>
    {{d}}
    <router-link to='/my/login'>登录</router-link>
    <router-view></router-view>
</div>
    
</template>



<script>
export default {
    name:"foter4",
    data(){
        return {
            d:'我的'
        }
    }
}
</script>

<style scoped>

</style>