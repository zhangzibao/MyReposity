<template>
	<body>
		<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">			
			<div class="row">
				<ol class="breadcrumb">
					<li><a href="#"><span class="glyphicon glyphicon-home"></span></a></li> 
					<li class="active">我的页面</li>
				</ol>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<div class="panel panel-default">
						<div class="panel-body" id="panel-my-interface">
							<div class="col-md-12 column">
								<form class="form-horizontal" role="form" method="post">
									<div class="form-group" style="border-bottom: 1px solid #d0d0d0;padding: 20px 0  20px 0;">
										<label class="col-sm-1 control-label" style="">
											共有<span id="num-of-model">0</span>个
										</label>
										<div class="col-sm-4">		
											<input type="text" class="form-control" placeholder="页面标题" style="border-radius: 15px;" />
										</div>
										<div class="col-sm-1">
											<button class="btn" style="border-radius:10px;">搜索</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</template>
<script text=''>
	export default{

	}
</script>
<style lang="less" scoped>
	@import url("../../assets/less/styles.less");
</style>
</template>