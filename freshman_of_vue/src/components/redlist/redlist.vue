<template>
	<body>
		<div class="_mainer" id="mainer_jaw">
			<div class="container" id="jaw_main">
				<a href="" class="a_margin">
					<div class="jaw_main_content">
						<div class="jaw_img">
							<img src="./jaw_1.png" alt="">
						</div>
						<div class="jaw_text">
							<h4>{{redlist.num_act}}个</h4>
							<p>进行的活动</p>
						</div>
					</div>
				</a>
				<a href="" class="a_margin">
					<div class="jaw_main_content">
						<div class="jaw_img">
							<img src="./jaw_2.png" alt="">
						</div>
						<div class="jaw_text">
							<h4>{{redlist.amount_mon}}元</h4>
							<p>投放中的金额</p>
						</div>
					</div>
				</a>
				<a href="" class="a_margin">
					<div class="jaw_main_content">
						<div class="jaw_img">
							<img src="./jaw_3.png" alt="">
						</div>
						<div class="jaw_text">
							<h4>{{redlist.cost_mon}}元</h4>
							<p>已消耗的金额</p>
						</div>
					</div>
				</a>
				<a href="" class="a_margin">
					<div class="jaw_main_content">
						<div class="jaw_img">
							<img src="./jaw_4.png" alt="">
						</div>
						<div class="jaw_text">
							<h4>{{redlist.balance}}元</h4>
							<p>账户余额</p>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div class="_mainer">
			<div class="container seek-act">
				<form  action="" method="post">
					<div class="act-clearfix">
						<label>活动ID：</label><input type="text" value="" placeholder="" class="select">
						<div class="clear"></div>
					</div>
					<div class="act-clearfix">
						<label>活动名称：</label>
						<input type="text" value="" placeholder="" class="select">
						<div class="clear"></div>
					</div>
					<div class="act-clearfix">
						<label>活动状态：</label>
						<div class="select select-options">
							<select >
								<option>全部状态</option>
								<option>未开始</option>
								<option>已开始</option>
								<option>进行中</option>
								<option>已暂停</option>
								<option>已关闭</option>
							</select>
						</div>
						<div class="clear"></div>
					</div>
					<div class="act-clearfix">
						<label>活动类型：</label>
						<div class="select select-options">
							<select >
								<option>全部类型</option>
								<option>微红包</option>
							</select>
						</div>
						<div class="clear"></div>
					</div>
					<div class="r-act-clearfix">
						<button class="btn btn-error">查询</button>
						<div class="clear"></div>
					</div>
					<div class="clear"></div>
				</form>
			</div>
		</div>
		<div class="_mainer  red-list">
			<div class="container">
				<router-link  tag='a' to='/add_act_1' class="red-title">
					<span>+ 新建活动列表</span>
				</router-link>
				<h4>红包列表</h4>
				<p>这里是关于微红包的活动配置</p>
				<div class="clear"></div>
			</div>
		</div>
		<div class="_mainer  red-table">
			<div class="container">
				<table class="table  table-striped">
					<thead>
						<tr v-for="redtitle in redlist.title">
							<th>
                {{redtitle.id}}
							</th>
							<th>
                {{redtitle.name}}
              </th>
							<th>
                {{redtitle.type}}
              </th>
							<th>
                {{redtitle.time}}
              </th>
							<th>
                {{redtitle.tie}}
              </th>
							<th>
                {{redtitle.award_total}}

              </th>
							<th>
                {{redtitle.status}}
              </th>
              <th>
                {{redtitle.control}}
              </th>
							<th>
                {{redtitle.note}}

              </th>
							<th>
                {{redtitle.operation}}
              </th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="list in redlist.red_list" >
							<td>
								{{list.id}}
							</td>
							<td>
								{{list.name}}
							</td>
							<td>
								{{list.type}}
							</td>
							<td>
								{{list.time}}
							</td>
							<td>
								{{list.tie}}
							</td>
							<td>
								{{list.award_total}}
							</td>
							<td>
								{{list.status}}
							</td>
							<td>
								{{list.control}}
							</td>
							<td>
								{{list.note}}
							</td>
							<td>
								Default
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

	</body>
</template>

<script type="text/ecmascript-6" scoped>
	const ERR_OK=0;
	export default{

		props:{

		},
		components: {

		},
		data() {
			return {
				redlist:[]
			}
		},
		created() {
			this.$http.get("/api/redlist").then((response) => {
				response = response.body;
				if (response.errno === ERR_OK) {

                    this.redlist = response.data;
                    // console.log(this.redlist);
                }
            })

		},
		mounted(){

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>

</style>
