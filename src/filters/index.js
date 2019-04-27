import date from './date';
import empty from './empty';
import currency from './currency';
import dict from './dict'

const filters = [
  date,
  empty,
  currency,
  dict
];

export default {
  init: function(Vue) {
    filters.forEach(item => {
      Vue.filter(item.name, item.function);
    });
  }
};


