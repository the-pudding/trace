import{k as Wt,s as bt,r as jt,o as Kt,l as Qt,n as Yt,f as St,h as Rt}from"../chunks/scheduler.fcd7ba46.js";import{S as Mt,i as Pt,g as L,F as B,s as A,m as W,h as I,j as F,G as U,f as d,c as N,n as j,z as it,k as x,I as Dt,l as J,a as R,y as p,D as K,o as ot,d as Z,p as Zt,t as et,b as te,J as zt,H as ee,r as dt,x as ne,u as gt,v as pt,w as _t}from"../chunks/index.a1e46192.js";import{M as ae,v as re,c as At}from"../chunks/version.c3c45bbc.js";function Nt(n,{delay:t=0,duration:e=400,easing:a=Wt}={}){const s=+getComputedStyle(n).opacity;return{delay:t,duration:e,easing:a,css:r=>`opacity: ${r*s}`}}var Ot=function(n){return n[n.length-1]},$t=function(n){return n.reduce(function(t,e){return t+e},0)},ht=function(n){var t=n.reduce(function(e,a){return a+e},0);return t/n.length},Ct=function(n,t){return{x:n.x-t.x,y:n.y-t.y}},Gt=function(n){var t=n.x,e=n.y;return Math.sqrt(t*t+e*e)},Q=function(n,t){return Gt(Ct(n,t))},yt=function(n){var t=n[0],e=n.slice(1);return e.reduce(function(a,s){var r=Q(s,t);return t=s,a+r},0)},se=function(n,t,e){var a=Ct(t,n),s=e/Gt(a);return{x:t.x+s*a.x,y:t.y+s*a.y}},xt=function(n,t){for(var e=t.numPoints,a=e===void 0?50:e,s=yt(n),r=s/(a-1),o=[n[0]],i=Ot(n),l=n.slice(1),u=0;u<a-2;u++)for(var c=Ot(o),v=r,f=!1;!f;){var h=Q(c,l[0]);if(h<v)v-=h,c=l.shift();else{var P=se(c,l[0],v-h);o.push(P),f=!0}}return o.push(i),o},oe=function(n,t){return n.map(function(e){return{x:Math.cos(-1*t)*e.x-Math.sin(-1*t)*e.y,y:Math.sin(-1*t)*e.x+Math.cos(-1*t)*e.y}})},wt=function(n,t){for(var e=n.length>=t.length?n:t,a=n.length>=t.length?t:n,s=function(u,c,v,f){if(u===0&&c===0)return Q(e[0],a[0]);if(u>0&&c===0)return Math.max(v[0],Q(e[u],a[0]));var h=f[f.length-1];return u===0&&c>0?Math.max(h,Q(e[0],a[c])):Math.max(Math.min(v[c],v[c-1],h),Q(e[u],a[c]))},r=[],o=0;o<e.length;o++){for(var i=[],l=0;l<a.length;l++)i.push(s(o,l,r,i));r=i}return r[a.length-1]},Jt=function(n,t){t===void 0&&(t={});var e=t.rebalance,a=e===void 0?!0:e,s=t.estimationPoints,r=s===void 0?50:s,o=a?xt(n,{numPoints:r}):n,i=ht(o.map(function(f){return f.x})),l=ht(o.map(function(f){return f.y})),u={x:i,y:l},c=o.map(function(f){return Ct(f,u)}),v=Math.sqrt(ht(c.map(function(f){var h=f.x,P=f.y;return h*h+P*P})));return c.map(function(f){return{x:f.x/v,y:f.y/v}})},ie=function(n,t){if(n.length!==t.length)throw new Error("curve and relativeCurve must have the same length");var e=$t(n.map(function(s,r){var o=s.x,i=s.y;return i*t[r].x-o*t[r].y})),a=$t(n.map(function(s,r){var o=s.x,i=s.y;return o*t[r].x+i*t[r].y}));return Math.atan2(e,a)},Vt=function(n,t,e){e===void 0&&(e={});var a=e.estimationPoints,s=a===void 0?50:a,r=e.rotations,o=r===void 0?10:r,i=e.restrictRotationAngle,l=i===void 0?Math.PI:i,u=e.checkRotations,c=u===void 0?!0:u;if(Math.abs(l)>Math.PI)throw new Error("restrictRotationAngle cannot be larger than PI");var v=Jt(n,{estimationPoints:s}),f=Jt(t,{estimationPoints:s}),h=Math.sqrt(yt(v)*yt(f)),P=[0];if(c){var C=ie(v,f);C>Math.PI&&(C=C-2*Math.PI),C!==0&&Math.abs(C)<l&&P.push(C);for(var w=0;w<o;w++){var M=-1*l+2*w*l/(o-1);M!==0&&M!==Math.PI&&P.push(M)}}var D=1/0;return P.forEach(function(S){var _=oe(v,S),z=wt(_,f);z<D&&(D=z)}),Math.max(1-D/(h/Math.sqrt(2)),0)};function Ht(n){let t=0;for(let e=1;e<n.length;e++){const a=n[e-1],s=n[e];t+=Math.sqrt(Math.pow(s.x-a.x,2)+Math.pow(s.y-a.y,2))}return t}function le({cur:n,prev:t,diagonal:e}){const a=Math.max(t.length,n.length),s=xt(n,{numPoints:a}),r=xt(t,{numPoints:a}),o=[...r].reverse(),i={estimationPoints:200,rotations:30},l=Vt(r,s,i),u=Vt(o,s,i),c=Ht(s),v=Ht(r),f=Math.max(c,v),h=Math.abs(c/v-1),P=wt(r,s),C=wt(o,s),w=P/e,M=C/e,D=P/f,S=C/f;let _=.075;v<100&&(_=.2),v<200&&(_=.15),v<300&&(_=.1);const z=h<_&&l>.9&&(w<.2||D<.2),y=h<_&&u>.9&&(M<.2||S<.2);return{valid:z||y,debug1:{ll_target:_,ll:+h.toFixed(2),sim:+l.toFixed(2),diag:+w.toFixed(2),len:+D.toFixed(2),pass:z},debug2:{ll_target:_,ll:+h.toFixed(2),sim:+u.toFixed(2),diag:+M.toFixed(2),len:+S.toFixed(2),pass:y}}}function Tt(n){let t;return{c(){t=B("path"),this.h()},l(e){t=U(e,"path",{class:!0,d:!0}),F(t).forEach(d),this.h()},h(){x(t,"class","prev svelte-vq0g7w"),x(t,"d",n[1])},m(e,a){R(e,t,a)},p(e,a){a&2&&x(t,"d",e[1])},d(e){e&&d(t)}}}function Bt(n){let t,e="I think you can do better!",a,s;return{c(){t=L("p"),t.textContent=e,this.h()},l(r){t=I(r,"P",{class:!0,"data-svelte-h":!0}),it(t)!=="svelte-5wu51j"&&(t.textContent=e),this.h()},h(){x(t,"class","invalid svelte-vq0g7w")},m(r,o){R(r,t,o),s=!0},i(r){s||(r&&Qt(()=>{s&&(a||(a=zt(t,Nt,{},!0)),a.run(1))}),s=!0)},o(r){r&&(a||(a=zt(t,Nt,{},!1)),a.run(0)),s=!1},d(r){r&&d(t),r&&a&&a.end()}}}function ue(n){let t,e,a,s,r,o,i,l,u,c,v,f="submit",h,P="reset",C,w,M,D=`target: ll < ~0.1 && sim > 0.9 && (diag < 0.2 || len <
		0.2)`,S,_,z,y=JSON.stringify(n[5])+"",q,V,k,H,O=JSON.stringify(n[6])+"",nt,at,$,X,tt,T,lt,Y,rt,ut,qt,E=n[1]&&Tt(n),b=n[4]===!1&&Bt();return{c(){t=L("div"),e=B("svg"),a=B("g"),E&&E.c(),s=B("path"),r=A(),o=L("p"),i=W(n[0]),l=A(),b&&b.c(),u=A(),c=L("div"),v=L("button"),v.textContent=f,h=L("button"),h.textContent=P,C=A(),w=L("div"),M=L("p"),M.textContent=D,S=A(),_=L("p"),z=W("debug1: "),q=W(y),V=A(),k=L("p"),H=W("debug2: "),nt=W(O),at=A(),$=L("div"),X=B("svg"),tt=B("g"),T=B("path"),lt=A(),Y=L("p"),rt=W(n[3]),this.h()},l(m){t=I(m,"DIV",{class:!0});var g=F(t);e=U(g,"svg",{class:!0});var Et=F(e);a=U(Et,"g",{});var ft=F(a);E&&E.l(ft),s=U(ft,"path",{d:!0,class:!0}),F(s).forEach(d),ft.forEach(d),Et.forEach(d),r=N(g),o=I(g,"P",{class:!0});var Ft=F(o);i=j(Ft,n[0]),Ft.forEach(d),l=N(g),b&&b.l(g),g.forEach(d),u=N(m),c=I(m,"DIV",{class:!0});var ct=F(c);v=I(ct,"BUTTON",{class:!0,"data-svelte-h":!0}),it(v)!=="svelte-13qkurs"&&(v.textContent=f),h=I(ct,"BUTTON",{class:!0,"data-svelte-h":!0}),it(h)!=="svelte-o81ggd"&&(h.textContent=P),ct.forEach(d),C=N(m),w=I(m,"DIV",{class:!0});var G=F(w);M=I(G,"P",{style:!0,"data-svelte-h":!0}),it(M)!=="svelte-1d2p6qr"&&(M.textContent=D),S=N(G),_=I(G,"P",{style:!0});var vt=F(_);z=j(vt,"debug1: "),q=j(vt,y),vt.forEach(d),V=N(G),k=I(G,"P",{style:!0});var mt=F(k);H=j(mt,"debug2: "),nt=j(mt,O),mt.forEach(d),G.forEach(d),at=N(m),$=I(m,"DIV",{class:!0});var st=F($);X=U(st,"svg",{class:!0});var kt=F(X);tt=U(kt,"g",{});var Lt=F(tt);T=U(Lt,"path",{d:!0,class:!0}),F(T).forEach(d),Lt.forEach(d),kt.forEach(d),lt=N(st),Y=I(st,"P",{class:!0});var It=F(Y);rt=j(It,n[3]),It.forEach(d),st.forEach(d),this.h()},h(){x(s,"d",n[7]),x(s,"class","svelte-vq0g7w"),x(e,"class","shadow svelte-vq0g7w"),x(o,"class","svelte-vq0g7w"),x(t,"class","c svelte-vq0g7w"),Dt(t,"first",n[0]===0),x(v,"class","svelte-vq0g7w"),x(h,"class","svelte-vq0g7w"),x(c,"class","c ui svelte-vq0g7w"),J(M,"text-align","center"),J(M,"font-family","var(--mono)"),J(M,"font-size","12px"),J(_,"text-align","center"),J(_,"font-family","var(--mono)"),J(_,"font-size","12px"),J(k,"text-align","center"),J(k,"font-family","var(--mono)"),J(k,"font-size","12px"),x(w,"class","debug"),x(T,"d",n[2]),x(T,"class","svelte-vq0g7w"),x(X,"class","shadow svelte-vq0g7w"),x(Y,"class","svelte-vq0g7w"),x($,"class","c svelte-vq0g7w")},m(m,g){R(m,t,g),p(t,e),p(e,a),E&&E.m(a,null),p(a,s),p(t,r),p(t,o),p(o,i),p(t,l),b&&b.m(t,null),R(m,u,g),R(m,c,g),p(c,v),p(c,h),R(m,C,g),R(m,w,g),p(w,M),p(w,S),p(w,_),p(_,z),p(_,q),p(w,V),p(w,k),p(k,H),p(k,nt),R(m,at,g),R(m,$,g),p($,X),p(X,tt),p(tt,T),p($,lt),p($,Y),p(Y,rt),ut||(qt=[K(t,"pointerdown",n[8]),K(t,"pointermove",n[9]),K(t,"pointerup",n[10]),K(t,"pointerleave",n[10]),K(v,"click",n[11]),K(h,"click",n[12])],ut=!0)},p(m,[g]){m[1]?E?E.p(m,g):(E=Tt(m),E.c(),E.m(a,s)):E&&(E.d(1),E=null),g&128&&x(s,"d",m[7]),g&1&&ot(i,m[0]),m[4]===!1?b?g&16&&Z(b,1):(b=Bt(),b.c(),Z(b,1),b.m(t,null)):b&&(Zt(),et(b,1,1,()=>{b=null}),te()),g&1&&Dt(t,"first",m[0]===0),g&32&&y!==(y=JSON.stringify(m[5])+"")&&ot(q,y),g&64&&O!==(O=JSON.stringify(m[6])+"")&&ot(nt,O),g&4&&x(T,"d",m[2]),g&8&&ot(rt,m[3])},i(m){Z(b)},o(m){et(b)},d(m){m&&(d(t),d(u),d(c),d(C),d(w),d(at),d($)),E&&E.d(),b&&b.d(),ut=!1,jt(qt)}}}const Ut=300,fe=12;function Xt(n){const t=+n.offsetX.toFixed(1),e=+n.offsetY.toFixed(1);return[t,e]}function ce(n,t,e){let a,s;const r=Ut,o=[[[50,150],[250,150]],[[50,225],[150,75],[250,225],[50,225]],[[50,50],[250,50],[250,250],[50,250],[50,50]]];let i=!1,l=1,u=[],c="",v="",f="",h,P={},C={};function w(y){i=!0;const q=Xt(y);e(13,u[l]=[],u),u[l].push(q)}function M(y){if(!i)return;const q=Xt(y);u[l].push(q),e(13,u=[...u])}function D(){i=!1}function S(y=0){var q;if(e(3,f=y+1),f>l-1&&e(3,f=0),!((q=u[f])!=null&&q.length))setTimeout(S,1e3);else{const V=u[f].map(k=>k.join(" ")).join(" L ");e(2,v=`M ${V}`),setTimeout(()=>{S(f)},1e3/fe)}}function _(){if(l>0){const y=[...u[l]].map(([H,O])=>({x:H,y:O})),q=[...u[l-1]].map(([H,O])=>({x:H,y:O})),V=Math.sqrt(Ut**2+r**2),k=le({cur:y,prev:q,diagonal:V});e(4,h=k.valid),e(5,P=k.debug1),e(6,C=k.debug2),h?(e(1,c=s),e(0,l+=1)):setTimeout(()=>{e(4,h=void 0)},2e3),e(14,a=[])}}function z(){e(13,u[l]=[],u)}return Kt(()=>{e(13,u=[o[2]]),e(1,c=`M ${u[0].map(y=>y.join(" ")).join(" L ")}`),S()}),n.$$.update=()=>{var y;n.$$.dirty&8193&&e(14,a=(y=u[l])==null?void 0:y.map(q=>q.join(" ")).join(" L ")),n.$$.dirty&16384&&e(7,s=a!=null&&a.length?`M ${a}`:"")},[l,c,v,f,h,P,C,s,w,M,D,_,z,u,a]}class ve extends Mt{constructor(t){super(),Pt(this,t,ce,ue,bt,{})}}function me(n){let t,e,a=n[0].task+"",s,r,o;return r=new ve({}),{c(){t=L("p"),e=new ee(!1),s=A(),dt(r.$$.fragment),this.h()},l(i){t=I(i,"P",{class:!0});var l=F(t);e=ne(l,!1),l.forEach(d),s=N(i),gt(r.$$.fragment,i),this.h()},h(){e.a=null,x(t,"class","svelte-1bx1o3f")},m(i,l){R(i,t,l),e.m(a,t),R(i,s,l),pt(r,i,l),o=!0},p:Yt,i(i){o||(Z(r.$$.fragment,i),o=!0)},o(i){et(r.$$.fragment,i),o=!1},d(i){i&&(d(t),d(s)),_t(r,i)}}}function he(n){const t=St("copy");return St("data"),[t]}class de extends Mt{constructor(t){super(),Pt(this,t,he,me,bt,{})}}function ge(n){let t,e,a,s;return t=new ae({props:{title:n[0],description:n[1],url:n[2],keywords:n[3]}}),a=new de({}),{c(){dt(t.$$.fragment),e=A(),dt(a.$$.fragment)},l(r){gt(t.$$.fragment,r),e=N(r),gt(a.$$.fragment,r)},m(r,o){pt(t,r,o),R(r,e,o),pt(a,r,o),s=!0},p:Yt,i(r){s||(Z(t.$$.fragment,r),Z(a.$$.fragment,r),s=!0)},o(r){et(t.$$.fragment,r),et(a.$$.fragment,r),s=!1},d(r){r&&d(e),_t(t,r),_t(a,r)}}}function pe(n,t,e){let{data:a}=t;re();const{title:s,description:r,url:o,keywords:i}=At;return Rt("copy",At),Rt("data",a.data),n.$$set=l=>{"data"in l&&e(4,a=l.data)},[s,r,o,i,a]}class we extends Mt{constructor(t){super(),Pt(this,t,pe,ge,bt,{data:4})}}export{we as component};
