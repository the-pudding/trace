import{T as se,s as G,f as v,g as k,h as $,d,i as g,I as ae,p as J,H as L,a as C,e as B,r as M,c as N,w as S,l as P,m as O,v as E,D as K,n as R,j as W,L as ne,u as le,Q as U}from"../chunks/scheduler.da91aed2.js";import{S as X,i as Y,g as Z,t as y,c as x,a as w,f as ie,b as j,d as D,m as H,e as I}from"../chunks/index.91142c57.js";import{C as oe,M as re,v as fe,c as V}from"../chunks/version.c485052c.js";import{s as q}from"../chunks/submit.e95b82fc.js";import{p as ue}from"../chunks/stores.f92a6294.js";function ce(i){const a=se(ue).url.search.split("&").find(l=>l.includes(`${i}=`));if(a)return a.split("=")[1]}function pe(i){let e,t,a=i[6].draw.thanks+"",l,n,s,f,r,c,u=!i[2]&&!i[3]&&F(i),p=i[2]&&Q(i),h=i[3]&&z(i),_=i[2]&&A(i);return{c(){e=v("p"),t=new L(!1),l=C(),u&&u.c(),n=C(),p&&p.c(),s=C(),h&&h.c(),f=C(),_&&_.c(),r=B(),this.h()},l(o){e=k(o,"P",{});var m=$(e);t=M(m,!1),m.forEach(d),l=N(o),u&&u.l(o),n=N(o),p&&p.l(o),s=N(o),h&&h.l(o),f=N(o),_&&_.l(o),r=B(),this.h()},h(){t.a=null},m(o,m){g(o,e,m),t.m(a,e),g(o,l,m),u&&u.m(o,m),g(o,n,m),p&&p.m(o,m),g(o,s,m),h&&h.m(o,m),g(o,f,m),_&&_.m(o,m),g(o,r,m),c=!0},p(o,m){!o[2]&&!o[3]?u?u.p(o,m):(u=F(o),u.c(),u.m(n.parentNode,n)):u&&(u.d(1),u=null),o[2]?p?p.p(o,m):(p=Q(o),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null),o[3]?h?h.p(o,m):(h=z(o),h.c(),h.m(f.parentNode,f)):h&&(h.d(1),h=null),o[2]?_?(_.p(o,m),m&4&&w(_,1)):(_=A(o),_.c(),w(_,1),_.m(r.parentNode,r)):_&&(Z(),y(_,1,1,()=>{_=null}),x())},i(o){c||(w(_),c=!0)},o(o){y(_),c=!1},d(o){o&&(d(e),d(l),d(n),d(s),d(f),d(r)),u&&u.d(o),p&&p.d(o),h&&h.d(o),_&&_.d(o)}}}function _e(i){let e,t,a=i[6].draw.done+"";return{c(){e=v("p"),t=new L(!1),this.h()},l(l){e=k(l,"P",{});var n=$(e);t=M(n,!1),n.forEach(d),this.h()},h(){t.a=null},m(l,n){g(l,e,n),t.m(a,e)},p:S,i:S,o:S,d(l){l&&d(e)}}}function F(i){let e,t=i[0]?"Loading...":"Start",a,l,n;return{c(){e=v("button"),a=P(t),this.h()},l(s){e=k(s,"BUTTON",{});var f=$(e);a=O(f,t),f.forEach(d),this.h()},h(){e.disabled=i[0]},m(s,f){g(s,e,f),E(e,a),l||(n=K(e,"click",i[7]),l=!0)},p(s,f){f&1&&t!==(t=s[0]?"Loading...":"Start")&&R(a,t),f&1&&(e.disabled=s[0])},d(s){s&&d(e),l=!1,n()}}}function Q(i){let e,t,a=i[6].draw.task+"",l,n,s,f=i[6].draw.note+"",r;return{c(){e=v("p"),t=new L(!1),l=C(),n=v("em"),s=P("Note: "),r=P(f),this.h()},l(c){e=k(c,"P",{});var u=$(e);t=M(u,!1),l=N(u),n=k(u,"EM",{});var p=$(n);s=O(p,"Note: "),r=O(p,f),p.forEach(d),u.forEach(d),this.h()},h(){t.a=l},m(c,u){g(c,e,u),t.m(a,e),E(e,l),E(e,n),E(n,s),E(n,r)},p:S,d(c){c&&d(e)}}}function z(i){let e,t;return{c(){e=v("p"),t=P(i[3]),this.h()},l(a){e=k(a,"P",{class:!0});var l=$(e);t=O(l,i[3]),l.forEach(d),this.h()},h(){W(e,"class","error")},m(a,l){g(a,e,l),E(e,t)},p(a,l){l&8&&R(t,a[3])},d(a){a&&d(e)}}}function A(i){let e,t,a;function l(s){i[11](s)}let n={preset:i[2],$$slots:{ui:[me]},$$scope:{ctx:i}};return i[1]!==void 0&&(n.path=i[1]),e=new oe({props:n}),i[10](e),J.push(()=>ie(e,"path",l)),e.$on("validate",i[9]),{c(){j(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,f){H(e,s,f),a=!0},p(s,f){const r={};f&4&&(r.preset=s[2]),f&16384&&(r.$$scope={dirty:f,ctx:s}),!t&&f&2&&(t=!0,r.path=s[1],ne(()=>t=!1)),e.$set(r)},i(s){a||(w(e.$$.fragment,s),a=!0)},o(s){y(e.$$.fragment,s),a=!1},d(s){i[10](null),I(e,s)}}}function me(i){let e,t,a="Submit",l,n;return{c(){e=v("div"),t=v("button"),t.textContent=a,this.h()},l(s){e=k(s,"DIV",{slot:!0});var f=$(e);t=k(f,"BUTTON",{"data-svelte-h":!0}),le(t)!=="svelte-16lvxe5"&&(t.textContent=a),f.forEach(d),this.h()},h(){W(e,"slot","ui")},m(s,f){g(s,e,f),E(e,t),l||(n=K(t,"click",i[8]),l=!0)},p:S,d(s){s&&d(e),l=!1,n()}}}function de(i){let e,t,a,l;const n=[_e,pe],s=[];function f(r,c){return r[5]?0:1}return t=f(i),a=s[t]=n[t](i),{c(){e=v("section"),a.c()},l(r){e=k(r,"SECTION",{});var c=$(e);a.l(c),c.forEach(d)},m(r,c){g(r,e,c),s[t].m(e,null),l=!0},p(r,[c]){let u=t;t=f(r),t===u?s[t].p(r,c):(Z(),y(s[u],1,1,()=>{s[u]=null}),x(),a=s[t],a?a.p(r,c):(a=s[t]=n[t](r),a.c()),w(a,1),a.m(e,null))},i(r){l||(w(a),l=!0)},o(r){y(a),l=!1},d(r){r&&d(e),s[t].d()}}}const he="https://pudding.cool/projects/trace-data/drawings";function be(i,e,t){const a=ae("copy");let l,n,s,f,r,c,u;async function p(){l=ce("id"),t(0,n=!0);try{const b=await q("checkin",{shortcode:l});if(b.status===200){const{id:T,prev_shortcode:ee}=b.data,te=await fetch(`${he}/${T}/${ee}.txt`);t(2,f=await te.text())}else b.status===404?t(3,r="Oh no! This turn has expired."):t(3,r=b.message||"Oh no! Something went wrong.")}catch(b){t(3,r=`Error: ${b.message}`)}finally{t(0,n=!1)}}function h(){c.addFrame()}async function _({detail:b}){try{if(b){const T=await q("submit",{shortcode:l,drawing:s});console.log(T),t(5,u=!0)}}catch(T){console.log(T)}}function o(b){J[b?"unshift":"push"](()=>{c=b,t(4,c)})}function m(b){s=b,t(1,s)}return[n,s,f,r,c,u,a,p,h,_,o,m]}class ge extends X{constructor(e){super(),Y(this,e,be,de,G,{})}}function ve(i){let e,t,a,l;return e=new re({props:{title:i[0],description:i[1],url:i[2],keywords:i[3]}}),a=new ge({}),{c(){j(e.$$.fragment),t=C(),j(a.$$.fragment)},l(n){D(e.$$.fragment,n),t=N(n),D(a.$$.fragment,n)},m(n,s){H(e,n,s),g(n,t,s),H(a,n,s),l=!0},p:S,i(n){l||(w(e.$$.fragment,n),w(a.$$.fragment,n),l=!0)},o(n){y(e.$$.fragment,n),y(a.$$.fragment,n),l=!1},d(n){n&&d(t),I(e,n),I(a,n)}}}function ke(i,e,t){let{data:a}=e;fe();const{title:l,description:n,url:s,keywords:f}=V;return U("copy",V),U("data",a.data),i.$$set=r=>{"data"in r&&t(4,a=r.data)},[l,n,s,f,a]}class Ne extends X{constructor(e){super(),Y(this,e,ke,ve,G,{data:4})}}export{Ne as component};
