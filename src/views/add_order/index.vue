<template>
  <div class="add-order ui-container ui-pa-2">
    <div class="add-order_form">
      <mt-field label="产品名称" placeholder="请输入产品名称" v-model="form.productName"></mt-field>
      <mt-field label="商品数量/斤" placeholder="请输入商品数量" type="number" v-model="form.amount"></mt-field>
      <mt-field label="实售价格(元)" placeholder="请输入实际出售价格" type="number" v-model="form.totalPrice"></mt-field>
      <mt-field label="吊牌价格(元)" placeholder="请输入吊牌价格" type="number" v-model="form.tagPrice"></mt-field>
      <mt-field label="销售时间" readonly placeholder="请选择销售时间" v-model="showSaleTime"></mt-field>
      <mt-cell title="选择销售时间" value="带 icon">
        <mt-button type="default" @click.native="openPicker">选择时间</mt-button>
      </mt-cell>
      <mt-field label="备注" placeholder="请输入备注" type="textarea" v-model="form.remark"></mt-field>
    </div>
    <div class="add-order_btns ui-mt-2 ui-ta-center">
      <mt-button @click.native="addOrder" type="primary">添加</mt-button>
    </div>

    <mt-datetime-picker
      ref="picker"
      type="datetime"
      v-model="form.saleTime"
    >
    </mt-datetime-picker>
  </div>
</template>

<script>
  import * as api from '../../api/order';
  import { Toast } from 'mint-ui';

  export default {
    data() {
      return {
        form: {
          productName: '',
          amount: '',
          totalPrice: '',
          tagPrice: '',
          saleTime: new Date(),
          remark: ''
        }
      };
    },
    methods: {
      openPicker() {
        this.$refs.picker.open();
      },
      addOrder() {
        console.log('orderForm:', this.form);
        api.insertOrder(this.form).then(res => {
          Toast({
            type: 'success',
            message: '添加成功'
          });
        });
      }
    },
    computed: {
      showSaleTime() {
        let ret;
        const time = this.form.saleTime;
        if (time) {
          ret = new Date(time).toLocaleString();
        } else {
          ret = '';
        }
        return ret;
      }
    },
    created() {
    }
  };
</script>
