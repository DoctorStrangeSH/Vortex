(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var ls,le,bu,Dt,Ql,Au,Ru,so,Si,Tr,Su,Xo,bo,Ao,Bi={},ji=[],xf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,cs=Array.isArray;function ft(n,e){for(var t in e)n[t]=e[t];return n}function Zo(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Df(n,e,t){var r,i,s,a={};for(s in e)s=="key"?r=e[s]:s=="ref"?i=e[s]:a[s]=e[s];if(arguments.length>2&&(a.children=arguments.length>3?ls.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(s in n.defaultProps)a[s]===void 0&&(a[s]=n.defaultProps[s]);return Ci(n,a,r,i,null)}function Ci(n,e,t,r,i){var s={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++bu,__i:-1,__u:0};return i==null&&le.vnode!=null&&le.vnode(s),s}function tt(n){return n.children}function Pi(n,e){this.props=n,this.context=e}function Bn(n,e){if(e==null)return n.__?Bn(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Bn(n):null}function Nf(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,r=[],i=[],s=ft({},e);s.__v=e.__v+1,le.vnode&&le.vnode(s),ea(n.__P,s,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,r,t??Bn(e),!!(32&e.__u),i),s.__v=e.__v,s.__.__k[s.__i]=s,Du(r,s,i),e.__e=e.__=null,s.__e!=t&&Cu(s)}}function Cu(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Cu(n)}function Yl(n){(!n.__d&&(n.__d=!0)&&Dt.push(n)&&!zi.__r++||Ql!=le.debounceRendering)&&((Ql=le.debounceRendering)||Au)(zi)}function zi(){try{for(var n,e=1;Dt.length;)Dt.length>e&&Dt.sort(Ru),n=Dt.shift(),e=Dt.length,Nf(n)}finally{Dt.length=zi.__r=0}}function Pu(n,e,t,r,i,s,a,l,u,h,f){var y,m,I,C,x,P,N,M=r&&r.__k||ji,U=e.length;for(u=Vf(t,e,M,u,U),y=0;y<U;y++)(I=t.__k[y])!=null&&(m=I.__i!=-1&&M[I.__i]||Bi,I.__i=y,P=ea(n,I,m,i,s,a,l,u,h,f),C=I.__e,I.ref&&m.ref!=I.ref&&(m.ref&&ta(m.ref,null,I),f.push(I.ref,I.__c||C,I)),x==null&&C!=null&&(x=C),(N=!!(4&I.__u))||m.__k===I.__k?(u=ku(I,u,n,N),N&&m.__e&&(m.__e=null)):typeof I.type=="function"&&P!==void 0?u=P:C&&(u=C.nextSibling),I.__u&=-7);return t.__e=x,u}function Vf(n,e,t,r,i){var s,a,l,u,h,f=t.length,y=f,m=0;for(n.__k=new Array(i),s=0;s<i;s++)(a=e[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[s]=Ci(null,a,null,null,null):cs(a)?a=n.__k[s]=Ci(tt,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[s]=Ci(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[s]=a,u=s+m,a.__=n,a.__b=n.__b+1,l=null,(h=a.__i=Of(a,t,u,y))!=-1&&(y--,(l=t[h])&&(l.__u|=2)),l==null||l.__v==null?(h==-1&&(i>f?m--:i<f&&m++),typeof a.type!="function"&&(a.__u|=4)):h!=u&&(h==u-1?m--:h==u+1?m++:(h>u?m--:m++,a.__u|=4))):n.__k[s]=null;if(y)for(s=0;s<f;s++)(l=t[s])!=null&&!(2&l.__u)&&(l.__e==r&&(r=Bn(l)),Vu(l,l));return r}function ku(n,e,t,r){var i,s;if(typeof n.type=="function"){for(i=n.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=n,e=ku(i[s],e,t,r));return e}n.__e!=e&&(r&&(e&&n.type&&!e.parentNode&&(e=Bn(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Of(n,e,t,r){var i,s,a,l=n.key,u=n.type,h=e[t],f=h!=null&&(2&h.__u)==0;if(h===null&&l==null||f&&l==h.key&&u==h.type)return t;if(r>(f?1:0)){for(i=t-1,s=t+1;i>=0||s<e.length;)if((h=e[a=i>=0?i--:s++])!=null&&!(2&h.__u)&&l==h.key&&u==h.type)return a}return-1}function Jl(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||xf.test(e)?t:t+"px"}function wi(n,e,t,r,i){var s,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||Jl(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||Jl(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")s=e!=(e=e.replace(Su,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+s]=t,t?r?t[Tr]=r[Tr]:(t[Tr]=Xo,n.addEventListener(e,s?Ao:bo,s)):n.removeEventListener(e,s?Ao:bo,s);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Xl(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[Si]==null)e[Si]=Xo++;else if(e[Si]<t[Tr])return;return t(le.event?le.event(e):e)}}}function ea(n,e,t,r,i,s,a,l,u,h){var f,y,m,I,C,x,P,N,M,U,Y,q,Q,b,v,g,E=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),s=[l=e.__e=t.__e]),(f=le.__b)&&f(e);e:if(typeof E=="function"){y=a.length;try{if(M=e.props,U=E.prototype&&E.prototype.render,Y=(f=E.contextType)&&r[f.__c],q=f?Y?Y.props.value:f.__:r,t.__c?N=(m=e.__c=t.__c).__=m.__E:(U?e.__c=m=new E(M,q):(e.__c=m=new Pi(M,q),m.constructor=E,m.render=Lf),Y&&Y.sub(m),m.state||(m.state={}),m.__n=r,I=m.__d=!0,m.__h=[],m._sb=[]),U&&m.__s==null&&(m.__s=m.state),U&&E.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=ft({},m.__s)),ft(m.__s,E.getDerivedStateFromProps(M,m.__s))),C=m.props,x=m.state,m.__v=e,I)U&&E.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),U&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if(U&&E.getDerivedStateFromProps==null&&M!==C&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(M,q),e.__v==t.__v||!m.__e&&m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(M,m.__s,q)===!1){e.__v!=t.__v&&(m.props=M,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(T){T&&(T.__=e)}),ji.push.apply(m.__h,m._sb),m._sb=[],m.__h.length&&a.push(m);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(M,m.__s,q),U&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(C,x,P)})}if(m.context=q,m.props=M,m.__P=n,m.__e=!1,Q=le.__r,b=0,U)m.state=m.__s,m.__d=!1,Q&&Q(e),f=m.render(m.props,m.state,m.context),ji.push.apply(m.__h,m._sb),m._sb=[];else do m.__d=!1,Q&&Q(e),f=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++b<25);m.state=m.__s,m.getChildContext!=null&&(r=ft(ft({},r),m.getChildContext())),U&&!I&&m.getSnapshotBeforeUpdate!=null&&(P=m.getSnapshotBeforeUpdate(C,x)),v=f!=null&&f.type===tt&&f.key==null?Nu(f.props.children):f,l=Pu(n,cs(v)?v:[v],e,t,r,i,s,a,l,u,h),m.base=e.__e,e.__u&=-161,m.__h.length&&a.push(m),N&&(m.__E=m.__=null)}catch(T){if(a.length=y,e.__v=null,u||s!=null){if(T.then){for(e.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;s!=null&&(s[s.indexOf(l)]=null),e.__e=l}else if(s!=null)for(g=s.length;g--;)Zo(s[g])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),T.then||xu(e),le.__e(T,e,t)}}else s==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):l=e.__e=Mf(t.__e,e,t,r,i,s,a,u,h);return(f=le.diffed)&&f(e),128&e.__u?void 0:l}function xu(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(xu))}function Du(n,e,t){for(var r=0;r<t.length;r++)ta(t[r],t[++r],t[++r]);le.__c&&le.__c(e,n),n.some(function(i){try{n=i.__h,i.__h=[],n.some(function(s){s.call(i)})}catch(s){le.__e(s,i.__v)}})}function Nu(n){return typeof n!="object"||n==null||n.__b>0?n:cs(n)?n.map(Nu):n.constructor!==void 0?null:ft({},n)}function Mf(n,e,t,r,i,s,a,l,u){var h,f,y,m,I,C,x,P=t.props||Bi,N=e.props,M=e.type;if(M=="svg"?i="http://www.w3.org/2000/svg":M=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),s!=null){for(h=0;h<s.length;h++)if((I=s[h])&&"setAttribute"in I==!!M&&(M?I.localName==M:I.nodeType==3)){n=I,s[h]=null;break}}if(n==null){if(M==null)return document.createTextNode(N);n=document.createElementNS(i,M,N.is&&N),l&&(le.__m&&le.__m(e,s),l=!1),s=null}if(M==null)P===N||l&&n.data==N||(n.data=N);else{if(s=M=="textarea"&&N.defaultValue!=null?null:s&&ls.call(n.childNodes),!l&&s!=null)for(P={},h=0;h<n.attributes.length;h++)P[(I=n.attributes[h]).name]=I.value;for(h in P)I=P[h],h=="dangerouslySetInnerHTML"?y=I:h=="children"||h in N||h=="value"&&"defaultValue"in N||h=="checked"&&"defaultChecked"in N||wi(n,h,null,I,i);for(h in N)I=N[h],h=="children"?m=I:h=="dangerouslySetInnerHTML"?f=I:h=="value"?C=I:h=="checked"?x=I:l&&typeof I!="function"||P[h]===I||wi(n,h,I,P[h],i);if(f)l||y&&(f.__html==y.__html||f.__html==n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(y&&(n.innerHTML=""),Pu(e.type=="template"?n.content:n,cs(m)?m:[m],e,t,r,M=="foreignObject"?"http://www.w3.org/1999/xhtml":i,s,a,s?s[0]:t.__k&&Bn(t,0),l,u),s!=null)for(h=s.length;h--;)Zo(s[h]);l&&M!="textarea"||(h="value",M=="progress"&&C==null?n.removeAttribute("value"):C!=null&&(C!==n[h]||M=="progress"&&!C||M=="option"&&C!=P[h])&&wi(n,h,C,P[h],i),h="checked",x!=null&&x!=n[h]&&wi(n,h,x,P[h],i))}return n}function ta(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(i){le.__e(i,t)}}function Vu(n,e,t){var r,i;if(le.unmount&&le.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||ta(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){le.__e(s,e)}r.base=r.__P=r.__n=null}if(r=n.__k)for(i=0;i<r.length;i++)r[i]&&Vu(r[i],e,t||typeof n.type!="function");t||Zo(n.__e),n.__c=n.__=n.__e=void 0}function Lf(n,e,t){return this.constructor(n,t)}function Uf(n,e,t){var r,i,s,a;e==document&&(e=document.documentElement),le.__&&le.__(n,e),i=(r=!1)?null:e.__k,s=[],a=[],ea(e,n=e.__k=Df(tt,null,[n]),i||Bi,Bi,e.namespaceURI,i?null:e.firstChild?ls.call(e.childNodes):null,s,i?i.__e:e.firstChild,r,a),Du(s,n,a),n.props.children=null}ls=ji.slice,le={__e:function(n,e,t,r){for(var i,s,a;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(n)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(n,r||{}),a=i.__d),a)return i.__E=i}catch(l){n=l}throw n}},bu=0,Pi.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ft({},this.state),typeof n=="function"&&(n=n(ft({},t),this.props)),n&&ft(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Yl(this))},Pi.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Yl(this))},Pi.prototype.render=tt,Dt=[],Au=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ru=function(n,e){return n.__v.__b-e.__v.__b},zi.__r=0,so=Math.random().toString(8),Si="__d"+so,Tr="__a"+so,Su=/(PointerCapture)$|Capture$/i,Xo=0,bo=Xl(!1),Ao=Xl(!0);var Ff=0;function _(n,e,t,r,i,s){e||(e={});var a,l,u=e;if("ref"in u)for(l in u={},e)l=="ref"?a=e[l]:u[l]=e[l];var h={type:n,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ff,__i:-1,__u:0,__source:i,__self:s};if(typeof n=="function"&&(a=n.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return le.vnode&&le.vnode(h),h}var kr,_e,oo,Zl,qi=0,Ou=[],ve=le,ec=ve.__b,tc=ve.__r,nc=ve.diffed,rc=ve.__c,ic=ve.unmount,sc=ve.__;function na(n,e){ve.__h&&ve.__h(_e,n,qi||e),qi=0;var t=_e.__H||(_e.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function G(n){return qi=1,Bf(Lu,n)}function Bf(n,e,t){var r=na(kr++,2);if(r.t=n,!r.__c&&(r.__=[Lu(void 0,e),function(l){var u=r.__N?r.__N[0]:r.__[0],h=r.t(u,l);u!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=_e,!_e.__f)){var i=function(l,u,h){if(!r.__c.__H)return!0;var f=!1,y=r.__c.props!==l;if(r.__c.__H.__.some(function(I){if(I.__N){f=!0;var C=I.__[0];I.__=I.__N,I.__N=void 0,C!==I.__[0]&&(y=!0)}}),s){var m=s.call(this,l,u,h);return f?m||y:m}return!f||y};_e.__f=!0;var s=_e.shouldComponentUpdate,a=_e.componentWillUpdate;_e.componentWillUpdate=function(l,u,h){if(this.__e){var f=s;s=void 0,i(l,u,h),s=f}a&&a.call(this,l,u,h)},_e.shouldComponentUpdate=i}return r.__N||r.__}function pt(n,e){var t=na(kr++,3);!ve.__s&&Mu(t.__H,e)&&(t.__=n,t.u=e,_e.__H.__h.push(t))}function on(n){return qi=5,jf(function(){return{current:n}},[])}function jf(n,e){var t=na(kr++,7);return Mu(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function zf(){for(var n;n=Ou.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(ki),e.__h.some(Ro),e.__h=[]}catch(t){e.__h=[],ve.__e(t,n.__v)}}}ve.__b=function(n){_e=null,ec&&ec(n)},ve.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),sc&&sc(n,e)},ve.__r=function(n){tc&&tc(n),kr=0;var e=(_e=n.__c).__H;e&&(oo===_e?(e.__h=[],_e.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(ki),e.__h.some(Ro),e.__h=[],kr=0)),oo=_e},ve.diffed=function(n){nc&&nc(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Ou.push(e)!==1&&Zl===ve.requestAnimationFrame||((Zl=ve.requestAnimationFrame)||qf)(zf)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),oo=_e=null},ve.__c=function(n,e){e.some(function(t){try{t.__h.some(ki),t.__h=t.__h.filter(function(r){return!r.__||Ro(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],ve.__e(r,t.__v)}}),rc&&rc(n,e)},ve.unmount=function(n){ic&&ic(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(r){try{ki(r)}catch(i){e=i}}),t.__H=void 0,e&&ve.__e(e,t.__v))};var oc=typeof requestAnimationFrame=="function";function qf(n){var e,t=function(){clearTimeout(r),oc&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);oc&&(e=requestAnimationFrame(t))}function ki(n){var e=_e,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),_e=e}function Ro(n){var e=_e;n.__c=n.__(),_e=e}function Mu(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function Lu(n,e){return typeof e=="function"?e(n):e}var ac={};/**
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
 */const Uu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},$f=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Fu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,y=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,I=h&63;u||(I=64,a||(m=64)),r.push(t[f],t[y],t[m],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Uu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$f(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||y==null)throw new Wf;const m=s<<2|l>>4;if(r.push(m),h!==64){const I=l<<4&240|h>>2;if(r.push(I),y!==64){const C=h<<6&192|y;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Wf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kf=function(n){const e=Uu(n);return Fu.encodeByteArray(e,!0)},$i=function(n){return Kf(n).replace(/\./g,"")},Bu=function(n){try{return Fu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gf=()=>Hf().__FIREBASE_DEFAULTS__,Qf=()=>{if(typeof process>"u"||typeof ac>"u")return;const n=ac.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bu(n[1]);return e&&JSON.parse(e)},us=()=>{try{return Gf()||Qf()||Yf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ju=n=>{var e,t;return(t=(e=us())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Jf=n=>{const e=ju(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},zu=()=>{var n;return(n=us())===null||n===void 0?void 0:n.config},qu=n=>{var e;return(e=us())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Xf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Zf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[$i(JSON.stringify(t)),$i(JSON.stringify(a)),""].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ep(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function tp(){var n;const e=(n=us())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function np(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ip(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sp(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function op(){return!tp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ap(){try{return typeof indexedDB=="object"}catch{return!1}}function lp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const cp="FirebaseError";class At extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=cp,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?up(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new At(i,l,r)}}function up(n,e){return n.replace(hp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hp=/\{\$([^}]+)}/g;function dp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Wi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(lc(s)&&lc(a)){if(!Wi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function lc(n){return n!==null&&typeof n=="object"}/**
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
 */function jr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function vr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function fp(n,e){const t=new pp(n,e);return t.subscribe.bind(t)}class pp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");mp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ao),i.error===void 0&&(i.error=ao),i.complete===void 0&&(i.complete=ao);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ao(){}/**
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
 */function Ie(n){return n&&n._delegate?n._delegate:n}class dn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rn="[DEFAULT]";/**
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
 */class gp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Xf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yp(e))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rn){return this.instances.has(e)}getOptions(e=rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_p(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rn){return this.component?this.component.multipleInstances?e:rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _p(n){return n===rn?void 0:n}function yp(n){return n.instantiationMode==="EAGER"}/**
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
 */class vp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const Ep={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},wp=X.INFO,Ip={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Tp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Ip[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ra{constructor(e){this.name=e,this._logLevel=wp,this._logHandler=Tp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ep[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const bp=(n,e)=>e.some(t=>n instanceof t);let cc,uc;function Ap(){return cc||(cc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rp(){return uc||(uc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $u=new WeakMap,So=new WeakMap,Wu=new WeakMap,lo=new WeakMap,ia=new WeakMap;function Sp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Ut(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&$u.set(t,n)}).catch(()=>{}),ia.set(e,n),e}function Cp(n){if(So.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});So.set(n,e)}let Co={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return So.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ut(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Pp(n){Co=n(Co)}function kp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(co(this),e,...t);return Wu.set(r,e.sort?e.sort():[e]),Ut(r)}:Rp().includes(n)?function(...e){return n.apply(co(this),e),Ut($u.get(this))}:function(...e){return Ut(n.apply(co(this),e))}}function xp(n){return typeof n=="function"?kp(n):(n instanceof IDBTransaction&&Cp(n),bp(n,Ap())?new Proxy(n,Co):n)}function Ut(n){if(n instanceof IDBRequest)return Sp(n);if(lo.has(n))return lo.get(n);const e=xp(n);return e!==n&&(lo.set(n,e),ia.set(e,n)),e}const co=n=>ia.get(n);function Dp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=Ut(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Ut(a.result),u.oldVersion,u.newVersion,Ut(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Np=["get","getKey","getAll","getAllKeys","count"],Vp=["put","add","delete","clear"],uo=new Map;function hc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(uo.get(e))return uo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Vp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Np.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&u.done]))[0]};return uo.set(e,s),s}Pp(n=>({...n,get:(e,t,r)=>hc(e,t)||n.get(e,t,r),has:(e,t)=>!!hc(e,t)||n.has(e,t)}));/**
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
 */class Op{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Mp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Mp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Po="@firebase/app",dc="0.10.13";/**
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
 */const wt=new ra("@firebase/app"),Lp="@firebase/app-compat",Up="@firebase/analytics-compat",Fp="@firebase/analytics",Bp="@firebase/app-check-compat",jp="@firebase/app-check",zp="@firebase/auth",qp="@firebase/auth-compat",$p="@firebase/database",Wp="@firebase/data-connect",Kp="@firebase/database-compat",Hp="@firebase/functions",Gp="@firebase/functions-compat",Qp="@firebase/installations",Yp="@firebase/installations-compat",Jp="@firebase/messaging",Xp="@firebase/messaging-compat",Zp="@firebase/performance",em="@firebase/performance-compat",tm="@firebase/remote-config",nm="@firebase/remote-config-compat",rm="@firebase/storage",im="@firebase/storage-compat",sm="@firebase/firestore",om="@firebase/vertexai-preview",am="@firebase/firestore-compat",lm="firebase",cm="10.14.1";/**
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
 */const ko="[DEFAULT]",um={[Po]:"fire-core",[Lp]:"fire-core-compat",[Fp]:"fire-analytics",[Up]:"fire-analytics-compat",[jp]:"fire-app-check",[Bp]:"fire-app-check-compat",[zp]:"fire-auth",[qp]:"fire-auth-compat",[$p]:"fire-rtdb",[Wp]:"fire-data-connect",[Kp]:"fire-rtdb-compat",[Hp]:"fire-fn",[Gp]:"fire-fn-compat",[Qp]:"fire-iid",[Yp]:"fire-iid-compat",[Jp]:"fire-fcm",[Xp]:"fire-fcm-compat",[Zp]:"fire-perf",[em]:"fire-perf-compat",[tm]:"fire-rc",[nm]:"fire-rc-compat",[rm]:"fire-gcs",[im]:"fire-gcs-compat",[sm]:"fire-fst",[am]:"fire-fst-compat",[om]:"fire-vertex","fire-js":"fire-js",[lm]:"fire-js-all"};/**
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
 */const Ki=new Map,hm=new Map,xo=new Map;function fc(n,e){try{n.container.addComponent(e)}catch(t){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function jn(n){const e=n.name;if(xo.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;xo.set(e,n);for(const t of Ki.values())fc(t,n);for(const t of hm.values())fc(t,n);return!0}function sa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function et(n){return n.settings!==void 0}/**
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
 */const dm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new Br("app","Firebase",dm);/**
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
 */class fm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Yn=cm;function Ku(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ko,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(t||(t=zu()),!t)throw Ft.create("no-options");const s=Ki.get(i);if(s){if(Wi(t,s.options)&&Wi(r,s.config))return s;throw Ft.create("duplicate-app",{appName:i})}const a=new vp(i);for(const u of xo.values())a.addComponent(u);const l=new fm(t,r,a);return Ki.set(i,l),l}function Hu(n=ko){const e=Ki.get(n);if(!e&&n===ko&&zu())return Ku();if(!e)throw Ft.create("no-app",{appName:n});return e}function Bt(n,e,t){var r;let i=(r=um[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wt.warn(l.join(" "));return}jn(new dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pm="firebase-heartbeat-database",mm=1,xr="firebase-heartbeat-store";let ho=null;function Gu(){return ho||(ho=Dp(pm,mm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),ho}async function gm(n){try{const t=(await Gu()).transaction(xr),r=await t.objectStore(xr).get(Qu(n));return await t.done,r}catch(e){if(e instanceof At)wt.warn(e.message);else{const t=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wt.warn(t.message)}}}async function pc(n,e){try{const r=(await Gu()).transaction(xr,"readwrite");await r.objectStore(xr).put(e,Qu(n)),await r.done}catch(t){if(t instanceof At)wt.warn(t.message);else{const r=Ft.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wt.warn(r.message)}}}function Qu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _m=1024,ym=30*24*60*60*1e3;class vm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ym}),this._storage.overwrite(this._heartbeatsCache))}catch(r){wt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mc(),{heartbeatsToSend:r,unsentEntries:i}=Em(this._heartbeatsCache.heartbeats),s=$i(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return wt.warn(t),""}}}function mc(){return new Date().toISOString().substring(0,10)}function Em(n,e=_m){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),gc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),gc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class wm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ap()?lp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gc(n){return $i(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Im(n){jn(new dn("platform-logger",e=>new Op(e),"PRIVATE")),jn(new dn("heartbeat",e=>new vm(e),"PRIVATE")),Bt(Po,dc,n),Bt(Po,dc,"esm2017"),Bt("fire-js","")}Im("");var Tm="firebase",bm="10.14.1";/**
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
 */Bt(Tm,bm,"app");function oa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Yu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Am=Yu,Ju=new Br("auth","Firebase",Yu());/**
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
 */const Hi=new ra("@firebase/auth");function Rm(n,...e){Hi.logLevel<=X.WARN&&Hi.warn(`Auth (${Yn}): ${n}`,...e)}function xi(n,...e){Hi.logLevel<=X.ERROR&&Hi.error(`Auth (${Yn}): ${n}`,...e)}/**
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
 */function Ye(n,...e){throw aa(n,...e)}function nt(n,...e){return aa(n,...e)}function Xu(n,e,t){const r=Object.assign(Object.assign({},Am()),{[e]:t});return new Br("auth","Firebase",r).create(e,{appName:n.name})}function yt(n){return Xu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function aa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ju.create(n,...e)}function z(n,e,...t){if(!n)throw aa(e,...t)}function mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xi(e),new Error(e)}function It(n,e){n||mt(e)}/**
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
 */function Do(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Sm(){return _c()==="http:"||_c()==="https:"}function _c(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Cm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sm()||rp()||"connection"in navigator)?navigator.onLine:!0}function Pm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class zr{constructor(e,t){this.shortDelay=e,this.longDelay=t,It(t>e,"Short delay should be less than long delay!"),this.isMobile=ep()||ip()}get(){return Cm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function la(n,e){It(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Zu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const km={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xm=new zr(3e4,6e4);function Wt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Rt(n,e,t,r,i={}){return eh(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=jr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},s);return np()||(h.referrerPolicy="no-referrer"),Zu.fetch()(th(n,n.config.apiHost,t,l),h)})}async function eh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},km),e);try{const i=new Nm(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ii(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ii(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ii(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Xu(n,f,h);Ye(n,f)}}catch(i){if(i instanceof At)throw i;Ye(n,"network-request-failed",{message:String(i)})}}async function qr(n,e,t,r,i={}){const s=await Rt(n,e,t,r,i);return"mfaPendingCredential"in s&&Ye(n,"multi-factor-auth-required",{_serverResponse:s}),s}function th(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?la(n.config,i):`${n.config.apiScheme}://${i}`}function Dm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),xm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ii(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=nt(n,e,r);return i.customData._tokenResponse=t,i}function yc(n){return n!==void 0&&n.enterprise!==void 0}class Vm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Dm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Om(n,e){return Rt(n,"GET","/v2/recaptchaConfig",Wt(n,e))}/**
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
 */async function Mm(n,e){return Rt(n,"POST","/v1/accounts:delete",e)}async function nh(n,e){return Rt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function br(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lm(n,e=!1){const t=Ie(n),r=await t.getIdToken(e),i=ca(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:br(fo(i.auth_time)),issuedAtTime:br(fo(i.iat)),expirationTime:br(fo(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fo(n){return Number(n)*1e3}function ca(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return xi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bu(t);return i?JSON.parse(i):(xi("Failed to decode base64 JWT payload"),null)}catch(i){return xi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vc(n){const e=ca(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof At&&Um(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Um({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Fm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class No{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await zn(n,nh(t,{idToken:r}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?rh(s.providerUserInfo):[],l=jm(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new No(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,y)}async function Bm(n){const e=Ie(n);await Gi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rh(n){return n.map(e=>{var{providerId:t}=e,r=oa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function zm(n,e){const t=await eh(n,{},async()=>{const r=jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=th(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Zu.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qm(n,e){return Rt(n,"POST","/v2/accounts:revokeToken",Wt(n,e))}/**
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
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=vc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await zm(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Mn;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
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
 */function xt(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=oa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new No(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await zn(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Lm(this,e)}reload(){return Bm(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Gi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(yt(this.auth));const e=await this.getIdToken();return await zn(this,Mm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,u,h,f;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,I=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,N=(h=t.createdAt)!==null&&h!==void 0?h:void 0,M=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:Y,isAnonymous:q,providerData:Q,stsTokenManager:b}=t;z(U&&b,e,"internal-error");const v=Mn.fromJSON(this.name,b);z(typeof U=="string",e,"internal-error"),xt(y,e.name),xt(m,e.name),z(typeof Y=="boolean",e,"internal-error"),z(typeof q=="boolean",e,"internal-error"),xt(I,e.name),xt(C,e.name),xt(x,e.name),xt(P,e.name),xt(N,e.name),xt(M,e.name);const g=new gt({uid:U,auth:e,email:m,emailVerified:Y,displayName:y,isAnonymous:q,photoURL:C,phoneNumber:I,tenantId:x,stsTokenManager:v,createdAt:N,lastLoginAt:M});return Q&&Array.isArray(Q)&&(g.providerData=Q.map(E=>Object.assign({},E))),P&&(g._redirectEventId=P),g}static async _fromIdTokenResponse(e,t,r=!1){const i=new Mn;i.updateFromServerResponse(t);const s=new gt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?rh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Mn;l.updateFromIdToken(r);const u=new gt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new No(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Ec=new Map;function _t(n){It(n instanceof Function,"Expected a class definition");let e=Ec.get(n);return e?(It(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ec.set(n,e),e)}/**
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
 */class ih{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ih.type="NONE";const wc=ih;/**
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
 */function Di(n,e,t){return`firebase:${n}:${e}:${t}`}class Ln{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Di(this.userKey,i.apiKey,s),this.fullPersistenceKey=Di("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ln(_t(wc),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||_t(wc);const a=Di(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const y=gt._fromJSON(e,f);h!==s&&(l=y),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ln(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Ln(s,e,r))}}/**
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
 */function Ic(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uh(e))return"Blackberry";if(hh(e))return"Webos";if(oh(e))return"Safari";if((e.includes("chrome/")||ah(e))&&!e.includes("edge/"))return"Chrome";if(ch(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sh(n=Le()){return/firefox\//i.test(n)}function oh(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ah(n=Le()){return/crios\//i.test(n)}function lh(n=Le()){return/iemobile/i.test(n)}function ch(n=Le()){return/android/i.test(n)}function uh(n=Le()){return/blackberry/i.test(n)}function hh(n=Le()){return/webos/i.test(n)}function ua(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $m(n=Le()){var e;return ua(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wm(){return sp()&&document.documentMode===10}function dh(n=Le()){return ua(n)||ch(n)||hh(n)||uh(n)||/windows phone/i.test(n)||lh(n)}/**
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
 */function fh(n,e=[]){let t;switch(n){case"Browser":t=Ic(Le());break;case"Worker":t=`${Ic(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Yn}/${r}`}/**
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
 */class Km{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Hm(n,e={}){return Rt(n,"GET","/v2/passwordPolicy",Wt(n,e))}/**
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
 */const Gm=6;class Qm{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Gm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ym{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tc(this),this.idTokenSubscription=new Tc(this),this.beforeStateQueue=new Km(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ju,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ln.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nh(this,{idToken:e}),r=await gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(yt(this));const t=e?Ie(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hm(this),t=new Qm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await qm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Ln.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Rm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function En(n){return Ie(n)}class Tc{constructor(e){this.auth=e,this.observer=null,this.addObserver=fp(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jm(n){hs=n}function ph(n){return hs.loadJS(n)}function Xm(){return hs.recaptchaEnterpriseScript}function Zm(){return hs.gapiScript}function eg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const tg="recaptcha-enterprise",ng="NO_RECAPTCHA";class rg{constructor(e){this.type=tg,this.auth=En(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{Om(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Vm(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;yc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(ng)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&yc(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Xm();u.length!==0&&(u+=l),ph(u).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function bc(n,e,t,r=!1){const i=new rg(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Vo(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await bc(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await bc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
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
 */function ig(n,e){const t=sa(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Wi(s,e??{}))return i;Ye(i,"already-initialized")}return t.initialize({options:e})}function sg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function og(n,e,t){const r=En(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=mh(e),{host:a,port:l}=ag(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),lg()}function mh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ag(n){const e=mh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ac(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Ac(a)}}}function Ac(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ha{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}async function cg(n,e){return Rt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ug(n,e){return qr(n,"POST","/v1/accounts:signInWithPassword",Wt(n,e))}/**
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
 */async function hg(n,e){return qr(n,"POST","/v1/accounts:signInWithEmailLink",Wt(n,e))}async function dg(n,e){return qr(n,"POST","/v1/accounts:signInWithEmailLink",Wt(n,e))}/**
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
 */class Dr extends ha{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Dr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Dr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vo(e,t,"signInWithPassword",ug);case"emailLink":return hg(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vo(e,r,"signUpPassword",cg);case"emailLink":return dg(e,{idToken:t,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Un(n,e){return qr(n,"POST","/v1/accounts:signInWithIdp",Wt(n,e))}/**
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
 */const fg="http://localhost";class fn extends ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=oa(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new fn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Un(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Un(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Un(e,t)}buildRequest(){const e={requestUri:fg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jr(t)}return e}}/**
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
 */function pg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mg(n){const e=yr(vr(n)).link,t=e?yr(vr(e)).deep_link_id:null,r=yr(vr(n)).deep_link_id;return(r?yr(vr(r)).link:null)||r||t||e||n}class da{constructor(e){var t,r,i,s,a,l;const u=yr(vr(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,y=pg((i=u.mode)!==null&&i!==void 0?i:null);z(h&&f&&y,"argument-error"),this.apiKey=h,this.operation=y,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=mg(e);try{return new da(t)}catch{return null}}}/**
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
 */class Jn{constructor(){this.providerId=Jn.PROVIDER_ID}static credential(e,t){return Dr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=da.parseLink(t);return z(r,"argument-error"),Dr._fromEmailAndCode(e,r.code,r.tenantId)}}Jn.PROVIDER_ID="password";Jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $r extends gh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nt extends $r{constructor(){super("facebook.com")}static credential(e){return fn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
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
 */class Vt extends $r{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Vt.credential(t,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
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
 */class Ot extends $r{constructor(){super("github.com")}static credential(e){return fn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
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
 */class Mt extends $r{constructor(){super("twitter.com")}static credential(e,t){return fn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Mt.credential(t,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */async function gg(n,e){return qr(n,"POST","/v1/accounts:signUp",Wt(n,e))}/**
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
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await gt._fromIdTokenResponse(e,r,i),a=Rc(r);return new pn({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Rc(r);return new pn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Rc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Qi extends At{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Qi(e,t,r,i)}}function _h(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qi._fromErrorAndOperation(n,s,e,r):s})}async function _g(n,e,t=!1){const r=await zn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return pn._forOperation(n,"link",r)}/**
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
 */async function yg(n,e,t=!1){const{auth:r}=n;if(et(r.app))return Promise.reject(yt(r));const i="reauthenticate";try{const s=await zn(n,_h(r,i,e,n),t);z(s.idToken,r,"internal-error");const a=ca(s.idToken);z(a,r,"internal-error");const{sub:l}=a;return z(n.uid===l,r,"user-mismatch"),pn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),s}}/**
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
 */async function yh(n,e,t=!1){if(et(n.app))return Promise.reject(yt(n));const r="signIn",i=await _h(n,r,e),s=await pn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function vg(n,e){return yh(En(n),e)}/**
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
 */async function vh(n){const e=En(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Eg(n,e,t){if(et(n.app))return Promise.reject(yt(n));const r=En(n),a=await Vo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gg).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&vh(n),u}),l=await pn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function wg(n,e,t){return et(n.app)?Promise.reject(yt(n)):vg(Ie(n),Jn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vh(n),r})}/**
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
 */async function Ig(n,e){return Rt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Tg(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ie(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await zn(r,Ig(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function bg(n,e,t,r){return Ie(n).onIdTokenChanged(e,t,r)}function Ag(n,e,t){return Ie(n).beforeAuthStateChanged(e,t)}function Oo(n,e,t,r){return Ie(n).onAuthStateChanged(e,t,r)}function Rg(n){return Ie(n).signOut()}const Yi="__sak";/**
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
 */class Eh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yi,"1"),this.storage.removeItem(Yi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Sg=1e3,Cg=10;class wh extends Eh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Wm()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Cg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Sg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wh.type="LOCAL";const Pg=wh;/**
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
 */class Ih extends Eh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ih.type="SESSION";const Th=Ih;/**
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
 */function kg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ds(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),u=await kg(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ds.receivers=[];/**
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
 */function fa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class xg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=fa("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const m=y;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function rt(){return window}function Dg(n){rt().location.href=n}/**
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
 */function bh(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Ng(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Og(){return bh()?self:null}/**
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
 */const Ah="firebaseLocalStorageDb",Mg=1,Ji="firebaseLocalStorage",Rh="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fs(n,e){return n.transaction([Ji],e?"readwrite":"readonly").objectStore(Ji)}function Lg(){const n=indexedDB.deleteDatabase(Ah);return new Wr(n).toPromise()}function Mo(){const n=indexedDB.open(Ah,Mg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ji,{keyPath:Rh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ji)?e(r):(r.close(),await Lg(),e(await Mo()))})})}async function Sc(n,e,t){const r=fs(n,!0).put({[Rh]:e,value:t});return new Wr(r).toPromise()}async function Ug(n,e){const t=fs(n,!1).get(e),r=await new Wr(t).toPromise();return r===void 0?null:r.value}function Cc(n,e){const t=fs(n,!0).delete(e);return new Wr(t).toPromise()}const Fg=800,Bg=3;class Sh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Bg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ds._getInstance(Og()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ng(),!this.activeServiceWorker)return;this.sender=new xg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mo();return await Sc(e,Yi,"1"),await Cc(e,Yi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ug(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fs(i,!1).getAll();return new Wr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sh.type="LOCAL";const jg=Sh;new zr(3e4,6e4);/**
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
 */function zg(n,e){return e?_t(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class pa extends ha{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Un(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Un(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Un(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qg(n){return yh(n.auth,new pa(n),n.bypassAuthState)}function $g(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),yg(t,new pa(n),n.bypassAuthState)}async function Wg(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),_g(t,new pa(n),n.bypassAuthState)}/**
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
 */class Ch{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qg;case"linkViaPopup":case"linkViaRedirect":return Wg;case"reauthViaPopup":case"reauthViaRedirect":return $g;default:Ye(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Kg=new zr(2e3,1e4);class Nn extends Ch{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=fa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kg.get())};e()}}Nn.currentPopupAction=null;/**
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
 */const Hg="pendingRedirect",Ni=new Map;class Gg extends Ch{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ni.get(this.auth._key());if(!e){try{const r=await Qg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ni.set(this.auth._key(),e)}return this.bypassAuthState||Ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qg(n,e){const t=Xg(e),r=Jg(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Yg(n,e){Ni.set(n._key(),e)}function Jg(n){return _t(n._redirectPersistence)}function Xg(n){return Di(Hg,n.config.apiKey,n.name)}async function Zg(n,e,t=!1){if(et(n.app))return Promise.reject(yt(n));const r=En(n),i=zg(r,e),a=await new Gg(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const e_=10*60*1e3;class t_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!n_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ph(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=e_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pc(e))}saveEventToCache(e){this.cachedEventUids.add(Pc(e)),this.lastProcessedEventTime=Date.now()}}function Pc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ph({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function n_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ph(n);default:return!1}}/**
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
 */async function r_(n,e={}){return Rt(n,"GET","/v1/projects",e)}/**
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
 */const i_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,s_=/^https?/;async function o_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await r_(n);for(const t of e)try{if(a_(t))return}catch{}Ye(n,"unauthorized-domain")}function a_(n){const e=Do(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!s_.test(t))return!1;if(i_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const l_=new zr(3e4,6e4);function kc(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function c_(n){return new Promise((e,t)=>{var r,i,s;function a(){kc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kc(),t(nt(n,"network-request-failed"))},timeout:l_.get()})}if(!((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rt().gapi)===null||s===void 0)&&s.load)a();else{const l=eg("iframefcb");return rt()[l]=()=>{gapi.load?a():t(nt(n,"network-request-failed"))},ph(`${Zm()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Vi=null,e})}let Vi=null;function u_(n){return Vi=Vi||c_(n),Vi}/**
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
 */const h_=new zr(5e3,15e3),d_="__/auth/iframe",f_="emulator/auth/iframe",p_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},m_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function g_(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?la(e,f_):`https://${n.config.authDomain}/${d_}`,r={apiKey:e.apiKey,appName:n.name,v:Yn},i=m_.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${jr(r).slice(1)}`}async function __(n){const e=await u_(n),t=rt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:g_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:p_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=nt(n,"network-request-failed"),l=rt().setTimeout(()=>{s(a)},h_.get());function u(){rt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const y_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},v_=500,E_=600,w_="_blank",I_="http://localhost";class xc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function T_(n,e,t,r=v_,i=E_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},y_),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Le().toLowerCase();t&&(l=ah(h)?w_:t),sh(h)&&(e=e||I_,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[I,C])=>`${m}${I}=${C},`,"");if($m(h)&&l!=="_self")return b_(e||"",l),new xc(null);const y=window.open(e||"",l,f);z(y,n,"popup-blocked");try{y.focus()}catch{}return new xc(y)}function b_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const A_="__/auth/handler",R_="emulator/auth/handler",S_=encodeURIComponent("fac");async function Dc(n,e,t,r,i,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Yn,eventId:i};if(e instanceof gh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",dp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))a[f]=y}if(e instanceof $r){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${S_}=${encodeURIComponent(u)}`:"";return`${C_(n)}?${jr(l).slice(1)}${h}`}function C_({config:n}){return n.emulator?la(n,R_):`https://${n.authDomain}/${A_}`}/**
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
 */const po="webStorageSupport";class P_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Th,this._completeRedirectFn=Zg,this._overrideRedirectResult=Yg}async _openPopup(e,t,r,i){var s;It((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Dc(e,t,r,Do(),i);return T_(e,a,fa())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Dc(e,t,r,Do(),i);return Dg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(It(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await __(e),r=new t_(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(po,{type:po},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[po];a!==void 0&&t(!!a),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=o_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dh()||oh()||ua()}}const k_=P_;var Nc="@firebase/auth",Vc="1.7.9";/**
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
 */class x_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function D_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function N_(n){jn(new dn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fh(n)},h=new Ym(r,i,s,u);return sg(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),jn(new dn("auth-internal",e=>{const t=En(e.getProvider("auth").getImmediate());return(r=>new x_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(Nc,Vc,D_(n)),Bt(Nc,Vc,"esm2017")}/**
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
 */const V_=5*60,O_=qu("authIdTokenMaxAge")||V_;let Oc=null;const M_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>O_)return;const i=t==null?void 0:t.token;Oc!==i&&(Oc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function L_(n=Hu()){const e=sa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ig(n,{popupRedirectResolver:k_,persistence:[jg,Pg,Th]}),r=qu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=M_(s.toString());Ag(t,a,()=>a(t.currentUser)),bg(t,l=>a(l))}}const i=ju("auth");return i&&og(t,`http://${i}`),t}function U_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Jm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=nt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",U_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});N_("Browser");var Mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cn,kh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function g(){}g.prototype=v.prototype,b.D=v.prototype,b.prototype=new g,b.prototype.constructor=b,b.C=function(E,T,A){for(var w=Array(arguments.length-2),je=2;je<arguments.length;je++)w[je-2]=arguments[je];return v.prototype[T].apply(E,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,v,g){g||(g=0);var E=Array(16);if(typeof v=="string")for(var T=0;16>T;++T)E[T]=v.charCodeAt(g++)|v.charCodeAt(g++)<<8|v.charCodeAt(g++)<<16|v.charCodeAt(g++)<<24;else for(T=0;16>T;++T)E[T]=v[g++]|v[g++]<<8|v[g++]<<16|v[g++]<<24;v=b.g[0],g=b.g[1],T=b.g[2];var A=b.g[3],w=v+(A^g&(T^A))+E[0]+3614090360&4294967295;v=g+(w<<7&4294967295|w>>>25),w=A+(T^v&(g^T))+E[1]+3905402710&4294967295,A=v+(w<<12&4294967295|w>>>20),w=T+(g^A&(v^g))+E[2]+606105819&4294967295,T=A+(w<<17&4294967295|w>>>15),w=g+(v^T&(A^v))+E[3]+3250441966&4294967295,g=T+(w<<22&4294967295|w>>>10),w=v+(A^g&(T^A))+E[4]+4118548399&4294967295,v=g+(w<<7&4294967295|w>>>25),w=A+(T^v&(g^T))+E[5]+1200080426&4294967295,A=v+(w<<12&4294967295|w>>>20),w=T+(g^A&(v^g))+E[6]+2821735955&4294967295,T=A+(w<<17&4294967295|w>>>15),w=g+(v^T&(A^v))+E[7]+4249261313&4294967295,g=T+(w<<22&4294967295|w>>>10),w=v+(A^g&(T^A))+E[8]+1770035416&4294967295,v=g+(w<<7&4294967295|w>>>25),w=A+(T^v&(g^T))+E[9]+2336552879&4294967295,A=v+(w<<12&4294967295|w>>>20),w=T+(g^A&(v^g))+E[10]+4294925233&4294967295,T=A+(w<<17&4294967295|w>>>15),w=g+(v^T&(A^v))+E[11]+2304563134&4294967295,g=T+(w<<22&4294967295|w>>>10),w=v+(A^g&(T^A))+E[12]+1804603682&4294967295,v=g+(w<<7&4294967295|w>>>25),w=A+(T^v&(g^T))+E[13]+4254626195&4294967295,A=v+(w<<12&4294967295|w>>>20),w=T+(g^A&(v^g))+E[14]+2792965006&4294967295,T=A+(w<<17&4294967295|w>>>15),w=g+(v^T&(A^v))+E[15]+1236535329&4294967295,g=T+(w<<22&4294967295|w>>>10),w=v+(T^A&(g^T))+E[1]+4129170786&4294967295,v=g+(w<<5&4294967295|w>>>27),w=A+(g^T&(v^g))+E[6]+3225465664&4294967295,A=v+(w<<9&4294967295|w>>>23),w=T+(v^g&(A^v))+E[11]+643717713&4294967295,T=A+(w<<14&4294967295|w>>>18),w=g+(A^v&(T^A))+E[0]+3921069994&4294967295,g=T+(w<<20&4294967295|w>>>12),w=v+(T^A&(g^T))+E[5]+3593408605&4294967295,v=g+(w<<5&4294967295|w>>>27),w=A+(g^T&(v^g))+E[10]+38016083&4294967295,A=v+(w<<9&4294967295|w>>>23),w=T+(v^g&(A^v))+E[15]+3634488961&4294967295,T=A+(w<<14&4294967295|w>>>18),w=g+(A^v&(T^A))+E[4]+3889429448&4294967295,g=T+(w<<20&4294967295|w>>>12),w=v+(T^A&(g^T))+E[9]+568446438&4294967295,v=g+(w<<5&4294967295|w>>>27),w=A+(g^T&(v^g))+E[14]+3275163606&4294967295,A=v+(w<<9&4294967295|w>>>23),w=T+(v^g&(A^v))+E[3]+4107603335&4294967295,T=A+(w<<14&4294967295|w>>>18),w=g+(A^v&(T^A))+E[8]+1163531501&4294967295,g=T+(w<<20&4294967295|w>>>12),w=v+(T^A&(g^T))+E[13]+2850285829&4294967295,v=g+(w<<5&4294967295|w>>>27),w=A+(g^T&(v^g))+E[2]+4243563512&4294967295,A=v+(w<<9&4294967295|w>>>23),w=T+(v^g&(A^v))+E[7]+1735328473&4294967295,T=A+(w<<14&4294967295|w>>>18),w=g+(A^v&(T^A))+E[12]+2368359562&4294967295,g=T+(w<<20&4294967295|w>>>12),w=v+(g^T^A)+E[5]+4294588738&4294967295,v=g+(w<<4&4294967295|w>>>28),w=A+(v^g^T)+E[8]+2272392833&4294967295,A=v+(w<<11&4294967295|w>>>21),w=T+(A^v^g)+E[11]+1839030562&4294967295,T=A+(w<<16&4294967295|w>>>16),w=g+(T^A^v)+E[14]+4259657740&4294967295,g=T+(w<<23&4294967295|w>>>9),w=v+(g^T^A)+E[1]+2763975236&4294967295,v=g+(w<<4&4294967295|w>>>28),w=A+(v^g^T)+E[4]+1272893353&4294967295,A=v+(w<<11&4294967295|w>>>21),w=T+(A^v^g)+E[7]+4139469664&4294967295,T=A+(w<<16&4294967295|w>>>16),w=g+(T^A^v)+E[10]+3200236656&4294967295,g=T+(w<<23&4294967295|w>>>9),w=v+(g^T^A)+E[13]+681279174&4294967295,v=g+(w<<4&4294967295|w>>>28),w=A+(v^g^T)+E[0]+3936430074&4294967295,A=v+(w<<11&4294967295|w>>>21),w=T+(A^v^g)+E[3]+3572445317&4294967295,T=A+(w<<16&4294967295|w>>>16),w=g+(T^A^v)+E[6]+76029189&4294967295,g=T+(w<<23&4294967295|w>>>9),w=v+(g^T^A)+E[9]+3654602809&4294967295,v=g+(w<<4&4294967295|w>>>28),w=A+(v^g^T)+E[12]+3873151461&4294967295,A=v+(w<<11&4294967295|w>>>21),w=T+(A^v^g)+E[15]+530742520&4294967295,T=A+(w<<16&4294967295|w>>>16),w=g+(T^A^v)+E[2]+3299628645&4294967295,g=T+(w<<23&4294967295|w>>>9),w=v+(T^(g|~A))+E[0]+4096336452&4294967295,v=g+(w<<6&4294967295|w>>>26),w=A+(g^(v|~T))+E[7]+1126891415&4294967295,A=v+(w<<10&4294967295|w>>>22),w=T+(v^(A|~g))+E[14]+2878612391&4294967295,T=A+(w<<15&4294967295|w>>>17),w=g+(A^(T|~v))+E[5]+4237533241&4294967295,g=T+(w<<21&4294967295|w>>>11),w=v+(T^(g|~A))+E[12]+1700485571&4294967295,v=g+(w<<6&4294967295|w>>>26),w=A+(g^(v|~T))+E[3]+2399980690&4294967295,A=v+(w<<10&4294967295|w>>>22),w=T+(v^(A|~g))+E[10]+4293915773&4294967295,T=A+(w<<15&4294967295|w>>>17),w=g+(A^(T|~v))+E[1]+2240044497&4294967295,g=T+(w<<21&4294967295|w>>>11),w=v+(T^(g|~A))+E[8]+1873313359&4294967295,v=g+(w<<6&4294967295|w>>>26),w=A+(g^(v|~T))+E[15]+4264355552&4294967295,A=v+(w<<10&4294967295|w>>>22),w=T+(v^(A|~g))+E[6]+2734768916&4294967295,T=A+(w<<15&4294967295|w>>>17),w=g+(A^(T|~v))+E[13]+1309151649&4294967295,g=T+(w<<21&4294967295|w>>>11),w=v+(T^(g|~A))+E[4]+4149444226&4294967295,v=g+(w<<6&4294967295|w>>>26),w=A+(g^(v|~T))+E[11]+3174756917&4294967295,A=v+(w<<10&4294967295|w>>>22),w=T+(v^(A|~g))+E[2]+718787259&4294967295,T=A+(w<<15&4294967295|w>>>17),w=g+(A^(T|~v))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var g=v-this.blockSize,E=this.B,T=this.h,A=0;A<v;){if(T==0)for(;A<=g;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<v;)if(E[T++]=b.charCodeAt(A++),T==this.blockSize){i(this,E),T=0;break}}else for(;A<v;)if(E[T++]=b[A++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var g=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=g&255,g/=256;for(this.u(b),b=Array(16),v=g=0;4>v;++v)for(var E=0;32>E;E+=8)b[g++]=this.g[v]>>>E&255;return b};function s(b,v){var g=l;return Object.prototype.hasOwnProperty.call(g,b)?g[b]:g[b]=v(b)}function a(b,v){this.h=v;for(var g=[],E=!0,T=b.length-1;0<=T;T--){var A=b[T]|0;E&&A==v||(g[T]=A,E=!1)}this.g=g}var l={};function u(b){return-128<=b&&128>b?s(b,function(v){return new a([v|0],0>v?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return y;if(0>b)return P(h(-b));for(var v=[],g=1,E=0;b>=g;E++)v[E]=b/g|0,g*=4294967296;return new a(v,0)}function f(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return P(f(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=h(Math.pow(v,8)),E=y,T=0;T<b.length;T+=8){var A=Math.min(8,b.length-T),w=parseInt(b.substring(T,T+A),v);8>A?(A=h(Math.pow(v,A)),E=E.j(A).add(h(w))):(E=E.j(g),E=E.add(h(w)))}return E}var y=u(0),m=u(1),I=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-P(this).m();for(var b=0,v=1,g=0;g<this.g.length;g++){var E=this.i(g);b+=(0<=E?E:4294967296+E)*v,v*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(x(this))return"-"+P(this).toString(b);for(var v=h(Math.pow(b,6)),g=this,E="";;){var T=Y(g,v).g;g=N(g,T.j(v));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(b);if(g=T,C(g))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function x(b){return b.h==-1}n.l=function(b){return b=N(this,b),x(b)?-1:C(b)?0:1};function P(b){for(var v=b.g.length,g=[],E=0;E<v;E++)g[E]=~b.g[E];return new a(g,~b.h).add(m)}n.abs=function(){return x(this)?P(this):this},n.add=function(b){for(var v=Math.max(this.g.length,b.g.length),g=[],E=0,T=0;T<=v;T++){var A=E+(this.i(T)&65535)+(b.i(T)&65535),w=(A>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);E=w>>>16,A&=65535,w&=65535,g[T]=w<<16|A}return new a(g,g[g.length-1]&-2147483648?-1:0)};function N(b,v){return b.add(P(v))}n.j=function(b){if(C(this)||C(b))return y;if(x(this))return x(b)?P(this).j(P(b)):P(P(this).j(b));if(x(b))return P(this.j(P(b)));if(0>this.l(I)&&0>b.l(I))return h(this.m()*b.m());for(var v=this.g.length+b.g.length,g=[],E=0;E<2*v;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<b.g.length;T++){var A=this.i(E)>>>16,w=this.i(E)&65535,je=b.i(T)>>>16,Xe=b.i(T)&65535;g[2*E+2*T]+=w*Xe,M(g,2*E+2*T),g[2*E+2*T+1]+=A*Xe,M(g,2*E+2*T+1),g[2*E+2*T+1]+=w*je,M(g,2*E+2*T+1),g[2*E+2*T+2]+=A*je,M(g,2*E+2*T+2)}for(E=0;E<v;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=v;E<2*v;E++)g[E]=0;return new a(g,0)};function M(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function U(b,v){this.g=b,this.h=v}function Y(b,v){if(C(v))throw Error("division by zero");if(C(b))return new U(y,y);if(x(b))return v=Y(P(b),v),new U(P(v.g),P(v.h));if(x(v))return v=Y(b,P(v)),new U(P(v.g),v.h);if(30<b.g.length){if(x(b)||x(v))throw Error("slowDivide_ only works with positive integers.");for(var g=m,E=v;0>=E.l(b);)g=q(g),E=q(E);var T=Q(g,1),A=Q(E,1);for(E=Q(E,2),g=Q(g,2);!C(E);){var w=A.add(E);0>=w.l(b)&&(T=T.add(g),A=w),E=Q(E,1),g=Q(g,1)}return v=N(b,T.j(v)),new U(T,v)}for(T=y;0<=b.l(v);){for(g=Math.max(1,Math.floor(b.m()/v.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=h(g),w=A.j(v);x(w)||0<w.l(b);)g-=E,A=h(g),w=A.j(v);C(A)&&(A=m),T=T.add(A),b=N(b,w)}return new U(T,b)}n.A=function(b){return Y(this,b).h},n.and=function(b){for(var v=Math.max(this.g.length,b.g.length),g=[],E=0;E<v;E++)g[E]=this.i(E)&b.i(E);return new a(g,this.h&b.h)},n.or=function(b){for(var v=Math.max(this.g.length,b.g.length),g=[],E=0;E<v;E++)g[E]=this.i(E)|b.i(E);return new a(g,this.h|b.h)},n.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),g=[],E=0;E<v;E++)g[E]=this.i(E)^b.i(E);return new a(g,this.h^b.h)};function q(b){for(var v=b.g.length+1,g=[],E=0;E<v;E++)g[E]=b.i(E)<<1|b.i(E-1)>>>31;return new a(g,b.h)}function Q(b,v){var g=v>>5;v%=32;for(var E=b.g.length-g,T=[],A=0;A<E;A++)T[A]=0<v?b.i(A+g)>>>v|b.i(A+g+1)<<32-v:b.i(A+g);return new a(T,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,cn=a}).apply(typeof Mc<"u"?Mc:typeof self<"u"?self:typeof window<"u"?window:{});var Ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xh,Er,Dh,Oi,Lo,Nh,Vh,Oh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ti=="object"&&Ti];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var S=d++;return{value:c(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function y(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function m(o,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,m.apply(null,arguments)}function I(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function C(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,S){for(var O=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)O[ae-2]=arguments[ae];return c.prototype[R].apply(p,O)}}function x(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function P(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const R=o.length||0,S=p.length||0;o.length=R+S;for(let O=0;O<S;O++)o[R+O]=p[O]}else o.push(p)}}class N{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function Y(o){return Y[" "](o),o}Y[" "]=function(){};var q=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function Q(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function b(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function v(o){const c={};for(const d in o)c[d]=o[d];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let S=0;S<g.length;S++)d=g[S],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function T(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function w(){var o=Gt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class je{constructor(){this.h=this.g=null}add(c,d){const p=Xe.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Xe=new N(()=>new nr,o=>o.reset());class nr{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let St,Ht=!1,Gt=new je,ii=()=>{const o=l.Promise.resolve(void 0);St=()=>{o.then(Ms)}};var Ms=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){A(d)}var c=Xe;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Ht=!1};function Ze(){this.s=this.s,this.C=this.C}Ze.prototype.s=!1,Ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Ls=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function Qt(o,c){if(Te.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(q){e:{try{Y(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Us[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qt.aa.h.call(this)}}C(Qt,Te);var Us={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Tn="closure_listenable_"+(1e6*Math.random()|0),Fs=0;function bn(o,c,d,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++Fs,this.da=this.fa=!1}function Yt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Jt(o){this.src=o,this.g={},this.h=0}Jt.prototype.add=function(o,c,d,p,R){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var O=j(o,c,p,R);return-1<O?(c=o[O],d||(c.fa=!1)):(c=new bn(c,this.src,S,!!p,R),c.fa=d,o.push(c)),c};function V(o,c){var d=c.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,c,void 0),S;(S=0<=R)&&Array.prototype.splice.call(p,R,1),S&&(Yt(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function j(o,c,d,p){for(var R=0;R<o.length;++R){var S=o[R];if(!S.da&&S.listener==c&&S.capture==!!d&&S.ha==p)return R}return-1}var ee="closure_lm_"+(1e6*Math.random()|0),se={};function qe(o,c,d,p,R){if(Array.isArray(c)){for(var S=0;S<c.length;S++)qe(o,c[S],d,p,R);return null}return d=Za(d),o&&o[Tn]?o.K(c,d,h(p)?!!p.capture:!1,R):Xt(o,c,d,!1,p,R)}function Xt(o,c,d,p,R,S){if(!c)throw Error("Invalid event type");var O=h(R)?!!R.capture:!!R,ae=js(o);if(ae||(o[ee]=ae=new Jt(o)),d=ae.add(c,d,p,O,S),d.proxy)return d;if(p=An(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Ls||(R=O),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(Xa(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function An(){function o(d){return c.call(o.src,o.listener,d)}const c=rf;return o}function rr(o,c,d,p,R){if(Array.isArray(c))for(var S=0;S<c.length;S++)rr(o,c[S],d,p,R);else p=h(p)?!!p.capture:!!p,d=Za(d),o&&o[Tn]?(o=o.i,c=String(c).toString(),c in o.g&&(S=o.g[c],d=j(S,d,p,R),-1<d&&(Yt(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete o.g[c],o.h--)))):o&&(o=js(o))&&(c=o.g[c.toString()],o=-1,c&&(o=j(c,d,p,R)),(d=-1<o?c[o]:null)&&Bs(d))}function Bs(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Tn])V(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(Xa(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=js(c))?(V(d,o),d.h==0&&(d.src=null,c[ee]=null)):Yt(o)}}}function Xa(o){return o in se?se[o]:se[o]="on"+o}function rf(o,c){if(o.da)o=!0;else{c=new Qt(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&Bs(o),o=d.call(p,c)}return o}function js(o){return o=o[ee],o instanceof Jt?o:null}var zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Za(o){return typeof o=="function"?o:(o[zs]||(o[zs]=function(c){return o.handleEvent(c)}),o[zs])}function xe(){Ze.call(this),this.i=new Jt(this),this.M=this,this.F=null}C(xe,Ze),xe.prototype[Tn]=!0,xe.prototype.removeEventListener=function(o,c,d,p){rr(this,o,c,d,p)};function Ue(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Te(c,o);else if(c instanceof Te)c.target=c.target||o;else{var R=c;c=new Te(p,o),E(c,R)}if(R=!0,d)for(var S=d.length-1;0<=S;S--){var O=c.g=d[S];R=si(O,p,!0,c)&&R}if(O=c.g=o,R=si(O,p,!0,c)&&R,R=si(O,p,!1,c)&&R,d)for(S=0;S<d.length;S++)O=c.g=d[S],R=si(O,p,!1,c)&&R}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)Yt(d[p]);delete o.g[c],o.h--}}this.F=null},xe.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},xe.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function si(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,S=0;S<c.length;++S){var O=c[S];if(O&&!O.da&&O.capture==d){var ae=O.listener,Se=O.ha||O.src;O.fa&&V(o.i,O),R=ae.call(Se,p)!==!1&&R}}return R&&!p.defaultPrevented}function el(o,c,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function tl(o){o.g=el(()=>{o.g=null,o.i&&(o.i=!1,tl(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class sf extends Ze{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:tl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ir(o){Ze.call(this),this.h=o,this.g={}}C(ir,Ze);var nl=[];function rl(o){Q(o.g,function(c,d){this.g.hasOwnProperty(d)&&Bs(c)},o),o.g={}}ir.prototype.N=function(){ir.aa.N.call(this),rl(this)},ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qs=l.JSON.stringify,of=l.JSON.parse,af=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function $s(){}$s.prototype.h=null;function il(o){return o.h||(o.h=o.i())}function sl(){}var sr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ws(){Te.call(this,"d")}C(Ws,Te);function Ks(){Te.call(this,"c")}C(Ks,Te);var Zt={},ol=null;function oi(){return ol=ol||new xe}Zt.La="serverreachability";function al(o){Te.call(this,Zt.La,o)}C(al,Te);function or(o){const c=oi();Ue(c,new al(c))}Zt.STAT_EVENT="statevent";function ll(o,c){Te.call(this,Zt.STAT_EVENT,o),this.stat=c}C(ll,Te);function Fe(o){const c=oi();Ue(c,new ll(c,o))}Zt.Ma="timingevent";function cl(o,c){Te.call(this,Zt.Ma,o),this.size=c}C(cl,Te);function ar(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function lr(){this.g=!0}lr.prototype.xa=function(){this.g=!1};function lf(o,c,d,p,R,S){o.info(function(){if(o.g)if(S)for(var O="",ae=S.split("&"),Se=0;Se<ae.length;Se++){var te=ae[Se].split("=");if(1<te.length){var De=te[0];te=te[1];var Ne=De.split("_");O=2<=Ne.length&&Ne[1]=="type"?O+(De+"="+te+"&"):O+(De+"=redacted&")}}else O=null;else O=S;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+O})}function cf(o,c,d,p,R,S,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+S+" "+O})}function Rn(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+hf(o,d)+(p?" "+p:"")})}function uf(o,c){o.info(function(){return"TIMEOUT: "+c})}lr.prototype.info=function(){};function hf(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var S=R[0];if(S!="noop"&&S!="stop"&&S!="close")for(var O=1;O<R.length;O++)R[O]=""}}}}return qs(d)}catch{return c}}var ai={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ul={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hs;function li(){}C(li,$s),li.prototype.g=function(){return new XMLHttpRequest},li.prototype.i=function(){return{}},Hs=new li;function Ct(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new ir(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hl}function hl(){this.i=null,this.g="",this.h=!1}var dl={},Gs={};function Qs(o,c,d){o.L=1,o.v=di(ct(c)),o.m=d,o.P=!0,fl(o,null)}function fl(o,c){o.F=Date.now(),ci(o),o.A=ct(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Sl(d.i,"t",p),o.C=0,d=o.j.J,o.h=new hl,o.g=Wl(o.j,d?c:null,!o.m),0<o.O&&(o.M=new sf(m(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(nl[0]=R.toString()),R=nl);for(var S=0;S<R.length;S++){var O=qe(d,R[S],p||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),or(),lf(o.i,o.u,o.A,o.l,o.R,o.m)}Ct.prototype.ca=function(o){o=o.target;const c=this.M;c&&ut(o)==3?c.j():this.Y(o)},Ct.prototype.Y=function(o){try{if(o==this.g)e:{const Ne=ut(this.g);var c=this.g.Ba();const Pn=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||Vl(this.g)))){this.J||Ne!=4||c==7||(c==8||0>=Pn?or(3):or(2)),Ys(this);var d=this.g.Z();this.X=d;t:if(pl(this)){var p=Vl(this.g);o="";var R=p.length,S=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),cr(this);var O="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(S&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,cf(this.i,this.u,this.A,this.l,this.R,Ne,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,Se=this.g;if((ae=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(ae)){var te=ae;break t}}te=null}if(d=te)Rn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Js(this,d);else{this.o=!1,this.s=3,Fe(12),en(this),cr(this);break e}}if(this.P){d=!0;let Ge;for(;!this.J&&this.C<O.length;)if(Ge=df(this,O),Ge==Gs){Ne==4&&(this.s=4,Fe(14),d=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==dl){this.s=4,Fe(15),Rn(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else Rn(this.i,this.l,Ge,null),Js(this,Ge);if(pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||O.length!=0||this.h.h||(this.s=1,Fe(16),d=!1),this.o=this.o&&d,!d)Rn(this.i,this.l,O,"[Invalid Chunked Response]"),en(this),cr(this);else if(0<O.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),ro(De),De.M=!0,Fe(11))}}else Rn(this.i,this.l,O,null),Js(this,O);Ne==4&&en(this),this.o&&!this.J&&(Ne==4?jl(this.j,this):(this.o=!1,ci(this)))}else Pf(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),en(this),cr(this)}}}catch{}finally{}};function pl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function df(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?Gs:(d=Number(c.substring(d,p)),isNaN(d)?dl:(p+=1,p+d>c.length?Gs:(c=c.slice(p,p+d),o.C=p+d,c)))}Ct.prototype.cancel=function(){this.J=!0,en(this)};function ci(o){o.S=Date.now()+o.I,ml(o,o.I)}function ml(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ar(m(o.ba,o),c)}function Ys(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Ct.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(uf(this.i,this.A),this.L!=2&&(or(),Fe(17)),en(this),this.s=2,cr(this)):ml(this,this.S-o)};function cr(o){o.j.G==0||o.J||jl(o.j,o)}function en(o){Ys(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,rl(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Js(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Xs(d.h,o))){if(!o.K&&Xs(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)yi(d),gi(d);else break e;no(d),Fe(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=ar(m(d.Za,d),6e3));if(1>=yl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else nn(d,11)}else if((o.K||d.g==o)&&yi(d),!M(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let te=R[c];if(d.T=te[0],te=te[1],d.G==2)if(te[0]=="c"){d.K=te[1],d.ia=te[2];const De=te[3];De!=null&&(d.la=De,d.j.info("VER="+d.la));const Ne=te[4];Ne!=null&&(d.Aa=Ne,d.j.info("SVER="+d.Aa));const Pn=te[5];Pn!=null&&typeof Pn=="number"&&0<Pn&&(p=1.5*Pn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ge=o.g;if(Ge){const Ei=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ei){var S=p.h;S.g||Ei.indexOf("spdy")==-1&&Ei.indexOf("quic")==-1&&Ei.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Zs(S,S.h),S.h=null))}if(p.D){const io=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;io&&(p.ya=io,ce(p.I,p.D,io))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=$l(p,p.J?p.ia:null,p.W),O.K){vl(p.h,O);var ae=O,Se=p.L;Se&&(ae.I=Se),ae.B&&(Ys(ae),ci(ae)),p.g=O}else Fl(p);0<d.i.length&&_i(d)}else te[0]!="stop"&&te[0]!="close"||nn(d,7);else d.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?nn(d,7):to(d):te[0]!="noop"&&d.l&&d.l.ta(te),d.v=0)}}or(4)}catch{}}var ff=class{constructor(o,c){this.g=o,this.map=c}};function gl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _l(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function yl(o){return o.h?1:o.g?o.g.size:0}function Xs(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Zs(o,c){o.g?o.g.add(c):o.h=c}function vl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}gl.prototype.cancel=function(){if(this.i=El(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function El(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return x(o.i)}function pf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function mf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function wl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=mf(o),p=pf(o),R=p.length,S=0;S<R;S++)c.call(void 0,p[S],d&&d[S],o)}var Il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gf(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var S=o[d].substring(0,p);R=o[d].substring(p+1)}else S=o[d];c(S,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function tn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof tn){this.h=o.h,ui(this,o.j),this.o=o.o,this.g=o.g,hi(this,o.s),this.l=o.l;var c=o.i,d=new dr;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Tl(this,d),this.m=o.m}else o&&(c=String(o).match(Il))?(this.h=!1,ui(this,c[1]||"",!0),this.o=ur(c[2]||""),this.g=ur(c[3]||"",!0),hi(this,c[4]),this.l=ur(c[5]||"",!0),Tl(this,c[6]||"",!0),this.m=ur(c[7]||"")):(this.h=!1,this.i=new dr(null,this.h))}tn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(hr(c,bl,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(hr(c,bl,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(hr(d,d.charAt(0)=="/"?vf:yf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",hr(d,wf)),o.join("")};function ct(o){return new tn(o)}function ui(o,c,d){o.j=d?ur(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function hi(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Tl(o,c,d){c instanceof dr?(o.i=c,If(o.i,o.h)):(d||(c=hr(c,Ef)),o.i=new dr(c,o.h))}function ce(o,c,d){o.i.set(c,d)}function di(o){return ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ur(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function hr(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,_f),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function _f(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var bl=/[#\/\?@]/g,yf=/[#\?:]/g,vf=/[#\?]/g,Ef=/[#\?@]/g,wf=/#/g;function dr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Pt(o){o.g||(o.g=new Map,o.h=0,o.i&&gf(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=dr.prototype,n.add=function(o,c){Pt(this),this.i=null,o=Sn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Al(o,c){Pt(o),c=Sn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Rl(o,c){return Pt(o),c=Sn(o,c),o.g.has(c)}n.forEach=function(o,c){Pt(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(c,R,p,this)},this)},this)},n.na=function(){Pt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const R=o[p];for(let S=0;S<R.length;S++)d.push(c[p])}return d},n.V=function(o){Pt(this);let c=[];if(typeof o=="string")Rl(this,o)&&(c=c.concat(this.g.get(Sn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return Pt(this),this.i=null,o=Sn(this,o),Rl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Sl(o,c,d){Al(o,c),0<d.length&&(o.i=null,o.g.set(Sn(o,c),x(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const S=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var R=S;O[p]!==""&&(R+="="+encodeURIComponent(String(O[p]))),o.push(R)}}return this.i=o.join("&")};function Sn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function If(o,c){c&&!o.j&&(Pt(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(Al(this,p),Sl(this,R,d))},o)),o.j=c}function Tf(o,c){const d=new lr;if(l.Image){const p=new Image;p.onload=I(kt,d,"TestLoadImage: loaded",!0,c,p),p.onerror=I(kt,d,"TestLoadImage: error",!1,c,p),p.onabort=I(kt,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=I(kt,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function bf(o,c){const d=new lr,p=new AbortController,R=setTimeout(()=>{p.abort(),kt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(R),S.ok?kt(d,"TestPingServer: ok",!0,c):kt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),kt(d,"TestPingServer: error",!1,c)})}function kt(o,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function Af(){this.g=new af}function Rf(o,c,d){const p=d||"";try{wl(o,function(R,S){let O=R;h(R)&&(O=qs(R)),c.push(p+S+"="+encodeURIComponent(O))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function fi(o){this.l=o.Ub||null,this.j=o.eb||!1}C(fi,$s),fi.prototype.g=function(){return new pi(this.l,this.j)},fi.prototype.i=function(o){return function(){return o}}({});function pi(o,c){xe.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(pi,xe),n=pi.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,pr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?fr(this):pr(this),this.readyState==3&&Cl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,fr(this))},n.Qa=function(o){this.g&&(this.response=o,fr(this))},n.ga=function(){this.g&&fr(this)};function fr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,pr(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function pr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Pl(o){let c="";return Q(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function eo(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Pl(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ce(o,c,d))}function me(o){xe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(me,xe);var Sf=/^https?$/i,Cf=["POST","PUT"];n=me.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hs.g(),this.v=this.o?il(this.o):il(Hs),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){kl(this,S);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Cf,c,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of d)this.g.setRequestHeader(S,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nl(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){kl(this,S)}};function kl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,xl(o),mi(o)}function xl(o){o.A||(o.A=!0,Ue(o,"complete"),Ue(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ue(this,"complete"),Ue(this,"abort"),mi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mi(this,!0)),me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Dl(this):this.bb())},n.bb=function(){Dl(this)};function Dl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ut(o)!=4||o.Z()!=2)){if(o.u&&ut(o)==4)el(o.Ea,0,o);else if(Ue(o,"readystatechange"),ut(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=O===0){var R=String(o.D).match(Il)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!Sf.test(R?R.toLowerCase():"")}d=p}if(d)Ue(o,"complete"),Ue(o,"success");else{o.m=6;try{var S=2<ut(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",xl(o)}}finally{mi(o)}}}}function mi(o,c){if(o.g){Nl(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ue(o,"ready");try{d.onreadystatechange=p}catch{}}}function Nl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ut(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),of(c)}};function Vl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Pf(o){const c={};o=(o.g&&2<=ut(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var d=T(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=c[R]||[];c[R]=S,S.push(d)}b(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mr(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Ol(o){this.Aa=0,this.i=[],this.j=new lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mr("baseRetryDelayMs",5e3,o),this.cb=mr("retryDelaySeedMs",1e4,o),this.Wa=mr("forwardChannelMaxRetries",2,o),this.wa=mr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new gl(o&&o.concurrentRequestLimit),this.Da=new Af,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ol.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,p){Fe(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=$l(this,null,this.W),_i(this)};function to(o){if(Ml(o),o.G==3){var c=o.U++,d=ct(o.I);if(ce(d,"SID",o.K),ce(d,"RID",c),ce(d,"TYPE","terminate"),gr(o,d),c=new Ct(o,o.j,c),c.L=2,c.v=di(ct(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Wl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ci(c)}ql(o)}function gi(o){o.g&&(ro(o),o.g.cancel(),o.g=null)}function Ml(o){gi(o),o.u&&(l.clearTimeout(o.u),o.u=null),yi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function _i(o){if(!_l(o.h)&&!o.s){o.s=!0;var c=o.Ga;St||ii(),Ht||(St(),Ht=!0),Gt.add(c,o),o.B=0}}function kf(o,c){return yl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ar(m(o.Ga,o,c),zl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Ct(this,this.j,o);let S=this.o;if(this.S&&(S?(S=v(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(R.H=S,S=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Ul(this,R,c),d=ct(this.I),ce(d,"RID",o),ce(d,"CVER",22),this.D&&ce(d,"X-HTTP-Session-Id",this.D),gr(this,d),S&&(this.O?c="headers="+encodeURIComponent(String(Pl(S)))+"&"+c:this.m&&eo(d,this.m,S)),Zs(this.h,R),this.Ua&&ce(d,"TYPE","init"),this.P?(ce(d,"$req",c),ce(d,"SID","null"),R.T=!0,Qs(R,d,null)):Qs(R,d,c),this.G=2}}else this.G==3&&(o?Ll(this,o):this.i.length==0||_l(this.h)||Ll(this))};function Ll(o,c){var d;c?d=c.l:d=o.U++;const p=ct(o.I);ce(p,"SID",o.K),ce(p,"RID",d),ce(p,"AID",o.T),gr(o,p),o.m&&o.o&&eo(p,o.m,o.o),d=new Ct(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ul(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Zs(o.h,d),Qs(d,p,c)}function gr(o,c){o.H&&Q(o.H,function(d,p){ce(c,p,d)}),o.l&&wl({},function(d,p){ce(c,p,d)})}function Ul(o,c,d){d=Math.min(o.i.length,d);var p=o.l?m(o.l.Na,o.l,o):null;e:{var R=o.i;let S=-1;for(;;){const O=["count="+d];S==-1?0<d?(S=R[0].g,O.push("ofs="+S)):S=0:O.push("ofs="+S);let ae=!0;for(let Se=0;Se<d;Se++){let te=R[Se].g;const De=R[Se].map;if(te-=S,0>te)S=Math.max(0,R[Se].g-100),ae=!1;else try{Rf(De,O,"req"+te+"_")}catch{p&&p(De)}}if(ae){p=O.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,p}function Fl(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;St||ii(),Ht||(St(),Ht=!0),Gt.add(c,o),o.v=0}}function no(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ar(m(o.Fa,o),zl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Bl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ar(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),gi(this),Bl(this))};function ro(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Bl(o){o.g=new Ct(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ct(o.qa);ce(c,"RID","rpc"),ce(c,"SID",o.K),ce(c,"AID",o.T),ce(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ce(c,"TO",o.ja),ce(c,"TYPE","xmlhttp"),gr(o,c),o.m&&o.o&&eo(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=di(ct(c)),d.m=null,d.P=!0,fl(d,o)}n.Za=function(){this.C!=null&&(this.C=null,gi(this),no(this),Fe(19))};function yi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function jl(o,c){var d=null;if(o.g==c){yi(o),ro(o),o.g=null;var p=2}else if(Xs(o.h,c))d=c.D,vl(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=oi(),Ue(p,new cl(p,d)),_i(o)}else Fl(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&kf(o,c)||p==2&&no(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),R){case 1:nn(o,5);break;case 4:nn(o,10);break;case 3:nn(o,6);break;default:nn(o,2)}}}function zl(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function nn(o,c){if(o.j.info("Error code "+c),c==2){var d=m(o.fb,o),p=o.Xa;const R=!p;p=new tn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ui(p,"https"),di(p),R?Tf(p.toString(),d):bf(p.toString(),d)}else Fe(2);o.G=0,o.l&&o.l.sa(c),ql(o),Ml(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function ql(o){if(o.G=0,o.ka=[],o.l){const c=El(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ka,c),P(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function $l(o,c,d){var p=d instanceof tn?ct(d):new tn(d);if(p.g!="")c&&(p.g=c+"."+p.g),hi(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var S=new tn(null);p&&ui(S,p),c&&(S.g=c),R&&hi(S,R),d&&(S.l=d),p=S}return d=o.D,c=o.ya,d&&c&&ce(p,d,c),ce(p,"VER",o.la),gr(o,p),p}function Wl(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new me(new fi({eb:d})):new me(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kl(){}n=Kl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function vi(){}vi.prototype.g=function(o,c){return new $e(o,c)};function $e(o,c){xe.call(this),this.g=new Ol(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!M(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!M(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Cn(this)}C($e,xe),$e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){to(this.g)},$e.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=qs(o),o=d);c.i.push(new ff(c.Ya++,o)),c.G==3&&_i(c)},$e.prototype.N=function(){this.g.l=null,delete this.j,to(this.g),delete this.g,$e.aa.N.call(this)};function Hl(o){Ws.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(Hl,Ws);function Gl(){Ks.call(this),this.status=1}C(Gl,Ks);function Cn(o){this.g=o}C(Cn,Kl),Cn.prototype.ua=function(){Ue(this.g,"a")},Cn.prototype.ta=function(o){Ue(this.g,new Hl(o))},Cn.prototype.sa=function(o){Ue(this.g,new Gl)},Cn.prototype.ra=function(){Ue(this.g,"b")},vi.prototype.createWebChannel=vi.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,Oh=function(){return new vi},Vh=function(){return oi()},Nh=Zt,Lo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ai.NO_ERROR=0,ai.TIMEOUT=8,ai.HTTP_ERROR=6,Oi=ai,ul.COMPLETE="complete",Dh=ul,sl.EventType=sr,sr.OPEN="a",sr.CLOSE="b",sr.ERROR="c",sr.MESSAGE="d",xe.prototype.listen=xe.prototype.K,Er=sl,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,xh=me}).apply(typeof Ti<"u"?Ti:typeof self<"u"?self:typeof window<"u"?window:{});const Lc="@firebase/firestore";/**
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
 */let Xn="10.14.0";/**
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
 */const mn=new ra("@firebase/firestore");function _r(){return mn.logLevel}function F(n,...e){if(mn.logLevel<=X.DEBUG){const t=e.map(ma);mn.debug(`Firestore (${Xn}): ${n}`,...t)}}function Tt(n,...e){if(mn.logLevel<=X.ERROR){const t=e.map(ma);mn.error(`Firestore (${Xn}): ${n}`,...t)}}function gn(n,...e){if(mn.logLevel<=X.WARN){const t=e.map(ma);mn.warn(`Firestore (${Xn}): ${n}`,...t)}}function ma(n){if(typeof n=="string")return n;try{/**
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
 */function $(n="Unexpected state"){const e=`FIRESTORE (${Xn}) INTERNAL ASSERTION FAILED: `+n;throw Tt(e),new Error(e)}function ie(n,e){n||$()}function H(n,e){return n}/**
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
 */class Mh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class F_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class B_{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ie(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new Mh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Oe(e)}}class j_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class z_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new j_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class q_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ie(this.o===void 0);const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ie(typeof t.token=="string"),this.R=t.token,new q_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function W_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ga{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=W_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(n,e){return n<e?-1:n>e?1:0}function qn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class we{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new we(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new we(0,0))}static max(){return new K(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Nr{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(),r===void 0?r=e.length-t:r>e.length-t&&$(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ue extends Nr{construct(e,t,r){return new ue(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const K_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends Nr{construct(e,t,r){return new Ae(e,t,r)}static isValidIdentifier(e){return K_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new L(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new L(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ue.fromString(e))}static fromName(e){return new B(ue.fromString(e).popFirst(5))}static empty(){return new B(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ue(e.slice()))}}function H_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new we(t+1,0):new we(t,r));return new zt(i,B.empty(),e)}function G_(n){return new zt(n.readTime,n.key,-1)}class zt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new zt(K.min(),B.empty(),-1)}static max(){return new zt(K.max(),B.empty(),-1)}}function Q_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const Y_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Kr(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==Y_)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(i=>i?D.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new D((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new D((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function X_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Hr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class _a{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_a.oe=-1;function ps(n){return n==null}function Xi(n){return n===0&&1/n==-1/0}function Z_(n){return typeof n=="number"&&Number.isInteger(n)&&!Xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Uc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function wn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Uh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class pe{constructor(e,t){this.comparator=e,this.root=t||Ce.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bi(this.root,e,this.comparator,!0)}}class bi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ce.RED,this.left=i??Ce.EMPTY,this.right=s??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ce(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pe{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fc(this.data.getIterator())}getIteratorFrom(e){return new Fc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pe(this.comparator);return t.data=e,t}}class Fc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class We{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new We([])}unionWith(e){let t=new Pe(Ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new We(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Fh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Fh("Invalid base64 string: "+s):s}}(e);return new Re(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const ey=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if(ie(!!n),typeof n=="string"){let e=0;const t=ey.exec(n);if(ie(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _n(n){return typeof n=="string"?Re.fromBase64String(n):Re.fromUint8Array(n)}/**
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
 */function ya(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function va(n){const e=n.mapValue.fields.__previous_value__;return ya(e)?va(e):e}function Vr(n){const e=qt(n.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class ty{constructor(e,t,r,i,s,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class $n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new $n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $n&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ai={mapValue:{}};function yn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ya(n)?4:ry(n)?9007199254740991:ny(n)?10:11:$()}function ot(n,e){if(n===e)return!0;const t=yn(n);if(t!==yn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vr(n).isEqual(Vr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=qt(i.timestampValue),l=qt(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return _n(i.bytesValue).isEqual(_n(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ge(i.geoPointValue.latitude)===ge(s.geoPointValue.latitude)&&ge(i.geoPointValue.longitude)===ge(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ge(i.integerValue)===ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ge(i.doubleValue),l=ge(s.doubleValue);return a===l?Xi(a)===Xi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return qn(n.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Uc(a)!==Uc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ot(a[u],l[u])))return!1;return!0}(n,e);default:return $()}}function Or(n,e){return(n.values||[]).find(t=>ot(t,e))!==void 0}function Wn(n,e){if(n===e)return 0;const t=yn(n),r=yn(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=ge(s.integerValue||s.doubleValue),u=ge(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Bc(n.timestampValue,e.timestampValue);case 4:return Bc(Vr(n),Vr(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(s,a){const l=_n(s),u=_n(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ne(l[h],u[h]);if(f!==0)return f}return ne(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ne(ge(s.latitude),ge(a.latitude));return l!==0?l:ne(ge(s.longitude),ge(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return jc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const y=s.fields||{},m=a.fields||{},I=(l=y.value)===null||l===void 0?void 0:l.arrayValue,C=(u=m.value)===null||u===void 0?void 0:u.arrayValue,x=ne(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:jc(I,C)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ai.mapValue&&a===Ai.mapValue)return 0;if(s===Ai.mapValue)return 1;if(a===Ai.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const m=ne(u[y],f[y]);if(m!==0)return m;const I=Wn(l[u[y]],h[f[y]]);if(I!==0)return I}return ne(u.length,f.length)}(n.mapValue,e.mapValue);default:throw $()}}function Bc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=qt(n),r=qt(e),i=ne(t.seconds,r.seconds);return i!==0?i:ne(t.nanos,r.nanos)}function jc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Wn(t[i],r[i]);if(s)return s}return ne(t.length,r.length)}function Kn(n){return Uo(n)}function Uo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return _n(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Uo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Uo(t.fields[a])}`;return i+"}"}(n.mapValue):$()}function zc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Fo(n){return!!n&&"integerValue"in n}function Ea(n){return!!n&&"arrayValue"in n}function qc(n){return!!n&&"nullValue"in n}function $c(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Mi(n){return!!n&&"mapValue"in n}function ny(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ar(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return wn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ar(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ar(n.arrayValue.values[t]);return e}return Object.assign({},n)}function ry(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Mi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ar(t)}setAll(e){let t=Ae.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Ar(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Mi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Mi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){wn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ze(Ar(this.value))}}function Bh(n){const e=[];return wn(n.fields,(t,r)=>{const i=new Ae([t]);if(Mi(r)){const s=Bh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new We(e)}/**
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
 */class Me{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Me(e,0,K.min(),K.min(),K.min(),ze.empty(),0)}static newFoundDocument(e,t,r,i){return new Me(e,1,t,K.min(),r,i,0)}static newNoDocument(e,t){return new Me(e,2,t,K.min(),K.min(),ze.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,K.min(),K.min(),ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zi{constructor(e,t){this.position=e,this.inclusive=t}}function Wc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=Wn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Mr{constructor(e,t="asc"){this.field=e,this.dir=t}}function iy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class jh{}class Ee extends jh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new oy(e,t,r):t==="array-contains"?new cy(e,r):t==="in"?new uy(e,r):t==="not-in"?new hy(e,r):t==="array-contains-any"?new dy(e,r):new Ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ay(e,r):new ly(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Wn(t,this.value)):t!==null&&yn(this.value)===yn(t)&&this.matchesComparison(Wn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Je extends jh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Je(e,t)}matches(e){return zh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zh(n){return n.op==="and"}function qh(n){return sy(n)&&zh(n)}function sy(n){for(const e of n.filters)if(e instanceof Je)return!1;return!0}function Bo(n){if(n instanceof Ee)return n.field.canonicalString()+n.op.toString()+Kn(n.value);if(qh(n))return n.filters.map(e=>Bo(e)).join(",");{const e=n.filters.map(t=>Bo(t)).join(",");return`${n.op}(${e})`}}function $h(n,e){return n instanceof Ee?function(r,i){return i instanceof Ee&&r.op===i.op&&r.field.isEqual(i.field)&&ot(r.value,i.value)}(n,e):n instanceof Je?function(r,i){return i instanceof Je&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&$h(a,i.filters[l]),!0):!1}(n,e):void $()}function Wh(n){return n instanceof Ee?function(t){return`${t.field.canonicalString()} ${t.op} ${Kn(t.value)}`}(n):n instanceof Je?function(t){return t.op.toString()+" {"+t.getFilters().map(Wh).join(" ,")+"}"}(n):"Filter"}class oy extends Ee{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class ay extends Ee{constructor(e,t){super(e,"in",t),this.keys=Kh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ly extends Ee{constructor(e,t){super(e,"not-in",t),this.keys=Kh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Kh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class cy extends Ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ea(t)&&Or(t.arrayValue,this.value)}}class uy extends Ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Or(this.value.arrayValue,t)}}class hy extends Ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(Or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Or(this.value.arrayValue,t)}}class dy extends Ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ea(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Or(this.value.arrayValue,r))}}/**
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
 */class fy{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Hc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new fy(n,e,t,r,i,s,a)}function wa(n){const e=H(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Bo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ps(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Kn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Kn(r)).join(",")),e.ue=t}return e.ue}function Ia(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!iy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$h(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Kc(n.startAt,e.startAt)&&Kc(n.endAt,e.endAt)}function jo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Zn{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function py(n,e,t,r,i,s,a,l){return new Zn(n,e,t,r,i,s,a,l)}function ms(n){return new Zn(n)}function Gc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hh(n){return n.collectionGroup!==null}function Rr(n){const e=H(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Pe(Ae.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Mr(s,r))}),t.has(Ae.keyField().canonicalString())||e.ce.push(new Mr(Ae.keyField(),r))}return e.ce}function it(n){const e=H(n);return e.le||(e.le=my(e,Rr(n))),e.le}function my(n,e){if(n.limitType==="F")return Hc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Mr(i.field,s)});const t=n.endAt?new Zi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Zi(n.startAt.position,n.startAt.inclusive):null;return Hc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function zo(n,e){const t=n.filters.concat([e]);return new Zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function es(n,e,t){return new Zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function gs(n,e){return Ia(it(n),it(e))&&n.limitType===e.limitType}function Gh(n){return`${wa(it(n))}|lt:${n.limitType}`}function kn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Wh(i)).join(", ")}]`),ps(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Kn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Kn(i)).join(",")),`Target(${r})`}(it(n))}; limitType=${n.limitType})`}function _s(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Rr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=Wc(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,Rr(r),i)||r.endAt&&!function(a,l,u){const h=Wc(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,Rr(r),i))}(n,e)}function gy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qh(n){return(e,t)=>{let r=!1;for(const i of Rr(n)){const s=_y(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _y(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Wn(u,h):$()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class er{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Uh(this.inner)}size(){return this.innerSize}}/**
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
 */const yy=new pe(B.comparator);function bt(){return yy}const Yh=new pe(B.comparator);function wr(...n){let e=Yh;for(const t of n)e=e.insert(t.key,t);return e}function Jh(n){let e=Yh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function an(){return Sr()}function Xh(){return Sr()}function Sr(){return new er(n=>n.toString(),(n,e)=>n.isEqual(e))}const vy=new pe(B.comparator),Ey=new Pe(B.comparator);function J(...n){let e=Ey;for(const t of n)e=e.add(t);return e}const wy=new Pe(ne);function Iy(){return wy}/**
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
 */function Ta(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xi(e)?"-0":e}}function Zh(n){return{integerValue:""+n}}function Ty(n,e){return Z_(e)?Zh(e):Ta(n,e)}/**
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
 */class ys{constructor(){this._=void 0}}function by(n,e,t){return n instanceof Lr?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ya(s)&&(s=va(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof Ur?td(n,e):n instanceof Fr?nd(n,e):function(i,s){const a=ed(i,s),l=Qc(a)+Qc(i.Pe);return Fo(a)&&Fo(i.Pe)?Zh(l):Ta(i.serializer,l)}(n,e)}function Ay(n,e,t){return n instanceof Ur?td(n,e):n instanceof Fr?nd(n,e):t}function ed(n,e){return n instanceof ts?function(r){return Fo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Lr extends ys{}class Ur extends ys{constructor(e){super(),this.elements=e}}function td(n,e){const t=rd(e);for(const r of n.elements)t.some(i=>ot(i,r))||t.push(r);return{arrayValue:{values:t}}}class Fr extends ys{constructor(e){super(),this.elements=e}}function nd(n,e){let t=rd(e);for(const r of n.elements)t=t.filter(i=>!ot(i,r));return{arrayValue:{values:t}}}class ts extends ys{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Qc(n){return ge(n.integerValue||n.doubleValue)}function rd(n){return Ea(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ry{constructor(e,t){this.field=e,this.transform=t}}function Sy(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ur&&i instanceof Ur||r instanceof Fr&&i instanceof Fr?qn(r.elements,i.elements,ot):r instanceof ts&&i instanceof ts?ot(r.Pe,i.Pe):r instanceof Lr&&i instanceof Lr}(n.transform,e.transform)}class Cy{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Li(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class vs{}function id(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ba(n.key,He.none()):new Gr(n.key,n.data,He.none());{const t=n.data,r=ze.empty();let i=new Pe(Ae.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Kt(n.key,r,new We(i.toArray()),He.none())}}function Py(n,e,t){n instanceof Gr?function(i,s,a){const l=i.value.clone(),u=Jc(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Kt?function(i,s,a){if(!Li(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Jc(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(sd(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Cr(n,e,t,r){return n instanceof Gr?function(s,a,l,u){if(!Li(s.precondition,a))return l;const h=s.value.clone(),f=Xc(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Kt?function(s,a,l,u){if(!Li(s.precondition,a))return l;const h=Xc(s.fieldTransforms,u,a),f=a.data;return f.setAll(sd(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(s,a,l){return Li(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function ky(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=ed(r.transform,i||null);s!=null&&(t===null&&(t=ze.empty()),t.set(r.field,s))}return t||null}function Yc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qn(r,i,(s,a)=>Sy(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gr extends vs{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kt extends vs{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Jc(n,e,t){const r=new Map;ie(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,Ay(a,l,t[i]))}return r}function Xc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,by(s,a,e))}return r}class ba extends vs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xy extends vs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Dy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Py(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Cr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Cr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Xh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=id(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&qn(this.mutations,e.mutations,(t,r)=>Yc(t,r))&&qn(this.baseMutations,e.baseMutations,(t,r)=>Yc(t,r))}}class Aa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ie(e.mutations.length===r.length);let i=function(){return vy}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Aa(e,t,r,i)}}/**
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
 */class Ny{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Vy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ye,Z;function Oy(n){switch(n){default:return $();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function od(n){if(n===void 0)return Tt("GRPC error has no .code"),k.UNKNOWN;switch(n){case ye.OK:return k.OK;case ye.CANCELLED:return k.CANCELLED;case ye.UNKNOWN:return k.UNKNOWN;case ye.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ye.INTERNAL:return k.INTERNAL;case ye.UNAVAILABLE:return k.UNAVAILABLE;case ye.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ye.NOT_FOUND:return k.NOT_FOUND;case ye.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ye.ABORTED:return k.ABORTED;case ye.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ye.DATA_LOSS:return k.DATA_LOSS;default:return $()}}(Z=ye||(ye={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function My(){return new TextEncoder}/**
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
 */const Ly=new cn([4294967295,4294967295],0);function Zc(n){const e=My().encode(n),t=new kh;return t.update(e),new Uint8Array(t.digest())}function eu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cn([t,r],0),new cn([i,s],0)]}class Ra{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ir(`Invalid padding: ${t}`);if(r<0)throw new Ir(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ir(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ir(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=cn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(cn.fromNumber(r)));return i.compare(Ly)===1&&(i=new cn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Zc(e),[r,i]=eu(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Ra(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Zc(e),[r,i]=eu(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Es{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Qr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Es(K.min(),i,new pe(ne),bt(),J())}}class Qr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Qr(r,t,J(),J(),J())}}/**
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
 */class Ui{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class ad{constructor(e,t){this.targetId=e,this.me=t}}class ld{constructor(e,t,r=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class tu{constructor(){this.fe=0,this.ge=ru(),this.pe=Re.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=J(),t=J(),r=J();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:$()}}),new Qr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=ru()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ie(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Uy{constructor(e){this.Le=e,this.Be=new Map,this.ke=bt(),this.qe=nu(),this.Qe=new pe(ne)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:$()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(jo(s))if(r===0){const a=new B(s.path);this.Ue(t,a,Me.newNoDocument(a,K.min()))}else ie(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=_n(r).toUint8Array()}catch(u){if(u instanceof Fh)return gn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ra(a,i,s)}catch(u){return gn(u instanceof Ir?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&jo(l.target)){const u=new B(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Me.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=J();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Es(e,t,this.Qe,this.ke,r);return this.ke=bt(),this.qe=nu(),this.Qe=new pe(ne),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new tu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Pe(ne),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new tu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function nu(){return new pe(B.comparator)}function ru(){return new pe(B.comparator)}const Fy={asc:"ASCENDING",desc:"DESCENDING"},By={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jy={and:"AND",or:"OR"};class zy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qo(n,e){return n.useProto3Json||ps(e)?e:{value:e}}function ns(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qy(n,e){return ns(n,e.toTimestamp())}function st(n){return ie(!!n),K.fromTimestamp(function(t){const r=qt(t);return new we(r.seconds,r.nanos)}(n))}function Sa(n,e){return $o(n,e).canonicalString()}function $o(n,e){const t=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ud(n){const e=ue.fromString(n);return ie(md(e)),e}function Wo(n,e){return Sa(n.databaseId,e.path)}function mo(n,e){const t=ud(e);if(t.get(1)!==n.databaseId.projectId)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(dd(t))}function hd(n,e){return Sa(n.databaseId,e)}function $y(n){const e=ud(n);return e.length===4?ue.emptyPath():dd(e)}function Ko(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dd(n){return ie(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function iu(n,e,t){return{name:Wo(n,e),fields:t.value.mapValue.fields}}function Wy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ie(f===void 0||typeof f=="string"),Re.fromBase64String(f||"")):(ie(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Re.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?k.UNKNOWN:od(h.code);return new L(f,h.message||"")}(a);t=new ld(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mo(n,r.document.name),s=st(r.document.updateTime),a=r.document.createTime?st(r.document.createTime):K.min(),l=new ze({mapValue:{fields:r.document.fields}}),u=Me.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Ui(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mo(n,r.document),s=r.readTime?st(r.readTime):K.min(),a=Me.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Ui([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mo(n,r.document),s=r.removedTargetIds||[];t=new Ui([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Vy(i,s),l=r.targetId;t=new ad(l,a)}}return t}function Ky(n,e){let t;if(e instanceof Gr)t={update:iu(n,e.key,e.value)};else if(e instanceof ba)t={delete:Wo(n,e.key)};else if(e instanceof Kt)t={update:iu(n,e.key,e.data),updateMask:tv(e.fieldMask)};else{if(!(e instanceof xy))return $();t={verify:Wo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Lr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ur)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Fr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ts)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw $()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:qy(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$()}(n,e.precondition)),t}function Hy(n,e){return n&&n.length>0?(ie(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?st(i.updateTime):st(s);return a.isEqual(K.min())&&(a=st(s)),new Cy(a,i.transformResults||[])}(t,e))):[]}function Gy(n,e){return{documents:[hd(n,e.path)]}}function Qy(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=hd(n,i);const s=function(h){if(h.length!==0)return pd(Je.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:xn(m.field),direction:Xy(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=qo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Yy(n){let e=$y(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ie(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(y){const m=fd(y);return m instanceof Je&&qh(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(m=>function(C){return new Mr(Dn(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(y){let m;return m=typeof y=="object"?y.value:y,ps(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(y){const m=!!y.before,I=y.values||[];return new Zi(I,m)}(t.startAt));let h=null;return t.endAt&&(h=function(y){const m=!y.before,I=y.values||[];return new Zi(I,m)}(t.endAt)),py(e,i,a,s,l,"F",u,h)}function Jy(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Dn(t.unaryFilter.field);return Ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Dn(t.unaryFilter.field);return Ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Dn(t.unaryFilter.field);return Ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dn(t.unaryFilter.field);return Ee.create(a,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(t){return Ee.create(Dn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Je.create(t.compositeFilter.filters.map(r=>fd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $()}}(t.compositeFilter.op))}(n):$()}function Xy(n){return Fy[n]}function Zy(n){return By[n]}function ev(n){return jy[n]}function xn(n){return{fieldPath:n.canonicalString()}}function Dn(n){return Ae.fromServerFormat(n.fieldPath)}function pd(n){return n instanceof Ee?function(t){if(t.op==="=="){if($c(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NAN"}};if(qc(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($c(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NOT_NAN"}};if(qc(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xn(t.field),op:Zy(t.op),value:t.value}}}(n):n instanceof Je?function(t){const r=t.getFilters().map(i=>pd(i));return r.length===1?r[0]:{compositeFilter:{op:ev(t.op),filters:r}}}(n):$()}function tv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function md(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Lt{constructor(e,t,r,i,s=K.min(),a=K.min(),l=Re.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nv{constructor(e){this.ct=e}}function rv(n){const e=Yy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?es(e,e.limit,"L"):e}/**
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
 */class iv{constructor(){this.un=new sv}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(zt.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class sv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Pe(ue.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pe(ue.comparator)).toArray()}}/**
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
 */class Hn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Hn(0)}static kn(){return new Hn(-1)}}/**
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
 */class ov{constructor(){this.changes=new er(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class av{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class lv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Cr(r.mutation,i,We.empty(),we.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,t,r=J()){const i=an();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=wr();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=an();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,J()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=bt();const a=Sr(),l=function(){return Sr()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Kt)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Cr(f.mutation,h,f.mutation.getFieldMask(),we.now())):a.set(h.key,We.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var y;return l.set(h,new av(f,(y=a.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Sr();let i=new pe((a,l)=>a-l),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||We.empty();f=l.applyToLocalView(h,f),r.set(u,f);const y=(i.get(l.batchId)||J()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,y=Xh();f.forEach(m=>{if(!s.has(m)){const I=id(t.get(m),r.get(m));I!==null&&y.set(m,I),s=s.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,y))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(an());let l=-1,u=s;return a.next(h=>D.forEach(h,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,J())).next(f=>({batchId:l,changes:Jh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let i=wr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=wr();return this.indexManager.getCollectionParents(e,s).next(l=>D.forEach(l,u=>{const h=function(y,m){return new Zn(m,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((y,m)=>{a=a.insert(y,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Me.newInvalidDocument(f)))});let l=wr();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Cr(f.mutation,h,We.empty(),we.now()),_s(t,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class cv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:st(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:rv(i.bundledQuery),readTime:st(i.readTime)}}(t)),D.resolve()}}/**
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
 */class uv{constructor(){this.overlays=new pe(B.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=an();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=an(),s=t.length+1,a=new B(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new pe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=an(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=an(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return D.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ny(t,r));let s=this.Ir.get(t);s===void 0&&(s=J(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class hv{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class Ca{constructor(){this.Tr=new Pe(be.Er),this.dr=new Pe(be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new be(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new be(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new B(new ue([])),r=new be(t,e),i=new be(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new ue([])),r=new be(t,e),i=new be(t,e+1);let s=J();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new be(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||ne(e.wr,t.wr)}static Ar(e,t){return ne(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
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
 */class dv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Pe(be.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Dy(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new be(t,0),i=new be(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pe(ne);return t.forEach(i=>{const s=new be(i,0),a=new be(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const a=new be(new B(s),0);let l=new Pe(ne);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),D.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ie(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,i=>{const s=new be(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new be(t,0),i=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class fv{constructor(e){this.Mr=e,this.docs=function(){return new pe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let r=bt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Me.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=bt();const a=t.path,l=new B(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Q_(G_(f),r)<=0||(i.has(f.key)||_s(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){$()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new pv(this)}getSize(e){return D.resolve(this.size)}}class pv extends ov{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class mv{constructor(e){this.persistence=e,this.Nr=new er(t=>wa(t),Ia),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ca,this.targetCount=0,this.kr=Hn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Hn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
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
 */class gv{constructor(e,t){this.qr={},this.overlays={},this.Qr=new _a(0),this.Kr=!1,this.Kr=!0,this.$r=new hv,this.referenceDelegate=e(this),this.Ur=new mv(this),this.indexManager=new iv,this.remoteDocumentCache=function(i){return new fv(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new nv(t),this.Gr=new cv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new dv(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const i=new _v(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class _v extends J_{constructor(e){super(),this.currentSequenceNumber=e}}class Pa{constructor(e){this.persistence=e,this.Jr=new Ca,this.Yr=null}static Zr(e){return new Pa(e)}get Xr(){if(this.Yr)return this.Yr;throw $()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=B.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,K.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class ka{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=J(),i=J();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ka(e,t.fromCache,r,i)}}/**
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
 */class yv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class vv{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return op()?8:X_(Le())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new yv;return this.Xi(e,t,a).next(l=>{if(s.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(_r()<=X.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(_r()<=X.DEBUG&&F("QueryEngine","Query:",kn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(_r()<=X.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,it(t))):D.resolve())}Yi(e,t){if(Gc(t))return D.resolve(null);let r=it(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=es(t,null,"F"),r=it(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=J(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(t,l);return this.ns(t,h,a,u.readTime)?this.Yi(e,es(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,i){return Gc(t)||i.isEqual(K.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(t,s);return this.ns(t,a,r,i)?D.resolve(null):(_r()<=X.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),kn(t)),this.rs(e,a,t,H_(i,-1)).next(l=>l))})}ts(e,t){let r=new Pe(Qh(e));return t.forEach((i,s)=>{_s(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return _r()<=X.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",kn(t)),this.Ji.getDocumentsMatchingQuery(e,t,zt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class Ev{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new pe(ne),this._s=new er(s=>wa(s),Ia),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lv(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function wv(n,e,t,r){return new Ev(n,e,t,r)}async function gd(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=J();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function Iv(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const y=h.batch,m=y.keys();let I=D.resolve();return m.forEach(C=>{I=I.next(()=>f.getEntry(u,C)).next(x=>{const P=h.docVersions.get(C);ie(P!==null),x.version.compareTo(P)<0&&(y.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=J();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function _d(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Tv(n,e){const t=H(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,y)=>{const m=i.get(y);if(!m)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,y)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?I=I.withResumeToken(Re.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(y,I),function(x,P,N){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,I,f)&&l.push(t.Ur.updateTargetData(s,I))});let u=bt(),h=J();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(bv(s,a,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(K.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(y=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return D.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.os=i,s))}function bv(n,e,t){let r=J(),i=J();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=bt();return t.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):F("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function Av(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Rv(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Lt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Ho(n,e,t){const r=H(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Hr(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function su(n,e,t){const r=H(n);let i=K.min(),s=J();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const y=H(u),m=y._s.get(f);return m!==void 0?D.resolve(y.os.get(m)):y.Ur.getTargetData(h,f)}(r,a,it(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:K.min(),t?s:J())).next(l=>(Sv(r,gy(e),l),{documents:l,Ts:s})))}function Sv(n,e,t){let r=n.us.get(e)||K.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class ou{constructor(){this.activeTargetIds=Iy()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cv{constructor(){this.so=new ou,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ou,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Pv{_o(e){}shutdown(){}}/**
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
 */class au{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ri=null;function go(){return Ri===null?Ri=function(){return 268435456+Math.round(2147483648*Math.random())}():Ri++,"0x"+Ri.toString(16)}/**
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
 */const kv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class xv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ve="WebChannelConnection";class Dv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){const l=go(),u=this.xo(t,r.toUriEncodedString());F("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(t,u,h,i).then(f=>(F("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw gn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,a,l){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){const i=kv[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=go();return new Promise((a,l)=>{const u=new xh;u.setWithCredentials(!0),u.listenOnce(Dh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Oi.NO_ERROR:const f=u.getResponseJson();F(Ve,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Oi.TIMEOUT:F(Ve,`RPC '${e}' ${s} timed out`),l(new L(k.DEADLINE_EXCEEDED,"Request time out"));break;case Oi.HTTP_ERROR:const y=u.getStatus();if(F(Ve,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const C=function(P){const N=P.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(N)>=0?N:k.UNKNOWN}(I.status);l(new L(C,I.message))}else l(new L(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new L(k.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{F(Ve,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);F(Ve,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}Bo(e,t,r){const i=go(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Oh(),l=Vh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");F(Ve,`Creating RPC '${e}' stream ${i}: ${f}`,u);const y=a.createWebChannel(f,u);let m=!1,I=!1;const C=new xv({Io:P=>{I?F(Ve,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(F(Ve,`Opening RPC '${e}' stream ${i} transport.`),y.open(),m=!0),F(Ve,`RPC '${e}' stream ${i} sending:`,P),y.send(P))},To:()=>y.close()}),x=(P,N,M)=>{P.listen(N,U=>{try{M(U)}catch(Y){setTimeout(()=>{throw Y},0)}})};return x(y,Er.EventType.OPEN,()=>{I||(F(Ve,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),x(y,Er.EventType.CLOSE,()=>{I||(I=!0,F(Ve,`RPC '${e}' stream ${i} transport closed`),C.So())}),x(y,Er.EventType.ERROR,P=>{I||(I=!0,gn(Ve,`RPC '${e}' stream ${i} transport errored:`,P),C.So(new L(k.UNAVAILABLE,"The operation could not be completed")))}),x(y,Er.EventType.MESSAGE,P=>{var N;if(!I){const M=P.data[0];ie(!!M);const U=M,Y=U.error||((N=U[0])===null||N===void 0?void 0:N.error);if(Y){F(Ve,`RPC '${e}' stream ${i} received error:`,Y);const q=Y.status;let Q=function(g){const E=ye[g];if(E!==void 0)return od(E)}(q),b=Y.message;Q===void 0&&(Q=k.INTERNAL,b="Unknown error status: "+q+" with message "+Y.message),I=!0,C.So(new L(Q,b)),y.close()}else F(Ve,`RPC '${e}' stream ${i} received:`,M),C.bo(M)}}),x(l,Nh.STAT_EVENT,P=>{P.stat===Lo.PROXY?F(Ve,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Lo.NOPROXY&&F(Ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function _o(){return typeof document<"u"?document:null}/**
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
 */function ws(n){return new zy(n,!0)}/**
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
 */class yd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class vd{constructor(e,t,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new yd(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Tt(t.toString()),Tt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new L(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nv extends vd{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Wy(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?st(a.readTime):K.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ko(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=jo(u)?{documents:Gy(s,u)}:{query:Qy(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=cd(s,a.resumeToken);const h=qo(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=ns(s,a.snapshotVersion.toTimestamp());const h=qo(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Jy(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ko(this.serializer),t.removeTarget=e,this.a_(t)}}class Vv extends vd{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ie(!!e.streamToken),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Hy(e.writeResults,e.commitTime),r=st(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ko(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ky(this.serializer,r))};this.a_(t)}}/**
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
 */class Ov extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,$o(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(k.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,$o(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(k.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Mv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Tt(t),this.D_=!1):F("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Lv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{In(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=H(u);h.L_.add(4),await Yr(h),h.q_.set("Unknown"),h.L_.delete(4),await Is(h)}(this))})}),this.q_=new Mv(r,i)}}async function Is(n){if(In(n))for(const e of n.B_)await e(!0)}async function Yr(n){for(const e of n.B_)await e(!1)}function Ed(n,e){const t=H(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Va(t)?Na(t):tr(t).r_()&&Da(t,e))}function xa(n,e){const t=H(n),r=tr(t);t.N_.delete(e),r.r_()&&wd(t,e),t.N_.size===0&&(r.r_()?r.o_():In(t)&&t.q_.set("Unknown"))}function Da(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}tr(n).A_(e)}function wd(n,e){n.Q_.xe(e),tr(n).R_(e)}function Na(n){n.Q_=new Uy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),tr(n).start(),n.q_.v_()}function Va(n){return In(n)&&!tr(n).n_()&&n.N_.size>0}function In(n){return H(n).L_.size===0}function Id(n){n.Q_=void 0}async function Uv(n){n.q_.set("Online")}async function Fv(n){n.N_.forEach((e,t)=>{Da(n,e)})}async function Bv(n,e){Id(n),Va(n)?(n.q_.M_(e),Na(n)):n.q_.set("Unknown")}async function jv(n,e,t){if(n.q_.set("Online"),e instanceof ld&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rs(n,r)}else if(e instanceof Ui?n.Q_.Ke(e):e instanceof ad?n.Q_.He(e):n.Q_.We(e),!t.isEqual(K.min()))try{const r=await _d(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Re.EMPTY_BYTE_STRING,f.snapshotVersion)),wd(s,u);const y=new Lt(f.target,u,h,f.sequenceNumber);Da(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await rs(n,r)}}async function rs(n,e,t){if(!Hr(e))throw e;n.L_.add(1),await Yr(n),n.q_.set("Offline"),t||(t=()=>_d(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Is(n)})}function Td(n,e){return e().catch(t=>rs(n,t,e))}async function Ts(n){const e=H(n),t=$t(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;zv(e);)try{const i=await Av(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,qv(e,i)}catch(i){await rs(e,i)}bd(e)&&Ad(e)}function zv(n){return In(n)&&n.O_.length<10}function qv(n,e){n.O_.push(e);const t=$t(n);t.r_()&&t.V_&&t.m_(e.mutations)}function bd(n){return In(n)&&!$t(n).n_()&&n.O_.length>0}function Ad(n){$t(n).start()}async function $v(n){$t(n).p_()}async function Wv(n){const e=$t(n);for(const t of n.O_)e.m_(t.mutations)}async function Kv(n,e,t){const r=n.O_.shift(),i=Aa.from(r,e,t);await Td(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ts(n)}async function Hv(n,e){e&&$t(n).V_&&await async function(r,i){if(function(a){return Oy(a)&&a!==k.ABORTED}(i.code)){const s=r.O_.shift();$t(r).s_(),await Td(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ts(r)}}(n,e),bd(n)&&Ad(n)}async function lu(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=In(t);t.L_.add(3),await Yr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Is(t)}async function Gv(n,e){const t=H(n);e?(t.L_.delete(2),await Is(t)):e||(t.L_.add(2),await Yr(t),t.q_.set("Unknown"))}function tr(n){return n.K_||(n.K_=function(t,r,i){const s=H(t);return s.w_(),new Nv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Uv.bind(null,n),Ro:Fv.bind(null,n),mo:Bv.bind(null,n),d_:jv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Va(n)?Na(n):n.q_.set("Unknown")):(await n.K_.stop(),Id(n))})),n.K_}function $t(n){return n.U_||(n.U_=function(t,r,i){const s=H(t);return s.w_(),new Vv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:$v.bind(null,n),mo:Hv.bind(null,n),f_:Wv.bind(null,n),g_:Kv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ts(n)):(await n.U_.stop(),n.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Oa{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new Oa(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ma(n,e){if(Tt("AsyncQueue",`${e}: ${n}`),Hr(n))return new L(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Fn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=wr(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new Fn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Fn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class cu{constructor(){this.W_=new pe(B.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):$():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Gn{constructor(e,t,r,i,s,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Gn(e,t,Fn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Qv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Yv{constructor(){this.queries=uu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=H(t),s=i.queries;i.queries=uu(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new L(k.ABORTED,"Firestore shutting down"))}}function uu(){return new er(n=>Gh(n),gs)}async function La(n,e){const t=H(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Qv,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Ma(a,`Initialization of query '${kn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Fa(t)}async function Ua(n,e){const t=H(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Jv(n,e){const t=H(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Fa(t)}function Xv(n,e,t){const r=H(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Fa(n){n.Y_.forEach(e=>{e.next()})}var Go,hu;(hu=Go||(Go={})).ea="default",hu.Cache="cache";class Ba{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Gn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Go.Cache}}/**
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
 */class Rd{constructor(e){this.key=e}}class Sd{constructor(e){this.key=e}}class Zv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=J(),this.mutatedKeys=J(),this.Aa=Qh(e),this.Ra=new Fn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new cu,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{const m=i.get(f),I=_s(this.query,y)?y:null,C=!!m&&this.mutatedKeys.has(m.key),x=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;m&&I?m.data.isEqual(I.data)?C!==x&&(r.track({type:3,doc:I}),P=!0):this.ga(m,I)||(r.track({type:2,doc:I}),P=!0,(u&&this.Aa(I,u)>0||h&&this.Aa(I,h)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),P=!0):m&&!I&&(r.track({type:1,doc:m}),P=!0,(u||h)&&(l=!0)),P&&(I?(a=a.add(I),s=x?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,y)=>function(I,C){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return x(I)-x(C)}(f.type,y.type)||this.Aa(f.doc,y.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new Gn(this.query,e.Ra,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new cu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=J(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Sd(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Rd(r))}),t}ba(e){this.Ta=e.Ts,this.da=J();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Gn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class eE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class tE{constructor(e){this.key=e,this.va=!1}}class nE{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new er(l=>Gh(l),gs),this.Ma=new Map,this.xa=new Set,this.Oa=new pe(B.comparator),this.Na=new Map,this.La=new Ca,this.Ba={},this.ka=new Map,this.qa=Hn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function rE(n,e,t=!0){const r=Nd(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Cd(r,e,t,!0),i}async function iE(n,e){const t=Nd(n);await Cd(t,e,!0,!1)}async function Cd(n,e,t,r){const i=await Rv(n.localStore,it(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await sE(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ed(n.remoteStore,i),l}async function sE(n,e,t,r,i){n.Ka=(y,m,I)=>async function(x,P,N,M){let U=P.view.ma(N);U.ns&&(U=await su(x.localStore,P.query,!1).then(({documents:b})=>P.view.ma(b,U)));const Y=M&&M.targetChanges.get(P.targetId),q=M&&M.targetMismatches.get(P.targetId)!=null,Q=P.view.applyChanges(U,x.isPrimaryClient,Y,q);return fu(x,P.targetId,Q.wa),Q.snapshot}(n,y,m,I);const s=await su(n.localStore,e,!0),a=new Zv(e,s.Ts),l=a.ma(s.documents),u=Qr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,u);fu(n,t,h.wa);const f=new eE(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function oE(n,e,t){const r=H(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!gs(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ho(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&xa(r.remoteStore,i.targetId),Qo(r,i.targetId)}).catch(Kr)):(Qo(r,i.targetId),await Ho(r.localStore,i.targetId,!0))}async function aE(n,e){const t=H(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xa(t.remoteStore,r.targetId))}async function lE(n,e,t){const r=mE(n);try{const i=await function(a,l){const u=H(a),h=we.now(),f=l.reduce((I,C)=>I.add(C.key),J());let y,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=bt(),x=J();return u.cs.getEntries(I,f).next(P=>{C=P,C.forEach((N,M)=>{M.isValidDocument()||(x=x.add(N))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,C)).next(P=>{y=P;const N=[];for(const M of l){const U=ky(M,y.get(M.key).overlayedDocument);U!=null&&N.push(new Kt(M.key,U,Bh(U.value.mapValue),He.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,N,l)}).next(P=>{m=P;const N=P.applyToLocalDocumentSet(y,x);return u.documentOverlayCache.saveOverlays(I,P.batchId,N)})}).then(()=>({batchId:m.batchId,changes:Jh(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new pe(ne)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,t),await Jr(r,i.changes),await Ts(r.remoteStore)}catch(i){const s=Ma(i,"Failed to persist write");t.reject(s)}}async function Pd(n,e){const t=H(n);try{const r=await Tv(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?ie(a.va):i.removedDocuments.size>0&&(ie(a.va),a.va=!1))}),await Jr(t,r,e)}catch(r){await Kr(r)}}function du(n,e,t){const r=H(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=H(a);u.onlineState=l;let h=!1;u.queries.forEach((f,y)=>{for(const m of y.j_)m.Z_(l)&&(h=!0)}),h&&Fa(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cE(n,e,t){const r=H(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new pe(B.comparator);a=a.insert(s,Me.newNoDocument(s,K.min()));const l=J().add(s),u=new Es(K.min(),new Map,new pe(ne),a,l);await Pd(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),ja(r)}else await Ho(r.localStore,e,!1).then(()=>Qo(r,e,t)).catch(Kr)}async function uE(n,e){const t=H(n),r=e.batch.batchId;try{const i=await Iv(t.localStore,e);xd(t,r,null),kd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Jr(t,i)}catch(i){await Kr(i)}}async function hE(n,e,t){const r=H(n);try{const i=await function(a,l){const u=H(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(y=>(ie(y!==null),f=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);xd(r,e,t),kd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Jr(r,i)}catch(i){await Kr(i)}}function kd(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function xd(n,e,t){const r=H(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Qo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Dd(n,r)})}function Dd(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(xa(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ja(n))}function fu(n,e,t){for(const r of t)r instanceof Rd?(n.La.addReference(r.key,e),dE(n,r)):r instanceof Sd?(F("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Dd(n,r.key)):$()}function dE(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(F("SyncEngine","New document in limbo: "+t),n.xa.add(r),ja(n))}function ja(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new B(ue.fromString(e)),r=n.qa.next();n.Na.set(r,new tE(t)),n.Oa=n.Oa.insert(t,r),Ed(n.remoteStore,new Lt(it(ms(t.path)),r,"TargetPurposeLimboResolution",_a.oe))}}async function Jr(n,e,t){const r=H(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const y=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){i.push(h);const y=ka.Wi(u.targetId,h);s.push(y)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=H(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>D.forEach(h,m=>D.forEach(m.$i,I=>f.persistence.referenceDelegate.addReference(y,m.targetId,I)).next(()=>D.forEach(m.Ui,I=>f.persistence.referenceDelegate.removeReference(y,m.targetId,I)))))}catch(y){if(!Hr(y))throw y;F("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const m=y.targetId;if(!y.fromCache){const I=f.os.get(m),C=I.snapshotVersion,x=I.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(m,x)}}}(r.localStore,s))}async function fE(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await gd(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new L(k.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jr(t,r.hs)}}function pE(n,e){const t=H(n),r=t.Na.get(e);if(r&&r.va)return J().add(r.key);{let i=J();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function Nd(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cE.bind(null,e),e.Ca.d_=Jv.bind(null,e.eventManager),e.Ca.$a=Xv.bind(null,e.eventManager),e}function mE(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hE.bind(null,e),e}class is{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ws(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return wv(this.persistence,new vv,e.initialUser,this.serializer)}Ga(e){return new gv(Pa.Zr,this.serializer)}Wa(e){return new Cv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}is.provider={build:()=>new is};class Yo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>du(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fE.bind(null,this.syncEngine),await Gv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Yv}()}createDatastore(e){const t=ws(e.databaseInfo.databaseId),r=function(s){return new Dv(s)}(e.databaseInfo);return function(s,a,l,u){return new Ov(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new Lv(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>du(this.syncEngine,t,0),function(){return au.D()?new au:new Pv}())}createSyncEngine(e,t){return function(i,s,a,l,u,h,f){const y=new nE(i,s,a,l,u,h);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=H(i);F("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Yr(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Yo.provider={build:()=>new Yo};/**
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
 */class za{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Tt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class gE{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=ga.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ma(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yo(n,e){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function pu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _E(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>lu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>lu(e.remoteStore,i)),n._onlineComponents=e}async function _E(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await yo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;gn("Error using user provided cache. Falling back to memory cache: "+t),await yo(n,new is)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await yo(n,new is);return n._offlineComponents}async function Vd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await pu(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await pu(n,new Yo))),n._onlineComponents}function yE(n){return Vd(n).then(e=>e.syncEngine)}async function ss(n){const e=await Vd(n),t=e.eventManager;return t.onListen=rE.bind(null,e.syncEngine),t.onUnlisten=oE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=iE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=aE.bind(null,e.syncEngine),t}function vE(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new za({next:m=>{f.Za(),a.enqueueAndForget(()=>Ua(s,y));const I=m.docs.has(l);!I&&m.fromCache?h.reject(new L(k.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?h.reject(new L(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),y=new Ba(ms(l.path),f,{includeMetadataChanges:!0,_a:!0});return La(s,y)}(await ss(n),n.asyncQueue,e,t,r)),r.promise}function EE(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new za({next:m=>{f.Za(),a.enqueueAndForget(()=>Ua(s,y)),m.fromCache&&u.source==="server"?h.reject(new L(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),y=new Ba(l,f,{includeMetadataChanges:!0,_a:!0});return La(s,y)}(await ss(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Od(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const mu=new Map;/**
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
 */function Md(n,e,t){if(!t)throw new L(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ld(n,e,t,r){if(e===!0&&r===!0)throw new L(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gu(n){if(!B.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _u(n){if(B.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$()}function Be(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bs(n);throw new L(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function wE(n,e){if(e<=0)throw new L(k.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class yu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ld("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Od((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class As{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Lh;switch(r.type){case"firstParty":return new z_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=mu.get(t);r&&(F("ComponentProvider","Removing Datastore"),mu.delete(t),r.terminate())}(this),Promise.resolve()}}function Ud(n,e,t,r={}){var i;const s=(n=Be(n,As))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&gn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Oe.MOCK_USER;else{l=Zf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new L(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Oe(h)}n._authCredentials=new F_(new Mh(l,u))}}/**
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
 */class lt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lt(this.firestore,e,this._query)}}class ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}}class Et extends lt{constructor(e,t,r){super(e,t,ms(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new B(e))}withConverter(e){return new Et(this.firestore,e,this._path)}}function Qe(n,e,...t){if(n=Ie(n),Md("collection","path",e),n instanceof As){const r=ue.fromString(e,...t);return _u(r),new Et(n,null,r)}{if(!(n instanceof ke||n instanceof Et))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return _u(r),new Et(n.firestore,null,r)}}function Ke(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=ga.newId()),Md("doc","path",e),n instanceof As){const r=ue.fromString(e,...t);return gu(r),new ke(n,null,new B(r))}{if(!(n instanceof ke||n instanceof Et))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return gu(r),new ke(n.firestore,n instanceof Et?n.converter:null,new B(r))}}/**
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
 */class vu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new yd(this,"async_queue_retry"),this.Vu=()=>{const r=_o();r&&F("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=_o();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=_o();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new vt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Hr(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Oa.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&$()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Eu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class at extends As{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new vu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vu(e),this._firestoreClient=void 0,await e}}}function Fd(n,e){const t=typeof n=="object"?n:Hu(),r=typeof n=="string"?n:"(default)",i=sa(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Jf("firestore");s&&Ud(i,...s)}return i}function Xr(n){if(n._terminated)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||IE(n),n._firestoreClient}function IE(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,h,f){return new ty(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Od(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new gE(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(Re.fromBase64String(e))}catch(t){throw new L(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Zr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ei{constructor(e){this._methodName=e}}/**
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
 */class Rs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */class Ss{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const TE=/^__.*__$/;class bE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gr(e,this.data,t,this.fieldTransforms)}}class Bd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function jd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class qa{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new qa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return os(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(jd(this.Cu)&&TE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class AE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ws(e)}Qu(e,t,r,i=!1){return new qa({Cu:e,methodName:t,qu:r,path:Ae.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cs(n){const e=n._freezeSettings(),t=ws(n._databaseId);return new AE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zd(n,e,t,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);Wa("Data must be an object, but it was:",a,r);const l=qd(r,a);let u,h;if(s.merge)u=new We(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const y of s.mergeFields){const m=Jo(e,y,t);if(!a.contains(m))throw new L(k.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Wd(f,m)||f.push(m)}u=new We(f),h=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=a.fieldTransforms;return new bE(new ze(l),u,h)}class Ps extends ei{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ps}}class $a extends ei{_toFieldTransform(e){return new Ry(e.path,new Lr)}isEqual(e){return e instanceof $a}}function RE(n,e,t,r){const i=n.Qu(1,e,t);Wa("Data must be an object, but it was:",i,r);const s=[],a=ze.empty();wn(r,(u,h)=>{const f=Ka(e,u,t);h=Ie(h);const y=i.Nu(f);if(h instanceof Ps)s.push(f);else{const m=ti(h,y);m!=null&&(s.push(f),a.set(f,m))}});const l=new We(s);return new Bd(a,l,i.fieldTransforms)}function SE(n,e,t,r,i,s){const a=n.Qu(1,e,t),l=[Jo(e,r,t)],u=[i];if(s.length%2!=0)throw new L(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Jo(e,s[m])),u.push(s[m+1]);const h=[],f=ze.empty();for(let m=l.length-1;m>=0;--m)if(!Wd(h,l[m])){const I=l[m];let C=u[m];C=Ie(C);const x=a.Nu(I);if(C instanceof Ps)h.push(I);else{const P=ti(C,x);P!=null&&(h.push(I),f.set(I,P))}}const y=new We(h);return new Bd(f,y,a.fieldTransforms)}function CE(n,e,t,r=!1){return ti(t,n.Qu(r?4:3,e))}function ti(n,e){if($d(n=Ie(n)))return Wa("Unsupported field value:",e,n),qd(n,e);if(n instanceof ei)return function(r,i){if(!jd(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=ti(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ty(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=we.fromDate(r);return{timestampValue:ns(i.serializer,s)}}if(r instanceof we){const s=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ns(i.serializer,s)}}if(r instanceof Rs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vn)return{bytesValue:cd(i.serializer,r._byteString)};if(r instanceof ke){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sa(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ss)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ta(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${bs(r)}`)}(n,e)}function qd(n,e){const t={};return Uh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wn(n,(r,i)=>{const s=ti(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function $d(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof we||n instanceof Rs||n instanceof vn||n instanceof ke||n instanceof ei||n instanceof Ss)}function Wa(n,e,t){if(!$d(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=bs(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Jo(n,e,t){if((e=Ie(e))instanceof Zr)return e._internalPath;if(typeof e=="string")return Ka(n,e);throw os("Field path arguments must be of type string or ",n,!1,void 0,t)}const PE=new RegExp("[~\\*/\\[\\]]");function Ka(n,e,t){if(e.search(PE)>=0)throw os(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zr(...e.split("."))._internalPath}catch{throw os(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function os(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new L(k.INVALID_ARGUMENT,l+n+u)}function Wd(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Kd{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ks("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class kE extends Kd{data(){return super.data()}}function ks(n,e){return typeof e=="string"?Ka(n,e):e instanceof Zr?e._internalPath:e._delegate._internalPath}/**
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
 */function Hd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ha{}class xs extends Ha{}function dt(n,e,...t){let r=[];e instanceof Ha&&r.push(e),r=r.concat(t),function(s){const a=s.filter(u=>u instanceof Ds).length,l=s.filter(u=>u instanceof ni).length;if(a>1||a>0&&l>0)throw new L(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ni extends xs{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ni(e,t,r)}_apply(e){const t=this._parse(e);return Yd(e._query,t),new lt(e.firestore,e.converter,zo(e._query,t))}_parse(e){const t=Cs(e.firestore);return function(s,a,l,u,h,f,y){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Iu(y,f);const I=[];for(const C of y)I.push(wu(u,s,C));m={arrayValue:{values:I}}}else m=wu(u,s,y)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Iu(y,f),m=CE(l,a,y,f==="in"||f==="not-in");return Ee.create(h,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ht(n,e,t){const r=e,i=ks("where",n);return ni._create(i,r,t)}class Ds extends Ha{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ds(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Je.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)Yd(a,u),a=zo(a,u)}(e._query,t),new lt(e.firestore,e.converter,zo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ns extends xs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ns(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new L(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mr(s,a)}(e._query,this._field,this._direction);return new lt(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new Zn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Gd(n,e="asc"){const t=e,r=ks("orderBy",n);return Ns._create(r,t)}class Vs extends xs{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Vs(e,t,r)}_apply(e){return new lt(e.firestore,e.converter,es(e._query,this._limit,this._limitType))}}function Qd(n){return wE("limit",n),Vs._create("limit",n,"F")}function wu(n,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new L(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hh(e)&&t.indexOf("/")!==-1)throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ue.fromString(t));if(!B.isDocumentKey(r))throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zc(n,new B(r))}if(t instanceof ke)return zc(n,t._key);throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bs(t)}.`)}function Iu(n,e){if(!Array.isArray(n)||n.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Yd(n,e){const t=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Jd{convertValue(e,t="none"){switch(yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_n(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return wn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ge(a.doubleValue));return new Ss(s)}convertGeoPoint(e){return new Rs(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=va(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Vr(e));default:return null}}convertTimestamp(e){const t=qt(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ue.fromString(e);ie(md(r));const i=new $n(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(t)||Tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Xd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Vn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ga extends Kd{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Pr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ks("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Pr extends Ga{data(e={}){return super.data(e)}}class Qa{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Vn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Pr(this._firestore,this._userDataWriter,r.key,r,new Vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new Pr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Vn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Pr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Vn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:xE(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function xE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
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
 */function Fi(n){n=Be(n,ke);const e=Be(n.firestore,at);return vE(Xr(e),n._key).then(t=>ef(e,n,t))}class Ya extends Jd{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}function sn(n){n=Be(n,lt);const e=Be(n.firestore,at),t=Xr(e),r=new Ya(e);return Hd(n._query),EE(t,n._query).then(i=>new Qa(e,r,n,i))}function un(n,e,t){n=Be(n,ke);const r=Be(n.firestore,at),i=Xd(n.converter,e,t);return ri(r,[zd(Cs(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,He.none())])}function Zd(n,e,t,...r){n=Be(n,ke);const i=Be(n.firestore,at),s=Cs(i);let a;return a=typeof(e=Ie(e))=="string"||e instanceof Zr?SE(s,"updateDoc",n._key,e,t,r):RE(s,"updateDoc",n._key,e),ri(i,[a.toMutation(n._key,He.exists(!0))])}function DE(n){return ri(Be(n.firestore,at),[new ba(n._key,He.none())])}function Ja(n,e){const t=Be(n.firestore,at),r=Ke(n),i=Xd(n.converter,e);return ri(t,[zd(Cs(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,He.exists(!1))]).then(()=>r)}function Os(n,...e){var t,r,i;n=Ie(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Eu(e[a])||(s=e[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Eu(e[a])){const y=e[a];e[a]=(t=y.next)===null||t===void 0?void 0:t.bind(y),e[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[a+2]=(i=y.complete)===null||i===void 0?void 0:i.bind(y)}let u,h,f;if(n instanceof ke)h=Be(n.firestore,at),f=ms(n._key.path),u={next:y=>{e[a]&&e[a](ef(h,n,y))},error:e[a+1],complete:e[a+2]};else{const y=Be(n,lt);h=Be(y.firestore,at),f=y._query;const m=new Ya(h);u={next:I=>{e[a]&&e[a](new Qa(h,m,y,I))},error:e[a+1],complete:e[a+2]},Hd(n._query)}return function(m,I,C,x){const P=new za(x),N=new Ba(I,P,C);return m.asyncQueue.enqueueAndForget(async()=>La(await ss(m),N)),()=>{P.Za(),m.asyncQueue.enqueueAndForget(async()=>Ua(await ss(m),N))}}(Xr(h),f,l,u)}function ri(n,e){return function(r,i){const s=new vt;return r.asyncQueue.enqueueAndForget(async()=>lE(await yE(r),i,s)),s.promise}(Xr(n),e)}function ef(n,e,t){const r=t.docs.get(e._key),i=new Ya(n);return new Ga(n,i,e._key,r,new Vn(t.hasPendingWrites,t.fromCache),e.converter)}function jt(){return new $a("serverTimestamp")}(function(e,t=!0){(function(i){Xn=i})(Yn),jn(new dn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new at(new B_(r.getProvider("auth-internal")),new $_(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $n(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Bt(Lc,"4.7.3",e),Bt(Lc,"4.7.3","esm2017")})();const NE=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Jd,Bytes:vn,CollectionReference:Et,DocumentReference:ke,DocumentSnapshot:Ga,FieldPath:Zr,FieldValue:ei,Firestore:at,FirestoreError:L,GeoPoint:Rs,Query:lt,QueryCompositeFilterConstraint:Ds,QueryConstraint:xs,QueryDocumentSnapshot:Pr,QueryFieldFilterConstraint:ni,QueryLimitConstraint:Vs,QueryOrderByConstraint:Ns,QuerySnapshot:Qa,SnapshotMetadata:Vn,Timestamp:we,VectorValue:Ss,_AutoId:ga,_ByteString:Re,_DatabaseId:$n,_DocumentKey:B,_EmptyAuthCredentialsProvider:Lh,_FieldPath:Ae,_cast:Be,_logWarn:gn,_validateIsNotUsedTogether:Ld,addDoc:Ja,collection:Qe,connectFirestoreEmulator:Ud,deleteDoc:DE,doc:Ke,ensureFirestoreConfigured:Xr,executeWrite:ri,getDoc:Fi,getDocs:sn,getFirestore:Fd,limit:Qd,onSnapshot:Os,orderBy:Gd,query:dt,serverTimestamp:jt,setDoc:un,updateDoc:Zd,where:ht},Symbol.toStringTag,{value:"Module"})),VE={apiKey:"AIzaSyCBSLz3aL1hx57bOoJzHa09k4yl9fw8SFI",authDomain:"vortex-messenger-4ea97.firebaseapp.com",projectId:"vortex-messenger-4ea97",storageBucket:"vortex-messenger-4ea97.firebasestorage.app",messagingSenderId:"294669525739",appId:"1:294669525739:web:fe8fc3472c649f348654ae"},tf=Ku(VE),On=L_(tf),de=Fd(tf);class OE{async createUser(e){const{uid:t,email:r,displayName:i,username:s}=e;await un(Ke(de,"users",t),{uid:t,email:r,displayName:i,username:s,createdAt:new Date,updatedAt:new Date}),s&&await un(Ke(de,"usernames",s),{username:s,uid:t,email:r})}async isUsernameAvailable(e){const t=dt(Qe(de,"usernames"),ht("username","==",e));return(await sn(t)).empty}async findUser(e){const t=e.trim();if(t.startsWith("@")){const s=t.substring(1).toLowerCase(),a=dt(Qe(de,"usernames"),ht("username","==",s)),l=await sn(a);if(!l.empty){const u=l.docs[0].data(),h=await Fi(Ke(de,"users",u.uid));return h.exists()?h.data():null}return null}if(t.includes("@")){const s=dt(Qe(de,"users"),ht("email","==",t)),a=await sn(s);return a.empty?null:a.docs[0].data()}const r=dt(Qe(de,"usernames"),ht("username","==",t.toLowerCase())),i=await sn(r);if(!i.empty){const s=i.docs[0].data(),a=await Fi(Ke(de,"users",s.uid));return a.exists()?a.data():null}return null}async searchUsers(e,t=10){const r=e.toLowerCase(),i=dt(Qe(de,"users"),ht("username",">=",r),ht("username","<=",r+""),Qd(t));return(await sn(i)).docs.map(a=>a.data())}async getUserProfile(e){const t=await Fi(Ke(de,"users",e));return t.exists()?t.data():null}async updateProfile(e,t){await un(Ke(de,"users",e),{...t,updatedAt:new Date},{merge:!0})}}const Qn=new OE;class ME{constructor(){this.currentUser=null,this.listeners=[],Oo(On,e=>{this.currentUser=e,this.listeners.forEach(t=>t(e))})}onAuthChange(e){return this.listeners.push(e),this.currentUser!==void 0&&e(this.currentUser),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}async login(e,t){await wg(On,e,t)}async register(e,t,r,i=""){const s=await Eg(On,e,t);await Tg(s.user,{displayName:r}),await Qn.createUser({uid:s.user.uid,email:e,displayName:r,username:i})}async logout(){await Rg(On)}getCurrentUser(){return this.currentUser}}const hn=new ME;function LE(){const[n,e]=G("login"),[t,r]=G(""),[i,s]=G(""),[a,l]=G(""),[u,h]=G(""),[f,y]=G(""),[m,I]=G(!1),[C,x]=G(""),[P,N]=G(!1),M=async q=>{const Q=q.toLowerCase().replace(/[^a-z0-9_]/g,"");if(h(Q),Q.length<3){y("Минимум 3 символа");return}I(!0);try{const b=await Qn.isUsernameAvailable(Q);y(b?"✅ Свободен":"❌ Занят")}catch{y("")}finally{I(!1)}},U=async q=>{q.preventDefault(),x(""),N(!0);try{if(n==="login")await hn.login(t,i);else{if(a.length<2)throw new Error("Имя должно быть минимум 2 символа");if(u.length<3)throw new Error("Username минимум 3 символа");if(i.length<6)throw new Error("Пароль минимум 6 символов");await hn.register(t,i,a,u)}}catch(Q){x(Q.message||"Ошибка")}finally{N(!1)}},Y=q=>{q.key==="Enter"&&U(q)};return _("div",{style:re.wrapper,children:_("div",{style:re.card,children:[_("div",{style:re.logoSection,children:[_("div",{style:re.logoIcon,children:"🌪️"}),_("h1",{style:re.logoTitle,children:"Vortex"}),_("p",{style:re.logoSubtitle,children:"В центре общения"})]}),_("div",{style:re.tabs,children:[_("button",{onClick:()=>{e("login"),x("")},style:{...re.tab,background:n==="login"?"var(--bg-active)":"transparent",color:n==="login"?"var(--text-primary)":"var(--text-secondary)"},children:"Вход"}),_("button",{onClick:()=>{e("register"),x("")},style:{...re.tab,background:n==="register"?"var(--bg-active)":"transparent",color:n==="register"?"var(--text-primary)":"var(--text-secondary)"},children:"Регистрация"})]}),_("form",{onSubmit:U,style:re.form,children:[n==="register"&&_(tt,{children:[_("div",{style:re.fieldGroup,children:[_("label",{style:re.label,children:"Имя"}),_("input",{type:"text",value:a,onInput:q=>l(q.target.value),placeholder:"Ваше имя",style:re.input,required:!0})]}),_("div",{style:re.fieldGroup,children:[_("label",{style:re.label,children:"Username"}),_("div",{style:re.usernameWrapper,children:[_("span",{style:re.usernamePrefix,children:"@"}),_("input",{type:"text",value:u,onInput:q=>M(q.target.value),placeholder:"username",style:{...re.input,paddingLeft:"2rem"},required:!0})]}),u.length>=3&&_("div",{style:{...re.statusText,color:f.includes("✅")?"var(--vortex-secondary)":f.includes("❌")?"var(--vortex-danger)":"var(--text-tertiary)"},children:m?"Проверка...":f})]})]}),_("div",{style:re.fieldGroup,children:[_("label",{style:re.label,children:"Email"}),_("input",{type:"email",value:t,onInput:q=>r(q.target.value),placeholder:"user@example.com",onKeyDown:Y,style:re.input,required:!0})]}),_("div",{style:re.fieldGroup,children:[_("label",{style:re.label,children:"Пароль"}),_("input",{type:"password",value:i,onInput:q=>s(q.target.value),placeholder:"••••••••",onKeyDown:Y,style:re.input,required:!0})]}),C&&_("div",{style:re.error,children:["⚠️ ",C]}),_("button",{type:"submit",disabled:P||n==="register"&&f.includes("❌"),style:{...re.submitBtn,opacity:P?.7:1},children:P?"Загрузка...":n==="login"?"Войти":"Зарегистрироваться"})]}),_("div",{style:re.switchText,children:n==="login"?_(tt,{children:["Нет аккаунта?"," ",_("span",{onClick:()=>e("register"),style:re.switchLink,children:"Зарегистрироваться"})]}):_(tt,{children:["Уже есть аккаунт?"," ",_("span",{onClick:()=>e("login"),style:re.switchLink,children:"Войти"})]})})]})})}const re={wrapper:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",background:"var(--bg-primary)"},card:{background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"20px",padding:"2.5rem",width:"420px",maxWidth:"90vw",boxShadow:"0 20px 60px rgba(0,0,0,0.4)"},logoSection:{textAlign:"center",marginBottom:"2rem"},logoIcon:{fontSize:"3rem"},logoTitle:{background:"var(--gradient-brand)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"2rem",fontWeight:800,margin:"0.5rem 0 0 0"},logoSubtitle:{color:"var(--text-secondary)",fontSize:"0.9rem",marginTop:"0.25rem"},tabs:{display:"flex",background:"rgba(255,255,255,0.03)",borderRadius:"14px",padding:"4px",marginBottom:"1.5rem"},tab:{flex:1,padding:"0.75rem",border:"none",borderRadius:"10px",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",transition:"all 0.2s",fontFamily:"inherit"},form:{display:"flex",flexDirection:"column",gap:"0.25rem"},fieldGroup:{marginBottom:"0.75rem"},label:{display:"block",fontSize:"0.8rem",fontWeight:500,color:"var(--text-secondary)",marginBottom:"0.35rem",textTransform:"uppercase",letterSpacing:"0.5px"},input:{width:"100%",padding:"0.75rem 1rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-default)",borderRadius:"12px",color:"var(--text-primary)",fontSize:"0.95rem",outline:"none",transition:"border-color 0.2s",fontFamily:"inherit"},usernameWrapper:{position:"relative"},usernamePrefix:{position:"absolute",left:"0.75rem",top:"50%",transform:"translateY(-50%)",color:"var(--text-tertiary)",fontWeight:600,fontSize:"0.95rem",pointerEvents:"none"},statusText:{fontSize:"0.75rem",marginTop:"0.25rem",paddingLeft:"0.25rem"},error:{padding:"0.75rem 1rem",background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:"10px",color:"#FCA5A5",fontSize:"0.85rem"},submitBtn:{width:"100%",padding:"0.85rem",background:"var(--gradient-brand)",color:"white",border:"none",borderRadius:"12px",fontSize:"1rem",fontWeight:600,cursor:"pointer",marginTop:"0.5rem",fontFamily:"inherit"},switchText:{textAlign:"center",marginTop:"1.25rem",fontSize:"0.85rem",color:"var(--text-secondary)"},switchLink:{color:"var(--vortex-primary-light)",cursor:"pointer",fontWeight:500}},UE="modulepreload",FE=function(n){return"/Vortex/"+n},Tu={},BE=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=FE(u),u in Tu)return;Tu[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":UE,h||(y.as="script"),y.crossOrigin="",y.href=u,l&&y.setAttribute("nonce",l),document.head.appendChild(y),h)return new Promise((m,I)=>{y.addEventListener("load",m),y.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};class jE{subscribeToMessages(e,t){const r=dt(Qe(de,"chats",e,"messages"),Gd("createdAt","asc"));return Os(r,i=>{const s=[];i.forEach(a=>{s.push({id:a.id,...a.data()})}),t(s)})}async sendMessage(e,t,r,i=null){const s={senderId:t.uid,senderName:t.displayName||t.email,createdAt:jt(),type:i?i.type:"text",text:r||""};i&&(s.fileData=i.fileData,s.fileName=i.fileName),await Ja(Qe(de,"chats",e,"messages"),s);const a=i?i.type==="image"?"📷 Фото":i.type==="voice"?"🎙️ Голосовое":"📎 Файл":r;await un(Ke(de,"chats",e),{lastMessage:a,lastMessageTime:jt()},{merge:!0})}async editMessage(e,t,r){await Zd(Ke(de,"chats",e,"messages",t),{text:r,isEdited:!0,editedAt:jt()})}async deleteMessage(e,t){const{doc:r,deleteDoc:i,getDocs:s,query:a,collection:l,orderBy:u,limit:h,setDoc:f,serverTimestamp:y}=await BE(async()=>{const{doc:C,deleteDoc:x,getDocs:P,query:N,collection:M,orderBy:U,limit:Y,setDoc:q,serverTimestamp:Q}=await Promise.resolve().then(()=>NE);return{doc:C,deleteDoc:x,getDocs:P,query:N,collection:M,orderBy:U,limit:Y,setDoc:q,serverTimestamp:Q}},void 0);await i(r(de,"chats",e,"messages",t));const m=a(l(de,"chats",e,"messages"),u("createdAt","desc"),h(1)),I=await s(m);if(I.empty)await f(r(de,"chats",e),{lastMessage:"Нет сообщений",lastMessageTime:y()},{merge:!0});else{const C=I.docs[0].data(),x=C.type==="image"?"📷 Фото":C.type==="voice"?"🎙️ Голосовое":C.text||"";await f(r(de,"chats",e),{lastMessage:x,lastMessageTime:C.createdAt},{merge:!0})}}}const as=new jE;class zE{subscribeToChats(e,t){const r=dt(Qe(de,"chats"),ht("participants","array-contains",e));return Os(r,i=>{const s=[];i.forEach(a=>{s.push({id:a.id,...a.data()})}),s.sort((a,l)=>{var f,y,m,I;const u=((y=(f=a.lastMessageTime)==null?void 0:f.toDate)==null?void 0:y.call(f))||0;return(((I=(m=l.lastMessageTime)==null?void 0:m.toDate)==null?void 0:I.call(m))||0)-u}),t(s)})}async createChat(e,t){const r=dt(Qe(de,"chats"),ht("participants","array-contains",e.uid)),s=(await sn(r)).docs.find(u=>{const h=u.data();return h.participants.includes(t.uid)&&h.participants.length===2});if(s)return s.id;const a={participants:[e.uid,t.uid],participantEmails:[e.email,t.email],participantNames:[e.displayName||e.email,t.displayName||t.email],createdAt:jt(),lastMessage:"Чат создан",lastMessageTime:jt()};return(await Ja(Qe(de,"chats"),a)).id}async sendMessage(e,t,r,i=null){await as.sendMessage(e,r,t,i)}subscribeToMessages(e,t){return as.subscribeToMessages(e,t)}}const ln=new zE;class qE{constructor(){this.theme=localStorage.getItem("vortex-theme")||"dark",this.listeners=[],this.apply()}get(){return this.theme}toggle(){this.theme=this.theme==="dark"?"light":"dark",localStorage.setItem("vortex-theme",this.theme),this.apply(),this.listeners.forEach(e=>e(this.theme))}apply(){document.documentElement.setAttribute("data-theme",this.theme)}onChange(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}}const vo=new qE;function $E({user:n,onLogout:e,onProfile:t,onContacts:r,onTasks:i}){const[s,a]=G(!1),[l,u]=G(vo.get()),h=()=>{a(!s)},f=()=>{a(!1)},y=()=>{vo.toggle(),u(vo.get())},m=I=>{a(!1),I==null||I()};return _(tt,{children:[_("button",{onClick:h,style:{width:"40px",height:"40px",borderRadius:"50%",background:"transparent",border:"1px solid var(--border-subtle)",color:"var(--text-secondary)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",transition:"all 0.15s"},onMouseEnter:I=>{I.target.style.background="var(--bg-hover)",I.target.style.color="var(--text-primary)"},onMouseLeave:I=>{I.target.style.background="transparent",I.target.style.color="var(--text-secondary)"},children:_("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[_("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),_("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),_("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),s&&_("div",{onClick:f,style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.5)",zIndex:200,backdropFilter:"blur(2px)",animation:"fadeIn 0.2s ease"}}),_("div",{style:{position:"fixed",top:0,left:s?0:"-320px",bottom:0,width:"320px",background:"var(--bg-secondary)",zIndex:201,transition:"left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",borderRight:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column"},children:[_("div",{style:{padding:"20px",borderBottom:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_("h3",{style:{fontWeight:700,fontSize:"1.1rem"},children:"Меню"}),_("button",{onClick:f,style:{width:"36px",height:"36px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1.2rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),_("div",{style:{flex:1,overflowY:"auto",padding:"8px"},children:[_(Eo,{icon:"👤",title:"Профиль",subtitle:(n==null?void 0:n.email)||"email",onClick:()=>m(t)}),_(Eo,{icon:"👥",title:"Контакты",subtitle:"Поиск пользователей",onClick:()=>m(r)}),_(Eo,{icon:"📋",title:"Задачи",subtitle:"Список задач",onClick:()=>m(i)}),_("div",{style:{height:"1px",background:"var(--border-subtle)",margin:"8px 16px"}}),_("div",{onClick:y,style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s"},onMouseEnter:I=>I.target.style.background="var(--bg-hover)",onMouseLeave:I=>I.target.style.background="transparent",children:[_("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},children:l==="dark"?"🌙":"☀️"}),_("div",{children:[_("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:l==="dark"?"Тёмная тема":"Светлая тема"}),_("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:l==="dark"?"Включена":"Выключена"})]})]}),_("div",{style:{height:"1px",background:"var(--border-subtle)",margin:"8px 16px"}}),_("div",{onClick:()=>m(e),style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s",color:"var(--vortex-danger)"},onMouseEnter:I=>I.target.style.background="rgba(239,68,68,0.1)",onMouseLeave:I=>I.target.style.background="transparent",children:[_("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"rgba(239,68,68,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},children:"🚪"}),_("div",{children:_("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:"Выйти"})})]})]})]})]})}function Eo({icon:n,title:e,subtitle:t,onClick:r}){return _("div",{onClick:r,style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s"},onMouseEnter:i=>i.target.style.background="var(--bg-hover)",onMouseLeave:i=>i.target.style.background="transparent",children:[_("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},children:n}),_("div",{children:[_("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:e}),t&&_("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:t})]})]})}function WE({onPersonalChat:n,onGroupChat:e,onChannel:t}){const[r,i]=G(!1),s=on(null),a=on(null);pt(()=>{const h=f=>{s.current&&!s.current.contains(f.target)&&!a.current.contains(f.target)&&i(!1)};return document.addEventListener("click",h),()=>document.removeEventListener("click",h)},[]);const l=h=>{h.stopPropagation(),i(!r)},u=h=>{i(!1),h==null||h()};return _("div",{style:{position:"absolute",bottom:"20px",right:"20px",zIndex:30},children:[_("button",{ref:a,onClick:l,style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--gradient-brand)",border:"none",color:"white",fontSize:"1.8rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(124, 58, 237, 0.4)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transform:r?"rotate(45deg)":"rotate(0deg)",fontWeight:300,lineHeight:1},children:"+"}),r&&_("div",{ref:s,style:{position:"absolute",bottom:"70px",right:"0",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"var(--radius-lg)",boxShadow:"0 12px 40px rgba(0, 0, 0, 0.5)",padding:"8px",minWidth:"240px",animation:"menuPopup 0.2s cubic-bezier(0.4, 0, 0.2, 1)",transformOrigin:"bottom right"},children:[_("button",{onClick:()=>u(n),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",background:"transparent",border:"none",borderRadius:"var(--radius-md)",color:"var(--text-primary)",cursor:"pointer",fontSize:"0.9rem",textAlign:"left",transition:"background 0.15s"},onMouseEnter:h=>h.target.style.background="var(--bg-hover)",onMouseLeave:h=>h.target.style.background="transparent",children:[_("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:"var(--gradient-brand)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",flexShrink:0},children:_("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[_("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),_("circle",{cx:"12",cy:"7",r:"4"})]})}),_("div",{children:[_("div",{style:{fontWeight:600},children:"Личный чат"}),_("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:"Начать общение"})]})]}),_("button",{onClick:()=>u(e),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",background:"transparent",border:"none",borderRadius:"var(--radius-md)",color:"var(--text-primary)",cursor:"pointer",fontSize:"0.9rem",textAlign:"left",transition:"background 0.15s"},onMouseEnter:h=>h.target.style.background="var(--bg-hover)",onMouseLeave:h=>h.target.style.background="transparent",children:[_("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:"var(--gradient-success)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",flexShrink:0},children:_("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[_("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),_("circle",{cx:"9",cy:"7",r:"4"}),_("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),_("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),_("div",{children:[_("div",{style:{fontWeight:600},children:"Группа"}),_("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:"Создать группу"})]})]}),_("button",{onClick:()=>u(t),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",background:"transparent",border:"none",borderRadius:"var(--radius-md)",color:"var(--text-primary)",cursor:"pointer",fontSize:"0.9rem",textAlign:"left",transition:"background 0.15s"},onMouseEnter:h=>h.target.style.background="var(--bg-hover)",onMouseLeave:h=>h.target.style.background="transparent",children:[_("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:"linear-gradient(135deg, #F59E0B, #EF4444)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",flexShrink:0},children:_("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[_("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"}),_("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]})}),_("div",{children:[_("div",{style:{fontWeight:600},children:"Канал"}),_("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:"Создать канал (скоро)"})]})]})]})]})}function KE({user:n,onClose:e,onChatCreated:t}){const[r,i]=G(""),[s,a]=G(null),[l,u]=G(!1),[h,f]=G(""),[y,m]=G("search"),I=async()=>{if(!r.trim()){f("Введите email или @username");return}u(!0),f("");try{const N=await Qn.findUser(r);N?N.uid===(N==null?void 0:N.uid)?(f("Это ваш аккаунт"),a(null)):(a(N),m("result")):(f("Пользователь не найден"),a(null))}catch{f("Ошибка поиска")}finally{u(!1)}},C=async()=>{if(s){u(!0),m("creating");try{const N=await ln.createChat(n,s);t==null||t(N),e==null||e()}catch(N){f("Ошибка создания чата: "+N.message),m("result")}finally{u(!1)}}},x=N=>{N.key==="Enter"&&(y==="search"?I():y==="result"&&C()),N.key==="Escape"&&(e==null||e())},P=N=>{const M=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let U=0;for(let Y=0;Y<(N||"").length;Y++)U=N.charCodeAt(Y)+((U<<5)-U);return M[Math.abs(U)%M.length]};return _("div",{style:he.overlay,onClick:e,children:_("div",{style:he.modal,onClick:N=>N.stopPropagation(),children:[_("div",{style:he.header,children:[_("h3",{style:he.title,children:"Новый чат"}),_("button",{onClick:e,style:he.closeBtn,children:"✕"})]}),_("div",{style:he.body,children:[y==="search"&&_(tt,{children:[_("p",{style:he.hint,children:"Введите email или @username пользователя"}),_("div",{style:he.searchContainer,children:[_("input",{type:"text",value:r,onInput:N=>{i(N.target.value),f("")},onKeyDown:x,placeholder:"Email или @username",style:he.input,autoFocus:!0}),_("button",{onClick:I,disabled:l||!r.trim(),style:{...he.searchBtn,opacity:l||!r.trim()?.5:1},children:l?"...":"Найти"})]}),h&&_("p",{style:he.error,children:h})]}),y==="result"&&s&&_(tt,{children:[_("p",{style:he.hint,children:"Пользователь найден:"}),_("div",{style:he.userCard,children:[_("div",{style:{...he.userAvatar,background:P(s.displayName||s.email)},children:(s.displayName||s.email).charAt(0).toUpperCase()}),_("div",{style:he.userInfo,children:[_("div",{style:he.userName,children:s.displayName||"Без имени"}),_("div",{style:he.userEmail,children:s.email}),s.username&&_("div",{style:he.userUsername,children:["@",s.username]})]})]}),_("div",{style:he.actions,children:[_("button",{onClick:()=>m("search"),style:he.backBtn,children:"← Назад"}),_("button",{onClick:C,disabled:l,style:{...he.createBtn,opacity:l?.7:1},children:l?"Создание...":"Создать чат"})]}),h&&_("p",{style:he.error,children:h})]}),y==="creating"&&_("div",{style:he.creatingState,children:[_("div",{style:he.spinner,children:"⏳"}),_("p",{children:"Создаём чат..."})]})]})]})})}const he={overlay:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,animation:"fadeIn 0.2s ease"},modal:{background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"16px",width:"440px",maxWidth:"90vw",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",animation:"slideUp 0.25s ease",overflow:"hidden"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.25rem 1.5rem",borderBottom:"1px solid var(--border-subtle)"},title:{margin:0,fontSize:"1.1rem",fontWeight:700,color:"var(--text-primary)"},closeBtn:{width:"32px",height:"32px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},body:{padding:"1.5rem"},hint:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"1rem"},searchContainer:{display:"flex",gap:"0.5rem"},input:{flex:1,padding:"0.75rem 1rem",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-default)",borderRadius:"12px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none"},searchBtn:{padding:"0.75rem 1.25rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"white",fontWeight:600,cursor:"pointer",fontSize:"0.9rem"},error:{color:"var(--vortex-danger)",fontSize:"0.85rem",marginTop:"0.75rem",padding:"0.5rem 0.75rem",background:"rgba(239,68,68,0.1)",borderRadius:"8px"},userCard:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem",background:"rgba(255,255,255,0.03)",borderRadius:"12px",border:"1px solid var(--border-subtle)",marginBottom:"1rem"},userAvatar:{width:"56px",height:"56px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"1.3rem",flexShrink:0},userInfo:{flex:1},userName:{fontWeight:600,fontSize:"1rem"},userEmail:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:"2px"},userUsername:{fontSize:"0.8rem",color:"var(--vortex-primary-light)",marginTop:"2px"},actions:{display:"flex",gap:"0.75rem"},backBtn:{flex:1,padding:"0.75rem",background:"transparent",border:"1px solid var(--border-default)",borderRadius:"12px",color:"var(--text-secondary)",cursor:"pointer",fontSize:"0.9rem"},createBtn:{flex:2,padding:"0.75rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"white",fontWeight:600,cursor:"pointer",fontSize:"0.9rem"},creatingState:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},spinner:{fontSize:"2rem",marginBottom:"1rem"}};function HE({onClose:n}){const[e,t]=G(null),[r,i]=G(""),[s,a]=G(""),[l,u]=G(!1),[h,f]=G("");pt(()=>{y()},[]);const y=async()=>{const x=hn.getCurrentUser();if(!x)return;const P=await Qn.getUserProfile(x.uid);t(P),i((P==null?void 0:P.displayName)||""),a((P==null?void 0:P.bio)||"")},m=async()=>{u(!0),f("");try{await Qn.updateProfile(hn.getCurrentUser().uid,{displayName:r,bio:s}),f("✅ Профиль обновлён!"),setTimeout(()=>n==null?void 0:n(),1e3)}catch{f("❌ Ошибка сохранения")}finally{u(!1)}},I=x=>{const P=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let N=0;for(let M=0;M<(x||"").length;M++)N=x.charCodeAt(M)+((N<<5)-N);return P[Math.abs(N)%P.length]},C=hn.getCurrentUser();return _("div",{style:fe.overlay,onClick:n,children:_("div",{style:fe.modal,onClick:x=>x.stopPropagation(),children:[_("div",{style:fe.header,children:[_("h3",{style:fe.title,children:"👤 Профиль"}),_("button",{onClick:n,style:fe.closeBtn,children:"✕"})]}),_("div",{style:fe.body,children:[_("div",{style:fe.avatarSection,children:[_("div",{style:{...fe.avatar,background:I(r||(C==null?void 0:C.email))},children:(r||(C==null?void 0:C.email)||"?").charAt(0).toUpperCase()}),_("button",{style:fe.changeAvatarBtn,children:"📷 Изменить аватар"})]}),_("div",{style:fe.field,children:[_("label",{style:fe.label,children:"Имя"}),_("input",{type:"text",value:r,onInput:x=>i(x.target.value),style:fe.input,placeholder:"Ваше имя"})]}),_("div",{style:fe.field,children:[_("label",{style:fe.label,children:"Username"}),_("div",{style:fe.usernameDisplay,children:["@",(e==null?void 0:e.username)||"не задан"]})]}),_("div",{style:fe.field,children:[_("label",{style:fe.label,children:"Email"}),_("div",{style:fe.usernameDisplay,children:C==null?void 0:C.email})]}),_("div",{style:fe.field,children:[_("label",{style:fe.label,children:"Bio"}),_("textarea",{value:s,onInput:x=>a(x.target.value),style:fe.textarea,placeholder:"Расскажите о себе...",rows:3})]}),h&&_("div",{style:{...fe.message,background:h.includes("✅")?"rgba(6,214,160,0.1)":"rgba(239,68,68,0.1)",color:h.includes("✅")?"var(--vortex-secondary)":"var(--vortex-danger)"},children:h}),_("button",{onClick:m,disabled:l,style:{...fe.saveBtn,opacity:l?.7:1},children:l?"Сохранение...":"💾 Сохранить"})]})]})})}const fe={overlay:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,animation:"fadeIn 0.2s ease"},modal:{background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"20px",width:"440px",maxWidth:"90vw",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",animation:"slideUp 0.25s ease",overflow:"hidden"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.25rem 1.5rem",borderBottom:"1px solid var(--border-subtle)"},title:{margin:0,fontSize:"1.1rem",fontWeight:700},closeBtn:{width:"32px",height:"32px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},body:{padding:"1.5rem"},avatarSection:{textAlign:"center",marginBottom:"1.5rem"},avatar:{width:"80px",height:"80px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"2rem",margin:"0 auto"},changeAvatarBtn:{marginTop:"0.75rem",padding:"0.4rem 1rem",background:"transparent",border:"1px solid var(--border-default)",borderRadius:"8px",color:"var(--text-secondary)",cursor:"pointer",fontSize:"0.8rem"},field:{marginBottom:"1rem"},label:{display:"block",fontSize:"0.75rem",fontWeight:500,color:"var(--text-secondary)",marginBottom:"0.35rem",textTransform:"uppercase",letterSpacing:"0.5px"},input:{width:"100%",padding:"0.7rem 1rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-default)",borderRadius:"10px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none"},textarea:{width:"100%",padding:"0.7rem 1rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-default)",borderRadius:"10px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none",resize:"vertical",fontFamily:"inherit"},usernameDisplay:{padding:"0.7rem 1rem",background:"rgba(255,255,255,0.02)",border:"1px solid var(--border-subtle)",borderRadius:"10px",color:"var(--text-secondary)",fontSize:"0.9rem"},message:{padding:"0.6rem 1rem",borderRadius:"10px",fontSize:"0.85rem",marginBottom:"1rem"},saveBtn:{width:"100%",padding:"0.8rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"white",fontWeight:600,fontSize:"0.95rem",cursor:"pointer"}};function GE({user:n,activeChat:e,onSelectChat:t}){const[r,i]=G([]),[s,a]=G(""),[l,u]=G(!1),[h,f]=G(!1),[y,m]=G(""),[I,C]=G([]),[x,P]=G(!1),N=on(null);pt(()=>ln.subscribeToChats(n.uid,i),[n.uid]);const M=g=>{var A,w,je,Xe;const E=(A=g.participantEmails)==null?void 0:A.findIndex(nr=>nr!==n.email);return{name:((w=g.participantNames)==null?void 0:w[E])||((Xe=(je=g.participantEmails)==null?void 0:je[E])==null?void 0:Xe.split("@")[0])||"Чат"}},U=g=>{const E=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let T=0;for(let A=0;A<(g||"").length;A++)T=g.charCodeAt(A)+((T<<5)-T);return E[Math.abs(T)%E.length]},Y=g=>{if(!(g!=null&&g.toDate))return"";const E=g.toDate(),T=new Date,A=E.getHours().toString().padStart(2,"0"),w=E.getMinutes().toString().padStart(2,"0");return E.toDateString()===T.toDateString()?`${A}:${w}`:E.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"})},q=async()=>{await hn.logout()},Q=g=>{if(m(g),N.current&&clearTimeout(N.current),g.trim().length<2){C([]),P(!1);return}N.current=setTimeout(async()=>{try{const E=await Qn.searchUsers(g);C(E.filter(T=>T.uid!==n.uid)),P(!0)}catch{C([])}},300)},b=async g=>{try{const E=await ln.createChat(n,g);P(!1),m(""),t==null||t({id:E})}catch(E){console.error(E)}},v=r.filter(g=>{if(!y)return!0;const{name:E}=M(g);return E.toLowerCase().includes(y.toLowerCase())});return _("div",{style:oe.container,children:[_("div",{style:oe.header,children:[_($E,{user:n,onLogout:q,onProfile:()=>f(!0)}),_("h2",{style:oe.logo,children:"🌪️ Vortex"}),_("div",{style:{width:40}})]}),_("div",{style:oe.searchContainer,children:[_("div",{style:oe.searchWrapper,children:[_("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",style:oe.searchIcon,children:[_("circle",{cx:"11",cy:"11",r:"8"}),_("path",{d:"m21 21-4.35-4.35"})]}),_("input",{type:"text",value:y,onInput:g=>Q(g.target.value),placeholder:"Поиск...",style:oe.searchInput})]}),x&&I.length>0&&_("div",{style:oe.globalResults,children:[_("div",{style:oe.resultTitle,children:"Пользователи"}),I.map(g=>_("div",{onClick:()=>b(g),style:oe.resultItem,children:[_("div",{style:{...oe.resultAvatar,background:U(g.displayName||g.email)},children:(g.displayName||g.email).charAt(0).toUpperCase()}),_("div",{style:{flex:1},children:[_("div",{style:oe.resultName,children:g.displayName||"Без имени"}),_("div",{style:oe.resultEmail,children:["@",g.username||g.email.split("@")[0]]})]})]},g.uid))]}),y&&v.length>0&&_("div",{style:oe.globalResults,children:[_("div",{style:oe.resultTitle,children:"Чаты"}),v.map(g=>{const{name:E}=M(g);return _("div",{onClick:()=>{t(g),m(""),P(!1)},style:oe.resultItem,children:[_("div",{style:{...oe.resultAvatar,background:U(E)},children:E.charAt(0).toUpperCase()}),_("div",{style:{flex:1},children:[_("div",{style:oe.resultName,children:E}),_("div",{style:oe.resultEmail,children:g.lastMessage||""})]})]},g.id)})]}),x&&y&&I.length===0&&v.length===0&&_("div",{style:oe.noResults,children:"Ничего не найдено"})]}),_("div",{style:oe.chatList,children:r.length===0?_("div",{style:oe.empty,children:[_("div",{style:{fontSize:"3rem"},children:"💬"}),_("p",{children:"Нет чатов"}),_("p",{style:{fontSize:"0.75rem"},children:"+ создать чат"})]}):r.map(g=>{const{name:E}=M(g),T=U(E),A=(e==null?void 0:e.id)===g.id;return _("div",{onClick:()=>t(g),style:{...oe.chatItem,background:A?"var(--bg-active)":"transparent",border:A?"1px solid rgba(124,58,237,0.2)":"1px solid transparent"},children:[_("div",{style:{...oe.chatAvatar,background:T},children:E.charAt(0).toUpperCase()}),_("div",{style:oe.chatInfo,children:[_("div",{style:oe.chatName,children:E}),_("div",{style:oe.chatLast,children:g.lastMessage||"Нет сообщений"})]}),_("div",{style:oe.chatTime,children:Y(g.lastMessageTime)})]},g.id)})}),_(WE,{onPersonalChat:()=>u(!0),onGroupChat:()=>alert("Группы скоро!"),onChannel:()=>alert("Каналы скоро!")}),l&&_(KE,{user:n,onClose:()=>u(!1),onChatCreated:g=>{u(!1),t==null||t({id:g})}}),h&&_(HE,{onClose:()=>f(!1)})]})}const oe={container:{width:"100%",height:"100%",background:"var(--bg-secondary)",borderRight:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",position:"relative"},header:{padding:"0.75rem 1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},logo:{background:"var(--gradient-brand)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"1.1rem",fontWeight:700,margin:0},searchContainer:{padding:"0.25rem 0.75rem",position:"relative"},searchWrapper:{position:"relative",display:"flex",alignItems:"center"},searchIcon:{position:"absolute",left:"10px",color:"var(--text-tertiary)",pointerEvents:"none"},searchInput:{width:"100%",padding:"0.5rem 0.75rem 0.5rem 2rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",borderRadius:"10px",color:"var(--text-primary)",fontSize:"0.85rem",outline:"none"},globalResults:{background:"var(--bg-tertiary)",border:"1px solid var(--border-default)",borderRadius:"10px",marginTop:"4px",maxHeight:"260px",overflowY:"auto",boxShadow:"0 8px 24px rgba(0,0,0,0.3)",position:"absolute",left:"0.75rem",right:"0.75rem",zIndex:50},resultTitle:{padding:"0.4rem 0.75rem",fontSize:"0.65rem",fontWeight:600,color:"var(--text-tertiary)",textTransform:"uppercase",letterSpacing:"1px"},resultItem:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 0.75rem",cursor:"pointer",borderBottom:"1px solid var(--border-subtle)"},resultAvatar:{width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:"0.85rem",flexShrink:0},resultName:{fontWeight:600,fontSize:"0.85rem"},resultEmail:{fontSize:"0.75rem",color:"var(--text-secondary)"},noResults:{padding:"0.75rem",textAlign:"center",color:"var(--text-tertiary)",fontSize:"0.8rem",background:"var(--bg-tertiary)",borderRadius:"10px",marginTop:"4px"},chatList:{flex:1,overflowY:"auto",padding:"0.25rem 0.5rem"},chatItem:{display:"flex",alignItems:"center",padding:"0.55rem 0.6rem",borderRadius:"10px",cursor:"pointer",marginBottom:"1px",transition:"all 0.15s"},chatAvatar:{width:"44px",height:"44px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:"1rem",marginRight:"0.6rem",flexShrink:0},chatInfo:{flex:1,minWidth:0},chatName:{fontWeight:600,fontSize:"0.85rem",marginBottom:"1px"},chatLast:{fontSize:"0.75rem",color:"var(--text-secondary)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},chatTime:{fontSize:"0.7rem",color:"var(--text-tertiary)",marginLeft:"0.5rem",flexShrink:0},empty:{textAlign:"center",padding:"2rem",color:"var(--text-tertiary)"}};class QE{constructor(){this.unsubscribers={}}startTracking(){Oo(On,e=>{if(!e)return;const t=Ke(de,"users",e.uid),r=()=>{un(t,{isOnline:!0,lastSeen:jt()},{merge:!0})},i=()=>{un(t,{isOnline:!1,lastSeen:jt()},{merge:!0})};r();const s=setInterval(r,3e4);window.addEventListener("beforeunload",i);const a=Oo(On,l=>{l||(clearInterval(s),window.removeEventListener("beforeunload",i),i())});return()=>{clearInterval(s),window.removeEventListener("beforeunload",i),a()}})}watchUser(e,t){this.unsubscribers[e]&&this.unsubscribers[e]();const r=Ke(de,"users",e),i=Os(r,s=>{var a,l;if(s.exists()){const u=s.data();t({isOnline:u.isOnline||!1,lastSeen:((l=(a=u.lastSeen)==null?void 0:a.toDate)==null?void 0:l.call(a))||null})}else t({isOnline:!1,lastSeen:null})});return this.unsubscribers[e]=i,i}destroy(){Object.values(this.unsubscribers).forEach(e=>e()),this.unsubscribers={}}}const nf=new QE;class YE{constructor(){this.mediaRecorder=null,this.audioChunks=[],this.isRecording=!1,this.stream=null}async startRecording(){var e;try{if(!((e=navigator.mediaDevices)!=null&&e.getUserMedia))return{error:"unsupported",message:"Микрофон не поддерживается в этом браузере"};this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0}});let t="audio/webm";return MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?t="audio/webm;codecs=opus":MediaRecorder.isTypeSupported("audio/mp4")&&(t="audio/mp4"),this.mediaRecorder=new MediaRecorder(this.stream,{mimeType:t}),this.audioChunks=[],this.mediaRecorder.ondataavailable=r=>{r.data.size>0&&this.audioChunks.push(r.data)},this.mediaRecorder.onerror=()=>{this.isRecording=!1},this.mediaRecorder.start(100),this.isRecording=!0,!0}catch(t){return t.name==="NotAllowedError"||t.name==="PermissionDeniedError"?{error:"denied",message:"Доступ к микрофону запрещён. Разрешите в настройках браузера и попробуйте снова."}:t.name==="NotFoundError"?{error:"notfound",message:"Микрофон не найден. Подключите микрофон."}:{error:"unknown",message:"Ошибка доступа к микрофону: "+t.message}}}stopRecording(){return new Promise((e,t)=>{if(!this.mediaRecorder||!this.isRecording){t(new Error("Нет активной записи"));return}this.mediaRecorder.onstop=()=>{const r=new Blob(this.audioChunks,{type:this.mediaRecorder.mimeType||"audio/webm"});this.stream&&(this.stream.getTracks().forEach(s=>s.stop()),this.stream=null);const i=new FileReader;i.onloadend=()=>e(i.result),i.onerror=t,i.readAsDataURL(r)},this.mediaRecorder.stop(),this.isRecording=!1})}cancelRecording(){this.mediaRecorder&&this.isRecording&&(this.mediaRecorder.stop(),this.isRecording=!1,this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null))}}const wo=new YE;class JE{constructor(){this.apiKey=localStorage.getItem("vortex-openai-key")||"",this.endpoint="https://api.openai.com/v1/chat/completions"}setApiKey(e){this.apiKey=e,localStorage.setItem("vortex-openai-key",e)}hasApiKey(){return!!this.apiKey}async callAI(e,t=.7,r=200){var a,l,u;if(!this.apiKey)throw new Error("API ключ не настроен");const i=await fetch(this.endpoint,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:e,temperature:t,max_tokens:r})});if(!i.ok)throw new Error("Ошибка AI: "+i.status);return((u=(l=(a=(await i.json()).choices)==null?void 0:a[0])==null?void 0:l.message)==null?void 0:u.content)||""}async getSmartReplies(e){const t=e.slice(-5).map(i=>`${i.senderName||"User"}: ${i.text}`).join(`
`),r=await this.callAI([{role:"system",content:'Предложи 3 коротких варианта ответа на последнее сообщение. Отвечай строго в формате: ["ответ1", "ответ2", "ответ3"]. Не больше 80 символов каждый.'},{role:"user",content:`Контекст:
${t}

Предложи варианты ответа:`}],.8,150);try{return JSON.parse(r)}catch{return r.split(`
`).filter(i=>i.trim())}}async translate(e,t="ru"){const r=t==="ru"?"русский":"английский";return this.callAI([{role:"system",content:`Переведи текст на ${r} язык. Отвечай только переводом, без пояснений.`},{role:"user",content:e}],.3,500)}async summarize(e){const t=e.map(r=>`${r.senderName||"User"}: ${r.text}`).join(`
`);return this.callAI([{role:"system",content:"Сделай краткое саммари переписки в 2-3 предложениях."},{role:"user",content:t}],.5,200)}}const Io=new JE;function XE({chat:n,user:e,onBack:t,isMobile:r}){const[i,s]=G([]),[a,l]=G(!0),[u,h]=G(""),[f,y]=G(null),[m,I]=G({isOnline:!1,lastSeen:null}),[C,x]=G(null),[P,N]=G(!1),[M,U]=G(!1),[Y,q]=G(!1),Q=on(null),b=on(!0),v=on(null),g=on(null);pt(()=>{if(!n){s([]),l(!1);return}s([]),l(!0),h(""),y(null),I({isOnline:!1,lastSeen:null});const V=ln.subscribeToMessages(n.id,j=>{s(j),l(!1)});return()=>{V==null||V(),s([])}},[n==null?void 0:n.id]);const E=()=>{const V=v.current;if(!V)return;const j=V.scrollHeight-V.scrollTop-V.clientHeight<60;b.current=j};pt(()=>{b.current&&Q.current&&!a&&Q.current.scrollIntoView({behavior:"auto"})},[i,a]),pt(()=>{var j;if(!n)return;const V=(j=n.participants)==null?void 0:j.find(ee=>ee!==e.uid);if(V)return nf.watchUser(V,I)},[n==null?void 0:n.id,e.uid]),pt(()=>{const V=()=>x(null);return document.addEventListener("click",V),()=>document.removeEventListener("click",V)},[]);const T=async V=>{V==null||V.preventDefault();const j=f?f.text:u;!j.trim()||!n||(f?(await as.editMessage(n.id,f.id,j),y(null)):await ln.sendMessage(n.id,j,e),h(""))},A=async V=>{var se;const j=(se=V.target.files)==null?void 0:se[0];if(!j||!n)return;const ee=new FileReader;ee.onload=async qe=>{await ln.sendMessage(n.id,"",e,{type:j.type.startsWith("image/")?"image":"file",fileData:qe.target.result,fileName:j.name})},ee.readAsDataURL(j),V.target.value=""},w=async V=>{confirm("Удалить сообщение?")&&(await as.deleteMessage(n.id,V),x(null))},je=(V,j)=>{y({id:V,text:j}),h(j),x(null)},Xe=(V,j,ee,se)=>{V.preventDefault(),ee&&x({x:V.clientX,y:V.clientY,messageId:j,text:se})},nr=()=>{y(null),h("")},St=async()=>{const V=await wo.startRecording();V===!0?(N(!0),q(!1)):(V==null?void 0:V.error)==="denied"?q(!0):V!=null&&V.error&&alert(V.message)},Ht=async()=>{q(!1);const V=await wo.startRecording();V===!0?N(!0):(V==null?void 0:V.error)==="denied"&&q(!0)},Gt=async()=>{if(P){try{const V=await wo.stopRecording();V&&await ln.sendMessage(n.id,"",e,{type:"voice",fileData:V,fileName:"voice.webm"})}catch(V){console.error("Ошибка голосового:",V)}N(!1)}},ii=()=>U(!M),Ms=async()=>{try{const V=await Io.getSmartReplies(i);V.length>0&&h(V[0])}catch(V){alert("AI: "+V.message)}U(!1)},Ze=async()=>{const V=i[i.length-1];if(V)try{const j=await Io.translate(V.text);alert(j)}catch(j){alert("AI: "+j.message)}U(!1)},Te=async()=>{try{const V=await Io.summarize(i);alert(V)}catch(V){alert("AI: "+V.message)}U(!1)},Ls=()=>{var j,ee,se,qe;if(!n)return{name:"Чат"};const V=(j=n.participantEmails)==null?void 0:j.findIndex(Xt=>Xt!==e.email);return{name:((ee=n.participantNames)==null?void 0:ee[V])||((qe=(se=n.participantEmails)==null?void 0:se[V])==null?void 0:qe.split("@")[0])||"Чат"}},Qt=V=>{const j=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let ee=0;for(let se=0;se<(V||"").length;se++)ee=V.charCodeAt(se)+((ee<<5)-ee);return j[Math.abs(ee)%j.length]},Us=V=>{if(!(V!=null&&V.toDate))return"";const j=V.toDate();return`${j.getHours().toString().padStart(2,"0")}:${j.getMinutes().toString().padStart(2,"0")}`},Tn=V=>{if(!V)return"";const j=Math.floor((new Date-V)/1e3);return j<60?"только что":j<3600?`${Math.floor(j/60)} мин`:j<86400?`${Math.floor(j/3600)} ч`:V.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"})},Fs=V=>{const j=[];let ee="";return V.forEach(se=>{var An,rr;const qe=(rr=(An=se.createdAt)==null?void 0:An.toDate)==null?void 0:rr.call(An),Xt=(qe==null?void 0:qe.toLocaleDateString("ru-RU",{day:"2-digit",month:"long",year:"numeric"}))||"";Xt!==ee&&(ee=Xt,j.push({type:"date",date:Xt})),j.push({type:"message",data:se})}),j};if(!n)return _("div",{style:W.emptyContainer,children:_("div",{style:W.emptyContent,children:[_("div",{style:W.emptyLogo,children:"🌪️"}),_("h2",{style:W.emptyTitle,children:"Vortex"}),_("p",{style:W.emptyText,children:["Выберите чат или создайте новый,",_("br",{}),"чтобы начать общение"]})]})});const bn=Ls(),Yt=Qt(bn.name),Jt=Fs(i);return _("div",{style:W.container,children:[_("div",{style:W.header,children:_("div",{style:W.headerLeft,children:[r&&_("button",{onClick:t,style:W.backBtn,children:_("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:_("polyline",{points:"15 18 9 12 15 6"})})}),_("div",{style:{...W.headerAvatar,background:Yt},children:bn.name.charAt(0).toUpperCase()}),_("div",{style:W.headerInfo,children:[_("div",{style:W.headerName,children:bn.name}),_("div",{style:W.headerStatus,children:[_("span",{style:{...W.onlineDot,background:m.isOnline?"var(--vortex-secondary)":"var(--text-tertiary)"}}),m.isOnline?"В сети":m.lastSeen?`Был(а) ${Tn(m.lastSeen)}`:"Не в сети"]})]})]})}),_("div",{style:W.messagesContainer,ref:v,onScroll:E,children:[a?_("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-tertiary)"},children:"Загрузка сообщений..."}):Jt.length===0?_("div",{style:{textAlign:"center",padding:"3rem",color:"var(--text-tertiary)"},children:[_("div",{style:{fontSize:"3rem",marginBottom:"0.5rem"},children:"💬"}),_("p",{children:"Нет сообщений. Начните общение!"})]}):Jt.map((V,j)=>{if(V.type==="date")return _("div",{style:W.dateDivider,children:_("span",{style:W.dateText,children:V.date})},`d${j}`);const ee=V.data,se=ee.senderId===e.uid;return _("div",{style:{...W.msgWrapper,justifyContent:se?"flex-end":"flex-start"},onContextMenu:qe=>Xe(qe,ee.id,se,ee.text),children:[!se&&_("div",{style:{...W.msgAvatar,background:Yt,marginRight:6},children:bn.name.charAt(0).toUpperCase()}),_("div",{style:{...W.msgBubble,background:se?"var(--gradient-brand)":"var(--bg-tertiary)",borderBottomRightRadius:se?"4px":"16px",borderBottomLeftRadius:se?"16px":"4px",color:se?"#fff":"var(--text-primary)",maxWidth:r?"82%":"65%"},children:[ee.type==="image"?_("img",{src:ee.fileData,alt:"",style:W.msgImage}):ee.type==="voice"?_("audio",{controls:!0,src:ee.fileData,style:W.msgAudio}):_("div",{style:W.msgText,children:[ee.isEdited&&_("span",{style:W.edited,children:"(изм.) "}),ee.text]}),_("div",{style:W.msgMeta,children:[Us(ee.createdAt),se&&" ✓"]})]}),se&&_("div",{style:{width:28,marginLeft:6}})]},ee.id)}),_("div",{ref:Q})]}),C&&_("div",{style:{...W.ctxMenu,top:C.y,left:C.x},children:[_("button",{style:W.ctxItem,onClick:()=>je(C.messageId,C.text),children:"✏️ Редактировать"}),_("button",{style:{...W.ctxItem,color:"var(--vortex-danger)"},onClick:()=>w(C.messageId),children:"🗑️ Удалить"})]}),M&&_("div",{style:W.aiMenu,children:[_("button",{onClick:Ms,style:W.aiItem,children:"💡 Умный ответ"}),_("button",{onClick:Ze,style:W.aiItem,children:"🌍 Перевести"}),_("button",{onClick:Te,style:W.aiItem,children:"📊 Саммари"})]}),Y&&_("div",{style:W.micOverlay,onClick:()=>q(!1),children:_("div",{style:W.micPrompt,onClick:V=>V.stopPropagation(),children:[_("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🎙️"}),_("h3",{style:{marginBottom:"0.75rem"},children:"Микрофон запрещён"}),_("p",{style:{color:"var(--text-secondary)",marginBottom:"1rem",fontSize:"0.85rem",lineHeight:1.5},children:["Вы запретили доступ к микрофону.",_("br",{}),_("br",{}),_("strong",{children:"Как включить:"}),_("br",{}),"📱 ",_("strong",{children:"iPhone:"})," Настройки → Safari → Микрофон",_("br",{}),"📱 ",_("strong",{children:"Android:"})," Настройки → Приложения → Браузер → Разрешения",_("br",{}),"💻 ",_("strong",{children:"ПК:"})," 🔒 в адресной строке → Разрешить микрофон",_("br",{}),_("br",{}),"После включения нажмите кнопку ниже."]}),_("button",{onClick:Ht,style:W.micAllowBtn,children:"🔄 Попробовать снова"}),_("button",{onClick:()=>q(!1),style:{...W.micAllowBtn,background:"transparent",color:"var(--text-secondary)",marginTop:"0.5rem"},children:"Закрыть"})]})}),_("div",{style:W.inputContainer,children:[f&&_("div",{style:W.editBar,children:[_("span",{children:"✏️ Редактирование"}),_("button",{onClick:nr,style:W.cancelEditBtn,children:"✕"})]}),_("div",{style:W.inputWrapper,children:[_("button",{style:W.inputBtn,onClick:()=>{var V;return(V=g.current)==null?void 0:V.click()},children:"📎"}),_("input",{type:"file",ref:g,onChange:A,accept:"image/*",style:{display:"none"}}),_("button",{style:{...W.inputBtn,background:P?"var(--vortex-danger)":"transparent",color:P?"#fff":"var(--text-secondary)"},onMouseDown:St,onMouseUp:Gt,onMouseLeave:Gt,onTouchStart:St,onTouchEnd:Gt,children:"🎙️"}),_("input",{type:"text",value:u,onInput:V=>h(V.target.value),onKeyDown:V=>V.key==="Enter"&&T(),placeholder:"Сообщение",style:W.msgInput}),_("button",{style:W.inputBtn,onClick:ii,children:"🤖"}),_("button",{onClick:T,disabled:!u.trim(),style:{...W.sendBtn,opacity:u.trim()?1:.4},children:"➤"})]})]})]})}const W={container:{flex:1,display:"flex",flexDirection:"column",background:"var(--bg-primary)",height:"100%",position:"relative"},emptyContainer:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-primary)"},emptyContent:{textAlign:"center",color:"var(--text-tertiary)"},emptyLogo:{fontSize:"5rem",marginBottom:"1rem"},emptyTitle:{fontSize:"1.5rem",fontWeight:700,color:"var(--text-primary)",marginBottom:"0.5rem"},emptyText:{fontSize:"0.9rem",lineHeight:1.6},header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.6rem 1rem",borderBottom:"1px solid var(--border-subtle)",background:"rgba(10,10,20,0.9)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",zIndex:10},headerLeft:{display:"flex",alignItems:"center",gap:"0.6rem"},headerAvatar:{width:"38px",height:"38px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:"1rem",flexShrink:0},headerInfo:{display:"flex",flexDirection:"column"},headerName:{fontWeight:600,fontSize:"0.95rem"},headerStatus:{fontSize:"0.75rem",color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:"5px"},onlineDot:{width:"7px",height:"7px",borderRadius:"50%",display:"inline-block"},backBtn:{background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},messagesContainer:{flex:1,overflowY:"auto",padding:"0.6rem 0.8rem",display:"flex",flexDirection:"column",gap:"2px"},dateDivider:{textAlign:"center",padding:"0.8rem 0"},dateText:{background:"rgba(255,255,255,0.06)",color:"var(--text-tertiary)",padding:"3px 14px",borderRadius:"10px",fontSize:"0.7rem",fontWeight:500},msgWrapper:{display:"flex",alignItems:"flex-end",marginBottom:"2px"},msgAvatar:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:600,fontSize:"0.7rem",flexShrink:0},msgBubble:{padding:"0.5rem 0.75rem",borderRadius:"14px",animation:"messageIn 0.2s ease",boxShadow:"0 1px 2px rgba(0,0,0,0.1)"},msgText:{fontSize:"0.9rem",lineHeight:1.45,wordBreak:"break-word"},msgImage:{maxWidth:"260px",borderRadius:"10px"},msgAudio:{maxWidth:"240px",height:"30px"},edited:{fontSize:"0.7rem",opacity:.7,fontStyle:"italic"},msgMeta:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"4px",marginTop:"3px",fontSize:"0.65rem",opacity:.7},ctxMenu:{position:"fixed",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"12px",boxShadow:"0 8px 24px rgba(0,0,0,0.4)",zIndex:9999,minWidth:"160px",padding:"4px"},ctxItem:{display:"block",width:"100%",padding:"10px 14px",background:"transparent",border:"none",borderRadius:"8px",color:"var(--text-primary)",cursor:"pointer",textAlign:"left",fontSize:"0.85rem"},aiMenu:{position:"absolute",bottom:"70px",right:"16px",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"14px",boxShadow:"0 12px 40px rgba(0,0,0,0.5)",padding:"8px",zIndex:50,minWidth:"180px"},aiItem:{display:"block",width:"100%",padding:"10px 14px",background:"transparent",border:"none",borderRadius:"10px",color:"var(--text-primary)",cursor:"pointer",textAlign:"left",fontSize:"0.85rem"},micOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,backdropFilter:"blur(4px)"},micPrompt:{background:"var(--bg-secondary)",borderRadius:"20px",padding:"2rem",maxWidth:"380px",textAlign:"center",border:"1px solid var(--border-default)",boxShadow:"0 20px 60px rgba(0,0,0,0.5)",margin:"0 1rem"},micAllowBtn:{width:"100%",padding:"0.85rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"#fff",fontWeight:600,fontSize:"0.95rem",cursor:"pointer"},editBar:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.4rem 0.8rem",background:"rgba(124,58,237,0.1)",borderBottom:"1px solid var(--border-subtle)",fontSize:"0.75rem",color:"var(--vortex-primary-light)"},cancelEditBtn:{background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer"},inputContainer:{padding:"0.5rem 0.6rem",borderTop:"1px solid var(--border-subtle)",background:"rgba(10,10,20,0.9)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)"},inputWrapper:{display:"flex",alignItems:"center",gap:"6px"},inputBtn:{width:"36px",height:"36px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",flexShrink:0},msgInput:{flex:1,padding:"0.55rem 1rem",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-default)",borderRadius:"20px",color:"var(--text-primary)",fontSize:"16px",outline:"none",fontFamily:"inherit"},sendBtn:{width:"38px",height:"38px",borderRadius:"50%",background:"var(--gradient-brand)",border:"none",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",transition:"all 0.2s",flexShrink:0}};function ZE({user:n}){const[e,t]=G(null),[r,i]=G(window.innerWidth<=768),[s,a]=G(!1);return pt(()=>{const h=()=>{const f=window.innerWidth<=768;i(f),f||a(!1)};return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),_("div",{style:{display:"flex",height:"100%",background:"var(--bg-primary)",overflow:"hidden"},children:[_("div",{style:{width:r?"100%":"380px",minWidth:r?"100%":"380px",height:"100%",display:r&&s?"none":"flex",transform:r&&s?"translateX(-100%)":"translateX(0)",transition:r?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)":"none",position:r?"absolute":"relative",top:0,left:0,zIndex:r?10:1},children:_(GE,{user:n,activeChat:e,onSelectChat:h=>{t(h),r&&a(!0)}})}),_("div",{style:{flex:1,height:"100%",display:r&&!s?"none":"flex",flexDirection:"column",position:r?"absolute":"relative",top:0,left:0,right:0,bottom:0,zIndex:r?20:1,background:"var(--bg-primary)",transform:r&&s?"translateX(0)":"translateX(100%)",transition:r?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)":"none"},children:_(XE,{chat:e,user:n,onBack:()=>{a(!1)},isMobile:r})})]})}class ew{constructor(){this.keyPair=null}async generateKeys(){this.keyPair=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey"])}async exportPublicKey(){this.keyPair||await this.generateKeys();const e=await crypto.subtle.exportKey("raw",this.keyPair.publicKey);return btoa(String.fromCharCode(...new Uint8Array(e)))}async importPublicKey(e){const t=Uint8Array.from(atob(e),r=>r.charCodeAt(0));return crypto.subtle.importKey("raw",t,{name:"ECDH",namedCurve:"P-256"},!1,[])}async encrypt(e,t){this.keyPair||await this.generateKeys();const r=await this.importPublicKey(t),i=await crypto.subtle.deriveKey({name:"ECDH",public:r},this.keyPair.privateKey,{name:"AES-GCM",length:256},!1,["encrypt"]),s=crypto.getRandomValues(new Uint8Array(12)),a=new TextEncoder().encode(e),l=await crypto.subtle.encrypt({name:"AES-GCM",iv:s},i,a),u=new Uint8Array(s.length+l.byteLength);return u.set(s),u.set(new Uint8Array(l),s.length),btoa(String.fromCharCode(...u))}async decrypt(e,t){this.keyPair||await this.generateKeys();const r=await this.importPublicKey(t),i=await crypto.subtle.deriveKey({name:"ECDH",public:r},this.keyPair.privateKey,{name:"AES-GCM",length:256},!1,["decrypt"]),s=Uint8Array.from(atob(e),h=>h.charCodeAt(0)),a=s.slice(0,12),l=s.slice(12),u=await crypto.subtle.decrypt({name:"AES-GCM",iv:a},i,l);return new TextDecoder().decode(u)}async saveKeys(){const e=await this.exportPublicKey(),t=await crypto.subtle.exportKey("jwk",this.keyPair.privateKey);localStorage.setItem("vortex-keys",JSON.stringify({publicKey:e,privateKey:t}))}async loadKeys(){const e=localStorage.getItem("vortex-keys");if(!e)return!1;try{const{publicKey:t,privateKey:r}=JSON.parse(e),i=await crypto.subtle.importKey("jwk",r,{name:"ECDH",namedCurve:"P-256"},!1,["deriveKey"]);return this.keyPair={publicKey:await this.importPublicKey(t),privateKey:i},!0}catch{return!1}}}const To=new ew;function tw(){const[n,e]=G(void 0),[t,r]=G(!1);return pt(()=>{localStorage.getItem("vortex-user")==="true"&&e(null);const s=hn.onAuthChange(async a=>{a?(e(a),localStorage.setItem("vortex-user","true"),await To.loadKeys()||(await To.generateKeys(),await To.saveKeys()),nf.startTracking()):(e(null),localStorage.removeItem("vortex-user")),requestAnimationFrame(()=>r(!0))});return()=>s==null?void 0:s()},[]),!t||n===void 0?null:n?_(ZE,{user:n}):_(LE,{})}Uf(_(tw,{}),document.getElementById("app"));
