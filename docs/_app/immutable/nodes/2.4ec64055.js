import{s as ot,n as rt,i as Rt,r as Kt,o as Ot,f as Wt,h as wt,j as bt}from"../chunks/scheduler.2539f17d.js";import{S as st,i as lt,g as w,e as Tt,z as Ht,h as b,f as h,k as s,y as g,A as Vt,a as F,B as V,s as K,m as nt,j as B,C as U,c as O,n as at,D as Y,E as kt,l as it,F as J,o as ct,d as G,p as Ut,t as $,b as Jt,G as Et,r as ht,u as mt,v as dt,w as vt}from"../chunks/index.b9564c26.js";import{e as Pt}from"../chunks/each.e59479a4.js";function Ct(n,t,e){const a=n.slice();return a[5]=t[e],a}function xt(n){let t,e;return{c(){t=w("link"),this.h()},l(a){t=b(a,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),this.h()},h(){s(t,"rel","preload"),s(t,"href",e=n[5]),s(t,"as","font"),s(t,"type","font/woff2"),s(t,"crossorigin","")},m(a,o){F(a,t,o)},p(a,o){o&16&&e!==(e=a[5])&&s(t,"href",e)},d(a){a&&h(t)}}}function Xt(n){let t,e,a,o,r,l,c,i,d,m,v,u,y,x,P,A,q,L,j,T,_,N,I,D,R,S;document.title=t=n[0];let z=Pt(n[4]),C=[];for(let k=0;k<z.length;k+=1)C[k]=xt(Ct(n,z,k));return{c(){e=w("meta"),a=w("meta"),o=w("meta"),r=w("meta"),l=w("meta"),c=w("meta"),i=w("meta"),d=w("meta"),m=w("meta"),v=w("meta"),y=w("meta"),x=w("meta"),P=w("meta"),A=w("meta"),q=w("meta"),L=w("meta"),j=w("meta"),T=w("meta"),_=w("meta"),I=w("meta"),D=w("link");for(let k=0;k<C.length;k+=1)C[k].c();S=Tt(),this.h()},l(k){const f=Ht("svelte-1htu80s",document.head);e=b(f,"META",{name:!0,content:!0}),a=b(f,"META",{name:!0,content:!0}),o=b(f,"META",{name:!0,content:!0}),r=b(f,"META",{property:!0,content:!0}),l=b(f,"META",{property:!0,content:!0}),c=b(f,"META",{property:!0,content:!0}),i=b(f,"META",{property:!0,content:!0}),d=b(f,"META",{property:!0,content:!0}),m=b(f,"META",{property:!0,content:!0}),v=b(f,"META",{property:!0,content:!0}),y=b(f,"META",{property:!0,content:!0}),x=b(f,"META",{property:!0,content:!0}),P=b(f,"META",{property:!0,content:!0}),A=b(f,"META",{name:!0,content:!0}),q=b(f,"META",{name:!0,content:!0}),L=b(f,"META",{name:!0,content:!0}),j=b(f,"META",{name:!0,content:!0}),T=b(f,"META",{name:!0,content:!0}),_=b(f,"META",{name:!0,content:!0}),I=b(f,"META",{name:!0,content:!0}),D=b(f,"LINK",{rel:!0,href:!0});for(let p=0;p<C.length;p+=1)C[p].l(f);S=Tt(),f.forEach(h),this.h()},h(){s(e,"name","description"),s(e,"content",n[1]),s(a,"name","author"),s(a,"content","The Pudding"),s(o,"name","news_keywords"),s(o,"content",n[3]),s(r,"property","og:title"),s(r,"content",n[0]),s(l,"property","og:site_name"),s(l,"content","The Pudding"),s(c,"property","og:url"),s(c,"content",n[2]),s(i,"property","og:description"),s(i,"content",n[1]),s(d,"property","og:type"),s(d,"content","article"),s(m,"property","og:locale"),s(m,"content","en_US"),s(v,"property","og:image"),s(v,"content",u=n[2]+"/assets/social-facebook.jpg"),s(y,"property","og:image:type"),s(y,"content","image/jpeg"),s(x,"property","og:image:width"),s(x,"content","1200"),s(P,"property","og:image:height"),s(P,"content","600"),s(A,"name","twitter:card"),s(A,"content","summary_large_image"),s(q,"name","twitter:site"),s(q,"content","https://pudding.cool"),s(L,"name","twitter:creator"),s(L,"content","@puddingviz"),s(j,"name","twitter:title"),s(j,"content",n[0]),s(T,"name","twitter:description"),s(T,"content",n[1]),s(_,"name","twitter:image:src"),s(_,"content",N=n[2]+"/assets/social-twitter.jpg"),s(I,"name","robots"),s(I,"content","max-image-preview:large"),s(D,"rel","canonical"),s(D,"href",R=n[2]+"/")},m(k,f){g(document.head,e),g(document.head,a),g(document.head,o),g(document.head,r),g(document.head,l),g(document.head,c),g(document.head,i),g(document.head,d),g(document.head,m),g(document.head,v),g(document.head,y),g(document.head,x),g(document.head,P),g(document.head,A),g(document.head,q),g(document.head,L),g(document.head,j),g(document.head,T),g(document.head,_),g(document.head,I),g(document.head,D);for(let p=0;p<C.length;p+=1)C[p]&&C[p].m(document.head,null);g(document.head,S)},p(k,[f]){if(f&1&&t!==(t=k[0])&&(document.title=t),f&2&&s(e,"content",k[1]),f&8&&s(o,"content",k[3]),f&1&&s(r,"content",k[0]),f&4&&s(c,"content",k[2]),f&2&&s(i,"content",k[1]),f&4&&u!==(u=k[2]+"/assets/social-facebook.jpg")&&s(v,"content",u),f&1&&s(j,"content",k[0]),f&2&&s(T,"content",k[1]),f&4&&N!==(N=k[2]+"/assets/social-twitter.jpg")&&s(_,"content",N),f&4&&R!==(R=k[2]+"/")&&s(D,"href",R),f&16){z=Pt(k[4]);let p;for(p=0;p<z.length;p+=1){const M=Ct(k,z,p);C[p]?C[p].p(M,f):(C[p]=xt(M),C[p].c(),C[p].m(S.parentNode,S))}for(;p<C.length;p+=1)C[p].d(1);C.length=z.length}},i:rt,o:rt,d(k){h(e),h(a),h(o),h(r),h(l),h(c),h(i),h(d),h(m),h(v),h(y),h(x),h(P),h(A),h(q),h(L),h(j),h(T),h(_),h(I),h(D),Vt(C,k),h(S)}}}function Yt(n,t,e){let{title:a="Title TK"}=t,{description:o="Description TK"}=t,{url:r="https://pudding.cool"}=t,{keywords:l=""}=t,{preloadFont:c=[]}=t;return n.$$set=i=>{"title"in i&&e(0,a=i.title),"description"in i&&e(1,o=i.description),"url"in i&&e(2,r=i.url),"keywords"in i&&e(3,l=i.keywords),"preloadFont"in i&&e(4,c=i.preloadFont)},[a,o,r,l,c]}class Gt extends st{constructor(t){super(),lt(this,t,Yt,Xt,ot,{title:0,description:1,url:2,keywords:3,preloadFont:4})}}function At(n,{delay:t=0,duration:e=400,easing:a=Rt}={}){const o=+getComputedStyle(n).opacity;return{delay:t,duration:e,easing:a,css:r=>`opacity: ${r*o}`}}var Lt=function(n){return n[n.length-1]},It=function(n){return n.reduce(function(t,e){return t+e},0)},ut=function(n){var t=n.reduce(function(e,a){return a+e},0);return t/n.length},gt=function(n,t){return{x:n.x-t.x,y:n.y-t.y}},zt=function(n){var t=n.x,e=n.y;return Math.sqrt(t*t+e*e)},X=function(n,t){return zt(gt(n,t))},pt=function(n){var t=n[0],e=n.slice(1);return e.reduce(function(a,o){var r=X(o,t);return t=o,a+r},0)},Qt=function(n,t,e){var a=gt(t,n),o=e/zt(a);return{x:t.x+o*a.x,y:t.y+o*a.y}},Zt=function(n,t){for(var e=t.numPoints,a=e===void 0?50:e,o=pt(n),r=o/(a-1),l=[n[0]],c=Lt(n),i=n.slice(1),d=0;d<a-2;d++)for(var m=Lt(l),v=r,u=!1;!u;){var y=X(m,i[0]);if(y<v)v-=y,m=i.shift();else{var x=Qt(m,i[0],v-y);l.push(x),u=!0}}return l.push(c),l},$t=function(n,t){return n.map(function(e){return{x:Math.cos(-1*t)*e.x-Math.sin(-1*t)*e.y,y:Math.sin(-1*t)*e.x+Math.cos(-1*t)*e.y}})},Bt=function(n,t){for(var e=n.length>=t.length?n:t,a=n.length>=t.length?t:n,o=function(d,m,v,u){if(d===0&&m===0)return X(e[0],a[0]);if(d>0&&m===0)return Math.max(v[0],X(e[d],a[0]));var y=u[u.length-1];return d===0&&m>0?Math.max(y,X(e[0],a[m])):Math.max(Math.min(v[m],v[m-1],y),X(e[d],a[m]))},r=[],l=0;l<e.length;l++){for(var c=[],i=0;i<a.length;i++)c.push(o(l,i,r,c));r=c}return r[a.length-1]},qt=function(n,t){t===void 0&&(t={});var e=t.rebalance,a=e===void 0?!0:e,o=t.estimationPoints,r=o===void 0?50:o,l=a?Zt(n,{numPoints:r}):n,c=ut(l.map(function(u){return u.x})),i=ut(l.map(function(u){return u.y})),d={x:c,y:i},m=l.map(function(u){return gt(u,d)}),v=Math.sqrt(ut(m.map(function(u){var y=u.x,x=u.y;return y*y+x*x})));return m.map(function(u){return{x:u.x/v,y:u.y/v}})},te=function(n,t){if(n.length!==t.length)throw new Error("curve and relativeCurve must have the same length");var e=It(n.map(function(o,r){var l=o.x,c=o.y;return c*t[r].x-l*t[r].y})),a=It(n.map(function(o,r){var l=o.x,c=o.y;return l*t[r].x+c*t[r].y}));return Math.atan2(e,a)},ee=function(n,t,e){e===void 0&&(e={});var a=e.estimationPoints,o=a===void 0?50:a,r=e.rotations,l=r===void 0?10:r,c=e.restrictRotationAngle,i=c===void 0?Math.PI:c,d=e.checkRotations,m=d===void 0?!0:d;if(Math.abs(i)>Math.PI)throw new Error("restrictRotationAngle cannot be larger than PI");var v=qt(n,{estimationPoints:o}),u=qt(t,{estimationPoints:o}),y=Math.sqrt(pt(v)*pt(u)),x=[0];if(m){var P=te(v,u);P>Math.PI&&(P=P-2*Math.PI),P!==0&&Math.abs(P)<i&&x.push(P);for(var A=0;A<l;A++){var q=-1*i+2*A*i/(l-1);q!==0&&q!==Math.PI&&x.push(q)}}var L=1/0;return x.forEach(function(j){var T=$t(v,j),_=Bt(T,u);_<L&&(L=_)}),Math.max(1-L/(y/Math.sqrt(2)),0)};function Dt(n,t){let e=n.length,a=t.length,o=[];for(let r=0;r<=e;r++)o[r]=[];for(let r=1;r<=e;r++)o[r][0]=1/0;for(let r=1;r<=a;r++)o[0][r]=1/0;o[0][0]=0;for(let r=1;r<=e;r++)for(let l=1;l<=a;l++){let c=Math.sqrt(Math.pow(n[r-1][0]-t[l-1][0],2)+Math.pow(n[r-1][1]-t[l-1][1],2));o[r][l]=c+Math.min(o[r-1][l],o[r][l-1],o[r-1][l-1])}return o[e][a]}function ne(n){let t=0;for(let e=1;e<n.length;e++){const[a,o]=n[e-1],[r,l]=n[e];t+=Math.sqrt(Math.pow(r-a,2)+Math.pow(l-o,2))}return t}function ae(n){let t=0;for(let e=1;e<n.length;e++){const[a,o]=n[e-1],[r,l]=n[e];t+=Math.sqrt(Math.pow(r-a,2)+Math.pow(l-o,2))}return t}function ft(n,t){const e=[],o=ae(n)/(t-1);let r=0,l=n[0];e.push(l);let c=1;for(;e.length<t&&c<n.length;){const i=n[c],d=Math.sqrt(Math.pow(i[0]-l[0],2)+Math.pow(i[1]-l[1],2));if(r+d>=o){const m=(o-r)/d,v=[l[0]+m*(i[0]-l[0]),l[1]+m*(i[1]-l[1])];e.push(v),l=v,r=0}else r+=d,l=i,c++}return e}function re(n,t){const e=n[0],a=t[0],o=n[n.length-1],r=t[t.length-1],l=Math.sqrt(Math.pow(a[0]-e[0],2)+Math.pow(a[1]-e[1],2)),c=Math.sqrt(Math.pow(r[0]-o[0],2)+Math.pow(r[1]-o[1],2)),i=l+c,d=Math.sqrt(Math.pow(r[0]-e[0],2)+Math.pow(r[1]-e[1],2)),m=Math.sqrt(Math.pow(a[0]-o[0],2)+Math.pow(a[1]-o[1],2)),v=d+m;return i<v?Math.max(l,c):Math.max(d,m)}function Ft(n){let t;return{c(){t=V("path"),this.h()},l(e){t=U(e,"path",{class:!0,d:!0}),B(t).forEach(h),this.h()},h(){s(t,"class","prev svelte-lw3vhv"),s(t,"d",n[1])},m(e,a){F(e,t,a)},p(e,a){a&2&&s(t,"d",e[1])},d(e){e&&h(t)}}}function Nt(n){let t,e="I think you can do better!",a,o;return{c(){t=w("p"),t.textContent=e,this.h()},l(r){t=b(r,"P",{class:!0,"data-svelte-h":!0}),Y(t)!=="svelte-140d4sa"&&(t.textContent=e),this.h()},h(){s(t,"class","fail svelte-lw3vhv")},m(r,l){F(r,t,l),o=!0},i(r){o||(r&&Wt(()=>{o&&(a||(a=Et(t,At,{},!0)),a.run(1))}),o=!0)},o(r){r&&(a||(a=Et(t,At,{},!1)),a.run(0)),o=!1},d(r){r&&h(t),r&&a&&a.end()}}}function oe(n){let t,e,a,o,r,l,c,i,d,m,v,u=JSON.stringify(n[5])+"",y,x,P,A,q="submit",L,j="reset",T,_,N,I,D,R,S,z,C,k,f=n[1]&&Ft(n),p=n[4]&&Nt();return{c(){t=w("div"),e=V("svg"),a=V("g"),f&&f.c(),o=V("path"),r=K(),l=w("p"),c=nt(n[0]),i=K(),p&&p.c(),d=K(),m=w("p"),v=nt("debug: "),y=nt(u),x=K(),P=w("div"),A=w("button"),A.textContent=q,L=w("button"),L.textContent=j,T=K(),_=w("div"),N=V("svg"),I=V("g"),D=V("path"),R=K(),S=w("p"),z=nt(n[3]),this.h()},l(M){t=b(M,"DIV",{class:!0});var E=B(t);e=U(E,"svg",{class:!0});var Q=B(e);a=U(Q,"g",{});var Z=B(a);f&&f.l(Z),o=U(Z,"path",{d:!0,class:!0}),B(o).forEach(h),Z.forEach(h),Q.forEach(h),r=O(E),l=b(E,"P",{class:!0});var tt=B(l);c=at(tt,n[0]),tt.forEach(h),i=O(E),p&&p.l(E),E.forEach(h),d=O(M),m=b(M,"P",{style:!0});var W=B(m);v=at(W,"debug: "),y=at(W,u),W.forEach(h),x=O(M),P=b(M,"DIV",{class:!0});var H=B(P);A=b(H,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(A)!=="svelte-13qkurs"&&(A.textContent=q),L=b(H,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(L)!=="svelte-o81ggd"&&(L.textContent=j),H.forEach(h),T=O(M),_=b(M,"DIV",{class:!0});var et=B(_);N=U(et,"svg",{class:!0});var _t=B(N);I=U(_t,"g",{});var Mt=B(I);D=U(Mt,"path",{d:!0,class:!0}),B(D).forEach(h),Mt.forEach(h),_t.forEach(h),R=O(et),S=b(et,"P",{class:!0});var yt=B(S);z=at(yt,n[3]),yt.forEach(h),et.forEach(h),this.h()},h(){s(o,"d",n[6]),s(o,"class","svelte-lw3vhv"),s(e,"class","svelte-lw3vhv"),s(l,"class","svelte-lw3vhv"),s(t,"class","svelte-lw3vhv"),kt(t,"first",n[0]===0),it(m,"text-align","center"),it(m,"font-family","var(--mono)"),it(m,"font-size","12px"),s(A,"class","svelte-lw3vhv"),s(L,"class","svelte-lw3vhv"),s(P,"class","ui svelte-lw3vhv"),s(D,"d",n[2]),s(D,"class","svelte-lw3vhv"),s(N,"class","svelte-lw3vhv"),s(S,"class","svelte-lw3vhv"),s(_,"class","svelte-lw3vhv")},m(M,E){F(M,t,E),g(t,e),g(e,a),f&&f.m(a,null),g(a,o),g(t,r),g(t,l),g(l,c),g(t,i),p&&p.m(t,null),F(M,d,E),F(M,m,E),g(m,v),g(m,y),F(M,x,E),F(M,P,E),g(P,A),g(P,L),F(M,T,E),F(M,_,E),g(_,N),g(N,I),g(I,D),g(_,R),g(_,S),g(S,z),C||(k=[J(t,"pointerdown",n[7]),J(t,"pointermove",n[8]),J(t,"pointerup",n[9]),J(t,"pointerleave",n[9]),J(A,"click",n[10]),J(L,"click",n[11])],C=!0)},p(M,[E]){M[1]?f?f.p(M,E):(f=Ft(M),f.c(),f.m(a,o)):f&&(f.d(1),f=null),E&64&&s(o,"d",M[6]),E&1&&ct(c,M[0]),M[4]?p?E&16&&G(p,1):(p=Nt(),p.c(),G(p,1),p.m(t,null)):p&&(Ut(),$(p,1,1,()=>{p=null}),Jt()),E&1&&kt(t,"first",M[0]===0),E&32&&u!==(u=JSON.stringify(M[5])+"")&&ct(y,u),E&4&&s(D,"d",M[2]),E&8&&ct(z,M[3])},i(M){G(p)},o(M){$(p)},d(M){M&&(h(t),h(d),h(m),h(x),h(P),h(T),h(_)),f&&f.d(),p&&p.d(),C=!1,Kt(k)}}}const se=12;function St(n){const t=+n.offsetX.toFixed(1),e=+n.offsetY.toFixed(1);return[t,e]}function le(n,t,e){let a,o;const r=[[[50,150],[250,150]],[[50,225],[150,75],[250,225],[50,225]],[[50,50],[250,50],[250,250],[50,250],[50,50]]];let l=!1,c=1,i=[],d="",m="",v="",u,y={};function x(T){l=!0;const _=St(T);e(12,i[c]=[],i),i[c].push(_)}function P(T){if(!l)return;const _=St(T);i[c].push(_),e(12,i=[...i])}function A(){l=!1}function q(T=0){var _;if(e(3,v=T+1),v>c-1&&e(3,v=0),!((_=i[v])!=null&&_.length))setTimeout(q,1e3);else{const N=i[v].map(I=>I.join(" ")).join(" L ");e(2,m=`M ${N}`),setTimeout(()=>{q(v)},1e3/se)}}function L(){if(c>0){const T=[...i[c]],_=[...i[c-1]],N=[..._].reverse(),I=Math.max(_.length,T.length),D=I>_.length?ft(_,I):_,R=I>_.length?ft(N,I):N,S=I>T.length?ft(T,I):T,z=Dt(D,S),C=Dt(R,S),k=Math.min(z,C),f=ne(T),p=Math.round(k/f),M=re(_,T),E=_.map(([W,H])=>({x:W,y:H})),Q=T.map(([W,H])=>({x:W,y:H})),Z=ee(E,Q),tt=Bt(E,Q);e(4,u=p>5||M>30),e(5,y={score:p,length:+f.toFixed(1),similarity:+Z.toFixed(3),frechet:+tt.toFixed(1)}),u?setTimeout(()=>{e(4,u=void 0)},2e3):(e(1,d=o),e(0,c+=1)),e(13,a=[])}}function j(){e(12,i[c]=[],i)}return Ot(()=>{e(12,i=[r[0]]),e(1,d=`M ${i[0].map(T=>T.join(" ")).join(" L ")}`),q()}),n.$$.update=()=>{var T;n.$$.dirty&4097&&e(13,a=(T=i[c])==null?void 0:T.map(_=>_.join(" ")).join(" L ")),n.$$.dirty&8192&&e(6,o=a!=null&&a.length?`M ${a}`:"")},[c,d,m,v,u,y,o,x,P,A,L,j,i,a]}class ie extends st{constructor(t){super(),lt(this,t,le,oe,ot,{})}}function ce(n){let t,e='This is the basically the <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Chinese_whispers">telephone game</a>, but visual and massively collaborative.',a,o,r='Copy the <mark class="svelte-1v7ga7x">last person’s drawing</mark> as best you can.',l,c,i=`(since this is testing you just can keep submitting new ones to see a little
	animation develop)`,d,m,v;return m=new ie({}),{c(){t=w("p"),t.innerHTML=e,a=K(),o=w("p"),o.innerHTML=r,l=K(),c=w("p"),c.textContent=i,d=K(),ht(m.$$.fragment),this.h()},l(u){t=b(u,"P",{class:!0,"data-svelte-h":!0}),Y(t)!=="svelte-i63m1y"&&(t.innerHTML=e),a=O(u),o=b(u,"P",{class:!0,"data-svelte-h":!0}),Y(o)!=="svelte-tnmzjs"&&(o.innerHTML=r),l=O(u),c=b(u,"P",{class:!0,"data-svelte-h":!0}),Y(c)!=="svelte-1f9mmjs"&&(c.textContent=i),d=O(u),mt(m.$$.fragment,u),this.h()},h(){s(t,"class","svelte-1v7ga7x"),s(o,"class","svelte-1v7ga7x"),s(c,"class","svelte-1v7ga7x")},m(u,y){F(u,t,y),F(u,a,y),F(u,o,y),F(u,l,y),F(u,c,y),F(u,d,y),dt(m,u,y),v=!0},p:rt,i(u){v||(G(m.$$.fragment,u),v=!0)},o(u){$(m.$$.fragment,u),v=!1},d(u){u&&(h(t),h(a),h(o),h(l),h(c),h(d)),vt(m,u)}}}function ue(n){return wt("copy"),wt("data"),[]}class fe extends st{constructor(t){super(),lt(this,t,ue,ce,ot,{})}}const he="Title TK",me="Description tk.",jt={title:he,description:me};function de(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 5.13.0"),console.log("build: 2023-10-04-15:23"),console.log("--- --- --- --- --- ---")}function ve(n){let t,e,a,o;return t=new Gt({props:{title:n[1],description:n[2],url:n[3],preloadFont:n[0],keywords:n[4]}}),a=new fe({}),{c(){ht(t.$$.fragment),e=K(),ht(a.$$.fragment)},l(r){mt(t.$$.fragment,r),e=O(r),mt(a.$$.fragment,r)},m(r,l){dt(t,r,l),F(r,e,l),dt(a,r,l),o=!0},p:rt,i(r){o||(G(t.$$.fragment,r),G(a.$$.fragment,r),o=!0)},o(r){$(t.$$.fragment,r),$(a.$$.fragment,r),o=!1},d(r){r&&h(e),vt(t,r),vt(a,r)}}}function pe(n,t,e){let{data:a}=t;de();const o=["https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2","https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2","https://pudding.cool/assets/fonts/national/National2Web-Regular.woff2","https://pudding.cool/assets/fonts/national/National2Web-Bold.woff2"],{title:r,description:l,url:c,keywords:i}=jt;return bt("copy",jt),bt("data",a.data),n.$$set=d=>{"data"in d&&e(5,a=d.data)},[o,r,l,c,i,a]}class ye extends st{constructor(t){super(),lt(this,t,pe,ve,ot,{data:5})}}export{ye as component};
