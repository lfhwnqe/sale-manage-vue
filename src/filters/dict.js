import store from '../store/index';

export default {
  name: 'dict',
  function: (value, dictName = 'productTypeList') => {
    let ret;
    const dict = store[dictName];
    dict.forEach(item => {
      if (item.value === value) {
        ret = item.label;
      }
    });
    return ret;
  }
};
