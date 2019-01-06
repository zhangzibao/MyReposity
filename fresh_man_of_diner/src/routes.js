import index from './components/main/index'
import my_index from './components/main/index/index'
import my_order from './components/main/index/my-order'
import my_service from './components/main/index/service'
import about_us from './components/main/index/about-us'
import my_login from './components/login/login'
import my_register from './components/login/register'
import refresh from './components/refresh'
import setting from './components/mircropage/setting'
import orderdetail from './components/order/orderdetail'
import pay from './components/order/pay'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: my_login, name: 'my_login' },
  { path: '/register', component: my_register, name: 'my_register' },
  { path: '/refresh', component: refresh, name: 'refresh' },
  { path: '/setting', component: setting, name: 'setting' },
  { path: '/orderdetail', component: orderdetail, name: 'orderdetail' },
  { path: '/pay', component: pay, name: 'pay' },
  {
    path: '/home',
    component: index,
    children: [
      { path: '/', component: my_index },
      { path: '/my_index', component: my_index, name: 'my_index' },
      { path: '/my_order', component: my_order, name: 'my_order' },
      { path: '/service', component: my_service, name: 'service' },
      { path: '/about_us', component: about_us, name: 'about_us' }
    ]
  }
]
export default routes
