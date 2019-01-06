<style lang="less" scoped>
    .about-my {
        min-height: 2rem;
        background: rgba(244, 234, 42, 0.7);
        display: flex;
        flex-direction: column;
        /*justify-content:;*/
        div {
            display: flex;
        }
        .go-login {
            flex-direction: row-reverse;
            justify-content: center;
            padding: .4rem;
            .go-text {
                min-width: 3rem;
                min-height: .1rem;
                /*background:darkred;*/

                flex-direction: column;
                padding-left: .2rem;
                h1 {
                    /*font-weight: bold;*/
                    font-weight: 600;
                    color: #fff;

                }
                p {
                    color: #fff;
                    margin-top: 0.05rem;
                }
            }
            .go-icon {
                min-width: 3rem;
                min-height: .1rem;
                /*background:#fff;*/
                flex-direction: row;
                justify-content: center;
                align-items: center;
                img {
                    margin-top: .28rem;
                    width: 1.2rem;
                    height: 1.2rem;
                    border-radius: 100%;

                }

            }
        }
        .inform-set {
            /*background:#000;*/
            /*padding-top: .2rem;*/
            /*min-width: 3rem;*/
            /*min-height: .5rem;*/
            min-height: 1rem;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #fff;
            div {
                padding-top: .2rem;
                min-width: 3rem;
                min-height: .5rem;
                flex-direction: row-reverse;
            }
            h1 {
                color: #fff;
                margin-left: .5rem;
                line-height: .8rem;
                /*font-size: 15px;*/
            }
        }
    }

    .icon {
        width: .8rem;
        height: .8rem;
        vertical-align: -0.15em;
        /*fill: #f4ea2a;*/
        overflow: hidden;
        fill: #f0c600;
        margin-right: .3rem;
    }

    .icon_small {
        width: .5rem;
        height: .5rem;
        vertical-align: -0.15em;
        fill: rgba(255, 228, 179, 1);
        overflow: hidden;
        /*fill: red;*/
        margin-right: .3rem;
        margin-top: .25rem;
    }

    .inforList {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        li {
            min-height: 1rem;
            line-height: 1rem;
            position: relative;
            background: white;
            padding: 0 3%;
            margin: .02rem 0;
        }
        li a {
            display: block;
        }
        li a.isNext:before {
            position: absolute;
            right: 3%;
            top: 0;
            font-family: 'freshregular';
            content: "<";
            transform: scaleX(-1);
            -webkit-transform: scaleX(-1);
            -moz-transform: scale(-1);
            color: #999;
            font-size: 0.4rem;
        }
        .isNext em {
            width: 10%;
            text-align: center;
            height: 0.8rem;
            overflow: hidden;
            display: block;
            float: left;
            margin-right: 3%;

        }
        li a.isNext span {
            color: #323232;
            font-size: 0.34rem;
        }
        li a span:last-child {
            float: right;
            margin-right: 6%;
        }

        li .lastBtn {
            text-align: center;
            margin-top: .15rem;
        }
    }

</style>
<template>
    <body>
    <div class="w100 about-my">
        <div class="inform-set">
            <div>
                <router-link tag="svg" to="/setting" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shezhi"></use>

                </router-link>
                <router-link tag="svg" to="/service" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tongzhi"></use>

                </router-link>
            </div>
            <h1 style="">我的</h1>
        </div>
        <router-link class="go-login" tag="div" to="/login" v-if="!username">
            <div class="go-icon">
                <img src="../../../assets/img/toux.png" alt="">
            </div>
            <div class="go-text" >
                <h1>点击登录</h1>
                <p>登录后享受更多优惠</p>
            </div>
        </router-link>
        <router-link class="go-login" tag="div" to="" v-if="username">
            <div class="go-icon">
                <img src="../../../assets/img/hj.png" alt="">
            </div>
            <div class="go-text" >
                <h1>{{username}}</h1>
                <p>个性签名.....</p>
            </div>
        </router-link>
    </div>
    <ul class="inforList">
        <li v-for="item in mylist">
            <router-link :to="item.path" tag="a" class="isNext">
                <span>
                    <em>
                         <svg class="icon_small" aria-hidden="true">
                             <use :xlink:href="item.icon0"></use>
                        </svg>
                    </em>
                    {{item.title}}
                </span>
                <span></span>
            </router-link>
        </li>
    </ul>
    </body>
</template>

<script>
  import http from '../../../assets/js/http'

  export default {
    data() {
      return {
        username: false,
        mobile: '',
        touxiang: '',
        mylist: [{ title: '我的积分', path: '/service', icon0: '#icon-jifen' },
          { title: '我的优惠券', path: '/service', icon0: '#icon-youhuiquan' },
          { title: '我的评价', path: '/service', icon0: '#icon-xiaoxi' }
        ]
      }
    },
    methods: {
      getUsername() {
        this.username = Lockr.get('userInfo').username
      }
    },
    created() {
      let authKey = Lockr.get('token')

      if (authKey) {
        this.getUsername()
      } else {
        this.username = false
      }
    },
    watch: {
      '$route'(to, from) {
        this.$router.go(0)
      }
    },
    mixins: [http]
  }
</script>


