<template>
  <div class="login ui-pa-2">

    <div class="login-form">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="form.username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
    </div>
    <div class="login-btns ui-ta-center ui-mt-2">
      <mt-button @click.native="login" type="default">登陆</mt-button>
    </div>

  </div>
</template>

<script>
  import * as api from '../../api/login';
  import { Toast } from 'mint-ui';

  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      login() {
        const form = this.form;
        api.userLogin(form).then(res => {
          console.log('res:', res);
          Toast({
            type: 'success',
            message: '登陆成功'
          });
          this.$router.push({ name: 'index' });
        }).catch(err => {
          console.log('err:', err);
        });
      },
//      showUserList() {
//        return api.showUserList().then(res => {
//          console.log('userList:', res);
//        });
//      }
    },
    created() {
//      this.showUserList();
    }
  };
</script>

<style>
</style>
