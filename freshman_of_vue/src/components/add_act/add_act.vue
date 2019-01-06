<template>
	<body>
		<my-header></my-header>
		<div class="_mainer" style="padding: 20px 0px 10px 0px;min-height: 64px;background: #f0f3f7;">
			<div id="step"></div>
		</div>
		<keep-alive>
      		<router-view></router-view>
    	</keep-alive>
		<div class="_mainer"  style="position: fixed; bottom:0;background:#f0f3f7;border-top:1px solid #fff">
			<div class="container" style="padding: 30px 0 30px 0;">
				<div class="step-btns" style="float: right">
					<button id="prevBtn" v-show="false">上一步</button>
					<button id="nextBtn">下一步</button>
					<button id="add-act-compelete" v-show="false">完成</button>
					<button id="add-act-cancel">取消</button>

					<!-- <button id="step-btn3">完成</button> -->
				</div>
			</div>
		</div>
	</body>
</template>

<script type="text/ecmascript-6">
	import '../../assets/js/jquery.step.min.js'
	import bus from '../../common/eventBus.js'
	export default{
		data(){
			return {

			}
		},
		beforeRouteLeave(to, from , next){

			// const answer = window.confirm('未保存，确定要离开吗')
			// if (answer) {
				//离开时把样式重置
				$("#prevBtn").hide();
				$("#add-act-compelete").hide();
				$("#nextBtn").show();
				this.$step.toStep(0);
				next()
			// } else {
			// 	next(false)
			// }
		},
		methods:{
		},
		mounted() {
			var $step = $("#step");
			var $this=this;
			$this.$step=$step;
			$step.step({
				index: 0,
				time: 500,
				title: ["基础设置", "页面设置", "领奖条件", "设置奖励并提交"]
			});
			//上一步
			$("#prevBtn").click(function() {
				$step.prevStep();
				$this.$router.push('/add_act_'+($step.getIndex()+1));
				if($step.getIndex()==0){
					$("#prevBtn").hide();

				}
				$("#nextBtn").show();
				$("#add-act-compelete").hide();

			});
			//下一步
			$("#nextBtn").click(function() {
				$step.nextStep();
				$this.$router.push('/add_act_'+($step.getIndex()+1));
				if($step.getIndex()==3){
					$("#nextBtn").hide();
					$("#add-act-compelete").show();
				}
				$("#prevBtn").show();

			});
			//取消
			$("#add-act-cancel").click(function(){

				$this.$router.push('/redlist');
			});
			$(document).resize(function() {
				var index = $step.getIndex();
				$step.empty();
				$step.step({
					index: index,
					time: 500,
					title: ["基础设置", "页面设置", "领奖条件", "设置奖励并提交"]
				});
			});
		}
	}
</script>
<style lang="less" >
	@import url('../../assets/less/upload.css');
	button {
		display: inline-block;
		padding: 6px 12px;
		font-size: 14px;
		line-height: 1.42857143;
		text-align: center;
		cursor: pointer;
		border: 1px solid transparent;
		border-radius: 4px;
		color: #fff;
		background-color: #aaa;
	}
	#step {
		margin-bottom: 60px;
	}


	#add-act-compelete{
		background-color: #5bc0de;
	}
	#add-act-cancel{
		background:#aaa;
	}
	#prevBtn:hover,#add-act-cancel:hover{
		background-color: #5bc0de;
	}
	#nextBtn{
		background-color: #5bc0de;
	}



	.step-btns {
		float: left;
	}

	.step-info {
		float: left;
		height: 34px;
		line-height: 34px;
		margin-left: 40px;
		font-size: 28px;
		font-weight: bold;
		color: #928787;
	}

	.step-info span {
		color: red;
	}
	.ui-step-wrap {
		position: relative;
	}

	.ui-step-wrap .ui-step-bg,
	.ui-step-wrap .ui-step-progress {
		height: 6px;
		position: absolute;
		top: 50px;
		left: 0;
	}

	.ui-step-wrap .ui-step-bg {
		width: 100%;
		background: #ddd;
	}

	.ui-step-wrap .ui-step-progress {
		width: 0;
		background: #64BD2E;
	}

	.ui-step-wrap .ui-step {
		position: relative;
		z-index: 1;
		list-style: none;
	}

	.ui-step-wrap .ui-step:after {
		content: '';
		display: table;
		clear: both;
	}

	.ui-step-wrap .ui-step .ui-step-item {
		float: left;
	}

	.ui-step-wrap .ui-step .ui-step-item div {
		text-align: center;
		color: #625454;
	}

	.ui-step-wrap .ui-step .ui-step-item .ui-step-item-num {
		margin-top: 18px;
	}

	.ui-step-wrap .ui-step .ui-step-item .ui-step-item-num span {
		display: inline-block;
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background: #dad9d9;
	}

	.ui-step-wrap .ui-step .ui-step-item.active .ui-step-item-num span {
		color: #fff;
		background: #64BD2E;
	}
</style>
