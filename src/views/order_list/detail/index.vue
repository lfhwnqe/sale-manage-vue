<template>
  <div class="order-detail ui-container ui-pa-2">
    <div class="order-detail">
      <div v-for="list in dataList">
        <mt-cell :title="list.label">
          <span>{{ data[list.name] }}</span>
        </mt-cell>

      </div>
    </div>
  </div>

</template>

<script>
  //  import * as api from '../../api/order';
  import './index.scss';

  export default {
    data() {
      return {
        data: {},
        itemList: [
          {
            name: 'productName',
            label: '商品名称'
          }
        ],
        dataList: [
          {
            name: 'productName',
            label: '商品名称'
          }, {
            name: 'amount',
            label: '数量/斤'
          }, {
            name: 'totalPrice',
            label: '实际价格/元'
          }, {
            name: 'tagPrice',
            label: '标签价格/元'
          }, {
            name: 'saleTime',
            label: '销售时间'
          }, {
            name: 'createTime',
            label: '创建时间'
          }, {
            name: 'remark',
            label: '备注'
          },
        ]
      };
    },
    created() {
      const data = this.$route.params;
      if (!data.productName) {
        this.$router.push({ name: 'orderList' });
        return;
      }
      this.data = data;
      ['saleTime', 'createTime'].forEach(date => {
        const time = new Date(data[date]);
        const timeStr = time.toLocaleString();
        data[date] = timeStr;
      });

    }
  };
</script>
