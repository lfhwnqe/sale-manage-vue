<template>
  <div class="order-list ui-container ui-pa-1">
    <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <mu-list>
          <template v-for="(item,index) in orderList">
            <mu-list-item :ripple="false" v-if="index===dateIndex[new Date(item.saleTime).toLocaleDateString()]">
              <mu-list-item-action>
                <mu-icon value="inbox"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>{{ item.saleTime|date|empty }}</mu-list-item-title>
            </mu-list-item>

            <mu-list-item @click="goDetail(index)" button :ripple="false">
              <mu-list-item-content>
                <mu-list-item-title>类型：{{ item.productName|empty }}</mu-list-item-title>
                <mu-list-item-sub-title>价格：{{ item.totalPrice|currency|empty }}</mu-list-item-sub-title>
                <mu-list-item-sub-title>
                  备注： {{ item.remark|empty }}
                </mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action>
                <mu-icon value="navigate_next"></mu-icon>
              </mu-list-item-action>
            </mu-list-item>
          </template>
        </mu-list>
      </mu-load-more>
    </mu-container>


    <!--<div v-infinite-scroll="getOrderList" infinite-scroll-distance="0"-->
    <!--:infinite-scroll-disabled="loading" class="order-list_list ">-->
    <!--<div @click="goDetail(index)" class="order-list-item" v-for="(item,index) in orderList">-->
    <!--<mt-cell v-if="index===dateIndex[new Date(item.saleTime).toLocaleDateString()]"-->
    <!--:title="new Date(item.saleTime).toLocaleDateString()"-->
    <!--&gt;</mt-cell>-->
    <!--<mt-cell :title="'产品：'+item.productName"-->
    <!--:value="item.totalPrice+'元'"></mt-cell>-->
    <!--</div>-->
    <!--<div v-show="loading" class="order-list_loading ui-ta-center">-->
    <!--<mt-spinner type="fading-circle"></mt-spinner>-->
    <!--</div>-->
    <!--</div>-->
  </div>

</template>

<script>
  import * as api from '../../api/order';
  import './index.scss';

  export default {
    data() {
      return {
        num: 10,
        refreshing: false,
        text: 'List',

        orderList: [],
        loading: false,
        form: {
          pageSize: 20,
          pageNum: 1,
        },
        totalPage: 0,
      };
    },
    methods: {
      refresh() {
        this.refreshing = true;
//        this.$refs.container.scrollTop = 0;
//        setTimeout(() => {
//          this.refreshing = false;
//          this.text = this.text === 'List' ? 'Menu' : 'List';
//          this.num = 10;
//        }, 2000);
        this.form = {
          pageSize: 20,
          pageNum: 1,
        };
        return api.getOrderList(this.form).then(res => {
          this.orderList = [...this.orderList, ...res.orderList];
          this.form.pageSize = res.pageSize;
          this.form.pageNum = res.pageNum;
          this.totalPage = res.totalPage;
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
        }).finally(_ => {
          this.loading = false;
        });
      },


//      getOrderList() {
//        if (this.loading) return;
//        if (!this.isFirst && this.totalPage == this.form.pageNum) return;
//        this.loading = true;
//        this.form.pageNum = Number(this.form.pageNum) + 1;
//        return api.getOrderList(this.form).then(res => {
//          this.orderList = [...this.orderList, ...res.orderList];
//          this.form.pageSize = res.pageSize;
//          this.form.pageNum = res.pageNum;
//          this.totalPage = res.totalPage;
//          this.isFirst = false;
//        }).finally(_ => {
//          this.loading = false;
//        });
//      },
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
