"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{304:function(r,n,t){t.r(n),t.d(n,{default:function(){return y}});var e,a=t(2982),o=t(1413),u=t(5861),i=t(885),c=t(7757),s=t.n(c),p=t(168),f=t(6444).ZP.h2(e||(e=(0,p.Z)(["\n    font-size: 18px;\n    font-weight: 500;\n"]))),l=t(501),v=t(2791),d=t(8197),h=t(5984),m=t(184),y=function(){var r=(0,v.useState)({items:[],loading:!1,error:null}),n=(0,i.Z)(r,2),t=n[0],e=n[1];(0,v.useEffect)((function(){var r=function(){var r=(0,u.Z)(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e((function(r){return(0,o.Z)((0,o.Z)({},r),{},{loading:!0,error:null})})),r.prev=1,r.next=4,(0,d.XT)();case 4:n=r.sent,e((function(r){return(0,o.Z)((0,o.Z)({},r),{},{items:[].concat((0,a.Z)(r.items),(0,a.Z)(n.results))})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.log(r.t0);case 11:return r.prev=11,e((function(r){return(0,o.Z)((0,o.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[]);var c=t.items,p=t.loading,y=t.error,g=c.map((function(r){var n=r.id,t=r.original_title;return(0,m.jsx)("li",{id:n,children:(0,m.jsx)(l.rU,{state:{from:"/"},to:"/movies/".concat(n),children:t})},(0,h.x0)())}));return(0,m.jsxs)("div",{children:[(0,m.jsx)(f,{children:"Trending Today"}),(0,m.jsx)("ol",{children:g}),p&&(0,m.jsx)("p",{children:"... loading movies"}),y&&(0,m.jsx)("p",{children:"...movies not found"})]})}},8197:function(r,n,t){t.d(n,{SG:function(){return v},Wf:function(){return p},XT:function(){return l},pI:function(){return d},vq:function(){return f}});var e=t(5861),a=t(7757),o=t.n(a),u=t(4569),i=t.n(u),c="799d796b985f1f6ed2e5b2e723499181";i().defaults.baseURL="https://api.themoviedb.org/3";var s=i().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:c,_limit:10}}),p=function(){var r=(0,e.Z)(o().mark((function r(n){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i()("/search/movie",{params:{api_key:c,query:n}});case 3:return t=r.sent,r.abrupt("return",t);case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(o().mark((function r(n){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i()("/movie/".concat(n),{params:{api_key:c}});case 3:return t=r.sent,r.abrupt("return",t);case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(n){return r.apply(this,arguments)}}(),l=function(){var r=(0,e.Z)(o().mark((function r(){var n,t,e,a=arguments;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,r.next=3,s.get("/trending/movie/day",{params:{api_key:c,_page:n}});case 3:return t=r.sent,e=t.data,r.abrupt("return",e);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(o().mark((function r(n){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i()("/movie/".concat(n,"/credits"),{params:{api_key:c}});case 3:return t=r.sent,r.abrupt("return",t);case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(n){return r.apply(this,arguments)}}(),d=function(){var r=(0,e.Z)(o().mark((function r(n){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i()("/movie/".concat(n,"/reviews"),{params:{api_key:c}});case 3:return t=r.sent,r.abrupt("return",t);case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(n){return r.apply(this,arguments)}}()},2982:function(r,n,t){t.d(n,{Z:function(){return o}});var e=t(907);var a=t(181);function o(r){return function(r){if(Array.isArray(r))return(0,e.Z)(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||(0,a.Z)(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},5984:function(r,n,t){t.d(n,{x0:function(){return e}});var e=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(r)).reduce((function(r,n){return r+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=304.842b37fc.chunk.js.map