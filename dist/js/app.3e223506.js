(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],n[i]&&f.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("bb71");a("da64");r["a"].use(n["a"],{theme:{primary:"#82B1FF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},iconfont:"md"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-toolbar",{attrs:{app:"",fixed:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("Riven")]),a("span",{staticClass:"font-weight-light"},[t._v(" Price")])])],1),a("v-content",[a("router-view")],1)],1)},i=[],s={name:"App",data:function(){return{}}},l=s,c=a("2877"),u=a("6544"),p=a.n(u),f=a("7496"),d=a("549c"),v=a("71d9"),h=a("2a7f"),m=Object(c["a"])(l,o,i,!1,null,null,null),b=m.exports;p()(m,{VApp:f["a"],VContent:d["a"],VToolbar:v["a"],VToolbarTitle:h["a"]});var x=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{class:{"px-4":t.$vuetify.breakpoint.smAndUp}},[a("v-card-title",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-select",{attrs:{items:t.platforms,label:"Platform",flat:""},on:{change:t.getData},model:{value:t.platform,callback:function(e){t.platform=e},expression:"platform"}})],1),a("v-spacer"),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-text-field",{attrs:{"append-icon":"search",label:"Search","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),a("v-data-table",{attrs:{items:t.data,headers:t.headers,"rows-per-page-items":[-1],search:t.search,loading:!this.data[0],"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.compatibility))]),a("td",[t._v(t._s(e.item.type))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("round")(e.item.avg)))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("round")(e.item.max)))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("round")(e.item.min)))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.pop))])]}}])})],1)},y=[],_=(a("a481"),{components:{},data:function(){return{platforms:[{value:"PC",text:"PC"},{value:"PS4",text:"PlayStation 4"},{value:"XB1",text:"Xbox One"},{value:"SWI",text:"Nintendo Switch"}],platform:"PC",search:"",headers:[{text:"Compatibility",value:"compatibility"},{text:"Type",value:"type"},{text:"Avera\ufeffge\ufeff\ufeff price",align:"right",value:"avg"},{text:"Max price",align:"right",value:"max"},{text:"Min Price",align:"right",value:"min"},{text:"Pop",align:"right",value:"pop"}],data:[]}},methods:{getData:function(){var t=this;this.data=[],this.$router.push({name:"Main",params:{platform:this.platform}}),this.$http.get("http://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivens".concat(this.platform,".json")).then(function(e){t.data=e.data.map(function(t){return t.name="".concat(t.compatibility?t.compatibility:""," ").concat(t.itemType),t.type=t.itemType.replace(/ .*/,""),t})})}},created:function(){console.log("reated"),this.getData()},filters:{round:function(t){return Math.round(t)}}}),w=_,C=a("b0af"),P=a("12b2"),S=a("8fea"),F=a("0e8f"),O=a("a722"),T=a("b56d"),V=a("9910"),j=a("2677"),k=Object(c["a"])(w,g,y,!1,null,null,null),M=k.exports;p()(k,{VCard:C["a"],VCardTitle:P["a"],VDataTable:S["a"],VFlex:F["a"],VLayout:O["a"],VSelect:T["a"],VSpacer:V["a"],VTextField:j["a"]}),r["a"].use(x["a"]);var $=new x["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Main",component:M}]}),A=a("bc3a"),D=a.n(A),B=a("a7fe"),E=a.n(B);r["a"].config.productionTip=!1,r["a"].use(E.a,D.a),new r["a"]({router:$,render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.3e223506.js.map