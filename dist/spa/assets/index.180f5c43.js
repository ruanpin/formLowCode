import{a5 as u,aq as m,aa as o,a9 as b,af as p,ar as j,as as O,a8 as r,a7 as d,j as f,F as v}from"./index.56107e59.js";import{d as C}from"./QCard.91006872.js";import{u as x}from"./ConditionalRender.a70f6780.js";import"./scroll.9d0b1692.js";const V={class:"q-py-sm"},q={class:"f700 q-mb-xs fz14"},y={style:{color:"#CC0100"}},w=Object.assign({name:"InputComponent"},{__name:"index",props:{renderObject:{type:Object,required:!0}},emits:["updateCrObjectToRenderList"],setup(e,{emit:l}){const s=e,c=l;function i(n){x({CRList:s.renderObject.cr_List,renderObject:s.renderObject,emits:c,newValue:n})}return(n,t)=>(u(),m("div",V,[o("div",q,[b(p(e.renderObject.label),1),j(o("span",y," *",512),[[O,e.renderObject.required]])]),r(C,{color:"primary",class:"col",dense:"",outlined:"",placeholder:e.renderObject.placeholder,modelValue:e.renderObject.value,"onUpdate:modelValue":[t[1]||(t[1]=a=>e.renderObject.value=a),t[2]||(t[2]=a=>{i(a)})],"stack-label":""},{append:d(()=>[r(f,{dense:"",round:"",size:"sm",unelevated:""},{default:d(()=>[r(v,{class:"cursor-pointer",name:"close",size:"xs",onClick:t[0]||(t[0]=a=>e.renderObject.value="")})]),_:1})]),_:1},8,["placeholder","modelValue"])]))}});export{w as default};