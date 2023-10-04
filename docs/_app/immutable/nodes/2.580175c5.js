import{s as tt,n as $,i as Ft,r as jt,o as Nt,f as St,h as ht,j as mt}from"../chunks/scheduler.2539f17d.js";import{S as et,i as nt,g as w,e as dt,z as Bt,h as b,f,k as s,y as _,A as Rt,a as j,B as H,s as z,m as vt,j as B,C as V,c as K,n as pt,D as Y,E as gt,F as U,o as _t,d as G,p as zt,t as J,b as Kt,G as Mt,r as st,u as lt,v as it,w as ct}from"../chunks/index.b9564c26.js";import{e as yt}from"../chunks/each.e59479a4.js";function wt(n,t,e){const a=n.slice();return a[5]=t[e],a}function bt(n){let t,e;return{c(){t=w("link"),this.h()},l(a){t=b(a,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),this.h()},h(){s(t,"rel","preload"),s(t,"href",e=n[5]),s(t,"as","font"),s(t,"type","font/woff2"),s(t,"crossorigin","")},m(a,o){j(a,t,o)},p(a,o){o&16&&e!==(e=a[5])&&s(t,"href",e)},d(a){a&&f(t)}}}function Wt(n){let t,e,a,o,r,l,c,i,v,h,m,u,g,L,I,C,q,D,M,k,x,F,N,S,A,E;document.title=t=n[0];let y=yt(n[4]),p=[];for(let T=0;T<y.length;T+=1)p[T]=bt(wt(n,y,T));return{c(){e=w("meta"),a=w("meta"),o=w("meta"),r=w("meta"),l=w("meta"),c=w("meta"),i=w("meta"),v=w("meta"),h=w("meta"),m=w("meta"),g=w("meta"),L=w("meta"),I=w("meta"),C=w("meta"),q=w("meta"),D=w("meta"),M=w("meta"),k=w("meta"),x=w("meta"),N=w("meta"),S=w("link");for(let T=0;T<p.length;T+=1)p[T].c();E=dt(),this.h()},l(T){const d=Bt("svelte-1htu80s",document.head);e=b(d,"META",{name:!0,content:!0}),a=b(d,"META",{name:!0,content:!0}),o=b(d,"META",{name:!0,content:!0}),r=b(d,"META",{property:!0,content:!0}),l=b(d,"META",{property:!0,content:!0}),c=b(d,"META",{property:!0,content:!0}),i=b(d,"META",{property:!0,content:!0}),v=b(d,"META",{property:!0,content:!0}),h=b(d,"META",{property:!0,content:!0}),m=b(d,"META",{property:!0,content:!0}),g=b(d,"META",{property:!0,content:!0}),L=b(d,"META",{property:!0,content:!0}),I=b(d,"META",{property:!0,content:!0}),C=b(d,"META",{name:!0,content:!0}),q=b(d,"META",{name:!0,content:!0}),D=b(d,"META",{name:!0,content:!0}),M=b(d,"META",{name:!0,content:!0}),k=b(d,"META",{name:!0,content:!0}),x=b(d,"META",{name:!0,content:!0}),N=b(d,"META",{name:!0,content:!0}),S=b(d,"LINK",{rel:!0,href:!0});for(let P=0;P<p.length;P+=1)p[P].l(d);E=dt(),d.forEach(f),this.h()},h(){s(e,"name","description"),s(e,"content",n[1]),s(a,"name","author"),s(a,"content","The Pudding"),s(o,"name","news_keywords"),s(o,"content",n[3]),s(r,"property","og:title"),s(r,"content",n[0]),s(l,"property","og:site_name"),s(l,"content","The Pudding"),s(c,"property","og:url"),s(c,"content",n[2]),s(i,"property","og:description"),s(i,"content",n[1]),s(v,"property","og:type"),s(v,"content","article"),s(h,"property","og:locale"),s(h,"content","en_US"),s(m,"property","og:image"),s(m,"content",u=n[2]+"/assets/social-facebook.jpg"),s(g,"property","og:image:type"),s(g,"content","image/jpeg"),s(L,"property","og:image:width"),s(L,"content","1200"),s(I,"property","og:image:height"),s(I,"content","600"),s(C,"name","twitter:card"),s(C,"content","summary_large_image"),s(q,"name","twitter:site"),s(q,"content","https://pudding.cool"),s(D,"name","twitter:creator"),s(D,"content","@puddingviz"),s(M,"name","twitter:title"),s(M,"content",n[0]),s(k,"name","twitter:description"),s(k,"content",n[1]),s(x,"name","twitter:image:src"),s(x,"content",F=n[2]+"/assets/social-twitter.jpg"),s(N,"name","robots"),s(N,"content","max-image-preview:large"),s(S,"rel","canonical"),s(S,"href",A=n[2]+"/")},m(T,d){_(document.head,e),_(document.head,a),_(document.head,o),_(document.head,r),_(document.head,l),_(document.head,c),_(document.head,i),_(document.head,v),_(document.head,h),_(document.head,m),_(document.head,g),_(document.head,L),_(document.head,I),_(document.head,C),_(document.head,q),_(document.head,D),_(document.head,M),_(document.head,k),_(document.head,x),_(document.head,N),_(document.head,S);for(let P=0;P<p.length;P+=1)p[P]&&p[P].m(document.head,null);_(document.head,E)},p(T,[d]){if(d&1&&t!==(t=T[0])&&(document.title=t),d&2&&s(e,"content",T[1]),d&8&&s(o,"content",T[3]),d&1&&s(r,"content",T[0]),d&4&&s(c,"content",T[2]),d&2&&s(i,"content",T[1]),d&4&&u!==(u=T[2]+"/assets/social-facebook.jpg")&&s(m,"content",u),d&1&&s(M,"content",T[0]),d&2&&s(k,"content",T[1]),d&4&&F!==(F=T[2]+"/assets/social-twitter.jpg")&&s(x,"content",F),d&4&&A!==(A=T[2]+"/")&&s(S,"href",A),d&16){y=yt(T[4]);let P;for(P=0;P<y.length;P+=1){const R=wt(T,y,P);p[P]?p[P].p(R,d):(p[P]=bt(R),p[P].c(),p[P].m(E.parentNode,E))}for(;P<p.length;P+=1)p[P].d(1);p.length=y.length}},i:$,o:$,d(T){f(e),f(a),f(o),f(r),f(l),f(c),f(i),f(v),f(h),f(m),f(g),f(L),f(I),f(C),f(q),f(D),f(M),f(k),f(x),f(N),f(S),Rt(p,T),f(E)}}}function Ht(n,t,e){let{title:a="Title TK"}=t,{description:o="Description TK"}=t,{url:r="https://pudding.cool"}=t,{keywords:l=""}=t,{preloadFont:c=[]}=t;return n.$$set=i=>{"title"in i&&e(0,a=i.title),"description"in i&&e(1,o=i.description),"url"in i&&e(2,r=i.url),"keywords"in i&&e(3,l=i.keywords),"preloadFont"in i&&e(4,c=i.preloadFont)},[a,o,r,l,c]}class Vt extends et{constructor(t){super(),nt(this,t,Ht,Wt,tt,{title:0,description:1,url:2,keywords:3,preloadFont:4})}}function Tt(n,{delay:t=0,duration:e=400,easing:a=Ft}={}){const o=+getComputedStyle(n).opacity;return{delay:t,duration:e,easing:a,css:r=>`opacity: ${r*o}`}}var kt=function(n){return n[n.length-1]},Et=function(n){return n.reduce(function(t,e){return t+e},0)},rt=function(n){var t=n.reduce(function(e,a){return a+e},0);return t/n.length},ft=function(n,t){return{x:n.x-t.x,y:n.y-t.y}},qt=function(n){var t=n.x,e=n.y;return Math.sqrt(t*t+e*e)},X=function(n,t){return qt(ft(n,t))},ut=function(n){var t=n[0],e=n.slice(1);return e.reduce(function(a,o){var r=X(o,t);return t=o,a+r},0)},Ot=function(n,t,e){var a=ft(t,n),o=e/qt(a);return{x:t.x+o*a.x,y:t.y+o*a.y}},Ut=function(n,t){for(var e=t.numPoints,a=e===void 0?50:e,o=ut(n),r=o/(a-1),l=[n[0]],c=kt(n),i=n.slice(1),v=0;v<a-2;v++)for(var h=kt(l),m=r,u=!1;!u;){var g=X(h,i[0]);if(g<m)m-=g,h=i.shift();else{var L=Ot(h,i[0],m-g);l.push(L),u=!0}}return l.push(c),l},Xt=function(n,t){return n.map(function(e){return{x:Math.cos(-1*t)*e.x-Math.sin(-1*t)*e.y,y:Math.sin(-1*t)*e.x+Math.cos(-1*t)*e.y}})},Dt=function(n,t){for(var e=n.length>=t.length?n:t,a=n.length>=t.length?t:n,o=function(v,h,m,u){if(v===0&&h===0)return X(e[0],a[0]);if(v>0&&h===0)return Math.max(m[0],X(e[v],a[0]));var g=u[u.length-1];return v===0&&h>0?Math.max(g,X(e[0],a[h])):Math.max(Math.min(m[h],m[h-1],g),X(e[v],a[h]))},r=[],l=0;l<e.length;l++){for(var c=[],i=0;i<a.length;i++)c.push(o(l,i,r,c));r=c}return r[a.length-1]},Pt=function(n,t){t===void 0&&(t={});var e=t.rebalance,a=e===void 0?!0:e,o=t.estimationPoints,r=o===void 0?50:o,l=a?Ut(n,{numPoints:r}):n,c=rt(l.map(function(u){return u.x})),i=rt(l.map(function(u){return u.y})),v={x:c,y:i},h=l.map(function(u){return ft(u,v)}),m=Math.sqrt(rt(h.map(function(u){var g=u.x,L=u.y;return g*g+L*L})));return h.map(function(u){return{x:u.x/m,y:u.y/m}})},Yt=function(n,t){if(n.length!==t.length)throw new Error("curve and relativeCurve must have the same length");var e=Et(n.map(function(o,r){var l=o.x,c=o.y;return c*t[r].x-l*t[r].y})),a=Et(n.map(function(o,r){var l=o.x,c=o.y;return l*t[r].x+c*t[r].y}));return Math.atan2(e,a)},Gt=function(n,t,e){e===void 0&&(e={});var a=e.estimationPoints,o=a===void 0?50:a,r=e.rotations,l=r===void 0?10:r,c=e.restrictRotationAngle,i=c===void 0?Math.PI:c,v=e.checkRotations,h=v===void 0?!0:v;if(Math.abs(i)>Math.PI)throw new Error("restrictRotationAngle cannot be larger than PI");var m=Pt(n,{estimationPoints:o}),u=Pt(t,{estimationPoints:o}),g=Math.sqrt(ut(m)*ut(u)),L=[0];if(h){var I=Yt(m,u);I>Math.PI&&(I=I-2*Math.PI),I!==0&&Math.abs(I)<i&&L.push(I);for(var C=0;C<l;C++){var q=-1*i+2*C*i/(l-1);q!==0&&q!==Math.PI&&L.push(q)}}var D=1/0;return L.forEach(function(M){var k=Xt(m,M),x=Dt(k,u);x<D&&(D=x)}),Math.max(1-D/(g/Math.sqrt(2)),0)};function Ct(n,t){let e=n.length,a=t.length,o=[];for(let r=0;r<=e;r++)o[r]=[];for(let r=1;r<=e;r++)o[r][0]=1/0;for(let r=1;r<=a;r++)o[0][r]=1/0;o[0][0]=0;for(let r=1;r<=e;r++)for(let l=1;l<=a;l++){let c=Math.sqrt(Math.pow(n[r-1][0]-t[l-1][0],2)+Math.pow(n[r-1][1]-t[l-1][1],2));o[r][l]=c+Math.min(o[r-1][l],o[r][l-1],o[r-1][l-1])}return o[e][a]}function Jt(n){let t=0;for(let e=1;e<n.length;e++){const[a,o]=n[e-1],[r,l]=n[e];t+=Math.sqrt(Math.pow(r-a,2)+Math.pow(l-o,2))}return t}function Qt(n){let t=0;for(let e=1;e<n.length;e++){const[a,o]=n[e-1],[r,l]=n[e];t+=Math.sqrt(Math.pow(r-a,2)+Math.pow(l-o,2))}return t}function ot(n,t){const e=[],o=Qt(n)/(t-1);let r=0,l=n[0];e.push(l);let c=1;for(;e.length<t&&c<n.length;){const i=n[c],v=Math.sqrt(Math.pow(i[0]-l[0],2)+Math.pow(i[1]-l[1],2));if(r+v>=o){const h=(o-r)/v,m=[l[0]+h*(i[0]-l[0]),l[1]+h*(i[1]-l[1])];e.push(m),l=m,r=0}else r+=v,l=i,c++}return e}function Zt(n,t){const e=n[0],a=t[0],o=n[n.length-1],r=t[t.length-1],l=Math.sqrt(Math.pow(a[0]-e[0],2)+Math.pow(a[1]-e[1],2)),c=Math.sqrt(Math.pow(r[0]-o[0],2)+Math.pow(r[1]-o[1],2)),i=l+c,v=Math.sqrt(Math.pow(r[0]-e[0],2)+Math.pow(r[1]-e[1],2)),h=Math.sqrt(Math.pow(a[0]-o[0],2)+Math.pow(a[1]-o[1],2)),m=v+h;return i<m?Math.max(l,c):Math.max(v,h)}function At(n){let t;return{c(){t=H("path"),this.h()},l(e){t=V(e,"path",{class:!0,d:!0}),B(t).forEach(f),this.h()},h(){s(t,"class","prev svelte-lw3vhv"),s(t,"d",n[1])},m(e,a){j(e,t,a)},p(e,a){a&2&&s(t,"d",e[1])},d(e){e&&f(t)}}}function xt(n){let t,e="I think you can do better!",a,o;return{c(){t=w("p"),t.textContent=e,this.h()},l(r){t=b(r,"P",{class:!0,"data-svelte-h":!0}),Y(t)!=="svelte-140d4sa"&&(t.textContent=e),this.h()},h(){s(t,"class","fail svelte-lw3vhv")},m(r,l){j(r,t,l),o=!0},i(r){o||(r&&St(()=>{o&&(a||(a=Mt(t,Tt,{},!0)),a.run(1))}),o=!0)},o(r){r&&(a||(a=Mt(t,Tt,{},!1)),a.run(0)),o=!1},d(r){r&&f(t),r&&a&&a.end()}}}function $t(n){let t,e,a,o,r,l,c,i,v,h,m,u="submit",g,L="reset",I,C,q,D,M,k,x,F,N,S,A=n[1]&&At(n),E=n[4]&&xt();return{c(){t=w("div"),e=H("svg"),a=H("g"),A&&A.c(),o=H("path"),r=z(),l=w("p"),c=vt(n[0]),i=z(),E&&E.c(),v=z(),h=w("div"),m=w("button"),m.textContent=u,g=w("button"),g.textContent=L,I=z(),C=w("div"),q=H("svg"),D=H("g"),M=H("path"),k=z(),x=w("p"),F=vt(n[3]),this.h()},l(y){t=b(y,"DIV",{class:!0});var p=B(t);e=V(p,"svg",{class:!0});var T=B(e);a=V(T,"g",{});var d=B(a);A&&A.l(d),o=V(d,"path",{d:!0,class:!0}),B(o).forEach(f),d.forEach(f),T.forEach(f),r=K(p),l=b(p,"P",{class:!0});var P=B(l);c=pt(P,n[0]),P.forEach(f),i=K(p),E&&E.l(p),p.forEach(f),v=K(y),h=b(y,"DIV",{class:!0});var R=B(h);m=b(R,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(m)!=="svelte-13qkurs"&&(m.textContent=u),g=b(R,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(g)!=="svelte-o81ggd"&&(g.textContent=L),R.forEach(f),I=K(y),C=b(y,"DIV",{class:!0});var W=B(C);q=V(W,"svg",{class:!0});var Q=B(q);D=V(Q,"g",{});var Z=B(D);M=V(Z,"path",{d:!0,class:!0}),B(M).forEach(f),Z.forEach(f),Q.forEach(f),k=K(W),x=b(W,"P",{class:!0});var O=B(x);F=pt(O,n[3]),O.forEach(f),W.forEach(f),this.h()},h(){s(o,"d",n[5]),s(o,"class","svelte-lw3vhv"),s(e,"class","svelte-lw3vhv"),s(l,"class","svelte-lw3vhv"),s(t,"class","svelte-lw3vhv"),gt(t,"first",n[0]===0),s(m,"class","svelte-lw3vhv"),s(g,"class","svelte-lw3vhv"),s(h,"class","ui svelte-lw3vhv"),s(M,"d",n[2]),s(M,"class","svelte-lw3vhv"),s(q,"class","svelte-lw3vhv"),s(x,"class","svelte-lw3vhv"),s(C,"class","svelte-lw3vhv")},m(y,p){j(y,t,p),_(t,e),_(e,a),A&&A.m(a,null),_(a,o),_(t,r),_(t,l),_(l,c),_(t,i),E&&E.m(t,null),j(y,v,p),j(y,h,p),_(h,m),_(h,g),j(y,I,p),j(y,C,p),_(C,q),_(q,D),_(D,M),_(C,k),_(C,x),_(x,F),N||(S=[U(t,"pointerdown",n[6]),U(t,"pointermove",n[7]),U(t,"pointerup",n[8]),U(t,"pointerleave",n[8]),U(m,"click",n[9]),U(g,"click",n[10])],N=!0)},p(y,[p]){y[1]?A?A.p(y,p):(A=At(y),A.c(),A.m(a,o)):A&&(A.d(1),A=null),p&32&&s(o,"d",y[5]),p&1&&_t(c,y[0]),y[4]?E?p&16&&G(E,1):(E=xt(),E.c(),G(E,1),E.m(t,null)):E&&(zt(),J(E,1,1,()=>{E=null}),Kt()),p&1&&gt(t,"first",y[0]===0),p&4&&s(M,"d",y[2]),p&8&&_t(F,y[3])},i(y){G(E)},o(y){J(E)},d(y){y&&(f(t),f(v),f(h),f(I),f(C)),A&&A.d(),E&&E.d(),N=!1,jt(S)}}}const te=12;function Lt(n){const t=+n.offsetX.toFixed(1),e=+n.offsetY.toFixed(1);return[t,e]}function ee(n,t,e){let a,o;const r=[[[50,150],[250,150]],[[50,225],[150,75],[250,225],[50,225]],[[50,50],[250,50],[250,250],[50,250],[50,50]]];let l=!1,c=1,i=[],v="",h="",m="",u;function g(M){l=!0;const k=Lt(M);e(11,i[c]=[],i),i[c].push(k)}function L(M){if(!l)return;const k=Lt(M);i[c].push(k),e(11,i=[...i])}function I(){l=!1}function C(M=0){var k;if(e(3,m=M+1),m>c-1&&e(3,m=0),!((k=i[m])!=null&&k.length))setTimeout(C,1e3);else{const x=i[m].map(F=>F.join(" ")).join(" L ");e(2,h=`M ${x}`),setTimeout(()=>{C(m)},1e3/te)}}function q(){if(c>0){const M=[...i[c]],k=[...i[c-1]],x=[...k].reverse(),F=Math.max(k.length,M.length),N=F>k.length?ot(k,F):k,S=F>k.length?ot(x,F):x,A=F>M.length?ot(M,F):M,E=Ct(N,A),y=Ct(S,A),p=Math.min(E,y),T=Jt(M),d=Math.round(p/T),P=Zt(k,M),R=k.map(([O,at])=>({x:O,y:at})),W=M.map(([O,at])=>({x:O,y:at})),Q=Gt(R,W),Z=Dt(R,W);e(4,u=d>5||P>30),console.log({score:d,distance:p,len:T,pointDistance:P,similarity:Q,frechet:Z,failed:u}),u?setTimeout(()=>{e(4,u=void 0)},2e3):(e(1,v=o),e(0,c+=1)),e(12,a=[])}}function D(){e(11,i[c]=[],i)}return Nt(()=>{e(11,i=[r[0]]),e(1,v=`M ${i[0].map(M=>M.join(" ")).join(" L ")}`),C()}),n.$$.update=()=>{var M;n.$$.dirty&2049&&e(12,a=(M=i[c])==null?void 0:M.map(k=>k.join(" ")).join(" L ")),n.$$.dirty&4096&&e(5,o=a!=null&&a.length?`M ${a}`:"")},[c,v,h,m,u,o,g,L,I,q,D,i,a]}class ne extends et{constructor(t){super(),nt(this,t,ee,$t,tt,{})}}function ae(n){let t,e='This is the basically the <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Chinese_whispers">telephone game</a>, but visual and massively collaborative.',a,o,r='Copy the <mark class="svelte-1v7ga7x">last person’s drawing</mark> as best you can.',l,c,i=`(since this is testing you just can keep submitting new ones to see a little
	animation develop)`,v,h,m;return h=new ne({}),{c(){t=w("p"),t.innerHTML=e,a=z(),o=w("p"),o.innerHTML=r,l=z(),c=w("p"),c.textContent=i,v=z(),st(h.$$.fragment),this.h()},l(u){t=b(u,"P",{class:!0,"data-svelte-h":!0}),Y(t)!=="svelte-i63m1y"&&(t.innerHTML=e),a=K(u),o=b(u,"P",{class:!0,"data-svelte-h":!0}),Y(o)!=="svelte-tnmzjs"&&(o.innerHTML=r),l=K(u),c=b(u,"P",{class:!0,"data-svelte-h":!0}),Y(c)!=="svelte-1f9mmjs"&&(c.textContent=i),v=K(u),lt(h.$$.fragment,u),this.h()},h(){s(t,"class","svelte-1v7ga7x"),s(o,"class","svelte-1v7ga7x"),s(c,"class","svelte-1v7ga7x")},m(u,g){j(u,t,g),j(u,a,g),j(u,o,g),j(u,l,g),j(u,c,g),j(u,v,g),it(h,u,g),m=!0},p:$,i(u){m||(G(h.$$.fragment,u),m=!0)},o(u){J(h.$$.fragment,u),m=!1},d(u){u&&(f(t),f(a),f(o),f(l),f(c),f(v)),ct(h,u)}}}function re(n){return ht("copy"),ht("data"),[]}class oe extends et{constructor(t){super(),nt(this,t,re,ae,tt,{})}}const se="Title TK",le="Description tk.",It={title:se,description:le};function ie(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 5.13.0"),console.log("build: 2023-10-04-15:19"),console.log("--- --- --- --- --- ---")}function ce(n){let t,e,a,o;return t=new Vt({props:{title:n[1],description:n[2],url:n[3],preloadFont:n[0],keywords:n[4]}}),a=new oe({}),{c(){st(t.$$.fragment),e=z(),st(a.$$.fragment)},l(r){lt(t.$$.fragment,r),e=K(r),lt(a.$$.fragment,r)},m(r,l){it(t,r,l),j(r,e,l),it(a,r,l),o=!0},p:$,i(r){o||(G(t.$$.fragment,r),G(a.$$.fragment,r),o=!0)},o(r){J(t.$$.fragment,r),J(a.$$.fragment,r),o=!1},d(r){r&&f(e),ct(t,r),ct(a,r)}}}function ue(n,t,e){let{data:a}=t;ie();const o=["https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2","https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2","https://pudding.cool/assets/fonts/national/National2Web-Regular.woff2","https://pudding.cool/assets/fonts/national/National2Web-Bold.woff2"],{title:r,description:l,url:c,keywords:i}=It;return mt("copy",It),mt("data",a.data),n.$$set=v=>{"data"in v&&e(5,a=v.data)},[o,r,l,c,i,a]}class de extends et{constructor(t){super(),nt(this,t,ue,ce,tt,{data:5})}}export{de as component};
