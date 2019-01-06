<template>
		<div id="my-head">
			<div class="container" style="position: relative;">
				<div id="nav">
					<ul id="nav_ul">
						<li class="ul_li">
							<router-link tag='a' to='/redlist' class="li_a">
								微红包
							</router-link>
						</li>
						<li class="ul_li">
							<router-link tag='a' to='/mirco' class="li_a">
								微页面
							</router-link>
						</li>
						<li class="ul_li">
							<router-link tag='a' to='/mydata' class="li_a">
								微数据
							</router-link>
						</li>
						<div id="move" class="move">
						</div>
					</ul>
				</div>
				<div class="h-logo">
					<div class="bg-head">
						<img src="../../assets/img/head.png" alt="">
					</div>
					<span id="user-name">
						用户名
						<div class="move-s" id="head-move"></div>
						<div class="user-menu" style="display: none;">
							<ul>
								<li>
									<a href="">退出登录</a>
								</li>
								<li>
									<a href="">修改密码</a>
								</li>
							</ul>
						</div>
					</span>
				</div>
				<div class="clear"></div>
			</div>
		</div>
</template>
<script type="text/ecmascript-6" scoped>
	export default{

		props:{

		},
		components: {

		},
		data() {
			return {

			}
		},
		created() {

		},
		mounted(){
			var li=$('.ul_li'),move=$('.move');
			var width,left;
			li.hover(function(){
				width=$(this).width()-40,
				left=$(this).offset().left-$('#nav_ul').offset().left+20+'px' ;
				move.css({ "left" : left , "width" : width+"px"});
			},
			function(){
				move.css({ "width" :"0"});
			});

			$(".h-logo").click(function(event) {
				event.stopPropagation();
				event.preventDefault();
				if (!$("#head-move").hasClass('rotate')) {
					$("#head-move").addClass('rotate');
					$(".user-menu").slideDown(100);
				}
			});
			$(document).click(function(){
				$("#head-move").removeClass('rotate');
				$(".user-menu").slideUp(100);
			});
		}
	}
</script>
<style lang="less" scoped>

</style>
