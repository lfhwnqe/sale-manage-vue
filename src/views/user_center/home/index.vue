<template>
  <div class="user-center_home">
    <mu-list textline="two-line">
      <mu-list-item @click="go('addProductType')" button>
        <mu-list-item-content>
          <mu-list-item-title>添加产品</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item @click="go('productTypeList')" button>
        <mu-list-item-content>
          <mu-list-item-title>产品列表</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <!--<mu-list-item @click="go('subordinate')" button>-->
        <!--<mu-list-item-content>-->
          <!--<mu-list-item-title>下属设置</mu-list-item-title>-->
        <!--</mu-list-item-content>-->
      <!--</mu-list-item>-->
      <!--<mu-divider></mu-divider>-->
    </mu-list>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      go(name) {
        console.log('asd', name);
        this.$router.push({ name });
      },
    }
  };
</script>
