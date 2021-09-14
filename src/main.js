import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);//Vue.use()将会自动调用ElementUI内index.js中声明的install方法

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';
Vue.prototype.axios = axios;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
