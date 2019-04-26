<template>
  <div class="home-page ui-pa-1">
    <!--<div class="home-page_statics ">-->
    <!--<mt-cell title="近30天订单量/斤" :value="near30DaysStatics.totalCount"></mt-cell>-->
    <!--<mt-cell title="近30天订单入账/元" :value="near30DaysStatics.totalAmount"></mt-cell>-->
    <!--<mt-cell title="近7天订单量/斤" :value="near7DaysStatics.totalCount"></mt-cell>-->
    <!--<mt-cell title="近7天订单入账/元" :value="near7DaysStatics.totalAmount"></mt-cell>-->
    <!--<mt-cell title="今日订单量/斤" :value="todayStatics.totalCount"></mt-cell>-->
    <!--<mt-cell title="今日订单入账/元" :value="todayStatics.totalAmount"></mt-cell>-->
    <!--</div>-->

    <mu-paper :z-depth="1">
      <mu-data-table :loading="loading" :columns="columns" :data="list" fit>
        <template slot-scope="scope">
          <td>{{scope.row.type}}</td>
          <td>{{scope.row.totalAmount|currency|empty}}</td>
          <td>
          <span v-if="scope.row.totalCount">
            {{scope.row.totalCount|empty}}/斤
          </span><span v-else>{{scope.row.totalCount|empty}}</span>
          </td>
          <td>{{scope.row.saleNumber|empty}}</td>
        </template>
      </mu-data-table>
    </mu-paper>
  </div>
</template>

<script>
  import './index.scss';
  import * as api from '../../api/home';

  export default {
    data() {
      return {
        loading: false,
        list: [],
        columns: [
          { title: '类型', width: 100, name: 'type', align: 'center' },
          { title: '总收入', width: 130, name: 'totalPrice', align: 'center' },
          { title: '销售数', width: 100, name: 'saleNumber', align: 'center' },
          { title: '订单数', width: 100, name: 'totalCount', align: 'center' },
        ],
        titleList: [
          { label: 'todayStatics', zhName: '今日' },
          { label: 'near7DaysStatics', zhName: '近7日' },
          { label: 'near30DaysStatics', zhName: '近30日' }
        ],
      };
    },
    methods: {
      geTotalRevenueStatics() {
        this.loading = true;
        return api.geTotalRevenueStatics().then(res => {
          this.titleList.forEach(title => {
            if (res[title.label]) {
              res[title.label].type = title.zhName;
            }
          });
          this.list = [res.near30DaysStatics, res.near7DaysStatics, res.todayStatics];
          console.log('res:', res);
        }).finally(_ => {
          this.loading = false;
        });
      }
    },
    created() {
      this.geTotalRevenueStatics();
    }
  };
</script>

