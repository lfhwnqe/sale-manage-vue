<template>
  <h1>主页</h1>
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
        });
      }
    },
    created(){
      this.getOrderList()
    }
  };
</script>

<style>
</style>
