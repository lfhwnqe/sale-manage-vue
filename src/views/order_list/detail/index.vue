<template>
  <div class="order-detail ui-container ui-pa-1">
    <div class="order-detail">
      <mu-list toggle-nested>
        <mu-list-item button :ripple="false" nested :open="open === 'send'"
          @toggle-nested="open = arguments[0] ? 'send' : ''">
          <!--<mu-list-item-action>-->
          <!--<mu-icon value="send"></mu-icon>-->
          <!--</mu-list-item-action>-->
          <mu-list-item-title>内容</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>

          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>商品类型</mu-list-item-title>
            <mu-list-item-sub-title>出售价格</mu-list-item-sub-title>
            <mu-list-item-sub-title>数量</mu-list-item-sub-title>
          </mu-list-item>
          <mu-list-item v-for="item in data.ordersList" button :ripple="false" slot="nested">
            <mu-list-item-title>{{ item.productType }}</mu-list-item-title>
            <mu-list-item-sub-title>{{ item.price |currency|empty}}</mu-list-item-sub-title>
            <mu-list-item-sub-title>{{ item.number |empty}}</mu-list-item-sub-title>
          </mu-list-item>
        </mu-list-item>
        <mu-divider></mu-divider>

        <mu-list-item button :ripple="false">
          <mu-list-item-title>总价：</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ data.ordersTotalPrice|currency|empty }}
          </mu-list-item-sub-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>销售时间：</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ data.saleTime|date|empty }}
          </mu-list-item-sub-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>创建时间：</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ data.createTime|date|empty }}
          </mu-list-item-sub-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>销售员：</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ data.saleBy|empty }}
          </mu-list-item-sub-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>备注：</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ data.remark|empty }}
          </mu-list-item-sub-title>
        </mu-list-item>
        <mu-divider></mu-divider>
      </mu-list>

      <!--<mu-list textline="two-line">-->
      <!--<template v-for="item in data.ordersList">-->
      <!--<mu-list-item avatar :ripple="false">-->
      <!--<mu-list-item-content>-->
      <!--<mu-list-item-title>{{ item.productType |empty}}</mu-list-item-title>-->
      <!--<mu-list-item-sub-title>{{ item.price |currency|empty}}-->
      <!--</mu-list-item-sub-title>-->
      <!--</mu-list-item-content>-->
      <!--</mu-list-item>-->

      <!--</template>-->
      <!--<mu-list-item avatar :ripple="false" v-for="list in dataList">-->
      <!--<mu-list-item-content>-->
      <!--<mu-list-item-title>{{ list.label }}</mu-list-item-title>-->
      <!--<mu-list-item-sub-title v-if="list.filter&&list.filter==='currency'">{{ data[list.name] |currency|empty}}-->
      <!--</mu-list-item-sub-title>-->
      <!--<mu-list-item-sub-title v-else-if="list.filter&&list.filter==='date'">{{ data[list.name]-->
      <!--|date("YYYY-MM-dd HH:hh:mm:ss")|empty}}-->
      <!--</mu-list-item-sub-title>-->
      <!--<mu-list-item-sub-title v-else>{{ data[list.name] |empty}}</mu-list-item-sub-title>-->
      <!--</mu-list-item-content>-->
      <!--</mu-list-item>-->
      <!--</mu-list>-->

    </div>
  </div>

</template>

<script>
  //  import * as api from '../../api/order';
  import './index.scss';

  export default {
    data() {
      return {
        open: 'send',
        data: {},
        itemList: [
          {
            name: 'productName',
            label: '商品名称'
          }
        ],
        dataList: [
          {
            name: 'ordersTotalPrice',
            label: '总价',
            filter: 'currency'
          }, {
            name: 'saleTime',
            label: '销售时间',
            filter: 'date'
          }, {
            name: 'createTime',
            label: '创建时间',
            filter: 'date'
          }, {
            name: 'remark',
            label: '备注'
          },
          {
            name: 'saleBy',
            label: '销售员'
          },
        ]
      };
    },
    created() {
      const data = this.$route.params;
      if (!data.ordersTotalPrice) {
        this.$router.push({ name: 'orderList' });
        return;
      }
      this.data = data;
//      ['saleTime', 'createTime'].forEach(date => {
//        const time = new Date(data[date]);
//        const timeStr = time.toLocaleString();
//        data[date] = timeStr;
//      });

    }
  };
</script>
