import{s as g,a as y,c as w,i as P,x as v,d as k,P as m}from"../chunks/scheduler.a009160e.js";import{S as C,i as M,b as p,d as f,m as c,a as u,t as $,e as d}from"../chunks/index.aacbeec2.js";import{M as S,v as b}from"../chunks/version.4af53474.js";import{P as q}from"../chunks/Playground.beca97b1.js";import{c as l}from"../chunks/copy.685b462d.js";function x(n){let a,r,e,o;return a=new S({props:{title:n[0],description:n[1],url:n[2],keywords:n[3]}}),e=new q({}),{c(){p(a.$$.fragment),r=y(),p(e.$$.fragment)},l(t){f(a.$$.fragment,t),r=w(t),f(e.$$.fragment,t)},m(t,s){c(a,t,s),P(t,r,s),c(e,t,s),o=!0},p:v,i(t){o||(u(a.$$.fragment,t),u(e.$$.fragment,t),o=!0)},o(t){$(a.$$.fragment,t),$(e.$$.fragment,t),o=!1},d(t){t&&k(r),d(a,t),d(e,t)}}}function j(n,a,r){let{data:e}=a;b();const{title:o,description:t,url:s,keywords:_}=l;return m("copy",l),m("data",e.data),n.$$set=i=>{"data"in i&&r(4,e=i.data)},[o,t,s,_,e]}class F extends C{constructor(a){super(),M(this,a,j,x,g,{data:4})}}export{F as component};