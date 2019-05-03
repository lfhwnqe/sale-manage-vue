<template>
  <div class="subordinate-manage ui-pa-1">
    <mu-list textline="two-line">
      <mu-list-item @click="go('addSubordinate')" button>
        <mu-list-item-content>
          <mu-list-item-title>添加下属</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item @click="go('subordinateList')" button>
        <mu-list-item-content>
          <mu-list-item-title>下属列表</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
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
