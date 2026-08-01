var Tt=Object.defineProperty;var fe=Object.getOwnPropertyDescriptor;var f=(r,e)=>()=>(r&&(e=r(r=0)),e);var ge=(r,e)=>{for(var t in e)Tt(r,t,{get:e[t],enumerable:!0})};var v=(r,e,t,i)=>{for(var n=i>1?void 0:i?fe(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(n=(i?a(e,t,n):a(n))||n);return i&&n&&Tt(e,t,n),n};var Q,X,dt,Rt,H,zt,Z,It,pt,ht=f(()=>{Q=globalThis,X=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),Rt=new WeakMap,H=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(X&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=Rt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Rt.set(t,e))}return e}toString(){return this.cssText}},zt=r=>new H(typeof r=="string"?r:r+"",void 0,dt),Z=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,n,o)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[o+1],r[0]);return new H(t,r,dt)},It=(r,e)=>{if(X)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),n=Q.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)}},pt=X?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return zt(t)})(r):r});var _e,ve,be,ye,we,$e,tt,Dt,xe,Se,F,j,et,Pt,x,q=f(()=>{ht();ht();({is:_e,defineProperty:ve,getOwnPropertyDescriptor:be,getOwnPropertyNames:ye,getOwnPropertySymbols:we,getPrototypeOf:$e}=Object),tt=globalThis,Dt=tt.trustedTypes,xe=Dt?Dt.emptyScript:"",Se=tt.reactiveElementPolyfillSupport,F=(r,e)=>r,j={toAttribute(r,e){switch(e){case Boolean:r=r?xe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},et=(r,e)=>!_e(r,e),Pt={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:et};Symbol.metadata??=Symbol("metadata"),tt.litPropertyMetadata??=new WeakMap;x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Pt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&ve(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){let{get:n,set:o}=be(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:n,set(a){let c=n?.call(this);o?.call(this,a),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Pt}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;let e=$e(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){let t=this.properties,i=[...ye(t),...we(t)];for(let n of i)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let n of i)t.unshift(pt(n))}else e!==void 0&&t.push(pt(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return It(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:j).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){let i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let o=i.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:j;this._$Em=n;let c=a.fromAttribute(t,o.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(e,t,i,n=!1,o){if(e!==void 0){let a=this.constructor;if(n===!1&&(o=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??et)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:o},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,o]of i){let{wrapped:a}=o,c=this[n];a!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,o,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[F("elementProperties")]=new Map,x[F("finalized")]=new Map,Se?.({ReactiveElement:x}),(tt.reactiveElementVersions??=[]).push("2.1.2")});function Wt(r,e){if(!wt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(e):e}function N(r,e,t=r,i){if(e===D)return e;let n=i!==void 0?t._$Co?.[i]:t._$Cl,o=V(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(r),n._$AT(r,t,i)),i!==void 0?(t._$Co??=[])[i]=n:t._$Cl=n),n!==void 0&&(e=N(r,n._$AS(r,e.values),n,i)),e}var yt,Nt,it,Ot,Ft,C,jt,Ae,I,B,V,wt,Ee,mt,W,Mt,Lt,R,Ut,Ht,qt,$t,p,Le,Ue,D,l,Zt,z,ke,Y,ft,K,O,gt,_t,vt,bt,Ce,Bt,nt=f(()=>{yt=globalThis,Nt=r=>r,it=yt.trustedTypes,Ot=it?it.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ft="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,jt="?"+C,Ae=`<${jt}>`,I=document,B=()=>I.createComment(""),V=r=>r===null||typeof r!="object"&&typeof r!="function",wt=Array.isArray,Ee=r=>wt(r)||typeof r?.[Symbol.iterator]=="function",mt=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mt=/-->/g,Lt=/>/g,R=RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ut=/'/g,Ht=/"/g,qt=/^(?:script|style|textarea|title)$/i,$t=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=$t(1),Le=$t(2),Ue=$t(3),D=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),Zt=new WeakMap,z=I.createTreeWalker(I,129);ke=(r,e)=>{let t=r.length-1,i=[],n,o=e===2?"<svg>":e===3?"<math>":"",a=W;for(let c=0;c<t;c++){let s=r[c],d,m,h=-1,g=0;for(;g<s.length&&(a.lastIndex=g,m=a.exec(s),m!==null);)g=a.lastIndex,a===W?m[1]==="!--"?a=Mt:m[1]!==void 0?a=Lt:m[2]!==void 0?(qt.test(m[2])&&(n=RegExp("</"+m[2],"g")),a=R):m[3]!==void 0&&(a=R):a===R?m[0]===">"?(a=n??W,h=-1):m[1]===void 0?h=-2:(h=a.lastIndex-m[2].length,d=m[1],a=m[3]===void 0?R:m[3]==='"'?Ht:Ut):a===Ht||a===Ut?a=R:a===Mt||a===Lt?a=W:(a=R,n=void 0);let _=a===R&&r[c+1].startsWith("/>")?" ":"";o+=a===W?s+Ae:h>=0?(i.push(d),s.slice(0,h)+Ft+s.slice(h)+C+_):s+C+(h===-2?c:_)}return[Wt(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Y=class r{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,a=0,c=e.length-1,s=this.parts,[d,m]=ke(e,t);if(this.el=r.createElement(d,i),z.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=z.nextNode())!==null&&s.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(let h of n.getAttributeNames())if(h.endsWith(Ft)){let g=m[a++],_=n.getAttribute(h).split(C),P=/([.?@])?(.*)/.exec(g);s.push({type:1,index:o,name:P[2],strings:_,ctor:P[1]==="."?gt:P[1]==="?"?_t:P[1]==="@"?vt:O}),n.removeAttribute(h)}else h.startsWith(C)&&(s.push({type:6,index:o}),n.removeAttribute(h));if(qt.test(n.tagName)){let h=n.textContent.split(C),g=h.length-1;if(g>0){n.textContent=it?it.emptyScript:"";for(let _=0;_<g;_++)n.append(h[_],B()),z.nextNode(),s.push({type:2,index:++o});n.append(h[g],B())}}}else if(n.nodeType===8)if(n.data===jt)s.push({type:2,index:o});else{let h=-1;for(;(h=n.data.indexOf(C,h+1))!==-1;)s.push({type:7,index:o}),h+=C.length-1}o++}}static createElement(e,t){let i=I.createElement("template");return i.innerHTML=e,i}};ft=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??I).importNode(t,!0);z.currentNode=n;let o=z.nextNode(),a=0,c=0,s=i[0];for(;s!==void 0;){if(a===s.index){let d;s.type===2?d=new K(o,o.nextSibling,this,e):s.type===1?d=new s.ctor(o,s.name,s.strings,this,e):s.type===6&&(d=new bt(o,this,e)),this._$AV.push(d),s=i[++c]}a!==s?.index&&(o=z.nextNode(),a++)}return z.currentNode=I,n}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},K=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),V(e)?e===l||e==null||e===""?(this._$AH!==l&&this._$AR(),this._$AH=l):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ee(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==l&&V(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Y.createElement(Wt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{let o=new ft(n,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=Zt.get(e.strings);return t===void 0&&Zt.set(e.strings,t=new Y(e)),t}k(e){wt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,n=0;for(let o of e)n===t.length?t.push(i=new r(this.O(B()),this.O(B()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=Nt(e).nextSibling;Nt(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,o){this.type=1,this._$AH=l,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=l}_$AI(e,t=this,i,n){let o=this.strings,a=!1;if(o===void 0)e=N(this,e,t,0),a=!V(e)||e!==this._$AH&&e!==D,a&&(this._$AH=e);else{let c=e,s,d;for(e=o[0],s=0;s<o.length-1;s++)d=N(this,c[i+s],t,s),d===D&&(d=this._$AH[s]),a||=!V(d)||d!==this._$AH[s],d===l?e=l:e!==l&&(e+=(d??"")+o[s+1]),this._$AH[s]=d}a&&!n&&this.j(e)}j(e){e===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},gt=class extends O{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===l?void 0:e}},_t=class extends O{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==l)}},vt=class extends O{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??l)===D)return;let i=this._$AH,n=e===l&&i!==l||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==l&&(i===l||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},bt=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}},Ce=yt.litHtmlPolyfillSupport;Ce?.(Y,K),(yt.litHtmlVersions??=[]).push("3.3.3");Bt=(r,e,t)=>{let i=t?.renderBefore??e,n=i._$litPart$;if(n===void 0){let o=t?.renderBefore??null;i._$litPart$=n=new K(e.insertBefore(B(),o),o,void 0,t??{})}return n._$AI(r),n}});var xt,y,Te,Vt=f(()=>{q();q();nt();nt();xt=globalThis,y=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Bt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};y._$litElement$=!0,y.finalized=!0,xt.litElementHydrateSupport?.({LitElement:y});Te=xt.litElementPolyfillSupport;Te?.({LitElement:y});(xt.litElementVersions??=[]).push("4.2.2")});var Yt=f(()=>{});var rt=f(()=>{q();nt();Vt();Yt()});var ot,Kt=f(()=>{ot=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)}});function M(r){return(e,t)=>typeof t=="object"?ze(r,e,t):((i,n,o)=>{let a=n.hasOwnProperty(o);return n.constructor.createProperty(o,i),a?Object.getOwnPropertyDescriptor(n,o):void 0})(r,e,t)}var Re,ze,St=f(()=>{q();Re={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:et},ze=(r=Re,e,t)=>{let{kind:i,metadata:n}=t,o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),i==="accessor"){let{name:a}=t;return{set(c){let s=e.get.call(this);e.set.call(this,c),this.requestUpdate(a,s,r,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,r,c),c}}}if(i==="setter"){let{name:a}=t;return function(c){let s=this[a];e.call(this,c),this.requestUpdate(a,s,r,!0,c)}}throw Error("Unsupported decorator location: "+i)}});function S(r){return M({...r,state:!0,attribute:!1})}var Gt=f(()=>{St();});var Jt=f(()=>{});var L=f(()=>{});var Qt=f(()=>{L();});var Xt=f(()=>{L();});var te=f(()=>{L();});var ee=f(()=>{L();});var ie=f(()=>{L();});var At=f(()=>{Kt();St();Gt();Jt();Qt();Xt();te();ee();ie()});var ne,re,st,Et=f(()=>{(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(ne||(ne={})),function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"}(re||(re={}));st=function(r,e,t,i){i=i||{},t=t??{};var n=new Event(e,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return n.detail=t,r.dispatchEvent(n),n}});var ae,G,ct,se,ce,le,ue,A,lt=f(()=>{"use strict";ae="1.2.0",G="hassio-irrigation-card",ct="hassio-irrigation-card-editor",se="mdi:sprinkler-variant",ce="mdi:water-pump",le="mdi:water-pump-off",ue="mdi:electric-switch",A={zoneSwitch:/^switch\.(.+)_zone_(\d+)$/,zoneEnableSwitch:/^switch\.(.+)_enable_zone_(\d+)$/,zoneDuration:/^number\.(.+)_zone_(\d+)_run_duration$/,autoAdvance:/^switch\.(.+)_auto_advance$/,reverse:/^switch\.(.+)_reverse$/,multiplier:/^number\.(.+)_multiplier$/,repeat:/^number\.(.+)_repeat$/,input:/^binary_sensor\.(.+)_(input_\d+|pad_(rx|tx)\d+_as_input)$/}});function U(r){let e=Math.max(0,Math.round(r)),t=Math.floor(e/3600),i=Math.floor(e%3600/60),n=e%60,o=[];return t>0&&o.push(`${t}h`),(t>0||i>0)&&o.push(`${i}m`),o.push(`${n}s`),o.join(" ")}function T(r,e,t=0){if(!e)return t;let i=r.states[e];if(!i||i.state==="unknown"||i.state==="unavailable")return t;let n=Number(i.state);return Number.isFinite(n)?n:t}function J(r,e){return e?r.states[e]?.state==="on":!1}function kt(r,e){if(!e)return!0;let t=r.states[e];return!t||t.state==="unavailable"}function de(r,e,t,i,n){let o=r.states[e.switch],a=o?.state==="on",c=e.enable_switch?J(r,e.enable_switch):!0,s=T(r,e.duration_number,0),d=Math.max(0,s*i),m=d,h=0;if(a&&o?.last_changed){let g=new Date(o.last_changed).getTime(),_=Math.max(0,(n-g)/1e3);m=Math.max(0,d-_),h=d>0?Math.min(100,_/d*100):0}return{config:e,index:t,active:a,enabled:c,durationSeconds:s,effectiveDurationSeconds:d,remainingSeconds:m,progressPct:h,unavailable:kt(r,e.switch)}}function ut(r,e){let t=Object.keys(r.states).filter(u=>e?u.includes(e):!0),i=new Map,n,o,a,c,s=[],d=[];for(let u of t){let k;if(k=u.match(A.zoneSwitch)){let w=Number(k[2]),$=i.get(w)??{switch:""};$.switch=u,$.name=`Zone ${w}`,i.set(w,$);continue}if(k=u.match(A.zoneEnableSwitch)){let w=Number(k[2]),$=i.get(w)??{switch:""};$.enable_switch=u,i.set(w,$);continue}if(k=u.match(A.zoneDuration)){let w=Number(k[2]),$=i.get(w)??{switch:""};$.duration_number=u,i.set(w,$);continue}if(A.autoAdvance.test(u)){n=u;continue}if(A.reverse.test(u)){o=u;continue}if(A.multiplier.test(u)){a=u;continue}if(A.repeat.test(u)){c=u;continue}if(A.input.test(u)){s.push({entity:u});continue}u.startsWith("switch.")&&(!e||u.includes(e))&&d.push(u)}let m=new Set([...i.values()].map(u=>u.switch)),h,g=(n??o)?.replace(/_(auto_advance|reverse)$/,"");g&&(h=d.find(u=>u===g||u.startsWith(g))),h||(h=d.find(u=>!m.has(u)&&!u.includes("internet")));let _=d.find(u=>u.includes("internet")),P=[...i.entries()].sort(([u],[k])=>u-k).map(([,u])=>u).filter(u=>!!u.switch),me=t.find(u=>u.startsWith("device_tracker.")&&(!e||u.includes(e)));return{controller_switch:h,auto_advance_switch:n,reverse_switch:o,multiplier_number:a,repeat_number:c,internet_switch:_,device_tracker:me,zones:P,inputs:s}}var Ct=f(()=>{"use strict";lt()});var pe={};ge(pe,{HassioIrrigationCardEditor:()=>E});var E,he=f(()=>{"use strict";rt();At();Et();lt();Ct();E=class extends y{constructor(){super(...arguments);this._prefixHint="";this._autoDetect=()=>{let t=ut(this.hass,this._prefixHint||void 0);this._config={...this._config,...t,zones:t.zones.length>0?t.zones:this._config.zones},this._emit()}}setConfig(t){this._config={...t,zones:t.zones??[]}}render(){return!this.hass||!this._config?p``:p`
      <div class="section">
        <h3>Card</h3>
        <ha-textfield
          label="Title"
          .value=${this._config.title??""}
          @input=${t=>this._set("title",t.target.value)}
        ></ha-textfield>
        <ha-formfield label="Compact mode (hide per-zone duration steppers)">
          <ha-switch
            .checked=${!!this._config.compact}
            @change=${t=>this._set("compact",t.target.checked)}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label="Start Program Settings / Diagnostics collapsed">
          <ha-switch
            .checked=${!!this._config.start_collapsed}
            @change=${t=>this._set("start_collapsed",t.target.checked)}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label="Show diagnostics panel">
          <ha-switch
            .checked=${this._config.show_diagnostics!==!1}
            @change=${t=>this._set("show_diagnostics",t.target.checked)}
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
            @input=${t=>this._prefixHint=t.target.value}
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
        ${this._config.zones.map((t,i)=>this._renderZoneEditor(t,i))}
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
        ${(this._config.inputs??[]).map((t,i)=>this._renderInputEditor(t,i))}
        <button class="btn" @click=${this._addInput}>
          <ha-icon icon="mdi:plus"></ha-icon>
          Add input
        </button>
      </div>
    `}_renderZoneEditor(t,i){return p`
      <div class="item-card">
        <div class="item-header">
          <b>${t.name||`Zone ${i+1}`}</b>
          <ha-icon-button class="remove" @click=${()=>this._removeZone(i)}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </ha-icon-button>
        </div>
        <ha-textfield
          label="Name"
          .value=${t.name??""}
          @input=${n=>this._updateZone(i,{name:n.target.value})}
        ></ha-textfield>
        ${this._zoneEntityPicker(i,"switch","Zone switch",["switch"])}
        ${this._zoneEntityPicker(i,"enable_switch","Enable switch (optional)",["switch"])}
        ${this._zoneEntityPicker(i,"duration_number","Run duration number (optional)",["number"])}
        ${this._zoneEntityPicker(i,"smart_irrigation_sensor","Smart Irrigation duration sensor (optional)",["sensor"])}
      </div>
    `}_renderInputEditor(t,i){return p`
      <div class="item-card">
        <div class="item-header">
          <b>${t.name||t.entity||`Input ${i+1}`}</b>
          <ha-icon-button class="remove" @click=${()=>this._removeInput(i)}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </ha-icon-button>
        </div>
        <ha-textfield
          label="Label"
          .value=${t.name??""}
          @input=${n=>this._updateInput(i,{name:n.target.value})}
        ></ha-textfield>
        ${this._inputEntityPicker(i)}
      </div>
    `}_entityPicker(t,i,n){let o=this._config[t]??"";return p`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${o}
        .label=${i}
        .includeDomains=${n}
        allow-custom-entity
        @value-changed=${a=>this._set(t,a.detail.value)}
      ></ha-entity-picker>
    `}_zoneEntityPicker(t,i,n,o){let c=this._config.zones[t][i]??"";return p`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${c}
        .label=${n}
        .includeDomains=${o}
        allow-custom-entity
        @value-changed=${s=>this._updateZone(t,{[i]:s.detail.value})}
      ></ha-entity-picker>
    `}_inputEntityPicker(t){let i=(this._config.inputs??[])[t];return p`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${i.entity??""}
        .label=${"Entity"}
        .includeDomains=${["binary_sensor"]}
        allow-custom-entity
        @value-changed=${n=>this._updateInput(t,{entity:n.detail.value})}
      ></ha-entity-picker>
    `}_set(t,i){this._config={...this._config,[t]:i},this._emit()}_updateZone(t,i){let n=[...this._config.zones];n[t]={...n[t],...i},this._config={...this._config,zones:n},this._emit()}_addZone(){let t=[...this._config.zones,{switch:"",name:`Zone ${this._config.zones.length+1}`}];this._config={...this._config,zones:t},this._emit()}_removeZone(t){let i=this._config.zones.filter((n,o)=>o!==t);this._config={...this._config,zones:i},this._emit()}_updateInput(t,i){let n=[...this._config.inputs??[]];n[t]={...n[t],...i},this._config={...this._config,inputs:n},this._emit()}_addInput(){let t=[...this._config.inputs??[],{entity:""}];this._config={...this._config,inputs:t},this._emit()}_removeInput(t){let i=(this._config.inputs??[]).filter((n,o)=>o!==t);this._config={...this._config,inputs:i},this._emit()}_emit(){st(this,"config-changed",{config:this._config})}};E.styles=Z`
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
  `,v([M({attribute:!1})],E.prototype,"hass",2),v([S()],E.prototype,"_config",2),v([S()],E.prototype,"_prefixHint",2),E=v([ot(ct)],E)});rt();At();Et();rt();var oe=Z`
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

  .zone-ai-row {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    color: var(--primary-color);
  }

  .zone-ai-row ha-icon {
    --mdc-icon-size: 15px;
    flex-shrink: 0;
  }

  .zone-ai-row span {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .zone-ai-row ha-icon-button {
    --mdc-icon-button-size: 22px;
    --mdc-icon-size: 15px;
    flex-shrink: 0;
  }

  ha-icon-button.recalculate {
    --mdc-icon-button-size: 32px;
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
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
`;lt();Ct();var Ie=1e3,b=class extends y{constructor(){super(...arguments);this._now=Date.now();this._programCollapsed=!1;this._diagnosticsCollapsed=!0;this._multiplierDraft=null;this._recalculateSmartIrrigation=()=>{this.hass.callService("smart_irrigation","calculate_all_zones",{})};this._onMultiplierInput=t=>{this._multiplierDraft=Number(t.target.value)};this._onMultiplierChange=t=>{let i=Number(t.target.value);this._setNumber(this._config.multiplier_number,i),this._multiplierDraft=null}}static async getConfigElement(){return await Promise.resolve().then(()=>(he(),pe)),document.createElement(ct)}static getStubConfig(t){let i=ut(t);return i.zones.length>0?{type:`custom:${G}`,title:"Irrigation",...i}:{type:`custom:${G}`,title:"Irrigation",zones:[{switch:"switch.REPLACE_ME_zone_1",name:"Zone 1"},{switch:"switch.REPLACE_ME_zone_2",name:"Zone 2"}]}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(t.zones&&!Array.isArray(t.zones))throw new Error("`zones` must be a list");this._config={show_diagnostics:!0,show_multiplier_preview:!0,compact:!1,...t,zones:t.zones??[]},this._programCollapsed=t.start_collapsed??!1,this._diagnosticsCollapsed=t.start_collapsed??!0}getCardSize(){return 2+Math.ceil((this._config?.zones?.length??0)/3)+(this._config?.show_diagnostics?2:0)}updated(t){super.updated(t);let i=this._zoneStates().some(n=>n.active);i&&!this._tickHandle?this._tickHandle=setInterval(()=>{this._now=Date.now()},Ie):!i&&this._tickHandle&&(clearInterval(this._tickHandle),this._tickHandle=void 0)}disconnectedCallback(){super.disconnectedCallback(),this._tickHandle&&(clearInterval(this._tickHandle),this._tickHandle=void 0)}get _multiplier(){return this._multiplierDraft!==null?this._multiplierDraft:T(this.hass,this._config.multiplier_number,1)}get _repeat(){return T(this.hass,this._config.repeat_number,0)}get _mowerBlocking(){let t=this._config.lawnmower_entity;return t?this.hass.states[t]?.state!=="docked":!1}get _smartIrrigationAvailable(){return!!this.hass.services?.smart_irrigation?.calculate_all_zones&&this._config.zones.some(t=>!!t.smart_irrigation_sensor)}_zoneStates(){return!this.hass||!this._config?[]:this._config.zones.map((t,i)=>de(this.hass,t,i,this._multiplier,this._now))}get _estimateTotalSeconds(){return this._zoneStates().filter(i=>i.enabled).reduce((i,n)=>i+n.effectiveDurationSeconds,0)*(this._repeat+1)}render(){if(!this._config||!this.hass)return p``;let t=this._zoneStates(),i=t.some(m=>m.active),n=t.find(m=>m.active),o=!!this._config.controller_switch,a=o?J(this.hass,this._config.controller_switch):!1,c=!!this._config.device_tracker,s=c?this.hass.states[this._config.device_tracker]?.state==="home":void 0,d=this._mowerBlocking;return p`
      <ha-card>
        <div class="header">
          <div class="header-title">
            <ha-icon icon=${i?ce:le}></ha-icon>
            <h1>${this._config.title??"Irrigation"}</h1>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            ${i?p`<span class="status-pill running"
                    >Running${n?`: ${this._zoneLabel(n)}`:""}</span
                  >`:p`<span class="status-pill">Idle</span>`}
            ${c?p`<span class="status-pill ${s?"online":"offline"}"
                    >${s?"Online":"Offline"}</span
                  >`:l}
            ${this._smartIrrigationAvailable?p`<ha-icon-button
                    class="recalculate"
                    title="Recalculate Smart Irrigation durations"
                    @click=${this._recalculateSmartIrrigation}
                  >
                    <ha-icon icon="mdi:weather-partly-rainy"></ha-icon>
                  </ha-icon-button>`:l}
          </div>
        </div>

        ${d?this._renderLockedNote():l}
        ${o?this._renderMasterRow(a,t,d):l}
        ${t.length>0?this._renderZones(t,d):this._renderEmptyState()}
        ${this._renderProgramPanel(d)}
        ${this._config.show_diagnostics?this._renderDiagnosticsPanel():l}
      </ha-card>
    `}_zoneLabel(t){return t.config.name??this.hass.states[t.config.switch]?.attributes?.friendly_name??`Zone ${t.index+1}`}_renderEmptyState(){return p`
      <div class="empty-state">
        <ha-icon icon="mdi:sprinkler-variant" style="--mdc-icon-size: 32px;"></ha-icon>
        <span>No zones configured yet. Edit this card to add your irrigation zones.</span>
      </div>
    `}_renderLockedNote(){return p`
      <div class="locked-note">
        <ha-icon icon="mdi:robot-mower"></ha-icon>
        <span>Mower isn't docked - irrigation controls are locked until it's home.</span>
      </div>
    `}_renderMasterRow(t,i,n){return p`
      <div class="master-row">
        <button
          class="master-button"
          ?disabled=${n}
          @click=${()=>!n&&this._toggleSwitch(this._config.controller_switch)}
        >
          <ha-icon icon=${t?"mdi:stop":"mdi:play"}></ha-icon>
          ${t?"Stop Program":"Start Program"}
        </button>
        <ha-icon-button
          class="stop-all"
          title="Emergency stop - closes every valve immediately"
          @click=${()=>this._stopAll(i)}
        >
          <ha-icon icon="mdi:alert-octagon-outline"></ha-icon>
        </ha-icon-button>
      </div>
    `}_renderZones(t,i){return p`
      <div class="zones-grid">${t.map(n=>this._renderZoneTile(n,i))}</div>
    `}_renderZoneTile(t,i){let n=["zone-tile",t.active?"active":"",t.enabled?"":"disabled",t.unavailable?"unavailable":"",i?"locked":""].filter(Boolean).join(" "),o=t.unavailable?"Unavailable":t.active?`${U(t.remainingSeconds)} left`:t.enabled?t.config.duration_number?`Off \xB7 ${U(t.durationSeconds)}`:"Off":"Disabled";return p`
      <div
        class=${n}
        role="button"
        tabindex="0"
        @click=${()=>!t.unavailable&&!i&&this._toggleSwitch(t.config.switch)}
        @keydown=${a=>{(a.key==="Enter"||a.key===" ")&&!t.unavailable&&!i&&(a.preventDefault(),this._toggleSwitch(t.config.switch))}}
      >
        <div class="zone-top">
          <ha-icon class="zone-icon" icon=${t.config.icon??se}></ha-icon>
          ${t.config.enable_switch?p`<ha-switch
                  class="zone-enable"
                  .checked=${t.enabled}
                  ?disabled=${i}
                  @click=${a=>a.stopPropagation()}
                  @change=${()=>this._toggleSwitch(t.config.enable_switch)}
                ></ha-switch>`:l}
        </div>
        <span class="zone-name">${this._zoneLabel(t)}</span>
        <span class="zone-state">${o}</span>
        ${!t.active&&t.config.duration_number&&!this._config.compact?this._renderDurationStepper(t,i):l}
        ${!t.active&&!this._config.compact&&t.config.smart_irrigation_sensor&&t.config.duration_number?this._renderSmartIrrigationRow(t,i):l}
        ${t.active?p`<div class="zone-progress"><div style="width:${t.progressPct}%"></div></div>`:l}
      </div>
    `}_renderDurationStepper(t,i){let n=t.config.duration_number;return p`
      <div class="zone-duration-row">
        <span>${U(t.durationSeconds)}</span>
        <div class="stepper">
          <ha-icon-button
            ?disabled=${i}
            @click=${o=>!i&&this._stepNumber(o,n,-30)}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            ?disabled=${i}
            @click=${o=>!i&&this._stepNumber(o,n,30)}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `}_renderSmartIrrigationRow(t,i){let n=T(this.hass,t.config.smart_irrigation_sensor,-1);return n<0||Math.abs(n-t.durationSeconds)<5?l:p`
      <div class="zone-ai-row">
        <ha-icon icon="mdi:weather-partly-rainy"></ha-icon>
        <span>Suggested ${U(n)}</span>
        <ha-icon-button
          title="Apply suggested duration"
          ?disabled=${i}
          @click=${o=>{o.stopPropagation(),i||this._applySmartIrrigationDuration(t)}}
        >
          <ha-icon icon="mdi:check"></ha-icon>
        </ha-icon-button>
      </div>
    `}_renderProgramPanel(t){let i=this._config;if(!(i.auto_advance_switch||i.reverse_switch||i.multiplier_number||i.repeat_number))return l;let o=i.multiplier_number?this.hass.states[i.multiplier_number]?.attributes:void 0,a=o?.min??0,c=o?.max??10,s=o?.step??.1;return p`
      <section class="panel">
        <div
          class="panel-header ${this._programCollapsed?"collapsed":""}"
          @click=${()=>this._programCollapsed=!this._programCollapsed}
        >
          <h2>Program Settings</h2>
          <ha-icon icon="mdi:chevron-down"></ha-icon>
        </div>
        ${this._programCollapsed?l:p`
                <div class="panel-body">
                  ${i.auto_advance_switch?this._renderSettingSwitch(i.auto_advance_switch,"Auto-advance","Automatically move on to the next enabled zone",t):l}
                  ${i.reverse_switch?this._renderSettingSwitch(i.reverse_switch,"Reverse order","Run the zone sequence back to front",t):l}
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
                                min=${a}
                                max=${c}
                                step=${s}
                                .value=${String(this._multiplier)}
                                ?disabled=${t}
                                @input=${this._onMultiplierInput}
                                @change=${this._onMultiplierChange}
                              />
                              <span class="slider-value">×${this._multiplier.toFixed(1)}</span>
                            </div>
                          </div>
                        `:l}
                  ${i.repeat_number?this._renderRepeatStepper(i.repeat_number,t):l}
                  ${i.show_multiplier_preview!==!1?p`<span class="estimate"
                          >Estimated total runtime:
                          ${U(this._estimateTotalSeconds)}</span
                        >`:l}
                </div>
              `}
      </section>
    `}_renderSettingSwitch(t,i,n,o=!1){return p`
      <div class="setting-row">
        <div class="setting-label">
          <span class="primary">${i}</span>
          <span class="secondary">${n}</span>
        </div>
        <ha-switch
          .checked=${J(this.hass,t)}
          ?disabled=${o}
          @change=${()=>this._toggleSwitch(t)}
        ></ha-switch>
      </div>
    `}_renderRepeatStepper(t,i){let n=this.hass.states[t]?.attributes,o=n?.min??0,a=n?.max??10,c=T(this.hass,t,0);return p`
      <div class="setting-row">
        <div class="setting-label">
          <span class="primary">Repeat cycles</span>
          <span class="secondary">How many extra times to repeat the whole program</span>
        </div>
        <div class="stepper">
          <ha-icon-button
            ?disabled=${i||c<=o}
            @click=${()=>this._setNumber(t,Math.max(o,c-1))}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </ha-icon-button>
          <span class="slider-value">${c}</span>
          <ha-icon-button
            ?disabled=${i||c>=a}
            @click=${()=>this._setNumber(t,Math.min(a,c+1))}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `}_renderDiagnosticsPanel(){let t=this._config;return t.inputs&&t.inputs.length>0||t.internet_switch||t.device_tracker?p`
      <section class="panel">
        <div
          class="panel-header ${this._diagnosticsCollapsed?"collapsed":""}"
          @click=${()=>this._diagnosticsCollapsed=!this._diagnosticsCollapsed}
        >
          <h2>Diagnostics</h2>
          <ha-icon icon="mdi:chevron-down"></ha-icon>
        </div>
        ${this._diagnosticsCollapsed?l:p`
                <div class="panel-body">
                  ${t.inputs&&t.inputs.length>0?p`
                          <div class="chips">
                            ${t.inputs.map(n=>this._renderInputChip(n))}
                          </div>
                        `:l}
                  ${t.internet_switch?this._renderSettingSwitch(t.internet_switch,"Internet access","Device network/API access"):l}
                  ${t.device_tracker?this._renderTrackerRow(t.device_tracker):l}
                </div>
              `}
      </section>
    `:l}_renderInputChip(t){let i=J(this.hass,t.entity),n=t.name??this.hass.states[t.entity]?.attributes?.friendly_name??t.entity;return p`
      <span
        class="chip ${i?"on":""}"
        @click=${o=>this._openMoreInfo(o,t.entity)}
      >
        <ha-icon icon=${t.icon??ue}></ha-icon>
        ${n}
      </span>
    `}_renderTrackerRow(t){let i=this.hass.states[t],n=i?.state==="home",o=i?.attributes?.ip;return p`
      <div
        class="setting-row"
        @click=${a=>this._openMoreInfo(a,t)}
        style="cursor:pointer;"
      >
        <div class="setting-label">
          <span class="primary">Controller connectivity</span>
          <span class="secondary">${o?`IP ${o}`:t}</span>
        </div>
        <span class="status-pill ${n?"online":"offline"}"
          >${n?"Online":"Offline"}</span
        >
      </div>
    `}_toggleSwitch(t){if(!t||kt(this.hass,t))return;let i=t.split(".")[0];this.hass.callService(i,"toggle",{entity_id:t})}_setNumber(t,i){this.hass.callService("number","set_value",{entity_id:t,value:i})}_applySmartIrrigationDuration(t){let i=t.config.smart_irrigation_sensor,n=t.config.duration_number;if(!i||!n)return;let o=T(this.hass,i,-1);o<0||this._setNumber(n,o)}_stepNumber(t,i,n){t.stopPropagation();let o=this.hass.states[i]?.attributes,a=o?.min??0,c=o?.max??86400,s=T(this.hass,i,0),d=Math.min(c,Math.max(a,s+n));this._setNumber(i,d)}_stopAll(t){let i=[this._config.controller_switch,...t.map(n=>n.config.switch)].filter(n=>!!n);i.length!==0&&this.hass.callService("switch","turn_off",{entity_id:i})}_openMoreInfo(t,i){t.stopPropagation(),st(this,"hass-more-info",{entityId:i})}};b.styles=oe,v([M({attribute:!1})],b.prototype,"hass",2),v([S()],b.prototype,"_config",2),v([S()],b.prototype,"_now",2),v([S()],b.prototype,"_programCollapsed",2),v([S()],b.prototype,"_diagnosticsCollapsed",2),v([S()],b.prototype,"_multiplierDraft",2),b=v([ot(G)],b);window.customCards=window.customCards||[];window.customCards.push({type:G,name:"Irrigation / Sprinkler Card",description:"A polished card for ESPHome-based sprinkler/irrigation controllers, with live progress, program settings and diagnostics.",preview:!0});console.info(`%c HASSIO-IRRIGATION-CARD %c v${ae} `,"color: white; background: #03a9f4; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 4px;","color: #03a9f4; background: white; font-weight: 700; border-radius: 0 3px 3px 0; padding: 2px 4px;");export{b as HassioIrrigationCard};
//# sourceMappingURL=hassio-irrigation-card.js.map
