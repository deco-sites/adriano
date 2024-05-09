/* esm.sh - esbuild bundle(domutils@3.1.0) esnext production */
import{isTag as j,isCDATA as S,isText as I,hasChildren as C,isComment as M}from"/v135/domhandler@5.0.3/esnext/domhandler.mjs";import R from"/v135/dom-serializer@2.0.0/esnext/dom-serializer.mjs";import{ElementType as W}from"/v135/domelementtype@2.3.0/esnext/domelementtype.mjs";function Y(t,n){return R(t,n)}function et(t,n){return C(t)?t.children.map(r=>Y(r,n)).join(""):""}function O(t){return Array.isArray(t)?t.map(O).join(""):j(t)?t.name==="br"?`
`:O(t.children):S(t)?O(t.children):I(t)?t.data:""}function g(t){return Array.isArray(t)?t.map(g).join(""):C(t)&&!M(t)?g(t.children):I(t)?t.data:""}function A(t){return Array.isArray(t)?t.map(A).join(""):C(t)&&(t.type===W.Tag||S(t))?A(t.children):I(t)?t.data:""}import{isTag as _,hasChildren as B}from"/v135/domhandler@5.0.3/esnext/domhandler.mjs";function P(t){return B(t)?t.children:[]}function H(t){return t.parent||null}function ft(t){let n=H(t);if(n!=null)return P(n);let r=[t],{prev:e,next:i}=t;for(;e!=null;)r.unshift(e),{prev:e}=e;for(;i!=null;)r.push(i),{next:i}=i;return r}function ot(t,n){var r;return(r=t.attribs)===null||r===void 0?void 0:r[n]}function st(t,n){return t.attribs!=null&&Object.prototype.hasOwnProperty.call(t.attribs,n)&&t.attribs[n]!=null}function ct(t){return t.name}function lt(t){let{next:n}=t;for(;n!==null&&!_(n);)({next:n}=n);return n}function at(t){let{prev:n}=t;for(;n!==null&&!_(n);)({prev:n}=n);return n}function m(t){if(t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),t.parent){let n=t.parent.children,r=n.lastIndexOf(t);r>=0&&n.splice(r,1)}t.next=null,t.prev=null,t.parent=null}function ht(t,n){let r=n.prev=t.prev;r&&(r.next=n);let e=n.next=t.next;e&&(e.prev=n);let i=n.parent=t.parent;if(i){let u=i.children;u[u.lastIndexOf(t)]=n,t.parent=null}}function dt(t,n){if(m(n),n.next=null,n.parent=t,t.children.push(n)>1){let r=t.children[t.children.length-2];r.next=n,n.prev=r}else n.prev=null}function xt(t,n){m(n);let{parent:r}=t,e=t.next;if(n.next=e,n.prev=t,t.next=n,n.parent=r,e){if(e.prev=n,r){let i=r.children;i.splice(i.lastIndexOf(e),0,n)}}else r&&r.children.push(n)}function gt(t,n){if(m(n),n.parent=t,n.prev=null,t.children.unshift(n)!==1){let r=t.children[1];r.prev=n,n.next=r}else n.next=null}function mt(t,n){m(n);let{parent:r}=t;if(r){let e=r.children;e.splice(e.indexOf(t),0,n)}t.prev&&(t.prev.next=n),n.parent=r,n.prev=t.prev,n.next=t,t.prev=n}import{isTag as N,hasChildren as K}from"/v135/domhandler@5.0.3/esnext/domhandler.mjs";function b(t,n,r=!0,e=1/0){return V(t,Array.isArray(n)?n:[n],r,e)}function V(t,n,r,e){let i=[],u=[n],o=[0];for(;;){if(o[0]>=u[0].length){if(o.length===1)return i;u.shift(),o.shift();continue}let f=u[0][o[0]++];if(t(f)&&(i.push(f),--e<=0))return i;r&&K(f)&&f.children.length>0&&(o.unshift(0),u.unshift(f.children))}}function Et(t,n){return n.find(t)}function T(t,n,r=!0){let e=null;for(let i=0;i<n.length&&!e;i++){let u=n[i];if(N(u))t(u)?e=u:r&&u.children.length>0&&(e=T(t,u.children,!0));else continue}return e}function q(t,n){return n.some(r=>N(r)&&(t(r)||q(t,r.children)))}function Ot(t,n){let r=[],e=[n],i=[0];for(;;){if(i[0]>=e[0].length){if(e.length===1)return r;e.shift(),i.shift();continue}let u=e[0][i[0]++];N(u)&&(t(u)&&r.push(u),u.children.length>0&&(i.unshift(0),e.unshift(u.children)))}}import{isTag as d,isText as w}from"/v135/domhandler@5.0.3/esnext/domhandler.mjs";var y={tag_name(t){return typeof t=="function"?n=>d(n)&&t(n.name):t==="*"?d:n=>d(n)&&n.name===t},tag_type(t){return typeof t=="function"?n=>t(n.type):n=>n.type===t},tag_contains(t){return typeof t=="function"?n=>w(n)&&t(n.data):n=>w(n)&&n.data===t}};function L(t,n){return typeof n=="function"?r=>d(r)&&n(r.attribs[t]):r=>d(r)&&r.attribs[t]===n}function z(t,n){return r=>t(r)||n(r)}function k(t){let n=Object.keys(t).map(r=>{let e=t[r];return Object.prototype.hasOwnProperty.call(y,r)?y[r](e):L(r,e)});return n.length===0?null:n.reduce(z)}function Tt(t,n){let r=k(t);return r?r(n):!0}function vt(t,n,r,e=1/0){let i=k(t);return i?b(i,n,r,e):[]}function Dt(t,n,r=!0){return Array.isArray(n)||(n=[n]),T(L("id",t),n,r)}function h(t,n,r=!0,e=1/0){return b(y.tag_name(t),n,r,e)}function At(t,n,r=!0,e=1/0){return b(y.tag_type(t),n,r,e)}import{hasChildren as F}from"/v135/domhandler@5.0.3/esnext/domhandler.mjs";function wt(t){let n=t.length;for(;--n>=0;){let r=t[n];if(n>0&&t.lastIndexOf(r,n-1)>=0){t.splice(n,1);continue}for(let e=r.parent;e;e=e.parent)if(t.includes(e)){t.splice(n,1);break}}return t}var a;(function(t){t[t.DISCONNECTED=1]="DISCONNECTED",t[t.PRECEDING=2]="PRECEDING",t[t.FOLLOWING=4]="FOLLOWING",t[t.CONTAINS=8]="CONTAINS",t[t.CONTAINED_BY=16]="CONTAINED_BY"})(a||(a={}));function J(t,n){let r=[],e=[];if(t===n)return 0;let i=F(t)?t:t.parent;for(;i;)r.unshift(i),i=i.parent;for(i=F(n)?n:n.parent;i;)e.unshift(i),i=i.parent;let u=Math.min(r.length,e.length),o=0;for(;o<u&&r[o]===e[o];)o++;if(o===0)return a.DISCONNECTED;let f=r[o-1],s=f.children,l=r[o],x=e[o];return s.indexOf(l)>s.indexOf(x)?f===n?a.FOLLOWING|a.CONTAINED_BY:a.FOLLOWING:f===t?a.PRECEDING|a.CONTAINS:a.PRECEDING}function Lt(t){return t=t.filter((n,r,e)=>!e.includes(n,r+1)),t.sort((n,r)=>{let e=J(n,r);return e&a.PRECEDING?-1:e&a.FOLLOWING?1:0}),t}function jt(t){let n=E($,t);return n?n.name==="feed"?Q(n):U(n):null}function Q(t){var n;let r=t.children,e={type:"atom",items:h("entry",r).map(o=>{var f;let{children:s}=o,l={media:G(s)};c(l,"id","id",s),c(l,"title","title",s);let x=(f=E("link",s))===null||f===void 0?void 0:f.attribs.href;x&&(l.link=x);let v=p("summary",s)||p("content",s);v&&(l.description=v);let D=p("updated",s);return D&&(l.pubDate=new Date(D)),l})};c(e,"id","id",r),c(e,"title","title",r);let i=(n=E("link",r))===null||n===void 0?void 0:n.attribs.href;i&&(e.link=i),c(e,"description","subtitle",r);let u=p("updated",r);return u&&(e.updated=new Date(u)),c(e,"author","email",r,!0),e}function U(t){var n,r;let e=(r=(n=E("channel",t.children))===null||n===void 0?void 0:n.children)!==null&&r!==void 0?r:[],i={type:t.name.substr(0,3),id:"",items:h("item",t.children).map(o=>{let{children:f}=o,s={media:G(f)};c(s,"id","guid",f),c(s,"title","title",f),c(s,"link","link",f),c(s,"description","description",f);let l=p("pubDate",f)||p("dc:date",f);return l&&(s.pubDate=new Date(l)),s})};c(i,"title","title",e),c(i,"link","link",e),c(i,"description","description",e);let u=p("lastBuildDate",e);return u&&(i.updated=new Date(u)),c(i,"author","managingEditor",e,!0),i}var X=["url","type","lang"],Z=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"];function G(t){return h("media:content",t).map(n=>{let{attribs:r}=n,e={medium:r.medium,isDefault:!!r.isDefault};for(let i of X)r[i]&&(e[i]=r[i]);for(let i of Z)r[i]&&(e[i]=parseInt(r[i],10));return r.expression&&(e.expression=r.expression),e})}function E(t,n){return h(t,n,!0,1)[0]}function p(t,n,r=!1){return g(h(t,n,r,1)).trim()}function c(t,n,r,e,i=!1){let u=p(r,e,i);u&&(t[n]=u)}function $(t){return t==="rss"||t==="feed"||t==="rdf:RDF"}import{isTag as zt,isCDATA as Jt,isText as Qt,isComment as Ut,isDocument as Xt,hasChildren as Zt}from"/v135/domhandler@5.0.3/esnext/domhandler.mjs";export{a as DocumentPosition,xt as append,dt as appendChild,J as compareDocumentPosition,q as existsOne,b as filter,V as find,Ot as findAll,T as findOne,Et as findOneChild,ot as getAttributeValue,P as getChildren,Dt as getElementById,vt as getElements,h as getElementsByTagName,At as getElementsByTagType,jt as getFeed,et as getInnerHTML,ct as getName,Y as getOuterHTML,H as getParent,ft as getSiblings,O as getText,st as hasAttrib,Zt as hasChildren,A as innerText,Jt as isCDATA,Ut as isComment,Xt as isDocument,zt as isTag,Qt as isText,lt as nextElementSibling,mt as prepend,gt as prependChild,at as prevElementSibling,m as removeElement,wt as removeSubsets,ht as replaceElement,Tt as testElement,g as textContent,Lt as uniqueSort};
//# sourceMappingURL=domutils.mjs.map