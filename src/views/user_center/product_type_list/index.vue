<template>
  <div class="product-type-list ui-pa-1">
    <mu-list>
      <mu-list-item button :ripple="false" v-for="item in list">
        <mu-list-item-title>{{ item.label }}</mu-list-item-title>
        <mu-list-item-action @click="remove(item)">
          <mu-icon value="remove_circle"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
  </div>
</template>
<script>
  import * as api from '../../../api/product';
  import Message from 'muse-ui-message';
  import Toast from 'muse-ui-toast';

  export default {
    data() {
      return {
        list: []
      };
    },
    methods: {
      getProductTypeList() {
        return api.getProductTypeList().then(res => {
          this.list = res;
        });
      },
      remove(item) {
        Message.confirm('确定要删除本商品吗?', '提醒').then(result => {
          if (!result.result) return;
          return api.removeProductTypeList({ id: item._id }).then(_ => {
            Toast.success('删除成功');
            this.init();
          });
        });
      },
      init() {
        this.$store.getProductTypeList();
        this.getProductTypeList();
      }
    },
    created() {
      this.init();
    }
  };
</script>
