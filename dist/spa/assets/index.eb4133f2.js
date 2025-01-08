import{c as ae,_ as le}from"./IndexPage.31b8d16c.js";import{B as re,u as ue,i as oe,k as se,x as ce,C as de,y as W,j as fe}from"./QInput.32fb33ae.js";import{r as z,c as d,g as M,O as me,I as Z,z as ge,h as v,a as ee,y as ve,K as he,C as ye,D as Se,A as be,m as Ce,Q as Fe,w as _e,v as $,ae as E,av as xe,aj as P,ai as pe,ao as je,a8 as H,aw as K,ah as A,af as X,ag as Q,e as Y,L as G,aC as ze}from"./index.3e9da833.js";import{h as ke}from"./format.1f30a278.js";import{d as J}from"./use-timeout.87b88655.js";import"./index.8352f452.js";function D(e,o,m,_){const u=[];return e.forEach(c=>{_(c)===!0?u.push(c):o.push({failedPropValidation:m,file:c})}),u}function B(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),Z(e)}const we={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ie=["rejected"];function Oe({editable:e,dnd:o,getFileInput:m,addFilesToQueue:_}){const{props:u,emit:c,proxy:h}=M(),s=z(null),y=d(()=>u.accept!==void 0?u.accept.split(",").map(t=>(t=t.trim(),t==="*"?"*/":(t.endsWith("/*")&&(t=t.slice(0,t.length-1)),t.toUpperCase()))):null),N=d(()=>parseInt(u.maxFiles,10)),I=d(()=>parseInt(u.maxTotalSize,10));function V(t){if(e.value)if(t!==Object(t)&&(t={target:null}),t.target!==null&&t.target.matches('input[type="file"]')===!0)t.clientX===0&&t.clientY===0&&me(t);else{const b=m();b&&b!==t.target&&b.click(t)}}function S(t){e.value&&t&&_(null,t)}function F(t,b,q,k){let a=Array.from(b||t.target.files);const g=[],x=()=>{g.length!==0&&c("rejected",g)};if(u.accept!==void 0&&y.value.indexOf("*/")===-1&&(a=D(a,g,"accept",l=>y.value.some(f=>l.type.toUpperCase().startsWith(f)||l.name.toUpperCase().endsWith(f))),a.length===0))return x();if(u.maxFileSize!==void 0){const l=parseInt(u.maxFileSize,10);if(a=D(a,g,"max-file-size",f=>f.size<=l),a.length===0)return x()}if(u.multiple!==!0&&a.length!==0&&(a=[a[0]]),a.forEach(l=>{l.__key=l.webkitRelativePath+l.lastModified+l.name+l.size}),k===!0){const l=q.map(f=>f.__key);a=D(a,g,"duplicate",f=>l.includes(f.__key)===!1)}if(a.length===0)return x();if(u.maxTotalSize!==void 0){let l=k===!0?q.reduce((f,R)=>f+R.size,0):0;if(a=D(a,g,"max-total-size",f=>(l+=f.size,l<=I.value)),a.length===0)return x()}if(typeof u.filter=="function"){const l=u.filter(a);a=D(a,g,"filter",f=>l.includes(f))}if(u.maxFiles!==void 0){let l=k===!0?q.length:0;if(a=D(a,g,"max-files",()=>(l++,l<=N.value)),a.length===0)return x()}if(x(),a.length!==0)return a}function O(t){B(t),o.value!==!0&&(o.value=!0)}function r(t){Z(t),(t.relatedTarget!==null||ge.is.safari!==!0?t.relatedTarget!==s.value:document.elementsFromPoint(t.clientX,t.clientY).includes(s.value)===!1)===!0&&(o.value=!1)}function T(t){B(t);const b=t.dataTransfer.files;b.length!==0&&_(null,b),o.value=!1}function L(t){if(o.value===!0)return v("div",{ref:s,class:`q-${t}__dnd absolute-full`,onDragenter:B,onDragover:B,onDragleave:r,onDrop:T})}return Object.assign(h,{pickFiles:V,addFiles:S}),{pickFiles:V,addFiles:S,onDragover:O,onDragleave:r,processFiles:F,getDndNode:L,maxFilesNumber:N,maxTotalSizeNumber:I}}var Ne=ee({name:"QFile",inheritAttrs:!1,props:{...re,...ue,...we,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...oe,...Ie],setup(e,{slots:o,emit:m,attrs:_}){const{proxy:u}=M(),c=se(),h=z(null),s=z(!1),y=ce(e),{pickFiles:N,onDragover:I,onDragleave:V,processFiles:S,getDndNode:F}=Oe({editable:c.editable,dnd:s,getFileInput:i,addFilesToQueue:p}),O=de(e),r=d(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),T=d(()=>W(r.value)),L=d(()=>r.value.map(n=>n.name).join(", ")),t=d(()=>ke(r.value.reduce((n,C)=>n+C.size,0))),b=d(()=>({totalSize:t.value,filesNumber:r.value.length,maxFiles:e.maxFiles})),q=d(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:y.value,..._,id:c.targetUid.value,disabled:c.editable.value!==!0})),k=d(()=>"q-file q-field--auto-height"+(s.value===!0?" q-file--dnd":"")),a=d(()=>e.multiple===!0&&e.append===!0);function g(n){const C=r.value.slice();C.splice(n,1),l(C)}function x(n){const C=r.value.indexOf(n);C!==-1&&g(C)}function l(n){m("update:modelValue",e.multiple===!0?n:n[0])}function f(n){n.keyCode===13&&he(n)}function R(n){(n.keyCode===13||n.keyCode===32)&&N(n)}function i(){return h.value}function p(n,C){const j=S(n,C,r.value,a.value),U=i();U!=null&&(U.value=""),j!==void 0&&((e.multiple===!0?e.modelValue&&j.every(ne=>r.value.includes(ne)):e.modelValue===j[0])||l(a.value===!0?r.value.concat(j):j))}function w(){return[v("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function te(){if(o.file!==void 0)return r.value.length===0?w():r.value.map((C,j)=>o.file({index:j,file:C,ref:this}));if(o.selected!==void 0)return r.value.length===0?w():o.selected({files:r.value,ref:this});if(e.useChips===!0)return r.value.length===0?w():r.value.map((C,j)=>v(ae,{key:"file-"+j,removable:c.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{g(j)}},()=>v("span",{class:"ellipsis",textContent:C.name})));const n=e.displayValue!==void 0?e.displayValue:L.value;return n.length!==0?[v("div",{class:e.inputClass,style:e.inputStyle,textContent:n})]:w()}function ie(){const n={ref:h,...q.value,...O.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:p};return e.multiple===!0&&(n.multiple=!0),v("input",n)}return Object.assign(c,{fieldClass:k,emitValue:l,hasValue:T,inputRef:h,innerValue:r,floatingLabel:d(()=>T.value===!0||W(e.displayValue)),computedCounter:d(()=>{if(e.counterLabel!==void 0)return e.counterLabel(b.value);const n=e.maxFiles;return`${r.value.length}${n!==void 0?" / "+n:""} (${t.value})`}),getControlChild:()=>F("file"),getControl:()=>{const n={ref:c.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return c.editable.value===!0&&Object.assign(n,{onDragover:I,onDragleave:V,onKeydown:f,onKeyup:R}),v("div",n,[ie()].concat(te()))}}),Object.assign(u,{removeAtIndex:g,removeFile:x,getNativeElement:()=>h.value}),ve(u,"nativeEl",()=>h.value),fe(c)}});const qe={ratio:[String,Number]};function Ve(e,o){return d(()=>{const m=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(m)!==!0&&m>0?{paddingBottom:`${100/m}%`}:null})}const Te=1.7778;var De=ee({name:"QImg",props:{...qe,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Te},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:m}){const _=z(e.initialRatio),u=Ve(e,_),c=M(),{registerTimeout:h,removeTimeout:s}=J(),{registerTimeout:y,removeTimeout:N}=J(),I=d(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),V=d(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),S=[z(null),z(I.value)],F=z(0),O=z(!1),r=z(!1),T=d(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),L=d(()=>({width:e.width,height:e.height})),t=d(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),b=d(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function q(){if(N(),e.loadingShowDelay===0){O.value=!0;return}y(()=>{O.value=!0},e.loadingShowDelay)}function k(){N(),O.value=!1}function a({target:i}){$(c)===!1&&(s(),_.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,g(i,1))}function g(i,p){p===1e3||$(c)===!0||(i.complete===!0?x(i):h(()=>{g(i,p+1)},50))}function x(i){$(c)!==!0&&(F.value=F.value^1,S[F.value].value=null,k(),i.getAttribute("__qerror")!=="true"&&(r.value=!1),m("load",i.currentSrc||i.src))}function l(i){s(),k(),r.value=!0,S[F.value].value=V.value,S[F.value^1].value=I.value,m("error",i)}function f(i){const p=S[i].value,w={key:"img_"+i,class:t.value,style:b.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...p};return F.value===i?Object.assign(w,{class:w.class+"current",onLoad:a,onError:l}):w.class+="loaded",v("div",{class:"q-img__container absolute-full",key:"img"+i},v("img",w))}function R(){return O.value===!1?v("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},Ce(o[r.value===!0?"error":"default"])):v("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[v(Fe,{color:e.spinnerColor,size:e.spinnerSize})])}{let i=function(){_e(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,p=>{s(),r.value=!1,p===null?(k(),S[F.value^1].value=I.value):q(),S[F.value].value=p},{immediate:!0})};ye.value===!0?Se(i):i()}return()=>{const i=[];return u.value!==null&&i.push(v("div",{key:"filler",style:u.value})),S[0].value!==null&&i.push(f(0)),S[1].value!==null&&i.push(f(1)),i.push(v(be,{name:"q-transition--fade"},R)),v("div",{key:"main",class:T.value,style:L.value,role:"img","aria-label":e.alt},i)}}});const Le={class:"q-py-sm"},Re={class:"f700 q-mb-xs fz14"},Ae={style:{color:"#CC0100"}},Pe={class:"q-ma-xs operatorContainer"},Be=Object.assign({name:"UploadImgComponent"},{__name:"index",props:{renderObject:{type:Object,required:!0}},setup(e){const o=e,m=z(null);function _(h){h&&(o.renderObject.previewImgURL=URL.createObjectURL(h))}function u(){m.value.pickFiles()}function c(){o.renderObject.value=null,o.renderObject.previewImgURL=""}return(h,s)=>(E(),xe("div",Le,[P("div",Re,[pe(je(e.renderObject.label),1),H(P("span",Ae," *",512),[[K,e.renderObject.required]])]),P("div",null,[H(A(Ne,{ref_key:"imgContainer",ref:m,modelValue:e.renderObject.value,"onUpdate:modelValue":[s[0]||(s[0]=y=>e.renderObject.value=y),s[1]||(s[1]=y=>{_(y)})],label:"Standard",class:"imgContainer",accept:".jpg, .png, .jepg, image/*"},null,8,["modelValue"]),[[K,!1]]),e.renderObject.previewImgURL?(E(),X(De,{key:0,src:e.renderObject.previewImgURL,class:"previewImgContainer"},{default:Q(()=>[P("div",Pe,[A(Y,{dense:"",flat:"",onClick:s[2]||(s[2]=y=>u())},{default:Q(()=>[A(G,{name:"change_circle",size:"xs",color:"grey-3"})]),_:1}),A(Y,{dense:"",flat:"",onClick:s[3]||(s[3]=y=>c())},{default:Q(()=>[A(G,{name:"delete",size:"xs",color:"grey-3"})]),_:1})])]),_:1},8,["src"])):(E(),X(ze,{key:1,rounded:"",color:"grey-5","text-color":"white",icon:"add",size:"120px",class:"cursor-pointer",onClick:s[4]||(s[4]=y=>u())}))])]))}});var He=le(Be,[["__scopeId","data-v-61d36136"]]);export{He as default};
