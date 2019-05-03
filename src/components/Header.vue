<template>
  <mu-appbar class="ui-header" color="primary">
    <mu-button @click="openDrawer" icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    {{ title }}
    <mu-menu slot="right">
      <mu-button flat @click="$router.push({name:'index'})">主页</mu-button>
    </mu-menu>
  </mu-appbar>
</template>

<script>
  export default {
    name: 'ui-header',
    data() {
      return {};
    },
    methods: {
      openDrawer() {
        this.$emit('openDrawer');
      }
    },
    computed: {
      title() {
        return this.$route.meta.name;
      }
    },
    created() {

    }
  };
</script>

<style lang="scss" scoped>
  .ui-header {
    height: 8vh;
  }
</style>
