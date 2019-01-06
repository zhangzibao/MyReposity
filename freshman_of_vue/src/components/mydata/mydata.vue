<template>
  <body style="background:#f0f3f7;">
  <div class="_mainer" id="my-data-nav">
    <div class="container" id="data-nav-main">
        <div class="data-nav-content" v-for="maindata in sweepcodedata.main_data">
          <h4>{{maindata.name}}</h4>
          <div></div>
          <div class="nav-img">
            <img src="./jaw_7.png" alt="">
          </div>
          <div class="data-nav-text">
            <h4>6</h4>
          </div>
          <div class="data-nav-time">
            昨：<span>{{maindata.yesterday}}</span>
            今：<span>{{maindata.today}}</span>
            周：<span>{{maindata.week}}</span>
          </div>
        </div>
    </div>
  </div>
  <div class="_mainer" id="data-table">
    <div class="container" id="data-table-main">
    </div>
  </div>

  <div class="_mainer" id="data-cost">
    <!-- <h4>成本数据</h4> -->

    <div class="container" id="data-cost-main">
      <h5>现金成本数据 <span><img src="../../assets/img/note.png" alt=""></span></h5>
      <div class="cost-all-count" v-for="cashdata in sweepcodedata.cashdata">
        <h3>{{cashdata.content}}元</h3>
        <p>{{cashdata.name}}</p>
      </div>
    </div>

  </div>

  </body>
</template>
<script scoped>
  let echarts = require('echarts/lib/echarts')
  const ERR_OK = 0
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')
  export default {
    props: {},
    data() {
      return {
        sweepcodedata: {}
      }
    },
    created() {
      this.$http.get('/api/sweepcodedata').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {

          this.sweepcodedata = response.data;
          // console.log(this.sweepcodedata.main_data);

          this.drawline(this.sweepcodedata.main_data);
        }
      });

    },
    mounted() {

    },
    methods: {
      drawline(maindata){
        //获取对应的每周或每月数据，集合在brr中
        var brr=[]
        for(var i=0;i<maindata.length;i++){
          var arr = []
          for (var j in maindata[i].lastweek) {
            arr.push(maindata[i].lastweek[j]); //属性
          }
          brr.push(arr);
        }

        // console.log(brr);
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('data-table-main'));
        // 绘制图表
        myChart.setOption({
          title: {
            text: "数据趋势图",
            left: 10
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            right: 10,
            data: ['扫码量', '广告分享量', '朋友圈点击量', '小程序访问量']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [
            {
              name: '扫码量',
              type: 'bar',
              data:brr[0]
            },
            {
              name: '广告分享量',
              type: 'bar',
              data:brr[1]
            },
            {
              name: '朋友圈点击量',
              type: 'bar',
              data:brr[2]
            },
            {
              name: '小程序访问量',
              type: 'bar',
              data:brr[3]
            }

          ]
        });
      }
    }
  }
</script>
<style lang='less' scoped>
  @import url('../../assets/less/styles.less');
</style>
