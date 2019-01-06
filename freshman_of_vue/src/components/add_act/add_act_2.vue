<template>
  <div class="add-act _mainer act-steps" style="background:#f0f3f7;padding:20px;">
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <div class="row clearfix model-kind" v-for="">
            <div class="col-md-5 column model-img-display" style="">
              <p>模板示意图</p>
              <img :src="imgUrl" alt="">
            </div>
            <!-- 1号模板编辑 -->

            <div class="col-md-6 column model-edit model-edit-1" v-if="model_edit_show[0]>0">
              <form>
                <div class="row clearfix">
                  <!-- <div class="form-group"> -->
                  <label>主标题</label>
                  <div class="clear"></div>
                  <input type="email" class="form-control main-title" v-model="model1_data.m1_title"/>
                  <!-- </div> -->
                </div>
                <div class="row clearfix">
                  <div class="img-upload">
                    <label>主题图 <span>推荐尺寸：375px *256px</span></label>
                    <div class="clear"></div>
                    <div class="upload one empty img-upload-case" data-num="1" action=""></div>
                  </div>

                  <div class="text-input">
                    <label>活动说明</label>
                    <div class="clear"></div>
                    <textarea class="form-control" v-model="model1_data.m1_information" cols="30" rows="10"
                              placeholder="">
                  </textarea>
                  </div>
                </div>
              </form>
            </div>
            <!-- 2号模板编辑 -->
            <div class="col-md-6 column model-edit model-edit-2" v-if="model_edit_show[1]>0">
              <form>
                <div class="row clearfix">
                  <label>活动推广<span>*换行请输入&lt;/br&gt;</span></label>
                  <div class="clear"></div>
                  <textarea class="form-control" v-model="model2_data.m2_adver" cols="30" rows="4">
                </textarea>
                </div>
                <div class="row clearfix">
                  <div class="text-input">
                    <label>活动解释<span>*换行请输入&lt;/br&gt;</span></label>
                    <div class="clear"></div>
                    <textarea class="form-control" cols="30" rows="10" v-model="model2_data.m2_explain"></textarea>
                  </div>
                  <div class="img-upload">
                    <label>二维码<span>*任意尺寸皆可</span></label>
                    <div class="clear"></div>
                    <div class="upload one empty img-upload-case" data-num="1" action="/add_act"></div>

                  </div>
                </div>
              </form>
            </div>
            <!-- 3号模板编辑 -->
            <div class="col-md-6 column model-edit model-edit-3" v-if="model_edit_show[2]>0">
              <form>
                <div class="row clearfix">
                  <div class="text-input">
                    <label>主标题&副标题：</label>
                    <div class="clear"></div>
                    <input type="text" class="form-control main-title" style="margin-bottom:10px;" v-model="model3_data.m3_title1"/>
                    <div class="clear"></div>
                    <input type="text" class="form-control main-title" v-model="model3_data.m3_title2"/>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="text-input edit-red-model-limit col-md-12 column">
                    <label>红包金额&使用限制 <span>*最大输入金额为200元</span></label>
                    <div class="clear"></div>
                    <div class="col-sm-4 input_span">
                      <div class="form-control">
                        <input type="number" v-model="model3_data.m3_red1num"/><span>元</span>
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="col-sm-8 input_span">
                      <div class="form-control">
                        <input type="text" v-model="model3_data.m3_red1text" />
                        <div class="clear"></div>
                      </div>
                    </div>
                    <div class="col-sm-4 input_span">
                      <div class="form-control">
                        <input type="number" v-model="model3_data.m3_red2num"/><span>元</span>
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="col-sm-8 input_span">
                      <div class="form-control">
                        <input type="text" v-model="model3_data.m3_red2text"/>
                        <div class="clear"></div>
                      </div>
                    </div>
                    <div class="col-sm-4 input_span">
                      <div class="form-control">
                        <input type="number" v-model="model3_data.m3_red3num"/><span>元</span>
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="col-sm-8 input_span">
                      <div class="form-control">
                        <input type="text" v-model="model3_data.m3_red3text"/>
                        <div class="clear"></div>
                      </div>
                    </div>
                    <div class="col-sm-4 input_span">
                      <div class="form-control"><input type="number" v-model="model3_data.m3_red4num"/><span>元</span>
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="col-sm-8 input_span">
                      <div class="form-control">
                        <input type="text" v-model="model3_data.m3_red4text"/>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="text-input">
                    <label>底部标题：</label>
                    <div class="clear"></div>
                    <input type="text" class="form-control main-title" v-model="model3_data.m3_title3"/>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="text-input">
                    <label>温馨提示：</label>
                    <div class="clear"></div>
                    <input type="text" class="form-control main-title" v-model="model3_data.m3_title4"/>
                  </div>
                </div>
              </form>
            </div>

            <!-- 4号模板编辑 -->
            <div class="col-md-6 column model-edit model-edit-4" v-if="model_edit_show[3]>0">
              <form>
                <div class="row clearfix">
                  <div class="text-input">
                    <label>主标题&副标题：</label>
                    <div class="clear"></div>
                    <input type="text" class="form-control main-title"
                           style="margin-bottom:10px;" v-model="model4_data.m4_title1"/>
                    <div class="clear"></div>
                    <input type="text" class="form-control main-title" v-model="model4_data.m4_title2"/>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="text-input">
                    <label>活动时间</label>
                    <div class="clear"></div>
                    <input type="text" class="form-control main-title"
                           style="margin-bottom:10px;" v-model="model4_data.m4_time"/>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="text-input edit-red-model-limit col-md-12 column">
                    <label>红包金额 <span>*最大输入金额为200元</span></label>
                    <div class="clear"></div>
                    <div class="col-sm-4 input_span">
                      <div class="form-control">
                        <input type="number" v-model="model4_data.m4_red1num"/><span>元</span>
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="col-sm-4 input_span">
                      <div class="form-control">
                        <input type="number" v-model="model4_data.m4_red2num"/><span>元</span>
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="col-sm-4 input_span">
                      <div class="form-control">
                        <input type="number" v-model="model4_data.m4_red3num"/><span>元</span>
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="col-sm-4 input_span">
                      <div class="form-control">
                        <input type="number" v-model="model4_data.m4_red4num"/><span>元</span>
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="col-sm-4 input_span">
                      <div class="form-control">
                        <input type="number" v-model="model4_data.m4_red5num"/><span>元</span>
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="col-sm-4 input_span">
                      <div class="form-control">
                        <input type="number" v-model="model4_data.m4_red6num"/><span>元</span>
                        <div class="clear"></div>
                      </div>
                      <div class="clear"></div>
                    </div>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="text-input">
                    <label>活动规则：<span>*换行请输入&lt;/br&gt;</span></label>
                    <div class="clear"></div>
                    <textarea class="form-control" id="" cols="30" rows="10" placeholder=""
                              v-model="model4_data.m4_information"></textarea>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="text-input">
                    <label>底部内容</label>
                    <div class="clear"></div>
                    <input type="text" class="form-control main-title" style="margin-bottom: 10px;" v-model="model4_data.m4_title3"/>
                    <input type="text" class="form-control main-title" v-model="model4_data.m4_title4"/>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import '../../assets/js/jQuery.upload.min.js'
  import bus from '../../common/eventBus.js'
  import modelimg_1 from '../../assets/img/model_1.jpg'
  import modelimg_2 from '../../assets/img/model_2.jpg'
  import modelimg_3 from '../../assets/img/model_3.jpg'
  import modelimg_4 from '../../assets/img/model_4.jpg'

  var modelimgs = [modelimg_1, modelimg_2, modelimg_3, modelimg_4]
  export default {

    data() {
      return {
        model_edit_show: [1, -1, -1, -1],
        imgUrl: modelimg_1,

        model1_data: {
          m1_title: "活动规则",
          m1_information: ""
        },
        model2_data: {
          m2_adver: "转发让更多人来参加活动，万利鸿通送您50元红包，现在就用手机注册登录我们的后台领取奖励吧",
          m2_explain: ""
        },
        model3_data: {
          m3_title1: "恭喜你！",
          m3_title2: "获得199元大礼包",
          m3_title3: "全民有红包",
          m3_title4: "点击领取红包后可在购买产品时自动抵扣。",
          m3_red1num: "",
          m3_red1text: "商城机油商品通用/无限制",
          m3_red2num: "",
          m3_red2text: "除银鹭1升外，其他通用",
          m3_red3num: "",
          m3_red3text: "4升装机油商品可用",
          m3_red4num: "",
          m3_red4text: "极动系列4升装商品可用"
        },
        model4_data: {
          m4_title1: "微信领红包",
          m4_title2: "多重红包等你来拿",
          m4_title3: "随时任性领，投资狂欢HIGH起来",
          m4_title4: "活动期间，全天午休！随时随地，想投就投",
          m4_time: "即日起-2016年2月19日24:00",
          m4_information: "",
          m4_red1num: "",
          m4_red2num: "",
          m4_red3num: "",
          m4_red4num: "",
          m4_red5num: "",
          m4_red6num: "",
        },
      }
    },
    created() {

    },
    beforeRouteEnter(to, from, next) {
      if (from.path === "/add_act_1" && to.path === "/add_act_2") {
        //打印出从那个路径跳转到哪个路径
        // console.log("from:" + from.path + " to:" + to.path);
        next(vm => {
          //获取参数关于该显示哪个模板编辑
          if (typeof from.params.model_edit_show != 'undefined') {

            vm.model_edit_show = from.params.model_edit_show;
            for (var i = 0; i < vm.model_edit_show.length; i++) {
              if (vm.model_edit_show[i] == 1) {
                vm.imgUrl = modelimgs[i];
              }
            }
          }
        });
      }
      next();
    },
    mounted() {
      var $this = this;
      //图片上传
      $(".img-upload-case").upload(function (_this, data) {
        console.log(data)
      });
    },
    beforedestroyed() {
      eventBus.$off('eventBusName');
    }
  }
</script>
<style lang="less">
  @import url('../../assets/less/upload.css');
</style>
