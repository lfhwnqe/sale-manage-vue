import date from './date';
import empty from './empty';
import currency from './currency';

const filters = [
  date,
  empty,
  currency,
];

export default {
  init: function(Vue) {
    filters.forEach(item => {
      Vue.filter(item.name, item.function);
    });
  }
};


