import Vue from 'vue'
import Main from './views/main.vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

window.a = new Vue({
  el: 'main',
  render: h => h(Main)
});
