!function(t){var e={};function r(n){if(e[n])return e[n].exports;var u=e[n]={i:n,l:!1,exports:{}};return t[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)r.d(n,u,function(e){return t[e]}.bind(null,u));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=242)}({242:function(t,e,r){t.exports=r(243)},243:function(t,e){$("#order-status").change((function(t){$.ajax({type:"PUT",url:route("admin.orders.status.update",t.currentTarget.dataset.id),data:{status:t.currentTarget.value},success:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){success(t)})),error:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){error(t.responseJSON.message)}))})}))}});