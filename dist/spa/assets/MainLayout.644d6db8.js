import{a as P,c as f,h as S,m as U,r as T,C as _e,D as I,q as X,_ as ye,n as ee,g as F,Y as me,F as pe,$ as _,w as q,a0 as Je,a1 as te,a2 as Ze,z as j,a3 as et,a4 as G,a5 as se,K as Te,O as de,a6 as ge,a7 as ce,I as tt,a8 as at,a9 as ze,aa as Pe,ab as nt,ac as J,x as ot,S as it,ad as rt,ae as lt,af as ut,ag as Q,ah as E,e as st,ai as Le,aj as dt}from"./index.adc5c5e8.js";import{c as ct,b as Z,Q as ft}from"./format.b81a26d7.js";import{u as Me,a as De,b as vt,c as ht,d as mt,e as gt,f as bt,g as yt,s as pt,h as wt,i as qt,j as Ct,k as fe}from"./use-timeout.085da037.js";var St=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const i=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:i.value},U(o.default))}}),xt=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const i=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:i.value,role:"toolbar"},U(o.default))}});function Tt(){const e=T(!_e.value);return e.value===!1&&I(()=>{e.value=!0}),{isHydrated:e}}const Qe=typeof ResizeObserver!="undefined",ke=Qe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var be=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let i=null,l,t={width:-1,height:-1};function a(d){d===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),l){const{offsetWidth:d,offsetHeight:u}=l;(d!==t.width||u!==t.height)&&(t={width:d,height:u},o("resize",t))}}const{proxy:h}=F();if(h.trigger=a,Qe===!0){let d;const u=r=>{l=h.$el.parentNode,l?(d=new ResizeObserver(a),d.observe(l),s()):r!==!0&&ee(()=>{u(!0)})};return I(()=>{u()}),X(()=>{i!==null&&clearTimeout(i),d!==void 0&&(d.disconnect!==void 0?d.disconnect():l&&d.unobserve(l))}),ye}else{let r=function(){i!==null&&(clearTimeout(i),i=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",a,me.passive),u=void 0)},w=function(){r(),l&&l.contentDocument&&(u=l.contentDocument.defaultView,u.addEventListener("resize",a,me.passive),s())};const{isHydrated:d}=Tt();let u;return I(()=>{ee(()=>{l=h.$el,l&&w()})}),X(r),()=>{if(d.value===!0)return S("object",{class:"q--avoid-card-border",style:ke.style,tabindex:-1,type:"text/html",data:ke.url,"aria-hidden":"true",onLoad:w})}}}}),zt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:i}){const{proxy:{$q:l}}=F(),t=pe(te,_);if(t===_)return console.error("QHeader needs to be child of QLayout"),_;const a=T(parseInt(e.heightHint,10)),s=T(!0),h=f(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||l.platform.is.ios&&t.isContainer.value===!0),d=f(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return s.value===!0?a.value:0;const c=a.value-t.scroll.value.position;return c>0?c:0}),u=f(()=>e.modelValue!==!0||h.value===!0&&s.value!==!0),r=f(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),w=f(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=f(()=>{const c=t.rows.value.top,z={};return c[0]==="l"&&t.left.space===!0&&(z[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),c[2]==="r"&&t.right.space===!0&&(z[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),z});function v(c,z){t.update("header",c,z)}function m(c,z){c.value!==z&&(c.value=z)}function B({height:c}){m(a,c),v("size",c)}function x(c){r.value===!0&&m(s,!0),i("focusin",c)}q(()=>e.modelValue,c=>{v("space",c),m(s,!0),t.animate()}),q(d,c=>{v("offset",c)}),q(()=>e.reveal,c=>{c===!1&&m(s,e.modelValue)}),q(s,c=>{t.animate(),i("reveal",c)}),q(t.scroll,c=>{e.reveal===!0&&m(s,c.direction==="up"||c.position<=e.revealOffset||c.position-c.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&v("size",a.value),v("space",e.modelValue),v("offset",d.value),X(()=>{t.instances.header===y&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const c=Je(o.default,[]);return e.elevated===!0&&c.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(S(be,{debounce:0,onResize:B})),S("header",{class:w.value,style:p.value,onFocusin:x},c)}}});const Lt=["ul","ol"];var kt=P({name:"QList",props:{...Me,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const i=F(),l=De(e,i.proxy.$q),t=f(()=>Lt.includes(e.tag)?null:"list"),a=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S(e.tag,{class:a.value,role:t.value},U(o.default))}});const we={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Bt=Object.keys(we);we.all=!0;function Be(e){const o={};for(const i of Bt)e[i]===!0&&(o[i]=!0);return Object.keys(o).length===0?we:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const $t=["INPUT","TEXTAREA"];function $e(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&$t.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function ve(e,o,i){const l=ge(e);let t,a=l.left-o.event.x,s=l.top-o.event.y,h=Math.abs(a),d=Math.abs(s);const u=o.direction;u.horizontal===!0&&u.vertical!==!0?t=a<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=s<0?"up":"down":u.up===!0&&s<0?(t="up",h>d&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.down===!0&&s>0?(t="down",h>d&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.left===!0&&a<0?(t="left",h<d&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down"))):u.right===!0&&a>0&&(t="right",h<d&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&i===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,r=!0,t==="left"||t==="right"?(l.left-=a,h=0,a=0):(l.top-=s,d=0,s=0)}return{synthetic:r,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:i===!0,duration:Date.now()-o.event.time,distance:{x:h,y:d},offset:{x:a,y:s},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let Ot=0;var he=Ze({name:"touch-pan",beforeMount(e,{value:o,modifiers:i}){if(i.mouse!==!0&&j.has.touch!==!0)return;function l(a,s){i.mouse===!0&&s===!0?tt(a):(i.stop===!0&&de(a),i.prevent===!0&&Te(a))}const t={uid:"qvtp_"+Ot++,handler:o,modifiers:i,direction:Be(i),noop:ye,mouseStart(a){$e(a,t)&&et(a)&&(G(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if($e(a,t)){const s=a.target;G(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(j.is.firefox===!0&&se(e,!0),t.lastEvt=a,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Te(u),a.cancelBubble===!0&&de(u),Object.assign(u,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:u}}de(a)}const{left:h,top:d}=ge(a);t.event={x:h,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:d}},move(a){if(t.event===void 0)return;const s=ge(a),h=s.left-t.event.x,d=s.top-t.event.y;if(h===0&&d===0)return;t.lastEvt=a;const u=t.event.mouse===!0,r=()=>{l(a,u);let v;i.preserveCursor!==!0&&i.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ct(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),u===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{B(),m()},50):B()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(a,t.event.mouse);const{payload:v,synthetic:m}=ve(a,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=m===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(a);return}const w=Math.abs(h),p=Math.abs(d);w!==p&&(t.direction.horizontal===!0&&w>p||t.direction.vertical===!0&&w<p||t.direction.up===!0&&w<p&&d<0||t.direction.down===!0&&w<p&&d>0||t.direction.left===!0&&w>p&&h<0||t.direction.right===!0&&w>p&&h>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(ce(t,"temp"),j.is.firefox===!0&&se(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ve(a===void 0?t.lastEvt:a,t).payload);const{payload:h}=ve(a===void 0?t.lastEvt:a,t,!0),d=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";G(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}j.has.touch===!0&&G(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const i=e.__qtouchpan;i!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&i.end(),i.handler=o.value),i.direction=Be(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ce(o,"main"),ce(o,"temp"),j.is.firefox===!0&&se(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const Oe=150;var Et=P({name:"QDrawer",inheritAttrs:!1,props:{...vt,...Me,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...ht,"onLayout","miniState"],setup(e,{slots:o,emit:i,attrs:l}){const t=F(),{proxy:{$q:a}}=t,s=De(e,a),{preventBodyScroll:h}=yt(),{registerTimeout:d,removeTimeout:u}=mt(),r=pe(te,_);if(r===_)return console.error("QDrawer needs to be child of QLayout"),_;let w,p=null,v;const m=T(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),B=f(()=>e.mini===!0&&m.value!==!0),x=f(()=>B.value===!0?e.miniWidth:e.width),y=T(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),c=f(()=>e.persistent!==!0&&(m.value===!0||Ve.value===!0));function z(n,g){if(V(),n!==!1&&r.animate(),$(0),m.value===!0){const L=r.instances[Y.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),M(1),r.isContainer.value!==!0&&h(!0)}else M(0),n!==!1&&re(!1);d(()=>{n!==!1&&re(!0),g!==!0&&i("show",n)},Oe)}function b(n,g){W(),n!==!1&&r.animate(),M(0),$(A.value*x.value),le(),g!==!0?d(()=>{i("hide",n)},Oe):u()}const{show:C,hide:k}=gt({showing:y,hideOnRouteChange:c,handleShow:z,handleHide:b}),{addToHistory:V,removeFromHistory:W}=bt(y,k,c),H={belowBreakpoint:m,hide:k},O=f(()=>e.side==="right"),A=f(()=>(a.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),qe=T(0),R=T(!1),ae=T(!1),Ce=T(x.value*A.value),Y=f(()=>O.value===!0?"left":"right"),ne=f(()=>y.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),oe=f(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(O.value?"R":"L")!==-1||a.platform.is.ios===!0&&r.isContainer.value===!0),N=f(()=>e.overlay===!1&&y.value===!0&&m.value===!1),Ve=f(()=>e.overlay===!0&&y.value===!0&&m.value===!1),He=f(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&R.value===!1?" hidden":"")),Fe=f(()=>({backgroundColor:`rgba(0,0,0,${qe.value*.4})`})),Se=f(()=>O.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),Ae=f(()=>O.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Re=f(()=>{const n={};return r.header.space===!0&&Se.value===!1&&(oe.value===!0?n.top=`${r.header.offset}px`:r.header.space===!0&&(n.top=`${r.header.size}px`)),r.footer.space===!0&&Ae.value===!1&&(oe.value===!0?n.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(n.bottom=`${r.footer.size}px`)),n}),We=f(()=>{const n={width:`${x.value}px`,transform:`translateX(${Ce.value}px)`};return m.value===!0?n:Object.assign(n,Re.value)}),Ne=f(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),je=f(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(R.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(oe.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Se.value===!0?" q-drawer--top-padding":""))),Ie=f(()=>{const n=a.lang.rtl===!0?e.side:Y.value;return[[he,Ke,void 0,{[n]:!0,mouse:!0}]]}),Xe=f(()=>{const n=a.lang.rtl===!0?Y.value:e.side;return[[he,xe,void 0,{[n]:!0,mouse:!0}]]}),Ue=f(()=>{const n=a.lang.rtl===!0?Y.value:e.side;return[[he,xe,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function ie(){Ge(m,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}q(m,n=>{n===!0?(w=y.value,y.value===!0&&k(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(y.value===!0?($(0),M(0),le()):C(!1))}),q(()=>e.side,(n,g)=>{r.instances[g]===H&&(r.instances[g]=void 0,r[g].space=!1,r[g].offset=0),r.instances[n]=H,r[n].size=x.value,r[n].space=N.value,r[n].offset=ne.value}),q(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ie()}),q(()=>e.behavior+e.breakpoint,ie),q(r.isContainer,n=>{y.value===!0&&h(n!==!0),n===!0&&ie()}),q(r.scrollbarWidth,()=>{$(y.value===!0?0:void 0)}),q(ne,n=>{D("offset",n)}),q(N,n=>{i("onLayout",n),D("space",n)}),q(O,()=>{$()}),q(x,n=>{$(),ue(e.miniToOverlay,n)}),q(()=>e.miniToOverlay,n=>{ue(n,x.value)}),q(()=>a.lang.rtl,()=>{$()}),q(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ye(),r.animate())}),q(B,n=>{i("miniState",n)});function $(n){n===void 0?ee(()=>{n=y.value===!0?0:x.value,$(A.value*n)}):(r.isContainer.value===!0&&O.value===!0&&(m.value===!0||Math.abs(n)===x.value)&&(n+=A.value*r.scrollbarWidth.value),Ce.value=n)}function M(n){qe.value=n}function re(n){const g=n===!0?"remove":r.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function Ye(){p!==null&&clearTimeout(p),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,p=setTimeout(()=>{p=null,ae.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ke(n){if(y.value!==!1)return;const g=x.value,L=Z(n.distance.x,0,g);if(n.isFinal===!0){L>=Math.min(75,g)===!0?C():(r.animate(),M(0),$(A.value*g)),R.value=!1;return}$((a.lang.rtl===!0?O.value!==!0:O.value)?Math.max(g-L,0):Math.min(0,L-g)),M(Z(L/g,0,1)),n.isFirst===!0&&(R.value=!0)}function xe(n){if(y.value!==!0)return;const g=x.value,L=n.direction===e.side,K=(a.lang.rtl===!0?L!==!0:L)?Z(n.distance.x,0,g):0;if(n.isFinal===!0){Math.abs(K)<Math.min(75,g)===!0?(r.animate(),M(1),$(0)):k(),R.value=!1;return}$(A.value*K),M(Z(1-K/g,0,1)),n.isFirst===!0&&(R.value=!0)}function le(){h(!1),re(!0)}function D(n,g){r.update(e.side,n,g)}function Ge(n,g){n.value!==g&&(n.value=g)}function ue(n,g){D("size",n===!0?e.miniWidth:g)}return r.instances[e.side]=H,ue(e.miniToOverlay,x.value),D("space",N.value),D("offset",ne.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),I(()=>{i("onLayout",N.value),i("miniState",B.value),w=e.showIfAbove===!0;const n=()=>{(y.value===!0?z:b)(!1,!0)};if(r.totalWidth.value!==0){ee(n);return}v=q(r.totalWidth,()=>{v(),v=void 0,y.value===!1&&e.showIfAbove===!0&&m.value===!1?C(!1):n()})}),X(()=>{v!==void 0&&v(),p!==null&&(clearTimeout(p),p=null),y.value===!0&&le(),r.instances[e.side]===H&&(r.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const n=[];m.value===!0&&(e.noSwipeOpen===!1&&n.push(at(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ie.value)),n.push(ze("div",{ref:"backdrop",class:He.value,style:Fe.value,"aria-hidden":"true",onClick:k},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>Ue.value)));const g=B.value===!0&&o.mini!==void 0,L=[S("div",{...l,key:""+g,class:[Ne.value,l.class]},g===!0?o.mini():U(o.default))];return e.elevated===!0&&y.value===!0&&L.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(ze("aside",{ref:"content",class:je.value,style:We.value},L,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Xe.value)),S("div",{class:"q-drawer-container"},n)}}}),_t=P({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:i}}=F(),l=pe(te,_);if(l===_)return console.error("QPageContainer needs to be child of QLayout"),_;Pe(nt,!0);const t=f(()=>{const a={};return l.header.space===!0&&(a.paddingTop=`${l.header.size}px`),l.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(a.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),a});return()=>S("div",{class:"q-page-container",style:t.value},U(o.default))}});const{passive:Ee}=me,Pt=["both","horizontal","vertical"];var Mt=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Pt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:pt},emits:["scroll"],setup(e,{emit:o}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,a;q(()=>e.scrollTarget,()=>{d(),h()});function s(){l!==null&&l();const w=Math.max(0,qt(t)),p=Ct(t),v={top:w-i.position.top,left:p-i.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const m=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";i.position={top:w,left:p},i.directionChanged=i.direction!==m,i.delta=v,i.directionChanged===!0&&(i.direction=m,i.inflectionPoint=i.position),o("scroll",{...i})}function h(){t=wt(a,e.scrollTarget),t.addEventListener("scroll",u,Ee),u(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",u,Ee),t=void 0)}function u(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[p,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{v(p),l=null}}}const{proxy:r}=F();return q(()=>r.$q.lang.rtl,s),I(()=>{a=r.$el.parentNode,h()}),X(()=>{l!==null&&l(),d()}),Object.assign(r,{trigger:u,getPosition:()=>i}),ye}}),Dt=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:i}){const{proxy:{$q:l}}=F(),t=T(null),a=T(l.screen.height),s=T(e.container===!0?0:l.screen.width),h=T({position:0,direction:"down",inflectionPoint:0}),d=T(0),u=T(_e.value===!0?0:fe()),r=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=f(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),p=f(()=>u.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),v=f(()=>u.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function m(b){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};h.value=C,e.onScroll!==void 0&&i("scroll",C)}}function B(b){const{height:C,width:k}=b;let V=!1;a.value!==C&&(V=!0,a.value=C,e.onScrollHeight!==void 0&&i("scrollHeight",C),y()),s.value!==k&&(V=!0,s.value=k),V===!0&&e.onResize!==void 0&&i("resize",b)}function x({height:b}){d.value!==b&&(d.value=b,y())}function y(){if(e.container===!0){const b=a.value>d.value?fe():0;u.value!==b&&(u.value=b)}}let c=null;const z={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:d,scrollbarWidth:u,totalWidth:f(()=>s.value+u.value),rows:f(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:J({size:0,offset:0,space:!1}),right:J({size:300,offset:0,space:!1}),footer:J({size:0,offset:0,space:!1}),left:J({size:300,offset:0,space:!1}),scroll:h,animate(){c!==null?clearTimeout(c):document.body.classList.add("q-body--layout-animate"),c=setTimeout(()=>{c=null,document.body.classList.remove("q-body--layout-animate")},155)},update(b,C,k){z[b][C]=k}};if(Pe(te,z),fe()>0){let k=function(){b=null,C.classList.remove("hide-scrollbar")},V=function(){if(b===null){if(C.scrollHeight>l.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(k,300)},W=function(H){b!==null&&H==="remove"&&(clearTimeout(b),k()),window[`${H}EventListener`]("resize",V)},b=null;const C=document.body;q(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),ot(()=>{W("remove")})}return()=>{const b=it(o.default,[S(Mt,{onScroll:m}),S(be,{onResize:B})]),C=S("div",{class:r.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(be,{onResize:x}),S("div",{class:"absolute-full",style:p.value},[S("div",{class:"scroll",style:v.value},[C])])]):C}}});const At=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const o=T(!1);function i(){o.value=!o.value}return(l,t)=>{const a=rt("router-view");return lt(),ut(Dt,{view:"lHh Lpr lFf"},{default:Q(()=>[E(zt,{elevated:"",class:"bg-orange-8"},{default:Q(()=>[E(xt,null,{default:Q(()=>[E(st,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:i}),E(St,null,{default:Q(()=>t[1]||(t[1]=[Le(" \u4F4E\u4EE3\u78BC\u8868\u55AE\u5143\u4EF6\u958B\u767C\u5DE5\u5177 Low-code Form Component Development Tool ")])),_:1}),t[2]||(t[2]=dt("div",null,"Vue 3 / Quasar / Pinia / Vite",-1))]),_:1})]),_:1}),E(Et,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),"show-if-above":"",bordered:""},{default:Q(()=>[E(kt,null,{default:Q(()=>[E(ft,{header:""},{default:Q(()=>t[3]||(t[3]=[Le(" Essential Links ")])),_:1})]),_:1})]),_:1},8,["modelValue"]),E(_t,null,{default:Q(()=>[E(a)]),_:1})]),_:1})}}});export{At as default};
