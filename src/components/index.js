import UiHeader from './Header.vue';
import UiFooter from './Footer.vue';

const components = [
  UiHeader, UiFooter
];

export default {
  init: function(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};
