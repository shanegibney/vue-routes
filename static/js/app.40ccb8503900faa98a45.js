webpackJsonp([0],{"1Of6":function(t,e,n){t.exports=n.p+"static/img/SAD-3.f021663.jpg"},"6TyL":function(t,e){},BYvh:function(t,e,n){t.exports=n.p+"static/img/SAD-2.3a24624.jpg"},IQLH:function(t,e,n){t.exports=n.p+"static/img/SAD-1.11e8c77.jpg"},Ip50:function(t,e){},JQxG:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r={name:"Navbar",data:function(){return{userIds:["1","2","3","4"]}},methods:{goHome:function(){console.log("hellooooôö"),this.$router.push({name:"Home"}),console.log("hello home")},goBack:function(){this.$router.go(-1)},goForward:function(){this.$router.go(1)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar"},[n("ul",[n("li",[n("router-link",{attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"About"}}},[t._v("About")])],1)]),t._v(" "),n("h2",[t._v("User profiles")]),t._v(" "),n("ul",t._l(t.userIds,function(e,o){return n("li",{key:o},[n("router-link",{attrs:{to:{name:"ViewProfile",params:{user_id:e}}}},[n("span",[t._v("Profile "+t._s(e))])])],1)})),t._v(" "),n("ul",[n("li",[n("button",{on:{click:t.goBack}},[t._v("Go back")])]),t._v(" "),n("li",[n("button",{on:{click:t.goHome}},[t._v("Redirect to Home")])]),t._v(" "),n("li",[n("button",{on:{click:t.goForward}},[t._v("Go forward")])])])])},staticRenderFns:[]};var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar"},[e("a",{attrs:{href:"https://github.com/shanegibney/vue-routes"}},[this._v("return to repo")])])}]};var u={name:"App",components:{Navbar:n("VU/8")(r,i,!1,function(t){n("qMN0")},null,null).exports,Footer:n("VU/8")({name:"Footer",data:function(){return{userIds:["1","2","3","4"]}}},s,!1,function(t){n("xNDA")},null,null).exports}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("h1",[this._v("I am the root component")]),this._v(" "),e("router-view"),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var c=n("VU/8")(u,a,!1,function(t){n("6TyL")},null,null).exports,l=n("/ocq"),h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("h1",[this._v("I am the home component")])])}]};var f=n("VU/8")({name:"Home",data:function(){return{}}},h,!1,function(t){n("Ip50")},null,null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"AboutChild"},[e("h1",[this._v("About child component")]),this._v(" "),e("h2",[this._v(this._s(this.description))])])},staticRenderFns:[]};var d={name:"About",components:{AboutChild:n("VU/8")({name:"AboutChild",data:function(){return{description:"This is a child component of the About component"}}},p,!1,function(t){n("oIbA")},"data-v-12c1200c",null).exports},data:function(){return{}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about"},[e("h1",[this._v("About")]),this._v(" "),e("AboutChild")],1)},staticRenderFns:[]};var v=n("VU/8")(d,m,!1,function(t){n("JQxG")},null,null).exports,_={name:"ViewProfile",data:function(){return{userId:this.$route.params.user_id,num:null}},methods:{updateId:function(){this.userId=this.$route.params.user_id},getImgUrl:function(t){return n("NJhg")("./SAD-"+t+".jpg")},divClass:function(t){return"bg"+t}},watch:{$route:"updateId"}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.divClass(t.userId)},[n("h2",[t._v("Profile for "+t._s(t.userId))]),t._v(" "),n("img",{attrs:{src:t.getImgUrl(t.userId)}})])},staticRenderFns:[]};var b=n("VU/8")(_,g,!1,function(t){n("kRFG")},null,null).exports;o.a.use(l.a);var A=new l.a({mode:"history",routes:[{path:"/",name:"Home",component:f},{path:"/about",name:"About",component:v},{path:"/profile/:user_id",name:"ViewProfile",component:b}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:A,components:{App:c},template:"<App/>"})},NJhg:function(t,e,n){var o={"./SAD-1.jpg":"IQLH","./SAD-2.jpg":"BYvh","./SAD-3.jpg":"1Of6","./SAD-4.jpg":"qxOC"};function r(t){return n(i(t))}function i(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id="NJhg"},kRFG:function(t,e){},oIbA:function(t,e){},qMN0:function(t,e){},qxOC:function(t,e,n){t.exports=n.p+"static/img/SAD-4.c0e6067.jpg"},xNDA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.40ccb8503900faa98a45.js.map