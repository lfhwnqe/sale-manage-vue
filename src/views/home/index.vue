<template>
  <div class="home-page ui-pa-2">
    <div class="home-page_statics ">
      <mt-cell title="近30天订单量/斤" :value="near30DaysStatics.totalCount"></mt-cell>
      <mt-cell title="近30天订单入账/元" :value="near30DaysStatics.totalAmount"></mt-cell>
      <mt-cell title="近7天订单量/斤" :value="near7DaysStatics.totalCount"></mt-cell>
      <mt-cell title="近7天订单入账/元" :value="near7DaysStatics.totalAmount"></mt-cell>
      <mt-cell title="今日订单量/斤" :value="todayStatics.totalCount"></mt-cell>
      <mt-cell title="今日订单入账/元" :value="todayStatics.totalAmount"></mt-cell>
    </div>
    <div class="home-page_btns ui-mt-2">
      <mt-button class="ui-mr-2" @click.native="$router.push({name:'orderList'})" type="primary">订单列表</mt-button>
      <mt-button @click.native="$router.push({name:'addOrder'})" type="primary">添加订单</mt-button>
    </div>
  </div>
</template>

<script>
  import './index.scss';
  import * as api from '../../api/home';

  export default {
    data() {
      return {
        near30DaysStatics: {},
        near7DaysStatics: {},
        todayStatics: {}
      };
    },
    methods: {
      geTotalRevenueStatics() {
        return api.geTotalRevenueStatics().then(res => {
          console.log('res:', res);
          this.near30DaysStatics = res.near30DaysStatics;
          this.near7DaysStatics = res.near7DaysStatics;
          this.todayStatics = res.todayStatics;
        });
      }
    },
    created() {
      this.geTotalRevenueStatics();
    }
  };
</script>

