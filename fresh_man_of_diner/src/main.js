import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import axios from 'axios'
import Lockr from 'lockr'
import Cookies from 'js-cookie'
import _ from 'lodash'
import moment from 'moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routes from './routes'
import VueRouter from 'vue-router'
import store from './vuex/store'
import _g from './assets/js/global'
// import './assets/css/reset.css'
import './assets/css/style.css'
import './assets/css/swiper3.07.min.css'
import './assets/css/index.scss'
axios.defaults.baseURL = 'http://120.79.44.150:7070/'
axios.defaults.timeout = 1000 * 15

axios.defaults.headers.Authorization = 'JWT ' + (Lockr.get('token') ? Lockr.get('token') : '')
// axios.defaults.headers.authKey = Lockr.get('authKey')
// axios.defaults.headers.sessionId = Lockr.get('sessionId')
axios.interceptors.response.use((response) => {
// 对响应数据做点什么
  return response
}, (err) => {
  return Promise.reject(err.response.data)
})
axios.defaults.headers['Content-Type'] = 'application/json'
const router = new VueRouter({
  mode: 'hash',
  base: '',
  routes
})
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

window.router = router
window.store = store
window.HOST = 'http://120.79.44.150:7070/'
window.axios = axios
window._ = _
window.moment = moment
window.Lockr = Lockr
window.Cookies = Cookies
window._g = _g
window.pageSize = 15

const bus = new Vue()
window.bus = bus
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router,
  components: { App }
}).$mount('#app')
