// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).bifurcateBy=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=Math.floor;var t=function(r){return e(r)===r},n=t;var i=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&n(r.length)&&r.length>=0&&r.length<=9007199254740991},o=/./,a="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=function(){try{return a({},"x",{}),!0}catch(r){return!1}},c=Object.defineProperty,s=Object.prototype,f=s.toString,l=s.__defineGetter__,p=s.__defineSetter__,v=s.__lookupGetter__,g=s.__lookupSetter__;var d=function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(v.call(r,e)||g.call(r,e)?(n=r.__proto__,r.__proto__=s,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&l&&l.call(r,e,t.get),a&&p&&p.call(r,e,t.set),r},h=c,m=d,b=u()?h:m;var y=function(r,e,t){b(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},w=y;var j=function(r){return"boolean"==typeof r};var E=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var P=function(){return E&&"symbol"==typeof Symbol.toStringTag},O=Object.prototype.toString,_=O;var T=function(r){return _.call(r)},V=Object.prototype.hasOwnProperty;var x=function(r,e){return null!=r&&V.call(r,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",k=x,A=S,I=O;var F=T,R=function(r){var e,t,n;if(null==r)return I.call(r);t=r[A],e=k(r,A);try{r[A]=void 0}catch(e){return I.call(r)}return n=I.call(r),e?r[A]=t:delete r[A],n},$=P()?R:F,M=Boolean.prototype.toString;var C=$,N=function(r){try{return M.call(r),!0}catch(r){return!1}},B=P();var G=function(r){return"object"==typeof r&&(r instanceof Boolean||(B?N(r):"[object Boolean]"===C(r)))},L=j,Z=G;var W=w,X=function(r){return L(r)||Z(r)},z=G;W(X,"isPrimitive",j),W(X,"isObject",z);var U=X;var Y=function(){return new Function("return this;")()},D="object"==typeof self?self:null,q="object"==typeof window?window:null,H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof H?H:null;module.exports=J;var K=U.isPrimitive,Q=Y,rr=D,er=q,tr=r(Object.freeze({__proto__:null}));var nr=function(r){if(arguments.length){if(!K(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Q()}if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")},ir=nr(),or=ir.document&&ir.document.childNodes,ar=Int8Array,ur=o,cr=or,sr=ar;var fr=function(){return"function"==typeof ur||"object"==typeof sr||"function"==typeof cr};var lr=function(){return/^\s*function\s*([^(]*)/i},pr=lr;w(pr,"REGEXP",lr());var vr=pr,gr=$;var dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===gr(r)},hr=dr;var mr=function(r){return null!==r&&"object"==typeof r};w(mr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!hr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(mr));var br=mr;var yr=$,wr=vr.REGEXP,jr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Er=function(r){var e,t,n;if(("Object"===(t=yr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=wr.exec(n.toString()))return e[1]}return jr(r)?"Buffer":t},Pr=Er;var Or=Er;var _r=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Pr(r).toLowerCase():e},Tr=function(r){return Or(r).toLowerCase()},Vr=fr()?Tr:_r;var xr=function(r){return"function"===Vr(r)};var Sr=function(r){return"string"==typeof r},kr=String.prototype.valueOf;var Ar=$,Ir=function(r){try{return kr.call(r),!0}catch(r){return!1}},Fr=P();var Rr=function(r){return"object"==typeof r&&(r instanceof String||(Fr?Ir(r):"[object String]"===Ar(r)))},$r=Sr,Mr=Rr;var Cr=w,Nr=function(r){return $r(r)||Mr(r)},Br=Rr;Cr(Nr,"isPrimitive",Sr),Cr(Nr,"isObject",Br);var Gr=Nr;var Lr=function(r){return"number"==typeof r},Zr=Number,Wr=Zr.prototype.toString;var Xr=$,zr=Zr,Ur=function(r){try{return Wr.call(r),!0}catch(r){return!1}},Yr=P();var Dr=function(r){return"object"==typeof r&&(r instanceof zr||(Yr?Ur(r):"[object Number]"===Xr(r)))},qr=Lr,Hr=Dr;var Jr=w,Kr=function(r){return qr(r)||Hr(r)},Qr=Dr;Jr(Kr,"isPrimitive",Lr),Jr(Kr,"isObject",Qr);var re=Kr,ee=Number.POSITIVE_INFINITY,te=Zr.NEGATIVE_INFINITY,ne=ee,ie=te,oe=t;var ae=function(r){return r<ne&&r>ie&&oe(r)},ue=re.isPrimitive,ce=ae;var se=function(r){return ue(r)&&ce(r)},fe=re.isObject,le=ae;var pe=function(r){return fe(r)&&le(r.valueOf())},ve=se,ge=pe;var de=w,he=function(r){return ve(r)||ge(r)},me=pe;de(he,"isPrimitive",se),de(he,"isObject",me);var be=he;var ye=function(r){return r!=r},we=re.isPrimitive,je=ye;var Ee=function(r){return we(r)&&je(r)},Pe=re.isObject,Oe=ye;var _e=function(r){return Pe(r)&&Oe(r.valueOf())},Te=Ee,Ve=_e;var xe=w,Se=function(r){return Te(r)||Ve(r)},ke=_e;xe(Se,"isPrimitive",Ee),xe(Se,"isObject",ke);var Ae=Se,Ie=i,Fe=be.isPrimitive,Re=Gr.isPrimitive,$e=Ae.isPrimitive;var Me=function(r,e,t){var n,i,o;if(!Ie(r)&&!Re(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Fe(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Re(r)){if(!Re(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,$e(e)){for(o=i;o<n;o++)if($e(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},Ce=Me,Ne=Gr.isPrimitive;var Be=function(r){if(!Ne(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ge=Gr.isPrimitive;var Le=function(r){if(!Ge(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ze=Be,We=Le,Xe=Gr.isPrimitive;var ze=function(r){return Xe(r)&&r===We(r)&&r!==Ze(r)},Ue=ee,Ye=te;var De=function(r){return r==r&&r>Ye&&r<Ue},qe=be.isPrimitive;var He=function(r){return qe(r)&&r>=0},Je=be.isObject;var Ke=function(r){return Je(r)&&r.valueOf()>=0},Qe=He,rt=Ke;var et=w,tt=function(r){return Qe(r)||rt(r)},nt=Ke;et(tt,"isPrimitive",He),et(tt,"isObject",nt);var it=tt.isPrimitive,ot=Gr.isPrimitive;var at=function(r,e){var t,n;if(!ot(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!it(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ut=be.isPrimitive,ct=Gr.isPrimitive;var st=function(r,e,t){var n,i;if(!ct(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ct(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ut(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},ft=at,lt=st;var pt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(lt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ft("0",i):ft("0",i)+r,n&&(r="-"+r)),r},vt=ze,gt=Le,dt=Be,ht=De,mt=re.isPrimitive,bt=pt;var yt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!ht(n)){if(!mt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=bt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=bt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=vt(r.specifier)?gt(t):dt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},wt=Gr.isPrimitive,jt=/[-\/\\^$*+?.()|[\]{}]/g;var Et=function(r){var e,t;if(!wt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(jt,"\\$&"):(e=(e=r.substring(1,t)).replace(jt,"\\$&"),r=r[0]+e+r.substring(t))},Pt=RegExp.prototype.exec;var Ot=$,_t=function(r){try{return Pt.call(r),!0}catch(r){return!1}},Tt=P();var Vt=Et,xt=xr,St=Gr.isPrimitive,kt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Tt?_t(r):"[object RegExp]"===Ot(r)))};var At=ze,It=Le,Ft=Be,Rt=function(r,e,t){if(!St(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(St(e))e=Vt(e),e=new RegExp(e,"g");else if(!kt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!St(t)&&!xt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},$t=De,Mt=re.isPrimitive,Ct=function(r){return Math.abs(r)},Nt=/e\+(\d)$/,Bt=/e-(\d)$/,Gt=/^(\d+)$/,Lt=/^(\d+)e/,Zt=/\.0$/,Wt=/\.0*e/,Xt=/(\..*[^0])0*e/;var zt=function(r){var e,t,n=parseFloat(r.arg);if(!$t(n)){if(!Mt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ct(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Rt(t,Xt,"$1e"),t=Rt(t,Wt,"e"),t=Rt(t,Zt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Rt(t,Nt,"e+0$1"),t=Rt(t,Bt,"e-0$1"),r.alternate&&(t=Rt(t,Gt,"$1."),t=Rt(t,Lt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=At(r.specifier)?It(t):Ft(t)},Ut=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Yt=at;var Dt=Gr.isPrimitive,qt=Ce,Ht=ye,Jt=yt,Kt=zt,Qt=function(r){var e,t,n,i,o;for(e=0,n=[],o=Ut.exec(r);o;)(t=r.slice(e,Ut.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Ut.lastIndex,o=Ut.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},rn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Yt(" ",n):Yt(" ",n)+r},en=pt,tn=String.fromCharCode;var nn=function(r){var e,t,n,i,o,a,u,c,s;if(!Dt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Qt(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],Dt(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!qt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Ht(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Ht(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Jt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Ht(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ht(o)?String(n.arg):tn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Kt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=en(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=rn(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},on=nn,an=dr;var un=function(r){return"object"==typeof r&&null!==r&&!an(r)},cn=Object.getPrototypeOf;var sn=function(r){return r.__proto__},fn=$,ln=sn;var pn=function(r){var e=ln(r);return e||null===e?e:"[object Function]"===fn(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},vn=cn,gn=pn,dn=xr(Object.getPrototypeOf)?vn:gn;var hn=un,mn=xr,bn=function(r){return null==r?null:(r=Object(r),dn(r))},yn=x,wn=$,jn=Object.prototype;var En=function(r){var e;return!!hn(r)&&(!(e=bn(r))||!yn(r,"constructor")&&yn(e,"constructor")&&mn(e.constructor)&&"[object Function]"===wn(e.constructor)&&yn(e,"isPrototypeOf")&&mn(e.isPrototypeOf)&&(e===jn||function(r){var e;for(e in r)if(!yn(r,e))return!1;return!0}(r)))},Pn=Ae,On=i,_n=Gr.isPrimitive,Tn=be.isPrimitive;var Vn=function(r,e,t){var n,i;if(!On(r)&&!_n(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!Tn(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Pn(e)){for(;i<n;i++)if(Pn(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1},xn=En,Sn=x,kn=Vn,An=on,In=["values","indices","*"];var Fn=i,Rn=xr,$n=on,Mn=function(r,e){return xn(e)?(Sn(e,"thisArg")&&(r.thisArg=e.thisArg),Sn(e,"returns")&&(r.returns=e.returns,-1===kn(In,r.returns))?new TypeError(An('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",In.join('", "'),r.returns)):null):new TypeError(An("invalid argument. Options argument must be an object. Value: `%s`.",e))},Cn=function(r,e,t){var n,i,o,a,u;if(n=e.thisArg,0===(o=r.length))return[];for(i=[[],[]],u=0;u<o;u++)a=r[u],t.call(n,a,u)?i[0].push(a):i[1].push(a);return i},Nn=function(r,e,t){var n,i,o,a;if(n=e.thisArg,0===(o=r.length))return[];for(i=[[],[]],a=0;a<o;a++)t.call(n,r[a],a)?i[0].push(a):i[1].push(a);return i},Bn=function(r,e,t){var n,i,o,a,u;if(n=e.thisArg,0===(o=r.length))return[];for(i=[[],[]],u=0;u<o;u++)a=r[u],t.call(n,a,u)?i[0].push([u,a]):i[1].push([u,a]);return i};var Gn=function(r,e,t){var n,i,o;if(!Fn(r))throw new TypeError($n("invalid argument. First argument must be a collection. Value: `%s`.",r));if(n={returns:"values"},2===arguments.length)o=e;else{if(i=Mn(n,e))throw i;o=t}if(!Rn(o))throw new TypeError($n("invalid argument. Last argument must be a function. Value: `%s`.",o));return"values"===n.returns?Cn(r,n,o):"indices"===n.returns?Nn(r,n,o):Bn(r,n,o)};return Gn}));
//# sourceMappingURL=bundle.js.map
