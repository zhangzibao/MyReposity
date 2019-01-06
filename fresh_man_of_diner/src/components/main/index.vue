<template>
    <div>
        <transition :name="transitionName">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>

        <my_footer style="z-index: 999"></my_footer>
    </div>
</template>

<script>
  import my_footer from './footer/footer'

  export default {
    name: 'index',
    data() {
      return {
        transitionName: ''
      }
    },
    components: {
      my_footer
    },
    computed: {},
    mounted() {

    },
    created() {
      // console.log(axios.defaults.headers.Authorization)
    },
    watch: {
      '$route'(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        if (toDepth + fromDepth >= 5) {
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        } else {
          this.transitionName = ''
        }
      }
    }
  }

</script>

<style scoped>
</style>
