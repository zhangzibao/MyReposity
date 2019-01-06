<template>
<body>
	<div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
		<form role="search">
			<div class="form-group">
			</div>
		</form>
		<ul class="nav menu">
			<li class="active">
				<router-link tag='a' to='/mirco'>
					<span class="glyphicon glyphicon-dashboard"></span>新建页面
				</router-link>
			</li>
			<li>
				<router-link tag='a' to='/my_interface'>
					<span class="glyphicon glyphicon-th"></span>我的页面
				</router-link>
			</li>
			<li>
				<router-link tag='a' to='/user'>
					<span class="glyphicon glyphicon-stats"></span>用户中心
				</router-link>
			</li>
			<li role="presentation" class="divider"></li>
			<!-- <li><a href="login.html"><span class="glyphicon glyphicon-user"></span>登录界面</a></li> -->
		</ul>
		<div class="attribution"></div>
	</div>
</body>
</template>
<script scoped>
	export default{
    data(){
      return{

      }
    },
    mounted(){
      $(".menu li").click(function () {
        if(!$(this).hasClass('active')){
          $(".menu li").removeClass('active');
          $(this).addClass('active');
        }

      })
    }
	}
</script>
<style lang="less" scoped>
	@import url("../../assets/less/styles.less");
</style>
</template>
