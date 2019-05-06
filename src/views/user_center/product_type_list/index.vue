<template>
  <div class="product-type-list ui-pa-1">
    <mu-list>
      <mu-list-item @click="showProductListFn(item)" button :ripple="false" v-for="item,index in list">
        <mu-list-item-title>{{ item.label }}</mu-list-item-title>
        <mu-list-item-action @click="remove(item)">
          <mu-icon value="remove_circle"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>

    <mu-bottom-sheet :open.sync="showProductList">
      <ProductList @init="getProductList" :list="productList"></ProductList>
    </mu-bottom-sheet>
  </div>
</template>
<script>
  import * as api from '../../../api/product';
  import Message from 'muse-ui-message';
  import Toast from 'muse-ui-toast';
  import ProductList from './product_list/index.vue';

  export default {
    data() {
      return {
        list: [],
        showProductList: false,
        productListData: {},
        productList: []
      };
    },
    methods: {
      getProductList(id) {
        return api.getProductList({ productTypeId: id }).then(res => {
          this.productList = res;
        });
      },
      showProductListFn(productListData) {
        this.getProductList(productListData._id).finally(_ => {
          this.showProductList = true;
        });
      },
      getProductTypeList() {
        return api.getProductTypeList().then(res => {
          this.list = res;
        });
      },
      remove(item) {
        Message.confirm('确定要删除本商品类别吗?', '提醒').then(result => {
          if (!result.result) return;
          return api.removeProductType({ id: item._id }).then(_ => {
            Toast.success('删除成功');
            this.init();
          });
        });
      },
      init() {
        this.getProductTypeList();
      }
    },
    created() {
      this.init();
    },
    components: { ProductList }
  };
</script>
