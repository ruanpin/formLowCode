import{Q as c}from"./QToggle.2dc41a03.js";import{a5 as i,aq as u,aa as l,a9 as m,af as b,ar as j,as as O,a8 as f}from"./index.c7611be5.js";import{u as v}from"./ConditionalRender.4441b73b.js";import"./use-checkbox.ace7be71.js";import"./QCard.a5bc13c3.js";import"./scroll.c3c1818d.js";const p={class:"q-py-sm"},g={class:"f700 q-mb-xs fz14"},C={style:{color:"#CC0100"}},B=Object.assign({name:"ToggleComponent"},{__name:"index",props:{renderObject:{type:Object,required:!0}},emits:["updateCrObjectToRenderList"],setup(e,{emit:n}){const r=e,o=n;function d(s){v({CRList:r.renderObject.cr_List,renderObject:r.renderObject,emits:o,newValue:s})}return(s,t)=>(i(),u("div",p,[l("div",g,[m(b(e.renderObject.label),1),j(l("span",C,"*",512),[[O,e.renderObject.required]])]),f(c,{modelValue:e.renderObject.value,"onUpdate:modelValue":[t[0]||(t[0]=a=>e.renderObject.value=a),t[1]||(t[1]=a=>{d(a)})],label:e.renderObject.label,class:"",dense:"","false-value":e.renderObject.falsevalue,"true-value":e.renderObject.truevalue},null,8,["modelValue","label","false-value","true-value"])]))}});export{B as default};
