// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router';
import store from './store';

//引入axios
import axios from 'axios';
Vue.prototype.$http = axios;

//引入vuex
import Vuex from 'vuex';
//import store from './vuex';
Vue.use(Vuex);

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入font-awesome
import 'font-awesome/css/font-awesome.min.css';

//引入vue-awesome-swiper
import VueAwesomeSeiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSeiper);

//引入全局css
import '@/assets/css/base.scss';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
