import axios from 'axios';
import store from '../store';
import router from '../router/index';
import Toast from 'muse-ui-toast';
import Message from 'muse-ui-message';

import config from '../config/index';

function stringifyParams(params) {
  let keys = Object.keys(params);
  if (keys.length) {
    let paramArr = keys.filter((key) => {
      return params[key] != null;
    }).map((key) => {
      return key + '=' + params[key];
    });
    return paramArr.join('&');
  }
  return '';
}

const showExpireBox = (() => {
  let show = 0;
  return function() {
    if (show) return;
    show = 1;
    Message.alert('登录过期,请重新登录!', '警告').then(action => {
      show = 0;
      store.clearProductTypeList();
      router.push({ name: 'login' });
    });
  };
})();

const http = axios.create({
  baseURL: config.baseApi,
  withCredentials: true,
  timeout: 60000
});
const showError = msg => {
  Toast.error(msg || '操作失败，请稍后再试');
};

http.interceptors.request.use((config) => {
  if (config.queryJson === false) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.data = stringifyParams(config.data);
    delete config.queryJson;
  }
  return config;
}, error => {
  showError(error.msg);
  Promise.reject();
});

http.interceptors.response.use(res => {
    let ret = res.data;
    if (ret.code === -2) {
      showExpireBox();
      return Promise.reject(ret.msg);
    }
    else if (ret.success) {
      return ret.data;
    } else {
      showError(ret.msg);
      return Promise.reject();
    }
  },
  error => {
    showError(error.response.data.msg || '网络错误');
    return Promise.reject();
  }
);

export default http;



