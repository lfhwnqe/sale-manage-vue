(function(e){function n(n){for(var r,o,u=n[0],l=n[1],c=n[2],d=0,f=[];d<u.length;d++)o=u[d],i[o]&&f.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(n);while(f.length)f.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==i[u]&&(r=!1)}r&&(a.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},o={app:0},i={app:0},a=[];function u(e){return l.p+"js/"+({"index~login":"index~login",index:"index",login:"login"}[e]||e)+"."+{"index~login":"705c7666",index:"f6ef8f29",login:"49ecb210"}[e]+".js"}function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={index:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({"index~login":"index~login",index:"index",login:"login"}[e]||e)+"."+{"index~login":"31d6cfe0",index:"dd465255",login:"31d6cfe0"}[e]+".css",i=l.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===i))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],d=c.getAttribute("data-href");if(d===r||d===i)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],s.parentNode.removeChild(s),t(a)},s.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(s)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(function(n,t){r=i[e]=[n,t]});n.push(r[2]=a);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=u(e),c=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=i[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,t[1](a)}i[e]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(n)},l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=n,c=c.slice();for(var f=0;f<c.length;f++)n(c[f]);var s=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],a={name:"app"},u=a,l=t("2877"),c=Object(l["a"])(u,o,i,!1,null,null,null),d=c.exports,f=t("76a0"),s=t.n(f),p=t("8c4f"),m=t("a18c");t("a41b"),t("aa35");r["default"].use(p["a"]),r["default"].use(s.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(d)},router:m["a"]}).$mount("#app")},a18c:function(e,n,t){"use strict";t("7f7f");var r=t("8c4f"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h1",[e._v("404 not found")])},i=[],a={},u=a,l=t("2877"),c=Object(l["a"])(u,o,i,!1,null,null,null),d=c.exports;function f(e){if(document.title=e,s()){var n=document.createElement("iframe");n.style.display="none",n.src="/favicon.ico",document.body.appendChild(n),n.addEventListener("load",function(){setTimeout(function(){n.remove()},0)})}}function s(){return/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)}var p=new r["a"]({routes:[{path:"/404",component:d,name:"404",title:"404"},{path:"/",component:function(){return Promise.all([t.e("index~login"),t.e("index")]).then(t.bind(null,"7abe"))},name:"index",title:"主页",meta:{name:"主页"}},{path:"/orderList",name:"orderList",title:"订单列表",meta:{name:"订单列表"},component:function(){return Promise.all([t.e("index~login"),t.e("index")]).then(t.bind(null,"c822"))}},{path:"/addOrder",name:"addOrder",title:"添加订单",meta:{name:"添加订单"},component:function(){return Promise.all([t.e("index~login"),t.e("index")]).then(t.bind(null,"da3b"))}},{path:"/login",component:function(){return Promise.all([t.e("index~login"),t.e("login")]).then(t.bind(null,"9ed6"))},name:"login",meta:{name:"登陆"},title:"登陆"},{path:"*",redirect:{path:"/404"}}]});p.beforeEach(function(e,n,t){f(e.meta.name||"销售统计系统"),t()});n["a"]=p},a41b:function(e,n,t){}});
//# sourceMappingURL=app.b0616ca1.js.map