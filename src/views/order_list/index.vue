<template>
  <div class="order-list ui-container ui-pa-1">
    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
      <mu-list>
        <mu-list-item avatar :ripple="false" button>
          <mu-list-item-content>
            <mu-list-item-title>数据统计</mu-list-item-title>
            <mu-list-item-sub-title>
              订单数：{{ total }}
            </mu-list-item-sub-title>
            <mu-list-item-sub-title>总收入：{{ totalPrice|currency }}</mu-list-item-sub-title>
          </mu-list-item-content>
          <!--<mu-list-item-action>-->
          <!--<mu-icon value="search" @click="openBotttomSheet"></mu-icon>-->
          <!--</mu-list-item-action>-->
        </mu-list-item>
        <mu-divider></mu-divider>
        <template v-for="(item,index) in orderList">
          <mu-list-item :ripple="false" v-if="index===dateIndex[new Date(item.saleTime).toLocaleDateString()]">
            <mu-list-item-title>{{ item.saleTime|date|empty }}</mu-list-item-title>

            <mu-list-item-action>
              <mu-icon value="search" @click="openBotttomSheet"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>


          <mu-list-item @click="goDetail(index)" button :ripple="false">
            <mu-list-item-content>
              <mu-list-item-title>订单总价：{{ item.ordersTotalPrice|currency|empty }}</mu-list-item-title>
              <mu-list-item-sub-title>备注：{{ item.remark|empty }}</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-icon value="more_horiz"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </template>
      </mu-list>
    </mu-load-more>

    <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="botttomSheet">
      <mu-appbar color="primary" title="搜索">
        <mu-button slot="left" icon @click="botttomSheet=false">
          <mu-icon value="close"></mu-icon>
        </mu-button>
        <mu-button slot="right" flat @click="search">
          搜索
        </mu-button>
      </mu-appbar>
      <div class="ui-pa-1">
        <mu-form ref="ordersForm" :model="form" class="mu-demo-form" label-position="left"
          label-width="100">
          <mu-form-item prop="phone" help-text="输入电话号码" label="电话号码" :rules="phoneRules">
            <mu-auto-complete @input="searchPhoneNumber" :data="phoneLists" v-model="form.phoneNumber"
              avatar>
            </mu-auto-complete>
          </mu-form-item>
          <mu-form-item help-text="选择销售员" label="销售员" :rules="phoneRules">
            <mu-select v-model="form.saleBy" full-width>
              <mu-option v-for="option,index in saleByList" :key="index" :label="option.userLabel"
                :value="option._id"></mu-option>
            </mu-select>
          </mu-form-item>
          <mu-form-item help-text="选择起始时间" label="起始时间">
            <mu-date-input v-model="form.fromTime" prop="fromTime" container="bottomSheet" type="dateTime"
              actions></mu-date-input>
          </mu-form-item>
          <mu-form-item help-text="选择截止时间" label="截止时间">
            <mu-date-input v-model="form.endTime" prop="endTime" container="bottomSheet" type="dateTime"
              actions></mu-date-input>
          </mu-form-item>
          <mu-form-item>
            <mu-button color="primary" @click="submit">查询</mu-button>
            <mu-button @click="clear">重置</mu-button>
          </mu-form-item>
        </mu-form>
      </div>
    </mu-dialog>
  </div>
</template>

<script>
  import * as api from '../../api/order';
  import './index.scss';
  // 手机号正则
  const REG_MOBILE = /^1\d{10}$/;

  export default {
    data() {
      return {
        citys: ['1', '2', '3'],
        botttomSheet: false,
        refreshing: false,
        text: 'List',
        phoneLists: [],
        saleByList: [],

        orderList: [],
        loading: false,
        form: {
          pageSize: 20,
          pageNum: 1,
          phoneNumber: '',
          fromTime: '',
          endTime: ''
        },
        totalPrice: 0,
        total: 0,
        totalPage: 0,
        phoneRules: [{
          validate: (val) => {
            if (!REG_MOBILE.test(val)) {
              if (val) return false;
            }
            return true;
          }, message: '必须输入正确手机号'
        }]
      };
    },
    methods: {
      submit() {},
      clear() {
        this.form = {
          pageSize: 20,
          pageNum: 1,
          phoneNumber: '',
          fromTime: '',
          endTime: ''
        };
      },
      search() {},
      openBotttomSheet() {
        this.botttomSheet = true;
        this.getSaleByList();
      },
      searchPhoneNumber() {
        return api.getPhoneNumList({ phoneNumber: this.form.phoneNumber }).then(res => {
          this.phoneLists = res;
        });
      },
      getSaleByList() {
        api.getSaleByList().then(res => {
          this.saleByList = res;
        });
      },
      refresh() {
        this.refreshing = true;
        this.form = {
          pageSize: 20,
          pageNum: 1,
        };
        return api.getOrderList(this.form).then(res => {
          this.orderList = [...this.orderList, ...res.orderList];
          this.form.pageSize = res.pageSize;
          this.form.pageNum = res.pageNum;
          this.totalPage = res.totalPage;
          this.total = res.total;
          this.totalPrice = res.totalPrice;
        }).finally(_ => {
          this.refreshing = false;
        });
      },
      load() {
        if (this.totalPage == this.form.pageNum) return;
        this.loading = true;
        this.form.pageNum = Number(this.form.pageNum) + 1;
        return api.getOrderList(this.form).then(res => {
          this.orderList = [...this.orderList, ...res.orderList];
          this.form.pageSize = res.pageSize;
          this.form.pageNum = res.pageNum;
          this.totalPage = res.totalPage;
          this.total = res.total;
          this.totalPrice = res.totalPrice;
        }).finally(_ => {
          this.loading = false;
        });
      },
      goDetail(index) {
        const params = this.orderList[index];
        this.$router.push({
          name: 'orderDetail',
          params
        });
      }
    },
    computed: {
      dateIndex() {
        const ret = {};
        const orderList = this.orderList;
        orderList.forEach((item, index) => {
          const date = new Date(item.saleTime).toLocaleDateString();
          if (!ret[date] && ret[date] !== 0) {
            ret[date] = index;
          }
        });
        return ret;
      }
    },
    created() {
      this.refresh();
    }
  };
</script>
