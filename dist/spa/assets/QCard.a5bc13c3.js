import{c as b,p as st,r as O,q as fe,w as H,s as dt,g as Y,v as ct,x as J,y as ft,z as vt,A as Re,B as tt,n as G,C as Ae,D as mt,h as M,E as ue,F as Pe,Q as gt,f as ne,T as Fe,G as ht,H as ye,a as ve,I as pt,J as bt,l as yt,o as wt,K as nt,k as kt,L as X,M as $e,O as ee,P as xt,R as Ct,S as St,U as Le}from"./index.c7611be5.js";import{g as qt,a as Mt,h as Et}from"./scroll.c3c1818d.js";const lt={dark:{type:Boolean,default:null}};function ot(e,t){return b(()=>e.dark===null?t.dark.isActive:e.dark)}let Ce,me=0;const K=new Array(256);for(let e=0;e<256;e++)K[e]=(e+256).toString(16).substring(1);const Ft=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let l=t;l>0;l--)n.push(Math.floor(Math.random()*256));return n}})(),Oe=4096;function _e(){(Ce===void 0||me+16>Oe)&&(me=0,Ce=Ft(Oe));const e=Array.prototype.slice.call(Ce,me,me+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,K[e[0]]+K[e[1]]+K[e[2]]+K[e[3]]+"-"+K[e[4]]+K[e[5]]+"-"+K[e[6]]+K[e[7]]+"-"+K[e[8]]+K[e[9]]+"-"+K[e[10]]+K[e[11]]+K[e[12]]+K[e[13]]+K[e[14]]+K[e[15]]}function _t(e){return e==null?null:e}function De(e,t){return e==null?t===!0?`f_${_e()}`:null:e}function Vt({getValue:e,required:t=!0}={}){if(st.value===!0){const n=e!==void 0?O(_t(e())):O(null);return t===!0&&n.value===null&&fe(()=>{n.value=`f_${_e()}`}),e!==void 0&&H(e,l=>{n.value=De(l,t)}),n}return e!==void 0?b(()=>De(e(),t)):O(`f_${_e()}`)}const He=/^on[A-Z]/;function Rt(){const{attrs:e,vnode:t}=Y(),n={listeners:O({}),attributes:O({})};function l(){const u={},c={};for(const d in e)d!=="class"&&d!=="style"&&He.test(d)===!1&&(u[d]=e[d]);for(const d in t.props)He.test(d)===!0&&(c[d]=t.props[d]);n.attributes.value=u,n.listeners.value=c}return dt(l),l(),n}function At({validate:e,resetValidation:t,requiresQForm:n}){const l=ct(ft,!1);if(l!==!1){const{props:u,proxy:c}=Y();Object.assign(c,{validate:e,resetValidation:t}),H(()=>u.disable,d=>{d===!0?(typeof t=="function"&&t(),l.unbindComponent(c)):l.bindComponent(c)}),fe(()=>{u.disable!==!0&&l.bindComponent(c)}),J(()=>{u.disable!==!0&&l.unbindComponent(c)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const ze=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ie=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Ke=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ge=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,he=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Se={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ze.test(e),hexaColor:e=>Ie.test(e),hexOrHexaColor:e=>Ke.test(e),rgbColor:e=>ge.test(e),rgbaColor:e=>he.test(e),rgbOrRgbaColor:e=>ge.test(e)||he.test(e),hexOrRgbColor:e=>ze.test(e)||ge.test(e),hexaOrRgbaColor:e=>Ie.test(e)||he.test(e),anyColor:e=>Ke.test(e)||ge.test(e)||he.test(e)},Bt=[!0,!1,"ondemand"],Tt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Bt.includes(e)}};function Pt(e,t){const{props:n,proxy:l}=Y(),u=O(!1),c=O(null),d=O(!1);At({validate:z,resetValidation:$});let m=0,w;const k=b(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length!==0),h=b(()=>n.disable!==!0&&k.value===!0&&t.value===!1),p=b(()=>n.error===!0||u.value===!0),j=b(()=>typeof n.errorMessage=="string"&&n.errorMessage.length!==0?n.errorMessage:c.value);H(()=>n.modelValue,()=>{d.value=!0,h.value===!0&&n.lazyRules===!1&&L()});function B(){n.lazyRules!=="ondemand"&&h.value===!0&&d.value===!0&&L()}H(()=>n.reactiveRules,I=>{I===!0?w===void 0&&(w=H(()=>n.rules,B,{immediate:!0,deep:!0})):w!==void 0&&(w(),w=void 0)},{immediate:!0}),H(()=>n.lazyRules,B),H(e,I=>{I===!0?d.value=!0:h.value===!0&&n.lazyRules!=="ondemand"&&L()});function $(){m++,t.value=!1,d.value=!1,u.value=!1,c.value=null,L.cancel()}function z(I=n.modelValue){if(n.disable===!0||k.value===!1)return!0;const v=++m,N=t.value!==!0?()=>{d.value=!0}:()=>{},U=(_,F)=>{_===!0&&N(),u.value=_,c.value=F||null,t.value=!1},Q=[];for(let _=0;_<n.rules.length;_++){const F=n.rules[_];let T;if(typeof F=="function"?T=F(I,Se):typeof F=="string"&&Se[F]!==void 0&&(T=Se[F](I)),T===!1||typeof T=="string")return U(!0,T),!1;T!==!0&&T!==void 0&&Q.push(T)}return Q.length===0?(U(!1),!0):(t.value=!0,Promise.all(Q).then(_=>{if(_===void 0||Array.isArray(_)===!1||_.length===0)return v===m&&U(!1),!0;const F=_.find(T=>T===!1||typeof T=="string");return v===m&&U(F!==void 0,F),F===void 0},_=>(v===m&&(console.error(_),U(!0)),!1)))}const L=vt(z,0);return J(()=>{w!==void 0&&w(),L.cancel()}),Object.assign(l,{resetValidation:$,validate:z}),Re(l,"hasError",()=>p.value),{isDirtyModel:d,hasRules:k,hasError:p,errorMessage:j,validate:z,resetValidation:$}}let le=[],ce=[];function at(e){ce=ce.filter(t=>t!==e)}function $t(e){at(e),ce.push(e)}function je(e){at(e),ce.length===0&&le.length!==0&&(le[le.length-1](),le=[])}function Be(e){ce.length===0?e():le.push(e)}function Lt(e){le=le.filter(t=>t!==e)}function Ve(e){return e!=null&&(""+e).length!==0}const Ot={...lt,...Tt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Dt={...Ot,maxlength:[Number,String]},Ht=["update:modelValue","clear","focus","blur"];function zt({requiredForAttr:e=!0,tagProp:t,changeEvent:n=!1}={}){const{props:l,proxy:u}=Y(),c=ot(l,u.$q),d=Vt({required:e,getValue:()=>l.for});return{requiredForAttr:e,changeEvent:n,tag:t===!0?b(()=>l.tag):{value:"label"},isDark:c,editable:b(()=>l.disable!==!0&&l.readonly!==!0),innerLoading:O(!1),focused:O(!1),hasPopupOpen:!1,splitAttrs:Rt(),targetUid:d,rootRef:O(null),targetRef:O(null),controlRef:O(null)}}function It(e){const{props:t,emit:n,slots:l,attrs:u,proxy:c}=Y(),{$q:d}=c;let m=null;e.hasValue===void 0&&(e.hasValue=b(()=>Ve(t.modelValue))),e.emitValue===void 0&&(e.emitValue=s=>{n("update:modelValue",s)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:i}),Object.assign(e,{clearValue:f,onControlFocusin:r,onControlFocusout:i,focus:F}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const s=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,y=t.maxlength!==void 0?t.maxlength:t.maxValues;return s+(y!==void 0?" / "+y:"")}}));const{isDirtyModel:w,hasRules:k,hasError:h,errorMessage:p,resetValidation:j}=Pt(e.focused,e.innerLoading),B=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),$=b(()=>t.bottomSlots===!0||t.hint!==void 0||k.value===!0||t.counter===!0||t.error!==null),z=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),L=b(()=>`q-field row no-wrap items-start q-field--${z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(B.value===!0?" q-field--float":"")+(v.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(h.value===!0?" q-field--error":"")+(h.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&$.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),I=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(h.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),v=b(()=>t.labelSlot===!0||t.label!==void 0),N=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&h.value!==!0?` text-${t.labelColor}`:"")),U=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:B.value,modelValue:t.modelValue,emitValue:e.emitValue})),Q=b(()=>{const s={};return e.targetUid.value&&(s.for=e.targetUid.value),t.disable===!0&&(s["aria-disabled"]="true"),s});function _(){const s=document.activeElement;let y=e.targetRef!==void 0&&e.targetRef.value;y&&(s===null||s.id!==e.targetUid.value)&&(y.hasAttribute("tabindex")===!0||(y=y.querySelector("[tabindex]")),y&&y!==s&&y.focus({preventScroll:!0}))}function F(){Be(_)}function T(){Lt(_);const s=document.activeElement;s!==null&&e.rootRef.value.contains(s)&&s.blur()}function r(s){m!==null&&(clearTimeout(m),m=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,n("focus",s))}function i(s,y){m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,n("blur",s)),y!==void 0&&y())})}function f(s){tt(s),d.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),n("update:modelValue",null),e.changeEvent===!0&&n("change",null),n("clear",t.modelValue),G(()=>{const y=w.value;j(),w.value=y})}function a(s){[13,32].includes(s.keyCode)&&f(s)}function S(){const s=[];return l.prepend!==void 0&&s.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:ue},l.prepend())),s.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},x())),h.value===!0&&t.noErrorIcon===!1&&s.push(C("error",[M(Pe,{name:d.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?s.push(C("inner-loading-append",l.loading!==void 0?l.loading():[M(gt,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&s.push(C("inner-clearable-append",[M(Pe,{class:"q-field__focusable-action",name:t.clearIcon||d.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":d.lang.label.clear,onKeyup:a,onClick:f})])),l.append!==void 0&&s.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:ue},l.append())),e.getInnerAppend!==void 0&&s.push(C("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&s.push(e.getControlChild()),s}function x(){const s=[];return t.prefix!==void 0&&t.prefix!==null&&s.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&s.push(e.getShadowControl()),e.getControl!==void 0?s.push(e.getControl()):l.rawControl!==void 0?s.push(l.rawControl()):l.control!==void 0&&s.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},l.control(U.value))),v.value===!0&&s.push(M("div",{class:N.value},ne(l.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&s.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),s.concat(ne(l.default))}function R(){let s,y;h.value===!0?p.value!==null?(s=[M("div",{role:"alert"},p.value)],y=`q--slot-error-${p.value}`):(s=ne(l.error),y="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(s=[M("div",t.hint)],y=`q--slot-hint-${t.hint}`):(s=ne(l.hint),y="q--slot-hint"));const E=t.counter===!0||l.counter!==void 0;if(t.hideBottomSpace===!0&&E===!1&&s===void 0)return;const V=M("div",{key:y,class:"q-field__messages col"},s);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:ue},[t.hideBottomSpace===!0?V:M(Fe,{name:"q-transition--field-message"},()=>V),E===!0?M("div",{class:"q-field__counter"},l.counter!==void 0?l.counter():e.computedCounter.value):null])}function C(s,y){return y===null?null:M("div",{key:s,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},y)}let q=!1;return Ae(()=>{q=!0}),mt(()=>{q===!0&&t.autofocus===!0&&c.focus()}),t.autofocus===!0&&fe(()=>{c.focus()}),J(()=>{m!==null&&clearTimeout(m)}),Object.assign(c,{focus:F,blur:T}),function(){const y=e.getControl===void 0&&l.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...Q.value}:Q.value;return M(e.tag.value,{ref:e.rootRef,class:[L.value,u.class],style:u.style,...y},[l.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:ue},l.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:I.value,tabindex:-1,...e.controlEvents},S()),$.value===!0?R():null]),l.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:ue},l.after()):null])}}const Kt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},jt=["beforeShow","show","beforeHide","hide"];function Nt({showing:e,canShow:t,hideOnRouteChange:n,handleShow:l,handleHide:u,processOnMount:c}){const d=Y(),{props:m,emit:w,proxy:k}=d;let h;function p(v){e.value===!0?$(v):j(v)}function j(v){if(m.disable===!0||v!==void 0&&v.qAnchorHandled===!0||t!==void 0&&t(v)!==!0)return;const N=m["onUpdate:modelValue"]!==void 0;N===!0&&(w("update:modelValue",!0),h=v,G(()=>{h===v&&(h=void 0)})),(m.modelValue===null||N===!1)&&B(v)}function B(v){e.value!==!0&&(e.value=!0,w("beforeShow",v),l!==void 0?l(v):w("show",v))}function $(v){if(m.disable===!0)return;const N=m["onUpdate:modelValue"]!==void 0;N===!0&&(w("update:modelValue",!1),h=v,G(()=>{h===v&&(h=void 0)})),(m.modelValue===null||N===!1)&&z(v)}function z(v){e.value!==!1&&(e.value=!1,w("beforeHide",v),u!==void 0?u(v):w("hide",v))}function L(v){m.disable===!0&&v===!0?m["onUpdate:modelValue"]!==void 0&&w("update:modelValue",!1):v===!0!==e.value&&(v===!0?B:z)(h)}H(()=>m.modelValue,L),n!==void 0&&ht(d)===!0&&H(()=>k.$route.fullPath,()=>{n.value===!0&&e.value===!0&&$()}),c===!0&&fe(()=>{L(m.modelValue)});const I={show:j,hide:$,toggle:p};return Object.assign(k,I),I}const we=[];function qn(e){return we.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Qt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return ye(e)}else if(e.__qPortal===!0){const n=ye(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=ye(e)}while(e!=null)}function Mn(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Qt(e,t);continue}e.hide(t)}e=ye(e)}}const Ut=ve({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function Zt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Wt(e,t,n,l){const u=O(!1),c=O(!1);let d=null;const m={},w=l==="dialog"&&Zt(e);function k(p){if(p===!0){je(m),c.value=!0;return}c.value=!1,u.value===!1&&(w===!1&&d===null&&(d=yt(!1,l)),u.value=!0,we.push(e.proxy),$t(m))}function h(p){if(c.value=!1,p!==!0)return;je(m),u.value=!1;const j=we.indexOf(e.proxy);j!==-1&&we.splice(j,1),d!==null&&(wt(d),d=null)}return pt(()=>{h(!0)}),e.proxy.__qPortal=!0,Re(e.proxy,"contentEl",()=>t.value),{showPortal:k,hidePortal:h,portalIsActive:u,portalIsAccessible:c,renderPortal:()=>w===!0?n():u.value===!0?[M(bt,{to:d},M(Ut,n))]:void 0}}const Yt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Gt(e,t=()=>{},n=()=>{}){return{transitionProps:b(()=>{const l=`q-transition--${e.transitionShow||t()}`,u=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${u}-leave-from`,leaveActiveClass:`${u}-leave-active`,leaveToClass:`${u}-leave-to`}}),transitionStyle:b(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Xt(){let e;const t=Y();function n(){e=void 0}return Ae(n),J(n),{removeTick:n,registerTick(l){e=l,G(()=>{e===l&&(nt(t)===!1&&e(),e=void 0)})}}}function Jt(){let e=null;const t=Y();function n(){e!==null&&(clearTimeout(e),e=null)}return Ae(n),J(n),{removeTimeout:n,registerTimeout(l,u){n(),nt(t)===!1&&(e=setTimeout(()=>{e=null,l()},u))}}}const oe=[];let re;function en(e){re=e.keyCode===27}function tn(){re===!0&&(re=!1)}function nn(e){re===!0&&(re=!1,kt(e,27)===!0&&oe[oe.length-1](e))}function it(e){window[e]("keydown",en),window[e]("blur",tn),window[e]("keyup",nn),re=!1}function ln(e){X.is.desktop===!0&&(oe.push(e),oe.length===1&&it("addEventListener"))}function Ne(e){const t=oe.indexOf(e);t!==-1&&(oe.splice(t,1),oe.length===0&&it("removeEventListener"))}const ae=[];function rt(e){ae[ae.length-1](e)}function on(e){X.is.desktop===!0&&(ae.push(e),ae.length===1&&document.body.addEventListener("focusin",rt))}function Qe(e){const t=ae.indexOf(e);t!==-1&&(ae.splice(t,1),ae.length===0&&document.body.removeEventListener("focusin",rt))}function an(e,t,n){let l;function u(){l!==void 0&&($e.remove(l),l=void 0)}return J(()=>{e.value===!0&&u()}),{removeFromHistory:u,addToHistory(){l={condition:()=>n.value===!0,handler:t},$e.add(l)}}}let se=0,qe,Me,de,Ee=!1,Ue,Ze,We,te=null;function rn(e){un(e)&&tt(e)}function un(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=xt(e),n=e.shiftKey&&!e.deltaX,l=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),u=n||l?e.deltaY:e.deltaX;for(let c=0;c<t.length;c++){const d=t[c];if(Et(d,l))return l?u<0&&d.scrollTop===0?!0:u>0&&d.scrollTop+d.clientHeight===d.scrollHeight:u<0&&d.scrollLeft===0?!0:u>0&&d.scrollLeft+d.clientWidth===d.scrollWidth}return!0}function Ye(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function pe(e){Ee!==!0&&(Ee=!0,requestAnimationFrame(()=>{Ee=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:l}=document.scrollingElement;(de===void 0||t!==window.innerHeight)&&(de=n-t,document.scrollingElement.scrollTop=l),l>de&&(document.scrollingElement.scrollTop-=Math.ceil((l-de)/8))}))}function Ge(e){const t=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:u}=window.getComputedStyle(t);qe=qt(window),Me=Mt(window),Ue=t.style.left,Ze=t.style.top,We=window.location.href,t.style.left=`-${qe}px`,t.style.top=`-${Me}px`,u!=="hidden"&&(u==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,X.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",pe,ee.passiveCapture),window.visualViewport.addEventListener("scroll",pe,ee.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ye,ee.passiveCapture))}X.is.desktop===!0&&X.is.mac===!0&&window[`${e}EventListener`]("wheel",rn,ee.notPassive),e==="remove"&&(X.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",pe,ee.passiveCapture),window.visualViewport.removeEventListener("scroll",pe,ee.passiveCapture)):window.removeEventListener("scroll",Ye,ee.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Ue,t.style.top=Ze,window.location.href===We&&window.scrollTo(qe,Me),de=void 0)}function sn(e){let t="add";if(e===!0){if(se++,te!==null){clearTimeout(te),te=null;return}if(se>1)return}else{if(se===0||(se--,se>0))return;if(t="remove",X.is.ios===!0&&X.is.nativeMobile===!0){te!==null&&clearTimeout(te),te=setTimeout(()=>{Ge(t),te=null},100);return}}Ge(t)}function dn(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,sn(t))}}}let be=0;const cn={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Xe={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var En=ve({name:"QDialog",inheritAttrs:!1,props:{...Kt,...Yt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...jt,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:l}){const u=Y(),c=O(null),d=O(!1),m=O(!1);let w=null,k=null,h,p;const j=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:B}=dn(),{registerTimeout:$}=Jt(),{registerTick:z,removeTick:L}=Xt(),{transitionProps:I,transitionStyle:v}=Gt(e,()=>Xe[e.position][0],()=>Xe[e.position][1]),N=b(()=>v.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:U,hidePortal:Q,portalIsAccessible:_,renderPortal:F}=Wt(u,c,W,"dialog"),{hide:T}=Nt({showing:d,hideOnRouteChange:j,handleShow:R,handleHide:C,processOnMount:!0}),{addToHistory:r,removeFromHistory:i}=an(d,T,j),f=b(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${cn[e.position]}`+(m.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),a=b(()=>d.value===!0&&e.seamless!==!0),S=b(()=>e.autoClose===!0?{onClick:o}:{}),x=b(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${a.value===!0?"modal":"seamless"}`,l.class]);H(()=>e.maximized,g=>{d.value===!0&&V(g)}),H(a,g=>{B(g),g===!0?(on(Z),ln(y)):(Qe(Z),Ne(y))});function R(g){r(),k=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,V(e.maximized),U(),m.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),z(q)):L(),$(()=>{if(u.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:P,bottom:ie}=document.activeElement.getBoundingClientRect(),{innerHeight:Te}=window,xe=window.visualViewport!==void 0?window.visualViewport.height:Te;P>0&&ie>xe/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-xe,ie>=Te?1/0:Math.ceil(document.scrollingElement.scrollTop+ie-xe/2))),document.activeElement.scrollIntoView()}p=!0,c.value.click(),p=!1}U(!0),m.value=!1,n("show",g)},e.transitionDuration)}function C(g){L(),i(),E(!0),m.value=!0,Q(),k!==null&&(((g&&g.type.indexOf("key")===0?k.closest('[tabindex]:not([tabindex^="-"])'):void 0)||k).focus(),k=null),$(()=>{Q(!0),m.value=!1,n("hide",g)},e.transitionDuration)}function q(g){Be(()=>{let P=c.value;if(P!==null){if(g!==void 0){const ie=P.querySelector(g);if(ie!==null){ie.focus({preventScroll:!0});return}}P.contains(document.activeElement)!==!0&&(P=P.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||P.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||P.querySelector("[autofocus], [data-autofocus]")||P,P.focus({preventScroll:!0}))}})}function s(g){g&&typeof g.focus=="function"?g.focus({preventScroll:!0}):q(),n("shake");const P=c.value;P!==null&&(P.classList.remove("q-animate--scale"),P.classList.add("q-animate--scale"),w!==null&&clearTimeout(w),w=setTimeout(()=>{w=null,c.value!==null&&(P.classList.remove("q-animate--scale"),q())},170))}function y(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&s():(n("escapeKey"),T()))}function E(g){w!==null&&(clearTimeout(w),w=null),(g===!0||d.value===!0)&&(V(!1),e.seamless!==!0&&(B(!1),Qe(Z),Ne(y))),g!==!0&&(k=null)}function V(g){g===!0?h!==!0&&(be<1&&document.body.classList.add("q-body--dialog"),be++,h=!0):h===!0&&(be<2&&document.body.classList.remove("q-body--dialog"),be--,h=!1)}function o(g){p!==!0&&(T(g),n("click",g))}function A(g){e.persistent!==!0&&e.noBackdropDismiss!==!0?T(g):e.noShake!==!0&&s()}function Z(g){e.allowFocusOutside!==!0&&_.value===!0&&Ct(c.value,g.target)!==!0&&q('[tabindex]:not([tabindex="-1"])')}Object.assign(u.proxy,{focus:q,shake:s,__updateRefocusTarget(g){k=g||null}}),J(E);function W(){return M("div",{role:"dialog","aria-modal":a.value===!0?"true":"false",...l,class:x.value},[M(Fe,{name:"q-transition--fade",appear:!0},()=>a.value===!0?M("div",{class:"q-dialog__backdrop fixed-full",style:N.value,"aria-hidden":"true",tabindex:-1,onClick:A}):null),M(Fe,I.value,()=>d.value===!0?M("div",{ref:c,class:f.value,style:v.value,tabindex:-1,...S.value},ne(t.default)):null)])}return F}});const fn={name:String};function Fn(e){return b(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function _n(e={}){return(t,n,l)=>{t[n](M("input",{class:"hidden"+(l||""),...e.value}))}}function vn(e){return b(()=>e.name||e.for)}const mn=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,gn=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,hn=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,pn=/[a-z0-9_ -]$/i;function bn(e){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,e(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(X.is.firefox===!0?pn.test(n.data)===!1:mn.test(n.data)===!0||gn.test(n.data)===!0||hn.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}const Je={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ke={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ut=Object.keys(ke);ut.forEach(e=>{ke[e].regex=new RegExp(ke[e].pattern)});const yn=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ut.join("")+"])|(.)","g"),et=/[.*+?^${}()|[\]\\]/g,D=String.fromCharCode(1),wn={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function kn(e,t,n,l){let u,c,d,m,w,k;const h=O(null),p=O(B());function j(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}H(()=>e.type+e.autogrow,z),H(()=>e.mask,r=>{if(r!==void 0)L(p.value,!0);else{const i=F(p.value);z(),e.modelValue!==i&&t("update:modelValue",i)}}),H(()=>e.fillMask+e.reverseFillMask,()=>{h.value===!0&&L(p.value,!0)}),H(()=>e.unmaskedValue,()=>{h.value===!0&&L(p.value)});function B(){if(z(),h.value===!0){const r=Q(F(e.modelValue));return e.fillMask!==!1?T(r):r}return e.modelValue}function $(r){if(r<u.length)return u.slice(-r);let i="",f=u;const a=f.indexOf(D);if(a!==-1){for(let S=r-f.length;S>0;S--)i+=D;f=f.slice(0,a)+i+f.slice(a)}return f}function z(){if(h.value=e.mask!==void 0&&e.mask.length!==0&&j(),h.value===!1){m=void 0,u="",c="";return}const r=Je[e.mask]===void 0?e.mask:Je[e.mask],i=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",f=i.replace(et,"\\$&"),a=[],S=[],x=[];let R=e.reverseFillMask===!0,C="",q="";r.replace(yn,(V,o,A,Z,W)=>{if(Z!==void 0){const g=ke[Z];x.push(g),q=g.negate,R===!0&&(S.push("(?:"+q+"+)?("+g.pattern+"+)?(?:"+q+"+)?("+g.pattern+"+)?"),R=!1),S.push("(?:"+q+"+)?("+g.pattern+")?")}else if(A!==void 0)C="\\"+(A==="\\"?"":A),x.push(A),a.push("([^"+C+"]+)?"+C+"?");else{const g=o!==void 0?o:W;C=g==="\\"?"\\\\\\\\":g.replace(et,"\\\\$&"),x.push(g),a.push("([^"+C+"]+)?"+C+"?")}});const s=new RegExp("^"+a.join("")+"("+(C===""?".":"[^"+C+"]")+"+)?"+(C===""?"":"["+C+"]*")+"$"),y=S.length-1,E=S.map((V,o)=>o===0&&e.reverseFillMask===!0?new RegExp("^"+f+"*"+V):o===y?new RegExp("^"+V+"("+(q===""?".":q)+"+)?"+(e.reverseFillMask===!0?"$":f+"*")):new RegExp("^"+V));d=x,m=V=>{const o=s.exec(e.reverseFillMask===!0?V:V.slice(0,x.length+1));o!==null&&(V=o.slice(1).join(""));const A=[],Z=E.length;for(let W=0,g=V;W<Z;W++){const P=E[W].exec(g);if(P===null)break;g=g.slice(P.shift().length),A.push(...P)}return A.length!==0?A.join(""):V},u=x.map(V=>typeof V=="string"?V:D).join(""),c=u.split(D).join(i)}function L(r,i,f){const a=l.value,S=a.selectionEnd,x=a.value.length-S,R=F(r);i===!0&&z();const C=Q(R),q=e.fillMask!==!1?T(C):C,s=p.value!==q;a.value!==q&&(a.value=q),s===!0&&(p.value=q),document.activeElement===a&&G(()=>{if(q===c){const E=e.reverseFillMask===!0?c.length:0;a.setSelectionRange(E,E,"forward");return}if(f==="insertFromPaste"&&e.reverseFillMask!==!0){const E=a.selectionEnd;let V=S-1;for(let o=w;o<=V&&o<E;o++)u[o]!==D&&V++;v.right(a,V);return}if(["deleteContentBackward","deleteContentForward"].indexOf(f)!==-1){const E=e.reverseFillMask===!0?S===0?q.length>C.length?1:0:Math.max(0,q.length-(q===c?0:Math.min(C.length,x)+1))+1:S;a.setSelectionRange(E,E,"forward");return}if(e.reverseFillMask===!0)if(s===!0){const E=Math.max(0,q.length-(q===c?0:Math.min(C.length,x+1)));E===1&&S===1?a.setSelectionRange(E,E,"forward"):v.rightReverse(a,E)}else{const E=q.length-x;a.setSelectionRange(E,E,"backward")}else if(s===!0){const E=Math.max(0,u.indexOf(D),Math.min(C.length,S)-1);v.right(a,E)}else{const E=S-1;v.right(a,E)}});const y=e.unmaskedValue===!0?F(q):q;String(e.modelValue)!==y&&(e.modelValue!==null||y!=="")&&n(y,!0)}function I(r,i,f){const a=Q(F(r.value));i=Math.max(0,u.indexOf(D),Math.min(a.length,i)),w=i,r.setSelectionRange(i,f,"forward")}const v={left(r,i){const f=u.slice(i-1).indexOf(D)===-1;let a=Math.max(0,i-1);for(;a>=0;a--)if(u[a]===D){i=a,f===!0&&i++;break}if(a<0&&u[i]!==void 0&&u[i]!==D)return v.right(r,0);i>=0&&r.setSelectionRange(i,i,"backward")},right(r,i){const f=r.value.length;let a=Math.min(f,i+1);for(;a<=f;a++)if(u[a]===D){i=a;break}else u[a-1]===D&&(i=a);if(a>f&&u[i-1]!==void 0&&u[i-1]!==D)return v.left(r,f);r.setSelectionRange(i,i,"forward")},leftReverse(r,i){const f=$(r.value.length);let a=Math.max(0,i-1);for(;a>=0;a--)if(f[a-1]===D){i=a;break}else if(f[a]===D&&(i=a,a===0))break;if(a<0&&f[i]!==void 0&&f[i]!==D)return v.rightReverse(r,0);i>=0&&r.setSelectionRange(i,i,"backward")},rightReverse(r,i){const f=r.value.length,a=$(f),S=a.slice(0,i+1).indexOf(D)===-1;let x=Math.min(f,i+1);for(;x<=f;x++)if(a[x-1]===D){i=x,i>0&&S===!0&&i--;break}if(x>f&&a[i-1]!==void 0&&a[i-1]!==D)return v.leftReverse(r,f);r.setSelectionRange(i,i,"forward")}};function N(r){t("click",r),k=void 0}function U(r){if(t("keydown",r),St(r)===!0||r.altKey===!0)return;const i=l.value,f=i.selectionStart,a=i.selectionEnd;if(r.shiftKey||(k=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&k===void 0&&(k=i.selectionDirection==="forward"?f:a);const S=v[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),S(i,k===f?a:f),r.shiftKey){const x=i.selectionStart;i.setSelectionRange(Math.min(k,x),Math.max(k,x),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&f===a?(v.left(i,f),i.setSelectionRange(i.selectionStart,a,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&f===a&&(v.rightReverse(i,a),i.setSelectionRange(f,i.selectionEnd,"forward"))}function Q(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return _(r);const i=d;let f=0,a="";for(let S=0;S<i.length;S++){const x=r[f],R=i[S];if(typeof R=="string")a+=R,x===R&&f++;else if(x!==void 0&&R.regex.test(x))a+=R.transform!==void 0?R.transform(x):x,f++;else return a}return a}function _(r){const i=d,f=u.indexOf(D);let a=r.length-1,S="";for(let x=i.length-1;x>=0&&a!==-1;x--){const R=i[x];let C=r[a];if(typeof R=="string")S=R+S,C===R&&a--;else if(C!==void 0&&R.regex.test(C))do S=(R.transform!==void 0?R.transform(C):C)+S,a--,C=r[a];while(f===x&&C!==void 0&&R.regex.test(C));else return S}return S}function F(r){return typeof r!="string"||m===void 0?typeof r=="number"?m(""+r):r:m(r)}function T(r){return c.length-r.length<=0?r:e.reverseFillMask===!0&&r.length!==0?c.slice(0,-r.length)+r:r+c.slice(r.length)}return{innerValue:p,hasMask:h,moveCursorForPaste:I,updateMaskValue:L,onMaskedKeydown:U,onMaskedClick:N}}function xn(e,t){function n(){const l=e.modelValue;try{const u="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(l)===l&&("length"in l?Array.from(l):[l]).forEach(c=>{u.items.add(c)}),{files:u.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return n()}):b(n)}var Vn=ve({name:"QInput",inheritAttrs:!1,props:{...Dt,...wn,...fn,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ht,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:n}){const{proxy:l}=Y(),{$q:u}=l,c={};let d=NaN,m,w,k=null,h;const p=O(null),j=vn(e),{innerValue:B,hasMask:$,moveCursorForPaste:z,updateMaskValue:L,onMaskedKeydown:I,onMaskedClick:v}=kn(e,t,C,p),N=xn(e,!0),U=b(()=>Ve(B.value)),Q=bn(x),_=zt({changeEvent:!0}),F=b(()=>e.type==="textarea"||e.autogrow===!0),T=b(()=>F.value===!0||["text","search","url","tel","password"].includes(e.type)),r=b(()=>{const o={..._.splitAttrs.listeners.value,onInput:x,onPaste:S,onChange:s,onBlur:y,onFocus:Le};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=Q,$.value===!0&&(o.onKeydown=I,o.onClick=v),e.autogrow===!0&&(o.onAnimationend=R),o}),i=b(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:j.value,..._.splitAttrs.attributes.value,id:_.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return F.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});H(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),H(()=>e.modelValue,o=>{if($.value===!0){if(w===!0&&(w=!1,String(o)===d))return;L(o)}else B.value!==o&&(B.value=o,e.type==="number"&&c.hasOwnProperty("value")===!0&&(m===!0?m=!1:delete c.value));e.autogrow===!0&&G(q)}),H(()=>e.autogrow,o=>{o===!0?G(q):p.value!==null&&n.rows>0&&(p.value.style.height="auto")}),H(()=>e.dense,()=>{e.autogrow===!0&&G(q)});function f(){Be(()=>{const o=document.activeElement;p.value!==null&&p.value!==o&&(o===null||o.id!==_.targetUid.value)&&p.value.focus({preventScroll:!0})})}function a(){p.value!==null&&p.value.select()}function S(o){if($.value===!0&&e.reverseFillMask!==!0){const A=o.target;z(A,A.selectionStart,A.selectionEnd)}t("paste",o)}function x(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const A=o.target.value;if(o.target.qComposing===!0){c.value=A;return}if($.value===!0)L(A,!1,o.inputType);else if(C(A),T.value===!0&&o.target===document.activeElement){const{selectionStart:Z,selectionEnd:W}=o.target;Z!==void 0&&W!==void 0&&G(()=>{o.target===document.activeElement&&A.indexOf(o.target.value)===0&&o.target.setSelectionRange(Z,W)})}e.autogrow===!0&&q()}function R(o){t("animationend",o),q()}function C(o,A){h=()=>{k=null,e.type!=="number"&&c.hasOwnProperty("value")===!0&&delete c.value,e.modelValue!==o&&d!==o&&(d=o,A===!0&&(w=!0),t("update:modelValue",o),G(()=>{d===o&&(d=NaN)})),h=void 0},e.type==="number"&&(m=!0,c.value=o),e.debounce!==void 0?(k!==null&&clearTimeout(k),c.value=o,k=setTimeout(h,e.debounce)):h()}function q(){requestAnimationFrame(()=>{const o=p.value;if(o!==null){const A=o.parentNode.style,{scrollTop:Z}=o,{overflowY:W,maxHeight:g}=u.platform.is.firefox===!0?{}:window.getComputedStyle(o),P=W!==void 0&&W!=="scroll";P===!0&&(o.style.overflowY="hidden"),A.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",P===!0&&(o.style.overflowY=parseInt(g,10)<o.scrollHeight?"auto":"hidden"),A.marginBottom="",o.scrollTop=Z}})}function s(o){Q(o),k!==null&&(clearTimeout(k),k=null),h!==void 0&&h(),t("change",o.target.value)}function y(o){o!==void 0&&Le(o),k!==null&&(clearTimeout(k),k=null),h!==void 0&&h(),m=!1,w=!1,delete c.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=B.value!==void 0?B.value:"")})}function E(){return c.hasOwnProperty("value")===!0?c.value:B.value!==void 0?B.value:""}J(()=>{y()}),fe(()=>{e.autogrow===!0&&q()}),Object.assign(_,{innerValue:B,fieldClass:b(()=>`q-${F.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:p,emitValue:C,hasValue:U,floatingLabel:b(()=>U.value===!0&&(e.type!=="number"||isNaN(B.value)===!1)||Ve(e.displayValue)),getControl:()=>M(F.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...i.value,...r.value,...e.type!=="file"?{value:E()}:N.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(F.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},E()),M("span",e.shadowText)])});const V=It(_);return Object.assign(l,{focus:f,select:a,getNativeElement:()=>p.value}),Re(l,"nativeEl",()=>p.value),V}}),Rn=ve({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=b(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>M(e.tag,{class:n.value},ne(t.default))}}),An=ve({name:"QCard",props:{...lt,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Y(),l=ot(e,n),u=b(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>M(e.tag,{class:u.value},ne(t.default))}});export{vn as A,Ve as B,bn as C,qn as D,Mn as E,Fn as F,Ot as G,xn as H,En as Q,ot as a,An as b,Rn as c,Vn as d,fn as e,_n as f,Dt as g,Ht as h,It as i,zt as j,Kt as k,Yt as l,jt as m,Xt as n,Jt as o,we as p,Gt as q,Nt as r,Wt as s,on as t,lt as u,Qe as v,Ne as w,Qt as x,Be as y,ln as z};
