import store from '../store/index';

export default {
  name: 'dict',
  function: (value) => {
    let ret;
    const dict = store.productTypeList;
    dict.forEach(item => {
      if (item.value === value) {
        ret = item.label;
      }
    });
    return ret;
  }
};
