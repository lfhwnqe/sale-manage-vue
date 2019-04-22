<template>
  <div class="order-list ui-container">
    <div class="order-list_title">订单列表</div>
    <div v-infinite-scroll="getOrderList" infinite-scroll-distance="0"
      :infinite-scroll-disabled="loading" class="order-list_list ">

      <mt-cell class="order-list_list_item" v-for="item in orderList" :title="item.productName"
        :value="item.totalPrice"></mt-cell>
      <div v-show="loading" class="order-list_loading ui-ta-center">
        <mt-spinner type="fading-circle"></mt-spinner>
      </div>
    </div>
  </div>

</template>

<script>
  import * as api from '../../api/index';
  import './index.scss';

  export default {
    data() {
      return {
        orderList: [],
        loading: false,
        form: {
          pageSize: 20,
          pageNum: 0,
        },
        totalPage: 0,
        isFirst: true
      };
    },
    methods: {
      getOrderList() {
        if (this.loading) return;
        if (!this.isFirst && this.totalPage == this.form.pageNum) return;
        this.loading = true;
        this.form.pageNum = Number(this.form.pageNum) + 1;
        return api.getOrderList(this.form).then(res => {
          this.orderList = [...this.orderList, ...res.orderList];
          this.form.pageSize = res.pageSize;
          this.form.pageNum = res.pageNum;
          this.totalPage = res.totalPage;
          this.isFirst = false;
        }).finally(_ => {
          this.loading = false;
        });
      },
    },
  };
</script>
