/*! For license information please see app.242043d9.js.LICENSE.txt */
(()=>{var e={42:(e,n)=>{var t;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var a=i.apply(null,t);a&&e.push(a)}}else if("object"===o){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)r.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(n,[]))||(e.exports=t)}()},249:(e,n,t)=>{"use strict";t.d(n,{Z:()=>l});var r=t(933),i=t.n(r),o=t(476),a=t.n(o)()(i());a.push([e.id,".u9f0T1mcSdCJiSs4hY5n {\n    color: white;\n    border-radius: 50%;\n}",""]),a.locals={ic:"u9f0T1mcSdCJiSs4hY5n"};const l=a},447:(e,n,t)=>{"use strict";t.d(n,{Z:()=>l});var r=t(933),i=t.n(r),o=t(476),a=t.n(o)()(i());a.push([e.id,".qDvQDFvbuqnGEqj25ZcJ {\n    display: grid;\n    justify-items: center;\n    \n    align-content: center;\n    height: 100svh;\n\n    gap: 1rem;\n\n    text-align: center;\n\n    color: white;\n}\n\n.QwV2UE9gBgxu95FIkDe_ {\n    object-fit: cover;\n    border-radius: 50%;\n    display: inline-block;\n    \n    font-size: 16px;\n    height: 12em;\n    width: 12em;\n    \n    background-color: #e2e2e1;\n\n    animation: fadein 1s ease-in;\n}\n\n.aJKlk3GTD57AOoyzdCg6 {\n    font-weight: normal;\n\n    animation: slidein 1s ease-in;\n}\n\n.qREWgrecDH3QpmKFdccU {\n    font-weight: normal;\n    text-transform: uppercase;\n\n    animation: slidein 1s ease-in;\n}\n/* FOOTER */\n.LxtzM9Npeo_AOLpHIKL_ {\n    display: flex;\n    gap: .5rem;\n}\n.rZ23H7O2jDx57_fHdRgi {\n    animation: bounce 2s ease 2;\n    /* stagger animations */\n    animation-delay: calc(var(--delay-multip) * 100ms);\n}",""]),a.locals={profile:"qDvQDFvbuqnGEqj25ZcJ",image:"QwV2UE9gBgxu95FIkDe_",subtitle:"aJKlk3GTD57AOoyzdCg6",name:"qREWgrecDH3QpmKFdccU",footer:"LxtzM9Npeo_AOLpHIKL_",link:"rZ23H7O2jDx57_fHdRgi"};const l=a},779:(e,n,t)=>{"use strict";t.d(n,{Z:()=>d});var r=t(933),i=t.n(r),o=t(476),a=t.n(o),l=t(678),s=t.n(l),c=new URL(t(804),t.b),u=a()(i()),_=s()(c);u.push([e.id,'@font-face {\n    font-family: VT323;\n    src: url("https://fonts.googleapis.com/css2?family=VT323&display=swap");\n}\n\nbody {\n    margin: 0;\n\n    font-family: "VT323", monospace;\n    /* fallback */\n    background-color: black;\n\n    background-image: url('+_+");\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n@media (prefers-reduced-motion: reduce) {\n    * {\n        animation: none;\n        transition: none;\n    }\n\n    body {\n        background-image: none;\n    }\n}\n\n@keyframes slidein {\n    from {\n        opacity: 0;\n        transform: translateY(-50%);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes fadein {\n    from {\n        opacity: 0;\n        transform: scale(0.5);\n    }\n\n    to {\n        opacity: 1;\n        transform: scale(1);\n    }\n}\n\n@keyframes bounce {\n    0%,\n    20%,\n    50%,\n    80%,\n    100% {\n        transform: translateY(0);\n    }\n    40% {\n        transform: translateY(-20px);\n    }\n    60% {\n        transform: translateY(-10px);\n    }\n}\n",""]),u.locals={};const d=u},476:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&a[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),n.push(u))}},n}},678:e=>{"use strict";e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},933:e=>{"use strict";e.exports=function(e){return e[1]}},892:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],u=o[c]||0,_="".concat(c," ").concat(u);o[c]=u+1;var d=t(_),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(p);else{var f=i(p,r);r.byIndex=l,n.splice(l,0,{identifier:_,updater:f,references:1})}a.push(_)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var l=t(o[a]);n[l].references--}for(var s=r(e,i),c=0;c<o.length;c++){var u=t(o[c]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=s}}},311:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},60:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},192:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},760:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},865:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},539:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r={id:"github-usage",viewBox:"0 0 35.318 35.318",url:t.p+"assets/sprite.svg#github",toString:function(){return this.url}}},112:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r={id:"instagram-usage",viewBox:"0 0 49.652 49.652",url:t.p+"assets/sprite.svg#instagram",toString:function(){return this.url}}},725:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r={id:"linkedin-usage",viewBox:"0 0 512 512",url:t.p+"assets/sprite.svg#linkedin",toString:function(){return this.url}}},88:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r={id:"medium-usage",viewBox:"0 0 2178.36 1534.013",url:t.p+"assets/sprite.svg#medium",toString:function(){return this.url}}},105:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});const r={id:"more-usage",viewBox:"0 0 24 24",url:t.p+"assets/sprite.svg#more",toString:function(){return this.url}}},125:(e,n,t)=>{var r={"./github.svg":539,"./instagram.svg":112,"./linkedin.svg":725,"./medium.svg":88,"./more.svg":105};function i(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=125},804:(e,n,t)=>{"use strict";e.exports=t.p+"f5b02f79f4e4d9b2bf60.gif"}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var e,n,r,i,o,a,l,s={},c=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_=Array.isArray;function d(e,n){for(var t in n)e[t]=n[t];return e}function p(e){var n=e.parentNode;n&&n.removeChild(e)}function f(n,t,r){var i,o,a,l={};for(a in t)"key"==a?i=t[a]:"ref"==a?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof n&&null!=n.defaultProps)for(a in n.defaultProps)void 0===l[a]&&(l[a]=n.defaultProps[a]);return m(n,l,i,o,null)}function m(e,t,i,o,a){var l={type:e,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==a?++r:a};return null==a&&null!=n.vnode&&n.vnode(l),l}function h(e){return e.children}function v(e,n){this.props=e,this.context=n}function g(e,n){if(null==n)return e.__?g(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?g(e):null}function y(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return y(e)}}function b(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!k.__r++||o!==n.debounceRendering)&&((o=n.debounceRendering)||a)(k)}function k(){var e,n,t,r,o,a,s,c;for(i.sort(l);e=i.shift();)e.__d&&(n=i.length,r=void 0,o=void 0,s=(a=(t=e).__v).__e,(c=t.__P)&&(r=[],(o=d({},a)).__v=a.__v+1,C(c,a,o,t.__n,void 0!==c.ownerSVGElement,null!=a.__h?[s]:null,r,null==s?g(a):s,a.__h),j(r,a),a.__e!=s&&y(a)),i.length>n&&i.sort(l));k.__r=0}function S(e,n,t,r,i,o,a,l,u,d){var p,f,v,y,b,k,S,P=r&&r.__k||c,T=P.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(y=t.__k[p]=null==(y=n[p])||"boolean"==typeof y||"function"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?m(null,y,null,null,y):_(y)?m(h,{children:y},null,null,null):y.__b>0?m(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=t,y.__b=t.__b+1,null===(v=P[p])||v&&y.key==v.key&&y.type===v.type)P[p]=void 0;else for(f=0;f<T;f++){if((v=P[f])&&y.key==v.key&&y.type===v.type){P[f]=void 0;break}v=null}C(e,y,v=v||s,i,o,a,l,u,d),b=y.__e,(f=y.ref)&&v.ref!=f&&(S||(S=[]),v.ref&&S.push(v.ref,null,y),S.push(f,y.__c||b,y)),null!=b?(null==k&&(k=b),"function"==typeof y.type&&y.__k===v.__k?y.__d=u=w(y,u,e):u=x(e,y,v,P,b,u),"function"==typeof t.type&&(t.__d=u)):u&&v.__e==u&&u.parentNode!=e&&(u=g(v))}for(t.__e=k,p=T;p--;)null!=P[p]&&("function"==typeof t.type&&null!=P[p].__e&&P[p].__e==t.__d&&(t.__d=E(r).nextSibling),H(P[p],P[p]));if(S)for(p=0;p<S.length;p++)F(S[p],S[++p],S[++p])}function w(e,n,t){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,n="function"==typeof r.type?w(r,n,t):x(t,r,r,i,r.__e,n));return n}function x(e,n,t,r,i,o){var a,l,s;if(void 0!==n.__d)a=n.__d,n.__d=void 0;else if(null==t||i!=o||null==i.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(i),a=null;else{for(l=o,s=0;(l=l.nextSibling)&&s<r.length;s+=1)if(l==i)break e;e.insertBefore(i,o),a=o}return void 0!==a?a:i.nextSibling}function E(e){var n,t,r;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(n=e.__k.length-1;n>=0;n--)if((t=e.__k[n])&&(r=E(t)))return r;return null}function P(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||u.test(n)?t:t+"px"}function T(e,n,t,r,i){var o;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||P(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||P(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?r||e.addEventListener(n,o?O:A,o):e.removeEventListener(n,o?O:A,o);else if("dangerouslySetInnerHTML"!==n){if(i)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function A(e){return this.l[e.type+!1](n.event?n.event(e):e)}function O(e){return this.l[e.type+!0](n.event?n.event(e):e)}function C(e,t,r,i,o,a,l,s,c){var u,p,f,m,g,y,b,k,w,x,E,P,T,A,O,C=t.type;if(void 0!==t.constructor)return null;null!=r.__h&&(c=r.__h,s=t.__e=r.__e,t.__h=null,a=[s]),(u=n.__b)&&u(t);try{e:if("function"==typeof C){if(k=t.props,w=(u=C.contextType)&&i[u.__c],x=u?w?w.props.value:u.__:i,r.__c?b=(p=t.__c=r.__c).__=p.__E:("prototype"in C&&C.prototype.render?t.__c=p=new C(k,x):(t.__c=p=new v(k,x),p.constructor=C,p.render=B),w&&w.sub(p),p.props=k,p.state||(p.state={}),p.context=x,p.__n=i,f=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=d({},p.__s)),d(p.__s,C.getDerivedStateFromProps(k,p.__s))),m=p.props,g=p.state,p.__v=t,f)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&k!==m&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,x)||t.__v===r.__v){for(t.__v!==r.__v&&(p.props=k,p.state=p.__s,p.__d=!1),p.__e=!1,t.__e=r.__e,t.__k=r.__k,t.__k.forEach((function(e){e&&(e.__=t)})),E=0;E<p._sb.length;E++)p.__h.push(p._sb[E]);p._sb=[],p.__h.length&&l.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,x),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(m,g,y)}))}if(p.context=x,p.props=k,p.__P=e,P=n.__r,T=0,"prototype"in C&&C.prototype.render){for(p.state=p.__s,p.__d=!1,P&&P(t),u=p.render(p.props,p.state,p.context),A=0;A<p._sb.length;A++)p.__h.push(p._sb[A]);p._sb=[]}else do{p.__d=!1,P&&P(t),u=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++T<25);p.state=p.__s,null!=p.getChildContext&&(i=d(d({},i),p.getChildContext())),f||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(m,g)),S(e,_(O=null!=u&&u.type===h&&null==u.key?u.props.children:u)?O:[O],t,r,i,o,a,l,s,c),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==a&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=M(r.__e,t,r,i,o,a,l,c);(u=n.diffed)&&u(t)}catch(e){t.__v=null,(c||null!=a)&&(t.__e=s,t.__h=!!c,a[a.indexOf(s)]=null),n.__e(e,t,r)}}function j(e,t){n.__c&&n.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){n.__e(e,t.__v)}}))}function M(n,t,r,i,o,a,l,c){var u,d,f,m=r.props,h=t.props,v=t.type,y=0;if("svg"===v&&(o=!0),null!=a)for(;y<a.length;y++)if((u=a[y])&&"setAttribute"in u==!!v&&(v?u.localName===v:3===u.nodeType)){n=u,a[y]=null;break}if(null==n){if(null===v)return document.createTextNode(h);n=o?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),a=null,c=!1}if(null===v)m===h||c&&n.data===h||(n.data=h);else{if(a=a&&e.call(n.childNodes),d=(m=r.props||s).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!c){if(null!=a)for(m={},y=0;y<n.attributes.length;y++)m[n.attributes[y].name]=n.attributes[y].value;(f||d)&&(f&&(d&&f.__html==d.__html||f.__html===n.innerHTML)||(n.innerHTML=f&&f.__html||""))}if(function(e,n,t,r,i){var o;for(o in t)"children"===o||"key"===o||o in n||T(e,o,null,t[o],r);for(o in n)i&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||T(e,o,n[o],t[o],r)}(n,h,m,o,c),f)t.__k=[];else if(S(n,_(y=t.props.children)?y:[y],t,r,i,o&&"foreignObject"!==v,a,l,a?a[0]:r.__k&&g(r,0),c),null!=a)for(y=a.length;y--;)null!=a[y]&&p(a[y]);c||("value"in h&&void 0!==(y=h.value)&&(y!==n.value||"progress"===v&&!y||"option"===v&&y!==m.value)&&T(n,"value",y,m.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==n.checked&&T(n,"checked",y,m.checked,!1))}return n}function F(e,t,r){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,r)}}function H(e,t,r){var i,o;if(n.unmount&&n.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||F(i,null,t)),null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){n.__e(e,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&H(i[o],t,r||"function"!=typeof e.type);r||null==e.__e||p(e.__e),e.__=e.__e=e.__d=void 0}function B(e,n,t){return this.constructor(e,t)}e=c.slice,n={__e:function(e,n,t,r){for(var i,o,a;n=n.__;)if((i=n.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,r||{}),a=i.__d),a)return i.__E=i}catch(n){e=n}throw e}},r=0,v.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(d({},t),this.props)),e&&d(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),b(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},v.prototype.render=h,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=function(e,n){return e.__v.__b-n.__v.__b},k.__r=0,t(42);var D=t(892),U=t.n(D),I=t(760),N=t.n(I),L=t(311),R=t.n(L),Z=t(192),W=t.n(Z),V=t(60),q=t.n(V),J=t(865),z=t.n(J),Q=t(249),Y={};Y.styleTagTransform=z(),Y.setAttributes=W(),Y.insert=R().bind(null,"head"),Y.domAPI=N(),Y.insertStyleElement=q(),U()(Q.Z,Y);const G=Q.Z&&Q.Z.locals?Q.Z.locals:void 0;var $=["name"];function K(){return K=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K.apply(this,arguments)}var X="".concat(t.p,"assets/sprite.svg");t(125);const ee=function(e){var n=e.name;return f("svg",K({width:"24",height:"24"},function(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,$),{class:G.ic}),f("use",{xlinkHref:"".concat(X,"#").concat(n)}))};var ne=t(447),te={};te.styleTagTransform=z(),te.setAttributes=W(),te.insert=R().bind(null,"head"),te.domAPI=N(),te.insertStyleElement=q(),U()(ne.Z,te);const re=ne.Z&&ne.Z.locals?ne.Z.locals:void 0,ie=t.p+"assets/e6af4d07.jpg",oe=function(e){var n=e.links,t=e.name,r=e.subtitle;return e.img,f("section",{class:re.profile},f("header",null,f("img",{class:re.image,src:ie,alt:"My Face",height:"180",width:"180"}),f("h2",{class:re.subtitle},r),f("h1",{class:re.name},t)),n&&f("footer",{class:re.footer},n.map((function(e,n){var t=e.id,r=e.name,i=e.url;return f("a",{class:re.link,style:"--delay-multip: ".concat(n,";"),"aria-label":r,href:i,key:t},f(ee,{name:r,width:"35",height:"35"}))}))),f("p",{class:"proj-note"},"Done @ Home since 2017"))};var ae,le,se,ce=[],ue=[],_e=n.__b,de=n.__r,pe=n.diffed,fe=n.__c,me=n.unmount;function he(){for(var e;e=ce.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ye),e.__H.__h.forEach(be),e.__H.__h=[]}catch(t){e.__H.__h=[],n.__e(t,e.__v)}}n.__b=function(e){ae=null,_e&&_e(e)},n.__r=function(e){de&&de(e);var n=(ae=e.__c).__H;n&&(le===ae?(n.__h=[],ae.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=ue,e.__N=e.i=void 0}))):(n.__h.forEach(ye),n.__h.forEach(be),n.__h=[])),le=ae},n.diffed=function(e){pe&&pe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==ce.push(t)&&se===n.requestAnimationFrame||((se=n.requestAnimationFrame)||ge)(he)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==ue&&(e.__=e.__V),e.i=void 0,e.__V=ue}))),le=ae=null},n.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ye),e.__h=e.__h.filter((function(e){return!e.__||be(e)}))}catch(r){t.some((function(e){e.__h&&(e.__h=[])})),t=[],n.__e(r,e.__v)}})),fe&&fe(e,t)},n.unmount=function(e){me&&me(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach((function(e){try{ye(e)}catch(e){t=e}})),r.__H=void 0,t&&n.__e(t,r.__v))};var ve="function"==typeof requestAnimationFrame;function ge(e){var n,t=function(){clearTimeout(r),ve&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);ve&&(n=requestAnimationFrame(t))}function ye(e){var n=ae,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),ae=n}function be(e){var n=ae;e.__c=e.__(),ae=n}f(ee,{name:"more"});var ke=["profile"];!function(t,r,i){var o,a,l;n.__&&n.__(t,r),a=(o="function"==typeof i)?null:i&&i.__k||r.__k,l=[],C(r,t=(!o&&i||r).__k=f(h,null,[t]),a||s,s,void 0!==r.ownerSVGElement,!o&&i?[i]:a?null:r.firstChild?e.call(r.childNodes):null,l,!o&&i?i:a?a.__e:r.firstChild,o),j(l,t)}(f((function(e){var n=e.profile;return function(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}}(e,ke),f(h,null,f(oe,n))}),{profile:{name:"Cainã Brazil",subtitle:"Another Front-End Developer",img:"perfil.jpg",links:[{name:"github",id:"#github-link",url:"https://github.com/guaiamum/guaiamum.github.io"},{name:"instagram",id:"#instagram-link",url:"https://www.instagram.com/_guaiamum/"},{name:"medium",id:"#medium-link",url:"https://medium.com/@guaiamum"},{name:"linkedin",id:"#linkedin-link",url:"https://www.linkedin.com/in/cainã-brazil-586379114/"}]},skills:[{title:"JS",description:"4 years. Web and mobile development"},{title:"NodeJS",description:"Having an entire stack with JavaScript is indeed awesome!"},{title:"React JS",description:"2 years. Enterprise apps, exploring SSR and various other techniques for building fast, accessible and beautiful applications"},{title:"React Native",description:"React Native: 1 month. Simple apps for experimenting"},{title:"C#",description:"3 years. Game scripts and Web development, Api's, etc..."},{title:".NET",description:"2 years. Web development, mainly with E.R.P.'s"},{title:"Xamarin",description:"Xamarin: 1 month. Maintenance in app developed for a big company"},{title:"REST API's",description:"1 year. Created and maintained some REST API's for mobile app comsumption"},{title:"PHP",description:"1 month. Web development in a start-up company"},{title:"Yii",description:"1 month. Web development in a start-up company"},{title:"SQL",description:"3 years. Mainly worked with SQLServer Management studio, and a little with PhpMyAdmin."}],skillsWanted:[{title:"Python",description:'Python: seems like a "do it all" simple programming language, with lots of libraries'},{title:"Security",description:"Networking and security"},{title:"Loading",description:"I want to continue learning about everything!"}],jobs:[{company:"Aubay",title:"Full-Stack developer",dateBegin:"May 2018",dateEnd:"ongoing",location:"Porto, Portugal",description:"Helped maintain a massive C# ASP.NET and Oracle project.",tasks:["Back-end development"]},{company:"Open System",title:"Software development internship",dateBegin:"Jun 2017",dateEnd:"Feb 2018",location:"Salvador, BA",description:"Developed great solutions to clients, and to keep and raise the name of a company that has more than 25 years in the market providing integrated mobile solutions for big retail companies.",tasks:["Modeling the database using SQL Server and Code-first Migrations","ASP.NET MVC development, multi-language and multi-layer architecture","Front-end design using various plugins in JavaScript, CSS and Bootstrap, etc","Developed WebAPI to provide data to mobile devices connected and receive information from other APIs","Full-stack development for mobile devices (android) using Xamarin"]},{company:"Viva inovação",title:"Web development internship",dateBegin:"Mar 2017",dateEnd:"Jun 2017",location:"Salvador, BA",description:"Viva Inovação is a startup company that develops technology solutions focused on increasing productivity.",tasks:["Learned basics MVC architecture and front-end developing using Razor, jQuery, Bootstrap, etc","Back-end development using C# with ASP.NET and PHP with Yii framework","Talked directly to customers and provided support","Managed deployments and maintenance on server applicatications"]},{company:"Ufba",title:"Game development internship",dateBegin:"Mar 2016",dateEnd:"Mar 2017",location:"Salvador, BA",description:"Multi-subject Federal University project",tasks:["From ground zero made an entire virtual world of my University Campus, including terrain, buildings, streets and main architecture characteristics","Participants from different areas of knowledge, like: arts, architecture, computer science","Used Sketchup 3D to convert the work done by architecture students to models that could be used in the Unity 3D platform","Used terrain plugins to create roads and adapt the terrain imported from the city database to the new building that were being put 'on top of it'","Developed my C# skills with scripts to control the user inputs and animations around the Campus"]}],schools:[{title:"System's Engineering exchange graduation",name:"ISEP - Instituto Politécnico do Porto",dateBegin:"fev 2018",dateEnd:"ongoing",location:"Porto, Portugal"},{title:"Computer Engineering ongoing graduation",name:"UFBA - Unversidade Federal da Bahia",dateBegin:"jan 2015",dateEnd:"ongoing",location:"Salvador, BA"},{title:"Architecture and Urbanism Incomplete graduation",name:"UFBA - Unversidade Federal da Bahia",dateBegin:"jan 2014",dateEnd:"dez 2014",location:"Salvador, BA"},{title:"English School for international students",name:"ILSC",dateBegin:"fev 2012",dateEnd:"nov 2012",location:"San Francisco, CA"}]}),document.getElementById("root"))})(),(()=>{"use strict";var e=t(892),n=t.n(e),r=t(760),i=t.n(r),o=t(311),a=t.n(o),l=t(192),s=t.n(l),c=t(60),u=t.n(c),_=t(865),d=t.n(_),p=t(779),f={};f.styleTagTransform=d(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals})()})();