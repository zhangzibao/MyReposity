<template>
  <div id="app">
    <my-header></my-header>
    <div class="head_blank"></div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import {urlParse} from './common/util.js';
  const ERR_OK=0;
  export default {
    data() {
      return {
      }
    },
    created() {

    },
    mounted(){

    }
  };
</script>

<style>

</style>
