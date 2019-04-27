import Vue from 'vue';
import App from './App.vue';
import Mint from 'mint-ui';
import VueRouter from 'vue-router';
import router from './router/index';
import components from './components/index';
import filters from './filters/index';
import MuseUI from 'muse-ui';
import store from './store/index';

import 'muse-ui/dist/muse-ui.css';
import './assets/scss/index.scss';
import 'mint-ui/lib/style.css';

Vue.use(VueRouter);
Vue.use(Mint);
Vue.use(MuseUI);
components.init(Vue);
filters.init(Vue);

Vue.config.productionTip = false;

const app = new Vue({
  render: h => h(App),
  router
}).$mount('#app');

window.$app = app;
