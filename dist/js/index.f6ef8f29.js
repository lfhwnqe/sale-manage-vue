(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"11e9":function(t,e,r){var a=r("52a7"),n=r("4630"),i=r("6821"),o=r("6a99"),c=r("69a8"),s=r("c69a"),l=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?l:function(t,e){if(t=i(t),e=o(e,!0),s)try{return l(t,e)}catch(r){}if(c(t,e))return n(!a.f.call(t,e),t[e])}},"1af6":function(t,e,r){var a=r("63b6");a(a.S,"Array",{isArray:r("9003")})},"20fd":function(t,e,r){"use strict";var a=r("d9f6"),n=r("aebd");t.exports=function(t,e,r){e in t?a.f(t,e,n(0,r)):t[e]=r}},"3f9d":function(t,e,r){},"549b":function(t,e,r){"use strict";var a=r("d864"),n=r("63b6"),i=r("241e"),o=r("b0dc"),c=r("3702"),s=r("b447"),l=r("20fd"),u=r("7cd6");n(n.S+n.F*!r("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,n,f,d=i(t),m="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v,g=0,h=u(d);if(b&&(v=a(v,p>2?arguments[2]:void 0,2)),void 0==h||m==Array&&c(h))for(e=s(d.length),r=new m(e);e>g;g++)l(r,g,b?v(d[g],g):d[g]);else for(f=h.call(d),r=new m;!(n=f.next()).done;g++)l(r,g,b?o(f,v,[n.value,g],!0):n.value);return r.length=g,r}})},"54a1":function(t,e,r){r("6c1c"),r("1654"),t.exports=r("95d5")},"5dbc":function(t,e,r){var a=r("d3f4"),n=r("8b97").set;t.exports=function(t,e,r){var i,o=e.constructor;return o!==r&&"function"==typeof o&&(i=o.prototype)!==r.prototype&&a(i)&&n&&n(t,i),t}},"774e":function(t,e,r){t.exports=r("d2d5")},"7abe":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page ui-pa-2"},[r("div",{staticClass:"home-page_statics "},[r("mt-cell",{attrs:{title:"近30天订单量/斤",value:t.near30DaysStatics.totalCount}}),r("mt-cell",{attrs:{title:"近30天订单入账/元",value:t.near30DaysStatics.totalAmount}}),r("mt-cell",{attrs:{title:"近7天订单量/斤",value:t.near7DaysStatics.totalCount}}),r("mt-cell",{attrs:{title:"近7天订单入账/元",value:t.near7DaysStatics.totalAmount}}),r("mt-cell",{attrs:{title:"今日订单量/斤",value:t.todayStatics.totalCount}}),r("mt-cell",{attrs:{title:"今日订单入账/元",value:t.todayStatics.totalAmount}})],1),r("div",{staticClass:"home-page_btns ui-mt-2"},[r("mt-button",{staticClass:"ui-mr-2",attrs:{type:"primary"},nativeOn:{click:function(e){return t.$router.push({name:"orderList"})}}},[t._v("订单列表")]),r("mt-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.$router.push({name:"addOrder"})}}},[t._v("添加订单")])],1)])},n=[],i=(r("e851"),r("bdd0"));function o(t){return i["a"].post("/api/geTotalRevenueStatics",t)}var c={data:function(){return{near30DaysStatics:{},near7DaysStatics:{},todayStatics:{}}},methods:{geTotalRevenueStatics:function(){var t=this;return o().then(function(e){console.log("res:",e),t.near30DaysStatics=e.near30DaysStatics,t.near7DaysStatics=e.near7DaysStatics,t.todayStatics=e.todayStatics})}},created:function(){this.geTotalRevenueStatics()}},s=c,l=r("2877"),u=Object(l["a"])(s,a,n,!1,null,null,null);e["default"]=u.exports},"8b97":function(t,e,r){var a=r("d3f4"),n=r("cb7c"),i=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,r){return i(t,r),e?t.__proto__=r:a(t,r),t}}({},!1):void 0),check:i}},9003:function(t,e,r){var a=r("6b4c");t.exports=Array.isArray||function(t){return"Array"==a(t)}},9093:function(t,e,r){var a=r("ce10"),n=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},"95d5":function(t,e,r){var a=r("40c3"),n=r("5168")("iterator"),i=r("481b");t.exports=r("584a").isIterable=function(t){var e=Object(t);return void 0!==e[n]||"@@iterator"in e||i.hasOwnProperty(a(e))}},a745:function(t,e,r){t.exports=r("f410")},aa77:function(t,e,r){var a=r("5ca1"),n=r("be13"),i=r("79e5"),o=r("fdef"),c="["+o+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t,e,r){var n={},c=i(function(){return!!o[t]()||s[t]()!=s}),l=n[t]=c?e(d):o[t];r&&(n[r]=l),a(a.P+a.F*c,"String",n)},d=f.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},c5f6:function(t,e,r){"use strict";var a=r("7726"),n=r("69a8"),i=r("2d95"),o=r("5dbc"),c=r("6a99"),s=r("79e5"),l=r("9093").f,u=r("11e9").f,f=r("86cc").f,d=r("aa77").trim,m="Number",p=a[m],v=p,b=p.prototype,g=i(r("2aeb")(b))==m,h="trim"in String.prototype,y=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():d(e,3);var r,a,n,i=e.charCodeAt(0);if(43===i||45===i){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var o,s=e.slice(2),l=0,u=s.length;l<u;l++)if(o=s.charCodeAt(l),o<48||o>n)return NaN;return parseInt(s,a)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof p&&(g?s(function(){b.valueOf.call(r)}):i(r)!=m)?o(new v(y(e)),r,p):y(e)};for(var _,S=r("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;S.length>N;N++)n(v,_=S[N])&&!n(p,_)&&f(p,_,u(v,_));p.prototype=b,b.constructor=p,r("2aba")(a,m,p)}},c822:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-list ui-container ui-pa-2"},[r("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getOrderList,expression:"getOrderList"}],staticClass:"order-list_list ",attrs:{"infinite-scroll-distance":"0","infinite-scroll-disabled":t.loading}},[t._l(t.orderList,function(e,a){return r("div",{staticClass:"order-list-item"},[a===t.dateIndex[new Date(e.saleTime).toLocaleDateString()]?r("mt-cell",{attrs:{title:new Date(e.saleTime).toLocaleDateString()}}):t._e(),r("mt-cell",{attrs:{title:e.productName,value:e.totalPrice}})],1)}),r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"order-list_loading ui-ta-center"},[r("mt-spinner",{attrs:{type:"fading-circle"}})],1)],2)])},n=[],i=(r("ac6a"),r("a745")),o=r.n(i);function c(t){if(o()(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var s=r("774e"),l=r.n(s),u=r("c8bb"),f=r.n(u);function d(t){if(f()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return l()(t)}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return c(t)||d(t)||m()}r("c5f6");var v=r("f8b7"),b=(r("3f9d"),{data:function(){return{orderList:[],loading:!1,form:{pageSize:20,pageNum:0},totalPage:0,isFirst:!0}},methods:{getOrderList:function(){var t=this;if(!this.loading&&(this.isFirst||this.totalPage!=this.form.pageNum))return this.loading=!0,this.form.pageNum=Number(this.form.pageNum)+1,v["a"](this.form).then(function(e){t.orderList=[].concat(p(t.orderList),p(e.orderList)),t.form.pageSize=e.pageSize,t.form.pageNum=e.pageNum,t.totalPage=e.totalPage,t.isFirst=!1}).finally(function(e){t.loading=!1})}},computed:{dateIndex:function(){var t={},e=this.orderList;return e.forEach(function(e,r){var a=new Date(e.saleTime).toLocaleDateString();t[a]||0===t[a]||(t[a]=r)}),t}}}),g=b,h=r("2877"),y=Object(h["a"])(g,a,n,!1,null,null,null);e["default"]=y.exports},c8bb:function(t,e,r){t.exports=r("54a1")},d2d5:function(t,e,r){r("1654"),r("549b"),t.exports=r("584a").Array.from},da3b:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"add-order ui-container ui-pa-2"},[r("div",{staticClass:"add-order_form"},[r("mt-field",{attrs:{label:"产品名称",placeholder:"请输入产品名称"},model:{value:t.form.productName,callback:function(e){t.$set(t.form,"productName",e)},expression:"form.productName"}}),r("mt-field",{attrs:{label:"商品数量/斤",placeholder:"请输入商品数量",type:"number"},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}}),r("mt-field",{attrs:{label:"实售价格(元)",placeholder:"请输入实际出售价格",type:"number"},model:{value:t.form.totalPrice,callback:function(e){t.$set(t.form,"totalPrice",e)},expression:"form.totalPrice"}}),r("mt-field",{attrs:{label:"吊牌价格(元)",placeholder:"请输入吊牌价格",type:"number"},model:{value:t.form.tagPrice,callback:function(e){t.$set(t.form,"tagPrice",e)},expression:"form.tagPrice"}}),r("mt-field",{attrs:{label:"销售时间",placeholder:"请输入销售时间",type:"date"},model:{value:t.form.saleTime,callback:function(e){t.$set(t.form,"saleTime",e)},expression:"form.saleTime"}}),r("mt-field",{attrs:{label:"备注",placeholder:"请输入备注"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),r("div",{staticClass:"add-order_btns ui-mt-2 ui-ta-center"},[r("mt-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.addOrder(e)}}},[t._v("添加")])],1)])},n=[],i=r("f8b7"),o=r("76a0"),c={data:function(){return{form:{productName:"",amount:"",totalPrice:"",tagPrice:"",saleTime:"",remark:""}}},methods:{addOrder:function(){console.log("orderForm:",this.form),i["b"](this.form).then(function(t){Object(o["Toast"])({type:"success",message:"添加成功"})})}},created:function(){}},s=c,l=r("2877"),u=Object(l["a"])(s,a,n,!1,null,null,null);e["default"]=u.exports},e851:function(t,e,r){},f410:function(t,e,r){r("1af6"),t.exports=r("584a").Array.isArray},f8b7:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return i});var a=r("bdd0");function n(t){return a["a"].get("/api/getOrderList",{params:t})}function i(t){return a["a"].post("/api/insertOrder",t)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=index.f6ef8f29.js.map