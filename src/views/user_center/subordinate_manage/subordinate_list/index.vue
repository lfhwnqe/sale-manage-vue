<template>
  <div class="subordinate-list ui-pa-1">
    <mu-list textline="two-line">
      <template v-for="item in userList">
        <mu-list-item button>
          <mu-list-item-content>
            <mu-list-item-title>{{ item.userLabel }}</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider></mu-divider>
      </template>
    </mu-list>
  </div>
</template>

<script>
  import * as api from '../../../../api/user';

  export default {
    data() {
      return {
        userList: []
      };
    },
    methods: {
      getUserList() {
        return api.getUserList().then(res => {this.userList = res;});
      }
    },
    created() {
      this.getUserList();
    }
  };
</script>
