<template>
    <body style="background: #fff">
    <welcome :title1="'订单详情'" style="z-index: 5"></welcome>
    <div class="details-box">
        <div class="details-success">
            <p>订单状态：{{order_status[getQuery.order_status]}}</p>
            <img src="https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/order/no-pay_79c2dfe.png">
        </div>

        <div class="details-address">
            <p class="address-box">
                <span class="name">订餐人：{{username}}</span>
                <span class="phone">15255460858</span>
            </p>
            <p class="address-details">商家：学校食堂</p> <!--{(order.seller}}-->

        </div>
        <div class="details-list">
            <div class="details-list-1" v-for="list in getQuery.o_id">
                <img :src="list.foods.image">
                <p>
                    <!-- <span>id是{{list.id}}</span> -->
                    <span class="name">{{list.foods.name}}
                <p>× {{list.num}}</p></span>
                <span class="price">¥ {{list.foods.price}}</span>
                </p>
            </div>

            <div class="details-list-2">
                <div class="details-list-2-1">
                    <p>
                        <span class="span-1">订单优惠：</span>
                        <span class="span-2">订单满68元包邮</span>
                    </p>
                    <p>
                        <span class="span-1">订单备注：</span>
                        <span class="span-2">{{getQuery.post_script}}</span>
                    </p>
                </div>
                <div class="details-list-2-3">
                    <p>
                        <span class="span-1">配送方式：</span>
                        <span class="span-2">顺丰速运 免邮</span>
                    </p>
                    <p>
                        <span class="span-1">支付方式：</span>
                        <span class="span-2">支付宝</span>
                    </p>
                    <p>
                        <span class="span-1">发票类型：</span>
                        <span class="span-2">个人</span>
                    </p>
                    <p>
                        <span class="span-1">发票抬头：</span>
                        <span class="span-2">{{username}}</span>
                    </p>
                </div>
            </div>
            <!-- <img :src="list.homeImg" /> -->

            <div class="order-footer">
                总计：
                <span>¥{{getQuery.pay_price}}</span>
            </div>
        </div>
    </div>
    </body>
</template>

<script>
  import welcome from '../common/back-title'

  export default {
    name: 'o1',
    data() {
      return {
        order_status: [
          '未接单',
          '已接单',
          '已配餐',
          '已取餐',
          '已评价'
        ],
        username: '',
        orderdetail: {}
      }
    },
    computed: {
      getQuery() {
        // console.log(this.$route.query.dataObj)
        return this.$route.params.dataObj
      }
    },
    components: {
      welcome
    },
    beforeRouteLeave(to, from, next) {
      this.$destroy()
      next()
    },
    created() {
      let authKey = Lockr.get('token')
      if (!authKey) {
        router.replace('/login/')
        return
      }
      this.username = Lockr.get('userInfo').username
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
    .details-box {
        width: 100%;
        position: absolute;
        top: 1rem;

    }

    .details-success {
        width: 100%;
        height: 2.4rem;
        background: #e2bf1e;

        p {
            color: #fff;
            font-size: 0.3rem;
            line-height: 2.4rem;
            float: left;
            padding-left: 0.4rem;
        }

        img {
            width: 2.7rem;
            margin: 0.5rem;
            float: right;
        }
    }

    .details-address {
        width: 100%;
        min-height: 1rem;
        background: #fff;
        .address-box {
            width: 87%;
            margin: auto;
            font-size: 0.35rem;
            padding-top: 0.3rem;
            padding-bottom: 0.3rem;

            .phone {
                float: right;
            }
        }

        .address-details {
            border-top: 1px solid #e8e8e8;
            width: 87%;
            margin: auto;
            color: #666;
            font-size: 0.35rem;
            padding: 0.2rem 0;
        }

    }

    .details-list {
        width: 100%;
        margin-bottom: 1.3rem;

        .details-list-1 {
            width: 100%;
            height: 2.5rem;
            background: #ffffff;
            margin-top: .05rem;

            img {
                width: 2.5rem;
                height: 1.9rem;
                margin: 0.28rem;
                float: left;
            }

            p {
                display: flex;
                flex-direction: column;

                .name {
                    font-size: 0.35rem;
                    margin-top: 0.3rem;
                    height: 0.6rem;
                }

                .price {
                    color: red;
                    font-size: 0.3rem;
                    font-weight: 500;
                    height: 0.6rem;
                }

                span {
                    p {
                        float: right;
                        margin-right: 0.5rem;
                    }
                }
            }
        }

        .details-list-2 {
            width: 100%;
            min-height: 2rem;
            background: #ffffff;

            div {
                width: 90%;
                margin: auto;
                padding-top: 0.3rem;
                padding-bottom: 0.3rem;
                font-size: 0.31rem;
                border-top: 1px solid #e8e8e8;
                display: flex;
                flex-direction: column;
                p {
                    display: flex;
                    flex-direction: row;
                }

                span {
                    color: #888;
                    /*float: left;*/
                }

                .span-1 {
                    width: 2.3rem;
                    display: block;
                }
            }

            .details-list-2-1 {
                height: 2rem;

                p {
                    height: 0.76rem;
                    line-height: 0.76rem;
                }
            }

            .details-list-2-2 {
                height: 3.5rem;

                p {
                    height: 0.76rem;
                    line-height: 0.76rem;
                }

                .red {
                    color: red;
                }
            }

            .details-list-2-3 {
                height: 3.3rem;

                p {
                    height: 0.76rem;
                    line-height: 0.76rem;
                }
            }
        }

        .order-footer {
            width: 100%;
            height: 1.3rem;
            background: #fff;
            position: fixed;
            bottom: 0;
            line-height: 1.3rem;
            padding-left: 0.5rem;
            font-size: 0.33rem;
            border-top: 1px solid #eaeaea;

            span {
                color: red;
            }
        }
    }
</style>
