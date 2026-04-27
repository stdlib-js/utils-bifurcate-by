"use strict";var f=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var c=f(function(H,g){
var O=require('@stdlib/assert-is-plain-object/dist'),l=require('@stdlib/assert-has-own-property/dist'),B=require('@stdlib/utils-index-of/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),o=["values","indices","*"];function E(e,t){return O(t)?(l(t,"thisArg")&&(e.thisArg=t.thisArg),l(t,"returns")&&(e.returns=t.returns,B(o,e.returns)===-1)?new TypeError(h('1Rt4S',"returns",o.join('", "'),e.returns)):null):new TypeError(h('1Rt2V',t));}g.exports=E
});var m=f(function(J,b){
function T(e,t,v){var i,n,r,s,u,a;if(i=t.thisArg,s=e.length,s===0)return[];for(r=[[],[]],a=0;a<s;a++)u=e[a],n=v.call(i,u,a),n?r[0].push(u):r[1].push(u);return r}b.exports=T
});var q=f(function(K,p){
function V(e,t,v){var i,n,r,s,u;if(i=t.thisArg,s=e.length,s===0)return[];for(r=[[],[]],u=0;u<s;u++)n=v.call(i,e[u],u),n?r[0].push(u):r[1].push(u);return r}p.exports=V
});var w=f(function(M,d){
function j(e,t,v){var i,n,r,s,u,a;if(i=t.thisArg,s=e.length,s===0)return[];for(r=[[],[]],a=0;a<s;a++)u=e[a],n=v.call(i,u,a),n?r[0].push([a,u]):r[1].push([a,u]);return r}d.exports=j
});var x=f(function(N,y){
var F=require('@stdlib/assert-is-collection/dist'),P=require('@stdlib/assert-is-function/dist'),A=require('@stdlib/error-tools-fmtprodmsg/dist'),C=c(),I=m(),L=q(),k=w();function z(e,t,v){var i,n,r;if(!F(e))throw new TypeError(A('1RtAh',e));if(i={returns:"values"},arguments.length===2)r=t;else{if(n=C(i,t),n)throw n;r=v}if(!P(r))throw new TypeError(A('1Rt3q',r));return i.returns==="values"?I(e,i,r):i.returns==="indices"?L(e,i,r):k(e,i,r)}y.exports=z
});var D=x();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
