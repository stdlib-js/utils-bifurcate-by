// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.1.0-esm/index.mjs";var o=["values","indices","*"];function u(r,t){return e(t)?(n(t,"thisArg")&&(r.thisArg=t.thisArg),n(t,"returns")&&(r.returns=t.returns,-1===i(o,r.returns))?new TypeError(s("1Rt2X,3g,4S,GD,Gg,Jm","returns",o.join('", "'),r.returns)):null):new TypeError(s("1Rt2V,FD",t))}function l(r,t,s){var e,n,i,o,u;if(e=t.thisArg,0===(i=r.length))return[];for(n=[[],[]],u=0;u<i;u++)o=r[u],s.call(e,o,u)?n[0].push(o):n[1].push(o);return n}function h(r,t,s){var e,n,i,o;if(e=t.thisArg,0===(i=r.length))return[];for(n=[[],[]],o=0;o<i;o++)s.call(e,r[o],o)?n[0].push(o):n[1].push(o);return n}function d(r,t,s){var e,n,i,o,u;if(e=t.thisArg,0===(i=r.length))return[];for(n=[[],[]],u=0;u<i;u++)o=r[u],s.call(e,o,u)?n[0].push([u,o]):n[1].push([u,o]);return n}function m(e,n,i){var o,m,p;if(!r(e))throw new TypeError(s("1RtAh,O3",e));if(o={returns:"values"},2===arguments.length)p=n;else{if(m=u(o,n))throw m;p=i}if(!t(p))throw new TypeError(s("1Rt3q,JV",p));return"values"===o.returns?l(e,o,p):"indices"===o.returns?h(e,o,p):d(e,o,p)}export{m as default};
//# sourceMappingURL=index.mjs.map
