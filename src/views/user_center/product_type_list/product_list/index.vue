<template>
  <div class="product-type-list ui-pa-1">
    <div class="ui-mb-1">产品列表</div>
    <mu-divider></mu-divider>
    <div v-if="list.length===0" class="ui-mt-1">
      该品类没有产品，请<span class="ui-text-primary" @click="$router.push({name:'addProduct'})">添加产品</span>
    </div>
    <mu-list v-else>
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
  import * as api from '../../../../api/product';
  import Message from 'muse-ui-message';
  import Toast from 'muse-ui-toast';

  export default {
    props: {
      list: { type: Array, require: true }
    },
    methods: {
      remove(item) {
        Message.confirm('确定要删除本商品吗?', '提醒').then(result => {
          if (!result.result) return;
          return api.removeProduct({ id: item._id }).then(_ => {
            Toast.success('删除成功');
            this.$emit('init');
          });
        });
      },
    },
  };
</script>
