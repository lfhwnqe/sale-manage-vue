<template>
  <div class="add-product-type ui-pa-1">
    <mu-form ref="form" :model="form" class="mu-demo-form" label-position="left" label-width="100">
      <mu-form-item prop="label" label="产品名称" help-text="输入中文名称" :rules="labelRules">
        <mu-text-field v-model="form.label"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="value" label="产品名称值" help-text="输入英文简写" :rules="valueRules">
        <mu-text-field v-model="form.value"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="productTypeId" help-text="选择产品所属品类" label="所属品类" :rules="productTypeIdRules">
        <mu-select v-model="form.productTypeId" prop="productTypeId">
          <mu-option v-for="option,index in productTypeOptions" :key="index" :label="option.label"
            :value="option._id"></mu-option>
        </mu-select>
      </mu-form-item>

      <mu-form-item>
        <mu-button color="primary" @click="submit">提交</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>
  </div>
</template>
<script>
  import * as api from '../../../../api/product';
  import Toast from 'muse-ui-toast';

  export default {
    data() {
      return {
        form: {
          label: '',
          value: '',
          productTypeId: ''
        },
//        productTypeOptions: [],
        labelRules: [{ validate: (val) => !!val, message: '必须填写产品名称' },],
        valueRules: [{ validate: (val) => !!val, message: '必须填写产品名称值' },],
        productTypeIdRules: [{ validate: (val) => !!val, message: '必须选择所属品类' },],
      };
    },
    methods: {
      submit() {
        this.$refs.form.validate().then((result) => {
          if (!result) return;
          api.insertProduct(this.form).then(_ => {
              Toast.success('添加成功');
              this.$store.getProductTypeList();
              this.$router.push({ name: 'productTypeList' });
            }
          );
        });
      },
      clear() {
        this.$refs.form.clear();
        this.form = {
          label: '',
          value: ''
        };
      }
    },
    computed: {
      productTypeOptions() {
        return this.$store.productTypeList;
      }
    }
  };
</script>
