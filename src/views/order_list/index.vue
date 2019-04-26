<template>
  <div class="order-list ui-container ui-pa-2">
    <div v-infinite-scroll="getOrderList" infinite-scroll-distance="0"
      :infinite-scroll-disabled="loading" class="order-list_list ">
      <div @click="goDetail(index)" class="order-list-item" v-for="(item,index) in orderList">
        <mt-cell v-if="index===dateIndex[new Date(item.saleTime).toLocaleDateString()]"
          :title="new Date(item.saleTime).toLocaleDateString()"
        ></mt-cell>
        <mt-cell :title="'产品：'+item.productName"
          :value="item.totalPrice+'元'"></mt-cell>
      </div>
      <div v-show="loading" class="order-list_loading ui-ta-center">
        <mt-spinner type="fading-circle"></mt-spinner>
      </div>
    </div>
  </div>

</template>

<script>
  import * as api from '../../api/order';
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
    }
  };
</script>
