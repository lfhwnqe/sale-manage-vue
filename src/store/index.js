import Vue from 'vue';
import * as productApi from '../api/product';

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function createStore(options) {
  return new Vue({
    data: {
      productTypeList: [],
      productList: [],
      userInfo: {}
    },
    methods: {
      getProductTypeListDict() {
        return productApi.getProductTypeList().then(res => {
          this.productTypeList = res;
        });
      },
      getProductListDict() {
        return productApi.getProductList().then(res => {
          this.productList = res;
        });
      },
      getProductTypeList() {
        return Promise.all([this.getProductTypeListDict(), this.getProductListDict()]);
      },
      clearProductTypeList() {
        this.productTypeList = [];
      },
      setUserInfo(userInfo) {
        this.userInfo = userInfo;
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
      },
      getUserInfoFromLocalStorage() {
        const data = window.localStorage.getItem('userInfo');
        if (!data) {
          setCookie('userinfo', '', 0);
        }
        const userInfo = JSON.parse(data);
        this.userInfo = userInfo;
      }
    },
    created() {
      this.getProductTypeList();
      this.getUserInfoFromLocalStorage();
    }
  });
}

const store = createStore({
  debug: process.env.NODE_ENV != 'production'
});
Vue.$store = store;
Vue.prototype.$store = store;

export default store;

