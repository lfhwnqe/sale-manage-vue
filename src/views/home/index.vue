<template>
  <div class="home-page ui-pa-1">
    <mu-paper :z-depth="1">
      <mu-data-table :loading="loading" :columns="columns" :data="list" fit>
        <template slot-scope="scope">
          <td>{{scope.row.date|date|empty}}</td>
          <td>{{scope.row.totalPrice|currency|empty}}</td>
          <td>
          <span>
            {{scope.row.total|empty}}/单
          </span>
          </td>
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
          { title: '日期', width: 130, name: 'time', align: 'center' },
          { title: '收入', width: 140, name: 'totalPrice', align: 'center' },
          { title: '订单数', width: 100, name: 'saleNumber', align: 'center' },
        ],
//        titleList: [
//          { label: 'todayStatics', zhName: '今日' },
//          { label: 'near7DaysStatics', zhName: '近7日' },
//          { label: 'near30DaysStatics', zhName: '近30日' }
//        ],
      };
    },
    methods: {
      geTotalRevenueStatics() {
        this.loading = true;
        return api.geTotalRevenueStatics().then(res => {
          this.list = res;
//          this.titleList.forEach(title => {
//            if (res[title.label]) {
//              res[title.label].type = title.zhName;
//            }
//          });
//          this.list = [res.near30DaysStatics, res.near7DaysStatics, res.todayStatics];
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

