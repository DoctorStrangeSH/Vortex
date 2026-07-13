var xp=Object.defineProperty;var Dp=(n,e,t)=>e in n?xp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Xo=(n,e,t)=>Dp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var to,he,ph,sn,Mc,mh,gh,Zo,Is,ai,_h,Ga,va,wa,Vs={},Os=[],Np=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,no=Array.isArray;function Nt(n,e){for(var t in e)n[t]=e[t];return n}function Qa(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Vp(n,e,t){var r,i,s,a={};for(s in e)s=="key"?r=e[s]:s=="ref"?i=e[s]:a[s]=e[s];if(arguments.length>2&&(a.children=arguments.length>3?to.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(s in n.defaultProps)a[s]===void 0&&(a[s]=n.defaultProps[s]);return Ts(n,a,r,i,null)}function Ts(n,e,t,r,i){var s={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++ph,__i:-1,__u:0};return i==null&&he.vnode!=null&&he.vnode(s),s}function it(n){return n.children}function bs(n,e){this.props=n,this.context=e}function yr(n,e){if(e==null)return n.__?yr(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?yr(n):null}function Op(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,r=[],i=[],s=Nt({},e);s.__v=e.__v+1,he.vnode&&he.vnode(s),Ya(n.__P,s,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,r,t??yr(e),!!(32&e.__u),i),s.__v=e.__v,s.__.__k[s.__i]=s,Ih(r,s,i),e.__e=e.__=null,s.__e!=t&&yh(s)}}function yh(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),yh(n)}function Lc(n){(!n.__d&&(n.__d=!0)&&sn.push(n)&&!Ms.__r++||Mc!=he.debounceRendering)&&((Mc=he.debounceRendering)||mh)(Ms)}function Ms(){try{for(var n,e=1;sn.length;)sn.length>e&&sn.sort(gh),n=sn.shift(),e=sn.length,Op(n)}finally{sn.length=Ms.__r=0}}function vh(n,e,t,r,i,s,a,l,u,h,f){var _,g,I,R,k,P,V,O=r&&r.__k||Os,z=e.length;for(u=Mp(t,e,O,u,z),_=0;_<z;_++)(I=t.__k[_])!=null&&(g=I.__i!=-1&&O[I.__i]||Vs,I.__i=_,P=Ya(n,I,g,i,s,a,l,u,h,f),R=I.__e,I.ref&&g.ref!=I.ref&&(g.ref&&Ja(g.ref,null,I),f.push(I.ref,I.__c||R,I)),k==null&&R!=null&&(k=R),(V=!!(4&I.__u))||g.__k===I.__k?(u=wh(I,u,n,V),V&&g.__e&&(g.__e=null)):typeof I.type=="function"&&P!==void 0?u=P:R&&(u=R.nextSibling),I.__u&=-7);return t.__e=k,u}function Mp(n,e,t,r,i){var s,a,l,u,h,f=t.length,_=f,g=0;for(n.__k=new Array(i),s=0;s<i;s++)(a=e[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[s]=Ts(null,a,null,null,null):no(a)?a=n.__k[s]=Ts(it,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[s]=Ts(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[s]=a,u=s+g,a.__=n,a.__b=n.__b+1,l=null,(h=a.__i=Lp(a,t,u,_))!=-1&&(_--,(l=t[h])&&(l.__u|=2)),l==null||l.__v==null?(h==-1&&(i>f?g--:i<f&&g++),typeof a.type!="function"&&(a.__u|=4)):h!=u&&(h==u-1?g--:h==u+1?g++:(h>u?g--:g++,a.__u|=4))):n.__k[s]=null;if(_)for(s=0;s<f;s++)(l=t[s])!=null&&!(2&l.__u)&&(l.__e==r&&(r=yr(l)),bh(l,l));return r}function wh(n,e,t,r){var i,s;if(typeof n.type=="function"){for(i=n.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=n,e=wh(i[s],e,t,r));return e}n.__e!=e&&(r&&(e&&n.type&&!e.parentNode&&(e=yr(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Lp(n,e,t,r){var i,s,a,l=n.key,u=n.type,h=e[t],f=h!=null&&(2&h.__u)==0;if(h===null&&l==null||f&&l==h.key&&u==h.type)return t;if(r>(f?1:0)){for(i=t-1,s=t+1;i>=0||s<e.length;)if((h=e[a=i>=0?i--:s++])!=null&&!(2&h.__u)&&l==h.key&&u==h.type)return a}return-1}function Uc(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Np.test(e)?t:t+"px"}function ms(n,e,t,r,i){var s,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||Uc(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||Uc(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")s=e!=(e=e.replace(_h,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+s]=t,t?r?t[ai]=r[ai]:(t[ai]=Ga,n.addEventListener(e,s?wa:va,s)):n.removeEventListener(e,s?wa:va,s);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Fc(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[Is]==null)e[Is]=Ga++;else if(e[Is]<t[ai])return;return t(he.event?he.event(e):e)}}}function Ya(n,e,t,r,i,s,a,l,u,h){var f,_,g,I,R,k,P,V,O,z,X,W,J,E,y,v,T=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),s=[l=e.__e=t.__e]),(f=he.__b)&&f(e);e:if(typeof T=="function"){_=a.length;try{if(O=e.props,z=T.prototype&&T.prototype.render,X=(f=T.contextType)&&r[f.__c],W=f?X?X.props.value:f.__:r,t.__c?V=(g=e.__c=t.__c).__=g.__E:(z?e.__c=g=new T(O,W):(e.__c=g=new bs(O,W),g.constructor=T,g.render=Fp),X&&X.sub(g),g.state||(g.state={}),g.__n=r,I=g.__d=!0,g.__h=[],g._sb=[]),z&&g.__s==null&&(g.__s=g.state),z&&T.getDerivedStateFromProps!=null&&(g.__s==g.state&&(g.__s=Nt({},g.__s)),Nt(g.__s,T.getDerivedStateFromProps(O,g.__s))),R=g.props,k=g.state,g.__v=e,I)z&&T.getDerivedStateFromProps==null&&g.componentWillMount!=null&&g.componentWillMount(),z&&g.componentDidMount!=null&&g.__h.push(g.componentDidMount);else{if(z&&T.getDerivedStateFromProps==null&&O!==R&&g.componentWillReceiveProps!=null&&g.componentWillReceiveProps(O,W),e.__v==t.__v||!g.__e&&g.shouldComponentUpdate!=null&&g.shouldComponentUpdate(O,g.__s,W)===!1){e.__v!=t.__v&&(g.props=O,g.state=g.__s,g.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(b){b&&(b.__=e)}),Os.push.apply(g.__h,g._sb),g._sb=[],g.__h.length&&a.push(g);break e}g.componentWillUpdate!=null&&g.componentWillUpdate(O,g.__s,W),z&&g.componentDidUpdate!=null&&g.__h.push(function(){g.componentDidUpdate(R,k,P)})}if(g.context=W,g.props=O,g.__P=n,g.__e=!1,J=he.__r,E=0,z)g.state=g.__s,g.__d=!1,J&&J(e),f=g.render(g.props,g.state,g.context),Os.push.apply(g.__h,g._sb),g._sb=[];else do g.__d=!1,J&&J(e),f=g.render(g.props,g.state,g.context),g.state=g.__s;while(g.__d&&++E<25);g.state=g.__s,g.getChildContext!=null&&(r=Nt(Nt({},r),g.getChildContext())),z&&!I&&g.getSnapshotBeforeUpdate!=null&&(P=g.getSnapshotBeforeUpdate(R,k)),y=f!=null&&f.type===it&&f.key==null?Th(f.props.children):f,l=vh(n,no(y)?y:[y],e,t,r,i,s,a,l,u,h),g.base=e.__e,e.__u&=-161,g.__h.length&&a.push(g),V&&(g.__E=g.__=null)}catch(b){if(a.length=_,e.__v=null,u||s!=null){if(b.then){for(e.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;s!=null&&(s[s.indexOf(l)]=null),e.__e=l}else if(s!=null)for(v=s.length;v--;)Qa(s[v])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),b.then||Eh(e),he.__e(b,e,t)}}else s==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):l=e.__e=Up(t.__e,e,t,r,i,s,a,u,h);return(f=he.diffed)&&f(e),128&e.__u?void 0:l}function Eh(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Eh))}function Ih(n,e,t){for(var r=0;r<t.length;r++)Ja(t[r],t[++r],t[++r]);he.__c&&he.__c(e,n),n.some(function(i){try{n=i.__h,i.__h=[],n.some(function(s){s.call(i)})}catch(s){he.__e(s,i.__v)}})}function Th(n){return typeof n!="object"||n==null||n.__b>0?n:no(n)?n.map(Th):n.constructor!==void 0?null:Nt({},n)}function Up(n,e,t,r,i,s,a,l,u){var h,f,_,g,I,R,k,P=t.props||Vs,V=e.props,O=e.type;if(O=="svg"?i="http://www.w3.org/2000/svg":O=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),s!=null){for(h=0;h<s.length;h++)if((I=s[h])&&"setAttribute"in I==!!O&&(O?I.localName==O:I.nodeType==3)){n=I,s[h]=null;break}}if(n==null){if(O==null)return document.createTextNode(V);n=document.createElementNS(i,O,V.is&&V),l&&(he.__m&&he.__m(e,s),l=!1),s=null}if(O==null)P===V||l&&n.data==V||(n.data=V);else{if(s=O=="textarea"&&V.defaultValue!=null?null:s&&to.call(n.childNodes),!l&&s!=null)for(P={},h=0;h<n.attributes.length;h++)P[(I=n.attributes[h]).name]=I.value;for(h in P)I=P[h],h=="dangerouslySetInnerHTML"?_=I:h=="children"||h in V||h=="value"&&"defaultValue"in V||h=="checked"&&"defaultChecked"in V||ms(n,h,null,I,i);for(h in V)I=V[h],h=="children"?g=I:h=="dangerouslySetInnerHTML"?f=I:h=="value"?R=I:h=="checked"?k=I:l&&typeof I!="function"||P[h]===I||ms(n,h,I,P[h],i);if(f)l||_&&(f.__html==_.__html||f.__html==n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(_&&(n.innerHTML=""),vh(e.type=="template"?n.content:n,no(g)?g:[g],e,t,r,O=="foreignObject"?"http://www.w3.org/1999/xhtml":i,s,a,s?s[0]:t.__k&&yr(t,0),l,u),s!=null)for(h=s.length;h--;)Qa(s[h]);l&&O!="textarea"||(h="value",O=="progress"&&R==null?n.removeAttribute("value"):R!=null&&(R!==n[h]||O=="progress"&&!R||O=="option"&&R!=P[h])&&ms(n,h,R,P[h],i),h="checked",k!=null&&k!=n[h]&&ms(n,h,k,P[h],i))}return n}function Ja(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(i){he.__e(i,t)}}function bh(n,e,t){var r,i;if(he.unmount&&he.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||Ja(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){he.__e(s,e)}r.base=r.__P=r.__n=null}if(r=n.__k)for(i=0;i<r.length;i++)r[i]&&bh(r[i],e,t||typeof n.type!="function");t||Qa(n.__e),n.__c=n.__=n.__e=void 0}function Fp(n,e,t){return this.constructor(n,t)}function Bp(n,e,t){var r,i,s,a;e==document&&(e=document.documentElement),he.__&&he.__(n,e),i=(r=!1)?null:e.__k,s=[],a=[],Ya(e,n=e.__k=Vp(it,null,[n]),i||Vs,Vs,e.namespaceURI,i?null:e.firstChild?to.call(e.childNodes):null,s,i?i.__e:e.firstChild,r,a),Ih(s,n,a),n.props.children=null}to=Os.slice,he={__e:function(n,e,t,r){for(var i,s,a;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(n)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(n,r||{}),a=i.__d),a)return i.__E=i}catch(l){n=l}throw n}},ph=0,bs.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Nt({},this.state),typeof n=="function"&&(n=n(Nt({},t),this.props)),n&&Nt(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Lc(this))},bs.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Lc(this))},bs.prototype.render=it,sn=[],mh=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,gh=function(n,e){return n.__v.__b-e.__v.__b},Ms.__r=0,Zo=Math.random().toString(8),Is="__d"+Zo,ai="__a"+Zo,_h=/(PointerCapture)$|Capture$/i,Ga=0,va=Fc(!1),wa=Fc(!0);var jp=0;function p(n,e,t,r,i,s){e||(e={});var a,l,u=e;if("ref"in u)for(l in u={},e)l=="ref"?a=e[l]:u[l]=e[l];var h={type:n,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--jp,__i:-1,__u:0,__source:i,__self:s};if(typeof n=="function"&&(a=n.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return he.vnode&&he.vnode(h),h}var gi,Ee,ea,Bc,Ls=0,Ah=[],Ae=he,jc=Ae.__b,zc=Ae.__r,$c=Ae.diffed,qc=Ae.__c,Wc=Ae.unmount,Kc=Ae.__;function Xa(n,e){Ae.__h&&Ae.__h(Ee,n,Ls||e),Ls=0;var t=Ee.__H||(Ee.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function F(n){return Ls=1,zp(Rh,n)}function zp(n,e,t){var r=Xa(gi++,2);if(r.t=n,!r.__c&&(r.__=[Rh(void 0,e),function(l){var u=r.__N?r.__N[0]:r.__[0],h=r.t(u,l);u!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=Ee,!Ee.__f)){var i=function(l,u,h){if(!r.__c.__H)return!0;var f=!1,_=r.__c.props!==l;if(r.__c.__H.__.some(function(I){if(I.__N){f=!0;var R=I.__[0];I.__=I.__N,I.__N=void 0,R!==I.__[0]&&(_=!0)}}),s){var g=s.call(this,l,u,h);return f?g||_:g}return!f||_};Ee.__f=!0;var s=Ee.shouldComponentUpdate,a=Ee.componentWillUpdate;Ee.componentWillUpdate=function(l,u,h){if(this.__e){var f=s;s=void 0,i(l,u,h),s=f}a&&a.call(this,l,u,h)},Ee.shouldComponentUpdate=i}return r.__N||r.__}function qe(n,e){var t=Xa(gi++,3);!Ae.__s&&Sh(t.__H,e)&&(t.__=n,t.u=e,Ee.__H.__h.push(t))}function ln(n){return Ls=5,$p(function(){return{current:n}},[])}function $p(n,e){var t=Xa(gi++,7);return Sh(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function qp(){for(var n;n=Ah.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(As),e.__h.some(Ea),e.__h=[]}catch(t){e.__h=[],Ae.__e(t,n.__v)}}}Ae.__b=function(n){Ee=null,jc&&jc(n)},Ae.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Kc&&Kc(n,e)},Ae.__r=function(n){zc&&zc(n),gi=0;var e=(Ee=n.__c).__H;e&&(ea===Ee?(e.__h=[],Ee.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(As),e.__h.some(Ea),e.__h=[],gi=0)),ea=Ee},Ae.diffed=function(n){$c&&$c(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Ah.push(e)!==1&&Bc===Ae.requestAnimationFrame||((Bc=Ae.requestAnimationFrame)||Wp)(qp)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),ea=Ee=null},Ae.__c=function(n,e){e.some(function(t){try{t.__h.some(As),t.__h=t.__h.filter(function(r){return!r.__||Ea(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],Ae.__e(r,t.__v)}}),qc&&qc(n,e)},Ae.unmount=function(n){Wc&&Wc(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(r){try{As(r)}catch(i){e=i}}),t.__H=void 0,e&&Ae.__e(e,t.__v))};var Hc=typeof requestAnimationFrame=="function";function Wp(n){var e,t=function(){clearTimeout(r),Hc&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);Hc&&(e=requestAnimationFrame(t))}function As(n){var e=Ee,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Ee=e}function Ea(n){var e=Ee;n.__c=n.__(),Ee=e}function Sh(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function Rh(n,e){return typeof e=="function"?e(n):e}var Gc={};/**
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
 */const Ch=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Kp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,_=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,I=h&63;u||(I=64,a||(g=64)),r.push(t[f],t[_],t[g],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ch(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Kp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const _=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||_==null)throw new Hp;const g=s<<2|l>>4;if(r.push(g),h!==64){const I=l<<4&240|h>>2;if(r.push(I),_!==64){const R=h<<6&192|_;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gp=function(n){const e=Ch(n);return Ph.encodeByteArray(e,!0)},Us=function(n){return Gp(n).replace(/\./g,"")},kh=function(n){try{return Ph.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yp=()=>Qp().__FIREBASE_DEFAULTS__,Jp=()=>{if(typeof process>"u"||typeof Gc>"u")return;const n=Gc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&kh(n[1]);return e&&JSON.parse(e)},ro=()=>{try{return Yp()||Jp()||Xp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xh=n=>{var e,t;return(t=(e=ro())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Zp=n=>{const e=xh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Dh=()=>{var n;return(n=ro())===null||n===void 0?void 0:n.config},Nh=n=>{var e;return(e=ro())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class em{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function tm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Us(JSON.stringify(t)),Us(JSON.stringify(a)),""].join(".")}/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function rm(){var n;const e=(n=ro())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function im(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function om(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function am(){const n=He();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function lm(){return!rm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cm(){try{return typeof indexedDB=="object"}catch{return!1}}function um(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const hm="FirebaseError";class It extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=hm,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?dm(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new It(i,l,r)}}function dm(n,e){return n.replace(fm,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fm=/\{\$([^}]+)}/g;function pm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Qc(s)&&Qc(a)){if(!vr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Qc(n){return n!==null&&typeof n=="object"}/**
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
 */function Ci(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ni(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ri(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function mm(n,e){const t=new gm(n,e);return t.subscribe.bind(t)}class gm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");_m(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ta),i.error===void 0&&(i.error=ta),i.complete===void 0&&(i.complete=ta);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _m(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ta(){}/**
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
 */function ye(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dn="[DEFAULT]";/**
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
 */class ym{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new em;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wm(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vm(n){return n===Dn?void 0:n}function wm(n){return n.instantiationMode==="EAGER"}/**
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
 */class Em{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ym(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Im={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Tm=ee.INFO,bm={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Am=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=bm[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Za{constructor(e){this.name=e,this._logLevel=Tm,this._logHandler=Am,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Im[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Sm=(n,e)=>e.some(t=>n instanceof t);let Yc,Jc;function Rm(){return Yc||(Yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cm(){return Jc||(Jc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vh=new WeakMap,Ia=new WeakMap,Oh=new WeakMap,na=new WeakMap,el=new WeakMap;function Pm(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(cn(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Vh.set(t,n)}).catch(()=>{}),el.set(e,n),e}function km(n){if(Ia.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Ia.set(n,e)}let Ta={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ia.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Oh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return cn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xm(n){Ta=n(Ta)}function Dm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ra(this),e,...t);return Oh.set(r,e.sort?e.sort():[e]),cn(r)}:Cm().includes(n)?function(...e){return n.apply(ra(this),e),cn(Vh.get(this))}:function(...e){return cn(n.apply(ra(this),e))}}function Nm(n){return typeof n=="function"?Dm(n):(n instanceof IDBTransaction&&km(n),Sm(n,Rm())?new Proxy(n,Ta):n)}function cn(n){if(n instanceof IDBRequest)return Pm(n);if(na.has(n))return na.get(n);const e=Nm(n);return e!==n&&(na.set(n,e),el.set(e,n)),e}const ra=n=>el.get(n);function Vm(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=cn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(cn(a.result),u.oldVersion,u.newVersion,cn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Om=["get","getKey","getAll","getAllKeys","count"],Mm=["put","add","delete","clear"],ia=new Map;function Xc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ia.get(e))return ia.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Mm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Om.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&u.done]))[0]};return ia.set(e,s),s}xm(n=>({...n,get:(e,t,r)=>Xc(e,t)||n.get(e,t,r),has:(e,t)=>!!Xc(e,t)||n.has(e,t)}));/**
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
 */class Lm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Um(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Um(n){const e=n.getComponent();return e?.type==="VERSION"}const ba="@firebase/app",Zc="0.10.13";/**
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
 */const jt=new Za("@firebase/app"),Fm="@firebase/app-compat",Bm="@firebase/analytics-compat",jm="@firebase/analytics",zm="@firebase/app-check-compat",$m="@firebase/app-check",qm="@firebase/auth",Wm="@firebase/auth-compat",Km="@firebase/database",Hm="@firebase/data-connect",Gm="@firebase/database-compat",Qm="@firebase/functions",Ym="@firebase/functions-compat",Jm="@firebase/installations",Xm="@firebase/installations-compat",Zm="@firebase/messaging",eg="@firebase/messaging-compat",tg="@firebase/performance",ng="@firebase/performance-compat",rg="@firebase/remote-config",ig="@firebase/remote-config-compat",sg="@firebase/storage",og="@firebase/storage-compat",ag="@firebase/firestore",lg="@firebase/vertexai-preview",cg="@firebase/firestore-compat",ug="firebase",hg="10.14.1";/**
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
 */const Fs="[DEFAULT]",dg={[ba]:"fire-core",[Fm]:"fire-core-compat",[jm]:"fire-analytics",[Bm]:"fire-analytics-compat",[$m]:"fire-app-check",[zm]:"fire-app-check-compat",[qm]:"fire-auth",[Wm]:"fire-auth-compat",[Km]:"fire-rtdb",[Hm]:"fire-data-connect",[Gm]:"fire-rtdb-compat",[Qm]:"fire-fn",[Ym]:"fire-fn-compat",[Jm]:"fire-iid",[Xm]:"fire-iid-compat",[Zm]:"fire-fcm",[eg]:"fire-fcm-compat",[tg]:"fire-perf",[ng]:"fire-perf-compat",[rg]:"fire-rc",[ig]:"fire-rc-compat",[sg]:"fire-gcs",[og]:"fire-gcs-compat",[ag]:"fire-fst",[cg]:"fire-fst-compat",[lg]:"fire-vertex","fire-js":"fire-js",[ug]:"fire-js-all"};/**
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
 */const _i=new Map,Mh=new Map,Bs=new Map;function Aa(n,e){try{n.container.addComponent(e)}catch(t){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ln(n){const e=n.name;if(Bs.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;Bs.set(e,n);for(const t of _i.values())Aa(t,n);for(const t of Mh.values())Aa(t,n);return!0}function io(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ut(n){return n.settings!==void 0}/**
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
 */const fg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},un=new Ri("app","Firebase",fg);/**
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
 */class pg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
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
 */const Wn=hg;function tl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw un.create("bad-app-name",{appName:String(i)});if(t||(t=Dh()),!t)throw un.create("no-options");const s=_i.get(i);if(s){if(vr(t,s.options)&&vr(r,s.config))return s;throw un.create("duplicate-app",{appName:i})}const a=new Em(i);for(const u of Bs.values())a.addComponent(u);const l=new pg(t,r,a);return _i.set(i,l),l}function nl(n=Fs){const e=_i.get(n);if(!e&&n===Fs&&Dh())return tl();if(!e)throw un.create("no-app",{appName:n});return e}function Lt(n,e,t){var r;let i=(r=dg[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(l.join(" "));return}Ln(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mg="firebase-heartbeat-database",gg=1,yi="firebase-heartbeat-store";let sa=null;function Lh(){return sa||(sa=Vm(mg,gg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(yi)}catch(t){console.warn(t)}}}}).catch(n=>{throw un.create("idb-open",{originalErrorMessage:n.message})})),sa}async function _g(n){try{const t=(await Lh()).transaction(yi),r=await t.objectStore(yi).get(Uh(n));return await t.done,r}catch(e){if(e instanceof It)jt.warn(e.message);else{const t=un.create("idb-get",{originalErrorMessage:e?.message});jt.warn(t.message)}}}async function eu(n,e){try{const r=(await Lh()).transaction(yi,"readwrite");await r.objectStore(yi).put(e,Uh(n)),await r.done}catch(t){if(t instanceof It)jt.warn(t.message);else{const r=un.create("idb-set",{originalErrorMessage:t?.message});jt.warn(r.message)}}}function Uh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yg=1024,vg=30*24*60*60*1e3;class wg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ig(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=vg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tu(),{heartbeatsToSend:r,unsentEntries:i}=Eg(this._heartbeatsCache.heartbeats),s=Us(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return jt.warn(t),""}}}function tu(){return new Date().toISOString().substring(0,10)}function Eg(n,e=yg){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),nu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),nu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ig{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cm()?um().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await _g(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return eu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return eu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nu(n){return Us(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Tg(n){Ln(new Mn("platform-logger",e=>new Lm(e),"PRIVATE")),Ln(new Mn("heartbeat",e=>new wg(e),"PRIVATE")),Lt(ba,Zc,n),Lt(ba,Zc,"esm2017"),Lt("fire-js","")}Tg("");var bg="firebase",Ag="10.14.1";/**
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
 */Lt(bg,Ag,"app");const Sg=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:It,SDK_VERSION:Wn,_DEFAULT_ENTRY_NAME:Fs,_addComponent:Aa,_apps:_i,_components:Bs,_getProvider:io,_isFirebaseServerApp:ut,_registerComponent:Ln,_serverApps:Mh,getApp:nl,initializeApp:tl,registerVersion:Lt},Symbol.toStringTag,{value:"Module"}));function rl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Fh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bh=Fh,jh=new Ri("auth","Firebase",Fh());/**
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
 */const js=new Za("@firebase/auth");function Rg(n,...e){js.logLevel<=ee.WARN&&js.warn(`Auth (${Wn}): ${n}`,...e)}function Ss(n,...e){js.logLevel<=ee.ERROR&&js.error(`Auth (${Wn}): ${n}`,...e)}/**
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
 */function ht(n,...e){throw il(n,...e)}function _t(n,...e){return il(n,...e)}function zh(n,e,t){const r=Object.assign(Object.assign({},Bh()),{[e]:t});return new Ri("auth","Firebase",r).create(e,{appName:n.name})}function Ut(n){return zh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function il(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return jh.create(n,...e)}function q(n,e,...t){if(!n)throw il(e,...t)}function Vt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ss(e),new Error(e)}function zt(n,e){n||Vt(e)}/**
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
 */function Sa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Cg(){return ru()==="http:"||ru()==="https:"}function ru(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Pg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cg()||sm()||"connection"in navigator)?navigator.onLine:!0}function kg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Pi{constructor(e,t){this.shortDelay=e,this.longDelay=t,zt(t>e,"Short delay should be less than long delay!"),this.isMobile=nm()||om()}get(){return Pg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sl(n,e){zt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class $h{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dg=new Pi(3e4,6e4);function _n(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Wt(n,e,t,r,i={}){return qh(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Ci(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},s);return im()||(h.referrerPolicy="no-referrer"),$h.fetch()(Wh(n,n.config.apiHost,t,l),h)})}async function qh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},xg),e);try{const i=new Vg(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw gs(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw gs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw gs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw gs(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zh(n,f,h);ht(n,f)}}catch(i){if(i instanceof It)throw i;ht(n,"network-request-failed",{message:String(i)})}}async function ki(n,e,t,r,i={}){const s=await Wt(n,e,t,r,i);return"mfaPendingCredential"in s&&ht(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Wh(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?sl(n.config,i):`${n.config.apiScheme}://${i}`}function Ng(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),Dg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=_t(n,e,r);return i.customData._tokenResponse=t,i}function iu(n){return n!==void 0&&n.enterprise!==void 0}class Og{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ng(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Mg(n,e){return Wt(n,"GET","/v2/recaptchaConfig",_n(n,e))}/**
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
 */async function Lg(n,e){return Wt(n,"POST","/v1/accounts:delete",e)}async function Kh(n,e){return Wt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function li(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hh(n,e=!1){const t=ye(n),r=await t.getIdToken(e),i=ol(r);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:li(oa(i.auth_time)),issuedAtTime:li(oa(i.iat)),expirationTime:li(oa(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function oa(n){return Number(n)*1e3}function ol(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ss("JWT malformed, contained fewer than 3 sections"),null;try{const i=kh(t);return i?JSON.parse(i):(Ss("Failed to decode base64 JWT payload"),null)}catch(i){return Ss("Caught error parsing JWT payload as JSON",i?.toString()),null}}function su(n){const e=ol(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof It&&Ug(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ug({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Fg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ra{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zs(n){var e;const t=n.auth,r=await n.getIdToken(),i=await wr(n,Kh(t,{idToken:r}));q(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Qh(s.providerUserInfo):[],l=Bg(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!l?.length,f=u?h:!1,_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ra(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,_)}async function Gh(n){const e=ye(n);await zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qh(n){return n.map(e=>{var{providerId:t}=e,r=rl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jg(n,e){const t=await qh(n,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Wh(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",$h.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zg(n,e){return Wt(n,"POST","/v2/accounts:revokeToken",_n(n,e))}/**
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
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):su(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=su(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await jg(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new fr;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
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
 */function nn(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ot{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=rl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ra(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await wr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Hh(this,e)}reload(){return Gh(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await zs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(Ut(this.auth));const e=await this.getIdToken();return await wr(this,Lg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,u,h,f;const _=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,I=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,V=(h=t.createdAt)!==null&&h!==void 0?h:void 0,O=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:X,isAnonymous:W,providerData:J,stsTokenManager:E}=t;q(z&&E,e,"internal-error");const y=fr.fromJSON(this.name,E);q(typeof z=="string",e,"internal-error"),nn(_,e.name),nn(g,e.name),q(typeof X=="boolean",e,"internal-error"),q(typeof W=="boolean",e,"internal-error"),nn(I,e.name),nn(R,e.name),nn(k,e.name),nn(P,e.name),nn(V,e.name),nn(O,e.name);const v=new Ot({uid:z,auth:e,email:g,emailVerified:X,displayName:_,isAnonymous:W,photoURL:R,phoneNumber:I,tenantId:k,stsTokenManager:y,createdAt:V,lastLoginAt:O});return J&&Array.isArray(J)&&(v.providerData=J.map(T=>Object.assign({},T))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new fr;i.updateFromServerResponse(t);const s=new Ot({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zs(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Qh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,l=new fr;l.updateFromIdToken(r);const u=new Ot({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ra(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}}/**
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
 */const ou=new Map;function Mt(n){zt(n instanceof Function,"Expected a class definition");let e=ou.get(n);return e?(zt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ou.set(n,e),e)}/**
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
 */class Yh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yh.type="NONE";const Ca=Yh;/**
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
 */function Rs(n,e,t){return`firebase:${n}:${e}:${t}`}class pr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Rs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Rs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new pr(Mt(Ca),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Mt(Ca);const a=Rs(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const _=Ot._fromJSON(e,f);h!==s&&(l=_),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new pr(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new pr(s,e,r))}}/**
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
 */function au(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ed(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nd(e))return"Blackberry";if(rd(e))return"Webos";if(Xh(e))return"Safari";if((e.includes("chrome/")||Zh(e))&&!e.includes("edge/"))return"Chrome";if(td(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Jh(n=He()){return/firefox\//i.test(n)}function Xh(n=He()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zh(n=He()){return/crios\//i.test(n)}function ed(n=He()){return/iemobile/i.test(n)}function td(n=He()){return/android/i.test(n)}function nd(n=He()){return/blackberry/i.test(n)}function rd(n=He()){return/webos/i.test(n)}function al(n=He()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $g(n=He()){var e;return al(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qg(){return am()&&document.documentMode===10}function id(n=He()){return al(n)||td(n)||rd(n)||nd(n)||/windows phone/i.test(n)||ed(n)}/**
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
 */function sd(n,e=[]){let t;switch(n){case"Browser":t=au(He());break;case"Worker":t=`${au(He())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wn}/${r}`}/**
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
 */class Wg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Kg(n,e={}){return Wt(n,"GET","/v2/passwordPolicy",_n(n,e))}/**
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
 */const Hg=6;class Gg{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Hg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Qg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lu(this),this.idTokenSubscription=new lu(this),this.beforeStateQueue=new Wg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await pr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Kh(this,{idToken:e}),r=await Ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ut(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zs(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ut(this.app))return Promise.reject(Ut(this));const t=e?ye(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(Ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ut(this.app)?Promise.reject(Ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kg(this),t=new Gg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await zg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mt(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await pr.create(this,[Mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Rg(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Kn(n){return ye(n)}class lu{constructor(e){this.auth=e,this.observer=null,this.addObserver=mm(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let so={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yg(n){so=n}function od(n){return so.loadJS(n)}function Jg(){return so.recaptchaEnterpriseScript}function Xg(){return so.gapiScript}function Zg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const e_="recaptcha-enterprise",t_="NO_RECAPTCHA";class n_{constructor(e){this.type=e_,this.auth=Kn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{Mg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Og(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;iu(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(t_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&iu(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Jg();u.length!==0&&(u+=l),od(u).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function cu(n,e,t,r=!1){const i=new n_(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Pa(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await cu(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await cu(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
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
 */function ad(n,e){const t=io(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(vr(s,e??{}))return i;ht(i,"already-initialized")}return t.initialize({options:e})}function r_(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Mt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function ld(n,e,t){const r=Kn(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=cd(e),{host:a,port:l}=i_(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),s_()}function cd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function i_(n){const e=cd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uu(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:uu(a)}}}function uu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function s_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class oo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,t){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function o_(n,e){return Wt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function a_(n,e){return ki(n,"POST","/v1/accounts:signInWithPassword",_n(n,e))}/**
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
 */async function l_(n,e){return ki(n,"POST","/v1/accounts:signInWithEmailLink",_n(n,e))}async function c_(n,e){return ki(n,"POST","/v1/accounts:signInWithEmailLink",_n(n,e))}/**
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
 */class Er extends oo{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Er(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Er(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pa(e,t,"signInWithPassword",a_);case"emailLink":return l_(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pa(e,r,"signUpPassword",o_);case"emailLink":return c_(e,{idToken:t,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mr(n,e){return ki(n,"POST","/v1/accounts:signInWithIdp",_n(n,e))}/**
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
 */const u_="http://localhost";class fn extends oo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=rl(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new fn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return mr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,mr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mr(e,t)}buildRequest(){const e={requestUri:u_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ci(t)}return e}}/**
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
 */function h_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function d_(n){const e=ni(ri(n)).link,t=e?ni(ri(e)).deep_link_id:null,r=ni(ri(n)).deep_link_id;return(r?ni(ri(r)).link:null)||r||t||e||n}class ao{constructor(e){var t,r,i,s,a,l;const u=ni(ri(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,_=h_((i=u.mode)!==null&&i!==void 0?i:null);q(h&&f&&_,"argument-error"),this.apiKey=h,this.operation=_,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=d_(e);try{return new ao(t)}catch{return null}}}/**
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
 */class Hn{constructor(){this.providerId=Hn.PROVIDER_ID}static credential(e,t){return Er._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ao.parseLink(t);return q(r,"argument-error"),Er._fromEmailAndCode(e,r.code,r.tenantId)}}Hn.PROVIDER_ID="password";Hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ud{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xi extends ud{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pt extends xi{constructor(){super("facebook.com")}static credential(e){return fn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
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
 */class kt extends xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return kt.credential(t,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
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
 */class xt extends xi{constructor(){super("github.com")}static credential(e){return fn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
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
 */class Dt extends xi{constructor(){super("twitter.com")}static credential(e,t){return fn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Dt.credential(t,r)}catch{return null}}}Dt.TWITTER_SIGN_IN_METHOD="twitter.com";Dt.PROVIDER_ID="twitter.com";/**
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
 */async function f_(n,e){return ki(n,"POST","/v1/accounts:signUp",_n(n,e))}/**
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
 */class Un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ot._fromIdTokenResponse(e,r,i),a=hu(r);return new Un({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=hu(r);return new Un({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function hu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class $s extends It{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$s.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new $s(e,t,r,i)}}function hd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$s._fromErrorAndOperation(n,s,e,r):s})}async function p_(n,e,t=!1){const r=await wr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Un._forOperation(n,"link",r)}/**
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
 */async function m_(n,e,t=!1){const{auth:r}=n;if(ut(r.app))return Promise.reject(Ut(r));const i="reauthenticate";try{const s=await wr(n,hd(r,i,e,n),t);q(s.idToken,r,"internal-error");const a=ol(s.idToken);q(a,r,"internal-error");const{sub:l}=a;return q(n.uid===l,r,"user-mismatch"),Un._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
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
 */async function dd(n,e,t=!1){if(ut(n.app))return Promise.reject(Ut(n));const r="signIn",i=await hd(n,r,e),s=await Un._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function fd(n,e){return dd(Kn(n),e)}/**
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
 */async function pd(n){const e=Kn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function md(n,e,t){if(ut(n.app))return Promise.reject(Ut(n));const r=Kn(n),a=await Pa(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",f_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&pd(n),u}),l=await Un._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function gd(n,e,t){return ut(n.app)?Promise.reject(Ut(n)):fd(ye(n),Hn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pd(n),r})}/**
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
 */async function g_(n,e){return Wt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function _d(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ye(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await wr(r,g_(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function yd(n,e,t,r){return ye(n).onIdTokenChanged(e,t,r)}function vd(n,e,t){return ye(n).beforeAuthStateChanged(e,t)}function wd(n,e,t,r){return ye(n).onAuthStateChanged(e,t,r)}function Ed(n){return ye(n).signOut()}const qs="__sak";/**
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
 */class Id{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qs,"1"),this.storage.removeItem(qs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const __=1e3,y_=10;class Td extends Id{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=id(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);qg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,y_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},__)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Td.type="LOCAL";const bd=Td;/**
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
 */class Ad extends Id{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ad.type="SESSION";const ll=Ad;/**
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
 */function v_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new lo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),u=await v_(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lo.receivers=[];/**
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
 */function cl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class w_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=cl("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(_){const g=_;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function yt(){return window}function E_(n){yt().location.href=n}/**
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
 */function Sd(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function I_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T_(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function b_(){return Sd()?self:null}/**
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
 */const Rd="firebaseLocalStorageDb",A_=1,Ws="firebaseLocalStorage",Cd="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function co(n,e){return n.transaction([Ws],e?"readwrite":"readonly").objectStore(Ws)}function S_(){const n=indexedDB.deleteDatabase(Rd);return new Di(n).toPromise()}function ka(){const n=indexedDB.open(Rd,A_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ws,{keyPath:Cd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ws)?e(r):(r.close(),await S_(),e(await ka()))})})}async function du(n,e,t){const r=co(n,!0).put({[Cd]:e,value:t});return new Di(r).toPromise()}async function R_(n,e){const t=co(n,!1).get(e),r=await new Di(t).toPromise();return r===void 0?null:r.value}function fu(n,e){const t=co(n,!0).delete(e);return new Di(t).toPromise()}const C_=800,P_=3;class Pd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ka(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>P_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lo._getInstance(b_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await I_(),!this.activeServiceWorker)return;this.sender=new w_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ka();return await du(e,qs,"1"),await fu(e,qs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>du(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>R_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=co(i,!1).getAll();return new Di(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),C_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pd.type="LOCAL";const kd=Pd;new Pi(3e4,6e4);/**
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
 */function k_(n,e){return e?Mt(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ul extends oo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function x_(n){return dd(n.auth,new ul(n),n.bypassAuthState)}function D_(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),m_(t,new ul(n),n.bypassAuthState)}async function N_(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),p_(t,new ul(n),n.bypassAuthState)}/**
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
 */class xd{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return x_;case"linkViaPopup":case"linkViaRedirect":return N_;case"reauthViaPopup":case"reauthViaRedirect":return D_;default:ht(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const V_=new Pi(2e3,1e4);class hr extends xd{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=cl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,V_.get())};e()}}hr.currentPopupAction=null;/**
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
 */const O_="pendingRedirect",Cs=new Map;class M_ extends xd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Cs.get(this.auth._key());if(!e){try{const r=await L_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Cs.set(this.auth._key(),e)}return this.bypassAuthState||Cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L_(n,e){const t=B_(e),r=F_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function U_(n,e){Cs.set(n._key(),e)}function F_(n){return Mt(n._redirectPersistence)}function B_(n){return Rs(O_,n.config.apiKey,n.name)}async function j_(n,e,t=!1){if(ut(n.app))return Promise.reject(Ut(n));const r=Kn(n),i=k_(r,e),a=await new M_(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const z_=10*60*1e3;class $_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!q_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Dd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(_t(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=z_&&this.cachedEventUids.clear(),this.cachedEventUids.has(pu(e))}saveEventToCache(e){this.cachedEventUids.add(pu(e)),this.lastProcessedEventTime=Date.now()}}function pu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Dd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function q_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dd(n);default:return!1}}/**
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
 */async function W_(n,e={}){return Wt(n,"GET","/v1/projects",e)}/**
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
 */const K_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H_=/^https?/;async function G_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await W_(n);for(const t of e)try{if(Q_(t))return}catch{}ht(n,"unauthorized-domain")}function Q_(n){const e=Sa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!H_.test(t))return!1;if(K_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Y_=new Pi(3e4,6e4);function mu(){const n=yt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function J_(n){return new Promise((e,t)=>{var r,i,s;function a(){mu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mu(),t(_t(n,"network-request-failed"))},timeout:Y_.get()})}if(!((i=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yt().gapi)===null||s===void 0)&&s.load)a();else{const l=Zg("iframefcb");return yt()[l]=()=>{gapi.load?a():t(_t(n,"network-request-failed"))},od(`${Xg()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Ps=null,e})}let Ps=null;function X_(n){return Ps=Ps||J_(n),Ps}/**
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
 */const Z_=new Pi(5e3,15e3),ey="__/auth/iframe",ty="emulator/auth/iframe",ny={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ry=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iy(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?sl(e,ty):`https://${n.config.authDomain}/${ey}`,r={apiKey:e.apiKey,appName:n.name,v:Wn},i=ry.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ci(r).slice(1)}`}async function sy(n){const e=await X_(n),t=yt().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:iy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ny,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=_t(n,"network-request-failed"),l=yt().setTimeout(()=>{s(a)},Z_.get());function u(){yt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const oy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ay=500,ly=600,cy="_blank",uy="http://localhost";class gu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hy(n,e,t,r=ay,i=ly){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},oy),{width:r.toString(),height:i.toString(),top:s,left:a}),h=He().toLowerCase();t&&(l=Zh(h)?cy:t),Jh(h)&&(e=e||uy,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[I,R])=>`${g}${I}=${R},`,"");if($g(h)&&l!=="_self")return dy(e||"",l),new gu(null);const _=window.open(e||"",l,f);q(_,n,"popup-blocked");try{_.focus()}catch{}return new gu(_)}function dy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const fy="__/auth/handler",py="emulator/auth/handler",my=encodeURIComponent("fac");async function _u(n,e,t,r,i,s){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Wn,eventId:i};if(e instanceof ud){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",pm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,_]of Object.entries({}))a[f]=_}if(e instanceof xi){const f=e.getScopes().filter(_=>_!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${my}=${encodeURIComponent(u)}`:"";return`${gy(n)}?${Ci(l).slice(1)}${h}`}function gy({config:n}){return n.emulator?sl(n,py):`https://${n.authDomain}/${fy}`}/**
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
 */const aa="webStorageSupport";class _y{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ll,this._completeRedirectFn=j_,this._overrideRedirectResult=U_}async _openPopup(e,t,r,i){var s;zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await _u(e,t,r,Sa(),i);return hy(e,a,cl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await _u(e,t,r,Sa(),i);return E_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await sy(e),r=new $_(e);return t.register("authEvent",i=>(q(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(aa,{type:aa},i=>{var s;const a=(s=i?.[0])===null||s===void 0?void 0:s[aa];a!==void 0&&t(!!a),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=G_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return id()||Xh()||al()}}const Nd=_y;var yu="@firebase/auth",vu="1.7.9";/**
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
 */class yy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wy(n){Ln(new Mn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sd(n)},h=new Qg(r,i,s,u);return r_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new Mn("auth-internal",e=>{const t=Kn(e.getProvider("auth").getImmediate());return(r=>new yy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(yu,vu,vy(n)),Lt(yu,vu,"esm2017")}/**
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
 */const Ey=5*60,Iy=Nh("authIdTokenMaxAge")||Ey;let wu=null;const Ty=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Iy)return;const i=t?.token;wu!==i&&(wu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vd(n=nl()){const e=io(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ad(n,{popupRedirectResolver:Nd,persistence:[kd,bd,ll]}),r=Nh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Ty(s.toString());vd(t,a,()=>a(t.currentUser)),yd(t,l=>a(l))}}const i=xh("auth");return i&&ld(t,`http://${i}`),t}function by(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Yg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=_t("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",by().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wy("Browser");const Ay=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeURL:ao,AuthCredential:oo,EmailAuthCredential:Er,EmailAuthProvider:Hn,FacebookAuthProvider:Pt,GithubAuthProvider:xt,GoogleAuthProvider:kt,OAuthCredential:fn,TwitterAuthProvider:Dt,beforeAuthStateChanged:vd,browserLocalPersistence:bd,browserPopupRedirectResolver:Nd,browserSessionPersistence:ll,connectAuthEmulator:ld,createUserWithEmailAndPassword:md,getAuth:Vd,getIdTokenResult:Hh,inMemoryPersistence:Ca,indexedDBLocalPersistence:kd,initializeAuth:ad,onAuthStateChanged:wd,onIdTokenChanged:yd,prodErrorMap:Bh,reload:Gh,signInWithCredential:fd,signInWithEmailAndPassword:gd,signOut:Ed,updateProfile:_d},Symbol.toStringTag,{value:"Module"}));var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var On,Od;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(T,b,A){for(var w=Array(arguments.length-2),j=2;j<arguments.length;j++)w[j-2]=arguments[j];return y.prototype[b].apply(T,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)T[b]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(b=0;16>b;++b)T[b]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],b=E.g[2];var A=E.g[3],w=y+(A^v&(b^A))+T[0]+3614090360&4294967295;y=v+(w<<7&4294967295|w>>>25),w=A+(b^y&(v^b))+T[1]+3905402710&4294967295,A=y+(w<<12&4294967295|w>>>20),w=b+(v^A&(y^v))+T[2]+606105819&4294967295,b=A+(w<<17&4294967295|w>>>15),w=v+(y^b&(A^y))+T[3]+3250441966&4294967295,v=b+(w<<22&4294967295|w>>>10),w=y+(A^v&(b^A))+T[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=A+(b^y&(v^b))+T[5]+1200080426&4294967295,A=y+(w<<12&4294967295|w>>>20),w=b+(v^A&(y^v))+T[6]+2821735955&4294967295,b=A+(w<<17&4294967295|w>>>15),w=v+(y^b&(A^y))+T[7]+4249261313&4294967295,v=b+(w<<22&4294967295|w>>>10),w=y+(A^v&(b^A))+T[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=A+(b^y&(v^b))+T[9]+2336552879&4294967295,A=y+(w<<12&4294967295|w>>>20),w=b+(v^A&(y^v))+T[10]+4294925233&4294967295,b=A+(w<<17&4294967295|w>>>15),w=v+(y^b&(A^y))+T[11]+2304563134&4294967295,v=b+(w<<22&4294967295|w>>>10),w=y+(A^v&(b^A))+T[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=A+(b^y&(v^b))+T[13]+4254626195&4294967295,A=y+(w<<12&4294967295|w>>>20),w=b+(v^A&(y^v))+T[14]+2792965006&4294967295,b=A+(w<<17&4294967295|w>>>15),w=v+(y^b&(A^y))+T[15]+1236535329&4294967295,v=b+(w<<22&4294967295|w>>>10),w=y+(b^A&(v^b))+T[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=A+(v^b&(y^v))+T[6]+3225465664&4294967295,A=y+(w<<9&4294967295|w>>>23),w=b+(y^v&(A^y))+T[11]+643717713&4294967295,b=A+(w<<14&4294967295|w>>>18),w=v+(A^y&(b^A))+T[0]+3921069994&4294967295,v=b+(w<<20&4294967295|w>>>12),w=y+(b^A&(v^b))+T[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=A+(v^b&(y^v))+T[10]+38016083&4294967295,A=y+(w<<9&4294967295|w>>>23),w=b+(y^v&(A^y))+T[15]+3634488961&4294967295,b=A+(w<<14&4294967295|w>>>18),w=v+(A^y&(b^A))+T[4]+3889429448&4294967295,v=b+(w<<20&4294967295|w>>>12),w=y+(b^A&(v^b))+T[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=A+(v^b&(y^v))+T[14]+3275163606&4294967295,A=y+(w<<9&4294967295|w>>>23),w=b+(y^v&(A^y))+T[3]+4107603335&4294967295,b=A+(w<<14&4294967295|w>>>18),w=v+(A^y&(b^A))+T[8]+1163531501&4294967295,v=b+(w<<20&4294967295|w>>>12),w=y+(b^A&(v^b))+T[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=A+(v^b&(y^v))+T[2]+4243563512&4294967295,A=y+(w<<9&4294967295|w>>>23),w=b+(y^v&(A^y))+T[7]+1735328473&4294967295,b=A+(w<<14&4294967295|w>>>18),w=v+(A^y&(b^A))+T[12]+2368359562&4294967295,v=b+(w<<20&4294967295|w>>>12),w=y+(v^b^A)+T[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=A+(y^v^b)+T[8]+2272392833&4294967295,A=y+(w<<11&4294967295|w>>>21),w=b+(A^y^v)+T[11]+1839030562&4294967295,b=A+(w<<16&4294967295|w>>>16),w=v+(b^A^y)+T[14]+4259657740&4294967295,v=b+(w<<23&4294967295|w>>>9),w=y+(v^b^A)+T[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=A+(y^v^b)+T[4]+1272893353&4294967295,A=y+(w<<11&4294967295|w>>>21),w=b+(A^y^v)+T[7]+4139469664&4294967295,b=A+(w<<16&4294967295|w>>>16),w=v+(b^A^y)+T[10]+3200236656&4294967295,v=b+(w<<23&4294967295|w>>>9),w=y+(v^b^A)+T[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=A+(y^v^b)+T[0]+3936430074&4294967295,A=y+(w<<11&4294967295|w>>>21),w=b+(A^y^v)+T[3]+3572445317&4294967295,b=A+(w<<16&4294967295|w>>>16),w=v+(b^A^y)+T[6]+76029189&4294967295,v=b+(w<<23&4294967295|w>>>9),w=y+(v^b^A)+T[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=A+(y^v^b)+T[12]+3873151461&4294967295,A=y+(w<<11&4294967295|w>>>21),w=b+(A^y^v)+T[15]+530742520&4294967295,b=A+(w<<16&4294967295|w>>>16),w=v+(b^A^y)+T[2]+3299628645&4294967295,v=b+(w<<23&4294967295|w>>>9),w=y+(b^(v|~A))+T[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=A+(v^(y|~b))+T[7]+1126891415&4294967295,A=y+(w<<10&4294967295|w>>>22),w=b+(y^(A|~v))+T[14]+2878612391&4294967295,b=A+(w<<15&4294967295|w>>>17),w=v+(A^(b|~y))+T[5]+4237533241&4294967295,v=b+(w<<21&4294967295|w>>>11),w=y+(b^(v|~A))+T[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=A+(v^(y|~b))+T[3]+2399980690&4294967295,A=y+(w<<10&4294967295|w>>>22),w=b+(y^(A|~v))+T[10]+4293915773&4294967295,b=A+(w<<15&4294967295|w>>>17),w=v+(A^(b|~y))+T[1]+2240044497&4294967295,v=b+(w<<21&4294967295|w>>>11),w=y+(b^(v|~A))+T[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=A+(v^(y|~b))+T[15]+4264355552&4294967295,A=y+(w<<10&4294967295|w>>>22),w=b+(y^(A|~v))+T[6]+2734768916&4294967295,b=A+(w<<15&4294967295|w>>>17),w=v+(A^(b|~y))+T[13]+1309151649&4294967295,v=b+(w<<21&4294967295|w>>>11),w=y+(b^(v|~A))+T[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=A+(v^(y|~b))+T[11]+3174756917&4294967295,A=y+(w<<10&4294967295|w>>>22),w=b+(y^(A|~v))+T[2]+718787259&4294967295,b=A+(w<<15&4294967295|w>>>17),w=v+(A^(b|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,T=this.B,b=this.h,A=0;A<y;){if(b==0)for(;A<=v;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<y;)if(T[b++]=E.charCodeAt(A++),b==this.blockSize){i(this,T),b=0;break}}else for(;A<y;)if(T[b++]=E[A++],b==this.blockSize){i(this,T),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)E[v++]=this.g[y]>>>T&255;return E};function s(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function a(E,y){this.h=y;for(var v=[],T=!0,b=E.length-1;0<=b;b--){var A=E[b]|0;T&&A==y||(v[b]=A,T=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new a([y|0],0>y?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return _;if(0>E)return P(h(-E));for(var y=[],v=1,T=0;E>=v;T++)y[T]=E/v|0,v*=4294967296;return new a(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return P(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),T=_,b=0;b<E.length;b+=8){var A=Math.min(8,E.length-b),w=parseInt(E.substring(b,b+A),y);8>A?(A=h(Math.pow(y,A)),T=T.j(A).add(h(w))):(T=T.j(v),T=T.add(h(w)))}return T}var _=u(0),g=u(1),I=u(16777216);n=a.prototype,n.m=function(){if(k(this))return-P(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(k(this))return"-"+P(this).toString(E);for(var y=h(Math.pow(E,6)),v=this,T="";;){var b=X(v,y).g;v=V(v,b.j(y));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=b,R(v))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=V(this,E),k(E)?-1:R(E)?0:1};function P(E){for(var y=E.g.length,v=[],T=0;T<y;T++)v[T]=~E.g[T];return new a(v,~E.h).add(g)}n.abs=function(){return k(this)?P(this):this},n.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0,b=0;b<=y;b++){var A=T+(this.i(b)&65535)+(E.i(b)&65535),w=(A>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);T=w>>>16,A&=65535,w&=65535,v[b]=w<<16|A}return new a(v,v[v.length-1]&-2147483648?-1:0)};function V(E,y){return E.add(P(y))}n.j=function(E){if(R(this)||R(E))return _;if(k(this))return k(E)?P(this).j(P(E)):P(P(this).j(E));if(k(E))return P(this.j(P(E)));if(0>this.l(I)&&0>E.l(I))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<E.g.length;b++){var A=this.i(T)>>>16,w=this.i(T)&65535,j=E.i(b)>>>16,re=E.i(b)&65535;v[2*T+2*b]+=w*re,O(v,2*T+2*b),v[2*T+2*b+1]+=A*re,O(v,2*T+2*b+1),v[2*T+2*b+1]+=w*j,O(v,2*T+2*b+1),v[2*T+2*b+2]+=A*j,O(v,2*T+2*b+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new a(v,0)};function O(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function z(E,y){this.g=E,this.h=y}function X(E,y){if(R(y))throw Error("division by zero");if(R(E))return new z(_,_);if(k(E))return y=X(P(E),y),new z(P(y.g),P(y.h));if(k(y))return y=X(E,P(y)),new z(P(y.g),y.h);if(30<E.g.length){if(k(E)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,T=y;0>=T.l(E);)v=W(v),T=W(T);var b=J(v,1),A=J(T,1);for(T=J(T,2),v=J(v,2);!R(T);){var w=A.add(T);0>=w.l(E)&&(b=b.add(v),A=w),T=J(T,1),v=J(v,1)}return y=V(E,b.j(y)),new z(b,y)}for(b=_;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=h(v),w=A.j(y);k(w)||0<w.l(E);)v-=T,A=h(v),w=A.j(y);R(A)&&(A=g),b=b.add(A),E=V(E,w)}return new z(b,E)}n.A=function(E){return X(this,E).h},n.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&E.i(T);return new a(v,this.h&E.h)},n.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|E.i(T);return new a(v,this.h|E.h)},n.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^E.i(T);return new a(v,this.h^E.h)};function W(E){for(var y=E.g.length+1,v=[],T=0;T<y;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(v,E.h)}function J(E,y){var v=y>>5;y%=32;for(var T=E.g.length-v,b=[],A=0;A<T;A++)b[A]=0<y?E.i(A+v)>>>y|E.i(A+v+1)<<32-y:E.i(A+v);return new a(b,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Od=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,On=a}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});var _s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Md,ii,Ld,ks,xa,Ud,Fd,Bd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof _s=="object"&&_s];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var S=o[m];if(!(S in d))break e;d=d[S]}o=o[o.length-1],m=d[o],c=c(m),c!=m&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,m=!1,S={next:function(){if(!m&&d<o.length){var C=d++;return{value:c(C,o[C]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function _(o,c,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),o.apply(c,S)}}return function(){return o.apply(c,arguments)}}function g(o,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,g.apply(null,arguments)}function I(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function R(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,S,C){for(var M=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)M[ue-2]=arguments[ue];return c.prototype[S].apply(m,M)}}function k(o){const c=o.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=o[m];return d}return[]}function P(o,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const S=o.length||0,C=m.length||0;o.length=S+C;for(let M=0;M<C;M++)o[S+M]=m[M]}else o.push(m)}}class V{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function X(o){return X[" "](o),o}X[" "]=function(){};var W=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function J(o,c,d){for(const m in o)c.call(d,o[m],m,o)}function E(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function y(o){const c={};for(const d in o)c[d]=o[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let d,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(d in m)o[d]=m[d];for(let C=0;C<v.length;C++)d=v[C],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function b(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function w(){var o=wn;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class j{constructor(){this.h=this.g=null}add(c,d){const m=re.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var re=new V(()=>new Ce,o=>o.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,lt=!1,wn=new j,zi=()=>{const o=l.Promise.resolve(void 0);Ie=()=>{o.then($i)}};var $i=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){A(d)}var c=re;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}lt=!1};function pt(){this.s=this.s,this.C=this.C}pt.prototype.s=!1,pt.prototype.ma=function(){this.s||(this.s=!0,this.N())},pt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var Lr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function Kt(o,c){if(Pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(W){e:{try{X(c.nodeName);var S=!0;break e}catch{}S=!1}S||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:En[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Kt.aa.h.call(this)}}R(Kt,Pe);var En={2:"touch",3:"pen",4:"mouse"};Kt.prototype.h=function(){Kt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ht="closure_listenable_"+(1e6*Math.random()|0),Ur=0;function qi(o,c,d,m,S){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=S,this.key=++Ur,this.da=this.fa=!1}function Jn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Xn(o){this.src=o,this.g={},this.h=0}Xn.prototype.add=function(o,c,d,m,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var M=Zn(o,c,m,S);return-1<M?(c=o[M],d||(c.fa=!1)):(c=new qi(c,this.src,C,!!m,S),c.fa=d,o.push(c)),c};function In(o,c){var d=c.type;if(d in o.g){var m=o.g[d],S=Array.prototype.indexOf.call(m,c,void 0),C;(C=0<=S)&&Array.prototype.splice.call(m,S,1),C&&(Jn(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Zn(o,c,d,m){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==c&&C.capture==!!d&&C.ha==m)return S}return-1}var Tn="closure_lm_"+(1e6*Math.random()|0),Fr={};function Wi(o,c,d,m,S){if(Array.isArray(c)){for(var C=0;C<c.length;C++)Wi(o,c[C],d,m,S);return null}return d=Gi(d),o&&o[Ht]?o.K(c,d,h(m)?!!m.capture:!1,S):Vo(o,c,d,!1,m,S)}function Vo(o,c,d,m,S,C){if(!c)throw Error("Invalid event type");var M=h(S)?!!S.capture:!!S,ue=jr(o);if(ue||(o[Tn]=ue=new Xn(o)),d=ue.add(c,d,m,M,C),d.proxy)return d;if(m=Oo(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Lr||(S=M),S===void 0&&(S=!1),o.addEventListener(c.toString(),m,S);else if(o.attachEvent)o.attachEvent(Hi(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Oo(){function o(d){return c.call(o.src,o.listener,d)}const c=Mo;return o}function Ki(o,c,d,m,S){if(Array.isArray(c))for(var C=0;C<c.length;C++)Ki(o,c[C],d,m,S);else m=h(m)?!!m.capture:!!m,d=Gi(d),o&&o[Ht]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],d=Zn(C,d,m,S),-1<d&&(Jn(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=jr(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Zn(c,d,m,S)),(d=-1<o?c[o]:null)&&Br(d))}function Br(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ht])In(c.i,o);else{var d=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(d,m,o.capture):c.detachEvent?c.detachEvent(Hi(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=jr(c))?(In(d,o),d.h==0&&(d.src=null,c[Tn]=null)):Jn(o)}}}function Hi(o){return o in Fr?Fr[o]:Fr[o]="on"+o}function Mo(o,c){if(o.da)o=!0;else{c=new Kt(c,this);var d=o.listener,m=o.ha||o.src;o.fa&&Br(o),o=d.call(m,c)}return o}function jr(o){return o=o[Tn],o instanceof Xn?o:null}var zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gi(o){return typeof o=="function"?o:(o[zr]||(o[zr]=function(c){return o.handleEvent(c)}),o[zr])}function ke(){pt.call(this),this.i=new Xn(this),this.M=this,this.F=null}R(ke,pt),ke.prototype[Ht]=!0,ke.prototype.removeEventListener=function(o,c,d,m){Ki(this,o,c,d,m)};function xe(o,c){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new Pe(c,o);else if(c instanceof Pe)c.target=c.target||o;else{var S=c;c=new Pe(m,o),T(c,S)}if(S=!0,d)for(var C=d.length-1;0<=C;C--){var M=c.g=d[C];S=er(M,m,!0,c)&&S}if(M=c.g=o,S=er(M,m,!0,c)&&S,S=er(M,m,!1,c)&&S,d)for(C=0;C<d.length;C++)M=c.g=d[C],S=er(M,m,!1,c)&&S}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],m=0;m<d.length;m++)Jn(d[m]);delete o.g[c],o.h--}}this.F=null},ke.prototype.K=function(o,c,d,m){return this.i.add(String(o),c,!1,d,m)},ke.prototype.L=function(o,c,d,m){return this.i.add(String(o),c,!0,d,m)};function er(o,c,d,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var S=!0,C=0;C<c.length;++C){var M=c[C];if(M&&!M.da&&M.capture==d){var ue=M.listener,Me=M.ha||M.src;M.fa&&In(o.i,M),S=ue.call(Me,m)!==!1&&S}}return S&&!m.defaultPrevented}function Qi(o,c,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Yi(o){o.g=Qi(()=>{o.g=null,o.i&&(o.i=!1,Yi(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Lo extends pt{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Yi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bn(o){pt.call(this),this.h=o,this.g={}}R(bn,pt);var Ji=[];function Xi(o){J(o.g,function(c,d){this.g.hasOwnProperty(d)&&Br(c)},o),o.g={}}bn.prototype.N=function(){bn.aa.N.call(this),Xi(this)},bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $r=l.JSON.stringify,Uo=l.JSON.parse,Fo=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function qr(){}qr.prototype.h=null;function Zi(o){return o.h||(o.h=o.i())}function es(){}var An={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tr(){Pe.call(this,"d")}R(tr,Pe);function Wr(){Pe.call(this,"c")}R(Wr,Pe);var bt={},Gt=null;function Sn(){return Gt=Gt||new ke}bt.La="serverreachability";function Kr(o){Pe.call(this,bt.La,o)}R(Kr,Pe);function Rn(o){const c=Sn();xe(c,new Kr(c))}bt.STAT_EVENT="statevent";function ts(o,c){Pe.call(this,bt.STAT_EVENT,o),this.stat=c}R(ts,Pe);function Oe(o){const c=Sn();xe(c,new ts(c,o))}bt.Ma="timingevent";function nr(o,c){Pe.call(this,bt.Ma,o),this.size=c}R(nr,Pe);function Qt(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Yt(){this.g=!0}Yt.prototype.xa=function(){this.g=!1};function D(o,c,d,m,S,C){o.info(function(){if(o.g)if(C)for(var M="",ue=C.split("&"),Me=0;Me<ue.length;Me++){var ie=ue[Me].split("=");if(1<ie.length){var Be=ie[0];ie=ie[1];var je=Be.split("_");M=2<=je.length&&je[1]=="type"?M+(Be+"="+ie+"&"):M+(Be+"=redacted&")}}else M=null;else M=C;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+c+`
`+d+`
`+M})}function L(o,c,d,m,S,C,M){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+c+`
`+d+`
`+C+" "+M})}function G(o,c,d,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Jt(o,d)+(m?" "+m:"")})}function pe(o,c){o.info(function(){return"TIMEOUT: "+c})}Yt.prototype.info=function(){};function Jt(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var M=1;M<S.length;M++)S[M]=""}}}}return $r(d)}catch{return c}}var Xt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Jl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bo;function ns(){}R(ns,qr),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},Bo=new ns;function Zt(o,c,d,m){this.j=o,this.i=c,this.l=d,this.R=m||1,this.U=new bn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xl}function Xl(){this.i=null,this.g="",this.h=!1}var Zl={},jo={};function zo(o,c,d){o.L=1,o.v=os(At(c)),o.m=d,o.P=!0,ec(o,null)}function ec(o,c){o.F=Date.now(),rs(o),o.A=At(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),pc(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Xl,o.g=Dc(o.j,d?c:null,!o.m),0<o.O&&(o.M=new Lo(g(o.Y,o,o.g),o.O)),c=o.U,d=o.g,m=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Ji[0]=S.toString()),S=Ji);for(var C=0;C<S.length;C++){var M=Wi(d,S[C],m||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Rn(),D(o.i,o.u,o.A,o.l,o.R,o.m)}Zt.prototype.ca=function(o){o=o.target;const c=this.M;c&&St(o)==3?c.j():this.Y(o)},Zt.prototype.Y=function(o){try{if(o==this.g)e:{const je=St(this.g);var c=this.g.Ba();const sr=this.g.Z();if(!(3>je)&&(je!=3||this.g&&(this.h.h||this.g.oa()||Ec(this.g)))){this.J||je!=4||c==7||(c==8||0>=sr?Rn(3):Rn(2)),$o(this);var d=this.g.Z();this.X=d;t:if(tc(this)){var m=Ec(this.g);o="";var S=m.length,C=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),Hr(this);var M="";break t}this.h.i=new l.TextDecoder}for(c=0;c<S;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(C&&c==S-1)});m.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=d==200,L(this.i,this.u,this.A,this.l,this.R,je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Me=this.g;if((ue=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(ue)){var ie=ue;break t}}ie=null}if(d=ie)G(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qo(this,d);else{this.o=!1,this.s=3,Oe(12),Cn(this),Hr(this);break e}}if(this.P){d=!0;let ct;for(;!this.J&&this.C<M.length;)if(ct=dp(this,M),ct==jo){je==4&&(this.s=4,Oe(14),d=!1),G(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Zl){this.s=4,Oe(15),G(this.i,this.l,M,"[Invalid Chunk]"),d=!1;break}else G(this.i,this.l,ct,null),qo(this,ct);if(tc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),je!=4||M.length!=0||this.h.h||(this.s=1,Oe(16),d=!1),this.o=this.o&&d,!d)G(this.i,this.l,M,"[Invalid Chunked Response]"),Cn(this),Hr(this);else if(0<M.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Yo(Be),Be.M=!0,Oe(11))}}else G(this.i,this.l,M,null),qo(this,M);je==4&&Cn(this),this.o&&!this.J&&(je==4?Cc(this.j,this):(this.o=!1,rs(this)))}else Pp(this.g),d==400&&0<M.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),Cn(this),Hr(this)}}}catch{}finally{}};function tc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function dp(o,c){var d=o.C,m=c.indexOf(`
`,d);return m==-1?jo:(d=Number(c.substring(d,m)),isNaN(d)?Zl:(m+=1,m+d>c.length?jo:(c=c.slice(m,m+d),o.C=m+d,c)))}Zt.prototype.cancel=function(){this.J=!0,Cn(this)};function rs(o){o.S=Date.now()+o.I,nc(o,o.I)}function nc(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Qt(g(o.ba,o),c)}function $o(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Zt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(pe(this.i,this.A),this.L!=2&&(Rn(),Oe(17)),Cn(this),this.s=2,Hr(this)):nc(this,this.S-o)};function Hr(o){o.j.G==0||o.J||Cc(o.j,o)}function Cn(o){$o(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Xi(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function qo(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Wo(d.h,o))){if(!o.K&&Wo(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ds(d),us(d);else break e;Qo(d),Oe(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=Qt(g(d.Za,d),6e3));if(1>=sc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else kn(d,11)}else if((o.K||d.g==o)&&ds(d),!O(c))for(S=d.Da.g.parse(c),c=0;c<S.length;c++){let ie=S[c];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const Be=ie[3];Be!=null&&(d.la=Be,d.j.info("VER="+d.la));const je=ie[4];je!=null&&(d.Aa=je,d.j.info("SVER="+d.Aa));const sr=ie[5];sr!=null&&typeof sr=="number"&&0<sr&&(m=1.5*sr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const ct=o.g;if(ct){const ps=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ps){var C=m.h;C.g||ps.indexOf("spdy")==-1&&ps.indexOf("quic")==-1&&ps.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ko(C,C.h),C.h=null))}if(m.D){const Jo=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Jo&&(m.ya=Jo,de(m.I,m.D,Jo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var M=o;if(m.qa=xc(m,m.J?m.ia:null,m.W),M.K){oc(m.h,M);var ue=M,Me=m.L;Me&&(ue.I=Me),ue.B&&($o(ue),rs(ue)),m.g=M}else Sc(m);0<d.i.length&&hs(d)}else ie[0]!="stop"&&ie[0]!="close"||kn(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?kn(d,7):Go(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}Rn(4)}catch{}}var fp=class{constructor(o,c){this.g=o,this.map=c}};function rc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ic(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function sc(o){return o.h?1:o.g?o.g.size:0}function Wo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ko(o,c){o.g?o.g.add(c):o.h=c}function oc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}rc.prototype.cancel=function(){if(this.i=ac(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ac(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return k(o.i)}function pp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,m=0;m<d;m++)c.push(o[m]);return c}c=[],d=0;for(m in o)c[d++]=o[m];return c}function mp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const m in o)c[d++]=m;return c}}}function lc(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=mp(o),m=pp(o),S=m.length,C=0;C<S;C++)c.call(void 0,m[C],d&&d[C],o)}var cc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gp(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),S=null;if(0<=m){var C=o[d].substring(0,m);S=o[d].substring(m+1)}else C=o[d];c(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Pn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Pn){this.h=o.h,is(this,o.j),this.o=o.o,this.g=o.g,ss(this,o.s),this.l=o.l;var c=o.i,d=new Yr;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),uc(this,d),this.m=o.m}else o&&(c=String(o).match(cc))?(this.h=!1,is(this,c[1]||"",!0),this.o=Gr(c[2]||""),this.g=Gr(c[3]||"",!0),ss(this,c[4]),this.l=Gr(c[5]||"",!0),uc(this,c[6]||"",!0),this.m=Gr(c[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}Pn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Qr(c,hc,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Qr(c,hc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Qr(d,d.charAt(0)=="/"?vp:yp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Qr(d,Ep)),o.join("")};function At(o){return new Pn(o)}function is(o,c,d){o.j=d?Gr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ss(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function uc(o,c,d){c instanceof Yr?(o.i=c,Ip(o.i,o.h)):(d||(c=Qr(c,wp)),o.i=new Yr(c,o.h))}function de(o,c,d){o.i.set(c,d)}function os(o){return de(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Gr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Qr(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,_p),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function _p(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var hc=/[#\/\?@]/g,yp=/[#\?:]/g,vp=/[#\?]/g,wp=/[#\?@]/g,Ep=/#/g;function Yr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function en(o){o.g||(o.g=new Map,o.h=0,o.i&&gp(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Yr.prototype,n.add=function(o,c){en(this),this.i=null,o=rr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function dc(o,c){en(o),c=rr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function fc(o,c){return en(o),c=rr(o,c),o.g.has(c)}n.forEach=function(o,c){en(this),this.g.forEach(function(d,m){d.forEach(function(S){o.call(c,S,m,this)},this)},this)},n.na=function(){en(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const S=o[m];for(let C=0;C<S.length;C++)d.push(c[m])}return d},n.V=function(o){en(this);let c=[];if(typeof o=="string")fc(this,o)&&(c=c.concat(this.g.get(rr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return en(this),this.i=null,o=rr(this,o),fc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function pc(o,c,d){dc(o,c),0<d.length&&(o.i=null,o.g.set(rr(o,c),k(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const C=encodeURIComponent(String(m)),M=this.V(m);for(m=0;m<M.length;m++){var S=C;M[m]!==""&&(S+="="+encodeURIComponent(String(M[m]))),o.push(S)}}return this.i=o.join("&")};function rr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Ip(o,c){c&&!o.j&&(en(o),o.i=null,o.g.forEach(function(d,m){var S=m.toLowerCase();m!=S&&(dc(this,m),pc(this,S,d))},o)),o.j=c}function Tp(o,c){const d=new Yt;if(l.Image){const m=new Image;m.onload=I(tn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=I(tn,d,"TestLoadImage: error",!1,c,m),m.onabort=I(tn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=I(tn,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function bp(o,c){const d=new Yt,m=new AbortController,S=setTimeout(()=>{m.abort(),tn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(C=>{clearTimeout(S),C.ok?tn(d,"TestPingServer: ok",!0,c):tn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),tn(d,"TestPingServer: error",!1,c)})}function tn(o,c,d,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(d)}catch{}}function Ap(){this.g=new Fo}function Sp(o,c,d){const m=d||"";try{lc(o,function(S,C){let M=S;h(S)&&(M=$r(S)),c.push(m+C+"="+encodeURIComponent(M))})}catch(S){throw c.push(m+"type="+encodeURIComponent("_badmap")),S}}function as(o){this.l=o.Ub||null,this.j=o.eb||!1}R(as,qr),as.prototype.g=function(){return new ls(this.l,this.j)},as.prototype.i=function(o){return function(){return o}}({});function ls(o,c){ke.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ls,ke),n=ls.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Xr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Xr(this)),this.g&&(this.readyState=3,Xr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function mc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Jr(this):Xr(this),this.readyState==3&&mc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Jr(this))},n.Qa=function(o){this.g&&(this.response=o,Jr(this))},n.ga=function(){this.g&&Jr(this)};function Jr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Xr(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Xr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function gc(o){let c="";return J(o,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Ho(o,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=gc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):de(o,c,d))}function _e(o){ke.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(_e,ke);var Rp=/^https?$/i,Cp=["POST","PUT"];n=_e.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bo.g(),this.v=this.o?Zi(this.o):Zi(Bo),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){_c(this,C);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)d.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())d.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Cp,c,void 0))||m||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,M]of d)this.g.setRequestHeader(C,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){_c(this,C)}};function _c(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,yc(o),cs(o)}function yc(o){o.A||(o.A=!0,xe(o,"complete"),xe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,xe(this,"complete"),xe(this,"abort"),cs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),_e.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?vc(this):this.bb())},n.bb=function(){vc(this)};function vc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||St(o)!=4||o.Z()!=2)){if(o.u&&St(o)==4)Qi(o.Ea,0,o);else if(xe(o,"readystatechange"),St(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=M===0){var S=String(o.D).match(cc)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),m=!Rp.test(S?S.toLowerCase():"")}d=m}if(d)xe(o,"complete"),xe(o,"success");else{o.m=6;try{var C=2<St(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",yc(o)}}finally{cs(o)}}}}function cs(o,c){if(o.g){wc(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||xe(o,"ready");try{d.onreadystatechange=m}catch{}}}function wc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function St(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Uo(c)}};function Ec(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Pp(o){const c={};o=(o.g&&2<=St(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(O(o[m]))continue;var d=b(o[m]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=c[S]||[];c[S]=C,C.push(d)}E(c,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zr(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Ic(o){this.Aa=0,this.i=[],this.j=new Yt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zr("baseRetryDelayMs",5e3,o),this.cb=Zr("retryDelaySeedMs",1e4,o),this.Wa=Zr("forwardChannelMaxRetries",2,o),this.wa=Zr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new rc(o&&o.concurrentRequestLimit),this.Da=new Ap,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ic.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,m){Oe(0),this.W=o,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=xc(this,null,this.W),hs(this)};function Go(o){if(Tc(o),o.G==3){var c=o.U++,d=At(o.I);if(de(d,"SID",o.K),de(d,"RID",c),de(d,"TYPE","terminate"),ei(o,d),c=new Zt(o,o.j,c),c.L=2,c.v=os(At(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Dc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),rs(c)}kc(o)}function us(o){o.g&&(Yo(o),o.g.cancel(),o.g=null)}function Tc(o){us(o),o.u&&(l.clearTimeout(o.u),o.u=null),ds(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function hs(o){if(!ic(o.h)&&!o.s){o.s=!0;var c=o.Ga;Ie||zi(),lt||(Ie(),lt=!0),wn.add(c,o),o.B=0}}function kp(o,c){return sc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Qt(g(o.Ga,o,c),Pc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Zt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=y(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Ac(this,S,c),d=At(this.I),de(d,"RID",o),de(d,"CVER",22),this.D&&de(d,"X-HTTP-Session-Id",this.D),ei(this,d),C&&(this.O?c="headers="+encodeURIComponent(String(gc(C)))+"&"+c:this.m&&Ho(d,this.m,C)),Ko(this.h,S),this.Ua&&de(d,"TYPE","init"),this.P?(de(d,"$req",c),de(d,"SID","null"),S.T=!0,zo(S,d,null)):zo(S,d,c),this.G=2}}else this.G==3&&(o?bc(this,o):this.i.length==0||ic(this.h)||bc(this))};function bc(o,c){var d;c?d=c.l:d=o.U++;const m=At(o.I);de(m,"SID",o.K),de(m,"RID",d),de(m,"AID",o.T),ei(o,m),o.m&&o.o&&Ho(m,o.m,o.o),d=new Zt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ac(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ko(o.h,d),zo(d,m,c)}function ei(o,c){o.H&&J(o.H,function(d,m){de(c,m,d)}),o.l&&lc({},function(d,m){de(c,m,d)})}function Ac(o,c,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){const M=["count="+d];C==-1?0<d?(C=S[0].g,M.push("ofs="+C)):C=0:M.push("ofs="+C);let ue=!0;for(let Me=0;Me<d;Me++){let ie=S[Me].g;const Be=S[Me].map;if(ie-=C,0>ie)C=Math.max(0,S[Me].g-100),ue=!1;else try{Sp(Be,M,"req"+ie+"_")}catch{m&&m(Be)}}if(ue){m=M.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,m}function Sc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Ie||zi(),lt||(Ie(),lt=!0),wn.add(c,o),o.v=0}}function Qo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Qt(g(o.Fa,o),Pc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Rc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Qt(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),us(this),Rc(this))};function Yo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Rc(o){o.g=new Zt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=At(o.qa);de(c,"RID","rpc"),de(c,"SID",o.K),de(c,"AID",o.T),de(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&de(c,"TO",o.ja),de(c,"TYPE","xmlhttp"),ei(o,c),o.m&&o.o&&Ho(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=os(At(c)),d.m=null,d.P=!0,ec(d,o)}n.Za=function(){this.C!=null&&(this.C=null,us(this),Qo(this),Oe(19))};function ds(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Cc(o,c){var d=null;if(o.g==c){ds(o),Yo(o),o.g=null;var m=2}else if(Wo(o.h,c))d=c.D,oc(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var S=o.B;m=Sn(),xe(m,new nr(m,d)),hs(o)}else Sc(o);else if(S=c.s,S==3||S==0&&0<c.X||!(m==1&&kp(o,c)||m==2&&Qo(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),S){case 1:kn(o,5);break;case 4:kn(o,10);break;case 3:kn(o,6);break;default:kn(o,2)}}}function Pc(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function kn(o,c){if(o.j.info("Error code "+c),c==2){var d=g(o.fb,o),m=o.Xa;const S=!m;m=new Pn(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||is(m,"https"),os(m),S?Tp(m.toString(),d):bp(m.toString(),d)}else Oe(2);o.G=0,o.l&&o.l.sa(c),kc(o),Tc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function kc(o){if(o.G=0,o.ka=[],o.l){const c=ac(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ka,c),P(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function xc(o,c,d){var m=d instanceof Pn?At(d):new Pn(d);if(m.g!="")c&&(m.g=c+"."+m.g),ss(m,m.s);else{var S=l.location;m=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;var C=new Pn(null);m&&is(C,m),c&&(C.g=c),S&&ss(C,S),d&&(C.l=d),m=C}return d=o.D,c=o.ya,d&&c&&de(m,d,c),de(m,"VER",o.la),ei(o,m),m}function Dc(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new _e(new as({eb:d})):new _e(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nc(){}n=Nc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fs(){}fs.prototype.g=function(o,c){return new et(o,c)};function et(o,c){ke.call(this),this.g=new Ic(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!O(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!O(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new ir(this)}R(et,ke),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){Go(this.g)},et.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=$r(o),o=d);c.i.push(new fp(c.Ya++,o)),c.G==3&&hs(c)},et.prototype.N=function(){this.g.l=null,delete this.j,Go(this.g),delete this.g,et.aa.N.call(this)};function Vc(o){tr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}R(Vc,tr);function Oc(){Wr.call(this),this.status=1}R(Oc,Wr);function ir(o){this.g=o}R(ir,Nc),ir.prototype.ua=function(){xe(this.g,"a")},ir.prototype.ta=function(o){xe(this.g,new Vc(o))},ir.prototype.sa=function(o){xe(this.g,new Oc)},ir.prototype.ra=function(){xe(this.g,"b")},fs.prototype.createWebChannel=fs.prototype.g,et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Bd=function(){return new fs},Fd=function(){return Sn()},Ud=bt,xa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xt.NO_ERROR=0,Xt.TIMEOUT=8,Xt.HTTP_ERROR=6,ks=Xt,Jl.COMPLETE="complete",Ld=Jl,es.EventType=An,An.OPEN="a",An.CLOSE="b",An.ERROR="c",An.MESSAGE="d",ke.prototype.listen=ke.prototype.K,ii=es,_e.prototype.listenOnce=_e.prototype.L,_e.prototype.getLastError=_e.prototype.Ka,_e.prototype.getLastErrorCode=_e.prototype.Ba,_e.prototype.getStatus=_e.prototype.Z,_e.prototype.getResponseJson=_e.prototype.Oa,_e.prototype.getResponseText=_e.prototype.oa,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Ha,Md=_e}).apply(typeof _s<"u"?_s:typeof self<"u"?self:typeof window<"u"?window:{});const Iu="@firebase/firestore";/**
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
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
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
 */let kr="10.14.0";/**
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
 */const Fn=new Za("@firebase/firestore");function ti(){return Fn.logLevel}function B(n,...e){if(Fn.logLevel<=ee.DEBUG){const t=e.map(hl);Fn.debug(`Firestore (${kr}): ${n}`,...t)}}function $t(n,...e){if(Fn.logLevel<=ee.ERROR){const t=e.map(hl);Fn.error(`Firestore (${kr}): ${n}`,...t)}}function Bn(n,...e){if(Fn.logLevel<=ee.WARN){const t=e.map(hl);Fn.warn(`Firestore (${kr}): ${n}`,...t)}}function hl(n){if(typeof n=="string")return n;try{/**
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
 */function H(n="Unexpected state"){const e=`FIRESTORE (${kr}) INTERNAL ASSERTION FAILED: `+n;throw $t(e),new Error(e)}function ce(n,e){n||H()}function Y(n,e){return n}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends It{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ft{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class jd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t($e.UNAUTHENTICATED))}shutdown(){}}class Sy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ry{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ft,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ft)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new jd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new $e(e)}}class Cy{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Py{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Cy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ky{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ce(this.o===void 0);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ce(typeof t.token=="string"),this.R=t.token,new ky(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Dy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class dl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Dy(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(n,e){return n<e?-1:n>e?1:0}function Ir(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class Re{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new U(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Re(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Re(0,0))}static max(){return new Q(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vi{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(),r===void 0?r=e.length-t:r>e.length-t&&H(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return vi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class fe extends vi{construct(e,t,r){return new fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new fe(t)}static emptyPath(){return new fe([])}}const Ny=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends vi{construct(e,t,r){return new Ne(e,t,r)}static isValidIdentifier(e){return Ny.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new U(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new U(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(t)}static emptyPath(){return new Ne([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(fe.fromString(e))}static fromName(e){return new $(fe.fromString(e).popFirst(5))}static empty(){return new $(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new fe(e.slice()))}}function Vy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Re(t+1,0):new Re(t,r));return new pn(i,$.empty(),e)}function Oy(n){return new pn(n.readTime,n.key,-1)}class pn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new pn(Q.min(),$.empty(),-1)}static max(){return new pn(Q.max(),$.empty(),-1)}}function My(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:oe(n.largestBatchId,e.largestBatchId))}/**
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
 */const Ly="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ni(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Ly)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new N((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Fy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Vi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}fl.oe=-1;function uo(n){return n==null}function Ks(n){return n===0&&1/n==-1/0}function By(n){return typeof n=="number"&&Number.isInteger(n)&&!Ks(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Tu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $d(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ge{constructor(e,t){this.comparator=e,this.root=t||Le.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ys(this.root,e,this.comparator,!0)}}class ys{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Le.RED,this.left=i??Le.EMPTY,this.right=s??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Le(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Le(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bu(this.data.getIterator())}getIteratorFrom(e){return new bu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ue(this.comparator);return t.data=e,t}}class bu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class st{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new st([])}unionWith(e){let t=new Ue(Ne.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new st(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ir(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class qd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qd("Invalid base64 string: "+s):s}}(e);return new Ve(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const jy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(n){if(ce(!!n),typeof n=="string"){let e=0;const t=jy.exec(n);if(ce(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function jn(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
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
 */function pl(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ml(n){const e=n.mapValue.fields.__previous_value__;return pl(e)?ml(e):e}function wi(n){const e=mn(n.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
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
 */class zy{constructor(e,t,r,i,s,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Tr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Tr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vs={mapValue:{}};function zn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pl(n)?4:qy(n)?9007199254740991:$y(n)?10:11:H()}function Et(n,e){if(n===e)return!0;const t=zn(n);if(t!==zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return wi(n).isEqual(wi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=mn(i.timestampValue),l=mn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return jn(i.bytesValue).isEqual(jn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=we(i.doubleValue),l=we(s.doubleValue);return a===l?Ks(a)===Ks(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Ir(n.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Tu(a)!==Tu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Et(a[u],l[u])))return!1;return!0}(n,e);default:return H()}}function Ei(n,e){return(n.values||[]).find(t=>Et(t,e))!==void 0}function br(n,e){if(n===e)return 0;const t=zn(n),r=zn(e);if(t!==r)return oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=we(s.integerValue||s.doubleValue),u=we(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Au(n.timestampValue,e.timestampValue);case 4:return Au(wi(n),wi(e));case 5:return oe(n.stringValue,e.stringValue);case 6:return function(s,a){const l=jn(s),u=jn(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=oe(l[h],u[h]);if(f!==0)return f}return oe(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=oe(we(s.latitude),we(a.latitude));return l!==0?l:oe(we(s.longitude),we(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Su(n.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const _=s.fields||{},g=a.fields||{},I=(l=_.value)===null||l===void 0?void 0:l.arrayValue,R=(u=g.value)===null||u===void 0?void 0:u.arrayValue,k=oe(((h=I?.values)===null||h===void 0?void 0:h.length)||0,((f=R?.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Su(I,R)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===vs.mapValue&&a===vs.mapValue)return 0;if(s===vs.mapValue)return 1;if(a===vs.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let _=0;_<u.length&&_<f.length;++_){const g=oe(u[_],f[_]);if(g!==0)return g;const I=br(l[u[_]],h[f[_]]);if(I!==0)return I}return oe(u.length,f.length)}(n.mapValue,e.mapValue);default:throw H()}}function Au(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return oe(n,e);const t=mn(n),r=mn(e),i=oe(t.seconds,r.seconds);return i!==0?i:oe(t.nanos,r.nanos)}function Su(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=br(t[i],r[i]);if(s)return s}return oe(t.length,r.length)}function Ar(n){return Da(n)}function Da(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=mn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return jn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Da(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Da(t.fields[a])}`;return i+"}"}(n.mapValue):H()}function Ru(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Na(n){return!!n&&"integerValue"in n}function gl(n){return!!n&&"arrayValue"in n}function Cu(n){return!!n&&"nullValue"in n}function Pu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xs(n){return!!n&&"mapValue"in n}function $y(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ci(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Gn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ci(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ci(n.arrayValue.values[t]);return e}return Object.assign({},n)}function qy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!xs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ci(t)}setAll(e){let t=Ne.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=ci(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());xs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];xs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Gn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Je(ci(this.value))}}function Wd(n){const e=[];return Gn(n.fields,(t,r)=>{const i=new Ne([t]);if(xs(r)){const s=Wd(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new st(e)}/**
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
 */class We{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new We(e,0,Q.min(),Q.min(),Q.min(),Je.empty(),0)}static newFoundDocument(e,t,r,i){return new We(e,1,t,Q.min(),r,i,0)}static newNoDocument(e,t){return new We(e,2,t,Q.min(),Q.min(),Je.empty(),0)}static newUnknownDocument(e,t){return new We(e,3,t,Q.min(),Q.min(),Je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hs{constructor(e,t){this.position=e,this.inclusive=t}}function ku(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=br(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function xu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Et(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ii{constructor(e,t="asc"){this.field=e,this.dir=t}}function Wy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Kd{}class Se extends Kd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Hy(e,t,r):t==="array-contains"?new Yy(e,r):t==="in"?new Jy(e,r):t==="not-in"?new Xy(e,r):t==="array-contains-any"?new Zy(e,r):new Se(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Gy(e,r):new Qy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(br(t,this.value)):t!==null&&zn(this.value)===zn(t)&&this.matchesComparison(br(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dt extends Kd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new dt(e,t)}matches(e){return Hd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Hd(n){return n.op==="and"}function Gd(n){return Ky(n)&&Hd(n)}function Ky(n){for(const e of n.filters)if(e instanceof dt)return!1;return!0}function Va(n){if(n instanceof Se)return n.field.canonicalString()+n.op.toString()+Ar(n.value);if(Gd(n))return n.filters.map(e=>Va(e)).join(",");{const e=n.filters.map(t=>Va(t)).join(",");return`${n.op}(${e})`}}function Qd(n,e){return n instanceof Se?function(r,i){return i instanceof Se&&r.op===i.op&&r.field.isEqual(i.field)&&Et(r.value,i.value)}(n,e):n instanceof dt?function(r,i){return i instanceof dt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Qd(a,i.filters[l]),!0):!1}(n,e):void H()}function Yd(n){return n instanceof Se?function(t){return`${t.field.canonicalString()} ${t.op} ${Ar(t.value)}`}(n):n instanceof dt?function(t){return t.op.toString()+" {"+t.getFilters().map(Yd).join(" ,")+"}"}(n):"Filter"}class Hy extends Se{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class Gy extends Se{constructor(e,t){super(e,"in",t),this.keys=Jd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qy extends Se{constructor(e,t){super(e,"not-in",t),this.keys=Jd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Jd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class Yy extends Se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return gl(t)&&Ei(t.arrayValue,this.value)}}class Jy extends Se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ei(this.value.arrayValue,t)}}class Xy extends Se{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ei(this.value.arrayValue,t)}}class Zy extends Se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!gl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ei(this.value.arrayValue,r))}}/**
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
 */class ev{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Du(n,e=null,t=[],r=[],i=null,s=null,a=null){return new ev(n,e,t,r,i,s,a)}function _l(n){const e=Y(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Va(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),uo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ar(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ar(r)).join(",")),e.ue=t}return e.ue}function yl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Wy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Qd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!xu(n.startAt,e.startAt)&&xu(n.endAt,e.endAt)}function Oa(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class xr{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tv(n,e,t,r,i,s,a,l){return new xr(n,e,t,r,i,s,a,l)}function ho(n){return new xr(n)}function Nu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Xd(n){return n.collectionGroup!==null}function ui(n){const e=Y(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ue(Ne.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ii(s,r))}),t.has(Ne.keyField().canonicalString())||e.ce.push(new Ii(Ne.keyField(),r))}return e.ce}function vt(n){const e=Y(n);return e.le||(e.le=nv(e,ui(n))),e.le}function nv(n,e){if(n.limitType==="F")return Du(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ii(i.field,s)});const t=n.endAt?new Hs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Hs(n.startAt.position,n.startAt.inclusive):null;return Du(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ma(n,e){const t=n.filters.concat([e]);return new xr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Gs(n,e,t){return new xr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fo(n,e){return yl(vt(n),vt(e))&&n.limitType===e.limitType}function Zd(n){return`${_l(vt(n))}|lt:${n.limitType}`}function lr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Yd(i)).join(", ")}]`),uo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Ar(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Ar(i)).join(",")),`Target(${r})`}(vt(n))}; limitType=${n.limitType})`}function po(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ui(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=ku(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,ui(r),i)||r.endAt&&!function(a,l,u){const h=ku(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,ui(r),i))}(n,e)}function rv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ef(n){return(e,t)=>{let r=!1;for(const i of ui(n)){const s=iv(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iv(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?br(u,h):H()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class Dr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return $d(this.inner)}size(){return this.innerSize}}/**
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
 */const sv=new ge($.comparator);function qt(){return sv}const tf=new ge($.comparator);function si(...n){let e=tf;for(const t of n)e=e.insert(t.key,t);return e}function nf(n){let e=tf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Nn(){return hi()}function rf(){return hi()}function hi(){return new Dr(n=>n.toString(),(n,e)=>n.isEqual(e))}const ov=new ge($.comparator),av=new Ue($.comparator);function Z(...n){let e=av;for(const t of n)e=e.add(t);return e}const lv=new Ue(oe);function cv(){return lv}/**
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
 */function vl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ks(e)?"-0":e}}function sf(n){return{integerValue:""+n}}function of(n,e){return By(e)?sf(e):vl(n,e)}/**
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
 */class mo{constructor(){this._=void 0}}function uv(n,e,t){return n instanceof Ti?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&pl(s)&&(s=ml(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof Sr?lf(n,e):n instanceof Rr?cf(n,e):function(i,s){const a=af(i,s),l=Vu(a)+Vu(i.Pe);return Na(a)&&Na(i.Pe)?sf(l):vl(i.serializer,l)}(n,e)}function hv(n,e,t){return n instanceof Sr?lf(n,e):n instanceof Rr?cf(n,e):t}function af(n,e){return n instanceof bi?function(r){return Na(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ti extends mo{}class Sr extends mo{constructor(e){super(),this.elements=e}}function lf(n,e){const t=uf(e);for(const r of n.elements)t.some(i=>Et(i,r))||t.push(r);return{arrayValue:{values:t}}}class Rr extends mo{constructor(e){super(),this.elements=e}}function cf(n,e){let t=uf(e);for(const r of n.elements)t=t.filter(i=>!Et(i,r));return{arrayValue:{values:t}}}class bi extends mo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Vu(n){return we(n.integerValue||n.doubleValue)}function uf(n){return gl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class go{constructor(e,t){this.field=e,this.transform=t}}function dv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Sr&&i instanceof Sr||r instanceof Rr&&i instanceof Rr?Ir(r.elements,i.elements,Et):r instanceof bi&&i instanceof bi?Et(r.Pe,i.Pe):r instanceof Ti&&i instanceof Ti}(n.transform,e.transform)}class fv{constructor(e,t){this.version=e,this.transformResults=t}}class Qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qe}static exists(e){return new Qe(void 0,e)}static updateTime(e){return new Qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ds(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _o{}function hf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new yo(n.key,Qe.none()):new Oi(n.key,n.data,Qe.none());{const t=n.data,r=Je.empty();let i=new Ue(Ne.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new yn(n.key,r,new st(i.toArray()),Qe.none())}}function pv(n,e,t){n instanceof Oi?function(i,s,a){const l=i.value.clone(),u=Mu(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof yn?function(i,s,a){if(!Ds(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Mu(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(df(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function di(n,e,t,r){return n instanceof Oi?function(s,a,l,u){if(!Ds(s.precondition,a))return l;const h=s.value.clone(),f=Lu(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof yn?function(s,a,l,u){if(!Ds(s.precondition,a))return l;const h=Lu(s.fieldTransforms,u,a),f=a.data;return f.setAll(df(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(s,a,l){return Ds(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function mv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=af(r.transform,i||null);s!=null&&(t===null&&(t=Je.empty()),t.set(r.field,s))}return t||null}function Ou(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ir(r,i,(s,a)=>dv(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Oi extends _o{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yn extends _o{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function df(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Mu(n,e,t){const r=new Map;ce(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,hv(a,l,t[i]))}return r}function Lu(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,uv(s,a,e))}return r}class yo extends _o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gv extends _o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _v{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pv(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=di(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=di(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=rf();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=hf(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&Ir(this.mutations,e.mutations,(t,r)=>Ou(t,r))&&Ir(this.baseMutations,e.baseMutations,(t,r)=>Ou(t,r))}}class wl{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ce(e.mutations.length===r.length);let i=function(){return ov}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new wl(e,t,r,i)}}/**
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
 */class yv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var be,te;function wv(n){switch(n){default:return H();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function ff(n){if(n===void 0)return $t("GRPC error has no .code"),x.UNKNOWN;switch(n){case be.OK:return x.OK;case be.CANCELLED:return x.CANCELLED;case be.UNKNOWN:return x.UNKNOWN;case be.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case be.INTERNAL:return x.INTERNAL;case be.UNAVAILABLE:return x.UNAVAILABLE;case be.UNAUTHENTICATED:return x.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case be.NOT_FOUND:return x.NOT_FOUND;case be.ALREADY_EXISTS:return x.ALREADY_EXISTS;case be.PERMISSION_DENIED:return x.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case be.ABORTED:return x.ABORTED;case be.OUT_OF_RANGE:return x.OUT_OF_RANGE;case be.UNIMPLEMENTED:return x.UNIMPLEMENTED;case be.DATA_LOSS:return x.DATA_LOSS;default:return H()}}(te=be||(be={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ev(){return new TextEncoder}/**
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
 */const Iv=new On([4294967295,4294967295],0);function Uu(n){const e=Ev().encode(n),t=new Od;return t.update(e),new Uint8Array(t.digest())}function Fu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new On([t,r],0),new On([i,s],0)]}class El{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new oi(`Invalid padding: ${t}`);if(r<0)throw new oi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new oi(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=On.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(On.fromNumber(r)));return i.compare(Iv)===1&&(i=new On([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Uu(e),[r,i]=Fu(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new El(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Uu(e),[r,i]=Fu(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vo{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Mi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new vo(Q.min(),i,new ge(oe),qt(),Z())}}class Mi{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Mi(r,t,Z(),Z(),Z())}}/**
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
 */class Ns{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class pf{constructor(e,t){this.targetId=e,this.me=t}}class mf{constructor(e,t,r=Ve.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Bu{constructor(){this.fe=0,this.ge=zu(),this.pe=Ve.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),t=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:H()}}),new Mi(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=zu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Tv{constructor(e){this.Le=e,this.Be=new Map,this.ke=qt(),this.qe=ju(),this.Qe=new ge(oe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Oa(s))if(r===0){const a=new $(s.path);this.Ue(t,a,We.newNoDocument(a,Q.min()))}else ce(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=jn(r).toUint8Array()}catch(u){if(u instanceof qd)return Bn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new El(a,i,s)}catch(u){return Bn(u instanceof oi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&Oa(l.target)){const u=new $(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,We.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=Z();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new vo(e,t,this.Qe,this.ke,r);return this.ke=qt(),this.qe=ju(),this.Qe=new ge(oe),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Bu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ue(oe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Bu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ju(){return new ge($.comparator)}function zu(){return new ge($.comparator)}const bv={asc:"ASCENDING",desc:"DESCENDING"},Av={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Sv={and:"AND",or:"OR"};class Rv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function La(n,e){return n.useProto3Json||uo(e)?e:{value:e}}function Qs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Cv(n,e){return Qs(n,e.toTimestamp())}function wt(n){return ce(!!n),Q.fromTimestamp(function(t){const r=mn(t);return new Re(r.seconds,r.nanos)}(n))}function Il(n,e){return Ua(n,e).canonicalString()}function Ua(n,e){const t=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function _f(n){const e=fe.fromString(n);return ce(If(e)),e}function Fa(n,e){return Il(n.databaseId,e.path)}function la(n,e){const t=_f(e);if(t.get(1)!==n.databaseId.projectId)throw new U(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(vf(t))}function yf(n,e){return Il(n.databaseId,e)}function Pv(n){const e=_f(n);return e.length===4?fe.emptyPath():vf(e)}function Ba(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vf(n){return ce(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $u(n,e,t){return{name:Fa(n,e),fields:t.value.mapValue.fields}}function kv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ce(f===void 0||typeof f=="string"),Ve.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ve.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?x.UNKNOWN:ff(h.code);return new U(f,h.message||"")}(a);t=new mf(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=la(n,r.document.name),s=wt(r.document.updateTime),a=r.document.createTime?wt(r.document.createTime):Q.min(),l=new Je({mapValue:{fields:r.document.fields}}),u=We.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Ns(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=la(n,r.document),s=r.readTime?wt(r.readTime):Q.min(),a=We.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Ns([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=la(n,r.document),s=r.removedTargetIds||[];t=new Ns([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new vv(i,s),l=r.targetId;t=new pf(l,a)}}return t}function xv(n,e){let t;if(e instanceof Oi)t={update:$u(n,e.key,e.value)};else if(e instanceof yo)t={delete:Fa(n,e.key)};else if(e instanceof yn)t={update:$u(n,e.key,e.data),updateMask:Bv(e.fieldMask)};else{if(!(e instanceof gv))return H();t={verify:Fa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Ti)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Sr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Rr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof bi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw H()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Cv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(n,e.precondition)),t}function Dv(n,e){return n&&n.length>0?(ce(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?wt(i.updateTime):wt(s);return a.isEqual(Q.min())&&(a=wt(s)),new fv(a,i.transformResults||[])}(t,e))):[]}function Nv(n,e){return{documents:[yf(n,e.path)]}}function Vv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=yf(n,i);const s=function(h){if(h.length!==0)return Ef(dt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:cr(g.field),direction:Lv(g.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=La(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Ov(n){let e=Pv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ce(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(_){const g=wf(_);return g instanceof dt&&Gd(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(g=>function(R){return new Ii(ur(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(_){let g;return g=typeof _=="object"?_.value:_,uo(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(_){const g=!!_.before,I=_.values||[];return new Hs(I,g)}(t.startAt));let h=null;return t.endAt&&(h=function(_){const g=!_.before,I=_.values||[];return new Hs(I,g)}(t.endAt)),tv(e,i,a,s,l,"F",u,h)}function Mv(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ur(t.unaryFilter.field);return Se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ur(t.unaryFilter.field);return Se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ur(t.unaryFilter.field);return Se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ur(t.unaryFilter.field);return Se.create(a,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(t){return Se.create(ur(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return dt.create(t.compositeFilter.filters.map(r=>wf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(t.compositeFilter.op))}(n):H()}function Lv(n){return bv[n]}function Uv(n){return Av[n]}function Fv(n){return Sv[n]}function cr(n){return{fieldPath:n.canonicalString()}}function ur(n){return Ne.fromServerFormat(n.fieldPath)}function Ef(n){return n instanceof Se?function(t){if(t.op==="=="){if(Pu(t.value))return{unaryFilter:{field:cr(t.field),op:"IS_NAN"}};if(Cu(t.value))return{unaryFilter:{field:cr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pu(t.value))return{unaryFilter:{field:cr(t.field),op:"IS_NOT_NAN"}};if(Cu(t.value))return{unaryFilter:{field:cr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cr(t.field),op:Uv(t.op),value:t.value}}}(n):n instanceof dt?function(t){const r=t.getFilters().map(i=>Ef(i));return r.length===1?r[0]:{compositeFilter:{op:Fv(t.op),filters:r}}}(n):H()}function Bv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function If(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class an{constructor(e,t,r,i,s=Q.min(),a=Q.min(),l=Ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new an(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jv{constructor(e){this.ct=e}}function zv(n){const e=Ov({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gs(e,e.limit,"L"):e}/**
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
 */class $v{constructor(){this.un=new qv}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(pn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class qv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ue(fe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(fe.comparator)).toArray()}}/**
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
 */class Cr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Cr(0)}static kn(){return new Cr(-1)}}/**
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
 */class Wv{constructor(){this.changes=new Dr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Kv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Hv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&di(r.mutation,i,st.empty(),Re.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const i=Nn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=si();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Nn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=qt();const a=hi(),l=function(){return hi()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof yn)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),di(f.mutation,h,f.mutation.getFieldMask(),Re.now())):a.set(h.key,st.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var _;return l.set(h,new Kv(f,(_=a.get(h))!==null&&_!==void 0?_:null))}),l))}recalculateAndSaveOverlays(e,t){const r=hi();let i=new ge((a,l)=>a-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||st.empty();f=l.applyToLocalView(h,f),r.set(u,f);const _=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,_)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,_=rf();f.forEach(g=>{if(!s.has(g)){const I=hf(t.get(g),r.get(g));I!==null&&_.set(g,I),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,_))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Xd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(Nn());let l=-1,u=s;return a.next(h=>N.forEach(h,(f,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),s.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Z())).next(f=>({batchId:l,changes:nf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let i=si();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=si();return this.indexManager.getCollectionParents(e,s).next(l=>N.forEach(l,u=>{const h=function(_,g){return new xr(g,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((_,g)=>{a=a.insert(_,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,We.newInvalidDocument(f)))});let l=si();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&di(f.mutation,h,st.empty(),Re.now()),po(t,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class Gv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:wt(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:zv(i.bundledQuery),readTime:wt(i.readTime)}}(t)),N.resolve()}}/**
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
 */class Qv{constructor(){this.overlays=new ge($.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Nn();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=Nn(),s=t.length+1,a=new $(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ge((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Nn(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Nn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return N.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new yv(t,r));let s=this.Ir.get(t);s===void 0&&(s=Z(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class Yv{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class Tl{constructor(){this.Tr=new Ue(De.Er),this.dr=new Ue(De.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new De(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new De(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new $(new fe([])),r=new De(t,e),i=new De(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new fe([])),r=new De(t,e),i=new De(t,e+1);let s=Z();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new De(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||oe(e.wr,t.wr)}static Ar(e,t){return oe(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
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
 */class Jv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ue(De.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _v(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new De(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new De(t,0),i=new De(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ue(oe);return t.forEach(i=>{const s=new De(i,0),a=new De(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const a=new De(new $(s),0);let l=new Ue(oe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),N.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ce(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(t.mutations,i=>{const s=new De(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new De(t,0),i=this.br.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Xv{constructor(e){this.Mr=e,this.docs=function(){return new ge($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():We.newInvalidDocument(t))}getEntries(e,t){let r=qt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():We.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=qt();const a=t.path,l=new $(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||My(Oy(f),r)<=0||(i.has(f.key)||po(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){H()}Or(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Zv(this)}getSize(e){return N.resolve(this.size)}}class Zv extends Wv{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class ew{constructor(e){this.persistence=e,this.Nr=new Dr(t=>_l(t),yl),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Tl,this.targetCount=0,this.kr=Cr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Cr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
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
 */class tw{constructor(e,t){this.qr={},this.overlays={},this.Qr=new fl(0),this.Kr=!1,this.Kr=!0,this.$r=new Yv,this.referenceDelegate=e(this),this.Ur=new ew(this),this.indexManager=new $v,this.remoteDocumentCache=function(i){return new Xv(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new jv(t),this.Gr=new Gv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Jv(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const i=new nw(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class nw extends Uy{constructor(e){super(),this.currentSequenceNumber=e}}class bl{constructor(e){this.persistence=e,this.Jr=new Tl,this.Yr=null}static Zr(e){return new bl(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const i=$.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Al{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=Z(),i=Z();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Al(e,t.fromCache,r,i)}}/**
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
 */class rw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iw{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return lm()?8:Fy(He())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new rw;return this.Xi(e,t,a).next(l=>{if(s.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(ti()<=ee.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",lr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(ti()<=ee.DEBUG&&B("QueryEngine","Query:",lr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ti()<=ee.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",lr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vt(t))):N.resolve())}Yi(e,t){if(Nu(t))return N.resolve(null);let r=vt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Gs(t,null,"F"),r=vt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Z(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(t,l);return this.ns(t,h,a,u.readTime)?this.Yi(e,Gs(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,i){return Nu(t)||i.isEqual(Q.min())?N.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(t,s);return this.ns(t,a,r,i)?N.resolve(null):(ti()<=ee.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),lr(t)),this.rs(e,a,t,Vy(i,-1)).next(l=>l))})}ts(e,t){let r=new Ue(ef(e));return t.forEach((i,s)=>{po(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return ti()<=ee.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",lr(t)),this.Ji.getDocumentsMatchingQuery(e,t,pn.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class sw{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new ge(oe),this._s=new Dr(s=>_l(s),yl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hv(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function ow(n,e,t,r){return new sw(n,e,t,r)}async function Tf(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=Z();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function aw(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const _=h.batch,g=_.keys();let I=N.resolve();return g.forEach(R=>{I=I.next(()=>f.getEntry(u,R)).next(k=>{const P=h.docVersions.get(R);ce(P!==null),k.version.compareTo(P)<0&&(_.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,_))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function bf(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function lw(n,e){const t=Y(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,_)=>{const g=i.get(_);if(!g)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,_).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,_)));let I=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(_)!==null?I=I.withResumeToken(Ve.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(_,I),function(k,P,V){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(g,I,f)&&l.push(t.Ur.updateTargetData(s,I))});let u=qt(),h=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(cw(s,a,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Q.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(_=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return N.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.os=i,s))}function cw(n,e,t){let r=Z(),i=Z();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=qt();return t.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):B("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function uw(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hw(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new an(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ja(n,e,t){const r=Y(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Vi(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function qu(n,e,t){const r=Y(n);let i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const _=Y(u),g=_._s.get(f);return g!==void 0?N.resolve(_.os.get(g)):_.Ur.getTargetData(h,f)}(r,a,vt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:Q.min(),t?s:Z())).next(l=>(dw(r,rv(e),l),{documents:l,Ts:s})))}function dw(n,e,t){let r=n.us.get(e)||Q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class Wu{constructor(){this.activeTargetIds=cv()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fw{constructor(){this.so=new Wu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Wu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pw{_o(e){}shutdown(){}}/**
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
 */class Ku{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ws=null;function ca(){return ws===null?ws=function(){return 268435456+Math.round(2147483648*Math.random())}():ws++,"0x"+ws.toString(16)}/**
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
 */const mw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ze="WebChannelConnection";class _w extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){const l=ca(),u=this.xo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(t,u,h,i).then(f=>(B("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Bn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,a,l){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){const i=mw[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=ca();return new Promise((a,l)=>{const u=new Md;u.setWithCredentials(!0),u.listenOnce(Ld.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ks.NO_ERROR:const f=u.getResponseJson();B(ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case ks.TIMEOUT:B(ze,`RPC '${e}' ${s} timed out`),l(new U(x.DEADLINE_EXCEEDED,"Request time out"));break;case ks.HTTP_ERROR:const _=u.getStatus();if(B(ze,`RPC '${e}' ${s} failed with status:`,_,"response text:",u.getResponseText()),_>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g?.error;if(I&&I.status&&I.message){const R=function(P){const V=P.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(V)>=0?V:x.UNKNOWN}(I.status);l(new U(R,I.message))}else l(new U(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new U(x.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{B(ze,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);B(ze,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}Bo(e,t,r){const i=ca(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Bd(),l=Fd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(ze,`Creating RPC '${e}' stream ${i}: ${f}`,u);const _=a.createWebChannel(f,u);let g=!1,I=!1;const R=new gw({Io:P=>{I?B(ze,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(B(ze,`Opening RPC '${e}' stream ${i} transport.`),_.open(),g=!0),B(ze,`RPC '${e}' stream ${i} sending:`,P),_.send(P))},To:()=>_.close()}),k=(P,V,O)=>{P.listen(V,z=>{try{O(z)}catch(X){setTimeout(()=>{throw X},0)}})};return k(_,ii.EventType.OPEN,()=>{I||(B(ze,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),k(_,ii.EventType.CLOSE,()=>{I||(I=!0,B(ze,`RPC '${e}' stream ${i} transport closed`),R.So())}),k(_,ii.EventType.ERROR,P=>{I||(I=!0,Bn(ze,`RPC '${e}' stream ${i} transport errored:`,P),R.So(new U(x.UNAVAILABLE,"The operation could not be completed")))}),k(_,ii.EventType.MESSAGE,P=>{var V;if(!I){const O=P.data[0];ce(!!O);const z=O,X=z.error||((V=z[0])===null||V===void 0?void 0:V.error);if(X){B(ze,`RPC '${e}' stream ${i} received error:`,X);const W=X.status;let J=function(v){const T=be[v];if(T!==void 0)return ff(T)}(W),E=X.message;J===void 0&&(J=x.INTERNAL,E="Unknown error status: "+W+" with message "+X.message),I=!0,R.So(new U(J,E)),_.close()}else B(ze,`RPC '${e}' stream ${i} received:`,O),R.bo(O)}}),k(l,Ud.STAT_EVENT,P=>{P.stat===xa.PROXY?B(ze,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===xa.NOPROXY&&B(ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function ua(){return typeof document<"u"?document:null}/**
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
 */function wo(n){return new Rv(n,!0)}/**
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
 */class Af{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Sf{constructor(e,t,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Af(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?($t(t.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new U(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yw extends Sf{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=kv(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?wt(a.readTime):Q.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ba(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=Oa(u)?{documents:Nv(s,u)}:{query:Vv(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=gf(s,a.resumeToken);const h=La(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(Q.min())>0){l.readTime=Qs(s,a.snapshotVersion.toTimestamp());const h=La(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Mv(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ba(this.serializer),t.removeTarget=e,this.a_(t)}}class vw extends Sf{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Dv(e.writeResults,e.commitTime),r=wt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ba(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>xv(this.serializer,r))};this.a_(t)}}/**
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
 */class ww extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new U(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Ua(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(x.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Ua(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(x.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ew{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($t(t),this.D_=!1):B("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Iw{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{Qn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await Li(h),h.q_.set("Unknown"),h.L_.delete(4),await Eo(h)}(this))})}),this.q_=new Ew(r,i)}}async function Eo(n){if(Qn(n))for(const e of n.B_)await e(!0)}async function Li(n){for(const e of n.B_)await e(!1)}function Rf(n,e){const t=Y(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Pl(t)?Cl(t):Nr(t).r_()&&Rl(t,e))}function Sl(n,e){const t=Y(n),r=Nr(t);t.N_.delete(e),r.r_()&&Cf(t,e),t.N_.size===0&&(r.r_()?r.o_():Qn(t)&&t.q_.set("Unknown"))}function Rl(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Nr(n).A_(e)}function Cf(n,e){n.Q_.xe(e),Nr(n).R_(e)}function Cl(n){n.Q_=new Tv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Nr(n).start(),n.q_.v_()}function Pl(n){return Qn(n)&&!Nr(n).n_()&&n.N_.size>0}function Qn(n){return Y(n).L_.size===0}function Pf(n){n.Q_=void 0}async function Tw(n){n.q_.set("Online")}async function bw(n){n.N_.forEach((e,t)=>{Rl(n,e)})}async function Aw(n,e){Pf(n),Pl(n)?(n.q_.M_(e),Cl(n)):n.q_.set("Unknown")}async function Sw(n,e,t){if(n.q_.set("Online"),e instanceof mf&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ys(n,r)}else if(e instanceof Ns?n.Q_.Ke(e):e instanceof pf?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Q.min()))try{const r=await bf(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ve.EMPTY_BYTE_STRING,f.snapshotVersion)),Cf(s,u);const _=new an(f.target,u,h,f.sequenceNumber);Rl(s,_)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Ys(n,r)}}async function Ys(n,e,t){if(!Vi(e))throw e;n.L_.add(1),await Li(n),n.q_.set("Offline"),t||(t=()=>bf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Eo(n)})}function kf(n,e){return e().catch(t=>Ys(n,t,e))}async function Io(n){const e=Y(n),t=gn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Rw(e);)try{const i=await uw(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,Cw(e,i)}catch(i){await Ys(e,i)}xf(e)&&Df(e)}function Rw(n){return Qn(n)&&n.O_.length<10}function Cw(n,e){n.O_.push(e);const t=gn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function xf(n){return Qn(n)&&!gn(n).n_()&&n.O_.length>0}function Df(n){gn(n).start()}async function Pw(n){gn(n).p_()}async function kw(n){const e=gn(n);for(const t of n.O_)e.m_(t.mutations)}async function xw(n,e,t){const r=n.O_.shift(),i=wl.from(r,e,t);await kf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Io(n)}async function Dw(n,e){e&&gn(n).V_&&await async function(r,i){if(function(a){return wv(a)&&a!==x.ABORTED}(i.code)){const s=r.O_.shift();gn(r).s_(),await kf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Io(r)}}(n,e),xf(n)&&Df(n)}async function Hu(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Qn(t);t.L_.add(3),await Li(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Eo(t)}async function Nw(n,e){const t=Y(n);e?(t.L_.delete(2),await Eo(t)):e||(t.L_.add(2),await Li(t),t.q_.set("Unknown"))}function Nr(n){return n.K_||(n.K_=function(t,r,i){const s=Y(t);return s.w_(),new yw(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Tw.bind(null,n),Ro:bw.bind(null,n),mo:Aw.bind(null,n),d_:Sw.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Pl(n)?Cl(n):n.q_.set("Unknown")):(await n.K_.stop(),Pf(n))})),n.K_}function gn(n){return n.U_||(n.U_=function(t,r,i){const s=Y(t);return s.w_(),new vw(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Pw.bind(null,n),mo:Dw.bind(null,n),f_:kw.bind(null,n),g_:xw.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Io(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class kl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new kl(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xl(n,e){if($t("AsyncQueue",`${e}: ${n}`),Vi(n))return new U(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class gr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=si(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new gr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Gu{constructor(){this.W_=new ge($.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Pr{constructor(e,t,r,i,s,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Pr(e,t,gr.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Vw{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Ow{constructor(){this.queries=Qu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=Y(t),s=i.queries;i.queries=Qu(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new U(x.ABORTED,"Firestore shutting down"))}}function Qu(){return new Dr(n=>Zd(n),fo)}async function Dl(n,e){const t=Y(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Vw,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=xl(a,`Initialization of query '${lr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Vl(t)}async function Nl(n,e){const t=Y(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Mw(n,e){const t=Y(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Vl(t)}function Lw(n,e,t){const r=Y(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Vl(n){n.Y_.forEach(e=>{e.next()})}var za,Yu;(Yu=za||(za={})).ea="default",Yu.Cache="cache";class Ol{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Pr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==za.Cache}}/**
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
 */class Nf{constructor(e){this.key=e}}class Vf{constructor(e){this.key=e}}class Uw{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=ef(e),this.Ra=new gr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Gu,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,_)=>{const g=i.get(f),I=po(this.query,_)?_:null,R=!!g&&this.mutatedKeys.has(g.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;g&&I?g.data.isEqual(I.data)?R!==k&&(r.track({type:3,doc:I}),P=!0):this.ga(g,I)||(r.track({type:2,doc:I}),P=!0,(u&&this.Aa(I,u)>0||h&&this.Aa(I,h)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),P=!0):g&&!I&&(r.track({type:1,doc:g}),P=!0,(u||h)&&(l=!0)),P&&(I?(a=a.add(I),s=k?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,_)=>function(I,R){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return k(I)-k(R)}(f.type,_.type)||this.Aa(f.doc,_.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new Pr(this.query,e.Ra,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Gu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Vf(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Nf(r))}),t}ba(e){this.Ta=e.Ts,this.da=Z();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Pr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Fw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Bw{constructor(e){this.key=e,this.va=!1}}class jw{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Dr(l=>Zd(l),fo),this.Ma=new Map,this.xa=new Set,this.Oa=new ge($.comparator),this.Na=new Map,this.La=new Tl,this.Ba={},this.ka=new Map,this.qa=Cr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function zw(n,e,t=!0){const r=Bf(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Of(r,e,t,!0),i}async function $w(n,e){const t=Bf(n);await Of(t,e,!0,!1)}async function Of(n,e,t,r){const i=await hw(n.localStore,vt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await qw(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Rf(n.remoteStore,i),l}async function qw(n,e,t,r,i){n.Ka=(_,g,I)=>async function(k,P,V,O){let z=P.view.ma(V);z.ns&&(z=await qu(k.localStore,P.query,!1).then(({documents:E})=>P.view.ma(E,z)));const X=O&&O.targetChanges.get(P.targetId),W=O&&O.targetMismatches.get(P.targetId)!=null,J=P.view.applyChanges(z,k.isPrimaryClient,X,W);return Xu(k,P.targetId,J.wa),J.snapshot}(n,_,g,I);const s=await qu(n.localStore,e,!0),a=new Uw(e,s.Ts),l=a.ma(s.documents),u=Mi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,u);Xu(n,t,h.wa);const f=new Fw(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function Ww(n,e,t){const r=Y(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!fo(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ja(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Sl(r.remoteStore,i.targetId),$a(r,i.targetId)}).catch(Ni)):($a(r,i.targetId),await ja(r.localStore,i.targetId,!0))}async function Kw(n,e){const t=Y(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Sl(t.remoteStore,r.targetId))}async function Hw(n,e,t){const r=eE(n);try{const i=await function(a,l){const u=Y(a),h=Re.now(),f=l.reduce((I,R)=>I.add(R.key),Z());let _,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=qt(),k=Z();return u.cs.getEntries(I,f).next(P=>{R=P,R.forEach((V,O)=>{O.isValidDocument()||(k=k.add(V))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,R)).next(P=>{_=P;const V=[];for(const O of l){const z=mv(O,_.get(O.key).overlayedDocument);z!=null&&V.push(new yn(O.key,z,Wd(z.value.mapValue),Qe.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,V,l)}).next(P=>{g=P;const V=P.applyToLocalDocumentSet(_,k);return u.documentOverlayCache.saveOverlays(I,P.batchId,V)})}).then(()=>({batchId:g.batchId,changes:nf(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new ge(oe)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,t),await Ui(r,i.changes),await Io(r.remoteStore)}catch(i){const s=xl(i,"Failed to persist write");t.reject(s)}}async function Mf(n,e){const t=Y(n);try{const r=await lw(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?ce(a.va):i.removedDocuments.size>0&&(ce(a.va),a.va=!1))}),await Ui(t,r,e)}catch(r){await Ni(r)}}function Ju(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=Y(a);u.onlineState=l;let h=!1;u.queries.forEach((f,_)=>{for(const g of _.j_)g.Z_(l)&&(h=!0)}),h&&Vl(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gw(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new ge($.comparator);a=a.insert(s,We.newNoDocument(s,Q.min()));const l=Z().add(s),u=new vo(Q.min(),new Map,new ge(oe),a,l);await Mf(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ml(r)}else await ja(r.localStore,e,!1).then(()=>$a(r,e,t)).catch(Ni)}async function Qw(n,e){const t=Y(n),r=e.batch.batchId;try{const i=await aw(t.localStore,e);Uf(t,r,null),Lf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ui(t,i)}catch(i){await Ni(i)}}async function Yw(n,e,t){const r=Y(n);try{const i=await function(a,l){const u=Y(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(_=>(ce(_!==null),f=_.keys(),u.mutationQueue.removeMutationBatch(h,_))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Uf(r,e,t),Lf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ui(r,i)}catch(i){await Ni(i)}}function Lf(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Uf(n,e,t){const r=Y(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function $a(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Ff(n,r)})}function Ff(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Sl(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Ml(n))}function Xu(n,e,t){for(const r of t)r instanceof Nf?(n.La.addReference(r.key,e),Jw(n,r)):r instanceof Vf?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Ff(n,r.key)):H()}function Jw(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+t),n.xa.add(r),Ml(n))}function Ml(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new $(fe.fromString(e)),r=n.qa.next();n.Na.set(r,new Bw(t)),n.Oa=n.Oa.insert(t,r),Rf(n.remoteStore,new an(vt(ho(t.path)),r,"TargetPurposeLimboResolution",fl.oe))}}async function Ui(n,e,t){const r=Y(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const _=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(h){i.push(h);const _=Al.Wi(u.targetId,h);s.push(_)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>N.forEach(h,g=>N.forEach(g.$i,I=>f.persistence.referenceDelegate.addReference(_,g.targetId,I)).next(()=>N.forEach(g.Ui,I=>f.persistence.referenceDelegate.removeReference(_,g.targetId,I)))))}catch(_){if(!Vi(_))throw _;B("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of h){const g=_.targetId;if(!_.fromCache){const I=f.os.get(g),R=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(g,k)}}}(r.localStore,s))}async function Xw(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await Tf(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new U(x.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ui(t,r.hs)}}function Zw(n,e){const t=Y(n),r=t.Na.get(e);if(r&&r.va)return Z().add(r.key);{let i=Z();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function Bf(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gw.bind(null,e),e.Ca.d_=Mw.bind(null,e.eventManager),e.Ca.$a=Lw.bind(null,e.eventManager),e}function eE(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yw.bind(null,e),e}class Js{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return ow(this.persistence,new iw,e.initialUser,this.serializer)}Ga(e){return new tw(bl.Zr,this.serializer)}Wa(e){return new fw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Js.provider={build:()=>new Js};class qa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ju(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xw.bind(null,this.syncEngine),await Nw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ow}()}createDatastore(e){const t=wo(e.databaseInfo.databaseId),r=function(s){return new _w(s)}(e.databaseInfo);return function(s,a,l,u){return new ww(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new Iw(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Ju(this.syncEngine,t,0),function(){return Ku.D()?new Ku:new pw}())}createSyncEngine(e,t){return function(i,s,a,l,u,h,f){const _=new jw(i,s,a,l,u,h);return f&&(_.Qa=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=Y(i);B("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Li(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}qa.provider={build:()=>new qa};/**
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
 */class Ll{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$t("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class tE{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=$e.UNAUTHENTICATED,this.clientId=dl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{B("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=xl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ha(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Tf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Zu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nE(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Hu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Hu(e.remoteStore,i)),n._onlineComponents=e}async function nE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await ha(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Bn("Error using user provided cache. Falling back to memory cache: "+t),await ha(n,new Js)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await ha(n,new Js);return n._offlineComponents}async function jf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await Zu(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await Zu(n,new qa))),n._onlineComponents}function rE(n){return jf(n).then(e=>e.syncEngine)}async function Xs(n){const e=await jf(n),t=e.eventManager;return t.onListen=zw.bind(null,e.syncEngine),t.onUnlisten=Ww.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$w.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Kw.bind(null,e.syncEngine),t}function iE(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new Ll({next:g=>{f.Za(),a.enqueueAndForget(()=>Nl(s,_));const I=g.docs.has(l);!I&&g.fromCache?h.reject(new U(x.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?h.reject(new U(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),_=new Ol(ho(l.path),f,{includeMetadataChanges:!0,_a:!0});return Dl(s,_)}(await Xs(n),n.asyncQueue,e,t,r)),r.promise}function sE(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new Ll({next:g=>{f.Za(),a.enqueueAndForget(()=>Nl(s,_)),g.fromCache&&u.source==="server"?h.reject(new U(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),_=new Ol(l,f,{includeMetadataChanges:!0,_a:!0});return Dl(s,_)}(await Xs(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function zf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const eh=new Map;/**
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
 */function $f(n,e,t){if(!t)throw new U(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function qf(n,e,t,r){if(e===!0&&r===!0)throw new U(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function th(n){if(!$.isDocumentKey(n))throw new U(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nh(n){if($.isDocumentKey(n))throw new U(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function To(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H()}function Ke(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=To(n);throw new U(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function oE(n,e){if(e<=0)throw new U(x.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class rh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zd;switch(r.type){case"firstParty":return new Py(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=eh.get(t);r&&(B("ComponentProvider","Removing Datastore"),eh.delete(t),r.terminate())}(this),Promise.resolve()}}function Wf(n,e,t,r={}){var i;const s=(n=Ke(n,bo))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=$e.MOCK_USER;else{l=tm(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new U(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new $e(h)}n._authCredentials=new Sy(new jd(l,u))}}/**
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
 */class Tt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tt(this.firestore,e,this._query)}}class Fe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class Bt extends Tt{constructor(e,t,r){super(e,t,ho(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new $(e))}withConverter(e){return new Bt(this.firestore,e,this._path)}}function Xe(n,e,...t){if(n=ye(n),$f("collection","path",e),n instanceof bo){const r=fe.fromString(e,...t);return nh(r),new Bt(n,null,r)}{if(!(n instanceof Fe||n instanceof Bt))throw new U(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return nh(r),new Bt(n.firestore,null,r)}}function ne(n,e,...t){if(n=ye(n),arguments.length===1&&(e=dl.newId()),$f("doc","path",e),n instanceof bo){const r=fe.fromString(e,...t);return th(r),new Fe(n,null,new $(r))}{if(!(n instanceof Fe||n instanceof Bt))throw new U(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return th(r),new Fe(n.firestore,n instanceof Bt?n.converter:null,new $(r))}}/**
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
 */class ih{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Af(this,"async_queue_retry"),this.Vu=()=>{const r=ua();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ua();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ua();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ft;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Vi(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw $t("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=kl.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function sh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class ft extends bo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new ih,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ih(e),this._firestoreClient=void 0,await e}}}function Kf(n,e){const t=typeof n=="object"?n:nl(),r=typeof n=="string"?n:e||"(default)",i=io(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Zp("firestore");s&&Wf(i,...s)}return i}function Vr(n){if(n._terminated)throw new U(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||aE(n),n._firestoreClient}function aE(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,h,f){return new zy(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,zf(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new tE(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l?._online.build();return{_offline:l?._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class $n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $n(Ve.fromBase64String(e))}catch(t){throw new U(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $n(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Or{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vn{constructor(e){this._methodName=e}}/**
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
 */class Ao{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */class So{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const lE=/^__.*__$/;class cE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new yn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Oi(e,this.data,t,this.fieldTransforms)}}class Hf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new yn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Ro{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ro(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Zs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Gf(this.Cu)&&lE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class uE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||wo(e)}Qu(e,t,r,i=!1){return new Ro({Cu:e,methodName:t,qu:r,path:Ne.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fi(n){const e=n._freezeSettings(),t=wo(n._databaseId);return new uE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ul(n,e,t,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);$l("Data must be an object, but it was:",a,r);const l=Xf(r,a);let u,h;if(s.merge)u=new st(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const _ of s.mergeFields){const g=Wa(e,_,t);if(!a.contains(g))throw new U(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);ep(f,g)||f.push(g)}u=new st(f),h=a.fieldTransforms.filter(_=>u.covers(_.field))}else u=null,h=a.fieldTransforms;return new cE(new Je(l),u,h)}class Co extends vn{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Co}}function Qf(n,e,t){return new Ro({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Fl extends vn{_toFieldTransform(e){return new go(e.path,new Ti)}isEqual(e){return e instanceof Fl}}class Bl extends vn{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Qf(this,e,!0),r=this.Ku.map(s=>Yn(s,t)),i=new Sr(r);return new go(e.path,i)}isEqual(e){return e instanceof Bl&&vr(this.Ku,e.Ku)}}class jl extends vn{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Qf(this,e,!0),r=this.Ku.map(s=>Yn(s,t)),i=new Rr(r);return new go(e.path,i)}isEqual(e){return e instanceof jl&&vr(this.Ku,e.Ku)}}class zl extends vn{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new bi(e.serializer,of(e.serializer,this.$u));return new go(e.path,t)}isEqual(e){return e instanceof zl&&this.$u===e.$u}}function Yf(n,e,t,r){const i=n.Qu(1,e,t);$l("Data must be an object, but it was:",i,r);const s=[],a=Je.empty();Gn(r,(u,h)=>{const f=ql(e,u,t);h=ye(h);const _=i.Nu(f);if(h instanceof Co)s.push(f);else{const g=Yn(h,_);g!=null&&(s.push(f),a.set(f,g))}});const l=new st(s);return new Hf(a,l,i.fieldTransforms)}function Jf(n,e,t,r,i,s){const a=n.Qu(1,e,t),l=[Wa(e,r,t)],u=[i];if(s.length%2!=0)throw new U(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Wa(e,s[g])),u.push(s[g+1]);const h=[],f=Je.empty();for(let g=l.length-1;g>=0;--g)if(!ep(h,l[g])){const I=l[g];let R=u[g];R=ye(R);const k=a.Nu(I);if(R instanceof Co)h.push(I);else{const P=Yn(R,k);P!=null&&(h.push(I),f.set(I,P))}}const _=new st(h);return new Hf(f,_,a.fieldTransforms)}function hE(n,e,t,r=!1){return Yn(t,n.Qu(r?4:3,e))}function Yn(n,e){if(Zf(n=ye(n)))return $l("Unsupported field value:",e,n),Xf(n,e);if(n instanceof vn)return function(r,i){if(!Gf(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Yn(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return of(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:Qs(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qs(i.serializer,s)}}if(r instanceof Ao)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $n)return{bytesValue:gf(i.serializer,r._byteString)};if(r instanceof Fe){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Il(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof So)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return vl(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${To(r)}`)}(n,e)}function Xf(n,e){const t={};return $d(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gn(n,(r,i)=>{const s=Yn(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Zf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Re||n instanceof Ao||n instanceof $n||n instanceof Fe||n instanceof vn||n instanceof So)}function $l(n,e,t){if(!Zf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=To(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Wa(n,e,t){if((e=ye(e))instanceof Or)return e._internalPath;if(typeof e=="string")return ql(n,e);throw Zs("Field path arguments must be of type string or ",n,!1,void 0,t)}const dE=new RegExp("[~\\*/\\[\\]]");function ql(n,e,t){if(e.search(dE)>=0)throw Zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Or(...e.split("."))._internalPath}catch{throw Zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zs(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new U(x.INVALID_ARGUMENT,l+n+u)}function ep(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class tp{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Po("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fE extends tp{data(){return super.data()}}function Po(n,e){return typeof e=="string"?ql(n,e):e instanceof Or?e._internalPath:e._delegate._internalPath}/**
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
 */function np(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wl{}class ko extends Wl{}function gt(n,e,...t){let r=[];e instanceof Wl&&r.push(e),r=r.concat(t),function(s){const a=s.filter(u=>u instanceof xo).length,l=s.filter(u=>u instanceof Bi).length;if(a>1||a>0&&l>0)throw new U(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Bi extends ko{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Bi(e,t,r)}_apply(e){const t=this._parse(e);return rp(e._query,t),new Tt(e.firestore,e.converter,Ma(e._query,t))}_parse(e){const t=Fi(e.firestore);return function(s,a,l,u,h,f,_){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new U(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ah(_,f);const I=[];for(const R of _)I.push(oh(u,s,R));g={arrayValue:{values:I}}}else g=oh(u,s,_)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ah(_,f),g=hE(l,a,_,f==="in"||f==="not-in");return Se.create(h,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ct(n,e,t){const r=e,i=Po("where",n);return Bi._create(i,r,t)}class xo extends Wl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xo(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:dt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)rp(a,u),a=Ma(a,u)}(e._query,t),new Tt(e.firestore,e.converter,Ma(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Do extends ko{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Do(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new U(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new U(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ii(s,a)}(e._query,this._field,this._direction);return new Tt(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new xr(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Ka(n,e="asc"){const t=e,r=Po("orderBy",n);return Do._create(r,t)}class No extends ko{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new No(e,t,r)}_apply(e){return new Tt(e.firestore,e.converter,Gs(e._query,this._limit,this._limitType))}}function Kl(n){return oE("limit",n),No._create("limit",n,"F")}function oh(n,e,t){if(typeof(t=ye(t))=="string"){if(t==="")throw new U(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xd(e)&&t.indexOf("/")!==-1)throw new U(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(fe.fromString(t));if(!$.isDocumentKey(r))throw new U(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ru(n,new $(r))}if(t instanceof Fe)return Ru(n,t._key);throw new U(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${To(t)}.`)}function ah(n,e){if(!Array.isArray(n)||n.length===0)throw new U(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rp(n,e){const t=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new U(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ip{convertValue(e,t="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Gn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>we(a.doubleValue));return new So(s)}convertGeoPoint(e){return new Ao(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ml(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(wi(e));default:return null}}convertTimestamp(e){const t=mn(e);return new Re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=fe.fromString(e);ce(If(r));const i=new Tr(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(t)||$t(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Hl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class dr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gl extends tp{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Po("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class fi extends Gl{data(e={}){return super.data(e)}}class Ql{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new dr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new fi(this._firestore,this._userDataWriter,r.key,r,new dr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new fi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new dr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new fi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new dr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:pE(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function pE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
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
 */function hn(n){n=Ke(n,Fe);const e=Ke(n.firestore,ft);return iE(Vr(e),n._key).then(t=>sp(e,n,t))}class Yl extends ip{constructor(e){super(),this.firestore=e}convertBytes(e){return new $n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,t)}}function on(n){n=Ke(n,Tt);const e=Ke(n.firestore,ft),t=Vr(e),r=new Yl(e);return np(n._query),sE(t,n._query).then(i=>new Ql(e,r,n,i))}function Ze(n,e,t){n=Ke(n,Fe);const r=Ke(n.firestore,ft),i=Hl(n.converter,e,t);return Mr(r,[Ul(Fi(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Qe.none())])}function at(n,e,t,...r){n=Ke(n,Fe);const i=Ke(n.firestore,ft),s=Fi(i);let a;return a=typeof(e=ye(e))=="string"||e instanceof Or?Jf(s,"updateDoc",n._key,e,t,r):Yf(s,"updateDoc",n._key,e),Mr(i,[a.toMutation(n._key,Qe.exists(!0))])}function pi(n){return Mr(Ke(n.firestore,ft),[new yo(n._key,Qe.none())])}function Ai(n,e){const t=Ke(n.firestore,ft),r=ne(n),i=Hl(n.converter,e);return Mr(t,[Ul(Fi(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Qe.exists(!1))]).then(()=>r)}function ji(n,...e){var t,r,i;n=ye(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||sh(e[a])||(s=e[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(sh(e[a])){const _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[a+2]=(i=_.complete)===null||i===void 0?void 0:i.bind(_)}let u,h,f;if(n instanceof Fe)h=Ke(n.firestore,ft),f=ho(n._key.path),u={next:_=>{e[a]&&e[a](sp(h,n,_))},error:e[a+1],complete:e[a+2]};else{const _=Ke(n,Tt);h=Ke(_.firestore,ft),f=_._query;const g=new Yl(h);u={next:I=>{e[a]&&e[a](new Ql(h,g,_,I))},error:e[a+1],complete:e[a+2]},np(n._query)}return function(g,I,R,k){const P=new Ll(k),V=new Ol(I,P,R);return g.asyncQueue.enqueueAndForget(async()=>Dl(await Xs(g),V)),()=>{P.Za(),g.asyncQueue.enqueueAndForget(async()=>Nl(await Xs(g),V))}}(Vr(h),f,l,u)}function Mr(n,e){return function(r,i){const s=new Ft;return r.asyncQueue.enqueueAndForget(async()=>Hw(await rE(r),i,s)),s.promise}(Vr(n),e)}function sp(n,e,t){const r=t.docs.get(e._key),i=new Yl(n);return new Gl(n,i,e._key,r,new dr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class op{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Fi(e)}set(e,t,r){this._verifyNotCommitted();const i=da(e,this._firestore),s=Hl(i.converter,t,r),a=Ul(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,Qe.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=da(e,this._firestore);let a;return a=typeof(t=ye(t))=="string"||t instanceof Or?Jf(this._dataReader,"WriteBatch.update",s._key,t,r,i):Yf(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,Qe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=da(e,this._firestore);return this._mutations=this._mutations.concat(new yo(t._key,Qe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function da(n,e){if((n=ye(n)).firestore!==e)throw new U(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Ge(){return new Fl("serverTimestamp")}function Si(...n){return new Bl("arrayUnion",n)}function eo(...n){return new jl("arrayRemove",n)}function Ha(n){return new zl("increment",n)}/**
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
 */function ap(n){return Vr(n=Ke(n,ft)),new op(n,e=>Mr(n,e))}(function(e,t=!0){(function(i){kr=i})(Wn),Ln(new Mn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new ft(new Ry(r.getProvider("auth-internal")),new xy(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new U(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tr(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Lt(Iu,"4.7.3",e),Lt(Iu,"4.7.3","esm2017")})();const lp=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:ip,Bytes:$n,CollectionReference:Bt,DocumentReference:Fe,DocumentSnapshot:Gl,FieldPath:Or,FieldValue:vn,Firestore:ft,FirestoreError:U,GeoPoint:Ao,Query:Tt,QueryCompositeFilterConstraint:xo,QueryConstraint:ko,QueryDocumentSnapshot:fi,QueryFieldFilterConstraint:Bi,QueryLimitConstraint:No,QueryOrderByConstraint:Do,QuerySnapshot:Ql,SnapshotMetadata:dr,Timestamp:Re,VectorValue:So,WriteBatch:op,_AutoId:dl,_ByteString:Ve,_DatabaseId:Tr,_DocumentKey:$,_EmptyAuthCredentialsProvider:zd,_FieldPath:Ne,_cast:Ke,_logWarn:Bn,_validateIsNotUsedTogether:qf,addDoc:Ai,arrayRemove:eo,arrayUnion:Si,collection:Xe,connectFirestoreEmulator:Wf,deleteDoc:pi,doc:ne,ensureFirestoreConfigured:Vr,executeWrite:Mr,getDoc:hn,getDocs:on,getFirestore:Kf,increment:Ha,limit:Kl,onSnapshot:ji,orderBy:Ka,query:gt,serverTimestamp:Ge,setDoc:Ze,updateDoc:at,where:Ct,writeBatch:ap},Symbol.toStringTag,{value:"Module"})),mE={apiKey:"AIzaSyCBSLz3aL1hx57bOoJzHa09k4yl9fw8SFI",authDomain:"vortex-messenger-4ea97.firebaseapp.com",projectId:"vortex-messenger-4ea97",storageBucket:"vortex-messenger-4ea97.firebasestorage.app",messagingSenderId:"294669525739",appId:"1:294669525739:web:fe8fc3472c649f348654ae"},cp=tl(mE),Es=Vd(cp),K=Kf(cp);class gE{async createUser(e){const{uid:t,email:r,displayName:i,username:s}=e;await Ze(ne(K,"users",t),{uid:t,email:r,displayName:i,username:s,createdAt:new Date,updatedAt:new Date}),s&&await Ze(ne(K,"usernames",s),{username:s,uid:t,email:r})}async isUsernameAvailable(e){const t=gt(Xe(K,"usernames"),Ct("username","==",e));return(await on(t)).empty}async findUser(e){const t=e.trim();if(t.startsWith("@")){const s=t.substring(1).toLowerCase(),a=gt(Xe(K,"usernames"),Ct("username","==",s)),l=await on(a);if(!l.empty){const u=l.docs[0].data(),h=await hn(ne(K,"users",u.uid));return h.exists()?h.data():null}return null}if(t.includes("@")){const s=gt(Xe(K,"users"),Ct("email","==",t)),a=await on(s);return a.empty?null:a.docs[0].data()}const r=gt(Xe(K,"usernames"),Ct("username","==",t.toLowerCase())),i=await on(r);if(!i.empty){const s=i.docs[0].data(),a=await hn(ne(K,"users",s.uid));return a.exists()?a.data():null}return null}async searchUsers(e,t=10){const r=e.toLowerCase(),i=gt(Xe(K,"users"),Ct("username",">=",r),Ct("username","<=",r+""),Kl(t));return(await on(i)).docs.map(a=>a.data())}async getUserProfile(e){const t=await hn(ne(K,"users",e));return t.exists()?t.data():null}async updateProfile(e,t){await Ze(ne(K,"users",e),{...t,updatedAt:new Date},{merge:!0})}}const qn=new gE;class _E{constructor(){this.currentUser=void 0,this.listeners=[],this.initialized=!1,wd(Es,e=>{this.currentUser=e,this.initialized=!0,this.listeners.forEach(t=>t(e))})}onAuthChange(e){return this.listeners.push(e),this.initialized&&e(this.currentUser),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}async login(e,t){await gd(Es,e,t)}async register(e,t,r,i=""){const s=await md(Es,e,t);await _d(s.user,{displayName:r}),await qn.createUser({uid:s.user.uid,email:e,displayName:r,username:i})}async logout(){await Ed(Es)}getCurrentUser(){return this.currentUser}isInitialized(){return this.initialized}}const dn=new _E;function yE(){const[n,e]=F("login"),[t,r]=F(""),[i,s]=F(""),[a,l]=F(""),[u,h]=F(""),[f,_]=F(""),[g,I]=F(!1),[R,k]=F(""),[P,V]=F(!1),O=async W=>{const J=W.toLowerCase().replace(/[^a-z0-9_]/g,"");if(h(J),J.length<3){_("Минимум 3 символа");return}I(!0);try{const E=await qn.isUsernameAvailable(J);_(E?"✅ Свободен":"❌ Занят")}catch{_("")}finally{I(!1)}},z=async W=>{W.preventDefault(),k(""),V(!0);try{if(n==="login")await dn.login(t,i);else{if(a.length<2)throw new Error("Имя должно быть минимум 2 символа");if(u.length<3)throw new Error("Username минимум 3 символа");if(i.length<6)throw new Error("Пароль минимум 6 символов");await dn.register(t,i,a,u)}}catch(J){k(J.message||"Ошибка")}finally{V(!1)}},X=W=>{W.key==="Enter"&&z(W)};return p("div",{style:le.wrapper,children:p("div",{style:le.card,children:[p("div",{style:le.logoSection,children:[p("div",{style:le.logoIcon,children:"🌪️"}),p("h1",{style:le.logoTitle,children:"Vortex"}),p("p",{style:le.logoSubtitle,children:"В центре общения"})]}),p("div",{style:le.tabs,children:[p("button",{onClick:()=>{e("login"),k("")},style:{...le.tab,background:n==="login"?"var(--bg-active)":"transparent",color:n==="login"?"var(--text-primary)":"var(--text-secondary)"},children:"Вход"}),p("button",{onClick:()=>{e("register"),k("")},style:{...le.tab,background:n==="register"?"var(--bg-active)":"transparent",color:n==="register"?"var(--text-primary)":"var(--text-secondary)"},children:"Регистрация"})]}),p("form",{onSubmit:z,style:le.form,children:[n==="register"&&p(it,{children:[p("div",{style:le.fieldGroup,children:[p("label",{style:le.label,children:"Имя"}),p("input",{type:"text",value:a,onInput:W=>l(W.target.value),placeholder:"Ваше имя",style:le.input,required:!0})]}),p("div",{style:le.fieldGroup,children:[p("label",{style:le.label,children:"Username"}),p("div",{style:le.usernameWrapper,children:[p("span",{style:le.usernamePrefix,children:"@"}),p("input",{type:"text",value:u,onInput:W=>O(W.target.value),placeholder:"username",style:{...le.input,paddingLeft:"2rem"},required:!0})]}),u.length>=3&&p("div",{style:{...le.statusText,color:f.includes("✅")?"var(--vortex-secondary)":f.includes("❌")?"var(--vortex-danger)":"var(--text-tertiary)"},children:g?"Проверка...":f})]})]}),p("div",{style:le.fieldGroup,children:[p("label",{style:le.label,children:"Email"}),p("input",{type:"email",value:t,onInput:W=>r(W.target.value),placeholder:"user@example.com",onKeyDown:X,style:le.input,required:!0})]}),p("div",{style:le.fieldGroup,children:[p("label",{style:le.label,children:"Пароль"}),p("input",{type:"password",value:i,onInput:W=>s(W.target.value),placeholder:"••••••••",onKeyDown:X,style:le.input,required:!0})]}),R&&p("div",{style:le.error,children:["⚠️ ",R]}),p("button",{type:"submit",disabled:P||n==="register"&&f.includes("❌"),style:{...le.submitBtn,opacity:P?.7:1},children:P?"Загрузка...":n==="login"?"Войти":"Зарегистрироваться"})]}),p("div",{style:le.switchText,children:n==="login"?p(it,{children:["Нет аккаунта?"," ",p("span",{onClick:()=>e("register"),style:le.switchLink,children:"Зарегистрироваться"})]}):p(it,{children:["Уже есть аккаунт?"," ",p("span",{onClick:()=>e("login"),style:le.switchLink,children:"Войти"})]})})]})})}const le={wrapper:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",background:"var(--bg-primary)"},card:{background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"20px",padding:"2.5rem",width:"420px",maxWidth:"90vw",boxShadow:"0 20px 60px rgba(0,0,0,0.4)"},logoSection:{textAlign:"center",marginBottom:"2rem"},logoIcon:{fontSize:"3rem"},logoTitle:{background:"var(--gradient-brand)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"2rem",fontWeight:800,margin:"0.5rem 0 0 0"},logoSubtitle:{color:"var(--text-secondary)",fontSize:"0.9rem",marginTop:"0.25rem"},tabs:{display:"flex",background:"rgba(255,255,255,0.03)",borderRadius:"14px",padding:"4px",marginBottom:"1.5rem"},tab:{flex:1,padding:"0.75rem",border:"none",borderRadius:"10px",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",transition:"all 0.2s",fontFamily:"inherit"},form:{display:"flex",flexDirection:"column",gap:"0.25rem"},fieldGroup:{marginBottom:"0.75rem"},label:{display:"block",fontSize:"0.8rem",fontWeight:500,color:"var(--text-secondary)",marginBottom:"0.35rem",textTransform:"uppercase",letterSpacing:"0.5px"},input:{width:"100%",padding:"0.75rem 1rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-default)",borderRadius:"12px",color:"var(--text-primary)",fontSize:"0.95rem",outline:"none",transition:"border-color 0.2s",fontFamily:"inherit"},usernameWrapper:{position:"relative"},usernamePrefix:{position:"absolute",left:"0.75rem",top:"50%",transform:"translateY(-50%)",color:"var(--text-tertiary)",fontWeight:600,fontSize:"0.95rem",pointerEvents:"none"},statusText:{fontSize:"0.75rem",marginTop:"0.25rem",paddingLeft:"0.25rem"},error:{padding:"0.75rem 1rem",background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:"10px",color:"#FCA5A5",fontSize:"0.85rem"},submitBtn:{width:"100%",padding:"0.85rem",background:"var(--gradient-brand)",color:"white",border:"none",borderRadius:"12px",fontSize:"1rem",fontWeight:600,cursor:"pointer",marginTop:"0.5rem",fontFamily:"inherit"},switchText:{textAlign:"center",marginTop:"1.25rem",fontSize:"0.85rem",color:"var(--text-secondary)"},switchLink:{color:"var(--vortex-primary-light)",cursor:"pointer",fontWeight:500}};class vE{subscribeToMessages(e,t){const r=gt(Xe(K,"chats",e,"messages"),Ka("createdAt","asc"));return ji(r,i=>{const s=[];i.forEach(a=>{s.push({id:a.id,...a.data()})}),t(s)})}async sendMessage(e,t,r,i=null){const s={senderId:t.uid,senderName:t.displayName||t.email,createdAt:Ge(),type:i?i.type:"text",text:r||"",readBy:[]};i&&(s.fileData=i.fileData,s.fileName=i.fileName,s.fileSize=i.fileSize||0),await Ai(Xe(K,"chats",e,"messages"),s);const a=i?i.type==="image"?"📷 Фото":i.type==="video"?"🎬 Видео":i.type==="voice"?"🎙️ Голосовое":i.type==="audio"?"🎵 Аудио":"📎 Файл":r;await Ze(ne(K,"chats",e),{lastMessage:a,lastMessageTime:Ge()},{merge:!0})}async editMessage(e,t,r){await at(ne(K,"chats",e,"messages",t),{text:r,isEdited:!0,editedAt:Ge()})}async deleteMessage(e,t){const r=ne(K,"chats",e),s=(await hn(r)).data()||{},a=(s.pinnedMessages||[]).filter(h=>h.id!==t);a.length!==(s.pinnedMessages||[]).length&&await Ze(r,{pinnedMessages:a},{merge:!0}),await pi(ne(K,"chats",e,"messages",t));const l=gt(Xe(K,"chats",e,"messages"),Ka("createdAt","desc"),Kl(1)),u=await on(l);if(u.empty)await Ze(ne(K,"chats",e),{lastMessage:"Нет сообщений",lastMessageTime:Ge()},{merge:!0});else{const h=u.docs[0].data(),f=h.type==="image"?"📷 Фото":h.type==="video"?"🎬 Видео":h.type==="voice"?"🎙️ Голосовое":h.type==="audio"?"🎵 Аудио":h.type==="file"?"📎 Файл":h.text||"";await Ze(ne(K,"chats",e),{lastMessage:f,lastMessageTime:h.createdAt},{merge:!0})}}async markAsRead(e,t,r){const i=ne(K,"chats",e,"messages",r);await at(i,{readBy:Si(t)})}}const Vn=new vE,wE=Object.freeze(Object.defineProperty({__proto__:null,messageService:Vn},Symbol.toStringTag,{value:"Module"}));class EE{subscribeToChats(e,t){const r=gt(Xe(K,"chats"),Ct("participants","array-contains",e));return ji(r,i=>{const s=[];i.forEach(a=>{s.push({id:a.id,...a.data()})}),s.sort((a,l)=>{const u=a.lastMessageTime?.toDate?.()||0;return(l.lastMessageTime?.toDate?.()||0)-u}),t(s)})}async createChat(e,t){const r=gt(Xe(K,"chats"),Ct("participants","array-contains",e.uid)),s=(await on(r)).docs.find(u=>{const h=u.data();return h.participants.includes(t.uid)&&h.participants.length===2&&h.type!=="group"});if(s)return s.id;const a={type:"private",participants:[e.uid,t.uid],participantEmails:[e.email,t.email],participantNames:[e.displayName||e.email,t.displayName||t.email],createdAt:Ge(),lastMessage:"Чат создан",lastMessageTime:Ge(),pinnedMessages:[]};return(await Ai(Xe(K,"chats"),a)).id}async createGroupChat(e,t,r="Группа"){const i=[e.uid,...t],s={type:"group",name:r,participants:i,createdBy:e.uid,admins:[e.uid],createdAt:Ge(),lastMessage:`Группа "${r}" создана`,lastMessageTime:Ge(),pinnedMessages:[]};return(await Ai(Xe(K,"chats"),s)).id}async sendMessage(e,t,r,i=null){await Vn.sendMessage(e,r,t,i)}subscribeToMessages(e,t){return Vn.subscribeToMessages(e,t)}async pinMessage(e,t,r,i){const s=ne(K,"chats",e),u=((await hn(s)).data()||{}).pinnedMessages||[];u.find(h=>h.id===t)||(u.push({id:t,text:r?.substring(0,100)||"",senderName:i||"",pinnedAt:new Date().toISOString()}),await Ze(s,{pinnedMessages:u},{merge:!0}))}async unpinMessage(e,t){const r=ne(K,"chats",e),a=(((await hn(r)).data()||{}).pinnedMessages||[]).filter(l=>l.id!==t);await Ze(r,{pinnedMessages:a},{merge:!0})}}const rt=new EE,IE=Object.freeze(Object.defineProperty({__proto__:null,chatService:rt},Symbol.toStringTag,{value:"Module"}));class TE{constructor(){this.theme=localStorage.getItem("vortex-theme")||"dark",this.listeners=[],this.apply()}get(){return this.theme}toggle(){this.theme=this.theme==="dark"?"light":"dark",localStorage.setItem("vortex-theme",this.theme),this.apply(),this.listeners.forEach(e=>e(this.theme))}apply(){document.documentElement.setAttribute("data-theme",this.theme)}onChange(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}}const fa=new TE;function bE({user:n,onLogout:e,onProfile:t,onContacts:r,onTasks:i}){const[s,a]=F(!1),[l,u]=F(fa.get()),h=()=>{a(!s)},f=()=>{a(!1)},_=()=>{fa.toggle(),u(fa.get())},g=I=>{a(!1),I?.()};return p(it,{children:[p("button",{onClick:h,style:{width:"40px",height:"40px",borderRadius:"50%",background:"transparent",border:"1px solid var(--border-subtle)",color:"var(--text-secondary)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",transition:"all 0.15s"},onMouseEnter:I=>{I.target.style.background="var(--bg-hover)",I.target.style.color="var(--text-primary)"},onMouseLeave:I=>{I.target.style.background="transparent",I.target.style.color="var(--text-secondary)"},children:p("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:[p("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),p("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),p("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),s&&p("div",{onClick:f,style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.5)",zIndex:200,backdropFilter:"blur(2px)",animation:"fadeIn 0.2s ease"}}),p("div",{style:{position:"fixed",top:0,left:s?0:"-320px",bottom:0,width:"320px",background:"var(--bg-secondary)",zIndex:201,transition:"left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",borderRight:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column"},children:[p("div",{style:{padding:"20px",borderBottom:"1px solid var(--border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p("h3",{style:{fontWeight:700,fontSize:"1.1rem"},children:"Меню"}),p("button",{onClick:f,style:{width:"36px",height:"36px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1.2rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),p("div",{style:{flex:1,overflowY:"auto",padding:"8px"},children:[p(pa,{icon:"👤",title:"Профиль",subtitle:n?.email||"email",onClick:()=>g(t)}),p(pa,{icon:"👥",title:"Контакты",subtitle:"Поиск пользователей",onClick:()=>g(r)}),p(pa,{icon:"📋",title:"Задачи",subtitle:"Список задач",onClick:()=>g(i)}),p("div",{style:{height:"1px",background:"var(--border-subtle)",margin:"8px 16px"}}),p("div",{onClick:_,style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s"},onMouseEnter:I=>I.target.style.background="var(--bg-hover)",onMouseLeave:I=>I.target.style.background="transparent",children:[p("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},children:l==="dark"?"🌙":"☀️"}),p("div",{children:[p("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:l==="dark"?"Тёмная тема":"Светлая тема"}),p("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:l==="dark"?"Включена":"Выключена"})]})]}),p("div",{style:{height:"1px",background:"var(--border-subtle)",margin:"8px 16px"}}),p("div",{onClick:()=>g(e),style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s",color:"var(--vortex-danger)"},onMouseEnter:I=>I.target.style.background="rgba(239,68,68,0.1)",onMouseLeave:I=>I.target.style.background="transparent",children:[p("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"rgba(239,68,68,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},children:"🚪"}),p("div",{children:p("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:"Выйти"})})]})]})]})]})}function pa({icon:n,title:e,subtitle:t,onClick:r}){return p("div",{onClick:r,style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s"},onMouseEnter:i=>i.target.style.background="var(--bg-hover)",onMouseLeave:i=>i.target.style.background="transparent",children:[p("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem"},children:n}),p("div",{children:[p("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:e}),t&&p("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:t})]})]})}function AE({onPersonalChat:n,onGroupChat:e,onChannel:t}){const[r,i]=F(!1),s=ln(null),a=ln(null);return qe(()=>{const l=u=>{s.current&&!s.current.contains(u.target)&&a.current&&!a.current.contains(u.target)&&i(!1)};return document.addEventListener("click",l),()=>document.removeEventListener("click",l)},[]),p("div",{style:{position:"absolute",bottom:"20px",right:"20px",zIndex:30},children:[p("button",{ref:a,onClick:l=>{l.stopPropagation(),i(!r)},style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--gradient-brand)",border:"none",color:"white",fontSize:"28px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(124, 58, 237, 0.4)",transition:"all 0.3s ease",transform:r?"rotate(45deg)":"rotate(0deg)",lineHeight:1},children:"+"}),r&&p("div",{ref:s,style:{position:"absolute",bottom:"70px",right:"0",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"16px",boxShadow:"0 12px 40px rgba(0,0,0,0.5)",padding:"8px",minWidth:"230px",animation:"menuPopup 0.2s ease"},children:[p(ma,{icon:"👤",color:"var(--gradient-brand)",title:"Личный чат",subtitle:"Начать общение",onClick:()=>{i(!1),n?.()}}),p(ma,{icon:"👥",color:"var(--gradient-success)",title:"Группа",subtitle:"Создать группу",onClick:()=>{i(!1),e?.()}}),p(ma,{icon:"📢",color:"linear-gradient(135deg, #F59E0B, #EF4444)",title:"Канал",subtitle:"Создать канал (скоро)",onClick:()=>{i(!1),t?.()}})]})]})}function ma({icon:n,color:e,title:t,subtitle:r,onClick:i}){return p("button",{onClick:i,style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",background:"transparent",border:"none",borderRadius:"12px",color:"var(--text-primary)",cursor:"pointer",fontSize:"0.9rem",textAlign:"left",transition:"background 0.15s",fontFamily:"inherit"},onMouseEnter:s=>s.currentTarget.style.background="var(--bg-hover)",onMouseLeave:s=>s.currentTarget.style.background="transparent",children:[p("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:e,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.2rem"},children:n}),p("div",{children:[p("div",{style:{fontWeight:600},children:t}),p("div",{style:{fontSize:"0.75rem",color:"var(--text-tertiary)",marginTop:"2px"},children:r})]})]})}const SE="modulepreload",RE=function(n){return"/Vortex/"+n},lh={},_r=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=Promise.allSettled(t.map(u=>{if(u=RE(u),u in lh)return;lh[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":SE,h||(_.as="script"),_.crossOrigin="",_.href=u,l&&_.setAttribute("nonce",l),document.head.appendChild(_),h)return new Promise((g,I)=>{_.addEventListener("load",g),_.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};class CE{async createChannel(e,t,r=""){const i={type:"channel",name:t,description:r,createdBy:e.uid,ownerId:e.uid,admins:[e.uid],subscribers:[e.uid],subscriberCount:1,createdAt:Ge(),lastMessage:`Канал "${t}" создан`,lastMessageTime:Ge(),isChannel:!0};return(await Ai(Xe(K,"chats"),i)).id}async subscribe(e,t){const r=ne(K,"chats",e);await at(r,{subscribers:Si(t),subscriberCount:Ha(1)}),await at(r,{participants:Si(t)})}async unsubscribe(e,t){const r=ne(K,"chats",e);await at(r,{subscribers:eo(t),subscriberCount:Ha(-1),participants:eo(t)})}async sendChannelMessage(e,t,r,i=null){const s=ne(K,"chats",e);if(!(await hn(s)).data().admins?.includes(t.uid))throw new Error("Только админы могут писать в канал");const{messageService:u}=await _r(async()=>{const{messageService:h}=await Promise.resolve().then(()=>wE);return{messageService:h}},void 0);await u.sendMessage(e,t,r,i)}}const PE=new CE;function kE({user:n,onClose:e,onChatCreated:t,mode:r="personal"}){const[i,s]=F(""),[a,l]=F(""),[u,h]=F(""),[f,_]=F(null),[g,I]=F(!1),[R,k]=F(""),[P,V]=F(r==="group"?"groupForm":r==="channel"?"channelForm":"search"),O=async()=>{if(!i.trim()){k("Введите email или @username");return}I(!0),k("");try{const E=await qn.findUser(i);if(!E){k("Пользователь не найден");return}if(E.uid===n.uid){k("Это ваш аккаунт");return}_(E),V("result")}catch{k("Ошибка поиска")}finally{I(!1)}},z=async()=>{if(f){I(!0);try{const E=await rt.createChat(n,f);t?.(E),e?.()}catch(E){k(E.message)}finally{I(!1)}}},X=async()=>{const E=a.trim()||"Группа",y=u.split(",").map(v=>v.trim()).filter(v=>v);if(y.length===0){k("Добавьте участников");return}I(!0);try{const v=[];for(const b of y){const A=await qn.findUser(b);A&&A.uid!==n.uid&&v.push(A.uid)}if(v.length===0){k("Участники не найдены");return}const T=await rt.createGroupChat(n,v,E);t?.(T),e?.()}catch(v){k(v.message)}finally{I(!1)}},W=async()=>{const E=a.trim()||"Канал";I(!0);try{const y=await PE.createChannel(n,E);t?.(y),e?.()}catch(y){k(y.message)}finally{I(!1)}},J=E=>{const y=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let v=0;for(let T=0;T<(E||"").length;T++)v=E.charCodeAt(T)+((v<<5)-v);return y[Math.abs(v)%y.length]};return p("div",{style:ae.overlay,onClick:e,children:p("div",{style:ae.modal,onClick:E=>E.stopPropagation(),children:[p("div",{style:ae.header,children:[p("h3",{children:r==="group"?"Новая группа":r==="channel"?"Новый канал":"Новый чат"}),p("button",{onClick:e,style:ae.closeBtn,children:"✕"})]}),p("div",{style:ae.body,children:[P==="search"&&p(it,{children:[p("p",{style:ae.hint,children:"Введите email или @username"}),p("div",{style:ae.row,children:[p("input",{value:i,onInput:E=>{s(E.target.value),k("")},onKeyDown:E=>E.key==="Enter"&&O(),placeholder:"Email или @username",style:ae.input,autoFocus:!0}),p("button",{onClick:O,disabled:g||!i.trim(),style:ae.btn,children:g?"...":"Найти"})]}),R&&p("p",{style:ae.error,children:R})]}),P==="result"&&f&&p(it,{children:[p("div",{style:ae.userCard,children:[p("div",{style:{...ae.avatar,background:J(f.displayName||f.email)},children:(f.displayName||f.email).charAt(0).toUpperCase()}),p("div",{children:[p("div",{style:ae.userName,children:f.displayName||"Без имени"}),p("div",{style:ae.userEmail,children:f.email})]})]}),p("div",{style:ae.actions,children:[p("button",{onClick:()=>V("search"),style:ae.backBtn,children:"← Назад"}),p("button",{onClick:z,disabled:g,style:ae.createBtn,children:g?"...":"Создать чат"})]})]}),P==="groupForm"&&p(it,{children:[p("div",{style:ae.field,children:[p("label",{children:"Название группы"}),p("input",{value:a,onInput:E=>l(E.target.value),placeholder:"Название группы",style:ae.input,autoFocus:!0})]}),p("div",{style:ae.field,children:[p("label",{children:"Участники (через запятую)"}),p("input",{value:u,onInput:E=>h(E.target.value),placeholder:"@user1, @user2",style:ae.input})]}),R&&p("p",{style:ae.error,children:R}),p("div",{style:ae.actions,children:[p("button",{onClick:e,style:ae.backBtn,children:"Отмена"}),p("button",{onClick:X,disabled:g,style:ae.createBtn,children:g?"...":"Создать группу"})]})]}),P==="channelForm"&&p(it,{children:[p("div",{style:ae.field,children:[p("label",{children:"Название канала"}),p("input",{value:a,onInput:E=>l(E.target.value),placeholder:"Название канала",style:ae.input,autoFocus:!0})]}),R&&p("p",{style:ae.error,children:R}),p("div",{style:ae.actions,children:[p("button",{onClick:e,style:ae.backBtn,children:"Отмена"}),p("button",{onClick:W,disabled:g,style:ae.createBtn,children:g?"...":"Создать канал"})]})]})]})]})})}const ae={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},modal:{background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"16px",width:"440px",maxWidth:"90vw"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.25rem 1.5rem",borderBottom:"1px solid var(--border-subtle)"},closeBtn:{background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1.1rem"},body:{padding:"1.5rem"},hint:{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"1rem"},row:{display:"flex",gap:"0.5rem"},input:{flex:1,padding:"0.75rem 1rem",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-default)",borderRadius:"12px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none"},btn:{padding:"0.75rem 1.25rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"#fff",fontWeight:600,cursor:"pointer"},error:{color:"var(--vortex-danger)",fontSize:"0.85rem",marginTop:"0.75rem",padding:"0.5rem 0.75rem",background:"rgba(239,68,68,0.1)",borderRadius:"8px"},userCard:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem",background:"rgba(255,255,255,0.03)",borderRadius:"12px",marginBottom:"1rem"},avatar:{width:"56px",height:"56px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:"1.3rem",flexShrink:0},userName:{fontWeight:600},userEmail:{fontSize:"0.85rem",color:"var(--text-secondary)"},actions:{display:"flex",gap:"0.75rem",marginTop:"1rem"},backBtn:{flex:1,padding:"0.75rem",background:"transparent",border:"1px solid var(--border-default)",borderRadius:"12px",color:"var(--text-secondary)",cursor:"pointer"},createBtn:{flex:2,padding:"0.75rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"#fff",fontWeight:600,cursor:"pointer"},field:{marginBottom:"1rem"}};function xE({onClose:n}){const[e,t]=F(null),[r,i]=F(""),[s,a]=F(""),[l,u]=F(!1),[h,f]=F("");qe(()=>{_()},[]);const _=async()=>{const k=dn.getCurrentUser();if(!k)return;const P=await qn.getUserProfile(k.uid);t(P),i(P?.displayName||""),a(P?.bio||"")},g=async()=>{u(!0),f("");try{await qn.updateProfile(dn.getCurrentUser().uid,{displayName:r,bio:s}),f("✅ Профиль обновлён!"),setTimeout(()=>n?.(),1e3)}catch{f("❌ Ошибка сохранения")}finally{u(!1)}},I=k=>{const P=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let V=0;for(let O=0;O<(k||"").length;O++)V=k.charCodeAt(O)+((V<<5)-V);return P[Math.abs(V)%P.length]},R=dn.getCurrentUser();return p("div",{style:me.overlay,onClick:n,children:p("div",{style:me.modal,onClick:k=>k.stopPropagation(),children:[p("div",{style:me.header,children:[p("h3",{style:me.title,children:"👤 Профиль"}),p("button",{onClick:n,style:me.closeBtn,children:"✕"})]}),p("div",{style:me.body,children:[p("div",{style:me.avatarSection,children:[p("div",{style:{...me.avatar,background:I(r||R?.email)},children:(r||R?.email||"?").charAt(0).toUpperCase()}),p("button",{style:me.changeAvatarBtn,children:"📷 Изменить аватар"})]}),p("div",{style:me.field,children:[p("label",{style:me.label,children:"Имя"}),p("input",{type:"text",value:r,onInput:k=>i(k.target.value),style:me.input,placeholder:"Ваше имя"})]}),p("div",{style:me.field,children:[p("label",{style:me.label,children:"Username"}),p("div",{style:me.usernameDisplay,children:["@",e?.username||"не задан"]})]}),p("div",{style:me.field,children:[p("label",{style:me.label,children:"Email"}),p("div",{style:me.usernameDisplay,children:R?.email})]}),p("div",{style:me.field,children:[p("label",{style:me.label,children:"Bio"}),p("textarea",{value:s,onInput:k=>a(k.target.value),style:me.textarea,placeholder:"Расскажите о себе...",rows:3})]}),h&&p("div",{style:{...me.message,background:h.includes("✅")?"rgba(6,214,160,0.1)":"rgba(239,68,68,0.1)",color:h.includes("✅")?"var(--vortex-secondary)":"var(--vortex-danger)"},children:h}),p("button",{onClick:g,disabled:l,style:{...me.saveBtn,opacity:l?.7:1},children:l?"Сохранение...":"💾 Сохранить"})]})]})})}const me={overlay:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,animation:"fadeIn 0.2s ease"},modal:{background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"20px",width:"440px",maxWidth:"90vw",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",animation:"slideUp 0.25s ease",overflow:"hidden"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.25rem 1.5rem",borderBottom:"1px solid var(--border-subtle)"},title:{margin:0,fontSize:"1.1rem",fontWeight:700},closeBtn:{width:"32px",height:"32px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},body:{padding:"1.5rem"},avatarSection:{textAlign:"center",marginBottom:"1.5rem"},avatar:{width:"80px",height:"80px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"2rem",margin:"0 auto"},changeAvatarBtn:{marginTop:"0.75rem",padding:"0.4rem 1rem",background:"transparent",border:"1px solid var(--border-default)",borderRadius:"8px",color:"var(--text-secondary)",cursor:"pointer",fontSize:"0.8rem"},field:{marginBottom:"1rem"},label:{display:"block",fontSize:"0.75rem",fontWeight:500,color:"var(--text-secondary)",marginBottom:"0.35rem",textTransform:"uppercase",letterSpacing:"0.5px"},input:{width:"100%",padding:"0.7rem 1rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-default)",borderRadius:"10px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none"},textarea:{width:"100%",padding:"0.7rem 1rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-default)",borderRadius:"10px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none",resize:"vertical",fontFamily:"inherit"},usernameDisplay:{padding:"0.7rem 1rem",background:"rgba(255,255,255,0.02)",border:"1px solid var(--border-subtle)",borderRadius:"10px",color:"var(--text-secondary)",fontSize:"0.9rem"},message:{padding:"0.6rem 1rem",borderRadius:"10px",fontSize:"0.85rem",marginBottom:"1rem"},saveBtn:{width:"100%",padding:"0.8rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"white",fontWeight:600,fontSize:"0.95rem",cursor:"pointer"}};class DE{constructor(){this.theme=localStorage.getItem("vortex-theme")||"dark",this.customColors=JSON.parse(localStorage.getItem("vortex-custom-colors")||"null"),this.listeners=[],this.apply()}get(){return this.theme}setTheme(e){this.theme=e,localStorage.setItem("vortex-theme",e),this.apply(),this.listeners.forEach(t=>t(e))}toggle(){this.setTheme(this.theme==="dark"?"light":"dark")}setCustomColor(e,t){this.customColors||(this.customColors={}),this.customColors[e]=t,localStorage.setItem("vortex-custom-colors",JSON.stringify(this.customColors)),this.apply(),this.listeners.forEach(r=>r("custom"))}resetCustomColors(){this.customColors=null,localStorage.removeItem("vortex-custom-colors"),this.apply(),this.listeners.forEach(e=>e(this.theme))}getPresetThemes(){return{default:{name:"Стандартная",primary:"#7C3AED",secondary:"#06D6A0"},ocean:{name:"Океан",primary:"#0EA5E9",secondary:"#06B6D4"},sunset:{name:"Закат",primary:"#F59E0B",secondary:"#EF4444"},forest:{name:"Лес",primary:"#10B981",secondary:"#34D399"},rose:{name:"Роза",primary:"#EC4899",secondary:"#F472B6"},midnight:{name:"Полночь",primary:"#1E1B4B",secondary:"#312E81"},gold:{name:"Золото",primary:"#D97706",secondary:"#FBBF24"}}}applyPreset(e){const t=this.getPresetThemes()[e];t&&(this.setCustomColor("--vortex-primary",t.primary),this.setCustomColor("--vortex-secondary",t.secondary))}apply(){document.documentElement.setAttribute("data-theme",this.theme),this.customColors&&Object.entries(this.customColors).forEach(([e,t])=>{document.documentElement.style.setProperty(e,t)})}onChange(e){return this.listeners.push(e),()=>this.listeners=this.listeners.filter(t=>t!==e)}}const xn=new DE;function up({onClose:n}){const[e,t]=F("presets"),[r,i]=F("#7C3AED"),[s,a]=F("#06D6A0"),l=xn.getPresetThemes();qe(()=>{const f=document.documentElement,_=getComputedStyle(f).getPropertyValue("--vortex-primary").trim(),g=getComputedStyle(f).getPropertyValue("--vortex-secondary").trim();i(_||"#7C3AED"),a(g||"#06D6A0")},[]);const u=(f,_)=>{f==="primary"?(i(_),xn.setCustomColor("--vortex-primary",_),xn.setCustomColor("--gradient-brand",`linear-gradient(135deg, ${_}, ${s})`)):(a(_),xn.setCustomColor("--vortex-secondary",_),xn.setCustomColor("--gradient-brand",`linear-gradient(135deg, ${r}, ${_})`))},h=f=>{xn.applyPreset(f);const _=l[f];i(_.primary),a(_.secondary)};return p("div",{style:Te.overlay,onClick:n,children:p("div",{style:Te.modal,onClick:f=>f.stopPropagation(),children:[p("div",{style:Te.header,children:[p("h3",{children:"🎨 Кастомизация"}),p("button",{onClick:n,style:Te.closeBtn,children:"✕"})]}),p("div",{style:Te.tabs,children:[p("button",{onClick:()=>t("presets"),style:{...Te.tab,background:e==="presets"?"var(--bg-active)":"transparent"},children:"🎨 Темы"}),p("button",{onClick:()=>t("custom"),style:{...Te.tab,background:e==="custom"?"var(--bg-active)":"transparent"},children:"🎯 Своё"})]}),p("div",{style:Te.body,children:[e==="presets"&&p("div",{style:Te.presets,children:Object.entries(l).map(([f,_])=>p("div",{onClick:()=>h(f),style:Te.presetItem,children:[p("div",{style:{...Te.presetPreview,background:`linear-gradient(135deg, ${_.primary}, ${_.secondary})`}}),p("span",{children:_.name})]},f))}),e==="custom"&&p("div",{children:[p("div",{style:Te.field,children:[p("label",{children:"Основной цвет"}),p("div",{style:Te.colorRow,children:[p("input",{type:"color",value:r,onInput:f=>u("primary",f.target.value),style:Te.colorInput}),p("input",{type:"text",value:r,onInput:f=>u("primary",f.target.value),style:Te.textInput})]})]}),p("div",{style:Te.field,children:[p("label",{children:"Акцентный цвет"}),p("div",{style:Te.colorRow,children:[p("input",{type:"color",value:s,onInput:f=>u("secondary",f.target.value),style:Te.colorInput}),p("input",{type:"text",value:s,onInput:f=>u("secondary",f.target.value),style:Te.textInput})]})]}),p("button",{onClick:()=>xn.resetCustomColors(),style:Te.resetBtn,children:"🔄 Сбросить"})]})]})]})})}const Te={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"},modal:{background:"var(--bg-secondary)",borderRadius:"16px",width:"460px",maxWidth:"90vw",maxHeight:"80vh",display:"flex",flexDirection:"column",border:"1px solid var(--border-default)",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 1.25rem",borderBottom:"1px solid var(--border-subtle)"},closeBtn:{background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1.1rem"},tabs:{display:"flex",padding:"0.75rem",gap:"4px"},tab:{flex:1,padding:"0.6rem",border:"none",borderRadius:"8px",cursor:"pointer",color:"var(--text-primary)",fontSize:"0.85rem",fontWeight:500},body:{padding:"1rem",overflowY:"auto",flex:1},presets:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},presetItem:{textAlign:"center",cursor:"pointer",padding:"0.5rem",borderRadius:"10px",transition:"background 0.15s"},presetPreview:{width:"100%",height:"50px",borderRadius:"10px",marginBottom:"6px"},field:{marginBottom:"1rem"},colorRow:{display:"flex",gap:"8px",alignItems:"center"},colorInput:{width:"40px",height:"40px",border:"none",borderRadius:"8px",cursor:"pointer",background:"transparent"},textInput:{flex:1,padding:"0.6rem",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-default)",borderRadius:"8px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none"},resetBtn:{width:"100%",padding:"0.6rem",background:"transparent",border:"1px solid var(--border-default)",borderRadius:"8px",color:"var(--text-secondary)",cursor:"pointer"}};function ch({user:n,activeChat:e,onSelectChat:t}){const[r,i]=F([]),[s,a]=F(!1),[l,u]=F("personal"),[h,f]=F(!1),[_,g]=F(!1),[I,R]=F(""),[k,P]=F([]),[V,O]=F(!1),[z,X]=F(JSON.parse(localStorage.getItem("hiddenChats")||"[]")),W=ln(null);qe(()=>rt.subscribeToChats(n.uid,i),[n.uid]);const J=j=>{if(j.isChannel)return{name:j.name||"Канал"};if(j.type==="group")return{name:j.name||"Группа"};const re=j.participantEmails?.findIndex(Ce=>Ce!==n.email);return{name:j.participantNames?.[re]||j.participantEmails?.[re]?.split("@")[0]||"Чат"}},E=j=>{const re=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let Ce=0;for(let Ie=0;Ie<(j||"").length;Ie++)Ce=j.charCodeAt(Ie)+((Ce<<5)-Ce);return re[Math.abs(Ce)%re.length]},y=j=>{if(!j?.toDate)return"";const re=j.toDate(),Ce=new Date,Ie=re.getHours().toString().padStart(2,"0"),lt=re.getMinutes().toString().padStart(2,"0");return re.toDateString()===Ce.toDateString()?`${Ie}:${lt}`:re.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"})},v=async()=>{await dn.logout()},T=j=>{if(R(j),W.current&&clearTimeout(W.current),j.trim().length<2){P([]),O(!1);return}W.current=setTimeout(async()=>{try{const re=await qn.searchUsers(j);P(re.filter(Ce=>Ce.uid!==n.uid)),O(!0)}catch{P([])}},300)},b=async j=>{try{const re=await rt.createChat(n,j);O(!1),R(""),t?.({id:re})}catch(re){console.error(re)}},A=j=>{X(re=>{const Ce=re.includes(j)?re.filter(Ie=>Ie!==j):[...re,j];return localStorage.setItem("hiddenChats",JSON.stringify(Ce)),Ce})},w=r.filter(j=>!z.includes(j.id));return p("div",{style:ve.container,children:[p("div",{style:ve.header,children:[p(bE,{user:n,onLogout:v,onProfile:()=>f(!0),onTheme:()=>g(!0)}),p("h2",{style:ve.logo,children:"🌪️ Vortex"}),p("div",{style:{width:40}})]}),p("div",{style:ve.searchContainer,children:[p("div",{style:ve.searchWrapper,children:[p("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",style:ve.searchIcon,children:[p("circle",{cx:"11",cy:"11",r:"8"}),p("path",{d:"m21 21-4.35-4.35"})]}),p("input",{value:I,onInput:j=>T(j.target.value),placeholder:"Поиск...",style:ve.searchInput})]}),V&&k.length>0&&p("div",{style:ve.results,children:[p("div",{style:ve.resultTitle,children:"Пользователи"}),k.map(j=>p("div",{onClick:()=>b(j),style:ve.resultItem,children:[p("div",{style:{...ve.resultAvatar,background:E(j.displayName||j.email)},children:(j.displayName||j.email).charAt(0).toUpperCase()}),p("div",{children:[p("div",{style:ve.resultName,children:j.displayName||"Без имени"}),p("div",{style:ve.resultEmail,children:["@",j.username||j.email.split("@")[0]]})]})]},j.uid))]})]}),p("div",{style:ve.chatList,children:w.length===0?p("div",{style:ve.empty,children:[p("div",{style:{fontSize:"3rem"},children:"💬"}),p("p",{children:"Нет чатов"}),p("p",{style:{fontSize:"0.75rem"},children:"+ создать чат"})]}):w.map(j=>{const{name:re}=J(j),Ce=E(re),Ie=e?.id===j.id;return p("div",{onClick:()=>t(j),onContextMenu:lt=>{lt.preventDefault(),A(j.id)},style:{...ve.chatItem,background:Ie?"var(--bg-active)":"transparent",border:Ie?"1px solid rgba(124,58,237,0.2)":"1px solid transparent"},children:[p("div",{style:{...ve.chatAvatar,background:Ce},children:re.charAt(0).toUpperCase()}),p("div",{style:ve.chatInfo,children:[p("div",{style:ve.chatName,children:[j.isChannel?"📢 ":j.type==="group"?"👥 ":"",re]}),p("div",{style:ve.chatLast,children:j.lastMessage||"Нет сообщений"})]}),p("div",{style:ve.chatTime,children:y(j.lastMessageTime)})]},j.id)})}),p(AE,{onPersonalChat:()=>{u("personal"),a(!0)},onGroupChat:()=>{u("group"),a(!0)},onChannel:()=>{u("channel"),a(!0)}}),s&&p(kE,{user:n,onClose:()=>a(!1),onChatCreated:j=>{a(!1),t?.({id:j})},mode:l}),h&&p(xE,{onClose:()=>f(!1)}),_&&p(up,{onClose:()=>g(!1)})]})}const ve={container:{width:"100%",height:"100%",background:"var(--bg-secondary)",borderRight:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",position:"relative"},header:{padding:"0.75rem 1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},logo:{background:"var(--gradient-brand)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"1.1rem",fontWeight:700,margin:0},searchContainer:{padding:"0.25rem 0.75rem",position:"relative"},searchWrapper:{position:"relative"},searchIcon:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",color:"var(--text-tertiary)"},searchInput:{width:"100%",padding:"0.5rem 0.75rem 0.5rem 2rem",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",borderRadius:"10px",color:"var(--text-primary)",fontSize:"0.85rem",outline:"none"},results:{background:"var(--bg-tertiary)",border:"1px solid var(--border-default)",borderRadius:"10px",marginTop:"4px",maxHeight:"260px",overflowY:"auto",position:"absolute",left:"0.75rem",right:"0.75rem",zIndex:50},resultTitle:{padding:"0.4rem 0.75rem",fontSize:"0.65rem",fontWeight:600,color:"var(--text-tertiary)",textTransform:"uppercase"},resultItem:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 0.75rem",cursor:"pointer",borderBottom:"1px solid var(--border-subtle)"},resultAvatar:{width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:"0.85rem",flexShrink:0},resultName:{fontWeight:600,fontSize:"0.85rem"},resultEmail:{fontSize:"0.75rem",color:"var(--text-secondary)"},chatList:{flex:1,overflowY:"auto",padding:"0.25rem 0.5rem"},chatItem:{display:"flex",alignItems:"center",padding:"0.55rem 0.6rem",borderRadius:"10px",cursor:"pointer",marginBottom:"1px"},chatAvatar:{width:"44px",height:"44px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:"1rem",marginRight:"0.6rem",flexShrink:0},chatInfo:{flex:1,minWidth:0},chatName:{fontWeight:600,fontSize:"0.85rem",marginBottom:"1px"},chatLast:{fontSize:"0.75rem",color:"var(--text-secondary)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},chatTime:{fontSize:"0.7rem",color:"var(--text-tertiary)",marginLeft:"0.5rem",flexShrink:0},empty:{textAlign:"center",padding:"2rem",color:"var(--text-tertiary)"}};class NE{startTracking(){const e=window._vortexUser;if(!e)return;const t=ne(K,"users",e);Ze(t,{isOnline:!0,lastSeen:Ge()},{merge:!0}),setInterval(()=>{Ze(t,{isOnline:!0,lastSeen:Ge()},{merge:!0})},3e4),window.addEventListener("beforeunload",()=>{Ze(t,{isOnline:!1,lastSeen:Ge()},{merge:!0})})}watchUser(e,t){const r=ne(K,"users",e);return ji(r,i=>{const s=i.data();t({isOnline:s?.isOnline||!1,lastSeen:s?.lastSeen?.toDate?.()||null})})}}const hp=new NE;class VE{constructor(){this.mediaRecorder=null,this.audioChunks=[],this.isRecording=!1,this.stream=null}async startRecording(){try{if(!navigator.mediaDevices?.getUserMedia)return{error:"unsupported",message:"Микрофон не поддерживается в этом браузере"};this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0}});let e="audio/webm";return MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?e="audio/webm;codecs=opus":MediaRecorder.isTypeSupported("audio/mp4")&&(e="audio/mp4"),this.mediaRecorder=new MediaRecorder(this.stream,{mimeType:e}),this.audioChunks=[],this.mediaRecorder.ondataavailable=t=>{t.data.size>0&&this.audioChunks.push(t.data)},this.mediaRecorder.onerror=()=>{this.isRecording=!1},this.mediaRecorder.start(100),this.isRecording=!0,!0}catch(e){return e.name==="NotAllowedError"||e.name==="PermissionDeniedError"?{error:"denied",message:"Доступ к микрофону запрещён. Разрешите в настройках браузера и попробуйте снова."}:e.name==="NotFoundError"?{error:"notfound",message:"Микрофон не найден. Подключите микрофон."}:{error:"unknown",message:"Ошибка доступа к микрофону: "+e.message}}}stopRecording(){return new Promise((e,t)=>{if(!this.mediaRecorder){t(new Error("Нет активной записи"));return}if(this.mediaRecorder.state==="inactive"){t(new Error("Запись уже остановлена"));return}this.mediaRecorder.onstop=()=>{const r=new Blob(this.audioChunks,{type:this.mediaRecorder.mimeType||"audio/webm"});this.stream&&(this.stream.getTracks().forEach(s=>s.stop()),this.stream=null);const i=new FileReader;i.onloadend=()=>e(i.result),i.onerror=t,i.readAsDataURL(r)},this.mediaRecorder.stop(),this.isRecording=!1})}cancelRecording(){this.mediaRecorder&&this.isRecording&&(this.mediaRecorder.stop(),this.isRecording=!1,this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null))}}const ga=new VE;class OE{constructor(){this.serverUrl=localStorage.getItem("vortex-ai-server")||"http://localhost:3001"}setServerUrl(e){this.serverUrl=e,localStorage.setItem("vortex-ai-server",e)}async call(e,t){const r=await fetch(`${this.serverUrl}${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw new Error(`AI сервер: ${r.status}`);return r.json()}async getSmartReplies(e){return(await this.call("/api/ai/smart-reply",{messages:e})).replies||[]}async translate(e,t="ru"){return(await this.call("/api/ai/translate",{text:e,targetLang:t})).translation}async summarize(e){return(await this.call("/api/ai/summarize",{messages:e})).summary}async moderateMessage(e){return(await this.call("/api/ai/moderate",{text:e})).isSpam}async getAutoReply(e,t){return(await this.call("/api/ai/auto-reply",{messages:e,userName:t})).reply}async searchInMessages(e,t){return(await this.call("/api/ai/search",{messages:e,query:t})).results}hasAnyKey(){return!!this.serverUrl}async getStatus(){return(await fetch(`${this.serverUrl}/api/ai/status`)).json()}}const _a=new OE;class ME{constructor(){this.activeTypings={},this.userId=null}setUser(e){this.userId=e}async startTyping(e,t){this.userId=t;const r=`${e}_${t}`;this.activeTypings[r]&&clearTimeout(this.activeTypings[r]);const i=ne(K,"chats",e,"typing",t);await Ze(i,{userId:t,timestamp:Ge()}),this.activeTypings[r]=setTimeout(async()=>{await pi(i).catch(()=>{}),delete this.activeTypings[r]},4e3)}async stopTyping(e,t){const r=`${e}_${t}`;this.activeTypings[r]&&(clearTimeout(this.activeTypings[r]),delete this.activeTypings[r]),await pi(ne(K,"chats",e,"typing",t)).catch(()=>{})}stopAllTypingSync(e){if(!e)return;const t=ap(K);Object.keys(this.activeTypings).forEach(r=>{if(r.endsWith(`_${e}`)){clearTimeout(this.activeTypings[r]);const i=r.split("_")[0];t.delete(ne(K,"chats",i,"typing",e)),delete this.activeTypings[r]}}),t.commit().catch(()=>{})}async stopAllTyping(e){if(!e)return;const t=Object.keys(this.activeTypings).filter(r=>r.endsWith(`_${e}`));for(const r of t){clearTimeout(this.activeTypings[r]);const i=r.split("_")[0];await pi(ne(K,"chats",i,"typing",e)).catch(()=>{}),delete this.activeTypings[r]}}watchTyping(e,t,r){const i=ne(K,"chats",e,"typing",t);return ji(i,s=>r(s.exists()))}}const mi=new ME;class LE{async toggleReaction(e,t,r,i){const s=ne(K,"chats",e,"messages",t);await at(s,{[`reactions.${i}`]:Si(r)})}async removeReaction(e,t,r,i){const s=ne(K,"chats",e,"messages",t);await at(s,{[`reactions.${i}`]:eo(r)})}}const uh=new LE;class UE{constructor(){this.enabled=localStorage.getItem("vortex-sound")!=="off",this.currentSound=localStorage.getItem("vortex-sound-type")||"default",this.volume=parseFloat(localStorage.getItem("vortex-sound-volume")||"0.5")}async playMessageSound(){if(this.enabled)try{const e=new(window.AudioContext||window.webkitAudioContext);switch(this.currentSound){case"default":this.playBeep(e,800,.1);break;case"chime":this.playBeep(e,1200,.08),setTimeout(()=>this.playBeep(e,1600,.06),100);break;case"pop":this.playBeep(e,600,.05);break;case"silent":break}}catch{}}playBeep(e,t,r){const i=e.createOscillator(),s=e.createGain();i.connect(s),s.connect(e.destination),i.frequency.value=t,s.gain.value=this.volume*.3,i.start(),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+r),i.stop(e.currentTime+r)}setSound(e){this.currentSound=e,localStorage.setItem("vortex-sound-type",e)}setVolume(e){this.volume=e,localStorage.setItem("vortex-sound-volume",e)}toggle(){return this.enabled=!this.enabled,localStorage.setItem("vortex-sound",this.enabled?"on":"off"),this.enabled}getSounds(){return[{id:"default",name:"Стандартный"},{id:"chime",name:"Мелодичный"},{id:"pop",name:"Короткий"},{id:"silent",name:"Без звука"}]}}const FE=new UE;class BE{constructor(){this.isOnline=navigator.onLine,this.queue=JSON.parse(localStorage.getItem("offlineQueue")||"[]"),this.listeners=[]}init(){window.addEventListener("online",()=>this.goOnline()),window.addEventListener("offline",()=>this.goOffline())}goOnline(){this.isOnline=!0,this.listeners.forEach(e=>e(!0)),this.processQueue()}goOffline(){this.isOnline=!1,this.listeners.forEach(e=>e(!1))}async addToQueue(e){this.queue.push({...e,timestamp:Date.now()}),localStorage.setItem("offlineQueue",JSON.stringify(this.queue))}async processQueue(){if(!this.isOnline||this.queue.length===0)return;const e=[...this.queue];this.queue=[],localStorage.setItem("offlineQueue","[]");for(const t of e)try{await this.executeAction(t)}catch{this.queue.push(t)}this.queue.length>0&&localStorage.setItem("offlineQueue",JSON.stringify(this.queue))}async executeAction(e){switch(e.type){case"sendMessage":const{chatService:t}=await _r(async()=>{const{chatService:r}=await Promise.resolve().then(()=>IE);return{chatService:r}},void 0);await t.sendMessage(e.chatId,e.text,e.user);break}}onChange(e){return this.listeners.push(e),()=>this.listeners=this.listeners.filter(t=>t!==e)}}const hh=new BE;class jE{constructor(){this.swRegistration=null}async init(){return!("serviceWorker"in navigator)||!("PushManager"in window)?!1:(this.swRegistration=await navigator.serviceWorker.ready,!0)}async subscribe(e){if(!this.swRegistration||await Notification.requestPermission()!=="granted")return null;const r=await this.swRegistration.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:this.urlBase64ToUint8Array("BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U")});return localStorage.setItem(`push_sub_${e}`,JSON.stringify(r)),r}async unsubscribe(e){const t=localStorage.getItem(`push_sub_${e}`);if(!t)return;await JSON.parse(t).unsubscribe(),localStorage.removeItem(`push_sub_${e}`)}async sendNotification(e,t,r,i){Notification.permission==="granted"&&document.hidden&&new Notification(t,{body:r,icon:"/icons/icon-192.png",vibrate:[200,100,200],data:{chatId:i}})}urlBase64ToUint8Array(e){const t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/-/g,"+").replace(/_/g,"/"),i=atob(r);return new Uint8Array([...i].map(s=>s.charCodeAt(0)))}}const dh=new jE;class zE{constructor(){this.timers={}}async setTimer(e,t,r){const i=ne(K,"chats",e,"messages",t);await at(i,{selfDestruct:r,destructAt:new Date(Date.now()+r*1e3)}),this.startTimer(e,t,r)}startTimer(e,t,r){const i=`${e}_${t}`;clearTimeout(this.timers[i]),this.timers[i]=setTimeout(async()=>{const{deleteDoc:s}=await _r(async()=>{const{deleteDoc:a}=await Promise.resolve().then(()=>lp);return{deleteDoc:a}},void 0);await s(ne(K,"chats",e,"messages",t)).catch(()=>{}),delete this.timers[i]},r*1e3)}cancelTimer(e,t){const r=`${e}_${t}`;clearTimeout(this.timers[r]),delete this.timers[r]}}const $E=new zE;class qE{async exportChat(e,t){let r="";r+=`💬 Чат: ${t}
`,r+=`📅 Экспортирован: ${new Date().toLocaleString()}
`,r+="=".repeat(40)+`

`,e.forEach(l=>{const u=l.createdAt?.toDate?.()?.toLocaleString()||"",h=l.senderName||"Пользователь",f=l.text||(l.type==="image"?"[Фото]":l.type==="voice"?"[Голосовое]":"[Файл]");r+=`[${u}] ${h}: ${f}
`});const i=new Blob([r],{type:"text/plain;charset=utf-8"}),s=URL.createObjectURL(i),a=document.createElement("a");a.href=s,a.download=`vortex-export-${t}-${Date.now()}.txt`,a.click(),URL.revokeObjectURL(s)}async exportAllChats(e,t){let r=`🌪️ VORTEX — ПОЛНЫЙ ЭКСПОРТ

`;for(const l of e){const u=t[l.id]||[];r+=`
${"=".repeat(50)}
`,r+=`💬 ${l.name||"Чат"}
`,r+=`${"=".repeat(50)}

`,u.forEach(h=>{const f=h.createdAt?.toDate?.()?.toLocaleString()||"";r+=`[${f}] ${h.senderName}: ${h.text||"[Медиа]"}
`})}const i=new Blob([r],{type:"application/json"}),s=URL.createObjectURL(i),a=document.createElement("a");a.href=s,a.download=`vortex-full-export-${Date.now()}.txt`,a.click(),URL.revokeObjectURL(s)}}const WE=new qE;class KE{setWallpaper(e,t){const r=JSON.parse(localStorage.getItem("vortex-wallpapers")||"{}");t?r[e]=t:delete r[e],localStorage.setItem("vortex-wallpapers",JSON.stringify(r))}getWallpaper(e){const t=JSON.parse(localStorage.getItem("vortex-wallpapers")||"{}");return t[e]||t.global||null}setGlobalWallpaper(e){this.setWallpaper("global",e)}getPresetWallpapers(){return[{id:"none",name:"Без обоев",preview:"transparent"},{id:"gradient1",name:"Фиолетовый",preview:"linear-gradient(135deg, #7C3AED, #6366F1)"},{id:"gradient2",name:"Океан",preview:"linear-gradient(135deg, #0EA5E9, #06B6D4)"},{id:"gradient3",name:"Закат",preview:"linear-gradient(135deg, #F59E0B, #EF4444)"},{id:"gradient4",name:"Ночь",preview:"linear-gradient(135deg, #1E1B4B, #312E81)"},{id:"pattern1",name:"Точки",preview:"radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)"},{id:"pattern2",name:"Сетка",preview:"linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"}]}}const HE=new KE;function GE({chat:n,user:e,other:t,avatarColor:r,otherStatus:i,isTyping:s,isMobile:a,onBack:l,onShowGallery:u,onShowTheme:h,onShowStatus:f,onExport:_}){const g=I=>{if(!I)return"";const R=Math.floor((new Date-I)/1e3);return R<60?"только что":R<3600?`${Math.floor(R/60)} мин`:R<86400?`${Math.floor(R/3600)} ч`:I.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"})};return p("div",{style:tt.header,children:[p("div",{style:tt.left,children:[a&&p("button",{onClick:l,style:tt.backBtn,children:p("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",children:p("polyline",{points:"15 18 9 12 15 6"})})}),p("div",{style:{...tt.avatar,background:r},children:t.name.charAt(0).toUpperCase()}),p("div",{style:tt.info,children:[p("div",{style:tt.name,children:t.name}),p("div",{style:tt.status,children:s?p("span",{style:{color:"var(--vortex-secondary)",fontStyle:"italic"},children:"печатает..."}):p(it,{children:[p("span",{style:{...tt.dot,background:i.isOnline?"var(--vortex-secondary)":"var(--text-tertiary)"}}),i.isOnline?"В сети":i.lastSeen?`Был(а) ${g(i.lastSeen)}`:"Не в сети"]})})]})]}),p("div",{style:tt.actions,children:[p("button",{style:tt.btn,onClick:h,title:"Тема",children:"🎨"}),p("button",{style:tt.btn,onClick:f,title:"Статус",children:"😊"}),p("button",{style:tt.btn,onClick:u,title:"Галерея",children:"🖼️"}),p("button",{style:tt.btn,onClick:_,title:"Экспорт",children:"📤"})]})]})}const tt={header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.6rem 1rem",borderBottom:"1px solid var(--border-subtle)",background:"rgba(10,10,20,0.9)",backdropFilter:"blur(20px)",zIndex:10},left:{display:"flex",alignItems:"center",gap:"0.6rem"},avatar:{width:"38px",height:"38px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:"1rem",flexShrink:0},info:{display:"flex",flexDirection:"column"},name:{fontWeight:600,fontSize:"0.95rem"},status:{fontSize:"0.75rem",color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:"5px"},dot:{width:"7px",height:"7px",borderRadius:"50%",display:"inline-block"},backBtn:{background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer",padding:"2px"},actions:{display:"flex",gap:"4px"},btn:{width:"36px",height:"36px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem"}};function QE(n,e,t,r=80){let i=0,s=0;const a=f=>{i=f.touches[0].clientX,s=f.touches[0].clientY},l=f=>{const _=f.changedTouches[0].clientX,g=f.changedTouches[0].clientY,I=_-i,R=g-s;Math.abs(I)<Math.abs(R)||Math.abs(I)<r||I>0||e?.()};return{attach:()=>{const f=n.current;f&&(f.addEventListener("touchstart",a),f.addEventListener("touchend",l))},detach:()=>{const f=n.current;f&&(f.removeEventListener("touchstart",a),f.removeEventListener("touchend",l))}}}function YE({msg:n,own:e,other:t,avatarColor:r,isMobile:i,isPinned:s,onContextMenu:a,onDoubleClick:l,onImageClick:u,onReactionClick:h,onPlayAudio:f,onReply:_}){const g=ln(null),{attach:I,detach:R}=QE(g,()=>_?.(n.id));qe(()=>(I(),R),[]);const k=V=>V?V<1024?V+" B":V<1024*1024?(V/1024).toFixed(1)+" KB":(V/(1024*1024)).toFixed(1)+" MB":"",P=V=>{if(!V?.toDate)return"";const O=V.toDate();return`${O.getHours().toString().padStart(2,"0")}:${O.getMinutes().toString().padStart(2,"0")}`};return p("div",{ref:g,style:{...Ye.wrapper,justifyContent:e?"flex-end":"flex-start"},children:[!e&&p("div",{style:{...Ye.avatar,background:r,marginRight:6},children:t.name.charAt(0).toUpperCase()}),p("div",{style:{display:"flex",flexDirection:"column",alignItems:e?"flex-end":"flex-start",maxWidth:i?"82%":"65%"},children:[p("div",{style:{...Ye.bubble,background:e?"var(--gradient-brand)":"var(--bg-tertiary)",borderBottomRightRadius:e?"4px":"16px",borderBottomLeftRadius:e?"16px":"4px",color:e?"#fff":"var(--text-primary)",position:"relative"},onContextMenu:V=>a?.(V,n.id,e,n.text),onDblClick:V=>{V.preventDefault();const O=V.currentTarget.getBoundingClientRect();l?.({messageId:n.id,x:O.left+O.width/2,y:O.top-50})},children:[s&&p("div",{style:Ye.pinnedBadge,title:"Закреплено",children:"📌"}),n.type==="image"&&p("img",{src:n.fileData,alt:n.fileName,style:Ye.image,onClick:()=>u?.(n.fileData)}),n.type==="video"&&p("video",{controls:!0,src:n.fileData,style:{...Ye.image,maxWidth:"280px",borderRadius:"10px"},preload:"metadata"}),n.type==="voice"&&p("audio",{controls:!0,src:n.fileData,style:Ye.audio}),n.type==="audio"&&p("div",{children:[p("div",{style:{marginBottom:"4px",fontSize:"0.8rem"},children:["🎵 ",n.fileName||"Аудио"]}),p("audio",{controls:!0,src:n.fileData,style:Ye.audio,onClick:()=>f?.({src:n.fileData,name:n.fileName})})]}),n.type==="file"&&p("a",{href:n.fileData,download:n.fileName,style:Ye.fileLink,children:[p("span",{style:{fontSize:"1.5rem"},children:"📄"}),p("div",{children:[p("div",{style:{fontWeight:600,fontSize:"0.85rem"},children:n.fileName||"Файл"}),p("div",{style:{fontSize:"0.7rem",opacity:.7},children:k(n.fileSize)})]})]}),n.isPoll&&p("div",{children:["📊 Опрос: ",n.question]}),(!n.type||n.type==="text")&&p("div",{style:Ye.text,children:[n.isEdited&&p("span",{style:Ye.edited,children:"(изм.) "}),n.selfDestruct&&p("span",{style:Ye.destruct,children:["⏱️ ",n.selfDestruct]}),n.text]}),p("div",{style:Ye.meta,children:[n.isEdited&&p("span",{style:Ye.editedSmall,children:"изм."}),p("span",{children:P(n.createdAt)}),e&&p("span",{style:{color:n.readBy?.length>0?"var(--vortex-secondary)":"inherit",marginLeft:"2px"},children:n.readBy?.length>0?"✓✓":"✓"})]})]}),n.reactions&&Object.keys(n.reactions).length>0&&p("div",{style:{display:"flex",gap:"3px",marginTop:"3px",flexWrap:"wrap",justifyContent:e?"flex-end":"flex-start"},children:Object.entries(n.reactions).map(([V,O])=>p("span",{onClick:()=>h?.(n.id,V),style:{background:"rgba(124, 58, 237, 0.12)",border:"1px solid rgba(124, 58, 237, 0.2)",padding:"2px 8px",borderRadius:"12px",fontSize:"0.8rem",cursor:"pointer",transition:"all 0.15s",display:"inline-flex",alignItems:"center",gap:"3px",backdropFilter:"blur(4px)"},children:[V,p("span",{style:{fontSize:"0.7rem",fontWeight:600,color:"var(--text-secondary)"},children:O?.length||0})]},V))})]}),e&&p("div",{style:{width:28,marginLeft:6}})]})}const Ye={wrapper:{display:"flex",alignItems:"flex-end",marginBottom:"2px"},avatar:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:600,fontSize:"0.7rem",flexShrink:0},bubble:{padding:"0.5rem 0.75rem",borderRadius:"14px",animation:"messageIn 0.2s ease",boxShadow:"0 1px 2px rgba(0,0,0,0.1)"},pinnedBadge:{position:"absolute",top:"-8px",right:"-4px",fontSize:"0.9rem",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))",zIndex:1},text:{fontSize:"0.9rem",lineHeight:1.45,wordBreak:"break-word"},image:{maxWidth:"260px",borderRadius:"10px",cursor:"pointer"},audio:{maxWidth:"240px",height:"30px"},fileLink:{color:"inherit",textDecoration:"none",display:"flex",alignItems:"center",gap:"8px"},edited:{fontSize:"0.7rem",opacity:.7,fontStyle:"italic"},editedSmall:{fontSize:"0.6rem",opacity:.5,fontStyle:"italic",marginRight:"4px"},destruct:{fontSize:"0.7rem",opacity:.7,marginRight:"4px"},meta:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"2px",marginTop:"3px",fontSize:"0.65rem",opacity:.7}};function JE({text:n,onTextChange:e,onSend:t,onTyping:r,isRecording:i,onStartVoice:s,onStopVoice:a,onShowAI:l,onFileSend:u,editingMessage:h,onCancelEdit:f}){const _=ln(null),g=I=>{e(I),r?.()};return p("div",{style:Rt.container,children:[h&&p("div",{style:Rt.editBar,children:[p("span",{children:"✏️ Редактирование"}),p("button",{onClick:f,style:Rt.cancelBtn,children:"✕"})]}),p("div",{style:Rt.wrapper,children:[p("button",{style:Rt.btn,onClick:()=>_.current?.click(),children:"📎"}),p("input",{type:"file",ref:_,onChange:u,accept:"*/*",style:{display:"none"}}),p("button",{style:{...Rt.btn,background:i?"var(--vortex-danger)":"transparent",color:i?"#fff":"var(--text-secondary)"},onMouseDown:s,onMouseUp:a,onMouseLeave:a,onTouchStart:s,onTouchEnd:a,children:"🎙️"}),p("input",{type:"text",value:n,onInput:I=>g(I.target.value),onKeyDown:I=>I.key==="Enter"&&t(),placeholder:"Сообщение",style:Rt.input}),p("button",{style:Rt.btn,onClick:l,children:"🤖"}),p("button",{onClick:t,disabled:!n.trim(),style:{...Rt.sendBtn,opacity:n.trim()?1:.4},children:"➤"})]})]})}const Rt={container:{padding:"0.5rem 0.6rem",borderTop:"1px solid var(--border-subtle)",background:"rgba(10,10,20,0.9)",backdropFilter:"blur(20px)"},wrapper:{display:"flex",alignItems:"center",gap:"4px"},btn:{width:"34px",height:"34px",borderRadius:"50%",background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",flexShrink:0},input:{flex:1,padding:"0.55rem 0.8rem",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-default)",borderRadius:"20px",color:"var(--text-primary)",fontSize:"16px",outline:"none",fontFamily:"inherit",minWidth:0},sendBtn:{width:"36px",height:"36px",borderRadius:"50%",background:"var(--gradient-brand)",border:"none",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",transition:"all 0.2s",flexShrink:0},editBar:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.4rem 0.8rem",background:"rgba(124,58,237,0.1)",borderBottom:"1px solid var(--border-subtle)",fontSize:"0.75rem",color:"var(--vortex-primary-light)"},cancelBtn:{background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer"}};function XE({x:n,y:e,messageId:t,text:r,isOwn:i,isPinned:s,onCopy:a,onEdit:l,onPin:u,onDelete:h,onReply:f}){const _=Math.min(n,window.innerWidth-190),g=Math.min(e,window.innerHeight-260);return p("div",{style:{...or.menu,top:g,left:_},children:[p("button",{style:or.item,onClick:()=>a(r),children:"📋 Копировать"}),f&&p("button",{style:or.item,onClick:()=>f(t),children:"💬 Ответить"}),i&&l&&p("button",{style:or.item,onClick:()=>l(t,r),children:"✏️ Редактировать"}),p("button",{style:or.item,onClick:()=>u(t,r),children:s?"📌 Открепить":"📌 Закрепить"}),i&&h&&p("button",{style:{...or.item,color:"var(--vortex-danger)"},onClick:()=>h(t),children:"🗑️ Удалить"})]})}const or={menu:{position:"fixed",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"12px",boxShadow:"0 8px 24px rgba(0,0,0,0.4)",zIndex:9999,minWidth:"170px",maxWidth:"200px",padding:"4px",animation:"menuPopup 0.15s ease"},item:{display:"block",width:"100%",padding:"10px 14px",background:"transparent",border:"none",borderRadius:"8px",color:"var(--text-primary)",cursor:"pointer",textAlign:"left",fontSize:"0.85rem",fontFamily:"inherit",transition:"background 0.1s"}},ZE=["👍","❤️","😂","😮","😢","😡"];function e0({x:n,y:e,onReaction:t}){return p("div",{style:{position:"fixed",top:e,left:n,transform:"translateX(-50%)",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"20px",padding:"6px 12px",display:"flex",gap:"6px",zIndex:9999,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},children:ZE.map(r=>p("button",{onClick:()=>t(r),style:{background:"none",border:"none",fontSize:"1.4rem",cursor:"pointer",padding:"4px",borderRadius:"50%",transition:"transform 0.15s"},onMouseEnter:i=>i.target.style.transform="scale(1.3)",onMouseLeave:i=>i.target.style.transform="scale(1)",children:r},r))})}function t0({messages:n,onUnpin:e,onScrollTo:t,currentUserId:r}){const[i,s]=F(0);if(qe(()=>{i>=(n?.length||0)&&s(0)},[n?.length]),!n||n.length===0)return null;const a=n[i];if(!a)return null;const l=()=>{n.length>1&&s(u=>u<n.length-1?u+1:0),t(a.id)};return p("div",{style:nt.container,onClick:l,children:[p("div",{style:nt.content,children:[p("div",{style:nt.info,children:[p("div",{style:nt.topRow,children:[p("span",{style:nt.icon,children:"📌"}),p("span",{style:nt.counter,children:[i+1,"/",n.length]})]}),p("div",{style:nt.messageText,children:[a.senderName&&p("span",{style:nt.sender,children:[a.senderName,": "]}),p("span",{style:nt.text,children:a.text})]})]}),n.length>1&&p("button",{onClick:u=>{u.stopPropagation(),e(null)},style:nt.showAll,title:"Показать все закреплённые",children:"Все"}),p("button",{onClick:u=>{u.stopPropagation(),e(a.id)},style:nt.close,title:"Открепить",children:"✕"})]}),n.length>1&&p("div",{style:nt.dots,children:n.map((u,h)=>p("div",{style:{...nt.dot,background:h===i?"var(--vortex-primary)":"rgba(255,255,255,0.2)"}},h))})]})}const nt={container:{background:"rgba(124, 58, 237, 0.08)",borderBottom:"1px solid var(--border-subtle)",cursor:"pointer",transition:"background 0.15s",userSelect:"none"},content:{display:"flex",alignItems:"center",gap:"6px",padding:"0.5rem 0.75rem"},info:{flex:1,minWidth:0,overflow:"hidden"},topRow:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"2px"},icon:{fontSize:"0.8rem",flexShrink:0},counter:{fontSize:"0.65rem",color:"var(--text-tertiary)",fontWeight:500,background:"rgba(255,255,255,0.06)",padding:"1px 6px",borderRadius:"8px"},messageText:{fontSize:"0.8rem",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text-secondary)",paddingLeft:"2px"},sender:{fontWeight:600,color:"var(--vortex-primary-light)",fontSize:"0.75rem"},text:{fontSize:"0.8rem"},showAll:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"var(--text-secondary)",cursor:"pointer",padding:"3px 10px",fontSize:"0.7rem",fontWeight:500,flexShrink:0,transition:"all 0.15s",fontFamily:"inherit"},close:{background:"none",border:"none",color:"var(--text-tertiary)",cursor:"pointer",padding:"4px 6px",borderRadius:"6px",fontSize:"0.85rem",flexShrink:0,transition:"color 0.15s"},dots:{display:"flex",justifyContent:"center",gap:"4px",padding:"0 0 6px 0"},dot:{width:"5px",height:"5px",borderRadius:"50%",transition:"background 0.2s"}};function n0({messages:n,onClose:e}){const[t,r]=F([]),[i,s]=F(null);return qe(()=>{const a=n.filter(l=>l.type==="image"||l.type==="video");r(a)},[n]),p("div",{style:ot.overlay,onClick:e,children:p("div",{style:ot.modal,onClick:a=>a.stopPropagation(),children:[p("div",{style:ot.header,children:[p("h3",{children:["🖼️ Галерея (",t.length,")"]}),p("button",{onClick:e,style:ot.closeBtn,children:"✕"})]}),p("div",{style:ot.grid,children:t.length===0?p("p",{style:{color:"var(--text-tertiary)",textAlign:"center",padding:"2rem"},children:"Нет медиа"}):t.map((a,l)=>p("div",{style:ot.item,onClick:()=>s(l),children:a.type==="video"?p("video",{src:a.fileData,style:ot.thumb,preload:"metadata"}):p("img",{src:a.fileData,alt:"",style:ot.thumb,loading:"lazy"})},a.id))}),i!==null&&p("div",{style:ot.preview,onClick:()=>s(null),children:[t[i]?.type==="video"?p("video",{controls:!0,src:t[i].fileData,style:ot.previewMedia,autoPlay:!0}):p("img",{src:t[i]?.fileData,alt:"",style:ot.previewMedia}),p("button",{style:ot.previewClose,children:"✕"})]})]})})}const ot={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.8)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center"},modal:{background:"var(--bg-secondary)",borderRadius:"16px",width:"90vw",maxWidth:"600px",maxHeight:"80vh",display:"flex",flexDirection:"column",overflow:"hidden"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 1.5rem",borderBottom:"1px solid var(--border-subtle)"},closeBtn:{background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1.2rem"},grid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4px",padding:"4px",overflowY:"auto",flex:1},item:{aspectRatio:"1",overflow:"hidden",borderRadius:"8px",cursor:"pointer"},thumb:{width:"100%",height:"100%",objectFit:"cover"},preview:{position:"fixed",inset:0,background:"rgba(0,0,0,0.95)",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center"},previewMedia:{maxWidth:"95vw",maxHeight:"95vh",objectFit:"contain",borderRadius:"8px"},previewClose:{position:"absolute",top:"20px",right:"20px",background:"rgba(255,255,255,0.2)",border:"none",color:"#fff",width:"40px",height:"40px",borderRadius:"50%",cursor:"pointer",fontSize:"1.2rem"}};function r0({onSend:n}){const[e,t]=F(""),[r,i]=F(["",""]),s=()=>i([...r,""]),a=h=>{r.length<=2||i(r.filter((f,_)=>_!==h))},l=(h,f)=>{const _=[...r];_[h]=f,i(_)},u=()=>{const h=r.filter(f=>f.trim());if(!e.trim()||h.length<2){alert("Введите вопрос и минимум 2 варианта");return}n({type:"poll",question:e.trim(),options:h.map(f=>f.trim()),votes:{},totalVotes:0,isPoll:!0}),t(""),i(["",""])};return p("div",{style:rn.container,children:[p("h4",{style:rn.title,children:"📊 Создать опрос"}),p("input",{value:e,onInput:h=>t(h.target.value),placeholder:"Вопрос",style:rn.input}),r.map((h,f)=>p("div",{style:rn.optionRow,children:[p("input",{value:h,onInput:_=>l(f,_.target.value),placeholder:`Вариант ${f+1}`,style:rn.optionInput}),r.length>2&&p("button",{onClick:()=>a(f),style:rn.removeBtn,children:"✕"})]},f)),p("button",{onClick:s,style:rn.addBtn,children:"+ Добавить вариант"}),p("button",{onClick:u,style:rn.sendBtn,children:"📊 Отправить опрос"})]})}const rn={container:{padding:"1rem",background:"var(--bg-secondary)",borderRadius:"12px",border:"1px solid var(--border-default)"},title:{marginBottom:"0.75rem",fontSize:"1rem"},input:{width:"100%",padding:"0.6rem 0.8rem",marginBottom:"0.5rem",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-default)",borderRadius:"8px",color:"var(--text-primary)",fontSize:"0.9rem",outline:"none"},optionRow:{display:"flex",gap:"6px",marginBottom:"6px"},optionInput:{flex:1,padding:"0.5rem 0.8rem",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-default)",borderRadius:"8px",color:"var(--text-primary)",fontSize:"0.85rem",outline:"none"},removeBtn:{background:"none",border:"none",color:"var(--vortex-danger)",cursor:"pointer"},addBtn:{background:"none",border:"none",color:"var(--vortex-primary-light)",cursor:"pointer",fontSize:"0.85rem",padding:"0.3rem 0"},sendBtn:{width:"100%",marginTop:"0.75rem",padding:"0.6rem",background:"var(--gradient-brand)",border:"none",borderRadius:"10px",color:"#fff",fontWeight:600,cursor:"pointer"}};class i0{constructor(){Xo(this,"STATUS_EMOJIS",["😊","😎","🥰","🤔","😴","💼","🏖️","🎮","📚","❤️","🔥","💯"]);Xo(this,"PRESET_STATUSES",[{emoji:"💼",text:"На работе"},{emoji:"🏖️",text:"В отпуске"},{emoji:"😴",text:"Сплю"},{emoji:"🎮",text:"В игре"},{emoji:"📚",text:"Учусь"},{emoji:"🏃",text:"Тренировка"},{emoji:"🍽️",text:"Обедаю"},{emoji:"🎬",text:"Смотрю кино"}])}async setEmojiStatus(e,t){await at(ne(K,"users",e),{emojiStatus:t,statusUpdatedAt:new Date})}async setTextStatus(e,t){await at(ne(K,"users",e),{customStatus:t,statusUpdatedAt:new Date})}async clearStatus(e){await at(ne(K,"users",e),{emojiStatus:null,customStatus:null,statusUpdatedAt:null})}getEmojis(){return this.STATUS_EMOJIS}}const ar=new i0;function s0({userId:n,onClose:e}){const t=ar.getEmojis(),r=ar.PRESET_STATUSES;return p("div",{style:mt.overlay,onClick:e,children:p("div",{style:mt.modal,onClick:i=>i.stopPropagation(),children:[p("div",{style:mt.header,children:[p("h4",{children:"😊 Выбрать статус"}),p("button",{onClick:e,style:mt.closeBtn,children:"✕"})]}),p("div",{style:mt.body,children:[p("div",{style:mt.emojis,children:t.map(i=>p("button",{onClick:()=>{ar.setEmojiStatus(n,i),e()},style:mt.emojiBtn,children:i},i))}),p("div",{style:mt.divider}),p("h5",{children:"Готовые статусы"}),r.map(i=>p("button",{onClick:()=>{ar.setEmojiStatus(n,i.emoji),ar.setTextStatus(n,i.text),e()},style:mt.presetBtn,children:[i.emoji," ",i.text]},i.text)),p("button",{onClick:()=>{ar.clearStatus(n),e()},style:{...mt.presetBtn,color:"var(--vortex-danger)"},children:"✕ Очистить статус"})]})]})})}const mt={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"},modal:{background:"var(--bg-secondary)",borderRadius:"16px",width:"400px",maxWidth:"90vw",border:"1px solid var(--border-default)",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 1.25rem",borderBottom:"1px solid var(--border-subtle)"},closeBtn:{background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1.1rem"},body:{padding:"1rem"},emojis:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"1rem"},emojiBtn:{background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-default)",borderRadius:"12px",fontSize:"1.5rem",padding:"8px",cursor:"pointer",transition:"transform 0.15s"},divider:{height:"1px",background:"var(--border-subtle)",margin:"0.75rem 0"},presetBtn:{display:"block",width:"100%",padding:"0.6rem 1rem",background:"transparent",border:"none",borderRadius:"8px",color:"var(--text-primary)",cursor:"pointer",textAlign:"left",fontSize:"0.9rem",transition:"background 0.15s"}};function fh({chat:n,user:e,onBack:t,isMobile:r}){const[i,s]=F([]),[a,l]=F(!0),[u,h]=F(""),[f,_]=F(null),[g,I]=F({isOnline:!1,lastSeen:null}),[R,k]=F(null),[P,V]=F(!1),[O,z]=F(!1),[X,W]=F(!1),[J,E]=F(!1),[y,v]=F(!1),[T,b]=F(null),[A,w]=F(null),[j,re]=F(!1),[Ce,Ie]=F(!1),[lt,wn]=F(!1),[zi,$i]=F(!1),[pt,Pe]=F(!1),[Lr,Kt]=F(null),[En,Ht]=F([]),[Ur,qi]=F(!1),[Jn,Xn]=F(navigator.onLine),In=ln(null),Zn=ln(!0),Tn=ln(null);qe(()=>hh.onChange(Xn),[]),qe(()=>{dh.init(),dh.subscribe(e.uid)},[]),qe(()=>{if(!n){s([]),l(!1);return}const D=n.id,L=e.uid;s([]),l(!0),h(""),_(null),I({isOnline:!1,lastSeen:null});const G=rt.subscribeToMessages(n.id,pe=>{s(pe),l(!1)});return()=>{G?.(),s([]),mi.stopTyping(D,L)}},[n?.id]);const Fr=()=>{const D=Tn.current;if(!D)return;const L=D.scrollHeight-D.scrollTop-D.clientHeight<60;Zn.current=L};qe(()=>{Zn.current&&In.current&&!a&&In.current.scrollIntoView({behavior:"auto"})},[i,a]),qe(()=>{if(!n)return;const D=n.participants?.find(L=>L!==e.uid);D&&(hp.watchUser(D,I),mi.watchTyping(n.id,D,E))},[n?.id,e.uid]),qe(()=>{i.length>0&&!a&&i[i.length-1].senderId!==e.uid&&FE.playMessageSound(),n&&i.length&&i.filter(L=>L.senderId!==e.uid&&!L.readBy?.includes(e.uid)).forEach(L=>Vn.markAsRead(n.id,e.uid,L.id))},[i.length]),qe(()=>{const D=()=>{k(null),w(null)};return document.addEventListener("click",D),()=>document.removeEventListener("click",D)},[]);const Wi=async D=>{D?.preventDefault();const L=f?f.text:u;if(!(!L.trim()||!n)){if(!navigator.onLine){await hh.addToQueue({type:"sendMessage",chatId:n.id,text:L,user:e}),h(""),alert("📴 Сообщение отправится при подключении к интернету");return}f?(await Vn.editMessage(n.id,f.id,L),_(null)):await rt.sendMessage(n.id,L,e),h("")}},Vo=()=>{n&&e&&mi.startTyping(n.id,e.uid)},Oo=async D=>{const L=D.target.files?.[0];if(!L||!n)return;let G="file";L.type.startsWith("image/")?G="image":L.type.startsWith("video/")?G="video":L.type.startsWith("audio/")&&(G="audio");const pe=new FileReader;pe.onload=async Jt=>{await rt.sendMessage(n.id,"",e,{type:G,fileData:Jt.target.result,fileName:L.name,fileSize:L.size})},pe.readAsDataURL(L),D.target.value=""},Ki=D=>{D.preventDefault(),v(!0)},Br=D=>{D.preventDefault(),v(!1)},Hi=async D=>{D.preventDefault(),v(!1);for(const L of D.dataTransfer.files){let G="file";L.type.startsWith("image/")?G="image":L.type.startsWith("video/")?G="video":L.type.startsWith("audio/")&&(G="audio");const pe=new FileReader;pe.onload=async Jt=>{await rt.sendMessage(n.id,"",e,{type:G,fileData:Jt.target.result,fileName:L.name,fileSize:L.size})},pe.readAsDataURL(L)}},Mo=(D,L,G,pe)=>{D.preventDefault(),k({x:Math.min(D.clientX,window.innerWidth-190),y:Math.min(D.clientY,window.innerHeight-260),messageId:L,text:pe,isOwn:G})},jr=D=>{navigator.clipboard.writeText(D),k(null)},zr=(D,L)=>{_({id:D,text:L}),h(L),k(null)},Gi=async D=>{confirm("Удалить сообщение?")&&(await Vn.deleteMessage(n.id,D),k(null))},ke=async(D,L)=>{const G=i.find(pe=>pe.id===D);G&&(await rt.pinMessage(n.id,D,L,G.senderName||""),k(null))},xe=D=>{const L=i.find(G=>G.id===D);L&&h(`@${L.senderName||"пользователь"} `),k(null)},er=D=>{const L=prompt("Через сколько секунд удалить? (5, 30, 60, 3600)");L&&$E.setTimer(n.id,D,parseInt(L)),k(null)},Qi=()=>{_(null),h("")},Yi=D=>w(D),Lo=async(D,L)=>{await uh.toggleReaction(n.id,D,e.uid,L),w(null)},bn=async(D,L)=>{await uh.toggleReaction(n.id,D,e.uid,L)},Ji=async()=>{const D=await ga.startRecording();D===!0?(V(!0),W(!1)):D?.error==="denied"?W(!0):D?.error&&alert(D.message)},Xi=async()=>{W(!1);const D=await ga.startRecording();D===!0?V(!0):D?.error==="denied"&&W(!0)},$r=async()=>{if(P){V(!1);try{const D=await ga.stopRecording();D&&n&&await rt.sendMessage(n.id,"",e,{type:"voice",fileData:D,fileName:"voice.webm"})}catch(D){console.error(D)}}},Uo=async()=>{try{const D=await _a.getSmartReplies(i);D.length&&h(D[0])}catch{}z(!1)},Fo=async()=>{const D=i[i.length-1];if(D)try{alert(await _a.translate(D.text))}catch{}z(!1)},qr=async()=>{try{alert(await _a.summarize(i))}catch{}z(!1)},Zi=async D=>{await rt.sendMessage(n.id,"",e,{type:"poll",...D}),wn(!1)},es=D=>{Ur&&Ht(L=>L.includes(D)?L.filter(G=>G!==D):[...L,D])},An=D=>{qi(!0),Ht([D])},tr=()=>{qi(!1),Ht([])},Wr=async()=>{if(confirm(`Удалить ${En.length} сообщений?`)){for(const D of En)await Vn.deleteMessage(n.id,D);tr()}},bt=()=>WE.exportChat(i,Kr().name),Gt=n?.pinnedMessages||[],Sn=D=>{const L=Tn.current?.querySelector(`[data-msg-id="${D}"]`);L&&(L.scrollIntoView({behavior:"smooth",block:"center"}),L.style.background="rgba(124, 58, 237, 0.2)",setTimeout(()=>L.style.background="",2e3))},Kr=()=>{if(!n)return{name:"Чат"};if(n.type==="group")return{name:n.name||"Группа"};const D=n.participantEmails?.findIndex(L=>L!==e.email);return{name:n.participantNames?.[D]||n.participantEmails?.[D]?.split("@")[0]||"Чат"}},Rn=D=>{const L=["linear-gradient(135deg, #7C3AED, #6366F1)","linear-gradient(135deg, #06D6A0, #10B981)","linear-gradient(135deg, #F59E0B, #EF4444)","linear-gradient(135deg, #3B82F6, #2563EB)","linear-gradient(135deg, #EC4899, #DB2777)"];let G=0;for(let pe=0;pe<(D||"").length;pe++)G=D.charCodeAt(pe)+((G<<5)-G);return L[Math.abs(G)%L.length]},ts=D=>{const L=[];let G="";return D.forEach(pe=>{const Xt=pe.createdAt?.toDate?.()?.toLocaleDateString("ru-RU",{day:"2-digit",month:"long",year:"numeric"})||"";Xt!==G&&(G=Xt,L.push({type:"date",date:Xt})),L.push({type:"message",data:pe})}),L},Oe=HE.getWallpaper(n?.id);if(!n)return p("div",{style:se.emptyContainer,children:p("div",{style:se.emptyContent,children:[p("div",{style:se.emptyLogo,children:"🌪️"}),p("h2",{style:se.emptyTitle,children:"Vortex"}),p("p",{style:se.emptyText,children:"Выберите чат или создайте новый"})]})});const nr=Kr(),Qt=Rn(nr.name),Yt=ts(i);return p("div",{style:{...se.container,opacity:y?.8:1},onDragOver:Ki,onDragLeave:Br,onDrop:Hi,children:[!Jn&&p("div",{style:se.offlineBar,children:"📴 Нет соединения. Сообщения отправятся при подключении."}),p(GE,{chat:n,user:e,other:nr,avatarColor:Qt,otherStatus:g,isTyping:J,isMobile:r,onBack:t,onShowGallery:()=>re(!0),onShowTheme:()=>$i(!0),onShowStatus:()=>Pe(!0),onExport:bt}),p(t0,{messages:Gt,onUnpin:D=>D===null?Ie(!0):rt.unpinMessage(n.id,D),onScrollTo:Sn}),p("div",{style:{...se.messagesContainer,background:Oe||"var(--bg-primary)"},ref:Tn,onScroll:Fr,children:[a?p("div",{style:se.loading,children:"Загрузка..."}):Yt.length===0?p("div",{style:se.emptyChat,children:[p("div",{style:{fontSize:"3rem"},children:"💬"}),p("p",{children:"Нет сообщений"})]}):Yt.map((D,L)=>{if(D.type==="date")return p("div",{style:se.dateDivider,children:p("span",{style:se.dateText,children:D.date})},`d${L}`);const G=D.data;return p("div",{"data-msg-id":G.id,onClick:()=>es(G.id),onTouchStart:pe=>{const Jt=setTimeout(()=>An(G.id),500);pe.target.addEventListener("touchend",()=>clearTimeout(Jt),{once:!0})},style:{background:En.includes(G.id)?"rgba(124,58,237,0.15)":"transparent",borderRadius:"8px",cursor:Ur?"pointer":"default"},children:p(YE,{msg:G,own:G.senderId===e.uid,other:nr,avatarColor:Qt,isMobile:r,isPinned:Gt.some(pe=>pe.id===G.id),onContextMenu:Mo,onDoubleClick:Yi,onImageClick:b,onReactionClick:bn,onPlayAudio:Kt,onReply:xe})},G.id)}),p("div",{ref:In})]}),Ur&&En.length>0&&p("div",{style:se.selectionBar,children:[p("span",{children:["Выбрано: ",En.length]}),p("button",{onClick:Wr,style:se.selectionBtn,children:"🗑️ Удалить"}),p("button",{onClick:tr,style:se.selectionBtn,children:"✕ Отмена"})]}),R&&p(XE,{x:R.x,y:R.y,messageId:R.messageId,text:R.text,isOwn:R.isOwn,isPinned:Gt.some(D=>D.id===R.messageId),onCopy:jr,onEdit:R.isOwn?zr:null,onPin:ke,onDelete:R.isOwn?Gi:null,onReply:xe,onSelfDestruct:er}),A&&p(e0,{x:Math.min(A.x,window.innerWidth-200),y:A.y,onReaction:D=>Lo(A.messageId,D)}),O&&p("div",{style:se.aiMenu,children:[p("button",{onClick:Uo,style:se.aiItem,children:"💡 Умный ответ"}),p("button",{onClick:Fo,style:se.aiItem,children:"🌍 Перевести"}),p("button",{onClick:qr,style:se.aiItem,children:"📊 Саммари"})]}),X&&p("div",{style:se.micOverlay,onClick:()=>W(!1),children:p("div",{style:se.micPrompt,children:[p("div",{children:"🎙️"}),p("h3",{children:"Микрофон запрещён"}),p("p",{children:["📱 iPhone: Настройки → Safari → Микрофон",p("br",{}),"📱 Android: Настройки → Приложения → Браузер → Разрешения"]}),p("button",{onClick:Xi,style:se.micAllowBtn,children:"🔄 Попробовать снова"})]})}),j&&p(n0,{messages:i,onClose:()=>re(!1)}),Ce&&p("div",{style:se.modalOverlay,onClick:()=>Ie(!1),children:p("div",{style:se.modal,children:[p("div",{style:se.modalHeader,children:p("h3",{children:["📌 Закреплённые (",Gt.length,")"]})}),p("div",{style:se.modalBody,children:Gt.map((D,L)=>p("div",{style:se.pinnedItem,onClick:()=>{Sn(D.id),Ie(!1)},children:[p("div",{style:se.pinnedNumber,children:L+1}),p("div",{children:[p("div",{style:se.pinnedSender,children:D.senderName}),p("div",{children:D.text})]})]},D.id))})]})}),lt&&p(r0,{onSend:Zi,onClose:()=>wn(!1)}),zi&&p(up,{onClose:()=>$i(!1)}),pt&&p(s0,{userId:e.uid,onClose:()=>Pe(!1)}),T&&p("div",{style:se.imageOverlay,onClick:()=>b(null),children:p("img",{src:T,style:se.imagePreview})}),Lr&&p("div",{style:se.miniPlayer,children:[p("span",{children:"🎵"}),p("div",{children:Lr.name}),p("audio",{controls:!0,src:Lr.src,autoPlay:!0}),p("button",{onClick:()=>Kt(null),children:"✕"})]}),p(JE,{text:u,onTextChange:h,onSend:Wi,onTyping:Vo,isRecording:P,onStartVoice:Ji,onStopVoice:$r,onShowAI:()=>z(!O),onFileSend:Oo,editingMessage:f,onCancelEdit:Qi,onShowPoll:()=>wn(!0)})]})}const se={container:{flex:1,display:"flex",flexDirection:"column",background:"var(--bg-primary)",height:"100%",position:"relative"},emptyContainer:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},emptyContent:{textAlign:"center",color:"var(--text-tertiary)"},emptyLogo:{fontSize:"5rem"},emptyTitle:{fontSize:"1.5rem",fontWeight:700},emptyText:{fontSize:"0.9rem"},offlineBar:{background:"var(--vortex-danger)",color:"white",textAlign:"center",padding:"4px",fontSize:"0.75rem"},messagesContainer:{flex:1,overflowY:"auto",padding:"0.6rem 0.8rem",display:"flex",flexDirection:"column",gap:"2px",backgroundSize:"cover"},loading:{textAlign:"center",padding:"2rem",color:"var(--text-tertiary)"},emptyChat:{textAlign:"center",padding:"3rem",color:"var(--text-tertiary)"},dateDivider:{textAlign:"center",padding:"0.8rem 0"},dateText:{background:"rgba(255,255,255,0.06)",color:"var(--text-tertiary)",padding:"3px 14px",borderRadius:"10px",fontSize:"0.7rem",fontWeight:500},aiMenu:{position:"absolute",bottom:"70px",right:"16px",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"14px",padding:"8px",zIndex:50,minWidth:"180px"},aiItem:{display:"block",width:"100%",padding:"10px 14px",background:"transparent",border:"none",borderRadius:"10px",color:"var(--text-primary)",cursor:"pointer",textAlign:"left",fontSize:"0.85rem"},micOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},micPrompt:{background:"var(--bg-secondary)",borderRadius:"20px",padding:"2rem",maxWidth:"380px",textAlign:"center"},micAllowBtn:{width:"100%",padding:"0.85rem",background:"var(--gradient-brand)",border:"none",borderRadius:"12px",color:"#fff",fontWeight:600,cursor:"pointer"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center"},modal:{background:"var(--bg-secondary)",borderRadius:"16px",width:"440px",maxWidth:"90vw",maxHeight:"70vh"},modalHeader:{padding:"1rem",borderBottom:"1px solid var(--border-subtle)"},modalBody:{overflowY:"auto",padding:"0.5rem"},pinnedItem:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem",cursor:"pointer"},pinnedNumber:{width:"28px",height:"28px",borderRadius:"50%",background:"var(--bg-tertiary)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:600},pinnedSender:{fontWeight:600,fontSize:"0.85rem",color:"var(--vortex-primary-light)"},selectionBar:{display:"flex",alignItems:"center",gap:"12px",padding:"0.5rem 1rem",background:"rgba(124,58,237,0.1)",borderBottom:"1px solid var(--border-subtle)",fontSize:"0.85rem"},selectionBtn:{padding:"0.4rem 0.8rem",background:"rgba(255,255,255,0.06)",border:"1px solid var(--border-default)",borderRadius:"8px",color:"var(--text-primary)",cursor:"pointer",fontSize:"0.8rem"},imageOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},imagePreview:{maxWidth:"95vw",maxHeight:"95vh",objectFit:"contain",borderRadius:"8px"},miniPlayer:{position:"absolute",bottom:"80px",left:"50%",transform:"translateX(-50%)",background:"var(--bg-secondary)",border:"1px solid var(--border-default)",borderRadius:"20px",padding:"0.75rem",display:"flex",alignItems:"center",gap:"12px",zIndex:50}};function o0({user:n}){const[e,t]=F(null),[r,i]=F(window.innerWidth<=768),[s,a]=F(!1);qe(()=>{const h=()=>{const f=window.innerWidth<=768;i(f),f||a(!1)};return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]);const l=h=>{t(h),r&&a(!0)},u=()=>a(!1);return r?p("div",{style:{display:"flex",height:"100%",overflow:"hidden"},children:[p("div",{style:{width:"100%",height:"100%",display:s?"none":"flex",position:"absolute",top:0,left:0,zIndex:10},children:p(ch,{user:n,activeChat:e,onSelectChat:l})}),p("div",{style:{width:"100%",height:"100%",display:s?"flex":"none",position:"absolute",top:0,left:0,zIndex:20},children:p(fh,{chat:e,user:n,onBack:u,isMobile:!0})})]}):p("div",{style:{display:"flex",height:"100%"},children:[p("div",{style:{width:"380px",minWidth:"380px",height:"100%"},children:p(ch,{user:n,activeChat:e,onSelectChat:l})}),p("div",{style:{flex:1,height:"100%"},children:p(fh,{chat:e,user:n,onBack:u,isMobile:!1})})]})}function a0(){return p("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",background:"var(--bg-primary)"},children:p("div",{style:{textAlign:"center"},children:[p("div",{style:{fontSize:"4rem",animation:"vortexSpin 2s ease-in-out infinite"},children:"🌪️"}),p("h1",{style:{background:"var(--gradient-brand)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"2rem",fontWeight:800},children:"Vortex"}),p("p",{style:{color:"var(--text-tertiary)",marginTop:"0.5rem"},children:"Загрузка..."})]})})}class l0{constructor(){this.keyPair=null}async generateKeys(){this.keyPair=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey"])}async exportPublicKey(){this.keyPair||await this.generateKeys();const e=await crypto.subtle.exportKey("raw",this.keyPair.publicKey);return btoa(String.fromCharCode(...new Uint8Array(e)))}async importPublicKey(e){const t=Uint8Array.from(atob(e),r=>r.charCodeAt(0));return crypto.subtle.importKey("raw",t,{name:"ECDH",namedCurve:"P-256"},!1,[])}async encrypt(e,t){this.keyPair||await this.generateKeys();const r=await this.importPublicKey(t),i=await crypto.subtle.deriveKey({name:"ECDH",public:r},this.keyPair.privateKey,{name:"AES-GCM",length:256},!1,["encrypt"]),s=crypto.getRandomValues(new Uint8Array(12)),a=new TextEncoder().encode(e),l=await crypto.subtle.encrypt({name:"AES-GCM",iv:s},i,a),u=new Uint8Array(s.length+l.byteLength);return u.set(s),u.set(new Uint8Array(l),s.length),btoa(String.fromCharCode(...u))}async decrypt(e,t){this.keyPair||await this.generateKeys();const r=await this.importPublicKey(t),i=await crypto.subtle.deriveKey({name:"ECDH",public:r},this.keyPair.privateKey,{name:"AES-GCM",length:256},!1,["decrypt"]),s=Uint8Array.from(atob(e),h=>h.charCodeAt(0)),a=s.slice(0,12),l=s.slice(12),u=await crypto.subtle.decrypt({name:"AES-GCM",iv:a},i,l);return new TextDecoder().decode(u)}async saveKeys(){const e=await this.exportPublicKey(),t=await crypto.subtle.exportKey("jwk",this.keyPair.privateKey);localStorage.setItem("vortex-keys",JSON.stringify({publicKey:e,privateKey:t}))}async loadKeys(){const e=localStorage.getItem("vortex-keys");if(!e)return!1;try{const{publicKey:t,privateKey:r}=JSON.parse(e),i=await crypto.subtle.importKey("jwk",r,{name:"ECDH",namedCurve:"P-256"},!1,["deriveKey"]),s=await this.importPublicKey(t);return this.keyPair={publicKey:s,privateKey:i},!0}catch{return!1}}}const ya=new l0;function c0(){const[n,e]=F(void 0);return qe(()=>{let t=!0;const r=dn.onAuthChange(async s=>{if(t)if(s){e(s),localStorage.setItem("vortex-user","true"),mi.setUser(s.uid);try{await ya.loadKeys()||(await ya.generateKeys(),await ya.saveKeys()),hp.startTracking()}catch(a){console.error("Init error:",a)}}else e(null),localStorage.removeItem("vortex-user")}),i=()=>{const s=dn.getCurrentUser();s&&mi.stopAllTypingSync(s.uid)};return window.addEventListener("beforeunload",i),window.addEventListener("pagehide",i),()=>{t=!1,r?.(),window.removeEventListener("beforeunload",i),window.removeEventListener("pagehide",i)}},[]),n===void 0?p(a0,{}):n?p(o0,{user:n}):p(yE,{})}class u0{constructor(){this.observer=null,this.loadedComponents=new Set}async loadComponent(e){const t=await e();return t.default||t}observeImages(e){"IntersectionObserver"in window&&(this.observer=new IntersectionObserver(t=>{t.forEach(r=>{if(r.isIntersecting){const i=r.target;i.dataset.src&&(i.src=i.dataset.src,i.removeAttribute("data-src"),this.observer.unobserve(i))}})},{rootMargin:"100px"}),e.querySelectorAll("img[data-src]").forEach(t=>{this.observer.observe(t)}))}preloadCritical(){[{rel:"preload",href:"/src/styles/global.css",as:"style"},{rel:"preload",href:"/src/main.jsx",as:"script"}].forEach(({rel:t,href:r,as:i})=>{const s=document.createElement("link");s.rel=t,s.href=r,s.as=i,document.head.appendChild(s)})}async loadFirebase(){const{initializeApp:e}=await _r(async()=>{const{initializeApp:i}=await Promise.resolve().then(()=>Sg);return{initializeApp:i}},void 0),{getAuth:t}=await _r(async()=>{const{getAuth:i}=await Promise.resolve().then(()=>Ay);return{getAuth:i}},void 0),{getFirestore:r}=await _r(async()=>{const{getFirestore:i}=await Promise.resolve().then(()=>lp);return{getFirestore:i}},void 0);return{initializeApp:e,getAuth:t,getFirestore:r}}}const h0=new u0;h0.preloadCritical();"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(n=>console.log("✅ SW:",n.scope),n=>console.log("❌ SW:",n))});Bp(p(c0,{}),document.getElementById("app"));
