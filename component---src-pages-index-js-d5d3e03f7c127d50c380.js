(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),c=t.n(n),r=t("zldw"),o=t("/MKj"),l=t("ANjH");function s(e){return function(a){var t=a.dispatch,n=a.getState;return function(a){return function(c){return"function"==typeof c?c(t,n,e):a(c)}}}}var i=s();i.withExtraArgument=s;var d=i,u={searchQuery:""},p={crate:[{data:{title:"lofiii baby",url:"https://www.youtube.com/watch?v=5qap5aO4i9A"}}],crateIndex:0},h={searchbar:function(e,a){switch(void 0===e&&(e=u),a.type){case"UPDATE_SEARCH_VALUE":return console.log(a.payload,"this should be the search value"),Object.assign({},e,{searchQuery:a.payload});default:return e}},crate:function(e,a){switch(void 0===e&&(e=p),a.type){case"UPDATE_CRATE":return console.log(a.payload,"this is what's going into the crate"),Object.assign({},e,{crate:a.payload});case"SET_NEW_RECORD_INDEX":return console.log(a.payload,"this is the new crate Index value"),Object.assign({},e,{crateIndex:a.payload});case"INCREMENT_CRATE_INDEX":return console.log("incrementing crate index",a.payload),a.payload>=e.crateIndex.length&&(a.payload=0),Object.assign({},e,{crateIndex:a.payload});case"DECREMENT_CRATE_INDEX":return console.log("decrementing crate index",a.payload),a.payload<0&&(a.payload=e.crate.length-1),console.log("this is the action.payload",a.payload,e.crate),Object.assign({},e,{crateIndex:a.payload});default:return e}}},y=Object(l.c)(h),E=Object(l.d)(y,Object(l.a)(d));a.default=function(){return c.a.createElement(o.a,{store:E},c.a.createElement(r.default,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d5d3e03f7c127d50c380.js.map