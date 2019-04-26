<template>
  <mu-appbar class="ui-header" color="primary">
    {{ title }}
  </mu-appbar>
</template>

<script>
  export default {
    name: 'ui-header',
    data() {
      return {};
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
