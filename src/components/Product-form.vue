<template>
  <mu-form :ref="'orderForm'+index" :model="item" class="mu-demo-form" label-position="left"
    label-width="100">
    <!--todo 这里封装组件单独对一个商品负责-->
    <mu-form-item prop="productType" help-text="选择产品品类" label="产品品类" :rules="productTypeRules">
      <mu-select v-model="item.productType" prop="productType" @change="changeProductType">
        <mu-option v-for="option,index in productTypeOptions" :key="index" :label="option.label"
          :value="option.value"></mu-option>
      </mu-select>
    </mu-form-item>
    <mu-form-item prop="product" help-text="选择产品" label="产品" :rules="productRules">
      <mu-select v-model="item.product" prop="productType">
        <mu-option v-for="option,index in productOption" :key="index" :label="option.label"
          :value="option.value"></mu-option>
      </mu-select>
    </mu-form-item>
    <mu-form-item v-if="item.productType" prop="number" help-text="输入产品数量"
      :label="'数量（'+productTypeOptions.find(type=>type.value===item.productType)['countLabel']+'）'"
      :rules="productNumberRules">
      <mu-text-field v-model.number="item.number"></mu-text-field>
    </mu-form-item>
    <mu-form-item v-else prop="number" help-text="输入产品数量" label="数量" :rules="productNumberRules">
      <mu-text-field v-model.number="item.number"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="price" help-text="输入收入金额" :rules="productPriceRules" label="价格（元）">
      <mu-text-field prop="price" v-model.number="item.price"></mu-text-field>
    </mu-form-item>
  </mu-form>
</template>

<script>
  import * as productApi from '../api/product';

  export default {
    name: 'productForm',
    props: {
      item: { type: Object, require: true },
      index: { type: Number, require: true }
    },
    data() {
      return {
        productOption: [],
        productTypeRules: [{ validate: (val) => !!val, message: '必须选择产品品类' },],
        productRules: [{ validate: (val) => !!val, message: '必须选择产品' },],
        productNumberRules: [{ validate: (val) => !!val, message: '必须输入产品数量' }],
        productPriceRules: [{ validate: (val) => !!val, message: '必须输入产品价格' }],
      };
    },
    methods: {
      changeProductType(value) {
        return productApi.getProductList({ productTypeValue: value }).then(res => {
          this.productOption = res;
        });
      },
    }
  };
</script>
