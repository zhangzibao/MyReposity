<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease" v-show="food.nums > 0" @click.stop.prevent="decreaseCart">
                <span class="inner icon-remove_circle_outline"></span>
            </div>
        </transition>
        <div class="cart-count" v-show="food.nums > 0">{{ food.nums }}</div>
        <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import http from '../../assets/js/http'

  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {}
    },
    methods: {
      addCart(event) {
        // 防止多次被点击
        if (!event._constructed) {
          return
        }
        let addfd = {}
        addfd['foods'] = this.food.id
        addfd['nums'] = 1
        addfd['seller'] = 2
        this.apiPost('shopcarts/', addfd).then((res) => {
          this.food.nums++
          this.$nextTick(() => {
            bus.$emit('cart.add', event.target)
          })
        })
      },
      decreaseCart(event) {
        // 防止多次被点击
        if (this.food.nums <= 0 || !event._constructed) {
          return
        } else {
          let remofd = {}
          remofd['foods'] = this.food.id
          remofd['nums'] = -1
          remofd['seller'] = 2
          this.apiPost('shopcarts/', remofd).then((res) => {
            this.$nextTick(() => {
              this.food.nums--
              bus.$emit('cart.inner', event.target)
            })
          })
        }
      }
    },
    mixins: [http]
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .cartcontrol {
        font-size: 0;
        .cart-decrease {
            display: inline-block;
            padding: 6px;
            .inner {
                display: inline-block;
                line-height: 24px;
                font-size: 24px;
                /*color: rgb(0, 160, 220);*/
                color: #e2bf1e;
            }
            &.move-enter-active, &.move-leave-active {
                transition: all .5s;
                transform: translate3d(0, 0, 0);
                .inner {
                    transition: all .5s;
                    transform: rotate(0deg);
                }
            }
            &.move-enter, &.move-leave-active {
                opacity: 0;
                transform: translate3d(24px, 0, 0);
                .inner {
                    transform: rotate(180deg);
                }
            }
        }
        .cart-count {
            display: inline-block;
            vertical-align: top;
            width: 12px;
            padding-top: 6px;
            line-height: 24px;
            text-align: center;
            font-size: 10px;
            color: rgb(147, 153, 159);
        }
        .cart-add {
            display: inline-block;
            line-height: 24px;
            font-size: 24px;
            padding: 6px;
            /*color: rgb(0, 160, 220);*/
            color: #e2bf1e;
        }

    }
</style>
