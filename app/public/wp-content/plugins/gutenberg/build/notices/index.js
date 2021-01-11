window.wp=window.wp||{},window.wp.notices=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=397)}({16:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(23),o=n(38),i=n(30);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2:function(t,e){t.exports=window.lodash},23:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},30:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(23);function o(t,e){if(t){if("string"==typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},38:function(t,e,n){"use strict";function r(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n.d(e,"a",(function(){return r}))},397:function(t,e,n){"use strict";n.r(e),n.d(e,"store",(function(){return w}));var r={};n.r(r),n.d(r,"createNotice",(function(){return b})),n.d(r,"createSuccessNotice",(function(){return p})),n.d(r,"createInfoNotice",(function(){return v})),n.d(r,"createErrorNotice",(function(){return O})),n.d(r,"createWarningNotice",(function(){return y})),n.d(r,"removeNotice",(function(){return j}));var o={};n.r(o),n.d(o,"getNotices",(function(){return m}));var i=n(4),c=n(16),u=n(2),a=n(6);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l,d=(l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CREATE_NOTICE":return[].concat(Object(c.a)(Object(u.reject)(t,{id:e.notice.id})),[e.notice]);case"REMOVE_NOTICE":return Object(u.reject)(t,{id:e.id})}return t},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=e.context;if(void 0===n)return t;var r=l(t[n],e);return r===t[n]?t:f(f({},t),{},Object(a.a)({},n,r))});function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"info",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.speak,o=void 0===r||r,i=n.isDismissible,c=void 0===i||i,a=n.context,s=void 0===a?"global":a,f=n.id,l=void 0===f?Object(u.uniqueId)(s):f,d=n.actions,b=void 0===d?[]:d,p=n.type,v=void 0===p?"default":p,O=n.__unstableHTML,y=n.icon,j=void 0===y?null:y,g=n.explicitDismiss,m=void 0!==g&&g,w=n.onDismiss,h=void 0===w?null:w;return{type:"CREATE_NOTICE",context:s,notice:{id:l,status:t,content:e=String(e),spokenMessage:o?e:null,__unstableHTML:O,isDismissible:c,actions:b,type:v,icon:j,explicitDismiss:m,onDismiss:h}}}function p(t,e){return b("success",t,e)}function v(t,e){return b("info",t,e)}function O(t,e){return b("error",t,e)}function y(t,e){return b("warning",t,e)}function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return{type:"REMOVE_NOTICE",id:t,context:e}}var g=[];function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return t[e]||g}var w=Object(i.createReduxStore)("core/notices",{reducer:d,actions:r,selectors:o});Object(i.register)(w)},4:function(t,e){t.exports=window.wp.data},6:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))}});