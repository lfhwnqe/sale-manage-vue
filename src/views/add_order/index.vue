<template>
  <div class="add-order ui-container">添加订单
    <div class="add-order_form">
      <mt-field label="产品名称" placeholder="请输入产品名称" v-model="form.productName"></mt-field>
      <mt-field label="商品数量/斤" placeholder="请输入商品数量" type="number" v-model="form.amount"></mt-field>
      <mt-field label="实售价格(元)" placeholder="请输入实际出售价格" type="number" v-model="form.totalPrice"></mt-field>
      <mt-field label="吊牌价格(元)" placeholder="请输入吊牌价格" type="number" v-model="form.tagPrice"></mt-field>
      <mt-field label="销售时间" placeholder="请输入销售时间" type="date" v-model="form.saleTime"></mt-field>
      <mt-field label="备注" placeholder="请输入备注"  v-model="form.remark"></mt-field>
    </div>
    <div class="add-order_btns">
      <mt-button @click.native="addOrder"  type="default">添加</mt-button>
    </div>
  </div>
</template>

<script>
  import * as api from '../../api/order';
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        form: {
          productName:'',
          amount:'',
          totalPrice:'',
          tagPrice:'',
          saleTime:'',
          remark:''
        }
      };
    },
    methods: {
      addOrder(){
        console.log('orderForm:',this.form)
        api.insertOrder(this.form).then(res=>{
          Toast({
            type: 'success',
            message: '添加成功'
          });
        })
      }
    },
    created(){
    }
  };
</script>
