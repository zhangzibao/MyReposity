import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource' 
import router from './router/router.js';
import './assets/less/my.less'
import header from './components/header/header'
Vue.config.productionTip = false
//添加头部组件
Vue.component('my-header',header)
Vue.use(VueResource);
const app= new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
});
router.push('/redlist');
