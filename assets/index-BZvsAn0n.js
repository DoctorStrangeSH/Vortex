(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var rs,le,Tu,Nt,Kl,bu,Au,to,Ii,mr,Ru,Ho,vo,Eo,Oi={},Mi=[],Df=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,is=Array.isArray;function pt(n,e){for(var t in e)n[t]=e[t];return n}function Go(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Nf(n,e,t){var r,i,s,a={};for(s in e)s=="key"?r=e[s]:s=="ref"?i=e[s]:a[s]=e[s];if(arguments.length>2&&(a.children=arguments.length>3?rs.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(s in n.defaultProps)a[s]===void 0&&(a[s]=n.defaultProps[s]);return Ti(n,a,r,i,null)}function Ti(n,e,t,r,i){var s={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Tu,__i:-1,__u:0};return i==null&&le.vnode!=null&&le.vnode(s),s}function Ke(n){return n.children}function bi(n,e){this.props=n,this.context=e}function Nn(n,e){if(e==null)return n.__?Nn(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Nn(n):null}function Vf(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,r=[],i=[],s=pt({},e);s.__v=e.__v+1,le.vnode&&le.vnode(s),Qo(n.__P,s,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,r,t??Nn(e),!!(32&e.__u),i),s.__v=e.__v,s.__.__k[s.__i]=s,xu(r,s,i),e.__e=e.__=null,s.__e!=t&&Su(s)}}function Su(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Su(n)}function Hl(n){(!n.__d&&(n.__d=!0)&&Nt.push(n)&&!Li.__r++||Kl!=le.debounceRendering)&&((Kl=le.debounceRendering)||bu)(Li)}function Li(){try{for(var n,e=1;Nt.length;)Nt.length>e&&Nt.sort(Au),n=Nt.shift(),e=Nt.length,Vf(n)}finally{Nt.length=Li.__r=0}}function Cu(n,e,t,r,i,s,a,l,u,h,f){var v,m,I,C,x,P,N,O=r&&r.__k||Mi,F=e.length;for(u=Of(t,e,O,u,F),v=0;v<F;v++)(I=t.__k[v])!=null&&(m=I.__i!=-1&&O[I.__i]||Oi,I.__i=v,P=Qo(n,I,m,i,s,a,l,u,h,f),C=I.__e,I.ref&&m.ref!=I.ref&&(m.ref&&Yo(m.ref,null,I),f.push(I.ref,I.__c||C,I)),x==null&&C!=null&&(x=C),(N=!!(4&I.__u))||m.__k===I.__k?(u=Pu(I,u,n,N),N&&m.__e&&(m.__e=null)):typeof I.type=="function"&&P!==void 0?u=P:C&&(u=C.nextSibling),I.__u&=-7);return t.__e=x,u}function Of(n,e,t,r,i){var s,a,l,u,h,f=t.length,v=f,m=0;for(n.__k=new Array(i),s=0;s<i;s++)(a=e[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[s]=Ti(null,a,null,null,null):is(a)?a=n.__k[s]=Ti(Ke,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[s]=Ti(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[s]=a,u=s+m,a.__=n,a.__b=n.__b+1,l=null,(h=a.__i=Mf(a,t,u,v))!=-1&&(v--,(l=t[h])&&(l.__u|=2)),l==null||l.__v==null?(h==-1&&(i>f?m--:i<f&&m++),typeof a.type!="function"&&(a.__u|=4)):h!=u&&(h==u-1?m--:h==u+1?m++:(h>u?m--:m++,a.__u|=4))):n.__k[s]=null;if(v)for(s=0;s<f;s++)(l=t[s])!=null&&!(2&l.__u)&&(l.__e==r&&(r=Nn(l)),Nu(l,l));return r}function Pu(n,e,t,r){var i,s;if(typeof n.type=="function"){for(i=n.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=n,e=Pu(i[s],e,t,r));return e}n.__e!=e&&(r&&(e&&n.type&&!e.parentNode&&(e=Nn(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Mf(n,e,t,r){var i,s,a,l=n.key,u=n.type,h=e[t],f=h!=null&&(2&h.__u)==0;if(h===null&&l==null||f&&l==h.key&&u==h.type)return t;if(r>(f?1:0)){for(i=t-1,s=t+1;i>=0||s<e.length;)if((h=e[a=i>=0?i--:s++])!=null&&!(2&h.__u)&&l==h.key&&u==h.type)return a}return-1}function Gl(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Df.test(e)?t:t+"px"}function gi(n,e,t,r,i){var s,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||Gl(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||Gl(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")s=e!=(e=e.replace(Ru,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+s]=t,t?r?t[mr]=r[mr]:(t[mr]=Ho,n.addEventListener(e,s?Eo:vo,s)):n.removeEventListener(e,s?Eo:vo,s);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Ql(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[Ii]==null)e[Ii]=Ho++;else if(e[Ii]<t[mr])return;return t(le.event?le.event(e):e)}}}function Qo(n,e,t,r,i,s,a,l,u,h){var f,v,m,I,C,x,P,N,O,F,H,K,Y,b,y,g,E=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),s=[l=e.__e=t.__e]),(f=le.__b)&&f(e);e:if(typeof E=="function"){v=a.length;try{if(O=e.props,F=E.prototype&&E.prototype.render,H=(f=E.contextType)&&r[f.__c],K=f?H?H.props.value:f.__:r,t.__c?N=(m=e.__c=t.__c).__=m.__E:(F?e.__c=m=new E(O,K):(e.__c=m=new bi(O,K),m.constructor=E,m.render=Uf),H&&H.sub(m),m.state||(m.state={}),m.__n=r,I=m.__d=!0,m.__h=[],m._sb=[]),F&&m.__s==null&&(m.__s=m.state),F&&E.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=pt({},m.__s)),pt(m.__s,E.getDerivedStateFromProps(O,m.__s))),C=m.props,x=m.state,m.__v=e,I)F&&E.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),F&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if(F&&E.getDerivedStateFromProps==null&&O!==C&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(O,K),e.__v==t.__v||!m.__e&&m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(O,m.__s,K)===!1){e.__v!=t.__v&&(m.props=O,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(T){T&&(T.__=e)}),Mi.push.apply(m.__h,m._sb),m._sb=[],m.__h.length&&a.push(m);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(O,m.__s,K),F&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(C,x,P)})}if(m.context=K,m.props=O,m.__P=n,m.__e=!1,Y=le.__r,b=0,F)m.state=m.__s,m.__d=!1,Y&&Y(e),f=m.render(m.props,m.state,m.context),Mi.push.apply(m.__h,m._sb),m._sb=[];else do m.__d=!1,Y&&Y(e),f=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++b<25);m.state=m.__s,m.getChildContext!=null&&(r=pt(pt({},r),m.getChildContext())),F&&!I&&m.getSnapshotBeforeUpdate!=null&&(P=m.getSnapshotBeforeUpdate(C,x)),y=f!=null&&f.type===Ke&&f.key==null?Du(f.props.children):f,l=Cu(n,is(y)?y:[y],e,t,r,i,s,a,l,u,h),m.base=e.__e,e.__u&=-161,m.__h.length&&a.push(m),N&&(m.__E=m.__=null)}catch(T){if(a.length=v,e.__v=null,u||s!=null){if(T.then){for(e.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;s!=null&&(s[s.indexOf(l)]=null),e.__e=l}else if(s!=null)for(g=s.length;g--;)Go(s[g])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),T.then||ku(e),le.__e(T,e,t)}}else s==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):l=e.__e=Lf(t.__e,e,t,r,i,s,a,u,h);return(f=le.diffed)&&f(e),128&e.__u?void 0:l}function ku(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(ku))}function xu(n,e,t){for(var r=0;r<t.length;r++)Yo(t[r],t[++r],t[++r]);le.__c&&le.__c(e,n),n.some(function(i){try{n=i.__h,i.__h=[],n.some(function(s){s.call(i)})}catch(s){le.__e(s,i.__v)}})}function Du(n){return typeof n!="object"||n==null||n.__b>0?n:is(n)?n.map(Du):n.constructor!==void 0?null:pt({},n)}function Lf(n,e,t,r,i,s,a,l,u){var h,f,v,m,I,C,x,P=t.props||Oi,N=e.props,O=e.type;if(O=="svg"?i="http://www.w3.org/2000/svg":O=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),s!=null){for(h=0;h<s.length;h++)if((I=s[h])&&"setAttribute"in I==!!O&&(O?I.localName==O:I.nodeType==3)){n=I,s[h]=null;break}}if(n==null){if(O==null)return document.createTextNode(N);n=document.createElementNS(i,O,N.is&&N),l&&(le.__m&&le.__m(e,s),l=!1),s=null}if(O==null)P===N||l&&n.data==N||(n.data=N);else{if(s=O=="textarea"&&N.defaultValue!=null?null:s&&rs.call(n.childNodes),!l&&s!=null)for(P={},h=0;h<n.attributes.length;h++)P[(I=n.attributes[h]).name]=I.value;for(h in P)I=P[h],h=="dangerouslySetInnerHTML"?v=I:h=="children"||h in N||h=="value"&&"defaultValue"in N||h=="checked"&&"defaultChecked"in N||gi(n,h,null,I,i);for(h in N)I=N[h],h=="children"?m=I:h=="dangerouslySetInnerHTML"?f=I:h=="value"?C=I:h=="checked"?x=I:l&&typeof I!="function"||P[h]===I||gi(n,h,I,P[h],i);if(f)l||v&&(f.__html==v.__html||f.__html==n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(v&&(n.innerHTML=""),Cu(e.type=="template"?n.content:n,is(m)?m:[m],e,t,r,O=="foreignObject"?"http://www.w3.org/1999/xhtml":i,s,a,s?s[0]:t.__k&&Nn(t,0),l,u),s!=null)for(h=s.length;h--;)Go(s[h]);l&&O!="textarea"||(h="value",O=="progress"&&C==null?n.removeAttribute("value"):C!=null&&(C!==n[h]||O=="progress"&&!C||O=="option"&&C!=P[h])&&gi(n,h,C,P[h],i),h="checked",x!=null&&x!=n[h]&&gi(n,h,x,P[h],i))}return n}function Yo(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(i){le.__e(i,t)}}function Nu(n,e,t){var r,i;if(le.unmount&&le.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||Yo(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){le.__e(s,e)}r.base=r.__P=r.__n=null}if(r=n.__k)for(i=0;i<r.length;i++)r[i]&&Nu(r[i],e,t||typeof n.type!="function");t||Go(n.__e),n.__c=n.__=n.__e=void 0}function Uf(n,e,t){return this.constructor(n,t)}function Ff(n,e,t){var r,i,s,a;e==document&&(e=document.documentElement),le.__&&le.__(n,e),i=(r=!1)?null:e.__k,s=[],a=[],Qo(e,n=e.__k=Nf(Ke,null,[n]),i||Oi,Oi,e.namespaceURI,i?null:e.firstChild?rs.call(e.childNodes):null,s,i?i.__e:e.firstChild,r,a),xu(s,n,a),n.props.children=null}rs=Mi.slice,le={__e:function(n,e,t,r){for(var i,s,a;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(n)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(n,r||{}),a=i.__d),a)return i.__E=i}catch(l){n=l}throw n}},Tu=0,bi.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=pt({},this.state),typeof n=="function"&&(n=n(pt({},t),this.props)),n&&pt(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Hl(this))},bi.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Hl(this))},bi.prototype.render=Ke,Nt=[],bu=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Au=function(n,e){return n.__v.__b-e.__v.__b},Li.__r=0,to=Math.random().toString(8),Ii="__d"+to,mr="__a"+to,Ru=/(PointerCapture)$|Capture$/i,Ho=0,vo=Ql(!1),Eo=Ql(!0);var Bf=0;function _(n,e,t,r,i,s){e||(e={});var a,l,u=e;if("ref"in u)for(l in u={},e)l=="ref"?a=e[l]:u[l]=e[l];var h={type:n,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Bf,__i:-1,__u:0,__source:i,__self:s};if(typeof n=="function"&&(a=n.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return le.vnode&&le.vnode(h),h}var Ir,_e,no,Yl,Ui=0,Vu=[],ve=le,Jl=ve.__b,Xl=ve.__r,Zl=ve.diffed,ec=ve.__c,tc=ve.unmount,nc=ve.__;function Jo(n,e){ve.__h&&ve.__h(_e,n,Ui||e),Ui=0;var t=_e.__H||(_e.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function J(n){return Ui=1,jf(Mu,n)}function jf(n,e,t){var r=Jo(Ir++,2);if(r.t=n,!r.__c&&(r.__=[Mu(void 0,e),function(l){var u=r.__N?r.__N[0]:r.__[0],h=r.t(u,l);u!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=_e,!_e.__f)){var i=function(l,u,h){if(!r.__c.__H)return!0;var f=!1,v=r.__c.props!==l;if(r.__c.__H.__.some(function(I){if(I.__N){f=!0;var C=I.__[0];I.__=I.__N,I.__N=void 0,C!==I.__[0]&&(v=!0)}}),s){var m=s.call(this,l,u,h);return f?m||v:m}return!f||v};_e.__f=!0;var s=_e.shouldComponentUpdate,a=_e.componentWillUpdate;_e.componentWillUpdate=function(l,u,h){if(this.__e){var f=s;s=void 0,i(l,u,h),s=f}a&&a.call(this,l,u,h)},_e.shouldComponentUpdate=i}return r.__N||r.__}function Ut(n,e){var t=Jo(Ir++,3);!ve.__s&&Ou(t.__H,e)&&(t.__=n,t.u=e,_e.__H.__h.push(t))}function Tr(n){return Ui=5,zf(function(){return{current:n}},[])}function zf(n,e){var t=Jo(Ir++,7);return Ou(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function qf(){for(var n;n=Vu.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(Ai),e.__h.some(wo),e.__h=[]}catch(t){e.__h=[],ve.__e(t,n.__v)}}}ve.__b=function(n){_e=null,Jl&&Jl(n)},ve.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),nc&&nc(n,e)},ve.__r=function(n){Xl&&Xl(n),Ir=0;var e=(_e=n.__c).__H;e&&(no===_e?(e.__h=[],_e.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(Ai),e.__h.some(wo),e.__h=[],Ir=0)),no=_e},ve.diffed=function(n){Zl&&Zl(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Vu.push(e)!==1&&Yl===ve.requestAnimationFrame||((Yl=ve.requestAnimationFrame)||$f)(qf)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),no=_e=null},ve.__c=function(n,e){e.some(function(t){try{t.__h.some(Ai),t.__h=t.__h.filter(function(r){return!r.__||wo(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],ve.__e(r,t.__v)}}),ec&&ec(n,e)},ve.unmount=function(n){tc&&tc(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(r){try{Ai(r)}catch(i){e=i}}),t.__H=void 0,e&&ve.__e(e,t.__v))};var rc=typeof requestAnimationFrame=="function";function $f(n){var e,t=function(){clearTimeout(r),rc&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);rc&&(e=requestAnimationFrame(t))}function Ai(n){var e=_e,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),_e=e}function wo(n){var e=_e;n.__c=n.__(),_e=e}function Ou(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function Mu(n,e){return typeof e=="function"?e(n):e}var ic={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Wf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Uu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,v=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,I=h&63;u||(I=64,a||(m=64)),r.push(t[f],t[v],t[m],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||v==null)throw new Kf;const m=s<<2|l>>4;if(r.push(m),h!==64){const I=l<<4&240|h>>2;if(r.push(I),v!==64){const C=h<<6&192|v;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hf=function(n){const e=Lu(n);return Uu.encodeByteArray(e,!0)},Fi=function(n){return Hf(n).replace(/\./g,"")},Fu=function(n){try{return Uu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=()=>Gf().__FIREBASE_DEFAULTS__,Yf=()=>{if(typeof process>"u"||typeof ic>"u")return;const n=ic.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Fu(n[1]);return e&&JSON.parse(e)},ss=()=>{try{return Qf()||Yf()||Jf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Bu=n=>{var e,t;return(t=(e=ss())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xf=n=>{const e=Bu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ju=()=>{var n;return(n=ss())===null||n===void 0?void 0:n.config},zu=n=>{var e;return(e=ss())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fi(JSON.stringify(t)),Fi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function np(){var n;const e=(n=ss())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ip(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function op(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ap(){return!np()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lp(){try{return typeof indexedDB=="object"}catch{return!1}}function cp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="FirebaseError";class At extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=up,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nr.prototype.create)}}class Nr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?hp(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new At(i,l,r)}}function hp(n,e){return n.replace(dp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dp=/\{\$([^}]+)}/g;function fp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(sc(s)&&sc(a)){if(!Bi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function sc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ur(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function hr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function pp(n,e){const t=new mp(n,e);return t.subscribe.bind(t)}class mp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");gp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ro),i.error===void 0&&(i.error=ro),i.complete===void 0&&(i.complete=ro);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ro(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n){return n&&n._delegate?n._delegate:n}class an{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Zf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vp(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yp(n){return n===Zt?void 0:n}function vp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _p(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const wp={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Ip=Z.INFO,Tp={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},bp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Tp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xo{constructor(e){this.name=e,this._logLevel=Ip,this._logHandler=bp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Ap=(n,e)=>e.some(t=>n instanceof t);let oc,ac;function Rp(){return oc||(oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sp(){return ac||(ac=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qu=new WeakMap,Io=new WeakMap,$u=new WeakMap,io=new WeakMap,Zo=new WeakMap;function Cp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Bt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&qu.set(t,n)}).catch(()=>{}),Zo.set(e,n),e}function Pp(n){if(Io.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Io.set(n,e)}let To={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Io.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$u.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kp(n){To=n(To)}function xp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(so(this),e,...t);return $u.set(r,e.sort?e.sort():[e]),Bt(r)}:Sp().includes(n)?function(...e){return n.apply(so(this),e),Bt(qu.get(this))}:function(...e){return Bt(n.apply(so(this),e))}}function Dp(n){return typeof n=="function"?xp(n):(n instanceof IDBTransaction&&Pp(n),Ap(n,Rp())?new Proxy(n,To):n)}function Bt(n){if(n instanceof IDBRequest)return Cp(n);if(io.has(n))return io.get(n);const e=Dp(n);return e!==n&&(io.set(n,e),Zo.set(e,n)),e}const so=n=>Zo.get(n);function Np(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=Bt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Bt(a.result),u.oldVersion,u.newVersion,Bt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Vp=["get","getKey","getAll","getAllKeys","count"],Op=["put","add","delete","clear"],oo=new Map;function lc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(oo.get(e))return oo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Op.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Vp.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&u.done]))[0]};return oo.set(e,s),s}kp(n=>({...n,get:(e,t,r)=>lc(e,t)||n.get(e,t,r),has:(e,t)=>!!lc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Lp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bo="@firebase/app",cc="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Xo("@firebase/app"),Up="@firebase/app-compat",Fp="@firebase/analytics-compat",Bp="@firebase/analytics",jp="@firebase/app-check-compat",zp="@firebase/app-check",qp="@firebase/auth",$p="@firebase/auth-compat",Wp="@firebase/database",Kp="@firebase/data-connect",Hp="@firebase/database-compat",Gp="@firebase/functions",Qp="@firebase/functions-compat",Yp="@firebase/installations",Jp="@firebase/installations-compat",Xp="@firebase/messaging",Zp="@firebase/messaging-compat",em="@firebase/performance",tm="@firebase/performance-compat",nm="@firebase/remote-config",rm="@firebase/remote-config-compat",im="@firebase/storage",sm="@firebase/storage-compat",om="@firebase/firestore",am="@firebase/vertexai-preview",lm="@firebase/firestore-compat",cm="firebase",um="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="[DEFAULT]",hm={[bo]:"fire-core",[Up]:"fire-core-compat",[Bp]:"fire-analytics",[Fp]:"fire-analytics-compat",[zp]:"fire-app-check",[jp]:"fire-app-check-compat",[qp]:"fire-auth",[$p]:"fire-auth-compat",[Wp]:"fire-rtdb",[Kp]:"fire-data-connect",[Hp]:"fire-rtdb-compat",[Gp]:"fire-fn",[Qp]:"fire-fn-compat",[Yp]:"fire-iid",[Jp]:"fire-iid-compat",[Xp]:"fire-fcm",[Zp]:"fire-fcm-compat",[em]:"fire-perf",[tm]:"fire-perf-compat",[nm]:"fire-rc",[rm]:"fire-rc-compat",[im]:"fire-gcs",[sm]:"fire-gcs-compat",[om]:"fire-fst",[lm]:"fire-fst-compat",[am]:"fire-vertex","fire-js":"fire-js",[cm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Map,dm=new Map,Ro=new Map;function uc(n,e){try{n.container.addComponent(e)}catch(t){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Vn(n){const e=n.name;if(Ro.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;Ro.set(e,n);for(const t of ji.values())uc(t,n);for(const t of dm.values())uc(t,n);return!0}function ea(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new Nr("app","Firebase",fm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=um;function Wu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ao,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jt.create("bad-app-name",{appName:String(i)});if(t||(t=ju()),!t)throw jt.create("no-options");const s=ji.get(i);if(s){if(Bi(t,s.options)&&Bi(r,s.config))return s;throw jt.create("duplicate-app",{appName:i})}const a=new Ep(i);for(const u of Ro.values())a.addComponent(u);const l=new pm(t,r,a);return ji.set(i,l),l}function Ku(n=Ao){const e=ji.get(n);if(!e&&n===Ao&&ju())return Wu();if(!e)throw jt.create("no-app",{appName:n});return e}function zt(n,e,t){var r;let i=(r=hm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wt.warn(l.join(" "));return}Vn(new an(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="firebase-heartbeat-database",gm=1,br="firebase-heartbeat-store";let ao=null;function Hu(){return ao||(ao=Np(mm,gm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(br)}catch(t){console.warn(t)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),ao}async function _m(n){try{const t=(await Hu()).transaction(br),r=await t.objectStore(br).get(Gu(n));return await t.done,r}catch(e){if(e instanceof At)wt.warn(e.message);else{const t=jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wt.warn(t.message)}}}async function hc(n,e){try{const r=(await Hu()).transaction(br,"readwrite");await r.objectStore(br).put(e,Gu(n)),await r.done}catch(t){if(t instanceof At)wt.warn(t.message);else{const r=jt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wt.warn(r.message)}}}function Gu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=1024,vm=30*24*60*60*1e3;class Em{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Im(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=vm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){wt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dc(),{heartbeatsToSend:r,unsentEntries:i}=wm(this._heartbeatsCache.heartbeats),s=Fi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return wt.warn(t),""}}}function dc(){return new Date().toISOString().substring(0,10)}function wm(n,e=ym){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),fc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),fc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Im{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lp()?cp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await _m(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return hc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return hc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fc(n){return Fi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(n){Vn(new an("platform-logger",e=>new Mp(e),"PRIVATE")),Vn(new an("heartbeat",e=>new Em(e),"PRIVATE")),zt(bo,cc,n),zt(bo,cc,"esm2017"),zt("fire-js","")}Tm("");var bm="firebase",Am="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(bm,Am,"app");function ta(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Qu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rm=Qu,Yu=new Nr("auth","Firebase",Qu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Xo("@firebase/auth");function Sm(n,...e){zi.logLevel<=Z.WARN&&zi.warn(`Auth (${qn}): ${n}`,...e)}function Ri(n,...e){zi.logLevel<=Z.ERROR&&zi.error(`Auth (${qn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,...e){throw na(n,...e)}function nt(n,...e){return na(n,...e)}function Ju(n,e,t){const r=Object.assign(Object.assign({},Rm()),{[e]:t});return new Nr("auth","Firebase",r).create(e,{appName:n.name})}function yt(n){return Ju(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function na(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Yu.create(n,...e)}function z(n,e,...t){if(!n)throw na(e,...t)}function mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ri(e),new Error(e)}function It(n,e){n||mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Cm(){return pc()==="http:"||pc()==="https:"}function pc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cm()||ip()||"connection"in navigator)?navigator.onLine:!0}function km(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t){this.shortDelay=e,this.longDelay=t,It(t>e,"Short delay should be less than long delay!"),this.isMobile=tp()||sp()}get(){return Pm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n,e){It(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new Or(3e4,6e4);function Ht(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Rt(n,e,t,r,i={}){return Zu(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Vr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},s);return rp()||(h.referrerPolicy="no-referrer"),Xu.fetch()(eh(n,n.config.apiHost,t,l),h)})}async function Zu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},xm),e);try{const i=new Vm(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw _i(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _i(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw _i(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw _i(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ju(n,f,h);Je(n,f)}}catch(i){if(i instanceof At)throw i;Je(n,"network-request-failed",{message:String(i)})}}async function Mr(n,e,t,r,i={}){const s=await Rt(n,e,t,r,i);return"mfaPendingCredential"in s&&Je(n,"multi-factor-auth-required",{_serverResponse:s}),s}function eh(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ra(n.config,i):`${n.config.apiScheme}://${i}`}function Nm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),Dm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _i(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=nt(n,e,r);return i.customData._tokenResponse=t,i}function mc(n){return n!==void 0&&n.enterprise!==void 0}class Om{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Nm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Mm(n,e){return Rt(n,"GET","/v2/recaptchaConfig",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lm(n,e){return Rt(n,"POST","/v1/accounts:delete",e)}async function th(n,e){return Rt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Um(n,e=!1){const t=Ie(n),r=await t.getIdToken(e),i=ia(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:gr(lo(i.auth_time)),issuedAtTime:gr(lo(i.iat)),expirationTime:gr(lo(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lo(n){return Number(n)*1e3}function ia(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ri("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fu(t);return i?JSON.parse(i):(Ri("Failed to decode base64 JWT payload"),null)}catch(i){return Ri("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gc(n){const e=ia(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof At&&Fm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Fm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await On(n,th(t,{idToken:r}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nh(s.providerUserInfo):[],l=zm(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Co(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,v)}async function jm(n){const e=Ie(n);await qi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nh(n){return n.map(e=>{var{providerId:t}=e,r=ta(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(n,e){const t=await Zu(n,{},async()=>{const r=Vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=eh(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Xu.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $m(n,e){return Rt(n,"POST","/v2/accounts:revokeToken",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=gc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await qm(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Pn;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pn,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ta(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Co(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await On(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Um(this,e)}reload(){return jm(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await qi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(yt(this.auth));const e=await this.getIdToken();return await On(this,Lm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,u,h,f;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,I=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,N=(h=t.createdAt)!==null&&h!==void 0?h:void 0,O=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:H,isAnonymous:K,providerData:Y,stsTokenManager:b}=t;z(F&&b,e,"internal-error");const y=Pn.fromJSON(this.name,b);z(typeof F=="string",e,"internal-error"),Dt(v,e.name),Dt(m,e.name),z(typeof H=="boolean",e,"internal-error"),z(typeof K=="boolean",e,"internal-error"),Dt(I,e.name),Dt(C,e.name),Dt(x,e.name),Dt(P,e.name),Dt(N,e.name),Dt(O,e.name);const g=new gt({uid:F,auth:e,email:m,emailVerified:H,displayName:v,isAnonymous:K,photoURL:C,phoneNumber:I,tenantId:x,stsTokenManager:y,createdAt:N,lastLoginAt:O});return Y&&Array.isArray(Y)&&(g.providerData=Y.map(E=>Object.assign({},E))),P&&(g._redirectEventId=P),g}static async _fromIdTokenResponse(e,t,r=!1){const i=new Pn;i.updateFromServerResponse(t);const s=new gt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?nh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Pn;l.updateFromIdToken(r);const u=new gt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Co(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Map;function _t(n){It(n instanceof Function,"Expected a class definition");let e=_c.get(n);return e?(It(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_c.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rh.type="NONE";const yc=rh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n,e,t){return`firebase:${n}:${e}:${t}`}class kn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Si(this.userKey,i.apiKey,s),this.fullPersistenceKey=Si("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new kn(_t(yc),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||_t(yc);const a=Si(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const v=gt._fromJSON(e,f);h!==s&&(l=v),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new kn(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new kn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ah(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ih(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ch(e))return"Blackberry";if(uh(e))return"Webos";if(sh(e))return"Safari";if((e.includes("chrome/")||oh(e))&&!e.includes("edge/"))return"Chrome";if(lh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ih(n=Le()){return/firefox\//i.test(n)}function sh(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oh(n=Le()){return/crios\//i.test(n)}function ah(n=Le()){return/iemobile/i.test(n)}function lh(n=Le()){return/android/i.test(n)}function ch(n=Le()){return/blackberry/i.test(n)}function uh(n=Le()){return/webos/i.test(n)}function sa(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wm(n=Le()){var e;return sa(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Km(){return op()&&document.documentMode===10}function hh(n=Le()){return sa(n)||lh(n)||uh(n)||ch(n)||/windows phone/i.test(n)||ah(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n,e=[]){let t;switch(n){case"Browser":t=vc(Le());break;case"Worker":t=`${vc(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(n,e={}){return Rt(n,"GET","/v2/passwordPolicy",Ht(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=6;class Ym{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Qm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ec(this),this.idTokenSubscription=new Ec(this),this.beforeStateQueue=new Hm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await kn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await th(this,{idToken:e}),r=await gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=km()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(yt(this));const t=e?Ie(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gm(this),t=new Ym(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await $m(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Sm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function mn(n){return Ie(n)}class Ec{constructor(e){this.auth=e,this.observer=null,this.addObserver=pp(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Xm(n){os=n}function fh(n){return os.loadJS(n)}function Zm(){return os.recaptchaEnterpriseScript}function eg(){return os.gapiScript}function tg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ng="recaptcha-enterprise",rg="NO_RECAPTCHA";class ig{constructor(e){this.type=ng,this.auth=mn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{Mm(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Om(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;mc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(rg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&mc(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Zm();u.length!==0&&(u+=l),fh(u).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function wc(n,e,t,r=!1){const i=new ig(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Po(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await wc(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await wc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(n,e){const t=ea(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Bi(s,e??{}))return i;Je(i,"already-initialized")}return t.initialize({options:e})}function og(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ag(n,e,t){const r=mn(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ph(e),{host:a,port:l}=lg(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),cg()}function ph(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lg(n){const e=ph(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ic(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Ic(a)}}}function Ic(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function cg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}async function ug(n,e){return Rt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hg(n,e){return Mr(n,"POST","/v1/accounts:signInWithPassword",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dg(n,e){return Mr(n,"POST","/v1/accounts:signInWithEmailLink",Ht(n,e))}async function fg(n,e){return Mr(n,"POST","/v1/accounts:signInWithEmailLink",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends oa{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ar(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ar(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Po(e,t,"signInWithPassword",hg);case"emailLink":return dg(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Po(e,r,"signUpPassword",ug);case"emailLink":return fg(e,{idToken:t,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(n,e){return Mr(n,"POST","/v1/accounts:signInWithIdp",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="http://localhost";class ln extends oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ta(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new ln(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return xn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,xn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xn(e,t)}buildRequest(){const e={requestUri:pg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gg(n){const e=ur(hr(n)).link,t=e?ur(hr(e)).deep_link_id:null,r=ur(hr(n)).deep_link_id;return(r?ur(hr(r)).link:null)||r||t||e||n}class aa{constructor(e){var t,r,i,s,a,l;const u=ur(hr(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,v=mg((i=u.mode)!==null&&i!==void 0?i:null);z(h&&f&&v,"argument-error"),this.apiKey=h,this.operation=v,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=gg(e);try{return new aa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.providerId=$n.PROVIDER_ID}static credential(e,t){return Ar._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=aa.parseLink(t);return z(r,"argument-error"),Ar._fromEmailAndCode(e,r.code,r.tenantId)}}$n.PROVIDER_ID="password";$n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends mh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Lr{constructor(){super("facebook.com")}static credential(e){return ln._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ln._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ot.credential(t,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Lr{constructor(){super("github.com")}static credential(e){return ln._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Lr{constructor(){super("twitter.com")}static credential(e,t){return ln._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Lt.credential(t,r)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(n,e){return Mr(n,"POST","/v1/accounts:signUp",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await gt._fromIdTokenResponse(e,r,i),a=Tc(r);return new cn({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Tc(r);return new cn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Tc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends At{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$i.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new $i(e,t,r,i)}}function gh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$i._fromErrorAndOperation(n,s,e,r):s})}async function yg(n,e,t=!1){const r=await On(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return cn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(n,e,t=!1){const{auth:r}=n;if(tt(r.app))return Promise.reject(yt(r));const i="reauthenticate";try{const s=await On(n,gh(r,i,e,n),t);z(s.idToken,r,"internal-error");const a=ia(s.idToken);z(a,r,"internal-error");const{sub:l}=a;return z(n.uid===l,r,"user-mismatch"),cn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _h(n,e,t=!1){if(tt(n.app))return Promise.reject(yt(n));const r="signIn",i=await gh(n,r,e),s=await cn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Eg(n,e){return _h(mn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yh(n){const e=mn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wg(n,e,t){if(tt(n.app))return Promise.reject(yt(n));const r=mn(n),a=await Po(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_g).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&yh(n),u}),l=await cn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Ig(n,e,t){return tt(n.app)?Promise.reject(yt(n)):Eg(Ie(n),$n.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yh(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(n,e){return Rt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ie(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await On(r,Tg(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Ag(n,e,t,r){return Ie(n).onIdTokenChanged(e,t,r)}function Rg(n,e,t){return Ie(n).beforeAuthStateChanged(e,t)}function ko(n,e,t,r){return Ie(n).onAuthStateChanged(e,t,r)}function Sg(n){return Ie(n).signOut()}const Wi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wi,"1"),this.storage.removeItem(Wi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=1e3,Pg=10;class Eh extends vh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Km()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Pg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Eh.type="LOCAL";const kg=Eh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh extends vh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wh.type="SESSION";const Ih=wh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new as(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),u=await xg(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}as.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=la("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(v){const m=v;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function Ng(n){rt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Vg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Og(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Mg(){return Th()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="firebaseLocalStorageDb",Lg=1,Ki="firebaseLocalStorage",Ah="fbase_key";class Ur{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ls(n,e){return n.transaction([Ki],e?"readwrite":"readonly").objectStore(Ki)}function Ug(){const n=indexedDB.deleteDatabase(bh);return new Ur(n).toPromise()}function xo(){const n=indexedDB.open(bh,Lg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ki,{keyPath:Ah})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ki)?e(r):(r.close(),await Ug(),e(await xo()))})})}async function bc(n,e,t){const r=ls(n,!0).put({[Ah]:e,value:t});return new Ur(r).toPromise()}async function Fg(n,e){const t=ls(n,!1).get(e),r=await new Ur(t).toPromise();return r===void 0?null:r.value}function Ac(n,e){const t=ls(n,!0).delete(e);return new Ur(t).toPromise()}const Bg=800,jg=3;class Rh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>jg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Th()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=as._getInstance(Mg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Vg(),!this.activeServiceWorker)return;this.sender=new Dg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Og()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xo();return await bc(e,Wi,"1"),await Ac(e,Wi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>bc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ac(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ls(i,!1).getAll();return new Ur(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rh.type="LOCAL";const zg=Rh;new Or(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n,e){return e?_t(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $g(n){return _h(n.auth,new ca(n),n.bypassAuthState)}function Wg(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),vg(t,new ca(n),n.bypassAuthState)}async function Kg(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),yg(t,new ca(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $g;case"linkViaPopup":case"linkViaRedirect":return Kg;case"reauthViaPopup":case"reauthViaRedirect":return Wg;default:Je(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new Or(2e3,1e4);class Rn extends Sh{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Rn.currentPopupAction&&Rn.currentPopupAction.cancel(),Rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=la();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hg.get())};e()}}Rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="pendingRedirect",Ci=new Map;class Qg extends Sh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ci.get(this.auth._key());if(!e){try{const r=await Yg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ci.set(this.auth._key(),e)}return this.bypassAuthState||Ci.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yg(n,e){const t=Zg(e),r=Xg(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Jg(n,e){Ci.set(n._key(),e)}function Xg(n){return _t(n._redirectPersistence)}function Zg(n){return Si(Gg,n.config.apiKey,n.name)}async function e_(n,e,t=!1){if(tt(n.app))return Promise.reject(yt(n));const r=mn(n),i=qg(r,e),a=await new Qg(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=10*60*1e3;class n_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!r_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ch(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=t_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rc(e))}saveEventToCache(e){this.cachedEventUids.add(Rc(e)),this.lastProcessedEventTime=Date.now()}}function Rc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ch({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function r_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ch(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(n,e={}){return Rt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o_=/^https?/;async function a_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await i_(n);for(const t of e)try{if(l_(t))return}catch{}Je(n,"unauthorized-domain")}function l_(n){const e=So(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!o_.test(t))return!1;if(s_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new Or(3e4,6e4);function Sc(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function u_(n){return new Promise((e,t)=>{var r,i,s;function a(){Sc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sc(),t(nt(n,"network-request-failed"))},timeout:c_.get()})}if(!((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rt().gapi)===null||s===void 0)&&s.load)a();else{const l=tg("iframefcb");return rt()[l]=()=>{gapi.load?a():t(nt(n,"network-request-failed"))},fh(`${eg()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Pi=null,e})}let Pi=null;function h_(n){return Pi=Pi||u_(n),Pi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=new Or(5e3,15e3),f_="__/auth/iframe",p_="emulator/auth/iframe",m_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},g_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function __(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ra(e,p_):`https://${n.config.authDomain}/${f_}`,r={apiKey:e.apiKey,appName:n.name,v:qn},i=g_.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Vr(r).slice(1)}`}async function y_(n){const e=await h_(n),t=rt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:__(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=nt(n,"network-request-failed"),l=rt().setTimeout(()=>{s(a)},d_.get());function u(){rt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E_=500,w_=600,I_="_blank",T_="http://localhost";class Cc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b_(n,e,t,r=E_,i=w_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},v_),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Le().toLowerCase();t&&(l=oh(h)?I_:t),ih(h)&&(e=e||T_,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[I,C])=>`${m}${I}=${C},`,"");if(Wm(h)&&l!=="_self")return A_(e||"",l),new Cc(null);const v=window.open(e||"",l,f);z(v,n,"popup-blocked");try{v.focus()}catch{}return new Cc(v)}function A_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="__/auth/handler",S_="emulator/auth/handler",C_=encodeURIComponent("fac");async function Pc(n,e,t,r,i,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:qn,eventId:i};if(e instanceof mh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",fp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,v]of Object.entries({}))a[f]=v}if(e instanceof Lr){const f=e.getScopes().filter(v=>v!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${C_}=${encodeURIComponent(u)}`:"";return`${P_(n)}?${Vr(l).slice(1)}${h}`}function P_({config:n}){return n.emulator?ra(n,S_):`https://${n.authDomain}/${R_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="webStorageSupport";class k_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ih,this._completeRedirectFn=e_,this._overrideRedirectResult=Jg}async _openPopup(e,t,r,i){var s;It((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Pc(e,t,r,So(),i);return b_(e,a,la())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Pc(e,t,r,So(),i);return Ng(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(It(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await y_(e),r=new n_(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(co,{type:co},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[co];a!==void 0&&t(!!a),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=a_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hh()||sh()||sa()}}const x_=k_;var kc="@firebase/auth",xc="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function V_(n){Vn(new an("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dh(n)},h=new Jm(r,i,s,u);return og(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new an("auth-internal",e=>{const t=mn(e.getProvider("auth").getImmediate());return(r=>new D_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(kc,xc,N_(n)),zt(kc,xc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=5*60,M_=zu("authIdTokenMaxAge")||O_;let Dc=null;const L_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>M_)return;const i=t==null?void 0:t.token;Dc!==i&&(Dc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function U_(n=Ku()){const e=ea(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sg(n,{popupRedirectResolver:x_,persistence:[zg,kg,Ih]}),r=zu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=L_(s.toString());Rg(t,a,()=>a(t.currentUser)),Ag(t,l=>a(l))}}const i=Bu("auth");return i&&ag(t,`http://${i}`),t}function F_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Xm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=nt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",F_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});V_("Browser");var Nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rn,Ph;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function g(){}g.prototype=y.prototype,b.D=y.prototype,b.prototype=new g,b.prototype.constructor=b,b.C=function(E,T,A){for(var w=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)w[Te-2]=arguments[Te];return y.prototype[T].apply(E,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,y,g){g||(g=0);var E=Array(16);if(typeof y=="string")for(var T=0;16>T;++T)E[T]=y.charCodeAt(g++)|y.charCodeAt(g++)<<8|y.charCodeAt(g++)<<16|y.charCodeAt(g++)<<24;else for(T=0;16>T;++T)E[T]=y[g++]|y[g++]<<8|y[g++]<<16|y[g++]<<24;y=b.g[0],g=b.g[1],T=b.g[2];var A=b.g[3],w=y+(A^g&(T^A))+E[0]+3614090360&4294967295;y=g+(w<<7&4294967295|w>>>25),w=A+(T^y&(g^T))+E[1]+3905402710&4294967295,A=y+(w<<12&4294967295|w>>>20),w=T+(g^A&(y^g))+E[2]+606105819&4294967295,T=A+(w<<17&4294967295|w>>>15),w=g+(y^T&(A^y))+E[3]+3250441966&4294967295,g=T+(w<<22&4294967295|w>>>10),w=y+(A^g&(T^A))+E[4]+4118548399&4294967295,y=g+(w<<7&4294967295|w>>>25),w=A+(T^y&(g^T))+E[5]+1200080426&4294967295,A=y+(w<<12&4294967295|w>>>20),w=T+(g^A&(y^g))+E[6]+2821735955&4294967295,T=A+(w<<17&4294967295|w>>>15),w=g+(y^T&(A^y))+E[7]+4249261313&4294967295,g=T+(w<<22&4294967295|w>>>10),w=y+(A^g&(T^A))+E[8]+1770035416&4294967295,y=g+(w<<7&4294967295|w>>>25),w=A+(T^y&(g^T))+E[9]+2336552879&4294967295,A=y+(w<<12&4294967295|w>>>20),w=T+(g^A&(y^g))+E[10]+4294925233&4294967295,T=A+(w<<17&4294967295|w>>>15),w=g+(y^T&(A^y))+E[11]+2304563134&4294967295,g=T+(w<<22&4294967295|w>>>10),w=y+(A^g&(T^A))+E[12]+1804603682&4294967295,y=g+(w<<7&4294967295|w>>>25),w=A+(T^y&(g^T))+E[13]+4254626195&4294967295,A=y+(w<<12&4294967295|w>>>20),w=T+(g^A&(y^g))+E[14]+2792965006&4294967295,T=A+(w<<17&4294967295|w>>>15),w=g+(y^T&(A^y))+E[15]+1236535329&4294967295,g=T+(w<<22&4294967295|w>>>10),w=y+(T^A&(g^T))+E[1]+4129170786&4294967295,y=g+(w<<5&4294967295|w>>>27),w=A+(g^T&(y^g))+E[6]+3225465664&4294967295,A=y+(w<<9&4294967295|w>>>23),w=T+(y^g&(A^y))+E[11]+643717713&4294967295,T=A+(w<<14&4294967295|w>>>18),w=g+(A^y&(T^A))+E[0]+3921069994&4294967295,g=T+(w<<20&4294967295|w>>>12),w=y+(T^A&(g^T))+E[5]+3593408605&4294967295,y=g+(w<<5&4294967295|w>>>27),w=A+(g^T&(y^g))+E[10]+38016083&4294967295,A=y+(w<<9&4294967295|w>>>23),w=T+(y^g&(A^y))+E[15]+3634488961&4294967295,T=A+(w<<14&4294967295|w>>>18),w=g+(A^y&(T^A))+E[4]+3889429448&4294967295,g=T+(w<<20&4294967295|w>>>12),w=y+(T^A&(g^T))+E[9]+568446438&4294967295,y=g+(w<<5&4294967295|w>>>27),w=A+(g^T&(y^g))+E[14]+3275163606&4294967295,A=y+(w<<9&4294967295|w>>>23),w=T+(y^g&(A^y))+E[3]+4107603335&4294967295,T=A+(w<<14&4294967295|w>>>18),w=g+(A^y&(T^A))+E[8]+1163531501&4294967295,g=T+(w<<20&4294967295|w>>>12),w=y+(T^A&(g^T))+E[13]+2850285829&4294967295,y=g+(w<<5&4294967295|w>>>27),w=A+(g^T&(y^g))+E[2]+4243563512&4294967295,A=y+(w<<9&4294967295|w>>>23),w=T+(y^g&(A^y))+E[7]+1735328473&4294967295,T=A+(w<<14&4294967295|w>>>18),w=g+(A^y&(T^A))+E[12]+2368359562&4294967295,g=T+(w<<20&4294967295|w>>>12),w=y+(g^T^A)+E[5]+4294588738&4294967295,y=g+(w<<4&4294967295|w>>>28),w=A+(y^g^T)+E[8]+2272392833&4294967295,A=y+(w<<11&4294967295|w>>>21),w=T+(A^y^g)+E[11]+1839030562&4294967295,T=A+(w<<16&4294967295|w>>>16),w=g+(T^A^y)+E[14]+4259657740&4294967295,g=T+(w<<23&4294967295|w>>>9),w=y+(g^T^A)+E[1]+2763975236&4294967295,y=g+(w<<4&4294967295|w>>>28),w=A+(y^g^T)+E[4]+1272893353&4294967295,A=y+(w<<11&4294967295|w>>>21),w=T+(A^y^g)+E[7]+4139469664&4294967295,T=A+(w<<16&4294967295|w>>>16),w=g+(T^A^y)+E[10]+3200236656&4294967295,g=T+(w<<23&4294967295|w>>>9),w=y+(g^T^A)+E[13]+681279174&4294967295,y=g+(w<<4&4294967295|w>>>28),w=A+(y^g^T)+E[0]+3936430074&4294967295,A=y+(w<<11&4294967295|w>>>21),w=T+(A^y^g)+E[3]+3572445317&4294967295,T=A+(w<<16&4294967295|w>>>16),w=g+(T^A^y)+E[6]+76029189&4294967295,g=T+(w<<23&4294967295|w>>>9),w=y+(g^T^A)+E[9]+3654602809&4294967295,y=g+(w<<4&4294967295|w>>>28),w=A+(y^g^T)+E[12]+3873151461&4294967295,A=y+(w<<11&4294967295|w>>>21),w=T+(A^y^g)+E[15]+530742520&4294967295,T=A+(w<<16&4294967295|w>>>16),w=g+(T^A^y)+E[2]+3299628645&4294967295,g=T+(w<<23&4294967295|w>>>9),w=y+(T^(g|~A))+E[0]+4096336452&4294967295,y=g+(w<<6&4294967295|w>>>26),w=A+(g^(y|~T))+E[7]+1126891415&4294967295,A=y+(w<<10&4294967295|w>>>22),w=T+(y^(A|~g))+E[14]+2878612391&4294967295,T=A+(w<<15&4294967295|w>>>17),w=g+(A^(T|~y))+E[5]+4237533241&4294967295,g=T+(w<<21&4294967295|w>>>11),w=y+(T^(g|~A))+E[12]+1700485571&4294967295,y=g+(w<<6&4294967295|w>>>26),w=A+(g^(y|~T))+E[3]+2399980690&4294967295,A=y+(w<<10&4294967295|w>>>22),w=T+(y^(A|~g))+E[10]+4293915773&4294967295,T=A+(w<<15&4294967295|w>>>17),w=g+(A^(T|~y))+E[1]+2240044497&4294967295,g=T+(w<<21&4294967295|w>>>11),w=y+(T^(g|~A))+E[8]+1873313359&4294967295,y=g+(w<<6&4294967295|w>>>26),w=A+(g^(y|~T))+E[15]+4264355552&4294967295,A=y+(w<<10&4294967295|w>>>22),w=T+(y^(A|~g))+E[6]+2734768916&4294967295,T=A+(w<<15&4294967295|w>>>17),w=g+(A^(T|~y))+E[13]+1309151649&4294967295,g=T+(w<<21&4294967295|w>>>11),w=y+(T^(g|~A))+E[4]+4149444226&4294967295,y=g+(w<<6&4294967295|w>>>26),w=A+(g^(y|~T))+E[11]+3174756917&4294967295,A=y+(w<<10&4294967295|w>>>22),w=T+(y^(A|~g))+E[2]+718787259&4294967295,T=A+(w<<15&4294967295|w>>>17),w=g+(A^(T|~y))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var g=y-this.blockSize,E=this.B,T=this.h,A=0;A<y;){if(T==0)for(;A<=g;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<y;)if(E[T++]=b.charCodeAt(A++),T==this.blockSize){i(this,E),T=0;break}}else for(;A<y;)if(E[T++]=b[A++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var g=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=g&255,g/=256;for(this.u(b),b=Array(16),y=g=0;4>y;++y)for(var E=0;32>E;E+=8)b[g++]=this.g[y]>>>E&255;return b};function s(b,y){var g=l;return Object.prototype.hasOwnProperty.call(g,b)?g[b]:g[b]=y(b)}function a(b,y){this.h=y;for(var g=[],E=!0,T=b.length-1;0<=T;T--){var A=b[T]|0;E&&A==y||(g[T]=A,E=!1)}this.g=g}var l={};function u(b){return-128<=b&&128>b?s(b,function(y){return new a([y|0],0>y?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return v;if(0>b)return P(h(-b));for(var y=[],g=1,E=0;b>=g;E++)y[E]=b/g|0,g*=4294967296;return new a(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return P(f(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=h(Math.pow(y,8)),E=v,T=0;T<b.length;T+=8){var A=Math.min(8,b.length-T),w=parseInt(b.substring(T,T+A),y);8>A?(A=h(Math.pow(y,A)),E=E.j(A).add(h(w))):(E=E.j(g),E=E.add(h(w)))}return E}var v=u(0),m=u(1),I=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-P(this).m();for(var b=0,y=1,g=0;g<this.g.length;g++){var E=this.i(g);b+=(0<=E?E:4294967296+E)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(x(this))return"-"+P(this).toString(b);for(var y=h(Math.pow(b,6)),g=this,E="";;){var T=H(g,y).g;g=N(g,T.j(y));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(b);if(g=T,C(g))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function x(b){return b.h==-1}n.l=function(b){return b=N(this,b),x(b)?-1:C(b)?0:1};function P(b){for(var y=b.g.length,g=[],E=0;E<y;E++)g[E]=~b.g[E];return new a(g,~b.h).add(m)}n.abs=function(){return x(this)?P(this):this},n.add=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],E=0,T=0;T<=y;T++){var A=E+(this.i(T)&65535)+(b.i(T)&65535),w=(A>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);E=w>>>16,A&=65535,w&=65535,g[T]=w<<16|A}return new a(g,g[g.length-1]&-2147483648?-1:0)};function N(b,y){return b.add(P(y))}n.j=function(b){if(C(this)||C(b))return v;if(x(this))return x(b)?P(this).j(P(b)):P(P(this).j(b));if(x(b))return P(this.j(P(b)));if(0>this.l(I)&&0>b.l(I))return h(this.m()*b.m());for(var y=this.g.length+b.g.length,g=[],E=0;E<2*y;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<b.g.length;T++){var A=this.i(E)>>>16,w=this.i(E)&65535,Te=b.i(T)>>>16,Ze=b.i(T)&65535;g[2*E+2*T]+=w*Ze,O(g,2*E+2*T),g[2*E+2*T+1]+=A*Ze,O(g,2*E+2*T+1),g[2*E+2*T+1]+=w*Te,O(g,2*E+2*T+1),g[2*E+2*T+2]+=A*Te,O(g,2*E+2*T+2)}for(E=0;E<y;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=y;E<2*y;E++)g[E]=0;return new a(g,0)};function O(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function F(b,y){this.g=b,this.h=y}function H(b,y){if(C(y))throw Error("division by zero");if(C(b))return new F(v,v);if(x(b))return y=H(P(b),y),new F(P(y.g),P(y.h));if(x(y))return y=H(b,P(y)),new F(P(y.g),y.h);if(30<b.g.length){if(x(b)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var g=m,E=y;0>=E.l(b);)g=K(g),E=K(E);var T=Y(g,1),A=Y(E,1);for(E=Y(E,2),g=Y(g,2);!C(E);){var w=A.add(E);0>=w.l(b)&&(T=T.add(g),A=w),E=Y(E,1),g=Y(g,1)}return y=N(b,T.j(y)),new F(T,y)}for(T=v;0<=b.l(y);){for(g=Math.max(1,Math.floor(b.m()/y.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=h(g),w=A.j(y);x(w)||0<w.l(b);)g-=E,A=h(g),w=A.j(y);C(A)&&(A=m),T=T.add(A),b=N(b,w)}return new F(T,b)}n.A=function(b){return H(this,b).h},n.and=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],E=0;E<y;E++)g[E]=this.i(E)&b.i(E);return new a(g,this.h&b.h)},n.or=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],E=0;E<y;E++)g[E]=this.i(E)|b.i(E);return new a(g,this.h|b.h)},n.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],E=0;E<y;E++)g[E]=this.i(E)^b.i(E);return new a(g,this.h^b.h)};function K(b){for(var y=b.g.length+1,g=[],E=0;E<y;E++)g[E]=b.i(E)<<1|b.i(E-1)>>>31;return new a(g,b.h)}function Y(b,y){var g=y>>5;y%=32;for(var E=b.g.length-g,T=[],A=0;A<E;A++)T[A]=0<y?b.i(A+g)>>>y|b.i(A+g+1)<<32-y:b.i(A+g);return new a(T,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ph=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,rn=a}).apply(typeof Nc<"u"?Nc:typeof self<"u"?self:typeof window<"u"?window:{});var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kh,dr,xh,ki,Do,Dh,Nh,Vh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof yi=="object"&&yi];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var S=d++;return{value:c(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function v(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function m(o,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:v,m.apply(null,arguments)}function I(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function C(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,S){for(var V=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)V[ae-2]=arguments[ae];return c.prototype[R].apply(p,V)}}function x(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function P(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const R=o.length||0,S=p.length||0;o.length=R+S;for(let V=0;V<S;V++)o[R+V]=p[V]}else o.push(p)}}class N{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var K=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function Y(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function b(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function y(o){const c={};for(const d in o)c[d]=o[d];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let S=0;S<g.length;S++)d=g[S],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function T(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function w(){var o=St;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Te{constructor(){this.h=this.g=null}add(c,d){const p=Ze.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Ze=new N(()=>new yn,o=>o.reset());class yn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let et,ct=!1,St=new Te,Qn=()=>{const o=l.Promise.resolve(void 0);et=()=>{o.then(xs)}};var xs=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){A(d)}var c=Ze;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}ct=!1};function M(){this.s=this.s,this.C=this.C}M.prototype.s=!1,M.prototype.ma=function(){this.s||(this.s=!0,this.N())},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function j(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}j.prototype.h=function(){this.defaultPrevented=!0};var G=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function ne(o,c){if(j.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(K){e:{try{H(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:$e[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ne.aa.h.call(this)}}C(ne,j);var $e={2:"touch",3:"pen",4:"mouse"};ne.prototype.h=function(){ne.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ge="closure_listenable_"+(1e6*Math.random()|0),Ct=0;function Jr(o,c,d,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++Ct,this.da=this.fa=!1}function Xr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Zr(o){this.src=o,this.g={},this.h=0}Zr.prototype.add=function(o,c,d,p,R){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var V=Ns(o,c,p,R);return-1<V?(c=o[V],d||(c.fa=!1)):(c=new Jr(c,this.src,S,!!p,R),c.fa=d,o.push(c)),c};function Ds(o,c){var d=c.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,c,void 0),S;(S=0<=R)&&Array.prototype.splice.call(p,R,1),S&&(Xr(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ns(o,c,d,p){for(var R=0;R<o.length;++R){var S=o[R];if(!S.da&&S.listener==c&&S.capture==!!d&&S.ha==p)return R}return-1}var Vs="closure_lm_"+(1e6*Math.random()|0),Os={};function Ha(o,c,d,p,R){if(Array.isArray(c)){for(var S=0;S<c.length;S++)Ha(o,c[S],d,p,R);return null}return d=Ya(d),o&&o[Ge]?o.K(c,d,h(p)?!!p.capture:!1,R):nf(o,c,d,!1,p,R)}function nf(o,c,d,p,R,S){if(!c)throw Error("Invalid event type");var V=h(R)?!!R.capture:!!R,ae=Ls(o);if(ae||(o[Vs]=ae=new Zr(o)),d=ae.add(c,d,p,V,S),d.proxy)return d;if(p=rf(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)G||(R=V),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(Qa(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function rf(){function o(d){return c.call(o.src,o.listener,d)}const c=sf;return o}function Ga(o,c,d,p,R){if(Array.isArray(c))for(var S=0;S<c.length;S++)Ga(o,c[S],d,p,R);else p=h(p)?!!p.capture:!!p,d=Ya(d),o&&o[Ge]?(o=o.i,c=String(c).toString(),c in o.g&&(S=o.g[c],d=Ns(S,d,p,R),-1<d&&(Xr(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete o.g[c],o.h--)))):o&&(o=Ls(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ns(c,d,p,R)),(d=-1<o?c[o]:null)&&Ms(d))}function Ms(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ge])Ds(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(Qa(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Ls(c))?(Ds(d,o),d.h==0&&(d.src=null,c[Vs]=null)):Xr(o)}}}function Qa(o){return o in Os?Os[o]:Os[o]="on"+o}function sf(o,c){if(o.da)o=!0;else{c=new ne(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&Ms(o),o=d.call(p,c)}return o}function Ls(o){return o=o[Vs],o instanceof Zr?o:null}var Us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ya(o){return typeof o=="function"?o:(o[Us]||(o[Us]=function(c){return o.handleEvent(c)}),o[Us])}function xe(){M.call(this),this.i=new Zr(this),this.M=this,this.F=null}C(xe,M),xe.prototype[Ge]=!0,xe.prototype.removeEventListener=function(o,c,d,p){Ga(this,o,c,d,p)};function Ue(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new j(c,o);else if(c instanceof j)c.target=c.target||o;else{var R=c;c=new j(p,o),E(c,R)}if(R=!0,d)for(var S=d.length-1;0<=S;S--){var V=c.g=d[S];R=ei(V,p,!0,c)&&R}if(V=c.g=o,R=ei(V,p,!0,c)&&R,R=ei(V,p,!1,c)&&R,d)for(S=0;S<d.length;S++)V=c.g=d[S],R=ei(V,p,!1,c)&&R}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)Xr(d[p]);delete o.g[c],o.h--}}this.F=null},xe.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},xe.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function ei(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,S=0;S<c.length;++S){var V=c[S];if(V&&!V.da&&V.capture==d){var ae=V.listener,Se=V.ha||V.src;V.fa&&Ds(o.i,V),R=ae.call(Se,p)!==!1&&R}}return R&&!p.defaultPrevented}function Ja(o,c,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Xa(o){o.g=Ja(()=>{o.g=null,o.i&&(o.i=!1,Xa(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class of extends M{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Xa(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yn(o){M.call(this),this.h=o,this.g={}}C(Yn,M);var Za=[];function el(o){Y(o.g,function(c,d){this.g.hasOwnProperty(d)&&Ms(c)},o),o.g={}}Yn.prototype.N=function(){Yn.aa.N.call(this),el(this)},Yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fs=l.JSON.stringify,af=l.JSON.parse,lf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Bs(){}Bs.prototype.h=null;function tl(o){return o.h||(o.h=o.i())}function nl(){}var Jn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function js(){j.call(this,"d")}C(js,j);function zs(){j.call(this,"c")}C(zs,j);var Qt={},rl=null;function ti(){return rl=rl||new xe}Qt.La="serverreachability";function il(o){j.call(this,Qt.La,o)}C(il,j);function Xn(o){const c=ti();Ue(c,new il(c))}Qt.STAT_EVENT="statevent";function sl(o,c){j.call(this,Qt.STAT_EVENT,o),this.stat=c}C(sl,j);function Fe(o){const c=ti();Ue(c,new sl(c,o))}Qt.Ma="timingevent";function ol(o,c){j.call(this,Qt.Ma,o),this.size=c}C(ol,j);function Zn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function er(){this.g=!0}er.prototype.xa=function(){this.g=!1};function cf(o,c,d,p,R,S){o.info(function(){if(o.g)if(S)for(var V="",ae=S.split("&"),Se=0;Se<ae.length;Se++){var re=ae[Se].split("=");if(1<re.length){var De=re[0];re=re[1];var Ne=De.split("_");V=2<=Ne.length&&Ne[1]=="type"?V+(De+"="+re+"&"):V+(De+"=redacted&")}}else V=null;else V=S;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+V})}function uf(o,c,d,p,R,S,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+S+" "+V})}function vn(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+df(o,d)+(p?" "+p:"")})}function hf(o,c){o.info(function(){return"TIMEOUT: "+c})}er.prototype.info=function(){};function df(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var S=R[0];if(S!="noop"&&S!="stop"&&S!="close")for(var V=1;V<R.length;V++)R[V]=""}}}}return Fs(d)}catch{return c}}var ni={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},al={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qs;function ri(){}C(ri,Bs),ri.prototype.g=function(){return new XMLHttpRequest},ri.prototype.i=function(){return{}},qs=new ri;function Pt(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new Yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ll}function ll(){this.i=null,this.g="",this.h=!1}var cl={},$s={};function Ws(o,c,d){o.L=1,o.v=ai(ut(c)),o.m=d,o.P=!0,ul(o,null)}function ul(o,c){o.F=Date.now(),ii(o),o.A=ut(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),bl(d.i,"t",p),o.C=0,d=o.j.J,o.h=new ll,o.g=zl(o.j,d?c:null,!o.m),0<o.O&&(o.M=new of(m(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Za[0]=R.toString()),R=Za);for(var S=0;S<R.length;S++){var V=Ha(d,R[S],p||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Xn(),cf(o.i,o.u,o.A,o.l,o.R,o.m)}Pt.prototype.ca=function(o){o=o.target;const c=this.M;c&&ht(o)==3?c.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{const Ne=ht(this.g);var c=this.g.Ba();const In=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||xl(this.g)))){this.J||Ne!=4||c==7||(c==8||0>=In?Xn(3):Xn(2)),Ks(this);var d=this.g.Z();this.X=d;t:if(hl(this)){var p=xl(this.g);o="";var R=p.length,S=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),tr(this);var V="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(S&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=d==200,uf(this.i,this.u,this.A,this.l,this.R,Ne,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,Se=this.g;if((ae=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(ae)){var re=ae;break t}}re=null}if(d=re)vn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hs(this,d);else{this.o=!1,this.s=3,Fe(12),Yt(this),tr(this);break e}}if(this.P){d=!0;let Qe;for(;!this.J&&this.C<V.length;)if(Qe=ff(this,V),Qe==$s){Ne==4&&(this.s=4,Fe(14),d=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==cl){this.s=4,Fe(15),vn(this.i,this.l,V,"[Invalid Chunk]"),d=!1;break}else vn(this.i,this.l,Qe,null),Hs(this,Qe);if(hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||V.length!=0||this.h.h||(this.s=1,Fe(16),d=!1),this.o=this.o&&d,!d)vn(this.i,this.l,V,"[Invalid Chunked Response]"),Yt(this),tr(this);else if(0<V.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Zs(De),De.M=!0,Fe(11))}}else vn(this.i,this.l,V,null),Hs(this,V);Ne==4&&Yt(this),this.o&&!this.J&&(Ne==4?Ul(this.j,this):(this.o=!1,ii(this)))}else kf(this.g),d==400&&0<V.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),Yt(this),tr(this)}}}catch{}finally{}};function hl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ff(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?$s:(d=Number(c.substring(d,p)),isNaN(d)?cl:(p+=1,p+d>c.length?$s:(c=c.slice(p,p+d),o.C=p+d,c)))}Pt.prototype.cancel=function(){this.J=!0,Yt(this)};function ii(o){o.S=Date.now()+o.I,dl(o,o.I)}function dl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Zn(m(o.ba,o),c)}function Ks(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Pt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(hf(this.i,this.A),this.L!=2&&(Xn(),Fe(17)),Yt(this),this.s=2,tr(this)):dl(this,this.S-o)};function tr(o){o.j.G==0||o.J||Ul(o.j,o)}function Yt(o){Ks(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,el(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Hs(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Gs(d.h,o))){if(!o.K&&Gs(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)fi(d),hi(d);else break e;Xs(d),Fe(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=Zn(m(d.Za,d),6e3));if(1>=ml(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Xt(d,11)}else if((o.K||d.g==o)&&fi(d),!O(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let re=R[c];if(d.T=re[0],re=re[1],d.G==2)if(re[0]=="c"){d.K=re[1],d.ia=re[2];const De=re[3];De!=null&&(d.la=De,d.j.info("VER="+d.la));const Ne=re[4];Ne!=null&&(d.Aa=Ne,d.j.info("SVER="+d.Aa));const In=re[5];In!=null&&typeof In=="number"&&0<In&&(p=1.5*In,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Qe=o.g;if(Qe){const mi=Qe.g?Qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mi){var S=p.h;S.g||mi.indexOf("spdy")==-1&&mi.indexOf("quic")==-1&&mi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Qs(S,S.h),S.h=null))}if(p.D){const eo=Qe.g?Qe.g.getResponseHeader("X-HTTP-Session-Id"):null;eo&&(p.ya=eo,ce(p.I,p.D,eo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var V=o;if(p.qa=jl(p,p.J?p.ia:null,p.W),V.K){gl(p.h,V);var ae=V,Se=p.L;Se&&(ae.I=Se),ae.B&&(Ks(ae),ii(ae)),p.g=V}else Ml(p);0<d.i.length&&di(d)}else re[0]!="stop"&&re[0]!="close"||Xt(d,7);else d.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?Xt(d,7):Js(d):re[0]!="noop"&&d.l&&d.l.ta(re),d.v=0)}}Xn(4)}catch{}}var pf=class{constructor(o,c){this.g=o,this.map=c}};function fl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ml(o){return o.h?1:o.g?o.g.size:0}function Gs(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Qs(o,c){o.g?o.g.add(c):o.h=c}function gl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}fl.prototype.cancel=function(){if(this.i=_l(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function _l(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return x(o.i)}function mf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function gf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function yl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=gf(o),p=mf(o),R=p.length,S=0;S<R;S++)c.call(void 0,p[S],d&&d[S],o)}var vl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _f(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var S=o[d].substring(0,p);R=o[d].substring(p+1)}else S=o[d];c(S,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Jt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Jt){this.h=o.h,si(this,o.j),this.o=o.o,this.g=o.g,oi(this,o.s),this.l=o.l;var c=o.i,d=new ir;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),El(this,d),this.m=o.m}else o&&(c=String(o).match(vl))?(this.h=!1,si(this,c[1]||"",!0),this.o=nr(c[2]||""),this.g=nr(c[3]||"",!0),oi(this,c[4]),this.l=nr(c[5]||"",!0),El(this,c[6]||"",!0),this.m=nr(c[7]||"")):(this.h=!1,this.i=new ir(null,this.h))}Jt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(rr(c,wl,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(rr(c,wl,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(rr(d,d.charAt(0)=="/"?Ef:vf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",rr(d,If)),o.join("")};function ut(o){return new Jt(o)}function si(o,c,d){o.j=d?nr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function oi(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function El(o,c,d){c instanceof ir?(o.i=c,Tf(o.i,o.h)):(d||(c=rr(c,wf)),o.i=new ir(c,o.h))}function ce(o,c,d){o.i.set(c,d)}function ai(o){return ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function nr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function rr(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,yf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function yf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var wl=/[#\/\?@]/g,vf=/[#\?:]/g,Ef=/[#\?]/g,wf=/[#\?@]/g,If=/#/g;function ir(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function kt(o){o.g||(o.g=new Map,o.h=0,o.i&&_f(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=ir.prototype,n.add=function(o,c){kt(this),this.i=null,o=En(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Il(o,c){kt(o),c=En(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Tl(o,c){return kt(o),c=En(o,c),o.g.has(c)}n.forEach=function(o,c){kt(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(c,R,p,this)},this)},this)},n.na=function(){kt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const R=o[p];for(let S=0;S<R.length;S++)d.push(c[p])}return d},n.V=function(o){kt(this);let c=[];if(typeof o=="string")Tl(this,o)&&(c=c.concat(this.g.get(En(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return kt(this),this.i=null,o=En(this,o),Tl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function bl(o,c,d){Il(o,c),0<d.length&&(o.i=null,o.g.set(En(o,c),x(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const S=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var R=S;V[p]!==""&&(R+="="+encodeURIComponent(String(V[p]))),o.push(R)}}return this.i=o.join("&")};function En(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Tf(o,c){c&&!o.j&&(kt(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(Il(this,p),bl(this,R,d))},o)),o.j=c}function bf(o,c){const d=new er;if(l.Image){const p=new Image;p.onload=I(xt,d,"TestLoadImage: loaded",!0,c,p),p.onerror=I(xt,d,"TestLoadImage: error",!1,c,p),p.onabort=I(xt,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=I(xt,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Af(o,c){const d=new er,p=new AbortController,R=setTimeout(()=>{p.abort(),xt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(R),S.ok?xt(d,"TestPingServer: ok",!0,c):xt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),xt(d,"TestPingServer: error",!1,c)})}function xt(o,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function Rf(){this.g=new lf}function Sf(o,c,d){const p=d||"";try{yl(o,function(R,S){let V=R;h(R)&&(V=Fs(R)),c.push(p+S+"="+encodeURIComponent(V))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function li(o){this.l=o.Ub||null,this.j=o.eb||!1}C(li,Bs),li.prototype.g=function(){return new ci(this.l,this.j)},li.prototype.i=function(o){return function(){return o}}({});function ci(o,c){xe.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ci,xe),n=ci.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,or(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,or(this)),this.g&&(this.readyState=3,or(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Al(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Al(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?sr(this):or(this),this.readyState==3&&Al(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,sr(this))},n.Qa=function(o){this.g&&(this.response=o,sr(this))},n.ga=function(){this.g&&sr(this)};function sr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,or(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function or(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Rl(o){let c="";return Y(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Ys(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Rl(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ce(o,c,d))}function me(o){xe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(me,xe);var Cf=/^https?$/i,Pf=["POST","PUT"];n=me.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qs.g(),this.v=this.o?tl(this.o):tl(qs),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){Sl(this,S);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Pf,c,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,V]of d)this.g.setRequestHeader(S,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{kl(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Sl(this,S)}};function Sl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Cl(o),ui(o)}function Cl(o){o.A||(o.A=!0,Ue(o,"complete"),Ue(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ue(this,"complete"),Ue(this,"abort"),ui(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ui(this,!0)),me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pl(this):this.bb())},n.bb=function(){Pl(this)};function Pl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ht(o)!=4||o.Z()!=2)){if(o.u&&ht(o)==4)Ja(o.Ea,0,o);else if(Ue(o,"readystatechange"),ht(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=V===0){var R=String(o.D).match(vl)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!Cf.test(R?R.toLowerCase():"")}d=p}if(d)Ue(o,"complete"),Ue(o,"success");else{o.m=6;try{var S=2<ht(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",Cl(o)}}finally{ui(o)}}}}function ui(o,c){if(o.g){kl(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ue(o,"ready");try{d.onreadystatechange=p}catch{}}}function kl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ht(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),af(c)}};function xl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function kf(o){const c={};o=(o.g&&2<=ht(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(O(o[p]))continue;var d=T(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=c[R]||[];c[R]=S,S.push(d)}b(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ar(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Dl(o){this.Aa=0,this.i=[],this.j=new er,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ar("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ar("baseRetryDelayMs",5e3,o),this.cb=ar("retryDelaySeedMs",1e4,o),this.Wa=ar("forwardChannelMaxRetries",2,o),this.wa=ar("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new fl(o&&o.concurrentRequestLimit),this.Da=new Rf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Dl.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,p){Fe(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=jl(this,null,this.W),di(this)};function Js(o){if(Nl(o),o.G==3){var c=o.U++,d=ut(o.I);if(ce(d,"SID",o.K),ce(d,"RID",c),ce(d,"TYPE","terminate"),lr(o,d),c=new Pt(o,o.j,c),c.L=2,c.v=ai(ut(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=zl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ii(c)}Bl(o)}function hi(o){o.g&&(Zs(o),o.g.cancel(),o.g=null)}function Nl(o){hi(o),o.u&&(l.clearTimeout(o.u),o.u=null),fi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function di(o){if(!pl(o.h)&&!o.s){o.s=!0;var c=o.Ga;et||Qn(),ct||(et(),ct=!0),St.add(c,o),o.B=0}}function xf(o,c){return ml(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Zn(m(o.Ga,o,c),Fl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Pt(this,this.j,o);let S=this.o;if(this.S&&(S?(S=y(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(R.H=S,S=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Ol(this,R,c),d=ut(this.I),ce(d,"RID",o),ce(d,"CVER",22),this.D&&ce(d,"X-HTTP-Session-Id",this.D),lr(this,d),S&&(this.O?c="headers="+encodeURIComponent(String(Rl(S)))+"&"+c:this.m&&Ys(d,this.m,S)),Qs(this.h,R),this.Ua&&ce(d,"TYPE","init"),this.P?(ce(d,"$req",c),ce(d,"SID","null"),R.T=!0,Ws(R,d,null)):Ws(R,d,c),this.G=2}}else this.G==3&&(o?Vl(this,o):this.i.length==0||pl(this.h)||Vl(this))};function Vl(o,c){var d;c?d=c.l:d=o.U++;const p=ut(o.I);ce(p,"SID",o.K),ce(p,"RID",d),ce(p,"AID",o.T),lr(o,p),o.m&&o.o&&Ys(p,o.m,o.o),d=new Pt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ol(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Qs(o.h,d),Ws(d,p,c)}function lr(o,c){o.H&&Y(o.H,function(d,p){ce(c,p,d)}),o.l&&yl({},function(d,p){ce(c,p,d)})}function Ol(o,c,d){d=Math.min(o.i.length,d);var p=o.l?m(o.l.Na,o.l,o):null;e:{var R=o.i;let S=-1;for(;;){const V=["count="+d];S==-1?0<d?(S=R[0].g,V.push("ofs="+S)):S=0:V.push("ofs="+S);let ae=!0;for(let Se=0;Se<d;Se++){let re=R[Se].g;const De=R[Se].map;if(re-=S,0>re)S=Math.max(0,R[Se].g-100),ae=!1;else try{Sf(De,V,"req"+re+"_")}catch{p&&p(De)}}if(ae){p=V.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,p}function Ml(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;et||Qn(),ct||(et(),ct=!0),St.add(c,o),o.v=0}}function Xs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Zn(m(o.Fa,o),Fl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ll(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Zn(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),hi(this),Ll(this))};function Zs(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ll(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ut(o.qa);ce(c,"RID","rpc"),ce(c,"SID",o.K),ce(c,"AID",o.T),ce(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ce(c,"TO",o.ja),ce(c,"TYPE","xmlhttp"),lr(o,c),o.m&&o.o&&Ys(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ai(ut(c)),d.m=null,d.P=!0,ul(d,o)}n.Za=function(){this.C!=null&&(this.C=null,hi(this),Xs(this),Fe(19))};function fi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Ul(o,c){var d=null;if(o.g==c){fi(o),Zs(o),o.g=null;var p=2}else if(Gs(o.h,c))d=c.D,gl(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=ti(),Ue(p,new ol(p,d)),di(o)}else Ml(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&xf(o,c)||p==2&&Xs(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),R){case 1:Xt(o,5);break;case 4:Xt(o,10);break;case 3:Xt(o,6);break;default:Xt(o,2)}}}function Fl(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Xt(o,c){if(o.j.info("Error code "+c),c==2){var d=m(o.fb,o),p=o.Xa;const R=!p;p=new Jt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||si(p,"https"),ai(p),R?bf(p.toString(),d):Af(p.toString(),d)}else Fe(2);o.G=0,o.l&&o.l.sa(c),Bl(o),Nl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function Bl(o){if(o.G=0,o.ka=[],o.l){const c=_l(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ka,c),P(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function jl(o,c,d){var p=d instanceof Jt?ut(d):new Jt(d);if(p.g!="")c&&(p.g=c+"."+p.g),oi(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var S=new Jt(null);p&&si(S,p),c&&(S.g=c),R&&oi(S,R),d&&(S.l=d),p=S}return d=o.D,c=o.ya,d&&c&&ce(p,d,c),ce(p,"VER",o.la),lr(o,p),p}function zl(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new me(new li({eb:d})):new me(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ql(){}n=ql.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function pi(){}pi.prototype.g=function(o,c){return new ze(o,c)};function ze(o,c){xe.call(this),this.g=new Dl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!O(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!O(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new wn(this)}C(ze,xe),ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){Js(this.g)},ze.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Fs(o),o=d);c.i.push(new pf(c.Ya++,o)),c.G==3&&di(c)},ze.prototype.N=function(){this.g.l=null,delete this.j,Js(this.g),delete this.g,ze.aa.N.call(this)};function $l(o){js.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C($l,js);function Wl(){zs.call(this),this.status=1}C(Wl,zs);function wn(o){this.g=o}C(wn,ql),wn.prototype.ua=function(){Ue(this.g,"a")},wn.prototype.ta=function(o){Ue(this.g,new $l(o))},wn.prototype.sa=function(o){Ue(this.g,new Wl)},wn.prototype.ra=function(){Ue(this.g,"b")},pi.prototype.createWebChannel=pi.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,Vh=function(){return new pi},Nh=function(){return ti()},Dh=Qt,Do={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ni.NO_ERROR=0,ni.TIMEOUT=8,ni.HTTP_ERROR=6,ki=ni,al.COMPLETE="complete",xh=al,nl.EventType=Jn,Jn.OPEN="a",Jn.CLOSE="b",Jn.ERROR="c",Jn.MESSAGE="d",xe.prototype.listen=xe.prototype.K,dr=nl,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,kh=me}).apply(typeof yi<"u"?yi:typeof self<"u"?self:typeof window<"u"?window:{});const Vc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Xo("@firebase/firestore");function cr(){return un.logLevel}function U(n,...e){if(un.logLevel<=Z.DEBUG){const t=e.map(ua);un.debug(`Firestore (${Wn}): ${n}`,...t)}}function Tt(n,...e){if(un.logLevel<=Z.ERROR){const t=e.map(ua);un.error(`Firestore (${Wn}): ${n}`,...t)}}function hn(n,...e){if(un.logLevel<=Z.WARN){const t=e.map(ua);un.warn(`Firestore (${Wn}): ${n}`,...t)}}function ua(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n="Unexpected state"){const e=`FIRESTORE (${Wn}) INTERNAL ASSERTION FAILED: `+n;throw Tt(e),new Error(e)}function oe(n,e){n||q()}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends At{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class B_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class j_{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){oe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new Oh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Oe(e)}}class z_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class q_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new z_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class W_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){oe(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(oe(typeof t.token=="string"),this.R=t.token,new $_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=K_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(n,e){return n<e?-1:n>e?1:0}function Mn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new we(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new we(0,0))}static max(){return new $(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(),r===void 0?r=e.length-t:r>e.length-t&&q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Rr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ue extends Rr{construct(e,t,r){return new ue(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const H_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends Rr{construct(e,t,r){return new Ae(e,t,r)}static isValidIdentifier(e){return H_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new L(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new L(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ue.fromString(e))}static fromName(e){return new B(ue.fromString(e).popFirst(5))}static empty(){return new B(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ue(e.slice()))}}function G_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new we(t+1,0):new we(t,r));return new $t(i,B.empty(),e)}function Q_(n){return new $t(n.readTime,n.key,-1)}class $t{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new $t($.min(),B.empty(),-1)}static max(){return new $t($.max(),B.empty(),-1)}}function Y_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:ie(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==J_)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(i=>i?D.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new D((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new D((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Z_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Br(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}da.oe=-1;function cs(n){return n==null}function Hi(n){return n===0&&1/n==-1/0}function ey(n){return typeof n=="number"&&Number.isInteger(n)&&!Hi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function gn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Lh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){this.comparator=e,this.root=t||Ce.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vi(this.root,e,this.comparator,!0)}}class vi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ce.RED,this.left=i??Ce.EMPTY,this.right=s??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ce(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mc(this.data.getIterator())}getIteratorFrom(e){return new Mc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pe(this.comparator);return t.data=e,t}}class Mc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new qe([])}unionWith(e){let t=new Pe(Ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Uh("Invalid base64 string: "+s):s}}(e);return new Re(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const ty=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wt(n){if(oe(!!n),typeof n=="string"){let e=0;const t=ty.exec(n);if(oe(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function dn(n){return typeof n=="string"?Re.fromBase64String(n):Re.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function pa(n){const e=n.mapValue.fields.__previous_value__;return fa(e)?pa(e):e}function Sr(n){const e=Wt(n.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,r,i,s,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Ln{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ln&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei={mapValue:{}};function fn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fa(n)?4:iy(n)?9007199254740991:ry(n)?10:11:q()}function ot(n,e){if(n===e)return!0;const t=fn(n);if(t!==fn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Sr(n).isEqual(Sr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Wt(i.timestampValue),l=Wt(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return dn(i.bytesValue).isEqual(dn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ge(i.geoPointValue.latitude)===ge(s.geoPointValue.latitude)&&ge(i.geoPointValue.longitude)===ge(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ge(i.integerValue)===ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ge(i.doubleValue),l=ge(s.doubleValue);return a===l?Hi(a)===Hi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Mn(n.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Oc(a)!==Oc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ot(a[u],l[u])))return!1;return!0}(n,e);default:return q()}}function Cr(n,e){return(n.values||[]).find(t=>ot(t,e))!==void 0}function Un(n,e){if(n===e)return 0;const t=fn(n),r=fn(e);if(t!==r)return ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=ge(s.integerValue||s.doubleValue),u=ge(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Lc(n.timestampValue,e.timestampValue);case 4:return Lc(Sr(n),Sr(e));case 5:return ie(n.stringValue,e.stringValue);case 6:return function(s,a){const l=dn(s),u=dn(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ie(l[h],u[h]);if(f!==0)return f}return ie(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ie(ge(s.latitude),ge(a.latitude));return l!==0?l:ie(ge(s.longitude),ge(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Uc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const v=s.fields||{},m=a.fields||{},I=(l=v.value)===null||l===void 0?void 0:l.arrayValue,C=(u=m.value)===null||u===void 0?void 0:u.arrayValue,x=ie(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Uc(I,C)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ei.mapValue&&a===Ei.mapValue)return 0;if(s===Ei.mapValue)return 1;if(a===Ei.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let v=0;v<u.length&&v<f.length;++v){const m=ie(u[v],f[v]);if(m!==0)return m;const I=Un(l[u[v]],h[f[v]]);if(I!==0)return I}return ie(u.length,f.length)}(n.mapValue,e.mapValue);default:throw q()}}function Lc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ie(n,e);const t=Wt(n),r=Wt(e),i=ie(t.seconds,r.seconds);return i!==0?i:ie(t.nanos,r.nanos)}function Uc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Un(t[i],r[i]);if(s)return s}return ie(t.length,r.length)}function Fn(n){return No(n)}function No(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Wt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return dn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=No(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${No(t.fields[a])}`;return i+"}"}(n.mapValue):q()}function Fc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Vo(n){return!!n&&"integerValue"in n}function ma(n){return!!n&&"arrayValue"in n}function Bc(n){return!!n&&"nullValue"in n}function jc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xi(n){return!!n&&"mapValue"in n}function ry(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function _r(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return gn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=_r(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_r(n.arrayValue.values[t]);return e}return Object.assign({},n)}function iy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!xi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_r(t)}setAll(e){let t=Ae.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=_r(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());xi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];xi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){gn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new je(_r(this.value))}}function Fh(n){const e=[];return gn(n.fields,(t,r)=>{const i=new Ae([t]);if(xi(r)){const s=Fh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new qe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Me(e,0,$.min(),$.min(),$.min(),je.empty(),0)}static newFoundDocument(e,t,r,i){return new Me(e,1,t,$.min(),r,i,0)}static newNoDocument(e,t){return new Me(e,2,t,$.min(),$.min(),je.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,$.min(),$.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this.position=e,this.inclusive=t}}function zc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=Un(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ot(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t="asc"){this.field=e,this.dir=t}}function sy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{}class Ee extends Bh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ay(e,t,r):t==="array-contains"?new uy(e,r):t==="in"?new hy(e,r):t==="not-in"?new dy(e,r):t==="array-contains-any"?new fy(e,r):new Ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ly(e,r):new cy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Un(t,this.value)):t!==null&&fn(this.value)===fn(t)&&this.matchesComparison(Un(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xe extends Bh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Xe(e,t)}matches(e){return jh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function jh(n){return n.op==="and"}function zh(n){return oy(n)&&jh(n)}function oy(n){for(const e of n.filters)if(e instanceof Xe)return!1;return!0}function Oo(n){if(n instanceof Ee)return n.field.canonicalString()+n.op.toString()+Fn(n.value);if(zh(n))return n.filters.map(e=>Oo(e)).join(",");{const e=n.filters.map(t=>Oo(t)).join(",");return`${n.op}(${e})`}}function qh(n,e){return n instanceof Ee?function(r,i){return i instanceof Ee&&r.op===i.op&&r.field.isEqual(i.field)&&ot(r.value,i.value)}(n,e):n instanceof Xe?function(r,i){return i instanceof Xe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&qh(a,i.filters[l]),!0):!1}(n,e):void q()}function $h(n){return n instanceof Ee?function(t){return`${t.field.canonicalString()} ${t.op} ${Fn(t.value)}`}(n):n instanceof Xe?function(t){return t.op.toString()+" {"+t.getFilters().map($h).join(" ,")+"}"}(n):"Filter"}class ay extends Ee{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class ly extends Ee{constructor(e,t){super(e,"in",t),this.keys=Wh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cy extends Ee{constructor(e,t){super(e,"not-in",t),this.keys=Wh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Wh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class uy extends Ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ma(t)&&Cr(t.arrayValue,this.value)}}class hy extends Ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Cr(this.value.arrayValue,t)}}class dy extends Ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(Cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Cr(this.value.arrayValue,t)}}class fy extends Ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ma(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Cr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function $c(n,e=null,t=[],r=[],i=null,s=null,a=null){return new py(n,e,t,r,i,s,a)}function ga(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Oo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),cs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Fn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Fn(r)).join(",")),e.ue=t}return e.ue}function _a(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!qc(n.startAt,e.startAt)&&qc(n.endAt,e.endAt)}function Mo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function my(n,e,t,r,i,s,a,l){return new Kn(n,e,t,r,i,s,a,l)}function us(n){return new Kn(n)}function Wc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kh(n){return n.collectionGroup!==null}function yr(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Pe(Ae.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Pr(s,r))}),t.has(Ae.keyField().canonicalString())||e.ce.push(new Pr(Ae.keyField(),r))}return e.ce}function it(n){const e=W(n);return e.le||(e.le=gy(e,yr(n))),e.le}function gy(n,e){if(n.limitType==="F")return $c(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pr(i.field,s)});const t=n.endAt?new Gi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Gi(n.startAt.position,n.startAt.inclusive):null;return $c(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Lo(n,e){const t=n.filters.concat([e]);return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Qi(n,e,t){return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function hs(n,e){return _a(it(n),it(e))&&n.limitType===e.limitType}function Hh(n){return`${ga(it(n))}|lt:${n.limitType}`}function Tn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>$h(i)).join(", ")}]`),cs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Fn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Fn(i)).join(",")),`Target(${r})`}(it(n))}; limitType=${n.limitType})`}function ds(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of yr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=zc(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,yr(r),i)||r.endAt&&!function(a,l,u){const h=zc(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,yr(r),i))}(n,e)}function _y(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Gh(n){return(e,t)=>{let r=!1;for(const i of yr(n)){const s=yy(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yy(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Un(u,h):q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Lh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=new pe(B.comparator);function bt(){return vy}const Qh=new pe(B.comparator);function fr(...n){let e=Qh;for(const t of n)e=e.insert(t.key,t);return e}function Yh(n){let e=Qh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function tn(){return vr()}function Jh(){return vr()}function vr(){return new Hn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Ey=new pe(B.comparator),wy=new Pe(B.comparator);function X(...n){let e=wy;for(const t of n)e=e.add(t);return e}const Iy=new Pe(ie);function Ty(){return Iy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hi(e)?"-0":e}}function Xh(n){return{integerValue:""+n}}function by(n,e){return ey(e)?Xh(e):ya(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this._=void 0}}function Ay(n,e,t){return n instanceof kr?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fa(s)&&(s=pa(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof xr?ed(n,e):n instanceof Dr?td(n,e):function(i,s){const a=Zh(i,s),l=Kc(a)+Kc(i.Pe);return Vo(a)&&Vo(i.Pe)?Xh(l):ya(i.serializer,l)}(n,e)}function Ry(n,e,t){return n instanceof xr?ed(n,e):n instanceof Dr?td(n,e):t}function Zh(n,e){return n instanceof Yi?function(r){return Vo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class kr extends fs{}class xr extends fs{constructor(e){super(),this.elements=e}}function ed(n,e){const t=nd(e);for(const r of n.elements)t.some(i=>ot(i,r))||t.push(r);return{arrayValue:{values:t}}}class Dr extends fs{constructor(e){super(),this.elements=e}}function td(n,e){let t=nd(e);for(const r of n.elements)t=t.filter(i=>!ot(i,r));return{arrayValue:{values:t}}}class Yi extends fs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Kc(n){return ge(n.integerValue||n.doubleValue)}function nd(n){return ma(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t){this.field=e,this.transform=t}}function Cy(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof xr&&i instanceof xr||r instanceof Dr&&i instanceof Dr?Mn(r.elements,i.elements,ot):r instanceof Yi&&i instanceof Yi?ot(r.Pe,i.Pe):r instanceof kr&&i instanceof kr}(n.transform,e.transform)}class Py{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Di(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ps{}function rd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new va(n.key,He.none()):new jr(n.key,n.data,He.none());{const t=n.data,r=je.empty();let i=new Pe(Ae.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Gt(n.key,r,new qe(i.toArray()),He.none())}}function ky(n,e,t){n instanceof jr?function(i,s,a){const l=i.value.clone(),u=Gc(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Gt?function(i,s,a){if(!Di(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Gc(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(id(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Er(n,e,t,r){return n instanceof jr?function(s,a,l,u){if(!Di(s.precondition,a))return l;const h=s.value.clone(),f=Qc(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Gt?function(s,a,l,u){if(!Di(s.precondition,a))return l;const h=Qc(s.fieldTransforms,u,a),f=a.data;return f.setAll(id(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(s,a,l){return Di(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function xy(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Zh(r.transform,i||null);s!=null&&(t===null&&(t=je.empty()),t.set(r.field,s))}return t||null}function Hc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Mn(r,i,(s,a)=>Cy(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class jr extends ps{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gt extends ps{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function id(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Gc(n,e,t){const r=new Map;oe(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,Ry(a,l,t[i]))}return r}function Qc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,Ay(s,a,e))}return r}class va extends ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dy extends ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ky(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Er(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Er(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Jh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=rd(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&Mn(this.mutations,e.mutations,(t,r)=>Hc(t,r))&&Mn(this.baseMutations,e.baseMutations,(t,r)=>Hc(t,r))}}class Ea{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){oe(e.mutations.length===r.length);let i=function(){return Ey}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Ea(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,ee;function My(n){switch(n){default:return q();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function sd(n){if(n===void 0)return Tt("GRPC error has no .code"),k.UNKNOWN;switch(n){case ye.OK:return k.OK;case ye.CANCELLED:return k.CANCELLED;case ye.UNKNOWN:return k.UNKNOWN;case ye.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ye.INTERNAL:return k.INTERNAL;case ye.UNAVAILABLE:return k.UNAVAILABLE;case ye.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ye.NOT_FOUND:return k.NOT_FOUND;case ye.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ye.ABORTED:return k.ABORTED;case ye.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ye.DATA_LOSS:return k.DATA_LOSS;default:return q()}}(ee=ye||(ye={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=new rn([4294967295,4294967295],0);function Yc(n){const e=Ly().encode(n),t=new Ph;return t.update(e),new Uint8Array(t.digest())}function Jc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new rn([t,r],0),new rn([i,s],0)]}class wa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new pr(`Invalid padding: ${t}`);if(r<0)throw new pr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new pr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=rn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(rn.fromNumber(r)));return i.compare(Uy)===1&&(i=new rn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Yc(e),[r,i]=Jc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new wa(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Yc(e),[r,i]=Jc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class pr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,zr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ms($.min(),i,new pe(ie),bt(),X())}}class zr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new zr(r,t,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class od{constructor(e,t){this.targetId=e,this.me=t}}class ad{constructor(e,t,r=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Xc{constructor(){this.fe=0,this.ge=eu(),this.pe=Re.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=X(),t=X(),r=X();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:q()}}),new zr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=eu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Fy{constructor(e){this.Le=e,this.Be=new Map,this.ke=bt(),this.qe=Zc(),this.Qe=new pe(ie)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Mo(s))if(r===0){const a=new B(s.path);this.Ue(t,a,Me.newNoDocument(a,$.min()))}else oe(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=dn(r).toUint8Array()}catch(u){if(u instanceof Uh)return hn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new wa(a,i,s)}catch(u){return hn(u instanceof pr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&Mo(l.target)){const u=new B(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Me.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=X();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new ms(e,t,this.Qe,this.ke,r);return this.ke=bt(),this.qe=Zc(),this.Qe=new pe(ie),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Xc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Pe(ie),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Xc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Zc(){return new pe(B.comparator)}function eu(){return new pe(B.comparator)}const By={asc:"ASCENDING",desc:"DESCENDING"},jy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zy={and:"AND",or:"OR"};class qy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Uo(n,e){return n.useProto3Json||cs(e)?e:{value:e}}function Ji(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ld(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $y(n,e){return Ji(n,e.toTimestamp())}function st(n){return oe(!!n),$.fromTimestamp(function(t){const r=Wt(t);return new we(r.seconds,r.nanos)}(n))}function Ia(n,e){return Fo(n,e).canonicalString()}function Fo(n,e){const t=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function cd(n){const e=ue.fromString(n);return oe(pd(e)),e}function Bo(n,e){return Ia(n.databaseId,e.path)}function uo(n,e){const t=cd(e);if(t.get(1)!==n.databaseId.projectId)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(hd(t))}function ud(n,e){return Ia(n.databaseId,e)}function Wy(n){const e=cd(n);return e.length===4?ue.emptyPath():hd(e)}function jo(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hd(n){return oe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function tu(n,e,t){return{name:Bo(n,e),fields:t.value.mapValue.fields}}function Ky(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string"),Re.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Re.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?k.UNKNOWN:sd(h.code);return new L(f,h.message||"")}(a);t=new ad(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=uo(n,r.document.name),s=st(r.document.updateTime),a=r.document.createTime?st(r.document.createTime):$.min(),l=new je({mapValue:{fields:r.document.fields}}),u=Me.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Ni(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=uo(n,r.document),s=r.readTime?st(r.readTime):$.min(),a=Me.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Ni([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=uo(n,r.document),s=r.removedTargetIds||[];t=new Ni([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Oy(i,s),l=r.targetId;t=new od(l,a)}}return t}function Hy(n,e){let t;if(e instanceof jr)t={update:tu(n,e.key,e.value)};else if(e instanceof va)t={delete:Bo(n,e.key)};else if(e instanceof Gt)t={update:tu(n,e.key,e.data),updateMask:nv(e.fieldMask)};else{if(!(e instanceof Dy))return q();t={verify:Bo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof kr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof xr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Dr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw q()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$y(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(n,e.precondition)),t}function Gy(n,e){return n&&n.length>0?(oe(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?st(i.updateTime):st(s);return a.isEqual($.min())&&(a=st(s)),new Py(a,i.transformResults||[])}(t,e))):[]}function Qy(n,e){return{documents:[ud(n,e.path)]}}function Yy(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ud(n,i);const s=function(h){if(h.length!==0)return fd(Xe.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:bn(m.field),direction:Zy(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Uo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Jy(n){let e=Wy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){oe(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(v){const m=dd(v);return m instanceof Xe&&zh(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(v){return v.map(m=>function(C){return new Pr(An(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(v){let m;return m=typeof v=="object"?v.value:v,cs(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(v){const m=!!v.before,I=v.values||[];return new Gi(I,m)}(t.startAt));let h=null;return t.endAt&&(h=function(v){const m=!v.before,I=v.values||[];return new Gi(I,m)}(t.endAt)),my(e,i,a,s,l,"F",u,h)}function Xy(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=An(t.unaryFilter.field);return Ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=An(t.unaryFilter.field);return Ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=An(t.unaryFilter.field);return Ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=An(t.unaryFilter.field);return Ee.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(t){return Ee.create(An(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Xe.create(t.compositeFilter.filters.map(r=>dd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(n):q()}function Zy(n){return By[n]}function ev(n){return jy[n]}function tv(n){return zy[n]}function bn(n){return{fieldPath:n.canonicalString()}}function An(n){return Ae.fromServerFormat(n.fieldPath)}function fd(n){return n instanceof Ee?function(t){if(t.op==="=="){if(jc(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NAN"}};if(Bc(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jc(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NAN"}};if(Bc(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(t.field),op:ev(t.op),value:t.value}}}(n):n instanceof Xe?function(t){const r=t.getFilters().map(i=>fd(i));return r.length===1?r[0]:{compositeFilter:{op:tv(t.op),filters:r}}}(n):q()}function nv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,r,i,s=$.min(),a=$.min(),l=Re.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.ct=e}}function iv(n){const e=Jy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.un=new ov}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve($t.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve($t.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class ov{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Pe(ue.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pe(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Bn(0)}static kn(){return new Bn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.changes=new Hn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Er(r.mutation,i,qe.empty(),we.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const i=tn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=fr();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=tn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=bt();const a=vr(),l=function(){return vr()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Gt)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Er(f.mutation,h,f.mutation.getFieldMask(),we.now())):a.set(h.key,qe.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var v;return l.set(h,new lv(f,(v=a.get(h))!==null&&v!==void 0?v:null))}),l))}recalculateAndSaveOverlays(e,t){const r=vr();let i=new pe((a,l)=>a-l),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||qe.empty();f=l.applyToLocalView(h,f),r.set(u,f);const v=(i.get(l.batchId)||X()).add(u);i=i.insert(l.batchId,v)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,v=Jh();f.forEach(m=>{if(!s.has(m)){const I=rd(t.get(m),r.get(m));I!==null&&v.set(m,I),s=s.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,v))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(tn());let l=-1,u=s;return a.next(h=>D.forEach(h,(f,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),s.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,X())).next(f=>({batchId:l,changes:Yh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let i=fr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=fr();return this.indexManager.getCollectionParents(e,s).next(l=>D.forEach(l,u=>{const h=function(v,m){return new Kn(m,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((v,m)=>{a=a.insert(v,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Me.newInvalidDocument(f)))});let l=fr();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Er(f.mutation,h,qe.empty(),we.now()),ds(t,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:st(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:iv(i.bundledQuery),readTime:st(i.readTime)}}(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.overlays=new pe(B.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=tn();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=tn(),s=t.length+1,a=new B(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new pe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=tn(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=tn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return D.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Vy(t,r));let s=this.Ir.get(t);s===void 0&&(s=X(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.Tr=new Pe(be.Er),this.dr=new Pe(be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new be(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new be(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new B(new ue([])),r=new be(t,e),i=new be(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new ue([])),r=new be(t,e),i=new be(t,e+1);let s=X();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new be(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||ie(e.wr,t.wr)}static Ar(e,t){return ie(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Pe(be.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ny(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new be(t,0),i=new be(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pe(ie);return t.forEach(i=>{const s=new be(i,0),a=new be(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const a=new be(new B(s),0);let l=new Pe(ie);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),D.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){oe(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,i=>{const s=new be(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new be(t,0),i=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.Mr=e,this.docs=function(){return new pe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let r=bt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Me.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=bt();const a=t.path,l=new B(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Y_(Q_(f),r)<=0||(i.has(f.key)||ds(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){q()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new mv(this)}getSize(e){return D.resolve(this.size)}}class mv extends av{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.persistence=e,this.Nr=new Hn(t=>ga(t),_a),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ta,this.targetCount=0,this.kr=Bn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Bn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t){this.qr={},this.overlays={},this.Qr=new da(0),this.Kr=!1,this.Kr=!0,this.$r=new dv,this.referenceDelegate=e(this),this.Ur=new gv(this),this.indexManager=new sv,this.remoteDocumentCache=function(i){return new pv(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new rv(t),this.Gr=new uv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new fv(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const i=new yv(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class yv extends X_{constructor(e){super(),this.currentSequenceNumber=e}}class ba{constructor(e){this.persistence=e,this.Jr=new Ta,this.Yr=null}static Zr(e){return new ba(e)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=B.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,$.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=X(),i=X();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Aa(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ap()?8:Z_(Le())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new vv;return this.Xi(e,t,a).next(l=>{if(s.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(cr()<=Z.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Tn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(cr()<=Z.DEBUG&&U("QueryEngine","Query:",Tn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(cr()<=Z.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Tn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,it(t))):D.resolve())}Yi(e,t){if(Wc(t))return D.resolve(null);let r=it(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Qi(t,null,"F"),r=it(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=X(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(t,l);return this.ns(t,h,a,u.readTime)?this.Yi(e,Qi(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,i){return Wc(t)||i.isEqual($.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(t,s);return this.ns(t,a,r,i)?D.resolve(null):(cr()<=Z.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tn(t)),this.rs(e,a,t,G_(i,-1)).next(l=>l))})}ts(e,t){let r=new Pe(Gh(e));return t.forEach((i,s)=>{ds(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return cr()<=Z.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Tn(t)),this.Ji.getDocumentsMatchingQuery(e,t,$t.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new pe(ie),this._s=new Hn(s=>ga(s),_a),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cv(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Iv(n,e,t,r){return new wv(n,e,t,r)}async function md(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=X();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function Tv(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const v=h.batch,m=v.keys();let I=D.resolve();return m.forEach(C=>{I=I.next(()=>f.getEntry(u,C)).next(x=>{const P=h.docVersions.get(C);oe(P!==null),x.version.compareTo(P)<0&&(v.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,v))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=X();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function gd(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function bv(n,e){const t=W(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,v)=>{const m=i.get(v);if(!m)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,v).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,v)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(v)!==null?I=I.withResumeToken(Re.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(v,I),function(x,P,N){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,I,f)&&l.push(t.Ur.updateTargetData(s,I))});let u=bt(),h=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Av(s,a,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual($.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(v=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return D.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.os=i,s))}function Av(n,e,t){let r=X(),i=X();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=bt();return t.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual($.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):U("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function Rv(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Sv(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Ft(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function zo(n,e,t){const r=W(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Br(a))throw a;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function nu(n,e,t){const r=W(n);let i=$.min(),s=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const v=W(u),m=v._s.get(f);return m!==void 0?D.resolve(v.os.get(m)):v.Ur.getTargetData(h,f)}(r,a,it(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:$.min(),t?s:X())).next(l=>(Cv(r,_y(e),l),{documents:l,Ts:s})))}function Cv(n,e,t){let r=n.us.get(e)||$.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class ru{constructor(){this.activeTargetIds=Ty()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pv{constructor(){this.so=new ru,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ru,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi=null;function ho(){return wi===null?wi=function(){return 268435456+Math.round(2147483648*Math.random())}():wi++,"0x"+wi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="WebChannelConnection";class Nv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){const l=ho(),u=this.xo(t,r.toUriEncodedString());U("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(t,u,h,i).then(f=>(U("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw hn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,a,l){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){const i=xv[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=ho();return new Promise((a,l)=>{const u=new kh;u.setWithCredentials(!0),u.listenOnce(xh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ki.NO_ERROR:const f=u.getResponseJson();U(Ve,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case ki.TIMEOUT:U(Ve,`RPC '${e}' ${s} timed out`),l(new L(k.DEADLINE_EXCEEDED,"Request time out"));break;case ki.HTTP_ERROR:const v=u.getStatus();if(U(Ve,`RPC '${e}' ${s} failed with status:`,v,"response text:",u.getResponseText()),v>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const C=function(P){const N=P.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(N)>=0?N:k.UNKNOWN}(I.status);l(new L(C,I.message))}else l(new L(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new L(k.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{U(Ve,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);U(Ve,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}Bo(e,t,r){const i=ho(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Vh(),l=Nh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");U(Ve,`Creating RPC '${e}' stream ${i}: ${f}`,u);const v=a.createWebChannel(f,u);let m=!1,I=!1;const C=new Dv({Io:P=>{I?U(Ve,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(U(Ve,`Opening RPC '${e}' stream ${i} transport.`),v.open(),m=!0),U(Ve,`RPC '${e}' stream ${i} sending:`,P),v.send(P))},To:()=>v.close()}),x=(P,N,O)=>{P.listen(N,F=>{try{O(F)}catch(H){setTimeout(()=>{throw H},0)}})};return x(v,dr.EventType.OPEN,()=>{I||(U(Ve,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),x(v,dr.EventType.CLOSE,()=>{I||(I=!0,U(Ve,`RPC '${e}' stream ${i} transport closed`),C.So())}),x(v,dr.EventType.ERROR,P=>{I||(I=!0,hn(Ve,`RPC '${e}' stream ${i} transport errored:`,P),C.So(new L(k.UNAVAILABLE,"The operation could not be completed")))}),x(v,dr.EventType.MESSAGE,P=>{var N;if(!I){const O=P.data[0];oe(!!O);const F=O,H=F.error||((N=F[0])===null||N===void 0?void 0:N.error);if(H){U(Ve,`RPC '${e}' stream ${i} received error:`,H);const K=H.status;let Y=function(g){const E=ye[g];if(E!==void 0)return sd(E)}(K),b=H.message;Y===void 0&&(Y=k.INTERNAL,b="Unknown error status: "+K+" with message "+H.message),I=!0,C.So(new L(Y,b)),v.close()}else U(Ve,`RPC '${e}' stream ${i} received:`,O),C.bo(O)}}),x(l,Dh.STAT_EVENT,P=>{P.stat===Do.PROXY?U(Ve,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Do.NOPROXY&&U(Ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function fo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n){return new qy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _d(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Tt(t.toString()),Tt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new L(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vv extends yd{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Ky(this.serializer,e),r=function(s){if(!("targetChange"in s))return $.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?st(a.readTime):$.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=jo(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=Mo(u)?{documents:Qy(s,u)}:{query:Yy(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ld(s,a.resumeToken);const h=Uo(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo($.min())>0){l.readTime=Ji(s,a.snapshotVersion.toTimestamp());const h=Uo(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Xy(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=jo(this.serializer),t.removeTarget=e,this.a_(t)}}class Ov extends yd{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return oe(!!e.streamToken),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Gy(e.writeResults,e.commitTime),r=st(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=jo(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Hy(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Fo(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(k.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Fo(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(k.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Lv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Tt(t),this.D_=!1):U("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{_n(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=W(u);h.L_.add(4),await qr(h),h.q_.set("Unknown"),h.L_.delete(4),await _s(h)}(this))})}),this.q_=new Lv(r,i)}}async function _s(n){if(_n(n))for(const e of n.B_)await e(!0)}async function qr(n){for(const e of n.B_)await e(!1)}function vd(n,e){const t=W(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Pa(t)?Ca(t):Gn(t).r_()&&Sa(t,e))}function Ra(n,e){const t=W(n),r=Gn(t);t.N_.delete(e),r.r_()&&Ed(t,e),t.N_.size===0&&(r.r_()?r.o_():_n(t)&&t.q_.set("Unknown"))}function Sa(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Gn(n).A_(e)}function Ed(n,e){n.Q_.xe(e),Gn(n).R_(e)}function Ca(n){n.Q_=new Fy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Gn(n).start(),n.q_.v_()}function Pa(n){return _n(n)&&!Gn(n).n_()&&n.N_.size>0}function _n(n){return W(n).L_.size===0}function wd(n){n.Q_=void 0}async function Fv(n){n.q_.set("Online")}async function Bv(n){n.N_.forEach((e,t)=>{Sa(n,e)})}async function jv(n,e){wd(n),Pa(n)?(n.q_.M_(e),Ca(n)):n.q_.set("Unknown")}async function zv(n,e,t){if(n.q_.set("Online"),e instanceof ad&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xi(n,r)}else if(e instanceof Ni?n.Q_.Ke(e):e instanceof od?n.Q_.He(e):n.Q_.We(e),!t.isEqual($.min()))try{const r=await gd(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Re.EMPTY_BYTE_STRING,f.snapshotVersion)),Ed(s,u);const v=new Ft(f.target,u,h,f.sequenceNumber);Sa(s,v)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Xi(n,r)}}async function Xi(n,e,t){if(!Br(e))throw e;n.L_.add(1),await qr(n),n.q_.set("Offline"),t||(t=()=>gd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await _s(n)})}function Id(n,e){return e().catch(t=>Xi(n,t,e))}async function ys(n){const e=W(n),t=Kt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;qv(e);)try{const i=await Rv(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,$v(e,i)}catch(i){await Xi(e,i)}Td(e)&&bd(e)}function qv(n){return _n(n)&&n.O_.length<10}function $v(n,e){n.O_.push(e);const t=Kt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Td(n){return _n(n)&&!Kt(n).n_()&&n.O_.length>0}function bd(n){Kt(n).start()}async function Wv(n){Kt(n).p_()}async function Kv(n){const e=Kt(n);for(const t of n.O_)e.m_(t.mutations)}async function Hv(n,e,t){const r=n.O_.shift(),i=Ea.from(r,e,t);await Id(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ys(n)}async function Gv(n,e){e&&Kt(n).V_&&await async function(r,i){if(function(a){return My(a)&&a!==k.ABORTED}(i.code)){const s=r.O_.shift();Kt(r).s_(),await Id(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ys(r)}}(n,e),Td(n)&&bd(n)}async function su(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=_n(t);t.L_.add(3),await qr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await _s(t)}async function Qv(n,e){const t=W(n);e?(t.L_.delete(2),await _s(t)):e||(t.L_.add(2),await qr(t),t.q_.set("Unknown"))}function Gn(n){return n.K_||(n.K_=function(t,r,i){const s=W(t);return s.w_(),new Vv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Fv.bind(null,n),Ro:Bv.bind(null,n),mo:jv.bind(null,n),d_:zv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Pa(n)?Ca(n):n.q_.set("Unknown")):(await n.K_.stop(),wd(n))})),n.K_}function Kt(n){return n.U_||(n.U_=function(t,r,i){const s=W(t);return s.w_(),new Ov(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Wv.bind(null,n),mo:Gv.bind(null,n),f_:Kv.bind(null,n),g_:Hv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await ys(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new ka(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xa(n,e){if(Tt("AsyncQueue",`${e}: ${n}`),Br(n))return new L(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=fr(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new Dn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Dn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Dn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.W_=new pe(B.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class jn{constructor(e,t,r,i,s,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new jn(e,t,Dn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Jv{constructor(){this.queries=au(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=W(t),s=i.queries;i.queries=au(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new L(k.ABORTED,"Firestore shutting down"))}}function au(){return new Hn(n=>Hh(n),hs)}async function Da(n,e){const t=W(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Yv,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=xa(a,`Initialization of query '${Tn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Va(t)}async function Na(n,e){const t=W(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Xv(n,e){const t=W(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Va(t)}function Zv(n,e,t){const r=W(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Va(n){n.Y_.forEach(e=>{e.next()})}var qo,lu;(lu=qo||(qo={})).ea="default",lu.Cache="cache";class Oa{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new jn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==qo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.key=e}}class Rd{constructor(e){this.key=e}}class eE{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=Gh(e),this.Ra=new Dn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new ou,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,v)=>{const m=i.get(f),I=ds(this.query,v)?v:null,C=!!m&&this.mutatedKeys.has(m.key),x=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;m&&I?m.data.isEqual(I.data)?C!==x&&(r.track({type:3,doc:I}),P=!0):this.ga(m,I)||(r.track({type:2,doc:I}),P=!0,(u&&this.Aa(I,u)>0||h&&this.Aa(I,h)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),P=!0):m&&!I&&(r.track({type:1,doc:m}),P=!0,(u||h)&&(l=!0)),P&&(I?(a=a.add(I),s=x?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,v)=>function(I,C){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return x(I)-x(C)}(f.type,v.type)||this.Aa(f.doc,v.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new jn(this.query,e.Ra,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ou,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=X(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Rd(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Ad(r))}),t}ba(e){this.Ta=e.Ts,this.da=X();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return jn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class tE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nE{constructor(e){this.key=e,this.va=!1}}class rE{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Hn(l=>Hh(l),hs),this.Ma=new Map,this.xa=new Set,this.Oa=new pe(B.comparator),this.Na=new Map,this.La=new Ta,this.Ba={},this.ka=new Map,this.qa=Bn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function iE(n,e,t=!0){const r=Dd(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Sd(r,e,t,!0),i}async function sE(n,e){const t=Dd(n);await Sd(t,e,!0,!1)}async function Sd(n,e,t,r){const i=await Sv(n.localStore,it(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await oE(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&vd(n.remoteStore,i),l}async function oE(n,e,t,r,i){n.Ka=(v,m,I)=>async function(x,P,N,O){let F=P.view.ma(N);F.ns&&(F=await nu(x.localStore,P.query,!1).then(({documents:b})=>P.view.ma(b,F)));const H=O&&O.targetChanges.get(P.targetId),K=O&&O.targetMismatches.get(P.targetId)!=null,Y=P.view.applyChanges(F,x.isPrimaryClient,H,K);return uu(x,P.targetId,Y.wa),Y.snapshot}(n,v,m,I);const s=await nu(n.localStore,e,!0),a=new eE(e,s.Ts),l=a.ma(s.documents),u=zr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,u);uu(n,t,h.wa);const f=new tE(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function aE(n,e,t){const r=W(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!hs(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Ra(r.remoteStore,i.targetId),$o(r,i.targetId)}).catch(Fr)):($o(r,i.targetId),await zo(r.localStore,i.targetId,!0))}async function lE(n,e){const t=W(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ra(t.remoteStore,r.targetId))}async function cE(n,e,t){const r=gE(n);try{const i=await function(a,l){const u=W(a),h=we.now(),f=l.reduce((I,C)=>I.add(C.key),X());let v,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=bt(),x=X();return u.cs.getEntries(I,f).next(P=>{C=P,C.forEach((N,O)=>{O.isValidDocument()||(x=x.add(N))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,C)).next(P=>{v=P;const N=[];for(const O of l){const F=xy(O,v.get(O.key).overlayedDocument);F!=null&&N.push(new Gt(O.key,F,Fh(F.value.mapValue),He.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,N,l)}).next(P=>{m=P;const N=P.applyToLocalDocumentSet(v,x);return u.documentOverlayCache.saveOverlays(I,P.batchId,N)})}).then(()=>({batchId:m.batchId,changes:Yh(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new pe(ie)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,t),await $r(r,i.changes),await ys(r.remoteStore)}catch(i){const s=xa(i,"Failed to persist write");t.reject(s)}}async function Cd(n,e){const t=W(n);try{const r=await bv(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?oe(a.va):i.removedDocuments.size>0&&(oe(a.va),a.va=!1))}),await $r(t,r,e)}catch(r){await Fr(r)}}function cu(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=W(a);u.onlineState=l;let h=!1;u.queries.forEach((f,v)=>{for(const m of v.j_)m.Z_(l)&&(h=!0)}),h&&Va(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uE(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new pe(B.comparator);a=a.insert(s,Me.newNoDocument(s,$.min()));const l=X().add(s),u=new ms($.min(),new Map,new pe(ie),a,l);await Cd(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ma(r)}else await zo(r.localStore,e,!1).then(()=>$o(r,e,t)).catch(Fr)}async function hE(n,e){const t=W(n),r=e.batch.batchId;try{const i=await Tv(t.localStore,e);kd(t,r,null),Pd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await $r(t,i)}catch(i){await Fr(i)}}async function dE(n,e,t){const r=W(n);try{const i=await function(a,l){const u=W(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(v=>(oe(v!==null),f=v.keys(),u.mutationQueue.removeMutationBatch(h,v))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);kd(r,e,t),Pd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await $r(r,i)}catch(i){await Fr(i)}}function Pd(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function kd(n,e,t){const r=W(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function $o(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||xd(n,r)})}function xd(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Ra(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Ma(n))}function uu(n,e,t){for(const r of t)r instanceof Ad?(n.La.addReference(r.key,e),fE(n,r)):r instanceof Rd?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||xd(n,r.key)):q()}function fE(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+t),n.xa.add(r),Ma(n))}function Ma(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new B(ue.fromString(e)),r=n.qa.next();n.Na.set(r,new nE(t)),n.Oa=n.Oa.insert(t,r),vd(n.remoteStore,new Ft(it(us(t.path)),r,"TargetPurposeLimboResolution",da.oe))}}async function $r(n,e,t){const r=W(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const v=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,v?"current":"not-current")}if(h){i.push(h);const v=Aa.Wi(u.targetId,h);s.push(v)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=W(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>D.forEach(h,m=>D.forEach(m.$i,I=>f.persistence.referenceDelegate.addReference(v,m.targetId,I)).next(()=>D.forEach(m.Ui,I=>f.persistence.referenceDelegate.removeReference(v,m.targetId,I)))))}catch(v){if(!Br(v))throw v;U("LocalStore","Failed to update sequence numbers: "+v)}for(const v of h){const m=v.targetId;if(!v.fromCache){const I=f.os.get(m),C=I.snapshotVersion,x=I.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(m,x)}}}(r.localStore,s))}async function pE(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await md(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new L(k.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $r(t,r.hs)}}function mE(n,e){const t=W(n),r=t.Na.get(e);if(r&&r.va)return X().add(r.key);{let i=X();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function Dd(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uE.bind(null,e),e.Ca.d_=Xv.bind(null,e.eventManager),e.Ca.$a=Zv.bind(null,e.eventManager),e}function gE(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dE.bind(null,e),e}class Zi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gs(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Iv(this.persistence,new Ev,e.initialUser,this.serializer)}Ga(e){return new _v(ba.Zr,this.serializer)}Wa(e){return new Pv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zi.provider={build:()=>new Zi};class Wo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pE.bind(null,this.syncEngine),await Qv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Jv}()}createDatastore(e){const t=gs(e.databaseInfo.databaseId),r=function(s){return new Nv(s)}(e.databaseInfo);return function(s,a,l,u){return new Mv(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new Uv(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>cu(this.syncEngine,t,0),function(){return iu.D()?new iu:new kv}())}createSyncEngine(e,t){return function(i,s,a,l,u,h,f){const v=new rE(i,s,a,l,u,h);return f&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=W(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await qr(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wo.provider={build:()=>new Wo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Tt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=ha.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{U("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=xa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function po(n,e){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await md(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function hu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yE(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>su(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>su(e.remoteStore,i)),n._onlineComponents=e}async function yE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await po(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;hn("Error using user provided cache. Falling back to memory cache: "+t),await po(n,new Zi)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await po(n,new Zi);return n._offlineComponents}async function Nd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await hu(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await hu(n,new Wo))),n._onlineComponents}function vE(n){return Nd(n).then(e=>e.syncEngine)}async function es(n){const e=await Nd(n),t=e.eventManager;return t.onListen=iE.bind(null,e.syncEngine),t.onUnlisten=aE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lE.bind(null,e.syncEngine),t}function EE(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new La({next:m=>{f.Za(),a.enqueueAndForget(()=>Na(s,v));const I=m.docs.has(l);!I&&m.fromCache?h.reject(new L(k.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?h.reject(new L(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),v=new Oa(us(l.path),f,{includeMetadataChanges:!0,_a:!0});return Da(s,v)}(await es(n),n.asyncQueue,e,t,r)),r.promise}function wE(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new La({next:m=>{f.Za(),a.enqueueAndForget(()=>Na(s,v)),m.fromCache&&u.source==="server"?h.reject(new L(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),v=new Oa(l,f,{includeMetadataChanges:!0,_a:!0});return Da(s,v)}(await es(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n,e,t){if(!t)throw new L(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Md(n,e,t,r){if(e===!0&&r===!0)throw new L(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fu(n){if(!B.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pu(n){if(B.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q()}function Be(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vs(n);throw new L(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function IE(n,e){if(e<=0)throw new L(k.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Md("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Es{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Mh;switch(r.type){case"firstParty":return new q_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=du.get(t);r&&(U("ComponentProvider","Removing Datastore"),du.delete(t),r.terminate())}(this),Promise.resolve()}}function Ld(n,e,t,r={}){var i;const s=(n=Be(n,Es))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Oe.MOCK_USER;else{l=ep(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new L(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Oe(h)}n._authCredentials=new B_(new Oh(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lt(this.firestore,e,this._query)}}class ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}}class Et extends lt{constructor(e,t,r){super(e,t,us(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new B(e))}withConverter(e){return new Et(this.firestore,e,this._path)}}function Ye(n,e,...t){if(n=Ie(n),Od("collection","path",e),n instanceof Es){const r=ue.fromString(e,...t);return pu(r),new Et(n,null,r)}{if(!(n instanceof ke||n instanceof Et))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return pu(r),new Et(n.firestore,null,r)}}function We(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=ha.newId()),Od("doc","path",e),n instanceof Es){const r=ue.fromString(e,...t);return fu(r),new ke(n,null,new B(r))}{if(!(n instanceof ke||n instanceof Et))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return fu(r),new ke(n.firestore,n instanceof Et?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _d(this,"async_queue_retry"),this.Vu=()=>{const r=fo();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=fo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=fo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new vt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Br(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=ka.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function _u(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class at extends Es{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new gu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gu(e),this._firestoreClient=void 0,await e}}}function Ud(n,e){const t=typeof n=="object"?n:Ku(),r=typeof n=="string"?n:"(default)",i=ea(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Xf("firestore");s&&Ld(i,...s)}return i}function Wr(n){if(n._terminated)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||TE(n),n._firestoreClient}function TE(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,h,f){return new ny(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Vd(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new _E(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(Re.fromBase64String(e))}catch(t){throw new L(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pn(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=/^__.*__$/;class AE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Gt(e,this.data,this.fieldMask,t,this.fieldTransforms):new jr(e,this.data,t,this.fieldTransforms)}}class Fd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Gt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Bd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Ua{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ua(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ts(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Bd(this.Cu)&&bE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class RE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||gs(e)}Qu(e,t,r,i=!1){return new Ua({Cu:e,methodName:t,qu:r,path:Ae.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ts(n){const e=n._freezeSettings(),t=gs(n._databaseId);return new RE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function jd(n,e,t,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);Ba("Data must be an object, but it was:",a,r);const l=zd(r,a);let u,h;if(s.merge)u=new qe(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const v of s.mergeFields){const m=Ko(e,v,t);if(!a.contains(m))throw new L(k.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);$d(f,m)||f.push(m)}u=new qe(f),h=a.fieldTransforms.filter(v=>u.covers(v.field))}else u=null,h=a.fieldTransforms;return new AE(new je(l),u,h)}class bs extends Hr{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bs}}class Fa extends Hr{_toFieldTransform(e){return new Sy(e.path,new kr)}isEqual(e){return e instanceof Fa}}function SE(n,e,t,r){const i=n.Qu(1,e,t);Ba("Data must be an object, but it was:",i,r);const s=[],a=je.empty();gn(r,(u,h)=>{const f=ja(e,u,t);h=Ie(h);const v=i.Nu(f);if(h instanceof bs)s.push(f);else{const m=Gr(h,v);m!=null&&(s.push(f),a.set(f,m))}});const l=new qe(s);return new Fd(a,l,i.fieldTransforms)}function CE(n,e,t,r,i,s){const a=n.Qu(1,e,t),l=[Ko(e,r,t)],u=[i];if(s.length%2!=0)throw new L(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Ko(e,s[m])),u.push(s[m+1]);const h=[],f=je.empty();for(let m=l.length-1;m>=0;--m)if(!$d(h,l[m])){const I=l[m];let C=u[m];C=Ie(C);const x=a.Nu(I);if(C instanceof bs)h.push(I);else{const P=Gr(C,x);P!=null&&(h.push(I),f.set(I,P))}}const v=new qe(h);return new Fd(f,v,a.fieldTransforms)}function PE(n,e,t,r=!1){return Gr(t,n.Qu(r?4:3,e))}function Gr(n,e){if(qd(n=Ie(n)))return Ba("Unsupported field value:",e,n),zd(n,e);if(n instanceof Hr)return function(r,i){if(!Bd(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Gr(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return by(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=we.fromDate(r);return{timestampValue:Ji(i.serializer,s)}}if(r instanceof we){const s=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ji(i.serializer,s)}}if(r instanceof ws)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pn)return{bytesValue:ld(i.serializer,r._byteString)};if(r instanceof ke){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ia(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Is)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ya(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${vs(r)}`)}(n,e)}function zd(n,e){const t={};return Lh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gn(n,(r,i)=>{const s=Gr(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function qd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof we||n instanceof ws||n instanceof pn||n instanceof ke||n instanceof Hr||n instanceof Is)}function Ba(n,e,t){if(!qd(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=vs(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Ko(n,e,t){if((e=Ie(e))instanceof Kr)return e._internalPath;if(typeof e=="string")return ja(n,e);throw ts("Field path arguments must be of type string or ",n,!1,void 0,t)}const kE=new RegExp("[~\\*/\\[\\]]");function ja(n,e,t){if(e.search(kE)>=0)throw ts(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kr(...e.split("."))._internalPath}catch{throw ts(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ts(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new L(k.INVALID_ARGUMENT,l+n+u)}function $d(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(As("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xE extends Wd{data(){return super.data()}}function As(n,e){return typeof e=="string"?ja(n,e):e instanceof Kr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class za{}class Rs extends za{}function ft(n,e,...t){let r=[];e instanceof za&&r.push(e),r=r.concat(t),function(s){const a=s.filter(u=>u instanceof Ss).length,l=s.filter(u=>u instanceof Qr).length;if(a>1||a>0&&l>0)throw new L(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Qr extends Rs{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Qr(e,t,r)}_apply(e){const t=this._parse(e);return Qd(e._query,t),new lt(e.firestore,e.converter,Lo(e._query,t))}_parse(e){const t=Ts(e.firestore);return function(s,a,l,u,h,f,v){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){vu(v,f);const I=[];for(const C of v)I.push(yu(u,s,C));m={arrayValue:{values:I}}}else m=yu(u,s,v)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||vu(v,f),m=PE(l,a,v,f==="in"||f==="not-in");return Ee.create(h,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function dt(n,e,t){const r=e,i=As("where",n);return Qr._create(i,r,t)}class Ss extends za{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ss(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Xe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)Qd(a,u),a=Lo(a,u)}(e._query,t),new lt(e.firestore,e.converter,Lo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cs extends Rs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Cs(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new L(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Pr(s,a)}(e._query,this._field,this._direction);return new lt(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new Kn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Hd(n,e="asc"){const t=e,r=As("orderBy",n);return Cs._create(r,t)}class Ps extends Rs{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ps(e,t,r)}_apply(e){return new lt(e.firestore,e.converter,Qi(e._query,this._limit,this._limitType))}}function Gd(n){return IE("limit",n),Ps._create("limit",n,"F")}function yu(n,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new L(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kh(e)&&t.indexOf("/")!==-1)throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ue.fromString(t));if(!B.isDocumentKey(r))throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fc(n,new B(r))}if(t instanceof ke)return Fc(n,t._key);throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vs(t)}.`)}function vu(n,e){if(!Array.isArray(n)||n.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qd(n,e){const t=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Yd{convertValue(e,t="none"){switch(fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return gn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ge(a.doubleValue));return new Is(s)}convertGeoPoint(e){return new ws(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=pa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Sr(e));default:return null}}convertTimestamp(e){const t=Wt(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ue.fromString(e);oe(pd(r));const i=new Ln(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(t)||Tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qa extends Wd{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(As("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class wr extends qa{data(e={}){return super.data(e)}}class $a{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Sn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new wr(this._firestore,this._userDataWriter,r.key,r,new Sn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new wr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Sn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new wr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Sn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:DE(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function DE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(n){n=Be(n,ke);const e=Be(n.firestore,at);return EE(Wr(e),n._key).then(t=>Zd(e,n,t))}class Wa extends Yd{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}function en(n){n=Be(n,lt);const e=Be(n.firestore,at),t=Wr(e),r=new Wa(e);return Kd(n._query),wE(t,n._query).then(i=>new $a(e,r,n,i))}function sn(n,e,t){n=Be(n,ke);const r=Be(n.firestore,at),i=Jd(n.converter,e,t);return Yr(r,[jd(Ts(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,He.none())])}function Xd(n,e,t,...r){n=Be(n,ke);const i=Be(n.firestore,at),s=Ts(i);let a;return a=typeof(e=Ie(e))=="string"||e instanceof Kr?CE(s,"updateDoc",n._key,e,t,r):SE(s,"updateDoc",n._key,e),Yr(i,[a.toMutation(n._key,He.exists(!0))])}function NE(n){return Yr(Be(n.firestore,at),[new va(n._key,He.none())])}function Ka(n,e){const t=Be(n.firestore,at),r=We(n),i=Jd(n.converter,e);return Yr(t,[jd(Ts(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,He.exists(!1))]).then(()=>r)}function ks(n,...e){var t,r,i;n=Ie(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||_u(e[a])||(s=e[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(_u(e[a])){const v=e[a];e[a]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[a+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[a+2]=(i=v.complete)===null||i===void 0?void 0:i.bind(v)}let u,h,f;if(n instanceof ke)h=Be(n.firestore,at),f=us(n._key.path),u={next:v=>{e[a]&&e[a](Zd(h,n,v))},error:e[a+1],complete:e[a+2]};else{const v=Be(n,lt);h=Be(v.firestore,at),f=v._query;const m=new Wa(h);u={next:I=>{e[a]&&e[a](new $a(h,m,v,I))},error:e[a+1],complete:e[a+2]},Kd(n._query)}return function(m,I,C,x){const P=new La(x),N=new Oa(I,P,C);return m.asyncQueue.enqueueAndForget(async()=>Da(await es(m),N)),()=>{P.Za(),m.asyncQueue.enqueueAndForget(async()=>Na(await es(m),N))}}(Wr(h),f,l,u)}function Yr(n,e){return function(r,i){const s=new vt;return r.asyncQueue.enqueueAndForget(async()=>cE(await vE(r),i,s)),s.promise}(Wr(n),e)}function Zd(n,e,t){const r=t.docs.get(e._key),i=new Wa(n);return new qa(n,i,e._key,r,new Sn(t.hasPendingWrites,t.fromCache),e.converter)}function qt(){return new Fa("serverTimestamp")}(function(e,t=!0){(function(i){Wn=i})(qn),Vn(new an("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new at(new j_(r.getProvider("auth-internal")),new W_(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),zt(Vc,"4.7.3",e),zt(Vc,"4.7.3","esm2017")})();const VE=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Yd,Bytes:pn,CollectionReference:Et,DocumentReference:ke,DocumentSnapshot:qa,FieldPath:Kr,FieldValue:Hr,Firestore:at,FirestoreError:L,GeoPoint:ws,Query:lt,QueryCompositeFilterConstraint:Ss,QueryConstraint:Rs,QueryDocumentSnapshot:wr,QueryFieldFilterConstraint:Qr,QueryLimitConstraint:Ps,QueryOrderByConstraint:Cs,QuerySnapshot:$a,SnapshotMetadata:Sn,Timestamp:we,VectorValue:Is,_AutoId:ha,_ByteString:Re,_DatabaseId:Ln,_DocumentKey:B,_EmptyAuthCredentialsProvider:Mh,_FieldPath:Ae,_cast:Be,_logWarn:hn,_validateIsNotUsedTogether:Md,addDoc:Ka,collection:Ye,connectFirestoreEmulator:Ld,deleteDoc:NE,doc:We,ensureFirestoreConfigured:Wr,executeWrite:Yr,getDoc:Vi,getDocs:en,getFirestore:Ud,limit:Gd,onSnapshot:ks,orderBy:Hd,query:ft,serverTimestamp:qt,setDoc:sn,updateDoc:Xd,where:dt},Symbol.toStringTag,{value:"Module"})),OE={apiKey:"AIzaSyCBSLz3aL1hx57bOoJzHa09k4yl9fw8SFI",authDomain:"vortex-messenger-4ea97.firebaseapp.com",projectId:"vortex-messenger-4ea97",storageBucket:"vortex-messenger-4ea97.firebasestorage.app",messagingSenderId:"294669525739",appId:"1:294669525739:web:fe8fc3472c649f348654ae"},ef=Wu(OE),Cn=U_(ef),de=Ud(ef);class ME{async createUser(e){const{uid:t,email:r,displayName:i,username:s}=e;await sn(We(de,"users",t),{uid:t,email:r,displayName:i,username:s,createdAt:new Date,updatedAt:new Date}),s&&await sn(We(de,"usernames",s),{username:s,uid:t,email:r})}async isUsernameAvailable(e){const t=ft(Ye(de,"usernames"),dt("username","==",e));return(await en(t)).empty}async findUser(e){const t=e.trim();if(t.startsWith("@")){const s=t.substring(1).toLowerCase(),a=ft(Ye(de,"usernames"),dt("username","==",s)),l=await en(a);if(!l.empty){const u=l.docs[0].data(),h=await Vi(We(de,"users",u.uid));return h.exists()?h.data():null}return null}if(t.includes("@")){const s=ft(Ye(de,"users"),dt("email","==",t)),a=await en(s);return a.empty?null:a.docs[0].data()}const r=ft(Ye(de,"usernames"),dt("username","==",t.toLowerCase())),i=await en(r);if(!i.empty){const s=i.docs[0].data(),a=await Vi(We(de,"users",s.uid));return a.exists()?a.data():null}return null}async searchUsers(e,t=10){const r=e.toLowerCase(),i=ft(Ye(de,"users"),dt("username",">=",r),dt("username","<=",r+""),Gd(t));return(await en(i)).docs.map(a=>a.data())}async getUserProfile(e){const t=await Vi(We(de,"users",e));return t.exists()?t.data():null}async updateProfile(e,t){await sn(We(de,"users",e),{...t,updatedAt:new Date},{merge:!0})}}const zn=new ME;class LE{constructor(){this.currentUser=null,this.listeners=[],ko(Cn,e=>{this.currentUser=e,this.listeners.forEach(t=>t(e))})}onAuthChange(e){return this.listeners.push(e),this.currentUser!==void 0&&e(this.currentUser),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}async login(e,t){await Ig(Cn,e,t)}async register(e,t,r,i=""){const s=await wg(Cn,e,t);await bg(s.user,{displayName:r}),await zn.createUser({uid:s.user.uid,email:e,displayName:r,username:i})}async logout(){await Sg(Cn)}getCurrentUser(){return this.currentUser}}const on=new LE;function UE(){const[n,e]=J("login"),[t,r]=J(""),[i,s]=J(""),[a,l]=J(""),[u,h]=J(""),[f,v]=J(""),[m,I]=J(!1),[C,x]=J(""),[P,N]=J(!1),O=async K=>{const Y=K.toLowerCase().replace(/[^a-z0-9_]/g,"");if(h(Y),Y.length<3){v("Минимум 3 символа");return}I(!0);try{const b=await zn.isUsernameAvailable(Y);v(b?"✅ Свободен":"❌ Занят")}catch{v("")}finally{I(!1)}},F=async K=>{K.preventDefault(),x(""),N(!0);try{if(n==="login")await on.login(t,i);else{if(a.length<2)throw new Error("Имя должно быть минимум 2 символа");if(u.length<3)throw new Error("Username минимум 3 символа");if(i.length<6)throw new Error("Пароль минимум 6 символов");await on.register(t,i,a,u)}}catch(Y){x(Y.message||"Ошибка")}finally{N(!1)}},H=K=>{K.key==="Enter"&&F(K)};return _("div",{style:se.wrapper,children:_("div",{style:se.card,children:[_("div",{style:se.logoSection,children:[_("div",{style:se.logoIcon,children:"🌪️"}),_("h1",{style:se.logoTitle,children:"Vortex"}),_("p",{style:se.logoSubtitle,children:"В центре общения"})]}),_("div",{style:se.tabs,children:[_("button",{onClick:()=>{e("login"),x("")},style:{...se.tab,background:n==="login"?"var(--bg-active)":"transparent",color:n==="login"?"var(--text-primary)":"var(--text-secondary)"},children:"Вход"}),_("button",{onClick:()=>{e("register"),x("")},style:{...se.tab,background:n==="register"?"var(--bg-active)":"transparent",color:n==="register"?"var(--text-primary)":"var(--text-secondary)"},children:"Регистрация"})]}),_("form",{onSubmit:F,style:se.form,children:[n==="register"&&_(Ke,{children:[_("div",{style:se.fieldGroup,children:[_("label",{style:se.label,children:"Имя"}),_("input",{type:"text",value:a,onInput:K=>l(K.target.value),placeholder:"Ваше имя",style:se.input,required:!0})]}),_("div",{style:se.fieldGroup,children:[_("label",{style:se.label,children:"Username"}),_("div",{style:se.usernameWrapper,children:[_("span",{style:se.usernamePrefix,children:"@"}),_("input",{type:"text",value:u,onInput:K=>O(K.target.value),placeholder:"username",style:{...se.input,paddingLeft:"2rem"},required:!0})]}),u.length>=3&&_("div",{style:{...se.statusText,color:f.includes("✅")?"var(--vortex-secondary)":f.includes("❌")?"var(--vortex-danger)":"var(--text-tertiary)"},children:m?"Проверка...":f})]})]}),_("div",{style:se.fieldGroup,children:[_("label",{style:se.label,children:"Email"}),_("input",{type:"email",value:t,onInput:K=>r(K.target.value),placeholder:"user@example.com",onKeyDown:H,style:se.input,required:!0})]}),_("div",{style:se.fieldGroup,children:[_("label",{style:se.label,children:"Пароль"}),_("input",{type:"password",value:i,onInput:K=>s(K.target.value),placeholder:"••••••••",onKeyDown:H,style:se.input,required:!0})]}),C&&_("div",{style:se.error,children:["⚠️ ",C]}),_("button",{type:"submit",disabled:P||n==="register"&&f.includes("❌"),style:{...se.submitBtn,opacity:P?.7:1},children:P?"Загрузка...":n==="login"?"Войти":"Зарегистрироваться"})]}),_("div",{style:se.switchText,children:n==="login"?_(Ke,{children:["Нет аккаунта?"," ",_("span",{onClick:()=>e("register"),style:se.switchLink,children:"Зарегистрироваться"})]}):_(Ke,{children:["Уже есть аккаунт?"," ",_("span",{onClick:()=>e("login"),style:se.switchLink,children:"Войти"})]})})]})})}const se={wrapper:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",background:"var(--bg-primary)"},card:{background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"20px",padding:"2.5rem",width:"420px",maxWidth:"90vw",boxShadow:"0 20px 60px rgba(0,0,0,0.4)"},logoSection:{textAlign:"center",marginBottom:"2rem"},logoIcon:{fontSize:"3rem"},logoTitle:{background:"var(--gradient-brand)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"2rem",fontWeight:800,margin:"0.5rem 0 0 0"},logoSubtitle:{color:"var(--text-secondary)",fontSize:"0.9rem",marginTop:"0.25rem"},tabs:{display:"flex",background:"rgba(255,255,255,0.03)",borderRadius:"14px",padding:"4px",marginBottom:"1.5rem"},tab:{flex:1,padding:"0.75rem",border:"none",borderRadius:"10px",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",transition:"all 0.2s",fontFamily:"inherit"},form:{display:"flex",flexDirection:"column",gap:"0.25rem"},fieldGroup:{marginBottom:"0.75rem"},label:{display:"block",fontSize:"0.8rem",fontWeight:500,color:"var(--text-secondary)",marginBottom:"0.35rem",textTransform:"uppercase",letterSpacing:"0.5px"},input:{width:"100%",padding:"0.75rem 1rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-default)",borderRadius:"12px",color:"var(--text-primary)",fontSize:"0.95rem",outline:"none",transition:"border-color 0.2s",fontFamily:"inherit"},usernameWrapper:{position:"relative"},usernamePrefix:{position:"absolute",left:"0.75rem",top:"50%",transform:"translateY(-50%)",color:"var(--text-tertiary)",fontWeight:600,fontSize:"0.95rem",pointerEvents:"none"},statusText:{fontSize:"0.75rem",marginTop:"0.25rem",paddingLeft:"0.25rem"},error:{padding:"0.75rem 1rem",background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:"10px",color:"#FCA5A5",fontSize:"0.85rem"},submitBtn:{width:"100%",padding:"0.85rem",background:"var(--gradient-brand)",color:"white",border:"none",borderRadius:"12px",fontSize:"1rem",fontWeight:600,cursor:"pointer",marginTop:"0.5rem",fontFamily:"inherit"},switchText:{textAlign:"center",marginTop:"1.25rem",fontSize:"0.85rem",color:"var(--text-secondary)"},switchLink:{color:"var(--vortex-primary-light)",cursor:"pointer",fontWeight:500}},FE="modulepreload",BE=function(n){return"/Vortex/"+n},Eu={},jE=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=BE(u),u in Eu)return;Eu[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const v=document.createElement("link");if(v.rel=h?"stylesheet":FE,h||(v.as="script"),v.crossOrigin="",v.href=u,l&&v.setAttribute("nonce",l),document.head.appendChild(v),h)return new Promise((m,I)=>{v.addEventListener("load",m),v.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};class zE{subscribeToMessages(e,t){const r=ft(Ye(de,"chats",e,"messages"),Hd("createdAt","asc"));return ks(r,i=>{const s=[];i.forEach(a=>{s.push({id:a.id,...a.data()})}),t(s)})}async sendMessage(e,t,r,i=null){const s={senderId:t.uid,senderName:t.displayName||t.email,createdAt:qt(),type:i?i.type:"text",text:r||""};i&&(s.fileData=i.fileData,s.fileName=i.fileName),await Ka(Ye(de,"chats",e,"messages"),s);const a=i?i.type==="image"?"📷 Фото":i.type==="voice"?"🎙️ Голосовое":"📎 Файл":r;await sn(We(de,"chats",e),{lastMessage:a,lastMessageTime:qt()},{merge:!0})}async editMessage(e,t,r){await Xd(We(de,"chats",e,"messages",t),{text:r,isEdited:!0,editedAt:qt()})}async deleteMessage(e,t){const{doc:r,deleteDoc:i,getDocs:s,query:a,collection:l,orderBy:u,limit:h,setDoc:f,serverTimestamp:v}=await jE(async()=>{const{doc:C,deleteDoc:x,getDocs:P,query:N,collection:O,orderBy:F,limit:H,setDoc:K,serverTimestamp:Y}=await Promise.resolve().then(()=>VE);return{doc:C,deleteDoc:x,getDocs:P,query:N,collection:O,orderBy:F,limit:H,setDoc:K,serverTimestamp:Y}},void 0);await i(r(de,"chats",e,"messages",t));const m=a(l(de,"chats",e,"messages"),u("createdAt","desc"),h(1)),I=await s(m);if(I.empty)await f(r(de,"chats",e),{lastMessage:"Нет сообщений",lastMessageTime:v()},{merge:!0});else{const C=I.docs[0].data(),x=C.type==="image"?"📷 Фото":C.type==="voice"?"🎙️ Голосовое":C.text||"";await f(r(de,"chats",e),{lastMessage:x,lastMessageTime:C.createdAt},{merge:!0})}}}const ns=new zE;class qE{subscribeToChats(e,t){const r=ft(Ye(de,"chats"),dt("participants","array-contains",e));return ks(r,i=>{const s=[];i.forEach(a=>{s.push({id:a.id,...a.data()})}),s.sort((a,l)=>{var f,v,m,I;const u=((v=(f=a.lastMessageTime)==null?void 0:f.toDate)==null?void 0:v.call(f))||0;return(((I=(m=l.lastMessageTime)==null?void 0:m.toDate)==null?void 0:I.call(m))||0)-u}),t(s)})}async createChat(e,t){const r=ft(Ye(de,"chats"),dt("participants","array-contains",e.uid)),s=(await en(r)).docs.find(u=>{const h=u.data();return h.participants.includes(t.uid)&&h.participants.length===2});if(s)return s.id;const a={participants:[e.uid,t.uid],participantEmails:[e.email,t.email],participantNames:[e.displayName||e.email,t.displayName||t.email],createdAt:qt(),lastMessage:"Чат создан",lastMessageTime:qt()};return(await Ka(Ye(de,"chats"),a)).id}async sendMessage(e,t,r,i=null){await ns.sendMessage(e,r,t,i)}subscribeToMessages(e,t){return ns.subscribeToMessages(e,t)}}const nn=new qE;class $E{constructor(){this.theme=localStorage.getItem("vortex-theme")||"dark",this.listeners=[],this.apply()}get(){return this.theme}toggle(){this.theme=this.theme==="dark"?"light":"dark",localStorage.setItem("vortex-theme",this.theme),this.apply(),this.listeners.forEach(e=>e(this.theme))}apply(){document.documentElement.setAttribute("data-theme",this.theme)}onChange(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}}const mo=new $E;function WE({user:n,onLogout:e,onProfile:t,onContacts:r,onTasks:i}){const[s,a]=J(!1),[l,u]=J(mo.get()),h=()=>{a(!s)},f=()=>{a(!1)},v=()=>{mo.toggle(),u(mo.get())},m=I=>{a(!1),I==null||I()};return _(Ke,{children:[_("button",{onClick:h,style:{width:"40px",height:"40px",borderRadius:"50%",background:"transparent",border:"1px solid var(--border-subtle)",color:"var(--text-secondary)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",transition:"all 0.15s"},onMouseEnter:I=>{I.target.style.background="var(--bg-hover)",I.target.style.color="var(--text-primary)"},onMouseLeave:I=>{I.target.style.background="transparent",I.target.style.color="var(--text-secondary)"},children:_("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[_("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),_("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),_("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),s&&_("div",{onClick:f,style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.5)",zIndex:200,backdropFilter:"blur(2px)",animation:"fadeIn 0.2s ease"}}),_("div",{style:{position:"fixed",top:0,left:s?0:"-320px",bottom:0,width:"320px",background:"var(--bg-secondary)",zIndex:201,transition:"left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",borderRight:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column"},children:[_("div",{style:{padding:"20px",borderBottom:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_("h3",{style:{fontWeight:700,fontSize:"1.1rem"},children:"Меню"}),_("button",{onClick:f,style:{width:"36px",height:"36px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1.2rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),_("div",{style:{flex:1,overflowY:"auto",padding:"8px"},children:[_(go,{icon:"👤",title:"Профиль",subtitle:(n==null?void 0:n.email)||"email",onClick:()=>m(t)}),_(go,{icon:"👥",title:"Контакты",subtitle:"Поиск пользователей",onClick:()=>m(r)}),_(go,{icon:"📋",title:"Задачи",subtitle:"Список задач",onClick:()=>m(i)}),_("div",{style:{height:"1px",background:"var(--border-subtle)",margin:"8px 16px"}}),_("div",{onClick:v,style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s"},onMouseEnter:I=>I.target.style.background="var(--bg-hover)",onMouseLeave:I=>I.target.style.background="transparent",children:[_("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},children:l==="dark"?"🌙":"☀️"}),_("div",{children:[_("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:l==="dark"?"Тёмная тема":"Светлая тема"}),_("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:l==="dark"?"Включена":"Выключена"})]})]}),_("div",{style:{height:"1px",background:"var(--border-subtle)",margin:"8px 16px"}}),_("div",{onClick:()=>m(e),style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s",color:"var(--vortex-danger)"},onMouseEnter:I=>I.target.style.background="rgba(239,68,68,0.1)",onMouseLeave:I=>I.target.style.background="transparent",children:[_("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"rgba(239,68,68,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},children:"🚪"}),_("div",{children:_("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:"Выйти"})})]})]})]})]})}function go({icon:n,title:e,subtitle:t,onClick:r}){return _("div",{onClick:r,style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s"},onMouseEnter:i=>i.target.style.background="var(--bg-hover)",onMouseLeave:i=>i.target.style.background="transparent",children:[_("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},children:n}),_("div",{children:[_("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:e}),t&&_("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:t})]})]})}function KE({onPersonalChat:n,onGroupChat:e,onChannel:t}){const[r,i]=J(!1),s=Tr(null),a=Tr(null);Ut(()=>{const h=f=>{s.current&&!s.current.contains(f.target)&&!a.current.contains(f.target)&&i(!1)};return document.addEventListener("click",h),()=>document.removeEventListener("click",h)},[]);const l=h=>{h.stopPropagation(),i(!r)},u=h=>{i(!1),h==null||h()};return _("div",{style:{position:"absolute",bottom:"20px",right:"20px",zIndex:30},children:[_("button",{ref:a,onClick:l,style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--gradient-brand)",border:"none",color:"white",fontSize:"1.8rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(124, 58, 237, 0.4)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transform:r?"rotate(45deg)":"rotate(0deg)",fontWeight:300,lineHeight:1},children:"+"}),r&&_("div",{ref:s,style:{position:"absolute",bottom:"70px",right:"0",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"var(--radius-lg)",boxShadow:"0 12px 40px rgba(0, 0, 0, 0.5)",padding:"8px",minWidth:"240px",animation:"menuPopup 0.2s cubic-bezier(0.4, 0, 0.2, 1)",transformOrigin:"bottom right"},children:[_("button",{onClick:()=>u(n),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",background:"transparent",border:"none",borderRadius:"var(--radius-md)",color:"var(--text-primary)",cursor:"pointer",fontSize:"0.9rem",textAlign:"left",transition:"background 0.15s"},onMouseEnter:h=>h.target.style.background="var(--bg-hover)",onMouseLeave:h=>h.target.style.background="transparent",children:[_("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:"var(--gradient-brand)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",flexShrink:0},children:_("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[_("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),_("circle",{cx:"12",cy:"7",r:"4"})]})}),_("div",{children:[_("div",{style:{fontWeight:600},children:"Личный чат"}),_("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:"Начать общение"})]})]}),_("button",{onClick:()=>u(e),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",background:"transparent",border:"none",borderRadius:"var(--radius-md)",color:"var(--text-primary)",cursor:"pointer",fontSize:"0.9rem",textAlign:"left",transition:"background 0.15s"},onMouseEnter:h=>h.target.style.background="var(--bg-hover)",onMouseLeave:h=>h.target.style.background="transparent",children:[_("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:"var(--gradient-success)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",flexShrink:0},children:_("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[_("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),_("circle",{cx:"9",cy:"7",r:"4"}),_("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),_("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),_("div",{children:[_("div",{style:{fontWeight:600},children:"Группа"}),_("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:"Создать группу"})]})]}),_("button",{onClick:()=>u(t),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",background:"transparent",border:"none",borderRadius:"var(--radius-md)",color:"var(--text-primary)",cursor:"pointer",fontSize:"0.9rem",textAlign:"left",transition:"background 0.15s"},onMouseEnter:h=>h.target.style.background="var(--bg-hover)",onMouseLeave:h=>h.target.style.background="transparent",children:[_("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:"linear-gradient(135deg, #F59E0B, #EF4444)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",flexShrink:0},children:_("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[_("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"}),_("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]})}),_("div",{children:[_("div",{style:{fontWeight:600},children:"Канал"}),_("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:"Создать канал (скоро)"})]})]})]})]})}function HE({user:n,onClose:e,onChatCreated:t}){const[r,i]=J(""),[s,a]=J(null),[l,u]=J(!1),[h,f]=J(""),[v,m]=J("search"),I=async()=>{if(!r.trim()){f("Введите email или @username");return}u(!0),f("");try{const N=await zn.findUser(r);N?N.uid===(N==null?void 0:N.uid)?(f("Это ваш аккаунт"),a(null)):(a(N),m("result")):(f("Пользователь не найден"),a(null))}catch{f("Ошибка поиска")}finally{u(!1)}},C=async()=>{if(s){u(!0),m("creating");try{const N=await nn.createChat(n,s);t==null||t(N),e==null||e()}catch(N){f("Ошибка создания чата: "+N.message),m("result")}finally{u(!1)}}},x=N=>{N.key==="Enter"&&(v==="search"?I():v==="result"&&C()),N.key==="Escape"&&(e==null||e())},P=N=>{const O=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let F=0;for(let H=0;H<(N||"").length;H++)F=N.charCodeAt(H)+((F<<5)-F);return O[Math.abs(F)%O.length]};return _("div",{style:he.overlay,onClick:e,children:_("div",{style:he.modal,onClick:N=>N.stopPropagation(),children:[_("div",{style:he.header,children:[_("h3",{style:he.title,children:"Новый чат"}),_("button",{onClick:e,style:he.closeBtn,children:"✕"})]}),_("div",{style:he.body,children:[v==="search"&&_(Ke,{children:[_("p",{style:he.hint,children:"Введите email или @username пользователя"}),_("div",{style:he.searchContainer,children:[_("input",{type:"text",value:r,onInput:N=>{i(N.target.value),f("")},onKeyDown:x,placeholder:"Email или @username",style:he.input,autoFocus:!0}),_("button",{onClick:I,disabled:l||!r.trim(),style:{...he.searchBtn,opacity:l||!r.trim()?.5:1},children:l?"...":"Найти"})]}),h&&_("p",{style:he.error,children:h})]}),v==="result"&&s&&_(Ke,{children:[_("p",{style:he.hint,children:"Пользователь найден:"}),_("div",{style:he.userCard,children:[_("div",{style:{...he.userAvatar,background:P(s.displayName||s.email)},children:(s.displayName||s.email).charAt(0).toUpperCase()}),_("div",{style:he.userInfo,children:[_("div",{style:he.userName,children:s.displayName||"Без имени"}),_("div",{style:he.userEmail,children:s.email}),s.username&&_("div",{style:he.userUsername,children:["@",s.username]})]})]}),_("div",{style:he.actions,children:[_("button",{onClick:()=>m("search"),style:he.backBtn,children:"← Назад"}),_("button",{onClick:C,disabled:l,style:{...he.createBtn,opacity:l?.7:1},children:l?"Создание...":"Создать чат"})]}),h&&_("p",{style:he.error,children:h})]}),v==="creating"&&_("div",{style:he.creatingState,children:[_("div",{style:he.spinner,children:"⏳"}),_("p",{children:"Создаём чат..."})]})]})]})})}const he={overlay:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,animation:"fadeIn 0.2s ease"},modal:{background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"16px",width:"440px",maxWidth:"90vw",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",animation:"slideUp 0.25s ease",overflow:"hidden"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.25rem 1.5rem",borderBottom:"1px solid var(--border-subtle)"},title:{margin:0,fontSize:"1.1rem",fontWeight:700,color:"var(--text-primary)"},closeBtn:{width:"32px",height:"32px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},body:{padding:"1.5rem"},hint:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"1rem"},searchContainer:{display:"flex",gap:"0.5rem"},input:{flex:1,padding:"0.75rem 1rem",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-default)",borderRadius:"12px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none"},searchBtn:{padding:"0.75rem 1.25rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"white",fontWeight:600,cursor:"pointer",fontSize:"0.9rem"},error:{color:"var(--vortex-danger)",fontSize:"0.85rem",marginTop:"0.75rem",padding:"0.5rem 0.75rem",background:"rgba(239,68,68,0.1)",borderRadius:"8px"},userCard:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem",background:"rgba(255,255,255,0.03)",borderRadius:"12px",border:"1px solid var(--border-subtle)",marginBottom:"1rem"},userAvatar:{width:"56px",height:"56px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"1.3rem",flexShrink:0},userInfo:{flex:1},userName:{fontWeight:600,fontSize:"1rem"},userEmail:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:"2px"},userUsername:{fontSize:"0.8rem",color:"var(--vortex-primary-light)",marginTop:"2px"},actions:{display:"flex",gap:"0.75rem"},backBtn:{flex:1,padding:"0.75rem",background:"transparent",border:"1px solid var(--border-default)",borderRadius:"12px",color:"var(--text-secondary)",cursor:"pointer",fontSize:"0.9rem"},createBtn:{flex:2,padding:"0.75rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"white",fontWeight:600,cursor:"pointer",fontSize:"0.9rem"},creatingState:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},spinner:{fontSize:"2rem",marginBottom:"1rem"}};function GE({onClose:n}){const[e,t]=J(null),[r,i]=J(""),[s,a]=J(""),[l,u]=J(!1),[h,f]=J("");Ut(()=>{v()},[]);const v=async()=>{const x=on.getCurrentUser();if(!x)return;const P=await zn.getUserProfile(x.uid);t(P),i((P==null?void 0:P.displayName)||""),a((P==null?void 0:P.bio)||"")},m=async()=>{u(!0),f("");try{await zn.updateProfile(on.getCurrentUser().uid,{displayName:r,bio:s}),f("✅ Профиль обновлён!"),setTimeout(()=>n==null?void 0:n(),1e3)}catch{f("❌ Ошибка сохранения")}finally{u(!1)}},I=x=>{const P=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let N=0;for(let O=0;O<(x||"").length;O++)N=x.charCodeAt(O)+((N<<5)-N);return P[Math.abs(N)%P.length]},C=on.getCurrentUser();return _("div",{style:fe.overlay,onClick:n,children:_("div",{style:fe.modal,onClick:x=>x.stopPropagation(),children:[_("div",{style:fe.header,children:[_("h3",{style:fe.title,children:"👤 Профиль"}),_("button",{onClick:n,style:fe.closeBtn,children:"✕"})]}),_("div",{style:fe.body,children:[_("div",{style:fe.avatarSection,children:[_("div",{style:{...fe.avatar,background:I(r||(C==null?void 0:C.email))},children:(r||(C==null?void 0:C.email)||"?").charAt(0).toUpperCase()}),_("button",{style:fe.changeAvatarBtn,children:"📷 Изменить аватар"})]}),_("div",{style:fe.field,children:[_("label",{style:fe.label,children:"Имя"}),_("input",{type:"text",value:r,onInput:x=>i(x.target.value),style:fe.input,placeholder:"Ваше имя"})]}),_("div",{style:fe.field,children:[_("label",{style:fe.label,children:"Username"}),_("div",{style:fe.usernameDisplay,children:["@",(e==null?void 0:e.username)||"не задан"]})]}),_("div",{style:fe.field,children:[_("label",{style:fe.label,children:"Email"}),_("div",{style:fe.usernameDisplay,children:C==null?void 0:C.email})]}),_("div",{style:fe.field,children:[_("label",{style:fe.label,children:"Bio"}),_("textarea",{value:s,onInput:x=>a(x.target.value),style:fe.textarea,placeholder:"Расскажите о себе...",rows:3})]}),h&&_("div",{style:{...fe.message,background:h.includes("✅")?"rgba(6,214,160,0.1)":"rgba(239,68,68,0.1)",color:h.includes("✅")?"var(--vortex-secondary)":"var(--vortex-danger)"},children:h}),_("button",{onClick:m,disabled:l,style:{...fe.saveBtn,opacity:l?.7:1},children:l?"Сохранение...":"💾 Сохранить"})]})]})})}const fe={overlay:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,animation:"fadeIn 0.2s ease"},modal:{background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"20px",width:"440px",maxWidth:"90vw",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",animation:"slideUp 0.25s ease",overflow:"hidden"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.25rem 1.5rem",borderBottom:"1px solid var(--border-subtle)"},title:{margin:0,fontSize:"1.1rem",fontWeight:700},closeBtn:{width:"32px",height:"32px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},body:{padding:"1.5rem"},avatarSection:{textAlign:"center",marginBottom:"1.5rem"},avatar:{width:"80px",height:"80px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"2rem",margin:"0 auto"},changeAvatarBtn:{marginTop:"0.75rem",padding:"0.4rem 1rem",background:"transparent",border:"1px solid var(--border-default)",borderRadius:"8px",color:"var(--text-secondary)",cursor:"pointer",fontSize:"0.8rem"},field:{marginBottom:"1rem"},label:{display:"block",fontSize:"0.75rem",fontWeight:500,color:"var(--text-secondary)",marginBottom:"0.35rem",textTransform:"uppercase",letterSpacing:"0.5px"},input:{width:"100%",padding:"0.7rem 1rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-default)",borderRadius:"10px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none"},textarea:{width:"100%",padding:"0.7rem 1rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-default)",borderRadius:"10px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none",resize:"vertical",fontFamily:"inherit"},usernameDisplay:{padding:"0.7rem 1rem",background:"rgba(255,255,255,0.02)",border:"1px solid var(--border-subtle)",borderRadius:"10px",color:"var(--text-secondary)",fontSize:"0.9rem"},message:{padding:"0.6rem 1rem",borderRadius:"10px",fontSize:"0.85rem",marginBottom:"1rem"},saveBtn:{width:"100%",padding:"0.8rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"white",fontWeight:600,fontSize:"0.95rem",cursor:"pointer"}};function QE({user:n,activeChat:e,onSelectChat:t}){const[r,i]=J([]),[s,a]=J(""),[l,u]=J(!1),[h,f]=J(!1),[v,m]=J(""),[I,C]=J([]),[x,P]=J(!1),N=Tr(null);Ut(()=>nn.subscribeToChats(n.uid,i),[n.uid]);const O=g=>{var w,Te,Ze,yn,et;const E=(w=g.participantEmails)==null?void 0:w.findIndex(ct=>ct!==n.email),T=((Te=g.participantNames)==null?void 0:Te[E])||((yn=(Ze=g.participantEmails)==null?void 0:Ze[E])==null?void 0:yn.split("@")[0])||"Чат",A=((et=g.participantEmails)==null?void 0:et[E])||"";return{name:T,email:A}},F=g=>{const E=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let T=0;for(let A=0;A<(g||"").length;A++)T=g.charCodeAt(A)+((T<<5)-T);return E[Math.abs(T)%E.length]},H=g=>{if(!(g!=null&&g.toDate))return"";const E=g.toDate(),T=new Date,A=E.getHours().toString().padStart(2,"0"),w=E.getMinutes().toString().padStart(2,"0");if(E.toDateString()===T.toDateString())return`${A}:${w}`;const Te=new Date(T);return Te.setDate(Te.getDate()-1),E.toDateString()===Te.toDateString()?"Вчера":E.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"})},K=async()=>{await on.logout()},Y=g=>{if(m(g),a(g),N.current&&clearTimeout(N.current),g.trim().length<2){C([]),P(!1);return}N.current=setTimeout(async()=>{try{const E=await zn.searchUsers(g);C(E.filter(T=>T.uid!==n.uid)),P(!0)}catch{C([])}},300)},b=async g=>{try{const E=await nn.createChat(n,g);P(!1),m(""),a(""),t==null||t({id:E})}catch(E){console.error("Ошибка создания чата:",E)}},y=r.filter(g=>{if(!s)return!0;const{name:E}=O(g);return E.toLowerCase().includes(s.toLowerCase())});return _("div",{style:te.container,children:[_("div",{style:te.header,children:[_(WE,{user:n,onLogout:K,onProfile:()=>f(!0)}),_("h2",{style:te.logo,children:"🌪️ Vortex"}),_("div",{style:{width:"40px"}})]}),_("div",{style:te.searchContainer,children:[_("div",{style:te.searchWrapper,children:[_("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",style:te.searchIcon,children:[_("circle",{cx:"11",cy:"11",r:"8"}),_("path",{d:"m21 21-4.35-4.35"})]}),_("input",{type:"text",value:v,onInput:g=>Y(g.target.value),placeholder:"Поиск чатов и пользователей...",style:te.searchInput})]}),x&&v&&_("div",{style:te.globalResults,children:[I.length>0&&_(Ke,{children:[_("div",{style:te.resultSectionTitle,children:"Пользователи"}),I.map(g=>_("div",{onClick:()=>b(g),style:te.globalResultItem,children:[_("div",{style:{...te.globalAvatar,background:F(g.displayName||g.email)},children:(g.displayName||g.email).charAt(0).toUpperCase()}),_("div",{style:te.globalInfo,children:[_("div",{style:te.globalName,children:g.displayName||"Без имени"}),_("div",{style:te.globalEmail,children:["@",g.username||g.email.split("@")[0]]})]})]},g.uid))]}),y.length>0&&_(Ke,{children:[_("div",{style:te.resultSectionTitle,children:"Чаты"}),y.map(g=>{const{name:E}=O(g);return _("div",{onClick:()=>{t(g),m(""),a(""),P(!1)},style:te.globalResultItem,children:[_("div",{style:{...te.globalAvatar,background:F(E)},children:E.charAt(0).toUpperCase()}),_("div",{style:te.globalInfo,children:[_("div",{style:te.globalName,children:E}),_("div",{style:te.globalEmail,children:g.lastMessage||"Нет сообщений"})]})]},g.id)})]})]}),x&&v&&I.length===0&&y.length===0&&_("div",{style:te.noResults,children:"Ничего не найдено"})]}),_("div",{style:te.chatList,children:y.length===0?_("div",{style:te.emptyState,children:[_("div",{style:te.emptyIcon,children:"💬"}),_("p",{style:te.emptyText,children:s?"Ничего не найдено":"Нет чатов"}),!s&&_("p",{style:te.emptyHint,children:"Нажмите + чтобы создать чат"})]}):y.map(g=>{const{name:E}=O(g),T=F(E),A=(e==null?void 0:e.id)===g.id;return _("div",{onClick:()=>t(g),style:{...te.chatItem,background:A?"var(--bg-active)":"transparent",border:A?"1px solid rgba(124, 58, 237, 0.2)":"1px solid transparent"},children:[_("div",{style:{...te.chatAvatar,background:T},children:E.charAt(0).toUpperCase()}),_("div",{style:te.chatInfo,children:[_("div",{style:te.chatName,children:E}),_("div",{style:te.chatLastMsg,children:g.lastMessage||"Нет сообщений"})]}),_("div",{style:te.chatMeta,children:_("div",{style:te.chatTime,children:H(g.lastMessageTime)})})]},g.id)})}),_(KE,{onPersonalChat:()=>u(!0),onGroupChat:()=>alert("Группы скоро! 🚀"),onChannel:()=>alert("Каналы скоро! 📢")}),l&&_(HE,{user:n,onClose:()=>u(!1),onChatCreated:g=>{u(!1),t==null||t({id:g})}}),h&&_(GE,{onClose:()=>f(!1)})]})}const te={container:{width:"380px",minWidth:"380px",background:"var(--bg-secondary)",borderRight:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",height:"100%",position:"relative"},header:{padding:"1rem 1.25rem",display:"flex",justifyContent:"space-between",alignItems:"center"},logo:{background:"var(--gradient-brand)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"1.2rem",fontWeight:700,margin:0},searchContainer:{padding:"0.25rem 1rem",position:"relative"},searchWrapper:{position:"relative",display:"flex",alignItems:"center"},searchIcon:{position:"absolute",left:"12px",color:"var(--text-tertiary)",pointerEvents:"none"},searchInput:{width:"100%",padding:"0.6rem 1rem 0.6rem 2.5rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",borderRadius:"12px",color:"var(--text-primary)",fontSize:"0.85rem",outline:"none"},globalResults:{background:"var(--bg-tertiary)",border:"1px solid var(--border-default)",borderRadius:"12px",marginTop:"4px",maxHeight:"300px",overflowY:"auto",boxShadow:"0 8px 24px rgba(0,0,0,0.3)",position:"absolute",left:"1rem",right:"1rem",zIndex:50},resultSectionTitle:{padding:"0.5rem 1rem",fontSize:"0.7rem",fontWeight:600,color:"var(--text-tertiary)",textTransform:"uppercase",letterSpacing:"1px"},globalResultItem:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem 1rem",cursor:"pointer",transition:"background 0.15s",borderBottom:"1px solid var(--border-subtle)"},globalAvatar:{width:"42px",height:"42px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"1rem",flexShrink:0},globalInfo:{flex:1,minWidth:0},globalName:{fontWeight:600,fontSize:"0.9rem"},globalEmail:{fontSize:"0.8rem",color:"var(--text-secondary)",marginTop:"2px"},noResults:{padding:"1rem",textAlign:"center",color:"var(--text-tertiary)",fontSize:"0.85rem",background:"var(--bg-tertiary)",borderRadius:"12px",marginTop:"4px",position:"absolute",left:"1rem",right:"1rem",zIndex:50},chatList:{flex:1,overflowY:"auto",padding:"0.25rem 0.75rem"},chatItem:{display:"flex",alignItems:"center",padding:"0.7rem 0.75rem",borderRadius:"12px",cursor:"pointer",marginBottom:"2px",transition:"all 0.15s ease"},chatAvatar:{width:"50px",height:"50px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"1.1rem",marginRight:"0.75rem",flexShrink:0},chatInfo:{flex:1,minWidth:0},chatName:{fontWeight:600,fontSize:"0.9rem",marginBottom:"2px"},chatLastMsg:{fontSize:"0.8rem",color:"var(--text-secondary)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},chatMeta:{marginLeft:"0.5rem",flexShrink:0},chatTime:{fontSize:"0.7rem",color:"var(--text-tertiary)"},emptyState:{textAlign:"center",padding:"2rem",color:"var(--text-tertiary)"},emptyIcon:{fontSize:"3rem",marginBottom:"0.5rem"},emptyText:{fontSize:"0.9rem"},emptyHint:{fontSize:"0.75rem",marginTop:"0.25rem"}};class YE{constructor(){this.unsubscribers={}}startTracking(){ko(Cn,e=>{if(!e)return;const t=We(de,"users",e.uid),r=()=>{sn(t,{isOnline:!0,lastSeen:qt()},{merge:!0})},i=()=>{sn(t,{isOnline:!1,lastSeen:qt()},{merge:!0})};r();const s=setInterval(r,3e4);window.addEventListener("beforeunload",i);const a=ko(Cn,l=>{l||(clearInterval(s),window.removeEventListener("beforeunload",i),i())});return()=>{clearInterval(s),window.removeEventListener("beforeunload",i),a()}})}watchUser(e,t){this.unsubscribers[e]&&this.unsubscribers[e]();const r=We(de,"users",e),i=ks(r,s=>{var a,l;if(s.exists()){const u=s.data();t({isOnline:u.isOnline||!1,lastSeen:((l=(a=u.lastSeen)==null?void 0:a.toDate)==null?void 0:l.call(a))||null})}else t({isOnline:!1,lastSeen:null})});return this.unsubscribers[e]=i,i}destroy(){Object.values(this.unsubscribers).forEach(e=>e()),this.unsubscribers={}}}const tf=new YE;class JE{constructor(){this.mediaRecorder=null,this.audioChunks=[],this.isRecording=!1,this.stream=null}async startRecording(){try{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Микрофон не поддерживается");this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,sampleRate:44100}});const e=MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?"audio/webm;codecs=opus":MediaRecorder.isTypeSupported("audio/webm")?"audio/webm":"audio/mp4";return this.mediaRecorder=new MediaRecorder(this.stream,{mimeType:e}),this.audioChunks=[],this.mediaRecorder.ondataavailable=t=>{t.data.size>0&&this.audioChunks.push(t.data)},this.mediaRecorder.start(100),this.isRecording=!0,!0}catch(e){console.error("Ошибка записи:",e);try{return this.stream=await navigator.mediaDevices.getUserMedia({audio:!0}),this.mediaRecorder=new MediaRecorder(this.stream),this.audioChunks=[],this.mediaRecorder.ondataavailable=t=>{t.data.size>0&&this.audioChunks.push(t.data)},this.mediaRecorder.start(100),this.isRecording=!0,!0}catch(t){return console.error("Фолбэк ошибка:",t),!1}}}stopRecording(){return new Promise((e,t)=>{if(!this.mediaRecorder||!this.isRecording){t(new Error("Нет активной записи"));return}this.mediaRecorder.onstop=()=>{const r=new Blob(this.audioChunks,{type:this.mediaRecorder.mimeType||"audio/webm"});this.stream&&this.stream.getTracks().forEach(s=>s.stop());const i=new FileReader;i.onloadend=()=>e(i.result),i.onerror=t,i.readAsDataURL(r)},this.mediaRecorder.stop(),this.isRecording=!1})}cancelRecording(){this.mediaRecorder&&this.isRecording&&(this.mediaRecorder.stop(),this.isRecording=!1,this.stream&&this.stream.getTracks().forEach(e=>e.stop()))}}const wu=new JE;class XE{constructor(){this.apiKey=localStorage.getItem("vortex-openai-key")||"",this.endpoint="https://api.openai.com/v1/chat/completions"}setApiKey(e){this.apiKey=e,localStorage.setItem("vortex-openai-key",e)}hasApiKey(){return!!this.apiKey}async callAI(e,t=.7,r=200){var a,l,u;if(!this.apiKey)throw new Error("API ключ не настроен");const i=await fetch(this.endpoint,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:e,temperature:t,max_tokens:r})});if(!i.ok)throw new Error("Ошибка AI: "+i.status);return((u=(l=(a=(await i.json()).choices)==null?void 0:a[0])==null?void 0:l.message)==null?void 0:u.content)||""}async getSmartReplies(e){const t=e.slice(-5).map(i=>`${i.senderName||"User"}: ${i.text}`).join(`
`),r=await this.callAI([{role:"system",content:'Предложи 3 коротких варианта ответа на последнее сообщение. Отвечай строго в формате: ["ответ1", "ответ2", "ответ3"]. Не больше 80 символов каждый.'},{role:"user",content:`Контекст:
${t}

Предложи варианты ответа:`}],.8,150);try{return JSON.parse(r)}catch{return r.split(`
`).filter(i=>i.trim())}}async translate(e,t="ru"){const r=t==="ru"?"русский":"английский";return this.callAI([{role:"system",content:`Переведи текст на ${r} язык. Отвечай только переводом, без пояснений.`},{role:"user",content:e}],.3,500)}async summarize(e){const t=e.map(r=>`${r.senderName||"User"}: ${r.text}`).join(`
`);return this.callAI([{role:"system",content:"Сделай краткое саммари переписки в 2-3 предложениях."},{role:"user",content:t}],.5,200)}}const _o=new XE;function ZE({chat:n,user:e}){const[t,r]=J([]),[i,s]=J(""),[a,l]=J(null),[u,h]=J({isOnline:!1,lastSeen:null}),[f,v]=J(null),[m,I]=J(!1),[C,x]=J(!1),P=Tr(null),N=Tr(null);Ut(()=>{if(n)return nn.subscribeToMessages(n.id,r)},[n==null?void 0:n.id]),Ut(()=>{var M;(M=P.current)==null||M.scrollIntoView({behavior:"smooth"})},[t]),Ut(()=>{var j;if(!n)return;const M=(j=n.participants)==null?void 0:j.find(G=>G!==e.uid);if(M)return tf.watchUser(M,h)},[n==null?void 0:n.id,e.uid]),Ut(()=>{const M=()=>v(null);return document.addEventListener("click",M),()=>document.removeEventListener("click",M)},[]);const O=async M=>{M==null||M.preventDefault();const j=a?a.text:i;!j.trim()||!n||(a?(await ns.editMessage(n.id,a.id,j),l(null)):await nn.sendMessage(n.id,j,e),s(""))},F=async M=>{var ne;const j=(ne=M.target.files)==null?void 0:ne[0];if(!j||!n)return;const G=new FileReader;G.onload=async $e=>{await nn.sendMessage(n.id,"",e,{type:j.type.startsWith("image/")?"image":"file",fileData:$e.target.result,fileName:j.name})},G.readAsDataURL(j),M.target.value=""},H=async M=>{confirm("Удалить сообщение?")&&(await ns.deleteMessage(n.id,M),v(null))},K=(M,j)=>{l({id:M,text:j}),s(j),v(null)},Y=(M,j,G,ne)=>{M.preventDefault(),G&&v({x:M.clientX,y:M.clientY,messageId:j,text:ne})},b=()=>{l(null),s("")},y=async()=>{await wu.startRecording()&&I(!0)},g=async()=>{if(m){try{const M=await wu.stopRecording();await nn.sendMessage(n.id,"",e,{type:"voice",fileData:M,fileName:"voice.webm"})}catch(M){console.error("Ошибка голосового:",M)}I(!1)}},E=()=>x(!C),T=async()=>{try{const M=await _o.getSmartReplies(t);M.length>0&&s(M[0])}catch(M){alert("AI: "+M.message)}x(!1)},A=async()=>{const M=t[t.length-1];if(M)try{const j=await _o.translate(M.text);alert(j)}catch(j){alert("AI: "+j.message)}x(!1)},w=async()=>{try{const M=await _o.summarize(t);alert(M)}catch(M){alert("AI: "+M.message)}x(!1)},Te=()=>{var G,ne,$e,Ge;if(!n)return{name:"Чат",email:""};const M=(G=n.participantEmails)==null?void 0:G.findIndex(Ct=>Ct!==e.email);return{name:((ne=n.participantNames)==null?void 0:ne[M])||((Ge=($e=n.participantEmails)==null?void 0:$e[M])==null?void 0:Ge.split("@")[0])||"Чат"}},Ze=M=>{const j=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let G=0;for(let ne=0;ne<(M||"").length;ne++)G=M.charCodeAt(ne)+((G<<5)-G);return j[Math.abs(G)%j.length]},yn=M=>{if(!(M!=null&&M.toDate))return"";const j=M.toDate(),G=j.getHours().toString().padStart(2,"0"),ne=j.getMinutes().toString().padStart(2,"0");return`${G}:${ne}`},et=M=>{if(!M)return"";const G=Math.floor((new Date-M)/1e3);return G<60?"только что":G<3600?`${Math.floor(G/60)} мин назад`:G<86400?`${Math.floor(G/3600)} ч назад`:M.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"})},ct=M=>{const j=[];let G="";return M.forEach(ne=>{var Ct,Jr;const $e=(Jr=(Ct=ne.createdAt)==null?void 0:Ct.toDate)==null?void 0:Jr.call(Ct),Ge=($e==null?void 0:$e.toLocaleDateString("ru-RU",{day:"2-digit",month:"long",year:"numeric"}))||"";Ge!==G&&(G=Ge,j.push({type:"date",date:Ge})),j.push({type:"message",data:ne})}),j};if(!n)return _("div",{style:Q.emptyContainer,children:_("div",{style:Q.emptyContent,children:[_("div",{style:Q.emptyLogo,children:"🌪️"}),_("h2",{style:Q.emptyTitle,children:"Vortex"}),_("p",{style:Q.emptyText,children:["Выберите чат или создайте новый,",_("br",{}),"чтобы начать общение"]})]})});const St=Te(),Qn=Ze(St.name),xs=ct(t);return _("div",{style:Q.container,children:[_("div",{style:Q.header,children:_("div",{style:Q.headerLeft,children:[_("div",{style:{...Q.headerAvatar,background:Qn},children:St.name.charAt(0).toUpperCase()}),_("div",{style:Q.headerInfo,children:[_("div",{style:Q.headerName,children:St.name}),_("div",{style:Q.headerStatus,children:[_("span",{style:{...Q.onlineDot,background:u.isOnline?"var(--vortex-secondary)":"var(--text-tertiary)"}}),u.isOnline?"В сети":u.lastSeen?`Был(а) ${et(u.lastSeen)}`:"Не в сети"]})]})]})}),_("div",{style:Q.messagesContainer,children:[xs.map((M,j)=>{if(M.type==="date")return _("div",{style:Q.dateDivider,children:_("span",{style:Q.dateText,children:M.date})},`date-${j}`);const G=M.data,ne=G.senderId===e.uid;return _("div",{style:{...Q.messageWrapper,justifyContent:ne?"flex-end":"flex-start"},onContextMenu:$e=>Y($e,G.id,ne,G.text),children:[!ne&&_("div",{style:{...Q.messageAvatar,background:Qn,marginRight:"8px"},children:St.name.charAt(0).toUpperCase()}),_("div",{style:{...Q.messageBubble,background:ne?"var(--gradient-brand)":"var(--bg-tertiary)",borderBottomRightRadius:ne?"4px":"16px",borderBottomLeftRadius:ne?"16px":"4px",color:ne?"white":"var(--text-primary)",maxWidth:"65%"},children:[G.type==="image"?_("img",{src:G.fileData,alt:G.fileName,style:Q.messageImage}):G.type==="voice"?_("audio",{controls:!0,src:G.fileData,style:Q.messageAudio}):_("div",{style:Q.messageText,children:[G.isEdited&&_("span",{style:Q.editedMark,children:"(изм.) "}),G.text]}),_("div",{style:Q.messageMeta,children:[yn(G.createdAt),ne&&_("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:_("polyline",{points:"20 6 9 17 4 12"})})]})]}),ne&&_("div",{style:{width:"32px",marginLeft:"8px"}})]},G.id)}),_("div",{ref:P})]}),f&&_("div",{style:{...Q.contextMenu,top:f.y,left:f.x},children:[_("button",{style:Q.contextMenuItem,onClick:()=>K(f.messageId,f.text),children:"✏️ Редактировать"}),_("button",{style:{...Q.contextMenuItem,color:"var(--vortex-danger)"},onClick:()=>H(f.messageId),children:"🗑️ Удалить"})]}),C&&_("div",{style:Q.aiMenu,children:[_("button",{onClick:T,style:Q.aiMenuItem,children:"💡 Умный ответ"}),_("button",{onClick:A,style:Q.aiMenuItem,children:"🌍 Перевести"}),_("button",{onClick:w,style:Q.aiMenuItem,children:"📊 Саммари"})]}),_("div",{style:Q.inputContainer,children:[a&&_("div",{style:Q.editingBar,children:[_("span",{children:"✏️ Редактирование"}),_("button",{onClick:b,style:Q.cancelEditBtn,children:"✕"})]}),_("div",{style:Q.inputWrapper,children:[_("button",{style:Q.inputBtn,onClick:()=>{var M;return(M=N.current)==null?void 0:M.click()},title:"Прикрепить",children:"📎"}),_("input",{type:"file",ref:N,onChange:F,accept:"image/*",style:{display:"none"}}),_("button",{style:{...Q.inputBtn,background:m?"var(--vortex-danger)":"transparent",color:m?"white":"var(--text-secondary)"},onMouseDown:y,onMouseUp:g,onMouseLeave:g,title:"Голосовое сообщение",children:"🎙️"}),_("input",{type:"text",value:i,onInput:M=>s(M.target.value),onKeyDown:M=>M.key==="Enter"&&O(),placeholder:"Сообщение",style:Q.messageInput}),_("button",{style:Q.inputBtn,onClick:E,title:"AI-помощник",children:"🤖"}),_("button",{onClick:O,disabled:!i.trim(),style:{...Q.sendBtn,opacity:i.trim()?1:.4},children:"➤"})]})]})]})}const Q={container:{flex:1,display:"flex",flexDirection:"column",background:"var(--bg-primary)",height:"100%",position:"relative"},emptyContainer:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-primary)"},emptyContent:{textAlign:"center",color:"var(--text-tertiary)"},emptyLogo:{fontSize:"5rem",marginBottom:"1rem"},emptyTitle:{fontSize:"1.5rem",fontWeight:700,color:"var(--text-primary)",marginBottom:"0.5rem"},emptyText:{fontSize:"0.9rem",lineHeight:1.6},header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.75rem 1.25rem",borderBottom:"1px solid var(--border-subtle)",background:"rgba(10, 10, 20, 0.9)",backdropFilter:"blur(20px)",zIndex:10},headerLeft:{display:"flex",alignItems:"center",gap:"0.75rem"},headerAvatar:{width:"42px",height:"42px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"1.1rem",flexShrink:0},headerInfo:{display:"flex",flexDirection:"column"},headerName:{fontWeight:600,fontSize:"1rem"},headerStatus:{fontSize:"0.8rem",color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:"6px"},onlineDot:{width:"8px",height:"8px",borderRadius:"50%",display:"inline-block"},messagesContainer:{flex:1,overflowY:"auto",padding:"1rem 1.5rem",display:"flex",flexDirection:"column",gap:"2px"},dateDivider:{textAlign:"center",padding:"1rem 0"},dateText:{background:"rgba(255,255,255,0.06)",color:"var(--text-tertiary)",padding:"4px 16px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:500},messageWrapper:{display:"flex",alignItems:"flex-end",marginBottom:"2px"},messageAvatar:{width:"32px",height:"32px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:600,fontSize:"0.8rem",flexShrink:0},messageBubble:{padding:"0.6rem 0.9rem",borderRadius:"16px",animation:"messageIn 0.2s ease",boxShadow:"0 1px 2px rgba(0,0,0,0.1)"},messageText:{fontSize:"0.9rem",lineHeight:1.5,wordBreak:"break-word"},messageImage:{maxWidth:"280px",borderRadius:"12px",cursor:"pointer"},messageAudio:{maxWidth:"250px",height:"32px"},editedMark:{fontSize:"0.7rem",opacity:.7,fontStyle:"italic"},messageMeta:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"4px",marginTop:"4px",fontSize:"0.7rem",opacity:.7},contextMenu:{position:"fixed",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"12px",boxShadow:"0 8px 24px rgba(0,0,0,0.4)",zIndex:9999,minWidth:"180px",padding:"6px"},contextMenuItem:{display:"block",width:"100%",padding:"10px 14px",background:"transparent",border:"none",borderRadius:"8px",color:"var(--text-primary)",cursor:"pointer",textAlign:"left",fontSize:"0.85rem"},aiMenu:{position:"absolute",bottom:"80px",right:"20px",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"14px",boxShadow:"0 12px 40px rgba(0,0,0,0.5)",padding:"8px",zIndex:50,minWidth:"200px"},aiMenuItem:{display:"block",width:"100%",padding:"12px 16px",background:"transparent",border:"none",borderRadius:"10px",color:"var(--text-primary)",cursor:"pointer",textAlign:"left",fontSize:"0.9rem"},editingBar:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 1rem",background:"rgba(124,58,237,0.1)",borderBottom:"1px solid var(--border-subtle)",fontSize:"0.8rem",color:"var(--vortex-primary-light)"},cancelEditBtn:{background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1rem"},inputContainer:{padding:"0.75rem 1.25rem",borderTop:"1px solid var(--border-subtle)",background:"rgba(10, 10, 20, 0.9)",backdropFilter:"blur(20px)"},inputWrapper:{display:"flex",alignItems:"center",gap:"8px"},inputBtn:{width:"42px",height:"42px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",flexShrink:0},messageInput:{flex:1,padding:"0.7rem 1.25rem",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-default)",borderRadius:"24px",color:"var(--text-primary)",fontSize:"0.95rem",outline:"none",fontFamily:"inherit"},sendBtn:{width:"44px",height:"44px",borderRadius:"50%",background:"var(--gradient-brand)",border:"none",color:"white",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",transition:"all 0.2s",flexShrink:0}};function ew({user:n}){const[e,t]=J(null);return _("div",{style:{display:"flex",height:"100%"},children:[_(QE,{user:n,activeChat:e,onSelectChat:t}),_(ZE,{chat:e,user:n})]})}function Iu(){return _("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",background:"var(--bg-primary)"},children:_("div",{style:{textAlign:"center"},children:[_("div",{style:{fontSize:"4rem"},children:"🌪️"}),_("h1",{style:{background:"var(--gradient-brand)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"2rem",fontWeight:800},children:"Vortex"})]})})}class tw{constructor(){this.keyPair=null}async generateKeys(){this.keyPair=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey"])}async exportPublicKey(){this.keyPair||await this.generateKeys();const e=await crypto.subtle.exportKey("raw",this.keyPair.publicKey);return btoa(String.fromCharCode(...new Uint8Array(e)))}async importPublicKey(e){const t=Uint8Array.from(atob(e),r=>r.charCodeAt(0));return crypto.subtle.importKey("raw",t,{name:"ECDH",namedCurve:"P-256"},!1,[])}async encrypt(e,t){this.keyPair||await this.generateKeys();const r=await this.importPublicKey(t),i=await crypto.subtle.deriveKey({name:"ECDH",public:r},this.keyPair.privateKey,{name:"AES-GCM",length:256},!1,["encrypt"]),s=crypto.getRandomValues(new Uint8Array(12)),a=new TextEncoder().encode(e),l=await crypto.subtle.encrypt({name:"AES-GCM",iv:s},i,a),u=new Uint8Array(s.length+l.byteLength);return u.set(s),u.set(new Uint8Array(l),s.length),btoa(String.fromCharCode(...u))}async decrypt(e,t){this.keyPair||await this.generateKeys();const r=await this.importPublicKey(t),i=await crypto.subtle.deriveKey({name:"ECDH",public:r},this.keyPair.privateKey,{name:"AES-GCM",length:256},!1,["decrypt"]),s=Uint8Array.from(atob(e),h=>h.charCodeAt(0)),a=s.slice(0,12),l=s.slice(12),u=await crypto.subtle.decrypt({name:"AES-GCM",iv:a},i,l);return new TextDecoder().decode(u)}async saveKeys(){const e=await this.exportPublicKey(),t=await crypto.subtle.exportKey("jwk",this.keyPair.privateKey);localStorage.setItem("vortex-keys",JSON.stringify({publicKey:e,privateKey:t}))}async loadKeys(){const e=localStorage.getItem("vortex-keys");if(!e)return!1;try{const{publicKey:t,privateKey:r}=JSON.parse(e),i=await crypto.subtle.importKey("jwk",r,{name:"ECDH",namedCurve:"P-256"},!1,["deriveKey"]);return this.keyPair={publicKey:await this.importPublicKey(t),privateKey:i},!0}catch{return!1}}}const yo=new tw;function nw(){const[n,e]=J(void 0),[t,r]=J(!1);return Ut(()=>(localStorage.getItem("vortex-user")&&e(null),on.onAuthChange(async s=>{s?(e(s),localStorage.setItem("vortex-user","true"),await yo.loadKeys()||(await yo.generateKeys(),await yo.saveKeys()),tf.startTracking()):(e(null),localStorage.removeItem("vortex-user")),setTimeout(()=>r(!0),600)})),[]),t?n===void 0?_(Iu,{}):n?_(ew,{user:n}):_(UE,{}):_(Iu,{})}Ff(_(nw,{}),document.getElementById("app"));
