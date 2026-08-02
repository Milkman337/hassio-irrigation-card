var Rt=Object.defineProperty;var xe=Object.getOwnPropertyDescriptor;var g=(r,e)=>()=>(r&&(e=r(r=0)),e);var Se=(r,e)=>{for(var t in e)Rt(r,t,{get:e[t],enumerable:!0})};var v=(r,e,t,i)=>{for(var n=i>1?void 0:i?xe(e,t):e,a=r.length-1,o;a>=0;a--)(o=r[a])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Rt(e,t,n),n};var X,tt,ht,It,Z,Pt,F,Nt,mt,pt=g(()=>{X=globalThis,tt=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ht=Symbol(),It=new WeakMap,Z=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ht)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(tt&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=It.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&It.set(t,e))}return e}toString(){return this.cssText}},Pt=r=>new Z(typeof r=="string"?r:r+"",void 0,ht),F=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,n,a)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[a+1],r[0]);return new Z(t,r,ht)},Nt=(r,e)=>{if(tt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),n=X.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)}},mt=tt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return Pt(t)})(r):r});var ke,Ee,Ae,ze,Ce,Te,et,Mt,De,Re,j,B,it,Ot,x,q=g(()=>{pt();pt();({is:ke,defineProperty:Ee,getOwnPropertyDescriptor:Ae,getOwnPropertyNames:ze,getOwnPropertySymbols:Ce,getPrototypeOf:Te}=Object),et=globalThis,Mt=et.trustedTypes,De=Mt?Mt.emptyScript:"",Re=et.reactiveElementPolyfillSupport,j=(r,e)=>r,B={toAttribute(r,e){switch(e){case Boolean:r=r?De:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},it=(r,e)=>!ke(r,e),Ot={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:it};Symbol.metadata??=Symbol("metadata"),et.litPropertyMetadata??=new WeakMap;x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ot){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Ee(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){let{get:n,set:a}=Ae(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:n,set(o){let c=n?.call(this);a?.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ot}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;let e=Te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){let t=this.properties,i=[...ze(t),...Ce(t)];for(let n of i)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let n of i)t.unshift(mt(n))}else e!==void 0&&t.push(mt(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:B).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){let i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let a=i.getPropertyOptions(n),o=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:B;this._$Em=n;let c=o.fromAttribute(t,a.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(e,t,i,n=!1,a){if(e!==void 0){let o=this.constructor;if(n===!1&&(a=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??it)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:a},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),a!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,a]of i){let{wrapped:o}=a,c=this[n];o!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,a,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[j("elementProperties")]=new Map,x[j("finalized")]=new Map,Re?.({ReactiveElement:x}),(et.reactiveElementVersions??=[]).push("2.1.2")});function Kt(r,e){if(!$t(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ut!==void 0?Ut.createHTML(e):e}function M(r,e,t=r,i){if(e===I)return e;let n=i!==void 0?t._$Co?.[i]:t._$Cl,a=K(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(r),n._$AT(r,t,i)),i!==void 0?(t._$Co??=[])[i]=n:t._$Cl=n),n!==void 0&&(e=M(r,n._$AS(r,e.values),n,i)),e}var wt,Lt,nt,Ut,qt,z,Wt,Ie,R,V,K,$t,Pe,gt,W,Ht,Zt,T,Ft,jt,Vt,xt,d,Ke,Ye,I,l,Bt,D,Ne,Y,ft,G,O,_t,vt,bt,yt,Me,Yt,rt=g(()=>{wt=globalThis,Lt=r=>r,nt=wt.trustedTypes,Ut=nt?nt.createPolicy("lit-html",{createHTML:r=>r}):void 0,qt="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,Wt="?"+z,Ie=`<${Wt}>`,R=document,V=()=>R.createComment(""),K=r=>r===null||typeof r!="object"&&typeof r!="function",$t=Array.isArray,Pe=r=>$t(r)||typeof r?.[Symbol.iterator]=="function",gt=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,Zt=/>/g,T=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ft=/'/g,jt=/"/g,Vt=/^(?:script|style|textarea|title)$/i,xt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),d=xt(1),Ke=xt(2),Ye=xt(3),I=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),Bt=new WeakMap,D=R.createTreeWalker(R,129);Ne=(r,e)=>{let t=r.length-1,i=[],n,a=e===2?"<svg>":e===3?"<math>":"",o=W;for(let c=0;c<t;c++){let s=r[c],h,p,m=-1,f=0;for(;f<s.length&&(o.lastIndex=f,p=o.exec(s),p!==null);)f=o.lastIndex,o===W?p[1]==="!--"?o=Ht:p[1]!==void 0?o=Zt:p[2]!==void 0?(Vt.test(p[2])&&(n=RegExp("</"+p[2],"g")),o=T):p[3]!==void 0&&(o=T):o===T?p[0]===">"?(o=n??W,m=-1):p[1]===void 0?m=-2:(m=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?T:p[3]==='"'?jt:Ft):o===jt||o===Ft?o=T:o===Ht||o===Zt?o=W:(o=T,n=void 0);let _=o===T&&r[c+1].startsWith("/>")?" ":"";a+=o===W?s+Ie:m>=0?(i.push(h),s.slice(0,m)+qt+s.slice(m)+z+_):s+z+(m===-2?c:_)}return[Kt(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Y=class r{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let a=0,o=0,c=e.length-1,s=this.parts,[h,p]=Ne(e,t);if(this.el=r.createElement(h,i),D.currentNode=this.el.content,t===2||t===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(n=D.nextNode())!==null&&s.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(let m of n.getAttributeNames())if(m.endsWith(qt)){let f=p[o++],_=n.getAttribute(m).split(z),N=/([.?@])?(.*)/.exec(f);s.push({type:1,index:a,name:N[2],strings:_,ctor:N[1]==="."?_t:N[1]==="?"?vt:N[1]==="@"?bt:O}),n.removeAttribute(m)}else m.startsWith(z)&&(s.push({type:6,index:a}),n.removeAttribute(m));if(Vt.test(n.tagName)){let m=n.textContent.split(z),f=m.length-1;if(f>0){n.textContent=nt?nt.emptyScript:"";for(let _=0;_<f;_++)n.append(m[_],V()),D.nextNode(),s.push({type:2,index:++a});n.append(m[f],V())}}}else if(n.nodeType===8)if(n.data===Wt)s.push({type:2,index:a});else{let m=-1;for(;(m=n.data.indexOf(z,m+1))!==-1;)s.push({type:7,index:a}),m+=z.length-1}a++}}static createElement(e,t){let i=R.createElement("template");return i.innerHTML=e,i}};ft=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??R).importNode(t,!0);D.currentNode=n;let a=D.nextNode(),o=0,c=0,s=i[0];for(;s!==void 0;){if(o===s.index){let h;s.type===2?h=new G(a,a.nextSibling,this,e):s.type===1?h=new s.ctor(a,s.name,s.strings,this,e):s.type===6&&(h=new yt(a,this,e)),this._$AV.push(h),s=i[++c]}o!==s?.index&&(a=D.nextNode(),o++)}return D.currentNode=R,n}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},G=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),K(e)?e===l||e==null||e===""?(this._$AH!==l&&this._$AR(),this._$AH=l):e!==this._$AH&&e!==I&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Pe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==l&&K(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Y.createElement(Kt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{let a=new ft(n,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Bt.get(e.strings);return t===void 0&&Bt.set(e.strings,t=new Y(e)),t}k(e){$t(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,n=0;for(let a of e)n===t.length?t.push(i=new r(this.O(V()),this.O(V()),this,this.options)):i=t[n],i._$AI(a),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=Lt(e).nextSibling;Lt(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,a){this.type=1,this._$AH=l,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=l}_$AI(e,t=this,i,n){let a=this.strings,o=!1;if(a===void 0)e=M(this,e,t,0),o=!K(e)||e!==this._$AH&&e!==I,o&&(this._$AH=e);else{let c=e,s,h;for(e=a[0],s=0;s<a.length-1;s++)h=M(this,c[i+s],t,s),h===I&&(h=this._$AH[s]),o||=!K(h)||h!==this._$AH[s],h===l?e=l:e!==l&&(e+=(h??"")+a[s+1]),this._$AH[s]=h}o&&!n&&this.j(e)}j(e){e===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},_t=class extends O{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===l?void 0:e}},vt=class extends O{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==l)}},bt=class extends O{constructor(e,t,i,n,a){super(e,t,i,n,a),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??l)===I)return;let i=this._$AH,n=e===l&&i!==l||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==l&&(i===l||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},yt=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}},Me=wt.litHtmlPolyfillSupport;Me?.(Y,G),(wt.litHtmlVersions??=[]).push("3.3.3");Yt=(r,e,t)=>{let i=t?.renderBefore??e,n=i._$litPart$;if(n===void 0){let a=t?.renderBefore??null;i._$litPart$=n=new G(e.insertBefore(V(),a),a,void 0,t??{})}return n._$AI(r),n}});var St,y,Oe,Gt=g(()=>{q();q();rt();rt();St=globalThis,y=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Yt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};y._$litElement$=!0,y.finalized=!0,St.litElementHydrateSupport?.({LitElement:y});Oe=St.litElementPolyfillSupport;Oe?.({LitElement:y});(St.litElementVersions??=[]).push("4.2.2")});var Jt=g(()=>{});var at=g(()=>{q();rt();Gt();Jt()});var ot,Qt=g(()=>{ot=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)}});function L(r){return(e,t)=>typeof t=="object"?Ue(r,e,t):((i,n,a)=>{let o=n.hasOwnProperty(a);return n.constructor.createProperty(a,i),o?Object.getOwnPropertyDescriptor(n,a):void 0})(r,e,t)}var Le,Ue,kt=g(()=>{q();Le={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:it},Ue=(r=Le,e,t)=>{let{kind:i,metadata:n}=t,a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(t.name,r),i==="accessor"){let{name:o}=t;return{set(c){let s=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,s,r,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,r,c),c}}}if(i==="setter"){let{name:o}=t;return function(c){let s=this[o];e.call(this,c),this.requestUpdate(o,s,r,!0,c)}}throw Error("Unsupported decorator location: "+i)}});function S(r){return L({...r,state:!0,attribute:!1})}var Xt=g(()=>{kt();});var te=g(()=>{});var U=g(()=>{});var ee=g(()=>{U();});var ie=g(()=>{U();});var ne=g(()=>{U();});var re=g(()=>{U();});var ae=g(()=>{U();});var Et=g(()=>{Qt();kt();Xt();te();ee();ie();ne();re();ae()});var oe,se,ct,At=g(()=>{(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(oe||(oe={})),function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"}(se||(se={}));ct=function(r,e,t,i){i=i||{},t=t??{};var n=new Event(e,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return n.detail=t,r.dispatchEvent(n),n}});var le,J,lt,ue,de,he,me,k,ut=g(()=>{"use strict";le="1.4.0",J="hassio-irrigation-card",lt="hassio-irrigation-card-editor",ue="mdi:sprinkler-variant",de="mdi:water-pump",he="mdi:water-pump-off",me="mdi:electric-switch",k={zoneSwitch:/^switch\.(.+)_zone_(\d+)$/,zoneEnableSwitch:/^switch\.(.+)_enable_zone_(\d+)$/,zoneDuration:/^number\.(.+)_zone_(\d+)_run_duration$/,autoAdvance:/^switch\.(.+)_auto_advance$/,reverse:/^switch\.(.+)_reverse$/,multiplier:/^number\.(.+)_multiplier$/,repeat:/^number\.(.+)_repeat$/,input:/^binary_sensor\.(.+)_(input_\d+|pad_(rx|tx)\d+_as_input)$/}});function H(r){let e=Math.max(0,Math.round(r)),t=Math.floor(e/3600),i=Math.floor(e%3600/60),n=e%60,a=[];return t>0&&a.push(`${t}h`),(t>0||i>0)&&a.push(`${i}m`),a.push(`${n}s`),a.join(" ")}function C(r,e,t=0){if(!e)return t;let i=r.states[e];if(!i||i.state==="unknown"||i.state==="unavailable")return t;let n=Number(i.state);return Number.isFinite(n)?n:t}function Q(r,e){return e?r.states[e]?.state==="on":!1}function zt(r,e){if(!e)return!0;let t=r.states[e];return!t||t.state==="unavailable"}function pe(r,e,t,i,n){let a=r.states[e.switch],o=a?.state==="on",c=e.enable_switch?Q(r,e.enable_switch):!0,s=C(r,e.duration_number,0),h=Math.max(0,s*i),p=h,m=0;if(o&&a?.last_changed){let f=new Date(a.last_changed).getTime(),_=Math.max(0,(n-f)/1e3);p=Math.max(0,h-_),m=h>0?Math.min(100,_/h*100):0}return{config:e,index:t,active:o,enabled:c,durationSeconds:s,effectiveDurationSeconds:h,remainingSeconds:p,progressPct:m,unavailable:zt(r,e.switch)}}function dt(r,e){let t=Object.keys(r.states).filter(u=>e?u.includes(e):!0),i=new Map,n,a,o,c,s=[],h=[];for(let u of t){let A;if(A=u.match(k.zoneSwitch)){let w=Number(A[2]),$=i.get(w)??{switch:""};$.switch=u,$.name=`Zone ${w}`,i.set(w,$);continue}if(A=u.match(k.zoneEnableSwitch)){let w=Number(A[2]),$=i.get(w)??{switch:""};$.enable_switch=u,i.set(w,$);continue}if(A=u.match(k.zoneDuration)){let w=Number(A[2]),$=i.get(w)??{switch:""};$.duration_number=u,i.set(w,$);continue}if(k.autoAdvance.test(u)){n=u;continue}if(k.reverse.test(u)){a=u;continue}if(k.multiplier.test(u)){o=u;continue}if(k.repeat.test(u)){c=u;continue}if(k.input.test(u)){s.push({entity:u});continue}u.startsWith("switch.")&&(!e||u.includes(e))&&h.push(u)}let p=new Set([...i.values()].map(u=>u.switch)),m,f=(n??a)?.replace(/_(auto_advance|reverse)$/,"");f&&(m=h.find(u=>u===f||u.startsWith(f))),m||(m=h.find(u=>!p.has(u)&&!u.includes("internet")));let _=h.find(u=>u.includes("internet")),N=[...i.entries()].sort(([u],[A])=>u-A).map(([,u])=>u).filter(u=>!!u.switch),$e=t.find(u=>u.startsWith("device_tracker.")&&(!e||u.includes(e)));return{controller_switch:m,auto_advance_switch:n,reverse_switch:a,multiplier_number:o,repeat_number:c,internet_switch:_,device_tracker:$e,zones:N,inputs:s}}var Ct=g(()=>{"use strict";ut()});var fe,ge=g(()=>{fe={common:{zone_n:"Zone {n}",input_n:"Input {n}"},card:{default_title:"Irrigation",status:{idle:"Idle",running:"Running",running_zone:"Running: {zone}",online:"Online",offline:"Offline"},master:{start:"Start Program",stop:"Stop Program",stop_all:"Emergency stop - closes every valve immediately",trigger_automation:"Manually trigger this automation now",start_calculated:"Start Calculated Program"},zone:{unavailable:"Unavailable",disabled:"Disabled",off:"Off",off_duration:"Off \xB7 {duration}",left:"{duration} left",suggested:"Suggested {duration}",apply_suggested:"Apply suggested duration"},empty_state:"No zones configured yet. Edit this card to add your irrigation zones.",program_panel:{title:"Program Settings",auto_advance:"Auto-advance",auto_advance_desc:"Automatically move on to the next enabled zone",reverse:"Reverse order",reverse_desc:"Run the zone sequence back to front",multiplier:"Duration multiplier",multiplier_desc:"Scales every zone's run time, e.g. for the season",repeat:"Repeat cycles",repeat_desc:"How many extra times to repeat the whole program",estimate:"Estimated total runtime: {duration}"},diagnostics:{title:"Diagnostics",internet_access:"Internet access",internet_access_desc:"Device network/API access",tracker:"Controller connectivity"},locked_note:"Mower isn't docked - irrigation controls are locked until it's home.",recalculate:"Recalculate Smart Irrigation durations"},editor:{card:{title:"Card",title_label:"Title",compact:"Compact mode (hide per-zone duration steppers)",start_collapsed:"Start Program Settings / Diagnostics collapsed",show_diagnostics:"Show diagnostics panel"},auto_detect:{title:"Auto-detect from entity prefix",hint:"If your controller's entities all share a common prefix (e.g. {example}), enter it here and click detect to auto-fill zones and controller entities below. You can still edit everything afterwards.",prefix_label:"Entity ID prefix (optional)",button:"Detect"},controller:{title:"Controller entities",controller_switch:"Main run/stop switch",auto_advance_switch:"Auto-advance switch",reverse_switch:"Reverse-order switch",multiplier_number:"Duration multiplier",repeat_number:"Repeat count",secondary_automation:"Secondary program automation (optional)",secondary_label:"Secondary button label",secondary_hint:"Adds a second button next to Start/Stop Program that calls automation.trigger on the entity above - e.g. an automation created from the Smart Irrigation Runner blueprint, so you can kick it off on demand instead of waiting for its normal trigger."},safety:{title:"Safety",lawnmower:"Robot lawnmower (optional)",hint:`If set, the master switch, zone tiles and Program Settings all lock whenever this mower's state isn't "docked" - stop-all always stays active. Leave empty to disable.`},zones:{title:"Zones",name:"Name",switch:"Zone switch",enable_switch:"Enable switch (optional)",duration_number:"Run duration number (optional)",smart_irrigation_sensor:"Smart Irrigation duration sensor (optional)",add:"Add zone"},diagnostics:{title:"Diagnostics",internet_switch:"Internet access switch",device_tracker:"Controller device tracker",inputs_title:"Sensor inputs",input_label:"Label",input_entity:"Entity",add_input:"Add input"}}}});var ve,_e=g(()=>{ve={common:{zone_n:"Zone {n}",input_n:"Eingang {n}"},card:{default_title:"Bew\xE4sserung",status:{idle:"Inaktiv",running:"L\xE4uft",running_zone:"L\xE4uft: {zone}",online:"Online",offline:"Offline"},master:{start:"Programm starten",stop:"Programm stoppen",stop_all:"Not-Stopp \u2013 schlie\xDFt sofort alle Ventile",trigger_automation:"Diese Automatisierung jetzt manuell ausl\xF6sen",start_calculated:"Berechnetes Programm starten"},zone:{unavailable:"Nicht verf\xFCgbar",disabled:"Deaktiviert",off:"Aus",off_duration:"Aus \xB7 {duration}",left:"noch {duration}",suggested:"Empfohlen: {duration}",apply_suggested:"Empfohlene Dauer \xFCbernehmen"},empty_state:"Noch keine Zonen konfiguriert. Bearbeite diese Karte, um Bew\xE4sserungszonen hinzuzuf\xFCgen.",program_panel:{title:"Programmeinstellungen",auto_advance:"Automatisch weiterschalten",auto_advance_desc:"Automatisch zur n\xE4chsten aktivierten Zone wechseln",reverse:"Umgekehrte Reihenfolge",reverse_desc:"Zonenreihenfolge r\xFCckw\xE4rts abarbeiten",multiplier:"Dauer-Multiplikator",multiplier_desc:"Skaliert die Laufzeit jeder Zone, z. B. je nach Jahreszeit",repeat:"Wiederholungen",repeat_desc:"Wie oft das gesamte Programm zus\xE4tzlich wiederholt wird",estimate:"Gesch\xE4tzte Gesamtlaufzeit: {duration}"},diagnostics:{title:"Diagnose",internet_access:"Internetzugriff",internet_access_desc:"Netzwerk-/API-Zugriff des Ger\xE4ts",tracker:"Verbindung des Controllers"},locked_note:"M\xE4hroboter ist nicht angedockt \u2013 die Bew\xE4sserungssteuerung ist gesperrt, bis er zu Hause ist.",recalculate:"Smart-Irrigation-Dauern neu berechnen"},editor:{card:{title:"Karte",title_label:"Titel",compact:"Kompaktmodus (Dauer-Stepper pro Zone ausblenden)",start_collapsed:"Programmeinstellungen/Diagnose eingeklappt starten",show_diagnostics:"Diagnose-Bereich anzeigen"},auto_detect:{title:"Automatische Erkennung anhand Entit\xE4ts-Pr\xE4fix",hint:"Falls alle Entit\xE4ten deines Controllers ein gemeinsames Pr\xE4fix teilen (z. B. {example}), gib es hier ein und klicke auf Erkennen, um Zonen und Controller-Entit\xE4ten unten automatisch auszuf\xFCllen. Du kannst danach trotzdem alles bearbeiten.",prefix_label:"Entit\xE4ts-ID-Pr\xE4fix (optional)",button:"Erkennen"},controller:{title:"Controller-Entit\xE4ten",controller_switch:"Haupt-Start/Stopp-Schalter",auto_advance_switch:"Schalter f\xFCr automatisches Weiterschalten",reverse_switch:"Schalter f\xFCr umgekehrte Reihenfolge",multiplier_number:"Dauer-Multiplikator",repeat_number:"Wiederholungsanzahl",secondary_automation:"Sekund\xE4re Programm-Automatisierung (optional)",secondary_label:"Beschriftung des zweiten Buttons",secondary_hint:"F\xFCgt einen zweiten Button neben Programm starten/stoppen hinzu, der automation.trigger f\xFCr die obige Entit\xE4t aufruft \u2013 z. B. eine Automatisierung aus dem Smart Irrigation Runner-Blueprint, damit du sie bei Bedarf ausl\xF6sen kannst, statt auf ihren normalen Trigger zu warten."},safety:{title:"Sicherheit",lawnmower:"M\xE4hroboter (optional)",hint:'Falls gesetzt, werden der Hauptschalter, alle Zonenkacheln und die Programmeinstellungen gesperrt, solange dieser M\xE4hroboter nicht "angedockt" ist \u2013 der Not-Stopp bleibt immer aktiv. Leer lassen zum Deaktivieren.'},zones:{title:"Zonen",name:"Name",switch:"Zonenschalter",enable_switch:"Aktivierungsschalter (optional)",duration_number:"Laufzeit-Nummer (optional)",smart_irrigation_sensor:"Smart-Irrigation-Dauersensor (optional)",add:"Zone hinzuf\xFCgen"},diagnostics:{title:"Diagnose",internet_switch:"Internetzugriffs-Schalter",device_tracker:"Controller-Device-Tracker",inputs_title:"Sensor-Eing\xE4nge",input_label:"Beschriftung",input_entity:"Entit\xE4t",add_input:"Eingang hinzuf\xFCgen"}}}});function be(r,e){return e.split(".").reduce((t,i)=>t&&typeof t=="object"?t[i]:void 0,r)}function P(r,e,t){let i=(r?.locale?.language??r?.language??"en").toLowerCase().split("-")[0],n=Tt[i]??Tt.en,a=be(n,e);typeof a!="string"&&(a=be(Tt.en,e));let o=typeof a=="string"?a:e;if(t)for(let[c,s]of Object.entries(t))o=o.replace(`{${c}}`,String(s));return o}var Tt,Dt=g(()=>{"use strict";ge();_e();Tt={en:fe,de:ve}});var ye={};Se(ye,{HassioIrrigationCardEditor:()=>E});var E,we=g(()=>{"use strict";at();Et();At();ut();Ct();Dt();E=class extends y{constructor(){super(...arguments);this._prefixHint="";this._autoDetect=()=>{let t=dt(this.hass,this._prefixHint||void 0);this._config={...this._config,...t,zones:t.zones.length>0?t.zones:this._config.zones},this._emit()}}setConfig(t){this._config={...t,zones:t.zones??[]}}_t(t,i){return P(this.hass,t,i)}render(){return!this.hass||!this._config?d``:d`
      <div class="section">
        <h3>${this._t("editor.card.title")}</h3>
        <ha-textfield
          label=${this._t("editor.card.title_label")}
          .value=${this._config.title??""}
          @input=${t=>this._set("title",t.target.value)}
        ></ha-textfield>
        <ha-formfield label=${this._t("editor.card.compact")}>
          <ha-switch
            .checked=${!!this._config.compact}
            @change=${t=>this._set("compact",t.target.checked)}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label=${this._t("editor.card.start_collapsed")}>
          <ha-switch
            .checked=${!!this._config.start_collapsed}
            @change=${t=>this._set("start_collapsed",t.target.checked)}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label=${this._t("editor.card.show_diagnostics")}>
          <ha-switch
            .checked=${this._config.show_diagnostics!==!1}
            @change=${t=>this._set("show_diagnostics",t.target.checked)}
          ></ha-switch>
        </ha-formfield>
      </div>

      <div class="section">
        <h3>${this._t("editor.auto_detect.title")}</h3>
        <p class="hint">
          ${this._t("editor.auto_detect.hint",{example:"garten_sprengler_controller"})}
        </p>
        <div class="row">
          <ha-textfield
            style="flex:1"
            label=${this._t("editor.auto_detect.prefix_label")}
            .value=${this._prefixHint}
            @input=${t=>this._prefixHint=t.target.value}
          ></ha-textfield>
          <button class="btn" @click=${this._autoDetect}>
            ${this._t("editor.auto_detect.button")}
          </button>
        </div>
      </div>

      <div class="section">
        <h3>${this._t("editor.controller.title")}</h3>
        ${this._entityPicker("controller_switch",this._t("editor.controller.controller_switch"),["switch"])}
        ${this._entityPicker("auto_advance_switch",this._t("editor.controller.auto_advance_switch"),["switch"])}
        ${this._entityPicker("reverse_switch",this._t("editor.controller.reverse_switch"),["switch"])}
        <div class="grid-2">
          ${this._entityPicker("multiplier_number",this._t("editor.controller.multiplier_number"),["number"])}
          ${this._entityPicker("repeat_number",this._t("editor.controller.repeat_number"),["number"])}
        </div>
        ${this._entityPicker("secondary_program_automation",this._t("editor.controller.secondary_automation"),["automation"])}
        <ha-textfield
          label=${this._t("editor.controller.secondary_label")}
          placeholder=${this._t("card.master.start_calculated")}
          .value=${this._config.secondary_program_label??""}
          @input=${t=>this._set("secondary_program_label",t.target.value)}
        ></ha-textfield>
        <p class="hint">${this._t("editor.controller.secondary_hint")}</p>
      </div>

      <div class="section">
        <h3>${this._t("editor.safety.title")}</h3>
        ${this._entityPicker("lawnmower_entity",this._t("editor.safety.lawnmower"),["lawn_mower"])}
        <p class="hint">${this._t("editor.safety.hint")}</p>
      </div>

      <div class="section">
        <h3>${this._t("editor.zones.title")}</h3>
        ${this._config.zones.map((t,i)=>this._renderZoneEditor(t,i))}
        <button class="btn" @click=${this._addZone}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${this._t("editor.zones.add")}
        </button>
      </div>

      <div class="section">
        <h3>${this._t("editor.diagnostics.title")}</h3>
        ${this._entityPicker("internet_switch",this._t("editor.diagnostics.internet_switch"),["switch"])}
        ${this._entityPicker("device_tracker",this._t("editor.diagnostics.device_tracker"),["device_tracker"])}
        <h3 style="margin-top:8px;">${this._t("editor.diagnostics.inputs_title")}</h3>
        ${(this._config.inputs??[]).map((t,i)=>this._renderInputEditor(t,i))}
        <button class="btn" @click=${this._addInput}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${this._t("editor.diagnostics.add_input")}
        </button>
      </div>
    `}_renderZoneEditor(t,i){return d`
      <div class="item-card">
        <div class="item-header">
          <b>${t.name||this._t("common.zone_n",{n:i+1})}</b>
          <ha-icon-button class="remove" @click=${()=>this._removeZone(i)}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </ha-icon-button>
        </div>
        <ha-textfield
          label=${this._t("editor.zones.name")}
          .value=${t.name??""}
          @input=${n=>this._updateZone(i,{name:n.target.value})}
        ></ha-textfield>
        ${this._zoneEntityPicker(i,"switch",this._t("editor.zones.switch"),["switch"])}
        ${this._zoneEntityPicker(i,"enable_switch",this._t("editor.zones.enable_switch"),["switch"])}
        ${this._zoneEntityPicker(i,"duration_number",this._t("editor.zones.duration_number"),["number"])}
        ${this._zoneEntityPicker(i,"smart_irrigation_sensor",this._t("editor.zones.smart_irrigation_sensor"),["sensor"])}
      </div>
    `}_renderInputEditor(t,i){return d`
      <div class="item-card">
        <div class="item-header">
          <b>${t.name||t.entity||this._t("common.input_n",{n:i+1})}</b>
          <ha-icon-button class="remove" @click=${()=>this._removeInput(i)}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </ha-icon-button>
        </div>
        <ha-textfield
          label=${this._t("editor.diagnostics.input_label")}
          .value=${t.name??""}
          @input=${n=>this._updateInput(i,{name:n.target.value})}
        ></ha-textfield>
        ${this._inputEntityPicker(i)}
      </div>
    `}_entityPicker(t,i,n){let a=this._config[t]??"";return d`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${a}
        .label=${i}
        .includeDomains=${n}
        allow-custom-entity
        @value-changed=${o=>this._set(t,o.detail.value)}
      ></ha-entity-picker>
    `}_zoneEntityPicker(t,i,n,a){let c=this._config.zones[t][i]??"";return d`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${c}
        .label=${n}
        .includeDomains=${a}
        allow-custom-entity
        @value-changed=${s=>this._updateZone(t,{[i]:s.detail.value})}
      ></ha-entity-picker>
    `}_inputEntityPicker(t){let i=(this._config.inputs??[])[t];return d`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${i.entity??""}
        .label=${this._t("editor.diagnostics.input_entity")}
        .includeDomains=${["binary_sensor"]}
        allow-custom-entity
        @value-changed=${n=>this._updateInput(t,{entity:n.detail.value})}
      ></ha-entity-picker>
    `}_set(t,i){this._config={...this._config,[t]:i},this._emit()}_updateZone(t,i){let n=[...this._config.zones];n[t]={...n[t],...i},this._config={...this._config,zones:n},this._emit()}_addZone(){let t=[...this._config.zones,{switch:"",name:this._t("common.zone_n",{n:this._config.zones.length+1})}];this._config={...this._config,zones:t},this._emit()}_removeZone(t){let i=this._config.zones.filter((n,a)=>a!==t);this._config={...this._config,zones:i},this._emit()}_updateInput(t,i){let n=[...this._config.inputs??[]];n[t]={...n[t],...i},this._config={...this._config,inputs:n},this._emit()}_addInput(){let t=[...this._config.inputs??[],{entity:""}];this._config={...this._config,inputs:t},this._emit()}_removeInput(t){let i=(this._config.inputs??[]).filter((n,a)=>a!==t);this._config={...this._config,inputs:i},this._emit()}_emit(){ct(this,"config-changed",{config:this._config})}};E.styles=F`
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
  `,v([L({attribute:!1})],E.prototype,"hass",2),v([S()],E.prototype,"_config",2),v([S()],E.prototype,"_prefixHint",2),E=v([ot(lt)],E)});at();Et();At();at();var ce=F`
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

  .secondary-button {
    flex: 1 1 160px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 44px;
    padding: 0 20px;
    border: 1px solid var(--primary-color);
    border-radius: 999px;
    background: transparent;
    color: var(--primary-color);
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition:
      background 150ms ease,
      transform 100ms ease;
  }

  .secondary-button ha-icon {
    --mdc-icon-size: 20px;
  }

  .secondary-button:hover {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
  }

  .secondary-button:active {
    transform: scale(0.98);
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.16);
  }

  .secondary-button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .secondary-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: transparent;
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
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    gap: 12px;
  }

  .zone-tile {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 14px;
    border-radius: var(--ha-card-border-radius, 12px);
    background: var(--secondary-background-color);
    border: 1px solid transparent;
    cursor: pointer;
    transition:
      background 180ms ease,
      border-color 180ms ease;
    min-height: 116px;
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
    transform: scale(0.9);
    margin: -6px -6px 0 0;
  }

  .zone-name {
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.3;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .zone-state {
    font-size: 0.88rem;
    line-height: 1.3;
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
    font-size: 0.88rem;
    color: var(--secondary-text-color);
  }

  .stepper {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .stepper ha-icon-button {
    --mdc-icon-button-size: 30px;
    --mdc-icon-size: 18px;
  }

  .zone-ai-row {
    display: flex;
    align-items: flex-start;
    gap: 4px;
    font-size: 0.85rem;
    color: var(--primary-color);
  }

  .zone-ai-row ha-icon {
    --mdc-icon-size: 16px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .zone-ai-row span {
    flex: 1;
    min-width: 0;
    white-space: normal;
    overflow-wrap: break-word;
  }

  .zone-ai-row ha-icon-button {
    --mdc-icon-button-size: 28px;
    --mdc-icon-size: 17px;
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

  @media (max-width: 480px) {
    ha-card {
      padding: 12px;
    }
    .zones-grid {
      /* Full-width tiles rather than cramming narrower ones in - the
         narrower packed layout made text unreadably small on phones. */
      grid-template-columns: 1fr;
      gap: 10px;
    }
    .zone-name {
      font-size: 1.1rem;
    }
    .zone-state {
      font-size: 0.92rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .zone-tile.active .zone-icon::before,
    .zone-tile.active .zone-icon::after,
    .zone-progress > div {
      animation: none;
    }
  }
`;ut();Ct();Dt();var Fe=1e3,b=class extends y{constructor(){super(...arguments);this._now=Date.now();this._programCollapsed=!1;this._diagnosticsCollapsed=!0;this._multiplierDraft=null;this._recalculateSmartIrrigation=()=>{this.hass.callService("smart_irrigation","calculate_all_zones",{})};this._onMultiplierInput=t=>{this._multiplierDraft=Number(t.target.value)};this._onMultiplierChange=t=>{let i=Number(t.target.value);this._setNumber(this._config.multiplier_number,i),this._multiplierDraft=null}}static async getConfigElement(){return await Promise.resolve().then(()=>(we(),ye)),document.createElement(lt)}static getStubConfig(t){let i=P(t,"card.default_title"),n=dt(t);return n.zones.length>0?{type:`custom:${J}`,title:i,...n}:{type:`custom:${J}`,title:i,zones:[{switch:"switch.REPLACE_ME_zone_1",name:P(t,"common.zone_n",{n:1})},{switch:"switch.REPLACE_ME_zone_2",name:P(t,"common.zone_n",{n:2})}]}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(t.zones&&!Array.isArray(t.zones))throw new Error("`zones` must be a list");this._config={show_diagnostics:!0,show_multiplier_preview:!0,compact:!1,...t,zones:t.zones??[]},this._programCollapsed=t.start_collapsed??!1,this._diagnosticsCollapsed=t.start_collapsed??!0}getCardSize(){return 2+Math.ceil((this._config?.zones?.length??0)/3)+(this._config?.show_diagnostics?2:0)}updated(t){super.updated(t);let i=this._zoneStates().some(n=>n.active);i&&!this._tickHandle?this._tickHandle=setInterval(()=>{this._now=Date.now()},Fe):!i&&this._tickHandle&&(clearInterval(this._tickHandle),this._tickHandle=void 0)}disconnectedCallback(){super.disconnectedCallback(),this._tickHandle&&(clearInterval(this._tickHandle),this._tickHandle=void 0)}_t(t,i){return P(this.hass,t,i)}get _multiplier(){return this._multiplierDraft!==null?this._multiplierDraft:C(this.hass,this._config.multiplier_number,1)}get _repeat(){return C(this.hass,this._config.repeat_number,0)}get _mowerBlocking(){let t=this._config.lawnmower_entity;return t?this.hass.states[t]?.state!=="docked":!1}get _smartIrrigationAvailable(){return!!this.hass.services?.smart_irrigation?.calculate_all_zones&&this._config.zones.some(t=>!!t.smart_irrigation_sensor)}_zoneStates(){return!this.hass||!this._config?[]:this._config.zones.map((t,i)=>pe(this.hass,t,i,this._multiplier,this._now))}get _estimateTotalSeconds(){return this._zoneStates().filter(i=>i.enabled).reduce((i,n)=>i+n.effectiveDurationSeconds,0)*(this._repeat+1)}render(){if(!this._config||!this.hass)return d``;let t=this._zoneStates(),i=t.some(p=>p.active),n=t.find(p=>p.active),a=!!this._config.controller_switch,o=a?Q(this.hass,this._config.controller_switch):!1,c=!!this._config.device_tracker,s=c?this.hass.states[this._config.device_tracker]?.state==="home":void 0,h=this._mowerBlocking;return d`
      <ha-card>
        <div class="header">
          <div class="header-title">
            <ha-icon icon=${i?de:he}></ha-icon>
            <h1>${this._config.title??this._t("card.default_title")}</h1>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            ${i?d`<span class="status-pill running"
                    >${n?this._t("card.status.running_zone",{zone:this._zoneLabel(n)}):this._t("card.status.running")}</span
                  >`:d`<span class="status-pill">${this._t("card.status.idle")}</span>`}
            ${c?d`<span class="status-pill ${s?"online":"offline"}"
                    >${s?this._t("card.status.online"):this._t("card.status.offline")}</span
                  >`:l}
            ${this._smartIrrigationAvailable?d`<ha-icon-button
                    class="recalculate"
                    title=${this._t("card.recalculate")}
                    @click=${this._recalculateSmartIrrigation}
                  >
                    <ha-icon icon="mdi:weather-partly-rainy"></ha-icon>
                  </ha-icon-button>`:l}
          </div>
        </div>

        ${h?this._renderLockedNote():l}
        ${a||this._config.secondary_program_automation?this._renderMasterRow(o,t,h):l}
        ${t.length>0?this._renderZones(t,h):this._renderEmptyState()}
        ${this._renderProgramPanel(h)}
        ${this._config.show_diagnostics?this._renderDiagnosticsPanel():l}
      </ha-card>
    `}_zoneLabel(t){return t.config.name??this.hass.states[t.config.switch]?.attributes?.friendly_name??this._t("common.zone_n",{n:t.index+1})}_renderEmptyState(){return d`
      <div class="empty-state">
        <ha-icon icon="mdi:sprinkler-variant" style="--mdc-icon-size: 32px;"></ha-icon>
        <span>${this._t("card.empty_state")}</span>
      </div>
    `}_renderLockedNote(){return d`
      <div class="locked-note">
        <ha-icon icon="mdi:robot-mower"></ha-icon>
        <span>${this._t("card.locked_note")}</span>
      </div>
    `}_renderMasterRow(t,i,n){let a=this._config.secondary_program_automation,o=a?this.hass.states[a]:void 0,c=n||!a||!o||o.state==="off",s=this._config.secondary_program_label??this._t("card.master.start_calculated");return d`
      <div class="master-row">
        ${this._config.controller_switch?d`<button
                class="master-button"
                ?disabled=${n}
                @click=${()=>!n&&this._toggleSwitch(this._config.controller_switch)}
              >
                <ha-icon icon=${t?"mdi:stop":"mdi:play"}></ha-icon>
                ${t?this._t("card.master.stop"):this._t("card.master.start")}
              </button>`:l}
        ${a?d`<button
                class="secondary-button"
                ?disabled=${c}
                title=${this._t("card.master.trigger_automation")}
                @click=${()=>!c&&this._triggerAutomation(a)}
              >
                <ha-icon icon="mdi:flash-auto"></ha-icon>
                ${s}
              </button>`:l}
        <ha-icon-button
          class="stop-all"
          title=${this._t("card.master.stop_all")}
          @click=${()=>this._stopAll(i)}
        >
          <ha-icon icon="mdi:alert-octagon-outline"></ha-icon>
        </ha-icon-button>
      </div>
    `}_renderZones(t,i){return d`
      <div class="zones-grid">${t.map(n=>this._renderZoneTile(n,i))}</div>
    `}_renderZoneTile(t,i){let n=["zone-tile",t.active?"active":"",t.enabled?"":"disabled",t.unavailable?"unavailable":"",i?"locked":""].filter(Boolean).join(" "),a=t.unavailable?this._t("card.zone.unavailable"):t.active?this._t("card.zone.left",{duration:H(t.remainingSeconds)}):t.enabled?t.config.duration_number?this._t("card.zone.off_duration",{duration:H(t.durationSeconds)}):this._t("card.zone.off"):this._t("card.zone.disabled");return d`
      <div
        class=${n}
        role="button"
        tabindex="0"
        @click=${()=>!t.unavailable&&!i&&this._toggleSwitch(t.config.switch)}
        @keydown=${o=>{(o.key==="Enter"||o.key===" ")&&!t.unavailable&&!i&&(o.preventDefault(),this._toggleSwitch(t.config.switch))}}
      >
        <div class="zone-top">
          <ha-icon class="zone-icon" icon=${t.config.icon??ue}></ha-icon>
          ${t.config.enable_switch?d`<ha-switch
                  class="zone-enable"
                  .checked=${t.enabled}
                  ?disabled=${i}
                  @click=${o=>o.stopPropagation()}
                  @change=${()=>this._toggleSwitch(t.config.enable_switch)}
                ></ha-switch>`:l}
        </div>
        <span class="zone-name">${this._zoneLabel(t)}</span>
        <span class="zone-state">${a}</span>
        ${!t.active&&t.config.duration_number&&!this._config.compact?this._renderDurationStepper(t,i):l}
        ${!t.active&&!this._config.compact&&t.config.smart_irrigation_sensor&&t.config.duration_number?this._renderSmartIrrigationRow(t,i):l}
        ${t.active?d`<div class="zone-progress"><div style="width:${t.progressPct}%"></div></div>`:l}
      </div>
    `}_renderDurationStepper(t,i){let n=t.config.duration_number;return d`
      <div class="zone-duration-row">
        <span>${H(t.durationSeconds)}</span>
        <div class="stepper">
          <ha-icon-button
            ?disabled=${i}
            @click=${a=>!i&&this._stepNumber(a,n,-30)}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            ?disabled=${i}
            @click=${a=>!i&&this._stepNumber(a,n,30)}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `}_renderSmartIrrigationRow(t,i){let n=C(this.hass,t.config.smart_irrigation_sensor,-1);return n<0||Math.abs(n-t.durationSeconds)<5?l:d`
      <div class="zone-ai-row">
        <ha-icon icon="mdi:weather-partly-rainy"></ha-icon>
        <span>${this._t("card.zone.suggested",{duration:H(n)})}</span>
        <ha-icon-button
          title=${this._t("card.zone.apply_suggested")}
          ?disabled=${i}
          @click=${a=>{a.stopPropagation(),i||this._applySmartIrrigationDuration(t)}}
        >
          <ha-icon icon="mdi:check"></ha-icon>
        </ha-icon-button>
      </div>
    `}_renderProgramPanel(t){let i=this._config;if(!(i.auto_advance_switch||i.reverse_switch||i.multiplier_number||i.repeat_number))return l;let a=i.multiplier_number?this.hass.states[i.multiplier_number]?.attributes:void 0,o=a?.min??0,c=a?.max??10,s=a?.step??.1;return d`
      <section class="panel">
        <div
          class="panel-header ${this._programCollapsed?"collapsed":""}"
          @click=${()=>this._programCollapsed=!this._programCollapsed}
        >
          <h2>${this._t("card.program_panel.title")}</h2>
          <ha-icon icon="mdi:chevron-down"></ha-icon>
        </div>
        ${this._programCollapsed?l:d`
                <div class="panel-body">
                  ${i.auto_advance_switch?this._renderSettingSwitch(i.auto_advance_switch,this._t("card.program_panel.auto_advance"),this._t("card.program_panel.auto_advance_desc"),t):l}
                  ${i.reverse_switch?this._renderSettingSwitch(i.reverse_switch,this._t("card.program_panel.reverse"),this._t("card.program_panel.reverse_desc"),t):l}
                  ${i.multiplier_number?d`
                          <div
                            class="setting-row"
                            style="flex-direction:column; align-items:stretch; gap:4px;"
                          >
                            <div class="setting-label">
                              <span class="primary"
                                >${this._t("card.program_panel.multiplier")}</span
                              >
                              <span class="secondary"
                                >${this._t("card.program_panel.multiplier_desc")}</span
                              >
                            </div>
                            <div class="slider-row">
                              <input
                                type="range"
                                min=${o}
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
                  ${i.show_multiplier_preview!==!1?d`<span class="estimate"
                          >${this._t("card.program_panel.estimate",{duration:H(this._estimateTotalSeconds)})}</span
                        >`:l}
                </div>
              `}
      </section>
    `}_renderSettingSwitch(t,i,n,a=!1){return d`
      <div class="setting-row">
        <div class="setting-label">
          <span class="primary">${i}</span>
          <span class="secondary">${n}</span>
        </div>
        <ha-switch
          .checked=${Q(this.hass,t)}
          ?disabled=${a}
          @change=${()=>this._toggleSwitch(t)}
        ></ha-switch>
      </div>
    `}_renderRepeatStepper(t,i){let n=this.hass.states[t]?.attributes,a=n?.min??0,o=n?.max??10,c=C(this.hass,t,0);return d`
      <div class="setting-row">
        <div class="setting-label">
          <span class="primary">${this._t("card.program_panel.repeat")}</span>
          <span class="secondary">${this._t("card.program_panel.repeat_desc")}</span>
        </div>
        <div class="stepper">
          <ha-icon-button
            ?disabled=${i||c<=a}
            @click=${()=>this._setNumber(t,Math.max(a,c-1))}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </ha-icon-button>
          <span class="slider-value">${c}</span>
          <ha-icon-button
            ?disabled=${i||c>=o}
            @click=${()=>this._setNumber(t,Math.min(o,c+1))}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `}_renderDiagnosticsPanel(){let t=this._config;return t.inputs&&t.inputs.length>0||t.internet_switch||t.device_tracker?d`
      <section class="panel">
        <div
          class="panel-header ${this._diagnosticsCollapsed?"collapsed":""}"
          @click=${()=>this._diagnosticsCollapsed=!this._diagnosticsCollapsed}
        >
          <h2>${this._t("card.diagnostics.title")}</h2>
          <ha-icon icon="mdi:chevron-down"></ha-icon>
        </div>
        ${this._diagnosticsCollapsed?l:d`
                <div class="panel-body">
                  ${t.inputs&&t.inputs.length>0?d`
                          <div class="chips">
                            ${t.inputs.map(n=>this._renderInputChip(n))}
                          </div>
                        `:l}
                  ${t.internet_switch?this._renderSettingSwitch(t.internet_switch,this._t("card.diagnostics.internet_access"),this._t("card.diagnostics.internet_access_desc")):l}
                  ${t.device_tracker?this._renderTrackerRow(t.device_tracker):l}
                </div>
              `}
      </section>
    `:l}_renderInputChip(t){let i=Q(this.hass,t.entity),n=t.name??this.hass.states[t.entity]?.attributes?.friendly_name??t.entity;return d`
      <span
        class="chip ${i?"on":""}"
        @click=${a=>this._openMoreInfo(a,t.entity)}
      >
        <ha-icon icon=${t.icon??me}></ha-icon>
        ${n}
      </span>
    `}_renderTrackerRow(t){let i=this.hass.states[t],n=i?.state==="home",a=i?.attributes?.ip;return d`
      <div
        class="setting-row"
        @click=${o=>this._openMoreInfo(o,t)}
        style="cursor:pointer;"
      >
        <div class="setting-label">
          <span class="primary">${this._t("card.diagnostics.tracker")}</span>
          <span class="secondary">${a?`IP ${a}`:t}</span>
        </div>
        <span class="status-pill ${n?"online":"offline"}"
          >${n?this._t("card.status.online"):this._t("card.status.offline")}</span
        >
      </div>
    `}_toggleSwitch(t){if(!t||zt(this.hass,t))return;let i=t.split(".")[0];this.hass.callService(i,"toggle",{entity_id:t})}_setNumber(t,i){this.hass.callService("number","set_value",{entity_id:t,value:i})}_triggerAutomation(t){this.hass.callService("automation","trigger",{entity_id:t})}_applySmartIrrigationDuration(t){let i=t.config.smart_irrigation_sensor,n=t.config.duration_number;if(!i||!n)return;let a=C(this.hass,i,-1);a<0||this._setNumber(n,a)}_stepNumber(t,i,n){t.stopPropagation();let a=this.hass.states[i]?.attributes,o=a?.min??0,c=a?.max??86400,s=C(this.hass,i,0),h=Math.min(c,Math.max(o,s+n));this._setNumber(i,h)}_stopAll(t){let i=[this._config.controller_switch,...t.map(n=>n.config.switch)].filter(n=>!!n);i.length!==0&&this.hass.callService("switch","turn_off",{entity_id:i})}_openMoreInfo(t,i){t.stopPropagation(),ct(this,"hass-more-info",{entityId:i})}};b.styles=ce,v([L({attribute:!1})],b.prototype,"hass",2),v([S()],b.prototype,"_config",2),v([S()],b.prototype,"_now",2),v([S()],b.prototype,"_programCollapsed",2),v([S()],b.prototype,"_diagnosticsCollapsed",2),v([S()],b.prototype,"_multiplierDraft",2),b=v([ot(J)],b);window.customCards=window.customCards||[];window.customCards.push({type:J,name:"Irrigation / Sprinkler Card",description:"A polished card for ESPHome-based sprinkler/irrigation controllers, with live progress, program settings and diagnostics.",preview:!0});console.info(`%c HASSIO-IRRIGATION-CARD %c v${le} `,"color: white; background: #03a9f4; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 4px;","color: #03a9f4; background: white; font-weight: 700; border-radius: 0 3px 3px 0; padding: 2px 4px;");export{b as HassioIrrigationCard};
//# sourceMappingURL=hassio-irrigation-card.js.map
