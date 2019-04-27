<template>
  <div class="login ui-pa-2">
    <!--<div class="login-form">-->
    <!--<mt-field label="用户名" placeholder="请输入用户名" v-model="form.username"></mt-field>-->
    <!--<mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>-->
    <!--</div>-->
    <!--<div class="login-btns ui-ta-center ui-mt-2">-->
    <!--<mt-button @click.native="login" type="default">登陆</mt-button>-->
    <!--</div>-->

    <mu-container>
      <mu-form ref="form" :model="form" class="mu-demo-form">
        <mu-form-item label="用户名" help-text="帮助文字" prop="username" :rules="usernameRules">
          <mu-text-field v-model="form.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="form.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>

  </div>
</template>

<script>
  import * as api from '../../api/login';
  import Toast from 'muse-ui-toast';

  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        usernameRules: [
          { validate: (val) => !!val, message: '必须填写用户名' },
          { validate: (val) => val.length >= 3, message: '用户名长度大于3' }
        ],
        passwordRules: [
          { validate: (val) => !!val, message: '必须填写密码' },
          { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10' }
        ],
      };
    },
    methods: {
      submit() {
        this.$refs.form.validate().then((result) => {
          if (!result) return;
          const form = this.form;
          api.userLogin(form).then(res => {
            Toast.success('登陆成功');
            this.$router.push({ name: 'index' });
          }).catch(err => {
            console.log('err:', err);
          });
        });
      },
      clear() {
        this.form = {
          username: '',
          password: ''
        };
      },
      login() {

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
