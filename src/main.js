import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from "./router.js";
import App from './App.vue'


Vue.use(Vant);

Vue.config.productionTip = false


new Vue(
    Object.assign(App, {
    router
  })
).$mount('#app')
