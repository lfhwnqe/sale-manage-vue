<template>
  <div class="user-center_home ui-pa-1">
    <mu-list textline="two-line">
      <mu-list-item @click="go('productTypeList')" button>
        <mu-list-item-content>
          <mu-list-item-title>品类列表</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item @click="go('addProductType')" button>
        <mu-list-item-content>
          <mu-list-item-title>添加品类</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item @click="go('addProduct')" button>
        <mu-list-item-content>
          <mu-list-item-title>添加产品</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item v-if="$store.userInfo.role==='superAdmin'" @click="go('subordinate')" button>
        <mu-list-item-content>
          <mu-list-item-title>下属设置</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider v-if="$store.userInfo.role==='superAdmin'"></mu-divider>
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
        this.$router.push({ name });
      },
    }
  };
</script>
