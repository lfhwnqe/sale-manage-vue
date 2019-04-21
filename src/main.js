import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
