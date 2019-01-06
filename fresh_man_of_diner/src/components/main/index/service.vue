<template>
    <body style="">
    <div class="inform-set">
        <h1 style="">服务</h1>
    </div>
    <h1 style="color: #FF0000;font-size: 1rem;text-align: center;margin-top:20%;">开发中!</h1>
    </body>
</template>
<script>
  import http from '../../../assets/js/http'

  export default {
    name: 'service',
    data() {
      return {
        goods: {}
      }
    },
    created() {
      this.loading = true
      const data = {
        params: {
          keywords: this.keywords,
          page: this.currentPage,
          limit: this.limit
        }
      }
    },
    mixins: [http]
  }
</script>

<style lang="stylus" scoped>
    .inform-set
        position fixed
        top 0
        width 100%
        background #f4ea2a
        min-height 1rem
        flex-direction row
        justify-content center
        align-items center
        border-bottom 1px solid #fff
        z-index 50
        h1
            color: #fff
            /*font-size: 15px;*/
            margin: auto .5rem
            line-height: .8rem
</style>
