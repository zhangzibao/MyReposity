<template>
	<div class="act-term _mainer act-steps">
		<div class="container" id="act-term">
			<h3>领奖条件</h3>
			<p>领奖条件对现金奖项和优惠券奖励生效，用户抽中积点奖励时，直接领取，无需关注或转发。</p>
			<div class="act-btn-group container">
				<div class="act-spn-con">
					<span class="act-term-btn point-color">直接领取</span>
					<span class="act-term-btn">分享广告页</span>
					<span class="act-term-btn">关注公众号</span>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default{
		data(){
			return {

			}
		},
		mounted() {
			$(".act-term-btn").click(function() {
				if (!$(this).hasClass("point-color")) {
					$(".act-term-btn").removeClass("point-color");
					$(this).addClass("point-color");
				}
			});
		}
	}
</script>