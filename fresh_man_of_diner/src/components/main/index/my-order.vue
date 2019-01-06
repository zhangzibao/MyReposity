<template>
    <body style="padding-bottom: 1.2rem">
    <div class="inform-set">
        <h1 style="">订单</h1>
    </div>
    <div style="padding: .5rem"></div>
    <div class="box-card" v-for="order in orders">
        <div class="header">
            <span class="span_1">学校食堂</span> <!--{(order.seller}}-->
            <span class="span_2">{{order_status[order.order_status]}}</span>
        </div>
        <div class="cardfoods">
            <div class="card-main">
                <p>{{order.o_id[0].foods.name}}<span>x{{order.o_id[0].num}}</span></p>
                <p>￥{{order.pay_price}}<span>共{{order.nums}}件商品</span></p>
                <p v-show="order.order_status == 0" style="color:#FF0000;margin:.1rem 0 0 .2rem">已付款等待接单中...</p>
                <el-form :model="form" ref="form" class="submitget" v-show="order.order_status == 1">
                    <el-form-item>
                        <el-button type="primary" style="width:100%;background: #e2bf1e;border-color:#f4ea2a" @click="changestatus(order.id)">
                            确认领餐
                        </el-button>
                    </el-form-item>
                </el-form>
                <el-form :model="form" ref="form" class="submitget" v-show="order.order_status== 2">
                    <el-form-item>
                        <el-button type="primary" style="width:100%;background: #FF0000;border:none"
                                   @click="deleteorder(order.id)">
                            删除订单
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="card-click" @click="selectOrder(order, $event)">
                <span> > </span>
            </div>
        </div>
    </div>
    </body>
</template>
<script>
  import detail from '../../order/orderdetail'
  import Vue from 'vue'

  export default {
    name: 'order',
    data() {
      return {
        nums: 0,
        orders: {},
        nowIndex: 0,
        order_status: [
          '未接单',
          '已接单',
          '已配餐',
          '已取餐',
          '已评价'
        ],
        t: [
          {
            item: '全部'
          },
          {
            item: '待付款'
          },
          {
            item: '待收货'
          },
          {
            item: '待评价'
          }
        ]
      }
    },
    components: {
      detail
    },
    created() {
      let authKey = Lockr.get('token')

      if (!authKey) {
        _g.toastMsg('warning', '您还未登录，请先登录')
        setTimeout(() => {
          router.replace('/login/')
        }, 1000)
        return
      }
      this.username = Lockr.get('userInfo').username
      this.getorders()
    },
    computed: {},
    methods: {
      getorders() {
        axios.get('orders/').then((response) => {
          response = response.data
          this.orders = response
          this.orders.forEach((value) => {
            Vue.set(value, 'nums', 0)
            value.o_id.forEach((orderfood) => {
              value.nums += orderfood.num
            })
            // console.log(value.nums)
          })
          // console.log(response)
        })
      },
      selectOrder(order, event) {
        // if (!event._constructed) {
        //   return
        // }
        router.push({
          name: 'orderdetail',
          params: {
            dataObj: order
          }
        })
      },
      changestatus(id) {
        let data = {}
        data.id = id
        data.status = 2

        this.$confirm('确认取餐吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          axios.put('myorder/', data).then((res) => {
            _g.toastMsg('success', '取餐成功')
          })
          setTimeout(() => {
            router.go(0)
          }, 1000)
        })
      },
      deleteorder(id) {
        let param = {}
        param.id = id
        this.$confirm('确定删除订单吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          axios.post('myorder/', param).then((res) => {
            _g.toastMsg('success', '删除成功')
            setTimeout(() => {
              router.go(0)
            }, 500)
          })
        })
      }
    },
    beforeRouteEnter(to, from, next) {
      if (from.name === 'pay') {
        router.go(0)
      }
      next()
    }
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

    .box-card
        width: 100%;
        min-height 1rem
        background: #fff;
        border-radius 5px
        padding-left .5rem
        border-bottom: 1px solid #d0d0d0
        .header
            width: 100%;
            padding .2rem 0
            border-bottom: 1px solid #d0d0d0
            display flex
            flex-direction row
            justify-content space-between

            span
                margin-right .2rem

            .span_1
                font-size: 16px;
                font-weight 600

            .span_2
                font-size: 14px;
                font-weight 200

        .cardfoods

            padding .3rem 0
            /*border-bottom 1px solid #d0d0d0*/
            display flex
            flex-direction row
            justify-content space-between
            .card-main
                display flex
                flex-direction column
                p
                    font-size 16px
                    margin-bottom .1rem
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                    span
                        color grey
                        font-size 14px
                        margin-left .5rem
                        letter-spacing 1px
                .submitget
                    width: 3rem
                    height 0.8rem
                    margin-top .2rem
            .card-click
                /*background #FF0000*/
                width 40%
                max-height 5rem
                display flex
                justify-content center
                align-items center
                span
                    color #f4ea2a
                    font-size .5rem


</style>
