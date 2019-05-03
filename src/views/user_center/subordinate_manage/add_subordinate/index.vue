<template>
  <div class="add_subordinate ui-pa-1">
    <mu-form ref="form" :model="form" class="mu-demo-form" label-position="left" label-width="100">
      <mu-form-item prop="userLabel" label="用户名称" help-text="输入用户名称" :rules="userLabelRules">
        <mu-text-field v-model="form.userLabel"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="username" label="账号名称" help-text="输入账号名称" :rules="usernameRules">
        <mu-text-field v-model="form.username"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="password" label="用户密码" help-text="输入密码" :rules="passwordRules">
        <mu-text-field type="password" v-model="form.password"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="rePassword" label="重复用户密码" help-text="再次输入密码" :rules="rePasswordRules">
        <mu-text-field type="password" v-model="form.rePassword"></mu-text-field>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">提交</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>
  </div>
</template>
<script>
  import * as api from '../../../../api/user';
  import Toast from 'muse-ui-toast';

  export default {
    data() {
      return {
        form: {
          userLabel: '',
          username: '',
          password: '',
          rePassword: ''
        },
        userLabelRules: [
          { validate: (val) => !!val, message: '必须填写用户名称' },
        ],
        usernameRules: [
          { validate: (val) => !!val, message: '必须填写账号名称' },
        ],
        passwordRules: [
          { validate: (val) => !!val, message: '必须填写用户密码' },
        ],

      };
    },
    methods: {
      submit() {
        this.$refs.form.validate().then((result) => {
          if (!result) return;
          api.createUser(this.form).then(_ => {
            Toast.success('添加成功');
          });
        });
      },
      clear() {
        this.$refs.form.clear();
        this.form = {
          userLabel: '',
          username: '',
          password: '',
          rePassword: ''
        }
      }
    },
    computed: {
      rePasswordRules() {
        let ret;
        const password = this.form.password;
        const rePassword = this.form.rePassword;
        if (password !== rePassword) {
          ret = [{
            validate: (val) => false, message: '两次密码不同'
          }];
        } else {
          ret = [{
            validate: (val) => !!val, message: '密码必填'
          }];
        }
        return ret;
      }
    }
  };
</script>
