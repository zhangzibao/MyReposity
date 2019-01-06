<template>
    <div class="welcome">
        <div class="back-title">
            <svg class="goback" @click="goback()" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
            <router-link tag="p" :to="typeof getpath1=='undefined'?'':getpath1" v-if="typeof gettitle1 == 'undefined'?false:true">{{gettitle1}}</router-link>
        </div>
        <router-link tag="a" :to="typeof getpath2=='undefined'?'':getpath2" v-if="typeof gettitle2 == 'undefined'?false:true">{{gettitle2}}</router-link>
    </div>
</template>
<script>
  import formMixin from '../../assets/js/form_com'

  export default {
    name: 'back-title',
    props: ['title1', 'title2', 'path1', 'path2'],

    computed: {
      gettitle1() {
        return this.title1
      },
      gettitle2() {
        return this.title2
      },
      getpath1() {
        return this.path1
      },
      getpath2() {
        return this.path2
      }
    },
    data() {
      return {}
    },
    mixins: [formMixin]

  }
</script>

<style lang="less" scoped>
    .welcome {
        position: fixed;
        top: 0;
        width: 100%;
        background: #f4ea2a;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem;
        min-height: 1rem;
        margin-bottom: 5%;
        border-bottom: solid 1px #fff;
        .back-title {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            .goback {
                width: .4rem;
                height: .4rem;
                vertical-align: -0.15em;
                overflow: hidden;
                fill: #fff;
                margin-right: .7rem;
            }
            p {
                color: #fff;
                font-size: .37rem;
            }

        }
        a {
            color: #ff4949;
            font-size: 13px;
        }

    }
</style>
