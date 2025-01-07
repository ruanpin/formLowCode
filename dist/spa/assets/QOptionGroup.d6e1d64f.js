import{a as x,P as F,R as j,r as w,c as n,t as C,h as l,L as R,S as A,m as M,g as I,I as _,i as T}from"./index.adc5c5e8.js";import{u as L,a as B}from"./use-timeout.085da037.js";import{o as $,u as P}from"./use-checkbox.53414926.js";import{d as G,l as K}from"./use-key-composition.00bd84b0.js";import{Q as U}from"./QCheckbox.37ad52e5.js";import{Q as E}from"./QToggle.e2861c09.js";const H=()=>l("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[l("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),l("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var J=x({name:"QRadio",props:{...L,...F,...G,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:r,emit:i}){const{proxy:u}=I(),s=B(e,u.$q),f=j(e,$),v=w(null),{refocusTargetEl:b,refocusTarget:g}=P(e,v),t=n(()=>C(e.modelValue)===C(e.val)),k=n(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(s.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),y=n(()=>{const o=e.color!==void 0&&(e.keepColor===!0||t.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${t.value===!0?"truthy":"falsy"}${o}`}),m=n(()=>(t.value===!0?e.checkedIcon:e.uncheckedIcon)||null),h=n(()=>e.disable===!0?-1:e.tabindex||0),a=n(()=>{const o={type:"radio"};return e.name!==void 0&&Object.assign(o,{".checked":t.value===!0,"^checked":t.value===!0?"checked":void 0,name:e.name,value:e.val}),o}),d=K(a);function c(o){o!==void 0&&(_(o),g(o)),e.disable!==!0&&t.value!==!0&&i("update:modelValue",e.val,o)}function Q(o){(o.keyCode===13||o.keyCode===32)&&_(o)}function z(o){(o.keyCode===13||o.keyCode===32)&&c(o)}Object.assign(u,{set:c});const D=H();return()=>{const o=m.value!==null?[l("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[l(R,{class:"q-radio__icon",name:m.value})])]:[D];e.disable!==!0&&d(o,"unshift"," q-radio__native q-ma-none q-pa-none");const q=[l("div",{class:y.value,style:f.value,"aria-hidden":"true"},o)];b.value!==null&&q.push(b.value);const V=e.label!==void 0?A(r.default,[e.label]):M(r.default);return V!==void 0&&q.push(l("div",{class:"q-radio__label q-anchor--skip"},V)),l("div",{ref:v,class:k.value,tabindex:h.value,role:"radio","aria-label":e.label,"aria-checked":t.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:c,onKeydown:Q,onKeyup:z},q)}}});const O={radio:J,checkbox:U,toggle:E},W=Object.keys(O);function S(e,r){if(typeof e=="function")return e;const i=e!==void 0?e:r;return u=>u[i]}var ae=x({name:"QOptionGroup",props:{...L,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(T),default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],name:String,type:{type:String,default:"radio",validator:e=>W.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:r,slots:i}){const{proxy:{$q:u}}=I(),s=Array.isArray(e.modelValue);e.type==="radio"?s===!0&&console.error("q-option-group: model should not be array"):s===!1&&console.error("q-option-group: model should be array in your case");const f=B(e,u),v=n(()=>O[e.type]),b=n(()=>S(e.optionValue,"value")),g=n(()=>S(e.optionLabel,"label")),t=n(()=>S(e.optionDisable,"disable")),k=n(()=>e.options.map(a=>({val:b.value(a),name:a.name===void 0?e.name:a.name,disable:e.disable||t.value(a),leftLabel:a.leftLabel===void 0?e.leftLabel:a.leftLabel,color:a.color===void 0?e.color:a.color,checkedIcon:a.checkedIcon,uncheckedIcon:a.uncheckedIcon,dark:a.dark===void 0?f.value:a.dark,size:a.size===void 0?e.size:a.size,dense:e.dense,keepColor:a.keepColor===void 0?e.keepColor:a.keepColor}))),y=n(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),m=n(()=>{const a={role:"group"};return e.type==="radio"&&(a.role="radiogroup",e.disable===!0&&(a["aria-disabled"]="true")),a});function h(a){r("update:modelValue",a)}return()=>l("div",{class:y.value,...m.value},e.options.map((a,d)=>{const c=i["label-"+d]!==void 0?()=>i["label-"+d](a):i.label!==void 0?()=>i.label(a):void 0;return l("div",[l(v.value,{label:c===void 0?g.value(a):null,modelValue:e.modelValue,"onUpdate:modelValue":h,...k.value[d]},c)])}))}});export{ae as Q};
