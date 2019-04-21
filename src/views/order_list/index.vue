<template>
  <div class="order-list ui-container">
    <div class="order-list_title">订单列表</div>
    <div class="order-list_list">
      <mt-cell class="order-list_list_item" v-for="item in orderList" :title="item.productName" :value="item.totalPrice"></mt-cell>
    </div>
  </div>

</template>

<script>
  import * as api from '../../api/index';

  export default {
    data() {
      return {
        orderList: []
      };
    },
    methods: {
      getOrderList() {
        return api.getOrderList().then(res => {
          console.log('res:', res);
          this.orderList = res
        });
      }
    },
    created(){
      this.getOrderList()
    }
  };
</script>