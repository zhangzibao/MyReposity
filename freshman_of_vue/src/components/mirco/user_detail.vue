<template>
  <body>
  <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <div class="row">
      <ol class="breadcrumb">
        <li><a href="#"><span class="glyphicon glyphicon-home"></span></a></li>
        <li class="active">用户中心</li>
        <li class="active">用户详情</li>
      </ol>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-body"  v-if="userdetail.name">
            <div class="col-md-12 column user-detail">
              <div class="col-sm-3" style="">
                <img :src="userdetail.name['icon']" alt="">
                <p><span>{{userdetail.id}}</span></p>
              </div>
              <div class="col-sm-2">
                <h3>{{userdetail.numcode}}</h3>
                <p>扫码量（个）</p>

              </div>
              <div class="col-sm-2">
                <h3>{{userdetail.cashred}}</h3>
                <p>现金红包（元）</p>
              </div>
            </div>
            <p style="text-align:left;margin:0 0 15px 5px;font-size: 15px;color: #262626;">扫码记录</p>
            <table class="table table-bordered" id="user-orcode-table">
              <thead>
              <tr >
                <th>
                  {{userdetail.codereport.title['time']}}
                </th>
                <th>
                  {{userdetail.codereport.title['num']}}

                </th>
                <th>
                  {{userdetail.codereport.title['content']}}

                </th>
                <th>
                  {{userdetail.codereport.title['name']}}

                </th>
                <th>
                  {{userdetail.codereport.title['lasttime']}}

                </th>
                <th>
                  {{userdetail.codereport.title['awardcontent']}}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="reportlist in userdetail.codereport.content">
                <td>
                  {{reportlist.time}}
                </td>
                <td>
                  {{reportlist.num}}

                </td>
                <td>
                  {{reportlist.content}}

                </td>
                <td>
                  {{reportlist.name}}

                </td>
                <td>
                  {{reportlist.lasttime}}
                </td>
                <td>
                  {{reportlist.awardcontent}}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>
<script>
  const ERR_OK = 0
  export default {
    props: {},
    data() {
      return {
        userdetail:[]
      }
    },
    created() {
      let userid = this.$route.query.id;
      this.$http.get('/api/userlist').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          let users=response.data.users;
          for(var i=0;i< users.length;i++){
            if (users[i].id==userid) {
              this.userdetail = users[i];
              console.log(users[i]);
              break;
            }
          }

        }
      })
    },
    methods: {


    },
    mounted() {

    }
  }
</script>
<style lang="less" scoped>
  @import url("../../assets/less/styles.less");
</style>
</template>
