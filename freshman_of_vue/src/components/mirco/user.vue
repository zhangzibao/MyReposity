<template>
  <body>
  <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <div class="row">
      <ol class="breadcrumb">
        <li><a href="#"><span class="glyphicon glyphicon-home"></span></a></li>
        <li class="active">详情</li>
      </ol>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="col-md-12 column">
              <form class="form-horizontal" role="form" method="post">
                <div class="form-group" style="border-bottom: 1px solid #d0d0d0;padding: 20px 0  20px 0;">
                  <label class="col-sm-2 control-label">用户昵称：</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" placeholder="请输入用户昵称或ID"/>
                  </div>
                  <div class="col-sm-1">
                    <button class="btn">查询</button>
                  </div>
                </div>
              </form>
              <table class="table table-bordered" id="user-table">
                <thead>
                <tr v-for="usertitle in userlist.title">
                  <th>
                    {{usertitle.id}}
                  </th>
                  <th>
                    {{usertitle.name}}
                  </th>
                  <th>
                    {{usertitle.numcode}}
                  </th>
                  <th>
                    {{usertitle.cashred}}
                  </th>
                  <th>
                    {{usertitle.lasttime}}
                  </th>
                  <th>
                    {{usertitle.operation}}
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="users in userlist.users">
                  <td>
                    {{users.id}}
                  </td>
                  <td>
                    <img :src="users.name['icon']" alt="">
                    {{users.name['name']}}
                  </td>
                  <td>
                    {{users.numcode}}
                  </td>
                  <td>
                    {{users.cashred}}
                  </td>
                  <td>
                    {{users.lasttime}}
                  </td>
                  <td>
                    <a @click="view(users.id)">{{users.operation}}</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>
<script>
  const ERR_OK = 0;
  export default {
    props: {},
    data() {
      return {
        userlist: {}
      }
    },
    created() {
      this.$http.get('/api/userlist').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {

          this.userlist = response.data;
          // console.log(this.sweepcodedata );
        }
      })
    },
    methods:{
      view(id){
        this.$router.push({path:"/user_detail",query:{id:id,mode:"view"}})
      }

    },
    mounted() {

    }
  }
</script>
<style lang="less" scoped>
  @import url("../../assets/less/styles.less");
</style>
</template>
