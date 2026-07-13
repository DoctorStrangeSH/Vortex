(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Ji,le,_u,kt,zl,yu,vu,Hs,gi,pr,Eu,Bo,ho,fo,Pi={},ki=[],If=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Xi=Array.isArray;function ut(n,e){for(var t in e)n[t]=e[t];return n}function jo(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Tf(n,e,t){var r,i,s,a={};for(s in e)s=="key"?r=e[s]:s=="ref"?i=e[s]:a[s]=e[s];if(arguments.length>2&&(a.children=arguments.length>3?Ji.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(s in n.defaultProps)a[s]===void 0&&(a[s]=n.defaultProps[s]);return _i(n,a,r,i,null)}function _i(n,e,t,r,i){var s={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++_u,__i:-1,__u:0};return i==null&&le.vnode!=null&&le.vnode(s),s}function tt(n){return n.children}function yi(n,e){this.props=n,this.context=e}function kn(n,e){if(e==null)return n.__?kn(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?kn(n):null}function bf(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,r=[],i=[],s=ut({},e);s.__v=e.__v+1,le.vnode&&le.vnode(s),zo(n.__P,s,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,r,t??kn(e),!!(32&e.__u),i),s.__v=e.__v,s.__.__k[s.__i]=s,Au(r,s,i),e.__e=e.__=null,s.__e!=t&&wu(s)}}function wu(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),wu(n)}function ql(n){(!n.__d&&(n.__d=!0)&&kt.push(n)&&!xi.__r++||zl!=le.debounceRendering)&&((zl=le.debounceRendering)||yu)(xi)}function xi(){try{for(var n,e=1;kt.length;)kt.length>e&&kt.sort(vu),n=kt.shift(),e=kt.length,bf(n)}finally{kt.length=xi.__r=0}}function Iu(n,e,t,r,i,s,a,l,u,h,f){var v,m,T,C,x,P,N,M=r&&r.__k||ki,U=e.length;for(u=Af(t,e,M,u,U),v=0;v<U;v++)(T=t.__k[v])!=null&&(m=T.__i!=-1&&M[T.__i]||Pi,T.__i=v,P=zo(n,T,m,i,s,a,l,u,h,f),C=T.__e,T.ref&&m.ref!=T.ref&&(m.ref&&qo(m.ref,null,T),f.push(T.ref,T.__c||C,T)),x==null&&C!=null&&(x=C),(N=!!(4&T.__u))||m.__k===T.__k?(u=Tu(T,u,n,N),N&&m.__e&&(m.__e=null)):typeof T.type=="function"&&P!==void 0?u=P:C&&(u=C.nextSibling),T.__u&=-7);return t.__e=x,u}function Af(n,e,t,r,i){var s,a,l,u,h,f=t.length,v=f,m=0;for(n.__k=new Array(i),s=0;s<i;s++)(a=e[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[s]=_i(null,a,null,null,null):Xi(a)?a=n.__k[s]=_i(tt,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[s]=_i(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[s]=a,u=s+m,a.__=n,a.__b=n.__b+1,l=null,(h=a.__i=Rf(a,t,u,v))!=-1&&(v--,(l=t[h])&&(l.__u|=2)),l==null||l.__v==null?(h==-1&&(i>f?m--:i<f&&m++),typeof a.type!="function"&&(a.__u|=4)):h!=u&&(h==u-1?m--:h==u+1?m++:(h>u?m--:m++,a.__u|=4))):n.__k[s]=null;if(v)for(s=0;s<f;s++)(l=t[s])!=null&&!(2&l.__u)&&(l.__e==r&&(r=kn(l)),Su(l,l));return r}function Tu(n,e,t,r){var i,s;if(typeof n.type=="function"){for(i=n.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=n,e=Tu(i[s],e,t,r));return e}n.__e!=e&&(r&&(e&&n.type&&!e.parentNode&&(e=kn(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Rf(n,e,t,r){var i,s,a,l=n.key,u=n.type,h=e[t],f=h!=null&&(2&h.__u)==0;if(h===null&&l==null||f&&l==h.key&&u==h.type)return t;if(r>(f?1:0)){for(i=t-1,s=t+1;i>=0||s<e.length;)if((h=e[a=i>=0?i--:s++])!=null&&!(2&h.__u)&&l==h.key&&u==h.type)return a}return-1}function $l(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||If.test(e)?t:t+"px"}function ui(n,e,t,r,i){var s,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||$l(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||$l(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")s=e!=(e=e.replace(Eu,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+s]=t,t?r?t[pr]=r[pr]:(t[pr]=Bo,n.addEventListener(e,s?fo:ho,s)):n.removeEventListener(e,s?fo:ho,s);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Wl(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[gi]==null)e[gi]=Bo++;else if(e[gi]<t[pr])return;return t(le.event?le.event(e):e)}}}function zo(n,e,t,r,i,s,a,l,u,h){var f,v,m,T,C,x,P,N,M,U,Q,G,J,b,_,g,E=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),s=[l=e.__e=t.__e]),(f=le.__b)&&f(e);e:if(typeof E=="function"){v=a.length;try{if(M=e.props,U=E.prototype&&E.prototype.render,Q=(f=E.contextType)&&r[f.__c],G=f?Q?Q.props.value:f.__:r,t.__c?N=(m=e.__c=t.__c).__=m.__E:(U?e.__c=m=new E(M,G):(e.__c=m=new yi(M,G),m.constructor=E,m.render=Cf),Q&&Q.sub(m),m.state||(m.state={}),m.__n=r,T=m.__d=!0,m.__h=[],m._sb=[]),U&&m.__s==null&&(m.__s=m.state),U&&E.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=ut({},m.__s)),ut(m.__s,E.getDerivedStateFromProps(M,m.__s))),C=m.props,x=m.state,m.__v=e,T)U&&E.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),U&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if(U&&E.getDerivedStateFromProps==null&&M!==C&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(M,G),e.__v==t.__v||!m.__e&&m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(M,m.__s,G)===!1){e.__v!=t.__v&&(m.props=M,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(I){I&&(I.__=e)}),ki.push.apply(m.__h,m._sb),m._sb=[],m.__h.length&&a.push(m);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(M,m.__s,G),U&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(C,x,P)})}if(m.context=G,m.props=M,m.__P=n,m.__e=!1,J=le.__r,b=0,U)m.state=m.__s,m.__d=!1,J&&J(e),f=m.render(m.props,m.state,m.context),ki.push.apply(m.__h,m._sb),m._sb=[];else do m.__d=!1,J&&J(e),f=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++b<25);m.state=m.__s,m.getChildContext!=null&&(r=ut(ut({},r),m.getChildContext())),U&&!T&&m.getSnapshotBeforeUpdate!=null&&(P=m.getSnapshotBeforeUpdate(C,x)),_=f!=null&&f.type===tt&&f.key==null?Ru(f.props.children):f,l=Iu(n,Xi(_)?_:[_],e,t,r,i,s,a,l,u,h),m.base=e.__e,e.__u&=-161,m.__h.length&&a.push(m),N&&(m.__E=m.__=null)}catch(I){if(a.length=v,e.__v=null,u||s!=null){if(I.then){for(e.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;s!=null&&(s[s.indexOf(l)]=null),e.__e=l}else if(s!=null)for(g=s.length;g--;)jo(s[g])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),I.then||bu(e),le.__e(I,e,t)}}else s==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):l=e.__e=Sf(t.__e,e,t,r,i,s,a,u,h);return(f=le.diffed)&&f(e),128&e.__u?void 0:l}function bu(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(bu))}function Au(n,e,t){for(var r=0;r<t.length;r++)qo(t[r],t[++r],t[++r]);le.__c&&le.__c(e,n),n.some(function(i){try{n=i.__h,i.__h=[],n.some(function(s){s.call(i)})}catch(s){le.__e(s,i.__v)}})}function Ru(n){return typeof n!="object"||n==null||n.__b>0?n:Xi(n)?n.map(Ru):n.constructor!==void 0?null:ut({},n)}function Sf(n,e,t,r,i,s,a,l,u){var h,f,v,m,T,C,x,P=t.props||Pi,N=e.props,M=e.type;if(M=="svg"?i="http://www.w3.org/2000/svg":M=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),s!=null){for(h=0;h<s.length;h++)if((T=s[h])&&"setAttribute"in T==!!M&&(M?T.localName==M:T.nodeType==3)){n=T,s[h]=null;break}}if(n==null){if(M==null)return document.createTextNode(N);n=document.createElementNS(i,M,N.is&&N),l&&(le.__m&&le.__m(e,s),l=!1),s=null}if(M==null)P===N||l&&n.data==N||(n.data=N);else{if(s=M=="textarea"&&N.defaultValue!=null?null:s&&Ji.call(n.childNodes),!l&&s!=null)for(P={},h=0;h<n.attributes.length;h++)P[(T=n.attributes[h]).name]=T.value;for(h in P)T=P[h],h=="dangerouslySetInnerHTML"?v=T:h=="children"||h in N||h=="value"&&"defaultValue"in N||h=="checked"&&"defaultChecked"in N||ui(n,h,null,T,i);for(h in N)T=N[h],h=="children"?m=T:h=="dangerouslySetInnerHTML"?f=T:h=="value"?C=T:h=="checked"?x=T:l&&typeof T!="function"||P[h]===T||ui(n,h,T,P[h],i);if(f)l||v&&(f.__html==v.__html||f.__html==n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(v&&(n.innerHTML=""),Iu(e.type=="template"?n.content:n,Xi(m)?m:[m],e,t,r,M=="foreignObject"?"http://www.w3.org/1999/xhtml":i,s,a,s?s[0]:t.__k&&kn(t,0),l,u),s!=null)for(h=s.length;h--;)jo(s[h]);l&&M!="textarea"||(h="value",M=="progress"&&C==null?n.removeAttribute("value"):C!=null&&(C!==n[h]||M=="progress"&&!C||M=="option"&&C!=P[h])&&ui(n,h,C,P[h],i),h="checked",x!=null&&x!=n[h]&&ui(n,h,x,P[h],i))}return n}function qo(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(i){le.__e(i,t)}}function Su(n,e,t){var r,i;if(le.unmount&&le.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||qo(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){le.__e(s,e)}r.base=r.__P=r.__n=null}if(r=n.__k)for(i=0;i<r.length;i++)r[i]&&Su(r[i],e,t||typeof n.type!="function");t||jo(n.__e),n.__c=n.__=n.__e=void 0}function Cf(n,e,t){return this.constructor(n,t)}function Pf(n,e,t){var r,i,s,a;e==document&&(e=document.documentElement),le.__&&le.__(n,e),i=(r=!1)?null:e.__k,s=[],a=[],zo(e,n=e.__k=Tf(tt,null,[n]),i||Pi,Pi,e.namespaceURI,i?null:e.firstChild?Ji.call(e.childNodes):null,s,i?i.__e:e.firstChild,r,a),Au(s,n,a),n.props.children=null}Ji=ki.slice,le={__e:function(n,e,t,r){for(var i,s,a;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(n)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(n,r||{}),a=i.__d),a)return i.__E=i}catch(l){n=l}throw n}},_u=0,yi.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ut({},this.state),typeof n=="function"&&(n=n(ut({},t),this.props)),n&&ut(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),ql(this))},yi.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ql(this))},yi.prototype.render=tt,kt=[],yu=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,vu=function(n,e){return n.__v.__b-e.__v.__b},xi.__r=0,Hs=Math.random().toString(8),gi="__d"+Hs,pr="__a"+Hs,Eu=/(PointerCapture)$|Capture$/i,Bo=0,ho=Wl(!1),fo=Wl(!0);var kf=0;function y(n,e,t,r,i,s){e||(e={});var a,l,u=e;if("ref"in u)for(l in u={},e)l=="ref"?a=e[l]:u[l]=e[l];var h={type:n,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--kf,__i:-1,__u:0,__source:i,__self:s};if(typeof n=="function"&&(a=n.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return le.vnode&&le.vnode(h),h}var Er,_e,Gs,Kl,Di=0,Cu=[],ve=le,Hl=ve.__b,Gl=ve.__r,Ql=ve.diffed,Yl=ve.__c,Jl=ve.unmount,Xl=ve.__;function $o(n,e){ve.__h&&ve.__h(_e,n,Di||e),Di=0;var t=_e.__H||(_e.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function Y(n){return Di=1,xf(ku,n)}function xf(n,e,t){var r=$o(Er++,2);if(r.t=n,!r.__c&&(r.__=[ku(void 0,e),function(l){var u=r.__N?r.__N[0]:r.__[0],h=r.t(u,l);u!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=_e,!_e.__f)){var i=function(l,u,h){if(!r.__c.__H)return!0;var f=!1,v=r.__c.props!==l;if(r.__c.__H.__.some(function(T){if(T.__N){f=!0;var C=T.__[0];T.__=T.__N,T.__N=void 0,C!==T.__[0]&&(v=!0)}}),s){var m=s.call(this,l,u,h);return f?m||v:m}return!f||v};_e.__f=!0;var s=_e.shouldComponentUpdate,a=_e.componentWillUpdate;_e.componentWillUpdate=function(l,u,h){if(this.__e){var f=s;s=void 0,i(l,u,h),s=f}a&&a.call(this,l,u,h)},_e.shouldComponentUpdate=i}return r.__N||r.__}function Lt(n,e){var t=$o(Er++,3);!ve.__s&&Pu(t.__H,e)&&(t.__=n,t.u=e,_e.__H.__h.push(t))}function wr(n){return Di=5,Df(function(){return{current:n}},[])}function Df(n,e){var t=$o(Er++,7);return Pu(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Nf(){for(var n;n=Cu.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(vi),e.__h.some(po),e.__h=[]}catch(t){e.__h=[],ve.__e(t,n.__v)}}}ve.__b=function(n){_e=null,Hl&&Hl(n)},ve.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Xl&&Xl(n,e)},ve.__r=function(n){Gl&&Gl(n),Er=0;var e=(_e=n.__c).__H;e&&(Gs===_e?(e.__h=[],_e.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(vi),e.__h.some(po),e.__h=[],Er=0)),Gs=_e},ve.diffed=function(n){Ql&&Ql(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Cu.push(e)!==1&&Kl===ve.requestAnimationFrame||((Kl=ve.requestAnimationFrame)||Vf)(Nf)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),Gs=_e=null},ve.__c=function(n,e){e.some(function(t){try{t.__h.some(vi),t.__h=t.__h.filter(function(r){return!r.__||po(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],ve.__e(r,t.__v)}}),Yl&&Yl(n,e)},ve.unmount=function(n){Jl&&Jl(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(r){try{vi(r)}catch(i){e=i}}),t.__H=void 0,e&&ve.__e(e,t.__v))};var Zl=typeof requestAnimationFrame=="function";function Vf(n){var e,t=function(){clearTimeout(r),Zl&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);Zl&&(e=requestAnimationFrame(t))}function vi(n){var e=_e,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),_e=e}function po(n){var e=_e;n.__c=n.__(),_e=e}function Pu(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function ku(n,e){return typeof e=="function"?e(n):e}var ec={};/**
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
 */const xu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Of=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Du={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,v=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,T=h&63;u||(T=64,a||(m=64)),r.push(t[f],t[v],t[m],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Of(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||v==null)throw new Mf;const m=s<<2|l>>4;if(r.push(m),h!==64){const T=l<<4&240|h>>2;if(r.push(T),v!==64){const C=h<<6&192|v;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Mf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lf=function(n){const e=xu(n);return Du.encodeByteArray(e,!0)},Ni=function(n){return Lf(n).replace(/\./g,"")},Nu=function(n){try{return Du.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ff(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Uf=()=>Ff().__FIREBASE_DEFAULTS__,Bf=()=>{if(typeof process>"u"||typeof ec>"u")return;const n=ec.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Nu(n[1]);return e&&JSON.parse(e)},Zi=()=>{try{return Uf()||Bf()||jf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vu=n=>{var e,t;return(t=(e=Zi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zf=n=>{const e=Vu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ou=()=>{var n;return(n=Zi())===null||n===void 0?void 0:n.config},Mu=n=>{var e;return(e=Zi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class qf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function $f(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ni(JSON.stringify(t)),Ni(JSON.stringify(a)),""].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Kf(){var n;const e=(n=Zi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yf(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Jf(){return!Kf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xf(){try{return typeof indexedDB=="object"}catch{return!1}}function Zf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const ep="FirebaseError";class wt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ep,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dr.prototype.create)}}class Dr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?tp(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new wt(i,l,r)}}function tp(n,e){return n.replace(np,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const np=/\{\$([^}]+)}/g;function rp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(tc(s)&&tc(a)){if(!Vi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function tc(n){return n!==null&&typeof n=="object"}/**
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
 */function Nr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function cr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ip(n,e){const t=new sp(n,e);return t.subscribe.bind(t)}class sp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");op(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Qs),i.error===void 0&&(i.error=Qs),i.complete===void 0&&(i.complete=Qs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function op(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qs(){}/**
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
 */function we(n){return n&&n._delegate?n._delegate:n}class sn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class ap{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new qf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cp(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lp(n){return n===Xt?void 0:n}function cp(n){return n.instantiationMode==="EAGER"}/**
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
 */class up{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ap(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const hp={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},dp=Z.INFO,fp={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},pp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=fp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wo{constructor(e){this.name=e,this._logLevel=dp,this._logHandler=pp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const mp=(n,e)=>e.some(t=>n instanceof t);let nc,rc;function gp(){return nc||(nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _p(){return rc||(rc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lu=new WeakMap,mo=new WeakMap,Fu=new WeakMap,Ys=new WeakMap,Ko=new WeakMap;function yp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Ut(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Lu.set(t,n)}).catch(()=>{}),Ko.set(e,n),e}function vp(n){if(mo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});mo.set(n,e)}let go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return mo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ut(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ep(n){go=n(go)}function wp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Js(this),e,...t);return Fu.set(r,e.sort?e.sort():[e]),Ut(r)}:_p().includes(n)?function(...e){return n.apply(Js(this),e),Ut(Lu.get(this))}:function(...e){return Ut(n.apply(Js(this),e))}}function Ip(n){return typeof n=="function"?wp(n):(n instanceof IDBTransaction&&vp(n),mp(n,gp())?new Proxy(n,go):n)}function Ut(n){if(n instanceof IDBRequest)return yp(n);if(Ys.has(n))return Ys.get(n);const e=Ip(n);return e!==n&&(Ys.set(n,e),Ko.set(e,n)),e}const Js=n=>Ko.get(n);function Tp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=Ut(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Ut(a.result),u.oldVersion,u.newVersion,Ut(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const bp=["get","getKey","getAll","getAllKeys","count"],Ap=["put","add","delete","clear"],Xs=new Map;function ic(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xs.get(e))return Xs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Ap.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bp.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&u.done]))[0]};return Xs.set(e,s),s}Ep(n=>({...n,get:(e,t,r)=>ic(e,t)||n.get(e,t,r),has:(e,t)=>!!ic(e,t)||n.has(e,t)}));/**
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
 */class Rp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Sp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Sp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _o="@firebase/app",sc="0.10.13";/**
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
 */const gt=new Wo("@firebase/app"),Cp="@firebase/app-compat",Pp="@firebase/analytics-compat",kp="@firebase/analytics",xp="@firebase/app-check-compat",Dp="@firebase/app-check",Np="@firebase/auth",Vp="@firebase/auth-compat",Op="@firebase/database",Mp="@firebase/data-connect",Lp="@firebase/database-compat",Fp="@firebase/functions",Up="@firebase/functions-compat",Bp="@firebase/installations",jp="@firebase/installations-compat",zp="@firebase/messaging",qp="@firebase/messaging-compat",$p="@firebase/performance",Wp="@firebase/performance-compat",Kp="@firebase/remote-config",Hp="@firebase/remote-config-compat",Gp="@firebase/storage",Qp="@firebase/storage-compat",Yp="@firebase/firestore",Jp="@firebase/vertexai-preview",Xp="@firebase/firestore-compat",Zp="firebase",em="10.14.1";/**
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
 */const yo="[DEFAULT]",tm={[_o]:"fire-core",[Cp]:"fire-core-compat",[kp]:"fire-analytics",[Pp]:"fire-analytics-compat",[Dp]:"fire-app-check",[xp]:"fire-app-check-compat",[Np]:"fire-auth",[Vp]:"fire-auth-compat",[Op]:"fire-rtdb",[Mp]:"fire-data-connect",[Lp]:"fire-rtdb-compat",[Fp]:"fire-fn",[Up]:"fire-fn-compat",[Bp]:"fire-iid",[jp]:"fire-iid-compat",[zp]:"fire-fcm",[qp]:"fire-fcm-compat",[$p]:"fire-perf",[Wp]:"fire-perf-compat",[Kp]:"fire-rc",[Hp]:"fire-rc-compat",[Gp]:"fire-gcs",[Qp]:"fire-gcs-compat",[Yp]:"fire-fst",[Xp]:"fire-fst-compat",[Jp]:"fire-vertex","fire-js":"fire-js",[Zp]:"fire-js-all"};/**
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
 */const Oi=new Map,nm=new Map,vo=new Map;function oc(n,e){try{n.container.addComponent(e)}catch(t){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xn(n){const e=n.name;if(vo.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;vo.set(e,n);for(const t of Oi.values())oc(t,n);for(const t of nm.values())oc(t,n);return!0}function Ho(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function et(n){return n.settings!==void 0}/**
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
 */const rm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bt=new Dr("app","Firebase",rm);/**
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
 */class im{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
 */const jn=em;function Uu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Bt.create("bad-app-name",{appName:String(i)});if(t||(t=Ou()),!t)throw Bt.create("no-options");const s=Oi.get(i);if(s){if(Vi(t,s.options)&&Vi(r,s.config))return s;throw Bt.create("duplicate-app",{appName:i})}const a=new up(i);for(const u of vo.values())a.addComponent(u);const l=new im(t,r,a);return Oi.set(i,l),l}function Bu(n=yo){const e=Oi.get(n);if(!e&&n===yo&&Ou())return Uu();if(!e)throw Bt.create("no-app",{appName:n});return e}function jt(n,e,t){var r;let i=(r=tm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(l.join(" "));return}xn(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const sm="firebase-heartbeat-database",om=1,Ir="firebase-heartbeat-store";let Zs=null;function ju(){return Zs||(Zs=Tp(sm,om,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ir)}catch(t){console.warn(t)}}}}).catch(n=>{throw Bt.create("idb-open",{originalErrorMessage:n.message})})),Zs}async function am(n){try{const t=(await ju()).transaction(Ir),r=await t.objectStore(Ir).get(zu(n));return await t.done,r}catch(e){if(e instanceof wt)gt.warn(e.message);else{const t=Bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(t.message)}}}async function ac(n,e){try{const r=(await ju()).transaction(Ir,"readwrite");await r.objectStore(Ir).put(e,zu(n)),await r.done}catch(t){if(t instanceof wt)gt.warn(t.message);else{const r=Bt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gt.warn(r.message)}}}function zu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lm=1024,cm=30*24*60*60*1e3;class um{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=cm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lc(),{heartbeatsToSend:r,unsentEntries:i}=hm(this._heartbeatsCache.heartbeats),s=Ni(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return gt.warn(t),""}}}function lc(){return new Date().toISOString().substring(0,10)}function hm(n,e=lm){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),cc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),cc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class dm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xf()?Zf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await am(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ac(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ac(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cc(n){return Ni(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function fm(n){xn(new sn("platform-logger",e=>new Rp(e),"PRIVATE")),xn(new sn("heartbeat",e=>new um(e),"PRIVATE")),jt(_o,sc,n),jt(_o,sc,"esm2017"),jt("fire-js","")}fm("");var pm="firebase",mm="10.14.1";/**
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
 */jt(pm,mm,"app");function Go(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function qu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gm=qu,$u=new Dr("auth","Firebase",qu());/**
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
 */const Mi=new Wo("@firebase/auth");function _m(n,...e){Mi.logLevel<=Z.WARN&&Mi.warn(`Auth (${jn}): ${n}`,...e)}function Ei(n,...e){Mi.logLevel<=Z.ERROR&&Mi.error(`Auth (${jn}): ${n}`,...e)}/**
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
 */function Qe(n,...e){throw Qo(n,...e)}function nt(n,...e){return Qo(n,...e)}function Wu(n,e,t){const r=Object.assign(Object.assign({},gm()),{[e]:t});return new Dr("auth","Firebase",r).create(e,{appName:n.name})}function pt(n){return Wu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return $u.create(n,...e)}function z(n,e,...t){if(!n)throw Qo(e,...t)}function ht(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ei(e),new Error(e)}function _t(n,e){n||ht(e)}/**
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
 */function Eo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ym(){return uc()==="http:"||uc()==="https:"}function uc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function vm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ym()||Gf()||"connection"in navigator)?navigator.onLine:!0}function Em(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Vr{constructor(e,t){this.shortDelay=e,this.longDelay=t,_t(t>e,"Short delay should be less than long delay!"),this.isMobile=Wf()||Qf()}get(){return vm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yo(n,e){_t(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ku{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Im=new Vr(3e4,6e4);function Kt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function It(n,e,t,r,i={}){return Hu(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Nr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},s);return Hf()||(h.referrerPolicy="no-referrer"),Ku.fetch()(Gu(n,n.config.apiHost,t,l),h)})}async function Hu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},wm),e);try{const i=new bm(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw hi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw hi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw hi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw hi(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Wu(n,f,h);Qe(n,f)}}catch(i){if(i instanceof wt)throw i;Qe(n,"network-request-failed",{message:String(i)})}}async function Or(n,e,t,r,i={}){const s=await It(n,e,t,r,i);return"mfaPendingCredential"in s&&Qe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Gu(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Yo(n.config,i):`${n.config.apiScheme}://${i}`}function Tm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),Im.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=nt(n,e,r);return i.customData._tokenResponse=t,i}function hc(n){return n!==void 0&&n.enterprise!==void 0}class Am{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Tm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Rm(n,e){return It(n,"GET","/v2/recaptchaConfig",Kt(n,e))}/**
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
 */async function Sm(n,e){return It(n,"POST","/v1/accounts:delete",e)}async function Qu(n,e){return It(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function mr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cm(n,e=!1){const t=we(n),r=await t.getIdToken(e),i=Jo(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mr(eo(i.auth_time)),issuedAtTime:mr(eo(i.iat)),expirationTime:mr(eo(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function eo(n){return Number(n)*1e3}function Jo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ei("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nu(t);return i?JSON.parse(i):(Ei("Failed to decode base64 JWT payload"),null)}catch(i){return Ei("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dc(n){const e=Jo(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof wt&&Pm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Pm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class km{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mr(this.lastLoginAt),this.creationTime=mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Li(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Dn(n,Qu(t,{idToken:r}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Yu(s.providerUserInfo):[],l=Dm(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new wo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,v)}async function xm(n){const e=we(n);await Li(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Yu(n){return n.map(e=>{var{providerId:t}=e,r=Go(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Nm(n,e){const t=await Hu(n,{},async()=>{const r=Nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Gu(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ku.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vm(n,e){return It(n,"POST","/v2/accounts:revokeToken",Kt(n,e))}/**
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
 */class An{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=dc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Nm(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new An;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new An,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
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
 */function Pt(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class dt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Go(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new km(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Dn(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Cm(this,e)}reload(){return xm(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Li(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(pt(this.auth));const e=await this.getIdToken();return await Dn(this,Sm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,u,h,f;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,T=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,N=(h=t.createdAt)!==null&&h!==void 0?h:void 0,M=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:Q,isAnonymous:G,providerData:J,stsTokenManager:b}=t;z(U&&b,e,"internal-error");const _=An.fromJSON(this.name,b);z(typeof U=="string",e,"internal-error"),Pt(v,e.name),Pt(m,e.name),z(typeof Q=="boolean",e,"internal-error"),z(typeof G=="boolean",e,"internal-error"),Pt(T,e.name),Pt(C,e.name),Pt(x,e.name),Pt(P,e.name),Pt(N,e.name),Pt(M,e.name);const g=new dt({uid:U,auth:e,email:m,emailVerified:Q,displayName:v,isAnonymous:G,photoURL:C,phoneNumber:T,tenantId:x,stsTokenManager:_,createdAt:N,lastLoginAt:M});return J&&Array.isArray(J)&&(g.providerData=J.map(E=>Object.assign({},E))),P&&(g._redirectEventId=P),g}static async _fromIdTokenResponse(e,t,r=!1){const i=new An;i.updateFromServerResponse(t);const s=new dt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Li(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Yu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new An;l.updateFromIdToken(r);const u=new dt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const fc=new Map;function ft(n){_t(n instanceof Function,"Expected a class definition");let e=fc.get(n);return e?(_t(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fc.set(n,e),e)}/**
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
 */class Ju{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ju.type="NONE";const pc=Ju;/**
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
 */function wi(n,e,t){return`firebase:${n}:${e}:${t}`}class Rn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wi(this.userKey,i.apiKey,s),this.fullPersistenceKey=wi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Rn(ft(pc),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||ft(pc);const a=wi(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const v=dt._fromJSON(e,f);h!==s&&(l=v),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Rn(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Rn(s,e,r))}}/**
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
 */function mc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(th(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rh(e))return"Blackberry";if(ih(e))return"Webos";if(Zu(e))return"Safari";if((e.includes("chrome/")||eh(e))&&!e.includes("edge/"))return"Chrome";if(nh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xu(n=Le()){return/firefox\//i.test(n)}function Zu(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eh(n=Le()){return/crios\//i.test(n)}function th(n=Le()){return/iemobile/i.test(n)}function nh(n=Le()){return/android/i.test(n)}function rh(n=Le()){return/blackberry/i.test(n)}function ih(n=Le()){return/webos/i.test(n)}function Xo(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Om(n=Le()){var e;return Xo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mm(){return Yf()&&document.documentMode===10}function sh(n=Le()){return Xo(n)||nh(n)||ih(n)||rh(n)||/windows phone/i.test(n)||th(n)}/**
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
 */function oh(n,e=[]){let t;switch(n){case"Browser":t=mc(Le());break;case"Worker":t=`${mc(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jn}/${r}`}/**
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
 */class Lm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Fm(n,e={}){return It(n,"GET","/v2/passwordPolicy",Kt(n,e))}/**
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
 */const Um=6;class Bm{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Um,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class jm{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gc(this),this.idTokenSubscription=new gc(this),this.beforeStateQueue=new Lm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ft(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qu(this,{idToken:e}),r=await dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Li(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Em()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(pt(this));const t=e?we(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fm(this),t=new Bm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ft(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Rn.create(this,[ft(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_m(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hn(n){return we(n)}class gc{constructor(e){this.auth=e,this.observer=null,this.addObserver=ip(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let es={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zm(n){es=n}function ah(n){return es.loadJS(n)}function qm(){return es.recaptchaEnterpriseScript}function $m(){return es.gapiScript}function Wm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Km="recaptcha-enterprise",Hm="NO_RECAPTCHA";class Gm{constructor(e){this.type=Km,this.auth=hn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{Rm(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Am(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;hc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(Hm)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&hc(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=qm();u.length!==0&&(u+=l),ah(u).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function _c(n,e,t,r=!1){const i=new Gm(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Io(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await _c(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await _c(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
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
 */function Qm(n,e){const t=Ho(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Vi(s,e??{}))return i;Qe(i,"already-initialized")}return t.initialize({options:e})}function Ym(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ft);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jm(n,e,t){const r=hn(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=lh(e),{host:a,port:l}=Xm(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Zm()}function lh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Xm(n){const e=lh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:yc(a)}}}function yc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Zo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,t){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}async function eg(n,e){return It(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function tg(n,e){return Or(n,"POST","/v1/accounts:signInWithPassword",Kt(n,e))}/**
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
 */async function ng(n,e){return Or(n,"POST","/v1/accounts:signInWithEmailLink",Kt(n,e))}async function rg(n,e){return Or(n,"POST","/v1/accounts:signInWithEmailLink",Kt(n,e))}/**
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
 */class Tr extends Zo{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Tr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Tr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Io(e,t,"signInWithPassword",tg);case"emailLink":return ng(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Io(e,r,"signUpPassword",eg);case"emailLink":return rg(e,{idToken:t,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Sn(n,e){return Or(n,"POST","/v1/accounts:signInWithIdp",Kt(n,e))}/**
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
 */const ig="http://localhost";class on extends Zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new on(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Go(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new on(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Sn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Sn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sn(e,t)}buildRequest(){const e={requestUri:ig,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Nr(t)}return e}}/**
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
 */function sg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function og(n){const e=lr(cr(n)).link,t=e?lr(cr(e)).deep_link_id:null,r=lr(cr(n)).deep_link_id;return(r?lr(cr(r)).link:null)||r||t||e||n}class ea{constructor(e){var t,r,i,s,a,l;const u=lr(cr(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,v=sg((i=u.mode)!==null&&i!==void 0?i:null);z(h&&f&&v,"argument-error"),this.apiKey=h,this.operation=v,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=og(e);try{return new ea(t)}catch{return null}}}/**
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
 */class zn{constructor(){this.providerId=zn.PROVIDER_ID}static credential(e,t){return Tr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ea.parseLink(t);return z(r,"argument-error"),Tr._fromEmailAndCode(e,r.code,r.tenantId)}}zn.PROVIDER_ID="password";zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ch{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mr extends ch{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dt extends Mr{constructor(){super("facebook.com")}static credential(e){return on._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return on._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Nt.credential(t,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class Vt extends Mr{constructor(){super("github.com")}static credential(e){return on._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.GITHUB_SIGN_IN_METHOD="github.com";Vt.PROVIDER_ID="github.com";/**
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
 */class Ot extends Mr{constructor(){super("twitter.com")}static credential(e,t){return on._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ot.credential(t,r)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
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
 */async function ag(n,e){return Or(n,"POST","/v1/accounts:signUp",Kt(n,e))}/**
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
 */class an{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await dt._fromIdTokenResponse(e,r,i),a=vc(r);return new an({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=vc(r);return new an({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function vc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Fi extends wt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Fi(e,t,r,i)}}function uh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fi._fromErrorAndOperation(n,s,e,r):s})}async function lg(n,e,t=!1){const r=await Dn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return an._forOperation(n,"link",r)}/**
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
 */async function cg(n,e,t=!1){const{auth:r}=n;if(et(r.app))return Promise.reject(pt(r));const i="reauthenticate";try{const s=await Dn(n,uh(r,i,e,n),t);z(s.idToken,r,"internal-error");const a=Jo(s.idToken);z(a,r,"internal-error");const{sub:l}=a;return z(n.uid===l,r,"user-mismatch"),an._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),s}}/**
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
 */async function hh(n,e,t=!1){if(et(n.app))return Promise.reject(pt(n));const r="signIn",i=await uh(n,r,e),s=await an._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function ug(n,e){return hh(hn(n),e)}/**
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
 */async function dh(n){const e=hn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hg(n,e,t){if(et(n.app))return Promise.reject(pt(n));const r=hn(n),a=await Io(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ag).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&dh(n),u}),l=await an._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function dg(n,e,t){return et(n.app)?Promise.reject(pt(n)):ug(we(n),zn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dh(n),r})}/**
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
 */async function fg(n,e){return It(n,"POST","/v1/accounts:update",e)}/**
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
 */async function pg(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=we(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Dn(r,fg(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function mg(n,e,t,r){return we(n).onIdTokenChanged(e,t,r)}function gg(n,e,t){return we(n).beforeAuthStateChanged(e,t)}function To(n,e,t,r){return we(n).onAuthStateChanged(e,t,r)}function _g(n){return we(n).signOut()}const Ui="__sak";/**
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
 */class fh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ui,"1"),this.storage.removeItem(Ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yg=1e3,vg=10;class ph extends fh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Mm()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},yg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ph.type="LOCAL";const Eg=ph;/**
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
 */class mh extends fh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mh.type="SESSION";const gh=mh;/**
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
 */function wg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ts{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ts(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),u=await wg(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ts.receivers=[];/**
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
 */function ta(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ig{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=ta("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(v){const m=v;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function rt(){return window}function Tg(n){rt().location.href=n}/**
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
 */function _h(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function bg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ag(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Rg(){return _h()?self:null}/**
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
 */const yh="firebaseLocalStorageDb",Sg=1,Bi="firebaseLocalStorage",vh="fbase_key";class Lr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ns(n,e){return n.transaction([Bi],e?"readwrite":"readonly").objectStore(Bi)}function Cg(){const n=indexedDB.deleteDatabase(yh);return new Lr(n).toPromise()}function bo(){const n=indexedDB.open(yh,Sg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Bi,{keyPath:vh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Bi)?e(r):(r.close(),await Cg(),e(await bo()))})})}async function Ec(n,e,t){const r=ns(n,!0).put({[vh]:e,value:t});return new Lr(r).toPromise()}async function Pg(n,e){const t=ns(n,!1).get(e),r=await new Lr(t).toPromise();return r===void 0?null:r.value}function wc(n,e){const t=ns(n,!0).delete(e);return new Lr(t).toPromise()}const kg=800,xg=3;class Eh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>xg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _h()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(Rg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bg(),!this.activeServiceWorker)return;this.sender=new Ig(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ag()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bo();return await Ec(e,Ui,"1"),await wc(e,Ui),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ec(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Pg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ns(i,!1).getAll();return new Lr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Eh.type="LOCAL";const Dg=Eh;new Vr(3e4,6e4);/**
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
 */function Ng(n,e){return e?ft(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class na extends Zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Vg(n){return hh(n.auth,new na(n),n.bypassAuthState)}function Og(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),cg(t,new na(n),n.bypassAuthState)}async function Mg(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),lg(t,new na(n),n.bypassAuthState)}/**
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
 */class wh{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vg;case"linkViaPopup":case"linkViaRedirect":return Mg;case"reauthViaPopup":case"reauthViaRedirect":return Og;default:Qe(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Lg=new Vr(2e3,1e4);class Tn extends wh{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lg.get())};e()}}Tn.currentPopupAction=null;/**
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
 */const Fg="pendingRedirect",Ii=new Map;class Ug extends wh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ii.get(this.auth._key());if(!e){try{const r=await Bg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ii.set(this.auth._key(),e)}return this.bypassAuthState||Ii.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bg(n,e){const t=qg(e),r=zg(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function jg(n,e){Ii.set(n._key(),e)}function zg(n){return ft(n._redirectPersistence)}function qg(n){return wi(Fg,n.config.apiKey,n.name)}async function $g(n,e,t=!1){if(et(n.app))return Promise.reject(pt(n));const r=hn(n),i=Ng(r,e),a=await new Ug(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Wg=10*60*1e3;class Kg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ih(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ic(e))}saveEventToCache(e){this.cachedEventUids.add(Ic(e)),this.lastProcessedEventTime=Date.now()}}function Ic(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ih({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ih(n);default:return!1}}/**
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
 */async function Gg(n,e={}){return It(n,"GET","/v1/projects",e)}/**
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
 */const Qg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yg=/^https?/;async function Jg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Gg(n);for(const t of e)try{if(Xg(t))return}catch{}Qe(n,"unauthorized-domain")}function Xg(n){const e=Eo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Yg.test(t))return!1;if(Qg.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Zg=new Vr(3e4,6e4);function Tc(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function e_(n){return new Promise((e,t)=>{var r,i,s;function a(){Tc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tc(),t(nt(n,"network-request-failed"))},timeout:Zg.get()})}if(!((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rt().gapi)===null||s===void 0)&&s.load)a();else{const l=Wm("iframefcb");return rt()[l]=()=>{gapi.load?a():t(nt(n,"network-request-failed"))},ah(`${$m()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Ti=null,e})}let Ti=null;function t_(n){return Ti=Ti||e_(n),Ti}/**
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
 */const n_=new Vr(5e3,15e3),r_="__/auth/iframe",i_="emulator/auth/iframe",s_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},o_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function a_(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yo(e,i_):`https://${n.config.authDomain}/${r_}`,r={apiKey:e.apiKey,appName:n.name,v:jn},i=o_.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Nr(r).slice(1)}`}async function l_(n){const e=await t_(n),t=rt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:a_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:s_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=nt(n,"network-request-failed"),l=rt().setTimeout(()=>{s(a)},n_.get());function u(){rt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const c_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},u_=500,h_=600,d_="_blank",f_="http://localhost";class bc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function p_(n,e,t,r=u_,i=h_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},c_),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Le().toLowerCase();t&&(l=eh(h)?d_:t),Xu(h)&&(e=e||f_,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[T,C])=>`${m}${T}=${C},`,"");if(Om(h)&&l!=="_self")return m_(e||"",l),new bc(null);const v=window.open(e||"",l,f);z(v,n,"popup-blocked");try{v.focus()}catch{}return new bc(v)}function m_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const g_="__/auth/handler",__="emulator/auth/handler",y_=encodeURIComponent("fac");async function Ac(n,e,t,r,i,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:jn,eventId:i};if(e instanceof ch){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",rp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,v]of Object.entries({}))a[f]=v}if(e instanceof Mr){const f=e.getScopes().filter(v=>v!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${y_}=${encodeURIComponent(u)}`:"";return`${v_(n)}?${Nr(l).slice(1)}${h}`}function v_({config:n}){return n.emulator?Yo(n,__):`https://${n.authDomain}/${g_}`}/**
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
 */const to="webStorageSupport";class E_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gh,this._completeRedirectFn=$g,this._overrideRedirectResult=jg}async _openPopup(e,t,r,i){var s;_t((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Ac(e,t,r,Eo(),i);return p_(e,a,ta())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ac(e,t,r,Eo(),i);return Tg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(_t(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await l_(e),r=new Kg(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(to,{type:to},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[to];a!==void 0&&t(!!a),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sh()||Zu()||Xo()}}const w_=E_;var Rc="@firebase/auth",Sc="1.7.9";/**
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
 */class I_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function T_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function b_(n){xn(new sn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oh(n)},h=new jm(r,i,s,u);return Ym(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xn(new sn("auth-internal",e=>{const t=hn(e.getProvider("auth").getImmediate());return(r=>new I_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Rc,Sc,T_(n)),jt(Rc,Sc,"esm2017")}/**
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
 */const A_=5*60,R_=Mu("authIdTokenMaxAge")||A_;let Cc=null;const S_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>R_)return;const i=t==null?void 0:t.token;Cc!==i&&(Cc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function C_(n=Bu()){const e=Ho(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Qm(n,{popupRedirectResolver:w_,persistence:[Dg,Eg,gh]}),r=Mu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=S_(s.toString());gg(t,a,()=>a(t.currentUser)),mg(t,l=>a(l))}}const i=Vu("auth");return i&&Jm(t,`http://${i}`),t}function P_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}zm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=nt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",P_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});b_("Browser");var Pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tn,Th;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function g(){}g.prototype=_.prototype,b.D=_.prototype,b.prototype=new g,b.prototype.constructor=b,b.C=function(E,I,A){for(var w=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)w[Te-2]=arguments[Te];return _.prototype[I].apply(E,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,_,g){g||(g=0);var E=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)E[I]=_.charCodeAt(g++)|_.charCodeAt(g++)<<8|_.charCodeAt(g++)<<16|_.charCodeAt(g++)<<24;else for(I=0;16>I;++I)E[I]=_[g++]|_[g++]<<8|_[g++]<<16|_[g++]<<24;_=b.g[0],g=b.g[1],I=b.g[2];var A=b.g[3],w=_+(A^g&(I^A))+E[0]+3614090360&4294967295;_=g+(w<<7&4294967295|w>>>25),w=A+(I^_&(g^I))+E[1]+3905402710&4294967295,A=_+(w<<12&4294967295|w>>>20),w=I+(g^A&(_^g))+E[2]+606105819&4294967295,I=A+(w<<17&4294967295|w>>>15),w=g+(_^I&(A^_))+E[3]+3250441966&4294967295,g=I+(w<<22&4294967295|w>>>10),w=_+(A^g&(I^A))+E[4]+4118548399&4294967295,_=g+(w<<7&4294967295|w>>>25),w=A+(I^_&(g^I))+E[5]+1200080426&4294967295,A=_+(w<<12&4294967295|w>>>20),w=I+(g^A&(_^g))+E[6]+2821735955&4294967295,I=A+(w<<17&4294967295|w>>>15),w=g+(_^I&(A^_))+E[7]+4249261313&4294967295,g=I+(w<<22&4294967295|w>>>10),w=_+(A^g&(I^A))+E[8]+1770035416&4294967295,_=g+(w<<7&4294967295|w>>>25),w=A+(I^_&(g^I))+E[9]+2336552879&4294967295,A=_+(w<<12&4294967295|w>>>20),w=I+(g^A&(_^g))+E[10]+4294925233&4294967295,I=A+(w<<17&4294967295|w>>>15),w=g+(_^I&(A^_))+E[11]+2304563134&4294967295,g=I+(w<<22&4294967295|w>>>10),w=_+(A^g&(I^A))+E[12]+1804603682&4294967295,_=g+(w<<7&4294967295|w>>>25),w=A+(I^_&(g^I))+E[13]+4254626195&4294967295,A=_+(w<<12&4294967295|w>>>20),w=I+(g^A&(_^g))+E[14]+2792965006&4294967295,I=A+(w<<17&4294967295|w>>>15),w=g+(_^I&(A^_))+E[15]+1236535329&4294967295,g=I+(w<<22&4294967295|w>>>10),w=_+(I^A&(g^I))+E[1]+4129170786&4294967295,_=g+(w<<5&4294967295|w>>>27),w=A+(g^I&(_^g))+E[6]+3225465664&4294967295,A=_+(w<<9&4294967295|w>>>23),w=I+(_^g&(A^_))+E[11]+643717713&4294967295,I=A+(w<<14&4294967295|w>>>18),w=g+(A^_&(I^A))+E[0]+3921069994&4294967295,g=I+(w<<20&4294967295|w>>>12),w=_+(I^A&(g^I))+E[5]+3593408605&4294967295,_=g+(w<<5&4294967295|w>>>27),w=A+(g^I&(_^g))+E[10]+38016083&4294967295,A=_+(w<<9&4294967295|w>>>23),w=I+(_^g&(A^_))+E[15]+3634488961&4294967295,I=A+(w<<14&4294967295|w>>>18),w=g+(A^_&(I^A))+E[4]+3889429448&4294967295,g=I+(w<<20&4294967295|w>>>12),w=_+(I^A&(g^I))+E[9]+568446438&4294967295,_=g+(w<<5&4294967295|w>>>27),w=A+(g^I&(_^g))+E[14]+3275163606&4294967295,A=_+(w<<9&4294967295|w>>>23),w=I+(_^g&(A^_))+E[3]+4107603335&4294967295,I=A+(w<<14&4294967295|w>>>18),w=g+(A^_&(I^A))+E[8]+1163531501&4294967295,g=I+(w<<20&4294967295|w>>>12),w=_+(I^A&(g^I))+E[13]+2850285829&4294967295,_=g+(w<<5&4294967295|w>>>27),w=A+(g^I&(_^g))+E[2]+4243563512&4294967295,A=_+(w<<9&4294967295|w>>>23),w=I+(_^g&(A^_))+E[7]+1735328473&4294967295,I=A+(w<<14&4294967295|w>>>18),w=g+(A^_&(I^A))+E[12]+2368359562&4294967295,g=I+(w<<20&4294967295|w>>>12),w=_+(g^I^A)+E[5]+4294588738&4294967295,_=g+(w<<4&4294967295|w>>>28),w=A+(_^g^I)+E[8]+2272392833&4294967295,A=_+(w<<11&4294967295|w>>>21),w=I+(A^_^g)+E[11]+1839030562&4294967295,I=A+(w<<16&4294967295|w>>>16),w=g+(I^A^_)+E[14]+4259657740&4294967295,g=I+(w<<23&4294967295|w>>>9),w=_+(g^I^A)+E[1]+2763975236&4294967295,_=g+(w<<4&4294967295|w>>>28),w=A+(_^g^I)+E[4]+1272893353&4294967295,A=_+(w<<11&4294967295|w>>>21),w=I+(A^_^g)+E[7]+4139469664&4294967295,I=A+(w<<16&4294967295|w>>>16),w=g+(I^A^_)+E[10]+3200236656&4294967295,g=I+(w<<23&4294967295|w>>>9),w=_+(g^I^A)+E[13]+681279174&4294967295,_=g+(w<<4&4294967295|w>>>28),w=A+(_^g^I)+E[0]+3936430074&4294967295,A=_+(w<<11&4294967295|w>>>21),w=I+(A^_^g)+E[3]+3572445317&4294967295,I=A+(w<<16&4294967295|w>>>16),w=g+(I^A^_)+E[6]+76029189&4294967295,g=I+(w<<23&4294967295|w>>>9),w=_+(g^I^A)+E[9]+3654602809&4294967295,_=g+(w<<4&4294967295|w>>>28),w=A+(_^g^I)+E[12]+3873151461&4294967295,A=_+(w<<11&4294967295|w>>>21),w=I+(A^_^g)+E[15]+530742520&4294967295,I=A+(w<<16&4294967295|w>>>16),w=g+(I^A^_)+E[2]+3299628645&4294967295,g=I+(w<<23&4294967295|w>>>9),w=_+(I^(g|~A))+E[0]+4096336452&4294967295,_=g+(w<<6&4294967295|w>>>26),w=A+(g^(_|~I))+E[7]+1126891415&4294967295,A=_+(w<<10&4294967295|w>>>22),w=I+(_^(A|~g))+E[14]+2878612391&4294967295,I=A+(w<<15&4294967295|w>>>17),w=g+(A^(I|~_))+E[5]+4237533241&4294967295,g=I+(w<<21&4294967295|w>>>11),w=_+(I^(g|~A))+E[12]+1700485571&4294967295,_=g+(w<<6&4294967295|w>>>26),w=A+(g^(_|~I))+E[3]+2399980690&4294967295,A=_+(w<<10&4294967295|w>>>22),w=I+(_^(A|~g))+E[10]+4293915773&4294967295,I=A+(w<<15&4294967295|w>>>17),w=g+(A^(I|~_))+E[1]+2240044497&4294967295,g=I+(w<<21&4294967295|w>>>11),w=_+(I^(g|~A))+E[8]+1873313359&4294967295,_=g+(w<<6&4294967295|w>>>26),w=A+(g^(_|~I))+E[15]+4264355552&4294967295,A=_+(w<<10&4294967295|w>>>22),w=I+(_^(A|~g))+E[6]+2734768916&4294967295,I=A+(w<<15&4294967295|w>>>17),w=g+(A^(I|~_))+E[13]+1309151649&4294967295,g=I+(w<<21&4294967295|w>>>11),w=_+(I^(g|~A))+E[4]+4149444226&4294967295,_=g+(w<<6&4294967295|w>>>26),w=A+(g^(_|~I))+E[11]+3174756917&4294967295,A=_+(w<<10&4294967295|w>>>22),w=I+(_^(A|~g))+E[2]+718787259&4294967295,I=A+(w<<15&4294967295|w>>>17),w=g+(A^(I|~_))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var g=_-this.blockSize,E=this.B,I=this.h,A=0;A<_;){if(I==0)for(;A<=g;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<_;)if(E[I++]=b.charCodeAt(A++),I==this.blockSize){i(this,E),I=0;break}}else for(;A<_;)if(E[I++]=b[A++],I==this.blockSize){i(this,E),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var g=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=g&255,g/=256;for(this.u(b),b=Array(16),_=g=0;4>_;++_)for(var E=0;32>E;E+=8)b[g++]=this.g[_]>>>E&255;return b};function s(b,_){var g=l;return Object.prototype.hasOwnProperty.call(g,b)?g[b]:g[b]=_(b)}function a(b,_){this.h=_;for(var g=[],E=!0,I=b.length-1;0<=I;I--){var A=b[I]|0;E&&A==_||(g[I]=A,E=!1)}this.g=g}var l={};function u(b){return-128<=b&&128>b?s(b,function(_){return new a([_|0],0>_?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return v;if(0>b)return P(h(-b));for(var _=[],g=1,E=0;b>=g;E++)_[E]=b/g|0,g*=4294967296;return new a(_,0)}function f(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return P(f(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=h(Math.pow(_,8)),E=v,I=0;I<b.length;I+=8){var A=Math.min(8,b.length-I),w=parseInt(b.substring(I,I+A),_);8>A?(A=h(Math.pow(_,A)),E=E.j(A).add(h(w))):(E=E.j(g),E=E.add(h(w)))}return E}var v=u(0),m=u(1),T=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-P(this).m();for(var b=0,_=1,g=0;g<this.g.length;g++){var E=this.i(g);b+=(0<=E?E:4294967296+E)*_,_*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(x(this))return"-"+P(this).toString(b);for(var _=h(Math.pow(b,6)),g=this,E="";;){var I=Q(g,_).g;g=N(g,I.j(_));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(b);if(g=I,C(g))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function x(b){return b.h==-1}n.l=function(b){return b=N(this,b),x(b)?-1:C(b)?0:1};function P(b){for(var _=b.g.length,g=[],E=0;E<_;E++)g[E]=~b.g[E];return new a(g,~b.h).add(m)}n.abs=function(){return x(this)?P(this):this},n.add=function(b){for(var _=Math.max(this.g.length,b.g.length),g=[],E=0,I=0;I<=_;I++){var A=E+(this.i(I)&65535)+(b.i(I)&65535),w=(A>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);E=w>>>16,A&=65535,w&=65535,g[I]=w<<16|A}return new a(g,g[g.length-1]&-2147483648?-1:0)};function N(b,_){return b.add(P(_))}n.j=function(b){if(C(this)||C(b))return v;if(x(this))return x(b)?P(this).j(P(b)):P(P(this).j(b));if(x(b))return P(this.j(P(b)));if(0>this.l(T)&&0>b.l(T))return h(this.m()*b.m());for(var _=this.g.length+b.g.length,g=[],E=0;E<2*_;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<b.g.length;I++){var A=this.i(E)>>>16,w=this.i(E)&65535,Te=b.i(I)>>>16,Je=b.i(I)&65535;g[2*E+2*I]+=w*Je,M(g,2*E+2*I),g[2*E+2*I+1]+=A*Je,M(g,2*E+2*I+1),g[2*E+2*I+1]+=w*Te,M(g,2*E+2*I+1),g[2*E+2*I+2]+=A*Te,M(g,2*E+2*I+2)}for(E=0;E<_;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=_;E<2*_;E++)g[E]=0;return new a(g,0)};function M(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function U(b,_){this.g=b,this.h=_}function Q(b,_){if(C(_))throw Error("division by zero");if(C(b))return new U(v,v);if(x(b))return _=Q(P(b),_),new U(P(_.g),P(_.h));if(x(_))return _=Q(b,P(_)),new U(P(_.g),_.h);if(30<b.g.length){if(x(b)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var g=m,E=_;0>=E.l(b);)g=G(g),E=G(E);var I=J(g,1),A=J(E,1);for(E=J(E,2),g=J(g,2);!C(E);){var w=A.add(E);0>=w.l(b)&&(I=I.add(g),A=w),E=J(E,1),g=J(g,1)}return _=N(b,I.j(_)),new U(I,_)}for(I=v;0<=b.l(_);){for(g=Math.max(1,Math.floor(b.m()/_.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=h(g),w=A.j(_);x(w)||0<w.l(b);)g-=E,A=h(g),w=A.j(_);C(A)&&(A=m),I=I.add(A),b=N(b,w)}return new U(I,b)}n.A=function(b){return Q(this,b).h},n.and=function(b){for(var _=Math.max(this.g.length,b.g.length),g=[],E=0;E<_;E++)g[E]=this.i(E)&b.i(E);return new a(g,this.h&b.h)},n.or=function(b){for(var _=Math.max(this.g.length,b.g.length),g=[],E=0;E<_;E++)g[E]=this.i(E)|b.i(E);return new a(g,this.h|b.h)},n.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),g=[],E=0;E<_;E++)g[E]=this.i(E)^b.i(E);return new a(g,this.h^b.h)};function G(b){for(var _=b.g.length+1,g=[],E=0;E<_;E++)g[E]=b.i(E)<<1|b.i(E-1)>>>31;return new a(g,b.h)}function J(b,_){var g=_>>5;_%=32;for(var E=b.g.length-g,I=[],A=0;A<E;A++)I[A]=0<_?b.i(A+g)>>>_|b.i(A+g+1)<<32-_:b.i(A+g);return new a(I,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Th=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,tn=a}).apply(typeof Pc<"u"?Pc:typeof self<"u"?self:typeof window<"u"?window:{});var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bh,ur,Ah,bi,Ao,Rh,Sh,Ch;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof di=="object"&&di];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var S=d++;return{value:c(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function v(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function m(o,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:v,m.apply(null,arguments)}function T(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function C(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,S){for(var V=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)V[ae-2]=arguments[ae];return c.prototype[R].apply(p,V)}}function x(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function P(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const R=o.length||0,S=p.length||0;o.length=R+S;for(let V=0;V<S;V++)o[R+V]=p[V]}else o.push(p)}}class N{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var G=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function J(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function b(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function _(o){const c={};for(const d in o)c[d]=o[d];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let S=0;S<g.length;S++)d=g[S],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function w(){var o=bt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Te{constructor(){this.h=this.g=null}add(c,d){const p=Je.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Je=new N(()=>new pn,o=>o.reset());class pn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Xe,at=!1,bt=new Te,Hn=()=>{const o=l.Promise.resolve(void 0);Xe=()=>{o.then(Ts)}};var Ts=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){A(d)}var c=Je;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}at=!1};function O(){this.s=this.s,this.C=this.C}O.prototype.s=!1,O.prototype.ma=function(){this.s||(this.s=!0,this.N())},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function j(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}j.prototype.h=function(){this.defaultPrevented=!0};var K=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function te(o,c){if(j.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(G){e:{try{Q(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:$e[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&te.aa.h.call(this)}}C(te,j);var $e={2:"touch",3:"pen",4:"mouse"};te.prototype.h=function(){te.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var He="closure_listenable_"+(1e6*Math.random()|0),At=0;function Wr(o,c,d,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++At,this.da=this.fa=!1}function Kr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Hr(o){this.src=o,this.g={},this.h=0}Hr.prototype.add=function(o,c,d,p,R){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var V=As(o,c,p,R);return-1<V?(c=o[V],d||(c.fa=!1)):(c=new Wr(c,this.src,S,!!p,R),c.fa=d,o.push(c)),c};function bs(o,c){var d=c.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,c,void 0),S;(S=0<=R)&&Array.prototype.splice.call(p,R,1),S&&(Kr(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function As(o,c,d,p){for(var R=0;R<o.length;++R){var S=o[R];if(!S.da&&S.listener==c&&S.capture==!!d&&S.ha==p)return R}return-1}var Rs="closure_lm_"+(1e6*Math.random()|0),Ss={};function qa(o,c,d,p,R){if(Array.isArray(c)){for(var S=0;S<c.length;S++)qa(o,c[S],d,p,R);return null}return d=Ka(d),o&&o[He]?o.K(c,d,h(p)?!!p.capture:!1,R):Kd(o,c,d,!1,p,R)}function Kd(o,c,d,p,R,S){if(!c)throw Error("Invalid event type");var V=h(R)?!!R.capture:!!R,ae=Ps(o);if(ae||(o[Rs]=ae=new Hr(o)),d=ae.add(c,d,p,V,S),d.proxy)return d;if(p=Hd(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)K||(R=V),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(Wa(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Hd(){function o(d){return c.call(o.src,o.listener,d)}const c=Gd;return o}function $a(o,c,d,p,R){if(Array.isArray(c))for(var S=0;S<c.length;S++)$a(o,c[S],d,p,R);else p=h(p)?!!p.capture:!!p,d=Ka(d),o&&o[He]?(o=o.i,c=String(c).toString(),c in o.g&&(S=o.g[c],d=As(S,d,p,R),-1<d&&(Kr(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete o.g[c],o.h--)))):o&&(o=Ps(o))&&(c=o.g[c.toString()],o=-1,c&&(o=As(c,d,p,R)),(d=-1<o?c[o]:null)&&Cs(d))}function Cs(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[He])bs(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(Wa(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Ps(c))?(bs(d,o),d.h==0&&(d.src=null,c[Rs]=null)):Kr(o)}}}function Wa(o){return o in Ss?Ss[o]:Ss[o]="on"+o}function Gd(o,c){if(o.da)o=!0;else{c=new te(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&Cs(o),o=d.call(p,c)}return o}function Ps(o){return o=o[Rs],o instanceof Hr?o:null}var ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ka(o){return typeof o=="function"?o:(o[ks]||(o[ks]=function(c){return o.handleEvent(c)}),o[ks])}function ke(){O.call(this),this.i=new Hr(this),this.M=this,this.F=null}C(ke,O),ke.prototype[He]=!0,ke.prototype.removeEventListener=function(o,c,d,p){$a(this,o,c,d,p)};function Fe(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new j(c,o);else if(c instanceof j)c.target=c.target||o;else{var R=c;c=new j(p,o),E(c,R)}if(R=!0,d)for(var S=d.length-1;0<=S;S--){var V=c.g=d[S];R=Gr(V,p,!0,c)&&R}if(V=c.g=o,R=Gr(V,p,!0,c)&&R,R=Gr(V,p,!1,c)&&R,d)for(S=0;S<d.length;S++)V=c.g=d[S],R=Gr(V,p,!1,c)&&R}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)Kr(d[p]);delete o.g[c],o.h--}}this.F=null},ke.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},ke.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function Gr(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,S=0;S<c.length;++S){var V=c[S];if(V&&!V.da&&V.capture==d){var ae=V.listener,Ae=V.ha||V.src;V.fa&&bs(o.i,V),R=ae.call(Ae,p)!==!1&&R}}return R&&!p.defaultPrevented}function Ha(o,c,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Ga(o){o.g=Ha(()=>{o.g=null,o.i&&(o.i=!1,Ga(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Qd extends O{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ga(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gn(o){O.call(this),this.h=o,this.g={}}C(Gn,O);var Qa=[];function Ya(o){J(o.g,function(c,d){this.g.hasOwnProperty(d)&&Cs(c)},o),o.g={}}Gn.prototype.N=function(){Gn.aa.N.call(this),Ya(this)},Gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xs=l.JSON.stringify,Yd=l.JSON.parse,Jd=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ds(){}Ds.prototype.h=null;function Ja(o){return o.h||(o.h=o.i())}function Xa(){}var Qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ns(){j.call(this,"d")}C(Ns,j);function Vs(){j.call(this,"c")}C(Vs,j);var Gt={},Za=null;function Qr(){return Za=Za||new ke}Gt.La="serverreachability";function el(o){j.call(this,Gt.La,o)}C(el,j);function Yn(o){const c=Qr();Fe(c,new el(c))}Gt.STAT_EVENT="statevent";function tl(o,c){j.call(this,Gt.STAT_EVENT,o),this.stat=c}C(tl,j);function Ue(o){const c=Qr();Fe(c,new tl(c,o))}Gt.Ma="timingevent";function nl(o,c){j.call(this,Gt.Ma,o),this.size=c}C(nl,j);function Jn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Xn(){this.g=!0}Xn.prototype.xa=function(){this.g=!1};function Xd(o,c,d,p,R,S){o.info(function(){if(o.g)if(S)for(var V="",ae=S.split("&"),Ae=0;Ae<ae.length;Ae++){var ne=ae[Ae].split("=");if(1<ne.length){var xe=ne[0];ne=ne[1];var De=xe.split("_");V=2<=De.length&&De[1]=="type"?V+(xe+"="+ne+"&"):V+(xe+"=redacted&")}}else V=null;else V=S;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+V})}function Zd(o,c,d,p,R,S,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+S+" "+V})}function mn(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+tf(o,d)+(p?" "+p:"")})}function ef(o,c){o.info(function(){return"TIMEOUT: "+c})}Xn.prototype.info=function(){};function tf(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var S=R[0];if(S!="noop"&&S!="stop"&&S!="close")for(var V=1;V<R.length;V++)R[V]=""}}}}return xs(d)}catch{return c}}var Yr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Os;function Jr(){}C(Jr,Ds),Jr.prototype.g=function(){return new XMLHttpRequest},Jr.prototype.i=function(){return{}},Os=new Jr;function Rt(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new Gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new il}function il(){this.i=null,this.g="",this.h=!1}var sl={},Ms={};function Ls(o,c,d){o.L=1,o.v=ti(lt(c)),o.m=d,o.P=!0,ol(o,null)}function ol(o,c){o.F=Date.now(),Xr(o),o.A=lt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),El(d.i,"t",p),o.C=0,d=o.j.J,o.h=new il,o.g=Fl(o.j,d?c:null,!o.m),0<o.O&&(o.M=new Qd(m(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Qa[0]=R.toString()),R=Qa);for(var S=0;S<R.length;S++){var V=qa(d,R[S],p||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Yn(),Xd(o.i,o.u,o.A,o.l,o.R,o.m)}Rt.prototype.ca=function(o){o=o.target;const c=this.M;c&&ct(o)==3?c.j():this.Y(o)},Rt.prototype.Y=function(o){try{if(o==this.g)e:{const De=ct(this.g);var c=this.g.Ba();const yn=this.g.Z();if(!(3>De)&&(De!=3||this.g&&(this.h.h||this.g.oa()||Sl(this.g)))){this.J||De!=4||c==7||(c==8||0>=yn?Yn(3):Yn(2)),Fs(this);var d=this.g.Z();this.X=d;t:if(al(this)){var p=Sl(this.g);o="";var R=p.length,S=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),Zn(this);var V="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(S&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=d==200,Zd(this.i,this.u,this.A,this.l,this.R,De,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,Ae=this.g;if((ae=Ae.g?Ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(ae)){var ne=ae;break t}}ne=null}if(d=ne)mn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Us(this,d);else{this.o=!1,this.s=3,Ue(12),Qt(this),Zn(this);break e}}if(this.P){d=!0;let Ge;for(;!this.J&&this.C<V.length;)if(Ge=nf(this,V),Ge==Ms){De==4&&(this.s=4,Ue(14),d=!1),mn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==sl){this.s=4,Ue(15),mn(this.i,this.l,V,"[Invalid Chunk]"),d=!1;break}else mn(this.i,this.l,Ge,null),Us(this,Ge);if(al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),De!=4||V.length!=0||this.h.h||(this.s=1,Ue(16),d=!1),this.o=this.o&&d,!d)mn(this.i,this.l,V,"[Invalid Chunked Response]"),Qt(this),Zn(this);else if(0<V.length&&!this.W){this.W=!0;var xe=this.j;xe.g==this&&xe.ba&&!xe.M&&(xe.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Ws(xe),xe.M=!0,Ue(11))}}else mn(this.i,this.l,V,null),Us(this,V);De==4&&Qt(this),this.o&&!this.J&&(De==4?Vl(this.j,this):(this.o=!1,Xr(this)))}else Ef(this.g),d==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ue(12)):(this.s=0,Ue(13)),Qt(this),Zn(this)}}}catch{}finally{}};function al(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function nf(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?Ms:(d=Number(c.substring(d,p)),isNaN(d)?sl:(p+=1,p+d>c.length?Ms:(c=c.slice(p,p+d),o.C=p+d,c)))}Rt.prototype.cancel=function(){this.J=!0,Qt(this)};function Xr(o){o.S=Date.now()+o.I,ll(o,o.I)}function ll(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Jn(m(o.ba,o),c)}function Fs(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Rt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ef(this.i,this.A),this.L!=2&&(Yn(),Ue(17)),Qt(this),this.s=2,Zn(this)):ll(this,this.S-o)};function Zn(o){o.j.G==0||o.J||Vl(o.j,o)}function Qt(o){Fs(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ya(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Us(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Bs(d.h,o))){if(!o.K&&Bs(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ai(d),si(d);else break e;$s(d),Ue(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=Jn(m(d.Za,d),6e3));if(1>=hl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Jt(d,11)}else if((o.K||d.g==o)&&ai(d),!M(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let ne=R[c];if(d.T=ne[0],ne=ne[1],d.G==2)if(ne[0]=="c"){d.K=ne[1],d.ia=ne[2];const xe=ne[3];xe!=null&&(d.la=xe,d.j.info("VER="+d.la));const De=ne[4];De!=null&&(d.Aa=De,d.j.info("SVER="+d.Aa));const yn=ne[5];yn!=null&&typeof yn=="number"&&0<yn&&(p=1.5*yn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ge=o.g;if(Ge){const ci=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ci){var S=p.h;S.g||ci.indexOf("spdy")==-1&&ci.indexOf("quic")==-1&&ci.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(js(S,S.h),S.h=null))}if(p.D){const Ks=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;Ks&&(p.ya=Ks,ce(p.I,p.D,Ks))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var V=o;if(p.qa=Ll(p,p.J?p.ia:null,p.W),V.K){dl(p.h,V);var ae=V,Ae=p.L;Ae&&(ae.I=Ae),ae.B&&(Fs(ae),Xr(ae)),p.g=V}else Dl(p);0<d.i.length&&oi(d)}else ne[0]!="stop"&&ne[0]!="close"||Jt(d,7);else d.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?Jt(d,7):qs(d):ne[0]!="noop"&&d.l&&d.l.ta(ne),d.v=0)}}Yn(4)}catch{}}var rf=class{constructor(o,c){this.g=o,this.map=c}};function cl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ul(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function hl(o){return o.h?1:o.g?o.g.size:0}function Bs(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function js(o,c){o.g?o.g.add(c):o.h=c}function dl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}cl.prototype.cancel=function(){if(this.i=fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function fl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return x(o.i)}function sf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function of(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function pl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=of(o),p=sf(o),R=p.length,S=0;S<R;S++)c.call(void 0,p[S],d&&d[S],o)}var ml=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function af(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var S=o[d].substring(0,p);R=o[d].substring(p+1)}else S=o[d];c(S,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Yt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Yt){this.h=o.h,Zr(this,o.j),this.o=o.o,this.g=o.g,ei(this,o.s),this.l=o.l;var c=o.i,d=new nr;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),gl(this,d),this.m=o.m}else o&&(c=String(o).match(ml))?(this.h=!1,Zr(this,c[1]||"",!0),this.o=er(c[2]||""),this.g=er(c[3]||"",!0),ei(this,c[4]),this.l=er(c[5]||"",!0),gl(this,c[6]||"",!0),this.m=er(c[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}Yt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(tr(c,_l,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(tr(c,_l,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(tr(d,d.charAt(0)=="/"?uf:cf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",tr(d,df)),o.join("")};function lt(o){return new Yt(o)}function Zr(o,c,d){o.j=d?er(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ei(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function gl(o,c,d){c instanceof nr?(o.i=c,ff(o.i,o.h)):(d||(c=tr(c,hf)),o.i=new nr(c,o.h))}function ce(o,c,d){o.i.set(c,d)}function ti(o){return ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function er(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function tr(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,lf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function lf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var _l=/[#\/\?@]/g,cf=/[#\?:]/g,uf=/[#\?]/g,hf=/[#\?@]/g,df=/#/g;function nr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function St(o){o.g||(o.g=new Map,o.h=0,o.i&&af(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=nr.prototype,n.add=function(o,c){St(this),this.i=null,o=gn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function yl(o,c){St(o),c=gn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function vl(o,c){return St(o),c=gn(o,c),o.g.has(c)}n.forEach=function(o,c){St(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(c,R,p,this)},this)},this)},n.na=function(){St(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const R=o[p];for(let S=0;S<R.length;S++)d.push(c[p])}return d},n.V=function(o){St(this);let c=[];if(typeof o=="string")vl(this,o)&&(c=c.concat(this.g.get(gn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return St(this),this.i=null,o=gn(this,o),vl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function El(o,c,d){yl(o,c),0<d.length&&(o.i=null,o.g.set(gn(o,c),x(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const S=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var R=S;V[p]!==""&&(R+="="+encodeURIComponent(String(V[p]))),o.push(R)}}return this.i=o.join("&")};function gn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function ff(o,c){c&&!o.j&&(St(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(yl(this,p),El(this,R,d))},o)),o.j=c}function pf(o,c){const d=new Xn;if(l.Image){const p=new Image;p.onload=T(Ct,d,"TestLoadImage: loaded",!0,c,p),p.onerror=T(Ct,d,"TestLoadImage: error",!1,c,p),p.onabort=T(Ct,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=T(Ct,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function mf(o,c){const d=new Xn,p=new AbortController,R=setTimeout(()=>{p.abort(),Ct(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(R),S.ok?Ct(d,"TestPingServer: ok",!0,c):Ct(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Ct(d,"TestPingServer: error",!1,c)})}function Ct(o,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function gf(){this.g=new Jd}function _f(o,c,d){const p=d||"";try{pl(o,function(R,S){let V=R;h(R)&&(V=xs(R)),c.push(p+S+"="+encodeURIComponent(V))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function ni(o){this.l=o.Ub||null,this.j=o.eb||!1}C(ni,Ds),ni.prototype.g=function(){return new ri(this.l,this.j)},ni.prototype.i=function(o){return function(){return o}}({});function ri(o,c){ke.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ri,ke),n=ri.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,ir(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ir(this)),this.g&&(this.readyState=3,ir(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function wl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?rr(this):ir(this),this.readyState==3&&wl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,rr(this))},n.Qa=function(o){this.g&&(this.response=o,rr(this))},n.ga=function(){this.g&&rr(this)};function rr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ir(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function ir(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Il(o){let c="";return J(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function zs(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Il(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ce(o,c,d))}function pe(o){ke.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(pe,ke);var yf=/^https?$/i,vf=["POST","PUT"];n=pe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Os.g(),this.v=this.o?Ja(this.o):Ja(Os),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){Tl(this,S);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(vf,c,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,V]of d)this.g.setRequestHeader(S,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rl(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Tl(this,S)}};function Tl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,bl(o),ii(o)}function bl(o){o.A||(o.A=!0,Fe(o,"complete"),Fe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Fe(this,"complete"),Fe(this,"abort"),ii(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ii(this,!0)),pe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Al(this):this.bb())},n.bb=function(){Al(this)};function Al(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ct(o)!=4||o.Z()!=2)){if(o.u&&ct(o)==4)Ha(o.Ea,0,o);else if(Fe(o,"readystatechange"),ct(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=V===0){var R=String(o.D).match(ml)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!yf.test(R?R.toLowerCase():"")}d=p}if(d)Fe(o,"complete"),Fe(o,"success");else{o.m=6;try{var S=2<ct(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",bl(o)}}finally{ii(o)}}}}function ii(o,c){if(o.g){Rl(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Fe(o,"ready");try{d.onreadystatechange=p}catch{}}}function Rl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ct(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Yd(c)}};function Sl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ef(o){const c={};o=(o.g&&2<=ct(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var d=I(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=c[R]||[];c[R]=S,S.push(d)}b(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Cl(o){this.Aa=0,this.i=[],this.j=new Xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,o),this.cb=sr("retryDelaySeedMs",1e4,o),this.Wa=sr("forwardChannelMaxRetries",2,o),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new cl(o&&o.concurrentRequestLimit),this.Da=new gf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Cl.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,p){Ue(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Ll(this,null,this.W),oi(this)};function qs(o){if(Pl(o),o.G==3){var c=o.U++,d=lt(o.I);if(ce(d,"SID",o.K),ce(d,"RID",c),ce(d,"TYPE","terminate"),or(o,d),c=new Rt(o,o.j,c),c.L=2,c.v=ti(lt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Fl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Xr(c)}Ml(o)}function si(o){o.g&&(Ws(o),o.g.cancel(),o.g=null)}function Pl(o){si(o),o.u&&(l.clearTimeout(o.u),o.u=null),ai(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function oi(o){if(!ul(o.h)&&!o.s){o.s=!0;var c=o.Ga;Xe||Hn(),at||(Xe(),at=!0),bt.add(c,o),o.B=0}}function wf(o,c){return hl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Jn(m(o.Ga,o,c),Ol(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Rt(this,this.j,o);let S=this.o;if(this.S&&(S?(S=_(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(R.H=S,S=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=xl(this,R,c),d=lt(this.I),ce(d,"RID",o),ce(d,"CVER",22),this.D&&ce(d,"X-HTTP-Session-Id",this.D),or(this,d),S&&(this.O?c="headers="+encodeURIComponent(String(Il(S)))+"&"+c:this.m&&zs(d,this.m,S)),js(this.h,R),this.Ua&&ce(d,"TYPE","init"),this.P?(ce(d,"$req",c),ce(d,"SID","null"),R.T=!0,Ls(R,d,null)):Ls(R,d,c),this.G=2}}else this.G==3&&(o?kl(this,o):this.i.length==0||ul(this.h)||kl(this))};function kl(o,c){var d;c?d=c.l:d=o.U++;const p=lt(o.I);ce(p,"SID",o.K),ce(p,"RID",d),ce(p,"AID",o.T),or(o,p),o.m&&o.o&&zs(p,o.m,o.o),d=new Rt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=xl(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),js(o.h,d),Ls(d,p,c)}function or(o,c){o.H&&J(o.H,function(d,p){ce(c,p,d)}),o.l&&pl({},function(d,p){ce(c,p,d)})}function xl(o,c,d){d=Math.min(o.i.length,d);var p=o.l?m(o.l.Na,o.l,o):null;e:{var R=o.i;let S=-1;for(;;){const V=["count="+d];S==-1?0<d?(S=R[0].g,V.push("ofs="+S)):S=0:V.push("ofs="+S);let ae=!0;for(let Ae=0;Ae<d;Ae++){let ne=R[Ae].g;const xe=R[Ae].map;if(ne-=S,0>ne)S=Math.max(0,R[Ae].g-100),ae=!1;else try{_f(xe,V,"req"+ne+"_")}catch{p&&p(xe)}}if(ae){p=V.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,p}function Dl(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Xe||Hn(),at||(Xe(),at=!0),bt.add(c,o),o.v=0}}function $s(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Jn(m(o.Fa,o),Ol(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Nl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Jn(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ue(10),si(this),Nl(this))};function Ws(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Nl(o){o.g=new Rt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=lt(o.qa);ce(c,"RID","rpc"),ce(c,"SID",o.K),ce(c,"AID",o.T),ce(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ce(c,"TO",o.ja),ce(c,"TYPE","xmlhttp"),or(o,c),o.m&&o.o&&zs(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ti(lt(c)),d.m=null,d.P=!0,ol(d,o)}n.Za=function(){this.C!=null&&(this.C=null,si(this),$s(this),Ue(19))};function ai(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Vl(o,c){var d=null;if(o.g==c){ai(o),Ws(o),o.g=null;var p=2}else if(Bs(o.h,c))d=c.D,dl(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=Qr(),Fe(p,new nl(p,d)),oi(o)}else Dl(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&wf(o,c)||p==2&&$s(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),R){case 1:Jt(o,5);break;case 4:Jt(o,10);break;case 3:Jt(o,6);break;default:Jt(o,2)}}}function Ol(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Jt(o,c){if(o.j.info("Error code "+c),c==2){var d=m(o.fb,o),p=o.Xa;const R=!p;p=new Yt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Zr(p,"https"),ti(p),R?pf(p.toString(),d):mf(p.toString(),d)}else Ue(2);o.G=0,o.l&&o.l.sa(c),Ml(o),Pl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function Ml(o){if(o.G=0,o.ka=[],o.l){const c=fl(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ka,c),P(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Ll(o,c,d){var p=d instanceof Yt?lt(d):new Yt(d);if(p.g!="")c&&(p.g=c+"."+p.g),ei(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var S=new Yt(null);p&&Zr(S,p),c&&(S.g=c),R&&ei(S,R),d&&(S.l=d),p=S}return d=o.D,c=o.ya,d&&c&&ce(p,d,c),ce(p,"VER",o.la),or(o,p),p}function Fl(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new pe(new ni({eb:d})):new pe(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ul(){}n=Ul.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function li(){}li.prototype.g=function(o,c){return new ze(o,c)};function ze(o,c){ke.call(this),this.g=new Cl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!M(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!M(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new _n(this)}C(ze,ke),ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){qs(this.g)},ze.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=xs(o),o=d);c.i.push(new rf(c.Ya++,o)),c.G==3&&oi(c)},ze.prototype.N=function(){this.g.l=null,delete this.j,qs(this.g),delete this.g,ze.aa.N.call(this)};function Bl(o){Ns.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(Bl,Ns);function jl(){Vs.call(this),this.status=1}C(jl,Vs);function _n(o){this.g=o}C(_n,Ul),_n.prototype.ua=function(){Fe(this.g,"a")},_n.prototype.ta=function(o){Fe(this.g,new Bl(o))},_n.prototype.sa=function(o){Fe(this.g,new jl)},_n.prototype.ra=function(){Fe(this.g,"b")},li.prototype.createWebChannel=li.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,Ch=function(){return new li},Sh=function(){return Qr()},Rh=Gt,Ao={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yr.NO_ERROR=0,Yr.TIMEOUT=8,Yr.HTTP_ERROR=6,bi=Yr,rl.COMPLETE="complete",Ah=rl,Xa.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",ke.prototype.listen=ke.prototype.K,ur=Xa,pe.prototype.listenOnce=pe.prototype.L,pe.prototype.getLastError=pe.prototype.Ka,pe.prototype.getLastErrorCode=pe.prototype.Ba,pe.prototype.getStatus=pe.prototype.Z,pe.prototype.getResponseJson=pe.prototype.Oa,pe.prototype.getResponseText=pe.prototype.oa,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Ha,bh=pe}).apply(typeof di<"u"?di:typeof self<"u"?self:typeof window<"u"?window:{});const kc="@firebase/firestore";/**
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
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
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
 */let qn="10.14.0";/**
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
 */const ln=new Wo("@firebase/firestore");function ar(){return ln.logLevel}function F(n,...e){if(ln.logLevel<=Z.DEBUG){const t=e.map(ra);ln.debug(`Firestore (${qn}): ${n}`,...t)}}function yt(n,...e){if(ln.logLevel<=Z.ERROR){const t=e.map(ra);ln.error(`Firestore (${qn}): ${n}`,...t)}}function Nn(n,...e){if(ln.logLevel<=Z.WARN){const t=e.map(ra);ln.warn(`Firestore (${qn}): ${n}`,...t)}}function ra(n){if(typeof n=="string")return n;try{/**
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
 */function q(n="Unexpected state"){const e=`FIRESTORE (${qn}) INTERNAL ASSERTION FAILED: `+n;throw yt(e),new Error(e)}function oe(n,e){n||q()}function W(n,e){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends wt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ph{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ve.UNAUTHENTICATED))}shutdown(){}}class x_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class D_{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){oe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new Ph(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Ve(e)}}class N_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class V_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new N_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){oe(this.o===void 0);const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(oe(typeof t.token=="string"),this.R=t.token,new O_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function L_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class kh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=L_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function re(n,e){return n<e?-1:n>e?1:0}function Vn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class Ie{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ie(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new Ie(0,0))}static max(){return new $(new Ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class br{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(),r===void 0?r=e.length-t:r>e.length-t&&q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return br.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof br?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ue extends br{construct(e,t,r){return new ue(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const F_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends br{construct(e,t,r){return new Se(e,t,r)}static isValidIdentifier(e){return F_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new L(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new L(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ue.fromString(e))}static fromName(e){return new B(ue.fromString(e).popFirst(5))}static empty(){return new B(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ue(e.slice()))}}function U_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new Ie(t+1,0):new Ie(t,r));return new qt(i,B.empty(),e)}function B_(n){return new qt(n.readTime,n.key,-1)}class qt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new qt($.min(),B.empty(),-1)}static max(){return new qt($.max(),B.empty(),-1)}}function j_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:re(n.largestBatchId,e.largestBatchId))}/**
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
 */const z_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fr(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==z_)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(i=>i?D.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new D((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new D((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function $_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ur(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ia{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ia.oe=-1;function rs(n){return n==null}function ji(n){return n===0&&1/n==-1/0}function W_(n){return typeof n=="number"&&Number.isInteger(n)&&!ji(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function xc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function dn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class fe{constructor(e,t){this.comparator=e,this.root=t||Re.EMPTY}insert(e,t){return new fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fi(this.root,e,this.comparator,!0)}}class fi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Re.RED,this.left=i??Re.EMPTY,this.right=s??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Re(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Re(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dc(this.data.getIterator())}getIteratorFrom(e){return new Dc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class Dc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qe{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new qe([])}unionWith(e){let t=new Ce(Se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Dh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Dh("Invalid base64 string: "+s):s}}(e);return new Pe(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const K_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(n){if(oe(!!n),typeof n=="string"){let e=0;const t=K_.exec(n);if(oe(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function cn(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
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
 */function sa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function oa(n){const e=n.mapValue.fields.__previous_value__;return sa(e)?oa(e):e}function Ar(n){const e=$t(n.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}/**
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
 */class H_{constructor(e,t,r,i,s,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Rr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pi={mapValue:{}};function un(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sa(n)?4:Q_(n)?9007199254740991:G_(n)?10:11:q()}function ot(n,e){if(n===e)return!0;const t=un(n);if(t!==un(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ar(n).isEqual(Ar(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=$t(i.timestampValue),l=$t(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return cn(i.bytesValue).isEqual(cn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ge(i.geoPointValue.latitude)===ge(s.geoPointValue.latitude)&&ge(i.geoPointValue.longitude)===ge(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ge(i.integerValue)===ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ge(i.doubleValue),l=ge(s.doubleValue);return a===l?ji(a)===ji(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Vn(n.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(xc(a)!==xc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ot(a[u],l[u])))return!1;return!0}(n,e);default:return q()}}function Sr(n,e){return(n.values||[]).find(t=>ot(t,e))!==void 0}function On(n,e){if(n===e)return 0;const t=un(n),r=un(e);if(t!==r)return re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return re(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=ge(s.integerValue||s.doubleValue),u=ge(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Nc(n.timestampValue,e.timestampValue);case 4:return Nc(Ar(n),Ar(e));case 5:return re(n.stringValue,e.stringValue);case 6:return function(s,a){const l=cn(s),u=cn(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=re(l[h],u[h]);if(f!==0)return f}return re(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=re(ge(s.latitude),ge(a.latitude));return l!==0?l:re(ge(s.longitude),ge(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Vc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const v=s.fields||{},m=a.fields||{},T=(l=v.value)===null||l===void 0?void 0:l.arrayValue,C=(u=m.value)===null||u===void 0?void 0:u.arrayValue,x=re(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Vc(T,C)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===pi.mapValue&&a===pi.mapValue)return 0;if(s===pi.mapValue)return 1;if(a===pi.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let v=0;v<u.length&&v<f.length;++v){const m=re(u[v],f[v]);if(m!==0)return m;const T=On(l[u[v]],h[f[v]]);if(T!==0)return T}return re(u.length,f.length)}(n.mapValue,e.mapValue);default:throw q()}}function Nc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return re(n,e);const t=$t(n),r=$t(e),i=re(t.seconds,r.seconds);return i!==0?i:re(t.nanos,r.nanos)}function Vc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=On(t[i],r[i]);if(s)return s}return re(t.length,r.length)}function Mn(n){return Ro(n)}function Ro(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=$t(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return cn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Ro(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Ro(t.fields[a])}`;return i+"}"}(n.mapValue):q()}function Oc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function So(n){return!!n&&"integerValue"in n}function aa(n){return!!n&&"arrayValue"in n}function Mc(n){return!!n&&"nullValue"in n}function Lc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ai(n){return!!n&&"mapValue"in n}function G_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function gr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return dn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=gr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Q_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ai(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gr(t)}setAll(e){let t=Se.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=gr(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ai(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ai(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){dn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Be(gr(this.value))}}function Nh(n){const e=[];return dn(n.fields,(t,r)=>{const i=new Se([t]);if(Ai(r)){const s=Nh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new qe(e)}/**
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
 */class Oe{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Oe(e,0,$.min(),$.min(),$.min(),Be.empty(),0)}static newFoundDocument(e,t,r,i){return new Oe(e,1,t,$.min(),r,i,0)}static newNoDocument(e,t){return new Oe(e,2,t,$.min(),$.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,$.min(),$.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zi{constructor(e,t){this.position=e,this.inclusive=t}}function Fc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=On(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Cr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Y_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Vh{}class Ee extends Vh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new X_(e,t,r):t==="array-contains"?new ty(e,r):t==="in"?new ny(e,r):t==="not-in"?new ry(e,r):t==="array-contains-any"?new iy(e,r):new Ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Z_(e,r):new ey(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(On(t,this.value)):t!==null&&un(this.value)===un(t)&&this.matchesComparison(On(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ye extends Vh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ye(e,t)}matches(e){return Oh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Oh(n){return n.op==="and"}function Mh(n){return J_(n)&&Oh(n)}function J_(n){for(const e of n.filters)if(e instanceof Ye)return!1;return!0}function Co(n){if(n instanceof Ee)return n.field.canonicalString()+n.op.toString()+Mn(n.value);if(Mh(n))return n.filters.map(e=>Co(e)).join(",");{const e=n.filters.map(t=>Co(t)).join(",");return`${n.op}(${e})`}}function Lh(n,e){return n instanceof Ee?function(r,i){return i instanceof Ee&&r.op===i.op&&r.field.isEqual(i.field)&&ot(r.value,i.value)}(n,e):n instanceof Ye?function(r,i){return i instanceof Ye&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Lh(a,i.filters[l]),!0):!1}(n,e):void q()}function Fh(n){return n instanceof Ee?function(t){return`${t.field.canonicalString()} ${t.op} ${Mn(t.value)}`}(n):n instanceof Ye?function(t){return t.op.toString()+" {"+t.getFilters().map(Fh).join(" ,")+"}"}(n):"Filter"}class X_ extends Ee{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class Z_ extends Ee{constructor(e,t){super(e,"in",t),this.keys=Uh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ey extends Ee{constructor(e,t){super(e,"not-in",t),this.keys=Uh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Uh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class ty extends Ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return aa(t)&&Sr(t.arrayValue,this.value)}}class ny extends Ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Sr(this.value.arrayValue,t)}}class ry extends Ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(Sr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Sr(this.value.arrayValue,t)}}class iy extends Ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!aa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Sr(this.value.arrayValue,r))}}/**
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
 */class sy{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Bc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new sy(n,e,t,r,i,s,a)}function la(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Co(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Mn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Mn(r)).join(",")),e.ue=t}return e.ue}function ca(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Y_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Lh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uc(n.startAt,e.startAt)&&Uc(n.endAt,e.endAt)}function Po(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class $n{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function oy(n,e,t,r,i,s,a,l){return new $n(n,e,t,r,i,s,a,l)}function is(n){return new $n(n)}function jc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bh(n){return n.collectionGroup!==null}function _r(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ce(Se.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Cr(s,r))}),t.has(Se.keyField().canonicalString())||e.ce.push(new Cr(Se.keyField(),r))}return e.ce}function it(n){const e=W(n);return e.le||(e.le=ay(e,_r(n))),e.le}function ay(n,e){if(n.limitType==="F")return Bc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Cr(i.field,s)});const t=n.endAt?new zi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zi(n.startAt.position,n.startAt.inclusive):null;return Bc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ko(n,e){const t=n.filters.concat([e]);return new $n(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function qi(n,e,t){return new $n(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ss(n,e){return ca(it(n),it(e))&&n.limitType===e.limitType}function jh(n){return`${la(it(n))}|lt:${n.limitType}`}function vn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Fh(i)).join(", ")}]`),rs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Mn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Mn(i)).join(",")),`Target(${r})`}(it(n))}; limitType=${n.limitType})`}function os(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of _r(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=Fc(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,_r(r),i)||r.endAt&&!function(a,l,u){const h=Fc(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,_r(r),i))}(n,e)}function ly(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zh(n){return(e,t)=>{let r=!1;for(const i of _r(n)){const s=cy(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cy(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?On(u,h):q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
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
 */class Wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){dn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return xh(this.inner)}size(){return this.innerSize}}/**
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
 */const uy=new fe(B.comparator);function vt(){return uy}const qh=new fe(B.comparator);function hr(...n){let e=qh;for(const t of n)e=e.insert(t.key,t);return e}function $h(n){let e=qh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Zt(){return yr()}function Wh(){return yr()}function yr(){return new Wn(n=>n.toString(),(n,e)=>n.isEqual(e))}const hy=new fe(B.comparator),dy=new Ce(B.comparator);function X(...n){let e=dy;for(const t of n)e=e.add(t);return e}const fy=new Ce(re);function py(){return fy}/**
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
 */function ua(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ji(e)?"-0":e}}function Kh(n){return{integerValue:""+n}}function my(n,e){return W_(e)?Kh(e):ua(n,e)}/**
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
 */class as{constructor(){this._=void 0}}function gy(n,e,t){return n instanceof Pr?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sa(s)&&(s=oa(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof kr?Gh(n,e):n instanceof xr?Qh(n,e):function(i,s){const a=Hh(i,s),l=zc(a)+zc(i.Pe);return So(a)&&So(i.Pe)?Kh(l):ua(i.serializer,l)}(n,e)}function _y(n,e,t){return n instanceof kr?Gh(n,e):n instanceof xr?Qh(n,e):t}function Hh(n,e){return n instanceof $i?function(r){return So(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pr extends as{}class kr extends as{constructor(e){super(),this.elements=e}}function Gh(n,e){const t=Yh(e);for(const r of n.elements)t.some(i=>ot(i,r))||t.push(r);return{arrayValue:{values:t}}}class xr extends as{constructor(e){super(),this.elements=e}}function Qh(n,e){let t=Yh(e);for(const r of n.elements)t=t.filter(i=>!ot(i,r));return{arrayValue:{values:t}}}class $i extends as{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function zc(n){return ge(n.integerValue||n.doubleValue)}function Yh(n){return aa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class yy{constructor(e,t){this.field=e,this.transform=t}}function vy(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof kr&&i instanceof kr||r instanceof xr&&i instanceof xr?Vn(r.elements,i.elements,ot):r instanceof $i&&i instanceof $i?ot(r.Pe,i.Pe):r instanceof Pr&&i instanceof Pr}(n.transform,e.transform)}class Ey{constructor(e,t){this.version=e,this.transformResults=t}}class Ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ri(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ls{}function Jh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ha(n.key,Ke.none()):new Br(n.key,n.data,Ke.none());{const t=n.data,r=Be.empty();let i=new Ce(Se.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Ht(n.key,r,new qe(i.toArray()),Ke.none())}}function wy(n,e,t){n instanceof Br?function(i,s,a){const l=i.value.clone(),u=$c(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ht?function(i,s,a){if(!Ri(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=$c(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Xh(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function vr(n,e,t,r){return n instanceof Br?function(s,a,l,u){if(!Ri(s.precondition,a))return l;const h=s.value.clone(),f=Wc(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ht?function(s,a,l,u){if(!Ri(s.precondition,a))return l;const h=Wc(s.fieldTransforms,u,a),f=a.data;return f.setAll(Xh(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(s,a,l){return Ri(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Iy(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Hh(r.transform,i||null);s!=null&&(t===null&&(t=Be.empty()),t.set(r.field,s))}return t||null}function qc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vn(r,i,(s,a)=>vy(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Br extends ls{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ht extends ls{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Xh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function $c(n,e,t){const r=new Map;oe(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,_y(a,l,t[i]))}return r}function Wc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,gy(s,a,e))}return r}class ha extends ls{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ty extends ls{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class by{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&wy(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=vr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=vr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Wh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=Jh(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&Vn(this.mutations,e.mutations,(t,r)=>qc(t,r))&&Vn(this.baseMutations,e.baseMutations,(t,r)=>qc(t,r))}}class da{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){oe(e.mutations.length===r.length);let i=function(){return hy}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new da(e,t,r,i)}}/**
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
 */class Ay{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ry{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ye,ee;function Sy(n){switch(n){default:return q();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Zh(n){if(n===void 0)return yt("GRPC error has no .code"),k.UNKNOWN;switch(n){case ye.OK:return k.OK;case ye.CANCELLED:return k.CANCELLED;case ye.UNKNOWN:return k.UNKNOWN;case ye.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ye.INTERNAL:return k.INTERNAL;case ye.UNAVAILABLE:return k.UNAVAILABLE;case ye.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ye.NOT_FOUND:return k.NOT_FOUND;case ye.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ye.ABORTED:return k.ABORTED;case ye.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ye.DATA_LOSS:return k.DATA_LOSS;default:return q()}}(ee=ye||(ye={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Cy(){return new TextEncoder}/**
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
 */const Py=new tn([4294967295,4294967295],0);function Kc(n){const e=Cy().encode(n),t=new Th;return t.update(e),new Uint8Array(t.digest())}function Hc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new tn([t,r],0),new tn([i,s],0)]}class fa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new dr(`Invalid padding: ${t}`);if(r<0)throw new dr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new dr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new dr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=tn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(tn.fromNumber(r)));return i.compare(Py)===1&&(i=new tn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Kc(e),[r,i]=Hc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new fa(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Kc(e),[r,i]=Hc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class dr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,jr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new cs($.min(),i,new fe(re),vt(),X())}}class jr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new jr(r,t,X(),X(),X())}}/**
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
 */class Si{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class ed{constructor(e,t){this.targetId=e,this.me=t}}class td{constructor(e,t,r=Pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Gc{constructor(){this.fe=0,this.ge=Yc(),this.pe=Pe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=X(),t=X(),r=X();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:q()}}),new jr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Yc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ky{constructor(e){this.Le=e,this.Be=new Map,this.ke=vt(),this.qe=Qc(),this.Qe=new fe(re)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Po(s))if(r===0){const a=new B(s.path);this.Ue(t,a,Oe.newNoDocument(a,$.min()))}else oe(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=cn(r).toUint8Array()}catch(u){if(u instanceof Dh)return Nn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new fa(a,i,s)}catch(u){return Nn(u instanceof dr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&Po(l.target)){const u=new B(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Oe.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=X();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new cs(e,t,this.Qe,this.ke,r);return this.ke=vt(),this.qe=Qc(),this.Qe=new fe(re),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Gc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ce(re),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Gc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Qc(){return new fe(B.comparator)}function Yc(){return new fe(B.comparator)}const xy={asc:"ASCENDING",desc:"DESCENDING"},Dy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ny={and:"AND",or:"OR"};class Vy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xo(n,e){return n.useProto3Json||rs(e)?e:{value:e}}function Wi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Oy(n,e){return Wi(n,e.toTimestamp())}function st(n){return oe(!!n),$.fromTimestamp(function(t){const r=$t(t);return new Ie(r.seconds,r.nanos)}(n))}function pa(n,e){return Do(n,e).canonicalString()}function Do(n,e){const t=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function rd(n){const e=ue.fromString(n);return oe(ld(e)),e}function No(n,e){return pa(n.databaseId,e.path)}function no(n,e){const t=rd(e);if(t.get(1)!==n.databaseId.projectId)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(sd(t))}function id(n,e){return pa(n.databaseId,e)}function My(n){const e=rd(n);return e.length===4?ue.emptyPath():sd(e)}function Vo(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sd(n){return oe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Jc(n,e,t){return{name:No(n,e),fields:t.value.mapValue.fields}}function Ly(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string"),Pe.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Pe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?k.UNKNOWN:Zh(h.code);return new L(f,h.message||"")}(a);t=new td(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=no(n,r.document.name),s=st(r.document.updateTime),a=r.document.createTime?st(r.document.createTime):$.min(),l=new Be({mapValue:{fields:r.document.fields}}),u=Oe.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Si(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=no(n,r.document),s=r.readTime?st(r.readTime):$.min(),a=Oe.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Si([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=no(n,r.document),s=r.removedTargetIds||[];t=new Si([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Ry(i,s),l=r.targetId;t=new ed(l,a)}}return t}function Fy(n,e){let t;if(e instanceof Br)t={update:Jc(n,e.key,e.value)};else if(e instanceof ha)t={delete:No(n,e.key)};else if(e instanceof Ht)t={update:Jc(n,e.key,e.data),updateMask:Hy(e.fieldMask)};else{if(!(e instanceof Ty))return q();t={verify:No(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Pr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof kr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof xr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof $i)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw q()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Oy(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(n,e.precondition)),t}function Uy(n,e){return n&&n.length>0?(oe(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?st(i.updateTime):st(s);return a.isEqual($.min())&&(a=st(s)),new Ey(a,i.transformResults||[])}(t,e))):[]}function By(n,e){return{documents:[id(n,e.path)]}}function jy(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=id(n,i);const s=function(h){if(h.length!==0)return ad(Ye.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:En(m.field),direction:$y(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=xo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function zy(n){let e=My(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){oe(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(v){const m=od(v);return m instanceof Ye&&Mh(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(v){return v.map(m=>function(C){return new Cr(wn(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(v){let m;return m=typeof v=="object"?v.value:v,rs(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(v){const m=!!v.before,T=v.values||[];return new zi(T,m)}(t.startAt));let h=null;return t.endAt&&(h=function(v){const m=!v.before,T=v.values||[];return new zi(T,m)}(t.endAt)),oy(e,i,a,s,l,"F",u,h)}function qy(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function od(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=wn(t.unaryFilter.field);return Ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=wn(t.unaryFilter.field);return Ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wn(t.unaryFilter.field);return Ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=wn(t.unaryFilter.field);return Ee.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(t){return Ee.create(wn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ye.create(t.compositeFilter.filters.map(r=>od(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(n):q()}function $y(n){return xy[n]}function Wy(n){return Dy[n]}function Ky(n){return Ny[n]}function En(n){return{fieldPath:n.canonicalString()}}function wn(n){return Se.fromServerFormat(n.fieldPath)}function ad(n){return n instanceof Ee?function(t){if(t.op==="=="){if(Lc(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NAN"}};if(Mc(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lc(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NAN"}};if(Mc(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(t.field),op:Wy(t.op),value:t.value}}}(n):n instanceof Ye?function(t){const r=t.getFilters().map(i=>ad(i));return r.length===1?r[0]:{compositeFilter:{op:Ky(t.op),filters:r}}}(n):q()}function Hy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ld(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ft{constructor(e,t,r,i,s=$.min(),a=$.min(),l=Pe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Gy{constructor(e){this.ct=e}}function Qy(n){const e=zy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qi(e,e.limit,"L"):e}/**
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
 */class Yy{constructor(){this.un=new Jy}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(qt.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Jy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ce(ue.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ce(ue.comparator)).toArray()}}/**
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
 */class Ln{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ln(0)}static kn(){return new Ln(-1)}}/**
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
 */class Xy{constructor(){this.changes=new Wn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Zy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ev{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&vr(r.mutation,i,qe.empty(),Ie.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const i=Zt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=hr();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=vt();const a=yr(),l=function(){return yr()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ht)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),vr(f.mutation,h,f.mutation.getFieldMask(),Ie.now())):a.set(h.key,qe.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var v;return l.set(h,new Zy(f,(v=a.get(h))!==null&&v!==void 0?v:null))}),l))}recalculateAndSaveOverlays(e,t){const r=yr();let i=new fe((a,l)=>a-l),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||qe.empty();f=l.applyToLocalView(h,f),r.set(u,f);const v=(i.get(l.batchId)||X()).add(u);i=i.insert(l.batchId,v)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,v=Wh();f.forEach(m=>{if(!s.has(m)){const T=Jh(t.get(m),r.get(m));T!==null&&v.set(m,T),s=s.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,v))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(Zt());let l=-1,u=s;return a.next(h=>D.forEach(h,(f,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),s.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,X())).next(f=>({batchId:l,changes:$h(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let i=hr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=hr();return this.indexManager.getCollectionParents(e,s).next(l=>D.forEach(l,u=>{const h=function(v,m){return new $n(m,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((v,m)=>{a=a.insert(v,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Oe.newInvalidDocument(f)))});let l=hr();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&vr(f.mutation,h,qe.empty(),Ie.now()),os(t,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class tv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:st(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Qy(i.bundledQuery),readTime:st(i.readTime)}}(t)),D.resolve()}}/**
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
 */class nv{constructor(){this.overlays=new fe(B.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Zt();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=Zt(),s=t.length+1,a=new B(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new fe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Zt(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Zt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return D.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ay(t,r));let s=this.Ir.get(t);s===void 0&&(s=X(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class rv{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class ma{constructor(){this.Tr=new Ce(be.Er),this.dr=new Ce(be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new be(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new be(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new B(new ue([])),r=new be(t,e),i=new be(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new ue([])),r=new be(t,e),i=new be(t,e+1);let s=X();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new be(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||re(e.wr,t.wr)}static Ar(e,t){return re(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
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
 */class iv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ce(be.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new by(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new be(t,0),i=new be(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ce(re);return t.forEach(i=>{const s=new be(i,0),a=new be(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const a=new be(new B(s),0);let l=new Ce(re);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),D.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){oe(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,i=>{const s=new be(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new be(t,0),i=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class sv{constructor(e){this.Mr=e,this.docs=function(){return new fe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=vt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Oe.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=vt();const a=t.path,l=new B(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||j_(B_(f),r)<=0||(i.has(f.key)||os(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){q()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ov(this)}getSize(e){return D.resolve(this.size)}}class ov extends Xy{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class av{constructor(e){this.persistence=e,this.Nr=new Wn(t=>la(t),ca),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ma,this.targetCount=0,this.kr=Ln.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Ln(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
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
 */class lv{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ia(0),this.Kr=!1,this.Kr=!0,this.$r=new rv,this.referenceDelegate=e(this),this.Ur=new av(this),this.indexManager=new Yy,this.remoteDocumentCache=function(i){return new sv(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Gy(t),this.Gr=new tv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new iv(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const i=new cv(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class cv extends q_{constructor(e){super(),this.currentSequenceNumber=e}}class ga{constructor(e){this.persistence=e,this.Jr=new ma,this.Yr=null}static Zr(e){return new ga(e)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=B.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,$.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class _a{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=X(),i=X();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _a(e,t.fromCache,r,i)}}/**
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
 */class uv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class hv{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Jf()?8:$_(Le())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new uv;return this.Xi(e,t,a).next(l=>{if(s.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(ar()<=Z.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",vn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(ar()<=Z.DEBUG&&F("QueryEngine","Query:",vn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ar()<=Z.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",vn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,it(t))):D.resolve())}Yi(e,t){if(jc(t))return D.resolve(null);let r=it(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=qi(t,null,"F"),r=it(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=X(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(t,l);return this.ns(t,h,a,u.readTime)?this.Yi(e,qi(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,i){return jc(t)||i.isEqual($.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(t,s);return this.ns(t,a,r,i)?D.resolve(null):(ar()<=Z.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vn(t)),this.rs(e,a,t,U_(i,-1)).next(l=>l))})}ts(e,t){let r=new Ce(zh(e));return t.forEach((i,s)=>{os(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return ar()<=Z.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",vn(t)),this.Ji.getDocumentsMatchingQuery(e,t,qt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class dv{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new fe(re),this._s=new Wn(s=>la(s),ca),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ev(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function fv(n,e,t,r){return new dv(n,e,t,r)}async function cd(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=X();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function pv(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const v=h.batch,m=v.keys();let T=D.resolve();return m.forEach(C=>{T=T.next(()=>f.getEntry(u,C)).next(x=>{const P=h.docVersions.get(C);oe(P!==null),x.version.compareTo(P)<0&&(v.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,v))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=X();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function ud(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function mv(n,e){const t=W(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,v)=>{const m=i.get(v);if(!m)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,v).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,v)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(v)!==null?T=T.withResumeToken(Pe.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(v,T),function(x,P,N){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,T,f)&&l.push(t.Ur.updateTargetData(s,T))});let u=vt(),h=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(gv(s,a,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual($.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(v=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return D.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.os=i,s))}function gv(n,e,t){let r=X(),i=X();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=vt();return t.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual($.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):F("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function _v(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yv(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Ft(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Oo(n,e,t){const r=W(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Ur(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Xc(n,e,t){const r=W(n);let i=$.min(),s=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const v=W(u),m=v._s.get(f);return m!==void 0?D.resolve(v.os.get(m)):v.Ur.getTargetData(h,f)}(r,a,it(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:$.min(),t?s:X())).next(l=>(vv(r,ly(e),l),{documents:l,Ts:s})))}function vv(n,e,t){let r=n.us.get(e)||$.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class Zc{constructor(){this.activeTargetIds=py()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ev{constructor(){this.so=new Zc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Zc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wv{_o(e){}shutdown(){}}/**
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
 */class eu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mi=null;function ro(){return mi===null?mi=function(){return 268435456+Math.round(2147483648*Math.random())}():mi++,"0x"+mi.toString(16)}/**
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
 */const Iv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Tv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ne="WebChannelConnection";class bv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){const l=ro(),u=this.xo(t,r.toUriEncodedString());F("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(t,u,h,i).then(f=>(F("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Nn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,a,l){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){const i=Iv[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=ro();return new Promise((a,l)=>{const u=new bh;u.setWithCredentials(!0),u.listenOnce(Ah.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case bi.NO_ERROR:const f=u.getResponseJson();F(Ne,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case bi.TIMEOUT:F(Ne,`RPC '${e}' ${s} timed out`),l(new L(k.DEADLINE_EXCEEDED,"Request time out"));break;case bi.HTTP_ERROR:const v=u.getStatus();if(F(Ne,`RPC '${e}' ${s} failed with status:`,v,"response text:",u.getResponseText()),v>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const C=function(P){const N=P.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(N)>=0?N:k.UNKNOWN}(T.status);l(new L(C,T.message))}else l(new L(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new L(k.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{F(Ne,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);F(Ne,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}Bo(e,t,r){const i=ro(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ch(),l=Sh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");F(Ne,`Creating RPC '${e}' stream ${i}: ${f}`,u);const v=a.createWebChannel(f,u);let m=!1,T=!1;const C=new Tv({Io:P=>{T?F(Ne,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(F(Ne,`Opening RPC '${e}' stream ${i} transport.`),v.open(),m=!0),F(Ne,`RPC '${e}' stream ${i} sending:`,P),v.send(P))},To:()=>v.close()}),x=(P,N,M)=>{P.listen(N,U=>{try{M(U)}catch(Q){setTimeout(()=>{throw Q},0)}})};return x(v,ur.EventType.OPEN,()=>{T||(F(Ne,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),x(v,ur.EventType.CLOSE,()=>{T||(T=!0,F(Ne,`RPC '${e}' stream ${i} transport closed`),C.So())}),x(v,ur.EventType.ERROR,P=>{T||(T=!0,Nn(Ne,`RPC '${e}' stream ${i} transport errored:`,P),C.So(new L(k.UNAVAILABLE,"The operation could not be completed")))}),x(v,ur.EventType.MESSAGE,P=>{var N;if(!T){const M=P.data[0];oe(!!M);const U=M,Q=U.error||((N=U[0])===null||N===void 0?void 0:N.error);if(Q){F(Ne,`RPC '${e}' stream ${i} received error:`,Q);const G=Q.status;let J=function(g){const E=ye[g];if(E!==void 0)return Zh(E)}(G),b=Q.message;J===void 0&&(J=k.INTERNAL,b="Unknown error status: "+G+" with message "+Q.message),T=!0,C.So(new L(J,b)),v.close()}else F(Ne,`RPC '${e}' stream ${i} received:`,M),C.bo(M)}}),x(l,Rh.STAT_EVENT,P=>{P.stat===Ao.PROXY?F(Ne,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Ao.NOPROXY&&F(Ne,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function io(){return typeof document<"u"?document:null}/**
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
 */function us(n){return new Vy(n,!0)}/**
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
 */class hd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class dd{constructor(e,t,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new hd(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(yt(t.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new L(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Av extends dd{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Ly(this.serializer,e),r=function(s){if(!("targetChange"in s))return $.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?st(a.readTime):$.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Vo(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=Po(u)?{documents:By(s,u)}:{query:jy(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=nd(s,a.resumeToken);const h=xo(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo($.min())>0){l.readTime=Wi(s,a.snapshotVersion.toTimestamp());const h=xo(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=qy(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Vo(this.serializer),t.removeTarget=e,this.a_(t)}}class Rv extends dd{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return oe(!!e.streamToken),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Uy(e.writeResults,e.commitTime),r=st(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Vo(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Fy(this.serializer,r))};this.a_(t)}}/**
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
 */class Sv extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Do(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(k.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Do(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(k.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Cv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(yt(t),this.D_=!1):F("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Pv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{fn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=W(u);h.L_.add(4),await zr(h),h.q_.set("Unknown"),h.L_.delete(4),await hs(h)}(this))})}),this.q_=new Cv(r,i)}}async function hs(n){if(fn(n))for(const e of n.B_)await e(!0)}async function zr(n){for(const e of n.B_)await e(!1)}function fd(n,e){const t=W(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),wa(t)?Ea(t):Kn(t).r_()&&va(t,e))}function ya(n,e){const t=W(n),r=Kn(t);t.N_.delete(e),r.r_()&&pd(t,e),t.N_.size===0&&(r.r_()?r.o_():fn(t)&&t.q_.set("Unknown"))}function va(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Kn(n).A_(e)}function pd(n,e){n.Q_.xe(e),Kn(n).R_(e)}function Ea(n){n.Q_=new ky({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Kn(n).start(),n.q_.v_()}function wa(n){return fn(n)&&!Kn(n).n_()&&n.N_.size>0}function fn(n){return W(n).L_.size===0}function md(n){n.Q_=void 0}async function kv(n){n.q_.set("Online")}async function xv(n){n.N_.forEach((e,t)=>{va(n,e)})}async function Dv(n,e){md(n),wa(n)?(n.q_.M_(e),Ea(n)):n.q_.set("Unknown")}async function Nv(n,e,t){if(n.q_.set("Online"),e instanceof td&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ki(n,r)}else if(e instanceof Si?n.Q_.Ke(e):e instanceof ed?n.Q_.He(e):n.Q_.We(e),!t.isEqual($.min()))try{const r=await ud(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Pe.EMPTY_BYTE_STRING,f.snapshotVersion)),pd(s,u);const v=new Ft(f.target,u,h,f.sequenceNumber);va(s,v)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Ki(n,r)}}async function Ki(n,e,t){if(!Ur(e))throw e;n.L_.add(1),await zr(n),n.q_.set("Offline"),t||(t=()=>ud(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await hs(n)})}function gd(n,e){return e().catch(t=>Ki(n,t,e))}async function ds(n){const e=W(n),t=Wt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Vv(e);)try{const i=await _v(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,Ov(e,i)}catch(i){await Ki(e,i)}_d(e)&&yd(e)}function Vv(n){return fn(n)&&n.O_.length<10}function Ov(n,e){n.O_.push(e);const t=Wt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function _d(n){return fn(n)&&!Wt(n).n_()&&n.O_.length>0}function yd(n){Wt(n).start()}async function Mv(n){Wt(n).p_()}async function Lv(n){const e=Wt(n);for(const t of n.O_)e.m_(t.mutations)}async function Fv(n,e,t){const r=n.O_.shift(),i=da.from(r,e,t);await gd(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ds(n)}async function Uv(n,e){e&&Wt(n).V_&&await async function(r,i){if(function(a){return Sy(a)&&a!==k.ABORTED}(i.code)){const s=r.O_.shift();Wt(r).s_(),await gd(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ds(r)}}(n,e),_d(n)&&yd(n)}async function tu(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=fn(t);t.L_.add(3),await zr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await hs(t)}async function Bv(n,e){const t=W(n);e?(t.L_.delete(2),await hs(t)):e||(t.L_.add(2),await zr(t),t.q_.set("Unknown"))}function Kn(n){return n.K_||(n.K_=function(t,r,i){const s=W(t);return s.w_(),new Av(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:kv.bind(null,n),Ro:xv.bind(null,n),mo:Dv.bind(null,n),d_:Nv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),wa(n)?Ea(n):n.q_.set("Unknown")):(await n.K_.stop(),md(n))})),n.K_}function Wt(n){return n.U_||(n.U_=function(t,r,i){const s=W(t);return s.w_(),new Rv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Mv.bind(null,n),mo:Uv.bind(null,n),f_:Lv.bind(null,n),g_:Fv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await ds(n)):(await n.U_.stop(),n.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ia{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new Ia(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(n,e){if(yt("AsyncQueue",`${e}: ${n}`),Ur(n))return new L(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Cn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=hr(),this.sortedSet=new fe(this.comparator)}static emptySet(e){return new Cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Cn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class nu{constructor(){this.W_=new fe(B.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Fn{constructor(e,t,r,i,s,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Fn(e,t,Cn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ss(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class jv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class zv{constructor(){this.queries=ru(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=W(t),s=i.queries;i.queries=ru(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new L(k.ABORTED,"Firestore shutting down"))}}function ru(){return new Wn(n=>jh(n),ss)}async function ba(n,e){const t=W(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new jv,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Ta(a,`Initialization of query '${vn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Ra(t)}async function Aa(n,e){const t=W(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qv(n,e){const t=W(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Ra(t)}function $v(n,e,t){const r=W(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Ra(n){n.Y_.forEach(e=>{e.next()})}var Mo,iu;(iu=Mo||(Mo={})).ea="default",iu.Cache="cache";class Sa{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Fn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Mo.Cache}}/**
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
 */class vd{constructor(e){this.key=e}}class Ed{constructor(e){this.key=e}}class Wv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=zh(e),this.Ra=new Cn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new nu,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,v)=>{const m=i.get(f),T=os(this.query,v)?v:null,C=!!m&&this.mutatedKeys.has(m.key),x=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;m&&T?m.data.isEqual(T.data)?C!==x&&(r.track({type:3,doc:T}),P=!0):this.ga(m,T)||(r.track({type:2,doc:T}),P=!0,(u&&this.Aa(T,u)>0||h&&this.Aa(T,h)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),P=!0):m&&!T&&(r.track({type:1,doc:m}),P=!0,(u||h)&&(l=!0)),P&&(T?(a=a.add(T),s=x?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,v)=>function(T,C){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return x(T)-x(C)}(f.type,v.type)||this.Aa(f.doc,v.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new Fn(this.query,e.Ra,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new nu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=X(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Ed(r))}),this.da.forEach(r=>{e.has(r)||t.push(new vd(r))}),t}ba(e){this.Ta=e.Ts,this.da=X();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Fn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Kv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Hv{constructor(e){this.key=e,this.va=!1}}class Gv{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Wn(l=>jh(l),ss),this.Ma=new Map,this.xa=new Set,this.Oa=new fe(B.comparator),this.Na=new Map,this.La=new ma,this.Ba={},this.ka=new Map,this.qa=Ln.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Qv(n,e,t=!0){const r=Rd(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await wd(r,e,t,!0),i}async function Yv(n,e){const t=Rd(n);await wd(t,e,!0,!1)}async function wd(n,e,t,r){const i=await yv(n.localStore,it(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await Jv(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&fd(n.remoteStore,i),l}async function Jv(n,e,t,r,i){n.Ka=(v,m,T)=>async function(x,P,N,M){let U=P.view.ma(N);U.ns&&(U=await Xc(x.localStore,P.query,!1).then(({documents:b})=>P.view.ma(b,U)));const Q=M&&M.targetChanges.get(P.targetId),G=M&&M.targetMismatches.get(P.targetId)!=null,J=P.view.applyChanges(U,x.isPrimaryClient,Q,G);return ou(x,P.targetId,J.wa),J.snapshot}(n,v,m,T);const s=await Xc(n.localStore,e,!0),a=new Wv(e,s.Ts),l=a.ma(s.documents),u=jr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,u);ou(n,t,h.wa);const f=new Kv(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function Xv(n,e,t){const r=W(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!ss(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Oo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ya(r.remoteStore,i.targetId),Lo(r,i.targetId)}).catch(Fr)):(Lo(r,i.targetId),await Oo(r.localStore,i.targetId,!0))}async function Zv(n,e){const t=W(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ya(t.remoteStore,r.targetId))}async function eE(n,e,t){const r=aE(n);try{const i=await function(a,l){const u=W(a),h=Ie.now(),f=l.reduce((T,C)=>T.add(C.key),X());let v,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let C=vt(),x=X();return u.cs.getEntries(T,f).next(P=>{C=P,C.forEach((N,M)=>{M.isValidDocument()||(x=x.add(N))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,C)).next(P=>{v=P;const N=[];for(const M of l){const U=Iy(M,v.get(M.key).overlayedDocument);U!=null&&N.push(new Ht(M.key,U,Nh(U.value.mapValue),Ke.exists(!0)))}return u.mutationQueue.addMutationBatch(T,h,N,l)}).next(P=>{m=P;const N=P.applyToLocalDocumentSet(v,x);return u.documentOverlayCache.saveOverlays(T,P.batchId,N)})}).then(()=>({batchId:m.batchId,changes:$h(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new fe(re)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,t),await qr(r,i.changes),await ds(r.remoteStore)}catch(i){const s=Ta(i,"Failed to persist write");t.reject(s)}}async function Id(n,e){const t=W(n);try{const r=await mv(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?oe(a.va):i.removedDocuments.size>0&&(oe(a.va),a.va=!1))}),await qr(t,r,e)}catch(r){await Fr(r)}}function su(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=W(a);u.onlineState=l;let h=!1;u.queries.forEach((f,v)=>{for(const m of v.j_)m.Z_(l)&&(h=!0)}),h&&Ra(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tE(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new fe(B.comparator);a=a.insert(s,Oe.newNoDocument(s,$.min()));const l=X().add(s),u=new cs($.min(),new Map,new fe(re),a,l);await Id(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ca(r)}else await Oo(r.localStore,e,!1).then(()=>Lo(r,e,t)).catch(Fr)}async function nE(n,e){const t=W(n),r=e.batch.batchId;try{const i=await pv(t.localStore,e);bd(t,r,null),Td(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await qr(t,i)}catch(i){await Fr(i)}}async function rE(n,e,t){const r=W(n);try{const i=await function(a,l){const u=W(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(v=>(oe(v!==null),f=v.keys(),u.mutationQueue.removeMutationBatch(h,v))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);bd(r,e,t),Td(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await qr(r,i)}catch(i){await Fr(i)}}function Td(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function bd(n,e,t){const r=W(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Lo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Ad(n,r)})}function Ad(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(ya(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Ca(n))}function ou(n,e,t){for(const r of t)r instanceof vd?(n.La.addReference(r.key,e),iE(n,r)):r instanceof Ed?(F("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Ad(n,r.key)):q()}function iE(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(F("SyncEngine","New document in limbo: "+t),n.xa.add(r),Ca(n))}function Ca(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new B(ue.fromString(e)),r=n.qa.next();n.Na.set(r,new Hv(t)),n.Oa=n.Oa.insert(t,r),fd(n.remoteStore,new Ft(it(is(t.path)),r,"TargetPurposeLimboResolution",ia.oe))}}async function qr(n,e,t){const r=W(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const v=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,v?"current":"not-current")}if(h){i.push(h);const v=_a.Wi(u.targetId,h);s.push(v)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=W(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>D.forEach(h,m=>D.forEach(m.$i,T=>f.persistence.referenceDelegate.addReference(v,m.targetId,T)).next(()=>D.forEach(m.Ui,T=>f.persistence.referenceDelegate.removeReference(v,m.targetId,T)))))}catch(v){if(!Ur(v))throw v;F("LocalStore","Failed to update sequence numbers: "+v)}for(const v of h){const m=v.targetId;if(!v.fromCache){const T=f.os.get(m),C=T.snapshotVersion,x=T.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(m,x)}}}(r.localStore,s))}async function sE(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await cd(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new L(k.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qr(t,r.hs)}}function oE(n,e){const t=W(n),r=t.Na.get(e);if(r&&r.va)return X().add(r.key);{let i=X();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function Rd(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Id.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tE.bind(null,e),e.Ca.d_=qv.bind(null,e.eventManager),e.Ca.$a=$v.bind(null,e.eventManager),e}function aE(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rE.bind(null,e),e}class Hi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=us(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return fv(this.persistence,new hv,e.initialUser,this.serializer)}Ga(e){return new lv(ga.Zr,this.serializer)}Wa(e){return new Ev}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hi.provider={build:()=>new Hi};class Fo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>su(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sE.bind(null,this.syncEngine),await Bv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zv}()}createDatastore(e){const t=us(e.databaseInfo.databaseId),r=function(s){return new bv(s)}(e.databaseInfo);return function(s,a,l,u){return new Sv(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new Pv(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>su(this.syncEngine,t,0),function(){return eu.D()?new eu:new wv}())}createSyncEngine(e,t){return function(i,s,a,l,u,h,f){const v=new Gv(i,s,a,l,u,h);return f&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=W(i);F("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await zr(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Fo.provider={build:()=>new Fo};/**
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
 */class Pa{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):yt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class lE{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ve.UNAUTHENTICATED,this.clientId=kh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ta(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function so(n,e){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function au(n,e){n.asyncQueue.verifyOperationInProgress();const t=await cE(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>tu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>tu(e.remoteStore,i)),n._onlineComponents=e}async function cE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await so(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Nn("Error using user provided cache. Falling back to memory cache: "+t),await so(n,new Hi)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await so(n,new Hi);return n._offlineComponents}async function Sd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await au(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await au(n,new Fo))),n._onlineComponents}function uE(n){return Sd(n).then(e=>e.syncEngine)}async function Gi(n){const e=await Sd(n),t=e.eventManager;return t.onListen=Qv.bind(null,e.syncEngine),t.onUnlisten=Xv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Yv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Zv.bind(null,e.syncEngine),t}function hE(n,e,t={}){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new Pa({next:m=>{f.Za(),a.enqueueAndForget(()=>Aa(s,v));const T=m.docs.has(l);!T&&m.fromCache?h.reject(new L(k.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?h.reject(new L(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),v=new Sa(is(l.path),f,{includeMetadataChanges:!0,_a:!0});return ba(s,v)}(await Gi(n),n.asyncQueue,e,t,r)),r.promise}function dE(n,e,t={}){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new Pa({next:m=>{f.Za(),a.enqueueAndForget(()=>Aa(s,v)),m.fromCache&&u.source==="server"?h.reject(new L(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),v=new Sa(l,f,{includeMetadataChanges:!0,_a:!0});return ba(s,v)}(await Gi(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Cd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const lu=new Map;/**
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
 */function Pd(n,e,t){if(!t)throw new L(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fE(n,e,t,r){if(e===!0&&r===!0)throw new L(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cu(n){if(!B.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uu(n){if(B.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function fs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q()}function je(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fs(n);throw new L(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function pE(n,e){if(e<=0)throw new L(k.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class hu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ps{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new k_;switch(r.type){case"firstParty":return new V_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=lu.get(t);r&&(F("ComponentProvider","Removing Datastore"),lu.delete(t),r.terminate())}(this),Promise.resolve()}}function mE(n,e,t,r={}){var i;const s=(n=je(n,ps))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ve.MOCK_USER;else{l=$f(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new L(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ve(h)}n._authCredentials=new x_(new Ph(l,u))}}/**
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
 */class Tt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tt(this.firestore,e,this._query)}}class Me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class zt extends Tt{constructor(e,t,r){super(e,t,is(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new B(e))}withConverter(e){return new zt(this.firestore,e,this._path)}}function Ze(n,e,...t){if(n=we(n),Pd("collection","path",e),n instanceof ps){const r=ue.fromString(e,...t);return uu(r),new zt(n,null,r)}{if(!(n instanceof Me||n instanceof zt))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return uu(r),new zt(n.firestore,null,r)}}function We(n,e,...t){if(n=we(n),arguments.length===1&&(e=kh.newId()),Pd("doc","path",e),n instanceof ps){const r=ue.fromString(e,...t);return cu(r),new Me(n,null,new B(r))}{if(!(n instanceof Me||n instanceof zt))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return cu(r),new Me(n.firestore,n instanceof zt?n.converter:null,new B(r))}}/**
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
 */class du{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new hd(this,"async_queue_retry"),this.Vu=()=>{const r=io();r&&F("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new mt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ur(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw yt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Ia.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function fu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Et extends ps{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new du,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new du(e),this._firestoreClient=void 0,await e}}}function gE(n,e){const t=typeof n=="object"?n:Bu(),r=typeof n=="string"?n:"(default)",i=Ho(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zf("firestore");s&&mE(i,...s)}return i}function ms(n){if(n._terminated)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_E(n),n._firestoreClient}function _E(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,h,f){return new H_(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Cd(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new lE(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(Pe.fromBase64String(e))}catch(t){throw new L(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Un(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _s{constructor(e){this._methodName=e}}/**
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
 */class ka{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
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
 */class xa{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const yE=/^__.*__$/;class vE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms):new Br(e,this.data,t,this.fieldTransforms)}}class kd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Da{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Da(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Qi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(xd(this.Cu)&&yE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class EE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||us(e)}Qu(e,t,r,i=!1){return new Da({Cu:e,methodName:t,qu:r,path:Se.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ys(n){const e=n._freezeSettings(),t=us(n._databaseId);return new EE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Dd(n,e,t,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);Va("Data must be an object, but it was:",a,r);const l=Nd(r,a);let u,h;if(s.merge)u=new qe(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const v of s.mergeFields){const m=Uo(e,v,t);if(!a.contains(m))throw new L(k.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Od(f,m)||f.push(m)}u=new qe(f),h=a.fieldTransforms.filter(v=>u.covers(v.field))}else u=null,h=a.fieldTransforms;return new vE(new Be(l),u,h)}class vs extends _s{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vs}}class Na extends _s{_toFieldTransform(e){return new yy(e.path,new Pr)}isEqual(e){return e instanceof Na}}function wE(n,e,t,r){const i=n.Qu(1,e,t);Va("Data must be an object, but it was:",i,r);const s=[],a=Be.empty();dn(r,(u,h)=>{const f=Oa(e,u,t);h=we(h);const v=i.Nu(f);if(h instanceof vs)s.push(f);else{const m=$r(h,v);m!=null&&(s.push(f),a.set(f,m))}});const l=new qe(s);return new kd(a,l,i.fieldTransforms)}function IE(n,e,t,r,i,s){const a=n.Qu(1,e,t),l=[Uo(e,r,t)],u=[i];if(s.length%2!=0)throw new L(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Uo(e,s[m])),u.push(s[m+1]);const h=[],f=Be.empty();for(let m=l.length-1;m>=0;--m)if(!Od(h,l[m])){const T=l[m];let C=u[m];C=we(C);const x=a.Nu(T);if(C instanceof vs)h.push(T);else{const P=$r(C,x);P!=null&&(h.push(T),f.set(T,P))}}const v=new qe(h);return new kd(f,v,a.fieldTransforms)}function TE(n,e,t,r=!1){return $r(t,n.Qu(r?4:3,e))}function $r(n,e){if(Vd(n=we(n)))return Va("Unsupported field value:",e,n),Nd(n,e);if(n instanceof _s)return function(r,i){if(!xd(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=$r(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return my(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ie.fromDate(r);return{timestampValue:Wi(i.serializer,s)}}if(r instanceof Ie){const s=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wi(i.serializer,s)}}if(r instanceof ka)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Un)return{bytesValue:nd(i.serializer,r._byteString)};if(r instanceof Me){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:pa(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof xa)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ua(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${fs(r)}`)}(n,e)}function Nd(n,e){const t={};return xh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dn(n,(r,i)=>{const s=$r(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Vd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ie||n instanceof ka||n instanceof Un||n instanceof Me||n instanceof _s||n instanceof xa)}function Va(n,e,t){if(!Vd(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=fs(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Uo(n,e,t){if((e=we(e))instanceof gs)return e._internalPath;if(typeof e=="string")return Oa(n,e);throw Qi("Field path arguments must be of type string or ",n,!1,void 0,t)}const bE=new RegExp("[~\\*/\\[\\]]");function Oa(n,e,t){if(e.search(bE)>=0)throw Qi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new gs(...e.split("."))._internalPath}catch{throw Qi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Qi(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new L(k.INVALID_ARGUMENT,l+n+u)}function Od(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Md{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Es("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class AE extends Md{data(){return super.data()}}function Es(n,e){return typeof e=="string"?Oa(n,e):e instanceof gs?e._internalPath:e._delegate._internalPath}/**
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
 */function Ld(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ma{}class La extends Ma{}function Mt(n,e,...t){let r=[];e instanceof Ma&&r.push(e),r=r.concat(t),function(s){const a=s.filter(u=>u instanceof Fa).length,l=s.filter(u=>u instanceof ws).length;if(a>1||a>0&&l>0)throw new L(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ws extends La{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ws(e,t,r)}_apply(e){const t=this._parse(e);return Fd(e._query,t),new Tt(e.firestore,e.converter,ko(e._query,t))}_parse(e){const t=ys(e.firestore);return function(s,a,l,u,h,f,v){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){mu(v,f);const T=[];for(const C of v)T.push(pu(u,s,C));m={arrayValue:{values:T}}}else m=pu(u,s,v)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||mu(v,f),m=TE(l,a,v,f==="in"||f==="not-in");return Ee.create(h,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function xt(n,e,t){const r=e,i=Es("where",n);return ws._create(i,r,t)}class Fa extends Ma{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Fa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ye.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)Fd(a,u),a=ko(a,u)}(e._query,t),new Tt(e.firestore,e.converter,ko(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ua extends La{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ua(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new L(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cr(s,a)}(e._query,this._field,this._direction);return new Tt(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new $n(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function RE(n,e="asc"){const t=e,r=Es("orderBy",n);return Ua._create(r,t)}class Ba extends La{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ba(e,t,r)}_apply(e){return new Tt(e.firestore,e.converter,qi(e._query,this._limit,this._limitType))}}function SE(n){return pE("limit",n),Ba._create("limit",n,"F")}function pu(n,e,t){if(typeof(t=we(t))=="string"){if(t==="")throw new L(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bh(e)&&t.indexOf("/")!==-1)throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ue.fromString(t));if(!B.isDocumentKey(r))throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Oc(n,new B(r))}if(t instanceof Me)return Oc(n,t._key);throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fs(t)}.`)}function mu(n,e){if(!Array.isArray(n)||n.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fd(n,e){const t=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class CE{convertValue(e,t="none"){switch(un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(cn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return dn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ge(a.doubleValue));return new xa(s)}convertGeoPoint(e){return new ka(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=oa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ar(e));default:return null}}convertTimestamp(e){const t=$t(e);return new Ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ue.fromString(e);oe(ld(r));const i=new Rr(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(t)||yt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Ud(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class fr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bd extends Md{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ci(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Es("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ci extends Bd{data(e={}){return super.data(e)}}class jd{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new fr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ci(this._firestore,this._userDataWriter,r.key,r,new fr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new Ci(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ci(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:PE(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function PE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function oo(n){n=je(n,Me);const e=je(n.firestore,Et);return hE(ms(e),n._key).then(t=>qd(e,n,t))}class ja extends CE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}function In(n){n=je(n,Tt);const e=je(n.firestore,Et),t=ms(e),r=new ja(e);return Ld(n._query),dE(t,n._query).then(i=>new jd(e,r,n,i))}function Pn(n,e,t){n=je(n,Me);const r=je(n.firestore,Et),i=Ud(n.converter,e,t);return Is(r,[Dd(ys(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ke.none())])}function kE(n,e,t,...r){n=je(n,Me);const i=je(n.firestore,Et),s=ys(i);let a;return a=typeof(e=we(e))=="string"||e instanceof gs?IE(s,"updateDoc",n._key,e,t,r):wE(s,"updateDoc",n._key,e),Is(i,[a.toMutation(n._key,Ke.exists(!0))])}function xE(n){return Is(je(n.firestore,Et),[new ha(n._key,Ke.none())])}function zd(n,e){const t=je(n.firestore,Et),r=We(n),i=Ud(n.converter,e);return Is(t,[Dd(ys(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ke.exists(!1))]).then(()=>r)}function za(n,...e){var t,r,i;n=we(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||fu(e[a])||(s=e[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(fu(e[a])){const v=e[a];e[a]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[a+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[a+2]=(i=v.complete)===null||i===void 0?void 0:i.bind(v)}let u,h,f;if(n instanceof Me)h=je(n.firestore,Et),f=is(n._key.path),u={next:v=>{e[a]&&e[a](qd(h,n,v))},error:e[a+1],complete:e[a+2]};else{const v=je(n,Tt);h=je(v.firestore,Et),f=v._query;const m=new ja(h);u={next:T=>{e[a]&&e[a](new jd(h,m,v,T))},error:e[a+1],complete:e[a+2]},Ld(n._query)}return function(m,T,C,x){const P=new Pa(x),N=new Sa(T,P,C);return m.asyncQueue.enqueueAndForget(async()=>ba(await Gi(m),N)),()=>{P.Za(),m.asyncQueue.enqueueAndForget(async()=>Aa(await Gi(m),N))}}(ms(h),f,l,u)}function Is(n,e){return function(r,i){const s=new mt;return r.asyncQueue.enqueueAndForget(async()=>eE(await uE(r),i,s)),s.promise}(ms(n),e)}function qd(n,e,t){const r=t.docs.get(e._key),i=new ja(n);return new Bd(n,i,e._key,r,new fr(t.hasPendingWrites,t.fromCache),e.converter)}function nn(){return new Na("serverTimestamp")}(function(e,t=!0){(function(i){qn=i})(jn),xn(new sn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Et(new D_(r.getProvider("auth-internal")),new M_(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),jt(kc,"4.7.3",e),jt(kc,"4.7.3","esm2017")})();const DE={apiKey:"AIzaSyCBSLz3aL1hx57bOoJzHa09k4yl9fw8SFI",authDomain:"vortex-messenger-4ea97.firebaseapp.com",projectId:"vortex-messenger-4ea97",storageBucket:"vortex-messenger-4ea97.firebasestorage.app",messagingSenderId:"294669525739",appId:"1:294669525739:web:fe8fc3472c649f348654ae"},$d=Uu(DE),bn=C_($d),me=gE($d);class NE{async createUser(e){const{uid:t,email:r,displayName:i,username:s}=e;await Pn(We(me,"users",t),{uid:t,email:r,displayName:i,username:s,createdAt:new Date,updatedAt:new Date}),s&&await Pn(We(me,"usernames",s),{username:s,uid:t,email:r})}async isUsernameAvailable(e){const t=Mt(Ze(me,"usernames"),xt("username","==",e));return(await In(t)).empty}async findUser(e){const t=e.trim();if(t.startsWith("@")){const s=t.substring(1).toLowerCase(),a=Mt(Ze(me,"usernames"),xt("username","==",s)),l=await In(a);if(!l.empty){const u=l.docs[0].data(),h=await oo(We(me,"users",u.uid));return h.exists()?h.data():null}return null}if(t.includes("@")){const s=Mt(Ze(me,"users"),xt("email","==",t)),a=await In(s);return a.empty?null:a.docs[0].data()}const r=Mt(Ze(me,"usernames"),xt("username","==",t.toLowerCase())),i=await In(r);if(!i.empty){const s=i.docs[0].data(),a=await oo(We(me,"users",s.uid));return a.exists()?a.data():null}return null}async searchUsers(e,t=10){const r=e.toLowerCase(),i=Mt(Ze(me,"users"),xt("username",">=",r),xt("username","<=",r+""),SE(t));return(await In(i)).docs.map(a=>a.data())}async getUserProfile(e){const t=await oo(We(me,"users",e));return t.exists()?t.data():null}async updateProfile(e,t){await Pn(We(me,"users",e),{...t,updatedAt:new Date},{merge:!0})}}const Bn=new NE;class VE{constructor(){this.currentUser=null,this.listeners=[],To(bn,e=>{this.currentUser=e,this.listeners.forEach(t=>t(e))})}onAuthChange(e){return this.listeners.push(e),this.currentUser!==void 0&&e(this.currentUser),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}async login(e,t){await dg(bn,e,t)}async register(e,t,r,i=""){const s=await hg(bn,e,t);await pg(s.user,{displayName:r}),await Bn.createUser({uid:s.user.uid,email:e,displayName:r,username:i})}async logout(){await _g(bn)}getCurrentUser(){return this.currentUser}}const rn=new VE;function OE(){const[n,e]=Y("login"),[t,r]=Y(""),[i,s]=Y(""),[a,l]=Y(""),[u,h]=Y(""),[f,v]=Y(""),[m,T]=Y(!1),[C,x]=Y(""),[P,N]=Y(!1),M=async G=>{const J=G.toLowerCase().replace(/[^a-z0-9_]/g,"");if(h(J),J.length<3){v("Минимум 3 символа");return}T(!0);try{const b=await Bn.isUsernameAvailable(J);v(b?"✅ Свободен":"❌ Занят")}catch{v("")}finally{T(!1)}},U=async G=>{G.preventDefault(),x(""),N(!0);try{if(n==="login")await rn.login(t,i);else{if(a.length<2)throw new Error("Имя должно быть минимум 2 символа");if(u.length<3)throw new Error("Username минимум 3 символа");if(i.length<6)throw new Error("Пароль минимум 6 символов");await rn.register(t,i,a,u)}}catch(J){x(J.message||"Ошибка")}finally{N(!1)}},Q=G=>{G.key==="Enter"&&U(G)};return y("div",{style:ie.wrapper,children:y("div",{style:ie.card,children:[y("div",{style:ie.logoSection,children:[y("div",{style:ie.logoIcon,children:"🌪️"}),y("h1",{style:ie.logoTitle,children:"Vortex"}),y("p",{style:ie.logoSubtitle,children:"В центре общения"})]}),y("div",{style:ie.tabs,children:[y("button",{onClick:()=>{e("login"),x("")},style:{...ie.tab,background:n==="login"?"var(--bg-active)":"transparent",color:n==="login"?"var(--text-primary)":"var(--text-secondary)"},children:"Вход"}),y("button",{onClick:()=>{e("register"),x("")},style:{...ie.tab,background:n==="register"?"var(--bg-active)":"transparent",color:n==="register"?"var(--text-primary)":"var(--text-secondary)"},children:"Регистрация"})]}),y("form",{onSubmit:U,style:ie.form,children:[n==="register"&&y(tt,{children:[y("div",{style:ie.fieldGroup,children:[y("label",{style:ie.label,children:"Имя"}),y("input",{type:"text",value:a,onInput:G=>l(G.target.value),placeholder:"Ваше имя",style:ie.input,required:!0})]}),y("div",{style:ie.fieldGroup,children:[y("label",{style:ie.label,children:"Username"}),y("div",{style:ie.usernameWrapper,children:[y("span",{style:ie.usernamePrefix,children:"@"}),y("input",{type:"text",value:u,onInput:G=>M(G.target.value),placeholder:"username",style:{...ie.input,paddingLeft:"2rem"},required:!0})]}),u.length>=3&&y("div",{style:{...ie.statusText,color:f.includes("✅")?"var(--vortex-secondary)":f.includes("❌")?"var(--vortex-danger)":"var(--text-tertiary)"},children:m?"Проверка...":f})]})]}),y("div",{style:ie.fieldGroup,children:[y("label",{style:ie.label,children:"Email"}),y("input",{type:"email",value:t,onInput:G=>r(G.target.value),placeholder:"user@example.com",onKeyDown:Q,style:ie.input,required:!0})]}),y("div",{style:ie.fieldGroup,children:[y("label",{style:ie.label,children:"Пароль"}),y("input",{type:"password",value:i,onInput:G=>s(G.target.value),placeholder:"••••••••",onKeyDown:Q,style:ie.input,required:!0})]}),C&&y("div",{style:ie.error,children:["⚠️ ",C]}),y("button",{type:"submit",disabled:P||n==="register"&&f.includes("❌"),style:{...ie.submitBtn,opacity:P?.7:1},children:P?"Загрузка...":n==="login"?"Войти":"Зарегистрироваться"})]}),y("div",{style:ie.switchText,children:n==="login"?y(tt,{children:["Нет аккаунта?"," ",y("span",{onClick:()=>e("register"),style:ie.switchLink,children:"Зарегистрироваться"})]}):y(tt,{children:["Уже есть аккаунт?"," ",y("span",{onClick:()=>e("login"),style:ie.switchLink,children:"Войти"})]})})]})})}const ie={wrapper:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",background:"var(--bg-primary)"},card:{background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"20px",padding:"2.5rem",width:"420px",maxWidth:"90vw",boxShadow:"0 20px 60px rgba(0,0,0,0.4)"},logoSection:{textAlign:"center",marginBottom:"2rem"},logoIcon:{fontSize:"3rem"},logoTitle:{background:"var(--gradient-brand)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"2rem",fontWeight:800,margin:"0.5rem 0 0 0"},logoSubtitle:{color:"var(--text-secondary)",fontSize:"0.9rem",marginTop:"0.25rem"},tabs:{display:"flex",background:"rgba(255,255,255,0.03)",borderRadius:"14px",padding:"4px",marginBottom:"1.5rem"},tab:{flex:1,padding:"0.75rem",border:"none",borderRadius:"10px",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",transition:"all 0.2s",fontFamily:"inherit"},form:{display:"flex",flexDirection:"column",gap:"0.25rem"},fieldGroup:{marginBottom:"0.75rem"},label:{display:"block",fontSize:"0.8rem",fontWeight:500,color:"var(--text-secondary)",marginBottom:"0.35rem",textTransform:"uppercase",letterSpacing:"0.5px"},input:{width:"100%",padding:"0.75rem 1rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-default)",borderRadius:"12px",color:"var(--text-primary)",fontSize:"0.95rem",outline:"none",transition:"border-color 0.2s",fontFamily:"inherit"},usernameWrapper:{position:"relative"},usernamePrefix:{position:"absolute",left:"0.75rem",top:"50%",transform:"translateY(-50%)",color:"var(--text-tertiary)",fontWeight:600,fontSize:"0.95rem",pointerEvents:"none"},statusText:{fontSize:"0.75rem",marginTop:"0.25rem",paddingLeft:"0.25rem"},error:{padding:"0.75rem 1rem",background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:"10px",color:"#FCA5A5",fontSize:"0.85rem"},submitBtn:{width:"100%",padding:"0.85rem",background:"var(--gradient-brand)",color:"white",border:"none",borderRadius:"12px",fontSize:"1rem",fontWeight:600,cursor:"pointer",marginTop:"0.5rem",fontFamily:"inherit"},switchText:{textAlign:"center",marginTop:"1.25rem",fontSize:"0.85rem",color:"var(--text-secondary)"},switchLink:{color:"var(--vortex-primary-light)",cursor:"pointer",fontWeight:500}};class ME{subscribeToMessages(e,t){const r=Mt(Ze(me,"chats",e,"messages"),RE("createdAt","asc"));return za(r,i=>{const s=[];i.forEach(a=>{s.push({id:a.id,...a.data()})}),t(s)})}async sendMessage(e,t,r,i=null){const s={senderId:t.uid,senderName:t.displayName||t.email,createdAt:nn(),type:i?i.type:"text",text:r||""};i&&(s.fileData=i.fileData,s.fileName=i.fileName),await zd(Ze(me,"chats",e,"messages"),s);const a=i?i.type==="image"?"📷 Фото":i.type==="voice"?"🎙️ Голосовое":"📎 Файл":r;await Pn(We(me,"chats",e),{lastMessage:a,lastMessageTime:nn()},{merge:!0})}async editMessage(e,t,r){await kE(We(me,"chats",e,"messages",t),{text:r,isEdited:!0,editedAt:nn()})}async deleteMessage(e,t){await xE(We(me,"chats",e,"messages",t))}}const Yi=new ME;class LE{subscribeToChats(e,t){const r=Mt(Ze(me,"chats"),xt("participants","array-contains",e));return za(r,i=>{const s=[];i.forEach(a=>{s.push({id:a.id,...a.data()})}),s.sort((a,l)=>{var f,v,m,T;const u=((v=(f=a.lastMessageTime)==null?void 0:f.toDate)==null?void 0:v.call(f))||0;return(((T=(m=l.lastMessageTime)==null?void 0:m.toDate)==null?void 0:T.call(m))||0)-u}),t(s)})}async createChat(e,t){const r=Mt(Ze(me,"chats"),xt("participants","array-contains",e.uid)),s=(await In(r)).docs.find(u=>{const h=u.data();return h.participants.includes(t.uid)&&h.participants.length===2});if(s)return s.id;const a={participants:[e.uid,t.uid],participantEmails:[e.email,t.email],participantNames:[e.displayName||e.email,t.displayName||t.email],createdAt:nn(),lastMessage:"Чат создан",lastMessageTime:nn()};return(await zd(Ze(me,"chats"),a)).id}async sendMessage(e,t,r,i=null){await Yi.sendMessage(e,r,t,i)}subscribeToMessages(e,t){return Yi.subscribeToMessages(e,t)}}const en=new LE;class FE{constructor(){this.theme=localStorage.getItem("vortex-theme")||"dark",this.listeners=[],this.apply()}get(){return this.theme}toggle(){this.theme=this.theme==="dark"?"light":"dark",localStorage.setItem("vortex-theme",this.theme),this.apply(),this.listeners.forEach(e=>e(this.theme))}apply(){document.documentElement.setAttribute("data-theme",this.theme)}onChange(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}}const ao=new FE;function UE({user:n,onLogout:e,onProfile:t,onContacts:r,onTasks:i}){const[s,a]=Y(!1),[l,u]=Y(ao.get()),h=()=>{a(!s)},f=()=>{a(!1)},v=()=>{ao.toggle(),u(ao.get())},m=T=>{a(!1),T==null||T()};return y(tt,{children:[y("button",{onClick:h,style:{width:"40px",height:"40px",borderRadius:"50%",background:"transparent",border:"1px solid var(--border-subtle)",color:"var(--text-secondary)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",transition:"all 0.15s"},onMouseEnter:T=>{T.target.style.background="var(--bg-hover)",T.target.style.color="var(--text-primary)"},onMouseLeave:T=>{T.target.style.background="transparent",T.target.style.color="var(--text-secondary)"},children:y("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[y("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),y("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),y("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),s&&y("div",{onClick:f,style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.5)",zIndex:200,backdropFilter:"blur(2px)",animation:"fadeIn 0.2s ease"}}),y("div",{style:{position:"fixed",top:0,left:s?0:"-320px",bottom:0,width:"320px",background:"var(--bg-secondary)",zIndex:201,transition:"left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",borderRight:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column"},children:[y("div",{style:{padding:"20px",borderBottom:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y("h3",{style:{fontWeight:700,fontSize:"1.1rem"},children:"Меню"}),y("button",{onClick:f,style:{width:"36px",height:"36px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1.2rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),y("div",{style:{flex:1,overflowY:"auto",padding:"8px"},children:[y(lo,{icon:"👤",title:"Профиль",subtitle:(n==null?void 0:n.email)||"email",onClick:()=>m(t)}),y(lo,{icon:"👥",title:"Контакты",subtitle:"Поиск пользователей",onClick:()=>m(r)}),y(lo,{icon:"📋",title:"Задачи",subtitle:"Список задач",onClick:()=>m(i)}),y("div",{style:{height:"1px",background:"var(--border-subtle)",margin:"8px 16px"}}),y("div",{onClick:v,style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s"},onMouseEnter:T=>T.target.style.background="var(--bg-hover)",onMouseLeave:T=>T.target.style.background="transparent",children:[y("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},children:l==="dark"?"🌙":"☀️"}),y("div",{children:[y("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:l==="dark"?"Тёмная тема":"Светлая тема"}),y("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:l==="dark"?"Включена":"Выключена"})]})]}),y("div",{style:{height:"1px",background:"var(--border-subtle)",margin:"8px 16px"}}),y("div",{onClick:()=>m(e),style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s",color:"var(--vortex-danger)"},onMouseEnter:T=>T.target.style.background="rgba(239,68,68,0.1)",onMouseLeave:T=>T.target.style.background="transparent",children:[y("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"rgba(239,68,68,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},children:"🚪"}),y("div",{children:y("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:"Выйти"})})]})]})]})]})}function lo({icon:n,title:e,subtitle:t,onClick:r}){return y("div",{onClick:r,style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s"},onMouseEnter:i=>i.target.style.background="var(--bg-hover)",onMouseLeave:i=>i.target.style.background="transparent",children:[y("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},children:n}),y("div",{children:[y("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:e}),t&&y("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:t})]})]})}function BE({onPersonalChat:n,onGroupChat:e,onChannel:t}){const[r,i]=Y(!1),s=wr(null),a=wr(null);Lt(()=>{const h=f=>{s.current&&!s.current.contains(f.target)&&!a.current.contains(f.target)&&i(!1)};return document.addEventListener("click",h),()=>document.removeEventListener("click",h)},[]);const l=h=>{h.stopPropagation(),i(!r)},u=h=>{i(!1),h==null||h()};return y("div",{style:{position:"absolute",bottom:"20px",right:"20px",zIndex:30},children:[y("button",{ref:a,onClick:l,style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--gradient-brand)",border:"none",color:"white",fontSize:"1.8rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(124, 58, 237, 0.4)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transform:r?"rotate(45deg)":"rotate(0deg)",fontWeight:300,lineHeight:1},children:"+"}),r&&y("div",{ref:s,style:{position:"absolute",bottom:"70px",right:"0",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"var(--radius-lg)",boxShadow:"0 12px 40px rgba(0, 0, 0, 0.5)",padding:"8px",minWidth:"240px",animation:"menuPopup 0.2s cubic-bezier(0.4, 0, 0.2, 1)",transformOrigin:"bottom right"},children:[y("button",{onClick:()=>u(n),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",background:"transparent",border:"none",borderRadius:"var(--radius-md)",color:"var(--text-primary)",cursor:"pointer",fontSize:"0.9rem",textAlign:"left",transition:"background 0.15s"},onMouseEnter:h=>h.target.style.background="var(--bg-hover)",onMouseLeave:h=>h.target.style.background="transparent",children:[y("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:"var(--gradient-brand)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",flexShrink:0},children:y("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[y("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),y("circle",{cx:"12",cy:"7",r:"4"})]})}),y("div",{children:[y("div",{style:{fontWeight:600},children:"Личный чат"}),y("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:"Начать общение"})]})]}),y("button",{onClick:()=>u(e),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",background:"transparent",border:"none",borderRadius:"var(--radius-md)",color:"var(--text-primary)",cursor:"pointer",fontSize:"0.9rem",textAlign:"left",transition:"background 0.15s"},onMouseEnter:h=>h.target.style.background="var(--bg-hover)",onMouseLeave:h=>h.target.style.background="transparent",children:[y("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:"var(--gradient-success)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",flexShrink:0},children:y("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[y("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),y("circle",{cx:"9",cy:"7",r:"4"}),y("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),y("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),y("div",{children:[y("div",{style:{fontWeight:600},children:"Группа"}),y("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:"Создать группу"})]})]}),y("button",{onClick:()=>u(t),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",background:"transparent",border:"none",borderRadius:"var(--radius-md)",color:"var(--text-primary)",cursor:"pointer",fontSize:"0.9rem",textAlign:"left",transition:"background 0.15s"},onMouseEnter:h=>h.target.style.background="var(--bg-hover)",onMouseLeave:h=>h.target.style.background="transparent",children:[y("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:"linear-gradient(135deg, #F59E0B, #EF4444)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",flexShrink:0},children:y("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[y("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"}),y("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]})}),y("div",{children:[y("div",{style:{fontWeight:600},children:"Канал"}),y("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:"Создать канал (скоро)"})]})]})]})]})}function jE({user:n,onClose:e,onChatCreated:t}){const[r,i]=Y(""),[s,a]=Y(null),[l,u]=Y(!1),[h,f]=Y(""),[v,m]=Y("search"),T=async()=>{if(!r.trim()){f("Введите email или @username");return}u(!0),f("");try{const N=await Bn.findUser(r);N?N.uid===(N==null?void 0:N.uid)?(f("Это ваш аккаунт"),a(null)):(a(N),m("result")):(f("Пользователь не найден"),a(null))}catch{f("Ошибка поиска")}finally{u(!1)}},C=async()=>{if(s){u(!0),m("creating");try{const N=await en.createChat(n,s);t==null||t(N),e==null||e()}catch(N){f("Ошибка создания чата: "+N.message),m("result")}finally{u(!1)}}},x=N=>{N.key==="Enter"&&(v==="search"?T():v==="result"&&C()),N.key==="Escape"&&(e==null||e())},P=N=>{const M=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let U=0;for(let Q=0;Q<(N||"").length;Q++)U=N.charCodeAt(Q)+((U<<5)-U);return M[Math.abs(U)%M.length]};return y("div",{style:he.overlay,onClick:e,children:y("div",{style:he.modal,onClick:N=>N.stopPropagation(),children:[y("div",{style:he.header,children:[y("h3",{style:he.title,children:"Новый чат"}),y("button",{onClick:e,style:he.closeBtn,children:"✕"})]}),y("div",{style:he.body,children:[v==="search"&&y(tt,{children:[y("p",{style:he.hint,children:"Введите email или @username пользователя"}),y("div",{style:he.searchContainer,children:[y("input",{type:"text",value:r,onInput:N=>{i(N.target.value),f("")},onKeyDown:x,placeholder:"Email или @username",style:he.input,autoFocus:!0}),y("button",{onClick:T,disabled:l||!r.trim(),style:{...he.searchBtn,opacity:l||!r.trim()?.5:1},children:l?"...":"Найти"})]}),h&&y("p",{style:he.error,children:h})]}),v==="result"&&s&&y(tt,{children:[y("p",{style:he.hint,children:"Пользователь найден:"}),y("div",{style:he.userCard,children:[y("div",{style:{...he.userAvatar,background:P(s.displayName||s.email)},children:(s.displayName||s.email).charAt(0).toUpperCase()}),y("div",{style:he.userInfo,children:[y("div",{style:he.userName,children:s.displayName||"Без имени"}),y("div",{style:he.userEmail,children:s.email}),s.username&&y("div",{style:he.userUsername,children:["@",s.username]})]})]}),y("div",{style:he.actions,children:[y("button",{onClick:()=>m("search"),style:he.backBtn,children:"← Назад"}),y("button",{onClick:C,disabled:l,style:{...he.createBtn,opacity:l?.7:1},children:l?"Создание...":"Создать чат"})]}),h&&y("p",{style:he.error,children:h})]}),v==="creating"&&y("div",{style:he.creatingState,children:[y("div",{style:he.spinner,children:"⏳"}),y("p",{children:"Создаём чат..."})]})]})]})})}const he={overlay:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,animation:"fadeIn 0.2s ease"},modal:{background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"16px",width:"440px",maxWidth:"90vw",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",animation:"slideUp 0.25s ease",overflow:"hidden"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.25rem 1.5rem",borderBottom:"1px solid var(--border-subtle)"},title:{margin:0,fontSize:"1.1rem",fontWeight:700,color:"var(--text-primary)"},closeBtn:{width:"32px",height:"32px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},body:{padding:"1.5rem"},hint:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"1rem"},searchContainer:{display:"flex",gap:"0.5rem"},input:{flex:1,padding:"0.75rem 1rem",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-default)",borderRadius:"12px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none"},searchBtn:{padding:"0.75rem 1.25rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"white",fontWeight:600,cursor:"pointer",fontSize:"0.9rem"},error:{color:"var(--vortex-danger)",fontSize:"0.85rem",marginTop:"0.75rem",padding:"0.5rem 0.75rem",background:"rgba(239,68,68,0.1)",borderRadius:"8px"},userCard:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem",background:"rgba(255,255,255,0.03)",borderRadius:"12px",border:"1px solid var(--border-subtle)",marginBottom:"1rem"},userAvatar:{width:"56px",height:"56px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"1.3rem",flexShrink:0},userInfo:{flex:1},userName:{fontWeight:600,fontSize:"1rem"},userEmail:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:"2px"},userUsername:{fontSize:"0.8rem",color:"var(--vortex-primary-light)",marginTop:"2px"},actions:{display:"flex",gap:"0.75rem"},backBtn:{flex:1,padding:"0.75rem",background:"transparent",border:"1px solid var(--border-default)",borderRadius:"12px",color:"var(--text-secondary)",cursor:"pointer",fontSize:"0.9rem"},createBtn:{flex:2,padding:"0.75rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"white",fontWeight:600,cursor:"pointer",fontSize:"0.9rem"},creatingState:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},spinner:{fontSize:"2rem",marginBottom:"1rem"}};function zE({onClose:n}){const[e,t]=Y(null),[r,i]=Y(""),[s,a]=Y(""),[l,u]=Y(!1),[h,f]=Y("");Lt(()=>{v()},[]);const v=async()=>{const x=rn.getCurrentUser();if(!x)return;const P=await Bn.getUserProfile(x.uid);t(P),i((P==null?void 0:P.displayName)||""),a((P==null?void 0:P.bio)||"")},m=async()=>{u(!0),f("");try{await Bn.updateProfile(rn.getCurrentUser().uid,{displayName:r,bio:s}),f("✅ Профиль обновлён!"),setTimeout(()=>n==null?void 0:n(),1e3)}catch{f("❌ Ошибка сохранения")}finally{u(!1)}},T=x=>{const P=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let N=0;for(let M=0;M<(x||"").length;M++)N=x.charCodeAt(M)+((N<<5)-N);return P[Math.abs(N)%P.length]},C=rn.getCurrentUser();return y("div",{style:de.overlay,onClick:n,children:y("div",{style:de.modal,onClick:x=>x.stopPropagation(),children:[y("div",{style:de.header,children:[y("h3",{style:de.title,children:"👤 Профиль"}),y("button",{onClick:n,style:de.closeBtn,children:"✕"})]}),y("div",{style:de.body,children:[y("div",{style:de.avatarSection,children:[y("div",{style:{...de.avatar,background:T(r||(C==null?void 0:C.email))},children:(r||(C==null?void 0:C.email)||"?").charAt(0).toUpperCase()}),y("button",{style:de.changeAvatarBtn,children:"📷 Изменить аватар"})]}),y("div",{style:de.field,children:[y("label",{style:de.label,children:"Имя"}),y("input",{type:"text",value:r,onInput:x=>i(x.target.value),style:de.input,placeholder:"Ваше имя"})]}),y("div",{style:de.field,children:[y("label",{style:de.label,children:"Username"}),y("div",{style:de.usernameDisplay,children:["@",(e==null?void 0:e.username)||"не задан"]})]}),y("div",{style:de.field,children:[y("label",{style:de.label,children:"Email"}),y("div",{style:de.usernameDisplay,children:C==null?void 0:C.email})]}),y("div",{style:de.field,children:[y("label",{style:de.label,children:"Bio"}),y("textarea",{value:s,onInput:x=>a(x.target.value),style:de.textarea,placeholder:"Расскажите о себе...",rows:3})]}),h&&y("div",{style:{...de.message,background:h.includes("✅")?"rgba(6,214,160,0.1)":"rgba(239,68,68,0.1)",color:h.includes("✅")?"var(--vortex-secondary)":"var(--vortex-danger)"},children:h}),y("button",{onClick:m,disabled:l,style:{...de.saveBtn,opacity:l?.7:1},children:l?"Сохранение...":"💾 Сохранить"})]})]})})}const de={overlay:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,animation:"fadeIn 0.2s ease"},modal:{background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"20px",width:"440px",maxWidth:"90vw",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",animation:"slideUp 0.25s ease",overflow:"hidden"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.25rem 1.5rem",borderBottom:"1px solid var(--border-subtle)"},title:{margin:0,fontSize:"1.1rem",fontWeight:700},closeBtn:{width:"32px",height:"32px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},body:{padding:"1.5rem"},avatarSection:{textAlign:"center",marginBottom:"1.5rem"},avatar:{width:"80px",height:"80px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"2rem",margin:"0 auto"},changeAvatarBtn:{marginTop:"0.75rem",padding:"0.4rem 1rem",background:"transparent",border:"1px solid var(--border-default)",borderRadius:"8px",color:"var(--text-secondary)",cursor:"pointer",fontSize:"0.8rem"},field:{marginBottom:"1rem"},label:{display:"block",fontSize:"0.75rem",fontWeight:500,color:"var(--text-secondary)",marginBottom:"0.35rem",textTransform:"uppercase",letterSpacing:"0.5px"},input:{width:"100%",padding:"0.7rem 1rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-default)",borderRadius:"10px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none"},textarea:{width:"100%",padding:"0.7rem 1rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-default)",borderRadius:"10px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none",resize:"vertical",fontFamily:"inherit"},usernameDisplay:{padding:"0.7rem 1rem",background:"rgba(255,255,255,0.02)",border:"1px solid var(--border-subtle)",borderRadius:"10px",color:"var(--text-secondary)",fontSize:"0.9rem"},message:{padding:"0.6rem 1rem",borderRadius:"10px",fontSize:"0.85rem",marginBottom:"1rem"},saveBtn:{width:"100%",padding:"0.8rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"white",fontWeight:600,fontSize:"0.95rem",cursor:"pointer"}};function qE({user:n,activeChat:e,onSelectChat:t}){const[r,i]=Y([]),[s,a]=Y(""),[l,u]=Y(!1),[h,f]=Y(!1),[v,m]=Y(""),[T,C]=Y([]),[x,P]=Y(!1),N=wr(null);Lt(()=>en.subscribeToChats(n.uid,i),[n.uid]);const M=g=>{var w,Te,Je,pn,Xe;const E=(w=g.participantEmails)==null?void 0:w.findIndex(at=>at!==n.email),I=((Te=g.participantNames)==null?void 0:Te[E])||((pn=(Je=g.participantEmails)==null?void 0:Je[E])==null?void 0:pn.split("@")[0])||"Чат",A=((Xe=g.participantEmails)==null?void 0:Xe[E])||"";return{name:I,email:A}},U=g=>{const E=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let I=0;for(let A=0;A<(g||"").length;A++)I=g.charCodeAt(A)+((I<<5)-I);return E[Math.abs(I)%E.length]},Q=g=>{if(!(g!=null&&g.toDate))return"";const E=g.toDate(),I=new Date,A=E.getHours().toString().padStart(2,"0"),w=E.getMinutes().toString().padStart(2,"0");if(E.toDateString()===I.toDateString())return`${A}:${w}`;const Te=new Date(I);return Te.setDate(Te.getDate()-1),E.toDateString()===Te.toDateString()?"Вчера":E.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"})},G=async()=>{await rn.logout()},J=g=>{if(m(g),N.current&&clearTimeout(N.current),g.trim().length<2){C([]),P(!1);return}N.current=setTimeout(async()=>{try{const E=await Bn.searchUsers(g);C(E.filter(I=>I.uid!==n.uid)),P(!0)}catch{C([])}},300)},b=async g=>{try{const E=await en.createChat(n,g);P(!1),m(""),t==null||t({id:E})}catch(E){console.error("Ошибка создания чата:",E)}},_=r.filter(g=>{if(!s)return!0;const{name:E}=M(g);return E.toLowerCase().includes(s.toLowerCase())});return y("div",{style:se.container,children:[y("div",{style:se.header,children:[y("h2",{style:se.logo,children:"🌪️ Vortex"}),y(UE,{user:n,onLogout:G,onProfile:()=>f(!0)})]}),y("div",{style:se.searchContainer,children:[y("div",{style:se.searchWrapper,children:[y("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",style:se.searchIcon,children:[y("circle",{cx:"11",cy:"11",r:"8"}),y("path",{d:"m21 21-4.35-4.35"})]}),y("input",{type:"text",value:v,onInput:g=>J(g.target.value),onFocus:()=>T.length>0&&P(!0),placeholder:"Поиск пользователей...",style:se.searchInput})]}),x&&T.length>0&&y("div",{style:se.globalResults,children:T.map(g=>y("div",{onClick:()=>b(g),style:se.globalResultItem,children:[y("div",{style:{...se.globalAvatar,background:U(g.displayName||g.email)},children:(g.displayName||g.email).charAt(0).toUpperCase()}),y("div",{style:se.globalInfo,children:[y("div",{style:se.globalName,children:g.displayName||"Без имени"}),y("div",{style:se.globalEmail,children:[g.email,g.username&&` • @${g.username}`]})]})]},g.uid))}),x&&v.trim().length>=2&&T.length===0&&y("div",{style:se.noResults,children:"Пользователи не найдены"})]}),y("div",{style:se.searchContainer,children:y("div",{style:se.searchWrapper,children:[y("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",style:se.searchIcon,children:[y("circle",{cx:"11",cy:"11",r:"8"}),y("path",{d:"m21 21-4.35-4.35"})]}),y("input",{type:"text",value:s,onInput:g=>a(g.target.value),placeholder:"Поиск чатов",style:se.searchInput})]})}),y("div",{style:se.chatList,children:_.length===0?y("div",{style:se.emptyState,children:[y("div",{style:se.emptyIcon,children:"💬"}),y("p",{style:se.emptyText,children:s?"Ничего не найдено":"Нет чатов"}),!s&&y("p",{style:se.emptyHint,children:"Нажмите + чтобы создать чат"})]}):_.map(g=>{const{name:E}=M(g),I=U(E),A=(e==null?void 0:e.id)===g.id;return y("div",{onClick:()=>t(g),style:{...se.chatItem,background:A?"var(--bg-active)":"transparent",border:A?"1px solid rgba(124, 58, 237, 0.2)":"1px solid transparent"},children:[y("div",{style:{...se.chatAvatar,background:I},children:E.charAt(0).toUpperCase()}),y("div",{style:se.chatInfo,children:[y("div",{style:se.chatName,children:E}),y("div",{style:se.chatLastMsg,children:g.lastMessage||"Нет сообщений"})]}),y("div",{style:se.chatMeta,children:y("div",{style:se.chatTime,children:Q(g.lastMessageTime)})})]},g.id)})}),y(BE,{onPersonalChat:()=>u(!0),onGroupChat:()=>alert("Группы скоро! 🚀"),onChannel:()=>alert("Каналы скоро! 📢")}),l&&y(jE,{user:n,onClose:()=>u(!1),onChatCreated:g=>{u(!1),t==null||t({id:g})}}),h&&y(zE,{onClose:()=>f(!1)})]})}const se={container:{width:"380px",minWidth:"380px",background:"var(--bg-secondary)",borderRight:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",height:"100%",position:"relative"},header:{padding:"1rem 1.25rem",display:"flex",justifyContent:"space-between",alignItems:"center"},logo:{background:"var(--gradient-brand)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"1.2rem",fontWeight:700,margin:0},searchContainer:{padding:"0.25rem 1rem",position:"relative"},searchWrapper:{position:"relative",display:"flex",alignItems:"center"},searchIcon:{position:"absolute",left:"12px",color:"var(--text-tertiary)",pointerEvents:"none"},searchInput:{width:"100%",padding:"0.6rem 1rem 0.6rem 2.5rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",borderRadius:"12px",color:"var(--text-primary)",fontSize:"0.85rem",outline:"none"},globalResults:{background:"var(--bg-tertiary)",border:"1px solid var(--border-default)",borderRadius:"12px",marginTop:"4px",maxHeight:"300px",overflowY:"auto",boxShadow:"0 8px 24px rgba(0,0,0,0.3)",position:"absolute",left:"1rem",right:"1rem",zIndex:50},globalResultItem:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem 1rem",cursor:"pointer",transition:"background 0.15s",borderBottom:"1px solid var(--border-subtle)"},globalAvatar:{width:"42px",height:"42px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"1rem",flexShrink:0},globalInfo:{flex:1,minWidth:0},globalName:{fontWeight:600,fontSize:"0.9rem"},globalEmail:{fontSize:"0.8rem",color:"var(--text-secondary)",marginTop:"2px"},noResults:{padding:"1rem",textAlign:"center",color:"var(--text-tertiary)",fontSize:"0.85rem",background:"var(--bg-tertiary)",borderRadius:"12px",marginTop:"4px",position:"absolute",left:"1rem",right:"1rem",zIndex:50},chatList:{flex:1,overflowY:"auto",padding:"0.25rem 0.75rem"},chatItem:{display:"flex",alignItems:"center",padding:"0.7rem 0.75rem",borderRadius:"12px",cursor:"pointer",marginBottom:"2px",transition:"all 0.15s ease"},chatAvatar:{width:"50px",height:"50px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"1.1rem",marginRight:"0.75rem",flexShrink:0},chatInfo:{flex:1,minWidth:0},chatName:{fontWeight:600,fontSize:"0.9rem",marginBottom:"2px"},chatLastMsg:{fontSize:"0.8rem",color:"var(--text-secondary)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},chatMeta:{marginLeft:"0.5rem",flexShrink:0},chatTime:{fontSize:"0.7rem",color:"var(--text-tertiary)"},emptyState:{textAlign:"center",padding:"2rem",color:"var(--text-tertiary)"},emptyIcon:{fontSize:"3rem",marginBottom:"0.5rem"},emptyText:{fontSize:"0.9rem"},emptyHint:{fontSize:"0.75rem",marginTop:"0.25rem"}};class $E{constructor(){this.unsubscribers={}}startTracking(){To(bn,e=>{if(!e)return;const t=We(me,"users",e.uid),r=()=>{Pn(t,{isOnline:!0,lastSeen:nn()},{merge:!0})},i=()=>{Pn(t,{isOnline:!1,lastSeen:nn()},{merge:!0})};r();const s=setInterval(r,3e4);window.addEventListener("beforeunload",i);const a=To(bn,l=>{l||(clearInterval(s),window.removeEventListener("beforeunload",i),i())});return()=>{clearInterval(s),window.removeEventListener("beforeunload",i),a()}})}watchUser(e,t){this.unsubscribers[e]&&this.unsubscribers[e]();const r=We(me,"users",e),i=za(r,s=>{var a,l;if(s.exists()){const u=s.data();t({isOnline:u.isOnline||!1,lastSeen:((l=(a=u.lastSeen)==null?void 0:a.toDate)==null?void 0:l.call(a))||null})}else t({isOnline:!1,lastSeen:null})});return this.unsubscribers[e]=i,i}destroy(){Object.values(this.unsubscribers).forEach(e=>e()),this.unsubscribers={}}}const Wd=new $E;class WE{constructor(){this.mediaRecorder=null,this.audioChunks=[],this.isRecording=!1,this.stream=null}async startRecording(){try{return this.stream=await navigator.mediaDevices.getUserMedia({audio:!0}),this.mediaRecorder=new MediaRecorder(this.stream,{mimeType:MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?"audio/webm;codecs=opus":"audio/webm"}),this.audioChunks=[],this.mediaRecorder.ondataavailable=e=>{e.data.size>0&&this.audioChunks.push(e.data)},this.mediaRecorder.start(),this.isRecording=!0,!0}catch(e){return console.error("Ошибка записи:",e),!1}}stopRecording(){return new Promise((e,t)=>{if(!this.mediaRecorder||!this.isRecording){t(new Error("Нет активной записи"));return}this.mediaRecorder.onstop=()=>{const r=new Blob(this.audioChunks,{type:"audio/webm"});this.stream&&this.stream.getTracks().forEach(s=>s.stop());const i=new FileReader;i.onloadend=()=>e(i.result),i.onerror=t,i.readAsDataURL(r)},this.mediaRecorder.stop(),this.isRecording=!1})}cancelRecording(){this.mediaRecorder&&this.isRecording&&(this.mediaRecorder.stop(),this.isRecording=!1,this.stream&&this.stream.getTracks().forEach(e=>e.stop()))}}const gu=new WE;class KE{constructor(){this.apiKey=localStorage.getItem("vortex-openai-key")||"",this.endpoint="https://api.openai.com/v1/chat/completions"}setApiKey(e){this.apiKey=e,localStorage.setItem("vortex-openai-key",e)}hasApiKey(){return!!this.apiKey}async callAI(e,t=.7,r=200){var a,l,u;if(!this.apiKey)throw new Error("API ключ не настроен");const i=await fetch(this.endpoint,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:e,temperature:t,max_tokens:r})});if(!i.ok)throw new Error("Ошибка AI: "+i.status);return((u=(l=(a=(await i.json()).choices)==null?void 0:a[0])==null?void 0:l.message)==null?void 0:u.content)||""}async getSmartReplies(e){const t=e.slice(-5).map(i=>`${i.senderName||"User"}: ${i.text}`).join(`
`),r=await this.callAI([{role:"system",content:'Предложи 3 коротких варианта ответа на последнее сообщение. Отвечай строго в формате: ["ответ1", "ответ2", "ответ3"]. Не больше 80 символов каждый.'},{role:"user",content:`Контекст:
${t}

Предложи варианты ответа:`}],.8,150);try{return JSON.parse(r)}catch{return r.split(`
`).filter(i=>i.trim())}}async translate(e,t="ru"){const r=t==="ru"?"русский":"английский";return this.callAI([{role:"system",content:`Переведи текст на ${r} язык. Отвечай только переводом, без пояснений.`},{role:"user",content:e}],.3,500)}async summarize(e){const t=e.map(r=>`${r.senderName||"User"}: ${r.text}`).join(`
`);return this.callAI([{role:"system",content:"Сделай краткое саммари переписки в 2-3 предложениях."},{role:"user",content:t}],.5,200)}}const co=new KE;function HE({chat:n,user:e}){const[t,r]=Y([]),[i,s]=Y(""),[a,l]=Y(null),[u,h]=Y({isOnline:!1,lastSeen:null}),[f,v]=Y(null),[m,T]=Y(!1),[C,x]=Y(!1),P=wr(null),N=wr(null);Lt(()=>{if(n)return en.subscribeToMessages(n.id,r)},[n==null?void 0:n.id]),Lt(()=>{var O;(O=P.current)==null||O.scrollIntoView({behavior:"smooth"})},[t]),Lt(()=>{var j;if(!n)return;const O=(j=n.participants)==null?void 0:j.find(K=>K!==e.uid);if(O)return Wd.watchUser(O,h)},[n==null?void 0:n.id,e.uid]),Lt(()=>{const O=()=>v(null);return document.addEventListener("click",O),()=>document.removeEventListener("click",O)},[]);const M=async O=>{O==null||O.preventDefault();const j=a?a.text:i;!j.trim()||!n||(a?(await Yi.editMessage(n.id,a.id,j),l(null)):await en.sendMessage(n.id,j,e),s(""))},U=async O=>{var te;const j=(te=O.target.files)==null?void 0:te[0];if(!j||!n)return;const K=new FileReader;K.onload=async $e=>{await en.sendMessage(n.id,"",e,{type:j.type.startsWith("image/")?"image":"file",fileData:$e.target.result,fileName:j.name})},K.readAsDataURL(j),O.target.value=""},Q=async O=>{confirm("Удалить сообщение?")&&(await Yi.deleteMessage(n.id,O),v(null))},G=(O,j)=>{l({id:O,text:j}),s(j),v(null)},J=(O,j,K,te)=>{O.preventDefault(),K&&v({x:O.clientX,y:O.clientY,messageId:j,text:te})},b=()=>{l(null),s("")},_=async()=>{await gu.startRecording()&&T(!0)},g=async()=>{if(m){try{const O=await gu.stopRecording();await en.sendMessage(n.id,"",e,{type:"voice",fileData:O,fileName:"voice.webm"})}catch(O){console.error("Ошибка голосового:",O)}T(!1)}},E=()=>x(!C),I=async()=>{try{const O=await co.getSmartReplies(t);O.length>0&&s(O[0])}catch(O){alert("AI: "+O.message)}x(!1)},A=async()=>{const O=t[t.length-1];if(O)try{const j=await co.translate(O.text);alert(j)}catch(j){alert("AI: "+j.message)}x(!1)},w=async()=>{try{const O=await co.summarize(t);alert(O)}catch(O){alert("AI: "+O.message)}x(!1)},Te=()=>{var K,te,$e,He;if(!n)return{name:"Чат",email:""};const O=(K=n.participantEmails)==null?void 0:K.findIndex(At=>At!==e.email);return{name:((te=n.participantNames)==null?void 0:te[O])||((He=($e=n.participantEmails)==null?void 0:$e[O])==null?void 0:He.split("@")[0])||"Чат"}},Je=O=>{const j=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let K=0;for(let te=0;te<(O||"").length;te++)K=O.charCodeAt(te)+((K<<5)-K);return j[Math.abs(K)%j.length]},pn=O=>{if(!(O!=null&&O.toDate))return"";const j=O.toDate(),K=j.getHours().toString().padStart(2,"0"),te=j.getMinutes().toString().padStart(2,"0");return`${K}:${te}`},Xe=O=>{if(!O)return"";const K=Math.floor((new Date-O)/1e3);return K<60?"только что":K<3600?`${Math.floor(K/60)} мин назад`:K<86400?`${Math.floor(K/3600)} ч назад`:O.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"})},at=O=>{const j=[];let K="";return O.forEach(te=>{var At,Wr;const $e=(Wr=(At=te.createdAt)==null?void 0:At.toDate)==null?void 0:Wr.call(At),He=($e==null?void 0:$e.toLocaleDateString("ru-RU",{day:"2-digit",month:"long",year:"numeric"}))||"";He!==K&&(K=He,j.push({type:"date",date:He})),j.push({type:"message",data:te})}),j};if(!n)return y("div",{style:H.emptyContainer,children:y("div",{style:H.emptyContent,children:[y("div",{style:H.emptyLogo,children:"🌪️"}),y("h2",{style:H.emptyTitle,children:"Vortex"}),y("p",{style:H.emptyText,children:["Выберите чат или создайте новый,",y("br",{}),"чтобы начать общение"]})]})});const bt=Te(),Hn=Je(bt.name),Ts=at(t);return y("div",{style:H.container,children:[y("div",{style:H.header,children:y("div",{style:H.headerLeft,children:[y("div",{style:{...H.headerAvatar,background:Hn},children:bt.name.charAt(0).toUpperCase()}),y("div",{style:H.headerInfo,children:[y("div",{style:H.headerName,children:bt.name}),y("div",{style:H.headerStatus,children:[y("span",{style:{...H.onlineDot,background:u.isOnline?"var(--vortex-secondary)":"var(--text-tertiary)"}}),u.isOnline?"В сети":u.lastSeen?`Был(а) ${Xe(u.lastSeen)}`:"Не в сети"]})]})]})}),y("div",{style:H.messagesContainer,children:[Ts.map((O,j)=>{if(O.type==="date")return y("div",{style:H.dateDivider,children:y("span",{style:H.dateText,children:O.date})},`date-${j}`);const K=O.data,te=K.senderId===e.uid;return y("div",{style:{...H.messageWrapper,justifyContent:te?"flex-end":"flex-start"},onContextMenu:$e=>J($e,K.id,te,K.text),children:[!te&&y("div",{style:{...H.messageAvatar,background:Hn,marginRight:"8px"},children:bt.name.charAt(0).toUpperCase()}),y("div",{style:{...H.messageBubble,background:te?"var(--gradient-brand)":"var(--bg-tertiary)",borderBottomRightRadius:te?"4px":"16px",borderBottomLeftRadius:te?"16px":"4px",color:te?"white":"var(--text-primary)",maxWidth:"65%"},children:[K.type==="image"?y("img",{src:K.fileData,alt:K.fileName,style:H.messageImage}):K.type==="voice"?y("audio",{controls:!0,src:K.fileData,style:H.messageAudio}):y("div",{style:H.messageText,children:[K.isEdited&&y("span",{style:H.editedMark,children:"(изм.) "}),K.text]}),y("div",{style:H.messageMeta,children:[pn(K.createdAt),te&&y("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:y("polyline",{points:"20 6 9 17 4 12"})})]})]}),te&&y("div",{style:{width:"32px",marginLeft:"8px"}})]},K.id)}),y("div",{ref:P})]}),f&&y("div",{style:{...H.contextMenu,top:f.y,left:f.x},children:[y("button",{style:H.contextMenuItem,onClick:()=>G(f.messageId,f.text),children:"✏️ Редактировать"}),y("button",{style:{...H.contextMenuItem,color:"var(--vortex-danger)"},onClick:()=>Q(f.messageId),children:"🗑️ Удалить"})]}),C&&y("div",{style:H.aiMenu,children:[y("button",{onClick:I,style:H.aiMenuItem,children:"💡 Умный ответ"}),y("button",{onClick:A,style:H.aiMenuItem,children:"🌍 Перевести"}),y("button",{onClick:w,style:H.aiMenuItem,children:"📊 Саммари"})]}),y("div",{style:H.inputContainer,children:[a&&y("div",{style:H.editingBar,children:[y("span",{children:"✏️ Редактирование"}),y("button",{onClick:b,style:H.cancelEditBtn,children:"✕"})]}),y("div",{style:H.inputWrapper,children:[y("button",{style:H.inputBtn,onClick:()=>{var O;return(O=N.current)==null?void 0:O.click()},title:"Прикрепить",children:"📎"}),y("input",{type:"file",ref:N,onChange:U,accept:"image/*",style:{display:"none"}}),y("button",{style:{...H.inputBtn,background:m?"var(--vortex-danger)":"transparent",color:m?"white":"var(--text-secondary)"},onMouseDown:_,onMouseUp:g,onMouseLeave:g,title:"Голосовое сообщение",children:"🎙️"}),y("input",{type:"text",value:i,onInput:O=>s(O.target.value),onKeyDown:O=>O.key==="Enter"&&M(),placeholder:"Сообщение",style:H.messageInput}),y("button",{style:H.inputBtn,onClick:E,title:"AI-помощник",children:"🤖"}),y("button",{onClick:M,disabled:!i.trim(),style:{...H.sendBtn,opacity:i.trim()?1:.4},children:"➤"})]})]})]})}const H={container:{flex:1,display:"flex",flexDirection:"column",background:"var(--bg-primary)",height:"100%",position:"relative"},emptyContainer:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-primary)"},emptyContent:{textAlign:"center",color:"var(--text-tertiary)"},emptyLogo:{fontSize:"5rem",marginBottom:"1rem"},emptyTitle:{fontSize:"1.5rem",fontWeight:700,color:"var(--text-primary)",marginBottom:"0.5rem"},emptyText:{fontSize:"0.9rem",lineHeight:1.6},header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.75rem 1.25rem",borderBottom:"1px solid var(--border-subtle)",background:"rgba(10, 10, 20, 0.9)",backdropFilter:"blur(20px)",zIndex:10},headerLeft:{display:"flex",alignItems:"center",gap:"0.75rem"},headerAvatar:{width:"42px",height:"42px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"1.1rem",flexShrink:0},headerInfo:{display:"flex",flexDirection:"column"},headerName:{fontWeight:600,fontSize:"1rem"},headerStatus:{fontSize:"0.8rem",color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:"6px"},onlineDot:{width:"8px",height:"8px",borderRadius:"50%",display:"inline-block"},messagesContainer:{flex:1,overflowY:"auto",padding:"1rem 1.5rem",display:"flex",flexDirection:"column",gap:"2px"},dateDivider:{textAlign:"center",padding:"1rem 0"},dateText:{background:"rgba(255,255,255,0.06)",color:"var(--text-tertiary)",padding:"4px 16px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:500},messageWrapper:{display:"flex",alignItems:"flex-end",marginBottom:"2px"},messageAvatar:{width:"32px",height:"32px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:600,fontSize:"0.8rem",flexShrink:0},messageBubble:{padding:"0.6rem 0.9rem",borderRadius:"16px",animation:"messageIn 0.2s ease",boxShadow:"0 1px 2px rgba(0,0,0,0.1)"},messageText:{fontSize:"0.9rem",lineHeight:1.5,wordBreak:"break-word"},messageImage:{maxWidth:"280px",borderRadius:"12px",cursor:"pointer"},messageAudio:{maxWidth:"250px",height:"32px"},editedMark:{fontSize:"0.7rem",opacity:.7,fontStyle:"italic"},messageMeta:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"4px",marginTop:"4px",fontSize:"0.7rem",opacity:.7},contextMenu:{position:"fixed",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"12px",boxShadow:"0 8px 24px rgba(0,0,0,0.4)",zIndex:9999,minWidth:"180px",padding:"6px"},contextMenuItem:{display:"block",width:"100%",padding:"10px 14px",background:"transparent",border:"none",borderRadius:"8px",color:"var(--text-primary)",cursor:"pointer",textAlign:"left",fontSize:"0.85rem"},aiMenu:{position:"absolute",bottom:"80px",right:"20px",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"14px",boxShadow:"0 12px 40px rgba(0,0,0,0.5)",padding:"8px",zIndex:50,minWidth:"200px"},aiMenuItem:{display:"block",width:"100%",padding:"12px 16px",background:"transparent",border:"none",borderRadius:"10px",color:"var(--text-primary)",cursor:"pointer",textAlign:"left",fontSize:"0.9rem"},editingBar:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 1rem",background:"rgba(124,58,237,0.1)",borderBottom:"1px solid var(--border-subtle)",fontSize:"0.8rem",color:"var(--vortex-primary-light)"},cancelEditBtn:{background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1rem"},inputContainer:{padding:"0.75rem 1.25rem",borderTop:"1px solid var(--border-subtle)",background:"rgba(10, 10, 20, 0.9)",backdropFilter:"blur(20px)"},inputWrapper:{display:"flex",alignItems:"center",gap:"8px"},inputBtn:{width:"42px",height:"42px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",flexShrink:0},messageInput:{flex:1,padding:"0.7rem 1.25rem",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-default)",borderRadius:"24px",color:"var(--text-primary)",fontSize:"0.95rem",outline:"none",fontFamily:"inherit"},sendBtn:{width:"44px",height:"44px",borderRadius:"50%",background:"var(--gradient-brand)",border:"none",color:"white",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",transition:"all 0.2s",flexShrink:0}};function GE({user:n}){const[e,t]=Y(null);return y("div",{style:{display:"flex",height:"100%"},children:[y(qE,{user:n,activeChat:e,onSelectChat:t}),y(HE,{chat:e,user:n})]})}function QE(){return y("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",background:"var(--bg-primary)"},children:y("div",{style:{textAlign:"center"},children:[y("div",{style:{fontSize:"4rem"},children:"🌪️"}),y("h1",{style:{background:"var(--gradient-brand)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"2rem",fontWeight:800},children:"Vortex"})]})})}class YE{constructor(){this.keyPair=null}async generateKeys(){this.keyPair=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey"])}async exportPublicKey(){this.keyPair||await this.generateKeys();const e=await crypto.subtle.exportKey("raw",this.keyPair.publicKey);return btoa(String.fromCharCode(...new Uint8Array(e)))}async importPublicKey(e){const t=Uint8Array.from(atob(e),r=>r.charCodeAt(0));return crypto.subtle.importKey("raw",t,{name:"ECDH",namedCurve:"P-256"},!1,[])}async encrypt(e,t){this.keyPair||await this.generateKeys();const r=await this.importPublicKey(t),i=await crypto.subtle.deriveKey({name:"ECDH",public:r},this.keyPair.privateKey,{name:"AES-GCM",length:256},!1,["encrypt"]),s=crypto.getRandomValues(new Uint8Array(12)),a=new TextEncoder().encode(e),l=await crypto.subtle.encrypt({name:"AES-GCM",iv:s},i,a),u=new Uint8Array(s.length+l.byteLength);return u.set(s),u.set(new Uint8Array(l),s.length),btoa(String.fromCharCode(...u))}async decrypt(e,t){this.keyPair||await this.generateKeys();const r=await this.importPublicKey(t),i=await crypto.subtle.deriveKey({name:"ECDH",public:r},this.keyPair.privateKey,{name:"AES-GCM",length:256},!1,["decrypt"]),s=Uint8Array.from(atob(e),h=>h.charCodeAt(0)),a=s.slice(0,12),l=s.slice(12),u=await crypto.subtle.decrypt({name:"AES-GCM",iv:a},i,l);return new TextDecoder().decode(u)}async saveKeys(){const e=await this.exportPublicKey(),t=await crypto.subtle.exportKey("jwk",this.keyPair.privateKey);localStorage.setItem("vortex-keys",JSON.stringify({publicKey:e,privateKey:t}))}async loadKeys(){const e=localStorage.getItem("vortex-keys");if(!e)return!1;try{const{publicKey:t,privateKey:r}=JSON.parse(e),i=await crypto.subtle.importKey("jwk",r,{name:"ECDH",namedCurve:"P-256"},!1,["deriveKey"]);return this.keyPair={publicKey:await this.importPublicKey(t),privateKey:i},!0}catch{return!1}}}const uo=new YE;function JE(){const[n,e]=Y(void 0);return Lt(()=>rn.onAuthChange(async t=>{e(t),t&&(await uo.loadKeys()||(await uo.generateKeys(),await uo.saveKeys()),Wd.startTracking())}),[]),n===void 0?y(QE,{}):n?y(GE,{user:n}):y(OE,{})}Pf(y(JE,{}),document.getElementById("app"));
