<template>
    <div>
        <welcome :title1="'提交订单'" style="margin:0"></welcome>
        <div class="pay-address">
            <p class="address-box">
                <span class="name">点餐人：{{username}}</span>
                <span class="phone">15255460858</span>
            </p>
            <p class="address-details">
                商家信息：{{Order.seller}}
            </p>
        </div>
        <div class="pay-shop">
            <div class="pay-shop-list">
                <p class="pay-shop-1">商品清单</p>
                <div class="pay-shop-2" v-for="item in getQuery.foods">
                    <img :src="item.image">
                    <div class="pay-shop-2-box">
                        <span class="name">{{item.name}}
                    <p>× {{item.nums}}</p></span>
                        <span class="price">¥ {{item.price}}</span>
                    </div>
                </div>
            </div>

            <div class="pay-shop-liuyan">
                <p class="pay-liuyan-1">订单留言</p>
                <div class="pay-liuyan-2">
                    <textarea rows="5" placeholder="限300字（若有特殊需求，请联系商城在线客服)"
                              maxlength="300" v-model="Order.post_script"></textarea>
                    <p>商品总金额：¥{{Order.pay_price}}</p>
                    <p>运费：0.00</p>
                    <p>优惠：¥0.00</p>

                </div>
            </div>
            <div class="pay-shop-footer">
                <p class="price">订单总金额：<span>¥{{Order.pay_price}}</span></p>
                <a class="order" @click="addOrder()" v-loading="loading">提交订单</a>
            </div>
        </div>
    </div>
</template>
<script>
  import welcome from '../common/back-title'

  export default {
    name: 'pay',
    data() {
      return {
        loading: false,
        Order: {
          post_script: '',
          pay_price: '',
          seller: ''
        },
        listIndex: 0,
        invoiceIndex: 0,
        pay: {},
        username: '',
        lists: [
          {
            id: '1',
            name: '在线支付'
          },
          {
            id: '2',
            name: '花呗分期'
          },
          {
            id: '3',
            name: '货到付款'
          }
        ],
        text: '',
        ly: ''
      }
    },
    created() {
      let authKey = Lockr.get('token')

      if (!authKey) {
        router.replace('/login/')
        return
      }
      this.username = Lockr.get('userInfo').username
    },
    components: {
      welcome
    },
    computed: {
      getQuery() {
        // console.log(this.$route.params.dataObj)
        this.Order.pay_price = this.$route.params.dataObj.pay_price
        this.Order.seller = this.$route.params.dataObj.seller
        return this.$route.params.dataObj
      }
    },
    beforeRouteLeave(to, from, next) {
      this.$destroy()
      next()
    },
    methods: {
      btn(id, index) {
        this.listIndex = index
      },
      invoiceClick(index) {
        this.invoiceIndex = index
      },
      addOrder() {
        if (!this.Order.post_script) {
          this.Order.post_script = '无'
        }
        if (this.loading) return

        this.loading = !this.loading
        let data = {}
        data.seller = this.Order.seller
        data.post_script = this.Order.post_script ? this.Order.post_script : ' '
        data.pay_price = this.Order.pay_price
        axios.post('orders/', data).then((res) => {
          _g.toastMsg('success', '提交订单成功')
          setTimeout(() => {
            this.loading = !this.loading
            router.push('/my_order')
          }, 1000)
        }).catch(error => {          //  axios 配置里必须要 return Promise.reject(error.response.data)
          this.loading = !this.loading
          console.log(error)
          _g.toastMsg('warning', '网路连接错误')
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
    .active {
        border: 1px solid #444;
        color: red;
    }

    .pay-address {
        width: 100%;
        height: 2.6rem;
        background: url('https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/prod/bg-addr-box-line_d380baa.png') #fff left bottom repeat-x; // shopstatic.vivo.com.cn/vivoshop/wap/dist/images/prod/bg-addr-box-line_d380baa.png) #fff left bottom repeat-x;
        background-size: 1.6rem;
        padding-top: 0.3rem;
        display: block;
        margin-top: 1rem;

        .address-box {
            width: 87%;
            margin: auto;
            font-size: 0.4rem;
            padding-top: 0.3rem;
            padding-bottom: 0.3rem;

            .phone {
                float: right;
            }
        }

        .address-details {
            width: 87%;
            margin: auto;
            color: #666;
            font-size: 0.38rem;
        }
    }

    .pay-shop {
        width: 100%;
        margin-bottom: 1.5rem;

        .pay-shop-invoice {
            width: 100%;
            height: 4.3rem;
            background: #fff;
            margin-bottom: 10px;
            margin-top: 10px;

            .pay-invoice-1 {
                width: 100%;
                height: 1.5rem;
                line-height: 1.5rem;
                border-bottom: 1px solid #eaeaea;
                font-size: 0.4rem;
                padding-left: 0.7rem;
            }

            .pay-invoice-2 {
                width: 100%;
                height: 4rem;

                .pay-invoice-2-1 {
                    width: 100%;
                    height: 30%;

                    div {
                        display: block;
                        width: 2.88rem;
                        height: 0.9rem;
                        line-height: 0.9rem;
                        border: 1px solid #d1d1d1;
                        border-radius: 3px;
                        margin: 0.1rem 0.3rem;
                        float: left;
                        text-align: center;
                    }
                }

                .pay-invoice-2-2 {
                    width: 92%;
                    height: 70%;
                    margin: auto;
                    font-size: 0.35rem;
                    p {
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }

                    input {
                        width: 100%;
                        height: 1.18rem;
                        border: 1px solid #d1d1d1;
                        border-radius: 3px;
                        padding-left: 0.2rem;
                    }
                }
            }
        }

        .pay-shop-list {
            width: 100%;
            min-height: 0rem;
            margin: 0.2rem 0;
            background: #fff;
            display: flex;
            flex-direction: column;
            .pay-shop-1 {
                width: 100%;
                height: 1.2rem;
                line-height: 1.2rem;
                border-bottom: 1px solid #eaeaea;
                font-size: 0.4rem;
                padding-left: 0.7rem;
            }

            .pay-shop-2 {
                display: flex;
                flex-direction: row;
                img {
                    width: 2.5rem;
                    height: 1.5rem;
                    margin: 0.2rem;
                }
            }

            .pay-shop-2-box {
                width: 70%;
                display: flex;
                flex-direction: column;

                .name {
                    font-size: 0.4rem;
                    margin-top: 0.3rem;
                    height: 0.6rem;

                    p {
                        float: right;
                        margin-right: 0.5rem;
                    }
                }

                .price {
                    color: red;
                    font-size: 0.35rem;
                    font-weight: 500;
                    height: 0.6rem;
                }
            }
        }

        .pay-shop-liuyan {
            width: 100%;
            height: 5.5rem;
            background: #fff;
            margin-top: 0.3rem;
            margin-bottom: 0.3rem;

            .pay-liuyan-1 {
                width: 100%;
                height: 1rem;
                line-height: 1rem;
                border-bottom: 1px solid #eaeaea;
                font-size: 0.4rem;
                padding-left: 0.7rem;
            }

            .pay-liuyan-2 {
                width: 90%;
                margin: auto;

                textarea {
                    width: 100%;
                    height: 2rem;
                    border: 1px solid #d1d1d1;
                    border-radius: 3px;
                    padding: 0.15rem 0.2rem;
                    margin: 0.3rem auto;
                    display: block;
                }

                p {
                    color: #888;
                    height: 0.48rem;
                    font-size: 0.34rem;
                    margin: .05rem 0;
                }
            }
        }

        .pay-shop-fs {
            width: 100%;
            height: 5rem;
            background: #ffffff;

            .pay-fs-1 {
                width: 100%;
                height: 1rem;
                line-height: 1rem;
                border-bottom: 1px solid #eaeaea;
                font-size: 0.4rem;
                padding-left: 0.7rem;
            }

            .pay-fs-2 {
                width: 100%;
                height: 3.5rem;
                background: #ffffff;

                .pay-fs-2-1 {
                    width: 100%;
                    height: 40%;
                    font-size: 0.35rem;
                    // background yellow
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    div {
                        display: block;
                        width: 2.88rem;
                        height: 0.9rem;
                        line-height: 0.9rem;
                        border: 1px solid #d1d1d1;
                        border-radius: 3px;
                        margin: 0.1rem;
                        float: left;
                        text-align: center;
                    }
                }

                .pay-fs-2-2 {
                    width: 100%;
                    height: 60%;
                    font-size: 0.35rem;

                    // background red
                    div {
                        width: 90%;
                        height: 1.3rem;
                        border-radius: 3px;
                        border: 1px solid #d1d1d1;
                        margin: auto;
                        padding: 0.3rem;
                    }

                    .pay-fs-2-2-2 {
                        height: 1.56rem;
                    }
                }
            }
        }
    }

    .pay-shop-footer {
        width: 100%;
        min-height: 1rem;
        border-top: 1px solid #eaeaea;
        background: #f4ea2a;
        position: fixed;
        bottom: 0;

        .price {
            float: left;
            line-height: 1.5rem;
            font-size: 0.35rem;
            color: #666;
            padding-left: 0.3rem;

            span {
                color: red;
            }
        }

        .order {
            width: 3.3rem;
            height: 0.9rem;
            line-height: 0.9rem;
            font-size: 0.35rem;
            margin-top: 0.3rem;
            margin-right: 0.3rem;
            border-radius: 30px;
            text-align: center;
            color: #fff;
            background: #4cae4c;
            float: right;
        }
    }
</style>



