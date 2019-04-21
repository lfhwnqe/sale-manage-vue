import Vue from 'vue';
import App from './App.vue';
import Mint from 'mint-ui';
import VueRouter from 'vue-router';
import router from './router/index';
import './assets/scss/index.scss'
import 'mint-ui/lib/style.css'

Vue.use(VueRouter);
Vue.use(Mint);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
