import{m as j,q as D,r as x,i as F,s as q,x as z,y as b,z as N,A as Y,B as $,C as G,D as J,E as K}from"./entry.81e2d55d.js";function T(r){var i;const l=b(r);return(i=l==null?void 0:l.$el)!=null?i:l}const I=N?window:void 0;function w(...r){let i,l,n,E;if(typeof r[0]=="string"||Array.isArray(r[0])?([l,n,E]=r,i=I):[i,l,n,E]=r,!i)return D;Array.isArray(l)||(l=[l]),Array.isArray(n)||(n=[n]);const y=[],d=()=>{y.forEach(s=>s()),y.length=0},m=(s,a,t,o)=>(s.addEventListener(a,t,o),()=>s.removeEventListener(a,t,o)),A=Y(()=>[T(i),b(E)],([s,a])=>{if(d(),!s)return;const t=J(a)?{...a}:a;y.push(...l.flatMap(o=>n.map(c=>m(s,o,c,t))))},{immediate:!0,flush:"post"}),f=()=>{A(),d()};return $(f),f}let B=!1;function U(r,i,l={}){const{window:n=I,ignore:E=[],capture:y=!0,detectIframe:d=!1}=l;if(!n)return;j&&!B&&(B=!0,Array.from(n.document.body.children).forEach(t=>t.addEventListener("click",D)),n.document.documentElement.addEventListener("click",D));let m=!0;const A=t=>E.some(o=>{if(typeof o=="string")return Array.from(n.document.querySelectorAll(o)).some(c=>c===t.target||t.composedPath().includes(c));{const c=T(o);return c&&(t.target===c||t.composedPath().includes(c))}}),s=[w(n,"click",t=>{const o=T(r);if(!(!o||o===t.target||t.composedPath().includes(o))){if(t.detail===0&&(m=!A(t)),!m){m=!0;return}i(t)}},{passive:!0,capture:y}),w(n,"pointerdown",t=>{const o=T(r);m=!A(t)&&!!(o&&!t.composedPath().includes(o))},{passive:!0}),d&&w(n,"blur",t=>{setTimeout(()=>{var o;const c=T(r);((o=n.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(c!=null&&c.contains(n.document.activeElement))&&i(t)},0)})].filter(Boolean);return()=>s.forEach(t=>t())}const V=1;function Z(r,i={}){const{throttle:l=0,idle:n=200,onStop:E=D,onScroll:y=D,offset:d={left:0,right:0,top:0,bottom:0},eventListenerOptions:m={capture:!1,passive:!0},behavior:A="auto",window:f=I}=i,s=x(0),a=x(0),t=F({get(){return s.value},set(e){c(e,void 0)}}),o=F({get(){return a.value},set(e){c(void 0,e)}});function c(e,g){var u,_,L;if(!f)return;const h=b(r);h&&((L=h instanceof Document?f.document.body:h)==null||L.scrollTo({top:(u=b(g))!=null?u:o.value,left:(_=b(e))!=null?_:t.value,behavior:b(A)}))}const O=x(!1),p=q({left:!0,right:!1,top:!0,bottom:!1}),v=q({left:!1,right:!1,top:!1,bottom:!1}),k=e=>{O.value&&(O.value=!1,v.left=!1,v.right=!1,v.top=!1,v.bottom=!1,E(e))},X=K(k,l+n),M=e=>{var g;if(!f)return;const u=e.document?e.document.documentElement:(g=e.documentElement)!=null?g:e,{display:_,flexDirection:L}=getComputedStyle(u),h=u.scrollLeft;v.left=h<s.value,v.right=h>s.value;const H=Math.abs(h)<=0+(d.left||0),P=Math.abs(h)+u.clientWidth>=u.scrollWidth-(d.right||0)-V;_==="flex"&&L==="row-reverse"?(p.left=P,p.right=H):(p.left=H,p.right=P),s.value=h;let S=u.scrollTop;e===f.document&&!S&&(S=f.document.body.scrollTop),v.top=S<a.value,v.bottom=S>a.value;const W=Math.abs(S)<=0+(d.top||0),R=Math.abs(S)+u.clientHeight>=u.scrollHeight-(d.bottom||0)-V;_==="flex"&&L==="column-reverse"?(p.top=R,p.bottom=W):(p.top=W,p.bottom=R),a.value=S},C=e=>{var g;if(!f)return;const u=(g=e.target.documentElement)!=null?g:e.target;M(u),O.value=!0,X(e),y(e)};return w(r,"scroll",l?G(C,l,!0,!1):C,m),z(()=>{const e=b(r);e&&M(e)}),w(r,"scrollend",k,m),{x:t,y:o,isScrolling:O,arrivedState:p,directions:v,measure(){const e=b(r);f&&e&&M(e)}}}export{U as o,Z as u};
