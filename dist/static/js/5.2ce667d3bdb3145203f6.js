webpackJsonp([5],{nsk7:function(t,e){},wHgX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("4YfN"),a=n.n(i),r=n("9rMa"),o={computed:a()({},Object(r.e)({info:function(t){return t.detail.info},currentYear:function(t){return t.detail.currentYear},carId:function(t){return t.detail.carId}}),Object(r.c)({year:"detail/year",list:"detail/list"})),methods:a()({},Object(r.d)({Info:"detail/Info",changeYear:"detail/changeYear"}),Object(r.b)({getInfoAndList:"detail/getInfoAndList"}),{onBtn:function(t){this.$router.push({path:"/img",query:{id:t}})},quotation:function(t){this.$router.push({path:"/quotation",query:{id:t}})}}),mounted:function(){this.getInfoAndList(this.$route.query.id)}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"car"},[n("div",{staticClass:"content"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.info.CoverPhoto},on:{click:function(e){t.onBtn(t.info.SerialID)}}}),t._v(" "),n("span",[t._v(t._s(t.info.pic_group_count)+"张照片")])]),t._v(" "),n("div",{staticClass:"info"},[n("p",[t._v(t._s(t.info.market_attribute&&t.info.market_attribute.dealer_price))]),t._v(" "),n("p",[t._v("指导价"+t._s(t.info.market_attribute&&t.info.market_attribute.official_refer_price))]),t._v(" "),n("div",{staticClass:"action active flex-row"},[n("button",{attrs:{"data-hover":"hover"},on:{click:function(e){t.quotation(t.info.carId)}}},[t._v(t._s(t.info.BottomEntranceTitle))])])]),t._v(" "),n("div",{staticClass:"car-list"},[n("div",{staticClass:"c-type"},t._l(t.year,function(e,i){return n("span",{key:i,class:t.currentYear==e?"active":"",on:{click:function(n){t.changeYear(e)}}},[t._v(t._s(e))])})),t._v(" "),n("div",{staticClass:"banner"},t._l(t.list,function(e,i){return n("ul",{key:i},[n("p",[t._v(t._s(i))]),t._v(" "),t._l(e,function(e,i){return n("li",{key:i},[n("p",[t._v(t._s(e.market_attribute.year+"款"+e.car_name))]),t._v(" "),n("p",[t._v(t._s(e.max_power+"马力"+e.gear_num+"挡"+e.trans_type))]),t._v(" "),n("p",[n("span",[t._v(t._s("指导价"+e.market_attribute.dealer_price_min))]),t._v(" "),n("span",[t._v(t._s(e.market_attribute.official_refer_price))])]),t._v(" "),n("button",[t._v(t._s(t.info.BottomEntranceTitle))])])})],2)}))])]),t._v(" "),n("div",{staticClass:"bottom flex-column flex-centerY"},[n("p",[t._v(t._s(t.info.BottomEntranceTitle))]),t._v(" "),n("p",[t._v(t._s(t.info.BottomEntranceSubTitle))])])])},staticRenderFns:[]};var s=n("C7Lr")(o,c,!1,function(t){n("nsk7")},"data-v-43f7b2b1",null);e.default=s.exports}});
//# sourceMappingURL=5.2ce667d3bdb3145203f6.js.map