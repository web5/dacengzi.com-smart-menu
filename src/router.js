import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from './components/Home.vue';
import Menu from './components/Menu.vue';


const routes = [{
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    component: Home
  },
  {
    path: '/menu',
    component: Menu
  }
]

const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

export default router;