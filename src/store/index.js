import Vue from 'vue';
import * as productApi from '../api/product';

function createStore(options) {
  return new Vue({
    data: {
      productTypeList: []
    },
    methods: {
      getProductTypeList() {
        return productApi.getProductTypeList().then(res => {
          this.productTypeList = res;
        });
      },
      clearProductTypeList() {
        this.productTypeList = [];
      }
    },
    created() {
      this.getProductTypeList();
    }
  });
}

const store = createStore({
  debug: process.env.NODE_ENV != 'production'
});
Vue.$store = store;
Vue.prototype.$store = store;

export default store;

