import Router from 'vue-router';
import NotFound from '../views/not-found';

const router = new Router({
  routes: [
    {
      path: '/404',
      component: NotFound,
      name: '404',
      title: '404',
    },
    {
      path: '/',
      component: () =>
        import( /* webpackChunkName: "index" */ '../views/home/index.vue'),
      name: 'index',
      title: '主页',
    },
    {
      path:'orderList',
      name:'orderList',
      title:'订单列表',
      component: () =>
        import( /* webpackChunkName: "index" */ '../views/order_list/index.vue'),
    },
    {
      path:'addOrder',
      name:'addOrder',
      title:'添加订单',
      component: () =>
        import( /* webpackChunkName: "index" */ '../views/add_order/index.vue'),
    },
    {
      path: '/login',
      component: () =>
        import( /* webpackChunkName: "login" */ '../views/login/index.vue'),
      name: 'login',
      title: '登陆',
    },
    {
      path: '*',
      redirect: {
        path: '/404'
      }
    }
  ]
});

export default router;
