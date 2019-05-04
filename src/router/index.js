import Router from 'vue-router';
import NotFound from '../views/not-found';
import { changePageTitle } from '../util/index';

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
      meta: { name: '主页' }
    },
    {
      path: '/orderList',
      name: 'orderList',
      title: '订单列表',
      meta: { name: '订单列表' },
      component: () =>
        import( /* webpackChunkName: "order" */ '../views/order_list/index.vue'),
    },
    {
      path: '/addOrder',
      name: 'addOrder',
      title: '添加订单',
      meta: { name: '添加订单' },
      component: () =>
        import( /* webpackChunkName: "order" */ '../views/add_order/index.vue'),
    },
    {
      path: 'home',
      name: 'userCenterHome',
      title: '用户中心',
      meta: { name: '用户中心' },
      component: () =>
        import( /* webpackChunkName: "order" */ '../views/user_center/home/index.vue'),
    },
    {
      path: '/addProductType',
      name: 'addProductType',
      title: '添加产品',
      meta: { name: '添加产品' },
      component: () =>
        import( /* webpackChunkName: "order" */ '../views/user_center/add_product_type/index.vue'),
    },
    {
      path: '/productTypeList',
      name: 'productTypeList',
      title: '产品类型列表',
      meta: { name: '产品类型列表' },
      component: () =>
        import( /* webpackChunkName: "order" */ '../views/user_center/product_type_list/index.vue'),
    },
    {
      path: '/subordinate',
      name: 'subordinate',
      title: '下属管理',
      meta: { name: '下属管理' },
      component: () =>
        import( /* webpackChunkName: "order" */ '../views/user_center/subordinate_manage/index.vue'),
    },
    {
      path: '/addSubordinate',
      name: 'addSubordinate',
      title: '添加下属',
      meta: { name: '添加下属' },
      component: () =>
        import( /* webpackChunkName: "order" */ '../views/user_center/subordinate_manage/add_subordinate/index.vue'),
    },
    {
      path: '/subordinateList',
      name: 'subordinateList',
      title: '下属列表',
      meta: { name: '下属列表' },
      component: () =>
        import( /* webpackChunkName: "order" */ '../views/user_center/subordinate_manage/subordinate_list/index.vue'),
    },

    {
      path: '/login',
      component: () =>
        import( /* webpackChunkName: "login" */ '../views/login/index.vue'),
      name: 'login',
      meta: { name: '登陆' },
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

router.beforeEach((to, from, next) => {
  changePageTitle(to.meta.name || '销售统计系统');
  next();
});

export default router;
