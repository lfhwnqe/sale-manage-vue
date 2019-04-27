<template>
  <div class="order-list ui-container ui-pa-1">
    <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <mu-list>
          <template v-for="(item,index) in orderList">
            <mu-list-item :ripple="false" v-if="index===dateIndex[new Date(item.saleTime).toLocaleDateString()]">
              <mu-list-item-title>{{ item.saleTime|date|empty }}</mu-list-item-title>
            </mu-list-item>

            <mu-list-item @click="goDetail(index)" button :ripple="false">
              <mu-list-item-content>
                <mu-list-item-title>订单总价：{{ item.ordersTotalPrice|currency|empty }}</mu-list-item-title>
                <mu-list-item-sub-title>备注：{{ item.remark|empty }}</mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action>
                <mu-icon value="more_horiz"></mu-icon>
              </mu-list-item-action>
            </mu-list-item>
          </template>
        </mu-list>
      </mu-load-more>
    </mu-container>
  </div>
</template>

<script>
  import * as api from '../../api/order';
  import './index.scss';

  export default {
    data() {
      return {
        num: 10,
        refreshing: false,
        text: 'List',

        orderList: [],
        loading: false,
        form: {
          pageSize: 20,
          pageNum: 1,
        },
        totalPage: 0,
      };
    },
    methods: {
      refresh() {
        this.refreshing = true;
        this.form = {
          pageSize: 20,
          pageNum: 1,
        };
        return api.getOrderList(this.form).then(res => {
          this.orderList = [...this.orderList, ...res.orderList];
          this.form.pageSize = res.pageSize;
          this.form.pageNum = res.pageNum;
          this.totalPage = res.totalPage;
        }).finally(_ => {
          this.refreshing = false;
        });
      },
      load() {
        if (this.totalPage == this.form.pageNum) return;
        this.loading = true;
        this.form.pageNum = Number(this.form.pageNum) + 1;
        return api.getOrderList(this.form).then(res => {
          this.orderList = [...this.orderList, ...res.orderList];
          this.form.pageSize = res.pageSize;
          this.form.pageNum = res.pageNum;
          this.totalPage = res.totalPage;
        }).finally(_ => {
          this.loading = false;
        });
      },
      goDetail(index) {
        const params = this.orderList[index];
        this.$router.push({
          name: 'orderDetail',
          params
        });
      }
    },
    computed: {
      dateIndex() {
        const ret = {};
        const orderList = this.orderList;
        orderList.forEach((item, index) => {
          const date = new Date(item.saleTime).toLocaleDateString();
          if (!ret[date] && ret[date] !== 0) {
            ret[date] = index;
          }
        });
        return ret;
      }
    },
    created() {
      this.refresh();
    }
  };
</script>
