<template>
<div>
    <My></My>
    <transition :duration="1000">
  <router-view class="view"></router-view>
</transition>
</div>
    
</template>



<script>
import My from '../components/my/my'
export default {
    name:"foter4",
    data(){
        return {
            d:'我的'
        }
    },
    components:{
        My
    }
}
</script>

<style scoped>
.view {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50px;
  left: 0;
}
.left-enter-active, .left-leave-active {
  transition: transform .5s;
}
.left-enter, .left-leave-to {
  transform: translate(-100%, 0)
}

.right-enter-active, .right-leave-active {
  transition: transform .5s;
}
.right-enter, .right-leave-to {
  transform: translate(100%, 0)
}
</style>