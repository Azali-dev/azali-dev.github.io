var On=Array.isArray,Vt=Array.prototype.indexOf,Sn=Array.from,Nn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Gt=Object.getOwnPropertyDescriptors,Cn=Object.prototype,Pn=Array.prototype,Kt=Object.getPrototypeOf;const bn=()=>{};function Fn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,wt=4,W=8,st=16,R=32,P=64,B=128,E=256,U=512,d=1024,I=2048,b=4096,C=8192,X=16384,Zt=32768,yt=65536,Mn=1<<17,$t=1<<19,gt=1<<20,ct=Symbol("$state"),Ln=Symbol("legacy props");function Tt(t){return t===this.v}function zt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!zt(t,this.v)}function Wt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Jt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Qt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function qn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Yn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function tn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function nn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function Bn(){J=!0}const Un=1,Vn=2,Gn=4,Kn=8,Zn=16,$n=1,zn=2,Wn=4,Xn=8,Jn=16,Qn=1,tr=2,rn="[",en="[!",ln="]",At={},nr=Symbol();function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function vt(t){i=t}function rr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(i.l={s:null,u:null,r1:[],r2:ut(!1)})}function er(t){const n=i;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];Z(l.effect),K(l.reaction),Ct(l.fn)}}finally{Z(r),K(e)}}i=n.p,n.m=!0}return{}}function Q(){return!J||i!==null&&i.l===null}function ut(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function lr(t){return an(ut(t))}function ar(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),J&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function an(t){return u!==null&&!w&&(u.f&y)!==0&&(m===null?wn([t]):m.push(t)),t}function sr(t,n){return u!==null&&!w&&Q()&&(u.f&(y|st))!==0&&(m===null||!m.includes(t))&&nn(),sn(t,n)}function sn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=jt(),Rt(t,I),Q()&&o!==null&&(o.f&d)!==0&&(o.f&(R|P))===0&&(x===null?yn([t]):x.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),a=r.length,l=0;l<a;l++){var s=r[l],f=s.f;(f&I)===0&&(!e&&s===o||(A(s,n),(f&(d|E))!==0&&((f&y)!==0?Rt(s,b):nt(s))))}}let O=!1;function ur(t){O=t}let g;function L(t){if(t===null)throw xt(),At;return g=t}function or(){return L(N(g))}function fr(t){if(O){if(N(g)!==null)throw xt(),At;g=t}}function ir(t=1){if(O){for(var n=t,r=g;n--;)r=N(r);g=r}}function _r(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===ln){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=N(n);n.remove(),n=e}}var pt,un,Dt,It;function cr(){if(pt===void 0){pt=window,un=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Dt=_t(n,"firstChild").get,It=_t(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function N(t){return It.call(t)}function vr(t,n){if(!O)return et(t);var r=et(g);if(r===null)r=g.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),L(e),e}return L(r),r}function pr(t,n){if(!O){var r=et(t);return r instanceof Comment&&r.data===""?N(r):r}return g}function hr(t,n=1,r=!1){let e=O?g:t;for(var a;n--;)a=e,e=N(e);if(!O)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=rt();return e===null?a==null||a.after(s):e.before(s),L(s),s}return L(e),e}function dr(t){t.textContent=""}function kt(t){var n=y|I,r=u!==null&&(u.f&y)!==0?u:null;return o===null||r!==null&&(r.f&E)!==0?n|=E:o.f|=gt,{ctx:i,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function Er(t){const n=kt(t);return n.equals=mt,n}function Ot(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)S(n[r])}}function on(t){for(var n=t.parent;n!==null;){if((n.f&y)===0)return n;n=n.parent}return null}function fn(t){var n,r=o;Z(on(t));try{Ot(t),n=Bt(t)}finally{Z(r)}return n}function St(t){var n=fn(t),r=(D||(t.f&E)!==0)&&t.deps!==null?b:d;A(t,r),t.equals(n)||(t.v=n,t.wv=jt())}function Nt(t){o===null&&u===null&&Jt(),u!==null&&(u.f&E)!==0&&o===null&&Xt(),ot&&Wt()}function _n(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var a=o,l={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ft(l),l.f|=Zt}catch(_){throw S(l),_}else n!==null&&nt(l);var s=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(gt|B))===0;if(!s&&e&&(a!==null&&_n(l,a),u!==null&&(u.f&y)!==0)){var f=u;(f.effects??(f.effects=[])).push(l)}return l}function wr(t){const n=F(W,null,!1);return A(n,d),n.teardown=t,n}function yr(t){Nt();var n=o!==null&&(o.f&R)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Ct(t);return e}}function gr(t){return Nt(),cn(t)}function Tr(t){const n=F(P,t,!0);return(r={})=>new Promise(e=>{r.outro?hn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Ct(t){return F(wt,t,!1)}function cn(t){return F(W,t,!0)}function mr(t,n=[],r=kt){const e=n.map(r);return vn(()=>t(...e.map(In)))}function vn(t,n=0){return F(W|st|n,t,!0)}function Ar(t,n=!0){return F(W|R,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ot,e=u;dt(!0),K(null);try{n.call(null)}finally{dt(r),K(e)}}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&P)!==0?r.parent=null:S(r,n),r=e}}function pn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&R)===0&&S(n),n=r}}function S(t,n=!0){var r=!1;if((n||(t.f&$t)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:N(e);e.remove(),e=l}r=!0}bt(t,n&&!r),z(t,0),A(t,X);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Pt(t);var f=t.parent;f!==null&&f.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function hn(t,n){var r=[];Mt(t,r,!0),dn(r,()=>{S(t),n&&n()})}function dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Mt(t,n,r){if((t.f&C)===0){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&yt)!==0||(e.f&R)!==0;Mt(e,n,l?r:!1),e=a}}}function xr(t){Lt(t,!0)}function Lt(t,n){if((t.f&C)!==0){t.f^=C,(t.f&d)===0&&(t.f^=d),Y(t)&&(A(t,I),nt(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&yt)!==0||(r.f&R)!==0;Lt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let q=[],lt=[];function qt(){var t=q;q=[],Et(t)}function En(){var t=lt;lt=[],Et(t)}function Rr(t){q.length===0&&queueMicrotask(qt),q.push(t)}function ht(){q.length>0&&qt(),lt.length>0&&En()}let H=!1,V=!1,G=null,k=!1,ot=!1;function dt(t){ot=t}let M=[];let u=null,w=!1;function K(t){u=t}let o=null;function Z(t){o=t}let m=null;function wn(t){m=t}let c=null,h=0,x=null;function yn(t){x=t}let Yt=1,$=0,D=!1;function jt(){return++Yt}function Y(t){var v;var n=t.f;if((n&I)!==0)return!0;if((n&b)!==0){var r=t.deps,e=(n&E)!==0;if(r!==null){var a,l,s=(n&U)!==0,f=e&&o!==null&&!D,_=r.length;if(s||f){var T=t,j=T.parent;for(a=0;a<_;a++)l=r[a],(s||!((v=l==null?void 0:l.reactions)!=null&&v.includes(T)))&&(l.reactions??(l.reactions=[])).push(T);s&&(T.f^=U),f&&j!==null&&(j.f&E)===0&&(T.f^=E)}for(a=0;a<_;a++)if(l=r[a],Y(l)&&St(l),l.wv>t.wv)return!0}(!e||o!==null&&!D)&&A(t,d)}return!1}function gn(t,n){for(var r=n;r!==null;){if((r.f&B)!==0)try{r.fn(t);return}catch{r.f^=B}r=r.parent}throw H=!1,t}function Tn(t){return(t.f&X)===0&&(t.parent===null||(t.parent.f&B)===0)}function tt(t,n,r,e){if(H){if(r===null&&(H=!1),Tn(n))throw t;return}r!==null&&(H=!0);{gn(t,n);return}}function Ht(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];(l.f&y)!==0?Ht(l,n,!1):n===l&&(r?A(l,I):(l.f&d)!==0&&A(l,b),nt(l))}}function Bt(t){var it;var n=c,r=h,e=x,a=u,l=D,s=m,f=i,_=w,T=t.f;c=null,h=0,x=null,D=(T&E)!==0&&(w||!k||u===null),u=(T&(R|P))===0?t:null,m=null,vt(t.ctx),w=!1,$++;try{var j=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(z(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!D)for(p=h;p<v.length;p++)((it=v[p]).reactions??(it.reactions=[])).push(t)}else v!==null&&h<v.length&&(z(t,h),v.length=h);if(Q()&&x!==null&&!w&&v!==null&&(t.f&(y|b|I))===0)for(p=0;p<x.length;p++)Ht(x[p],t);return a!==null&&$++,j}finally{c=n,h=r,x=e,u=a,D=l,m=s,vt(f),w=_}}function mn(t,n){let r=n.reactions;if(r!==null){var e=Vt.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&(n.f&y)!==0&&(c===null||!c.includes(n))&&(A(n,b),(n.f&(E|U))===0&&(n.f^=U),Ot(n),z(n,0))}function z(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)mn(t,r[e])}function ft(t){var n=t.f;if((n&X)===0){A(t,d);var r=o,e=i,a=k;o=t,k=!0;try{(n&st)!==0?pn(t):bt(t),Pt(t);var l=Bt(t);t.teardown=typeof l=="function"?l:null,t.wv=Yt;var s=t.deps,f}catch(_){tt(_,t,r,e||t.ctx)}finally{k=a,o=r}}}function An(){try{Qt()}catch(t){if(G!==null)tt(t,G,null);else throw t}}function Ut(){var t=k;try{var n=0;for(k=!0;M.length>0;){n++>1e3&&An();var r=M,e=r.length;M=[];for(var a=0;a<e;a++){var l=Rn(r[a]);xn(l)}}}finally{V=!1,k=t,G=null}}function xn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(X|C))===0)try{Y(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(a){tt(a,e,null,e.ctx)}}}function nt(t){V||(V=!0,queueMicrotask(Ut));for(var n=G=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(P|R))!==0){if((r&d)===0)return;n.f^=d}}M.push(n)}function Rn(t){for(var n=[],r=t;r!==null;){var e=r.f,a=(e&(R|P))!==0,l=a&&(e&d)!==0;if(!l&&(e&C)===0){if((e&wt)!==0)n.push(r);else if(a)r.f^=d;else{var s=u;try{u=r,Y(r)&&ft(r)}catch(T){tt(T,r,null,r.ctx)}finally{u=s}}var f=r.first;if(f!==null){r=f;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Dn(t){var n;for(ht();M.length>0;)V=!0,Ut(),ht();return n}async function Dr(){await Promise.resolve(),Dn()}function In(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!w){m!==null&&m.includes(t)&&tn();var e=u.deps;t.rv<$&&(t.rv=$,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!D||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&E)===0&&(a.f^=E)}return r&&(a=t,Y(a)&&St(a)),t.v}function Ir(t){var n=w;try{return w=!0,t()}finally{w=n}}const kn=-7169;function A(t,n){t.f=t.f&kn|n}function kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=Kt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Gt(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{At as $,o as A,jn as B,Kt as C,On as D,Yn as E,Er as F,mt as G,ar as H,Xn as I,Ln as J,Jn as K,Mn as L,zn as M,$n as N,K as O,Wn as P,Z as Q,u as R,ct as S,Nn as T,nr as U,wr as V,Rr as W,cr as X,et as Y,rn as Z,N as _,Ir as a,ur as a0,L as a1,or as a2,g as a3,ln as a4,xt as a5,qn as a6,dr as a7,Sn as a8,Tr as a9,Zn as aA,ir as aB,rt as aa,Ar as ab,O as ac,un as ad,Qn as ae,tr as af,vn as ag,yt as ah,en as ai,_r as aj,xr as ak,hn as al,Ct as am,cn as an,Dn as ao,lr as ap,Dr as aq,S as ar,Gn as as,C as at,Un as au,sn as av,Vn as aw,Kn as ax,Mt as ay,dn as az,gr as b,i as c,Fn as d,kr as e,kt as f,In as g,Bn as h,pr as i,er as j,vr as k,J as l,fr as m,bn as n,hr as o,rr as p,Cn as q,Et as r,zt as s,mr as t,yr as u,Pn as v,ut as w,Hn as x,sr as y,_t as z};
