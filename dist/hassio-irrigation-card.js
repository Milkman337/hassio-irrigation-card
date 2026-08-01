var Te=Object.defineProperty;var ft=Object.getOwnPropertyDescriptor;var f=(r,t)=>()=>(r&&(t=r(r=0)),t);var gt=(r,t)=>{for(var e in t)Te(r,e,{get:t[e],enumerable:!0})};var v=(r,t,e,i)=>{for(var n=i>1?void 0:i?ft(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Te(t,e,n),n};var Q,X,de,Re,U,De,H,ze,pe,he=f(()=>{Q=globalThis,X=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol(),Re=new WeakMap,U=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==de)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(X&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Re.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Re.set(e,t))}return t}toString(){return this.cssText}},De=r=>new U(typeof r=="string"?r:r+"",void 0,de),H=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new U(e,r,de)},ze=(r,t)=>{if(X)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),n=Q.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,r.appendChild(i)}},pe=X?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return De(e)})(r):r});var _t,vt,bt,yt,wt,$t,ee,Ie,xt,St,F,Z,te,Pe,x,j=f(()=>{he();he();({is:_t,defineProperty:vt,getOwnPropertyDescriptor:bt,getOwnPropertyNames:yt,getOwnPropertySymbols:wt,getPrototypeOf:$t}=Object),ee=globalThis,Ie=ee.trustedTypes,xt=Ie?Ie.emptyScript:"",St=ee.reactiveElementPolyfillSupport,F=(r,t)=>r,Z={toAttribute(r,t){switch(t){case Boolean:r=r?xt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},te=(r,t)=>!_t(r,t),Pe={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:te};Symbol.metadata??=Symbol("metadata"),ee.litPropertyMetadata??=new WeakMap;x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Pe){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&vt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){let{get:n,set:s}=bt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:n,set(o){let c=n?.call(this);s?.call(this,o),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pe}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;let t=$t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){let e=this.properties,i=[...yt(e),...wt(e)];for(let n of i)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let n of i)e.unshift(pe(n))}else t!==void 0&&e.push(pe(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ze(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){let s=(i.converter?.toAttribute!==void 0?i.converter:Z).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){let i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let s=i.getPropertyOptions(n),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Z;this._$Em=n;let c=o.fromAttribute(e,s.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(t!==void 0){let o=this.constructor;if(n===!1&&(s=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??te)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,s]of i){let{wrapped:o}=s,c=this[n];o!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,s,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[F("elementProperties")]=new Map,x[F("finalized")]=new Map,St?.({ReactiveElement:x}),(ee.reactiveElementVersions??=[]).push("2.1.2")});function We(r,t){if(!we(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oe!==void 0?Oe.createHTML(t):t}function P(r,t,e=r,i){if(t===z)return t;let n=i!==void 0?e._$Co?.[i]:e._$Cl,s=B(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(r),n._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(t=P(r,n._$AS(r,t.values),n,i)),t}var ye,Ne,ie,Oe,Ze,C,je,At,D,W,B,we,Et,me,q,Me,Le,T,Ue,He,qe,$e,p,Lt,Ut,z,u,Fe,R,kt,V,fe,Y,N,ge,_e,ve,be,Ct,Be,ne=f(()=>{ye=globalThis,Ne=r=>r,ie=ye.trustedTypes,Oe=ie?ie.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ze="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,je="?"+C,At=`<${je}>`,D=document,W=()=>D.createComment(""),B=r=>r===null||typeof r!="object"&&typeof r!="function",we=Array.isArray,Et=r=>we(r)||typeof r?.[Symbol.iterator]=="function",me=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Me=/-->/g,Le=/>/g,T=RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ue=/'/g,He=/"/g,qe=/^(?:script|style|textarea|title)$/i,$e=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),p=$e(1),Lt=$e(2),Ut=$e(3),z=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Fe=new WeakMap,R=D.createTreeWalker(D,129);kt=(r,t)=>{let e=r.length-1,i=[],n,s=t===2?"<svg>":t===3?"<math>":"",o=q;for(let c=0;c<e;c++){let a=r[c],d,m,h=-1,g=0;for(;g<a.length&&(o.lastIndex=g,m=o.exec(a),m!==null);)g=o.lastIndex,o===q?m[1]==="!--"?o=Me:m[1]!==void 0?o=Le:m[2]!==void 0?(qe.test(m[2])&&(n=RegExp("</"+m[2],"g")),o=T):m[3]!==void 0&&(o=T):o===T?m[0]===">"?(o=n??q,h=-1):m[1]===void 0?h=-2:(h=o.lastIndex-m[2].length,d=m[1],o=m[3]===void 0?T:m[3]==='"'?He:Ue):o===He||o===Ue?o=T:o===Me||o===Le?o=q:(o=T,n=void 0);let _=o===T&&r[c+1].startsWith("/>")?" ":"";s+=o===q?a+At:h>=0?(i.push(d),a.slice(0,h)+Ze+a.slice(h)+C+_):a+C+(h===-2?c:_)}return[We(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},V=class r{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0,c=t.length-1,a=this.parts,[d,m]=kt(t,e);if(this.el=r.createElement(d,i),R.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=R.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(let h of n.getAttributeNames())if(h.endsWith(Ze)){let g=m[o++],_=n.getAttribute(h).split(C),I=/([.?@])?(.*)/.exec(g);a.push({type:1,index:s,name:I[2],strings:_,ctor:I[1]==="."?ge:I[1]==="?"?_e:I[1]==="@"?ve:N}),n.removeAttribute(h)}else h.startsWith(C)&&(a.push({type:6,index:s}),n.removeAttribute(h));if(qe.test(n.tagName)){let h=n.textContent.split(C),g=h.length-1;if(g>0){n.textContent=ie?ie.emptyScript:"";for(let _=0;_<g;_++)n.append(h[_],W()),R.nextNode(),a.push({type:2,index:++s});n.append(h[g],W())}}}else if(n.nodeType===8)if(n.data===je)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(C,h+1))!==-1;)a.push({type:7,index:s}),h+=C.length-1}s++}}static createElement(t,e){let i=D.createElement("template");return i.innerHTML=t,i}};fe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??D).importNode(e,!0);R.currentNode=n;let s=R.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new Y(s,s.nextSibling,this,t):a.type===1?d=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(d=new be(s,this,t)),this._$AV.push(d),a=i[++c]}o!==a?.index&&(s=R.nextNode(),o++)}return R.currentNode=D,n}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Y=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),B(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=V.createElement(We(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{let s=new fe(n,this),o=s.u(this.options);s.p(e),this.T(o),this._$AH=s}}_$AC(t){let e=Fe.get(t.strings);return e===void 0&&Fe.set(t.strings,e=new V(t)),e}k(t){we(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,n=0;for(let s of t)n===e.length?e.push(i=new r(this.O(W()),this.O(W()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Ne(t).nextSibling;Ne(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},N=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(t,e=this,i,n){let s=this.strings,o=!1;if(s===void 0)t=P(this,t,e,0),o=!B(t)||t!==this._$AH&&t!==z,o&&(this._$AH=t);else{let c=t,a,d;for(t=s[0],a=0;a<s.length-1;a++)d=P(this,c[i+a],e,a),d===z&&(d=this._$AH[a]),o||=!B(d)||d!==this._$AH[a],d===u?t=u:t!==u&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}o&&!n&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ge=class extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},_e=class extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},ve=class extends N{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??u)===z)return;let i=this._$AH,n=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},be=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}},Ct=ye.litHtmlPolyfillSupport;Ct?.(V,Y),(ye.litHtmlVersions??=[]).push("3.3.3");Be=(r,t,e)=>{let i=e?.renderBefore??t,n=i._$litPart$;if(n===void 0){let s=e?.renderBefore??null;i._$litPart$=n=new Y(t.insertBefore(W(),s),s,void 0,e??{})}return n._$AI(r),n}});var xe,y,Tt,Ve=f(()=>{j();j();ne();ne();xe=globalThis,y=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Be(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}};y._$litElement$=!0,y.finalized=!0,xe.litElementHydrateSupport?.({LitElement:y});Tt=xe.litElementPolyfillSupport;Tt?.({LitElement:y});(xe.litElementVersions??=[]).push("4.2.2")});var Ye=f(()=>{});var re=f(()=>{j();ne();Ve();Ye()});var se,Ke=f(()=>{se=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)}});function O(r){return(t,e)=>typeof e=="object"?Dt(r,t,e):((i,n,s)=>{let o=n.hasOwnProperty(s);return n.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(n,s):void 0})(r,t,e)}var Rt,Dt,Se=f(()=>{j();Rt={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:te},Dt=(r=Rt,t,e)=>{let{kind:i,metadata:n}=e,s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),s.set(e.name,r),i==="accessor"){let{name:o}=e;return{set(c){let a=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,a,r,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,r,c),c}}}if(i==="setter"){let{name:o}=e;return function(c){let a=this[o];t.call(this,c),this.requestUpdate(o,a,r,!0,c)}}throw Error("Unsupported decorator location: "+i)}});function S(r){return O({...r,state:!0,attribute:!1})}var Ge=f(()=>{Se();});var Je=f(()=>{});var M=f(()=>{});var Qe=f(()=>{M();});var Xe=f(()=>{M();});var et=f(()=>{M();});var tt=f(()=>{M();});var it=f(()=>{M();});var Ae=f(()=>{Ke();Se();Ge();Je();Qe();Xe();et();tt();it()});var nt,rt,ae,Ee=f(()=>{(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(nt||(nt={})),function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"}(rt||(rt={}));ae=function(r,t,e,i){i=i||{},e=e??{};var n=new Event(t,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return n.detail=e,r.dispatchEvent(n),n}});var ot,K,ce,at,ct,lt,ut,A,le=f(()=>{"use strict";ot="1.1.0",K="hassio-irrigation-card",ce="hassio-irrigation-card-editor",at="mdi:sprinkler-variant",ct="mdi:water-pump",lt="mdi:water-pump-off",ut="mdi:electric-switch",A={zoneSwitch:/^switch\.(.+)_zone_(\d+)$/,zoneEnableSwitch:/^switch\.(.+)_enable_zone_(\d+)$/,zoneDuration:/^number\.(.+)_zone_(\d+)_run_duration$/,autoAdvance:/^switch\.(.+)_auto_advance$/,reverse:/^switch\.(.+)_reverse$/,multiplier:/^number\.(.+)_multiplier$/,repeat:/^number\.(.+)_repeat$/,input:/^binary_sensor\.(.+)_(input_\d+|pad_(rx|tx)\d+_as_input)$/}});function G(r){let t=Math.max(0,Math.round(r)),e=Math.floor(t/3600),i=Math.floor(t%3600/60),n=t%60,s=[];return e>0&&s.push(`${e}h`),(e>0||i>0)&&s.push(`${i}m`),s.push(`${n}s`),s.join(" ")}function L(r,t,e=0){if(!t)return e;let i=r.states[t];if(!i||i.state==="unknown"||i.state==="unavailable")return e;let n=Number(i.state);return Number.isFinite(n)?n:e}function J(r,t){return t?r.states[t]?.state==="on":!1}function ke(r,t){if(!t)return!0;let e=r.states[t];return!e||e.state==="unavailable"}function dt(r,t,e,i,n){let s=r.states[t.switch],o=s?.state==="on",c=t.enable_switch?J(r,t.enable_switch):!0,a=L(r,t.duration_number,0),d=Math.max(0,a*i),m=d,h=0;if(o&&s?.last_changed){let g=new Date(s.last_changed).getTime(),_=Math.max(0,(n-g)/1e3);m=Math.max(0,d-_),h=d>0?Math.min(100,_/d*100):0}return{config:t,index:e,active:o,enabled:c,durationSeconds:a,effectiveDurationSeconds:d,remainingSeconds:m,progressPct:h,unavailable:ke(r,t.switch)}}function ue(r,t){let e=Object.keys(r.states).filter(l=>t?l.includes(t):!0),i=new Map,n,s,o,c,a=[],d=[];for(let l of e){let k;if(k=l.match(A.zoneSwitch)){let w=Number(k[2]),$=i.get(w)??{switch:""};$.switch=l,$.name=`Zone ${w}`,i.set(w,$);continue}if(k=l.match(A.zoneEnableSwitch)){let w=Number(k[2]),$=i.get(w)??{switch:""};$.enable_switch=l,i.set(w,$);continue}if(k=l.match(A.zoneDuration)){let w=Number(k[2]),$=i.get(w)??{switch:""};$.duration_number=l,i.set(w,$);continue}if(A.autoAdvance.test(l)){n=l;continue}if(A.reverse.test(l)){s=l;continue}if(A.multiplier.test(l)){o=l;continue}if(A.repeat.test(l)){c=l;continue}if(A.input.test(l)){a.push({entity:l});continue}l.startsWith("switch.")&&(!t||l.includes(t))&&d.push(l)}let m=new Set([...i.values()].map(l=>l.switch)),h,g=(n??s)?.replace(/_(auto_advance|reverse)$/,"");g&&(h=d.find(l=>l===g||l.startsWith(g))),h||(h=d.find(l=>!m.has(l)&&!l.includes("internet")));let _=d.find(l=>l.includes("internet")),I=[...i.entries()].sort(([l],[k])=>l-k).map(([,l])=>l).filter(l=>!!l.switch),mt=e.find(l=>l.startsWith("device_tracker.")&&(!t||l.includes(t)));return{controller_switch:h,auto_advance_switch:n,reverse_switch:s,multiplier_number:o,repeat_number:c,internet_switch:_,device_tracker:mt,zones:I,inputs:a}}var Ce=f(()=>{"use strict";le()});var pt={};gt(pt,{HassioIrrigationCardEditor:()=>E});var E,ht=f(()=>{"use strict";re();Ae();Ee();le();Ce();E=class extends y{constructor(){super(...arguments);this._prefixHint="";this._autoDetect=()=>{let e=ue(this.hass,this._prefixHint||void 0);this._config={...this._config,...e,zones:e.zones.length>0?e.zones:this._config.zones},this._emit()}}setConfig(e){this._config={...e,zones:e.zones??[]}}render(){return!this.hass||!this._config?p``:p`
      <div class="section">
        <h3>Card</h3>
        <ha-textfield
          label="Title"
          .value=${this._config.title??""}
          @input=${e=>this._set("title",e.target.value)}
        ></ha-textfield>
        <ha-formfield label="Compact mode (hide per-zone duration steppers)">
          <ha-switch
            .checked=${!!this._config.compact}
            @change=${e=>this._set("compact",e.target.checked)}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label="Start Program Settings / Diagnostics collapsed">
          <ha-switch
            .checked=${!!this._config.start_collapsed}
            @change=${e=>this._set("start_collapsed",e.target.checked)}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label="Show diagnostics panel">
          <ha-switch
            .checked=${this._config.show_diagnostics!==!1}
            @change=${e=>this._set("show_diagnostics",e.target.checked)}
          ></ha-switch>
        </ha-formfield>
      </div>

      <div class="section">
        <h3>Auto-detect from entity prefix</h3>
        <p class="hint">
          If your controller's entities all share a common prefix (e.g.
          <code>garten_sprengler_controller</code>), enter it here and click detect to auto-fill
          zones and controller entities below. You can still edit everything afterwards.
        </p>
        <div class="row">
          <ha-textfield
            style="flex:1"
            label="Entity ID prefix (optional)"
            .value=${this._prefixHint}
            @input=${e=>this._prefixHint=e.target.value}
          ></ha-textfield>
          <button class="btn" @click=${this._autoDetect}>Detect</button>
        </div>
      </div>

      <div class="section">
        <h3>Controller entities</h3>
        ${this._entityPicker("controller_switch","Main run/stop switch",["switch"])}
        ${this._entityPicker("auto_advance_switch","Auto-advance switch",["switch"])}
        ${this._entityPicker("reverse_switch","Reverse-order switch",["switch"])}
        <div class="grid-2">
          ${this._entityPicker("multiplier_number","Duration multiplier",["number"])}
          ${this._entityPicker("repeat_number","Repeat count",["number"])}
        </div>
      </div>

      <div class="section">
        <h3>Safety</h3>
        ${this._entityPicker("lawnmower_entity","Robot lawnmower (optional)",["lawn_mower"])}
        <p class="hint">
          If set, the master switch, zone tiles and Program Settings all lock whenever this mower's
          state isn't "docked" - stop-all always stays active. Leave empty to disable.
        </p>
      </div>

      <div class="section">
        <h3>Zones</h3>
        ${this._config.zones.map((e,i)=>this._renderZoneEditor(e,i))}
        <button class="btn" @click=${this._addZone}>
          <ha-icon icon="mdi:plus"></ha-icon>
          Add zone
        </button>
      </div>

      <div class="section">
        <h3>Diagnostics</h3>
        ${this._entityPicker("internet_switch","Internet access switch",["switch"])}
        ${this._entityPicker("device_tracker","Controller device tracker",["device_tracker"])}
        <h3 style="margin-top:8px;">Sensor inputs</h3>
        ${(this._config.inputs??[]).map((e,i)=>this._renderInputEditor(e,i))}
        <button class="btn" @click=${this._addInput}>
          <ha-icon icon="mdi:plus"></ha-icon>
          Add input
        </button>
      </div>
    `}_renderZoneEditor(e,i){return p`
      <div class="item-card">
        <div class="item-header">
          <b>${e.name||`Zone ${i+1}`}</b>
          <ha-icon-button class="remove" @click=${()=>this._removeZone(i)}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </ha-icon-button>
        </div>
        <ha-textfield
          label="Name"
          .value=${e.name??""}
          @input=${n=>this._updateZone(i,{name:n.target.value})}
        ></ha-textfield>
        ${this._zoneEntityPicker(i,"switch","Zone switch",["switch"])}
        ${this._zoneEntityPicker(i,"enable_switch","Enable switch (optional)",["switch"])}
        ${this._zoneEntityPicker(i,"duration_number","Run duration number (optional)",["number"])}
      </div>
    `}_renderInputEditor(e,i){return p`
      <div class="item-card">
        <div class="item-header">
          <b>${e.name||e.entity||`Input ${i+1}`}</b>
          <ha-icon-button class="remove" @click=${()=>this._removeInput(i)}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </ha-icon-button>
        </div>
        <ha-textfield
          label="Label"
          .value=${e.name??""}
          @input=${n=>this._updateInput(i,{name:n.target.value})}
        ></ha-textfield>
        ${this._inputEntityPicker(i)}
      </div>
    `}_entityPicker(e,i,n){let s=this._config[e]??"";return p`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${s}
        .label=${i}
        .includeDomains=${n}
        allow-custom-entity
        @value-changed=${o=>this._set(e,o.detail.value)}
      ></ha-entity-picker>
    `}_zoneEntityPicker(e,i,n,s){let c=this._config.zones[e][i]??"";return p`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${c}
        .label=${n}
        .includeDomains=${s}
        allow-custom-entity
        @value-changed=${a=>this._updateZone(e,{[i]:a.detail.value})}
      ></ha-entity-picker>
    `}_inputEntityPicker(e){let i=(this._config.inputs??[])[e];return p`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${i.entity??""}
        .label=${"Entity"}
        .includeDomains=${["binary_sensor"]}
        allow-custom-entity
        @value-changed=${n=>this._updateInput(e,{entity:n.detail.value})}
      ></ha-entity-picker>
    `}_set(e,i){this._config={...this._config,[e]:i},this._emit()}_updateZone(e,i){let n=[...this._config.zones];n[e]={...n[e],...i},this._config={...this._config,zones:n},this._emit()}_addZone(){let e=[...this._config.zones,{switch:"",name:`Zone ${this._config.zones.length+1}`}];this._config={...this._config,zones:e},this._emit()}_removeZone(e){let i=this._config.zones.filter((n,s)=>s!==e);this._config={...this._config,zones:i},this._emit()}_updateInput(e,i){let n=[...this._config.inputs??[]];n[e]={...n[e],...i},this._config={...this._config,inputs:n},this._emit()}_addInput(){let e=[...this._config.inputs??[],{entity:""}];this._config={...this._config,inputs:e},this._emit()}_removeInput(e){let i=(this._config.inputs??[]).filter((n,s)=>s!==e);this._config={...this._config,inputs:i},this._emit()}_emit(){ae(this,"config-changed",{config:this._config})}};E.styles=H`
    .section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
    }
    h3 {
      font-size: 0.95rem;
      font-weight: 600;
      margin: 0 0 2px 0;
      color: var(--primary-text-color);
    }
    .hint {
      font-size: 0.78rem;
      color: var(--secondary-text-color);
      margin: 0 0 4px 0;
    }
    .row {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .item-card {
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .item-header b {
      font-size: 0.85rem;
    }
    ha-icon-button.remove {
      color: var(--error-color, #f44336);
    }
    ha-formfield {
      display: block;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      align-self: flex-start;
      height: 36px;
      padding: 0 14px;
      border: 1px solid var(--primary-color);
      border-radius: 8px;
      background: transparent;
      color: var(--primary-color);
      font-family: inherit;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
    }
    .btn ha-icon {
      --mdc-icon-size: 18px;
    }
    .btn:hover {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    }
    .btn:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.16);
    }
  `,v([O({attribute:!1})],E.prototype,"hass",2),v([S()],E.prototype,"_config",2),v([S()],E.prototype,"_prefixHint",2),E=v([se(ce)],E)});re();Ae();Ee();re();var st=H`
  :host {
    display: block;
  }

  ha-card {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    overflow: hidden;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }

  .header-title {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }

  .header-title h1 {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;
    color: var(--ha-card-header-color, var(--primary-text-color));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .status-pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 999px;
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    white-space: nowrap;
  }

  .status-pill.online {
    background: rgba(var(--rgb-state-active, 76, 175, 80), 0.15);
    color: var(--success-color, #4caf50);
  }

  .status-pill.offline {
    background: rgba(var(--rgb-state-error, 244, 67, 54), 0.15);
    color: var(--error-color, #f44336);
  }

  .status-pill.running {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    color: var(--primary-color);
  }

  .master-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .master-button {
    flex: 1 1 160px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 44px;
    padding: 0 20px;
    border: none;
    border-radius: 999px;
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    transition:
      filter 150ms ease,
      box-shadow 150ms ease,
      transform 100ms ease;
  }

  .master-button ha-icon {
    --mdc-icon-size: 20px;
  }

  .master-button:hover {
    filter: brightness(1.08);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }

  .master-button:active {
    transform: scale(0.98);
    filter: brightness(0.94);
  }

  .master-button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .master-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
    filter: none;
  }

  .locked-note {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: var(--ha-card-border-radius, 12px);
    background: rgba(var(--rgb-error-color, 244, 67, 54), 0.1);
    color: var(--error-color, #f44336);
    font-size: 0.82rem;
  }

  .locked-note ha-icon {
    --mdc-icon-size: 18px;
    flex-shrink: 0;
  }

  ha-icon-button.stop-all {
    --mdc-icon-button-size: 44px;
    color: var(--error-color, #f44336);
    border: 1px solid var(--error-color, #f44336);
    border-radius: 999px;
  }

  .zones-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }

  .zone-tile {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px;
    border-radius: var(--ha-card-border-radius, 12px);
    background: var(--secondary-background-color);
    border: 1px solid transparent;
    cursor: pointer;
    transition:
      background 180ms ease,
      border-color 180ms ease;
    min-height: 108px;
  }

  .zone-tile:hover {
    border-color: var(--divider-color);
  }

  .zone-tile.active {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
    border-color: var(--primary-color);
  }

  .zone-tile.disabled {
    opacity: 0.55;
  }

  .zone-tile.unavailable {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .zone-tile.locked {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .zone-tile.locked .zone-enable,
  .zone-tile.locked .stepper {
    pointer-events: none;
  }

  .zone-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 4px;
  }

  .zone-icon {
    position: relative;
    display: inline-flex;
    color: var(--state-icon-color, var(--secondary-text-color));
  }

  .zone-tile.active .zone-icon {
    color: var(--primary-color);
  }

  .zone-tile.active .zone-icon::before,
  .zone-tile.active .zone-icon::after {
    content: "";
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    border: 2px solid var(--primary-color);
    opacity: 0;
    animation: ripple 2s ease-out infinite;
    pointer-events: none;
  }

  .zone-tile.active .zone-icon::after {
    animation-delay: 1s;
  }

  @keyframes ripple {
    0% {
      transform: scale(0.6);
      opacity: 0.6;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .zone-enable {
    --mdc-theme-secondary: var(--primary-color);
    transform: scale(0.8);
    margin: -8px -8px 0 0;
  }

  .zone-name {
    font-size: 0.92rem;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .zone-state {
    font-size: 0.78rem;
    color: var(--secondary-text-color);
  }

  .zone-progress {
    height: 6px;
    border-radius: 3px;
    background: var(--divider-color);
    overflow: hidden;
    margin-top: auto;
  }

  .zone-progress > div {
    height: 100%;
    background-color: var(--primary-color);
    background-image: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.35) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.35) 50%,
      rgba(255, 255, 255, 0.35) 75%,
      transparent 75%,
      transparent
    );
    background-size: 14px 14px;
    animation: flow 0.7s linear infinite;
    transition: width 1s linear;
  }

  @keyframes flow {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 14px 0;
    }
  }

  .zone-duration-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    font-size: 0.78rem;
    color: var(--secondary-text-color);
  }

  .stepper {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .stepper ha-icon-button {
    --mdc-icon-button-size: 24px;
    --mdc-icon-size: 16px;
  }

  section.panel {
    border-top: 1px solid var(--divider-color);
    padding-top: 12px;
  }

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
  }

  .panel-header h2 {
    font-size: 0.95rem;
    font-weight: 500;
    margin: 0;
    color: var(--primary-text-color);
  }

  .panel-header ha-icon {
    color: var(--secondary-text-color);
    transition: transform 180ms ease;
  }

  .panel-header.collapsed ha-icon {
    transform: rotate(-90deg);
  }

  .panel-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 10px;
  }

  .setting-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .setting-row .setting-label {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .setting-row .setting-label span.primary {
    font-size: 0.9rem;
    color: var(--primary-text-color);
  }

  .setting-row .setting-label span.secondary {
    font-size: 0.75rem;
    color: var(--secondary-text-color);
  }

  .slider-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .slider-row input[type="range"] {
    flex: 1;
    accent-color: var(--primary-color);
  }

  .slider-value {
    min-width: 42px;
    text-align: right;
    font-variant-numeric: tabular-nums;
    font-size: 0.85rem;
    color: var(--primary-text-color);
  }

  .estimate {
    font-size: 0.8rem;
    color: var(--secondary-text-color);
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 999px;
    background: var(--secondary-background-color);
    font-size: 0.78rem;
    color: var(--secondary-text-color);
  }

  .chip.on {
    color: var(--primary-color);
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
  }

  .chip ha-icon {
    --mdc-icon-size: 16px;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 24px 8px;
    color: var(--secondary-text-color);
    text-align: center;
  }

  @media (max-width: 420px) {
    ha-card {
      padding: 12px;
    }
    .zones-grid {
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .zone-tile.active .zone-icon::before,
    .zone-tile.active .zone-icon::after,
    .zone-progress > div {
      animation: none;
    }
  }
`;le();Ce();var zt=1e3,b=class extends y{constructor(){super(...arguments);this._now=Date.now();this._programCollapsed=!1;this._diagnosticsCollapsed=!0;this._multiplierDraft=null;this._onMultiplierInput=e=>{this._multiplierDraft=Number(e.target.value)};this._onMultiplierChange=e=>{let i=Number(e.target.value);this._setNumber(this._config.multiplier_number,i),this._multiplierDraft=null}}static async getConfigElement(){return await Promise.resolve().then(()=>(ht(),pt)),document.createElement(ce)}static getStubConfig(e){let i=ue(e);return i.zones.length>0?{type:`custom:${K}`,title:"Irrigation",...i}:{type:`custom:${K}`,title:"Irrigation",zones:[{switch:"switch.REPLACE_ME_zone_1",name:"Zone 1"},{switch:"switch.REPLACE_ME_zone_2",name:"Zone 2"}]}}setConfig(e){if(!e)throw new Error("Invalid configuration");if(e.zones&&!Array.isArray(e.zones))throw new Error("`zones` must be a list");this._config={show_diagnostics:!0,show_multiplier_preview:!0,compact:!1,...e,zones:e.zones??[]},this._programCollapsed=e.start_collapsed??!1,this._diagnosticsCollapsed=e.start_collapsed??!0}getCardSize(){return 2+Math.ceil((this._config?.zones?.length??0)/3)+(this._config?.show_diagnostics?2:0)}updated(e){super.updated(e);let i=this._zoneStates().some(n=>n.active);i&&!this._tickHandle?this._tickHandle=setInterval(()=>{this._now=Date.now()},zt):!i&&this._tickHandle&&(clearInterval(this._tickHandle),this._tickHandle=void 0)}disconnectedCallback(){super.disconnectedCallback(),this._tickHandle&&(clearInterval(this._tickHandle),this._tickHandle=void 0)}get _multiplier(){return this._multiplierDraft!==null?this._multiplierDraft:L(this.hass,this._config.multiplier_number,1)}get _repeat(){return L(this.hass,this._config.repeat_number,0)}get _mowerBlocking(){let e=this._config.lawnmower_entity;return e?this.hass.states[e]?.state!=="docked":!1}_zoneStates(){return!this.hass||!this._config?[]:this._config.zones.map((e,i)=>dt(this.hass,e,i,this._multiplier,this._now))}get _estimateTotalSeconds(){return this._zoneStates().filter(i=>i.enabled).reduce((i,n)=>i+n.effectiveDurationSeconds,0)*(this._repeat+1)}render(){if(!this._config||!this.hass)return p``;let e=this._zoneStates(),i=e.some(m=>m.active),n=e.find(m=>m.active),s=!!this._config.controller_switch,o=s?J(this.hass,this._config.controller_switch):!1,c=!!this._config.device_tracker,a=c?this.hass.states[this._config.device_tracker]?.state==="home":void 0,d=this._mowerBlocking;return p`
      <ha-card>
        <div class="header">
          <div class="header-title">
            <ha-icon icon=${i?ct:lt}></ha-icon>
            <h1>${this._config.title??"Irrigation"}</h1>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            ${i?p`<span class="status-pill running"
                    >Running${n?`: ${this._zoneLabel(n)}`:""}</span
                  >`:p`<span class="status-pill">Idle</span>`}
            ${c?p`<span class="status-pill ${a?"online":"offline"}"
                    >${a?"Online":"Offline"}</span
                  >`:u}
          </div>
        </div>

        ${d?this._renderLockedNote():u}
        ${s?this._renderMasterRow(o,e,d):u}
        ${e.length>0?this._renderZones(e,d):this._renderEmptyState()}
        ${this._renderProgramPanel(d)}
        ${this._config.show_diagnostics?this._renderDiagnosticsPanel():u}
      </ha-card>
    `}_zoneLabel(e){return e.config.name??this.hass.states[e.config.switch]?.attributes?.friendly_name??`Zone ${e.index+1}`}_renderEmptyState(){return p`
      <div class="empty-state">
        <ha-icon icon="mdi:sprinkler-variant" style="--mdc-icon-size: 32px;"></ha-icon>
        <span>No zones configured yet. Edit this card to add your irrigation zones.</span>
      </div>
    `}_renderLockedNote(){return p`
      <div class="locked-note">
        <ha-icon icon="mdi:robot-mower"></ha-icon>
        <span>Mower isn't docked - irrigation controls are locked until it's home.</span>
      </div>
    `}_renderMasterRow(e,i,n){return p`
      <div class="master-row">
        <button
          class="master-button"
          ?disabled=${n}
          @click=${()=>!n&&this._toggleSwitch(this._config.controller_switch)}
        >
          <ha-icon icon=${e?"mdi:stop":"mdi:play"}></ha-icon>
          ${e?"Stop Program":"Start Program"}
        </button>
        <ha-icon-button
          class="stop-all"
          title="Emergency stop - closes every valve immediately"
          @click=${()=>this._stopAll(i)}
        >
          <ha-icon icon="mdi:alert-octagon-outline"></ha-icon>
        </ha-icon-button>
      </div>
    `}_renderZones(e,i){return p`
      <div class="zones-grid">${e.map(n=>this._renderZoneTile(n,i))}</div>
    `}_renderZoneTile(e,i){let n=["zone-tile",e.active?"active":"",e.enabled?"":"disabled",e.unavailable?"unavailable":"",i?"locked":""].filter(Boolean).join(" "),s=e.unavailable?"Unavailable":e.active?`${G(e.remainingSeconds)} left`:e.enabled?e.config.duration_number?`Off \xB7 ${G(e.durationSeconds)}`:"Off":"Disabled";return p`
      <div
        class=${n}
        role="button"
        tabindex="0"
        @click=${()=>!e.unavailable&&!i&&this._toggleSwitch(e.config.switch)}
        @keydown=${o=>{(o.key==="Enter"||o.key===" ")&&!e.unavailable&&!i&&(o.preventDefault(),this._toggleSwitch(e.config.switch))}}
      >
        <div class="zone-top">
          <ha-icon class="zone-icon" icon=${e.config.icon??at}></ha-icon>
          ${e.config.enable_switch?p`<ha-switch
                  class="zone-enable"
                  .checked=${e.enabled}
                  ?disabled=${i}
                  @click=${o=>o.stopPropagation()}
                  @change=${()=>this._toggleSwitch(e.config.enable_switch)}
                ></ha-switch>`:u}
        </div>
        <span class="zone-name">${this._zoneLabel(e)}</span>
        <span class="zone-state">${s}</span>
        ${!e.active&&e.config.duration_number&&!this._config.compact?this._renderDurationStepper(e,i):u}
        ${e.active?p`<div class="zone-progress"><div style="width:${e.progressPct}%"></div></div>`:u}
      </div>
    `}_renderDurationStepper(e,i){let n=e.config.duration_number;return p`
      <div class="zone-duration-row">
        <span>${G(e.durationSeconds)}</span>
        <div class="stepper">
          <ha-icon-button
            ?disabled=${i}
            @click=${s=>!i&&this._stepNumber(s,n,-30)}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            ?disabled=${i}
            @click=${s=>!i&&this._stepNumber(s,n,30)}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `}_renderProgramPanel(e){let i=this._config;if(!(i.auto_advance_switch||i.reverse_switch||i.multiplier_number||i.repeat_number))return u;let s=i.multiplier_number?this.hass.states[i.multiplier_number]?.attributes:void 0,o=s?.min??0,c=s?.max??10,a=s?.step??.1;return p`
      <section class="panel">
        <div
          class="panel-header ${this._programCollapsed?"collapsed":""}"
          @click=${()=>this._programCollapsed=!this._programCollapsed}
        >
          <h2>Program Settings</h2>
          <ha-icon icon="mdi:chevron-down"></ha-icon>
        </div>
        ${this._programCollapsed?u:p`
                <div class="panel-body">
                  ${i.auto_advance_switch?this._renderSettingSwitch(i.auto_advance_switch,"Auto-advance","Automatically move on to the next enabled zone",e):u}
                  ${i.reverse_switch?this._renderSettingSwitch(i.reverse_switch,"Reverse order","Run the zone sequence back to front",e):u}
                  ${i.multiplier_number?p`
                          <div
                            class="setting-row"
                            style="flex-direction:column; align-items:stretch; gap:4px;"
                          >
                            <div class="setting-label">
                              <span class="primary">Duration multiplier</span>
                              <span class="secondary"
                                >Scales every zone's run time, e.g. for the season</span
                              >
                            </div>
                            <div class="slider-row">
                              <input
                                type="range"
                                min=${o}
                                max=${c}
                                step=${a}
                                .value=${String(this._multiplier)}
                                ?disabled=${e}
                                @input=${this._onMultiplierInput}
                                @change=${this._onMultiplierChange}
                              />
                              <span class="slider-value">×${this._multiplier.toFixed(1)}</span>
                            </div>
                          </div>
                        `:u}
                  ${i.repeat_number?this._renderRepeatStepper(i.repeat_number,e):u}
                  ${i.show_multiplier_preview!==!1?p`<span class="estimate"
                          >Estimated total runtime:
                          ${G(this._estimateTotalSeconds)}</span
                        >`:u}
                </div>
              `}
      </section>
    `}_renderSettingSwitch(e,i,n,s=!1){return p`
      <div class="setting-row">
        <div class="setting-label">
          <span class="primary">${i}</span>
          <span class="secondary">${n}</span>
        </div>
        <ha-switch
          .checked=${J(this.hass,e)}
          ?disabled=${s}
          @change=${()=>this._toggleSwitch(e)}
        ></ha-switch>
      </div>
    `}_renderRepeatStepper(e,i){let n=this.hass.states[e]?.attributes,s=n?.min??0,o=n?.max??10,c=L(this.hass,e,0);return p`
      <div class="setting-row">
        <div class="setting-label">
          <span class="primary">Repeat cycles</span>
          <span class="secondary">How many extra times to repeat the whole program</span>
        </div>
        <div class="stepper">
          <ha-icon-button
            ?disabled=${i||c<=s}
            @click=${()=>this._setNumber(e,Math.max(s,c-1))}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </ha-icon-button>
          <span class="slider-value">${c}</span>
          <ha-icon-button
            ?disabled=${i||c>=o}
            @click=${()=>this._setNumber(e,Math.min(o,c+1))}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `}_renderDiagnosticsPanel(){let e=this._config;return e.inputs&&e.inputs.length>0||e.internet_switch||e.device_tracker?p`
      <section class="panel">
        <div
          class="panel-header ${this._diagnosticsCollapsed?"collapsed":""}"
          @click=${()=>this._diagnosticsCollapsed=!this._diagnosticsCollapsed}
        >
          <h2>Diagnostics</h2>
          <ha-icon icon="mdi:chevron-down"></ha-icon>
        </div>
        ${this._diagnosticsCollapsed?u:p`
                <div class="panel-body">
                  ${e.inputs&&e.inputs.length>0?p`
                          <div class="chips">
                            ${e.inputs.map(n=>this._renderInputChip(n))}
                          </div>
                        `:u}
                  ${e.internet_switch?this._renderSettingSwitch(e.internet_switch,"Internet access","Device network/API access"):u}
                  ${e.device_tracker?this._renderTrackerRow(e.device_tracker):u}
                </div>
              `}
      </section>
    `:u}_renderInputChip(e){let i=J(this.hass,e.entity),n=e.name??this.hass.states[e.entity]?.attributes?.friendly_name??e.entity;return p`
      <span
        class="chip ${i?"on":""}"
        @click=${s=>this._openMoreInfo(s,e.entity)}
      >
        <ha-icon icon=${e.icon??ut}></ha-icon>
        ${n}
      </span>
    `}_renderTrackerRow(e){let i=this.hass.states[e],n=i?.state==="home",s=i?.attributes?.ip;return p`
      <div
        class="setting-row"
        @click=${o=>this._openMoreInfo(o,e)}
        style="cursor:pointer;"
      >
        <div class="setting-label">
          <span class="primary">Controller connectivity</span>
          <span class="secondary">${s?`IP ${s}`:e}</span>
        </div>
        <span class="status-pill ${n?"online":"offline"}"
          >${n?"Online":"Offline"}</span
        >
      </div>
    `}_toggleSwitch(e){if(!e||ke(this.hass,e))return;let i=e.split(".")[0];this.hass.callService(i,"toggle",{entity_id:e})}_setNumber(e,i){this.hass.callService("number","set_value",{entity_id:e,value:i})}_stepNumber(e,i,n){e.stopPropagation();let s=this.hass.states[i]?.attributes,o=s?.min??0,c=s?.max??86400,a=L(this.hass,i,0),d=Math.min(c,Math.max(o,a+n));this._setNumber(i,d)}_stopAll(e){let i=[this._config.controller_switch,...e.map(n=>n.config.switch)].filter(n=>!!n);i.length!==0&&this.hass.callService("switch","turn_off",{entity_id:i})}_openMoreInfo(e,i){e.stopPropagation(),ae(this,"hass-more-info",{entityId:i})}};b.styles=st,v([O({attribute:!1})],b.prototype,"hass",2),v([S()],b.prototype,"_config",2),v([S()],b.prototype,"_now",2),v([S()],b.prototype,"_programCollapsed",2),v([S()],b.prototype,"_diagnosticsCollapsed",2),v([S()],b.prototype,"_multiplierDraft",2),b=v([se(K)],b);window.customCards=window.customCards||[];window.customCards.push({type:K,name:"Irrigation / Sprinkler Card",description:"A polished card for ESPHome-based sprinkler/irrigation controllers, with live progress, program settings and diagnostics.",preview:!0});console.info(`%c HASSIO-IRRIGATION-CARD %c v${ot} `,"color: white; background: #03a9f4; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 4px;","color: #03a9f4; background: white; font-weight: 700; border-radius: 0 3px 3px 0; padding: 2px 4px;");export{b as HassioIrrigationCard};
//# sourceMappingURL=hassio-irrigation-card.js.map
