import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/Toast/index.js'
// fastclick-解决移动端300ms延迟
import FastClick from 'fastclick'
// vue-lazyload-图片懒加载
import VueLazyLoad from 'vue-lazyload'

Vue.use(toast);
Vue.use(VueLazyLoad);

FastClick.attach(document.body);

Vue.config.productionTip = false

// 初始化事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
