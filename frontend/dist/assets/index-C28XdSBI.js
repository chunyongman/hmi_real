(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=e(l);fetch(l.href,r)}})();function cr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var n2={exports:{}},al={},t2={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ni=Symbol.for("react.element"),fr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),mr=Symbol.for("react.strict_mode"),yr=Symbol.for("react.profiler"),zr=Symbol.for("react.provider"),Mr=Symbol.for("react.context"),xr=Symbol.for("react.forward_ref"),kr=Symbol.for("react.suspense"),vr=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),$3=Symbol.iterator;function _r(n){return n===null||typeof n!="object"?null:(n=$3&&n[$3]||n["@@iterator"],typeof n=="function"?n:null)}var e2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i2=Object.assign,l2={};function he(n,t,e){this.props=n,this.context=t,this.refs=l2,this.updater=e||e2}he.prototype.isReactComponent={};he.prototype.setState=function(n,t){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,t,"setState")};he.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function r2(){}r2.prototype=he.prototype;function X5(n,t,e){this.props=n,this.context=t,this.refs=l2,this.updater=e||e2}var Q5=X5.prototype=new r2;Q5.constructor=X5;i2(Q5,he.prototype);Q5.isPureReactComponent=!0;var W3=Array.isArray,a2=Object.prototype.hasOwnProperty,K5={current:null},o2={key:!0,ref:!0,__self:!0,__source:!0};function s2(n,t,e){var i,l={},r=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(r=""+t.key),t)a2.call(t,i)&&!o2.hasOwnProperty(i)&&(l[i]=t[i]);var s=arguments.length-2;if(s===1)l.children=e;else if(1<s){for(var d=Array(s),u=0;u<s;u++)d[u]=arguments[u+2];l.children=d}if(n&&n.defaultProps)for(i in s=n.defaultProps,s)l[i]===void 0&&(l[i]=s[i]);return{$$typeof:ni,type:n,key:r,ref:o,props:l,_owner:K5.current}}function jr(n,t){return{$$typeof:ni,type:n.type,key:t,ref:n.ref,props:n.props,_owner:n._owner}}function G5(n){return typeof n=="object"&&n!==null&&n.$$typeof===ni}function Sr(n){var t={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(e){return t[e]})}var U3=/\/+/g;function jl(n,t){return typeof n=="object"&&n!==null&&n.key!=null?Sr(""+n.key):t.toString(36)}function _i(n,t,e,i,l){var r=typeof n;(r==="undefined"||r==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ni:case fr:o=!0}}if(o)return o=n,l=l(o),n=i===""?"."+jl(o,0):i,W3(l)?(e="",n!=null&&(e=n.replace(U3,"$&/")+"/"),_i(l,t,e,"",function(u){return u})):l!=null&&(G5(l)&&(l=jr(l,e+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(U3,"$&/")+"/")+n)),t.push(l)),1;if(o=0,i=i===""?".":i+":",W3(n))for(var s=0;s<n.length;s++){r=n[s];var d=i+jl(r,s);o+=_i(r,t,e,d,l)}else if(d=_r(n),typeof d=="function")for(n=d.call(n),s=0;!(r=n.next()).done;)r=r.value,d=i+jl(r,s++),o+=_i(r,t,e,d,l);else if(r==="object")throw t=String(n),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function oi(n,t,e){if(n==null)return n;var i=[],l=0;return _i(n,i,"","",function(r){return t.call(e,r,l++)}),i}function Nr(n){if(n._status===-1){var t=n._result;t=t(),t.then(function(e){(n._status===0||n._status===-1)&&(n._status=1,n._result=e)},function(e){(n._status===0||n._status===-1)&&(n._status=2,n._result=e)}),n._status===-1&&(n._status=0,n._result=t)}if(n._status===1)return n._result.default;throw n._result}var un={current:null},ji={transition:null},Ir={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:ji,ReactCurrentOwner:K5};function d2(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:oi,forEach:function(n,t,e){oi(n,function(){t.apply(this,arguments)},e)},count:function(n){var t=0;return oi(n,function(){t++}),t},toArray:function(n){return oi(n,function(t){return t})||[]},only:function(n){if(!G5(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};T.Component=he;T.Fragment=gr;T.Profiler=yr;T.PureComponent=X5;T.StrictMode=mr;T.Suspense=kr;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ir;T.act=d2;T.cloneElement=function(n,t,e){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=i2({},n.props),l=n.key,r=n.ref,o=n._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,o=K5.current),t.key!==void 0&&(l=""+t.key),n.type&&n.type.defaultProps)var s=n.type.defaultProps;for(d in t)a2.call(t,d)&&!o2.hasOwnProperty(d)&&(i[d]=t[d]===void 0&&s!==void 0?s[d]:t[d])}var d=arguments.length-2;if(d===1)i.children=e;else if(1<d){s=Array(d);for(var u=0;u<d;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:ni,type:n.type,key:l,ref:r,props:i,_owner:o}};T.createContext=function(n){return n={$$typeof:Mr,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:zr,_context:n},n.Consumer=n};T.createElement=s2;T.createFactory=function(n){var t=s2.bind(null,n);return t.type=n,t};T.createRef=function(){return{current:null}};T.forwardRef=function(n){return{$$typeof:xr,render:n}};T.isValidElement=G5;T.lazy=function(n){return{$$typeof:wr,_payload:{_status:-1,_result:n},_init:Nr}};T.memo=function(n,t){return{$$typeof:vr,type:n,compare:t===void 0?null:t}};T.startTransition=function(n){var t=ji.transition;ji.transition={};try{n()}finally{ji.transition=t}};T.unstable_act=d2;T.useCallback=function(n,t){return un.current.useCallback(n,t)};T.useContext=function(n){return un.current.useContext(n)};T.useDebugValue=function(){};T.useDeferredValue=function(n){return un.current.useDeferredValue(n)};T.useEffect=function(n,t){return un.current.useEffect(n,t)};T.useId=function(){return un.current.useId()};T.useImperativeHandle=function(n,t,e){return un.current.useImperativeHandle(n,t,e)};T.useInsertionEffect=function(n,t){return un.current.useInsertionEffect(n,t)};T.useLayoutEffect=function(n,t){return un.current.useLayoutEffect(n,t)};T.useMemo=function(n,t){return un.current.useMemo(n,t)};T.useReducer=function(n,t,e){return un.current.useReducer(n,t,e)};T.useRef=function(n){return un.current.useRef(n)};T.useState=function(n){return un.current.useState(n)};T.useSyncExternalStore=function(n,t,e){return un.current.useSyncExternalStore(n,t,e)};T.useTransition=function(){return un.current.useTransition()};T.version="18.3.1";t2.exports=T;var b=t2.exports;const Cr=cr(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var br=b,Er=Symbol.for("react.element"),Pr=Symbol.for("react.fragment"),Tr=Object.prototype.hasOwnProperty,Lr=br.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fr={key:!0,ref:!0,__self:!0,__source:!0};function p2(n,t,e){var i,l={},r=null,o=null;e!==void 0&&(r=""+e),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)Tr.call(t,i)&&!Fr.hasOwnProperty(i)&&(l[i]=t[i]);if(n&&n.defaultProps)for(i in t=n.defaultProps,t)l[i]===void 0&&(l[i]=t[i]);return{$$typeof:Er,type:n,key:r,ref:o,props:l,_owner:Lr.current}}al.Fragment=Pr;al.jsx=p2;al.jsxs=p2;n2.exports=al;var a=n2.exports,ql={},h2={exports:{}},wn={},u2={exports:{}},c2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function t(S,C){var E=S.length;S.push(C);n:for(;0<E;){var Q=E-1>>>1,q=S[Q];if(0<l(q,C))S[Q]=C,S[E]=q,E=Q;else break n}}function e(S){return S.length===0?null:S[0]}function i(S){if(S.length===0)return null;var C=S[0],E=S.pop();if(E!==C){S[0]=E;n:for(var Q=0,q=S.length,ri=q>>>1;Q<ri;){var wt=2*(Q+1)-1,_l=S[wt],_t=wt+1,ai=S[_t];if(0>l(_l,E))_t<q&&0>l(ai,_l)?(S[Q]=ai,S[_t]=E,Q=_t):(S[Q]=_l,S[wt]=E,Q=wt);else if(_t<q&&0>l(ai,E))S[Q]=ai,S[_t]=E,Q=_t;else break n}}return C}function l(S,C){var E=S.sortIndex-C.sortIndex;return E!==0?E:S.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;n.unstable_now=function(){return r.now()}}else{var o=Date,s=o.now();n.unstable_now=function(){return o.now()-s}}var d=[],u=[],m=1,g=null,f=3,y=!1,k=!1,M=!1,I=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(S){for(var C=e(u);C!==null;){if(C.callback===null)i(u);else if(C.startTime<=S)i(u),C.sortIndex=C.expirationTime,t(d,C);else break;C=e(u)}}function z(S){if(M=!1,c(S),!k)if(e(d)!==null)k=!0,vl(w);else{var C=e(u);C!==null&&wl(z,C.startTime-S)}}function w(S,C){k=!1,M&&(M=!1,h(N),N=-1),y=!0;var E=f;try{for(c(C),g=e(d);g!==null&&(!(g.expirationTime>C)||S&&!V());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,f=g.priorityLevel;var q=Q(g.expirationTime<=C);C=n.unstable_now(),typeof q=="function"?g.callback=q:g===e(d)&&i(d),c(C)}else i(d);g=e(d)}if(g!==null)var ri=!0;else{var wt=e(u);wt!==null&&wl(z,wt.startTime-C),ri=!1}return ri}finally{g=null,f=E,y=!1}}var v=!1,_=null,N=-1,$=5,P=-1;function V(){return!(n.unstable_now()-P<$)}function fe(){if(_!==null){var S=n.unstable_now();P=S;var C=!0;try{C=_(!0,S)}finally{C?ge():(v=!1,_=null)}}else v=!1}var ge;if(typeof p=="function")ge=function(){p(fe)};else if(typeof MessageChannel<"u"){var H3=new MessageChannel,ur=H3.port2;H3.port1.onmessage=fe,ge=function(){ur.postMessage(null)}}else ge=function(){I(fe,0)};function vl(S){_=S,v||(v=!0,ge())}function wl(S,C){N=I(function(){S(n.unstable_now())},C)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(S){S.callback=null},n.unstable_continueExecution=function(){k||y||(k=!0,vl(w))},n.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<S?Math.floor(1e3/S):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return e(d)},n.unstable_next=function(S){switch(f){case 1:case 2:case 3:var C=3;break;default:C=f}var E=f;f=C;try{return S()}finally{f=E}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(S,C){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var E=f;f=S;try{return C()}finally{f=E}},n.unstable_scheduleCallback=function(S,C,E){var Q=n.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?Q+E:Q):E=Q,S){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=E+q,S={id:m++,callback:C,priorityLevel:S,startTime:E,expirationTime:q,sortIndex:-1},E>Q?(S.sortIndex=E,t(u,S),e(d)===null&&S===e(u)&&(M?(h(N),N=-1):M=!0,wl(z,E-Q))):(S.sortIndex=q,t(d,S),k||y||(k=!0,vl(w))),S},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(S){var C=f;return function(){var E=f;f=C;try{return S.apply(this,arguments)}finally{f=E}}}})(c2);u2.exports=c2;var Ar=u2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rr=b,vn=Ar;function x(n){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+n,e=1;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f2=new Set,Re={};function Rt(n,t){le(n,t),le(n+"Capture",t)}function le(n,t){for(Re[n]=t,n=0;n<t.length;n++)f2.add(t[n])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),n5=Object.prototype.hasOwnProperty,Dr=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B3={},V3={};function Or(n){return n5.call(V3,n)?!0:n5.call(B3,n)?!1:Dr.test(n)?V3[n]=!0:(B3[n]=!0,!1)}function Hr(n,t,e,i){if(e!==null&&e.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:e!==null?!e.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $r(n,t,e,i){if(t===null||typeof t>"u"||Hr(n,t,e,i))return!0;if(i)return!1;if(e!==null)switch(e.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function cn(n,t,e,i,l,r,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=e,this.propertyName=n,this.type=t,this.sanitizeURL=r,this.removeEmptyString=o}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){rn[n]=new cn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var t=n[0];rn[t]=new cn(t,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){rn[n]=new cn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){rn[n]=new cn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){rn[n]=new cn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){rn[n]=new cn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){rn[n]=new cn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){rn[n]=new cn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){rn[n]=new cn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Y5=/[\-:]([a-z])/g;function Z5(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var t=n.replace(Y5,Z5);rn[t]=new cn(t,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var t=n.replace(Y5,Z5);rn[t]=new cn(t,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var t=n.replace(Y5,Z5);rn[t]=new cn(t,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){rn[n]=new cn(n,1,!1,n.toLowerCase(),null,!1,!1)});rn.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){rn[n]=new cn(n,1,!1,n.toLowerCase(),null,!0,!0)});function J5(n,t,e,i){var l=rn.hasOwnProperty(t)?rn[t]:null;(l!==null?l.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($r(t,e,l,i)&&(e=null),i||l===null?Or(t)&&(e===null?n.removeAttribute(t):n.setAttribute(t,""+e)):l.mustUseProperty?n[l.propertyName]=e===null?l.type===3?!1:"":e:(t=l.attributeName,i=l.attributeNamespace,e===null?n.removeAttribute(t):(l=l.type,e=l===3||l===4&&e===!0?"":""+e,i?n.setAttributeNS(i,t,e):n.setAttribute(t,e))))}var qn=Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),$t=Symbol.for("react.fragment"),q5=Symbol.for("react.strict_mode"),t5=Symbol.for("react.profiler"),g2=Symbol.for("react.provider"),m2=Symbol.for("react.context"),n3=Symbol.for("react.forward_ref"),e5=Symbol.for("react.suspense"),i5=Symbol.for("react.suspense_list"),t3=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),y2=Symbol.for("react.offscreen"),X3=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=X3&&n[X3]||n["@@iterator"],typeof n=="function"?n:null)}var B=Object.assign,Sl;function _e(n){if(Sl===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+n}var Nl=!1;function Il(n,t){if(!n||Nl)return"";Nl=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var i=u}Reflect.construct(n,[],t)}else{try{t.call()}catch(u){i=u}n.call(t.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),r=i.stack.split(`
`),o=l.length-1,s=r.length-1;1<=o&&0<=s&&l[o]!==r[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==r[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==r[s]){var d=`
`+l[o].replace(" at new "," at ");return n.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",n.displayName)),d}while(1<=o&&0<=s);break}}}finally{Nl=!1,Error.prepareStackTrace=e}return(n=n?n.displayName||n.name:"")?_e(n):""}function Wr(n){switch(n.tag){case 5:return _e(n.type);case 16:return _e("Lazy");case 13:return _e("Suspense");case 19:return _e("SuspenseList");case 0:case 2:case 15:return n=Il(n.type,!1),n;case 11:return n=Il(n.type.render,!1),n;case 1:return n=Il(n.type,!0),n;default:return""}}function l5(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case $t:return"Fragment";case Ht:return"Portal";case t5:return"Profiler";case q5:return"StrictMode";case e5:return"Suspense";case i5:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case m2:return(n.displayName||"Context")+".Consumer";case g2:return(n._context.displayName||"Context")+".Provider";case n3:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case t3:return t=n.displayName||null,t!==null?t:l5(n.type)||"Memo";case lt:t=n._payload,n=n._init;try{return l5(n(t))}catch{}}return null}function Ur(n){var t=n.type;switch(n.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=t.render,n=n.displayName||n.name||"",t.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return l5(t);case 8:return t===q5?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function z2(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Br(n){var t=z2(n)?"checked":"value",e=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),i=""+n[t];if(!n.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var l=e.get,r=e.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){i=""+o,r.call(this,o)}}),Object.defineProperty(n,t,{enumerable:e.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function di(n){n._valueTracker||(n._valueTracker=Br(n))}function M2(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var e=t.getValue(),i="";return n&&(i=z2(n)?n.checked?"true":"false":n.value),n=i,n!==e?(t.setValue(n),!0):!1}function Ai(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function r5(n,t){var e=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??n._wrapperState.initialChecked})}function Q3(n,t){var e=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;e=zt(t.value!=null?t.value:e),n._wrapperState={initialChecked:i,initialValue:e,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function x2(n,t){t=t.checked,t!=null&&J5(n,"checked",t,!1)}function a5(n,t){x2(n,t);var e=zt(t.value),i=t.type;if(e!=null)i==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+e):n.value!==""+e&&(n.value=""+e);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}t.hasOwnProperty("value")?o5(n,t.type,e):t.hasOwnProperty("defaultValue")&&o5(n,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(n.defaultChecked=!!t.defaultChecked)}function K3(n,t,e){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+n._wrapperState.initialValue,e||t===n.value||(n.value=t),n.defaultValue=t}e=n.name,e!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,e!==""&&(n.name=e)}function o5(n,t,e){(t!=="number"||Ai(n.ownerDocument)!==n)&&(e==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+e&&(n.defaultValue=""+e))}var je=Array.isArray;function Jt(n,t,e,i){if(n=n.options,t){t={};for(var l=0;l<e.length;l++)t["$"+e[l]]=!0;for(e=0;e<n.length;e++)l=t.hasOwnProperty("$"+n[e].value),n[e].selected!==l&&(n[e].selected=l),l&&i&&(n[e].defaultSelected=!0)}else{for(e=""+zt(e),t=null,l=0;l<n.length;l++){if(n[l].value===e){n[l].selected=!0,i&&(n[l].defaultSelected=!0);return}t!==null||n[l].disabled||(t=n[l])}t!==null&&(t.selected=!0)}}function s5(n,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function G3(n,t){var e=t.value;if(e==null){if(e=t.children,t=t.defaultValue,e!=null){if(t!=null)throw Error(x(92));if(je(e)){if(1<e.length)throw Error(x(93));e=e[0]}t=e}t==null&&(t=""),e=t}n._wrapperState={initialValue:zt(e)}}function k2(n,t){var e=zt(t.value),i=zt(t.defaultValue);e!=null&&(e=""+e,e!==n.value&&(n.value=e),t.defaultValue==null&&n.defaultValue!==e&&(n.defaultValue=e)),i!=null&&(n.defaultValue=""+i)}function Y3(n){var t=n.textContent;t===n._wrapperState.initialValue&&t!==""&&t!==null&&(n.value=t)}function v2(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function d5(n,t){return n==null||n==="http://www.w3.org/1999/xhtml"?v2(t):n==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pi,w2=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,e,i,l){MSApp.execUnsafeLocalFunction(function(){return n(t,e,i,l)})}:n}(function(n,t){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=t;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pi.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;t.firstChild;)n.appendChild(t.firstChild)}});function De(n,t){if(t){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=t;return}}n.textContent=t}var Ie={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vr=["Webkit","ms","Moz","O"];Object.keys(Ie).forEach(function(n){Vr.forEach(function(t){t=t+n.charAt(0).toUpperCase()+n.substring(1),Ie[t]=Ie[n]})});function _2(n,t,e){return t==null||typeof t=="boolean"||t===""?"":e||typeof t!="number"||t===0||Ie.hasOwnProperty(n)&&Ie[n]?(""+t).trim():t+"px"}function j2(n,t){n=n.style;for(var e in t)if(t.hasOwnProperty(e)){var i=e.indexOf("--")===0,l=_2(e,t[e],i);e==="float"&&(e="cssFloat"),i?n.setProperty(e,l):n[e]=l}}var Xr=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function p5(n,t){if(t){if(Xr[n]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,n));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function h5(n,t){if(n.indexOf("-")===-1)return typeof t.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u5=null;function e3(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var c5=null,qt=null,ne=null;function Z3(n){if(n=ii(n)){if(typeof c5!="function")throw Error(x(280));var t=n.stateNode;t&&(t=hl(t),c5(n.stateNode,n.type,t))}}function S2(n){qt?ne?ne.push(n):ne=[n]:qt=n}function N2(){if(qt){var n=qt,t=ne;if(ne=qt=null,Z3(n),t)for(n=0;n<t.length;n++)Z3(t[n])}}function I2(n,t){return n(t)}function C2(){}var Cl=!1;function b2(n,t,e){if(Cl)return n(t,e);Cl=!0;try{return I2(n,t,e)}finally{Cl=!1,(qt!==null||ne!==null)&&(C2(),N2())}}function Oe(n,t){var e=n.stateNode;if(e===null)return null;var i=hl(e);if(i===null)return null;e=i[t];n:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(x(231,t,typeof e));return e}var f5=!1;if(Gn)try{var ye={};Object.defineProperty(ye,"passive",{get:function(){f5=!0}}),window.addEventListener("test",ye,ye),window.removeEventListener("test",ye,ye)}catch{f5=!1}function Qr(n,t,e,i,l,r,o,s,d){var u=Array.prototype.slice.call(arguments,3);try{t.apply(e,u)}catch(m){this.onError(m)}}var Ce=!1,Ri=null,Di=!1,g5=null,Kr={onError:function(n){Ce=!0,Ri=n}};function Gr(n,t,e,i,l,r,o,s,d){Ce=!1,Ri=null,Qr.apply(Kr,arguments)}function Yr(n,t,e,i,l,r,o,s,d){if(Gr.apply(this,arguments),Ce){if(Ce){var u=Ri;Ce=!1,Ri=null}else throw Error(x(198));Di||(Di=!0,g5=u)}}function Dt(n){var t=n,e=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,t.flags&4098&&(e=t.return),n=t.return;while(n)}return t.tag===3?e:null}function E2(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function J3(n){if(Dt(n)!==n)throw Error(x(188))}function Zr(n){var t=n.alternate;if(!t){if(t=Dt(n),t===null)throw Error(x(188));return t!==n?null:n}for(var e=n,i=t;;){var l=e.return;if(l===null)break;var r=l.alternate;if(r===null){if(i=l.return,i!==null){e=i;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===e)return J3(l),n;if(r===i)return J3(l),t;r=r.sibling}throw Error(x(188))}if(e.return!==i.return)e=l,i=r;else{for(var o=!1,s=l.child;s;){if(s===e){o=!0,e=l,i=r;break}if(s===i){o=!0,i=l,e=r;break}s=s.sibling}if(!o){for(s=r.child;s;){if(s===e){o=!0,e=r,i=l;break}if(s===i){o=!0,i=r,e=l;break}s=s.sibling}if(!o)throw Error(x(189))}}if(e.alternate!==i)throw Error(x(190))}if(e.tag!==3)throw Error(x(188));return e.stateNode.current===e?n:t}function P2(n){return n=Zr(n),n!==null?T2(n):null}function T2(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var t=T2(n);if(t!==null)return t;n=n.sibling}return null}var L2=vn.unstable_scheduleCallback,q3=vn.unstable_cancelCallback,Jr=vn.unstable_shouldYield,qr=vn.unstable_requestPaint,K=vn.unstable_now,n0=vn.unstable_getCurrentPriorityLevel,i3=vn.unstable_ImmediatePriority,F2=vn.unstable_UserBlockingPriority,Oi=vn.unstable_NormalPriority,t0=vn.unstable_LowPriority,A2=vn.unstable_IdlePriority,ol=null,Wn=null;function e0(n){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(ol,n,void 0,(n.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:r0,i0=Math.log,l0=Math.LN2;function r0(n){return n>>>=0,n===0?32:31-(i0(n)/l0|0)|0}var hi=64,ui=4194304;function Se(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Hi(n,t){var e=n.pendingLanes;if(e===0)return 0;var i=0,l=n.suspendedLanes,r=n.pingedLanes,o=e&268435455;if(o!==0){var s=o&~l;s!==0?i=Se(s):(r&=o,r!==0&&(i=Se(r)))}else o=e&~l,o!==0?i=Se(o):r!==0&&(i=Se(r));if(i===0)return 0;if(t!==0&&t!==i&&!(t&l)&&(l=i&-i,r=t&-t,l>=r||l===16&&(r&4194240)!==0))return t;if(i&4&&(i|=e&16),t=n.entangledLanes,t!==0)for(n=n.entanglements,t&=i;0<t;)e=31-Fn(t),l=1<<e,i|=n[e],t&=~l;return i}function a0(n,t){switch(n){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o0(n,t){for(var e=n.suspendedLanes,i=n.pingedLanes,l=n.expirationTimes,r=n.pendingLanes;0<r;){var o=31-Fn(r),s=1<<o,d=l[o];d===-1?(!(s&e)||s&i)&&(l[o]=a0(s,t)):d<=t&&(n.expiredLanes|=s),r&=~s}}function m5(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function R2(){var n=hi;return hi<<=1,!(hi&4194240)&&(hi=64),n}function bl(n){for(var t=[],e=0;31>e;e++)t.push(n);return t}function ti(n,t,e){n.pendingLanes|=t,t!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,t=31-Fn(t),n[t]=e}function s0(n,t){var e=n.pendingLanes&~t;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=t,n.mutableReadLanes&=t,n.entangledLanes&=t,t=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<e;){var l=31-Fn(e),r=1<<l;t[l]=0,i[l]=-1,n[l]=-1,e&=~r}}function l3(n,t){var e=n.entangledLanes|=t;for(n=n.entanglements;e;){var i=31-Fn(e),l=1<<i;l&t|n[i]&t&&(n[i]|=t),e&=~l}}var A=0;function D2(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var O2,r3,H2,$2,W2,y5=!1,ci=[],pt=null,ht=null,ut=null,He=new Map,$e=new Map,at=[],d0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function n1(n,t){switch(n){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":He.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$e.delete(t.pointerId)}}function ze(n,t,e,i,l,r){return n===null||n.nativeEvent!==r?(n={blockedOn:t,domEventName:e,eventSystemFlags:i,nativeEvent:r,targetContainers:[l]},t!==null&&(t=ii(t),t!==null&&r3(t)),n):(n.eventSystemFlags|=i,t=n.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),n)}function p0(n,t,e,i,l){switch(t){case"focusin":return pt=ze(pt,n,t,e,i,l),!0;case"dragenter":return ht=ze(ht,n,t,e,i,l),!0;case"mouseover":return ut=ze(ut,n,t,e,i,l),!0;case"pointerover":var r=l.pointerId;return He.set(r,ze(He.get(r)||null,n,t,e,i,l)),!0;case"gotpointercapture":return r=l.pointerId,$e.set(r,ze($e.get(r)||null,n,t,e,i,l)),!0}return!1}function U2(n){var t=Nt(n.target);if(t!==null){var e=Dt(t);if(e!==null){if(t=e.tag,t===13){if(t=E2(e),t!==null){n.blockedOn=t,W2(n.priority,function(){H2(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Si(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var e=z5(n.domEventName,n.eventSystemFlags,t[0],n.nativeEvent);if(e===null){e=n.nativeEvent;var i=new e.constructor(e.type,e);u5=i,e.target.dispatchEvent(i),u5=null}else return t=ii(e),t!==null&&r3(t),n.blockedOn=e,!1;t.shift()}return!0}function t1(n,t,e){Si(n)&&e.delete(t)}function h0(){y5=!1,pt!==null&&Si(pt)&&(pt=null),ht!==null&&Si(ht)&&(ht=null),ut!==null&&Si(ut)&&(ut=null),He.forEach(t1),$e.forEach(t1)}function Me(n,t){n.blockedOn===t&&(n.blockedOn=null,y5||(y5=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,h0)))}function We(n){function t(l){return Me(l,n)}if(0<ci.length){Me(ci[0],n);for(var e=1;e<ci.length;e++){var i=ci[e];i.blockedOn===n&&(i.blockedOn=null)}}for(pt!==null&&Me(pt,n),ht!==null&&Me(ht,n),ut!==null&&Me(ut,n),He.forEach(t),$e.forEach(t),e=0;e<at.length;e++)i=at[e],i.blockedOn===n&&(i.blockedOn=null);for(;0<at.length&&(e=at[0],e.blockedOn===null);)U2(e),e.blockedOn===null&&at.shift()}var te=qn.ReactCurrentBatchConfig,$i=!0;function u0(n,t,e,i){var l=A,r=te.transition;te.transition=null;try{A=1,a3(n,t,e,i)}finally{A=l,te.transition=r}}function c0(n,t,e,i){var l=A,r=te.transition;te.transition=null;try{A=4,a3(n,t,e,i)}finally{A=l,te.transition=r}}function a3(n,t,e,i){if($i){var l=z5(n,t,e,i);if(l===null)Hl(n,t,i,Wi,e),n1(n,i);else if(p0(l,n,t,e,i))i.stopPropagation();else if(n1(n,i),t&4&&-1<d0.indexOf(n)){for(;l!==null;){var r=ii(l);if(r!==null&&O2(r),r=z5(n,t,e,i),r===null&&Hl(n,t,i,Wi,e),r===l)break;l=r}l!==null&&i.stopPropagation()}else Hl(n,t,i,null,e)}}var Wi=null;function z5(n,t,e,i){if(Wi=null,n=e3(i),n=Nt(n),n!==null)if(t=Dt(n),t===null)n=null;else if(e=t.tag,e===13){if(n=E2(t),n!==null)return n;n=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null);return Wi=n,null}function B2(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n0()){case i3:return 1;case F2:return 4;case Oi:case t0:return 16;case A2:return 536870912;default:return 16}default:return 16}}var st=null,o3=null,Ni=null;function V2(){if(Ni)return Ni;var n,t=o3,e=t.length,i,l="value"in st?st.value:st.textContent,r=l.length;for(n=0;n<e&&t[n]===l[n];n++);var o=e-n;for(i=1;i<=o&&t[e-i]===l[r-i];i++);return Ni=l.slice(n,1<i?1-i:void 0)}function Ii(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function fi(){return!0}function e1(){return!1}function _n(n){function t(e,i,l,r,o){this._reactName=e,this._targetInst=l,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var s in n)n.hasOwnProperty(s)&&(e=n[s],this[s]=e?e(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?fi:e1,this.isPropagationStopped=e1,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var ue={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},s3=_n(ue),ei=B({},ue,{view:0,detail:0}),f0=_n(ei),El,Pl,xe,sl=B({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:d3,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xe&&(xe&&n.type==="mousemove"?(El=n.screenX-xe.screenX,Pl=n.screenY-xe.screenY):Pl=El=0,xe=n),El)},movementY:function(n){return"movementY"in n?n.movementY:Pl}}),i1=_n(sl),g0=B({},sl,{dataTransfer:0}),m0=_n(g0),y0=B({},ei,{relatedTarget:0}),Tl=_n(y0),z0=B({},ue,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=_n(z0),x0=B({},ue,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),k0=_n(x0),v0=B({},ue,{data:0}),l1=_n(v0),w0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=j0[n])?!!t[n]:!1}function d3(){return S0}var N0=B({},ei,{key:function(n){if(n.key){var t=w0[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=Ii(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:d3,charCode:function(n){return n.type==="keypress"?Ii(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ii(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),I0=_n(N0),C0=B({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),r1=_n(C0),b0=B({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:d3}),E0=_n(b0),P0=B({},ue,{propertyName:0,elapsedTime:0,pseudoElement:0}),T0=_n(P0),L0=B({},sl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),F0=_n(L0),A0=[9,13,27,32],p3=Gn&&"CompositionEvent"in window,be=null;Gn&&"documentMode"in document&&(be=document.documentMode);var R0=Gn&&"TextEvent"in window&&!be,X2=Gn&&(!p3||be&&8<be&&11>=be),a1=" ",o1=!1;function Q2(n,t){switch(n){case"keyup":return A0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K2(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Wt=!1;function D0(n,t){switch(n){case"compositionend":return K2(t);case"keypress":return t.which!==32?null:(o1=!0,a1);case"textInput":return n=t.data,n===a1&&o1?null:n;default:return null}}function O0(n,t){if(Wt)return n==="compositionend"||!p3&&Q2(n,t)?(n=V2(),Ni=o3=st=null,Wt=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return X2&&t.locale!=="ko"?null:t.data;default:return null}}var H0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function s1(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!H0[n.type]:t==="textarea"}function G2(n,t,e,i){S2(i),t=Ui(t,"onChange"),0<t.length&&(e=new s3("onChange","change",null,e,i),n.push({event:e,listeners:t}))}var Ee=null,Ue=null;function $0(n){a4(n,0)}function dl(n){var t=Vt(n);if(M2(t))return n}function W0(n,t){if(n==="change")return t}var Y2=!1;if(Gn){var Ll;if(Gn){var Fl="oninput"in document;if(!Fl){var d1=document.createElement("div");d1.setAttribute("oninput","return;"),Fl=typeof d1.oninput=="function"}Ll=Fl}else Ll=!1;Y2=Ll&&(!document.documentMode||9<document.documentMode)}function p1(){Ee&&(Ee.detachEvent("onpropertychange",Z2),Ue=Ee=null)}function Z2(n){if(n.propertyName==="value"&&dl(Ue)){var t=[];G2(t,Ue,n,e3(n)),b2($0,t)}}function U0(n,t,e){n==="focusin"?(p1(),Ee=t,Ue=e,Ee.attachEvent("onpropertychange",Z2)):n==="focusout"&&p1()}function B0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return dl(Ue)}function V0(n,t){if(n==="click")return dl(t)}function X0(n,t){if(n==="input"||n==="change")return dl(t)}function Q0(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var Rn=typeof Object.is=="function"?Object.is:Q0;function Be(n,t){if(Rn(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var e=Object.keys(n),i=Object.keys(t);if(e.length!==i.length)return!1;for(i=0;i<e.length;i++){var l=e[i];if(!n5.call(t,l)||!Rn(n[l],t[l]))return!1}return!0}function h1(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function u1(n,t){var e=h1(n);n=0;for(var i;e;){if(e.nodeType===3){if(i=n+e.textContent.length,n<=t&&i>=t)return{node:e,offset:t-n};n=i}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=h1(e)}}function J2(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?J2(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function q2(){for(var n=window,t=Ai();t instanceof n.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)n=t.contentWindow;else break;t=Ai(n.document)}return t}function h3(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}function K0(n){var t=q2(),e=n.focusedElem,i=n.selectionRange;if(t!==e&&e&&e.ownerDocument&&J2(e.ownerDocument.documentElement,e)){if(i!==null&&h3(e)){if(t=i.start,n=i.end,n===void 0&&(n=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(n,e.value.length);else if(n=(t=e.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var l=e.textContent.length,r=Math.min(i.start,l);i=i.end===void 0?r:Math.min(i.end,l),!n.extend&&r>i&&(l=i,i=r,r=l),l=u1(e,r);var o=u1(e,i);l&&o&&(n.rangeCount!==1||n.anchorNode!==l.node||n.anchorOffset!==l.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),n.removeAllRanges(),r>i?(n.addRange(t),n.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),n.addRange(t)))}}for(t=[],n=e;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)n=t[e],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var G0=Gn&&"documentMode"in document&&11>=document.documentMode,Ut=null,M5=null,Pe=null,x5=!1;function c1(n,t,e){var i=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;x5||Ut==null||Ut!==Ai(i)||(i=Ut,"selectionStart"in i&&h3(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pe&&Be(Pe,i)||(Pe=i,i=Ui(M5,"onSelect"),0<i.length&&(t=new s3("onSelect","select",null,t,e),n.push({event:t,listeners:i}),t.target=Ut)))}function gi(n,t){var e={};return e[n.toLowerCase()]=t.toLowerCase(),e["Webkit"+n]="webkit"+t,e["Moz"+n]="moz"+t,e}var Bt={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},Al={},n4={};Gn&&(n4=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function pl(n){if(Al[n])return Al[n];if(!Bt[n])return n;var t=Bt[n],e;for(e in t)if(t.hasOwnProperty(e)&&e in n4)return Al[n]=t[e];return n}var t4=pl("animationend"),e4=pl("animationiteration"),i4=pl("animationstart"),l4=pl("transitionend"),r4=new Map,f1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(n,t){r4.set(n,t),Rt(t,[n])}for(var Rl=0;Rl<f1.length;Rl++){var Dl=f1[Rl],Y0=Dl.toLowerCase(),Z0=Dl[0].toUpperCase()+Dl.slice(1);xt(Y0,"on"+Z0)}xt(t4,"onAnimationEnd");xt(e4,"onAnimationIteration");xt(i4,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(l4,"onTransitionEnd");le("onMouseEnter",["mouseout","mouseover"]);le("onMouseLeave",["mouseout","mouseover"]);le("onPointerEnter",["pointerout","pointerover"]);le("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ne="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ne));function g1(n,t,e){var i=n.type||"unknown-event";n.currentTarget=e,Yr(i,t,void 0,n),n.currentTarget=null}function a4(n,t){t=(t&4)!==0;for(var e=0;e<n.length;e++){var i=n[e],l=i.event;i=i.listeners;n:{var r=void 0;if(t)for(var o=i.length-1;0<=o;o--){var s=i[o],d=s.instance,u=s.currentTarget;if(s=s.listener,d!==r&&l.isPropagationStopped())break n;g1(l,s,u),r=d}else for(o=0;o<i.length;o++){if(s=i[o],d=s.instance,u=s.currentTarget,s=s.listener,d!==r&&l.isPropagationStopped())break n;g1(l,s,u),r=d}}}if(Di)throw n=g5,Di=!1,g5=null,n}function D(n,t){var e=t[j5];e===void 0&&(e=t[j5]=new Set);var i=n+"__bubble";e.has(i)||(o4(t,n,2,!1),e.add(i))}function Ol(n,t,e){var i=0;t&&(i|=4),o4(e,n,i,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Ve(n){if(!n[mi]){n[mi]=!0,f2.forEach(function(e){e!=="selectionchange"&&(J0.has(e)||Ol(e,!1,n),Ol(e,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[mi]||(t[mi]=!0,Ol("selectionchange",!1,t))}}function o4(n,t,e,i){switch(B2(t)){case 1:var l=u0;break;case 4:l=c0;break;default:l=a3}e=l.bind(null,t,e,n),l=void 0,!f5||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?n.addEventListener(t,e,{capture:!0,passive:l}):n.addEventListener(t,e,!0):l!==void 0?n.addEventListener(t,e,{passive:l}):n.addEventListener(t,e,!1)}function Hl(n,t,e,i,l){var r=i;if(!(t&1)&&!(t&2)&&i!==null)n:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=i.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Nt(s),o===null)return;if(d=o.tag,d===5||d===6){i=r=o;continue n}s=s.parentNode}}i=i.return}b2(function(){var u=r,m=e3(e),g=[];n:{var f=r4.get(n);if(f!==void 0){var y=s3,k=n;switch(n){case"keypress":if(Ii(e)===0)break n;case"keydown":case"keyup":y=I0;break;case"focusin":k="focus",y=Tl;break;case"focusout":k="blur",y=Tl;break;case"beforeblur":case"afterblur":y=Tl;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=i1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=E0;break;case t4:case e4:case i4:y=M0;break;case l4:y=T0;break;case"scroll":y=f0;break;case"wheel":y=F0;break;case"copy":case"cut":case"paste":y=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=r1}var M=(t&4)!==0,I=!M&&n==="scroll",h=M?f!==null?f+"Capture":null:f;M=[];for(var p=u,c;p!==null;){c=p;var z=c.stateNode;if(c.tag===5&&z!==null&&(c=z,h!==null&&(z=Oe(p,h),z!=null&&M.push(Xe(p,z,c)))),I)break;p=p.return}0<M.length&&(f=new y(f,k,null,e,m),g.push({event:f,listeners:M}))}}if(!(t&7)){n:{if(f=n==="mouseover"||n==="pointerover",y=n==="mouseout"||n==="pointerout",f&&e!==u5&&(k=e.relatedTarget||e.fromElement)&&(Nt(k)||k[Yn]))break n;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(k=e.relatedTarget||e.toElement,y=u,k=k?Nt(k):null,k!==null&&(I=Dt(k),k!==I||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=u),y!==k)){if(M=i1,z="onMouseLeave",h="onMouseEnter",p="mouse",(n==="pointerout"||n==="pointerover")&&(M=r1,z="onPointerLeave",h="onPointerEnter",p="pointer"),I=y==null?f:Vt(y),c=k==null?f:Vt(k),f=new M(z,p+"leave",y,e,m),f.target=I,f.relatedTarget=c,z=null,Nt(m)===u&&(M=new M(h,p+"enter",k,e,m),M.target=c,M.relatedTarget=I,z=M),I=z,y&&k)t:{for(M=y,h=k,p=0,c=M;c;c=Ot(c))p++;for(c=0,z=h;z;z=Ot(z))c++;for(;0<p-c;)M=Ot(M),p--;for(;0<c-p;)h=Ot(h),c--;for(;p--;){if(M===h||h!==null&&M===h.alternate)break t;M=Ot(M),h=Ot(h)}M=null}else M=null;y!==null&&m1(g,f,y,M,!1),k!==null&&I!==null&&m1(g,I,k,M,!0)}}n:{if(f=u?Vt(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var w=W0;else if(s1(f))if(Y2)w=X0;else{w=B0;var v=U0}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=V0);if(w&&(w=w(n,u))){G2(g,w,e,m);break n}v&&v(n,f,u),n==="focusout"&&(v=f._wrapperState)&&v.controlled&&f.type==="number"&&o5(f,"number",f.value)}switch(v=u?Vt(u):window,n){case"focusin":(s1(v)||v.contentEditable==="true")&&(Ut=v,M5=u,Pe=null);break;case"focusout":Pe=M5=Ut=null;break;case"mousedown":x5=!0;break;case"contextmenu":case"mouseup":case"dragend":x5=!1,c1(g,e,m);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":c1(g,e,m)}var _;if(p3)n:{switch(n){case"compositionstart":var N="onCompositionStart";break n;case"compositionend":N="onCompositionEnd";break n;case"compositionupdate":N="onCompositionUpdate";break n}N=void 0}else Wt?Q2(n,e)&&(N="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(N="onCompositionStart");N&&(X2&&e.locale!=="ko"&&(Wt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Wt&&(_=V2()):(st=m,o3="value"in st?st.value:st.textContent,Wt=!0)),v=Ui(u,N),0<v.length&&(N=new l1(N,n,null,e,m),g.push({event:N,listeners:v}),_?N.data=_:(_=K2(e),_!==null&&(N.data=_)))),(_=R0?D0(n,e):O0(n,e))&&(u=Ui(u,"onBeforeInput"),0<u.length&&(m=new l1("onBeforeInput","beforeinput",null,e,m),g.push({event:m,listeners:u}),m.data=_))}a4(g,t)})}function Xe(n,t,e){return{instance:n,listener:t,currentTarget:e}}function Ui(n,t){for(var e=t+"Capture",i=[];n!==null;){var l=n,r=l.stateNode;l.tag===5&&r!==null&&(l=r,r=Oe(n,e),r!=null&&i.unshift(Xe(n,r,l)),r=Oe(n,t),r!=null&&i.push(Xe(n,r,l))),n=n.return}return i}function Ot(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function m1(n,t,e,i,l){for(var r=t._reactName,o=[];e!==null&&e!==i;){var s=e,d=s.alternate,u=s.stateNode;if(d!==null&&d===i)break;s.tag===5&&u!==null&&(s=u,l?(d=Oe(e,r),d!=null&&o.unshift(Xe(e,d,s))):l||(d=Oe(e,r),d!=null&&o.push(Xe(e,d,s)))),e=e.return}o.length!==0&&n.push({event:t,listeners:o})}var q0=/\r\n?/g,na=/\u0000|\uFFFD/g;function y1(n){return(typeof n=="string"?n:""+n).replace(q0,`
`).replace(na,"")}function yi(n,t,e){if(t=y1(t),y1(n)!==t&&e)throw Error(x(425))}function Bi(){}var k5=null,v5=null;function w5(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _5=typeof setTimeout=="function"?setTimeout:void 0,ta=typeof clearTimeout=="function"?clearTimeout:void 0,z1=typeof Promise=="function"?Promise:void 0,ea=typeof queueMicrotask=="function"?queueMicrotask:typeof z1<"u"?function(n){return z1.resolve(null).then(n).catch(ia)}:_5;function ia(n){setTimeout(function(){throw n})}function $l(n,t){var e=t,i=0;do{var l=e.nextSibling;if(n.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(i===0){n.removeChild(l),We(t);return}i--}else e!=="$"&&e!=="$?"&&e!=="$!"||i++;e=l}while(e);We(t)}function ct(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return n}function M1(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"){if(t===0)return n;t--}else e==="/$"&&t++}n=n.previousSibling}return null}var ce=Math.random().toString(36).slice(2),$n="__reactFiber$"+ce,Qe="__reactProps$"+ce,Yn="__reactContainer$"+ce,j5="__reactEvents$"+ce,la="__reactListeners$"+ce,ra="__reactHandles$"+ce;function Nt(n){var t=n[$n];if(t)return t;for(var e=n.parentNode;e;){if(t=e[Yn]||e[$n]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(n=M1(n);n!==null;){if(e=n[$n])return e;n=M1(n)}return t}n=e,e=n.parentNode}return null}function ii(n){return n=n[$n]||n[Yn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vt(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(x(33))}function hl(n){return n[Qe]||null}var S5=[],Xt=-1;function kt(n){return{current:n}}function O(n){0>Xt||(n.current=S5[Xt],S5[Xt]=null,Xt--)}function R(n,t){Xt++,S5[Xt]=n.current,n.current=t}var Mt={},dn=kt(Mt),mn=kt(!1),Pt=Mt;function re(n,t){var e=n.type.contextTypes;if(!e)return Mt;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var l={},r;for(r in e)l[r]=t[r];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=t,n.__reactInternalMemoizedMaskedChildContext=l),l}function yn(n){return n=n.childContextTypes,n!=null}function Vi(){O(mn),O(dn)}function x1(n,t,e){if(dn.current!==Mt)throw Error(x(168));R(dn,t),R(mn,e)}function s4(n,t,e){var i=n.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return e;i=i.getChildContext();for(var l in i)if(!(l in t))throw Error(x(108,Ur(n)||"Unknown",l));return B({},e,i)}function Xi(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mt,Pt=dn.current,R(dn,n),R(mn,mn.current),!0}function k1(n,t,e){var i=n.stateNode;if(!i)throw Error(x(169));e?(n=s4(n,t,Pt),i.__reactInternalMemoizedMergedChildContext=n,O(mn),O(dn),R(dn,n)):O(mn),R(mn,e)}var Vn=null,ul=!1,Wl=!1;function d4(n){Vn===null?Vn=[n]:Vn.push(n)}function aa(n){ul=!0,d4(n)}function vt(){if(!Wl&&Vn!==null){Wl=!0;var n=0,t=A;try{var e=Vn;for(A=1;n<e.length;n++){var i=e[n];do i=i(!0);while(i!==null)}Vn=null,ul=!1}catch(l){throw Vn!==null&&(Vn=Vn.slice(n+1)),L2(i3,vt),l}finally{A=t,Wl=!1}}return null}var Qt=[],Kt=0,Qi=null,Ki=0,jn=[],Sn=0,Tt=null,Xn=1,Qn="";function jt(n,t){Qt[Kt++]=Ki,Qt[Kt++]=Qi,Qi=n,Ki=t}function p4(n,t,e){jn[Sn++]=Xn,jn[Sn++]=Qn,jn[Sn++]=Tt,Tt=n;var i=Xn;n=Qn;var l=32-Fn(i)-1;i&=~(1<<l),e+=1;var r=32-Fn(t)+l;if(30<r){var o=l-l%5;r=(i&(1<<o)-1).toString(32),i>>=o,l-=o,Xn=1<<32-Fn(t)+l|e<<l|i,Qn=r+n}else Xn=1<<r|e<<l|i,Qn=n}function u3(n){n.return!==null&&(jt(n,1),p4(n,1,0))}function c3(n){for(;n===Qi;)Qi=Qt[--Kt],Qt[Kt]=null,Ki=Qt[--Kt],Qt[Kt]=null;for(;n===Tt;)Tt=jn[--Sn],jn[Sn]=null,Qn=jn[--Sn],jn[Sn]=null,Xn=jn[--Sn],jn[Sn]=null}var kn=null,xn=null,H=!1,Ln=null;function h4(n,t){var e=Nn(5,null,null,0);e.elementType="DELETED",e.stateNode=t,e.return=n,t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)}function v1(n,t){switch(n.tag){case 5:var e=n.type;return t=t.nodeType!==1||e.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(n.stateNode=t,kn=n,xn=ct(t.firstChild),!0):!1;case 6:return t=n.pendingProps===""||t.nodeType!==3?null:t,t!==null?(n.stateNode=t,kn=n,xn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(e=Tt!==null?{id:Xn,overflow:Qn}:null,n.memoizedState={dehydrated:t,treeContext:e,retryLane:1073741824},e=Nn(18,null,null,0),e.stateNode=t,e.return=n,n.child=e,kn=n,xn=null,!0):!1;default:return!1}}function N5(n){return(n.mode&1)!==0&&(n.flags&128)===0}function I5(n){if(H){var t=xn;if(t){var e=t;if(!v1(n,t)){if(N5(n))throw Error(x(418));t=ct(e.nextSibling);var i=kn;t&&v1(n,t)?h4(i,e):(n.flags=n.flags&-4097|2,H=!1,kn=n)}}else{if(N5(n))throw Error(x(418));n.flags=n.flags&-4097|2,H=!1,kn=n}}}function w1(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function zi(n){if(n!==kn)return!1;if(!H)return w1(n),H=!0,!1;var t;if((t=n.tag!==3)&&!(t=n.tag!==5)&&(t=n.type,t=t!=="head"&&t!=="body"&&!w5(n.type,n.memoizedProps)),t&&(t=xn)){if(N5(n))throw u4(),Error(x(418));for(;t;)h4(n,t),t=ct(t.nextSibling)}if(w1(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(x(317));n:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"){if(t===0){xn=ct(n.nextSibling);break n}t--}else e!=="$"&&e!=="$!"&&e!=="$?"||t++}n=n.nextSibling}xn=null}}else xn=kn?ct(n.stateNode.nextSibling):null;return!0}function u4(){for(var n=xn;n;)n=ct(n.nextSibling)}function ae(){xn=kn=null,H=!1}function f3(n){Ln===null?Ln=[n]:Ln.push(n)}var oa=qn.ReactCurrentBatchConfig;function ke(n,t,e){if(n=e.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(x(309));var i=e.stateNode}if(!i)throw Error(x(147,n));var l=i,r=""+n;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(o){var s=l.refs;o===null?delete s[r]:s[r]=o},t._stringRef=r,t)}if(typeof n!="string")throw Error(x(284));if(!e._owner)throw Error(x(290,n))}return n}function Mi(n,t){throw n=Object.prototype.toString.call(t),Error(x(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n))}function _1(n){var t=n._init;return t(n._payload)}function c4(n){function t(h,p){if(n){var c=h.deletions;c===null?(h.deletions=[p],h.flags|=16):c.push(p)}}function e(h,p){if(!n)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function i(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function l(h,p){return h=yt(h,p),h.index=0,h.sibling=null,h}function r(h,p,c){return h.index=c,n?(c=h.alternate,c!==null?(c=c.index,c<p?(h.flags|=2,p):c):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function s(h,p,c,z){return p===null||p.tag!==6?(p=Gl(c,h.mode,z),p.return=h,p):(p=l(p,c),p.return=h,p)}function d(h,p,c,z){var w=c.type;return w===$t?m(h,p,c.props.children,z,c.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===lt&&_1(w)===p.type)?(z=l(p,c.props),z.ref=ke(h,p,c),z.return=h,z):(z=Fi(c.type,c.key,c.props,null,h.mode,z),z.ref=ke(h,p,c),z.return=h,z)}function u(h,p,c,z){return p===null||p.tag!==4||p.stateNode.containerInfo!==c.containerInfo||p.stateNode.implementation!==c.implementation?(p=Yl(c,h.mode,z),p.return=h,p):(p=l(p,c.children||[]),p.return=h,p)}function m(h,p,c,z,w){return p===null||p.tag!==7?(p=Et(c,h.mode,z,w),p.return=h,p):(p=l(p,c),p.return=h,p)}function g(h,p,c){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Gl(""+p,h.mode,c),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case si:return c=Fi(p.type,p.key,p.props,null,h.mode,c),c.ref=ke(h,null,p),c.return=h,c;case Ht:return p=Yl(p,h.mode,c),p.return=h,p;case lt:var z=p._init;return g(h,z(p._payload),c)}if(je(p)||me(p))return p=Et(p,h.mode,c,null),p.return=h,p;Mi(h,p)}return null}function f(h,p,c,z){var w=p!==null?p.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return w!==null?null:s(h,p,""+c,z);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case si:return c.key===w?d(h,p,c,z):null;case Ht:return c.key===w?u(h,p,c,z):null;case lt:return w=c._init,f(h,p,w(c._payload),z)}if(je(c)||me(c))return w!==null?null:m(h,p,c,z,null);Mi(h,c)}return null}function y(h,p,c,z,w){if(typeof z=="string"&&z!==""||typeof z=="number")return h=h.get(c)||null,s(p,h,""+z,w);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case si:return h=h.get(z.key===null?c:z.key)||null,d(p,h,z,w);case Ht:return h=h.get(z.key===null?c:z.key)||null,u(p,h,z,w);case lt:var v=z._init;return y(h,p,c,v(z._payload),w)}if(je(z)||me(z))return h=h.get(c)||null,m(p,h,z,w,null);Mi(p,z)}return null}function k(h,p,c,z){for(var w=null,v=null,_=p,N=p=0,$=null;_!==null&&N<c.length;N++){_.index>N?($=_,_=null):$=_.sibling;var P=f(h,_,c[N],z);if(P===null){_===null&&(_=$);break}n&&_&&P.alternate===null&&t(h,_),p=r(P,p,N),v===null?w=P:v.sibling=P,v=P,_=$}if(N===c.length)return e(h,_),H&&jt(h,N),w;if(_===null){for(;N<c.length;N++)_=g(h,c[N],z),_!==null&&(p=r(_,p,N),v===null?w=_:v.sibling=_,v=_);return H&&jt(h,N),w}for(_=i(h,_);N<c.length;N++)$=y(_,h,N,c[N],z),$!==null&&(n&&$.alternate!==null&&_.delete($.key===null?N:$.key),p=r($,p,N),v===null?w=$:v.sibling=$,v=$);return n&&_.forEach(function(V){return t(h,V)}),H&&jt(h,N),w}function M(h,p,c,z){var w=me(c);if(typeof w!="function")throw Error(x(150));if(c=w.call(c),c==null)throw Error(x(151));for(var v=w=null,_=p,N=p=0,$=null,P=c.next();_!==null&&!P.done;N++,P=c.next()){_.index>N?($=_,_=null):$=_.sibling;var V=f(h,_,P.value,z);if(V===null){_===null&&(_=$);break}n&&_&&V.alternate===null&&t(h,_),p=r(V,p,N),v===null?w=V:v.sibling=V,v=V,_=$}if(P.done)return e(h,_),H&&jt(h,N),w;if(_===null){for(;!P.done;N++,P=c.next())P=g(h,P.value,z),P!==null&&(p=r(P,p,N),v===null?w=P:v.sibling=P,v=P);return H&&jt(h,N),w}for(_=i(h,_);!P.done;N++,P=c.next())P=y(_,h,N,P.value,z),P!==null&&(n&&P.alternate!==null&&_.delete(P.key===null?N:P.key),p=r(P,p,N),v===null?w=P:v.sibling=P,v=P);return n&&_.forEach(function(fe){return t(h,fe)}),H&&jt(h,N),w}function I(h,p,c,z){if(typeof c=="object"&&c!==null&&c.type===$t&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case si:n:{for(var w=c.key,v=p;v!==null;){if(v.key===w){if(w=c.type,w===$t){if(v.tag===7){e(h,v.sibling),p=l(v,c.props.children),p.return=h,h=p;break n}}else if(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===lt&&_1(w)===v.type){e(h,v.sibling),p=l(v,c.props),p.ref=ke(h,v,c),p.return=h,h=p;break n}e(h,v);break}else t(h,v);v=v.sibling}c.type===$t?(p=Et(c.props.children,h.mode,z,c.key),p.return=h,h=p):(z=Fi(c.type,c.key,c.props,null,h.mode,z),z.ref=ke(h,p,c),z.return=h,h=z)}return o(h);case Ht:n:{for(v=c.key;p!==null;){if(p.key===v)if(p.tag===4&&p.stateNode.containerInfo===c.containerInfo&&p.stateNode.implementation===c.implementation){e(h,p.sibling),p=l(p,c.children||[]),p.return=h,h=p;break n}else{e(h,p);break}else t(h,p);p=p.sibling}p=Yl(c,h.mode,z),p.return=h,h=p}return o(h);case lt:return v=c._init,I(h,p,v(c._payload),z)}if(je(c))return k(h,p,c,z);if(me(c))return M(h,p,c,z);Mi(h,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,p!==null&&p.tag===6?(e(h,p.sibling),p=l(p,c),p.return=h,h=p):(e(h,p),p=Gl(c,h.mode,z),p.return=h,h=p),o(h)):e(h,p)}return I}var oe=c4(!0),f4=c4(!1),Gi=kt(null),Yi=null,Gt=null,g3=null;function m3(){g3=Gt=Yi=null}function y3(n){var t=Gi.current;O(Gi),n._currentValue=t}function C5(n,t,e){for(;n!==null;){var i=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),n===e)break;n=n.return}}function ee(n,t){Yi=n,g3=Gt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&t&&(gn=!0),n.firstContext=null)}function Cn(n){var t=n._currentValue;if(g3!==n)if(n={context:n,memoizedValue:t,next:null},Gt===null){if(Yi===null)throw Error(x(308));Gt=n,Yi.dependencies={lanes:0,firstContext:n}}else Gt=Gt.next=n;return t}var It=null;function z3(n){It===null?It=[n]:It.push(n)}function g4(n,t,e,i){var l=t.interleaved;return l===null?(e.next=e,z3(t)):(e.next=l.next,l.next=e),t.interleaved=e,Zn(n,i)}function Zn(n,t){n.lanes|=t;var e=n.alternate;for(e!==null&&(e.lanes|=t),e=n,n=n.return;n!==null;)n.childLanes|=t,e=n.alternate,e!==null&&(e.childLanes|=t),e=n,n=n.return;return e.tag===3?e.stateNode:null}var rt=!1;function M3(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m4(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Kn(n,t){return{eventTime:n,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(n,t,e){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,L&2){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,Zn(n,e)}return l=i.interleaved,l===null?(t.next=t,z3(i)):(t.next=l.next,l.next=t),i.interleaved=t,Zn(n,e)}function Ci(n,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194240)!==0)){var i=t.lanes;i&=n.pendingLanes,e|=i,t.lanes=e,l3(n,e)}}function j1(n,t){var e=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,e===i)){var l=null,r=null;if(e=e.firstBaseUpdate,e!==null){do{var o={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};r===null?l=r=o:r=r.next=o,e=e.next}while(e!==null);r===null?l=r=t:r=r.next=t}else l=r=t;e={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:i.shared,effects:i.effects},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=t:n.next=t,e.lastBaseUpdate=t}function Zi(n,t,e,i){var l=n.updateQueue;rt=!1;var r=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var d=s,u=d.next;d.next=null,o===null?r=u:o.next=u,o=d;var m=n.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=d))}if(r!==null){var g=l.baseState;o=0,m=u=d=null,s=r;do{var f=s.lane,y=s.eventTime;if((i&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});n:{var k=n,M=s;switch(f=t,y=e,M.tag){case 1:if(k=M.payload,typeof k=="function"){g=k.call(y,g,f);break n}g=k;break n;case 3:k.flags=k.flags&-65537|128;case 0:if(k=M.payload,f=typeof k=="function"?k.call(y,g,f):k,f==null)break n;g=B({},g,f);break n;case 2:rt=!0}}s.callback!==null&&s.lane!==0&&(n.flags|=64,f=l.effects,f===null?l.effects=[s]:f.push(s))}else y={eventTime:y,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=y,d=g):m=m.next=y,o|=f;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;f=s,s=f.next,f.next=null,l.lastBaseUpdate=f,l.shared.pending=null}}while(!0);if(m===null&&(d=g),l.baseState=d,l.firstBaseUpdate=u,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else r===null&&(l.shared.lanes=0);Ft|=o,n.lanes=o,n.memoizedState=g}}function S1(n,t,e){if(n=t.effects,t.effects=null,n!==null)for(t=0;t<n.length;t++){var i=n[t],l=i.callback;if(l!==null){if(i.callback=null,i=e,typeof l!="function")throw Error(x(191,l));l.call(i)}}}var li={},Un=kt(li),Ke=kt(li),Ge=kt(li);function Ct(n){if(n===li)throw Error(x(174));return n}function x3(n,t){switch(R(Ge,t),R(Ke,n),R(Un,li),n=t.nodeType,n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:d5(null,"");break;default:n=n===8?t.parentNode:t,t=n.namespaceURI||null,n=n.tagName,t=d5(t,n)}O(Un),R(Un,t)}function se(){O(Un),O(Ke),O(Ge)}function y4(n){Ct(Ge.current);var t=Ct(Un.current),e=d5(t,n.type);t!==e&&(R(Ke,n),R(Un,e))}function k3(n){Ke.current===n&&(O(Un),O(Ke))}var W=kt(0);function Ji(n){for(var t=n;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function v3(){for(var n=0;n<Ul.length;n++)Ul[n]._workInProgressVersionPrimary=null;Ul.length=0}var bi=qn.ReactCurrentDispatcher,Bl=qn.ReactCurrentBatchConfig,Lt=0,U=null,Z=null,nn=null,qi=!1,Te=!1,Ye=0,sa=0;function an(){throw Error(x(321))}function w3(n,t){if(t===null)return!1;for(var e=0;e<t.length&&e<n.length;e++)if(!Rn(n[e],t[e]))return!1;return!0}function _3(n,t,e,i,l,r){if(Lt=r,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bi.current=n===null||n.memoizedState===null?ua:ca,n=e(i,l),Te){r=0;do{if(Te=!1,Ye=0,25<=r)throw Error(x(301));r+=1,nn=Z=null,t.updateQueue=null,bi.current=fa,n=e(i,l)}while(Te)}if(bi.current=nl,t=Z!==null&&Z.next!==null,Lt=0,nn=Z=U=null,qi=!1,t)throw Error(x(300));return n}function j3(){var n=Ye!==0;return Ye=0,n}function Hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?U.memoizedState=nn=n:nn=nn.next=n,nn}function bn(){if(Z===null){var n=U.alternate;n=n!==null?n.memoizedState:null}else n=Z.next;var t=nn===null?U.memoizedState:nn.next;if(t!==null)nn=t,Z=n;else{if(n===null)throw Error(x(310));Z=n,n={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},nn===null?U.memoizedState=nn=n:nn=nn.next=n}return nn}function Ze(n,t){return typeof t=="function"?t(n):t}function Vl(n){var t=bn(),e=t.queue;if(e===null)throw Error(x(311));e.lastRenderedReducer=n;var i=Z,l=i.baseQueue,r=e.pending;if(r!==null){if(l!==null){var o=l.next;l.next=r.next,r.next=o}i.baseQueue=l=r,e.pending=null}if(l!==null){r=l.next,i=i.baseState;var s=o=null,d=null,u=r;do{var m=u.lane;if((Lt&m)===m)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var g={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(s=d=g,o=i):d=d.next=g,U.lanes|=m,Ft|=m}u=u.next}while(u!==null&&u!==r);d===null?o=i:d.next=s,Rn(i,t.memoizedState)||(gn=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=d,e.lastRenderedState=i}if(n=e.interleaved,n!==null){l=n;do r=l.lane,U.lanes|=r,Ft|=r,l=l.next;while(l!==n)}else l===null&&(e.lanes=0);return[t.memoizedState,e.dispatch]}function Xl(n){var t=bn(),e=t.queue;if(e===null)throw Error(x(311));e.lastRenderedReducer=n;var i=e.dispatch,l=e.pending,r=t.memoizedState;if(l!==null){e.pending=null;var o=l=l.next;do r=n(r,o.action),o=o.next;while(o!==l);Rn(r,t.memoizedState)||(gn=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),e.lastRenderedState=r}return[r,i]}function z4(){}function M4(n,t){var e=U,i=bn(),l=t(),r=!Rn(i.memoizedState,l);if(r&&(i.memoizedState=l,gn=!0),i=i.queue,S3(v4.bind(null,e,i,n),[n]),i.getSnapshot!==t||r||nn!==null&&nn.memoizedState.tag&1){if(e.flags|=2048,Je(9,k4.bind(null,e,i,l,t),void 0,null),tn===null)throw Error(x(349));Lt&30||x4(e,t,l)}return l}function x4(n,t,e){n.flags|=16384,n={getSnapshot:t,value:e},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[n]):(e=t.stores,e===null?t.stores=[n]:e.push(n))}function k4(n,t,e,i){t.value=e,t.getSnapshot=i,w4(t)&&_4(n)}function v4(n,t,e){return e(function(){w4(t)&&_4(n)})}function w4(n){var t=n.getSnapshot;n=n.value;try{var e=t();return!Rn(n,e)}catch{return!0}}function _4(n){var t=Zn(n,1);t!==null&&An(t,n,1,-1)}function N1(n){var t=Hn();return typeof n=="function"&&(n=n()),t.memoizedState=t.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:n},t.queue=n,n=n.dispatch=ha.bind(null,U,n),[t.memoizedState,n]}function Je(n,t,e,i){return n={tag:n,create:t,destroy:e,deps:i,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=n.next=n):(e=t.lastEffect,e===null?t.lastEffect=n.next=n:(i=e.next,e.next=n,n.next=i,t.lastEffect=n)),n}function j4(){return bn().memoizedState}function Ei(n,t,e,i){var l=Hn();U.flags|=n,l.memoizedState=Je(1|t,e,void 0,i===void 0?null:i)}function cl(n,t,e,i){var l=bn();i=i===void 0?null:i;var r=void 0;if(Z!==null){var o=Z.memoizedState;if(r=o.destroy,i!==null&&w3(i,o.deps)){l.memoizedState=Je(t,e,r,i);return}}U.flags|=n,l.memoizedState=Je(1|t,e,r,i)}function I1(n,t){return Ei(8390656,8,n,t)}function S3(n,t){return cl(2048,8,n,t)}function S4(n,t){return cl(4,2,n,t)}function N4(n,t){return cl(4,4,n,t)}function I4(n,t){if(typeof t=="function")return n=n(),t(n),function(){t(null)};if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function C4(n,t,e){return e=e!=null?e.concat([n]):null,cl(4,4,I4.bind(null,t,n),e)}function N3(){}function b4(n,t){var e=bn();t=t===void 0?null:t;var i=e.memoizedState;return i!==null&&t!==null&&w3(t,i[1])?i[0]:(e.memoizedState=[n,t],n)}function E4(n,t){var e=bn();t=t===void 0?null:t;var i=e.memoizedState;return i!==null&&t!==null&&w3(t,i[1])?i[0]:(n=n(),e.memoizedState=[n,t],n)}function P4(n,t,e){return Lt&21?(Rn(e,t)||(e=R2(),U.lanes|=e,Ft|=e,n.baseState=!0),t):(n.baseState&&(n.baseState=!1,gn=!0),n.memoizedState=e)}function da(n,t){var e=A;A=e!==0&&4>e?e:4,n(!0);var i=Bl.transition;Bl.transition={};try{n(!1),t()}finally{A=e,Bl.transition=i}}function T4(){return bn().memoizedState}function pa(n,t,e){var i=mt(n);if(e={lane:i,action:e,hasEagerState:!1,eagerState:null,next:null},L4(n))F4(t,e);else if(e=g4(n,t,e,i),e!==null){var l=hn();An(e,n,i,l),A4(e,t,i)}}function ha(n,t,e){var i=mt(n),l={lane:i,action:e,hasEagerState:!1,eagerState:null,next:null};if(L4(n))F4(t,l);else{var r=n.alternate;if(n.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,s=r(o,e);if(l.hasEagerState=!0,l.eagerState=s,Rn(s,o)){var d=t.interleaved;d===null?(l.next=l,z3(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}e=g4(n,t,l,i),e!==null&&(l=hn(),An(e,n,i,l),A4(e,t,i))}}function L4(n){var t=n.alternate;return n===U||t!==null&&t===U}function F4(n,t){Te=qi=!0;var e=n.pending;e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t}function A4(n,t,e){if(e&4194240){var i=t.lanes;i&=n.pendingLanes,e|=i,t.lanes=e,l3(n,e)}}var nl={readContext:Cn,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},ua={readContext:Cn,useCallback:function(n,t){return Hn().memoizedState=[n,t===void 0?null:t],n},useContext:Cn,useEffect:I1,useImperativeHandle:function(n,t,e){return e=e!=null?e.concat([n]):null,Ei(4194308,4,I4.bind(null,t,n),e)},useLayoutEffect:function(n,t){return Ei(4194308,4,n,t)},useInsertionEffect:function(n,t){return Ei(4,2,n,t)},useMemo:function(n,t){var e=Hn();return t=t===void 0?null:t,n=n(),e.memoizedState=[n,t],n},useReducer:function(n,t,e){var i=Hn();return t=e!==void 0?e(t):t,i.memoizedState=i.baseState=t,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:t},i.queue=n,n=n.dispatch=pa.bind(null,U,n),[i.memoizedState,n]},useRef:function(n){var t=Hn();return n={current:n},t.memoizedState=n},useState:N1,useDebugValue:N3,useDeferredValue:function(n){return Hn().memoizedState=n},useTransition:function(){var n=N1(!1),t=n[0];return n=da.bind(null,n[1]),Hn().memoizedState=n,[t,n]},useMutableSource:function(){},useSyncExternalStore:function(n,t,e){var i=U,l=Hn();if(H){if(e===void 0)throw Error(x(407));e=e()}else{if(e=t(),tn===null)throw Error(x(349));Lt&30||x4(i,t,e)}l.memoizedState=e;var r={value:e,getSnapshot:t};return l.queue=r,I1(v4.bind(null,i,r,n),[n]),i.flags|=2048,Je(9,k4.bind(null,i,r,e,t),void 0,null),e},useId:function(){var n=Hn(),t=tn.identifierPrefix;if(H){var e=Qn,i=Xn;e=(i&~(1<<32-Fn(i)-1)).toString(32)+e,t=":"+t+"R"+e,e=Ye++,0<e&&(t+="H"+e.toString(32)),t+=":"}else e=sa++,t=":"+t+"r"+e.toString(32)+":";return n.memoizedState=t},unstable_isNewReconciler:!1},ca={readContext:Cn,useCallback:b4,useContext:Cn,useEffect:S3,useImperativeHandle:C4,useInsertionEffect:S4,useLayoutEffect:N4,useMemo:E4,useReducer:Vl,useRef:j4,useState:function(){return Vl(Ze)},useDebugValue:N3,useDeferredValue:function(n){var t=bn();return P4(t,Z.memoizedState,n)},useTransition:function(){var n=Vl(Ze)[0],t=bn().memoizedState;return[n,t]},useMutableSource:z4,useSyncExternalStore:M4,useId:T4,unstable_isNewReconciler:!1},fa={readContext:Cn,useCallback:b4,useContext:Cn,useEffect:S3,useImperativeHandle:C4,useInsertionEffect:S4,useLayoutEffect:N4,useMemo:E4,useReducer:Xl,useRef:j4,useState:function(){return Xl(Ze)},useDebugValue:N3,useDeferredValue:function(n){var t=bn();return Z===null?t.memoizedState=n:P4(t,Z.memoizedState,n)},useTransition:function(){var n=Xl(Ze)[0],t=bn().memoizedState;return[n,t]},useMutableSource:z4,useSyncExternalStore:M4,useId:T4,unstable_isNewReconciler:!1};function Pn(n,t){if(n&&n.defaultProps){t=B({},t),n=n.defaultProps;for(var e in n)t[e]===void 0&&(t[e]=n[e]);return t}return t}function b5(n,t,e,i){t=n.memoizedState,e=e(i,t),e=e==null?t:B({},t,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var fl={isMounted:function(n){return(n=n._reactInternals)?Dt(n)===n:!1},enqueueSetState:function(n,t,e){n=n._reactInternals;var i=hn(),l=mt(n),r=Kn(i,l);r.payload=t,e!=null&&(r.callback=e),t=ft(n,r,l),t!==null&&(An(t,n,l,i),Ci(t,n,l))},enqueueReplaceState:function(n,t,e){n=n._reactInternals;var i=hn(),l=mt(n),r=Kn(i,l);r.tag=1,r.payload=t,e!=null&&(r.callback=e),t=ft(n,r,l),t!==null&&(An(t,n,l,i),Ci(t,n,l))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var e=hn(),i=mt(n),l=Kn(e,i);l.tag=2,t!=null&&(l.callback=t),t=ft(n,l,i),t!==null&&(An(t,n,i,e),Ci(t,n,i))}};function C1(n,t,e,i,l,r,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,r,o):t.prototype&&t.prototype.isPureReactComponent?!Be(e,i)||!Be(l,r):!0}function R4(n,t,e){var i=!1,l=Mt,r=t.contextType;return typeof r=="object"&&r!==null?r=Cn(r):(l=yn(t)?Pt:dn.current,i=t.contextTypes,r=(i=i!=null)?re(n,l):Mt),t=new t(e,r),n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fl,n.stateNode=t,t._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=l,n.__reactInternalMemoizedMaskedChildContext=r),t}function b1(n,t,e,i){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,i),t.state!==n&&fl.enqueueReplaceState(t,t.state,null)}function E5(n,t,e,i){var l=n.stateNode;l.props=e,l.state=n.memoizedState,l.refs={},M3(n);var r=t.contextType;typeof r=="object"&&r!==null?l.context=Cn(r):(r=yn(t)?Pt:dn.current,l.context=re(n,r)),l.state=n.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(b5(n,t,r,e),l.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&fl.enqueueReplaceState(l,l.state,null),Zi(n,e,l,i),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308)}function de(n,t){try{var e="",i=t;do e+=Wr(i),i=i.return;while(i);var l=e}catch(r){l=`
Error generating stack: `+r.message+`
`+r.stack}return{value:n,source:t,stack:l,digest:null}}function Ql(n,t,e){return{value:n,source:null,stack:e??null,digest:t??null}}function P5(n,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var ga=typeof WeakMap=="function"?WeakMap:Map;function D4(n,t,e){e=Kn(-1,e),e.tag=3,e.payload={element:null};var i=t.value;return e.callback=function(){el||(el=!0,W5=i),P5(n,t)},e}function O4(n,t,e){e=Kn(-1,e),e.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=t.value;e.payload=function(){return i(l)},e.callback=function(){P5(n,t)}}var r=n.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){P5(n,t),typeof i!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),e}function E1(n,t,e){var i=n.pingCache;if(i===null){i=n.pingCache=new ga;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(e)||(l.add(e),n=Ca.bind(null,n,t,e),t.then(n,n))}function P1(n){do{var t;if((t=n.tag===13)&&(t=n.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return n;n=n.return}while(n!==null);return null}function T1(n,t,e,i,l){return n.mode&1?(n.flags|=65536,n.lanes=l,n):(n===t?n.flags|=65536:(n.flags|=128,e.flags|=131072,e.flags&=-52805,e.tag===1&&(e.alternate===null?e.tag=17:(t=Kn(-1,1),t.tag=2,ft(e,t,1))),e.lanes|=1),n)}var ma=qn.ReactCurrentOwner,gn=!1;function pn(n,t,e,i){t.child=n===null?f4(t,null,e,i):oe(t,n.child,e,i)}function L1(n,t,e,i,l){e=e.render;var r=t.ref;return ee(t,l),i=_3(n,t,e,i,r,l),e=j3(),n!==null&&!gn?(t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~l,Jn(n,t,l)):(H&&e&&u3(t),t.flags|=1,pn(n,t,i,l),t.child)}function F1(n,t,e,i,l){if(n===null){var r=e.type;return typeof r=="function"&&!F3(r)&&r.defaultProps===void 0&&e.compare===null&&e.defaultProps===void 0?(t.tag=15,t.type=r,H4(n,t,r,i,l)):(n=Fi(e.type,null,i,t,t.mode,l),n.ref=t.ref,n.return=t,t.child=n)}if(r=n.child,!(n.lanes&l)){var o=r.memoizedProps;if(e=e.compare,e=e!==null?e:Be,e(o,i)&&n.ref===t.ref)return Jn(n,t,l)}return t.flags|=1,n=yt(r,i),n.ref=t.ref,n.return=t,t.child=n}function H4(n,t,e,i,l){if(n!==null){var r=n.memoizedProps;if(Be(r,i)&&n.ref===t.ref)if(gn=!1,t.pendingProps=i=r,(n.lanes&l)!==0)n.flags&131072&&(gn=!0);else return t.lanes=n.lanes,Jn(n,t,l)}return T5(n,t,e,i,l)}function $4(n,t,e){var i=t.pendingProps,l=i.children,r=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Zt,Mn),Mn|=e;else{if(!(e&1073741824))return n=r!==null?r.baseLanes|e:e,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:n,cachePool:null,transitions:null},t.updateQueue=null,R(Zt,Mn),Mn|=n,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=r!==null?r.baseLanes:e,R(Zt,Mn),Mn|=i}else r!==null?(i=r.baseLanes|e,t.memoizedState=null):i=e,R(Zt,Mn),Mn|=i;return pn(n,t,l,e),t.child}function W4(n,t){var e=t.ref;(n===null&&e!==null||n!==null&&n.ref!==e)&&(t.flags|=512,t.flags|=2097152)}function T5(n,t,e,i,l){var r=yn(e)?Pt:dn.current;return r=re(t,r),ee(t,l),e=_3(n,t,e,i,r,l),i=j3(),n!==null&&!gn?(t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~l,Jn(n,t,l)):(H&&i&&u3(t),t.flags|=1,pn(n,t,e,l),t.child)}function A1(n,t,e,i,l){if(yn(e)){var r=!0;Xi(t)}else r=!1;if(ee(t,l),t.stateNode===null)Pi(n,t),R4(t,e,i),E5(t,e,i,l),i=!0;else if(n===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var d=o.context,u=e.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=yn(e)?Pt:dn.current,u=re(t,u));var m=e.getDerivedStateFromProps,g=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||d!==u)&&b1(t,o,i,u),rt=!1;var f=t.memoizedState;o.state=f,Zi(t,i,o,l),d=t.memoizedState,s!==i||f!==d||mn.current||rt?(typeof m=="function"&&(b5(t,e,m,i),d=t.memoizedState),(s=rt||C1(t,e,s,i,f,d,u))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=d),o.props=i,o.state=d,o.context=u,i=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,m4(n,t),s=t.memoizedProps,u=t.type===t.elementType?s:Pn(t.type,s),o.props=u,g=t.pendingProps,f=o.context,d=e.contextType,typeof d=="object"&&d!==null?d=Cn(d):(d=yn(e)?Pt:dn.current,d=re(t,d));var y=e.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==g||f!==d)&&b1(t,o,i,d),rt=!1,f=t.memoizedState,o.state=f,Zi(t,i,o,l);var k=t.memoizedState;s!==g||f!==k||mn.current||rt?(typeof y=="function"&&(b5(t,e,y,i),k=t.memoizedState),(u=rt||C1(t,e,u,i,f,k,d)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,k,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,k,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===n.memoizedProps&&f===n.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&f===n.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=k),o.props=i,o.state=k,o.context=d,i=u):(typeof o.componentDidUpdate!="function"||s===n.memoizedProps&&f===n.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&f===n.memoizedState||(t.flags|=1024),i=!1)}return L5(n,t,e,i,r,l)}function L5(n,t,e,i,l,r){W4(n,t);var o=(t.flags&128)!==0;if(!i&&!o)return l&&k1(t,e,!1),Jn(n,t,r);i=t.stateNode,ma.current=t;var s=o&&typeof e.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,n!==null&&o?(t.child=oe(t,n.child,null,r),t.child=oe(t,null,s,r)):pn(n,t,s,r),t.memoizedState=i.state,l&&k1(t,e,!0),t.child}function U4(n){var t=n.stateNode;t.pendingContext?x1(n,t.pendingContext,t.pendingContext!==t.context):t.context&&x1(n,t.context,!1),x3(n,t.containerInfo)}function R1(n,t,e,i,l){return ae(),f3(l),t.flags|=256,pn(n,t,e,i),t.child}var F5={dehydrated:null,treeContext:null,retryLane:0};function A5(n){return{baseLanes:n,cachePool:null,transitions:null}}function B4(n,t,e){var i=t.pendingProps,l=W.current,r=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=n!==null&&n.memoizedState===null?!1:(l&2)!==0),s?(r=!0,t.flags&=-129):(n===null||n.memoizedState!==null)&&(l|=1),R(W,l&1),n===null)return I5(t),n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(t.mode&1?n.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,n=i.fallback,r?(i=t.mode,r=t.child,o={mode:"hidden",children:o},!(i&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=yl(o,i,0,null),n=Et(n,i,e,null),r.return=t,n.return=t,r.sibling=n,t.child=r,t.child.memoizedState=A5(e),t.memoizedState=F5,n):I3(t,o));if(l=n.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return ya(n,t,o,i,s,l,e);if(r){r=i.fallback,o=t.mode,l=n.child,s=l.sibling;var d={mode:"hidden",children:i.children};return!(o&1)&&t.child!==l?(i=t.child,i.childLanes=0,i.pendingProps=d,t.deletions=null):(i=yt(l,d),i.subtreeFlags=l.subtreeFlags&14680064),s!==null?r=yt(s,r):(r=Et(r,o,e,null),r.flags|=2),r.return=t,i.return=t,i.sibling=r,t.child=i,i=r,r=t.child,o=n.child.memoizedState,o=o===null?A5(e):{baseLanes:o.baseLanes|e,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=n.childLanes&~e,t.memoizedState=F5,i}return r=n.child,n=r.sibling,i=yt(r,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=e),i.return=t,i.sibling=null,n!==null&&(e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)),t.child=i,t.memoizedState=null,i}function I3(n,t){return t=yl({mode:"visible",children:t},n.mode,0,null),t.return=n,n.child=t}function xi(n,t,e,i){return i!==null&&f3(i),oe(t,n.child,null,e),n=I3(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function ya(n,t,e,i,l,r,o){if(e)return t.flags&256?(t.flags&=-257,i=Ql(Error(x(422))),xi(n,t,o,i)):t.memoizedState!==null?(t.child=n.child,t.flags|=128,null):(r=i.fallback,l=t.mode,i=yl({mode:"visible",children:i.children},l,0,null),r=Et(r,l,o,null),r.flags|=2,i.return=t,r.return=t,i.sibling=r,t.child=i,t.mode&1&&oe(t,n.child,null,o),t.child.memoizedState=A5(o),t.memoizedState=F5,r);if(!(t.mode&1))return xi(n,t,o,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var s=i.dgst;return i=s,r=Error(x(419)),i=Ql(r,i,void 0),xi(n,t,o,i)}if(s=(o&n.childLanes)!==0,gn||s){if(i=tn,i!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(i.suspendedLanes|o)?0:l,l!==0&&l!==r.retryLane&&(r.retryLane=l,Zn(n,l),An(i,n,l,-1))}return L3(),i=Ql(Error(x(421))),xi(n,t,o,i)}return l.data==="$?"?(t.flags|=128,t.child=n.child,t=ba.bind(null,n),l._reactRetry=t,null):(n=r.treeContext,xn=ct(l.nextSibling),kn=t,H=!0,Ln=null,n!==null&&(jn[Sn++]=Xn,jn[Sn++]=Qn,jn[Sn++]=Tt,Xn=n.id,Qn=n.overflow,Tt=t),t=I3(t,i.children),t.flags|=4096,t)}function D1(n,t,e){n.lanes|=t;var i=n.alternate;i!==null&&(i.lanes|=t),C5(n.return,t,e)}function Kl(n,t,e,i,l){var r=n.memoizedState;r===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:e,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=e,r.tailMode=l)}function V4(n,t,e){var i=t.pendingProps,l=i.revealOrder,r=i.tail;if(pn(n,t,i.children,e),i=W.current,i&2)i=i&1|2,t.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&D1(n,e,t);else if(n.tag===19)D1(n,e,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break n;for(;n.sibling===null;){if(n.return===null||n.return===t)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(R(W,i),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(e=t.child,l=null;e!==null;)n=e.alternate,n!==null&&Ji(n)===null&&(l=e),e=e.sibling;e=l,e===null?(l=t.child,t.child=null):(l=e.sibling,e.sibling=null),Kl(t,!1,l,e,r);break;case"backwards":for(e=null,l=t.child,t.child=null;l!==null;){if(n=l.alternate,n!==null&&Ji(n)===null){t.child=l;break}n=l.sibling,l.sibling=e,e=l,l=n}Kl(t,!0,e,null,r);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pi(n,t){!(t.mode&1)&&n!==null&&(n.alternate=null,t.alternate=null,t.flags|=2)}function Jn(n,t,e){if(n!==null&&(t.dependencies=n.dependencies),Ft|=t.lanes,!(e&t.childLanes))return null;if(n!==null&&t.child!==n.child)throw Error(x(153));if(t.child!==null){for(n=t.child,e=yt(n,n.pendingProps),t.child=e,e.return=t;n.sibling!==null;)n=n.sibling,e=e.sibling=yt(n,n.pendingProps),e.return=t;e.sibling=null}return t.child}function za(n,t,e){switch(t.tag){case 3:U4(t),ae();break;case 5:y4(t);break;case 1:yn(t.type)&&Xi(t);break;case 4:x3(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,l=t.memoizedProps.value;R(Gi,i._currentValue),i._currentValue=l;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(R(W,W.current&1),t.flags|=128,null):e&t.child.childLanes?B4(n,t,e):(R(W,W.current&1),n=Jn(n,t,e),n!==null?n.sibling:null);R(W,W.current&1);break;case 19:if(i=(e&t.childLanes)!==0,n.flags&128){if(i)return V4(n,t,e);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),R(W,W.current),i)break;return null;case 22:case 23:return t.lanes=0,$4(n,t,e)}return Jn(n,t,e)}var X4,R5,Q4,K4;X4=function(n,t){for(var e=t.child;e!==null;){if(e.tag===5||e.tag===6)n.appendChild(e.stateNode);else if(e.tag!==4&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return;e=e.return}e.sibling.return=e.return,e=e.sibling}};R5=function(){};Q4=function(n,t,e,i){var l=n.memoizedProps;if(l!==i){n=t.stateNode,Ct(Un.current);var r=null;switch(e){case"input":l=r5(n,l),i=r5(n,i),r=[];break;case"select":l=B({},l,{value:void 0}),i=B({},i,{value:void 0}),r=[];break;case"textarea":l=s5(n,l),i=s5(n,i),r=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Bi)}p5(e,i);var o;e=null;for(u in l)if(!i.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(o in s)s.hasOwnProperty(o)&&(e||(e={}),e[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Re.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in i){var d=i[u];if(s=l!=null?l[u]:void 0,i.hasOwnProperty(u)&&d!==s&&(d!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(e||(e={}),e[o]="");for(o in d)d.hasOwnProperty(o)&&s[o]!==d[o]&&(e||(e={}),e[o]=d[o])}else e||(r||(r=[]),r.push(u,e)),e=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,s=s?s.__html:void 0,d!=null&&s!==d&&(r=r||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(r=r||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Re.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&D("scroll",n),r||s===d||(r=[])):(r=r||[]).push(u,d))}e&&(r=r||[]).push("style",e);var u=r;(t.updateQueue=u)&&(t.flags|=4)}};K4=function(n,t,e,i){e!==i&&(t.flags|=4)};function ve(n,t){if(!H)switch(n.tailMode){case"hidden":t=n.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function on(n){var t=n.alternate!==null&&n.alternate.child===n.child,e=0,i=0;if(t)for(var l=n.child;l!==null;)e|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)e|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=i,n.childLanes=e,t}function Ma(n,t,e){var i=t.pendingProps;switch(c3(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(t),null;case 1:return yn(t.type)&&Vi(),on(t),null;case 3:return i=t.stateNode,se(),O(mn),O(dn),v3(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(zi(t)?t.flags|=4:n===null||n.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ln!==null&&(V5(Ln),Ln=null))),R5(n,t),on(t),null;case 5:k3(t);var l=Ct(Ge.current);if(e=t.type,n!==null&&t.stateNode!=null)Q4(n,t,e,i,l),n.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(x(166));return on(t),null}if(n=Ct(Un.current),zi(t)){i=t.stateNode,e=t.type;var r=t.memoizedProps;switch(i[$n]=t,i[Qe]=r,n=(t.mode&1)!==0,e){case"dialog":D("cancel",i),D("close",i);break;case"iframe":case"object":case"embed":D("load",i);break;case"video":case"audio":for(l=0;l<Ne.length;l++)D(Ne[l],i);break;case"source":D("error",i);break;case"img":case"image":case"link":D("error",i),D("load",i);break;case"details":D("toggle",i);break;case"input":Q3(i,r),D("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!r.multiple},D("invalid",i);break;case"textarea":G3(i,r),D("invalid",i)}p5(e,r),l=null;for(var o in r)if(r.hasOwnProperty(o)){var s=r[o];o==="children"?typeof s=="string"?i.textContent!==s&&(r.suppressHydrationWarning!==!0&&yi(i.textContent,s,n),l=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&yi(i.textContent,s,n),l=["children",""+s]):Re.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&D("scroll",i)}switch(e){case"input":di(i),K3(i,r,!0);break;case"textarea":di(i),Y3(i);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(i.onclick=Bi)}i=l,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=v2(e)),n==="http://www.w3.org/1999/xhtml"?e==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(e,{is:i.is}):(n=o.createElement(e),e==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,e),n[$n]=t,n[Qe]=i,X4(n,t,!1,!1),t.stateNode=n;n:{switch(o=h5(e,i),e){case"dialog":D("cancel",n),D("close",n),l=i;break;case"iframe":case"object":case"embed":D("load",n),l=i;break;case"video":case"audio":for(l=0;l<Ne.length;l++)D(Ne[l],n);l=i;break;case"source":D("error",n),l=i;break;case"img":case"image":case"link":D("error",n),D("load",n),l=i;break;case"details":D("toggle",n),l=i;break;case"input":Q3(n,i),l=r5(n,i),D("invalid",n);break;case"option":l=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},l=B({},i,{value:void 0}),D("invalid",n);break;case"textarea":G3(n,i),l=s5(n,i),D("invalid",n);break;default:l=i}p5(e,l),s=l;for(r in s)if(s.hasOwnProperty(r)){var d=s[r];r==="style"?j2(n,d):r==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&w2(n,d)):r==="children"?typeof d=="string"?(e!=="textarea"||d!=="")&&De(n,d):typeof d=="number"&&De(n,""+d):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Re.hasOwnProperty(r)?d!=null&&r==="onScroll"&&D("scroll",n):d!=null&&J5(n,r,d,o))}switch(e){case"input":di(n),K3(n,i,!1);break;case"textarea":di(n),Y3(n);break;case"option":i.value!=null&&n.setAttribute("value",""+zt(i.value));break;case"select":n.multiple=!!i.multiple,r=i.value,r!=null?Jt(n,!!i.multiple,r,!1):i.defaultValue!=null&&Jt(n,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(n.onclick=Bi)}switch(e){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break n;case"img":i=!0;break n;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return on(t),null;case 6:if(n&&t.stateNode!=null)K4(n,t,n.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(x(166));if(e=Ct(Ge.current),Ct(Un.current),zi(t)){if(i=t.stateNode,e=t.memoizedProps,i[$n]=t,(r=i.nodeValue!==e)&&(n=kn,n!==null))switch(n.tag){case 3:yi(i.nodeValue,e,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&yi(i.nodeValue,e,(n.mode&1)!==0)}r&&(t.flags|=4)}else i=(e.nodeType===9?e:e.ownerDocument).createTextNode(i),i[$n]=t,t.stateNode=i}return on(t),null;case 13:if(O(W),i=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(H&&xn!==null&&t.mode&1&&!(t.flags&128))u4(),ae(),t.flags|=98560,r=!1;else if(r=zi(t),i!==null&&i.dehydrated!==null){if(n===null){if(!r)throw Error(x(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(x(317));r[$n]=t}else ae(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;on(t),r=!1}else Ln!==null&&(V5(Ln),Ln=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=e,t):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(n===null||W.current&1?J===0&&(J=3):L3())),t.updateQueue!==null&&(t.flags|=4),on(t),null);case 4:return se(),R5(n,t),n===null&&Ve(t.stateNode.containerInfo),on(t),null;case 10:return y3(t.type._context),on(t),null;case 17:return yn(t.type)&&Vi(),on(t),null;case 19:if(O(W),r=t.memoizedState,r===null)return on(t),null;if(i=(t.flags&128)!==0,o=r.rendering,o===null)if(i)ve(r,!1);else{if(J!==0||n!==null&&n.flags&128)for(n=t.child;n!==null;){if(o=Ji(n),o!==null){for(t.flags|=128,ve(r,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=e,e=t.child;e!==null;)r=e,n=i,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=n,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,n=o.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e=e.sibling;return R(W,W.current&1|2),t.child}n=n.sibling}r.tail!==null&&K()>pe&&(t.flags|=128,i=!0,ve(r,!1),t.lanes=4194304)}else{if(!i)if(n=Ji(o),n!==null){if(t.flags|=128,i=!0,e=n.updateQueue,e!==null&&(t.updateQueue=e,t.flags|=4),ve(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!H)return on(t),null}else 2*K()-r.renderingStartTime>pe&&e!==1073741824&&(t.flags|=128,i=!0,ve(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e!==null?e.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=K(),t.sibling=null,e=W.current,R(W,i?e&1|2:e&1),t):(on(t),null);case 22:case 23:return T3(),i=t.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Mn&1073741824&&(on(t),t.subtreeFlags&6&&(t.flags|=8192)):on(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function xa(n,t){switch(c3(t),t.tag){case 1:return yn(t.type)&&Vi(),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return se(),O(mn),O(dn),v3(),n=t.flags,n&65536&&!(n&128)?(t.flags=n&-65537|128,t):null;case 5:return k3(t),null;case 13:if(O(W),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(x(340));ae()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return O(W),null;case 4:return se(),null;case 10:return y3(t.type._context),null;case 22:case 23:return T3(),null;case 24:return null;default:return null}}var ki=!1,sn=!1,ka=typeof WeakSet=="function"?WeakSet:Set,j=null;function Yt(n,t){var e=n.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(i){X(n,t,i)}else e.current=null}function D5(n,t,e){try{e()}catch(i){X(n,t,i)}}var O1=!1;function va(n,t){if(k5=$i,n=q2(),h3(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var i=e.getSelection&&e.getSelection();if(i&&i.rangeCount!==0){e=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{e.nodeType,r.nodeType}catch{e=null;break n}var o=0,s=-1,d=-1,u=0,m=0,g=n,f=null;t:for(;;){for(var y;g!==e||l!==0&&g.nodeType!==3||(s=o+l),g!==r||i!==0&&g.nodeType!==3||(d=o+i),g.nodeType===3&&(o+=g.nodeValue.length),(y=g.firstChild)!==null;)f=g,g=y;for(;;){if(g===n)break t;if(f===e&&++u===l&&(s=o),f===r&&++m===i&&(d=o),(y=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=y}e=s===-1||d===-1?null:{start:s,end:d}}else e=null}e=e||{start:0,end:0}}else e=null;for(v5={focusedElem:n,selectionRange:e},$i=!1,j=t;j!==null;)if(t=j,n=t.child,(t.subtreeFlags&1028)!==0&&n!==null)n.return=t,j=n;else for(;j!==null;){t=j;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var M=k.memoizedProps,I=k.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?M:Pn(t.type,M),I);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(z){X(t,t.return,z)}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}return k=O1,O1=!1,k}function Le(n,t,e){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&n)===n){var r=l.destroy;l.destroy=void 0,r!==void 0&&D5(t,e,r)}l=l.next}while(l!==i)}}function gl(n,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var e=t=t.next;do{if((e.tag&n)===n){var i=e.create;e.destroy=i()}e=e.next}while(e!==t)}}function O5(n){var t=n.ref;if(t!==null){var e=n.stateNode;switch(n.tag){case 5:n=e;break;default:n=e}typeof t=="function"?t(n):t.current=n}}function G4(n){var t=n.alternate;t!==null&&(n.alternate=null,G4(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&(delete t[$n],delete t[Qe],delete t[j5],delete t[la],delete t[ra])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Y4(n){return n.tag===5||n.tag===3||n.tag===4}function H1(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Y4(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function H5(n,t,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,t?e.nodeType===8?e.parentNode.insertBefore(n,t):e.insertBefore(n,t):(e.nodeType===8?(t=e.parentNode,t.insertBefore(n,e)):(t=e,t.appendChild(n)),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Bi));else if(i!==4&&(n=n.child,n!==null))for(H5(n,t,e),n=n.sibling;n!==null;)H5(n,t,e),n=n.sibling}function $5(n,t,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,t?e.insertBefore(n,t):e.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for($5(n,t,e),n=n.sibling;n!==null;)$5(n,t,e),n=n.sibling}var en=null,Tn=!1;function nt(n,t,e){for(e=e.child;e!==null;)Z4(n,t,e),e=e.sibling}function Z4(n,t,e){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(ol,e)}catch{}switch(e.tag){case 5:sn||Yt(e,t);case 6:var i=en,l=Tn;en=null,nt(n,t,e),en=i,Tn=l,en!==null&&(Tn?(n=en,e=e.stateNode,n.nodeType===8?n.parentNode.removeChild(e):n.removeChild(e)):en.removeChild(e.stateNode));break;case 18:en!==null&&(Tn?(n=en,e=e.stateNode,n.nodeType===8?$l(n.parentNode,e):n.nodeType===1&&$l(n,e),We(n)):$l(en,e.stateNode));break;case 4:i=en,l=Tn,en=e.stateNode.containerInfo,Tn=!0,nt(n,t,e),en=i,Tn=l;break;case 0:case 11:case 14:case 15:if(!sn&&(i=e.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var r=l,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&D5(e,t,o),l=l.next}while(l!==i)}nt(n,t,e);break;case 1:if(!sn&&(Yt(e,t),i=e.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=e.memoizedProps,i.state=e.memoizedState,i.componentWillUnmount()}catch(s){X(e,t,s)}nt(n,t,e);break;case 21:nt(n,t,e);break;case 22:e.mode&1?(sn=(i=sn)||e.memoizedState!==null,nt(n,t,e),sn=i):nt(n,t,e);break;default:nt(n,t,e)}}function $1(n){var t=n.updateQueue;if(t!==null){n.updateQueue=null;var e=n.stateNode;e===null&&(e=n.stateNode=new ka),t.forEach(function(i){var l=Ea.bind(null,n,i);e.has(i)||(e.add(i),i.then(l,l))})}}function En(n,t){var e=t.deletions;if(e!==null)for(var i=0;i<e.length;i++){var l=e[i];try{var r=n,o=t,s=o;n:for(;s!==null;){switch(s.tag){case 5:en=s.stateNode,Tn=!1;break n;case 3:en=s.stateNode.containerInfo,Tn=!0;break n;case 4:en=s.stateNode.containerInfo,Tn=!0;break n}s=s.return}if(en===null)throw Error(x(160));Z4(r,o,l),en=null,Tn=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(u){X(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)J4(t,n),t=t.sibling}function J4(n,t){var e=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(En(t,n),Dn(n),i&4){try{Le(3,n,n.return),gl(3,n)}catch(M){X(n,n.return,M)}try{Le(5,n,n.return)}catch(M){X(n,n.return,M)}}break;case 1:En(t,n),Dn(n),i&512&&e!==null&&Yt(e,e.return);break;case 5:if(En(t,n),Dn(n),i&512&&e!==null&&Yt(e,e.return),n.flags&32){var l=n.stateNode;try{De(l,"")}catch(M){X(n,n.return,M)}}if(i&4&&(l=n.stateNode,l!=null)){var r=n.memoizedProps,o=e!==null?e.memoizedProps:r,s=n.type,d=n.updateQueue;if(n.updateQueue=null,d!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&x2(l,r),h5(s,o);var u=h5(s,r);for(o=0;o<d.length;o+=2){var m=d[o],g=d[o+1];m==="style"?j2(l,g):m==="dangerouslySetInnerHTML"?w2(l,g):m==="children"?De(l,g):J5(l,m,g,u)}switch(s){case"input":a5(l,r);break;case"textarea":k2(l,r);break;case"select":var f=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!r.multiple;var y=r.value;y!=null?Jt(l,!!r.multiple,y,!1):f!==!!r.multiple&&(r.defaultValue!=null?Jt(l,!!r.multiple,r.defaultValue,!0):Jt(l,!!r.multiple,r.multiple?[]:"",!1))}l[Qe]=r}catch(M){X(n,n.return,M)}}break;case 6:if(En(t,n),Dn(n),i&4){if(n.stateNode===null)throw Error(x(162));l=n.stateNode,r=n.memoizedProps;try{l.nodeValue=r}catch(M){X(n,n.return,M)}}break;case 3:if(En(t,n),Dn(n),i&4&&e!==null&&e.memoizedState.isDehydrated)try{We(t.containerInfo)}catch(M){X(n,n.return,M)}break;case 4:En(t,n),Dn(n);break;case 13:En(t,n),Dn(n),l=n.child,l.flags&8192&&(r=l.memoizedState!==null,l.stateNode.isHidden=r,!r||l.alternate!==null&&l.alternate.memoizedState!==null||(E3=K())),i&4&&$1(n);break;case 22:if(m=e!==null&&e.memoizedState!==null,n.mode&1?(sn=(u=sn)||m,En(t,n),sn=u):En(t,n),Dn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!m&&n.mode&1)for(j=n,m=n.child;m!==null;){for(g=j=m;j!==null;){switch(f=j,y=f.child,f.tag){case 0:case 11:case 14:case 15:Le(4,f,f.return);break;case 1:Yt(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){i=f,e=f.return;try{t=i,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(M){X(i,e,M)}}break;case 5:Yt(f,f.return);break;case 22:if(f.memoizedState!==null){U1(g);continue}}y!==null?(y.return=f,j=y):U1(g)}m=m.sibling}n:for(m=null,g=n;;){if(g.tag===5){if(m===null){m=g;try{l=g.stateNode,u?(r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=g.stateNode,d=g.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,s.style.display=_2("display",o))}catch(M){X(n,n.return,M)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(M){X(n,n.return,M)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===n)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break n;for(;g.sibling===null;){if(g.return===null||g.return===n)break n;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:En(t,n),Dn(n),i&4&&$1(n);break;case 21:break;default:En(t,n),Dn(n)}}function Dn(n){var t=n.flags;if(t&2){try{n:{for(var e=n.return;e!==null;){if(Y4(e)){var i=e;break n}e=e.return}throw Error(x(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(De(l,""),i.flags&=-33);var r=H1(n);$5(n,r,l);break;case 3:case 4:var o=i.stateNode.containerInfo,s=H1(n);H5(n,s,o);break;default:throw Error(x(161))}}catch(d){X(n,n.return,d)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function wa(n,t,e){j=n,q4(n)}function q4(n,t,e){for(var i=(n.mode&1)!==0;j!==null;){var l=j,r=l.child;if(l.tag===22&&i){var o=l.memoizedState!==null||ki;if(!o){var s=l.alternate,d=s!==null&&s.memoizedState!==null||sn;s=ki;var u=sn;if(ki=o,(sn=d)&&!u)for(j=l;j!==null;)o=j,d=o.child,o.tag===22&&o.memoizedState!==null?B1(l):d!==null?(d.return=o,j=d):B1(l);for(;r!==null;)j=r,q4(r),r=r.sibling;j=l,ki=s,sn=u}W1(n)}else l.subtreeFlags&8772&&r!==null?(r.return=l,j=r):W1(n)}}function W1(n){for(;j!==null;){var t=j;if(t.flags&8772){var e=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:sn||gl(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!sn)if(e===null)i.componentDidMount();else{var l=t.elementType===t.type?e.memoizedProps:Pn(t.type,e.memoizedProps);i.componentDidUpdate(l,e.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&S1(t,r,i);break;case 3:var o=t.updateQueue;if(o!==null){if(e=null,t.child!==null)switch(t.child.tag){case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}S1(t,o,e)}break;case 5:var s=t.stateNode;if(e===null&&t.flags&4){e=s;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&e.focus();break;case"img":d.src&&(e.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&We(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}sn||t.flags&512&&O5(t)}catch(f){X(t,t.return,f)}}if(t===n){j=null;break}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}}function U1(n){for(;j!==null;){var t=j;if(t===n){j=null;break}var e=t.sibling;if(e!==null){e.return=t.return,j=e;break}j=t.return}}function B1(n){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var e=t.return;try{gl(4,t)}catch(d){X(t,e,d)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var l=t.return;try{i.componentDidMount()}catch(d){X(t,l,d)}}var r=t.return;try{O5(t)}catch(d){X(t,r,d)}break;case 5:var o=t.return;try{O5(t)}catch(d){X(t,o,d)}}}catch(d){X(t,t.return,d)}if(t===n){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var _a=Math.ceil,tl=qn.ReactCurrentDispatcher,C3=qn.ReactCurrentOwner,In=qn.ReactCurrentBatchConfig,L=0,tn=null,G=null,ln=0,Mn=0,Zt=kt(0),J=0,qe=null,Ft=0,ml=0,b3=0,Fe=null,fn=null,E3=0,pe=1/0,Bn=null,el=!1,W5=null,gt=null,vi=!1,dt=null,il=0,Ae=0,U5=null,Ti=-1,Li=0;function hn(){return L&6?K():Ti!==-1?Ti:Ti=K()}function mt(n){return n.mode&1?L&2&&ln!==0?ln&-ln:oa.transition!==null?(Li===0&&(Li=R2()),Li):(n=A,n!==0||(n=window.event,n=n===void 0?16:B2(n.type)),n):1}function An(n,t,e,i){if(50<Ae)throw Ae=0,U5=null,Error(x(185));ti(n,e,i),(!(L&2)||n!==tn)&&(n===tn&&(!(L&2)&&(ml|=e),J===4&&ot(n,ln)),zn(n,i),e===1&&L===0&&!(t.mode&1)&&(pe=K()+500,ul&&vt()))}function zn(n,t){var e=n.callbackNode;o0(n,t);var i=Hi(n,n===tn?ln:0);if(i===0)e!==null&&q3(e),n.callbackNode=null,n.callbackPriority=0;else if(t=i&-i,n.callbackPriority!==t){if(e!=null&&q3(e),t===1)n.tag===0?aa(V1.bind(null,n)):d4(V1.bind(null,n)),ea(function(){!(L&6)&&vt()}),e=null;else{switch(D2(i)){case 1:e=i3;break;case 4:e=F2;break;case 16:e=Oi;break;case 536870912:e=A2;break;default:e=Oi}e=or(e,nr.bind(null,n))}n.callbackPriority=t,n.callbackNode=e}}function nr(n,t){if(Ti=-1,Li=0,L&6)throw Error(x(327));var e=n.callbackNode;if(ie()&&n.callbackNode!==e)return null;var i=Hi(n,n===tn?ln:0);if(i===0)return null;if(i&30||i&n.expiredLanes||t)t=ll(n,i);else{t=i;var l=L;L|=2;var r=er();(tn!==n||ln!==t)&&(Bn=null,pe=K()+500,bt(n,t));do try{Na();break}catch(s){tr(n,s)}while(!0);m3(),tl.current=r,L=l,G!==null?t=0:(tn=null,ln=0,t=J)}if(t!==0){if(t===2&&(l=m5(n),l!==0&&(i=l,t=B5(n,l))),t===1)throw e=qe,bt(n,0),ot(n,i),zn(n,K()),e;if(t===6)ot(n,i);else{if(l=n.current.alternate,!(i&30)&&!ja(l)&&(t=ll(n,i),t===2&&(r=m5(n),r!==0&&(i=r,t=B5(n,r))),t===1))throw e=qe,bt(n,0),ot(n,i),zn(n,K()),e;switch(n.finishedWork=l,n.finishedLanes=i,t){case 0:case 1:throw Error(x(345));case 2:St(n,fn,Bn);break;case 3:if(ot(n,i),(i&130023424)===i&&(t=E3+500-K(),10<t)){if(Hi(n,0)!==0)break;if(l=n.suspendedLanes,(l&i)!==i){hn(),n.pingedLanes|=n.suspendedLanes&l;break}n.timeoutHandle=_5(St.bind(null,n,fn,Bn),t);break}St(n,fn,Bn);break;case 4:if(ot(n,i),(i&4194240)===i)break;for(t=n.eventTimes,l=-1;0<i;){var o=31-Fn(i);r=1<<o,o=t[o],o>l&&(l=o),i&=~r}if(i=l,i=K()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_a(i/1960))-i,10<i){n.timeoutHandle=_5(St.bind(null,n,fn,Bn),i);break}St(n,fn,Bn);break;case 5:St(n,fn,Bn);break;default:throw Error(x(329))}}}return zn(n,K()),n.callbackNode===e?nr.bind(null,n):null}function B5(n,t){var e=Fe;return n.current.memoizedState.isDehydrated&&(bt(n,t).flags|=256),n=ll(n,t),n!==2&&(t=fn,fn=e,t!==null&&V5(t)),n}function V5(n){fn===null?fn=n:fn.push.apply(fn,n)}function ja(n){for(var t=n;;){if(t.flags&16384){var e=t.updateQueue;if(e!==null&&(e=e.stores,e!==null))for(var i=0;i<e.length;i++){var l=e[i],r=l.getSnapshot;l=l.value;try{if(!Rn(r(),l))return!1}catch{return!1}}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(n,t){for(t&=~b3,t&=~ml,n.suspendedLanes|=t,n.pingedLanes&=~t,n=n.expirationTimes;0<t;){var e=31-Fn(t),i=1<<e;n[e]=-1,t&=~i}}function V1(n){if(L&6)throw Error(x(327));ie();var t=Hi(n,0);if(!(t&1))return zn(n,K()),null;var e=ll(n,t);if(n.tag!==0&&e===2){var i=m5(n);i!==0&&(t=i,e=B5(n,i))}if(e===1)throw e=qe,bt(n,0),ot(n,t),zn(n,K()),e;if(e===6)throw Error(x(345));return n.finishedWork=n.current.alternate,n.finishedLanes=t,St(n,fn,Bn),zn(n,K()),null}function P3(n,t){var e=L;L|=1;try{return n(t)}finally{L=e,L===0&&(pe=K()+500,ul&&vt())}}function At(n){dt!==null&&dt.tag===0&&!(L&6)&&ie();var t=L;L|=1;var e=In.transition,i=A;try{if(In.transition=null,A=1,n)return n()}finally{A=i,In.transition=e,L=t,!(L&6)&&vt()}}function T3(){Mn=Zt.current,O(Zt)}function bt(n,t){n.finishedWork=null,n.finishedLanes=0;var e=n.timeoutHandle;if(e!==-1&&(n.timeoutHandle=-1,ta(e)),G!==null)for(e=G.return;e!==null;){var i=e;switch(c3(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vi();break;case 3:se(),O(mn),O(dn),v3();break;case 5:k3(i);break;case 4:se();break;case 13:O(W);break;case 19:O(W);break;case 10:y3(i.type._context);break;case 22:case 23:T3()}e=e.return}if(tn=n,G=n=yt(n.current,null),ln=Mn=t,J=0,qe=null,b3=ml=Ft=0,fn=Fe=null,It!==null){for(t=0;t<It.length;t++)if(e=It[t],i=e.interleaved,i!==null){e.interleaved=null;var l=i.next,r=e.pending;if(r!==null){var o=r.next;r.next=l,i.next=o}e.pending=i}It=null}return n}function tr(n,t){do{var e=G;try{if(m3(),bi.current=nl,qi){for(var i=U.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}qi=!1}if(Lt=0,nn=Z=U=null,Te=!1,Ye=0,C3.current=null,e===null||e.return===null){J=1,qe=t,G=null;break}n:{var r=n,o=e.return,s=e,d=t;if(t=ln,s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,m=s,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=P1(o);if(y!==null){y.flags&=-257,T1(y,o,s,r,t),y.mode&1&&E1(r,u,t),t=y,d=u;var k=t.updateQueue;if(k===null){var M=new Set;M.add(d),t.updateQueue=M}else k.add(d);break n}else{if(!(t&1)){E1(r,u,t),L3();break n}d=Error(x(426))}}else if(H&&s.mode&1){var I=P1(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),T1(I,o,s,r,t),f3(de(d,s));break n}}r=d=de(d,s),J!==4&&(J=2),Fe===null?Fe=[r]:Fe.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var h=D4(r,d,t);j1(r,h);break n;case 1:s=d;var p=r.type,c=r.stateNode;if(!(r.flags&128)&&(typeof p.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(gt===null||!gt.has(c)))){r.flags|=65536,t&=-t,r.lanes|=t;var z=O4(r,s,t);j1(r,z);break n}}r=r.return}while(r!==null)}lr(e)}catch(w){t=w,G===e&&e!==null&&(G=e=e.return);continue}break}while(!0)}function er(){var n=tl.current;return tl.current=nl,n===null?nl:n}function L3(){(J===0||J===3||J===2)&&(J=4),tn===null||!(Ft&268435455)&&!(ml&268435455)||ot(tn,ln)}function ll(n,t){var e=L;L|=2;var i=er();(tn!==n||ln!==t)&&(Bn=null,bt(n,t));do try{Sa();break}catch(l){tr(n,l)}while(!0);if(m3(),L=e,tl.current=i,G!==null)throw Error(x(261));return tn=null,ln=0,J}function Sa(){for(;G!==null;)ir(G)}function Na(){for(;G!==null&&!Jr();)ir(G)}function ir(n){var t=ar(n.alternate,n,Mn);n.memoizedProps=n.pendingProps,t===null?lr(n):G=t,C3.current=null}function lr(n){var t=n;do{var e=t.alternate;if(n=t.return,t.flags&32768){if(e=xa(e,t),e!==null){e.flags&=32767,G=e;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{J=6,G=null;return}}else if(e=Ma(e,t,Mn),e!==null){G=e;return}if(t=t.sibling,t!==null){G=t;return}G=t=n}while(t!==null);J===0&&(J=5)}function St(n,t,e){var i=A,l=In.transition;try{In.transition=null,A=1,Ia(n,t,e,i)}finally{In.transition=l,A=i}return null}function Ia(n,t,e,i){do ie();while(dt!==null);if(L&6)throw Error(x(327));e=n.finishedWork;var l=n.finishedLanes;if(e===null)return null;if(n.finishedWork=null,n.finishedLanes=0,e===n.current)throw Error(x(177));n.callbackNode=null,n.callbackPriority=0;var r=e.lanes|e.childLanes;if(s0(n,r),n===tn&&(G=tn=null,ln=0),!(e.subtreeFlags&2064)&&!(e.flags&2064)||vi||(vi=!0,or(Oi,function(){return ie(),null})),r=(e.flags&15990)!==0,e.subtreeFlags&15990||r){r=In.transition,In.transition=null;var o=A;A=1;var s=L;L|=4,C3.current=null,va(n,e),J4(e,n),K0(v5),$i=!!k5,v5=k5=null,n.current=e,wa(e),qr(),L=s,A=o,In.transition=r}else n.current=e;if(vi&&(vi=!1,dt=n,il=l),r=n.pendingLanes,r===0&&(gt=null),e0(e.stateNode),zn(n,K()),t!==null)for(i=n.onRecoverableError,e=0;e<t.length;e++)l=t[e],i(l.value,{componentStack:l.stack,digest:l.digest});if(el)throw el=!1,n=W5,W5=null,n;return il&1&&n.tag!==0&&ie(),r=n.pendingLanes,r&1?n===U5?Ae++:(Ae=0,U5=n):Ae=0,vt(),null}function ie(){if(dt!==null){var n=D2(il),t=In.transition,e=A;try{if(In.transition=null,A=16>n?16:n,dt===null)var i=!1;else{if(n=dt,dt=null,il=0,L&6)throw Error(x(331));var l=L;for(L|=4,j=n.current;j!==null;){var r=j,o=r.child;if(j.flags&16){var s=r.deletions;if(s!==null){for(var d=0;d<s.length;d++){var u=s[d];for(j=u;j!==null;){var m=j;switch(m.tag){case 0:case 11:case 15:Le(8,m,r)}var g=m.child;if(g!==null)g.return=m,j=g;else for(;j!==null;){m=j;var f=m.sibling,y=m.return;if(G4(m),m===u){j=null;break}if(f!==null){f.return=y,j=f;break}j=y}}}var k=r.alternate;if(k!==null){var M=k.child;if(M!==null){k.child=null;do{var I=M.sibling;M.sibling=null,M=I}while(M!==null)}}j=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,j=o;else n:for(;j!==null;){if(r=j,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Le(9,r,r.return)}var h=r.sibling;if(h!==null){h.return=r.return,j=h;break n}j=r.return}}var p=n.current;for(j=p;j!==null;){o=j;var c=o.child;if(o.subtreeFlags&2064&&c!==null)c.return=o,j=c;else n:for(o=p;j!==null;){if(s=j,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:gl(9,s)}}catch(w){X(s,s.return,w)}if(s===o){j=null;break n}var z=s.sibling;if(z!==null){z.return=s.return,j=z;break n}j=s.return}}if(L=l,vt(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(ol,n)}catch{}i=!0}return i}finally{A=e,In.transition=t}}return!1}function X1(n,t,e){t=de(e,t),t=D4(n,t,1),n=ft(n,t,1),t=hn(),n!==null&&(ti(n,1,t),zn(n,t))}function X(n,t,e){if(n.tag===3)X1(n,n,e);else for(;t!==null;){if(t.tag===3){X1(t,n,e);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gt===null||!gt.has(i))){n=de(e,n),n=O4(t,n,1),t=ft(t,n,1),n=hn(),t!==null&&(ti(t,1,n),zn(t,n));break}}t=t.return}}function Ca(n,t,e){var i=n.pingCache;i!==null&&i.delete(t),t=hn(),n.pingedLanes|=n.suspendedLanes&e,tn===n&&(ln&e)===e&&(J===4||J===3&&(ln&130023424)===ln&&500>K()-E3?bt(n,0):b3|=e),zn(n,t)}function rr(n,t){t===0&&(n.mode&1?(t=ui,ui<<=1,!(ui&130023424)&&(ui=4194304)):t=1);var e=hn();n=Zn(n,t),n!==null&&(ti(n,t,e),zn(n,e))}function ba(n){var t=n.memoizedState,e=0;t!==null&&(e=t.retryLane),rr(n,e)}function Ea(n,t){var e=0;switch(n.tag){case 13:var i=n.stateNode,l=n.memoizedState;l!==null&&(e=l.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(x(314))}i!==null&&i.delete(t),rr(n,e)}var ar;ar=function(n,t,e){if(n!==null)if(n.memoizedProps!==t.pendingProps||mn.current)gn=!0;else{if(!(n.lanes&e)&&!(t.flags&128))return gn=!1,za(n,t,e);gn=!!(n.flags&131072)}else gn=!1,H&&t.flags&1048576&&p4(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Pi(n,t),n=t.pendingProps;var l=re(t,dn.current);ee(t,e),l=_3(null,t,i,n,l,e);var r=j3();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yn(i)?(r=!0,Xi(t)):r=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,M3(t),l.updater=fl,t.stateNode=l,l._reactInternals=t,E5(t,i,n,e),t=L5(null,t,i,!0,r,e)):(t.tag=0,H&&r&&u3(t),pn(null,t,l,e),t=t.child),t;case 16:i=t.elementType;n:{switch(Pi(n,t),n=t.pendingProps,l=i._init,i=l(i._payload),t.type=i,l=t.tag=Ta(i),n=Pn(i,n),l){case 0:t=T5(null,t,i,n,e);break n;case 1:t=A1(null,t,i,n,e);break n;case 11:t=L1(null,t,i,n,e);break n;case 14:t=F1(null,t,i,Pn(i.type,n),e);break n}throw Error(x(306,i,""))}return t;case 0:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Pn(i,l),T5(n,t,i,l,e);case 1:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Pn(i,l),A1(n,t,i,l,e);case 3:n:{if(U4(t),n===null)throw Error(x(387));i=t.pendingProps,r=t.memoizedState,l=r.element,m4(n,t),Zi(t,i,null,e);var o=t.memoizedState;if(i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){l=de(Error(x(423)),t),t=R1(n,t,i,e,l);break n}else if(i!==l){l=de(Error(x(424)),t),t=R1(n,t,i,e,l);break n}else for(xn=ct(t.stateNode.containerInfo.firstChild),kn=t,H=!0,Ln=null,e=f4(t,null,i,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(ae(),i===l){t=Jn(n,t,e);break n}pn(n,t,i,e)}t=t.child}return t;case 5:return y4(t),n===null&&I5(t),i=t.type,l=t.pendingProps,r=n!==null?n.memoizedProps:null,o=l.children,w5(i,l)?o=null:r!==null&&w5(i,r)&&(t.flags|=32),W4(n,t),pn(n,t,o,e),t.child;case 6:return n===null&&I5(t),null;case 13:return B4(n,t,e);case 4:return x3(t,t.stateNode.containerInfo),i=t.pendingProps,n===null?t.child=oe(t,null,i,e):pn(n,t,i,e),t.child;case 11:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Pn(i,l),L1(n,t,i,l,e);case 7:return pn(n,t,t.pendingProps,e),t.child;case 8:return pn(n,t,t.pendingProps.children,e),t.child;case 12:return pn(n,t,t.pendingProps.children,e),t.child;case 10:n:{if(i=t.type._context,l=t.pendingProps,r=t.memoizedProps,o=l.value,R(Gi,i._currentValue),i._currentValue=o,r!==null)if(Rn(r.value,o)){if(r.children===l.children&&!mn.current){t=Jn(n,t,e);break n}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var s=r.dependencies;if(s!==null){o=r.child;for(var d=s.firstContext;d!==null;){if(d.context===i){if(r.tag===1){d=Kn(-1,e&-e),d.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?d.next=d:(d.next=m.next,m.next=d),u.pending=d}}r.lanes|=e,d=r.alternate,d!==null&&(d.lanes|=e),C5(r.return,e,t),s.lanes|=e;break}d=d.next}}else if(r.tag===10)o=r.type===t.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error(x(341));o.lanes|=e,s=o.alternate,s!==null&&(s.lanes|=e),C5(o,e,t),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===t){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}pn(n,t,l.children,e),t=t.child}return t;case 9:return l=t.type,i=t.pendingProps.children,ee(t,e),l=Cn(l),i=i(l),t.flags|=1,pn(n,t,i,e),t.child;case 14:return i=t.type,l=Pn(i,t.pendingProps),l=Pn(i.type,l),F1(n,t,i,l,e);case 15:return H4(n,t,t.type,t.pendingProps,e);case 17:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:Pn(i,l),Pi(n,t),t.tag=1,yn(i)?(n=!0,Xi(t)):n=!1,ee(t,e),R4(t,i,l),E5(t,i,l,e),L5(null,t,i,!0,n,e);case 19:return V4(n,t,e);case 22:return $4(n,t,e)}throw Error(x(156,t.tag))};function or(n,t){return L2(n,t)}function Pa(n,t,e,i){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(n,t,e,i){return new Pa(n,t,e,i)}function F3(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ta(n){if(typeof n=="function")return F3(n)?1:0;if(n!=null){if(n=n.$$typeof,n===n3)return 11;if(n===t3)return 14}return 2}function yt(n,t){var e=n.alternate;return e===null?(e=Nn(n.tag,t,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=t,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&14680064,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e}function Fi(n,t,e,i,l,r){var o=2;if(i=n,typeof n=="function")F3(n)&&(o=1);else if(typeof n=="string")o=5;else n:switch(n){case $t:return Et(e.children,l,r,t);case q5:o=8,l|=8;break;case t5:return n=Nn(12,e,t,l|2),n.elementType=t5,n.lanes=r,n;case e5:return n=Nn(13,e,t,l),n.elementType=e5,n.lanes=r,n;case i5:return n=Nn(19,e,t,l),n.elementType=i5,n.lanes=r,n;case y2:return yl(e,l,r,t);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case g2:o=10;break n;case m2:o=9;break n;case n3:o=11;break n;case t3:o=14;break n;case lt:o=16,i=null;break n}throw Error(x(130,n==null?n:typeof n,""))}return t=Nn(o,e,t,l),t.elementType=n,t.type=i,t.lanes=r,t}function Et(n,t,e,i){return n=Nn(7,n,i,t),n.lanes=e,n}function yl(n,t,e,i){return n=Nn(22,n,i,t),n.elementType=y2,n.lanes=e,n.stateNode={isHidden:!1},n}function Gl(n,t,e){return n=Nn(6,n,null,t),n.lanes=e,n}function Yl(n,t,e){return t=Nn(4,n.children!==null?n.children:[],n.key,t),t.lanes=e,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}function La(n,t,e,i,l){this.tag=t,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function A3(n,t,e,i,l,r,o,s,d){return n=new La(n,t,e,s,d),t===1?(t=1,r===!0&&(t|=8)):t=0,r=Nn(3,null,null,t),n.current=r,r.stateNode=n,r.memoizedState={element:i,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},M3(r),n}function Fa(n,t,e){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:i==null?null:""+i,children:n,containerInfo:t,implementation:e}}function sr(n){if(!n)return Mt;n=n._reactInternals;n:{if(Dt(n)!==n||n.tag!==1)throw Error(x(170));var t=n;do{switch(t.tag){case 3:t=t.stateNode.context;break n;case 1:if(yn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break n}}t=t.return}while(t!==null);throw Error(x(171))}if(n.tag===1){var e=n.type;if(yn(e))return s4(n,e,t)}return t}function dr(n,t,e,i,l,r,o,s,d){return n=A3(e,i,!0,n,l,r,o,s,d),n.context=sr(null),e=n.current,i=hn(),l=mt(e),r=Kn(i,l),r.callback=t??null,ft(e,r,l),n.current.lanes=l,ti(n,l,i),zn(n,i),n}function zl(n,t,e,i){var l=t.current,r=hn(),o=mt(l);return e=sr(e),t.context===null?t.context=e:t.pendingContext=e,t=Kn(r,o),t.payload={element:n},i=i===void 0?null:i,i!==null&&(t.callback=i),n=ft(l,t,o),n!==null&&(An(n,l,o,r),Ci(n,l,o)),o}function rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Q1(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<t?e:t}}function R3(n,t){Q1(n,t),(n=n.alternate)&&Q1(n,t)}function Aa(){return null}var pr=typeof reportError=="function"?reportError:function(n){console.error(n)};function D3(n){this._internalRoot=n}Ml.prototype.render=D3.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(x(409));zl(n,t,null,null)};Ml.prototype.unmount=D3.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;At(function(){zl(null,n,null,null)}),t[Yn]=null}};function Ml(n){this._internalRoot=n}Ml.prototype.unstable_scheduleHydration=function(n){if(n){var t=$2();n={blockedOn:null,target:n,priority:t};for(var e=0;e<at.length&&t!==0&&t<at[e].priority;e++);at.splice(e,0,n),e===0&&U2(n)}};function O3(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function K1(){}function Ra(n,t,e,i,l){if(l){if(typeof i=="function"){var r=i;i=function(){var u=rl(o);r.call(u)}}var o=dr(t,i,n,0,null,!1,!1,"",K1);return n._reactRootContainer=o,n[Yn]=o.current,Ve(n.nodeType===8?n.parentNode:n),At(),o}for(;l=n.lastChild;)n.removeChild(l);if(typeof i=="function"){var s=i;i=function(){var u=rl(d);s.call(u)}}var d=A3(n,0,!1,null,null,!1,!1,"",K1);return n._reactRootContainer=d,n[Yn]=d.current,Ve(n.nodeType===8?n.parentNode:n),At(function(){zl(t,d,e,i)}),d}function kl(n,t,e,i,l){var r=e._reactRootContainer;if(r){var o=r;if(typeof l=="function"){var s=l;l=function(){var d=rl(o);s.call(d)}}zl(t,o,n,l)}else o=Ra(e,t,n,l,i);return rl(o)}O2=function(n){switch(n.tag){case 3:var t=n.stateNode;if(t.current.memoizedState.isDehydrated){var e=Se(t.pendingLanes);e!==0&&(l3(t,e|1),zn(t,K()),!(L&6)&&(pe=K()+500,vt()))}break;case 13:At(function(){var i=Zn(n,1);if(i!==null){var l=hn();An(i,n,1,l)}}),R3(n,1)}};r3=function(n){if(n.tag===13){var t=Zn(n,134217728);if(t!==null){var e=hn();An(t,n,134217728,e)}R3(n,134217728)}};H2=function(n){if(n.tag===13){var t=mt(n),e=Zn(n,t);if(e!==null){var i=hn();An(e,n,t,i)}R3(n,t)}};$2=function(){return A};W2=function(n,t){var e=A;try{return A=n,t()}finally{A=e}};c5=function(n,t,e){switch(t){case"input":if(a5(n,e),t=e.name,e.type==="radio"&&t!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<e.length;t++){var i=e[t];if(i!==n&&i.form===n.form){var l=hl(i);if(!l)throw Error(x(90));M2(i),a5(i,l)}}}break;case"textarea":k2(n,e);break;case"select":t=e.value,t!=null&&Jt(n,!!e.multiple,t,!1)}};I2=P3;C2=At;var Da={usingClientEntryPoint:!1,Events:[ii,Vt,hl,S2,N2,P3]},we={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oa={bundleType:we.bundleType,version:we.version,rendererPackageName:we.rendererPackageName,rendererConfig:we.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=P2(n),n===null?null:n.stateNode},findFiberByHostInstance:we.findFiberByHostInstance||Aa,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{ol=wi.inject(Oa),Wn=wi}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Da;wn.createPortal=function(n,t){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!O3(t))throw Error(x(200));return Fa(n,t,null,e)};wn.createRoot=function(n,t){if(!O3(n))throw Error(x(299));var e=!1,i="",l=pr;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=A3(n,1,!1,null,null,e,!1,i,l),n[Yn]=t.current,Ve(n.nodeType===8?n.parentNode:n),new D3(t)};wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(x(188)):(n=Object.keys(n).join(","),Error(x(268,n)));return n=P2(t),n=n===null?null:n.stateNode,n};wn.flushSync=function(n){return At(n)};wn.hydrate=function(n,t,e){if(!xl(t))throw Error(x(200));return kl(null,n,t,!0,e)};wn.hydrateRoot=function(n,t,e){if(!O3(n))throw Error(x(405));var i=e!=null&&e.hydratedSources||null,l=!1,r="",o=pr;if(e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),t=dr(t,null,n,1,e??null,l,!1,r,o),n[Yn]=t.current,Ve(n),i)for(n=0;n<i.length;n++)e=i[n],l=e._getVersion,l=l(e._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[e,l]:t.mutableSourceEagerHydrationData.push(e,l);return new Ml(t)};wn.render=function(n,t,e){if(!xl(t))throw Error(x(200));return kl(null,n,t,!1,e)};wn.unmountComponentAtNode=function(n){if(!xl(n))throw Error(x(40));return n._reactRootContainer?(At(function(){kl(null,null,n,!1,function(){n._reactRootContainer=null,n[Yn]=null})}),!0):!1};wn.unstable_batchedUpdates=P3;wn.unstable_renderSubtreeIntoContainer=function(n,t,e,i){if(!xl(e))throw Error(x(200));if(n==null||n._reactInternals===void 0)throw Error(x(38));return kl(n,t,e,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function hr(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hr)}catch(n){console.error(n)}}hr(),h2.exports=wn;var Ha=h2.exports,G1=Ha;ql.createRoot=G1.createRoot,ql.hydrateRoot=G1.hydrateRoot;function $a({sensors:n={},pumps:t=[],fans:e=[]}){var u;const i=t.slice(0,3),l=t.slice(3,6),r=t.reduce((m,g)=>m+(g.saved_kwh||0),0),o=t.reduce((m,g)=>m+(g.run_hours||0),0),s=t.filter(m=>m.running).length,d=e.filter(m=>m.running_fwd||m.running_bwd).length;return a.jsxs("div",{className:"dashboard",children:[a.jsxs("section",{className:"dashboard-section",children:[a.jsx("h2",{children:"📊 시스템 개요"}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:"⚡"}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-label",children:"총 절감 전력"}),a.jsxs("div",{className:"stat-value",children:[r.toLocaleString()," kWh"]})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:"⏱️"}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-label",children:"총 운전 시간"}),a.jsxs("div",{className:"stat-value",children:[o.toLocaleString()," h"]})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:"🔄"}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-label",children:"운전 중인 펌프"}),a.jsxs("div",{className:"stat-value",children:[s," / ",t.length]})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:"🌀"}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-label",children:"운전 중인 팬"}),a.jsxs("div",{className:"stat-value",children:[d," / ",e.length]})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:"🔥"}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-label",children:"M/E 부하"}),a.jsxs("div",{className:"stat-value",children:[((u=n.PU1)==null?void 0:u.toFixed(1))||0,"%"]})]})]})]})]}),a.jsxs("section",{className:"dashboard-section",children:[a.jsx("h2",{children:"🌡️ 센서 데이터"}),a.jsxs("div",{className:"sensor-grid",children:[a.jsx(tt,{label:"CSW 펌프 토출 온도 (TX1)",value:n.TX1,unit:"°C",icon:"🌡️"}),a.jsx(tt,{label:"FW Cooler 1 SW Out (TX2)",value:n.TX2,unit:"°C",icon:"🌡️"}),a.jsx(tt,{label:"FW Cooler 2 SW Out (TX3)",value:n.TX3,unit:"°C",icon:"🌡️"}),a.jsx(tt,{label:"FW Cooler FW In (TX4)",value:n.TX4,unit:"°C",icon:"🌡️"}),a.jsx(tt,{label:"FW Cooler FW Out (TX5)",value:n.TX5,unit:"°C",icon:"🌡️"}),a.jsx(tt,{label:"CSW 펌프 토출 압력 (DPX1)",value:n.DPX1,unit:"kg/cm²",icon:"💨"})]}),a.jsxs("div",{className:"sensor-grid",style:{marginTop:"1rem"},children:[a.jsx(tt,{label:"E/R Inside Temp (TX6)",value:n.TX6,unit:"°C",icon:"🌡️"}),a.jsx(tt,{label:"E/R Outside Temp (TX7)",value:n.TX7,unit:"°C",icon:"🌡️"})]})]}),a.jsxs("section",{className:"dashboard-section",children:[a.jsx("h2",{children:"🌊 해수 펌프 (Sea Water Pump)"}),a.jsx("div",{className:"pump-grid",children:i.map((m,g)=>a.jsx(Y1,{pump:m},g))})]}),a.jsxs("section",{className:"dashboard-section",children:[a.jsx("h2",{children:"💧 청수 펌프 (Fresh Water Pump)"}),a.jsx("div",{className:"pump-grid",children:l.map((m,g)=>a.jsx(Y1,{pump:m},g))})]}),a.jsxs("section",{className:"dashboard-section",children:[a.jsx("h2",{children:"🌀 Engine Room 팬 (E/R Fan)"}),a.jsx("div",{className:"pump-grid",style:{gridTemplateColumns:"repeat(4, 1fr)"},children:e.map((m,g)=>a.jsx(Wa,{fan:m},g))})]})]})}function tt({label:n,value:t,unit:e,icon:i}){return a.jsxs("div",{className:"sensor-card",children:[a.jsx("div",{className:"sensor-icon",children:i}),a.jsxs("div",{className:"sensor-info",children:[a.jsx("div",{className:"sensor-label",children:n}),a.jsxs("div",{className:"sensor-value",children:[t!==void 0?t.toFixed(1):"--"," ",e]})]})]})}function Y1({pump:n}){var r,o,s;const t=n.running,e=n.saved_ratio||0,l=n.auto_mode&&n.vfd_mode?{text:"⚡ ESS 모드",class:"ess-mode"}:n.auto_mode&&!n.vfd_mode?{text:"🔄 자동/Bypass",class:"auto-bypass-mode"}:!n.auto_mode&&n.vfd_mode?{text:"🔧 수동/VFD",class:"manual-vfd-mode"}:{text:"⚙️ 수동/Bypass",class:"manual-bypass-mode"};return a.jsxs("div",{className:`pump-card ${t?"running":"stopped"}`,children:[a.jsxs("div",{className:"pump-header",children:[a.jsx("h3",{children:n.name}),a.jsxs("div",{className:"pump-header-badges",children:[a.jsx("span",{className:`mode-badge ${l.class}`,children:l.text}),a.jsx("span",{className:`pump-status-badge ${t?"active":"inactive"}`,children:t?"🟢 운전중":"⚪ 정지"})]})]}),a.jsxs("div",{className:"pump-details",children:[a.jsxs("div",{className:"pump-detail-row",children:[a.jsx("span",{className:"detail-label",children:"주파수"}),a.jsxs("span",{className:"detail-value",children:[((r=n.frequency)==null?void 0:r.toFixed(1))||0," Hz"]})]}),a.jsxs("div",{className:"pump-detail-row",children:[a.jsx("span",{className:"detail-label",children:"소비 전력"}),a.jsxs("span",{className:"detail-value",children:[n.power_kw||0," kW"]})]}),a.jsxs("div",{className:"pump-detail-row",children:[a.jsx("span",{className:"detail-label",children:"절감 전력"}),a.jsxs("span",{className:"detail-value highlight",children:[((o=n.saved_kwh)==null?void 0:o.toLocaleString())||0," kWh"]})]}),a.jsxs("div",{className:"pump-detail-row",children:[a.jsx("span",{className:"detail-label",children:"절감률"}),a.jsxs("span",{className:"detail-value highlight",children:[e,"%"]})]}),a.jsxs("div",{className:"pump-detail-row",children:[a.jsx("span",{className:"detail-label",children:"운전 시간"}),a.jsxs("span",{className:"detail-value",children:[((s=n.run_hours)==null?void 0:s.toLocaleString())||0," h"]})]})]})]})}function Wa({fan:n}){var r,o,s;const t=n.running_fwd||n.running_bwd,e=n.saved_ratio||0,l=n.auto_mode&&n.vfd_mode?{text:"⚡ ESS 모드",class:"ess-mode"}:n.auto_mode&&!n.vfd_mode?{text:"🔄 자동/Bypass",class:"auto-bypass-mode"}:!n.auto_mode&&n.vfd_mode?{text:"🔧 수동/VFD",class:"manual-vfd-mode"}:{text:"⚙️ 수동/Bypass",class:"manual-bypass-mode"};return a.jsxs("div",{className:`pump-card ${t?"running":"stopped"}`,children:[a.jsxs("div",{className:"pump-header",children:[a.jsx("h3",{children:n.name}),a.jsxs("div",{className:"pump-header-badges",children:[a.jsx("span",{className:`mode-badge ${l.class}`,children:l.text}),a.jsx("span",{className:`pump-status-badge ${t?"active":"inactive"}`,children:n.running_fwd?"🟢 정방향":n.running_bwd?"🟡 역방향":"⚪ 정지"})]})]}),a.jsxs("div",{className:"pump-details",children:[a.jsxs("div",{className:"pump-detail-row",children:[a.jsx("span",{className:"detail-label",children:"주파수"}),a.jsxs("span",{className:"detail-value",children:[((r=n.frequency)==null?void 0:r.toFixed(1))||0," Hz"]})]}),a.jsxs("div",{className:"pump-detail-row",children:[a.jsx("span",{className:"detail-label",children:"소비 전력"}),a.jsxs("span",{className:"detail-value",children:[n.power_kw||0," kW"]})]}),a.jsxs("div",{className:"pump-detail-row",children:[a.jsx("span",{className:"detail-label",children:"절감 전력"}),a.jsxs("span",{className:"detail-value highlight",children:[((o=n.saved_kwh)==null?void 0:o.toLocaleString())||0," kWh"]})]}),a.jsxs("div",{className:"pump-detail-row",children:[a.jsx("span",{className:"detail-label",children:"절감률"}),a.jsxs("span",{className:"detail-value highlight",children:[e,"%"]})]}),a.jsxs("div",{className:"pump-detail-row",children:[a.jsx("span",{className:"detail-label",children:"운전 시간"}),a.jsxs("span",{className:"detail-value",children:[((s=n.run_hours)==null?void 0:s.toLocaleString())||0," h"]})]})]})]})}const Z1={TX1:{labelId:"text147",unit:"°C",decimal:1},TX2:{labelId:"text1125",unit:"°C",decimal:1},TX3:{labelId:"text1147",unit:"°C",decimal:1},TX4:{labelId:"text278",unit:"°C",decimal:1},TX5:{labelId:"text1151",unit:"°C",decimal:1},PX1:{labelId:"text1073",unit:" kg/cm²",decimal:2},DPX1:{labelId:"text1073",unit:" kg/cm²",decimal:2}},Ua={0:{name:"LT_Pump_1",symbolIds:{mode:"text1201",hz:"LT_Pump1_Hz",runningHour:"text1262"}},1:{name:"LT_Pump_2",symbolIds:{mode:"text1218",hz:"LT_Pump2_Hz",runningHour:"text1290"}},2:{name:"LT_Pump_3",symbolIds:{mode:"text1235",hz:"LT_Pump3_Hz",runningHour:"text1318"}},3:{name:"SW_Pump_1",symbolIds:{mode:"text1335",hz:"SW_Pump1_Hz",runningHour:"text1396"}},4:{name:"SW_Pump_2",symbolIds:{mode:"text1352",hz:"text1414",runningHour:"text1423"}},5:{name:"SW_Pump_3",symbolIds:{mode:"text1369",hz:"SW_Pump3_Hz",runningHour:"text1450"}}},Ba=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 1024 768"
   version="1.1"
   stroke-linecap="round"
   stroke-linejoin="round"
   fill-rule="evenodd"
   xml:space="preserve"
   id="svg1465"
   sodipodi:docname="도면1027_version1-Model(final).svg"
   inkscape:version="1.4.2 (f4327f4, 2025-05-13)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
   id="namedview1465"
   pagecolor="#ffffff"
   bordercolor="#000000"
   borderopacity="0.25"
   inkscape:showpageshadow="2"
   inkscape:pageopacity="0.0"
   inkscape:pagecheckerboard="0"
   inkscape:deskcolor="#d1d1d1"
   inkscape:zoom="1.0507812"
   inkscape:cx="478.69145"
   inkscape:cy="260.28253"
   inkscape:window-width="1920"
   inkscape:window-height="1009"
   inkscape:window-x="-8"
   inkscape:window-y="-8"
   inkscape:window-maximized="1"
   inkscape:current-layer="g1253" />
<defs
   id="defs1">
<clipPath
   id="clipId0">
<path
   d="M0,768 1024,768 1024,0 0,0 z"
   id="path1" />
</clipPath>
</defs>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.1"
   id="g1" />
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g2">
<path
   d="M10.0392,718.609 1013.96,718.609 1013.96,49.3909 10.0392,49.3909 z"
   id="path2" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g3">
<path
   d="M579.337,548.613 867.481,548.613 867.481,461.159 579.337,461.159 z"
   id="path3" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g4">
<polyline
   points="579.337,548.613 867.481,548.613 867.481,461.159 579.337,461.159 579.337,548.613 "
   id="polyline3" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g5">
<path
   d="M234.623,606.128 336.621,606.128 336.621,355.479 234.623,355.479 z"
   id="path4" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g6">
<polyline
   points="234.623,606.128 336.621,606.128 336.621,355.479 234.623,355.479 234.623,606.128 "
   id="polyline5" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,102)"
   stroke="rgb(0,0,102)"
   stroke-width="0"
   id="g8">
<text
   transform="matrix(15.627 0 -0 15.6361 384.333 92.4066)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text6">COOLING</text>
<text
   transform="matrix(15.6175 0 -0 15.6361 480.868 92.4016)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text7">WATER</text>
<text
   transform="matrix(15.605 0 -0 15.6361 557.939 92.4066)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text8">SYSTEM</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(192,0,0)"
   stroke="rgb(192,0,0)"
   stroke-width="0"
   id="g10">
<text
   transform="matrix(7.85715 0 -0 7.84489 58.3613 195.696)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text9">To/From Aux</text>
<text
   transform="matrix(7.84277 0 -0 7.84489 58.4707 207.658)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text10">C.F.W. System</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,80)"
   stroke="rgb(0,176,80)"
   stroke-width="1"
   id="g48">
<path
   d="M106.418,178.376 106.418,177.195 107.858,178.376 z"
   id="path10" />
<path
   d="M107.858,178.376 106.418,177.195 107.858,177.195 z"
   id="path11" />
<path
   d="M108.07,180.895 107.858,180.839 108.07,180.028 z"
   id="path12" />
<path
   d="M107.858,178.376 107.858,177.195 108.07,178.376 z"
   id="path13" />
<path
   d="M108.07,178.376 107.858,177.195 108.07,177.195 z"
   id="path14" />
<path
   d="M108.07,175.542 107.858,174.732 108.07,174.675 z"
   id="path15" />
<path
   d="M108.07,180.895 108.07,180.028 108.661,181.051 z"
   id="path16" />
<path
   d="M108.661,181.051 108.07,180.028 108.661,179.684 z"
   id="path17" />
<path
   d="M108.07,178.376 108.07,177.195 108.661,178.376 z"
   id="path18" />
<path
   d="M108.661,178.376 108.07,177.195 108.661,177.195 z"
   id="path19" />
<path
   d="M108.07,175.542 108.07,174.675 108.661,175.887 z"
   id="path20" />
<path
   d="M108.661,175.887 108.07,174.675 108.661,174.519 z"
   id="path21" />
<path
   d="M108.661,181.051 108.661,179.684 110.904,179.742 z"
   id="path22" />
<path
   d="M110.904,179.742 108.661,179.684 110.904,178.376 z"
   id="path23" />
<path
   d="M108.661,178.376 108.661,177.195 110.904,178.376 z"
   id="path24" />
<path
   d="M110.904,178.376 108.661,177.195 110.904,177.195 z"
   id="path25" />
<path
   d="M108.661,175.887 108.661,174.519 110.904,177.195 z"
   id="path26" />
<path
   d="M110.904,177.195 108.661,174.519 110.904,175.828 z"
   id="path27" />
<path
   d="M110.904,179.742 110.904,178.376 110.904,179.742 z"
   id="path28" />
<path
   d="M110.904,179.742 110.904,178.376 110.904,178.376 z"
   id="path29" />
<path
   d="M110.904,178.376 110.904,177.195 110.904,178.376 z"
   id="path30" />
<path
   d="M110.904,178.376 110.904,177.195 110.904,177.195 z"
   id="path31" />
<path
   d="M110.904,177.195 110.904,175.828 110.904,177.195 z"
   id="path32" />
<path
   d="M110.904,177.195 110.904,175.828 110.904,175.828 z"
   id="path33" />
<path
   d="M110.904,179.742 110.904,178.376 111.915,179.152 z"
   id="path34" />
<path
   d="M111.915,179.152 110.904,178.376 111.915,178.376 z"
   id="path35" />
<path
   d="M110.904,178.376 110.904,177.195 111.915,177.785 z"
   id="path36" />
<path
   d="M110.904,177.195 110.904,175.828 111.915,177.195 z"
   id="path37" />
<path
   d="M111.915,177.195 110.904,175.828 111.915,176.419 z"
   id="path38" />
<path
   d="M111.915,179.152 111.915,178.376 112.792,178.64 z"
   id="path39" />
<path
   d="M112.792,178.64 111.915,178.376 112.792,178.376 z"
   id="path40" />
<path
   d="M112.792,178.297 111.915,177.785 112.792,177.274 z"
   id="path41" />
<path
   d="M111.915,177.195 111.915,176.419 112.792,177.195 z"
   id="path42" />
<path
   d="M112.792,177.195 111.915,176.419 112.792,176.931 z"
   id="path43" />
<path
   d="M112.792,178.64 112.792,178.376 113.091,178.465 z"
   id="path44" />
<path
   d="M113.091,178.465 112.792,178.376 113.091,178.376 z"
   id="path45" />
<path
   d="M112.792,177.195 112.792,176.931 113.091,177.195 z"
   id="path46" />
<path
   d="M113.091,177.195 112.792,176.931 113.091,177.105 z"
   id="path47" />
<path
   d="M113.091,178.465 113.091,177.105 114.256,177.785 z"
   id="path48" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g49">
<polyline
   points="757.975,347.12 712.265,347.12 "
   id="polyline48" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g50">
<polyline
   points="757.692,355.053 711.982,355.053 "
   id="polyline49" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(64,64,64)"
   stroke="rgb(64,64,64)"
   stroke-width="0"
   id="g51">
<text
   transform="matrix(5.8724 0 -0 5.90043 756.984 335.903)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text50">10K 125A</text>
<text
   transform="matrix(5.89892 0 -0 5.90043 756.943 373.562)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text51">10K 80A</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(208,206,206)"
   stroke="rgb(208,206,206)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g52">
<path
   d="M261.87,279.5 308.619,279.5 308.619,249.656 261.87,249.656 z"
   id="path51" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.6"
   id="g53">
<polyline
   points="261.87,279.5 308.619,279.5 308.619,249.656 261.87,249.656 261.87,279.5 "
   id="polyline52" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(64,64,64)"
   stroke="rgb(64,64,64)"
   stroke-width="0"
   id="g54">
<text
   transform="matrix(7.85241 0 -0 7.84489 278.349 261.996)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text53">EP</text>
<text
   transform="matrix(7.84695 0 -0 7.84489 274.29 275.221)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text54">CON</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g59">
<text
   transform="matrix(6.17555 0 -0 6.16863 396.834 475.449)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text55">3</text>
<text
   transform="matrix(6.17094 0 -0 6.16863 401.463 475.46)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text56">-</text>
<text
   transform="matrix(6.17935 0 -0 6.16863 405.616 475.507)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text57">Way</text>
<text
   transform="matrix(6.16019 0 -0 6.16863 382.301 485.849)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text58">Temp. Control</text>
<text
   transform="matrix(6.18175 0 -0 6.16863 398.722 496.239)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text59">Valve</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g61">
<polyline
   points="957.5,264.113 960.609,265.066 "
   id="polyline59" />
<polyline
   points="958.917,259.494 962.025,260.446 "
   id="polyline60" />
<polyline
   points="960.333,254.866 963.442,255.826 "
   id="polyline61" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,80)"
   stroke-width="0.7"
   id="g67">
<polyline
   points="58.3465,217.168 152.694,217.168 152.694,476.884 "
   id="polyline62" />
<polyline
   points="391.067,452.612 375.484,452.612 375.484,178.163 "
   id="polyline63" />
<polyline
   points="58.3465,177.88 452.596,177.88 "
   id="polyline64" />
<polyline
   points="58.8187,437.407 135.222,437.407 135.222,220.945 "
   id="polyline65" />
<polyline
   points="202.654,563.015 365.567,563.015 365.567,388.864 202.654,388.864 202.654,563.015 "
   id="polyline66" />
<polyline
   points="393.333,459.884 393.333,476.317 58.8187,476.317 "
   id="polyline67" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g69">
<polyline
   points="348.662,389.147 348.662,382.253 "
   id="polyline68" />
<polyline
   points="344.884,382.064 352.44,382.064 "
   id="polyline69" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g70">
<path
   d="M343.09,384.992 348.568,388.817 343.09,392.642 343.09,392.642 z"
   id="path69" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g71">
<polyline
   points="343.09,384.992 348.568,388.817 343.09,392.642 343.09,384.992 "
   id="polyline70" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g72">
<path
   d="M354.14,392.642 348.568,388.817 354.14,384.992 354.14,384.992 z"
   id="path71" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g73">
<polyline
   points="354.14,392.642 348.568,388.817 354.14,384.992 354.14,392.642 "
   id="polyline72" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g75">
<polyline
   points="204.732,650.752 249.403,650.752 249.403,682.957 "
   id="polyline73" />
<polyline
   points="970.1,595.653 967.725,612.102 962.767,627.607 955.441,641.923 945.96,654.802 934.54,665.997 921.395,675.26 906.738,682.345 890.784,687.006 "
   id="polyline74" />
<polyline
   points="183.876,596.054 186.306,612.441 191.299,627.883 198.643,642.136 208.125,654.954 219.531,666.095 232.649,675.313 247.266,682.365 263.168,687.006 "
   id="polyline75" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,240)"
   stroke-width="0.7"
   id="g76">
<polyline
   points="227.304,650.563 227.304,623.836 935.243,623.836 "
   id="polyline76" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g78">
<polyline
   points="267.819,624.025 267.819,617.131 "
   id="polyline77" />
<polyline
   points="264.042,616.942 271.597,616.942 "
   id="polyline78" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g79">
<path
   d="M262.247,619.87 267.819,623.695 262.247,627.52 262.247,627.52 z"
   id="path78" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g80">
<polyline
   points="262.247,619.87 267.819,623.695 262.247,627.52 262.247,619.87 "
   id="polyline79" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g81">
<path
   d="M273.297,627.52 267.725,623.695 273.297,619.87 273.297,619.87 z"
   id="path80" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g82">
<polyline
   points="273.297,627.52 267.725,623.695 273.297,619.87 273.297,627.52 "
   id="polyline81" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,240)"
   stroke-width="0.7"
   id="g85">
<polyline
   points="519.886,249.939 627.267,249.939 627.267,394.719 "
   id="polyline82" />
<polyline
   points="520.453,393.964 627.267,393.964 "
   id="polyline83" />
<polyline
   points="519.792,322.943 622.922,322.943 "
   id="polyline84" />
<polyline
   points="804.441,623.647 804.441,433.063 "
   id="polyline85" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,255)"
   stroke="rgb(0,0,255)"
   stroke-width="0"
   id="g87">
<text
   transform="matrix(6.731 0 -0 6.70503 628.592 475.155)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text85">NO.1</text>
<text
   transform="matrix(6.72669 0 -0 6.70503 716.597 475.155)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text86">NO.2</text>
<text
   transform="matrix(6.72809 0 -0 6.70503 808.033 475.141)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text87">NO.3</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,240)"
   stroke-width="0.7"
   id="g89">
<polyline
   points="740.786,178.163 740.786,321.715 632.083,321.715 "
   id="polyline87" />
<polyline
   points="521.491,177.785 855.912,177.785 855.912,232.845 "
   id="polyline88" />
<polyline
   points="617.162,623.836 617.162,433.346 804.063,433.346 "
   id="polyline89" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g102">
<path
   d="M598.865,513.204 597.329,505.595 598.865,497.985 z"
   id="path89" />
<path
   d="M598.865,513.204 598.865,497.985 603.054,519.418 z"
   id="path90" />
<path
   d="M603.054,519.418 598.865,497.985 603.054,491.771 z"
   id="path91" />
<path
   d="M603.054,519.418 603.054,491.771 609.268,523.608 z"
   id="path92" />
<path
   d="M609.268,523.608 603.054,491.771 609.268,487.581 z"
   id="path93" />
<path
   d="M609.268,523.608 609.268,487.581 616.878,525.144 z"
   id="path94" />
<path
   d="M616.878,525.144 609.268,487.581 616.878,486.045 z"
   id="path95" />
<path
   d="M616.878,525.144 616.878,486.045 624.488,523.608 z"
   id="path96" />
<path
   d="M624.488,523.608 616.878,486.045 624.488,487.581 z"
   id="path97" />
<path
   d="M624.488,523.608 624.488,487.581 630.702,519.418 z"
   id="path98" />
<path
   d="M630.702,519.418 624.488,487.581 630.702,491.771 z"
   id="path99" />
<path
   d="M630.702,519.418 630.702,491.771 634.892,513.204 z"
   id="path100" />
<path
   d="M634.892,513.204 630.702,491.771 634.892,497.985 z"
   id="path101" />
<path
   d="M634.892,513.204 634.892,497.985 636.428,505.595 z"
   id="path102" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="SW_Pump_1">
<polyline
   points="616.878,486.045 624.488,487.581 630.702,491.771 634.892,497.985 636.428,505.595 634.892,513.204 630.702,519.418 624.488,523.608 616.878,525.144 609.268,523.608 603.054,519.418 598.865,513.204 597.329,505.595 598.865,497.985 603.054,491.771 609.268,487.581 616.878,486.045 "
   id="polyline102" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g104">
<path
   d="M600.256,515.133 616.878,486.423 633.5,515.133 633.5,515.133 z"
   id="path103" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g105">
<polyline
   points="600.256,515.133 616.878,486.423 633.5,515.133 600.256,515.133 "
   id="polyline104" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g118">
<path
   d="M785.388,513.204 783.852,505.595 785.388,497.985 z"
   id="path105" />
<path
   d="M785.388,513.204 785.388,497.985 789.578,519.418 z"
   id="path106" />
<path
   d="M789.578,519.418 785.388,497.985 789.578,491.771 z"
   id="path107" />
<path
   d="M789.578,519.418 789.578,491.771 795.792,523.608 z"
   id="path108" />
<path
   d="M795.792,523.608 789.578,491.771 795.792,487.581 z"
   id="path109" />
<path
   d="M795.792,523.608 795.792,487.581 803.402,525.144 z"
   id="path110" />
<path
   d="M803.402,525.144 795.792,487.581 803.402,486.045 z"
   id="path111" />
<path
   d="M803.402,525.144 803.402,486.045 811.012,523.608 z"
   id="path112" />
<path
   d="M811.012,523.608 803.402,486.045 811.012,487.581 z"
   id="path113" />
<path
   d="M811.012,523.608 811.012,487.581 817.226,519.418 z"
   id="path114" />
<path
   d="M817.226,519.418 811.012,487.581 817.226,491.771 z"
   id="path115" />
<path
   d="M817.226,519.418 817.226,491.771 821.415,513.204 z"
   id="path116" />
<path
   d="M821.415,513.204 817.226,491.771 821.415,497.985 z"
   id="path117" />
<path
   d="M821.415,513.204 821.415,497.985 822.951,505.595 z"
   id="path118" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="SW_Pump_3">
<polyline
   points="803.402,486.045 811.012,487.581 817.226,491.771 821.415,497.985 822.951,505.595 821.415,513.204 817.226,519.418 811.012,523.608 803.402,525.144 795.792,523.608 789.578,519.418 785.388,513.204 783.852,505.595 785.388,497.985 789.578,491.771 795.792,487.581 803.402,486.045 "
   id="polyline118" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g120">
<path
   d="M786.685,515.133 803.354,486.423 820.023,515.133 820.023,515.133 z"
   id="path119" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g122">
<polyline
   points="786.685,515.133 803.354,486.423 820.023,515.133 786.685,515.133 "
   id="polyline120" />
<polyline
   points="616.878,450.645 623.772,450.645 "
   id="polyline121" />
<polyline
   points="623.961,446.867 623.961,454.423 "
   id="polyline122" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g123">
<path
   d="M620.939,445.073 617.162,450.551 613.384,445.073 613.384,445.073 z"
   id="path122" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g124">
<polyline
   points="620.939,445.073 617.162,450.551 613.384,445.073 620.939,445.073 "
   id="polyline123" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g125">
<path
   d="M613.384,456.123 617.162,450.551 620.939,456.123 620.939,456.123 z"
   id="path124" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g127">
<polyline
   points="613.384,456.123 617.162,450.551 620.939,456.123 613.384,456.123 "
   id="polyline125" />
<polyline
   points="804.11,450.629 811.004,450.629 "
   id="polyline126" />
<polyline
   points="811.193,446.851 811.193,454.407 "
   id="polyline127" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g128">
<path
   d="M808.266,445.057 804.441,450.535 800.616,445.057 800.616,445.057 z"
   id="path127" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g129">
<polyline
   points="808.266,445.057 804.441,450.535 800.616,445.057 808.266,445.057 "
   id="polyline128" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g130">
<path
   d="M800.616,456.107 804.441,450.535 808.266,456.107 808.266,456.107 z"
   id="path129" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g132">
<polyline
   points="800.616,456.107 804.441,450.535 808.266,456.107 800.616,456.107 "
   id="polyline130" />
<polyline
   points="804.441,611.748 811.335,611.748 "
   id="polyline131" />
<polyline
   points="811.524,607.97 811.524,615.525 "
   id="polyline132" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g133">
<path
   d="M808.502,606.176 804.724,611.653 800.946,606.176 800.946,606.176 z"
   id="path132" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g134">
<polyline
   points="808.502,606.176 804.724,611.653 800.946,606.176 808.502,606.176 "
   id="polyline133" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g135">
<path
   d="M800.946,617.225 804.724,611.653 808.502,617.225 808.502,617.225 z"
   id="path134" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g136">
<polyline
   points="800.946,617.225 804.724,611.653 808.502,617.225 800.946,617.225 "
   id="polyline135" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g137">
<path
   d="M765.153,339.659 765.153,363.553 758.258,358.776 758.258,344.437 z"
   id="path136" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g138">
<polyline
   points="765.153,339.659 765.153,363.553 758.258,358.776 758.258,344.437 765.153,339.659 "
   id="polyline137" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g139">
<polyline
   points="913.994,393.019 801.607,393.019 "
   id="polyline138" />
<polyline
   points="802.363,392.83 802.363,359.587 765.153,359.587 "
   id="polyline139" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g141">
<polyline
   points="778.469,359.87 778.469,352.976 "
   id="polyline140" />
<polyline
   points="774.691,352.787 782.247,352.787 "
   id="polyline141" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g142">
<path
   d="M772.897,355.715 778.375,359.492 772.897,363.27 772.897,363.27 z"
   id="path141" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g143">
<polyline
   points="772.897,355.715 778.375,359.492 772.897,363.27 772.897,355.715 "
   id="polyline142" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g144">
<path
   d="M783.947,363.27 778.375,359.492 783.947,355.715 783.947,355.715 z"
   id="path143" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g145">
<polyline
   points="783.947,363.27 778.375,359.492 783.947,355.715 783.947,363.27 "
   id="polyline144" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.35"
   id="g147">
<polyline
   points="802.316,329.318 802.316,345.373 "
   id="polyline145" />
<polyline
   points="802.41,307.502 802.41,285.591 852.842,285.591 "
   id="polyline146" />
<polyline
   points="790.983,318.646 791.862,314.27 794.261,310.698 797.819,308.29 802.174,307.407 806.529,308.29 810.086,310.698 812.486,314.27 813.365,318.646 812.486,323.022 810.086,326.594 806.529,329.002 802.174,329.885 797.819,329.002 794.261,326.594 791.862,323.022 790.983,318.646 "
   id="polyline147" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,0,0)"
   stroke="rgb(255,0,0)"
   stroke-width="0"
   id="g148">
<text
   transform="matrix(7.87417 0 -0 7.84489 794.574 323.045)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text147">TX1</text>
<text
   transform="matrix(7.86435 0 -0 7.84489 818.696 297.415)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text148">To ESS</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g149">
<polyline
   points="817.096,345.515 770.536,345.515 "
   id="polyline148" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g150">
<path
   d="M765.341,348.726 770.064,348.726 770.064,342.304 765.341,342.304 z"
   id="path149" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g151">
<polyline
   points="765.341,348.726 770.064,348.726 770.064,342.304 765.341,342.304 765.341,348.726 "
   id="polyline150" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g164">
<path
   d="M818.026,349.492 817.143,345.137 818.026,340.782 z"
   id="path151" />
<path
   d="M818.026,349.492 818.026,340.782 820.434,353.05 z"
   id="path152" />
<path
   d="M820.434,353.05 818.026,340.782 820.434,337.225 z"
   id="path153" />
<path
   d="M820.434,353.05 820.434,337.225 824.006,355.449 z"
   id="path154" />
<path
   d="M824.006,355.449 820.434,337.225 824.006,334.825 z"
   id="path155" />
<path
   d="M824.006,355.449 824.006,334.825 828.382,356.328 z"
   id="path156" />
<path
   d="M828.382,356.328 824.006,334.825 828.382,333.946 z"
   id="path157" />
<path
   d="M828.382,356.328 828.382,333.946 832.757,355.449 z"
   id="path158" />
<path
   d="M832.757,355.449 828.382,333.946 832.757,334.825 z"
   id="path159" />
<path
   d="M832.757,355.449 832.757,334.825 836.33,353.05 z"
   id="path160" />
<path
   d="M836.33,353.05 832.757,334.825 836.33,337.225 z"
   id="path161" />
<path
   d="M836.33,353.05 836.33,337.225 838.737,349.492 z"
   id="path162" />
<path
   d="M838.737,349.492 836.33,337.225 838.737,340.782 z"
   id="path163" />
<path
   d="M838.737,349.492 838.737,340.782 839.62,345.137 z"
   id="path164" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.35"
   id="g165">
<polyline
   points="817.143,345.137 818.026,340.782 820.434,337.225 824.006,334.825 828.382,333.946 832.757,334.825 836.33,337.225 838.737,340.782 839.62,345.137 838.737,349.492 836.33,353.05 832.757,355.449 828.382,356.328 824.006,355.449 820.434,353.05 818.026,349.492 817.143,345.137 "
   id="polyline164" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,0,0)"
   stroke="rgb(255,0,0)"
   stroke-width="0"
   id="g166">
<text
   transform="matrix(7.90037 0 -0 7.84489 822.623 349.513)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text165">TX</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g167">
<polyline
   points="913.994,345.515 840.14,345.515 "
   id="polyline166" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g180">
<path
   d="M914.227,351.49 912.955,345.184 914.227,338.878 z"
   id="path167" />
<path
   d="M914.227,351.49 914.227,338.878 917.698,356.638 z"
   id="path168" />
<path
   d="M917.698,356.638 914.227,338.878 917.698,333.73 z"
   id="path169" />
<path
   d="M917.698,356.638 917.698,333.73 922.846,360.109 z"
   id="path170" />
<path
   d="M922.846,360.109 917.698,333.73 922.846,330.26 z"
   id="path171" />
<path
   d="M922.846,360.109 922.846,330.26 929.152,361.381 z"
   id="path172" />
<path
   d="M929.152,361.381 922.846,330.26 929.152,328.987 z"
   id="path173" />
<path
   d="M929.152,361.381 929.152,328.987 935.458,360.109 z"
   id="path174" />
<path
   d="M935.458,360.109 929.152,328.987 935.458,330.26 z"
   id="path175" />
<path
   d="M935.458,360.109 935.458,330.26 940.606,356.638 z"
   id="path176" />
<path
   d="M940.606,356.638 935.458,330.26 940.606,333.73 z"
   id="path177" />
<path
   d="M940.606,356.638 940.606,333.73 944.076,351.49 z"
   id="path178" />
<path
   d="M944.076,351.49 940.606,333.73 944.076,338.878 z"
   id="path179" />
<path
   d="M944.076,351.49 944.076,338.878 945.349,345.184 z"
   id="path180" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g181">
<polyline
   points="912.955,345.184 914.227,338.878 917.698,333.73 922.846,330.26 929.152,328.987 935.458,330.26 940.606,333.73 944.076,338.878 945.349,345.184 944.076,351.49 940.606,356.638 935.458,360.109 929.152,361.381 922.846,360.109 917.698,356.638 914.227,351.49 912.955,345.184 "
   id="polyline180" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g182">
<text
   transform="matrix(7.92838 0 -0 7.84489 924.928 342.902)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text181">TI</text>
<text
   transform="matrix(7.84248 0 -0 7.84489 921.54 356.126)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text182">MC</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g183">
<polyline
   points="912.955,345.137 945.388,345.137 "
   id="polyline182" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g196">
<path
   d="M914.227,399.278 912.955,392.972 914.227,386.666 z"
   id="path183" />
<path
   d="M914.227,399.278 914.227,386.666 917.698,404.426 z"
   id="path184" />
<path
   d="M917.698,404.426 914.227,386.666 917.698,381.518 z"
   id="path185" />
<path
   d="M917.698,404.426 917.698,381.518 922.846,407.897 z"
   id="path186" />
<path
   d="M922.846,407.897 917.698,381.518 922.846,378.048 z"
   id="path187" />
<path
   d="M922.846,407.897 922.846,378.048 929.152,409.169 z"
   id="path188" />
<path
   d="M929.152,409.169 922.846,378.048 929.152,376.775 z"
   id="path189" />
<path
   d="M929.152,409.169 929.152,376.775 935.458,407.897 z"
   id="path190" />
<path
   d="M935.458,407.897 929.152,376.775 935.458,378.048 z"
   id="path191" />
<path
   d="M935.458,407.897 935.458,378.048 940.606,404.426 z"
   id="path192" />
<path
   d="M940.606,404.426 935.458,378.048 940.606,381.518 z"
   id="path193" />
<path
   d="M940.606,404.426 940.606,381.518 944.076,399.278 z"
   id="path194" />
<path
   d="M944.076,399.278 940.606,381.518 944.076,386.666 z"
   id="path195" />
<path
   d="M944.076,399.278 944.076,386.666 945.349,392.972 z"
   id="path196" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g197">
<polyline
   points="912.955,392.972 914.227,386.666 917.698,381.518 922.846,378.048 929.152,376.775 935.458,378.048 940.606,381.518 944.076,386.666 945.349,392.972 944.076,399.278 940.606,404.426 935.458,407.897 929.152,409.169 922.846,407.897 917.698,404.426 914.227,399.278 912.955,392.972 "
   id="polyline196" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g198">
<text
   transform="matrix(7.86132 0 -0 7.84489 924.184 390.69)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text197">PI</text>
<text
   transform="matrix(7.84248 0 -0 7.84489 921.54 403.93)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text198">MC</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g199">
<polyline
   points="912.955,392.925 945.388,392.925 "
   id="polyline198" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g200">
<polyline
   points="913.602,435.555 882.072,435.424 882.072,393.208 "
   id="polyline199" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.35"
   id="g201">
<polyline
   points="926.602,448.599 926.602,463.804 967.023,463.804 "
   id="polyline200" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,0,0)"
   stroke="rgb(255,0,0)"
   stroke-width="0"
   id="g202">
<text
   transform="matrix(7.85705 0 -0 7.8583 941.4 474.872)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text201">To ESS for</text>
<text
   transform="matrix(7.84192 0 -0 7.84489 941.507 486.795)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text202">INTERLOCK</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,240)"
   stroke-width="0.7"
   id="g203">
<polyline
   points="955.454,258.549 855.581,231.791 "
   id="polyline202" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g204">
<polyline
   points="934.291,252.749 936.636,245.91 "
   id="polyline203" />
<polyline
   points="932.237,244.438 940.988,247.444 "
   id="polyline204" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g205">
<path
   d="M929.238,246.689 934.346,252.662 926.649,254.236 926.649,254.236 z"
   id="path204" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g206">
<polyline
   points="929.238,246.689 934.346,252.662 926.649,254.236 929.238,246.689 "
   id="polyline205" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g207">
<path
   d="M939.462,258.636 934.346,252.662 942.051,251.088 942.051,251.088 z"
   id="path206" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g211">
<polyline
   points="939.462,258.636 934.346,252.662 942.051,251.088 939.462,258.636 "
   id="polyline207" />
<polyline
   points="932.898,242.612 941.429,245.54 "
   id="polyline208" />
<polyline
   points="933.378,240.629 942.279,243.682 "
   id="polyline209" />
<polyline
   points="942.09,243.619 940.76,247.499 "
   id="polyline210" />
<polyline
   points="933.764,240.77 932.434,244.65 "
   id="polyline211" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g213">
<polyline
   points="944.333,259.966 946.962,252.253 "
   id="polyline212" />
<polyline
   points="946.875,260.832 949.504,253.119 "
   id="polyline213" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g214">
<path
   d="M945.152,260.123 947.741,252.513 948.804,252.875 946.206,260.485 z"
   id="path213" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,255)"
   stroke="rgb(0,0,255)"
   stroke-width="0"
   id="g215">
<text
   transform="matrix(6.74652 0 -0 6.70503 304.543 400.262)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text214">NO.1</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g228">
<path
   d="M255.189,396.663 253.653,389.053 255.189,381.443 z"
   id="path215" />
<path
   d="M255.189,396.663 255.189,381.443 259.379,402.877 z"
   id="path216" />
<path
   d="M259.379,402.877 255.189,381.443 259.379,375.229 z"
   id="path217" />
<path
   d="M259.379,402.877 259.379,375.229 265.593,407.066 z"
   id="path218" />
<path
   d="M265.593,407.066 259.379,375.229 265.593,371.039 z"
   id="path219" />
<path
   d="M265.593,407.066 265.593,371.039 273.203,408.602 z"
   id="path220" />
<path
   d="M273.203,408.602 265.593,371.039 273.203,369.503 z"
   id="path221" />
<path
   d="M273.203,408.602 273.203,369.503 280.813,407.066 z"
   id="path222" />
<path
   d="M280.813,407.066 273.203,369.503 280.813,371.039 z"
   id="path223" />
<path
   d="M280.813,407.066 280.813,371.039 287.027,402.877 z"
   id="path224" />
<path
   d="M287.027,402.877 280.813,371.039 287.027,375.229 z"
   id="path225" />
<path
   d="M287.027,402.877 287.027,375.229 291.216,396.663 z"
   id="path226" />
<path
   d="M291.216,396.663 287.027,375.229 291.216,381.443 z"
   id="path227" />
<path
   d="M291.216,396.663 291.216,381.443 292.752,389.053 z"
   id="path228" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="LT_Pump_1">
<polyline
   points="253.653,389.053 255.189,381.443 259.379,375.229 265.593,371.039 273.203,369.503 280.813,371.039 287.027,375.229 291.216,381.443 292.752,389.053 291.216,396.663 287.027,402.877 280.813,407.066 273.203,408.602 265.593,407.066 259.379,402.877 255.189,396.663 253.653,389.053 "
   id="polyline228" />
</g>
<g
   id="g1465"><g
     clip-path="url(#clipId0)"
     fill="rgb(255,255,255)"
     stroke="rgb(255,255,255)"
     stroke-width="0.25"
     fill-opacity="0.498039"
     stroke-opacity="0.498039"
     id="g230">
<path
   d="M282.741,405.769 254.031,389.1 282.741,372.431 282.741,372.431 z"
   id="path229" />
</g></g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g231">
<polyline
   points="282.741,405.769 254.031,389.1 282.741,372.431 282.741,405.769 "
   id="polyline230" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g244">
<path
   d="M255.189,483.579 253.653,475.987 255.189,468.394 z"
   id="path231" />
<path
   d="M255.189,483.579 255.189,468.394 259.379,489.778 z"
   id="path232" />
<path
   d="M259.379,489.778 255.189,468.394 259.379,462.195 z"
   id="path233" />
<path
   d="M259.379,489.778 259.379,462.195 265.593,493.957 z"
   id="path234" />
<path
   d="M265.593,493.957 259.379,462.195 265.593,458.017 z"
   id="path235" />
<path
   d="M265.593,493.957 265.593,458.017 273.203,495.489 z"
   id="path236" />
<path
   d="M273.203,495.489 265.593,458.017 273.203,456.485 z"
   id="path237" />
<path
   d="M273.203,495.489 273.203,456.485 280.813,493.957 z"
   id="path238" />
<path
   d="M280.813,493.957 273.203,456.485 280.813,458.017 z"
   id="path239" />
<path
   d="M280.813,493.957 280.813,458.017 287.027,489.778 z"
   id="path240" />
<path
   d="M287.027,489.778 280.813,458.017 287.027,462.195 z"
   id="path241" />
<path
   d="M287.027,489.778 287.027,462.195 291.216,483.579 z"
   id="path242" />
<path
   d="M291.216,483.579 287.027,462.195 291.216,468.394 z"
   id="path243" />
<path
   d="M291.216,483.579 291.216,468.394 292.752,475.987 z"
   id="path244" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="LT_Pump_2">
<polyline
   points="253.653,475.987 255.189,468.394 259.379,462.195 265.593,458.017 273.203,456.485 280.813,458.017 287.027,462.195 291.216,468.394 292.752,475.987 291.216,483.579 287.027,489.778 280.813,493.957 273.203,495.489 265.593,493.957 259.379,489.778 255.189,483.579 253.653,475.987 "
   id="polyline244" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g246">
<path
   d="M282.741,492.656 254.031,476.034 282.741,459.412 282.741,459.412 z"
   id="path245" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g247">
<polyline
   points="282.741,492.656 254.031,476.034 282.741,459.412 282.741,492.656 "
   id="polyline246" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g260">
<path
   d="M255.189,570.531 253.653,562.921 255.189,555.311 z"
   id="path247" />
<path
   d="M255.189,570.531 255.189,555.311 259.379,576.745 z"
   id="path248" />
<path
   d="M259.379,576.745 255.189,555.311 259.379,549.097 z"
   id="path249" />
<path
   d="M259.379,576.745 259.379,549.097 265.593,580.934 z"
   id="path250" />
<path
   d="M265.593,580.934 259.379,549.097 265.593,544.908 z"
   id="path251" />
<path
   d="M265.593,580.934 265.593,544.908 273.203,582.471 z"
   id="path252" />
<path
   d="M273.203,582.471 265.593,544.908 273.203,543.371 z"
   id="path253" />
<path
   d="M273.203,582.471 273.203,543.371 280.813,580.934 z"
   id="path254" />
<path
   d="M280.813,580.934 273.203,543.371 280.813,544.908 z"
   id="path255" />
<path
   d="M280.813,580.934 280.813,544.908 287.027,576.745 z"
   id="path256" />
<path
   d="M287.027,576.745 280.813,544.908 287.027,549.097 z"
   id="path257" />
<path
   d="M287.027,576.745 287.027,549.097 291.216,570.531 z"
   id="path258" />
<path
   d="M291.216,570.531 287.027,549.097 291.216,555.311 z"
   id="path259" />
<path
   d="M291.216,570.531 291.216,555.311 292.752,562.921 z"
   id="path260" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g261">
<polyline
   points="253.653,562.921 255.189,555.311 259.379,549.097 265.593,544.908 273.203,543.371 280.813,544.908 287.027,549.097 291.216,555.311 292.752,562.921 291.216,570.531 287.027,576.745 280.813,580.934 273.203,582.471 265.593,580.934 259.379,576.745 255.189,570.531 253.653,562.921 "
   id="polyline260" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g262">
<path
   d="M282.741,579.637 254.031,562.968 282.741,546.299 282.741,546.299 z"
   id="path261" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g263">
<polyline
   points="282.741,579.637 254.031,562.968 282.741,546.299 282.741,579.637 "
   id="polyline262" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.7"
   id="g264">
<polyline
   points="297.569,161.163 297.569,177.219 "
   id="polyline263" />
<polyline
   points="297.663,145.014 297.663,131.036 348.095,131.036 "
   id="polyline264" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g277">
<path
   d="M287.024,159.117 286.141,154.741 287.024,150.366 z"
   id="path264" />
<path
   d="M287.024,159.117 287.024,150.366 289.432,162.689 z"
   id="path265" />
<path
   d="M289.432,162.689 287.024,150.366 289.432,146.793 z"
   id="path266" />
<path
   d="M289.432,162.689 289.432,146.793 293.004,165.097 z"
   id="path267" />
<path
   d="M293.004,165.097 289.432,146.793 293.004,144.386 z"
   id="path268" />
<path
   d="M293.004,165.097 293.004,144.386 297.38,165.98 z"
   id="path269" />
<path
   d="M297.38,165.98 293.004,144.386 297.38,143.503 z"
   id="path270" />
<path
   d="M297.38,165.98 297.38,143.503 301.756,165.097 z"
   id="path271" />
<path
   d="M301.756,165.097 297.38,143.503 301.756,144.386 z"
   id="path272" />
<path
   d="M301.756,165.097 301.756,144.386 305.328,162.689 z"
   id="path273" />
<path
   d="M305.328,162.689 301.756,144.386 305.328,146.793 z"
   id="path274" />
<path
   d="M305.328,162.689 305.328,146.793 307.736,159.117 z"
   id="path275" />
<path
   d="M307.736,159.117 305.328,146.793 307.736,150.366 z"
   id="path276" />
<path
   d="M307.736,159.117 307.736,150.366 308.619,154.741 z"
   id="path277" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.53"
   id="g278">
<polyline
   points="286.141,154.741 287.024,150.366 289.432,146.793 293.004,144.386 297.38,143.503 301.756,144.386 305.328,146.793 307.736,150.366 308.619,154.741 307.736,159.117 305.328,162.689 301.756,165.097 297.38,165.98 293.004,165.097 289.432,162.689 287.024,159.117 286.141,154.741 "
   id="polyline277" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,0,0)"
   stroke="rgb(255,0,0)"
   stroke-width="0"
   id="g280">
<text
   transform="matrix(7.86866 0 -0 7.84489 288.347 159.06)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text278">TX4</text>
<text
   transform="matrix(7.85204 0 -0 7.84489 349.979 129.748)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text279">To ESS for</text>
<text
   transform="matrix(7.83142 0 -0 7.84489 350.089 142.968)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text280">F.W Pump Control</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,80)"
   stroke-width="0.7"
   id="g281">
<polyline
   points="408.822,250.128 452.596,250.128 "
   id="polyline280" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g282">
<polyline
   points="348.662,476.412 348.662,469.612 "
   id="polyline281" />
<polyline
   points="344.884,469.329 352.44,469.329 "
   id="polyline282" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g283">
<path
   d="M343.09,472.351 348.568,476.128 343.09,479.906 343.09,479.906 z"
   id="path282" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g284">
<polyline
   points="343.09,472.351 348.568,476.128 343.09,479.906 343.09,472.351 "
   id="polyline283" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g285">
<path
   d="M354.14,479.906 348.568,476.128 354.14,472.351 354.14,472.351 z"
   id="path284" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g287">
<polyline
   points="354.14,479.906 348.568,476.128 354.14,472.351 354.14,479.906 "
   id="polyline285" />
<polyline
   points="348.662,563.204 348.662,556.31 "
   id="polyline286" />
<polyline
   points="344.884,556.121 352.44,556.121 "
   id="polyline287" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g288">
<path
   d="M343.09,559.049 348.568,562.827 343.09,566.604 343.09,566.604 z"
   id="path287" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g289">
<polyline
   points="343.09,559.049 348.568,562.827 343.09,566.604 343.09,559.049 "
   id="polyline288" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g290">
<path
   d="M354.14,566.604 348.568,562.827 354.14,559.049 354.14,559.049 z"
   id="path289" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g292">
<polyline
   points="354.14,566.604 348.568,562.827 354.14,559.049 354.14,566.604 "
   id="polyline290" />
<polyline
   points="223.904,389.147 223.904,382.253 "
   id="polyline291" />
<polyline
   points="220.126,382.064 227.681,382.064 "
   id="polyline292" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g293">
<path
   d="M218.237,384.992 223.809,388.817 218.237,392.642 218.237,392.642 z"
   id="path292" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g294">
<polyline
   points="218.237,384.992 223.809,388.817 218.237,392.642 218.237,384.992 "
   id="polyline293" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g295">
<path
   d="M229.287,392.642 223.809,388.817 229.287,384.992 229.287,384.992 z"
   id="path294" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g297">
<polyline
   points="229.287,392.642 223.809,388.817 229.287,384.992 229.287,392.642 "
   id="polyline295" />
<polyline
   points="223.904,476.412 223.904,469.612 "
   id="polyline296" />
<polyline
   points="220.126,469.329 227.681,469.329 "
   id="polyline297" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g298">
<path
   d="M218.237,472.351 223.809,476.128 218.237,479.906 218.237,479.906 z"
   id="path297" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g299">
<polyline
   points="218.237,472.351 223.809,476.128 218.237,479.906 218.237,472.351 "
   id="polyline298" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g300">
<path
   d="M229.287,479.906 223.809,476.128 229.287,472.351 229.287,472.351 z"
   id="path299" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g302">
<polyline
   points="229.287,479.906 223.809,476.128 229.287,472.351 229.287,479.906 "
   id="polyline300" />
<polyline
   points="223.904,563.204 223.904,556.31 "
   id="polyline301" />
<polyline
   points="220.126,556.121 227.681,556.121 "
   id="polyline302" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g303">
<path
   d="M218.237,559.049 223.809,562.827 218.237,566.604 218.237,566.604 z"
   id="path302" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g304">
<polyline
   points="218.237,559.049 223.809,562.827 218.237,566.604 218.237,559.049 "
   id="polyline303" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g305">
<path
   d="M229.287,566.604 223.809,562.827 229.287,559.049 229.287,559.049 z"
   id="path304" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g306">
<polyline
   points="229.287,566.604 223.809,562.827 229.287,559.049 229.287,566.604 "
   id="polyline305" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g307">
<polyline
   points="261.492,264.483 183.105,264.483 183.105,432.591 "
   id="polyline306" />
<polyline
   points="183.199,475.751 183.199,455.54 "
   id="polyline307" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g308">
<polyline
   points="171.583,444.065 172.463,439.71 174.862,436.153 178.419,433.754 182.774,432.874 187.129,433.754 190.687,436.153 193.086,439.71 193.966,444.065 193.086,448.42 190.687,451.978 187.129,454.377 182.774,455.257 178.419,454.377 174.862,451.978 172.463,448.42 171.583,444.065 "
   id="polyline308" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g309">
<text
   transform="matrix(7.90168 0 -0 7.84489 176.622 448.452)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text308">TC</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g310">
<polyline
   points="309.563,264.483 393.333,264.483 393.333,440.618 "
   id="polyline309" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,80)"
   stroke-width="0.7"
   id="g311">
<polyline
   points="400.133,452.801 409.388,452.801 409.388,249.656 "
   id="polyline310" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g312">
<polyline
   points="393.428,453.085 393.428,444.868 "
   id="polyline311" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g313">
<path
   d="M386.722,448.174 393.333,452.66 386.722,457.146 386.722,457.146 z"
   id="path312" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g314">
<polyline
   points="386.722,448.174 393.333,452.66 386.722,457.146 386.722,448.174 "
   id="polyline313" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g315">
<path
   d="M399.944,457.24 393.333,452.707 399.944,448.174 399.944,448.174 z"
   id="path314" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g316">
<polyline
   points="399.944,457.24 393.333,452.707 399.944,448.174 399.944,457.24 "
   id="polyline315" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g317">
<path
   d="M388.894,459.884 393.428,453.273 397.961,459.884 397.961,459.884 z"
   id="path316" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g318">
<polyline
   points="388.894,459.884 393.428,453.273 397.961,459.884 388.894,459.884 "
   id="polyline317" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g328">
<path
   d="M389.637,445.761 388.894,445.765 389.637,443.219 z"
   id="path318" />
<path
   d="M389.637,445.761 389.637,443.219 391.597,445.751 z"
   id="path319" />
<path
   d="M391.597,445.751 389.637,443.219 391.597,441.557 z"
   id="path320" />
<path
   d="M391.597,445.751 391.597,441.557 394.244,445.737 z"
   id="path321" />
<path
   d="M394.244,445.737 391.597,441.557 394.244,441.268 z"
   id="path322" />
<path
   d="M394.244,445.737 394.244,441.268 396.522,445.725 z"
   id="path323" />
<path
   d="M396.522,445.725 394.244,441.268 396.522,442.48 z"
   id="path324" />
<path
   d="M396.522,445.725 396.522,442.48 397.767,445.719 z"
   id="path325" />
<path
   d="M397.767,445.719 396.522,442.48 397.767,444.759 z"
   id="path326" />
<path
   d="M397.767,445.719 397.767,444.759 397.866,445.718 z"
   id="path327" />
<path
   d="M397.866,445.718 397.767,444.759 397.866,445.674 z"
   id="path328" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g329">
<polyline
   points="388.894,445.765 389.637,443.219 391.597,441.557 394.244,441.268 396.522,442.48 397.767,444.759 397.866,445.674 397.866,445.683 397.866,445.718 "
   id="polyline328" />
<polyline
   points="397.866,445.718 388.894,445.765 "
   id="polyline329" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,80)"
   stroke-width="0.7"
   id="g333">
<polyline
   points="412.694,323.038 452.596,323.038 "
   id="polyline330" />
<polyline
   points="410.05,394.625 452.596,394.625 "
   id="polyline331" />
<polyline
   points="404.572,323.274 405.859,320.434 408.963,319.26 412.068,320.434 413.355,323.274 "
   id="polyline332" />
<polyline
   points="375.389,323.038 405.233,323.038 "
   id="polyline333" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g335">
<polyline
   points="432.81,395.38 432.81,388.486 "
   id="polyline334" />
<polyline
   points="429.032,388.297 436.588,388.297 "
   id="polyline335" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g336">
<path
   d="M427.238,391.225 432.716,395.003 427.238,398.78 427.238,398.78 z"
   id="path335" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g337">
<polyline
   points="427.238,391.225 432.716,395.003 427.238,398.78 427.238,391.225 "
   id="polyline336" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g338">
<path
   d="M438.288,398.78 432.716,395.003 438.288,391.225 438.288,391.225 z"
   id="path337" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g340">
<polyline
   points="438.288,398.78 432.716,395.003 438.288,391.225 438.288,398.78 "
   id="polyline338" />
<polyline
   points="432.81,323.038 432.81,316.143 "
   id="polyline339" />
<polyline
   points="429.032,315.954 436.588,315.954 "
   id="polyline340" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g341">
<path
   d="M427.238,318.977 432.716,322.754 427.238,326.532 427.238,326.532 z"
   id="path340" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g342">
<polyline
   points="427.238,318.977 432.716,322.754 427.238,326.532 427.238,318.977 "
   id="polyline341" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g343">
<path
   d="M438.288,326.532 432.716,322.754 438.288,318.977 438.288,318.977 z"
   id="path342" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g345">
<polyline
   points="438.288,326.532 432.716,322.754 438.288,318.977 438.288,326.532 "
   id="polyline343" />
<polyline
   points="432.81,250.034 432.81,243.139 "
   id="polyline344" />
<polyline
   points="429.032,242.95 436.588,242.95 "
   id="polyline345" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g346">
<path
   d="M427.238,245.973 432.716,249.75 427.238,253.528 427.238,253.528 z"
   id="path345" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g347">
<polyline
   points="427.238,245.973 432.716,249.75 427.238,253.528 427.238,245.973 "
   id="polyline346" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g348">
<path
   d="M438.288,253.528 432.716,249.75 438.288,245.973 438.288,245.973 z"
   id="path347" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g349">
<polyline
   points="438.288,253.528 432.716,249.75 438.288,245.973 438.288,253.528 "
   id="polyline348" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,80)"
   stroke-width="0.7"
   id="g351">
<polyline
   points="134.467,178.635 134.467,213.862 "
   id="polyline349" />
<polyline
   points="134.797,212.918 137.637,214.205 138.811,217.309 137.637,220.414 134.797,221.701 "
   id="polyline350" />
<polyline
   points="58.3465,342.682 131.445,342.682 "
   id="polyline351" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,80)"
   stroke="rgb(0,176,80)"
   stroke-width="1"
   id="g461">
<path
   d="M106.418,305.023 106.418,303.842 107.858,305.023 z"
   id="path351" />
<path
   d="M107.858,305.023 106.418,303.842 107.858,303.842 z"
   id="path352" />
<path
   d="M108.07,307.542 107.858,307.486 108.07,306.675 z"
   id="path353" />
<path
   d="M107.858,305.023 107.858,303.842 108.07,305.023 z"
   id="path354" />
<path
   d="M108.07,305.023 107.858,303.842 108.07,303.842 z"
   id="path355" />
<path
   d="M108.07,302.189 107.858,301.379 108.07,301.323 z"
   id="path356" />
<path
   d="M108.07,307.542 108.07,306.675 108.661,307.699 z"
   id="path357" />
<path
   d="M108.661,307.699 108.07,306.675 108.661,306.331 z"
   id="path358" />
<path
   d="M108.07,305.023 108.07,303.842 108.661,305.023 z"
   id="path359" />
<path
   d="M108.661,305.023 108.07,303.842 108.661,303.842 z"
   id="path360" />
<path
   d="M108.07,302.189 108.07,301.323 108.661,302.534 z"
   id="path361" />
<path
   d="M108.661,302.534 108.07,301.323 108.661,301.166 z"
   id="path362" />
<path
   d="M108.661,307.699 108.661,306.331 110.904,306.389 z"
   id="path363" />
<path
   d="M110.904,306.389 108.661,306.331 110.904,305.023 z"
   id="path364" />
<path
   d="M108.661,305.023 108.661,303.842 110.904,305.023 z"
   id="path365" />
<path
   d="M110.904,305.023 108.661,303.842 110.904,303.842 z"
   id="path366" />
<path
   d="M108.661,302.534 108.661,301.166 110.904,303.842 z"
   id="path367" />
<path
   d="M110.904,303.842 108.661,301.166 110.904,302.475 z"
   id="path368" />
<path
   d="M110.904,306.389 110.904,305.023 111.915,305.799 z"
   id="path369" />
<path
   d="M111.915,305.799 110.904,305.023 111.915,305.023 z"
   id="path370" />
<path
   d="M110.904,305.023 110.904,303.842 111.915,304.432 z"
   id="path371" />
<path
   d="M110.904,303.842 110.904,302.475 111.915,303.842 z"
   id="path372" />
<path
   d="M111.915,303.842 110.904,302.475 111.915,303.066 z"
   id="path373" />
<path
   d="M111.915,305.799 111.915,305.023 112.792,305.287 z"
   id="path374" />
<path
   d="M112.792,305.287 111.915,305.023 112.792,305.023 z"
   id="path375" />
<path
   d="M112.792,304.944 111.915,304.432 112.792,303.921 z"
   id="path376" />
<path
   d="M111.915,303.842 111.915,303.066 112.792,303.842 z"
   id="path377" />
<path
   d="M112.792,303.842 111.915,303.066 112.792,303.578 z"
   id="path378" />
<path
   d="M112.792,305.287 112.792,305.023 113.091,305.112 z"
   id="path379" />
<path
   d="M113.091,305.112 112.792,305.023 113.091,305.023 z"
   id="path380" />
<path
   d="M112.792,303.842 112.792,303.578 113.091,303.842 z"
   id="path381" />
<path
   d="M113.091,303.842 112.792,303.578 113.091,303.753 z"
   id="path382" />
<path
   d="M113.091,305.112 113.091,303.753 114.256,304.432 z"
   id="path383" />
<path
   d="M108.527,217.848 107.362,217.168 108.527,216.488 z"
   id="path384" />
<path
   d="M108.527,217.848 108.527,217.758 108.826,218.022 z"
   id="path385" />
<path
   d="M108.826,218.022 108.527,217.758 108.826,217.758 z"
   id="path386" />
<path
   d="M108.527,216.577 108.527,216.488 108.826,216.577 z"
   id="path387" />
<path
   d="M108.826,216.577 108.527,216.488 108.826,216.313 z"
   id="path388" />
<path
   d="M108.826,218.022 108.826,217.758 109.703,218.534 z"
   id="path389" />
<path
   d="M109.703,218.534 108.826,217.758 109.703,217.758 z"
   id="path390" />
<path
   d="M108.826,217.679 108.826,216.656 109.703,217.168 z"
   id="path391" />
<path
   d="M108.826,216.577 108.826,216.313 109.703,216.577 z"
   id="path392" />
<path
   d="M109.703,216.577 108.826,216.313 109.703,215.801 z"
   id="path393" />
<path
   d="M109.703,218.534 109.703,217.758 110.715,219.125 z"
   id="path394" />
<path
   d="M110.715,219.125 109.703,217.758 110.715,217.758 z"
   id="path395" />
<path
   d="M110.715,217.758 109.703,217.168 110.715,216.577 z"
   id="path396" />
<path
   d="M109.703,216.577 109.703,215.801 110.715,216.577 z"
   id="path397" />
<path
   d="M110.715,216.577 109.703,215.801 110.715,215.211 z"
   id="path398" />
<path
   d="M110.715,219.125 110.715,217.758 110.715,219.125 z"
   id="path399" />
<path
   d="M110.715,219.125 110.715,217.758 110.715,217.758 z"
   id="path400" />
<path
   d="M110.715,217.758 110.715,216.577 110.715,217.758 z"
   id="path401" />
<path
   d="M110.715,217.758 110.715,216.577 110.715,216.577 z"
   id="path402" />
<path
   d="M110.715,216.577 110.715,215.211 110.715,216.577 z"
   id="path403" />
<path
   d="M110.715,216.577 110.715,215.211 110.715,215.211 z"
   id="path404" />
<path
   d="M110.715,219.125 110.715,217.758 112.958,220.434 z"
   id="path405" />
<path
   d="M112.958,220.434 110.715,217.758 112.958,219.066 z"
   id="path406" />
<path
   d="M110.715,217.758 110.715,216.577 112.958,217.758 z"
   id="path407" />
<path
   d="M112.958,217.758 110.715,216.577 112.958,216.577 z"
   id="path408" />
<path
   d="M110.715,216.577 110.715,215.211 112.958,215.269 z"
   id="path409" />
<path
   d="M112.958,215.269 110.715,215.211 112.958,213.902 z"
   id="path410" />
<path
   d="M112.958,220.434 112.958,219.066 113.548,220.278 z"
   id="path411" />
<path
   d="M113.548,220.278 112.958,219.066 113.548,219.411 z"
   id="path412" />
<path
   d="M112.958,217.758 112.958,216.577 113.548,217.758 z"
   id="path413" />
<path
   d="M113.548,217.758 112.958,216.577 113.548,216.577 z"
   id="path414" />
<path
   d="M112.958,215.269 112.958,213.902 113.548,214.925 z"
   id="path415" />
<path
   d="M113.548,214.925 112.958,213.902 113.548,214.058 z"
   id="path416" />
<path
   d="M113.548,220.278 113.548,219.411 113.76,220.221 z"
   id="path417" />
<path
   d="M113.548,217.758 113.548,216.577 113.76,217.758 z"
   id="path418" />
<path
   d="M113.76,217.758 113.548,216.577 113.76,216.577 z"
   id="path419" />
<path
   d="M113.548,214.925 113.548,214.058 113.76,214.114 z"
   id="path420" />
<path
   d="M113.76,217.758 113.76,216.577 114.917,217.758 z"
   id="path421" />
<path
   d="M114.917,217.758 113.76,216.577 114.917,216.577 z"
   id="path422" />
<path
   d="M107.362,437.809 107.362,436.628 108.519,437.809 z"
   id="path423" />
<path
   d="M108.519,437.809 107.362,436.628 108.519,436.628 z"
   id="path424" />
<path
   d="M108.731,440.328 108.519,440.272 108.731,439.461 z"
   id="path425" />
<path
   d="M108.519,437.809 108.519,436.628 108.731,437.809 z"
   id="path426" />
<path
   d="M108.731,437.809 108.519,436.628 108.731,436.628 z"
   id="path427" />
<path
   d="M108.731,434.975 108.519,434.165 108.731,434.108 z"
   id="path428" />
<path
   d="M108.731,440.328 108.731,439.461 109.322,440.484 z"
   id="path429" />
<path
   d="M109.322,440.484 108.731,439.461 109.322,439.117 z"
   id="path430" />
<path
   d="M108.731,437.809 108.731,436.628 109.322,437.809 z"
   id="path431" />
<path
   d="M109.322,437.809 108.731,436.628 109.322,436.628 z"
   id="path432" />
<path
   d="M108.731,434.975 108.731,434.108 109.322,435.32 z"
   id="path433" />
<path
   d="M109.322,435.32 108.731,434.108 109.322,433.952 z"
   id="path434" />
<path
   d="M109.322,440.484 109.322,439.117 111.565,439.175 z"
   id="path435" />
<path
   d="M111.565,439.175 109.322,439.117 111.565,437.809 z"
   id="path436" />
<path
   d="M109.322,437.809 109.322,436.628 111.565,437.809 z"
   id="path437" />
<path
   d="M111.565,437.809 109.322,436.628 111.565,436.628 z"
   id="path438" />
<path
   d="M109.322,435.32 109.322,433.952 111.565,436.628 z"
   id="path439" />
<path
   d="M111.565,436.628 109.322,433.952 111.565,435.261 z"
   id="path440" />
<path
   d="M111.565,439.175 111.565,437.809 111.565,439.175 z"
   id="path441" />
<path
   d="M111.565,439.175 111.565,437.809 111.565,437.809 z"
   id="path442" />
<path
   d="M111.565,437.809 111.565,436.628 111.565,437.809 z"
   id="path443" />
<path
   d="M111.565,437.809 111.565,436.628 111.565,436.628 z"
   id="path444" />
<path
   d="M111.565,436.628 111.565,435.261 111.565,436.628 z"
   id="path445" />
<path
   d="M111.565,436.628 111.565,435.261 111.565,435.261 z"
   id="path446" />
<path
   d="M111.565,439.175 111.565,437.809 112.577,438.585 z"
   id="path447" />
<path
   d="M112.577,438.585 111.565,437.809 112.577,437.809 z"
   id="path448" />
<path
   d="M111.565,437.809 111.565,436.628 112.577,437.218 z"
   id="path449" />
<path
   d="M111.565,436.628 111.565,435.261 112.577,436.628 z"
   id="path450" />
<path
   d="M112.577,436.628 111.565,435.261 112.577,435.852 z"
   id="path451" />
<path
   d="M112.577,438.585 112.577,437.809 113.454,438.073 z"
   id="path452" />
<path
   d="M113.454,438.073 112.577,437.809 113.454,437.809 z"
   id="path453" />
<path
   d="M113.454,437.73 112.577,437.218 113.454,436.707 z"
   id="path454" />
<path
   d="M112.577,436.628 112.577,435.852 113.454,436.628 z"
   id="path455" />
<path
   d="M113.454,436.628 112.577,435.852 113.454,436.364 z"
   id="path456" />
<path
   d="M113.454,438.073 113.454,437.809 113.753,437.898 z"
   id="path457" />
<path
   d="M113.753,437.898 113.454,437.809 113.753,437.809 z"
   id="path458" />
<path
   d="M113.454,436.628 113.454,436.364 113.753,436.628 z"
   id="path459" />
<path
   d="M113.753,436.628 113.454,436.364 113.753,436.538 z"
   id="path460" />
<path
   d="M113.753,437.898 113.753,436.538 114.917,437.218 z"
   id="path461" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(192,0,0)"
   stroke="rgb(192,0,0)"
   stroke-width="0"
   id="g464">
<text
   transform="matrix(7.85822 0 -0 7.84489 58.3613 321.745)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text461">To/From G/E</text>
<text
   transform="matrix(7.84277 0 -0 7.84489 58.4707 333.707)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text462">C.F.W. System</text>
<text
   transform="matrix(7.85415 0 -0 7.84489 58.3613 454.453)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text463">To/From M/E</text>
<text
   transform="matrix(7.84342 0 -0 7.8583 58.472 466.414)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text464">C.F.W. System</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g465">
<polyline
   points="167.805,519.1 167.805,477.073 "
   id="polyline464" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g478">
<path
   d="M157.449,531.718 156.566,527.363 157.449,523.008 z"
   id="path465" />
<path
   d="M157.449,531.718 157.449,523.008 159.857,535.276 z"
   id="path466" />
<path
   d="M159.857,535.276 157.449,523.008 159.857,519.451 z"
   id="path467" />
<path
   d="M159.857,535.276 159.857,519.451 163.429,537.675 z"
   id="path468" />
<path
   d="M163.429,537.675 159.857,519.451 163.429,517.052 z"
   id="path469" />
<path
   d="M163.429,537.675 163.429,517.052 167.805,538.555 z"
   id="path470" />
<path
   d="M167.805,538.555 163.429,517.052 167.805,516.172 z"
   id="path471" />
<path
   d="M167.805,538.555 167.805,516.172 172.181,537.675 z"
   id="path472" />
<path
   d="M172.181,537.675 167.805,516.172 172.181,517.052 z"
   id="path473" />
<path
   d="M172.181,537.675 172.181,517.052 175.753,535.276 z"
   id="path474" />
<path
   d="M175.753,535.276 172.181,517.052 175.753,519.451 z"
   id="path475" />
<path
   d="M175.753,535.276 175.753,519.451 178.161,531.718 z"
   id="path476" />
<path
   d="M178.161,531.718 175.753,519.451 178.161,523.008 z"
   id="path477" />
<path
   d="M178.161,531.718 178.161,523.008 179.044,527.363 z"
   id="path478" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g479">
<polyline
   points="156.566,527.363 157.449,523.008 159.857,519.451 163.429,517.052 167.805,516.172 172.181,517.052 175.753,519.451 178.161,523.008 179.044,527.363 178.161,531.718 175.753,535.276 172.181,537.675 167.805,538.555 163.429,537.675 159.857,535.276 157.449,531.718 156.566,527.363 "
   id="polyline478" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g480">
<text
   transform="matrix(7.86315 0 -0 7.8583 161.202 531.724)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text479">PX</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g481">
<polyline
   points="167.522,502.856 174.416,502.856 "
   id="polyline480" />
<polyline
   points="174.605,499.078 174.605,506.633 "
   id="polyline481" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g482">
<path
   d="M171.677,497.284 167.9,502.761 164.122,497.284 164.122,497.284 z"
   id="path481" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g483">
<polyline
   points="171.677,497.284 167.9,502.761 164.122,497.284 171.677,497.284 "
   id="polyline482" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g484">
<path
   d="M164.122,508.333 167.9,502.761 171.677,508.333 171.677,508.333 z"
   id="path483" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g485">
<polyline
   points="164.122,508.333 167.9,502.761 171.677,508.333 164.122,508.333 "
   id="polyline484" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g498">
<path
   d="M153.117,578.529 151.844,572.224 153.117,565.918 z"
   id="path485" />
<path
   d="M153.117,578.529 153.117,565.918 156.587,583.678 z"
   id="path486" />
<path
   d="M156.587,583.678 153.117,565.918 156.587,560.769 z"
   id="path487" />
<path
   d="M156.587,583.678 156.587,560.769 161.735,587.148 z"
   id="path488" />
<path
   d="M161.735,587.148 156.587,560.769 161.735,557.299 z"
   id="path489" />
<path
   d="M161.735,587.148 161.735,557.299 168.041,588.42 z"
   id="path490" />
<path
   d="M168.041,588.42 161.735,557.299 168.041,556.027 z"
   id="path491" />
<path
   d="M168.041,588.42 168.041,556.027 174.347,587.148 z"
   id="path492" />
<path
   d="M174.347,587.148 168.041,556.027 174.347,557.299 z"
   id="path493" />
<path
   d="M174.347,587.148 174.347,557.299 179.495,583.678 z"
   id="path494" />
<path
   d="M179.495,583.678 174.347,557.299 179.495,560.769 z"
   id="path495" />
<path
   d="M179.495,583.678 179.495,560.769 182.966,578.529 z"
   id="path496" />
<path
   d="M182.966,578.529 179.495,560.769 182.966,565.918 z"
   id="path497" />
<path
   d="M182.966,578.529 182.966,565.918 184.238,572.224 z"
   id="path498" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g499">
<polyline
   points="151.844,572.224 153.117,565.918 156.587,560.769 161.735,557.299 168.041,556.027 174.347,557.299 179.495,560.769 182.966,565.918 184.238,572.224 182.966,578.529 179.495,583.678 174.347,587.148 168.041,588.42 161.735,587.148 156.587,583.678 153.117,578.529 151.844,572.224 "
   id="polyline498" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g500">
<text
   transform="matrix(7.86132 0 -0 7.84489 163.034 569.973)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text499">PI</text>
<text
   transform="matrix(7.84248 0 -0 7.84489 160.39 583.197)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text500">MC</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g501">
<polyline
   points="151.844,572.271 184.277,572.271 "
   id="polyline500" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g502">
<polyline
   points="167.805,556.688 167.805,538.555 "
   id="polyline501" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g503">
<polyline
   points="562.574,178.541 562.574,171.647 "
   id="polyline502" />
<polyline
   points="558.796,171.458 566.352,171.458 "
   id="polyline503" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g504">
<path
   d="M557.002,174.385 562.479,178.163 557.002,181.941 557.002,181.941 z"
   id="path503" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g505">
<polyline
   points="557.002,174.385 562.479,178.163 557.002,181.941 557.002,174.385 "
   id="polyline504" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g506">
<path
   d="M568.052,181.941 562.479,178.163 568.052,174.385 568.052,174.385 z"
   id="path505" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g507">
<polyline
   points="568.052,181.941 562.479,178.163 568.052,174.385 568.052,181.941 "
   id="polyline506" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,240)"
   stroke-width="0.7"
   id="g508">
<polyline
   points="622.922,322.707 624.209,319.868 627.314,318.693 630.419,319.868 631.706,322.707 "
   id="polyline507" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,80)"
   stroke="rgb(0,176,80)"
   stroke-width="1"
   id="g585">
<path
   d="M253.936,178.376 253.936,177.195 255.471,178.376 z"
   id="path508" />
<path
   d="M255.471,178.376 253.936,177.195 255.471,177.195 z"
   id="path509" />
<path
   d="M255.684,180.895 255.471,180.839 255.684,180.028 z"
   id="path510" />
<path
   d="M255.471,178.376 255.471,177.195 255.684,178.376 z"
   id="path511" />
<path
   d="M255.684,178.376 255.471,177.195 255.684,177.195 z"
   id="path512" />
<path
   d="M255.684,175.542 255.471,174.732 255.684,174.675 z"
   id="path513" />
<path
   d="M255.684,180.895 255.684,180.028 256.274,181.051 z"
   id="path514" />
<path
   d="M256.274,181.051 255.684,180.028 256.274,179.684 z"
   id="path515" />
<path
   d="M255.684,178.376 255.684,177.195 256.274,178.376 z"
   id="path516" />
<path
   d="M256.274,178.376 255.684,177.195 256.274,177.195 z"
   id="path517" />
<path
   d="M255.684,175.542 255.684,174.675 256.274,175.887 z"
   id="path518" />
<path
   d="M256.274,175.887 255.684,174.675 256.274,174.519 z"
   id="path519" />
<path
   d="M256.274,181.051 256.274,179.684 258.517,179.742 z"
   id="path520" />
<path
   d="M258.517,179.742 256.274,179.684 258.517,178.376 z"
   id="path521" />
<path
   d="M256.274,178.376 256.274,177.195 258.517,178.376 z"
   id="path522" />
<path
   d="M258.517,178.376 256.274,177.195 258.517,177.195 z"
   id="path523" />
<path
   d="M256.274,175.887 256.274,174.519 258.517,177.195 z"
   id="path524" />
<path
   d="M258.517,177.195 256.274,174.519 258.517,175.828 z"
   id="path525" />
<path
   d="M258.517,179.742 258.517,178.376 258.517,179.742 z"
   id="path526" />
<path
   d="M258.517,179.742 258.517,178.376 258.517,178.376 z"
   id="path527" />
<path
   d="M258.517,178.376 258.517,177.195 258.517,178.376 z"
   id="path528" />
<path
   d="M258.517,178.376 258.517,177.195 258.517,177.195 z"
   id="path529" />
<path
   d="M258.517,177.195 258.517,175.828 258.517,177.195 z"
   id="path530" />
<path
   d="M258.517,177.195 258.517,175.828 258.517,175.828 z"
   id="path531" />
<path
   d="M258.517,179.742 258.517,178.376 259.529,179.152 z"
   id="path532" />
<path
   d="M259.529,179.152 258.517,178.376 259.529,178.376 z"
   id="path533" />
<path
   d="M258.517,178.376 258.517,177.195 259.529,177.785 z"
   id="path534" />
<path
   d="M258.517,177.195 258.517,175.828 259.529,177.195 z"
   id="path535" />
<path
   d="M259.529,177.195 258.517,175.828 259.529,176.419 z"
   id="path536" />
<path
   d="M259.529,179.152 259.529,178.376 260.406,178.64 z"
   id="path537" />
<path
   d="M260.406,178.64 259.529,178.376 260.406,178.376 z"
   id="path538" />
<path
   d="M260.406,178.297 259.529,177.785 260.406,177.274 z"
   id="path539" />
<path
   d="M259.529,177.195 259.529,176.419 260.406,177.195 z"
   id="path540" />
<path
   d="M260.406,177.195 259.529,176.419 260.406,176.931 z"
   id="path541" />
<path
   d="M260.406,178.64 260.406,178.376 260.705,178.465 z"
   id="path542" />
<path
   d="M260.705,178.465 260.406,178.376 260.705,178.376 z"
   id="path543" />
<path
   d="M260.406,177.195 260.406,176.931 260.705,177.195 z"
   id="path544" />
<path
   d="M260.705,177.195 260.406,176.931 260.705,177.105 z"
   id="path545" />
<path
   d="M260.705,178.465 260.705,177.105 261.87,177.785 z"
   id="path546" />
<path
   d="M393.05,178.376 393.05,177.195 394.585,178.376 z"
   id="path547" />
<path
   d="M394.585,178.376 393.05,177.195 394.585,177.195 z"
   id="path548" />
<path
   d="M394.797,180.895 394.585,180.839 394.797,180.028 z"
   id="path549" />
<path
   d="M394.585,178.376 394.585,177.195 394.797,178.376 z"
   id="path550" />
<path
   d="M394.797,178.376 394.585,177.195 394.797,177.195 z"
   id="path551" />
<path
   d="M394.797,175.542 394.585,174.732 394.797,174.675 z"
   id="path552" />
<path
   d="M394.797,180.895 394.797,180.028 395.387,181.051 z"
   id="path553" />
<path
   d="M395.387,181.051 394.797,180.028 395.387,179.684 z"
   id="path554" />
<path
   d="M394.797,178.376 394.797,177.195 395.387,178.376 z"
   id="path555" />
<path
   d="M395.387,178.376 394.797,177.195 395.387,177.195 z"
   id="path556" />
<path
   d="M394.797,175.542 394.797,174.675 395.387,175.887 z"
   id="path557" />
<path
   d="M395.387,175.887 394.797,174.675 395.387,174.519 z"
   id="path558" />
<path
   d="M395.387,181.051 395.387,179.684 397.63,179.742 z"
   id="path559" />
<path
   d="M397.63,179.742 395.387,179.684 397.63,178.376 z"
   id="path560" />
<path
   d="M395.387,178.376 395.387,177.195 397.63,178.376 z"
   id="path561" />
<path
   d="M397.63,178.376 395.387,177.195 397.63,177.195 z"
   id="path562" />
<path
   d="M395.387,175.887 395.387,174.519 397.63,177.195 z"
   id="path563" />
<path
   d="M397.63,177.195 395.387,174.519 397.63,175.828 z"
   id="path564" />
<path
   d="M397.63,179.742 397.63,178.376 397.63,179.742 z"
   id="path565" />
<path
   d="M397.63,179.742 397.63,178.376 397.63,178.376 z"
   id="path566" />
<path
   d="M397.63,178.376 397.63,177.195 397.63,178.376 z"
   id="path567" />
<path
   d="M397.63,178.376 397.63,177.195 397.63,177.195 z"
   id="path568" />
<path
   d="M397.63,177.195 397.63,175.828 397.63,177.195 z"
   id="path569" />
<path
   d="M397.63,177.195 397.63,175.828 397.63,175.828 z"
   id="path570" />
<path
   d="M397.63,179.742 397.63,178.376 398.642,179.152 z"
   id="path571" />
<path
   d="M398.642,179.152 397.63,178.376 398.642,178.376 z"
   id="path572" />
<path
   d="M397.63,178.376 397.63,177.195 398.642,177.785 z"
   id="path573" />
<path
   d="M397.63,177.195 397.63,175.828 398.642,177.195 z"
   id="path574" />
<path
   d="M398.642,177.195 397.63,175.828 398.642,176.419 z"
   id="path575" />
<path
   d="M398.642,179.152 398.642,178.376 399.519,178.64 z"
   id="path576" />
<path
   d="M399.519,178.64 398.642,178.376 399.519,178.376 z"
   id="path577" />
<path
   d="M399.519,178.297 398.642,177.785 399.519,177.274 z"
   id="path578" />
<path
   d="M398.642,177.195 398.642,176.419 399.519,177.195 z"
   id="path579" />
<path
   d="M399.519,177.195 398.642,176.419 399.519,176.931 z"
   id="path580" />
<path
   d="M399.519,178.64 399.519,178.376 399.81,178.47 z"
   id="path581" />
<path
   d="M399.81,178.47 399.519,178.376 399.81,178.376 z"
   id="path582" />
<path
   d="M399.519,177.195 399.519,176.931 399.81,177.195 z"
   id="path583" />
<path
   d="M399.81,177.195 399.519,176.931 399.81,177.101 z"
   id="path584" />
<path
   d="M399.81,178.47 399.81,177.101 400.983,177.785 z"
   id="path585" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,240)"
   stroke="rgb(0,176,240)"
   stroke-width="1"
   id="g847">
<path
   d="M579.573,178.376 579.573,177.195 581.014,178.376 z"
   id="path586" />
<path
   d="M581.014,178.376 579.573,177.195 581.014,177.195 z"
   id="path587" />
<path
   d="M581.226,180.895 581.014,180.839 581.226,180.028 z"
   id="path588" />
<path
   d="M581.014,178.376 581.014,177.195 581.226,178.376 z"
   id="path589" />
<path
   d="M581.226,178.376 581.014,177.195 581.226,177.195 z"
   id="path590" />
<path
   d="M581.226,175.542 581.014,174.732 581.226,174.675 z"
   id="path591" />
<path
   d="M581.226,180.895 581.226,180.028 581.816,181.051 z"
   id="path592" />
<path
   d="M581.816,181.051 581.226,180.028 581.816,179.684 z"
   id="path593" />
<path
   d="M581.226,178.376 581.226,177.195 581.816,178.376 z"
   id="path594" />
<path
   d="M581.816,178.376 581.226,177.195 581.816,177.195 z"
   id="path595" />
<path
   d="M581.226,175.542 581.226,174.675 581.816,175.887 z"
   id="path596" />
<path
   d="M581.816,175.887 581.226,174.675 581.816,174.519 z"
   id="path597" />
<path
   d="M581.816,181.051 581.816,179.684 584.059,179.742 z"
   id="path598" />
<path
   d="M584.059,179.742 581.816,179.684 584.059,178.376 z"
   id="path599" />
<path
   d="M581.816,178.376 581.816,177.195 584.059,178.376 z"
   id="path600" />
<path
   d="M584.059,178.376 581.816,177.195 584.059,177.195 z"
   id="path601" />
<path
   d="M581.816,175.887 581.816,174.519 584.059,177.195 z"
   id="path602" />
<path
   d="M584.059,177.195 581.816,174.519 584.059,175.828 z"
   id="path603" />
<path
   d="M584.059,179.742 584.059,178.376 584.06,179.742 z"
   id="path604" />
<path
   d="M584.06,179.742 584.059,178.376 584.06,178.376 z"
   id="path605" />
<path
   d="M584.059,178.376 584.059,177.195 584.06,178.376 z"
   id="path606" />
<path
   d="M584.06,178.376 584.059,177.195 584.06,177.195 z"
   id="path607" />
<path
   d="M584.059,177.195 584.059,175.828 584.06,177.195 z"
   id="path608" />
<path
   d="M584.06,177.195 584.059,175.828 584.06,175.828 z"
   id="path609" />
<path
   d="M584.06,179.742 584.06,178.376 585.071,179.152 z"
   id="path610" />
<path
   d="M585.071,179.152 584.06,178.376 585.071,178.376 z"
   id="path611" />
<path
   d="M584.06,178.376 584.06,177.195 585.071,177.785 z"
   id="path612" />
<path
   d="M584.06,177.195 584.06,175.828 585.071,177.195 z"
   id="path613" />
<path
   d="M585.071,177.195 584.06,175.828 585.071,176.419 z"
   id="path614" />
<path
   d="M585.071,179.152 585.071,178.376 585.948,178.64 z"
   id="path615" />
<path
   d="M585.948,178.64 585.071,178.376 585.948,178.376 z"
   id="path616" />
<path
   d="M585.948,178.297 585.071,177.785 585.948,177.274 z"
   id="path617" />
<path
   d="M585.071,177.195 585.071,176.419 585.948,177.195 z"
   id="path618" />
<path
   d="M585.948,177.195 585.071,176.419 585.948,176.931 z"
   id="path619" />
<path
   d="M585.948,178.64 585.948,178.376 586.24,178.47 z"
   id="path620" />
<path
   d="M586.24,178.47 585.948,178.376 586.24,178.376 z"
   id="path621" />
<path
   d="M585.948,177.195 585.948,176.931 586.24,177.195 z"
   id="path622" />
<path
   d="M586.24,177.195 585.948,176.931 586.24,177.101 z"
   id="path623" />
<path
   d="M586.24,178.47 586.24,177.101 587.412,177.785 z"
   id="path624" />
<path
   d="M752.875,178.376 752.875,177.195 754.315,178.376 z"
   id="path625" />
<path
   d="M754.315,178.376 752.875,177.195 754.315,177.195 z"
   id="path626" />
<path
   d="M754.528,180.895 754.315,180.839 754.528,180.028 z"
   id="path627" />
<path
   d="M754.315,178.376 754.315,177.195 754.528,178.376 z"
   id="path628" />
<path
   d="M754.528,178.376 754.315,177.195 754.528,177.195 z"
   id="path629" />
<path
   d="M754.528,175.542 754.315,174.732 754.528,174.675 z"
   id="path630" />
<path
   d="M754.528,180.895 754.528,180.028 755.118,181.051 z"
   id="path631" />
<path
   d="M755.118,181.051 754.528,180.028 755.118,179.684 z"
   id="path632" />
<path
   d="M754.528,178.376 754.528,177.195 755.118,178.376 z"
   id="path633" />
<path
   d="M755.118,178.376 754.528,177.195 755.118,177.195 z"
   id="path634" />
<path
   d="M754.528,175.542 754.528,174.675 755.118,175.887 z"
   id="path635" />
<path
   d="M755.118,175.887 754.528,174.675 755.118,174.519 z"
   id="path636" />
<path
   d="M755.118,181.051 755.118,179.684 757.361,179.742 z"
   id="path637" />
<path
   d="M757.361,179.742 755.118,179.684 757.361,178.376 z"
   id="path638" />
<path
   d="M755.118,178.376 755.118,177.195 757.361,178.376 z"
   id="path639" />
<path
   d="M757.361,178.376 755.118,177.195 757.361,177.195 z"
   id="path640" />
<path
   d="M755.118,175.887 755.118,174.519 757.361,177.195 z"
   id="path641" />
<path
   d="M757.361,177.195 755.118,174.519 757.361,175.828 z"
   id="path642" />
<path
   d="M757.361,179.742 757.361,178.376 757.361,179.742 z"
   id="path643" />
<path
   d="M757.361,179.742 757.361,178.376 757.361,178.376 z"
   id="path644" />
<path
   d="M757.361,178.376 757.361,177.195 757.361,178.376 z"
   id="path645" />
<path
   d="M757.361,178.376 757.361,177.195 757.361,177.195 z"
   id="path646" />
<path
   d="M757.361,177.195 757.361,175.828 757.361,177.195 z"
   id="path647" />
<path
   d="M757.361,177.195 757.361,175.828 757.361,175.828 z"
   id="path648" />
<path
   d="M757.361,179.742 757.361,178.376 758.373,179.152 z"
   id="path649" />
<path
   d="M758.373,179.152 757.361,178.376 758.373,178.376 z"
   id="path650" />
<path
   d="M757.361,178.376 757.361,177.195 758.373,177.785 z"
   id="path651" />
<path
   d="M757.361,177.195 757.361,175.828 758.373,177.195 z"
   id="path652" />
<path
   d="M758.373,177.195 757.361,175.828 758.373,176.419 z"
   id="path653" />
<path
   d="M758.373,179.152 758.373,178.376 759.25,178.64 z"
   id="path654" />
<path
   d="M759.25,178.64 758.373,178.376 759.25,178.376 z"
   id="path655" />
<path
   d="M759.25,178.297 758.373,177.785 759.25,177.274 z"
   id="path656" />
<path
   d="M758.373,177.195 758.373,176.419 759.25,177.195 z"
   id="path657" />
<path
   d="M759.25,177.195 758.373,176.419 759.25,176.931 z"
   id="path658" />
<path
   d="M759.25,178.64 759.25,178.376 759.541,178.47 z"
   id="path659" />
<path
   d="M759.541,178.47 759.25,178.376 759.541,178.376 z"
   id="path660" />
<path
   d="M759.25,177.195 759.25,176.931 759.541,177.195 z"
   id="path661" />
<path
   d="M759.541,177.195 759.25,176.931 759.541,177.101 z"
   id="path662" />
<path
   d="M759.541,178.47 759.541,177.101 760.714,177.785 z"
   id="path663" />
<path
   d="M576.016,250.336 574.851,249.656 576.016,248.976 z"
   id="path664" />
<path
   d="M576.016,250.336 576.016,250.246 576.315,250.51 z"
   id="path665" />
<path
   d="M576.315,250.51 576.016,250.246 576.315,250.246 z"
   id="path666" />
<path
   d="M576.016,249.066 576.016,248.976 576.315,249.066 z"
   id="path667" />
<path
   d="M576.315,249.066 576.016,248.976 576.315,248.801 z"
   id="path668" />
<path
   d="M576.315,250.51 576.315,250.246 577.192,251.022 z"
   id="path669" />
<path
   d="M577.192,251.022 576.315,250.246 577.192,250.246 z"
   id="path670" />
<path
   d="M576.315,250.167 576.315,249.144 577.192,249.656 z"
   id="path671" />
<path
   d="M576.315,249.066 576.315,248.801 577.192,249.066 z"
   id="path672" />
<path
   d="M577.192,249.066 576.315,248.801 577.192,248.29 z"
   id="path673" />
<path
   d="M577.192,251.022 577.192,250.246 578.204,251.613 z"
   id="path674" />
<path
   d="M578.204,251.613 577.192,250.246 578.204,250.246 z"
   id="path675" />
<path
   d="M578.204,250.246 577.192,249.656 578.204,249.066 z"
   id="path676" />
<path
   d="M577.192,249.066 577.192,248.29 578.204,249.066 z"
   id="path677" />
<path
   d="M578.204,249.066 577.192,248.29 578.204,247.699 z"
   id="path678" />
<path
   d="M578.204,251.613 578.204,250.246 578.204,251.613 z"
   id="path679" />
<path
   d="M578.204,251.613 578.204,250.246 578.204,250.246 z"
   id="path680" />
<path
   d="M578.204,250.246 578.204,249.066 578.204,250.246 z"
   id="path681" />
<path
   d="M578.204,250.246 578.204,249.066 578.204,249.066 z"
   id="path682" />
<path
   d="M578.204,249.066 578.204,247.699 578.204,249.066 z"
   id="path683" />
<path
   d="M578.204,249.066 578.204,247.699 578.204,247.699 z"
   id="path684" />
<path
   d="M578.204,251.613 578.204,250.246 580.447,252.922 z"
   id="path685" />
<path
   d="M580.447,252.922 578.204,250.246 580.447,251.555 z"
   id="path686" />
<path
   d="M578.204,250.246 578.204,249.066 580.447,250.246 z"
   id="path687" />
<path
   d="M580.447,250.246 578.204,249.066 580.447,249.066 z"
   id="path688" />
<path
   d="M578.204,249.066 578.204,247.699 580.447,247.757 z"
   id="path689" />
<path
   d="M580.447,247.757 578.204,247.699 580.447,246.39 z"
   id="path690" />
<path
   d="M580.447,252.922 580.447,251.555 581.037,252.766 z"
   id="path691" />
<path
   d="M581.037,252.766 580.447,251.555 581.037,251.899 z"
   id="path692" />
<path
   d="M580.447,250.246 580.447,249.066 581.037,250.246 z"
   id="path693" />
<path
   d="M581.037,250.246 580.447,249.066 581.037,249.066 z"
   id="path694" />
<path
   d="M580.447,247.757 580.447,246.39 581.037,247.413 z"
   id="path695" />
<path
   d="M581.037,247.413 580.447,246.39 581.037,246.546 z"
   id="path696" />
<path
   d="M581.037,252.766 581.037,251.899 581.25,252.709 z"
   id="path697" />
<path
   d="M581.037,250.246 581.037,249.066 581.25,250.246 z"
   id="path698" />
<path
   d="M581.25,250.246 581.037,249.066 581.25,249.066 z"
   id="path699" />
<path
   d="M581.037,247.413 581.037,246.546 581.25,246.602 z"
   id="path700" />
<path
   d="M581.25,250.246 581.25,249.066 582.785,250.246 z"
   id="path701" />
<path
   d="M582.785,250.246 581.25,249.066 582.785,249.066 z"
   id="path702" />
<path
   d="M574.851,323.628 574.851,322.447 576.386,323.628 z"
   id="path703" />
<path
   d="M576.386,323.628 574.851,322.447 576.386,322.447 z"
   id="path704" />
<path
   d="M576.599,326.147 576.386,326.091 576.599,325.281 z"
   id="path705" />
<path
   d="M576.386,323.628 576.386,322.447 576.599,323.628 z"
   id="path706" />
<path
   d="M576.599,323.628 576.386,322.447 576.599,322.447 z"
   id="path707" />
<path
   d="M576.599,320.795 576.386,319.984 576.599,319.928 z"
   id="path708" />
<path
   d="M576.599,326.147 576.599,325.281 577.189,326.304 z"
   id="path709" />
<path
   d="M577.189,326.304 576.599,325.281 577.189,324.936 z"
   id="path710" />
<path
   d="M576.599,323.628 576.599,322.447 577.189,323.628 z"
   id="path711" />
<path
   d="M577.189,323.628 576.599,322.447 577.189,322.447 z"
   id="path712" />
<path
   d="M576.599,320.795 576.599,319.928 577.189,321.139 z"
   id="path713" />
<path
   d="M577.189,321.139 576.599,319.928 577.189,319.771 z"
   id="path714" />
<path
   d="M577.189,326.304 577.189,324.936 579.432,324.994 z"
   id="path715" />
<path
   d="M579.432,324.994 577.189,324.936 579.432,323.628 z"
   id="path716" />
<path
   d="M577.189,323.628 577.189,322.447 579.432,323.628 z"
   id="path717" />
<path
   d="M579.432,323.628 577.189,322.447 579.432,322.447 z"
   id="path718" />
<path
   d="M577.189,321.139 577.189,319.771 579.432,322.447 z"
   id="path719" />
<path
   d="M579.432,322.447 577.189,319.771 579.432,321.081 z"
   id="path720" />
<path
   d="M579.432,324.994 579.432,323.628 579.432,324.994 z"
   id="path721" />
<path
   d="M579.432,324.994 579.432,323.628 579.432,323.628 z"
   id="path722" />
<path
   d="M579.432,323.628 579.432,322.447 579.432,323.628 z"
   id="path723" />
<path
   d="M579.432,323.628 579.432,322.447 579.432,322.447 z"
   id="path724" />
<path
   d="M579.432,322.447 579.432,321.081 579.432,322.447 z"
   id="path725" />
<path
   d="M579.432,322.447 579.432,321.081 579.432,321.081 z"
   id="path726" />
<path
   d="M579.432,324.994 579.432,323.628 580.444,324.404 z"
   id="path727" />
<path
   d="M580.444,324.404 579.432,323.628 580.444,323.628 z"
   id="path728" />
<path
   d="M579.432,323.628 579.432,322.447 580.444,323.038 z"
   id="path729" />
<path
   d="M579.432,322.447 579.432,321.081 580.444,322.447 z"
   id="path730" />
<path
   d="M580.444,322.447 579.432,321.081 580.444,321.671 z"
   id="path731" />
<path
   d="M580.444,324.404 580.444,323.628 581.321,323.892 z"
   id="path732" />
<path
   d="M581.321,323.892 580.444,323.628 581.321,323.628 z"
   id="path733" />
<path
   d="M581.321,323.549 580.444,323.038 581.321,322.526 z"
   id="path734" />
<path
   d="M580.444,322.447 580.444,321.671 581.321,322.447 z"
   id="path735" />
<path
   d="M581.321,322.447 580.444,321.671 581.321,322.183 z"
   id="path736" />
<path
   d="M581.321,323.892 581.321,323.628 581.62,323.717 z"
   id="path737" />
<path
   d="M581.62,323.717 581.321,323.628 581.62,323.628 z"
   id="path738" />
<path
   d="M581.321,322.447 581.321,322.183 581.62,322.447 z"
   id="path739" />
<path
   d="M581.62,322.447 581.321,322.183 581.62,322.358 z"
   id="path740" />
<path
   d="M581.62,323.717 581.62,322.358 582.785,323.038 z"
   id="path741" />
<path
   d="M576.106,394.569 574.942,393.889 576.106,393.209 z"
   id="path742" />
<path
   d="M576.106,394.569 576.106,394.479 576.405,394.744 z"
   id="path743" />
<path
   d="M576.405,394.744 576.106,394.479 576.405,394.479 z"
   id="path744" />
<path
   d="M576.106,393.299 576.106,393.209 576.405,393.299 z"
   id="path745" />
<path
   d="M576.405,393.299 576.106,393.209 576.405,393.035 z"
   id="path746" />
<path
   d="M576.405,394.744 576.405,394.479 577.282,395.255 z"
   id="path747" />
<path
   d="M577.282,395.255 576.405,394.479 577.282,394.479 z"
   id="path748" />
<path
   d="M576.405,394.401 576.405,393.378 577.282,393.889 z"
   id="path749" />
<path
   d="M576.405,393.299 576.405,393.035 577.282,393.299 z"
   id="path750" />
<path
   d="M577.282,393.299 576.405,393.035 577.282,392.523 z"
   id="path751" />
<path
   d="M577.282,395.255 577.282,394.479 578.294,395.846 z"
   id="path752" />
<path
   d="M578.294,395.846 577.282,394.479 578.294,394.479 z"
   id="path753" />
<path
   d="M578.294,394.479 577.282,393.889 578.294,393.299 z"
   id="path754" />
<path
   d="M577.282,393.299 577.282,392.523 578.294,393.299 z"
   id="path755" />
<path
   d="M578.294,393.299 577.282,392.523 578.294,391.932 z"
   id="path756" />
<path
   d="M578.294,395.846 578.294,394.479 580.537,397.155 z"
   id="path757" />
<path
   d="M580.537,397.155 578.294,394.479 580.537,395.788 z"
   id="path758" />
<path
   d="M578.294,394.479 578.294,393.299 580.537,394.479 z"
   id="path759" />
<path
   d="M580.537,394.479 578.294,393.299 580.537,393.299 z"
   id="path760" />
<path
   d="M578.294,393.299 578.294,391.932 580.537,391.99 z"
   id="path761" />
<path
   d="M580.537,391.99 578.294,391.932 580.537,390.623 z"
   id="path762" />
<path
   d="M580.537,397.155 580.537,395.788 581.128,396.999 z"
   id="path763" />
<path
   d="M581.128,396.999 580.537,395.788 581.128,396.132 z"
   id="path764" />
<path
   d="M580.537,394.479 580.537,393.299 581.128,394.479 z"
   id="path765" />
<path
   d="M581.128,394.479 580.537,393.299 581.128,393.299 z"
   id="path766" />
<path
   d="M580.537,391.99 580.537,390.623 581.128,391.646 z"
   id="path767" />
<path
   d="M581.128,391.646 580.537,390.623 581.128,390.779 z"
   id="path768" />
<path
   d="M581.128,396.999 581.128,396.132 581.34,396.943 z"
   id="path769" />
<path
   d="M581.128,394.479 581.128,393.299 581.34,394.479 z"
   id="path770" />
<path
   d="M581.34,394.479 581.128,393.299 581.34,393.299 z"
   id="path771" />
<path
   d="M581.128,391.646 581.128,390.779 581.34,390.836 z"
   id="path772" />
<path
   d="M581.34,394.479 581.34,393.299 582.875,394.479 z"
   id="path773" />
<path
   d="M582.875,394.479 581.34,393.299 582.875,393.299 z"
   id="path774" />
<path
   d="M695.391,339.489 694.226,338.809 695.391,338.13 z"
   id="path775" />
<path
   d="M695.391,339.489 695.391,339.4 695.69,339.664 z"
   id="path776" />
<path
   d="M695.69,339.664 695.391,339.4 695.69,339.4 z"
   id="path777" />
<path
   d="M695.391,338.219 695.391,338.13 695.69,338.219 z"
   id="path778" />
<path
   d="M695.69,338.219 695.391,338.13 695.69,337.955 z"
   id="path779" />
<path
   d="M695.69,339.664 695.69,339.4 696.567,340.176 z"
   id="path780" />
<path
   d="M696.567,340.176 695.69,339.4 696.567,339.4 z"
   id="path781" />
<path
   d="M695.69,339.321 695.69,338.298 696.567,338.809 z"
   id="path782" />
<path
   d="M695.69,338.219 695.69,337.955 696.567,338.219 z"
   id="path783" />
<path
   d="M696.567,338.219 695.69,337.955 696.567,337.443 z"
   id="path784" />
<path
   d="M696.567,340.176 696.567,339.4 697.579,340.766 z"
   id="path785" />
<path
   d="M697.579,340.766 696.567,339.4 697.579,339.4 z"
   id="path786" />
<path
   d="M697.579,339.4 696.567,338.809 697.579,338.219 z"
   id="path787" />
<path
   d="M696.567,338.219 696.567,337.443 697.579,338.219 z"
   id="path788" />
<path
   d="M697.579,338.219 696.567,337.443 697.579,336.852 z"
   id="path789" />
<path
   d="M697.579,340.766 697.579,339.4 697.579,340.766 z"
   id="path790" />
<path
   d="M697.579,340.766 697.579,339.4 697.579,339.4 z"
   id="path791" />
<path
   d="M697.579,339.4 697.579,338.219 697.579,339.4 z"
   id="path792" />
<path
   d="M697.579,339.4 697.579,338.219 697.579,338.219 z"
   id="path793" />
<path
   d="M697.579,338.219 697.579,336.852 697.579,338.219 z"
   id="path794" />
<path
   d="M697.579,338.219 697.579,336.852 697.579,336.852 z"
   id="path795" />
<path
   d="M697.579,340.766 697.579,339.4 699.822,342.076 z"
   id="path796" />
<path
   d="M699.822,342.076 697.579,339.4 699.822,340.708 z"
   id="path797" />
<path
   d="M697.579,339.4 697.579,338.219 699.822,339.4 z"
   id="path798" />
<path
   d="M699.822,339.4 697.579,338.219 699.822,338.219 z"
   id="path799" />
<path
   d="M697.579,338.219 697.579,336.852 699.822,336.911 z"
   id="path800" />
<path
   d="M699.822,336.911 697.579,336.852 699.822,335.543 z"
   id="path801" />
<path
   d="M699.822,342.076 699.822,340.708 700.412,341.919 z"
   id="path802" />
<path
   d="M700.412,341.919 699.822,340.708 700.412,341.052 z"
   id="path803" />
<path
   d="M699.822,339.4 699.822,338.219 700.412,339.4 z"
   id="path804" />
<path
   d="M700.412,339.4 699.822,338.219 700.412,338.219 z"
   id="path805" />
<path
   d="M699.822,336.911 699.822,335.543 700.412,336.566 z"
   id="path806" />
<path
   d="M700.412,336.566 699.822,335.543 700.412,335.7 z"
   id="path807" />
<path
   d="M700.412,341.919 700.412,341.052 700.625,341.863 z"
   id="path808" />
<path
   d="M700.412,339.4 700.412,338.219 700.625,339.4 z"
   id="path809" />
<path
   d="M700.625,339.4 700.412,338.219 700.625,338.219 z"
   id="path810" />
<path
   d="M700.412,336.566 700.412,335.7 700.625,335.756 z"
   id="path811" />
<path
   d="M700.625,339.4 700.625,338.219 702.065,339.4 z"
   id="path812" />
<path
   d="M702.065,339.4 700.625,338.219 702.065,338.219 z"
   id="path813" />
<path
   d="M737.638,251.143 737.426,250.341 737.638,249.977 z"
   id="path814" />
<path
   d="M737.638,251.143 737.638,249.977 738.449,250.931 z"
   id="path815" />
<path
   d="M738.449,250.931 737.638,249.977 738.449,248.588 z"
   id="path816" />
<path
   d="M738.449,250.931 738.449,248.588 740.102,248.098 z"
   id="path817" />
<path
   d="M740.102,248.098 738.449,248.588 740.102,245.756 z"
   id="path818" />
<path
   d="M740.102,252.584 740.102,248.098 740.18,252.584 z"
   id="path819" />
<path
   d="M740.18,252.584 740.102,248.098 740.18,247.963 z"
   id="path820" />
<path
   d="M740.102,245.91 740.102,245.756 740.18,245.91 z"
   id="path821" />
<path
   d="M740.18,245.91 740.102,245.756 740.18,245.621 z"
   id="path822" />
<path
   d="M740.18,252.584 740.18,247.963 740.692,252.584 z"
   id="path823" />
<path
   d="M740.692,252.584 740.18,247.963 740.692,247.086 z"
   id="path824" />
<path
   d="M740.692,247.086 740.18,246.209 740.692,246.209 z"
   id="path825" />
<path
   d="M740.18,245.91 740.18,245.621 740.692,245.91 z"
   id="path826" />
<path
   d="M740.692,245.91 740.18,245.621 740.692,244.745 z"
   id="path827" />
<path
   d="M740.692,252.584 740.692,247.086 740.692,252.584 z"
   id="path828" />
<path
   d="M740.692,252.584 740.692,247.086 740.692,247.086 z"
   id="path829" />
<path
   d="M740.692,247.086 740.692,246.209 740.692,247.086 z"
   id="path830" />
<path
   d="M740.692,247.086 740.692,246.209 740.692,246.209 z"
   id="path831" />
<path
   d="M740.692,245.91 740.692,244.745 740.692,245.91 z"
   id="path832" />
<path
   d="M740.692,245.91 740.692,244.745 740.692,244.745 z"
   id="path833" />
<path
   d="M740.692,252.584 740.692,247.086 741.204,252.584 z"
   id="path834" />
<path
   d="M741.204,252.584 740.692,247.086 741.204,247.963 z"
   id="path835" />
<path
   d="M740.692,247.086 740.692,246.209 741.204,246.209 z"
   id="path836" />
<path
   d="M740.692,245.91 740.692,244.745 741.204,245.91 z"
   id="path837" />
<path
   d="M741.204,245.91 740.692,244.745 741.204,245.621 z"
   id="path838" />
<path
   d="M741.204,252.584 741.204,247.963 741.282,252.584 z"
   id="path839" />
<path
   d="M741.282,252.584 741.204,247.963 741.282,248.098 z"
   id="path840" />
<path
   d="M741.204,245.91 741.204,245.621 741.282,245.91 z"
   id="path841" />
<path
   d="M741.282,245.91 741.204,245.621 741.282,245.756 z"
   id="path842" />
<path
   d="M741.282,248.098 741.282,245.756 742.935,250.931 z"
   id="path843" />
<path
   d="M742.935,250.931 741.282,245.756 742.935,248.588 z"
   id="path844" />
<path
   d="M742.935,250.931 742.935,248.588 743.746,251.143 z"
   id="path845" />
<path
   d="M743.746,251.143 742.935,248.588 743.746,249.976 z"
   id="path846" />
<path
   d="M743.746,251.143 743.746,249.976 743.958,250.341 z"
   id="path847" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,80)"
   stroke="rgb(0,176,80)"
   stroke-width="1"
   id="g946">
<path
   d="M382.095,323.533 382.095,322.353 383.535,323.533 z"
   id="path848" />
<path
   d="M383.535,323.533 382.095,322.353 383.535,322.353 z"
   id="path849" />
<path
   d="M383.747,326.053 383.535,325.997 383.747,325.186 z"
   id="path850" />
<path
   d="M383.535,323.533 383.535,322.353 383.747,323.533 z"
   id="path851" />
<path
   d="M383.747,323.533 383.535,322.353 383.747,322.353 z"
   id="path852" />
<path
   d="M383.747,320.7 383.535,319.889 383.747,319.833 z"
   id="path853" />
<path
   d="M383.747,326.053 383.747,325.186 384.338,326.209 z"
   id="path854" />
<path
   d="M384.338,326.209 383.747,325.186 384.338,324.842 z"
   id="path855" />
<path
   d="M383.747,323.533 383.747,322.353 384.338,323.533 z"
   id="path856" />
<path
   d="M384.338,323.533 383.747,322.353 384.338,322.353 z"
   id="path857" />
<path
   d="M383.747,320.7 383.747,319.833 384.338,321.044 z"
   id="path858" />
<path
   d="M384.338,321.044 383.747,319.833 384.338,319.677 z"
   id="path859" />
<path
   d="M384.338,326.209 384.338,324.842 386.581,324.9 z"
   id="path860" />
<path
   d="M386.581,324.9 384.338,324.842 386.581,323.533 z"
   id="path861" />
<path
   d="M384.338,323.533 384.338,322.353 386.581,323.533 z"
   id="path862" />
<path
   d="M386.581,323.533 384.338,322.353 386.581,322.353 z"
   id="path863" />
<path
   d="M384.338,321.044 384.338,319.677 386.581,322.353 z"
   id="path864" />
<path
   d="M386.581,322.353 384.338,319.677 386.581,320.986 z"
   id="path865" />
<path
   d="M386.581,324.9 386.581,323.533 387.593,324.309 z"
   id="path866" />
<path
   d="M387.593,324.309 386.581,323.533 387.593,323.533 z"
   id="path867" />
<path
   d="M386.581,323.533 386.581,322.353 387.593,322.943 z"
   id="path868" />
<path
   d="M386.581,322.353 386.581,320.986 387.593,322.353 z"
   id="path869" />
<path
   d="M387.593,322.353 386.581,320.986 387.593,321.577 z"
   id="path870" />
<path
   d="M387.593,324.309 387.593,323.533 388.469,323.798 z"
   id="path871" />
<path
   d="M388.469,323.798 387.593,323.533 388.469,323.533 z"
   id="path872" />
<path
   d="M388.469,323.455 387.593,322.943 388.469,322.432 z"
   id="path873" />
<path
   d="M387.593,322.353 387.593,321.577 388.469,322.353 z"
   id="path874" />
<path
   d="M388.469,322.353 387.593,321.577 388.469,322.089 z"
   id="path875" />
<path
   d="M388.469,323.798 388.469,323.533 388.769,323.623 z"
   id="path876" />
<path
   d="M388.769,323.623 388.469,323.533 388.769,323.533 z"
   id="path877" />
<path
   d="M388.469,322.353 388.469,322.089 388.769,322.353 z"
   id="path878" />
<path
   d="M388.769,322.353 388.469,322.089 388.769,322.263 z"
   id="path879" />
<path
   d="M388.769,323.623 388.769,322.263 389.933,322.943 z"
   id="path880" />
<path
   d="M414.898,250.808 413.733,250.128 414.898,249.448 z"
   id="path881" />
<path
   d="M414.898,250.808 414.898,250.718 415.197,250.983 z"
   id="path882" />
<path
   d="M415.197,250.983 414.898,250.718 415.197,250.718 z"
   id="path883" />
<path
   d="M414.898,249.538 414.898,249.448 415.197,249.538 z"
   id="path884" />
<path
   d="M415.197,249.538 414.898,249.448 415.197,249.274 z"
   id="path885" />
<path
   d="M415.197,250.983 415.197,250.718 416.074,251.494 z"
   id="path886" />
<path
   d="M416.074,251.494 415.197,250.718 416.074,250.718 z"
   id="path887" />
<path
   d="M415.197,250.64 415.197,249.617 416.074,250.128 z"
   id="path888" />
<path
   d="M415.197,249.538 415.197,249.274 416.074,249.538 z"
   id="path889" />
<path
   d="M416.074,249.538 415.197,249.274 416.074,248.762 z"
   id="path890" />
<path
   d="M416.074,251.494 416.074,250.718 417.086,252.085 z"
   id="path891" />
<path
   d="M417.086,252.085 416.074,250.718 417.086,250.718 z"
   id="path892" />
<path
   d="M417.086,250.718 416.074,250.128 417.086,249.538 z"
   id="path893" />
<path
   d="M416.074,249.538 416.074,248.762 417.086,249.538 z"
   id="path894" />
<path
   d="M417.086,249.538 416.074,248.762 417.086,248.171 z"
   id="path895" />
<path
   d="M417.086,252.085 417.086,250.718 419.328,253.394 z"
   id="path896" />
<path
   d="M419.328,253.394 417.086,250.718 419.328,252.027 z"
   id="path897" />
<path
   d="M417.086,250.718 417.086,249.538 419.328,250.718 z"
   id="path898" />
<path
   d="M419.328,250.718 417.086,249.538 419.328,249.538 z"
   id="path899" />
<path
   d="M417.086,249.538 417.086,248.171 419.328,248.229 z"
   id="path900" />
<path
   d="M419.328,248.229 417.086,248.171 419.328,246.862 z"
   id="path901" />
<path
   d="M419.328,253.394 419.328,252.027 419.919,253.238 z"
   id="path902" />
<path
   d="M419.919,253.238 419.328,252.027 419.919,252.371 z"
   id="path903" />
<path
   d="M419.328,250.718 419.328,249.538 419.919,250.718 z"
   id="path904" />
<path
   d="M419.919,250.718 419.328,249.538 419.919,249.538 z"
   id="path905" />
<path
   d="M419.328,248.229 419.328,246.862 419.919,247.885 z"
   id="path906" />
<path
   d="M419.919,247.885 419.328,246.862 419.919,247.018 z"
   id="path907" />
<path
   d="M419.919,253.238 419.919,252.371 420.131,253.182 z"
   id="path908" />
<path
   d="M419.919,250.718 419.919,249.538 420.131,250.718 z"
   id="path909" />
<path
   d="M420.131,250.718 419.919,249.538 420.131,249.538 z"
   id="path910" />
<path
   d="M419.919,247.885 419.919,247.018 420.131,247.075 z"
   id="path911" />
<path
   d="M420.131,250.718 420.131,249.538 421.572,250.718 z"
   id="path912" />
<path
   d="M421.572,250.718 420.131,249.538 421.572,249.538 z"
   id="path913" />
<path
   d="M416.031,395.305 414.866,394.625 416.031,393.945 z"
   id="path914" />
<path
   d="M416.031,395.305 416.031,395.215 416.33,395.479 z"
   id="path915" />
<path
   d="M416.33,395.479 416.031,395.215 416.33,395.215 z"
   id="path916" />
<path
   d="M416.031,394.035 416.031,393.945 416.33,394.035 z"
   id="path917" />
<path
   d="M416.33,394.035 416.031,393.945 416.33,393.77 z"
   id="path918" />
<path
   d="M416.33,395.479 416.33,395.215 417.207,395.991 z"
   id="path919" />
<path
   d="M417.207,395.991 416.33,395.215 417.207,395.215 z"
   id="path920" />
<path
   d="M416.33,395.136 416.33,394.113 417.207,394.625 z"
   id="path921" />
<path
   d="M416.33,394.035 416.33,393.77 417.207,394.035 z"
   id="path922" />
<path
   d="M417.207,394.035 416.33,393.77 417.207,393.259 z"
   id="path923" />
<path
   d="M417.207,395.991 417.207,395.215 418.219,396.582 z"
   id="path924" />
<path
   d="M418.219,396.582 417.207,395.215 418.219,395.215 z"
   id="path925" />
<path
   d="M418.219,395.215 417.207,394.625 418.219,394.035 z"
   id="path926" />
<path
   d="M417.207,394.035 417.207,393.259 418.219,394.035 z"
   id="path927" />
<path
   d="M418.219,394.035 417.207,393.259 418.219,392.668 z"
   id="path928" />
<path
   d="M418.219,396.582 418.219,395.215 420.462,397.891 z"
   id="path929" />
<path
   d="M420.462,397.891 418.219,395.215 420.462,396.524 z"
   id="path930" />
<path
   d="M418.219,395.215 418.219,394.035 420.462,395.215 z"
   id="path931" />
<path
   d="M420.462,395.215 418.219,394.035 420.462,394.035 z"
   id="path932" />
<path
   d="M418.219,394.035 418.219,392.668 420.462,392.726 z"
   id="path933" />
<path
   d="M420.462,392.726 418.219,392.668 420.462,391.359 z"
   id="path934" />
<path
   d="M420.462,397.891 420.462,396.524 421.052,397.735 z"
   id="path935" />
<path
   d="M421.052,397.735 420.462,396.524 421.052,396.868 z"
   id="path936" />
<path
   d="M420.462,395.215 420.462,394.035 421.052,395.215 z"
   id="path937" />
<path
   d="M421.052,395.215 420.462,394.035 421.052,394.035 z"
   id="path938" />
<path
   d="M420.462,392.726 420.462,391.359 421.052,392.382 z"
   id="path939" />
<path
   d="M421.052,392.382 420.462,391.359 421.052,391.515 z"
   id="path940" />
<path
   d="M421.052,397.735 421.052,396.868 421.265,397.678 z"
   id="path941" />
<path
   d="M421.052,395.215 421.052,394.035 421.265,395.215 z"
   id="path942" />
<path
   d="M421.265,395.215 421.052,394.035 421.265,394.035 z"
   id="path943" />
<path
   d="M421.052,392.382 421.052,391.515 421.265,391.571 z"
   id="path944" />
<path
   d="M421.265,395.215 421.265,394.035 422.705,395.215 z"
   id="path945" />
<path
   d="M422.705,395.215 421.265,394.035 422.705,394.035 z"
   id="path946" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g947">
<polyline
   points="956.304,615.998 967.542,615.998 "
   id="polyline946" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,80)"
   stroke="rgb(0,176,80)"
   stroke-width="1"
   id="g985">
<path
   d="M108.527,476.997 107.362,476.317 108.527,475.638 z"
   id="path947" />
<path
   d="M108.527,476.997 108.527,476.908 108.826,477.172 z"
   id="path948" />
<path
   d="M108.826,477.172 108.527,476.908 108.826,476.908 z"
   id="path949" />
<path
   d="M108.527,475.727 108.527,475.638 108.826,475.727 z"
   id="path950" />
<path
   d="M108.826,475.727 108.527,475.638 108.826,475.463 z"
   id="path951" />
<path
   d="M108.826,477.172 108.826,476.908 109.703,477.684 z"
   id="path952" />
<path
   d="M109.703,477.684 108.826,476.908 109.703,476.908 z"
   id="path953" />
<path
   d="M108.826,476.829 108.826,475.806 109.703,476.317 z"
   id="path954" />
<path
   d="M108.826,475.727 108.826,475.463 109.703,475.727 z"
   id="path955" />
<path
   d="M109.703,475.727 108.826,475.463 109.703,474.951 z"
   id="path956" />
<path
   d="M109.703,477.684 109.703,476.908 110.715,478.274 z"
   id="path957" />
<path
   d="M110.715,478.274 109.703,476.908 110.715,476.908 z"
   id="path958" />
<path
   d="M110.715,476.908 109.703,476.317 110.715,475.727 z"
   id="path959" />
<path
   d="M109.703,475.727 109.703,474.951 110.715,475.727 z"
   id="path960" />
<path
   d="M110.715,475.727 109.703,474.951 110.715,474.361 z"
   id="path961" />
<path
   d="M110.715,478.274 110.715,476.908 110.715,478.274 z"
   id="path962" />
<path
   d="M110.715,478.274 110.715,476.908 110.715,476.908 z"
   id="path963" />
<path
   d="M110.715,476.908 110.715,475.727 110.715,476.908 z"
   id="path964" />
<path
   d="M110.715,476.908 110.715,475.727 110.715,475.727 z"
   id="path965" />
<path
   d="M110.715,475.727 110.715,474.361 110.715,475.727 z"
   id="path966" />
<path
   d="M110.715,475.727 110.715,474.361 110.715,474.36 z"
   id="path967" />
<path
   d="M110.715,478.274 110.715,476.908 112.958,479.584 z"
   id="path968" />
<path
   d="M112.958,479.584 110.715,476.908 112.958,478.216 z"
   id="path969" />
<path
   d="M110.715,476.908 110.715,475.727 112.958,476.908 z"
   id="path970" />
<path
   d="M112.958,476.908 110.715,475.727 112.958,475.727 z"
   id="path971" />
<path
   d="M110.715,475.727 110.715,474.36 112.958,474.419 z"
   id="path972" />
<path
   d="M112.958,474.419 110.715,474.36 112.958,473.051 z"
   id="path973" />
<path
   d="M112.958,479.584 112.958,478.216 113.548,479.427 z"
   id="path974" />
<path
   d="M113.548,479.427 112.958,478.216 113.548,478.56 z"
   id="path975" />
<path
   d="M112.958,476.908 112.958,475.727 113.548,476.908 z"
   id="path976" />
<path
   d="M113.548,476.908 112.958,475.727 113.548,475.727 z"
   id="path977" />
<path
   d="M112.958,474.419 112.958,473.051 113.548,474.074 z"
   id="path978" />
<path
   d="M113.548,474.074 112.958,473.051 113.548,473.207 z"
   id="path979" />
<path
   d="M113.548,479.427 113.548,478.56 113.76,479.371 z"
   id="path980" />
<path
   d="M113.548,476.908 113.548,475.727 113.76,476.908 z"
   id="path981" />
<path
   d="M113.76,476.908 113.548,475.727 113.76,475.727 z"
   id="path982" />
<path
   d="M113.548,474.074 113.548,473.207 113.76,473.264 z"
   id="path983" />
<path
   d="M113.76,476.908 113.76,475.727 114.917,476.908 z"
   id="path984" />
<path
   d="M114.917,476.908 113.76,475.727 114.917,475.727 z"
   id="path985" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,80)"
   stroke-width="0.7"
   id="g986">
<polyline
   points="139.756,342.682 151.844,342.682 "
   id="polyline985" />
<polyline
   points="58.4409,304.244 134.845,304.244 "
   id="polyline986" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,80)"
   stroke="rgb(0,176,80)"
   stroke-width="1"
   id="g1018">
<path
   d="M107.582,343.361 106.418,342.682 107.582,342.002 z"
   id="path986" />
<path
   d="M107.582,343.361 107.582,343.272 107.881,343.536 z"
   id="path987" />
<path
   d="M107.881,343.536 107.582,343.272 107.881,343.272 z"
   id="path988" />
<path
   d="M107.582,342.091 107.582,342.002 107.881,342.091 z"
   id="path989" />
<path
   d="M107.881,342.091 107.582,342.002 107.881,341.827 z"
   id="path990" />
<path
   d="M107.881,343.536 107.881,343.272 108.758,344.048 z"
   id="path991" />
<path
   d="M108.758,344.048 107.881,343.272 108.758,343.272 z"
   id="path992" />
<path
   d="M107.881,343.193 107.881,342.17 108.758,342.682 z"
   id="path993" />
<path
   d="M107.881,342.091 107.881,341.827 108.758,342.091 z"
   id="path994" />
<path
   d="M108.758,342.091 107.881,341.827 108.758,341.315 z"
   id="path995" />
<path
   d="M108.758,344.048 108.758,343.272 109.77,344.638 z"
   id="path996" />
<path
   d="M109.77,344.638 108.758,343.272 109.77,343.272 z"
   id="path997" />
<path
   d="M109.77,343.272 108.758,342.682 109.77,342.091 z"
   id="path998" />
<path
   d="M108.758,342.091 108.758,341.315 109.77,342.091 z"
   id="path999" />
<path
   d="M109.77,342.091 108.758,341.315 109.77,340.725 z"
   id="path1000" />
<path
   d="M109.77,344.638 109.77,343.272 112.013,345.948 z"
   id="path1001" />
<path
   d="M112.013,345.948 109.77,343.272 112.013,344.58 z"
   id="path1002" />
<path
   d="M109.77,343.272 109.77,342.091 112.013,343.272 z"
   id="path1003" />
<path
   d="M112.013,343.272 109.77,342.091 112.013,342.091 z"
   id="path1004" />
<path
   d="M109.77,342.091 109.77,340.725 112.013,340.783 z"
   id="path1005" />
<path
   d="M112.013,340.783 109.77,340.725 112.013,339.415 z"
   id="path1006" />
<path
   d="M112.013,345.948 112.013,344.58 112.604,345.791 z"
   id="path1007" />
<path
   d="M112.604,345.791 112.013,344.58 112.604,344.925 z"
   id="path1008" />
<path
   d="M112.013,343.272 112.013,342.091 112.604,343.272 z"
   id="path1009" />
<path
   d="M112.604,343.272 112.013,342.091 112.604,342.091 z"
   id="path1010" />
<path
   d="M112.013,340.783 112.013,339.415 112.604,340.439 z"
   id="path1011" />
<path
   d="M112.604,340.439 112.013,339.415 112.604,339.572 z"
   id="path1012" />
<path
   d="M112.604,345.791 112.604,344.925 112.816,345.735 z"
   id="path1013" />
<path
   d="M112.604,343.272 112.604,342.091 112.816,343.272 z"
   id="path1014" />
<path
   d="M112.816,343.272 112.604,342.091 112.816,342.091 z"
   id="path1015" />
<path
   d="M112.604,340.439 112.604,339.572 112.816,339.628 z"
   id="path1016" />
<path
   d="M112.816,343.272 112.816,342.091 114.256,343.272 z"
   id="path1017" />
<path
   d="M114.256,343.272 112.816,342.091 114.256,342.091 z"
   id="path1018" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,80)"
   stroke-width="0.7"
   id="g1019">
<polyline
   points="130.689,343.295 131.976,340.456 135.081,339.282 138.186,340.456 139.472,343.295 "
   id="polyline1018" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1020">
<polyline
   points="959.208,242.242 958.209,250.952 955.745,259.3 951.888,267.103 946.71,274.179 "
   id="polyline1019" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1021">
<polyline
   points="920.227,624.025 920.227,617.131 "
   id="polyline1020" />
<polyline
   points="916.449,616.942 924.005,616.942 "
   id="polyline1021" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1022">
<path
   d="M914.56,619.87 920.132,623.695 914.56,627.52 914.56,627.52 z"
   id="path1021" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1023">
<polyline
   points="914.56,619.87 920.132,623.695 914.56,627.52 914.56,619.87 "
   id="polyline1022" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1024">
<path
   d="M925.61,627.52 920.132,623.695 925.61,619.87 925.61,619.87 z"
   id="path1023" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1025">
<polyline
   points="925.61,627.52 920.132,623.695 925.61,619.87 925.61,627.52 "
   id="polyline1024" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1026">
<polyline
   points="958.854,615.998 935.621,615.998 935.621,646.408 952.156,646.408 "
   id="polyline1025" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1027">
<polyline
   points="616.784,611.748 623.584,611.748 "
   id="polyline1026" />
<polyline
   points="623.772,607.97 623.772,615.525 "
   id="polyline1027" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1028">
<path
   d="M620.845,606.176 617.067,611.653 613.289,606.176 613.289,606.176 z"
   id="path1027" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1029">
<polyline
   points="620.845,606.176 617.067,611.653 613.289,606.176 620.845,606.176 "
   id="polyline1028" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1030">
<path
   d="M613.289,617.225 617.067,611.653 620.845,617.225 620.845,617.225 z"
   id="path1029" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1031">
<polyline
   points="613.289,617.225 617.067,611.653 620.845,617.225 613.289,617.225 "
   id="polyline1030" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,176,240)"
   stroke-width="0.7"
   id="g1032">
<polyline
   points="712.076,623.647 712.076,338.809 627.456,338.809 "
   id="polyline1031" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g1045">
<path
   d="M693.968,513.204 692.432,505.595 693.968,497.985 z"
   id="path1032" />
<path
   d="M693.968,513.204 693.968,497.985 698.158,519.418 z"
   id="path1033" />
<path
   d="M698.158,519.418 693.968,497.985 698.158,491.771 z"
   id="path1034" />
<path
   d="M698.158,519.418 698.158,491.771 704.372,523.608 z"
   id="path1035" />
<path
   d="M704.372,523.608 698.158,491.771 704.372,487.581 z"
   id="path1036" />
<path
   d="M704.372,523.608 704.372,487.581 711.982,525.144 z"
   id="path1037" />
<path
   d="M711.982,525.144 704.372,487.581 711.982,486.045 z"
   id="path1038" />
<path
   d="M711.982,525.144 711.982,486.045 719.592,523.608 z"
   id="path1039" />
<path
   d="M719.592,523.608 711.982,486.045 719.592,487.581 z"
   id="path1040" />
<path
   d="M719.592,523.608 719.592,487.581 725.806,519.418 z"
   id="path1041" />
<path
   d="M725.806,519.418 719.592,487.581 725.806,491.771 z"
   id="path1042" />
<path
   d="M725.806,519.418 725.806,491.771 729.995,513.204 z"
   id="path1043" />
<path
   d="M729.995,513.204 725.806,491.771 729.995,497.985 z"
   id="path1044" />
<path
   d="M729.995,513.204 729.995,497.985 731.531,505.595 z"
   id="path1045" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="SW_Pump_2">
<polyline
   points="711.982,486.045 719.592,487.581 725.806,491.771 729.995,497.985 731.531,505.595 729.995,513.204 725.806,519.418 719.592,523.608 711.982,525.144 704.372,523.608 698.158,519.418 693.968,513.204 692.432,505.595 693.968,497.985 698.158,491.771 704.372,487.581 711.982,486.045 "
   id="polyline1045" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1047">
<path
   d="M695.265,515.133 711.934,486.423 728.603,515.133 728.603,515.133 z"
   id="path1046" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1049">
<polyline
   points="695.265,515.133 711.934,486.423 728.603,515.133 695.265,515.133 "
   id="polyline1047" />
<polyline
   points="711.982,611.748 718.876,611.748 "
   id="polyline1048" />
<polyline
   points="719.065,607.97 719.065,615.525 "
   id="polyline1049" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1050">
<path
   d="M716.137,606.176 712.359,611.653 708.582,606.176 708.582,606.176 z"
   id="path1049" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1051">
<polyline
   points="716.137,606.176 712.359,611.653 708.582,606.176 716.137,606.176 "
   id="polyline1050" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1052">
<path
   d="M708.582,617.225 712.359,611.653 716.137,617.225 716.137,617.225 z"
   id="path1051" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1054">
<polyline
   points="708.582,617.225 712.359,611.653 716.137,617.225 708.582,617.225 "
   id="polyline1052" />
<polyline
   points="711.793,450.629 718.687,450.629 "
   id="polyline1053" />
<polyline
   points="718.876,446.851 718.876,454.407 "
   id="polyline1054" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1055">
<path
   d="M715.854,445.057 712.076,450.535 708.298,445.057 708.298,445.057 z"
   id="path1054" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1056">
<polyline
   points="715.854,445.057 712.076,450.535 708.298,445.057 715.854,445.057 "
   id="polyline1055" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1057">
<path
   d="M708.298,456.107 712.076,450.535 715.854,456.107 715.854,456.107 z"
   id="path1056" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1058">
<polyline
   points="708.298,456.107 712.076,450.535 715.854,456.107 708.298,456.107 "
   id="polyline1057" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1059">
<polyline
   points="914.657,442.979 882.261,442.979 882.261,591.631 "
   id="polyline1058" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="1"
   id="g1072">
<path
   d="M914.26,442.14 913.38,437.785 914.26,433.43 z"
   id="path1059" />
<path
   d="M914.26,442.14 914.26,433.43 916.659,445.697 z"
   id="path1060" />
<path
   d="M916.659,445.697 914.26,433.43 916.659,429.872 z"
   id="path1061" />
<path
   d="M916.659,445.697 916.659,429.872 920.216,448.096 z"
   id="path1062" />
<path
   d="M920.216,448.096 916.659,429.872 920.216,427.473 z"
   id="path1063" />
<path
   d="M920.216,448.096 920.216,427.473 924.571,448.976 z"
   id="path1064" />
<path
   d="M924.571,448.976 920.216,427.473 924.571,426.594 z"
   id="path1065" />
<path
   d="M924.571,448.976 924.571,426.594 928.926,448.096 z"
   id="path1066" />
<path
   d="M928.926,448.096 924.571,426.594 928.926,427.473 z"
   id="path1067" />
<path
   d="M928.926,448.096 928.926,427.473 932.484,445.697 z"
   id="path1068" />
<path
   d="M932.484,445.697 928.926,427.473 932.484,429.872 z"
   id="path1069" />
<path
   d="M932.484,445.697 932.484,429.872 934.883,442.14 z"
   id="path1070" />
<path
   d="M934.883,442.14 932.484,429.872 934.883,433.43 z"
   id="path1071" />
<path
   d="M934.883,442.14 934.883,433.43 935.763,437.785 z"
   id="path1072" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.35"
   id="g1073">
<polyline
   points="913.38,437.785 914.26,433.43 916.659,429.872 920.216,427.473 924.571,426.594 928.926,427.473 932.484,429.872 934.883,433.43 935.763,437.785 934.883,442.14 932.484,445.697 928.926,448.096 924.571,448.976 920.216,448.096 916.659,445.697 914.26,442.14 913.38,437.785 "
   id="polyline1072" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,0,0)"
   stroke="rgb(255,0,0)"
   stroke-width="0"
   id="g1074">
<text
   transform="matrix(6.43892 0 -0 6.43683 914.812 441.366)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1073">DPX1</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(143,170,220)"
   stroke="rgb(143,170,220)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1075">
<path
   d="M452.596,413.844 520.405,413.844 520.405,302.307 452.596,302.307 z"
   id="path1074" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(47,82,143)"
   stroke-width="0.35"
   id="g1076">
<polyline
   points="452.596,413.844 520.405,413.844 520.405,302.307 452.596,302.307 452.596,413.844 "
   id="polyline1075" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,255)"
   stroke="rgb(0,0,255)"
   stroke-width="0"
   id="g1079">
<text
   transform="matrix(10.0642 0 -0 10.0576 471.749 339.914)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1076">NO.2</text>
<text
   transform="matrix(10.0614 0 -0 10.0576 463.253 355.214)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1077">Central</text>
<text
   transform="matrix(10.0679 0 -0 10.0576 473.357 370.511)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1078">F.W.</text>
<text
   transform="matrix(10.0776 0 -0 10.0576 473.451 385.813)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1079">CLR</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(143,170,220)"
   stroke="rgb(143,170,220)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1080">
<path
   d="M452.596,269.63 520.405,269.63 520.405,158.094 452.596,158.094 z"
   id="path1079" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(47,82,143)"
   stroke-width="0.35"
   id="g1081">
<polyline
   points="452.596,269.63 520.405,269.63 520.405,158.094 452.596,158.094 452.596,269.63 "
   id="polyline1080" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,255)"
   stroke="rgb(0,0,255)"
   stroke-width="0"
   id="g1084">
<text
   transform="matrix(10.079 0 -0 10.0576 472.975 195.67)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1081">NO.1</text>
<text
   transform="matrix(10.0614 0 -0 10.0576 463.253 210.969)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1082">Central</text>
<text
   transform="matrix(10.0813 0 -0 10.071 473.357 226.266)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1083">F.W.</text>
<text
   transform="matrix(10.0776 0 -0 10.0576 473.451 241.584)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1084">CLR</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1085">
<polyline
   points="432.81,178.163 432.81,171.363 "
   id="polyline1084" />
<polyline
   points="429.032,171.08 436.588,171.08 "
   id="polyline1085" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1086">
<path
   d="M427.238,174.102 432.716,177.88 427.238,181.657 427.238,181.657 z"
   id="path1085" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1087">
<polyline
   points="427.238,174.102 432.716,177.88 427.238,181.657 427.238,174.102 "
   id="polyline1086" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1088">
<path
   d="M438.288,181.657 432.716,177.88 438.288,174.102 438.288,174.102 z"
   id="path1087" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1089">
<polyline
   points="438.288,181.657 432.716,177.88 438.288,174.102 438.288,181.657 "
   id="polyline1088" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,176,80)"
   stroke="rgb(0,176,80)"
   stroke-width="1"
   id="g1122">
<path
   d="M372.619,235.736 372.406,235.371 372.619,234.569 z"
   id="path1089" />
<path
   d="M372.619,235.736 372.619,234.569 373.43,237.124 z"
   id="path1090" />
<path
   d="M373.43,237.124 372.619,234.569 373.43,234.781 z"
   id="path1091" />
<path
   d="M373.43,237.124 373.43,234.781 375.082,239.956 z"
   id="path1092" />
<path
   d="M375.082,239.956 373.43,234.781 375.082,237.614 z"
   id="path1093" />
<path
   d="M375.082,239.956 375.082,239.802 375.161,240.091 z"
   id="path1094" />
<path
   d="M375.161,240.091 375.082,239.802 375.161,239.802 z"
   id="path1095" />
<path
   d="M375.082,237.614 375.082,233.128 375.161,237.749 z"
   id="path1096" />
<path
   d="M375.161,237.749 375.082,233.128 375.161,233.128 z"
   id="path1097" />
<path
   d="M375.161,240.091 375.161,239.802 375.673,240.967 z"
   id="path1098" />
<path
   d="M375.673,240.967 375.161,239.802 375.673,239.798 z"
   id="path1099" />
<path
   d="M375.673,239.503 375.161,239.503 375.673,238.626 z"
   id="path1100" />
<path
   d="M375.161,237.749 375.161,233.128 375.673,238.626 z"
   id="path1101" />
<path
   d="M375.673,238.626 375.161,233.128 375.673,233.128 z"
   id="path1102" />
<path
   d="M375.673,240.967 375.673,239.798 375.673,240.967 z"
   id="path1103" />
<path
   d="M375.673,240.967 375.673,239.798 375.673,239.798 z"
   id="path1104" />
<path
   d="M375.673,239.503 375.673,238.626 375.673,239.503 z"
   id="path1105" />
<path
   d="M375.673,239.503 375.673,238.626 375.673,238.626 z"
   id="path1106" />
<path
   d="M375.673,238.626 375.673,233.128 375.673,238.626 z"
   id="path1107" />
<path
   d="M375.673,238.626 375.673,233.128 375.673,233.128 z"
   id="path1108" />
<path
   d="M375.673,240.967 375.673,239.798 376.184,240.091 z"
   id="path1109" />
<path
   d="M376.184,240.091 375.673,239.798 376.184,239.795 z"
   id="path1110" />
<path
   d="M375.673,239.503 375.673,238.626 376.184,239.503 z"
   id="path1111" />
<path
   d="M375.673,238.626 375.673,233.128 376.184,237.749 z"
   id="path1112" />
<path
   d="M376.184,237.749 375.673,233.128 376.184,233.128 z"
   id="path1113" />
<path
   d="M376.184,240.091 376.184,239.795 376.263,239.956 z"
   id="path1114" />
<path
   d="M376.263,239.956 376.184,239.795 376.263,239.795 z"
   id="path1115" />
<path
   d="M376.184,237.749 376.184,233.128 376.263,237.614 z"
   id="path1116" />
<path
   d="M376.263,237.614 376.184,233.128 376.263,233.128 z"
   id="path1117" />
<path
   d="M376.263,239.956 376.263,237.614 377.916,237.124 z"
   id="path1118" />
<path
   d="M377.916,237.124 376.263,237.614 377.916,234.781 z"
   id="path1119" />
<path
   d="M377.916,237.124 377.916,234.781 378.726,235.736 z"
   id="path1120" />
<path
   d="M378.726,235.736 377.916,234.781 378.726,234.569 z"
   id="path1121" />
<path
   d="M378.726,235.736 378.726,234.569 378.939,235.371 z"
   id="path1122" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1123">
<polyline
   points="543.685,162.58 543.685,177.313 "
   id="polyline1122" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.7"
   id="g1124">
<polyline
   points="543.78,140.764 543.78,129.147 594.212,129.147 "
   id="polyline1123" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.53"
   id="g1125">
<polyline
   points="532.352,151.908 533.235,147.532 535.643,143.96 539.215,141.552 543.591,140.67 547.967,141.552 551.539,143.96 553.947,147.532 554.83,151.908 553.947,156.284 551.539,159.856 547.967,162.264 543.591,163.147 539.215,162.264 535.643,159.856 533.235,156.284 532.352,151.908 "
   id="polyline1124" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,0,0)"
   stroke="rgb(255,0,0)"
   stroke-width="0"
   id="g1126">
<text
   transform="matrix(7.86783 0 -0 7.84489 534.92 156.221)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1125">TX2</text>
<text
   transform="matrix(7.86435 0 -0 7.84489 596.213 132.802)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1126">To ESS</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1127">
<polyline
   points="540.569,168.247 547.085,168.247 "
   id="polyline1126" />
<polyline
   points="540.569,170.608 547.085,170.608 "
   id="polyline1127" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.53"
   id="g1128">
<polyline
   points="540.569,169.38 547.085,169.38 "
   id="polyline1128" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1130">
<polyline
   points="563.613,250.317 563.613,243.423 "
   id="polyline1129" />
<polyline
   points="559.835,243.234 567.39,243.234 "
   id="polyline1130" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1131">
<path
   d="M557.946,246.162 563.518,249.939 557.946,253.717 557.946,253.717 z"
   id="path1130" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1132">
<polyline
   points="557.946,246.162 563.518,249.939 557.946,253.717 557.946,246.162 "
   id="polyline1131" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1133">
<path
   d="M568.996,253.717 563.518,249.939 568.996,246.162 568.996,246.162 z"
   id="path1132" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1135">
<polyline
   points="568.996,253.717 563.518,249.939 568.996,246.162 568.996,253.717 "
   id="polyline1133" />
<polyline
   points="563.613,323.51 563.613,316.615 "
   id="polyline1134" />
<polyline
   points="559.835,316.427 567.39,316.427 "
   id="polyline1135" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1136">
<path
   d="M557.946,319.354 563.518,323.132 557.946,326.91 557.946,326.91 z"
   id="path1135" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1137">
<polyline
   points="557.946,319.354 563.518,323.132 557.946,326.91 557.946,319.354 "
   id="polyline1136" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1138">
<path
   d="M568.996,326.91 563.518,323.132 568.996,319.354 568.996,319.354 z"
   id="path1137" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1140">
<polyline
   points="568.996,326.91 563.518,323.132 568.996,319.354 568.996,326.91 "
   id="polyline1138" />
<polyline
   points="563.613,393.964 563.613,387.164 "
   id="polyline1139" />
<polyline
   points="559.835,386.975 567.39,386.975 "
   id="polyline1140" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1141">
<path
   d="M557.946,389.903 563.518,393.68 557.946,397.458 557.946,397.458 z"
   id="path1140" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1142">
<polyline
   points="557.946,389.903 563.518,393.68 557.946,397.458 557.946,389.903 "
   id="polyline1141" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1143">
<path
   d="M568.996,397.458 563.518,393.68 568.996,389.903 568.996,389.903 z"
   id="path1142" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1144">
<polyline
   points="568.996,397.458 563.518,393.68 568.996,389.903 568.996,397.458 "
   id="polyline1143" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1145">
<polyline
   points="543.685,307.36 543.685,322.093 "
   id="polyline1144" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.7"
   id="g1146">
<polyline
   points="543.78,285.638 543.78,277.989 587.412,277.989 "
   id="polyline1145" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.53"
   id="g1147">
<polyline
   points="532.352,296.735 533.235,292.38 535.643,288.823 539.215,286.424 543.591,285.544 547.967,286.424 551.539,288.823 553.947,292.38 554.83,296.735 553.947,301.09 551.539,304.648 547.967,307.047 543.591,307.927 539.215,307.047 535.643,304.648 533.235,301.09 532.352,296.735 "
   id="polyline1146" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,0,0)"
   stroke="rgb(255,0,0)"
   stroke-width="0"
   id="g1148">
<text
   transform="matrix(7.87374 0 -0 7.84489 534.826 301.027)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1147">TX3</text>
<text
   transform="matrix(7.86435 0 -0 7.84489 552.518 275.543)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1148">To ESS</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1149">
<polyline
   points="540.569,313.121 547.085,313.121 "
   id="polyline1148" />
<polyline
   points="540.569,315.482 547.085,315.482 "
   id="polyline1149" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.53"
   id="g1150">
<polyline
   points="540.569,314.349 547.085,314.349 "
   id="polyline1150" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.53"
   id="g1151">
<polyline
   points="433.566,452.187 434.448,447.832 436.856,444.275 440.429,441.876 444.804,440.996 449.18,441.876 452.752,444.275 455.16,447.832 456.043,452.187 455.16,456.542 452.752,460.1 449.18,462.499 444.804,463.379 440.429,462.499 436.856,460.1 434.448,456.542 433.566,452.187 "
   id="polyline1151" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,0,0)"
   stroke="rgb(255,0,0)"
   stroke-width="0"
   id="g1152">
<text
   transform="matrix(7.87402 0 -0 7.84489 435.96 440)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1151">TX5</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,0,0)"
   stroke-width="0.7"
   id="g1153">
<polyline
   points="410.144,452.707 433.188,452.707 "
   id="polyline1152" />
<polyline
   points="456.421,452.707 505.247,452.707 "
   id="polyline1153" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,0,0)"
   stroke="rgb(255,0,0)"
   stroke-width="0"
   id="g1154">
<text
   transform="matrix(7.86435 0 -0 7.84489 468.354 464.279)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1153">To ESS</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1157">
<polyline
   points="881.694,561.41 808.124,561.41 "
   id="polyline1154" />
<polyline
   points="707.732,562.26 709.018,559.456 712.123,558.293 715.228,559.456 716.515,562.26 "
   id="polyline1155" />
<polyline
   points="799.341,562.449 716.231,562.449 "
   id="polyline1156" />
<polyline
   points="707.921,562.165 617.162,562.165 "
   id="polyline1157" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1160">
<text
   transform="matrix(8.99673 0 -0 8.99231 480.216 512.912)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1157">Main Cooling</text>
<text
   transform="matrix(8.73464 0 -0 9.0043 483.441 529.915)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1158">S.W. Pump</text>
<text
   transform="matrix(8.83269 0 -0 8.99231 255.367 329.976)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1159">LT COOLING</text>
<text
   transform="matrix(8.58049 0 -0 8.99231 255.394 346.976)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1160">F.W. PUMP</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1161">
<polyline
   points="799.057,562.26 800.344,559.456 803.449,558.293 806.554,559.456 807.841,562.26 "
   id="polyline1160" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1162">
<polyline
   points="628.495,562.26 628.495,555.366 "
   id="polyline1161" />
<polyline
   points="624.717,555.177 632.272,555.177 "
   id="polyline1162" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1163">
<path
   d="M622.922,558.104 628.495,561.882 622.922,565.66 622.922,565.66 z"
   id="path1162" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1164">
<polyline
   points="622.922,558.104 628.495,561.882 622.922,565.66 622.922,558.104 "
   id="polyline1163" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1165">
<path
   d="M633.972,565.66 628.4,561.882 633.972,558.104 633.972,558.104 z"
   id="path1164" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1166">
<polyline
   points="633.972,565.66 628.4,561.882 633.972,558.104 633.972,565.66 "
   id="polyline1165" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1167">
<polyline
   points="799.907,577.985 801.194,575.145 804.299,573.971 807.404,575.145 808.691,577.985 "
   id="polyline1166" />
<polyline
   points="799.53,578.315 711.982,578.315 "
   id="polyline1167" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1169">
<polyline
   points="723.031,578.032 723.031,571.137 "
   id="polyline1168" />
<polyline
   points="719.254,570.949 726.809,570.949 "
   id="polyline1169" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1170">
<path
   d="M717.459,573.971 722.937,577.748 717.459,581.526 717.459,581.526 z"
   id="path1169" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1171">
<polyline
   points="717.459,573.971 722.937,577.748 717.459,581.526 717.459,573.971 "
   id="polyline1170" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1172">
<path
   d="M728.509,581.526 722.937,577.748 728.509,573.971 728.509,573.971 z"
   id="path1171" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1173">
<polyline
   points="728.509,581.526 722.937,577.748 728.509,573.971 728.509,581.526 "
   id="polyline1172" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.7"
   id="g1174">
<polyline
   points="883.017,578.315 809.446,578.315 "
   id="polyline1173" />
<polyline
   points="882.922,591.537 804.913,591.537 "
   id="polyline1174" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1176">
<polyline
   points="818.512,592.198 818.512,585.304 "
   id="polyline1175" />
<polyline
   points="814.735,585.115 822.29,585.115 "
   id="polyline1176" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1177">
<path
   d="M812.94,588.137 818.418,591.915 812.94,595.692 812.94,595.692 z"
   id="path1176" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1178">
<polyline
   points="812.94,588.137 818.418,591.915 812.94,595.692 812.94,588.137 "
   id="polyline1177" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1179">
<path
   d="M823.99,595.692 818.418,591.915 823.99,588.137 823.99,588.137 z"
   id="path1178" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.53"
   id="g1180">
<polyline
   points="823.99,595.692 818.418,591.915 823.99,588.137 823.99,595.692 "
   id="polyline1179" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1185">
<text
   transform="matrix(9.00314 0 -0 8.99231 131.062 650.571)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1180">High</text>
<text
   transform="matrix(9.01045 0 -0 8.99231 108.302 667.57)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1181">Sea</text>
<text
   transform="matrix(8.971 0 -0 8.99231 132.286 667.577)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1182">Chest(P)</text>
<text
   transform="matrix(8.9835 0 -0 9.0043 953.674 673.274)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1183">Low</text>
<text
   transform="matrix(9.01045 0 -0 8.99231 930.91 690.293)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1184">Sea</text>
<text
   transform="matrix(8.97242 0 -0 8.99231 954.894 690.3)"
   font-family="Calibri,'sans-serif'"
   font-weight="bold"
   font-size="1.57532"
   id="text1185">Chest(S)</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="g1194">
<path
   d="M255.778,420.707 255.778,413.025 256.34,422.065 z"
   id="path1185" />
<path
   d="M256.34,422.065 255.778,413.025 256.34,411.667 z"
   id="path1186" />
<path
   d="M256.34,422.065 256.34,411.667 257.698,422.627 z"
   id="path1187" />
<path
   d="M257.698,422.627 256.34,411.667 257.698,411.105 z"
   id="path1188" />
<path
   d="M257.698,422.627 257.698,411.105 286.157,422.627 z"
   id="path1189" />
<path
   d="M286.157,422.627 257.698,411.105 286.157,411.105 z"
   id="path1190" />
<path
   d="M286.157,422.627 286.157,411.105 287.516,422.065 z"
   id="path1191" />
<path
   d="M287.516,422.065 286.157,411.105 287.516,411.667 z"
   id="path1192" />
<path
   d="M287.516,422.065 287.516,411.667 288.077,420.707 z"
   id="path1193" />
<path
   d="M288.077,420.707 287.516,411.667 288.077,413.025 z"
   id="path1194" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="LT_Pump1_Mode">
<polyline
   points="255.778,413.025 256.34,411.667 257.698,411.105 "
   id="polyline1194" />
<polyline
   points="257.698,411.105 286.157,411.105 "
   id="polyline1195" />
<polyline
   points="286.157,411.105 287.516,411.667 288.077,413.025 "
   id="polyline1196" />
<polyline
   points="288.077,413.025 288.077,420.707 "
   id="polyline1197" />
<polyline
   points="288.077,420.707 287.516,422.065 286.157,422.627 "
   id="polyline1198" />
<polyline
   points="286.157,422.627 257.698,422.627 "
   id="polyline1199" />
<polyline
   points="257.698,422.627 256.34,422.065 255.778,420.707 "
   id="polyline1200" />
<polyline
   points="255.778,420.707 255.778,413.025 "
   id="polyline1201" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1202">
<text
   transform="matrix(5.27796 0 -0 5.27549 263.295 419.713)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1201">MAN</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="g1211">
<path
   d="M255.778,507.515 255.778,499.897 256.335,508.863 z"
   id="path1202" />
<path
   d="M256.335,508.863 255.778,499.897 256.335,498.549 z"
   id="path1203" />
<path
   d="M256.335,508.863 256.335,498.549 257.683,509.419 z"
   id="path1204" />
<path
   d="M257.683,509.419 256.335,498.549 257.683,497.992 z"
   id="path1205" />
<path
   d="M257.683,509.419 257.683,497.992 286.173,509.419 z"
   id="path1206" />
<path
   d="M286.173,509.419 257.683,497.992 286.173,497.992 z"
   id="path1207" />
<path
   d="M286.173,509.419 286.173,497.992 287.521,508.863 z"
   id="path1208" />
<path
   d="M287.521,508.863 286.173,497.992 287.521,498.549 z"
   id="path1209" />
<path
   d="M287.521,508.863 287.521,498.549 288.077,507.515 z"
   id="path1210" />
<path
   d="M288.077,507.515 287.521,498.549 288.077,499.897 z"
   id="path1211" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="LT_Pump2_Mode">
<polyline
   points="255.778,499.897 256.335,498.549 257.683,497.992 "
   id="polyline1211" />
<polyline
   points="257.683,497.992 286.173,497.992 "
   id="polyline1212" />
<polyline
   points="286.173,497.992 287.521,498.549 288.077,499.897 "
   id="polyline1213" />
<polyline
   points="288.077,499.897 288.077,507.515 "
   id="polyline1214" />
<polyline
   points="288.077,507.515 287.521,508.863 286.173,509.419 "
   id="polyline1215" />
<polyline
   points="286.173,509.419 257.683,509.419 "
   id="polyline1216" />
<polyline
   points="257.683,509.419 256.335,508.863 255.778,507.515 "
   id="polyline1217" />
<polyline
   points="255.778,507.515 255.778,499.897 "
   id="polyline1218" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1219">
<text
   transform="matrix(5.27796 0 -0 5.27549 263.295 506.545)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1218">MAN</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="g1228">
<path
   d="M255.778,594.386 255.778,586.705 256.34,595.745 z"
   id="path1219" />
<path
   d="M256.34,595.745 255.778,586.705 256.34,585.346 z"
   id="path1220" />
<path
   d="M256.34,595.745 256.34,585.346 257.698,596.306 z"
   id="path1221" />
<path
   d="M257.698,596.306 256.34,585.346 257.698,584.784 z"
   id="path1222" />
<path
   d="M257.698,596.306 257.698,584.784 286.157,596.306 z"
   id="path1223" />
<path
   d="M286.157,596.306 257.698,584.784 286.157,584.784 z"
   id="path1224" />
<path
   d="M286.157,596.306 286.157,584.784 287.516,595.745 z"
   id="path1225" />
<path
   d="M287.516,595.745 286.157,584.784 287.516,585.346 z"
   id="path1226" />
<path
   d="M287.516,595.745 287.516,585.346 288.077,594.386 z"
   id="path1227" />
<path
   d="M288.077,594.386 287.516,585.346 288.077,586.705 z"
   id="path1228" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g1235LT_Pump3_Mode">
<polyline
   points="255.778,586.705 256.34,585.346 257.698,584.784 "
   id="polyline1228" />
<polyline
   points="257.698,584.784 286.157,584.784 "
   id="polyline1229" />
<polyline
   points="286.157,584.784 287.516,585.346 288.077,586.705 "
   id="polyline1230" />
<polyline
   points="288.077,586.705 288.077,594.386 "
   id="polyline1231" />
<polyline
   points="288.077,594.386 287.516,595.745 286.157,596.306 "
   id="polyline1232" />
<polyline
   points="286.157,596.306 257.698,596.306 "
   id="polyline1233" />
<polyline
   points="257.698,596.306 256.34,595.745 255.778,594.386 "
   id="polyline1234" />
<polyline
   points="255.778,594.386 255.778,586.705 "
   id="polyline1235" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1236">
<text
   transform="matrix(5.27796 0 -0 5.27549 263.295 593.392)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1235">MAN</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="1"
   id="g1245">
<path
   d="M296.955,381.639 296.955,369.173 297.867,383.844 z"
   id="path1236" />
<path
   d="M297.867,383.844 296.955,369.173 297.867,366.968 z"
   id="path1237" />
<path
   d="M297.867,383.844 297.867,366.968 300.071,384.756 z"
   id="path1238" />
<path
   d="M300.071,384.756 297.867,366.968 300.071,366.056 z"
   id="path1239" />
<path
   d="M300.071,384.756 300.071,366.056 329.349,384.756 z"
   id="path1240" />
<path
   d="M329.349,384.756 300.071,366.056 329.349,366.056 z"
   id="path1241" />
<path
   d="M329.349,384.756 329.349,366.056 331.553,383.844 z"
   id="path1242" />
<path
   d="M331.553,383.844 329.349,366.056 331.553,366.968 z"
   id="path1243" />
<path
   d="M331.553,383.844 331.553,366.968 332.465,381.639 z"
   id="path1244" />
<path
   d="M332.465,381.639 331.553,366.968 332.465,369.173 z"
   id="path1245" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g1252">
<polyline
   points="296.955,369.173 297.867,366.968 300.071,366.056 "
   id="polyline1245" />
<polyline
   points="300.071,366.056 329.349,366.056 "
   id="polyline1246" />
<polyline
   points="329.349,366.056 331.553,366.968 332.465,369.173 "
   id="polyline1247" />
<polyline
   points="332.465,369.173 332.465,381.639 "
   id="polyline1248" />
<polyline
   points="332.465,381.639 331.553,383.844 329.349,384.756 "
   id="polyline1249" />
<polyline
   points="329.349,384.756 300.071,384.756 "
   id="polyline1250" />
<polyline
   points="300.071,384.756 297.867,383.844 296.955,381.639 "
   id="polyline1251" />
<polyline
   points="296.955,381.639 296.955,369.173 "
   id="polyline1252" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1253">
<text
   transform="matrix(4.49152 0 -0 4.49615 306.265 373.57)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="LT_Pump1_Auto">AUTO</text>
<text
   transform="matrix(4.46296 0 -0 4.49615 304.094 382.07)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="LT_Pump1_Hz">50.3 Hz</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="g1262LT_Pump1_hour">
<path
   d="M296.105,414.851 296.105,406.037 296.749,416.41 z"
   id="path1253" />
<path
   d="M296.749,416.41 296.105,406.037 296.749,404.477 z"
   id="path1254" />
<path
   d="M296.749,416.41 296.749,404.477 298.309,417.055 z"
   id="path1255" />
<path
   d="M298.309,417.055 296.749,404.477 298.309,403.833 z"
   id="path1256" />
<path
   d="M298.309,417.055 298.309,403.833 329.317,417.055 z"
   id="path1257" />
<path
   d="M329.317,417.055 298.309,403.833 329.317,403.833 z"
   id="path1258" />
<path
   d="M329.317,417.055 329.317,403.833 330.876,416.41 z"
   id="path1259" />
<path
   d="M330.876,416.41 329.317,403.833 330.876,404.477 z"
   id="path1260" />
<path
   d="M330.876,416.41 330.876,404.477 331.521,414.851 z"
   id="path1261" />
<path
   d="M331.521,414.851 330.876,404.477 331.521,406.037 z"
   id="path1262" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1263">
<text
   transform="matrix(5.27647 0 -0 5.27549 304.336 413.259)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1262">100 h</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,255)"
   stroke="rgb(0,0,255)"
   stroke-width="0"
   id="g1264">
<text
   transform="matrix(6.71726 0 -0 6.70503 304.547 488.51)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1263">NO</text>
<text
   transform="matrix(6.74281 0 -0 6.70503 317.312 488.508)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1264">.2</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="1"
   id="g1273">
<path
   d="M296.955,469.848 296.955,457.382 297.867,472.053 z"
   id="path1264" />
<path
   d="M297.867,472.053 296.955,457.382 297.867,455.177 z"
   id="path1265" />
<path
   d="M297.867,472.053 297.867,455.177 300.071,472.965 z"
   id="path1266" />
<path
   d="M300.071,472.965 297.867,455.177 300.071,454.265 z"
   id="path1267" />
<path
   d="M300.071,472.965 300.071,454.265 329.349,472.965 z"
   id="path1268" />
<path
   d="M329.349,472.965 300.071,454.265 329.349,454.265 z"
   id="path1269" />
<path
   d="M329.349,472.965 329.349,454.265 331.553,472.053 z"
   id="path1270" />
<path
   d="M331.553,472.053 329.349,454.265 331.553,455.177 z"
   id="path1271" />
<path
   d="M331.553,472.053 331.553,455.177 332.465,469.848 z"
   id="path1272" />
<path
   d="M332.465,469.848 331.553,455.177 332.465,457.382 z"
   id="path1273" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g1280">
<polyline
   points="296.955,457.382 297.867,455.177 300.071,454.265 "
   id="polyline1273" />
<polyline
   points="300.071,454.265 329.349,454.265 "
   id="polyline1274" />
<polyline
   points="329.349,454.265 331.553,455.177 332.465,457.382 "
   id="polyline1275" />
<polyline
   points="332.465,457.382 332.465,469.848 "
   id="polyline1276" />
<polyline
   points="332.465,469.848 331.553,472.053 329.349,472.965 "
   id="polyline1277" />
<polyline
   points="329.349,472.965 300.071,472.965 "
   id="polyline1278" />
<polyline
   points="300.071,472.965 297.867,472.053 296.955,469.848 "
   id="polyline1279" />
<polyline
   points="296.955,469.848 296.955,457.382 "
   id="polyline1280" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1281">
<text
   transform="matrix(4.49152 0 -0 4.49615 306.265 461.819)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="LT_Pump2_Auto">AUTO</text>
<text
   transform="matrix(4.46296 0 -0 4.49615 304.094 470.319)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="LT_Pump2_Hz">50.3 Hz</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="LT_Pump2_hour">
<path
   d="M296.105,503.06 296.105,494.246 296.749,504.62 z"
   id="path1281" />
<path
   d="M296.749,504.62 296.105,494.246 296.749,492.686 z"
   id="path1282" />
<path
   d="M296.749,504.62 296.749,492.686 298.309,505.264 z"
   id="path1283" />
<path
   d="M298.309,505.264 296.749,492.686 298.309,492.042 z"
   id="path1284" />
<path
   d="M298.309,505.264 298.309,492.042 329.317,505.264 z"
   id="path1285" />
<path
   d="M329.317,505.264 298.309,492.042 329.317,492.042 z"
   id="path1286" />
<path
   d="M329.317,505.264 329.317,492.042 330.876,504.62 z"
   id="path1287" />
<path
   d="M330.876,504.62 329.317,492.042 330.876,492.686 z"
   id="path1288" />
<path
   d="M330.876,504.62 330.876,492.686 331.521,503.06 z"
   id="path1289" />
<path
   d="M331.521,503.06 330.876,492.686 331.521,494.246 z"
   id="path1290" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1291">
<text
   transform="matrix(5.27647 0 -0 5.27549 304.336 501.5)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1290">100 h</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,255)"
   stroke="rgb(0,0,255)"
   stroke-width="0"
   id="g1292">
<text
   transform="matrix(6.71726 0 -0 6.70503 304.547 575.342)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1291">NO</text>
<text
   transform="matrix(6.74281 0 -0 6.70503 317.312 575.34)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text1292">.2</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="1"
   id="g1301">
<path
   d="M296.955,556.735 296.955,544.269 297.867,558.94 z"
   id="path1292" />
<path
   d="M297.867,558.94 296.955,544.269 297.867,542.064 z"
   id="path1293" />
<path
   d="M297.867,558.94 297.867,542.064 300.071,559.852 z"
   id="path1294" />
<path
   d="M300.071,559.852 297.867,542.064 300.071,541.152 z"
   id="path1295" />
<path
   d="M300.071,559.852 300.071,541.152 329.349,559.852 z"
   id="path1296" />
<path
   d="M329.349,559.852 300.071,541.152 329.349,541.152 z"
   id="path1297" />
<path
   d="M329.349,559.852 329.349,541.152 331.553,558.94 z"
   id="path1298" />
<path
   d="M331.553,558.94 329.349,541.152 331.553,542.064 z"
   id="path1299" />
<path
   d="M331.553,558.94 331.553,542.064 332.465,556.735 z"
   id="path1300" />
<path
   d="M332.465,556.735 331.553,542.064 332.465,544.269 z"
   id="path1301" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g1308">
<polyline
   points="296.955,544.269 297.867,542.064 300.071,541.152 "
   id="polyline1301" />
<polyline
   points="300.071,541.152 329.349,541.152 "
   id="polyline1302" />
<polyline
   points="329.349,541.152 331.553,542.064 332.465,544.269 "
   id="polyline1303" />
<polyline
   points="332.465,544.269 332.465,556.735 "
   id="polyline1304" />
<polyline
   points="332.465,556.735 331.553,558.94 329.349,559.852 "
   id="polyline1305" />
<polyline
   points="329.349,559.852 300.071,559.852 "
   id="polyline1306" />
<polyline
   points="300.071,559.852 297.867,558.94 296.955,556.735 "
   id="polyline1307" />
<polyline
   points="296.955,556.735 296.955,544.269 "
   id="polyline1308" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1309">
<text
   transform="matrix(4.49152 0 -0 4.49615 306.265 548.651)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1308">AUTO</text>
<text
   transform="matrix(4.46296 0 -0 4.49615 304.094 557.15)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="LT_Pump3_Hz">50.3 Hz</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="LT_Pump3_hour">
<path
   d="M296.105,589.853 296.105,581.038 296.749,591.412 z"
   id="path1309" />
<path
   d="M296.749,591.412 296.105,581.038 296.749,579.479 z"
   id="path1310" />
<path
   d="M296.749,591.412 296.749,579.479 298.309,592.056 z"
   id="path1311" />
<path
   d="M298.309,592.056 296.749,579.479 298.309,578.834 z"
   id="path1312" />
<path
   d="M298.309,592.056 298.309,578.834 329.317,592.056 z"
   id="path1313" />
<path
   d="M329.317,592.056 298.309,578.834 329.317,578.834 z"
   id="path1314" />
<path
   d="M329.317,592.056 329.317,578.834 330.876,591.412 z"
   id="path1315" />
<path
   d="M330.876,591.412 329.317,578.834 330.876,579.479 z"
   id="path1316" />
<path
   d="M330.876,591.412 330.876,579.479 331.521,589.853 z"
   id="path1317" />
<path
   d="M331.521,589.853 330.876,579.479 331.521,581.038 z"
   id="path1318" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1319">
<text
   transform="matrix(5.27647 0 -0 5.27549 304.336 588.332)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1318">100 h</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="g1328">
<path
   d="M601.154,536.398 601.154,528.717 601.715,537.757 z"
   id="path1319" />
<path
   d="M601.715,537.757 601.154,528.717 601.715,527.359 z"
   id="path1320" />
<path
   d="M601.715,537.757 601.715,527.359 603.074,538.319 z"
   id="path1321" />
<path
   d="M603.074,538.319 601.715,527.359 603.074,526.797 z"
   id="path1322" />
<path
   d="M603.074,538.319 603.074,526.797 631.532,538.319 z"
   id="path1323" />
<path
   d="M631.532,538.319 603.074,526.797 631.532,526.797 z"
   id="path1324" />
<path
   d="M631.532,538.319 631.532,526.797 632.891,537.757 z"
   id="path1325" />
<path
   d="M632.891,537.757 631.532,526.797 632.891,527.359 z"
   id="path1326" />
<path
   d="M632.891,537.757 632.891,527.359 633.453,536.398 z"
   id="path1327" />
<path
   d="M633.453,536.398 632.891,527.359 633.453,528.717 z"
   id="path1328" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g1335">
<polyline
   points="601.154,528.717 601.715,527.359 603.074,526.797 "
   id="polyline1328" />
<polyline
   points="603.074,526.797 631.532,526.797 "
   id="polyline1329" />
<polyline
   points="631.532,526.797 632.891,527.359 633.453,528.717 "
   id="polyline1330" />
<polyline
   points="633.453,528.717 633.453,536.398 "
   id="polyline1331" />
<polyline
   points="633.453,536.398 632.891,537.757 631.532,538.319 "
   id="polyline1332" />
<polyline
   points="631.532,538.319 603.074,538.319 "
   id="polyline1333" />
<polyline
   points="603.074,538.319 601.715,537.757 601.154,536.398 "
   id="polyline1334" />
<polyline
   points="601.154,536.398 601.154,528.717 "
   id="polyline1335" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1336">
<text
   transform="matrix(5.27796 0 -0 5.27549 608.694 535.405)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1335">MAN</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="g1345">
<path
   d="M694.746,536.398 694.746,528.717 695.308,537.757 z"
   id="path1336" />
<path
   d="M695.308,537.757 694.746,528.717 695.308,527.359 z"
   id="path1337" />
<path
   d="M695.308,537.757 695.308,527.359 696.666,538.319 z"
   id="path1338" />
<path
   d="M696.666,538.319 695.308,527.359 696.666,526.797 z"
   id="path1339" />
<path
   d="M696.666,538.319 696.666,526.797 725.125,538.319 z"
   id="path1340" />
<path
   d="M725.125,538.319 696.666,526.797 725.125,526.797 z"
   id="path1341" />
<path
   d="M725.125,538.319 725.125,526.797 726.483,537.757 z"
   id="path1342" />
<path
   d="M726.483,537.757 725.125,526.797 726.483,527.359 z"
   id="path1343" />
<path
   d="M726.483,537.757 726.483,527.359 727.045,536.398 z"
   id="path1344" />
<path
   d="M727.045,536.398 726.483,527.359 727.045,528.717 z"
   id="path1345" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g1352">
<polyline
   points="694.746,528.717 695.308,527.359 696.666,526.797 "
   id="polyline1345" />
<polyline
   points="696.666,526.797 725.125,526.797 "
   id="polyline1346" />
<polyline
   points="725.125,526.797 726.483,527.359 727.045,528.717 "
   id="polyline1347" />
<polyline
   points="727.045,528.717 727.045,536.398 "
   id="polyline1348" />
<polyline
   points="727.045,536.398 726.483,537.757 725.125,538.319 "
   id="polyline1349" />
<polyline
   points="725.125,538.319 696.666,538.319 "
   id="polyline1350" />
<polyline
   points="696.666,538.319 695.308,537.757 694.746,536.398 "
   id="polyline1351" />
<polyline
   points="694.746,536.398 694.746,528.717 "
   id="polyline1352" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="SW_Pump2_Mode">
<text
   transform="matrix(5.27796 0 -0 5.27549 702.263 535.405)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1352">MAN</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="g1362">
<path
   d="M787.583,536.398 787.583,528.717 788.144,537.757 z"
   id="path1353" />
<path
   d="M788.144,537.757 787.583,528.717 788.144,527.359 z"
   id="path1354" />
<path
   d="M788.144,537.757 788.144,527.359 789.503,538.319 z"
   id="path1355" />
<path
   d="M789.503,538.319 788.144,527.359 789.503,526.797 z"
   id="path1356" />
<path
   d="M789.503,538.319 789.503,526.797 818.056,538.319 z"
   id="path1357" />
<path
   d="M818.056,538.319 789.503,526.797 818.056,526.797 z"
   id="path1358" />
<path
   d="M818.056,538.319 818.056,526.797 819.415,537.757 z"
   id="path1359" />
<path
   d="M819.415,537.757 818.056,526.797 819.415,527.359 z"
   id="path1360" />
<path
   d="M819.415,537.757 819.415,527.359 819.976,536.398 z"
   id="path1361" />
<path
   d="M819.976,536.398 819.415,527.359 819.976,528.717 z"
   id="path1362" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g1369">
<polyline
   points="787.583,528.717 788.144,527.359 789.503,526.797 "
   id="polyline1362" />
<polyline
   points="789.503,526.797 818.056,526.797 "
   id="polyline1363" />
<polyline
   points="818.056,526.797 819.415,527.359 819.976,528.717 "
   id="polyline1364" />
<polyline
   points="819.976,528.717 819.976,536.398 "
   id="polyline1365" />
<polyline
   points="819.976,536.398 819.415,537.757 818.056,538.319 "
   id="polyline1366" />
<polyline
   points="818.056,538.319 789.503,538.319 "
   id="polyline1367" />
<polyline
   points="789.503,538.319 788.144,537.757 787.583,536.398 "
   id="polyline1368" />
<polyline
   points="787.583,536.398 787.583,528.717 "
   id="polyline1369" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1370">
<text
   transform="matrix(5.27796 0 -0 5.27549 795.194 535.405)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1369">MAN</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="1"
   id="g1379">
<path
   d="M642.519,506.869 642.519,494.403 643.431,509.074 z"
   id="path1370" />
<path
   d="M643.431,509.074 642.519,494.403 643.431,492.198 z"
   id="path1371" />
<path
   d="M643.431,509.074 643.431,492.198 645.636,509.986 z"
   id="path1372" />
<path
   d="M645.636,509.986 643.431,492.198 645.636,491.286 z"
   id="path1373" />
<path
   d="M645.636,509.986 645.636,491.286 674.819,509.986 z"
   id="path1374" />
<path
   d="M674.819,509.986 645.636,491.286 674.819,491.286 z"
   id="path1375" />
<path
   d="M674.819,509.986 674.819,491.286 677.023,509.074 z"
   id="path1376" />
<path
   d="M677.023,509.074 674.819,491.286 677.023,492.198 z"
   id="path1377" />
<path
   d="M677.023,509.074 677.023,492.198 677.935,506.869 z"
   id="path1378" />
<path
   d="M677.935,506.869 677.023,492.198 677.935,494.403 z"
   id="path1379" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g1386">
<polyline
   points="642.519,494.403 643.431,492.198 645.636,491.286 "
   id="polyline1379" />
<polyline
   points="645.636,491.286 674.819,491.286 "
   id="polyline1380" />
<polyline
   points="674.819,491.286 677.023,492.198 677.935,494.403 "
   id="polyline1381" />
<polyline
   points="677.935,494.403 677.935,506.869 "
   id="polyline1382" />
<polyline
   points="677.935,506.869 677.023,509.074 674.819,509.986 "
   id="polyline1383" />
<polyline
   points="674.819,509.986 645.636,509.986 "
   id="polyline1384" />
<polyline
   points="645.636,509.986 643.431,509.074 642.519,506.869 "
   id="polyline1385" />
<polyline
   points="642.519,506.869 642.519,494.403 "
   id="polyline1386" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1387">
<text
   transform="matrix(4.49152 0 -0 4.49615 651.868 498.824)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1386">AUTO</text>
<text
   transform="matrix(4.46296 0 -0 4.49615 649.698 507.324)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="SW_Pump1_Hz">50.3 Hz</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="SW_Pump1_hour">
<path
   d="M644.03,524.31 644.03,515.495 644.675,525.869 z"
   id="path1387" />
<path
   d="M644.675,525.869 644.03,515.495 644.675,513.936 z"
   id="path1388" />
<path
   d="M644.675,525.869 644.675,513.936 646.234,526.513 z"
   id="path1389" />
<path
   d="M646.234,526.513 644.675,513.936 646.234,513.292 z"
   id="path1390" />
<path
   d="M646.234,526.513 646.234,513.292 677.243,526.513 z"
   id="path1391" />
<path
   d="M677.243,526.513 646.234,513.292 677.243,513.292 z"
   id="path1392" />
<path
   d="M677.243,526.513 677.243,513.292 678.802,525.869 z"
   id="path1393" />
<path
   d="M678.802,525.869 677.243,513.292 678.802,513.936 z"
   id="path1394" />
<path
   d="M678.802,525.869 678.802,513.936 679.446,524.31 z"
   id="path1395" />
<path
   d="M679.446,524.31 678.802,513.936 679.446,515.495 z"
   id="path1396" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1397">
<text
   transform="matrix(5.27647 0 -0 5.27549 652.356 522.734)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1396">100 h</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="1"
   id="g1406">
<path
   d="M737.812,506.869 737.812,494.403 738.724,509.074 z"
   id="path1397" />
<path
   d="M738.724,509.074 737.812,494.403 738.724,492.198 z"
   id="path1398" />
<path
   d="M738.724,509.074 738.724,492.198 740.928,509.986 z"
   id="path1399" />
<path
   d="M740.928,509.986 738.724,492.198 740.928,491.286 z"
   id="path1400" />
<path
   d="M740.928,509.986 740.928,491.286 770.111,509.986 z"
   id="path1401" />
<path
   d="M770.111,509.986 740.928,491.286 770.111,491.286 z"
   id="path1402" />
<path
   d="M770.111,509.986 770.111,491.286 772.315,509.074 z"
   id="path1403" />
<path
   d="M772.315,509.074 770.111,491.286 772.315,492.198 z"
   id="path1404" />
<path
   d="M772.315,509.074 772.315,492.198 773.227,506.869 z"
   id="path1405" />
<path
   d="M773.227,506.869 772.315,492.198 773.227,494.403 z"
   id="path1406" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g1413">
<polyline
   points="737.812,494.403 738.724,492.198 740.928,491.286 "
   id="polyline1406" />
<polyline
   points="740.928,491.286 770.111,491.286 "
   id="polyline1407" />
<polyline
   points="770.111,491.286 772.315,492.198 773.227,494.403 "
   id="polyline1408" />
<polyline
   points="773.227,494.403 773.227,506.869 "
   id="polyline1409" />
<polyline
   points="773.227,506.869 772.315,509.074 770.111,509.986 "
   id="polyline1410" />
<polyline
   points="770.111,509.986 740.928,509.986 "
   id="polyline1411" />
<polyline
   points="740.928,509.986 738.724,509.074 737.812,506.869 "
   id="polyline1412" />
<polyline
   points="737.812,506.869 737.812,494.403 "
   id="polyline1413" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1414">
<text
   transform="matrix(4.49152 0 -0 4.49615 747.082 498.824)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="SW_Pump2_Auto">AUTO</text>
<text
   transform="matrix(4.46296 0 -0 4.49615 744.912 507.324)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1414">50.3 Hz</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="SW_Pump2_hour">
<path
   d="M739.228,524.31 739.228,515.495 739.873,525.869 z"
   id="path1414" />
<path
   d="M739.873,525.869 739.228,515.495 739.873,513.936 z"
   id="path1415" />
<path
   d="M739.873,525.869 739.873,513.936 741.432,526.513 z"
   id="path1416" />
<path
   d="M741.432,526.513 739.873,513.936 741.432,513.292 z"
   id="path1417" />
<path
   d="M741.432,526.513 741.432,513.292 772.535,526.513 z"
   id="path1418" />
<path
   d="M772.535,526.513 741.432,513.292 772.535,513.292 z"
   id="path1419" />
<path
   d="M772.535,526.513 772.535,513.292 774.094,525.869 z"
   id="path1420" />
<path
   d="M774.094,525.869 772.535,513.292 774.094,513.936 z"
   id="path1421" />
<path
   d="M774.094,525.869 774.094,513.936 774.738,524.31 z"
   id="path1422" />
<path
   d="M774.738,524.31 774.094,513.936 774.738,515.495 z"
   id="path1423" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1424">
<text
   transform="matrix(5.27647 0 -0 5.27549 747.577 522.734)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1423">100 h</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="1"
   id="g1433">
<path
   d="M826.021,506.869 826.021,494.403 826.933,509.074 z"
   id="path1424" />
<path
   d="M826.933,509.074 826.021,494.403 826.933,492.198 z"
   id="path1425" />
<path
   d="M826.933,509.074 826.933,492.198 829.137,509.986 z"
   id="path1426" />
<path
   d="M829.137,509.986 826.933,492.198 829.137,491.286 z"
   id="path1427" />
<path
   d="M829.137,509.986 829.137,491.286 858.32,509.986 z"
   id="path1428" />
<path
   d="M858.32,509.986 829.137,491.286 858.32,491.286 z"
   id="path1429" />
<path
   d="M858.32,509.986 858.32,491.286 860.525,509.074 z"
   id="path1430" />
<path
   d="M860.525,509.074 858.32,491.286 860.525,492.198 z"
   id="path1431" />
<path
   d="M860.525,509.074 860.525,492.198 861.437,506.869 z"
   id="path1432" />
<path
   d="M861.437,506.869 860.525,492.198 861.437,494.403 z"
   id="path1433" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g1440">
<polyline
   points="826.021,494.403 826.933,492.198 829.137,491.286 "
   id="polyline1433" />
<polyline
   points="829.137,491.286 858.32,491.286 "
   id="polyline1434" />
<polyline
   points="858.32,491.286 860.525,492.198 861.437,494.403 "
   id="polyline1435" />
<polyline
   points="861.437,494.403 861.437,506.869 "
   id="polyline1436" />
<polyline
   points="861.437,506.869 860.525,509.074 858.32,509.986 "
   id="polyline1437" />
<polyline
   points="858.32,509.986 829.137,509.986 "
   id="polyline1438" />
<polyline
   points="829.137,509.986 826.933,509.074 826.021,506.869 "
   id="polyline1439" />
<polyline
   points="826.021,506.869 826.021,494.403 "
   id="polyline1440" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1441">
<text
   transform="matrix(4.49152 0 -0 4.49615 835.291 498.824)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="SW_Pump3_Auto">AUTO</text>
<text
   transform="matrix(4.46296 0 -0 4.49615 833.121 507.324)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="SW_Pump3_Hz">50.3 Hz</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="SW_Pump3_hour">
<path
   d="M827.437,524.31 827.437,515.495 828.082,525.869 z"
   id="path1441" />
<path
   d="M828.082,525.869 827.437,515.495 828.082,513.936 z"
   id="path1442" />
<path
   d="M828.082,525.869 828.082,513.936 829.641,526.513 z"
   id="path1443" />
<path
   d="M829.641,526.513 828.082,513.936 829.641,513.292 z"
   id="path1444" />
<path
   d="M829.641,526.513 829.641,513.292 860.744,526.513 z"
   id="path1445" />
<path
   d="M860.744,526.513 829.641,513.292 860.744,513.292 z"
   id="path1446" />
<path
   d="M860.744,526.513 860.744,513.292 862.303,525.869 z"
   id="path1447" />
<path
   d="M862.303,525.869 860.744,513.292 862.303,513.936 z"
   id="path1448" />
<path
   d="M862.303,525.869 862.303,513.936 862.948,524.31 z"
   id="path1449" />
<path
   d="M862.948,524.31 862.303,513.936 862.948,515.495 z"
   id="path1450" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g1451">
<text
   transform="matrix(5.27647 0 -0 5.27549 835.802 522.734)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text1450">100 h</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1452">
<path
   d="M938.596,444.726 977.601,444.726 977.601,430.277 938.596,430.277 z"
   id="path1451" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="DPX1">
<polyline
   points="938.596,444.726 977.601,444.726 977.601,430.277 938.596,430.277 938.596,444.726 "
   id="polyline1452" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1454">
<path
   d="M815.632,326.107 854.637,326.107 854.637,311.657 815.632,311.657 z"
   id="path1453" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="TX1">
<polyline
   points="815.632,326.107 854.637,326.107 854.637,311.657 815.632,311.657 815.632,326.107 "
   id="polyline1454" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1456">
<path
   d="M557.899,303.63 596.904,303.63 596.904,289.274 557.899,289.274 z"
   id="path1455" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="TX3">
<polyline
   points="557.899,303.63 596.904,303.63 596.904,289.274 557.899,289.274 557.899,303.63 "
   id="polyline1456" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1458">
<path
   d="M426.719,437.549 465.723,437.549 465.723,423.099 426.719,423.099 z"
   id="path1457" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="TX5">
<polyline
   points="426.719,437.549 465.723,437.549 465.723,423.099 426.719,423.099 426.719,437.549 "
   id="polyline1458" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1460">
<path
   d="M313.388,161.4 352.298,161.4 352.298,146.95 313.388,146.95 z"
   id="path1459" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="g1461">
<polyline
   points="313.388,161.4 352.298,161.4 352.298,146.95 313.388,146.95 313.388,161.4 "
   id="polyline1460" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g1462">
<path
   d="M558.749,161.4 597.754,161.4 597.754,146.95 558.749,146.95 z"
   id="path1461" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="TX2">
<polyline
   points="558.749,161.4 597.754,161.4 597.754,146.95 558.749,146.95 558.749,161.4 "
   id="polyline1462" />
</g>


</svg>
`;function Va({sensors:n={},pumps:t=[],onPumpCommand:e}){var f,y,k;const i=b.useRef(null),[l,r]=b.useState(!1),[o,s]=b.useState(null);b.useEffect(()=>{i.current&&!l&&(i.current.innerHTML=Ba,r(!0),d())},[]);const d=()=>{if(!i.current)return;const M=i.current.querySelector("svg");if(!M)return;[{index:0,name:"LT Pump No.1",x:240,y:360,width:65,height:60},{index:1,name:"LT Pump No.2",x:240,y:447,width:65,height:60},{index:2,name:"LT Pump No.3",x:240,y:557,width:65,height:60},{index:3,name:"SW Pump No.1",x:585,y:478,width:65,height:60},{index:4,name:"SW Pump No.2",x:680,y:478,width:65,height:60},{index:5,name:"SW Pump No.3",x:770,y:478,width:65,height:60}].forEach(h=>{const p=document.createElementNS("http://www.w3.org/2000/svg","rect");p.setAttribute("x",h.x),p.setAttribute("y",h.y),p.setAttribute("width",h.width),p.setAttribute("height",h.height),p.setAttribute("fill","transparent"),p.setAttribute("cursor","pointer"),p.setAttribute("data-pump-index",h.index),p.addEventListener("click",()=>{u(h.index)}),M.appendChild(p)})},u=M=>{t[M]&&(s({...t[M],index:M}),console.log(`펌프 ${M} 클릭됨`))};b.useEffect(()=>{o&&t[o.index]&&s(M=>({...t[M.index],index:M.index}))},[t]),b.useEffect(()=>{l&&m()},[n,t,l]);const m=()=>{if(!i.current)return;const M=i.current.querySelector("svg");if(!M){console.warn("SVG 요소를 찾을 수 없습니다");return}console.log("📊 데이터 업데이트:",{sensors:n,pumps:t}),Object.keys(Z1).forEach(I=>{const h=Z1[I],p=M.querySelector(`#${h.labelId}`);if(p&&n[I]!==void 0){const c=n[I].toFixed(h.decimal),z=`${I}_value`;M.querySelectorAll(`#${z}`).forEach(N=>N.remove());const v=p.getAttribute("transform"),_=v==null?void 0:v.match(/matrix\(([\d\.\s\-]+)\)/);if(_){const N=_[1].split(" ").map(Number),$=N[4]+25,P=N[5],V=document.createElementNS("http://www.w3.org/2000/svg","text");V.setAttribute("id",z),V.setAttribute("x",$),V.setAttribute("y",P),V.setAttribute("font-family","Arial, sans-serif"),V.setAttribute("font-size","10"),V.setAttribute("fill","#000000"),V.setAttribute("font-weight","normal"),V.style.fontWeight="normal",V.textContent=`${c}${h.unit}`,p.parentNode.appendChild(V)}}}),t.forEach((I,h)=>{const p=Ua[h];if(!p){console.warn(`펌프 ${h} 매핑 정보 없음`);return}console.log(`펌프 ${h} 업데이트:`,I);const c=M.querySelector(`#${p.symbolIds.mode}`);if(c){const v=I.auto_mode!==void 0?I.auto_mode:!1;c.textContent=v?"AUTO":"MANU",c.setAttribute("fill",v?"#00AA00":"#FF0000"),c.setAttribute("font-weight","bold"),c.setAttribute("stroke","#000000"),c.setAttribute("stroke-width","0.3"),c.setAttribute("paint-order","stroke fill"),console.log(`✅ 펌프 ${h} 모드 업데이트: ${v?"AUTO":"MANU"}`)}else console.warn(`❌ 펌프 ${h} 모드 요소 없음: #${p.symbolIds.mode}`);const z=M.querySelector(`#${p.symbolIds.hz}`);z?(z.textContent=I.frequency?`${I.frequency.toFixed(1)} Hz`:"0.0 Hz",console.log(`✅ 펌프 ${h} Hz 업데이트: ${I.frequency}`)):console.warn(`❌ 펌프 ${h} Hz 요소 없음: #${p.symbolIds.hz}`);const w=M.querySelector(`#${p.symbolIds.runningHour}`);w?(w.textContent=I.run_hours?`${I.run_hours} h`:"0 h",console.log(`✅ 펌프 ${h} 운전시간 업데이트: ${I.run_hours}`)):console.warn(`❌ 펌프 ${h} 운전시간 요소 없음: #${p.symbolIds.runningHour}`),z&&(z.setAttribute("fill","#000000"),z.setAttribute("font-weight","bold"))})},g=async(M,I)=>{e&&(await e(M,I)?(alert(`펌프 ${M+1} ${I==="start"?"시작":"정지"} 명령 전송 완료`),s(null)):alert("명령 전송 실패"))};return a.jsxs("div",{className:"dynamic-svg-diagram",children:[a.jsx("div",{ref:i,className:"svg-container"}),o&&a.jsx("div",{className:"pump-popup-overlay",onClick:()=>s(null),children:a.jsxs("div",{className:"pump-popup",onClick:M=>M.stopPropagation(),children:[a.jsxs("div",{className:"pump-popup-header",children:[a.jsxs("h3",{children:[o.index<3?"LT":"SW"," Pump No.",o.index%3+1]}),a.jsx("button",{className:"popup-close",onClick:()=>s(null),children:"×"})]}),a.jsxs("div",{className:"pump-popup-body",children:[a.jsxs("div",{className:"pump-info-row",children:[a.jsx("span",{className:"info-label",children:"상태:"}),a.jsx("span",{className:`info-value ${o.running?"status-running":"status-stopped"}`,children:o.running?"🟢 운전 중":"⚪ 정지"})]}),a.jsxs("div",{className:"pump-info-row",children:[a.jsx("span",{className:"info-label",children:"운전 모드:"}),a.jsx("span",{className:"info-value",style:{color:o.auto_mode?"#00FF00":"#FFA500",fontWeight:"bold"},children:o.auto_mode!==void 0&&o.auto_mode?"AUTO":"MANUAL"})]}),a.jsxs("div",{className:"pump-info-row",children:[a.jsx("span",{className:"info-label",children:"VFD 모드:"}),a.jsx("span",{className:"info-value",style:{color:o.vfd_mode?"#00BFFF":"#FF69B4",fontWeight:"bold"},children:o.vfd_mode!==void 0?o.vfd_mode?"VFD":"BYPASS":"VFD"})]}),a.jsxs("div",{className:"pump-info-row",children:[a.jsx("span",{className:"info-label",children:"주파수:"}),a.jsxs("span",{className:"info-value",children:[((f=o.frequency)==null?void 0:f.toFixed(1))||"0.0"," Hz"]})]}),a.jsxs("div",{className:"pump-info-row",children:[a.jsx("span",{className:"info-label",children:"전력:"}),a.jsxs("span",{className:"info-value",children:[o.power_kw||0," kW"]})]}),a.jsxs("div",{className:"pump-info-row",children:[a.jsx("span",{className:"info-label",children:"평균 전력:"}),a.jsxs("span",{className:"info-value",children:[o.avg_power||0," kW"]})]}),a.jsxs("div",{className:"pump-info-row",children:[a.jsx("span",{className:"info-label",children:"절감 전력:"}),a.jsxs("span",{className:"info-value",children:[((y=o.saved_kwh)==null?void 0:y.toLocaleString())||0," kWh"]})]}),a.jsxs("div",{className:"pump-info-row",children:[a.jsx("span",{className:"info-label",children:"운전 시간:"}),a.jsxs("span",{className:"info-value",children:[((k=o.run_hours)==null?void 0:k.toLocaleString())||0," h"]})]}),a.jsxs("div",{className:"pump-info-row",children:[a.jsx("span",{className:"info-label",children:"ESS 모드:"}),a.jsx("span",{className:"info-value",children:o.ess_mode?"🟢 활성":"⚪ 비활성"})]})]}),a.jsxs("div",{className:"pump-popup-controls",children:[a.jsx("button",{className:"btn-pump-start",onClick:()=>g(o.index,"start"),disabled:o.running,children:"▶️ START"}),a.jsx("button",{className:"btn-pump-stop",onClick:()=>g(o.index,"stop"),disabled:!o.running,children:"⏹️ STOP"})]})]})})]})}const J1={TX6:{labelId:"TX6",unit:"°C",decimal:1},TX7:{labelId:"TX7",unit:"°C",decimal:1},DPX2:{labelId:"DPX2",unit:" Pa",decimal:1},PU1:{labelId:"ME_Load",unit:"%",decimal:1}},Xa={0:{name:"FAN1",symbolIds:{mode:"FAN1_Mode",modeText:"text428",auto:"Fan1_Auto",hz:"Fan1_Hz",runningHour:"Fan1_hour"}},1:{name:"FAN2",symbolIds:{mode:"FAN2_Mode",modeText:"text411",auto:"Fan2_Auto",hz:"Fan2_Hz",runningHour:"Fan2_hour"}},2:{name:"FAN3",symbolIds:{mode:"FAN3_Mode",modeText:"text464",auto:"Fan3_Auto",hz:"Fan3_Hz",runningHour:"Fan3_hour"}},3:{name:"FAN4",symbolIds:{mode:"FAN4_Mode",modeText:"text447",auto:"Fan4_Auto",hz:"Fan4_Hz",runningHour:"Fan4_hour"}}},Qa=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 1024 768"
   version="1.1"
   stroke-linecap="round"
   stroke-linejoin="round"
   fill-rule="evenodd"
   xml:space="preserve"
   id="svg542"
   sodipodi:docname="ESS연구 verison2-Model.svg"
   inkscape:version="1.4.2 (f4327f4, 2025-05-13)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
   id="namedview542"
   pagecolor="#ffffff"
   bordercolor="#000000"
   borderopacity="0.25"
   inkscape:showpageshadow="2"
   inkscape:pageopacity="0.0"
   inkscape:pagecheckerboard="0"
   inkscape:deskcolor="#d1d1d1"
   inkscape:zoom="2.1015625"
   inkscape:cx="534.12639"
   inkscape:cy="369.01115"
   inkscape:window-width="1920"
   inkscape:window-height="1009"
   inkscape:window-x="1912"
   inkscape:window-y="-8"
   inkscape:window-maximized="1"
   inkscape:current-layer="g386" />
<defs
   id="defs1">
<clipPath
   id="clipId0">
<path
   d="M0,768 1024,768 1024,0 0,0 z"
   id="path1" />
</clipPath>
</defs>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.1"
   id="g1" />
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g2">
<path
   d="M10.0392,718.609 1013.96,718.609 1013.96,49.3909 10.0392,49.3909 z"
   id="path2" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g5">
<polyline
   points="193.635,399.205 420.958,399.205 "
   id="polyline2" />
<polyline
   points="421.241,396.939 421.241,401.472 "
   id="polyline3" />
<polyline
   points="585.098,399.205 824.321,399.205 "
   id="polyline4" />
<polyline
   points="585.004,396.939 585.004,401.472 "
   id="polyline5" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(143,170,220)"
   stroke="rgb(143,170,220)"
   stroke-width="1"
   id="g48">
<path
   d="M558.56,414.458 558.56,409.995 565.265,414.458 z"
   id="path5" />
<path
   d="M565.265,414.458 558.56,409.995 565.265,409.995 z"
   id="path6" />
<path
   d="M565.265,422.706 565.265,409.995 569.728,422.706 z"
   id="path7" />
<path
   d="M569.728,422.706 565.265,409.995 569.728,409.995 z"
   id="path8" />
<path
   d="M569.728,414.458 569.728,409.995 603.641,414.458 z"
   id="path9" />
<path
   d="M603.641,414.458 569.728,409.995 603.641,409.995 z"
   id="path10" />
<path
   d="M603.641,517.172 603.641,512.709 614.635,517.172 z"
   id="path11" />
<path
   d="M614.635,517.172 603.641,512.709 614.635,512.709 z"
   id="path12" />
<path
   d="M603.641,414.458 603.641,409.995 614.635,414.458 z"
   id="path13" />
<path
   d="M614.635,414.458 603.641,409.995 614.635,409.995 z"
   id="path14" />
<path
   d="M614.635,522.075 614.635,503.375 616.146,522.075 z"
   id="path15" />
<path
   d="M616.146,522.075 614.635,503.375 616.146,503.375 z"
   id="path16" />
<path
   d="M614.635,414.458 614.635,409.995 616.146,414.458 z"
   id="path17" />
<path
   d="M616.146,414.458 614.635,409.995 616.146,409.995 z"
   id="path18" />
<path
   d="M616.146,522.075 616.146,503.296 619.098,522.075 z"
   id="path19" />
<path
   d="M619.098,522.075 616.146,503.296 619.098,503.296 z"
   id="path20" />
<path
   d="M616.146,414.458 616.146,409.995 619.098,414.458 z"
   id="path21" />
<path
   d="M619.098,414.458 616.146,409.995 619.098,409.995 z"
   id="path22" />
<path
   d="M619.098,507.759 619.098,503.296 631.989,507.759 z"
   id="path23" />
<path
   d="M631.989,507.759 619.098,503.296 631.989,503.296 z"
   id="path24" />
<path
   d="M619.098,414.458 619.098,409.995 631.989,414.458 z"
   id="path25" />
<path
   d="M631.989,414.458 619.098,409.995 631.989,409.995 z"
   id="path26" />
<path
   d="M631.989,507.759 631.989,403.235 632.02,507.759 z"
   id="path27" />
<path
   d="M632.02,507.759 631.989,403.235 632.02,402.023 z"
   id="path28" />
<path
   d="M632.02,507.759 632.02,402.023 638.12,507.759 z"
   id="path29" />
<path
   d="M638.12,507.759 632.02,402.023 638.12,402.023 z"
   id="path30" />
<path
   d="M638.12,498.503 638.12,494.041 642.008,498.503 z"
   id="path31" />
<path
   d="M642.008,498.503 638.12,494.041 642.008,494.041 z"
   id="path32" />
<path
   d="M638.12,406.485 638.12,402.023 642.008,406.485 z"
   id="path33" />
<path
   d="M642.008,406.485 638.12,402.023 642.008,402.023 z"
   id="path34" />
<path
   d="M642.008,498.503 642.008,494.041 666.334,498.503 z"
   id="path35" />
<path
   d="M666.334,498.503 642.008,494.041 666.334,494.041 z"
   id="path36" />
<path
   d="M642.008,406.485 642.008,402.023 666.334,406.485 z"
   id="path37" />
<path
   d="M666.334,406.485 642.008,402.023 666.334,402.023 z"
   id="path38" />
<path
   d="M642.008,369.031 642.008,360.106 666.334,369.031 z"
   id="path39" />
<path
   d="M666.334,369.031 642.008,360.106 666.334,360.106 z"
   id="path40" />
<path
   d="M666.334,498.503 666.334,494.041 669.097,498.503 z"
   id="path41" />
<path
   d="M669.097,498.503 666.334,494.041 669.097,494.041 z"
   id="path42" />
<path
   d="M666.334,406.485 666.334,360.106 669.097,406.485 z"
   id="path43" />
<path
   d="M669.097,406.485 666.334,360.106 669.097,360.106 z"
   id="path44" />
<path
   d="M669.097,406.485 669.097,360.106 673.024,406.485 z"
   id="path45" />
<path
   d="M673.024,406.485 669.097,360.106 673.024,360.106 z"
   id="path46" />
<path
   d="M673.024,369.031 673.024,360.106 743.384,369.031 z"
   id="path47" />
<path
   d="M743.384,369.031 673.024,360.106 743.384,360.106 z"
   id="path48" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g49">
<polyline
   points="642.008,360.106 743.384,360.106 743.384,369.031 673.024,369.031 673.024,402.023 673.024,404.101 673.024,406.485 638.12,406.485 638.12,494.041 669.097,494.041 669.097,498.503 638.12,498.503 638.12,503.296 638.12,505.004 638.12,507.759 619.098,507.759 619.098,522.075 614.635,522.075 614.635,517.172 603.641,517.172 603.641,512.709 614.635,512.709 614.635,503.375 616.146,503.375 616.146,503.296 631.989,503.296 631.989,414.458 569.728,414.458 569.728,422.706 565.265,422.706 565.265,414.458 558.56,414.458 558.56,409.995 631.989,409.995 631.989,403.235 632.02,403.235 632.02,402.023 666.334,402.023 666.334,369.031 642.008,369.031 642.008,360.106 "
   id="polyline48" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(143,170,220)"
   stroke="rgb(143,170,220)"
   stroke-width="1"
   id="g88">
<path
   d="M279.105,368.984 279.105,360.106 303.826,368.984 z"
   id="path49" />
<path
   d="M303.826,368.984 279.105,360.106 303.826,360.106 z"
   id="path50" />
<path
   d="M303.826,378.971 303.826,374.516 342.933,378.971 z"
   id="path51" />
<path
   d="M342.933,378.971 303.826,374.516 342.933,374.516 z"
   id="path52" />
<path
   d="M303.826,368.984 303.826,360.106 342.933,368.984 z"
   id="path53" />
<path
   d="M342.933,368.984 303.826,360.106 342.933,360.106 z"
   id="path54" />
<path
   d="M342.933,446.962 342.933,442.499 360.452,446.962 z"
   id="path55" />
<path
   d="M360.452,446.962 342.933,442.499 360.452,442.499 z"
   id="path56" />
<path
   d="M342.933,378.971 342.933,374.516 360.452,378.971 z"
   id="path57" />
<path
   d="M360.452,378.971 342.933,374.516 360.452,374.516 z"
   id="path58" />
<path
   d="M342.933,368.984 342.933,360.106 360.452,368.984 z"
   id="path59" />
<path
   d="M360.452,368.984 342.933,360.106 360.452,360.106 z"
   id="path60" />
<path
   d="M360.452,508.947 360.452,360.106 366.929,508.947 z"
   id="path61" />
<path
   d="M366.929,508.947 360.452,360.106 366.929,360.106 z"
   id="path62" />
<path
   d="M366.929,501.62 366.929,497.158 399.826,501.62 z"
   id="path63" />
<path
   d="M399.826,501.62 366.929,497.158 399.826,497.158 z"
   id="path64" />
<path
   d="M366.929,408.555 366.929,404.093 399.826,408.555 z"
   id="path65" />
<path
   d="M399.826,408.555 366.929,404.093 399.826,404.093 z"
   id="path66" />
<path
   d="M366.929,368.984 366.929,360.106 399.826,368.984 z"
   id="path67" />
<path
   d="M399.826,368.984 366.929,360.106 399.826,360.106 z"
   id="path68" />
<path
   d="M399.826,517.73 399.826,497.158 400.983,517.73 z"
   id="path69" />
<path
   d="M400.983,517.73 399.826,497.158 400.983,497.158 z"
   id="path70" />
<path
   d="M399.826,408.555 399.826,404.093 400.983,408.555 z"
   id="path71" />
<path
   d="M400.983,408.555 399.826,404.093 400.983,404.093 z"
   id="path72" />
<path
   d="M399.826,368.984 399.826,360.106 400.983,368.984 z"
   id="path73" />
<path
   d="M400.983,368.984 399.826,360.106 400.983,360.106 z"
   id="path74" />
<path
   d="M400.983,517.73 400.983,497.158 403.808,517.73 z"
   id="path75" />
<path
   d="M403.808,517.73 400.983,497.158 403.808,497.158 z"
   id="path76" />
<path
   d="M400.983,408.555 400.983,404.093 403.808,408.555 z"
   id="path77" />
<path
   d="M403.808,408.555 400.983,404.093 403.808,404.093 z"
   id="path78" />
<path
   d="M403.808,517.73 403.808,497.158 404.289,517.73 z"
   id="path79" />
<path
   d="M404.289,517.73 403.808,497.158 404.289,497.189 z"
   id="path80" />
<path
   d="M403.808,408.555 403.808,404.093 404.289,408.555 z"
   id="path81" />
<path
   d="M404.289,408.555 403.808,404.093 404.289,404.093 z"
   id="path82" />
<path
   d="M404.289,511.182 404.289,506.72 412.521,511.182 z"
   id="path83" />
<path
   d="M412.521,511.182 404.289,506.72 412.521,506.72 z"
   id="path84" />
<path
   d="M404.289,408.555 404.289,404.093 412.521,408.555 z"
   id="path85" />
<path
   d="M412.521,408.555 404.289,404.093 412.521,404.093 z"
   id="path86" />
<path
   d="M412.521,408.555 412.521,404.093 422.374,408.555 z"
   id="path87" />
<path
   d="M422.374,408.555 412.521,404.093 422.374,404.093 z"
   id="path88" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g91">
<polyline
   points="279.105,360.106 400.983,360.106 400.983,368.984 366.929,368.984 366.929,404.093 422.374,404.093 422.374,408.555 366.929,408.555 366.929,497.158 403.808,497.158 403.808,497.189 404.289,497.189 404.289,506.72 412.521,506.72 412.521,511.182 404.289,511.182 404.289,517.73 399.826,517.73 399.826,501.62 366.929,501.62 366.929,508.947 360.452,508.947 360.452,446.962 342.933,446.962 342.933,442.499 360.452,442.499 360.452,378.971 303.826,378.971 303.826,374.516 360.452,374.516 360.452,368.984 279.105,368.984 279.105,360.106 "
   id="polyline88" />
<polyline
   points="447.874,177.36 574.71,177.36 "
   id="polyline89" />
<polyline
   points="429.552,179.155 429.552,360.106 "
   id="polyline90" />
<polyline
   points="589.254,179.155 589.254,360.106 "
   id="polyline91" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g92">
<text
   transform="matrix(7.88404 0 -0 7.90963 484.706 168.538)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text91">FUNNEL</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g96">
<polyline
   points="750.656,239.126 750.656,179.155 "
   id="polyline92" />
<polyline
   points="267.678,179.155 750.467,179.155 "
   id="polyline93" />
<polyline
   points="350.126,154.789 350.126,179.155 "
   id="polyline94" />
<polyline
   points="350.409,155.355 380.662,155.141 409.964,154.536 437.367,153.595 461.918,152.374 472.828,151.677 482.668,150.931 491.321,150.142 498.667,149.319 504.587,148.468 508.963,147.596 511.675,146.71 512.606,145.817 513.537,144.924 516.249,144.037 520.624,143.165 526.544,142.314 533.89,141.491 542.542,140.703 552.382,139.956 563.291,139.259 587.842,138.038 615.244,137.098 644.548,136.492 674.803,136.278 "
   id="polyline95" />
<polyline
   points="674.441,136.372 674.441,179.344 "
   id="polyline96" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g98">
<text
   transform="matrix(7.89942 0 -0 7.90963 477.156 202.388)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text96">E/R CASING</text>
<text
   transform="matrix(7.89886 0 -0 7.90963 472.616 602.619)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text97">MAIN ENGINE</text>
<text
   transform="matrix(5.6255 0 -0 5.61111 205.548 497.331)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text98">PURIFIER ROOM</text>
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_2407094ac3eb7042c848a1b7e7a2760bd47bbc.PNG"
   preserveAspectRatio="none"
   transform="matrix(-34.377 0 -0 40.5157 343.987 492.798)"
   id="image98" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   id="g102">
<polyline
   points="343.987,533.313 309.61,533.313 309.61,492.798 343.987,492.798 343.987,533.313 "
   id="polyline98" />
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_240709d3815b3245b4484681519078dbeb1e94.PNG"
   preserveAspectRatio="none"
   transform="matrix(-34.377 0 -0 40.5157 303.755 492.798)"
   id="image99" />
<polyline
   points="303.755,533.313 269.378,533.313 269.378,492.798 303.755,492.798 303.755,533.313 "
   id="polyline99" />
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_24070927a171ef759d4083ad6cc564da53837e.PNG"
   preserveAspectRatio="none"
   transform="matrix(-25.405 0 -0 29.8438 264.467 503.47)"
   id="image100" />
<polyline
   points="264.467,533.313 239.062,533.313 239.062,503.47 264.467,503.47 264.467,533.313 "
   id="polyline100" />
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_24070960c1851515054f7f8a04915fe8e24d82.PNG"
   preserveAspectRatio="none"
   transform="matrix(-25.405 0 -0 29.8438 233.584 503.47)"
   id="image101" />
<polyline
   points="233.584,533.313 208.179,533.313 208.179,503.47 233.584,503.47 233.584,533.313 "
   id="polyline101" />
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_240709c59dcb2fe34244f783b18ec1ce2bb765.PNG"
   preserveAspectRatio="none"
   transform="matrix(50.0544 0 -0 34.9436 212.807 451.999)"
   id="image102" />
<polyline
   points="212.807,486.942 262.861,486.942 262.861,451.999 212.807,451.999 212.807,486.942 "
   id="polyline102" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g103">
<text
   transform="matrix(5.60926 0 -0 5.61111 223.387 448.98)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text102">No.3 D/G</text>
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_24070968e55b4a84c74231bea72d3f03a2d8c5.PNG"
   preserveAspectRatio="none"
   transform="matrix(50.0544 0 -0 34.9436 272.683 451.999)"
   id="image103" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   id="g104">
<polyline
   points="272.683,486.942 322.738,486.942 322.738,451.999 272.683,451.999 272.683,486.942 "
   id="polyline103" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g106">
<text
   transform="matrix(5.60926 0 -0 5.61111 283.208 448.977)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text104">No.2 D/G</text>
<text
   transform="matrix(5.60973 0 -0 5.61111 280.808 226.644)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text105">E/R FAN</text>
<text
   transform="matrix(5.61461 0 -0 5.61111 287.985 235.145)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text106">No.4</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g107">
<polyline
   points="267.678,216.271 381.764,216.271 381.764,359.539 "
   id="polyline106" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g110">
<text
   transform="matrix(5.60973 0 -0 5.61111 336.852 226.644)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text107">E/R FAN</text>
<text
   transform="matrix(5.61479 0 -0 5.61111 344.028 235.147)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text108">No.3</text>
<text
   transform="matrix(7.84487 0 -0 7.90963 662.467 194.376)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text109">M/E T/C</text>
<text
   transform="matrix(7.88182 0 -0 7.90963 635.831 206.276)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text110">DIRECT SUCTION</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g111">
<polyline
   points="750.278,215.704 635.719,215.704 635.719,360.484 "
   id="polyline110" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g114">
<text
   transform="matrix(5.60973 0 -0 5.61111 650.55 229.508)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text111">E/R FAN</text>
<text
   transform="matrix(5.61636 0 -0 5.61111 657.726 238.01)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text112">No.2</text>
<text
   transform="matrix(5.60973 0 -0 5.61111 706.593 229.508)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text113">E/R FAN</text>
<text
   transform="matrix(5.61497 0 -0 5.61111 713.77 238.01)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text114">No.1</text>
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_2407099a204d988776466abedf146388680849.PNG"
   preserveAspectRatio="none"
   transform="matrix(50.0544 0 -0 34.9436 736.867 451.999)"
   id="image114" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   id="g115">
<polyline
   points="736.867,486.942 786.922,486.942 786.922,451.999 736.867,451.999 736.867,486.942 "
   id="polyline114" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g130">
<text
   transform="matrix(5.60926 0 -0 5.61111 747.431 450.189)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text115">No.1 D/G</text>
<text
   transform="matrix(5.61753 0 -0 5.61111 683.427 450.189)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text116">Turbo GEN</text>
<text
   transform="matrix(6.78186 0 -0 6.77389 755.752 183.499)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text117">C</text>
<text
   transform="matrix(6.77779 0 -0 6.77389 762.558 183.499)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text118">-</text>
<text
   transform="matrix(6.76321 0 -0 6.77389 765.672 183.499)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text119">DK</text>
<text
   transform="matrix(6.78124 0 -0 6.76037 755.742 311.846)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text120">A</text>
<text
   transform="matrix(6.76426 0 -0 6.76037 762.085 311.846)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text121">-</text>
<text
   transform="matrix(6.75712 0 -0 6.76037 765.199 311.846)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text122">DK</text>
<text
   transform="matrix(6.76141 0 -0 6.76037 755.758 248.153)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text123">B</text>
<text
   transform="matrix(6.76426 0 -0 6.76037 762.085 248.153)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text124">-</text>
<text
   transform="matrix(6.76642 0 -0 6.76037 765.198 248.153)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text125">D</text>
<text
   transform="matrix(6.73658 0 -0 6.76037 787.301 356.345)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text126">UPP DK</text>
<text
   transform="matrix(6.77556 0 -0 6.76037 766.936 396.105)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text127">RECESS DK</text>
<text
   transform="matrix(6.74943 0 -0 6.76037 786.975 485.546)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text128">3RD DK</text>
<text
   transform="matrix(6.7681 0 -0 6.76037 787.919 529.575)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text129">4TH DK</text>
<text
   transform="matrix(6.77852 0 -0 6.76037 788.955 557.129)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text130">FLOOR</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(64,64,64)"
   stroke="rgb(64,64,64)"
   stroke-width="1"
   id="g160">
<path
   d="M363.238,521.429 362.057,515.527 363.238,515.527 z"
   id="path130" />
<path
   d="M363.238,521.429 363.238,516.314 363.631,523.397 z"
   id="path131" />
<path
   d="M363.631,523.397 363.238,516.314 363.631,516.314 z"
   id="path132" />
<path
   d="M363.238,515.527 363.238,508.947 363.631,515.527 z"
   id="path133" />
<path
   d="M363.631,515.527 363.238,508.947 363.631,508.947 z"
   id="path134" />
<path
   d="M363.631,523.397 363.631,516.314 364.025,521.429 z"
   id="path135" />
<path
   d="M364.025,521.429 363.631,516.314 364.025,516.314 z"
   id="path136" />
<path
   d="M363.631,515.527 363.631,508.947 364.025,515.527 z"
   id="path137" />
<path
   d="M364.025,515.527 363.631,508.947 364.025,508.947 z"
   id="path138" />
<path
   d="M364.025,521.429 364.025,515.527 365.205,515.527 z"
   id="path139" />
<path
   d="M412.08,509.435 412.08,508.648 418.66,509.435 z"
   id="path140" />
<path
   d="M418.66,509.435 412.08,508.648 418.66,508.648 z"
   id="path141" />
<path
   d="M418.66,510.616 418.66,509.435 419.447,510.458 z"
   id="path142" />
<path
   d="M419.447,510.458 418.66,509.435 419.447,509.435 z"
   id="path143" />
<path
   d="M418.66,508.648 418.66,507.468 419.447,508.648 z"
   id="path144" />
<path
   d="M419.447,508.648 418.66,507.468 419.447,507.625 z"
   id="path145" />
<path
   d="M419.447,510.458 419.447,507.625 426.53,509.042 z"
   id="path146" />
<path
   d="M595.959,515.936 588.876,514.519 595.959,513.103 z"
   id="path147" />
<path
   d="M595.959,515.936 595.959,514.913 596.746,516.093 z"
   id="path148" />
<path
   d="M596.746,516.093 595.959,514.913 596.746,514.913 z"
   id="path149" />
<path
   d="M595.959,514.126 595.959,513.103 596.746,514.126 z"
   id="path150" />
<path
   d="M596.746,514.126 595.959,513.103 596.746,512.945 z"
   id="path151" />
<path
   d="M596.746,514.913 596.746,514.126 603.42,514.913 z"
   id="path152" />
<path
   d="M603.42,514.913 596.746,514.126 603.42,514.126 z"
   id="path153" />
<path
   d="M669.058,496.78 669.058,495.993 675.731,496.78 z"
   id="path154" />
<path
   d="M675.731,496.78 669.058,495.993 675.731,495.993 z"
   id="path155" />
<path
   d="M675.731,497.96 675.731,496.78 676.518,497.803 z"
   id="path156" />
<path
   d="M676.518,497.803 675.731,496.78 676.518,496.78 z"
   id="path157" />
<path
   d="M675.731,495.993 675.731,494.812 676.518,495.993 z"
   id="path158" />
<path
   d="M676.518,495.993 675.731,494.812 676.518,494.97 z"
   id="path159" />
<path
   d="M676.518,497.803 676.518,494.97 683.602,496.386 z"
   id="path160" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g173">
<polyline
   points="374.87,480.331 374.87,488.453 "
   id="polyline160" />
<polyline
   points="372.698,479.953 377.231,479.953 "
   id="polyline161" />
<polyline
   points="352.676,524.625 352.676,532.747 "
   id="polyline162" />
<polyline
   points="350.504,524.247 354.942,524.247 "
   id="polyline163" />
<polyline
   points="352.676,496.764 352.676,488.642 "
   id="polyline164" />
<polyline
   points="350.504,497.048 354.942,497.048 "
   id="polyline165" />
<polyline
   points="193.729,488.359 420.958,488.359 "
   id="polyline166" />
<polyline
   points="421.241,486.281 421.241,490.72 "
   id="polyline167" />
<polyline
   points="193.729,532.841 420.958,532.841 "
   id="polyline168" />
<polyline
   points="421.241,530.669 421.241,535.202 "
   id="polyline169" />
<polyline
   points="587.743,532.841 824.321,532.841 "
   id="polyline170" />
<polyline
   points="587.648,530.669 587.648,535.202 "
   id="polyline171" />
<polyline
   points="622.592,480.142 622.592,488.264 "
   id="polyline172" />
<polyline
   points="620.42,479.859 624.859,479.859 "
   id="polyline173" />
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_240709e4aad4b89b274b45b93a2b35febbaae3.PNG"
   preserveAspectRatio="none"
   transform="matrix(53.0766 0 -0 35.0381 677.935 452.471)"
   id="image173" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   id="g174">
<polyline
   points="677.935,487.509 731.012,487.509 731.012,452.471 677.935,452.471 677.935,487.509 "
   id="polyline174" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g203">
<polyline
   points="748.389,236.953 751.978,245.548 "
   id="polyline175" />
<polyline
   points="748.389,242.431 751.978,251.025 "
   id="polyline176" />
<polyline
   points="748.389,247.909 751.978,256.503 "
   id="polyline177" />
<polyline
   points="748.389,253.386 751.978,262.075 "
   id="polyline178" />
<polyline
   points="748.389,258.864 751.978,267.553 "
   id="polyline179" />
<polyline
   points="748.389,264.342 751.978,273.03 "
   id="polyline180" />
<polyline
   points="748.389,311.279 751.978,319.968 "
   id="polyline181" />
<polyline
   points="748.389,316.757 751.978,325.446 "
   id="polyline182" />
<polyline
   points="748.389,322.329 751.978,330.923 "
   id="polyline183" />
<polyline
   points="748.389,327.807 751.978,336.401 "
   id="polyline184" />
<polyline
   points="748.389,333.285 751.978,341.879 "
   id="polyline185" />
<polyline
   points="748.389,338.762 751.978,347.451 "
   id="polyline186" />
<polyline
   points="751.128,315.34 751.128,271.991 "
   id="polyline187" />
<polyline
   points="750.183,360.201 750.183,342.918 "
   id="polyline188" />
<polyline
   points="267.583,238.087 267.583,179.155 "
   id="polyline189" />
<polyline
   points="269.661,235.915 266.072,244.603 "
   id="polyline190" />
<polyline
   points="269.661,241.392 266.072,250.081 "
   id="polyline191" />
<polyline
   points="269.661,246.964 266.167,255.559 "
   id="polyline192" />
<polyline
   points="269.661,252.442 266.072,261.036 "
   id="polyline193" />
<polyline
   points="269.661,257.92 266.072,266.514 "
   id="polyline194" />
<polyline
   points="269.661,263.397 266.072,272.086 "
   id="polyline195" />
<polyline
   points="269.85,311.279 266.261,319.968 "
   id="polyline196" />
<polyline
   points="269.85,316.757 266.261,325.446 "
   id="polyline197" />
<polyline
   points="269.85,322.329 266.261,330.923 "
   id="polyline198" />
<polyline
   points="269.85,327.807 266.261,336.401 "
   id="polyline199" />
<polyline
   points="269.85,333.285 266.261,341.879 "
   id="polyline200" />
<polyline
   points="269.85,338.762 266.261,347.451 "
   id="polyline201" />
<polyline
   points="267.678,329.885 267.678,269.63 "
   id="polyline202" />
<polyline
   points="268.056,360.201 268.056,342.918 "
   id="polyline203" />
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_2407095a7514ccd7c44bbc87aa0953e1750c94.PNG"
   preserveAspectRatio="none"
   transform="matrix(36.3603 0 -0 42.5935 278.822 270.386)"
   id="image203" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   id="g207">
<polyline
   points="278.822,312.979 315.182,312.979 315.182,270.386 278.822,270.386 278.822,312.979 "
   id="polyline204" />
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_2407094f2f9ee5e65d4979a76acb672dfacce9.PNG"
   preserveAspectRatio="none"
   transform="matrix(36.4547 0 -0 42.5935 334.449 270.386)"
   id="image204" />
<polyline
   points="334.449,312.979 370.903,312.979 370.903,270.386 334.449,270.386 334.449,312.979 "
   id="polyline205" />
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_240709a67590d5b1bd4b279526d40f9234dbdd.PNG"
   preserveAspectRatio="none"
   transform="matrix(36.3603 0 -0 42.5935 648.469 269.725)"
   id="image205" />
<polyline
   points="648.469,312.318 684.829,312.318 684.829,269.725 648.469,269.725 648.469,312.318 "
   id="polyline206" />
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_240709a6f6f06d8d8f48018a8af00e3420570d.PNG"
   preserveAspectRatio="none"
   transform="matrix(36.4547 0 -0 42.5935 704.096 269.725)"
   id="image206" />
<polyline
   points="704.096,312.318 740.55,312.318 740.55,269.725 704.096,269.725 704.096,312.318 "
   id="polyline207" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g211">
<polyline
   points="773.385,609.528 244.571,609.528 "
   id="polyline208" />
<polyline
   points="244.571,609.528 234.306,608.493 224.746,605.525 216.094,600.828 208.555,594.608 202.335,587.07 197.638,578.418 194.67,568.857 193.635,558.592 "
   id="polyline209" />
<polyline
   points="193.635,558.592 193.635,360.106 824.321,360.106 824.321,558.592 "
   id="polyline210" />
<polyline
   points="824.321,558.592 823.286,568.857 820.317,578.418 815.621,587.07 809.401,594.608 801.862,600.828 793.21,605.525 783.649,608.493 773.385,609.528 "
   id="polyline211" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(217,217,217)"
   stroke="rgb(217,217,217)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g212">
<path
   d="M443.152,361.523 574.804,361.523 574.804,357.651 443.152,357.651 z"
   id="path211" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g213">
<polyline
   points="443.057,362.278 443.057,357.84 "
   id="polyline212" />
<polyline
   points="574.71,362.278 574.71,357.84 "
   id="polyline213" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(217,217,217)"
   stroke="rgb(217,217,217)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g214">
<path
   d="M443.152,180.76 574.804,180.76 574.804,176.983 443.152,176.983 z"
   id="path213" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g216">
<polyline
   points="443.057,181.61 443.057,177.077 "
   id="polyline214" />
<polyline
   points="574.71,181.61 574.71,177.077 "
   id="polyline215" />
<polyline
   points="395.08,309.107 395.8,305.541 397.763,302.629 400.675,300.666 404.241,299.946 407.808,300.666 410.72,302.629 412.683,305.541 413.402,309.107 412.683,312.674 410.72,315.585 407.808,317.548 404.241,318.268 400.675,317.548 397.763,315.585 395.8,312.674 395.08,309.107 "
   id="polyline216" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g217">
<text
   transform="matrix(5.00482 0 -0 5.07028 397.875 311.807)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text216">TX7</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g218">
<polyline
   points="382.047,308.824 395.08,308.824 "
   id="polyline217" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g219">
<text
   transform="matrix(4.52618 0 -0 4.52945 384.883 326.241)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text218">E/R OUTSIDE</text>
<text
   transform="matrix(4.52181 0 -0 4.52945 384.88 333.041)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text219">TEMP</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g220">
<polyline
   points="438.902,309.485 439.621,305.919 441.584,303.007 444.496,301.044 448.063,300.324 451.629,301.044 454.541,303.007 456.504,305.919 457.223,309.485 456.504,313.051 454.541,315.963 451.629,317.926 448.063,318.646 444.496,317.926 441.584,315.963 439.621,313.051 438.902,309.485 "
   id="polyline219" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g221">
<text
   transform="matrix(5.00139 0 -0 5.07028 441.752 312.169)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text220">TX6</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g222">
<text
   transform="matrix(4.52921 0 -0 4.52945 436.936 327.508)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text221">E/R INSIDE</text>
<text
   transform="matrix(4.52181 0 -0 4.52945 436.933 334.308)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text222">TEMP</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g223">
<polyline
   points="438.713,256.881 439.433,253.314 441.396,250.403 444.307,248.44 447.874,247.72 451.44,248.44 454.352,250.403 456.315,253.314 457.035,256.881 456.315,260.447 454.352,263.359 451.44,265.322 447.874,266.042 444.307,265.322 441.396,263.359 439.433,260.447 438.713,256.881 "
   id="polyline222" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g224">
<text
   transform="matrix(4.485 0 -0 4.52945 439.811 259.281)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text223">DPX2</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g226">
<text
   transform="matrix(4.52517 0 -0 4.54297 436.923 274.691)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text224">E/R IN/OUT</text>
<text
   transform="matrix(4.53381 0 -0 4.52945 436.917 281.514)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text225">DIFFEREMTIAL</text>
<text
   transform="matrix(4.53143 0 -0 4.52945 436.917 288.315)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text226">PRESSURE</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g230">
<polyline
   points="192.974,438.682 420.958,438.682 "
   id="polyline226" />
<polyline
   points="420.769,436.416 420.769,440.949 "
   id="polyline227" />
<polyline
   points="374.87,446.804 374.87,438.682 "
   id="polyline228" />
<polyline
   points="372.698,447.088 377.231,447.088 "
   id="polyline229" />
<polyline
   points="614.47,438.777 824.321,438.777 "
   id="polyline230" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g231">
<text
   transform="matrix(6.74821 0 -0 6.76037 786.981 435.605)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text230">2ND DK</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g232">
<polyline
   points="622.592,446.899 622.592,438.777 "
   id="polyline231" />
<polyline
   points="620.42,447.182 624.859,447.182 "
   id="polyline232" />
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_2407092c5e058b2f8d41d583ea1836b9a4f46f.PNG"
   preserveAspectRatio="none"
   transform="matrix(25.5939 0 -0 32.2048 249.545 366.528)"
   id="image232" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   id="g233">
<polyline
   points="249.545,398.733 275.139,398.733 275.139,366.528 249.545,366.528 249.545,398.733 "
   id="polyline233" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(64,64,64)"
   stroke="rgb(64,64,64)"
   stroke-width="1"
   id="g249">
<path
   d="M551.477,413.466 544.394,412.049 551.477,410.633 z"
   id="path233" />
<path
   d="M551.477,413.466 551.477,412.443 552.264,413.623 z"
   id="path234" />
<path
   d="M552.264,413.623 551.477,412.443 552.264,412.443 z"
   id="path235" />
<path
   d="M551.477,411.656 551.477,410.633 552.264,411.656 z"
   id="path236" />
<path
   d="M552.264,411.656 551.477,410.633 552.264,410.475 z"
   id="path237" />
<path
   d="M552.264,412.443 552.264,411.656 558.843,412.443 z"
   id="path238" />
<path
   d="M558.843,412.443 552.264,411.656 558.843,411.656 z"
   id="path239" />
<path
   d="M567.044,435.204 565.864,429.301 567.044,429.301 z"
   id="path240" />
<path
   d="M567.044,435.204 567.044,430.088 567.438,437.171 z"
   id="path241" />
<path
   d="M567.438,437.171 567.044,430.088 567.438,430.088 z"
   id="path242" />
<path
   d="M567.044,429.301 567.044,422.721 567.438,429.301 z"
   id="path243" />
<path
   d="M567.438,429.301 567.044,422.721 567.438,422.721 z"
   id="path244" />
<path
   d="M567.438,437.171 567.438,430.088 567.831,435.204 z"
   id="path245" />
<path
   d="M567.831,435.204 567.438,430.088 567.831,430.088 z"
   id="path246" />
<path
   d="M567.438,429.301 567.438,422.721 567.831,429.301 z"
   id="path247" />
<path
   d="M567.831,429.301 567.438,422.721 567.831,422.721 z"
   id="path248" />
<path
   d="M567.831,435.204 567.831,429.301 569.012,429.301 z"
   id="path249" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g250">
<polyline
   points="587.648,488.359 824.321,488.359 "
   id="polyline249" />
<polyline
   points="587.648,486.281 587.648,490.72 "
   id="polyline250" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(244,177,131)"
   stroke="rgb(244,177,131)"
   stroke-width="1"
   id="g264">
<path
   d="M508.954,520.564 503.689,515.298 508.954,510.037 z"
   id="path250" />
<path
   d="M508.954,520.564 508.954,510.037 568.941,460.62 z"
   id="path251" />
<path
   d="M568.941,460.62 508.954,510.037 568.941,450.094 z"
   id="path252" />
<path
   d="M568.941,460.62 568.941,449.842 574.175,455.391 z"
   id="path253" />
<path
   d="M574.175,455.391 568.941,449.842 574.175,449.842 z"
   id="path254" />
<path
   d="M574.175,455.391 574.175,449.842 599.957,455.391 z"
   id="path255" />
<path
   d="M599.957,455.391 574.175,449.842 599.957,449.842 z"
   id="path256" />
<path
   d="M599.957,455.391 599.957,449.842 600.044,455.391 z"
   id="path257" />
<path
   d="M600.044,455.391 599.957,449.842 600.044,449.842 z"
   id="path258" />
<path
   d="M599.957,433.039 599.957,360.106 600.044,433.039 z"
   id="path259" />
<path
   d="M600.044,433.039 599.957,360.106 600.044,360.106 z"
   id="path260" />
<path
   d="M600.044,455.391 600.044,360.106 605.584,455.391 z"
   id="path261" />
<path
   d="M605.584,455.391 600.044,360.106 605.584,360.106 z"
   id="path262" />
<path
   d="M605.584,455.391 605.584,369.81 605.592,455.391 z"
   id="path263" />
<path
   d="M605.592,455.391 605.584,369.81 605.592,452.778 z"
   id="path264" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g265">
<polyline
   points="599.957,360.106 605.584,360.106 605.584,369.81 605.592,369.81 605.592,452.778 605.592,455.391 574.175,455.391 508.954,520.564 503.689,515.298 568.941,450.094 568.941,449.842 600.044,449.842 600.044,433.039 599.957,433.039 599.957,360.106 "
   id="polyline264" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(244,177,131)"
   stroke="rgb(244,177,131)"
   stroke-width="1"
   id="g280">
<path
   d="M523.876,520.469 518.611,515.204 523.876,509.94 z"
   id="path265" />
<path
   d="M523.876,520.469 523.876,509.94 574.946,469.399 z"
   id="path266" />
<path
   d="M574.946,469.399 523.876,509.94 574.946,458.877 z"
   id="path267" />
<path
   d="M574.946,469.399 574.946,458.751 580.046,464.3 z"
   id="path268" />
<path
   d="M580.046,464.3 574.946,458.751 580.046,458.751 z"
   id="path269" />
<path
   d="M580.046,464.3 580.046,458.751 608.835,464.3 z"
   id="path270" />
<path
   d="M608.835,464.3 580.046,458.751 608.835,458.751 z"
   id="path271" />
<path
   d="M608.835,464.3 608.835,458.751 608.921,464.3 z"
   id="path272" />
<path
   d="M608.921,464.3 608.835,458.751 608.921,458.751 z"
   id="path273" />
<path
   d="M608.835,433.063 608.835,360.106 608.921,433.063 z"
   id="path274" />
<path
   d="M608.921,433.063 608.835,360.106 608.921,360.106 z"
   id="path275" />
<path
   d="M608.921,464.3 608.921,360.106 614.36,464.3 z"
   id="path276" />
<path
   d="M614.36,464.3 608.921,360.106 614.36,360.106 z"
   id="path277" />
<path
   d="M614.36,460.994 614.36,360.106 614.462,460.994 z"
   id="path278" />
<path
   d="M614.462,460.994 614.36,360.106 614.462,360.106 z"
   id="path279" />
<path
   d="M614.462,460.994 614.462,369.81 614.47,460.994 z"
   id="path280" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g281">
<polyline
   points="608.835,360.106 614.462,360.106 614.462,369.81 614.47,369.81 614.47,460.994 614.36,460.994 614.36,464.3 580.046,464.3 523.876,520.469 518.611,515.204 574.946,458.877 574.946,458.751 608.921,458.751 608.921,433.063 608.835,433.063 608.835,360.106 "
   id="polyline280" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(244,177,131)"
   stroke="rgb(244,177,131)"
   stroke-width="1"
   id="g295">
<path
   d="M494.379,520.304 489.114,515.039 494.379,509.774 z"
   id="path281" />
<path
   d="M494.379,520.304 494.379,509.774 563.085,451.597 z"
   id="path282" />
<path
   d="M563.085,451.597 494.379,509.774 563.085,441.067 z"
   id="path283" />
<path
   d="M563.085,451.597 563.085,440.964 568.17,446.513 z"
   id="path284" />
<path
   d="M568.17,446.513 563.085,440.964 568.17,440.964 z"
   id="path285" />
<path
   d="M568.17,446.513 568.17,440.964 591.095,446.513 z"
   id="path286" />
<path
   d="M591.095,446.513 568.17,440.964 591.095,440.964 z"
   id="path287" />
<path
   d="M591.095,446.513 591.095,440.964 591.158,446.513 z"
   id="path288" />
<path
   d="M591.158,446.513 591.095,440.964 591.158,440.964 z"
   id="path289" />
<path
   d="M591.095,433.031 591.095,360.067 591.158,433.031 z"
   id="path290" />
<path
   d="M591.158,433.031 591.095,360.067 591.158,360.067 z"
   id="path291" />
<path
   d="M591.158,446.513 591.158,360.067 596.707,446.513 z"
   id="path292" />
<path
   d="M596.707,446.513 591.158,360.067 596.707,360.067 z"
   id="path293" />
<path
   d="M596.707,442.735 596.707,360.067 596.723,433.031 z"
   id="path294" />
<path
   d="M596.723,433.031 596.707,360.067 596.723,360.067 z"
   id="path295" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g296">
<polyline
   points="591.095,360.067 596.723,360.067 596.723,433.031 596.707,433.031 596.707,442.735 596.707,446.513 568.17,446.513 494.379,520.304 489.114,515.039 563.085,441.067 563.085,440.964 591.158,440.964 591.158,433.031 591.095,433.031 591.095,360.067 "
   id="polyline295" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(64,64,64)"
   stroke="rgb(64,64,64)"
   stroke-width="1"
   id="g329">
<path
   d="M335.582,446.049 328.499,444.632 335.582,443.215 z"
   id="path296" />
<path
   d="M335.582,446.049 335.582,445.026 336.369,446.206 z"
   id="path297" />
<path
   d="M336.369,446.206 335.582,445.026 336.369,445.026 z"
   id="path298" />
<path
   d="M335.582,444.238 335.582,443.215 336.369,444.238 z"
   id="path299" />
<path
   d="M336.369,444.238 335.582,443.215 336.369,443.058 z"
   id="path300" />
<path
   d="M336.369,445.026 336.369,444.238 342.948,445.026 z"
   id="path301" />
<path
   d="M342.948,445.026 336.369,444.238 342.948,444.238 z"
   id="path302" />
<path
   d="M421.902,406.304 421.902,405.517 428.482,406.304 z"
   id="path303" />
<path
   d="M428.482,406.304 421.902,405.517 428.482,405.517 z"
   id="path304" />
<path
   d="M428.482,407.485 428.482,406.304 429.269,407.327 z"
   id="path305" />
<path
   d="M429.269,407.327 428.482,406.304 429.269,406.304 z"
   id="path306" />
<path
   d="M428.482,405.517 428.482,404.337 429.269,405.517 z"
   id="path307" />
<path
   d="M429.269,405.517 428.482,404.337 429.269,404.494 z"
   id="path308" />
<path
   d="M429.269,407.327 429.269,404.494 436.352,405.911 z"
   id="path309" />
<path
   d="M411.214,420.754 410.034,414.851 411.214,414.851 z"
   id="path310" />
<path
   d="M411.214,420.754 411.214,415.638 411.608,422.721 z"
   id="path311" />
<path
   d="M411.608,422.721 411.214,415.638 411.608,415.638 z"
   id="path312" />
<path
   d="M411.214,414.851 411.214,408.272 411.608,414.851 z"
   id="path313" />
<path
   d="M411.608,414.851 411.214,408.272 411.608,408.272 z"
   id="path314" />
<path
   d="M411.608,422.721 411.608,415.638 412.001,420.754 z"
   id="path315" />
<path
   d="M412.001,420.754 411.608,415.638 412.001,415.638 z"
   id="path316" />
<path
   d="M411.608,414.851 411.608,408.272 412.001,414.851 z"
   id="path317" />
<path
   d="M412.001,414.851 411.608,408.272 412.001,408.272 z"
   id="path318" />
<path
   d="M412.001,420.754 412.001,414.851 413.182,414.851 z"
   id="path319" />
<path
   d="M401.581,529.929 400.401,524.027 401.581,524.027 z"
   id="path320" />
<path
   d="M401.581,529.929 401.581,524.814 401.975,531.897 z"
   id="path321" />
<path
   d="M401.975,531.897 401.581,524.814 401.975,524.814 z"
   id="path322" />
<path
   d="M401.581,524.027 401.581,517.353 401.975,524.027 z"
   id="path323" />
<path
   d="M401.975,524.027 401.581,517.353 401.975,517.353 z"
   id="path324" />
<path
   d="M401.975,531.897 401.975,524.814 402.368,529.929 z"
   id="path325" />
<path
   d="M402.368,529.929 401.975,524.814 402.368,524.814 z"
   id="path326" />
<path
   d="M401.975,524.027 401.975,517.353 402.368,524.027 z"
   id="path327" />
<path
   d="M402.368,524.027 401.975,517.353 402.368,517.353 z"
   id="path328" />
<path
   d="M402.368,529.929 402.368,524.027 403.549,524.027 z"
   id="path329" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g330">
<text
   transform="matrix(5.61349 0 -0 5.61111 198.306 369.039)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text329">AUX. BOILER</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(64,64,64)"
   stroke="rgb(64,64,64)"
   stroke-width="1"
   id="g366">
<path
   d="M363.238,395.916 362.057,390.013 363.238,390.013 z"
   id="path330" />
<path
   d="M363.238,395.916 363.238,390.8 363.631,397.883 z"
   id="path331" />
<path
   d="M363.631,397.883 363.238,390.8 363.631,390.8 z"
   id="path332" />
<path
   d="M363.238,390.013 363.238,383.433 363.631,390.013 z"
   id="path333" />
<path
   d="M363.631,390.013 363.238,383.433 363.631,383.433 z"
   id="path334" />
<path
   d="M363.631,397.883 363.631,390.8 364.025,395.916 z"
   id="path335" />
<path
   d="M364.025,395.916 363.631,390.8 364.025,390.8 z"
   id="path336" />
<path
   d="M363.631,390.013 363.631,383.433 364.025,390.013 z"
   id="path337" />
<path
   d="M364.025,390.013 363.631,383.433 364.025,383.433 z"
   id="path338" />
<path
   d="M364.025,395.916 364.025,390.013 365.205,390.013 z"
   id="path339" />
<path
   d="M634.665,457.397 633.484,451.495 634.665,451.495 z"
   id="path340" />
<path
   d="M634.665,457.397 634.665,452.282 635.058,459.365 z"
   id="path341" />
<path
   d="M635.058,459.365 634.665,452.282 635.058,452.282 z"
   id="path342" />
<path
   d="M634.665,451.495 634.665,444.821 635.058,451.495 z"
   id="path343" />
<path
   d="M635.058,451.495 634.665,444.821 635.058,444.821 z"
   id="path344" />
<path
   d="M635.058,459.365 635.058,452.282 635.452,457.397 z"
   id="path345" />
<path
   d="M635.452,457.397 635.058,452.282 635.452,452.282 z"
   id="path346" />
<path
   d="M635.058,451.495 635.058,444.821 635.452,451.495 z"
   id="path347" />
<path
   d="M635.452,451.495 635.058,444.821 635.452,444.821 z"
   id="path348" />
<path
   d="M635.452,457.397 635.452,451.495 636.632,451.495 z"
   id="path349" />
<path
   d="M296.86,378.05 289.777,376.634 296.86,375.217 z"
   id="path350" />
<path
   d="M296.86,378.05 296.86,377.027 297.647,378.208 z"
   id="path351" />
<path
   d="M297.647,378.208 296.86,377.027 297.647,377.027 z"
   id="path352" />
<path
   d="M296.86,376.24 296.86,375.217 297.647,376.24 z"
   id="path353" />
<path
   d="M297.647,376.24 296.86,375.217 297.647,375.06 z"
   id="path354" />
<path
   d="M297.647,377.027 297.647,376.24 304.227,377.027 z"
   id="path355" />
<path
   d="M304.227,377.027 297.647,376.24 304.227,376.24 z"
   id="path356" />
<path
   d="M616.532,531.157 615.351,525.254 616.532,525.254 z"
   id="path357" />
<path
   d="M616.532,531.157 616.532,526.041 616.925,533.124 z"
   id="path358" />
<path
   d="M616.925,533.124 616.532,526.041 616.925,526.041 z"
   id="path359" />
<path
   d="M616.532,525.254 616.532,522.452 616.925,525.254 z"
   id="path360" />
<path
   d="M616.925,525.254 616.532,522.452 616.925,522.452 z"
   id="path361" />
<path
   d="M616.925,533.124 616.925,526.041 617.319,531.157 z"
   id="path362" />
<path
   d="M617.319,531.157 616.925,526.041 617.319,526.041 z"
   id="path363" />
<path
   d="M616.925,525.254 616.925,522.452 617.319,525.254 z"
   id="path364" />
<path
   d="M617.319,525.254 616.925,522.452 617.319,522.452 z"
   id="path365" />
<path
   d="M617.319,531.157 617.319,525.254 618.499,525.254 z"
   id="path366" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g367">
<polyline
   points="287.322,357.651 287.322,362.089 "
   id="polyline366" />
<polyline
   points="313.199,357.651 313.199,362.089 "
   id="polyline367" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(217,217,217)"
   stroke="rgb(217,217,217)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g368">
<path
   d="M287.794,360.484 312.821,360.484 312.821,357.367 287.794,357.367 z"
   id="path367" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g369">
<polyline
   points="342.759,357.651 342.759,362.089 "
   id="polyline368" />
<polyline
   points="368.542,357.651 368.542,362.089 "
   id="polyline369" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(217,217,217)"
   stroke="rgb(217,217,217)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g370">
<path
   d="M343.137,360.484 368.164,360.484 368.164,357.367 343.137,357.367 z"
   id="path369" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g371">
<polyline
   points="655.363,357.651 655.363,362.089 "
   id="polyline370" />
<polyline
   points="681.146,357.651 681.146,362.089 "
   id="polyline371" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(217,217,217)"
   stroke="rgb(217,217,217)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g372">
<path
   d="M655.741,360.484 680.768,360.484 680.768,357.367 655.741,357.367 z"
   id="path371" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g373">
<polyline
   points="710.707,357.651 710.707,362.089 "
   id="polyline372" />
<polyline
   points="736.584,357.651 736.584,362.089 "
   id="polyline373" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(217,217,217)"
   stroke="rgb(217,217,217)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g374">
<path
   d="M711.179,360.484 736.206,360.484 736.206,357.367 711.179,357.367 z"
   id="path373" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(64,64,64)"
   stroke-width="0.35"
   id="g378">
<polyline
   points="443.34,179.249 574.993,179.249 "
   id="polyline374" />
<polyline
   points="443.34,360.012 574.993,360.012 "
   id="polyline375" />
<polyline
   points="429.174,244.698 588.782,244.698 "
   id="polyline376" />
<polyline
   points="429.174,296.83 589.254,296.83 "
   id="polyline377" />
<polyline
   points="194.202,561.174 823.754,561.174 "
   id="polyline378" />
<image
   width="1"
   height="1"
   xlink:href="ESS_Hapag%20Lloyd_RHL%20C_Class_HMI%20Design_ER%20VENT_2407093400fc3466424028a37d125d9b1dc1f1.PNG"
   preserveAspectRatio="none"
   transform="matrix(157.152 0 -0 158.096 430.402 433.016)"
   id="image378" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.25"
   id="g379">
<polyline
   points="430.402,591.112 587.554,591.112 587.554,433.016 430.402,433.016 430.402,591.112 "
   id="polyline379" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(0,0,0)"
   stroke-width="0.35"
   id="g383">
<polyline
   points="273.533,354.629 321.132,354.629 321.132,254.897 273.533,254.897 273.533,354.629 "
   id="polyline380" />
<polyline
   points="327.365,354.062 374.87,354.062 374.87,254.331 327.365,254.331 327.365,354.062 "
   id="polyline381" />
<polyline
   points="643.18,353.59 690.685,353.59 690.685,252.442 643.18,252.442 643.18,353.59 "
   id="polyline382" />
<polyline
   points="696.918,353.023 744.517,353.023 744.517,252.82 696.918,252.82 696.918,353.023 "
   id="polyline383" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(217,217,217)"
   stroke="rgb(217,217,217)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g386">
<path
   d="M273.344,254.614 321.415,254.614 321.415,244.32 273.344,244.32 z"
   id="Fan4_hour" />
<path
   d="M326.988,254.236 375.153,254.236 375.153,243.942 326.988,243.942 z"
   id="Fan3_hour" />
<path
   d="M642.897,252.253 690.874,252.253 690.874,241.959 642.897,241.959 z"
   id="Fan2_hour" />
<path
   d="m 696.54,252.347 h 48.071 V 242.053 H 696.54 Z"
   id="Fan1_hour"
   sodipodi:nodetypes="ccccc" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g387">
<path
   d="M285.811,272.464 309.421,272.464 309.421,263.019 285.811,263.019 z"
   id="path387" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="g388">
<polyline
   points="285.811,272.464 309.421,272.464 309.421,263.019 285.811,263.019 285.811,272.464 "
   id="polyline387" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g389">
<path
   d="M340.871,272.464 364.576,272.464 364.576,263.019 340.871,263.019 z"
   id="path388" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="g390">
<polyline
   points="340.871,272.464 364.576,272.464 364.576,263.019 340.871,263.019 340.871,272.464 "
   id="polyline389" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g391">
<path
   d="M655.363,272.464 678.974,272.464 678.974,263.019 655.363,263.019 z"
   id="path390" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="g392">
<polyline
   points="655.363,272.464 678.974,272.464 678.974,263.019 655.363,263.019 655.363,272.464 "
   id="polyline391" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g393">
<path
   d="M709.196,272.464 732.806,272.464 732.806,263.019 709.196,263.019 z"
   id="path392" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="g394">
<polyline
   points="709.196,272.464 732.806,272.464 732.806,263.019 709.196,263.019 709.196,272.464 "
   id="polyline393" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,102)"
   stroke="rgb(0,0,102)"
   stroke-width="0"
   id="g395">
<text
   transform="matrix(15.6361 0 -0 15.6227 397.551 108.454)"
   font-family="Bahnschrift,'sans-serif'"
   font-size="1.4081"
   id="text394">E/R VENTILATION SYSTEM</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="g404">
<path
   d="M650.452,324.564 650.452,316.883 651.014,325.923 z"
   id="path395" />
<path
   d="M651.014,325.923 650.452,316.883 651.014,315.524 z"
   id="path396" />
<path
   d="M651.014,325.923 651.014,315.524 652.373,326.485 z"
   id="path397" />
<path
   d="M652.373,326.485 651.014,315.524 652.373,314.963 z"
   id="path398" />
<path
   d="M652.373,326.485 652.373,314.963 680.926,326.485 z"
   id="path399" />
<path
   d="M680.926,326.485 652.373,314.963 680.926,314.963 z"
   id="path400" />
<path
   d="M680.926,326.485 680.926,314.963 682.284,325.923 z"
   id="path401" />
<path
   d="M682.284,325.923 680.926,314.963 682.284,315.524 z"
   id="path402" />
<path
   d="M682.284,325.923 682.284,315.524 682.846,324.564 z"
   id="path403" />
<path
   d="M682.846,324.564 682.284,315.524 682.846,316.883 z"
   id="path404" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="FAN2_Mode">
<polyline
   points="650.452,316.883 651.014,315.524 652.373,314.963 "
   id="polyline404" />
<polyline
   points="652.373,314.963 680.926,314.963 "
   id="polyline405" />
<polyline
   points="680.926,314.963 682.284,315.524 682.846,316.883 "
   id="polyline406" />
<polyline
   points="682.846,316.883 682.846,324.564 "
   id="polyline407" />
<polyline
   points="682.846,324.564 682.284,325.923 680.926,326.485 "
   id="polyline408" />
<polyline
   points="680.926,326.485 652.373,326.485 "
   id="polyline409" />
<polyline
   points="652.373,326.485 651.014,325.923 650.452,324.564 "
   id="polyline410" />
<polyline
   points="650.452,324.564 650.452,316.883 "
   id="polyline411" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g412">
<text
   transform="matrix(5.27611 0 -0 5.28748 658.05 323.539)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text411">MAN</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="g421">
<path
   d="M706.079,324.564 706.079,316.883 706.641,325.923 z"
   id="path412" />
<path
   d="M706.641,325.923 706.079,316.883 706.641,315.524 z"
   id="path413" />
<path
   d="M706.641,325.923 706.641,315.524 707.999,326.485 z"
   id="path414" />
<path
   d="M707.999,326.485 706.641,315.524 707.999,314.963 z"
   id="path415" />
<path
   d="M707.999,326.485 707.999,314.963 736.458,326.485 z"
   id="path416" />
<path
   d="M736.458,326.485 707.999,314.963 736.458,314.963 z"
   id="path417" />
<path
   d="M736.458,326.485 736.458,314.963 737.816,325.923 z"
   id="path418" />
<path
   d="M737.816,325.923 736.458,314.963 737.816,315.524 z"
   id="path419" />
<path
   d="M737.816,325.923 737.816,315.524 738.378,324.564 z"
   id="path420" />
<path
   d="M738.378,324.564 737.816,315.524 738.378,316.883 z"
   id="path421" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="FAN1_Mode">
<polyline
   points="706.079,316.883 706.641,315.524 707.999,314.963 "
   id="polyline421" />
<polyline
   points="707.999,314.963 736.458,314.963 "
   id="polyline422" />
<polyline
   points="736.458,314.963 737.816,315.524 738.378,316.883 "
   id="polyline423" />
<polyline
   points="738.378,316.883 738.378,324.564 "
   id="polyline424" />
<polyline
   points="738.378,324.564 737.816,325.923 736.458,326.485 "
   id="polyline425" />
<polyline
   points="736.458,326.485 707.999,326.485 "
   id="polyline426" />
<polyline
   points="707.999,326.485 706.641,325.923 706.079,324.564 "
   id="polyline427" />
<polyline
   points="706.079,324.564 706.079,316.883 "
   id="polyline428" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g429">
<text
   transform="matrix(5.27611 0 -0 5.28748 713.598 323.539)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text428">MAN</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(237,237,237)"
   stroke="rgb(237,237,237)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="ME_Load">
<path
   d="M488.389,428.482 515.4,428.482 515.4,411.294 488.389,411.294 z"
   id="path429" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(38,38,38)"
   stroke="rgb(38,38,38)"
   stroke-width="0"
   id="g431">
<text
   transform="matrix(4.51442 0 -0 4.52945 487.555 406.478)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text430">M/E</text>
<text
   transform="matrix(4.5257 0 -0 4.52945 500.496 406.478)"
   font-family="Arial,'sans-serif'"
   font-size="1.39636"
   id="text431">LOAD</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="g440">
<path
   d="M280.711,324.564 280.711,316.883 281.273,325.923 z"
   id="path431" />
<path
   d="M281.273,325.923 280.711,316.883 281.273,315.524 z"
   id="path432" />
<path
   d="M281.273,325.923 281.273,315.524 282.631,326.485 z"
   id="path433" />
<path
   d="M282.631,326.485 281.273,315.524 282.631,314.963 z"
   id="path434" />
<path
   d="M282.631,326.485 282.631,314.963 311.09,326.485 z"
   id="path435" />
<path
   d="M311.09,326.485 282.631,314.963 311.09,314.963 z"
   id="path436" />
<path
   d="M311.09,326.485 311.09,314.963 312.448,325.923 z"
   id="path437" />
<path
   d="M312.448,325.923 311.09,314.963 312.448,315.524 z"
   id="path438" />
<path
   d="M312.448,325.923 312.448,315.524 313.01,324.564 z"
   id="path439" />
<path
   d="M313.01,324.564 312.448,315.524 313.01,316.883 z"
   id="path440" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="FAN4_Mode">
<polyline
   points="280.711,316.883 281.273,315.524 282.631,314.963 "
   id="polyline440" />
<polyline
   points="282.631,314.963 311.09,314.963 "
   id="polyline441" />
<polyline
   points="311.09,314.963 312.448,315.524 313.01,316.883 "
   id="polyline442" />
<polyline
   points="313.01,316.883 313.01,324.564 "
   id="polyline443" />
<polyline
   points="313.01,324.564 312.448,325.923 311.09,326.485 "
   id="polyline444" />
<polyline
   points="311.09,326.485 282.631,326.485 "
   id="polyline445" />
<polyline
   points="282.631,326.485 281.273,325.923 280.711,324.564 "
   id="polyline446" />
<polyline
   points="280.711,324.564 280.711,316.883 "
   id="polyline447" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g448">
<text
   transform="matrix(5.27611 0 -0 5.28748 288.23 323.539)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text447">MAN</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(231,230,230)"
   stroke="rgb(231,230,230)"
   stroke-width="1"
   id="g457">
<path
   d="M335.298,324.564 335.298,316.883 335.86,325.923 z"
   id="path448" />
<path
   d="M335.86,325.923 335.298,316.883 335.86,315.524 z"
   id="path449" />
<path
   d="M335.86,325.923 335.86,315.524 337.219,326.485 z"
   id="path450" />
<path
   d="M337.219,326.485 335.86,315.524 337.219,314.963 z"
   id="path451" />
<path
   d="M337.219,326.485 337.219,314.963 365.677,326.485 z"
   id="path452" />
<path
   d="M365.677,326.485 337.219,314.963 365.677,314.963 z"
   id="path453" />
<path
   d="M365.677,326.485 365.677,314.963 367.036,325.923 z"
   id="path454" />
<path
   d="M367.036,325.923 365.677,314.963 367.036,315.524 z"
   id="path455" />
<path
   d="M367.036,325.923 367.036,315.524 367.598,324.564 z"
   id="path456" />
<path
   d="M367.598,324.564 367.036,315.524 367.598,316.883 z"
   id="path457" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="FAN3_Mode">
<polyline
   points="335.298,316.883 335.86,315.524 337.219,314.963 "
   id="polyline457" />
<polyline
   points="337.219,314.963 365.677,314.963 "
   id="polyline458" />
<polyline
   points="365.677,314.963 367.036,315.524 367.598,316.883 "
   id="polyline459" />
<polyline
   points="367.598,316.883 367.598,324.564 "
   id="polyline460" />
<polyline
   points="367.598,324.564 367.036,325.923 365.677,326.485 "
   id="polyline461" />
<polyline
   points="365.677,326.485 337.219,326.485 "
   id="polyline462" />
<polyline
   points="337.219,326.485 335.86,325.923 335.298,324.564 "
   id="polyline463" />
<polyline
   points="335.298,324.564 335.298,316.883 "
   id="polyline464" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g465">
<text
   transform="matrix(5.27611 0 -0 5.28748 342.841 323.539)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="text464">MAN</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g466">
<path
   d="M460.812,315.624 491.884,315.624 491.884,303.63 460.812,303.63 z"
   id="path465" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="TX6">
<polyline
   points="460.812,315.624 491.884,315.624 491.884,303.63 460.812,303.63 460.812,315.624 "
   id="polyline466" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g468">
<path
   d="M460.812,263.775 491.884,263.775 491.884,251.781 460.812,251.781 z"
   id="path467" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="DPX2">
<polyline
   points="460.812,263.775 491.884,263.775 491.884,251.781 460.812,251.781 460.812,263.775 "
   id="polyline468" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(255,255,255)"
   stroke="rgb(255,255,255)"
   stroke-width="0.25"
   fill-opacity="0.498039"
   stroke-opacity="0.498039"
   id="g470">
<path
   d="M389.508,296.83 420.485,296.83 420.485,284.93 389.508,284.93 z"
   id="path469" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(255,255,255)"
   stroke-width="0.35"
   id="TX7">
<polyline
   points="389.508,296.83 420.485,296.83 420.485,284.93 389.508,284.93 389.508,296.83 "
   id="polyline470" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="1"
   id="g480">
<path
   d="M279.578,346.129 279.578,333.662 280.489,348.333 z"
   id="path471" />
<path
   d="M280.489,348.333 279.578,333.662 280.489,331.458 z"
   id="path472" />
<path
   d="M280.489,348.333 280.489,331.458 282.694,349.245 z"
   id="path473" />
<path
   d="M282.694,349.245 280.489,331.458 282.694,330.546 z"
   id="path474" />
<path
   d="M282.694,349.245 282.694,330.546 311.877,349.245 z"
   id="path475" />
<path
   d="M311.877,349.245 282.694,330.546 311.877,330.546 z"
   id="path476" />
<path
   d="M311.877,349.245 311.877,330.546 314.081,348.333 z"
   id="path477" />
<path
   d="M314.081,348.333 311.877,330.546 314.081,331.458 z"
   id="path478" />
<path
   d="M314.081,348.333 314.081,331.458 314.993,346.129 z"
   id="path479" />
<path
   d="M314.993,346.129 314.081,331.458 314.993,333.662 z"
   id="path480" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g487">
<polyline
   points="279.578,333.662 280.489,331.458 282.694,330.546 "
   id="polyline480" />
<polyline
   points="282.694,330.546 311.877,330.546 "
   id="polyline481" />
<polyline
   points="311.877,330.546 314.081,331.458 314.993,333.662 "
   id="polyline482" />
<polyline
   points="314.993,333.662 314.993,346.129 "
   id="polyline483" />
<polyline
   points="314.993,346.129 314.081,348.333 311.877,349.245 "
   id="polyline484" />
<polyline
   points="311.877,349.245 282.694,349.245 "
   id="polyline485" />
<polyline
   points="282.694,349.245 280.489,348.333 279.578,346.129 "
   id="polyline486" />
<polyline
   points="279.578,346.129 279.578,333.662 "
   id="polyline487" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g488">
<text
   transform="matrix(4.49152 0 -0 4.49615 288.832 338.021)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="Fan4_Auto">AUTO</text>
<text
   transform="matrix(4.46296 0 -0 4.49615 286.662 346.52)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="Fan4_Hz">50.3 Hz</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="1"
   id="g497">
<path
   d="M333.882,346.129 333.882,333.662 334.794,348.333 z"
   id="path488" />
<path
   d="M334.794,348.333 333.882,333.662 334.794,331.458 z"
   id="path489" />
<path
   d="M334.794,348.333 334.794,331.458 336.998,349.245 z"
   id="path490" />
<path
   d="M336.998,349.245 334.794,331.458 336.998,330.546 z"
   id="path491" />
<path
   d="M336.998,349.245 336.998,330.546 366.181,349.245 z"
   id="path492" />
<path
   d="M366.181,349.245 336.998,330.546 366.181,330.546 z"
   id="path493" />
<path
   d="M366.181,349.245 366.181,330.546 368.386,348.333 z"
   id="path494" />
<path
   d="M368.386,348.333 366.181,330.546 368.386,331.458 z"
   id="path495" />
<path
   d="M368.386,348.333 368.386,331.458 369.298,346.129 z"
   id="path496" />
<path
   d="M369.298,346.129 368.386,331.458 369.298,333.662 z"
   id="path497" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g504">
<polyline
   points="333.882,333.662 334.794,331.458 336.998,330.546 "
   id="polyline497" />
<polyline
   points="336.998,330.546 366.181,330.546 "
   id="polyline498" />
<polyline
   points="366.181,330.546 368.386,331.458 369.298,333.662 "
   id="polyline499" />
<polyline
   points="369.298,333.662 369.298,346.129 "
   id="polyline500" />
<polyline
   points="369.298,346.129 368.386,348.333 366.181,349.245 "
   id="polyline501" />
<polyline
   points="366.181,349.245 336.998,349.245 "
   id="polyline502" />
<polyline
   points="336.998,349.245 334.794,348.333 333.882,346.129 "
   id="polyline503" />
<polyline
   points="333.882,346.129 333.882,333.662 "
   id="polyline504" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g505">
<text
   transform="matrix(4.49152 0 -0 4.49615 343.136 338.021)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="Fan3_Auto">AUTO</text>
<text
   transform="matrix(4.46296 0 -0 4.49615 340.966 346.52)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="Fan3_Hz">50.3 Hz</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="1"
   id="g514">
<path
   d="M648.941,346.129 648.941,333.662 649.853,348.333 z"
   id="path505" />
<path
   d="M649.853,348.333 648.941,333.662 649.853,331.458 z"
   id="path506" />
<path
   d="M649.853,348.333 649.853,331.458 652.058,349.245 z"
   id="path507" />
<path
   d="M652.058,349.245 649.853,331.458 652.058,330.546 z"
   id="path508" />
<path
   d="M652.058,349.245 652.058,330.546 681.241,349.245 z"
   id="path509" />
<path
   d="M681.241,349.245 652.058,330.546 681.241,330.546 z"
   id="path510" />
<path
   d="M681.241,349.245 681.241,330.546 683.445,348.333 z"
   id="path511" />
<path
   d="M683.445,348.333 681.241,330.546 683.445,331.458 z"
   id="path512" />
<path
   d="M683.445,348.333 683.445,331.458 684.357,346.129 z"
   id="path513" />
<path
   d="M684.357,346.129 683.445,331.458 684.357,333.662 z"
   id="path514" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g521">
<polyline
   points="648.941,333.662 649.853,331.458 652.058,330.546 "
   id="polyline514" />
<polyline
   points="652.058,330.546 681.241,330.546 "
   id="polyline515" />
<polyline
   points="681.241,330.546 683.445,331.458 684.357,333.662 "
   id="polyline516" />
<polyline
   points="684.357,333.662 684.357,346.129 "
   id="polyline517" />
<polyline
   points="684.357,346.129 683.445,348.333 681.241,349.245 "
   id="polyline518" />
<polyline
   points="681.241,349.245 652.058,349.245 "
   id="polyline519" />
<polyline
   points="652.058,349.245 649.853,348.333 648.941,346.129 "
   id="polyline520" />
<polyline
   points="648.941,346.129 648.941,333.662 "
   id="polyline521" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g522">
<text
   transform="matrix(4.49152 0 -0 4.49615 658.235 338.021)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="Fan2_Auto">AUTO</text>
<text
   transform="scale(0.99630223,1.0037115)"
   font-family="Calibri, sans-serif"
   font-size="7.05668px"
   id="Fan2_Hz"
   x="658.50043"
   y="345.13864"
   style="stroke-width:0">50.3 Hz</text>
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(204,236,255)"
   stroke="rgb(204,236,255)"
   stroke-width="1"
   id="g531">
<path
   d="M704.473,346.129 704.473,333.662 705.385,348.333 z"
   id="path522" />
<path
   d="M705.385,348.333 704.473,333.662 705.385,331.458 z"
   id="path523" />
<path
   d="M705.385,348.333 705.385,331.458 707.59,349.245 z"
   id="path524" />
<path
   d="M707.59,349.245 705.385,331.458 707.59,330.546 z"
   id="path525" />
<path
   d="M707.59,349.245 707.59,330.546 736.773,349.245 z"
   id="path526" />
<path
   d="M736.773,349.245 707.59,330.546 736.773,330.546 z"
   id="path527" />
<path
   d="M736.773,349.245 736.773,330.546 738.977,348.333 z"
   id="path528" />
<path
   d="M738.977,348.333 736.773,330.546 738.977,331.458 z"
   id="path529" />
<path
   d="M738.977,348.333 738.977,331.458 739.889,346.129 z"
   id="path530" />
<path
   d="M739.889,346.129 738.977,331.458 739.889,333.662 z"
   id="path531" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="none"
   stroke="rgb(23,44,81)"
   stroke-width="0.09"
   id="g538">
<polyline
   points="704.473,333.662 705.385,331.458 707.59,330.546 "
   id="polyline531" />
<polyline
   points="707.59,330.546 736.773,330.546 "
   id="polyline532" />
<polyline
   points="736.773,330.546 738.977,331.458 739.889,333.662 "
   id="polyline533" />
<polyline
   points="739.889,333.662 739.889,346.129 "
   id="polyline534" />
<polyline
   points="739.889,346.129 738.977,348.333 736.773,349.245 "
   id="polyline535" />
<polyline
   points="736.773,349.245 707.59,349.245 "
   id="polyline536" />
<polyline
   points="707.59,349.245 705.385,348.333 704.473,346.129 "
   id="polyline537" />
<polyline
   points="704.473,346.129 704.473,333.662 "
   id="polyline538" />
</g>
<g
   clip-path="url(#clipId0)"
   fill="rgb(0,0,0)"
   stroke="rgb(0,0,0)"
   stroke-width="0"
   id="g539">
<text
   transform="matrix(4.49152 0 -0 4.49615 713.767 338.021)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="Fan1_Auto">AUTO</text>
<text
   transform="matrix(4.46296 0 -0 4.49615 711.597 346.52)"
   font-family="Calibri,'sans-serif'"
   font-size="1.57532"
   id="Fan1_Hz">50.3 Hz</text>
</g>


</svg>
`;function Ka({sensors:n={},fans:t=[],equipment:e=[],onCommand:i}){const l=b.useRef(null),[r,o]=b.useState(!1),[s,d]=b.useState(null),u=t.length>0?t:e.length>=10?e.slice(6,10):[];b.useEffect(()=>{m()},[]);const m=async()=>{try{l.current&&(l.current.innerHTML=Qa,o(!0))}catch(f){console.error("SVG 로드 오류:",f)}};b.useEffect(()=>{r&&g()},[n,u,r]);const g=()=>{if(!l.current)return;const f=l.current.querySelector("svg");f&&(Object.keys(J1).forEach(y=>{const k=J1[y],M=f.querySelector(`#${k.labelId}`);if(M&&n[y]!==void 0){const I=n[y].toFixed(k.decimal),h=`${y}_text`;let p=f.querySelector(`#${h}`);p&&p.remove();const c=M.getBBox(),z=c.x+c.width/2,w=c.y+c.height/2+2,v=document.createElementNS("http://www.w3.org/2000/svg","text");v.setAttribute("id",h),v.setAttribute("x",z),v.setAttribute("y",w),v.setAttribute("text-anchor","middle"),v.setAttribute("fill","#000000"),v.setAttribute("font-size","8"),v.setAttribute("font-family","Arial, sans-serif"),v.setAttribute("font-weight","bold"),v.textContent=`${I}${k.unit}`,f.appendChild(v)}}),u.forEach((y,k)=>{var z;const M=Xa[k];if(!M)return;const I=y.auto_mode!==void 0?y.auto_mode:!1,h=f.querySelector(`#${M.symbolIds.modeText}`);h&&(h.textContent=I?"AUTO":"MANU",h.setAttribute("fill",I?"#00AA00":"#FF0000"),h.setAttribute("font-weight","bold"),h.setAttribute("stroke","#000000"),h.setAttribute("stroke-width","0.3"),h.setAttribute("paint-order","stroke fill"));const p=f.querySelector(`#${M.symbolIds.auto}`);p&&(p.textContent=I?"AUTO":"MANU",p.setAttribute("fill",I?"#00AA00":"#FF0000"),p.setAttribute("font-weight","bold"),p.setAttribute("stroke","#000000"),p.setAttribute("stroke-width","0.3"),p.setAttribute("paint-order","stroke fill"));const c=f.querySelector(`#${M.symbolIds.hz}`);c&&(c.textContent=`${((z=y.frequency)==null?void 0:z.toFixed(1))||0} Hz`)}))};return a.jsxs("div",{className:"fan-diagram-wrapper",children:[a.jsx("div",{className:"fan-diagram-header",children:a.jsx("h2",{children:"🌀 E/R Ventilation System"})}),a.jsx("div",{className:"fan-diagram-content",ref:l})]})}function q1({pumps:n=[],onCommand:t,onPumpCommand:e,isFanMode:i=!1}){var u,m,g;const[l,r]=b.useState(null),[o,s]=b.useState(!1),d=async(f,y)=>{s(!0);try{let k=!1;if(t&&f.name)k=await t(f.name,y);else if(e){const I=n.findIndex(h=>h===f);k=await e(I,y)}const M=y==="start"?"시작":y==="start_fwd"?"정방향 시작":y==="start_bwd"?"역방향 시작":"정지";alert(k?`✅ ${f.name} ${M} 명령 성공`:"❌ 명령 실패")}catch(k){alert(`❌ 오류: ${k.message}`)}finally{s(!1)}};return a.jsxs("div",{className:`pump-control ${i?"fan-mode":""}`,children:[a.jsxs("div",{className:"control-header",children:[a.jsx("h2",{children:i?"🌀 팬 제어":"⚙️ 펌프 제어"}),a.jsx("p",{children:i?"팬을 선택하고 정방향/역방향/정지 명령을 내릴 수 있습니다.":"펌프를 선택하고 시작/정지 명령을 내릴 수 있습니다."})]}),a.jsx("div",{className:"control-grid",children:i?a.jsxs("section",{className:"control-section",children:[a.jsx("h3",{children:"🌀 Engine Room 팬 (E/R Fan)"}),a.jsx("div",{className:"pump-control-list",children:n.map((f,y)=>a.jsx(Zl,{pump:f,pumpIndex:y,isFan:!0,onStart:()=>d(f,"start_fwd"),onStartBwd:()=>d(f,"start_bwd"),onStop:()=>d(f,"stop"),disabled:o,isSelected:l===y,onSelect:()=>r(y)},y))})]}):a.jsxs(a.Fragment,{children:[a.jsxs("section",{className:"control-section",children:[a.jsx("h3",{children:"🌊 해수 펌프 (Sea Water Pump)"}),a.jsx("div",{className:"pump-control-list",children:n.slice(0,3).map((f,y)=>a.jsx(Zl,{pump:f,pumpIndex:y,isFan:!1,onStart:()=>d(f,"start"),onStop:()=>d(f,"stop"),disabled:o,isSelected:l===y,onSelect:()=>r(y)},y))})]}),a.jsxs("section",{className:"control-section",children:[a.jsx("h3",{children:"💧 청수 펌프 (Fresh Water Pump)"}),a.jsx("div",{className:"pump-control-list",children:n.slice(3,6).map((f,y)=>a.jsx(Zl,{pump:f,pumpIndex:y+3,isFan:!1,onStart:()=>d(f,"start"),onStop:()=>d(f,"stop"),disabled:o,isSelected:l===y+3,onSelect:()=>r(y+3)},y+3))})]})]})}),l!==null&&n[l]&&a.jsxs("div",{className:"pump-detail-panel",children:[a.jsxs("h3",{children:["📋 ",n[l].name," 상세 정보"]}),a.jsxs("div",{className:"detail-grid",children:[a.jsx(et,{label:"운전 상태",value:n[l].running?"🟢 운전중":"⚪ 정지"}),a.jsx(et,{label:"ESS 모드",value:n[l].ess_mode?"⚡ 활성":"⚫ 비활성"}),a.jsx(et,{label:"현재 주파수",value:`${(u=n[l].frequency)==null?void 0:u.toFixed(1)} Hz`}),a.jsx(et,{label:"현재 전력",value:`${n[l].power_kw} kW`}),a.jsx(et,{label:"평균 전력",value:`${n[l].avg_power} kW`}),a.jsx(et,{label:"절감 전력량",value:`${(m=n[l].saved_kwh)==null?void 0:m.toLocaleString()} kWh`}),a.jsx(et,{label:"절감률",value:`${n[l].saved_ratio}%`}),a.jsx(et,{label:"운전 시간",value:`${(g=n[l].run_hours)==null?void 0:g.toLocaleString()} h`})]})]})]})}function Zl({pump:n,pumpIndex:t,isFan:e,onStart:i,onStartBwd:l,onStop:r,disabled:o,isSelected:s,onSelect:d}){var m;const u=e?n.running_fwd||n.running_bwd:n.running;return a.jsxs("div",{className:`pump-control-card ${s?"selected":""} ${u?"running":"stopped"}`,onClick:d,children:[a.jsxs("div",{className:"control-card-header",children:[a.jsx("h4",{children:n.name}),a.jsx("span",{className:`status-indicator ${u?"active":"inactive"}`,children:e?n.running_fwd?"🟢 정방향":n.running_bwd?"🟡 역방향":"⚪ 정지":n.running?"🟢 운전중":"⚪ 정지"})]}),a.jsxs("div",{className:"control-card-info",children:[a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"info-label",children:"주파수"}),a.jsxs("span",{className:"info-value",children:[((m=n.frequency)==null?void 0:m.toFixed(1))||0," Hz"]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"info-label",children:"전력"}),a.jsxs("span",{className:"info-value",children:[n.power_kw||0," kW"]})]})]}),a.jsx("div",{className:"control-buttons",children:e?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"btn-start",onClick:g=>{g.stopPropagation(),i()},disabled:o||n.running_fwd,children:"▶️ 정방향"}),a.jsx("button",{className:"btn-start-bwd",onClick:g=>{g.stopPropagation(),l()},disabled:o||n.running_bwd,children:"◀️ 역방향"}),a.jsx("button",{className:"btn-stop",onClick:g=>{g.stopPropagation(),r()},disabled:o||!u,children:"⏸️ 정지"})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"btn-start",onClick:g=>{g.stopPropagation(),i()},disabled:o||n.running,children:"▶️ 시작"}),a.jsx("button",{className:"btn-stop",onClick:g=>{g.stopPropagation(),r()},disabled:o||!n.running,children:"⏸️ 정지"})]})})]})}function et({label:n,value:t}){return a.jsxs("div",{className:"detail-item",children:[a.jsx("span",{className:"detail-item-label",children:n}),a.jsx("span",{className:"detail-item-value",children:t})]})}function Ga({sensors:n={},pumps:t=[]}){const[e,i]=b.useState([]),l=50;return b.useEffect(()=>{if(Object.keys(n).length>0){const o={time:new Date().toLocaleTimeString("ko-KR"),TX1:n.TX1||0,TX2:n.TX2||0,TX3:n.TX3||0,TX4:n.TX4||0,TX5:n.TX5||0,TX6:n.TX6||0,TX7:n.TX7||0,DPX1:n.DPX1||0,PU1:n.PU1||0,totalPower:t.reduce((s,d)=>s+(d.power_kw||0),0)};i(s=>{const d=[...s,o];return d.length>l?d.slice(-l):d})}},[n,t]),a.jsxs("div",{className:"trend-chart",children:[a.jsxs("div",{className:"chart-header",children:[a.jsx("h2",{children:"📈 실시간 트렌드"}),a.jsxs("p",{children:["최근 ",l,"개 데이터 포인트"]})]}),a.jsxs("div",{className:"charts-grid",children:[a.jsx(On,{title:"CSW 펌프 토출 온도 (TX1)",data:e,dataKey:"TX1",unit:"°C",color:"#ef4444"}),a.jsx(On,{title:"FW Cooler 1 SW Out (TX2)",data:e,dataKey:"TX2",unit:"°C",color:"#f97316"}),a.jsx(On,{title:"FW Cooler 2 SW Out (TX3)",data:e,dataKey:"TX3",unit:"°C",color:"#fb923c"}),a.jsx(On,{title:"FW Cooler FW In (TX4)",data:e,dataKey:"TX4",unit:"°C",color:"#dc2626"}),a.jsx(On,{title:"FW Cooler FW Out (TX5)",data:e,dataKey:"TX5",unit:"°C",color:"#06b6d4"}),a.jsx(On,{title:"CSW 펌프 토출 압력 (DPX1)",data:e,dataKey:"DPX1",unit:"kg/cm²",color:"#3b82f6"}),a.jsx(On,{title:"E/R Inside Temp (TX6)",data:e,dataKey:"TX6",unit:"°C",color:"#b91c1c"}),a.jsx(On,{title:"E/R Outside Temp (TX7)",data:e,dataKey:"TX7",unit:"°C",color:"#0891b2"}),a.jsx(On,{title:"M/E 부하 트렌드 (PU1)",data:e,dataKey:"PU1",unit:"%",color:"#10b981"}),a.jsx(On,{title:"총 소비 전력",data:e,dataKey:"totalPower",unit:"kW",color:"#f59e0b"})]})]})}function On({title:n,data:t,dataKey:e,unit:i,color:l}){const r=t.map(m=>m[e]),o=Math.max(...r,1),s=Math.min(...r,0),d=o-s||1,u=r[r.length-1]||0;return a.jsxs("div",{className:"chart-panel",children:[a.jsxs("div",{className:"chart-panel-header",children:[a.jsx("h3",{children:n}),a.jsxs("span",{className:"current-value",style:{color:l},children:[u.toFixed(2)," ",i]})]}),a.jsx("div",{className:"chart-container",children:a.jsxs("svg",{className:"chart-svg",viewBox:"0 0 500 200",children:[a.jsx("line",{x1:"0",y1:"0",x2:"500",y2:"0",stroke:"#334155",strokeWidth:"1"}),a.jsx("line",{x1:"0",y1:"50",x2:"500",y2:"50",stroke:"#334155",strokeWidth:"1",strokeDasharray:"5,5"}),a.jsx("line",{x1:"0",y1:"100",x2:"500",y2:"100",stroke:"#334155",strokeWidth:"1",strokeDasharray:"5,5"}),a.jsx("line",{x1:"0",y1:"150",x2:"500",y2:"150",stroke:"#334155",strokeWidth:"1",strokeDasharray:"5,5"}),a.jsx("line",{x1:"0",y1:"200",x2:"500",y2:"200",stroke:"#334155",strokeWidth:"1"}),r.length>1&&a.jsx("polyline",{fill:"none",stroke:l,strokeWidth:"3",points:r.map((m,g)=>{const f=g/(r.length-1)*500,y=200-(m-s)/d*200;return`${f},${y}`}).join(" ")}),r.map((m,g)=>{const f=g/Math.max(r.length-1,1)*500,y=200-(m-s)/d*200;return a.jsx("circle",{cx:f,cy:y,r:"3",fill:l},g)})]})}),a.jsxs("div",{className:"chart-footer",children:[a.jsxs("span",{children:["최소: ",s.toFixed(2)]}),a.jsxs("span",{children:["최대: ",o.toFixed(2)]})]})]})}function Ya(){const[n]=b.useState([{id:1,level:"info",message:"시스템 정상 작동 중",time:new Date().toISOString(),acknowledged:!0},{id:2,level:"warning",message:"PLC 통신 지연 감지",time:new Date(Date.now()-3e5).toISOString(),acknowledged:!1}]),t=i=>{switch(i){case"critical":return"🔴";case"warning":return"🟡";case"info":return"🟢";default:return"⚪"}},e=i=>{switch(i){case"critical":return"alarm-critical";case"warning":return"alarm-warning";case"info":return"alarm-info";default:return"alarm-normal"}};return a.jsxs("div",{className:"alarm-panel",children:[a.jsxs("div",{className:"alarm-header",children:[a.jsx("h2",{children:"🔔 알람 시스템"}),a.jsxs("div",{className:"alarm-summary",children:[a.jsx("span",{className:"summary-item critical",children:"위험: 0"}),a.jsx("span",{className:"summary-item warning",children:"경고: 1"}),a.jsx("span",{className:"summary-item info",children:"정보: 1"})]})]}),a.jsx("div",{className:"alarm-list",children:n.length===0?a.jsx("div",{className:"no-alarms",children:a.jsx("span",{children:"✅ 활성 알람이 없습니다"})}):n.map(i=>a.jsxs("div",{className:`alarm-item ${e(i.level)} ${i.acknowledged?"acknowledged":""}`,children:[a.jsx("div",{className:"alarm-icon",children:t(i.level)}),a.jsxs("div",{className:"alarm-content",children:[a.jsx("div",{className:"alarm-message",children:i.message}),a.jsx("div",{className:"alarm-time",children:new Date(i.time).toLocaleString("ko-KR")})]}),a.jsx("div",{className:"alarm-actions",children:!i.acknowledged&&a.jsx("button",{className:"btn-acknowledge",children:"확인"})})]},i.id))})]})}function Za(){const[n,t]=b.useState("temp"),[e,i]=b.useState({swp_op_temp:35,swp_lo_temp:32,swp_hi_temp:38,swp_temp_limit:40,swp_prs:3.5,fwp_1p_op_temp:45,fwp_1p_lo_temp:40,fwp_1p_hi_temp:50,fwp_2p_op_temp:45,fwp_2p_lo_temp:40,fwp_2p_hi_temp:50,swp_adj_cycle:60,swp_adj_hz:5,swp_min_hz:40,swp_max_hz:60,fwp_adj_cycle:60,fwp_adj_hz:5,fwp_min_hz:40,fwp_max_hz:60,fan_adj_cycle:60,fan_adj_hz:5,fan_min_hz:40,fan_max_hz:60,swp_1p_time:120,swp_2p_time:240,swp_op_time:1,swp_speed_limit:300,fwp_1p_chg_time:180,meg_load_lmt1:30,meg_load_lmt2:20}),[l,r]=b.useState(!1),o=(d,u)=>{i(m=>({...m,[d]:parseFloat(u)}))},s=async()=>{console.log("저장할 설정:",e),r(!0),setTimeout(()=>r(!1),2e3)};return a.jsxs("div",{className:"settings",children:[a.jsxs("div",{className:"settings-header",children:[a.jsx("h2",{children:"⚙️ 시스템 설정"}),a.jsx("p",{children:"펌프 운전 파라미터 및 제어 설정"})]}),a.jsxs("div",{className:"settings-tabs",children:[a.jsx("button",{className:n==="temp"?"active":"",onClick:()=>t("temp"),children:"🌡️ 온도 설정"}),a.jsx("button",{className:n==="vfd"?"active":"",onClick:()=>t("vfd"),children:"⚡ VFD 설정"}),a.jsx("button",{className:n==="operation"?"active":"",onClick:()=>t("operation"),children:"🔧 운전 설정"}),a.jsx("button",{className:n==="departure"?"active":"",onClick:()=>t("departure"),children:"🚢 출항 모드"}),a.jsx("button",{className:n==="system"?"active":"",onClick:()=>t("system"),children:"💻 시스템"})]}),a.jsxs("div",{className:"settings-content",children:[n==="temp"&&a.jsx(Ja,{settings:e,onChange:o}),n==="vfd"&&a.jsx(qa,{settings:e,onChange:o}),n==="operation"&&a.jsx(n7,{settings:e,onChange:o}),n==="departure"&&a.jsx(t7,{settings:e,onChange:o}),n==="system"&&a.jsx(e7,{})]}),a.jsxs("div",{className:"settings-footer",children:[a.jsx("button",{className:"btn-save",onClick:s,children:"💾 설정 저장"}),l&&a.jsx("span",{className:"save-success",children:"✅ 저장 완료!"})]})]})}function Ja({settings:n,onChange:t}){return a.jsxs("div",{className:"settings-section",children:[a.jsx("h3",{children:"🌊 해수 펌프 온도(TX5) 설정"}),a.jsxs("div",{className:"settings-grid",children:[a.jsx(F,{label:"운전 온도",value:n.swp_op_temp,unit:"°C",onChange:e=>t("swp_op_temp",e),min:-30,max:100}),a.jsx(F,{label:"저온 온도",value:n.swp_lo_temp,unit:"°C",onChange:e=>t("swp_lo_temp",e),min:-30,max:100}),a.jsx(F,{label:"고온 온도",value:n.swp_hi_temp,unit:"°C",onChange:e=>t("swp_hi_temp",e),min:-30,max:100}),a.jsx(F,{label:"온도 제한",value:n.swp_temp_limit,unit:"°C",onChange:e=>t("swp_temp_limit",e),min:-30,max:100}),a.jsx(F,{label:"압력 설정",value:n.swp_prs,unit:"kg/cm²",onChange:e=>t("swp_prs",e),min:0,max:10,step:.1})]}),a.jsx("h3",{children:"💧 청수 펌프 온도(TX4) 설정"}),a.jsxs("div",{className:"settings-grid",children:[a.jsxs("div",{className:"settings-subsection",children:[a.jsx("h4",{children:"펌프 1대 운전시"}),a.jsx(F,{label:"운전 온도",value:n.fwp_1p_op_temp,unit:"°C",onChange:e=>t("fwp_1p_op_temp",e)}),a.jsx(F,{label:"저온 온도",value:n.fwp_1p_lo_temp,unit:"°C",onChange:e=>t("fwp_1p_lo_temp",e)}),a.jsx(F,{label:"고온 온도",value:n.fwp_1p_hi_temp,unit:"°C",onChange:e=>t("fwp_1p_hi_temp",e)})]}),a.jsxs("div",{className:"settings-subsection",children:[a.jsx("h4",{children:"펌프 2대 운전시"}),a.jsx(F,{label:"운전 온도",value:n.fwp_2p_op_temp,unit:"°C",onChange:e=>t("fwp_2p_op_temp",e)}),a.jsx(F,{label:"저온 온도",value:n.fwp_2p_lo_temp,unit:"°C",onChange:e=>t("fwp_2p_lo_temp",e)}),a.jsx(F,{label:"고온 온도",value:n.fwp_2p_hi_temp,unit:"°C",onChange:e=>t("fwp_2p_hi_temp",e)})]})]})]})}function qa({settings:n,onChange:t}){return a.jsxs("div",{className:"settings-section",children:[a.jsx("h3",{children:"🌊 해수 펌프 VFD 설정"}),a.jsxs("div",{className:"settings-grid",children:[a.jsx(F,{label:"조정 주기",value:n.swp_adj_cycle,unit:"초",onChange:e=>t("swp_adj_cycle",e),min:1,max:300}),a.jsx(F,{label:"조정 주파수",value:n.swp_adj_hz,unit:"Hz",onChange:e=>t("swp_adj_hz",e),min:1,max:10}),a.jsx(F,{label:"최소 주파수",value:n.swp_min_hz,unit:"Hz",onChange:e=>t("swp_min_hz",e),min:10,max:60}),a.jsx(F,{label:"최대 주파수",value:n.swp_max_hz,unit:"Hz",onChange:e=>t("swp_max_hz",e),min:30,max:60})]}),a.jsx("h3",{children:"💧 청수 펌프 VFD 설정"}),a.jsxs("div",{className:"settings-grid",children:[a.jsx(F,{label:"조정 주기",value:n.fwp_adj_cycle,unit:"초",onChange:e=>t("fwp_adj_cycle",e),min:1,max:300}),a.jsx(F,{label:"조정 주파수",value:n.fwp_adj_hz,unit:"Hz",onChange:e=>t("fwp_adj_hz",e),min:1,max:10}),a.jsx(F,{label:"최소 주파수",value:n.fwp_min_hz,unit:"Hz",onChange:e=>t("fwp_min_hz",e),min:10,max:60}),a.jsx(F,{label:"최대 주파수",value:n.fwp_max_hz,unit:"Hz",onChange:e=>t("fwp_max_hz",e),min:30,max:60})]}),a.jsx("h3",{children:"🌀 E/R Fan VFD 설정"}),a.jsxs("div",{className:"settings-grid",children:[a.jsx(F,{label:"조정 주기",value:n.fan_adj_cycle,unit:"초",onChange:e=>t("fan_adj_cycle",e),min:1,max:300}),a.jsx(F,{label:"조정 주파수",value:n.fan_adj_hz,unit:"Hz",onChange:e=>t("fan_adj_hz",e),min:1,max:10}),a.jsx(F,{label:"최소 주파수",value:n.fan_min_hz,unit:"Hz",onChange:e=>t("fan_min_hz",e),min:10,max:60}),a.jsx(F,{label:"최대 주파수",value:n.fan_max_hz,unit:"Hz",onChange:e=>t("fan_max_hz",e),min:30,max:60})]})]})}function n7({settings:n,onChange:t}){return a.jsxs("div",{className:"settings-section",children:[a.jsx("h3",{children:"🔧 펌프 운전 설정"}),a.jsxs("div",{className:"settings-grid",children:[a.jsx(F,{label:"SWP 1펌프 운전 시간",value:n.swp_1p_time,unit:"분",onChange:e=>t("swp_1p_time",e),min:1,max:1e3}),a.jsx(F,{label:"SWP 2펌프 운전 시간",value:n.swp_2p_time,unit:"분",onChange:e=>t("swp_2p_time",e),min:1,max:1e3}),a.jsx(F,{label:"SWP 운전 순서",value:n.swp_op_time,unit:"",onChange:e=>t("swp_op_time",e),min:1,max:6}),a.jsx(F,{label:"최저속도 운전 시간",value:n.swp_speed_limit,unit:"초",onChange:e=>t("swp_speed_limit",e),min:0,max:600}),a.jsx(F,{label:"FWP 펌프 전환 시간",value:n.fwp_1p_chg_time,unit:"분",onChange:e=>t("fwp_1p_chg_time",e),min:1,max:1e3})]}),a.jsx("h3",{children:"🔥 M/E 부하 설정"}),a.jsxs("div",{className:"settings-grid",children:[a.jsx(F,{label:"M/E 운전 신호 설정",value:n.meg_load_lmt1,unit:"%",onChange:e=>t("meg_load_lmt1",e),min:0,max:100}),a.jsx(F,{label:"출항 모드 해제 설정",value:n.meg_load_lmt2,unit:"%",onChange:e=>t("meg_load_lmt2",e),min:0,max:100})]})]})}function t7({settings:n,onChange:t}){const[e,i]=b.useState(!1);return a.jsxs("div",{className:"settings-section",children:[a.jsx("h3",{children:"🚢 출항 모드 설정"}),a.jsxs("div",{className:"departure-mode-card",children:[a.jsxs("div",{className:"departure-status",children:[a.jsx("span",{className:"status-label",children:"현재 상태:"}),a.jsx("span",{className:`status-badge ${e?"active":"inactive"}`,children:e?"🟢 출항 모드 활성":"⚪ 정상 모드"})]}),a.jsxs("div",{className:"departure-description",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"출항 모드란?"}),a.jsx("br",{}),"선박 출항 시 엔진 부하가 낮을 때 자동으로 ESS 모드로 전환되는 것을 방지합니다."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"해제 조건:"}),a.jsx("br",{}),"M/E 부하가 ",n.meg_load_lmt2,"% 이상일 때 자동으로 정상 모드로 전환됩니다."]})]}),a.jsx("button",{className:`btn-departure ${e?"active":""}`,onClick:()=>i(!e),children:e?"🔓 정상 모드로 전환":"🔒 출항 모드 활성화"})]}),a.jsx("div",{className:"settings-grid",children:a.jsx(F,{label:"M/E 부하 해제 설정",value:n.meg_load_lmt2,unit:"%",onChange:l=>t("meg_load_lmt2",l),min:0,max:100})})]})}function e7(){return a.jsxs("div",{className:"settings-section",children:[a.jsx("h3",{children:"💻 시스템 설정"}),a.jsxs("div",{className:"system-info",children:[a.jsxs("div",{className:"info-card",children:[a.jsx("h4",{children:"🔌 PLC 연결 정보"}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"IP 주소:"}),a.jsx("span",{children:"127.0.0.1"})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"포트:"}),a.jsx("span",{children:"502"})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"프로토콜:"}),a.jsx("span",{children:"Modbus TCP"})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Node ID:"}),a.jsx("span",{children:"3"})]})]}),a.jsxs("div",{className:"info-card",children:[a.jsx("h4",{children:"📊 시스템 정보"}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"버전:"}),a.jsx("span",{children:"1.0.0"})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"화면 해상도:"}),a.jsx("span",{children:"1280 x 1024"})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"업데이트 주기:"}),a.jsx("span",{children:"1초"})]})]}),a.jsxs("div",{className:"info-card",children:[a.jsx("h4",{children:"💾 데이터 저장"}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"데이터 폴더:"}),a.jsx("span",{children:"C:\\HMI_DATA"})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"로그 보관 기간:"}),a.jsx("span",{children:"30일"})]})]})]})]})}function F({label:n,value:t,unit:e,onChange:i,min:l=0,max:r=100,step:o=1}){return a.jsxs("div",{className:"setting-item",children:[a.jsx("label",{children:n}),a.jsxs("div",{className:"setting-input-group",children:[a.jsx("input",{type:"number",value:t,onChange:s=>i(s.target.value),min:l,max:r,step:o}),a.jsx("span",{className:"unit",children:e})]})]})}function i7({equipment:n=[],pumps:t=[],fans:e=[],onCommand:i}){const[l,r]=b.useState("automan"),o=n.length>0?n:t;return a.jsxs("div",{className:"advanced-control",children:[a.jsxs("div",{className:"control-header",children:[a.jsx("h2",{children:"🎛️ 고급 제어"}),a.jsx("p",{children:"자동/수동 전환, PID 제어, VFD 상세 정보"})]}),a.jsxs("div",{className:"control-tabs",children:[a.jsx("button",{className:l==="automan"?"active":"",onClick:()=>r("automan"),children:"🔄 자동/수동"}),a.jsx("button",{className:l==="pid"?"active":"",onClick:()=>r("pid"),children:"📐 PID 제어"}),a.jsx("button",{className:l==="vfdinfo"?"active":"",onClick:()=>r("vfdinfo"),children:"⚡ VFD 정보"})]}),a.jsxs("div",{className:"control-content",children:[l==="automan"&&a.jsx(l7,{equipment:o,pumps:t,fans:e,onCommand:i}),l==="pid"&&a.jsx(r7,{}),l==="vfdinfo"&&a.jsx(a7,{equipment:o})]})]})}function l7({equipment:n=[],pumps:t=[],fans:e=[],onCommand:i}){const l=n.length>0?n:t,[r,o]=b.useState({SWP1:{auto:!0,vfd:!0},SWP2:{auto:!0,vfd:!0},SWP3:{auto:!0,vfd:!0},FWP1:{auto:!0,vfd:!0},FWP2:{auto:!0,vfd:!0},FWP3:{auto:!0,vfd:!0},FAN1:{auto:!0,vfd:!0},FAN2:{auto:!0,vfd:!0},FAN3:{auto:!0,vfd:!0},FAN4:{auto:!0,vfd:!0}});b.useEffect(()=>{if(l.length>0){const d={};l.forEach(u=>{d[u.name]={auto:u.auto_mode!==void 0?u.auto_mode:!0,vfd:u.vfd_mode!==void 0?u.vfd_mode:!0}}),o(d),console.log("🔄 모드 상태 동기화:",d)}},[l]);const s=async(d,u,m)=>{if(o(g=>({...g,[d]:{...g[d],[u]:m}})),i){let g="";u==="auto"?g=m?"auto":"manual":u==="vfd"&&(g=m?"vfd":"bypass"),console.log(`🔧 모드 변경: ${d} ${g}`),await i(d,g)?console.log(`✅ ${d} ${g} 모드 설정 완료`):(console.error(`❌ ${d} ${g} 모드 설정 실패`),o(y=>({...y,[d]:{...y[d],[u]:!m}})))}};return a.jsxs("div",{className:"automan-section",children:[a.jsxs("div",{className:"automan-description",children:[a.jsx("h3",{children:"🔄 운전 모드 설정"}),a.jsx("p",{children:"각 장비의 운전 모드(자동/수동)와 VFD 모드를 설정할 수 있습니다."})]}),a.jsxs("div",{className:"pump-mode-section",children:[a.jsx("h4",{children:"🌊 해수 펌프 (Sea Water Pump)"}),a.jsx("div",{className:"mode-grid",children:l.slice(0,3).map((d,u)=>a.jsx(Jl,{equipment:d,modes:r[d.name],onSetMode:(m,g)=>s(d.name,m,g)},u))})]}),a.jsxs("div",{className:"pump-mode-section",children:[a.jsx("h4",{children:"💧 청수 펌프 (Fresh Water Pump)"}),a.jsx("div",{className:"mode-grid",children:l.slice(3,6).map((d,u)=>a.jsx(Jl,{equipment:d,modes:r[d.name],onSetMode:(m,g)=>s(d.name,m,g)},u))})]}),a.jsxs("div",{className:"pump-mode-section",children:[a.jsx("h4",{children:"🌀 Engine Room 팬 (E/R Fan)"}),a.jsx("div",{className:"mode-grid",children:l.slice(6,10).map((d,u)=>a.jsx(Jl,{equipment:d,modes:r[d.name],onSetMode:(m,g)=>s(d.name,m,g),isFan:!0},u))})]})]})}function Jl({equipment:n,modes:t,onSetMode:e,isFan:i=!1}){var r;const l=i?n.running_fwd||n.running_bwd:n.running;return a.jsxs("div",{className:"pump-mode-card",children:[a.jsxs("div",{className:"mode-card-header",children:[a.jsx("h5",{children:n.name}),a.jsx("span",{className:`status-dot ${l?"running":"stopped"}`})]}),a.jsxs("div",{className:"mode-switches",children:[a.jsxs("div",{className:"mode-switch",children:[a.jsx("span",{className:"switch-label",children:"운전 모드"}),a.jsxs("div",{className:"switch-buttons",children:[a.jsx("button",{className:t!=null&&t.auto?"active":"",onClick:()=>e("auto",!0),children:"🤖 자동"}),a.jsx("button",{className:t!=null&&t.auto?"":"active",onClick:()=>e("auto",!1),children:"👤 수동"})]})]}),a.jsxs("div",{className:"mode-switch",children:[a.jsx("span",{className:"switch-label",children:"VFD 모드"}),a.jsxs("div",{className:"switch-buttons",children:[a.jsx("button",{className:t!=null&&t.vfd?"active":"",onClick:()=>e("vfd",!0),children:"⚡ VFD"}),a.jsx("button",{className:t!=null&&t.vfd?"":"active",onClick:()=>e("vfd",!1),children:"🔌 Bypass"})]})]})]}),a.jsxs("div",{className:"mode-info",children:[a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"주파수:"}),a.jsxs("span",{children:[((r=n.frequency)==null?void 0:r.toFixed(1))||0," Hz"]})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"전력:"}),a.jsxs("span",{children:[n.power_kw||0," kW"]})]}),i&&a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"방향:"}),a.jsx("span",{children:n.running_fwd?"정방향":n.running_bwd?"역방향":"정지"})]})]})]})}function r7(){const[n,t]=b.useState({swp_kp:1,swp_ki:.1,swp_kd:.05,swp_setpoint:30,fwp_kp:1,fwp_ki:.1,fwp_kd:.05,fwp_setpoint:75}),e=(i,l)=>{t(r=>({...r,[i]:parseFloat(l)}))};return a.jsxs("div",{className:"pid-section",children:[a.jsxs("div",{className:"pid-description",children:[a.jsx("h3",{children:"📐 PID 제어 파라미터"}),a.jsx("p",{children:"온도 제어를 위한 PID 게인값을 설정합니다."}),a.jsxs("div",{className:"pid-formula",children:[a.jsx("strong",{children:"제어식:"})," Output = Kp × e(t) + Ki × ∫e(t)dt + Kd × de(t)/dt"]})]}),a.jsxs("div",{className:"pid-controller-section",children:[a.jsx("h4",{children:"🌊 해수 펌프 PID 파라미터"}),a.jsxs("div",{className:"pid-grid",children:[a.jsx(it,{label:"비례 게인 (Kp)",value:n.swp_kp,onChange:i=>e("swp_kp",i),min:0,max:10,step:.1}),a.jsx(it,{label:"적분 게인 (Ki)",value:n.swp_ki,onChange:i=>e("swp_ki",i),min:0,max:5,step:.01}),a.jsx(it,{label:"미분 게인 (Kd)",value:n.swp_kd,onChange:i=>e("swp_kd",i),min:0,max:1,step:.01}),a.jsx(it,{label:"목표값 (Setpoint)",value:n.swp_setpoint,onChange:i=>e("swp_setpoint",i),min:-30,max:100,step:.5,unit:"°C"})]})]}),a.jsxs("div",{className:"pid-controller-section",children:[a.jsx("h4",{children:"💧 청수 펌프 PID 파라미터"}),a.jsxs("div",{className:"pid-grid",children:[a.jsx(it,{label:"비례 게인 (Kp)",value:n.fwp_kp,onChange:i=>e("fwp_kp",i),min:0,max:10,step:.1}),a.jsx(it,{label:"적분 게인 (Ki)",value:n.fwp_ki,onChange:i=>e("fwp_ki",i),min:0,max:5,step:.01}),a.jsx(it,{label:"미분 게인 (Kd)",value:n.fwp_kd,onChange:i=>e("fwp_kd",i),min:0,max:1,step:.01}),a.jsx(it,{label:"목표값 (Setpoint)",value:n.fwp_setpoint,onChange:i=>e("fwp_setpoint",i),min:0,max:100,step:.5,unit:"°C"})]})]}),a.jsx("div",{className:"pid-footer",children:a.jsx("button",{className:"btn-apply",children:"💾 PID 파라미터 적용"})})]})}function it({label:n,value:t,onChange:e,min:i,max:l,step:r,unit:o=""}){return a.jsxs("div",{className:"pid-parameter",children:[a.jsx("label",{children:n}),a.jsxs("div",{className:"pid-input-group",children:[a.jsx("input",{type:"number",value:t,onChange:s=>e(s.target.value),min:i,max:l,step:r}),o&&a.jsx("span",{className:"unit",children:o})]}),a.jsx("input",{type:"range",value:t,onChange:s=>e(s.target.value),min:i,max:l,step:r,className:"pid-slider"})]})}function a7({equipment:n=[]}){const[t,e]=b.useState(0);return a.jsxs("div",{className:"vfdinfo-section",children:[a.jsxs("div",{className:"vfdinfo-description",children:[a.jsx("h3",{children:"⚡ VFD 상세 정보"}),a.jsx("p",{children:"각 장비의 VFD(인버터) 상세 운전 정보를 확인합니다."})]}),a.jsx("div",{className:"pump-selector",children:n.slice(0,6).map((i,l)=>a.jsx("button",{className:`pump-select-btn ${t===l?"active":""}`,onClick:()=>e(l),children:i.name},l))}),a.jsx("div",{className:"pump-selector",style:{marginTop:"0.5rem"},children:n.slice(6,10).map((i,l)=>a.jsx("button",{className:`pump-select-btn ${t===l+6?"active":""}`,onClick:()=>e(l+6),children:i.name},l+6))}),n[t]&&a.jsx(o7,{equipment:n[t],isFan:t>=6})]})}function o7({equipment:n,isFan:t=!1}){var i,l,r,o;const e=t?n.running_fwd||n.running_bwd:n.running;return a.jsxs("div",{className:"vfd-detail-card",children:[a.jsxs("div",{className:"vfd-header",children:[a.jsxs("h4",{children:[n.name," VFD 상세 정보"]}),a.jsx("span",{className:`vfd-status ${e?"running":"stopped"}`,children:t?n.running_fwd?"🟢 정방향 운전중":n.running_bwd?"🟡 역방향 운전중":"⚪ 정지":n.running?"🟢 운전중":"⚪ 정지"})]}),a.jsxs("div",{className:"vfd-info-grid",children:[a.jsxs("div",{className:"vfd-info-section",children:[a.jsx("h5",{children:"📊 운전 데이터"}),a.jsx(Y,{label:"현재 주파수",value:`${((i=n.frequency)==null?void 0:i.toFixed(1))||0} Hz`}),a.jsx(Y,{label:"출력 주파수",value:`${((l=n.frequency)==null?void 0:l.toFixed(1))||0} Hz`}),a.jsx(Y,{label:"목표 주파수",value:"60.0 Hz"}),a.jsx(Y,{label:"현재 전류",value:`${(n.power_kw*2.5).toFixed(1)} A`}),a.jsx(Y,{label:"출력 전압",value:"440 V"}),t&&a.jsx(Y,{label:"운전 방향",value:n.running_fwd?"정방향 (FWD)":n.running_bwd?"역방향 (BWD)":"정지"})]}),a.jsxs("div",{className:"vfd-info-section",children:[a.jsx("h5",{children:"⚡ 전력 데이터"}),a.jsx(Y,{label:"순시 전력",value:`${n.power_kw||0} kW`}),a.jsx(Y,{label:"평균 전력",value:`${n.avg_power||0} kW`}),a.jsx(Y,{label:"역률",value:"0.95"}),a.jsx(Y,{label:"효율",value:"94.5 %"}),a.jsx(Y,{label:"절감률",value:`${n.saved_ratio||0} %`,highlight:!0})]}),a.jsxs("div",{className:"vfd-info-section",children:[a.jsx("h5",{children:"🕐 운전 시간"}),a.jsx(Y,{label:"ESS 운전 시간",value:`${((r=n.run_hours)==null?void 0:r.toLocaleString())||0} h`}),a.jsx(Y,{label:"총 운전 시간",value:`${(n.run_hours*1.5).toLocaleString()||0} h`}),a.jsx(Y,{label:"절감 전력량",value:`${((o=n.saved_kwh)==null?void 0:o.toLocaleString())||0} kWh`,highlight:!0})]}),a.jsxs("div",{className:"vfd-info-section",children:[a.jsx("h5",{children:"🛡️ 상태 정보"}),a.jsx(Y,{label:"운전 모드",value:n.ess_mode?"ESS 모드":"일반 모드"}),a.jsx(Y,{label:"제어 모드",value:"자동"}),a.jsx(Y,{label:"VFD 온도",value:"42 °C"}),a.jsx(Y,{label:"모터 온도",value:"38 °C"}),a.jsx(Y,{label:"알람 상태",value:"정상",success:!0})]})]})]})}function Y({label:n,value:t,highlight:e,success:i}){return a.jsxs("div",{className:"vfd-info-row",children:[a.jsx("span",{className:"vfd-label",children:n}),a.jsx("span",{className:`vfd-value ${e?"highlight":""} ${i?"success":""}`,children:t})]})}function s7(){const[n,t]=b.useState("alarms"),e=[{id:1,time:"2025-10-18 14:30:15",level:"warning",message:"NO.1 SWP VFD Communication error",acknowledged:!0},{id:2,time:"2025-10-18 12:15:23",level:"critical",message:"PLC FAULT",acknowledged:!0},{id:3,time:"2025-10-18 10:45:10",level:"info",message:"System Start",acknowledged:!0},{id:4,time:"2025-10-17 18:20:05",level:"warning",message:"CSW PP DISC TEMP SENSOR FAULT",acknowledged:!0}],i=[{id:1,time:"2025-10-18 14:35:20",type:"control",user:"Admin",message:"SWP1 시작 명령"},{id:2,time:"2025-10-18 14:30:15",type:"alarm",user:"System",message:"VFD 통신 오류 발생"},{id:3,time:"2025-10-18 13:45:30",type:"setting",user:"Admin",message:"온도 설정값 변경: 30°C → 32°C"},{id:4,time:"2025-10-18 12:00:00",type:"system",user:"System",message:"자동 리포트 생성"}];return a.jsxs("div",{className:"history",children:[a.jsxs("div",{className:"history-header",children:[a.jsx("h2",{children:"📋 이력 관리"}),a.jsx("p",{children:"알람 이력, 이벤트 로그, 운전 이력 조회"})]}),a.jsxs("div",{className:"history-tabs",children:[a.jsx("button",{className:n==="alarms"?"active":"",onClick:()=>t("alarms"),children:"🔔 알람 이력"}),a.jsx("button",{className:n==="events"?"active":"",onClick:()=>t("events"),children:"📝 이벤트 로그"}),a.jsx("button",{className:n==="operation"?"active":"",onClick:()=>t("operation"),children:"⚙️ 운전 이력"})]}),a.jsxs("div",{className:"history-content",children:[n==="alarms"&&a.jsx(d7,{data:e}),n==="events"&&a.jsx(p7,{data:i}),n==="operation"&&a.jsx(h7,{})]})]})}function d7({data:n}){const[t,e]=b.useState("all"),[i,l]=b.useState(""),r=n.filter(o=>!(t!=="all"&&o.level!==t||i&&!o.message.toLowerCase().includes(i.toLowerCase())));return a.jsxs("div",{className:"alarm-history",children:[a.jsxs("div",{className:"history-controls",children:[a.jsxs("div",{className:"filter-group",children:[a.jsx("label",{children:"필터:"}),a.jsxs("select",{value:t,onChange:o=>e(o.target.value),children:[a.jsx("option",{value:"all",children:"전체"}),a.jsx("option",{value:"critical",children:"위험"}),a.jsx("option",{value:"warning",children:"경고"}),a.jsx("option",{value:"info",children:"정보"})]})]}),a.jsx("div",{className:"search-group",children:a.jsx("input",{type:"text",placeholder:"🔍 알람 검색...",value:i,onChange:o=>l(o.target.value)})}),a.jsx("button",{className:"btn-export",children:"📥 CSV 내보내기"})]}),a.jsx("div",{className:"history-table",children:a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"시간"}),a.jsx("th",{children:"등급"}),a.jsx("th",{children:"메시지"}),a.jsx("th",{children:"확인"})]})}),a.jsx("tbody",{children:r.map(o=>a.jsxs("tr",{children:[a.jsx("td",{children:o.time}),a.jsx("td",{children:a.jsxs("span",{className:`level-badge ${o.level}`,children:[o.level==="critical"&&"🔴 위험",o.level==="warning"&&"🟡 경고",o.level==="info"&&"🟢 정보"]})}),a.jsx("td",{children:o.message}),a.jsx("td",{children:a.jsx("span",{className:`ack-badge ${o.acknowledged?"ack":"unack"}`,children:o.acknowledged?"✅ 확인됨":"⏳ 대기중"})})]},o.id))})]})}),a.jsxs("div",{className:"history-summary",children:[a.jsxs("div",{className:"summary-item",children:[a.jsx("span",{className:"summary-label",children:"총 알람:"}),a.jsxs("span",{className:"summary-value",children:[n.length,"건"]})]}),a.jsxs("div",{className:"summary-item",children:[a.jsx("span",{className:"summary-label",children:"위험:"}),a.jsxs("span",{className:"summary-value critical",children:[n.filter(o=>o.level==="critical").length,"건"]})]}),a.jsxs("div",{className:"summary-item",children:[a.jsx("span",{className:"summary-label",children:"경고:"}),a.jsxs("span",{className:"summary-value warning",children:[n.filter(o=>o.level==="warning").length,"건"]})]})]})]})}function p7({data:n}){const[t,e]=b.useState("all"),i=n.filter(r=>!(t!=="all"&&r.type!==t)),l=r=>{switch(r){case"control":return"🎮";case"alarm":return"🔔";case"setting":return"⚙️";case"system":return"💻";default:return"📝"}};return a.jsxs("div",{className:"event-history",children:[a.jsxs("div",{className:"history-controls",children:[a.jsxs("div",{className:"filter-group",children:[a.jsx("label",{children:"이벤트 유형:"}),a.jsxs("select",{value:t,onChange:r=>e(r.target.value),children:[a.jsx("option",{value:"all",children:"전체"}),a.jsx("option",{value:"control",children:"제어"}),a.jsx("option",{value:"alarm",children:"알람"}),a.jsx("option",{value:"setting",children:"설정"}),a.jsx("option",{value:"system",children:"시스템"})]})]}),a.jsx("button",{className:"btn-export",children:"📥 CSV 내보내기"})]}),a.jsx("div",{className:"event-list",children:i.map(r=>a.jsxs("div",{className:"event-item",children:[a.jsx("div",{className:"event-icon",children:l(r.type)}),a.jsxs("div",{className:"event-content",children:[a.jsxs("div",{className:"event-header",children:[a.jsx("span",{className:"event-time",children:r.time}),a.jsx("span",{className:"event-user",children:r.user})]}),a.jsx("div",{className:"event-message",children:r.message})]})]},r.id))})]})}function h7(){const n=[{pump:"SWP1",date:"2025-10-18",runtime:18.5,energy:125,saved:45},{pump:"SWP2",date:"2025-10-18",runtime:5.5,energy:38,saved:12},{pump:"FWP1",date:"2025-10-18",runtime:22,energy:156,saved:58}];return a.jsxs("div",{className:"operation-history",children:[a.jsxs("div",{className:"history-controls",children:[a.jsxs("div",{className:"date-range",children:[a.jsx("label",{children:"조회 기간:"}),a.jsx("input",{type:"date",defaultValue:"2025-10-18"}),a.jsx("span",{children:"~"}),a.jsx("input",{type:"date",defaultValue:"2025-10-18"})]}),a.jsx("button",{className:"btn-search",children:"🔍 조회"}),a.jsx("button",{className:"btn-export",children:"📥 리포트 생성"})]}),a.jsx("div",{className:"operation-table",children:a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"펌프"}),a.jsx("th",{children:"날짜"}),a.jsx("th",{children:"운전 시간"}),a.jsx("th",{children:"소비 전력"}),a.jsx("th",{children:"절감 전력"}),a.jsx("th",{children:"절감률"})]})}),a.jsx("tbody",{children:n.map((t,e)=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:t.pump})}),a.jsx("td",{children:t.date}),a.jsxs("td",{children:[t.runtime," h"]}),a.jsxs("td",{children:[t.energy," kWh"]}),a.jsxs("td",{className:"highlight",children:[t.saved," kWh"]}),a.jsxs("td",{className:"highlight",children:[(t.saved/t.energy*100).toFixed(1),"%"]})]},e))}),a.jsx("tfoot",{children:a.jsxs("tr",{className:"total-row",children:[a.jsx("td",{colSpan:"2",children:a.jsx("strong",{children:"합계"})}),a.jsx("td",{children:a.jsxs("strong",{children:[n.reduce((t,e)=>t+e.runtime,0)," h"]})}),a.jsx("td",{children:a.jsxs("strong",{children:[n.reduce((t,e)=>t+e.energy,0)," kWh"]})}),a.jsx("td",{className:"highlight",children:a.jsxs("strong",{children:[n.reduce((t,e)=>t+e.saved,0)," kWh"]})}),a.jsx("td",{className:"highlight",children:a.jsx("strong",{children:"36.1%"})})]})})]})}),a.jsxs("div",{className:"operation-chart",children:[a.jsx("h4",{children:"📊 일별 절감 전력 추이"}),a.jsx("div",{className:"chart-placeholder",children:a.jsx("p",{children:"차트는 실제 데이터가 누적되면 표시됩니다"})})]})]})}function u7(){const[n,t]=b.useState({}),[e,i]=b.useState([]),[l,r]=b.useState([]),[o,s]=b.useState([]),[d,u]=b.useState(!1),[m,g]=b.useState(null),[f,y]=b.useState("dashboard");b.useEffect(()=>(k(),()=>{m&&m.close()}),[]);const k=()=>{const p=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.hostname}:8000/ws`;console.log("WebSocket 연결 시도:",p);const c=new WebSocket(p);c.onopen=()=>{console.log("✅ WebSocket 연결 성공"),u(!0)},c.onmessage=z=>{var w,v;try{const _=JSON.parse(z.data);_.type==="realtime_update"&&(t(_.sensors),s(_.equipment||[]),i(_.pumps||((w=_.equipment)==null?void 0:w.slice(0,6))||[]),r(((v=_.equipment)==null?void 0:v.slice(6,10))||[]))}catch(_){console.error("WebSocket 메시지 파싱 오류:",_)}},c.onerror=z=>{console.error("❌ WebSocket 오류:",z),u(!1)},c.onclose=()=>{console.log("WebSocket 연결 종료, 5초 후 재연결..."),u(!1),setTimeout(k,5e3)},g(c)},M=async(h,p)=>{try{console.log(`🔧 장비 명령 전송 시도: equipment=${h}, command=${p}`);const c=await fetch("http://localhost:8000/api/equipment/command",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({equipment_name:h,command:p})});if(console.log(`📡 응답 상태: ${c.status}`),!c.ok){const w=await c.text();return console.error("❌ HTTP 오류:",c.status,w),alert(`명령 전송 실패: ${c.status}`),!1}const z=await c.json();return console.log("📦 응답 데이터:",z),z.success?(console.log(`✅ ${h} ${p} 명령 성공`),!0):(console.error("❌ 장비 명령 실패:",z),alert("명령 전송 실패"),!1)}catch(c){return console.error("❌ 장비 명령 오류:",c),alert(`오류 발생: ${c.message}`),!1}},I=async(h,p)=>{const c=["SWP1","SWP2","SWP3","FWP1","FWP2","FWP3"];return h>=0&&h<6?await M(c[h],p):!1};return a.jsxs("div",{className:"app",children:[a.jsxs("header",{className:"app-header",children:[a.jsx("h1",{children:"🚢 ESS HMI - Energy Saving System"}),a.jsxs("div",{className:"status-indicator",children:[a.jsx("span",{className:`status-dot ${d?"connected":"disconnected"}`}),a.jsx("span",{children:d?"PLC 연결됨":"PLC 연결 안됨"})]})]}),a.jsxs("nav",{className:"tab-nav",children:[a.jsx("button",{className:f==="dashboard"?"active":"",onClick:()=>y("dashboard"),children:"📊 대시보드"}),a.jsx("button",{className:f==="diagram"?"active":"",onClick:()=>y("diagram"),children:"🔧 배관 계통도"}),a.jsx("button",{className:f==="fan_diagram"?"active":"",onClick:()=>y("fan_diagram"),children:"🌀 E/R 환기"}),a.jsx("button",{className:f==="control"?"active":"",onClick:()=>y("control"),children:"⚙️ 펌프 제어"}),a.jsx("button",{className:f==="fan"?"active":"",onClick:()=>y("fan"),children:"🌀 팬 제어"}),a.jsx("button",{className:f==="advanced"?"active":"",onClick:()=>y("advanced"),children:"🎛️ 고급 제어"}),a.jsx("button",{className:f==="settings"?"active":"",onClick:()=>y("settings"),children:"⚙️ 설정"}),a.jsx("button",{className:f==="trend"?"active":"",onClick:()=>y("trend"),children:"📈 트렌드"}),a.jsx("button",{className:f==="history"?"active":"",onClick:()=>y("history"),children:"📋 이력"}),a.jsx("button",{className:f==="alarm"?"active":"",onClick:()=>y("alarm"),children:"🔔 알람"})]}),a.jsxs("main",{className:"app-content",children:[f==="dashboard"&&a.jsx($a,{sensors:n,equipment:o,pumps:e,fans:l}),f==="diagram"&&a.jsx(Va,{sensors:n,equipment:o,pumps:e,fans:l,onCommand:M,onPumpCommand:I}),f==="fan_diagram"&&a.jsx(Ka,{sensors:n,fans:l,equipment:o,onCommand:M}),f==="control"&&a.jsx(q1,{pumps:e,onCommand:M,onPumpCommand:I}),f==="fan"&&a.jsx(q1,{pumps:l,isFanMode:!0,onCommand:M}),f==="advanced"&&a.jsx(i7,{equipment:o,pumps:e,fans:l,onCommand:M}),f==="settings"&&a.jsx(Za,{}),f==="trend"&&a.jsx(Ga,{sensors:n,equipment:o,pumps:e,fans:l}),f==="history"&&a.jsx(s7,{}),f==="alarm"&&a.jsx(Ya,{})]}),a.jsxs("footer",{className:"app-footer",children:[a.jsx("span",{children:"© 2025 ESS HMI System"}),a.jsxs("span",{children:["마지막 업데이트: ",new Date().toLocaleTimeString("ko-KR")]})]})]})}ql.createRoot(document.getElementById("root")).render(a.jsx(Cr.StrictMode,{children:a.jsx(u7,{})}));
