<template>
	<div class="add-act _mainer act-steps" style="display: block;">
		<div class="_mainer">

			<div class="container" id="act-type">
				<h3>活动类型</h3>
				<a href="" class="">
					<div class="act-bg-1 type-content">
						<div class="act-type-title">
							<h4>微活动</h4>
							<p>扫码直接抽奖</p>
						</div>
					</div>
					</a> 
				<a href="" class="">
					<div class="act-bg-2 type-content">
						<div class="act-type-title" >
							<h4>微促销</h4>
							<p>商品页拆促销红包抽奖</p>
						</div>
					</div>
				</a>
				<a href="" class="">
					<div class="act-bg-3 type-content">
						<div class="act-type-title">
							<h4>手气卡</h4>
							<p>玩游戏抽奖</p>
						</div>
					</div>
				</a>
				<a href="" class="">
					<div class="act-bg-4 type-content">
						<div class="act-type-title">
							<h4>微传单</h4>
							<p>看完图文再抽奖</p>
						</div>
					</div>
				</a>
				<div class="clear"></div>
			</div>
		</div>
		<div class="_mainer" style="background:#f0f3f7">
			<div class="container" id="act-name">
				<h3>活动名称</h3>
				<input type="text" name="act-name" placeholder="微客红包，生活有礼" class="form-control">
			</div>
		</div>
		<div class="_mainer" style="background:#f0f3f7">
			<div class="container" id="act-model" >
				<h3>页面模板</h3>
				<div class="act-model-container">
					<div id="act-model-main">
						<div class="act-model-div can-use" >
							<img src="../../assets/img/model_1.jpg" alt="">
							<p>活动详情</p>
							<div class="select-icon"></div>
						</div>
						<div class="act-model-div can-use" >
							<img src="../../assets/img/model_2.jpg" alt="">
							<p>活动详情</p>
							<div class="select-icon"></div>
						</div>
						<div class="act-model-div can-use" >
							<img src="../../assets/img/model_3.jpg" alt="">
							<p>活动详情</p>
							<div class="select-icon"></div>
						</div>
						<div class="act-model-div can-use" >
							<img src="../../assets/img/model_4.jpg" alt="">
							<p>活动详情</p>
							<div class="select-icon"></div>
						</div>
						<div class="clear"></div>
					</div>
					<div id="act-model-left" class="act-model-btn">
						<p> < </p>
					</div>
					<div id="act-model-right" class="act-model-btn">
						<p>></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import bus from '../../common/eventBus.js'	
	export default{
		data(){
			return {

			}
		},
		beforeRouteLeave(to,from,next){
			if(from.path==="/add_act_1"&&to.path==="/add_act_2"){
			 	 console.log("from:"+from.path+" to:"+to.path);	
			 	if(typeof this.model_edit_show!="undefined"){	 		
			 		from.params.model_edit_show=this.model_edit_show;
			 	}
			 	
			}		
			 next();

		},
		mounted() {
			var $this=this;
			//初始化
			$(".act-model-div").eq(0).addClass("blue-border");
			$(".act-model-div").eq(0).find("p").hide();
			$(".act-model-div").eq(0).find(".select-icon").show();

			$(".act-model-div").click(function() {
				$this.model_edit_show=[-1,-1,-1,-1];
				if (!$(this).hasClass("blue-border") && $(this).hasClass("can-use")) {
					var index = $(this).index();
					// var src=$(this).find('img').attr("src");
					$(".act-model-div").removeClass("blue-border");
					$(".act-model-div").find("p").show();
					$(".act-model-div").find(".select-icon").hide();

					
					$(this).addClass("blue-border");
					$(this).find("p").hide();
					$(this).find(".select-icon").show();

					$(".model-kind").hide();
					$(".model-kind").eq(index).show();
					$this.model_edit_show[index]=1;

					// $this.model_edit_show.unshift(src)
				}
			});	
		},
		beforedestroyed(){
			eventBus.$off('eventBusName');
		}	
	}
</script>
