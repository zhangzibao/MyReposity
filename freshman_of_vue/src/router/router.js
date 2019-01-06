import Vue from 'vue'
import Router from 'vue-router'

//一级路由

import redlist from '../components/redlist/redlist'
import mydata from '../components/mydata/mydata'

//新建红包活动二级路由
import add_act from '../components/add_act/add_act'
import add_act_1 from '../components/add_act/add_act_1'
import add_act_2 from '../components/add_act/add_act_2'
import add_act_3 from '../components/add_act/add_act_3'
import add_act_4 from '../components/add_act/add_act_4'
//微页面二级路由
import mirco_app from '../components/mirco/mirco-app'
import mirco from '../components/mirco/mirco'
import my_interface from '../components/mirco/my_interface'
import user from '../components/mirco/user'
import user_detail from '../components/mirco/user_detail'
//设置路由
Vue.use(Router)
const routes = [
  {path: '/', redirect: '/redlist',},
  {path: '/redlist', component: redlist},
  {
    path: '/add_act', component: add_act,
    children: [
      {path: '/', component: add_act_1},
      {path: '/add_act_1', component: add_act_1},
      {path: '/add_act_2', component: add_act_2},
      {path: '/add_act_3', component: add_act_3},
      {path: '/add_act_4', component: add_act_4}
    ],
  },
  {path: '/mydata', component: mydata},
  {
    path: '/mirco', component: mirco_app,
    children: [
      {path: '/', component: mirco},
      {path: '/mirco', component: mirco},
      {path: '/my_interface', component: my_interface},
      {path: '/user', component: user},
      {path: '/user_detail', component: user_detail}

    ]
  }
]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes // （缩写）相当于 routes: routes
})
export default router

