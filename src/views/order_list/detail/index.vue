<template>
  <div class="order-detail ui-container ui-pa-1">
    <div class="order-detail">
      <mu-list toggle-nested>
        <template v-for="(item,index) in data.ordersList">
          <mu-list-item button :ripple="false" nested :open="open == index"
            @toggle-nested="open = arguments[0] ? index : ''">
            <mu-list-item-title>单个商品</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
            </mu-list-item-action>

            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>商品类型：{{ item.productType|dict|empty }}</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>出售价格：{{ item.price |currency|empty }}</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>数量：{{ item.number |empty}}</mu-list-item-title>
            </mu-list-item>
          </mu-list-item>
          <mu-divider></mu-divider>
        </template>

        <mu-list-item button :ripple="false">
          <mu-list-item-title>总价：</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ data.ordersTotalPrice|currency|empty }}
          </mu-list-item-sub-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>会员电话：</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ data.phone|empty }}
          </mu-list-item-sub-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>销售时间：</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ data.saleTime|date('YYYY-MM-dd HH:mm:ss')|empty }}
          </mu-list-item-sub-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>创建时间：</mu-list-item-title>
          <mu-list-item-sub-title>
            {{ data.createTime|date('YYYY-MM-dd HH:mm:ss')|empty }}
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
    </div>
  </div>

</template>

<script>
  //  import * as api from '../../api/order';
  import './index.scss';

  export default {
    props: {
      data: { type: Object, require: true }
    },
    data() {
      return {
        open: '0',
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
  };
</script>
