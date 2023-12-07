import{s as we,f as y,H as ee,a as A,l as W,e as be,g as k,h as P,r as te,d as f,c as U,u as se,m as Z,j as C,i as B,v as u,G as _e,w as ne,I as Ce,n as fe,x as Y,B as tt,J as Ne,K as Pe,L as nt,p as st,A as re,M as rt,o as at,N as it,O as ot,q as je,P as Ae}from"../chunks/scheduler.a009160e.js";import{S as Ee,i as Se,f as ft,b as ue,d as me,m as ce,a as K,t as Q,e as he,g as ve,c as ge}from"../chunks/index.aacbeec2.js";import{C as ut,M as ct,v as ht}from"../chunks/version.4af53474.js";import{e as ye}from"../chunks/each.e59479a4.js";import"../chunks/transform.4d2927c0.js";import{P as mt}from"../chunks/Playground.beca97b1.js";import{g as dt,s as Ue,S as _t}from"../chunks/submit.354091ff.js";import{c as Ve}from"../chunks/copy.685b462d.js";function pt(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function ke(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,l=e.slice(0,n);return[l.length>1?l[0]+l.slice(2):l,+e.slice(n+1)]}function vt(e){return e=ke(Math.abs(e)),e?e[1]:NaN}function gt(e,t){return function(n,l){for(var r=n.length,s=[],a=0,i=e[0],h=0;r>0&&i>0&&(h+i+1>l&&(i=Math.max(1,l-h)),s.push(n.substring(r-=i,r+i)),!((h+=i+1)>l));)i=e[a=(a+1)%e.length];return s.reverse().join(t)}}function bt(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var yt=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Me(e){if(!(t=yt.exec(e)))throw new Error("invalid format: "+e);var t;return new $e({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Me.prototype=$e.prototype;function $e(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}$e.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function kt(e){e:for(var t=e.length,n=1,l=-1,r;n<t;++n)switch(e[n]){case".":l=r=n;break;case"0":l===0&&(l=n),r=n;break;default:if(!+e[n])break e;l>0&&(l=0);break}return l>0?e.slice(0,l)+e.slice(r+1):e}var lt;function wt(e,t){var n=ke(e,t);if(!n)return e+"";var l=n[0],r=n[1],s=r-(lt=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=l.length;return s===a?l:s>a?l+new Array(s-a+1).join("0"):s>0?l.slice(0,s)+"."+l.slice(s):"0."+new Array(1-s).join("0")+ke(e,Math.max(0,t+s-1))[0]}function Be(e,t){var n=ke(e,t);if(!n)return e+"";var l=n[0],r=n[1];return r<0?"0."+new Array(-r).join("0")+l:l.length>r+1?l.slice(0,r+1)+"."+l.slice(r+1):l+new Array(r-l.length+2).join("0")}const He={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:pt,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Be(e*100,t),r:Be,s:wt,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function ze(e){return e}var Ge=Array.prototype.map,Fe=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Et(e){var t=e.grouping===void 0||e.thousands===void 0?ze:gt(Ge.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",l=e.currency===void 0?"":e.currency[1]+"",r=e.decimal===void 0?".":e.decimal+"",s=e.numerals===void 0?ze:bt(Ge.call(e.numerals,String)),a=e.percent===void 0?"%":e.percent+"",i=e.minus===void 0?"−":e.minus+"",h=e.nan===void 0?"NaN":e.nan+"";function w(o){o=Me(o);var b=o.fill,T=o.align,v=o.sign,O=o.symbol,$=o.zero,L=o.width,_=o.comma,M=o.precision,g=o.trim,p=o.type;p==="n"?(_=!0,p="g"):He[p]||(M===void 0&&(M=12),g=!0,p="g"),($||b==="0"&&T==="=")&&($=!0,b="0",T="=");var J=O==="$"?n:O==="#"&&/[boxX]/.test(p)?"0"+p.toLowerCase():"",G=O==="$"?l:/[%p]/.test(p)?a:"",X=He[p],c=/[defgprs%]/.test(p);M=M===void 0?6:/[gprs]/.test(p)?Math.max(1,Math.min(21,M)):Math.max(0,Math.min(20,M));function E(d){var m=J,S=G,z,q,R;if(p==="c")S=X(d)+S,d="";else{d=+d;var V=d<0||1/d<0;if(d=isNaN(d)?h:X(Math.abs(d),M),g&&(d=kt(d)),V&&+d==0&&v!=="+"&&(V=!1),m=(V?v==="("?v:i:v==="-"||v==="("?"":v)+m,S=(p==="s"?Fe[8+lt/3]:"")+S+(V&&v==="("?")":""),c){for(z=-1,q=d.length;++z<q;)if(R=d.charCodeAt(z),48>R||R>57){S=(R===46?r+d.slice(z+1):d.slice(z))+S,d=d.slice(0,z);break}}}_&&!$&&(d=t(d,1/0));var D=m.length+d.length+S.length,j=D<L?new Array(L-D+1).join(b):"";switch(_&&$&&(d=t(j+d,j.length?L-S.length:1/0),j=""),T){case"<":d=m+d+S+j;break;case"=":d=m+j+d+S;break;case"^":d=j.slice(0,D=j.length>>1)+m+d+S+j.slice(D);break;default:d=j+m+d+S;break}return s(d)}return E.toString=function(){return o+""},E}function N(o,b){var T=w((o=Me(o),o.type="f",o)),v=Math.max(-8,Math.min(8,Math.floor(vt(b)/3)))*3,O=Math.pow(10,-v),$=Fe[8+v/3];return function(L){return T(O*L)+$}}return{format:w,formatPrefix:N}}var pe,Te;St({thousands:",",grouping:[3],currency:["$",""]});function St(e){return pe=Et(e),Te=pe.format,pe.formatPrefix,pe}function Re(e,t,n){const l=e.slice();return l[10]=t[n],l}function Je(e){let t,n,l=e[10]+"";return{c(){t=y("li"),n=new ee(!1),this.h()},l(r){t=k(r,"LI",{class:!0});var s=P(t);n=te(s,!1),s.forEach(f),this.h()},h(){n.a=null,C(t,"class","svelte-1syui8s")},m(r,s){B(r,t,s),n.m(l,t)},p:Y,d(r){r&&f(t)}}}function qe(e){let t,n;return{c(){t=y("p"),n=W(e[3]),this.h()},l(l){t=k(l,"P",{class:!0});var r=P(t);n=Z(r,e[3]),r.forEach(f),this.h()},h(){C(t,"class","invalid svelte-1syui8s")},m(l,r){B(l,t,r),u(t,n)},p(l,r){r&8&&fe(n,l[3])},d(l){l&&f(t)}}}function It(e){let t,n,l,r,s=e[4].stepNotify+"",a,i,h,w="Text message (US number)",N,o,b,T,v,O="Email",$,L,_,M,g,p,J=e[4].messageP+"",G,X,c,E,d,m,S,z,q,R,V=ye(e[4].messageLi),D=[];for(let I=0;I<V.length;I+=1)D[I]=Je(Re(e,V,I));let j=e[3]&&qe(e);return{c(){t=y("fieldset"),n=y("div"),l=y("p"),r=new ee(!1),a=A(),i=y("div"),h=y("label"),h.textContent=w,N=A(),o=y("input"),b=A(),T=y("div"),v=y("label"),v.textContent=O,$=A(),L=y("input"),_=A(),M=y("div"),g=y("p"),p=new ee(!1),G=W(":"),X=A(),c=y("ul");for(let I=0;I<D.length;I+=1)D[I].c();E=A(),d=y("button"),m=W(e[0]),S=A(),j&&j.c(),z=be(),this.h()},l(I){t=k(I,"FIELDSET",{class:!0});var H=P(t);n=k(H,"DIV",{class:!0});var F=P(n);l=k(F,"P",{});var le=P(l);r=te(le,!1),le.forEach(f),a=U(F),i=k(F,"DIV",{class:!0});var x=P(i);h=k(x,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),se(h)!=="svelte-793q2y"&&(h.textContent=w),N=U(x),o=k(x,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0}),x.forEach(f),b=U(F),T=k(F,"DIV",{class:!0});var ae=P(T);v=k(ae,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),se(v)!=="svelte-1p9d3fm"&&(v.textContent=O),$=U(ae),L=k(ae,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0}),ae.forEach(f),F.forEach(f),_=U(H),M=k(H,"DIV",{class:!0});var ie=P(M);g=k(ie,"P",{class:!0});var oe=P(g);p=te(oe,!1),G=Z(oe,":"),oe.forEach(f),X=U(ie),c=k(ie,"UL",{});var De=P(c);for(let Ie=0;Ie<D.length;Ie+=1)D[Ie].l(De);De.forEach(f),ie.forEach(f),H.forEach(f),E=U(I),d=k(I,"BUTTON",{});var Oe=P(d);m=Z(Oe,e[0]),Oe.forEach(f),S=U(I),j&&j.l(I),z=be(),this.h()},h(){r.a=null,C(h,"for","phone"),C(h,"class","svelte-1syui8s"),C(o,"type","tel"),C(o,"id","phone"),C(o,"name","phone"),C(o,"placeholder","123-456-7890"),C(i,"class","svelte-1syui8s"),C(v,"for","email"),C(v,"class","svelte-1syui8s"),C(L,"type","email"),C(L,"id","email"),C(L,"name","email"),C(L,"placeholder","example@email.com"),C(T,"class","svelte-1syui8s"),C(n,"class","step notify svelte-1syui8s"),p.a=G,C(g,"class","svelte-1syui8s"),C(M,"class","info svelte-1syui8s"),C(t,"class","svelte-1syui8s")},m(I,H){B(I,t,H),u(t,n),u(n,l),r.m(s,l),u(n,a),u(n,i),u(i,h),u(i,N),u(i,o),_e(o,e[1]),u(n,b),u(n,T),u(T,v),u(T,$),u(T,L),_e(L,e[2]),u(t,_),u(t,M),u(M,g),p.m(J,g),u(g,G),u(M,X),u(M,c);for(let F=0;F<D.length;F+=1)D[F]&&D[F].m(c,null);B(I,E,H),B(I,d,H),u(d,m),B(I,S,H),j&&j.m(I,H),B(I,z,H),q||(R=[ne(o,"input",e[6]),ne(L,"input",e[7]),ne(d,"click",Ce(e[5]))],q=!0)},p(I,[H]){if(H&2&&_e(o,I[1]),H&4&&L.value!==I[2]&&_e(L,I[2]),H&16){V=ye(I[4].messageLi);let F;for(F=0;F<V.length;F+=1){const le=Re(I,V,F);D[F]?D[F].p(le,H):(D[F]=Je(le),D[F].c(),D[F].m(c,null))}for(;F<D.length;F+=1)D[F].d(1);D.length=V.length}H&1&&fe(m,I[0]),I[3]?j?j.p(I,H):(j=qe(I),j.c(),j.m(z.parentNode,z)):j&&(j.d(1),j=null)},i:Y,o:Y,d(I){I&&(f(t),f(E),f(d),f(S),f(z)),tt(D,I),j&&j.d(I),q=!1,Ne(R)}}}function Mt(e,t,n){const l=Pe("copy"),r=nt();let{value:s}=t,a,i,h;function w(){const T=a?(a==null?void 0:a.replace(/\D/g,"").trim().length)===10:!0,v=i?(i==null?void 0:i.includes("@"))&&(i==null?void 0:i.includes(".")):!0;return T?v?!1:"Invalid email address":"Invalid phone number"}function N(){n(3,h=i||a?w():"Enter a phone number or email address"),h||r("update",{phone:a,email:i})}function o(){a=this.value,n(1,a)}function b(){i=this.value,n(2,i)}return e.$$set=T=>{"value"in T&&n(0,s=T.value)},[s,a,i,h,l,N,o,b]}class Tt extends Ee{constructor(t){super(),Se(this,t,Mt,It,we,{value:0})}}function Xe(e){let t,n,l,r;return{c(){t=y("button"),n=W(e[0]),this.h()},l(s){t=k(s,"BUTTON",{});var a=P(t);n=Z(a,e[0]),a.forEach(f),this.h()},h(){t.disabled=e[2]},m(s,a){B(s,t,a),u(t,n),l||(r=ne(t,"click",Ce(e[6])),l=!0)},p(s,a){a&1&&fe(n,s[0]),a&4&&(t.disabled=s[2])},d(s){s&&f(t),l=!1,r()}}}function Ye(e){let t,n;return{c(){t=y("p"),n=W(e[1]),this.h()},l(l){t=k(l,"P",{class:!0});var r=P(t);n=Z(r,e[1]),r.forEach(f),this.h()},h(){C(t,"class","invalid svelte-19ibakl")},m(l,r){B(l,t,r),u(t,n)},p(l,r){r&2&&fe(n,l[1])},d(l){l&&f(t)}}}function Ke(e){let t,n=e[5].humanReview+"",l;return{c(){t=y("p"),l=W(n),this.h()},l(r){t=k(r,"P",{class:!0});var s=P(t);l=Z(s,n),s.forEach(f),this.h()},h(){C(t,"class","review svelte-19ibakl")},m(r,s){B(r,t,s),u(t,l)},p:Y,d(r){r&&f(t)}}}function Ct(e){let t,n,l,r,s="Are you a human?",a,i,h,w,N,o,b=e[5].humanPrompt+"",T,v,O,$,L,_,M,g,p,J;function G(m){e[8](m)}let X={human:!0,disabled:e[2]};e[4]!==void 0&&(X.path=e[4]),v=new ut({props:X}),st.push(()=>ft(v,"path",G));let c=e[3]&&Xe(e),E=e[1]&&Ye(e),d=e[2]&&Ke(e);return{c(){t=y("fieldset"),n=y("div"),l=y("div"),r=y("label"),r.textContent=s,a=A(),i=y("input"),h=A(),w=y("div"),N=y("p"),o=new ee(!1),T=A(),ue(v.$$.fragment),$=A(),c&&c.c(),L=A(),E&&E.c(),_=A(),d&&d.c(),M=be(),this.h()},l(m){t=k(m,"FIELDSET",{class:!0});var S=P(t);n=k(S,"DIV",{class:!0});var z=P(n);l=k(z,"DIV",{class:!0});var q=P(l);r=k(q,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),se(r)!=="svelte-1n9s365"&&(r.textContent=s),a=U(q),i=k(q,"INPUT",{type:!0,id:!0,name:!0,class:!0}),q.forEach(f),h=U(z),w=k(z,"DIV",{class:!0});var R=P(w);N=k(R,"P",{});var V=P(N);o=te(V,!1),V.forEach(f),T=U(R),me(v.$$.fragment,R),R.forEach(f),z.forEach(f),S.forEach(f),$=U(m),c&&c.l(m),L=U(m),E&&E.l(m),_=U(m),d&&d.l(m),M=be(),this.h()},h(){C(r,"for","human"),C(r,"class","svelte-19ibakl"),C(i,"type","checkbox"),C(i,"id","human"),C(i,"name","human"),C(i,"class","svelte-19ibakl"),C(l,"class","svelte-19ibakl"),o.a=null,C(w,"class","draw svelte-19ibakl"),re(w,"visible",e[3]),C(n,"class","step human svelte-19ibakl"),C(t,"class","svelte-19ibakl")},m(m,S){B(m,t,S),u(t,n),u(n,l),u(l,r),u(l,a),u(l,i),i.checked=e[3],u(n,h),u(n,w),u(w,N),o.m(b,N),u(w,T),ce(v,w,null),B(m,$,S),c&&c.m(m,S),B(m,L,S),E&&E.m(m,S),B(m,_,S),d&&d.m(m,S),B(m,M,S),g=!0,p||(J=ne(i,"change",e[7]),p=!0)},p(m,[S]){S&8&&(i.checked=m[3]);const z={};S&4&&(z.disabled=m[2]),!O&&S&16&&(O=!0,z.path=m[4],rt(()=>O=!1)),v.$set(z),(!g||S&8)&&re(w,"visible",m[3]),m[3]?c?c.p(m,S):(c=Xe(m),c.c(),c.m(L.parentNode,L)):c&&(c.d(1),c=null),m[1]?E?E.p(m,S):(E=Ye(m),E.c(),E.m(_.parentNode,_)):E&&(E.d(1),E=null),m[2]?d?d.p(m,S):(d=Ke(m),d.c(),d.m(M.parentNode,M)):d&&(d.d(1),d=null)},i(m){g||(K(v.$$.fragment,m),g=!0)},o(m){Q(v.$$.fragment,m),g=!1},d(m){m&&(f(t),f($),f(L),f(_),f(M)),he(v),c&&c.d(m),E&&E.d(m),d&&d.d(m),p=!1,J()}}}function Nt(e,t,n){const l=Pe("copy"),r=nt();let{value:s}=t,a,i,h,w;function N(){n(1,a=void 0),!i&&(w.length>4?(n(2,i=!0),setTimeout(()=>{n(2,i=!1),r("update",{isHuman:h,path:w})},1500)):n(1,a="You must draw a circle"))}function o(){h=this.checked,n(3,h)}function b(T){w=T,n(4,w)}return e.$$set=T=>{"value"in T&&n(0,s=T.value)},[s,a,i,h,w,l,N,o,b]}class Pt extends Ee{constructor(t){super(),Se(this,t,Nt,Ct,we,{value:0})}}let de;const Le=()=>{if(de!==void 0)return de;try{const e=window.localStorage,t="__storage_test__";e.setItem(t,t),e.removeItem(t),de=!0}catch{de=!1}finally{return de}},$t=e=>{if(Le())try{localStorage.removeItem(e)}catch(t){console.log(t)}},Lt=(e,t)=>{if(Le())try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}},Dt=e=>{if(Le())try{return JSON.parse(localStorage.getItem(e))}catch(t){console.log(t);return}},We={set:Lt,get:Dt,remove:$t};function Ze(e,t,n){const l=e.slice();return l[26]=t[n],l}function Ot(e){let t,n,l=e[9].definition+"",r,s,a,i,h,w=e[9].statsFrames+"",N,o,b,T,v,O,$=e[9].statsWaiting+"",L;return{c(){t=y("p"),n=new ee(!1),r=A(),s=y("p"),a=y("strong"),i=W(e[5]),h=A(),N=W(w),o=y("br"),b=A(),T=y("strong"),v=W(e[6]),O=A(),L=W($),this.h()},l(_){t=k(_,"P",{});var M=P(t);n=te(M,!1),M.forEach(f),r=U(_),s=k(_,"P",{class:!0});var g=P(s);a=k(g,"STRONG",{});var p=P(a);i=Z(p,e[5]),p.forEach(f),h=U(g),N=Z(g,w),o=k(g,"BR",{}),b=U(g),T=k(g,"STRONG",{});var J=P(T);v=Z(J,e[6]),J.forEach(f),O=U(g),L=Z(g,$),g.forEach(f),this.h()},h(){n.a=null,C(s,"class","stats svelte-f6ttoo"),re(s,"visible",e[3])},m(_,M){B(_,t,M),n.m(l,t),B(_,r,M),B(_,s,M),u(s,a),u(a,i),u(s,h),u(s,N),u(s,o),u(s,b),u(s,T),u(T,v),u(s,O),u(s,L)},p(_,M){M&32&&fe(i,_[5]),M&64&&fe(v,_[6]),M&8&&re(s,"visible",_[3])},i:Y,o:Y,d(_){_&&(f(t),f(r),f(s))}}}function jt(e){let t,n,l,r=e[9].issue+"",s,a,i=e[0].error+"",h;return{c(){t=y("div"),n=y("details"),l=y("summary"),s=W(r),a=W(`
				Error: `),h=W(i),this.h()},l(w){t=k(w,"DIV",{class:!0});var N=P(t);n=k(N,"DETAILS",{});var o=P(n);l=k(o,"SUMMARY",{});var b=P(l);s=Z(b,r),b.forEach(f),a=Z(o,`
				Error: `),h=Z(o,i),o.forEach(f),N.forEach(f),this.h()},h(){C(t,"class","issue svelte-f6ttoo")},m(w,N){B(w,t,N),u(t,n),u(n,l),u(l,s),u(n,a),u(n,h)},p(w,N){N&1&&i!==(i=w[0].error+"")&&fe(h,i)},i:Y,o:Y,d(w){w&&f(t)}}}function At(e){let t,n=e[9].thanks+"",l,r,s,a,i;return a=new _t({props:{buttonText:e[10],title:e[12],url:e[11]}}),{c(){t=y("p"),l=W(n),r=A(),s=y("p"),ue(a.$$.fragment)},l(h){t=k(h,"P",{});var w=P(t);l=Z(w,n),w.forEach(f),r=U(h),s=k(h,"P",{});var N=P(s);me(a.$$.fragment,N),N.forEach(f)},m(h,w){B(h,t,w),u(t,l),B(h,r,w),B(h,s,w),ce(a,s,null),i=!0},p:Y,i(h){i||(K(a.$$.fragment,h),i=!0)},o(h){Q(a.$$.fragment,h),i=!1},d(h){h&&(f(t),f(r),f(s)),he(a)}}}function Qe(e){let t,n,l,r="Get in line!",s,a,i,h,w=e[9].hard+"",N,o,b,T,v,O,$=e[9].hard2+"",L,_,M="Get in line!",g,p,J,G,X=e[9].harder+"",c,E,d,m,S="Get in line!",z,q,R=ye(e[9].harderLi),V=[];for(let D=0;D<R.length;D+=1)V[D]=xe(Ze(e,R,D));return{c(){t=y("section"),n=y("div"),l=y("button"),l.textContent=r,s=A(),a=y("div"),i=y("p"),h=new ee(!1),N=A(),o=y("img"),T=A(),v=y("p"),O=new ee(!1),L=A(),_=y("button"),_.textContent=M,g=A(),p=y("div"),J=y("p"),G=new ee(!1),c=A(),E=y("ul");for(let D=0;D<V.length;D+=1)V[D].c();d=A(),m=y("button"),m.textContent=S,this.h()},l(D){t=k(D,"SECTION",{id:!0,class:!0});var j=P(t);n=k(j,"DIV",{class:!0});var I=P(n);l=k(I,"BUTTON",{"data-svelte-h":!0}),se(l)!=="svelte-17rfojb"&&(l.textContent=r),I.forEach(f),s=U(j),a=k(j,"DIV",{class:!0});var H=P(a);i=k(H,"P",{});var F=P(i);h=te(F,!1),F.forEach(f),N=U(H),o=k(H,"IMG",{src:!0,alt:!0}),T=U(H),v=k(H,"P",{});var le=P(v);O=te(le,!1),le.forEach(f),L=U(H),_=k(H,"BUTTON",{"data-svelte-h":!0}),se(_)!=="svelte-17rfojb"&&(_.textContent=M),H.forEach(f),g=U(j),p=k(j,"DIV",{class:!0});var x=P(p);J=k(x,"P",{});var ae=P(J);G=te(ae,!1),ae.forEach(f),c=U(x),E=k(x,"UL",{class:!0});var ie=P(E);for(let oe=0;oe<V.length;oe+=1)V[oe].l(ie);ie.forEach(f),d=U(x),m=k(x,"BUTTON",{"data-svelte-h":!0}),se(m)!=="svelte-17rfojb"&&(m.textContent=S),x.forEach(f),j.forEach(f),this.h()},h(){C(n,"class","nothing svelte-f6ttoo"),h.a=null,it(o.src,b="assets/demo/test.jpg")||C(o,"src",b),C(o,"alt","test"),O.a=null,C(a,"class","hard svelte-f6ttoo"),G.a=null,C(E,"class","svelte-f6ttoo"),C(p,"class","harder svelte-f6ttoo"),C(t,"id","sell"),C(t,"class","svelte-f6ttoo")},m(D,j){B(D,t,j),u(t,n),u(n,l),u(t,s),u(t,a),u(a,i),h.m(w,i),u(a,N),u(a,o),u(a,T),u(a,v),O.m($,v),u(a,L),u(a,_),u(t,g),u(t,p),u(p,J),G.m(X,J),u(p,c),u(p,E);for(let I=0;I<V.length;I+=1)V[I]&&V[I].m(E,null);u(p,d),u(p,m),z||(q=[ne(l,"click",e[15]),ne(_,"click",e[16]),ne(m,"click",e[17])],z=!0)},p(D,j){if(j&512){R=ye(D[9].harderLi);let I;for(I=0;I<R.length;I+=1){const H=Ze(D,R,I);V[I]?V[I].p(H,j):(V[I]=xe(H),V[I].c(),V[I].m(E,null))}for(;I<V.length;I+=1)V[I].d(1);V.length=R.length}},d(D){D&&f(t),tt(V,D),z=!1,Ne(q)}}}function xe(e){let t,n,l=e[26]+"";return{c(){t=y("li"),n=new ee(!1),this.h()},l(r){t=k(r,"LI",{});var s=P(t);n=te(s,!1),s.forEach(f),this.h()},h(){n.a=null},m(r,s){B(r,t,s),n.m(l,t)},p:Y,d(r){r&&f(t)}}}function et(e){let t,n;return t=new mt({props:{text:e[9].playground}}),{c(){ue(t.$$.fragment)},l(l){me(t.$$.fragment,l)},m(l,r){ce(t,l,r),n=!0},p:Y,i(l){n||(K(t.$$.fragment,l),n=!0)},o(l){Q(t.$$.fragment,l),n=!1},d(l){he(t,l)}}}function Ut(e){let t,n,l="X",r,s,a,i,h,w=e[9].prompt+"",N,o,b,T,v,O;var $=e[1][e[2]];function L(_,M){return{props:{value:_[2]===0?"Next":"Submit"}}}return $&&(b=je($,L(e)),b.$on("update",e[13])),{c(){t=y("section"),n=y("button"),n.textContent=l,r=A(),s=y("form"),a=y("p"),i=y("strong"),h=new ee(!1),N=A(),o=y("div"),b&&ue(b.$$.fragment),this.h()},l(_){t=k(_,"SECTION",{class:!0});var M=P(t);n=k(M,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),se(n)!=="svelte-1c737b"&&(n.textContent=l),r=U(M),s=k(M,"FORM",{class:!0});var g=P(s);a=k(g,"P",{class:!0});var p=P(a);i=k(p,"STRONG",{});var J=P(i);h=te(J,!1),J.forEach(f),p.forEach(f),N=U(g),o=k(g,"DIV",{class:!0});var G=P(o);b&&me(b.$$.fragment,G),G.forEach(f),g.forEach(f),M.forEach(f),this.h()},h(){C(n,"aria-label","close"),C(n,"class","close svelte-f6ttoo"),h.a=null,C(a,"class","prompt"),C(o,"class","steps"),C(s,"class","shadow"),C(t,"class","fg svelte-f6ttoo"),re(t,"submitting",e[7])},m(_,M){B(_,t,M),u(t,n),u(t,r),u(t,s),u(s,a),u(a,i),h.m(w,i),u(s,N),u(s,o),b&&ce(b,o,null),T=!0,v||(O=[ne(n,"click",e[18]),ne(s,"submit",Ce(e[14]))],v=!0)},p(_,M){if(M&6&&$!==($=_[1][_[2]])){if(b){ve();const g=b;Q(g.$$.fragment,1,0,()=>{he(g,1)}),ge()}$?(b=je($,L(_)),b.$on("update",_[13]),ue(b.$$.fragment),K(b.$$.fragment,1),ce(b,o,null)):b=null}else if($){const g={};M&4&&(g.value=_[2]===0?"Next":"Submit"),b.$set(g)}(!T||M&128)&&re(t,"submitting",_[7])},i(_){T||(b&&K(b.$$.fragment,_),T=!0)},o(_){b&&Q(b.$$.fragment,_),T=!1},d(_){_&&f(t),b&&he(b),v=!1,Ne(O)}}}function Vt(e){let t,n="<p>Adding you to the line...</p>";return{c(){t=y("section"),t.innerHTML=n,this.h()},l(l){t=k(l,"SECTION",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-1udq54f"&&(t.innerHTML=n),this.h()},h(){C(t,"class","submitting svelte-f6ttoo")},m(l,r){B(l,t,r)},p:Y,i:Y,o:Y,d(l){l&&f(t)}}}function Bt(e){let t,n,l,r=e[9].cta+"",s,a,i,h,w,N,o,b,T,v,O,$;const L=[At,jt,Ot],_=[];function M(c,E){return c[8]?0:c[0]?1:2}a=M(e),i=_[a]=L[a](e);let g=!e[8]&&Qe(e),p=e[8]&&et(e);const J=[Vt,Ut],G=[];function X(c,E){return c[7]?0:1}return v=X(e),O=G[v]=J[v](e),{c(){t=y("section"),n=y("h1"),l=new ee(!1),s=A(),i.c(),h=A(),g&&g.c(),w=A(),p&&p.c(),N=A(),o=y("div"),b=y("div"),T=A(),O.c(),this.h()},l(c){t=k(c,"SECTION",{id:!0});var E=P(t);n=k(E,"H1",{});var d=P(n);l=te(d,!1),d.forEach(f),s=U(E),i.l(E),E.forEach(f),h=U(c),g&&g.l(c),w=U(c),p&&p.l(c),N=U(c),o=k(c,"DIV",{id:!0,class:!0});var m=P(o);b=k(m,"DIV",{class:!0}),P(b).forEach(f),T=U(m),O.l(m),m.forEach(f),this.h()},h(){l.a=null,C(t,"id","intro"),C(b,"class","bg svelte-f6ttoo"),C(o,"id","join"),C(o,"class","svelte-f6ttoo"),re(o,"visible",e[4])},m(c,E){B(c,t,E),u(t,n),l.m(r,n),u(t,s),_[a].m(t,null),B(c,h,E),g&&g.m(c,E),B(c,w,E),p&&p.m(c,E),B(c,N,E),B(c,o,E),u(o,b),u(o,T),G[v].m(o,null),$=!0},p(c,[E]){let d=a;a=M(c),a===d?_[a].p(c,E):(ve(),Q(_[d],1,1,()=>{_[d]=null}),ge(),i=_[a],i?i.p(c,E):(i=_[a]=L[a](c),i.c()),K(i,1),i.m(t,null)),c[8]?g&&(g.d(1),g=null):g?g.p(c,E):(g=Qe(c),g.c(),g.m(w.parentNode,w)),c[8]?p?(p.p(c,E),E&256&&K(p,1)):(p=et(c),p.c(),K(p,1),p.m(N.parentNode,N)):p&&(ve(),Q(p,1,1,()=>{p=null}),ge());let m=v;v=X(c),v===m?G[v].p(c,E):(ve(),Q(G[m],1,1,()=>{G[m]=null}),ge(),O=G[v],O?O.p(c,E):(O=G[v]=J[v](c),O.c()),K(O,1),O.m(o,null)),(!$||E&16)&&re(o,"visible",c[4])},i(c){$||(K(i),K(p),K(O),$=!0)},o(c){Q(i),Q(p),Q(O),$=!1},d(c){c&&(f(t),f(h),f(w),f(N),f(o)),_[a].d(),g&&g.d(c),p&&p.d(c),G[v].d()}}}function Ht(e,t,n){let l;const r=Pe("copy"),s=r.spread,a=r.url,i=r.title;let h=[Tt,Pt],w=0,N,o,b,T,v,O,$,L,_="0",M="0",g,p;async function J(){if(o){n(7,g=!0);try{n(0,p=await Ue("pool",{email:b,phone:T,timezone:O})),o=void 0,b=void 0,T=void 0,n(2,w=0)}catch(S){n(0,p={error:S.message})}finally{n(7,g=!1),n(4,$=!1)}}}function G({detail:S}){T=(S==null?void 0:S.phone)||T,b=(S==null?void 0:S.email)||b,o=(S==null?void 0:S.isHuman)||o,v=(S==null?void 0:S.path)||v;const z=We.get("pudding_trace_human");v&&!z&&Ue("human",{drawing:v,has_phone:!!T,has_email:!!b}).then(({duration:q,message:R})=>{console.log(q,R),We.set("pudding_trace_human",!0)}).catch(q=>{console.log(q)}),w===0?n(2,w+=1):J()}at(async()=>{O=new Date().getTimezoneOffset()/60,L=Math.random()<.5,L&&h.reverse(),n(1,h=[...h]),n(4,$=dt("signup"));const R=await(await fetch(`https://pudding.cool/projects/trace-data/meta.json?version=${Date.now()}`)).json();n(5,_=Te(",")(R.frames||0)),n(6,M=Te(",")(R.waiting||0)),n(3,N=!0),console.log("updated",R.timestamp)});function X(S){ot.call(this,e,S)}const c=()=>n(4,$=!0),E=()=>n(4,$=!0),d=()=>n(4,$=!0),m=()=>n(4,$=!1);return e.$$.update=()=>{e.$$.dirty&1&&n(8,l=(p==null?void 0:p.status)===200)},[p,h,w,N,$,_,M,g,l,r,s,a,i,G,X,c,E,d,m]}class zt extends Ee{constructor(t){super(),Se(this,t,Ht,Bt,we,{})}}function Gt(e){let t,n,l,r;return t=new ct({props:{title:e[0],description:e[1],url:e[2],keywords:e[3]}}),l=new zt({}),{c(){ue(t.$$.fragment),n=A(),ue(l.$$.fragment)},l(s){me(t.$$.fragment,s),n=U(s),me(l.$$.fragment,s)},m(s,a){ce(t,s,a),B(s,n,a),ce(l,s,a),r=!0},p:Y,i(s){r||(K(t.$$.fragment,s),K(l.$$.fragment,s),r=!0)},o(s){Q(t.$$.fragment,s),Q(l.$$.fragment,s),r=!1},d(s){s&&f(n),he(t,s),he(l,s)}}}function Ft(e,t,n){let{data:l}=t;ht();const{title:r,description:s,url:a,keywords:i}=Ve;return Ae("copy",Ve),Ae("data",l.data),e.$$set=h=>{"data"in h&&n(4,l=h.data)},[r,s,a,i,l]}class Qt extends Ee{constructor(t){super(),Se(this,t,Ft,Gt,we,{data:4})}}export{Qt as component};