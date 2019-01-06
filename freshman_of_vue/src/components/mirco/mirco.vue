<template>
	<body>	
		<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">			
			<div class="row">
				<ol class="breadcrumb">
					<li>
						<a href="#">
						<span class="glyphicon glyphicon-home"></span>
						</a>
					</li>
					<li class="active">新建页面</li>
				</ol>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<div class="panel panel-default">
						<div class="panel-body" id="panel-new-model" style="padding-top: 25px;">

							<div class="col-lg-4 col-md-3 col-sm-4" id="new_blank">
								<router-link to="/mirco" class="plus---">
									<!-- <div ></div> -->
								</router-link>
								<div class="cover-info"></div>
								<span class="btn" style="font">新建空白</span>
							</div>

							<div class="col-lg-4 col-md-3 col-sm-4">
								<img src="../../assets/img/model_1.jpg" >
								<div class="cover-info">
									<h4>移动端模板</h4>								
								</div>
								<button class="btn ">立即使用</button>
							</div>

							<div class="col-lg-4 col-md-3 col-sm-4">
								<img src="../../assets/img/model_2.jpg">
								<div class="cover-info">
									<h4>移动端模板</h4>								
								</div>
								<button class="btn">立即使用</button>
							</div>
							<div class="col-lg-4 col-md-3 col-sm-4">
								<img src="../../assets/img/model_3.jpg">
								<div class="cover-info">
									<h4>移动端模板</h4>								
								</div>
								<button class="btn ">立即使用</button>
							</div>
							<div class="col-lg-4 col-md-3 col-sm-4">
								<img src="../../assets/img/model_4.jpg">
								<div class="cover-info">
									<h4>移动端模板</h4>								
								</div>
								<button class="btn ">立即使用</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</template>
<script text="text/ecmascript-6">
	
</script>
<style lang="less" scoped>
	@import url("../../assets/less/styles.less");
</style>
