<template>
  <div class="home-page">
    <div class="home-page_statics">
      留空，展示数据统计
    </div>
    <div class="home-page_btns">
      <mt-button @click.native="$router.push({name:'orderList'})"  type="default">订单列表</mt-button>
      <mt-button @click.native="$router.push({name:'addOrder'})"  type="default">添加订单</mt-button>
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
        });
      }
    },
    created(){
//      this.getOrderList()
    }
  };
</script>

<style lang="scss" scoped>
  .home-page{
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    &_statics{
      height:30rem;
    }
  }
</style>
