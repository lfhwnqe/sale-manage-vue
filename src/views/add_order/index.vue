<template>
  <div class="add-order ui-container ui-pa-1">
    <mu-form ref="form" :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
      <template v-for="(item,index) in form.ordersList">
        <mu-form :ref="'orderForm'+index" :model="item" class="mu-demo-form" :label-position="labelPosition"
          label-width="100">
          <mu-form-item prop="productType" help-text="选择产品类型" label="商品类型" :rules="productTypeRules">
            <mu-select v-model="item.productType" prop="productType">
              <mu-option v-for="option,index in productTypeOptions" :key="index" :label="option.label"
                :value="option.value"></mu-option>
            </mu-select>
          </mu-form-item>
          <mu-form-item prop="number" help-text="输入产品数量" label="数量（斤）" :rules="productNumberRules">
            <mu-text-field v-model.number="item.number"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="price" help-text="输入收入金额" :rules="productPriceRules" label="价格（元）">
            <mu-text-field prop="price" v-model.number="item.price"></mu-text-field>
          </mu-form-item>
        </mu-form>
      </template>
      <mu-form-item prop="phone" help-text="输入客户电话" label="电话" :rules="phoneRules">
        <mu-text-field prop="phone" v-model.trim="form.phone"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="saleTime" help-text="选择销售时间" label="销售时间" :rules="saleTimeRules">
        <mu-date-input v-model="form.saleTime" prop="saleTime" container="bottomSheet" type="dateTime" actions></mu-date-input>
      </mu-form-item>
      <mu-form-item prop="onlyOneType" help-text="订单是否只有一种商品" label="单类商品">
        <mu-select :disabled="form.ordersList.length>1" v-model="form.onlyOneType">
          <mu-option :key="true" label="是" :value="true"></mu-option>
          <mu-option :key="false" label="否" :value="false"></mu-option>
        </mu-select>
      </mu-form-item>
      <mu-form-item v-if="!form.onlyOneType" help-text="订单商品数量" prop="orderNumberInOrder" label="品类数量">
        <mu-select @change="orderNumberInOrderChanged" v-model="form.orderNumberInOrder">
          <mu-option v-for="(option,index) in orderNumberInOrderList" :key="index" :label="option.label"
            :value="option.value"></mu-option>
        </mu-select>
      </mu-form-item>
      <mu-form-item prop="textarea" label="备注">
        <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.remark"></mu-text-field>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">提交</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>
  </div>
</template>

<script>
  import * as api from '../../api/order';
  import Toast from 'muse-ui-toast';
  // 手机号正则
  const REG_MOBILE = /^1\d{10}$/
  export default {
    data() {
      return {
        labelPosition: 'left',
        form: {
          ordersList: [{
            productType: '',
            number: '',
            price: '',
          }],
          saleTime: Date.now(),
          remark: '',
          phone:'',
          onlyOneType: true,
          // 单次添加订单的产品数量
          orderNumberInOrder: 1,
        },
        orderNumberInOrderList: [
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3' },
          { value: 4, label: '4' },
          { value: 5, label: '5' },
        ],
        productTypeRules: [{ validate: (val) => !!val, message: '必须选择产品类型' },],
        productNumberRules: [{ validate: (val) => !!val, message: '必须输入产品数量' }],
        productPriceRules: [{ validate: (val) => !!val, message: '必须输入产品价格' }],
        saleTimeRules: [{ validate: (val) => !!val, message: '必须选择销售时间' }],
        phoneRules:[{ validate: (val) => {
          if(!REG_MOBILE.test(val)){
            if(val) return false
          }
          return true
        }, message: '必须输入正确手机号' }]
      };
    },
    methods: {
      orderNumberInOrderChanged(number) {
        const tem = {
          productType: '',
          number: '',
          price: '',
        };
        const ordersList = this.form.ordersList;
        const ordersListLen = ordersList.length;
        // 当前产品类大于选择数量，减掉多余的
        if (ordersListLen > number) {
          this.form.ordersList.splice(number, ordersListLen - number);
        } else if (ordersListLen < number) {
          const arr = [];
          for (let i = 0; i < (number - ordersListLen); i++) {
            arr.push(JSON.parse(JSON.stringify(tem)));
          }
          this.$set(this.form, 'ordersList', [...this.form.ordersList, ...arr]);
        }
      },
      openPicker() {
        this.$refs.picker.open();
      },
      addOrder() {
        return api.insertOrder(this.form).then(res => {
          Toast.success('添加成功');
        }).catch(err => {
          console.log('err:', err);
        });
      },
      clear() {
        this.$set(this, 'form', {
          ordersList: [{
            productType: '',
            number: '',
            price: '',
          }],
          saleTime: Date.now(),
          remark: '',
          onlyOneType: true,
          // 单次添加订单的产品数量
          orderNumberInOrder: 1,
        });
      },
      submit() {
        const forms = [];
        this.form.ordersList.forEach((_, index) => {
          forms.push(this.$refs[`orderForm${index}`]);
        });
        Promise.all(forms.map(form => {
          return form[0].validate();
        })).then(results => {
          const valid = results.filter(item => !item).length <= 0;
          return valid;
        }).then(valid => {
          if (!valid) return;
          return this.$refs.form.validate().then((result) => {
            if (!result) return;
            return this.addOrder();
          });
        });
      }
    },
    computed: {
      showSaleTime() {
        let ret;
        const time = this.form.saleTime;
        if (time) {
          ret = new Date(time).toLocaleString();
        } else {
          ret = '';
        }
        return ret;
      },
      productTypeOptions() {
        let ret;
        ret = this.$store.productTypeList
        if(!ret){
          this.$store.getProductTypeList()
        }
        return ret
      }
    },
    created() {
    }
  };
</script>
