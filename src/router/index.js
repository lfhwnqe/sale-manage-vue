import Vue from 'vue';
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
