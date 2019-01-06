<template>
  <div class="award-setting _mainer act-steps">
    <div class="container" id="award-setting">
      <h3>奖励设置</h3>
      <p>您的现金红包配置范围为1.00-200.00元</p>
      <div class="award-details">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>
              奖励类型
            </th>
            <th>
              奖励内容
            </th>
            <th>
              数量
            </th>
            <th>
              已发/总量
            </th>
            <th>
              参与限制
            </th>
            <th>
              二维码预览
            </th>
            <th>
              编辑&删除
            </th>
          </tr>
          </thead>
          <tbody id="term-content">
          <tr class="error">
            <td>
              1
            </td>
            <td>
              1
            </td>
            <td>
              1
            </td>
            <td>
              1
            </td>
            <td>
              TB - Monthly
            </td>
            <td>
              <img src="../../assets/img/qr.png" class="QR-code cli-bigger">
              <!-- <div style="width:50px;height: 50px;" class="img-instead"></div> -->

            </td>
            <td>
              <span class="award-edit"></span>
              <span class="award-delete"></span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="award-edit container">
        <a id="modal-673266" href="#modal-container-673266" role="button" class="btn" data-toggle="modal">
          <button>添加奖励</button>
        </a>

        <div class="modal fade" id="modal-container-673266" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title" id="myModalLabel">
                  添加奖励
                </h4>
              </div>
              <!-- 表单提交 -->
              <form class="form-horizontal" @submit.prevent="submit">
                <div class="modal-body">

                  <div class="form-group" id="term-form">
                    <label for="inputPassword3" class="col-sm-2 control-label">奖励类型:</label>
                    <div class="col-sm-10">
                      <div class="select select-options">
                        <select v-model="redaward.type">
                          <option>现金红包</option>
                        </select>
                      </div>
                      <div class="clear"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">奖励内容</label>
                    <div class="col-sm-5 input_span">
                      <div class="form-control">
                        <input type="number" class="limit-num-0-200" name="content"
                               v-model="redaward.content"><span>元</span>
                        <div class="clear"></div>
                      </div>
                      <span>*最大输入金额为200元</span>
                      <div class="clear"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">数量</label>
                    <div class="col-sm-5 input_span">
                      <div class="form-control">
                        <input type="number" name="num" v-model="redaward.num"/><span>个</span>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">参与限制:</label>
                    <div class="col-sm-10">
                      <div class="select select-options">
                        <select v-model="redaward.limit">
                          <option>每人只可领一次</option>
                          <option>每人一天可领一次</option>
                          <option>每人一天可领两次</option>
                        </select>
                      </div>
                      <div class="clear"></div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                  <input class="btn btn-primary" type="submit" value="添加"/>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>

</template>
<script type="text/ecmascript-6" scoped>
  export default {
    data() {
      return {
        redaward: {
          type: '现金红包',
          content: "",
          num: "",
          limit: '每人只可领一次'
        }
      }
    },
    methods: {
      submit() {
        console.log(this.redaward);

      }

    },
    watch: {
      'redaward.content': function (newVal, oldVal) {

        if (newVal > 200) {//如果值大于200
          this.redaward.content = 200
        }
        else if (newVal <=0) {
          this.redaward.content = 5
        }
      },
      "redaward.num": function (newVal, oldVal) {

        if (newVal <=0) {
          this.redaward.num = 1
        }
      }
    },
    mounted() {

      //二维码预览
      var clone;
      $(".cli-bigger").hover(function () {
          clone = $(this).clone(true);
          clone.css({
            "visibility": "hidden"
          });
          $(this).parent().append(clone);
          $(this).addClass("img-bigger");
        },
        function () {
          clone.remove();
          $(this).removeClass("img-bigger");
        });
    }
  }
</script>
