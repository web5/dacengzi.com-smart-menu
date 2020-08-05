import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Goods from './components/Goods.vue';
import TGoods from './components/TGoods.vue';
import MGoods from './components/MGoods.vue';
import AGoods from './components/AGoods.vue';
import NewGoods from './components/NewGoods.vue';
import Over from './components/Over.vue';



const routes = [{
    path: '/',
    redirect: '/goods'
  },{
    path: '/goods', // 本店菜单
    component: Goods
  },
  {
    path: '/tgoods', // 优选单品
    component: TGoods
  },{
    path: '/mgoods', // 套餐匹配
    component: MGoods
  },{
    path: '/agoods', // 智能活动
    component: AGoods
  },{
    path: '/newGoods', // 优选菜单
    component: NewGoods
  },{
    path: '/over', // 优选菜单
    component: Over
  }
]

const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

export default router;