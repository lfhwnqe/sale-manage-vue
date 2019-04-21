import axios from 'axios';
import store from '../store';
import { Message, MessageBox } from 'element';
import config from '@/config/index';

function stringifyParams(params) {
  let keys = Object.keys(params);
  if (keys.length) {
    let paramArr = keys.filter((key) => {
      return params[key] != null;
    }).map((key) => {
      return key + '=' + params[key]
    });
    return paramArr.join('&');
  }
  return '';
}

const showExpireBox = (() => {
  let show = 0;
  return function () {
    if (show) return;
    show = 1;
    MessageBox.alert('登录过期,请重新登录', "提示", {
      confirmButtonText: '确定',
      type: 'warning',
      callback: action => {
        show = 0;
        store.clearUserInfoAction();
        store.clearDictAction();
        location.href = "/login.html?redirect=" + encodeURIComponent(location.href);
      }
    });
  }
})();

const http = axios.create({
  baseURL: config.baseApi,
  withCredentials: true,
  timeout: 60000
});
const showError = msg => {
  Message({
    type: 'error',
    message: msg || '操作失败，请稍后再试'
  })
}

http.interceptors.request.use((config) => {
  if (config.queryJson === false) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.data = stringifyParams(config.data);
    delete config.queryJson;
  }
  return config;
}, error => {
  showError();
  Promise.reject();
});

http.interceptors.response.use(res => {
    let ret = res.data;
    let showErrorMsg = res.config.showError === false ? false : true;
    if (ret.code == -2) {
      return showExpireBox();
    }
    if (ret.code == 0) {
      return ret.data;
    } else {
      showErrorMsg && showError(ret.msg);
      return Promise.reject(ret.msg);
    }
  },
  error => {
    showError();
    return Promise.reject();
  }
);

export default http;



