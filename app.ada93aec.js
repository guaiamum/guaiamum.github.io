/*! For license information please see app.ada93aec.js.LICENSE.txt */
(()=>{var e={42:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},447:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(933),i=n.n(r),o=n(476),a=n.n(o)()(i());a.push([e.id,".qDvQDFvbuqnGEqj25ZcJ {\n    display: grid;\n    justify-items: center;\n    \n    align-content: center;\n    height: 100svh;\n\n    gap: 1rem;\n\n    text-align: center;\n}\n\n.QwV2UE9gBgxu95FIkDe_ {\n    border-radius: 50%;\n    display: inline-block;\n    \n    font-size: 16px;\n    height: 12em;\n    width: 12em;\n    \n    background-color: #e2e2e1;\n\n    animation: fadein .7s ease-in;\n}\n\n.aJKlk3GTD57AOoyzdCg6 {\n    font-weight: normal;\n\n    animation: slidein 1s ease-in;\n}\n\n.qREWgrecDH3QpmKFdccU {\n    font-weight: normal;\n    text-transform: uppercase;\n\n    animation: slidein 1s ease-in;\n}\n/* FOOTER */\n.LxtzM9Npeo_AOLpHIKL_ {\n    display: flex;\n    gap: .5rem;\n}\n.rZ23H7O2jDx57_fHdRgi {\n    animation: bounce .5s alternate-reverse 2;\n}",""]),a.locals={profile:"qDvQDFvbuqnGEqj25ZcJ",image:"QwV2UE9gBgxu95FIkDe_",subtitle:"aJKlk3GTD57AOoyzdCg6",name:"qREWgrecDH3QpmKFdccU",footer:"LxtzM9Npeo_AOLpHIKL_",link:"rZ23H7O2jDx57_fHdRgi"};const l=a},779:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(933),i=n.n(r),o=n(476),a=n.n(o)()(i());a.push([e.id,"@font-face {\n    font-family: Wix Madefor Display;\n    src: url(\"https://fonts.googleapis.com/css2?family=Wix+Madefor+Display&display=swap\");\n}\n\nbody {\n    margin: 0;\n\n    font-family: 'Wix Madefor Display', 'Roboto', sans-serif;\n}\n\n@keyframes slidein {\n    from {\n        opacity: 0;\n        transform: translateY(-50%);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes fadein {\n    from {\n        opacity: 0;\n        transform: scale(.5);\n    }\n\n    to {\n        opacity: 1;\n        transform: scale(1);\n    }\n}\n\n@keyframes bounce {\n    from {\n        transform: scale(.9) translateY(0);\n    }\n\n    to {\n        transform: scale(1) translateY(20%);\n    }\n}\n",""]),a.locals={};const l=a},476:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},933:e=>{"use strict";e.exports=function(e){return e[1]}},892:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],l=0;l<e.length;l++){var s=e[l],u=r.base?s[0]+r.base:s[0],c=o[u]||0,_="".concat(u," ").concat(c);o[u]=c+1;var d=n(_),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var f=i(p,r);r.byIndex=l,t.splice(l,0,{identifier:_,updater:f,references:1})}a.push(_)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var l=n(o[a]);t[l].references--}for(var s=r(e,i),u=0;u<o.length;u++){var c=n(o[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=s}}},311:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},60:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},760:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},539:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={id:"github-usage",viewBox:"0 0 35.318 35.318",url:n.p+"assets/sprite.svg#github",toString:function(){return this.url}}},112:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={id:"instagram-usage",viewBox:"0 0 49.652 49.652",url:n.p+"assets/sprite.svg#instagram",toString:function(){return this.url}}},725:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={id:"linkedin-usage",viewBox:"0 0 512 512",url:n.p+"assets/sprite.svg#linkedin",toString:function(){return this.url}}},166:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={id:"medium-usage",viewBox:"0 0 195 195",url:n.p+"assets/sprite.svg#medium",toString:function(){return this.url}}},105:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={id:"more-usage",viewBox:"0 0 24 24",url:n.p+"assets/sprite.svg#more",toString:function(){return this.url}}},125:(e,t,n)=>{var r={"./github.svg":539,"./instagram.svg":112,"./linkedin.svg":725,"./medium.svg":166,"./more.svg":105};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=125}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{"use strict";var e,t,r,i,o,a,l,s={},u=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_=Array.isArray;function d(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function f(t,n,r){var i,o,a,l={};for(a in n)"key"==a?i=n[a]:"ref"==a?o=n[a]:l[a]=n[a];if(arguments.length>2&&(l.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(a in t.defaultProps)void 0===l[a]&&(l[a]=t.defaultProps[a]);return h(t,l,i,o,null)}function h(e,n,i,o,a){var l={type:e,props:n,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==a?++r:a};return null==a&&null!=t.vnode&&t.vnode(l),l}function m(e){return e.children}function v(e,t){this.props=e,this.context=t}function g(e,t){if(null==t)return e.__?g(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?g(e):null}function y(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return y(e)}}function b(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!k.__r++||o!==t.debounceRendering)&&((o=t.debounceRendering)||a)(k)}function k(){var e,t,n,r,o,a,s,u;for(i.sort(l);e=i.shift();)e.__d&&(t=i.length,r=void 0,o=void 0,s=(a=(n=e).__v).__e,(u=n.__P)&&(r=[],(o=d({},a)).__v=a.__v+1,T(u,a,o,n.__n,void 0!==u.ownerSVGElement,null!=a.__h?[s]:null,r,null==s?g(a):s,a.__h),M(r,a),a.__e!=s&&y(a)),i.length>t&&i.sort(l));k.__r=0}function S(e,t,n,r,i,o,a,l,c,d){var p,f,v,y,b,k,S,P=r&&r.__k||u,O=P.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(y=n.__k[p]=null==(y=t[p])||"boolean"==typeof y||"function"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?h(null,y,null,null,y):_(y)?h(m,{children:y},null,null,null):y.__b>0?h(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=P[p])||v&&y.key==v.key&&y.type===v.type)P[p]=void 0;else for(f=0;f<O;f++){if((v=P[f])&&y.key==v.key&&y.type===v.type){P[f]=void 0;break}v=null}T(e,y,v=v||s,i,o,a,l,c,d),b=y.__e,(f=y.ref)&&v.ref!=f&&(S||(S=[]),v.ref&&S.push(v.ref,null,y),S.push(f,y.__c||b,y)),null!=b?(null==k&&(k=b),"function"==typeof y.type&&y.__k===v.__k?y.__d=c=w(y,c,e):c=x(e,y,v,P,b,c),"function"==typeof n.type&&(n.__d=c)):c&&v.__e==c&&c.parentNode!=e&&(c=g(v))}for(n.__e=k,p=O;p--;)null!=P[p]&&("function"==typeof n.type&&null!=P[p].__e&&P[p].__e==n.__d&&(n.__d=E(r).nextSibling),F(P[p],P[p]));if(S)for(p=0;p<S.length;p++)D(S[p],S[++p],S[++p])}function w(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t="function"==typeof r.type?w(r,t,n):x(n,r,r,i,r.__e,t));return t}function x(e,t,n,r,i,o){var a,l,s;if(void 0!==t.__d)a=t.__d,t.__d=void 0;else if(null==n||i!=o||null==i.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(i),a=null;else{for(l=o,s=0;(l=l.nextSibling)&&s<r.length;s+=1)if(l==i)break e;e.insertBefore(i,o),a=o}return void 0!==a?a:i.nextSibling}function E(e){var t,n,r;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=E(n)))return r;return null}function P(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||c.test(t)?n:n+"px"}function O(e,t,n,r,i){var o;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||P(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||P(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?C:A,o):e.removeEventListener(t,o?C:A,o);else if("dangerouslySetInnerHTML"!==t){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function A(e){return this.l[e.type+!1](t.event?t.event(e):e)}function C(e){return this.l[e.type+!0](t.event?t.event(e):e)}function T(e,n,r,i,o,a,l,s,u){var c,p,f,h,g,y,b,k,w,x,E,P,O,A,C,T=n.type;if(void 0!==n.constructor)return null;null!=r.__h&&(u=r.__h,s=n.__e=r.__e,n.__h=null,a=[s]),(c=t.__b)&&c(n);try{e:if("function"==typeof T){if(k=n.props,w=(c=T.contextType)&&i[c.__c],x=c?w?w.props.value:c.__:i,r.__c?b=(p=n.__c=r.__c).__=p.__E:("prototype"in T&&T.prototype.render?n.__c=p=new T(k,x):(n.__c=p=new v(k,x),p.constructor=T,p.render=H),w&&w.sub(p),p.props=k,p.state||(p.state={}),p.context=x,p.__n=i,f=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=T.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=d({},p.__s)),d(p.__s,T.getDerivedStateFromProps(k,p.__s))),h=p.props,g=p.state,p.__v=n,f)null==T.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==T.getDerivedStateFromProps&&k!==h&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,x)||n.__v===r.__v){for(n.__v!==r.__v&&(p.props=k,p.state=p.__s,p.__d=!1),p.__e=!1,n.__e=r.__e,n.__k=r.__k,n.__k.forEach((function(e){e&&(e.__=n)})),E=0;E<p._sb.length;E++)p.__h.push(p._sb[E]);p._sb=[],p.__h.length&&l.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,x),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(h,g,y)}))}if(p.context=x,p.props=k,p.__P=e,P=t.__r,O=0,"prototype"in T&&T.prototype.render){for(p.state=p.__s,p.__d=!1,P&&P(n),c=p.render(p.props,p.state,p.context),A=0;A<p._sb.length;A++)p.__h.push(p._sb[A]);p._sb=[]}else do{p.__d=!1,P&&P(n),c=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++O<25);p.state=p.__s,null!=p.getChildContext&&(i=d(d({},i),p.getChildContext())),f||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(h,g)),S(e,_(C=null!=c&&c.type===m&&null==c.key?c.props.children:c)?C:[C],n,r,i,o,a,l,s,u),p.base=n.__e,n.__h=null,p.__h.length&&l.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==a&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=j(r.__e,n,r,i,o,a,l,u);(c=t.diffed)&&c(n)}catch(e){n.__v=null,(u||null!=a)&&(n.__e=s,n.__h=!!u,a[a.indexOf(s)]=null),t.__e(e,n,r)}}function M(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function j(t,n,r,i,o,a,l,u){var c,d,f,h=r.props,m=n.props,v=n.type,y=0;if("svg"===v&&(o=!0),null!=a)for(;y<a.length;y++)if((c=a[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,a[y]=null;break}if(null==t){if(null===v)return document.createTextNode(m);t=o?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,m.is&&m),a=null,u=!1}if(null===v)h===m||u&&t.data===m||(t.data=m);else{if(a=a&&e.call(t.childNodes),d=(h=r.props||s).dangerouslySetInnerHTML,f=m.dangerouslySetInnerHTML,!u){if(null!=a)for(h={},y=0;y<t.attributes.length;y++)h[t.attributes[y].name]=t.attributes[y].value;(f||d)&&(f&&(d&&f.__html==d.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,i){var o;for(o in n)"children"===o||"key"===o||o in t||O(e,o,null,n[o],r);for(o in t)i&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||O(e,o,t[o],n[o],r)}(t,m,h,o,u),f)n.__k=[];else if(S(t,_(y=n.props.children)?y:[y],n,r,i,o&&"foreignObject"!==v,a,l,a?a[0]:r.__k&&g(r,0),u),null!=a)for(y=a.length;y--;)null!=a[y]&&p(a[y]);u||("value"in m&&void 0!==(y=m.value)&&(y!==t.value||"progress"===v&&!y||"option"===v&&y!==h.value)&&O(t,"value",y,h.value,!1),"checked"in m&&void 0!==(y=m.checked)&&y!==t.checked&&O(t,"checked",y,h.checked,!1))}return t}function D(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function F(e,n,r){var i,o;if(t.unmount&&t.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||D(i,null,n)),null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){t.__e(e,n)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&F(i[o],n,r||"function"!=typeof e.type);r||null==e.__e||p(e.__e),e.__=e.__e=e.__d=void 0}function H(e,t,n){return this.constructor(e,n)}e=u.slice,t={__e:function(e,t,n,r){for(var i,o,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,r||{}),a=i.__d),a)return i.__E=i}catch(t){e=t}throw e}},r=0,v.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(d({},n),this.props)),e&&d(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),b(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},v.prototype.render=m,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=function(e,t){return e.__v.__b-t.__v.__b},k.__r=0;var B=n(42),N=n.n(B),U=["classes","name"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}var L="".concat(n.p,"assets/sprite.svg");n(125);const W=function(e){var t=e.classes,n=e.name;return f("svg",I({width:"24",height:"24"},function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,U),{class:N()("ic",t)}),f("use",{xlinkHref:"".concat(L,"#").concat(n)}))};var R=n(892),q=n.n(R),Z=n(760),J=n.n(Z),V=n(311),z=n.n(V),Q=n(192),G=n.n(Q),K=n(60),Y=n.n(K),$=n(865),X=n.n($),ee=n(447),te={};te.styleTagTransform=X(),te.setAttributes=G(),te.insert=z().bind(null,"head"),te.domAPI=J(),te.insertStyleElement=Y(),q()(ee.Z,te);const ne=ee.Z&&ee.Z.locals?ee.Z.locals:void 0,re=n.p+"assets/5dba6b7e.jpg",ie=function(e){var t=e.links,n=e.name,r=e.subtitle;return e.img,f("section",{class:ne.profile},f("header",null,f("img",{class:ne.image,src:re,alt:"My Face",height:"180",width:"180"}),f("h2",{class:ne.subtitle},r),f("h1",{class:ne.name},n)),t&&f("footer",{class:ne.footer},t.map((function(e){var t=e.id,n=e.name,r=e.url;return f("a",{class:ne.link,"aria-label":n,href:r,key:t},f(W,{name:n,width:"35",height:"35"}))}))),f("p",{class:"proj-note"},"Done @ Home since 2017"))};var oe,ae,le,se=[],ue=[],ce=t.__b,_e=t.__r,de=t.diffed,pe=t.__c,fe=t.unmount;function he(){for(var e;e=se.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ge),e.__H.__h.forEach(ye),e.__H.__h=[]}catch(n){e.__H.__h=[],t.__e(n,e.__v)}}t.__b=function(e){oe=null,ce&&ce(e)},t.__r=function(e){_e&&_e(e);var t=(oe=e.__c).__H;t&&(ae===oe?(t.__h=[],oe.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=ue,e.__N=e.i=void 0}))):(t.__h.forEach(ge),t.__h.forEach(ye),t.__h=[])),ae=oe},t.diffed=function(e){de&&de(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==se.push(n)&&le===t.requestAnimationFrame||((le=t.requestAnimationFrame)||ve)(he)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==ue&&(e.__=e.__V),e.i=void 0,e.__V=ue}))),ae=oe=null},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(ge),e.__h=e.__h.filter((function(e){return!e.__||ye(e)}))}catch(r){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(r,e.__v)}})),pe&&pe(e,n)},t.unmount=function(e){fe&&fe(e);var n,r=e.__c;r&&r.__H&&(r.__H.__.forEach((function(e){try{ge(e)}catch(e){n=e}})),r.__H=void 0,n&&t.__e(n,r.__v))};var me="function"==typeof requestAnimationFrame;function ve(e){var t,n=function(){clearTimeout(r),me&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);me&&(t=requestAnimationFrame(n))}function ge(e){var t=oe,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),oe=t}function ye(e){var t=oe;e.__c=e.__(),oe=t}f(W,{name:"more"});var be=["profile"];!function(n,r,i){var o,a,l;t.__&&t.__(n,r),a=(o="function"==typeof i)?null:i&&i.__k||r.__k,l=[],T(r,n=(!o&&i||r).__k=f(m,null,[n]),a||s,s,void 0!==r.ownerSVGElement,!o&&i?[i]:a?null:r.firstChild?e.call(r.childNodes):null,l,!o&&i?i:a?a.__e:r.firstChild,o),M(l,n)}(f((function(e){var t=e.profile;return function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}}(e,be),f(m,null,f(ie,t))}),{profile:{name:"Cainã Brazil",subtitle:"Another Front-End Developer",img:"perfil.jpg",links:[{name:"github",id:"#github-link",url:"https://github.com/guaiamum/guaiamum.github.io"},{name:"instagram",id:"#instagram-link",url:"https://www.instagram.com/_guaiamum/"},{name:"medium",id:"#medium-link",url:"https://medium.com/@guaiamum"},{name:"linkedin",id:"#linkedin-link",url:"https://www.linkedin.com/in/cainã-brazil-586379114/"}]},skills:[{title:"JS",description:"4 years. Web and mobile development"},{title:"NodeJS",description:"Having an entire stack with JavaScript is indeed awesome!"},{title:"React JS",description:"2 years. Enterprise apps, exploring SSR and various other techniques for building fast, accessible and beautiful applications"},{title:"React Native",description:"React Native: 1 month. Simple apps for experimenting"},{title:"C#",description:"3 years. Game scripts and Web development, Api's, etc..."},{title:".NET",description:"2 years. Web development, mainly with E.R.P.'s"},{title:"Xamarin",description:"Xamarin: 1 month. Maintenance in app developed for a big company"},{title:"REST API's",description:"1 year. Created and maintained some REST API's for mobile app comsumption"},{title:"PHP",description:"1 month. Web development in a start-up company"},{title:"Yii",description:"1 month. Web development in a start-up company"},{title:"SQL",description:"3 years. Mainly worked with SQLServer Management studio, and a little with PhpMyAdmin."}],skillsWanted:[{title:"Python",description:'Python: seems like a "do it all" simple programming language, with lots of libraries'},{title:"Security",description:"Networking and security"},{title:"Loading",description:"I want to continue learning about everything!"}],jobs:[{company:"Aubay",title:"Full-Stack developer",dateBegin:"May 2018",dateEnd:"ongoing",location:"Porto, Portugal",description:"Helped maintain a massive C# ASP.NET and Oracle project.",tasks:["Back-end development"]},{company:"Open System",title:"Software development internship",dateBegin:"Jun 2017",dateEnd:"Feb 2018",location:"Salvador, BA",description:"Developed great solutions to clients, and to keep and raise the name of a company that has more than 25 years in the market providing integrated mobile solutions for big retail companies.",tasks:["Modeling the database using SQL Server and Code-first Migrations","ASP.NET MVC development, multi-language and multi-layer architecture","Front-end design using various plugins in JavaScript, CSS and Bootstrap, etc","Developed WebAPI to provide data to mobile devices connected and receive information from other APIs","Full-stack development for mobile devices (android) using Xamarin"]},{company:"Viva inovação",title:"Web development internship",dateBegin:"Mar 2017",dateEnd:"Jun 2017",location:"Salvador, BA",description:"Viva Inovação is a startup company that develops technology solutions focused on increasing productivity.",tasks:["Learned basics MVC architecture and front-end developing using Razor, jQuery, Bootstrap, etc","Back-end development using C# with ASP.NET and PHP with Yii framework","Talked directly to customers and provided support","Managed deployments and maintenance on server applicatications"]},{company:"Ufba",title:"Game development internship",dateBegin:"Mar 2016",dateEnd:"Mar 2017",location:"Salvador, BA",description:"Multi-subject Federal University project",tasks:["From ground zero made an entire virtual world of my University Campus, including terrain, buildings, streets and main architecture characteristics","Participants from different areas of knowledge, like: arts, architecture, computer science","Used Sketchup 3D to convert the work done by architecture students to models that could be used in the Unity 3D platform","Used terrain plugins to create roads and adapt the terrain imported from the city database to the new building that were being put 'on top of it'","Developed my C# skills with scripts to control the user inputs and animations around the Campus"]}],schools:[{title:"System's Engineering exchange graduation",name:"ISEP - Instituto Politécnico do Porto",dateBegin:"fev 2018",dateEnd:"ongoing",location:"Porto, Portugal"},{title:"Computer Engineering ongoing graduation",name:"UFBA - Unversidade Federal da Bahia",dateBegin:"jan 2015",dateEnd:"ongoing",location:"Salvador, BA"},{title:"Architecture and Urbanism Incomplete graduation",name:"UFBA - Unversidade Federal da Bahia",dateBegin:"jan 2014",dateEnd:"dez 2014",location:"Salvador, BA"},{title:"English School for international students",name:"ILSC",dateBegin:"fev 2012",dateEnd:"nov 2012",location:"San Francisco, CA"}]}),document.getElementById("root"))})(),(()=>{"use strict";var e=n(892),t=n.n(e),r=n(760),i=n.n(r),o=n(311),a=n.n(o),l=n(192),s=n.n(l),u=n(60),c=n.n(u),_=n(865),d=n.n(_),p=n(779),f={};f.styleTagTransform=d(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=c(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals})()})();