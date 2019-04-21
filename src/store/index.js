import Vue from 'vue';
function createStore(options){
  return new Vue({
    data: {
      debug: options.debug,
      userInfo: {
        roleNames: '',
        photo: '',
        name: '',
        id: ''
      },
      dict: {
        whether: [
          { value: 1, label: '是' },
          { value: 0, label: '否' }
        ]
      },
      cache: {}
    },
    methods: {
      clearUserInfoAction() {
        this.userInfo.id = null;
        this.log(`store change: clearUserInfo`);
      },
      setUserInfoAction(user) {
        Object.assign(this.userInfo, user);
        this.log(`store change: userInfo`);
      },
      setDictAction(dict) {
        Object.keys(dict).forEach(item => {
          if (this.dict[item]) {
            this.dict[item] = dict[item];
          } else {
            this.$set(this.dict, item, dict[item]);
          }
        });
        this.log(`store change: dict`);
      },
      clearDictAction(){
        sessionStorage.removeItem('dictionary');
      },
      cacheAction(key, value, observable=true) {
        if (this.cache[key] != void 0) return;
        if (observable) {
          this.$set(this.cache, key, value);
        } else {
          this.cache[key] = value;
        }
        this.log(`store add cache: key`);
      },
      clearCacheAction(key) {
        if (key) {
          delete this.cache[key];
          this.log(`store clear cache: key`);
        } else {
          Object.keys[this.cache].forEach(item => {
            delete this.cache[item];
          });
          this.log(`store clear all cache`);
        }
      },
      log(msg) {
        if (this.debug) {
          console.log(msg);
        }
      }
    }
  });
}

const store = createStore({
  debug: process.env.NODE_ENV != 'production'
})
Vue.$store = store;
Vue.prototype.$store = store;

export default store;

