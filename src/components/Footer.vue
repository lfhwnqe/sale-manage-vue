<template>
  <mu-bottom-nav v-if="routeName!=='login'" @change="changeRoute" class="ui-footer" :value.sync="activeMenu" shift>
    <mu-bottom-nav-item value="index" title="主页" icon="home"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="orderList" title="订单列表" icon="list"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="addOrder" title="添加订单" icon="playlist_add"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="userCenter" title="用户中心" icon="account_box"></mu-bottom-nav-item>
  </mu-bottom-nav>
</template>

<script>
  export default {
    name: 'ui-footer',
    data() {
      return {
        activeMenu: 'movies'
      };
    },
    methods: {
      changeRoute(value) {
        this.$router.push({ name: value });
      }
    },
    computed: {
      routeName() {
        const name = this.$route.name;
        this.activeMenu = name;
        return name;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .ui-footer {
    height: 8vh;
  }
</style>
