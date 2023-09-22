/*! For license information please see 669.0128d742.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[669],{669:function(e,r,t){t.r(r),t.d(r,{default:function(){return rr}});var n=t(413),a=t(439),i=t(297),u=t(791),o=t(787),s=t(433),c=t(942),f=t(762),l=t(861),d=t(925),h=["name"],v=["_f"],p=["_f"];function y(){y=function(){return r};var e,r={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,r,t){e[r]=t.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{c({},"")}catch(e){c=function(e,r,t){return e[r]=t}}function f(e,r,t,n){var i=r&&r.prototype instanceof m?r:m,u=Object.create(i.prototype),o=new j(n||[]);return a(u,"_invoke",{value:A(e,t,o)}),u}function l(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var d="suspendedStart",h="executing",v="completed",p={};function m(){}function g(){}function b(){}var x={};c(x,u,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(L([])));k&&k!==t&&n.call(k,u)&&(x=k);var _=b.prototype=m.prototype=Object.create(x);function Z(e){["next","throw","return"].forEach((function(r){c(e,r,(function(e){return this._invoke(r,e)}))}))}function V(e,r){function t(a,i,u,o){var s=l(e[a],e,i);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(e){t("next",e,u,o)}),(function(e){t("throw",e,u,o)})):r.resolve(f).then((function(e){c.value=e,u(c)}),(function(e){return t("throw",e,u,o)}))}o(s.arg)}var i;a(this,"_invoke",{value:function(e,n){function a(){return new r((function(r,a){t(e,n,r,a)}))}return i=i?i.then(a,a):a()}})}function A(r,t,n){var a=d;return function(i,u){if(a===h)throw new Error("Generator is already running");if(a===v){if("throw"===i)throw u;return{value:e,done:!0}}for(n.method=i,n.arg=u;;){var o=n.delegate;if(o){var s=S(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===d)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=h;var c=l(r,t,n);if("normal"===c.type){if(a=n.done?v:"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=v,n.method="throw",n.arg=c.arg)}}}function S(r,t){var n=t.method,a=r.iterator[n];if(a===e)return t.delegate=null,"throw"===n&&r.iterator.return&&(t.method="return",t.arg=e,S(r,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=l(a,r.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,p;var u=i.arg;return u?u.done?(t[r.resultName]=u.value,t.next=r.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,p):u:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function F(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function D(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function L(r){if(r||""===r){var t=r[u];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var a=-1,i=function t(){for(;++a<r.length;)if(n.call(r,a))return t.value=r[a],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=b,a(_,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:g,configurable:!0}),g.displayName=c(b,s,"GeneratorFunction"),r.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},r.awrap=function(e){return{__await:e}},Z(V.prototype),c(V.prototype,o,(function(){return this})),r.AsyncIterator=V,r.async=function(e,t,n,a,i){void 0===i&&(i=Promise);var u=new V(f(e,t,n,a),i);return r.isGeneratorFunction(t)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},Z(_),c(_,s,"Generator"),c(_,u,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var r=Object(e),t=[];for(var n in r)t.push(n);return t.reverse(),function e(){for(;t.length;){var n=t.pop();if(n in r)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=L,j.prototype={constructor:j,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(D),!r)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var t=this;function a(n,a){return o.type="throw",o.arg=r,t.next=n,a&&(t.method="next",t.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],o=u.completion;if("root"===u.tryLoc)return a("end");if(u.tryLoc<=this.prev){var s=n.call(u,"catchLoc"),c=n.call(u,"finallyLoc");if(s&&c){if(this.prev<u.catchLoc)return a(u.catchLoc,!0);if(this.prev<u.finallyLoc)return a(u.finallyLoc)}else if(s){if(this.prev<u.catchLoc)return a(u.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return a(u.finallyLoc)}}}},abrupt:function(e,r){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=e,u.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(u)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),p},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),D(t),p}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var a=n.arg;D(t)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(r,t,n){return this.delegate={iterator:L(r),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=e),p}},r}var m=function(e){return"checkbox"===e.type},g=function(e){return e instanceof Date},b=function(e){return null==e},x=function(e){return"object"===typeof e},w=function(e){return!b(e)&&!Array.isArray(e)&&x(e)&&!g(e)},k=function(e){return w(e)&&e.target?m(e.target)?e.target.checked:e.target.value:e},_=function(e,r){return e.has(function(e){return e.substring(0,e.search(/\.\d+(\.|$)/))||e}(r))},Z="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document;function V(e){var r,t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else{if(Z&&(e instanceof Blob||e instanceof FileList)||!t&&!w(e))return e;if(r=t?[]:{},t||function(e){var r=e.constructor&&e.constructor.prototype;return w(r)&&r.hasOwnProperty("isPrototypeOf")}(e))for(var n in e)e.hasOwnProperty(n)&&(r[n]=V(e[n]));else r=e}return r}var A=function(e){return Array.isArray(e)?e.filter(Boolean):[]},S=function(e){return void 0===e},F=function(e,r,t){if(!r||!w(e))return t;var n=A(r.split(/[,[\].]+?/)).reduce((function(e,r){return b(e)?e:e[r]}),e);return S(n)||n===e?S(e[r])?t:e[r]:n},D=function(e){return"boolean"===typeof e},j="blur",L="focusout",O="onBlur",E="onChange",N="onSubmit",T="onTouched",C="all",P="max",B="min",U="maxLength",M="minLength",q="pattern",G="required",I="validate",H=(u.createContext(null),function(e,r,t){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a={defaultValues:r._defaultValues},i=function(i){Object.defineProperty(a,i,{get:function(){var a=i;return r._proxyFormState[a]!==C&&(r._proxyFormState[a]=!n||C),t&&(t[a]=!0),e[a]}})};for(var u in e)i(u);return a}),R=function(e){return w(e)&&!Object.keys(e).length},W=function(e,r,t,n){t(e);e.name;var a=(0,d.Z)(e,h);return R(a)||Object.keys(a).length>=Object.keys(r).length||Object.keys(a).find((function(e){return r[e]===(!n||C)}))},Y=function(e){return Array.isArray(e)?e:[e]};function $(e){var r=u.useRef(e);r.current=e,u.useEffect((function(){var t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return function(){t&&t.unsubscribe()}}),[e.disabled])}var z=function(e){return"string"===typeof e},J=function(e,r,t,n,a){return z(e)?(n&&r.watch.add(e),F(t,e,a)):Array.isArray(e)?e.map((function(e){return n&&r.watch.add(e),F(t,e)})):(n&&(r.watchAll=!0),t)};var K=function(e){return/^\w*$/.test(e)},Q=function(e){return A(e.replace(/["|']|\]/g,"").split(/\.|\[/))};function X(e,r,t){for(var n=-1,a=K(r)?[r]:Q(r),i=a.length,u=i-1;++n<i;){var o=a[n],s=t;if(n!==u){var c=e[o];s=w(c)||Array.isArray(c)?c:isNaN(+a[n+1])?{}:[]}e[o]=s,e=e[o]}return e}var ee=function(e,r,t,a,i){return r?(0,n.Z)((0,n.Z)({},t[e]),{},{types:(0,n.Z)((0,n.Z)({},t[e]&&t[e].types?t[e].types:{}),{},(0,c.Z)({},a,i||!0))}):{}},re=function e(r,t,n){var a,i=(0,f.Z)(n||Object.keys(r));try{for(i.s();!(a=i.n()).done;){var u=a.value,o=F(r,u);if(o){var s=o._f,c=(0,d.Z)(o,v);if(s&&t(s.name)){if(s.ref.focus){s.ref.focus();break}if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else w(c)&&e(c,t)}}}catch(l){i.e(l)}finally{i.f()}},te=function(e){return{isOnSubmit:!e||e===N,isOnBlur:e===O,isOnChange:e===E,isOnAll:e===C,isOnTouch:e===T}},ne=function(e,r,t){return!t&&(r.watchAll||r.watch.has(e)||(0,s.Z)(r.watch).some((function(r){return e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))})))},ae=function(e,r,t){var n=A(F(e,t));return X(n,"root",r[t]),X(e,t,n),e},ie=function(e){return"file"===e.type},ue=function(e){return"function"===typeof e},oe=function(e){if(!Z)return!1;var r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},se=function(e){return z(e)},ce=function(e){return"radio"===e.type},fe=function(e){return e instanceof RegExp},le={value:!1,isValid:!1},de={value:!0,isValid:!0},he=function(e){if(Array.isArray(e)){if(e.length>1){var r=e.filter((function(e){return e&&e.checked&&!e.disabled})).map((function(e){return e.value}));return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||""===e[0].value?de:{value:e[0].value,isValid:!0}:de:le}return le},ve={isValid:!1,value:null},pe=function(e){return Array.isArray(e)?e.reduce((function(e,r){return r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:e}),ve):ve};function ye(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"validate";if(se(e)||Array.isArray(e)&&e.every(se)||D(e)&&!e)return{type:t,message:se(e)?e:"",ref:r}}var me=function(e){return w(e)&&!fe(e)?e:{value:e,message:""}},ge=function(){var e=(0,l.Z)(y().mark((function e(r,t,a,i,u){var o,s,c,f,l,d,h,v,p,g,x,k,_,Z,V,A,j,L,O,E,N,T,C,H,W,Y,$,J,K,Q,X,re,te,ne,ae,le,de,ve,ge,be,xe,we,ke,_e,Ze,Ve,Ae,Se;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r._f,s=o.ref,c=o.refs,f=o.required,l=o.maxLength,d=o.minLength,h=o.min,v=o.max,p=o.pattern,g=o.validate,x=o.name,k=o.valueAsNumber,_=o.mount,Z=o.disabled,V=F(t,x),_&&!Z){e.next=4;break}return e.abrupt("return",{});case 4:if(A=c?c[0]:s,j=function(e){i&&A.reportValidity&&(A.setCustomValidity(D(e)?"":e||""),A.reportValidity())},L={},O=ce(s),E=m(s),N=O||E,T=(k||ie(s))&&S(s.value)&&S(V)||oe(s)&&""===s.value||""===V||Array.isArray(V)&&!V.length,C=ee.bind(null,x,a,L),H=function(e,r,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:U,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:M,u=e?r:t;L[x]=(0,n.Z)({type:e?a:i,message:u,ref:s},C(e?a:i,u))},!(u?!Array.isArray(V)||!V.length:f&&(!N&&(T||b(V))||D(V)&&!V||E&&!he(c).isValid||O&&!pe(c).isValid))){e.next=20;break}if(W=se(f)?{value:!!f,message:f}:me(f),Y=W.value,$=W.message,!Y){e.next=20;break}if(L[x]=(0,n.Z)({type:G,message:$,ref:A},C(G,$)),a){e.next=20;break}return j($),e.abrupt("return",L);case 20:if(T||b(h)&&b(v)){e.next=29;break}if(Q=me(v),X=me(h),b(V)||isNaN(V)?(te=s.valueAsDate||new Date(V),ne=function(e){return new Date((new Date).toDateString()+" "+e)},ae="time"==s.type,le="week"==s.type,z(Q.value)&&V&&(J=ae?ne(V)>ne(Q.value):le?V>Q.value:te>new Date(Q.value)),z(X.value)&&V&&(K=ae?ne(V)<ne(X.value):le?V<X.value:te<new Date(X.value))):(re=s.valueAsNumber||(V?+V:V),b(Q.value)||(J=re>Q.value),b(X.value)||(K=re<X.value)),!J&&!K){e.next=29;break}if(H(!!J,Q.message,X.message,P,B),a){e.next=29;break}return j(L[x].message),e.abrupt("return",L);case 29:if(!l&&!d||T||!(z(V)||u&&Array.isArray(V))){e.next=39;break}if(de=me(l),ve=me(d),ge=!b(de.value)&&V.length>+de.value,be=!b(ve.value)&&V.length<+ve.value,!ge&&!be){e.next=39;break}if(H(ge,de.message,ve.message),a){e.next=39;break}return j(L[x].message),e.abrupt("return",L);case 39:if(!p||T||!z(V)){e.next=46;break}if(xe=me(p),we=xe.value,ke=xe.message,!fe(we)||V.match(we)){e.next=46;break}if(L[x]=(0,n.Z)({type:q,message:ke,ref:s},C(q,ke)),a){e.next=46;break}return j(ke),e.abrupt("return",L);case 46:if(!g){e.next=80;break}if(!ue(g)){e.next=59;break}return e.next=50,g(V,t);case 50:if(_e=e.sent,!(Ze=ye(_e,A))){e.next=57;break}if(L[x]=(0,n.Z)((0,n.Z)({},Ze),C(I,Ze.message)),a){e.next=57;break}return j(Ze.message),e.abrupt("return",L);case 57:e.next=80;break;case 59:if(!w(g)){e.next=80;break}Ve={},e.t0=y().keys(g);case 62:if((e.t1=e.t0()).done){e.next=76;break}if(Ae=e.t1.value,R(Ve)||a){e.next=66;break}return e.abrupt("break",76);case 66:return e.t2=ye,e.next=69,g[Ae](V,t);case 69:e.t3=e.sent,e.t4=A,e.t5=Ae,(Se=(0,e.t2)(e.t3,e.t4,e.t5))&&(Ve=(0,n.Z)((0,n.Z)({},Se),C(Ae,Se.message)),j(Se.message),a&&(L[x]=Ve)),e.next=62;break;case 76:if(R(Ve)){e.next=80;break}if(L[x]=(0,n.Z)({ref:A},Ve),a){e.next=80;break}return e.abrupt("return",L);case 80:return j(!0),e.abrupt("return",L);case 82:case"end":return e.stop()}}),e)})));return function(r,t,n,a,i){return e.apply(this,arguments)}}();function be(e,r){var t=Array.isArray(r)?r:K(r)?[r]:Q(r),n=1===t.length?e:function(e,r){for(var t=r.slice(0,-1).length,n=0;n<t;)e=S(e)?n++:e[r[n++]];return e}(e,t),a=t.length-1,i=t[a];return n&&delete n[i],0!==a&&(w(n)&&R(n)||Array.isArray(n)&&function(e){for(var r in e)if(e.hasOwnProperty(r)&&!S(e[r]))return!1;return!0}(n))&&be(e,t.slice(0,-1)),e}function xe(){var e=[];return{get observers(){return e},next:function(r){var t,n=(0,f.Z)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.next&&a.next(r)}}catch(i){n.e(i)}finally{n.f()}},subscribe:function(r){return e.push(r),{unsubscribe:function(){e=e.filter((function(e){return e!==r}))}}},unsubscribe:function(){e=[]}}}var we=function(e){return b(e)||!x(e)};function ke(e,r){if(we(e)||we(r))return e===r;if(g(e)&&g(r))return e.getTime()===r.getTime();var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var a=0,i=t;a<i.length;a++){var u=i[a],o=e[u];if(!n.includes(u))return!1;if("ref"!==u){var s=r[u];if(g(o)&&g(s)||w(o)&&w(s)||Array.isArray(o)&&Array.isArray(s)?!ke(o,s):o!==s)return!1}}return!0}var _e=function(e){return"select-multiple"===e.type},Ze=function(e){return ce(e)||m(e)},Ve=function(e){return oe(e)&&e.isConnected},Ae=function(e){for(var r in e)if(ue(e[r]))return!0;return!1};function Se(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Array.isArray(e);if(w(e)||t)for(var n in e)Array.isArray(e[n])||w(e[n])&&!Ae(e[n])?(r[n]=Array.isArray(e[n])?[]:{},Se(e[n],r[n])):b(e[n])||(r[n]=!0);return r}function Fe(e,r,t){var a=Array.isArray(e);if(w(e)||a)for(var i in e)Array.isArray(e[i])||w(e[i])&&!Ae(e[i])?S(r)||we(t[i])?t[i]=Array.isArray(e[i])?Se(e[i],[]):(0,n.Z)({},Se(e[i])):Fe(e[i],b(r)?{}:r[i],t[i]):t[i]=!ke(e[i],r[i]);return t}var De=function(e,r){return Fe(e,r,Se(r))},je=function(e,r){var t=r.valueAsNumber,n=r.valueAsDate,a=r.setValueAs;return S(e)?e:t?""===e?NaN:e?+e:e:n&&z(e)?new Date(e):a?a(e):e};function Le(e){var r=e.ref;if(!(e.refs?e.refs.every((function(e){return e.disabled})):r.disabled))return ie(r)?r.files:ce(r)?pe(e.refs).value:_e(r)?(0,s.Z)(r.selectedOptions).map((function(e){return e.value})):m(r)?he(e.refs).value:je(S(r.value)?e.ref.value:r.value,e)}var Oe=function(e,r,t,n){var a,i={},u=(0,f.Z)(e);try{for(u.s();!(a=u.n()).done;){var o=a.value,c=F(r,o);c&&X(i,o,c._f)}}catch(l){u.e(l)}finally{u.f()}return{criteriaMode:t,names:(0,s.Z)(e),fields:i,shouldUseNativeValidation:n}},Ee=function(e){return S(e)?e:fe(e)?e.source:w(e)?fe(e.value)?e.value.source:e.value:e},Ne=function(e){return e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate)};function Te(e,r,t){var n=F(e,t);if(n||K(t))return{error:n,name:t};for(var a=t.split(".");a.length;){var i=a.join("."),u=F(r,i),o=F(e,i);if(u&&!Array.isArray(u)&&t!==i)return{name:t};if(o&&o.type)return{name:i,error:o};a.pop()}return{name:t}}var Ce=function(e,r,t,n,a){return!a.isOnAll&&(!t&&a.isOnTouch?!(r||e):(t?n.isOnBlur:a.isOnBlur)?!e:!(t?n.isOnChange:a.isOnChange)||e)},Pe=function(e,r){return!A(F(e,r)).length&&be(e,r)},Be={mode:N,reValidateMode:E,shouldFocusError:!0};function Ue(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=(0,n.Z)((0,n.Z)({},Be),r),i={submitCount:0,isDirty:!1,isLoading:ue(a.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},u={},o=(w(a.defaultValues)||w(a.values))&&V(a.defaultValues||a.values)||{},h=a.shouldUnregister?{}:V(o),v={action:!1,mount:!1,watch:!1},x={mount:new Set,unMount:new Set,array:new Set,watch:new Set},O=0,E={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},N={values:xe(),array:xe(),state:xe()},T=r.resetOptions&&r.resetOptions.keepDirtyValues,P=te(a.mode),B=te(a.reValidateMode),U=a.criteriaMode===C,M=function(e){return function(r){clearTimeout(O),O=setTimeout(e,r)}},q=function(){var e=(0,l.Z)(y().mark((function e(r){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E.isValid&&!r){e.next=14;break}if(!a.resolver){e.next=9;break}return e.t1=R,e.next=5,Q();case 5:e.t2=e.sent.errors,e.t0=(0,e.t1)(e.t2),e.next=12;break;case 9:return e.next=11,se(u,!0);case 11:e.t0=e.sent;case 12:(t=e.t0)!==i.isValid&&N.state.next({isValid:t});case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),G=function(e){return E.isValidating&&N.state.next({isValidating:e})},I=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(n&&t){if(v.action=!0,s&&Array.isArray(F(u,e))){var c=t(F(u,e),n.argA,n.argB);a&&X(u,e,c)}if(s&&Array.isArray(F(i.errors,e))){var f=t(F(i.errors,e),n.argA,n.argB);a&&X(i.errors,e,f),Pe(i.errors,e)}if(E.touchedFields&&s&&Array.isArray(F(i.touchedFields,e))){var l=t(F(i.touchedFields,e),n.argA,n.argB);a&&X(i.touchedFields,e,l)}E.dirtyFields&&(i.dirtyFields=De(o,h)),N.state.next({name:e,isDirty:fe(e,r),dirtyFields:i.dirtyFields,errors:i.errors,isValid:i.isValid})}else X(h,e,r)},H=function(e,r){X(i.errors,e,r),N.state.next({errors:i.errors})},W=function(e,r,t,n){var a=F(u,e);if(a){var i=F(h,e,S(t)?F(o,e):t);S(i)||n&&n.defaultChecked||r?X(h,e,r?i:Le(a._f)):he(e,i),v.mount&&q()}},$=function(e,r,t,n,a){var u=!1,s=!1,c={name:e};if(!t||n){E.isDirty&&(s=i.isDirty,i.isDirty=c.isDirty=fe(),u=s!==c.isDirty);var f=ke(F(o,e),r);s=F(i.dirtyFields,e),f?be(i.dirtyFields,e):X(i.dirtyFields,e,!0),c.dirtyFields=i.dirtyFields,u=u||E.dirtyFields&&s!==!f}if(t){var l=F(i.touchedFields,e);l||(X(i.touchedFields,e,t),c.touchedFields=i.touchedFields,u=u||E.touchedFields&&l!==t)}return u&&a&&N.state.next(c),u?c:{}},K=function(t,a,u,o){var s=F(i.errors,t),c=E.isValid&&D(a)&&i.isValid!==a;if(r.delayError&&u?(e=M((function(){return H(t,u)})))(r.delayError):(clearTimeout(O),e=null,u?X(i.errors,t,u):be(i.errors,t)),(u?!ke(s,u):s)||!R(o)||c){var f=(0,n.Z)((0,n.Z)((0,n.Z)({},o),c&&D(a)?{isValid:a}:{}),{},{errors:i.errors,name:t});i=(0,n.Z)((0,n.Z)({},i),f),N.state.next(f)}G(!1)},Q=function(){var e=(0,l.Z)(y().mark((function e(r){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.resolver(h,a.context,Oe(r||x.mount,u,a.criteriaMode,a.shouldUseNativeValidation)));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),ee=function(){var e=(0,l.Z)(y().mark((function e(r){var t,n,a,u,o,s;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(r);case 2:if(t=e.sent,n=t.errors,r){a=(0,f.Z)(r);try{for(a.s();!(u=a.n()).done;)o=u.value,(s=F(n,o))?X(i.errors,o,s):be(i.errors,o)}catch(c){a.e(c)}finally{a.f()}}else i.errors=n;return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),se=function(){var e=(0,l.Z)(y().mark((function e(r,t){var n,u,o,s,c,f,l,v=arguments;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=v.length>2&&void 0!==v[2]?v[2]:{valid:!0},e.t0=y().keys(r);case 2:if((e.t1=e.t0()).done){e.next=23;break}if(u=e.t1.value,!(o=r[u])){e.next=21;break}if(s=o._f,c=(0,d.Z)(o,p),!s){e.next=17;break}return f=x.array.has(s.name),e.next=11,ge(o,h,U,a.shouldUseNativeValidation&&!t,f);case 11:if(!(l=e.sent)[s.name]){e.next=16;break}if(n.valid=!1,!t){e.next=16;break}return e.abrupt("break",23);case 16:!t&&(F(l,s.name)?f?ae(i.errors,l,s.name):X(i.errors,s.name,l[s.name]):be(i.errors,s.name));case 17:if(e.t2=c,!e.t2){e.next=21;break}return e.next=21,se(c,t,n);case 21:e.next=2;break;case 23:return e.abrupt("return",n.valid);case 24:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),ce=function(){var e,r=(0,f.Z)(x.unMount);try{for(r.s();!(e=r.n()).done;){var t=e.value,n=F(u,t);n&&(n._f.refs?n._f.refs.every((function(e){return!Ve(e)})):!Ve(n._f.ref))&&qe(t)}}catch(a){r.e(a)}finally{r.f()}x.unMount=new Set},fe=function(e,r){return e&&r&&X(h,e,r),!ke(Ae(),o)},le=function(e,r,t){return J(e,x,(0,n.Z)({},v.mount?h:S(r)?o:z(e)?(0,c.Z)({},e,r):r),t,r)},de=function(e){return A(F(v.mount?h:o,e,r.shouldUnregister?F(o,e,[]):[]))},he=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=F(u,e),i=r;if(a){var o=a._f;o&&(!o.disabled&&X(h,e,je(r,o)),i=oe(o.ref)&&b(r)?"":r,_e(o.ref)?(0,s.Z)(o.ref.options).forEach((function(e){return e.selected=i.includes(e.value)})):o.refs?m(o.ref)?o.refs.length>1?o.refs.forEach((function(e){return(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find((function(r){return r===e.value})):i===e.value)})):o.refs[0]&&(o.refs[0].checked=!!i):o.refs.forEach((function(e){return e.checked=e.value===i})):ie(o.ref)?o.ref.value="":(o.ref.value=i,o.ref.type||N.values.next({name:e,values:(0,n.Z)({},h)})))}(t.shouldDirty||t.shouldTouch)&&$(e,i,t.shouldTouch,t.shouldDirty,!0),t.shouldValidate&&me(e)},ve=function e(r,t,n){for(var a in t){var i=t[a],o="".concat(r,".").concat(a),s=F(u,o);!x.array.has(r)&&we(i)&&(!s||s._f)||g(i)?he(o,i,n):e(o,i,n)}},pe=function(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=F(u,e),c=x.array.has(e),f=V(r);X(h,e,f),c?(N.array.next({name:e,values:(0,n.Z)({},h)}),(E.isDirty||E.dirtyFields)&&a.shouldDirty&&N.state.next({name:e,dirtyFields:De(o,h),isDirty:fe(e,f)})):!s||s._f||b(f)?he(e,f,a):ve(e,f,a),ne(e,x)&&N.state.next((0,n.Z)({},i)),N.values.next({name:e,values:(0,n.Z)({},h)}),!v.mount&&t()},ye=function(){var r=(0,l.Z)(y().mark((function r(t){var o,s,c,f,l,d,v,p,m,g,b,w,_,Z,V,A,S;return y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=t.target,s=o.name,c=!0,f=F(u,s),l=function(){return o.type?Le(f._f):k(t)},!f){r.next=47;break}if(p=l(),m=t.type===j||t.type===L,g=!Ne(f._f)&&!a.resolver&&!F(i.errors,s)&&!f._f.deps||Ce(m,F(i.touchedFields,s),i.isSubmitted,B,P),b=ne(s,x,m),X(h,s,p),m?(f._f.onBlur&&f._f.onBlur(t),e&&e(0)):f._f.onChange&&f._f.onChange(t),w=$(s,p,m,!1),_=!R(w)||b,!m&&N.values.next({name:s,type:t.type,values:(0,n.Z)({},h)}),!g){r.next=18;break}return E.isValid&&q(),r.abrupt("return",_&&N.state.next((0,n.Z)({name:s},b?{}:w)));case 18:if(!m&&b&&N.state.next((0,n.Z)({},i)),G(!0),!a.resolver){r.next=32;break}return r.next=23,Q([s]);case 23:Z=r.sent,V=Z.errors,A=Te(i.errors,u,s),S=Te(V,u,A.name||s),d=S.error,s=S.name,v=R(V),r.next=46;break;case 32:return r.next=34,ge(f,h,U,a.shouldUseNativeValidation);case 34:if(r.t0=s,d=r.sent[r.t0],!(c=Number.isNaN(p)||p===F(h,s,p))){r.next=46;break}if(!d){r.next=42;break}v=!1,r.next=46;break;case 42:if(!E.isValid){r.next=46;break}return r.next=45,se(u,!0);case 45:v=r.sent;case 46:c&&(f._f.deps&&me(f._f.deps),K(s,v,d,w));case 47:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),me=function(){var e=(0,l.Z)(y().mark((function e(r){var t,o,s,f,d,h=arguments;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=h.length>1&&void 0!==h[1]?h[1]:{},f=Y(r),G(!0),!a.resolver){e.next=11;break}return e.next=6,ee(S(r)?r:f);case 6:d=e.sent,o=R(d),s=r?!f.some((function(e){return F(d,e)})):o,e.next=21;break;case 11:if(!r){e.next=18;break}return e.next=14,Promise.all(f.map(function(){var e=(0,l.Z)(y().mark((function e(r){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=F(u,r),e.next=3,se(t&&t._f?(0,c.Z)({},r,t):t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 14:((s=e.sent.every(Boolean))||i.isValid)&&q(),e.next=21;break;case 18:return e.next=20,se(u);case 20:s=o=e.sent;case 21:return N.state.next((0,n.Z)((0,n.Z)((0,n.Z)({},!z(r)||E.isValid&&o!==i.isValid?{}:{name:r}),a.resolver||!r?{isValid:o}:{}),{},{errors:i.errors,isValidating:!1})),t.shouldFocus&&!s&&re(u,(function(e){return e&&F(i.errors,e)}),r?f:x.mount),e.abrupt("return",s);case 24:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),Ae=function(e){var r=(0,n.Z)((0,n.Z)({},o),v.mount?h:{});return S(e)?r:z(e)?F(r,e):e.map((function(e){return F(r,e)}))},Se=function(e,r){return{invalid:!!F((r||i).errors,e),isDirty:!!F((r||i).dirtyFields,e),isTouched:!!F((r||i).touchedFields,e),error:F((r||i).errors,e)}},Fe=function(e){e&&Y(e).forEach((function(e){return be(i.errors,e)})),N.state.next({errors:e?i.errors:{}})},Ue=function(e,r,t){var a=(F(u,e,{_f:{}})._f||{}).ref;X(i.errors,e,(0,n.Z)((0,n.Z)({},r),{},{ref:a})),N.state.next({name:e,errors:i.errors,isValid:!1}),t&&t.shouldFocus&&a&&a.focus&&a.focus()},Me=function(e,r){return ue(e)?N.values.subscribe({next:function(t){return e(le(void 0,r),t)}}):le(e,r,!0)},qe=function(e){var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=(0,f.Z)(e?Y(e):x.mount);try{for(s.s();!(r=s.n()).done;){var c=r.value;x.mount.delete(c),x.array.delete(c),t.keepValue||(be(u,c),be(h,c)),!t.keepError&&be(i.errors,c),!t.keepDirty&&be(i.dirtyFields,c),!t.keepTouched&&be(i.touchedFields,c),!a.shouldUnregister&&!t.keepDefaultValue&&be(o,c)}}catch(l){s.e(l)}finally{s.f()}N.values.next({values:(0,n.Z)({},h)}),N.state.next((0,n.Z)((0,n.Z)({},i),t.keepDirty?{isDirty:fe()}:{})),!t.keepIsValid&&q()},Ge=function(e){var r=e.disabled,t=e.name,n=e.field,a=e.fields;if(D(r)){var i=r?void 0:F(h,t,Le(n?n._f:F(a,t)._f));X(h,t,i),$(t,i,!1,!1,!0)}},Ie=function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=F(u,r),c=D(t.disabled);return X(u,r,(0,n.Z)((0,n.Z)({},i||{}),{},{_f:(0,n.Z)((0,n.Z)({},i&&i._f?i._f:{ref:{name:r}}),{},{name:r,mount:!0},t)})),x.mount.add(r),i?Ge({field:i,disabled:t.disabled,name:r}):W(r,!0,t.value),(0,n.Z)((0,n.Z)((0,n.Z)({},c?{disabled:t.disabled}:{}),a.progressive?{required:!!t.required,min:Ee(t.min),max:Ee(t.max),minLength:Ee(t.minLength),maxLength:Ee(t.maxLength),pattern:Ee(t.pattern)}:{}),{},{name:r,onChange:ye,onBlur:ye,ref:function(e){function r(r){return e.apply(this,arguments)}return r.toString=function(){return e.toString()},r}((function(c){if(c){e(r,t),i=F(u,r);var f=S(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,l=Ze(f),d=i._f.refs||[];if(l?d.find((function(e){return e===f})):f===i._f.ref)return;X(u,r,{_f:(0,n.Z)((0,n.Z)({},i._f),l?{refs:[].concat((0,s.Z)(d.filter(Ve)),[f],(0,s.Z)(Array.isArray(F(o,r))?[{}]:[])),ref:{type:f.type,name:r}}:{ref:f})}),W(r,!1,void 0,f)}else(i=F(u,r,{}))._f&&(i._f.mount=!1),(a.shouldUnregister||t.shouldUnregister)&&(!_(x.array,r)||!v.action)&&x.unMount.add(r)}))})},He=function(){return a.shouldFocusError&&re(u,(function(e){return e&&F(i.errors,e)}),x.mount)},Re=function(e,r){return function(){var t=(0,l.Z)(y().mark((function t(o){var s,c,f,l;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist()),s=V(h),N.state.next({isSubmitting:!0}),!a.resolver){t.next=13;break}return t.next=6,Q();case 6:c=t.sent,f=c.errors,l=c.values,i.errors=f,s=l,t.next=15;break;case 13:return t.next=15,se(u);case 15:if(be(i.errors,"root"),!R(i.errors)){t.next=22;break}return N.state.next({errors:{}}),t.next=20,e(s,o);case 20:t.next=27;break;case 22:if(!r){t.next=25;break}return t.next=25,r((0,n.Z)({},i.errors),o);case 25:He(),setTimeout(He);case 27:N.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(i.errors),submitCount:i.submitCount+1,errors:i.errors});case 28:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},We=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};F(u,e)&&(S(r.defaultValue)?pe(e,F(o,e)):(pe(e,r.defaultValue),X(o,e,r.defaultValue)),r.keepTouched||be(i.touchedFields,e),r.keepDirty||(be(i.dirtyFields,e),i.isDirty=r.defaultValue?fe(e,F(o,e)):fe()),r.keepError||(be(i.errors,e),E.isValid&&q()),N.state.next((0,n.Z)({},i)))},Ye=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=e?V(e):o,c=V(s),l=e&&!R(e)?c:o;if(a.keepDefaultValues||(o=s),!a.keepValues){if(a.keepDirtyValues||T){var d,p=(0,f.Z)(x.mount);try{for(p.s();!(d=p.n()).done;){var y=d.value;F(i.dirtyFields,y)?X(l,y,F(h,y)):pe(y,F(l,y))}}catch(A){p.e(A)}finally{p.f()}}else{if(Z&&S(e)){var m,g=(0,f.Z)(x.mount);try{for(g.s();!(m=g.n()).done;){var b=m.value,w=F(u,b);if(w&&w._f){var k=Array.isArray(w._f.refs)?w._f.refs[0]:w._f.ref;if(oe(k)){var _=k.closest("form");if(_){_.reset();break}}}}}catch(A){g.e(A)}finally{g.f()}}u={}}h=r.shouldUnregister?a.keepDefaultValues?V(o):{}:V(l),N.array.next({values:(0,n.Z)({},l)}),N.values.next({values:(0,n.Z)({},l)})}x={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!v.mount&&t(),v.mount=!E.isValid||!!a.keepIsValid,v.watch=!!r.shouldUnregister,N.state.next({submitCount:a.keepSubmitCount?i.submitCount:0,isDirty:a.keepDirty?i.isDirty:!(!a.keepDefaultValues||ke(e,o)),isSubmitted:!!a.keepIsSubmitted&&i.isSubmitted,dirtyFields:a.keepDirtyValues?i.dirtyFields:a.keepDefaultValues&&e?De(o,e):{},touchedFields:a.keepTouched?i.touchedFields:{},errors:a.keepErrors?i.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},$e=function(e,r){return Ye(ue(e)?e(h):e,r)},ze=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=F(u,e),n=t&&t._f;if(n){var a=n.refs?n.refs[0]:n.ref;a.focus&&(a.focus(),r.shouldSelect&&a.select())}},Je=function(e){i=(0,n.Z)((0,n.Z)({},i),e)},Ke=function(){return ue(a.defaultValues)&&a.defaultValues().then((function(e){$e(e,a.resetOptions),N.state.next({isLoading:!1})}))};return{control:{register:Ie,unregister:qe,getFieldState:Se,handleSubmit:Re,setError:Ue,_executeSchema:Q,_getWatch:le,_getDirty:fe,_updateValid:q,_removeUnmounted:ce,_updateFieldArray:I,_updateDisabledField:Ge,_getFieldArray:de,_reset:Ye,_resetDefaultValues:Ke,_updateFormState:Je,_subjects:N,_proxyFormState:E,get _fields(){return u},get _formValues(){return h},get _state(){return v},set _state(e){v=e},get _defaultValues(){return o},get _names(){return x},set _names(e){x=e},get _formState(){return i},set _formState(e){i=e},get _options(){return a},set _options(e){a=(0,n.Z)((0,n.Z)({},a),e)}},trigger:me,register:Ie,handleSubmit:Re,watch:Me,setValue:pe,getValues:Ae,reset:$e,resetField:We,clearErrors:Fe,unregister:qe,setError:Ue,setFocus:ze,getFieldState:Se}}var Me,qe,Ge,Ie,He=t(87),Re=t(689),We=t(85),Ye=t(168),$e=t(867),ze=$e.ZP.div(Me||(Me=(0,Ye.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Je=$e.ZP.input(qe||(qe=(0,Ye.Z)(["\n  width: 180px;\n  padding: 10px;\n  border-radius: 10px;\n  border-color: gray;\n  font-weight: 700;\n\n  margin-right: 10px;\n  margin-left: 10px;\n  margin-top: 20px;\n\n  &:focus {\n    border-color: lightsalmon;\n  }\n"]))),Ke=$e.ZP.button(Ge||(Ge=(0,Ye.Z)(["\n  border-radius: 10px;\n  border: none;\n\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 700;\n\n  box-shadow: 2px 1px 2px 1px gray;\n  cursor: pointer;\n  &:hover {\n    background-color: lightgray;\n  }\n"]))),Qe=$e.ZP.li(Ie||(Ie=(0,Ye.Z)(["\n  margin: 0;\n  width: 300px;\n"]))),Xe=t(263),er=t(184),rr=function(){var e=(0,He.lr)(),r=(0,a.Z)(e,2),t=r[0],s=r[1],c=(0,u.useState)(""),f=(0,a.Z)(c,2),l=f[0],d=f[1],h=t.get("query")||"",v=(0,i.i)(o.mv,h),p=(0,a.Z)(v,3),y=p[0],m=p[2],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=u.useRef(),t=u.useRef(),i=u.useState({isDirty:!1,isValidating:!1,isLoading:ue(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ue(e.defaultValues)?void 0:e.defaultValues}),o=(0,a.Z)(i,2),s=o[0],c=o[1];r.current||(r.current=(0,n.Z)((0,n.Z)({},Ue(e,(function(){return c((function(e){return(0,n.Z)({},e)}))}))),{},{formState:s}));var f=r.current.control;return f._options=e,$({subject:f._subjects.state,next:function(e){W(e,f._proxyFormState,f._updateFormState,!0)&&c((0,n.Z)({},f._formState))}}),u.useEffect((function(){e.values&&!ke(e.values,t.current)?(f._reset(e.values,f._options.resetOptions),t.current=e.values):f._resetDefaultValues()}),[e.values,f]),u.useEffect((function(){f._state.mount||(f._updateValid(),f._state.mount=!0),f._state.watch&&(f._state.watch=!1,f._subjects.state.next((0,n.Z)({},f._formState))),f._removeUnmounted()})),r.current.formState=H(s,f),r.current}(),b=g.register,x=g.handleSubmit,w=(0,Re.TH)();return(0,er.jsxs)("div",{children:[(0,er.jsxs)("form",{onSubmit:x((function(e){if(!l)return We.Am.warn("Please fill movie in the field",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"});s(l.trim()?{query:l.trim()}:{}),d("")})),children:[(0,er.jsx)(Je,(0,n.Z)((0,n.Z)({type:"text",autoFocus:!0},b("queryStr")),{},{value:l,onChange:function(e){return d(e.target.value)}})),(0,er.jsx)(Ke,{children:"Search"})]}),(0,er.jsx)(ze,{children:null===y||void 0===y?void 0:y.map((function(e){var r=e.poster_path,t=e.title,n=e.id;return(0,er.jsx)(Qe,{children:(0,er.jsxs)(He.rU,{state:{from:w},to:"".concat(n.toString()),children:[r?(0,er.jsx)("img",{width:300,height:450,src:"http://image.tmdb.org/t/p/w300".concat(r),alt:t}):(0,er.jsx)("img",{width:300,height:450,src:"https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg",alt:t}),(0,er.jsx)("h2",{children:t})]})},n)}))}),!h&&(0,er.jsx)("h1",{children:"If you want to find a movie, search it by name!"}),y.length||!h||m?null:(0,er.jsx)("h2",{children:"Oops...nothing there, try another movie"}),(0,er.jsx)("div",{children:(0,er.jsx)(u.Suspense,{fallback:(0,er.jsx)(Xe.a,{}),children:(0,er.jsx)(Re.j3,{})})})]})}}}]);
//# sourceMappingURL=669.0128d742.chunk.js.map