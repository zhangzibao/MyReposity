<template>
  <div id="mirco-app">
    <m-header></m-header>
    <!-- <div class="head_blank"></div> -->
    <keep-alive>
        <router-view></router-view>
    </keep-alive>  
  </div>
</template>
<script type="text/ecmascript-6">
import header from './m-header.vue'
  export default {
    components:{
        'm-header':header
    }
  }
</script>

<style >

</style>