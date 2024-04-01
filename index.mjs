// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.1-esm/index.mjs";var o=["values","indices","*"];function u(u,l,h){var d,p,m;if(!r(u))throw new TypeError(s("1RtAh",u));if(d={returns:"values"},2===arguments.length)m=l;else{if(p=function(r,t){return e(t)?(n(t,"thisArg")&&(r.thisArg=t.thisArg),n(t,"returns")&&(r.returns=t.returns,-1===i(o,r.returns))?new TypeError(s("1Rt4S","returns",o.join('", "'),r.returns)):null):new TypeError(s("1Rt2V",t))}(d,l),p)throw p;m=h}if(!t(m))throw new TypeError(s("1Rt3q",m));return"values"===d.returns?function(r,t,s){var e,n,i,o,u;if(e=t.thisArg,0===(i=r.length))return[];for(n=[[],[]],u=0;u<i;u++)o=r[u],s.call(e,o,u)?n[0].push(o):n[1].push(o);return n}(u,d,m):"indices"===d.returns?function(r,t,s){var e,n,i,o;if(e=t.thisArg,0===(i=r.length))return[];for(n=[[],[]],o=0;o<i;o++)s.call(e,r[o],o)?n[0].push(o):n[1].push(o);return n}(u,d,m):function(r,t,s){var e,n,i,o,u;if(e=t.thisArg,0===(i=r.length))return[];for(n=[[],[]],u=0;u<i;u++)o=r[u],s.call(e,o,u)?n[0].push([u,o]):n[1].push([u,o]);return n}(u,d,m)}export{u as default};
//# sourceMappingURL=index.mjs.map
