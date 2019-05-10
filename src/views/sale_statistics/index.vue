<template>
  <div class="add-order ui-container ui-pa-1">
    <mu-list>
      <mu-list-item>
        <mu-list-item-content>
          <mu-list-item-title>收入：{{ statics.totalPrice|currency|empty }}</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item>
        <mu-list-item-content>
          <mu-list-item-title>数量{{ unit }}：{{ statics.totalNum }}</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
    <mu-divider></mu-divider>
    <mu-form class="ui-mt-1" ref="form" :model="form" :label-position="labelPosition" label-width="100">
      <mu-form-item prop="productType" help-text="选择产品品类" label="产品品类" :rules="productTypeRules">
        <mu-select v-model="form.productType" prop="productType" @change="changeProductType">
          <mu-option v-for="option,index in productTypeOptions" :key="index" :label="option.label"
            :value="option.value"></mu-option>
        </mu-select>
      </mu-form-item>
      <mu-form-item prop="product" help-text="选择产品" label="产品">
        <mu-select v-model="form.product" prop="productType">
          <mu-option v-for="option,index in productOption" :key="index" :label="option.label"
            :value="option.value"></mu-option>
        </mu-select>
      </mu-form-item>
      <mu-form-item help-text="选择起始时间" label="起始时间">
        <mu-date-input v-model="form.fromTime" prop="fromTime" container="bottomSheet" type="date"
          actions></mu-date-input>
      </mu-form-item>
      <mu-form-item help-text="选择截止时间" label="截止时间">
        <mu-date-input v-model="form.endTime" prop="endTime" container="bottomSheet" type="date"
          actions></mu-date-input>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">提交</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>

  </div>
</template>

<script>
  import * as api from '../../api/order';
  import * as productApi from '../../api/product';
  import * as littleOrderApi from '../../api/little_order';
  import Toast from 'muse-ui-toast';
  // 手机号正则
  const REG_MOBILE = /^1\d{10}$/;
  export default {
    data() {
      return {
        labelPosition: 'left',
        form: {
          productType: '',
          product: '',
          fromTime: '',
          endTime: ''
        },
        statics: {
          totalPrice: 0,
          totalNum: 0
        },
        productOption: [],
        productTypeRules: [{ validate: (val) => !!val, message: '必须选择产品品类' },],
      };
    },
    methods: {
      changeProductType(value) {
        this.form.product = '';
        return productApi.getProductList({ productTypeValue: value }).then(res => {
          this.productOption = res;
        });
      },
      clear() {
        this.$set(this, 'form', {
          productType: '',
          product: '',
          fromTime: '',
          endTime: ''
        });
        this.statics = {
          totalPrice: 0,
          totalNum: 0
        };
      },
      getStatics() {
        return littleOrderApi.getStatics(this.form).then(res => {
          console.log(res);
          this.statics = res;
        });
      },
      submit() {
        return this.$refs.form.validate().then((result) => {
          if (!result) return;
          return this.getStatics();
        });
      }
    },
    computed: {
      productTypeOptions() {
        let ret;
        ret = this.$store.productTypeList;
        if (!ret) {
          this.$store.getProductTypeList();
        }
        return ret;
      },
      unit() {
        let ret = '';
        if (this.form.productType) {
          ret = `（${this.productTypeOptions.find(type => type.value === this.form.productType)['countLabel']}）`;
        }
        return ret || '';
      }
    },
    created() {
    }
  };
</script>
