webpackJsonp([9],{MD7Q:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("IvJb"),a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var o=e("C7Lr")({name:"App"},a,!1,function(t){e("QgKm")},null,null).exports,r=e("zO6J");i.a.use(r.a);var c=new r.a({mode:"hash",routes:[{path:"/index",name:"Index",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"42Hy"))}},{path:"/img",name:"Img",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"b0ui"))}},{path:"/type",component:function(){return e.e(7).then(e.bind(null,"kMqs"))}},{path:"/color",component:function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"3rbB"))}},{path:"/detail",name:"Detail",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"wHgX"))}},{path:"/quotation",name:"Quotation",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"5gQX"))}},{path:"/login",component:function(){return e.e(3).then(e.bind(null,"K31e"))}},{path:"*",redirect:"/index"}]});c.beforeEach(function(t,n,e){window.localStorage.getItem("login")||"/login"==t.path||e("/login"),e()});var s=c,u=e("9rMa"),l=e("6LYt"),d=e.n(l),m=e("3cXf"),h=e.n(m),f=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};/\?/.test(t)?t+="&_="+ +new Date:t+="?_="+ +new Date;var i={method:n};return"POST"==n&&(i.body=h()(e)),fetch(t,i).then(function(t){return t.json()})},p=function(t){var n="";return t&&(n+="provinceid="+t),f("https://baojia.chelun.com/v1-city-alllist.html?"+n)},g={namespaced:!0,state:{letters:[],brand:{},letter:"",isShow:!1,brandId:"",makeList:"",isShowList:!1},mutations:{initState:function(t,n){var e=[],i={};n.forEach(function(t){var n=t.Spelling[0];-1!=e.indexOf(n)?i[n].push(t):(e.push(n),i[n]=[t])}),t.letters=e,t.brand=i},changeMakeList:function(t,n){t.brandId=n.id,t.makeList=n.list,t.isShowList=!0},showLetter:function(t,n){t.isShow=n},changeLetter:function(t,n){t.letter=n},hideMakeList:function(t){t.isShowList=!1},showMakeList:function(t){t.isShowList=!0}},actions:{initState:function(t,n){var e=t.commit;f("https://baojia.chelun.com/v2-car-getMasterBrandList.html").then(function(t){e("initState",t.data)})},onBtn:function(t,n){var e,i=t.commit,a=t.state;n!=a.brandId?(e=n,f("https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID="+e)).then(function(t){i("changeMakeList",{id:n,list:t.data})}):a.isShowList||i("showMakeList")}}},v=e("IHPB"),b=e.n(v),w=e("zsLt"),_=e.n(w),y={namespaced:!0,state:{info:{},currentYear:"全部",carId:""},getters:{year:function(t){if(!t.info.list)return[];var n=t.info.list.map(function(t){return t.market_attribute.year}),e=new _.a(n);return["全部"].concat(b()(e))},list:function(t){if(!t.info.list)return[];function n(t){var n=[],e={};return t.forEach(function(t){var i=t.exhaust_str+"/"+t.max_power_str+" "+t.inhale_type;-1==n.indexOf(i)?(n.push(i),e[i]=[t]):e[i].push(t)}),e}return"全部"==t.currentYear?n(t.info.list):n(t.info.list.filter(function(n){return n.market_attribute.year==t.currentYear}))}},mutations:{changeYear:function(t,n){t.currentYear=n},Info:function(t,n){n.data.list.sort(function(t,n){return n.market_attribute.year!=t.market_attribute.year?n.market_attribute.year-t.market_attribute.year:n.exhaust_str>t.exhaust_str?-1:n.exhaust_str<t.exhaust_str?1:n.max_power_str>t.max_power_str?-1:n.max_power_str<t.max_power_str?1:n.market_attribute.dealer_price_min>t.market_attribute.dealer_price_min?-1:1}),t.info=n.data,t.carId=n.id}},actions:{getInfoAndList:function(t,n){var e,i=t.commit;(e=n,f("https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID="+e)).then(function(t){i("Info",{id:n,data:t.data})})}}},I={namespaced:!0,state:{olist:"",colour:"颜色",carModel:"车款",carID:"",colorID:""},mutations:{list:function(t,n){var e=/(\{)([\d])(\})/g;n.data.map(function(t){t.List.map(function(t){t.Url=t.Url.replace(e,function(n,e,i){return t.LowSize})})}),t.olist=n.data,t.carID=n.id,t.colorID=n.id},ImgDeail:function(t,n){}},actions:{getImgList:function(t,n){var e,i,a,o,r=t.commit;(e=n,o="SerialID="+e,i&&(o+="&ColorID="+i),a&&(o+="&CarID="+a),f("https://baojia.chelun.com/v2-car-getImageList.html?"+o)).then(function(t){r("list",{id:n,data:t.data})})}}},L={namespaced:!0,state:{ColorList:{},colorDetailList:[],id:""},mutations:{Color:function(t,n){t.ColorList=n.data,t.id=n.id}},actions:{getColorList:function(t,n){var e,i=t.commit;(e=n,f("https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID="+e)).then(function(t){i("Color",{id:n,data:t.data})})}}},S={namespaced:!0,state:{isShowCity:!1,currentCity:"",city:{},quotation:{}},mutations:{showCity:function(t,n){t.isShowCity=n},updateCity:function(t,n){t.city=n,t.isShowCity=!1}},actions:{getDealerList:function(t,n){var e,i;t.commit;(e=n,f("https://baojia.chelun.com/v2-dealer-alllist.html?carId="+e+"&cityId="+i)).then(function(t){console.log(t)})}}},C={namespaced:!0,state:{locationCity:"",provinces:[],cities:[],isShowCity:!1},mutations:{updateProvinces:function(t,n){t.provinces=n.data},updateCities:function(t,n){t.cities=n.data,t.isShowCity=!0},hideCity:function(t,n){t.isShowCity=!1}},actions:{getCityList:function(t,n){var e=t.commit;n?p(n).then(function(t){e("updateCities",t)}):p().then(function(t){e("updateProvinces",t)})}}},k=e("MD7Q"),D=e.n(k);i.a.use(u.a);var x=new u.a.Store({modules:{index:g,detail:y,getimg:I,color:L,quotation:S,city:C,type:D.a},plugins:[d()()]});i.a.config.productionTip=!1,new i.a({el:"#app",router:s,store:x,components:{App:o},template:"<App/>"})},QgKm:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.4bfd0835b2a783d1fafa.js.map