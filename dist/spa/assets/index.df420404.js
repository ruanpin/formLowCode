import{Q as r}from"./QToggle.f0e6729b.js";import{ae as s,av as o,aj as t,ai as n,ao as c,a8 as d,aw as u,ah as i}from"./index.e49acdf2.js";import"./use-checkbox.2dfb09cf.js";import"./use-timeout.4148a4da.js";import"./QInput.59e62fce.js";const m={class:"q-py-sm"},b={class:"f700 q-mb-xs fz14"},v={style:{color:"#CC0100"}},x=Object.assign({name:"ToggleComponent"},{__name:"index",props:{renderObject:{type:Object,required:!0}},setup(e){return(j,a)=>(s(),o("div",m,[t("div",b,[n(c(e.renderObject.label),1),d(t("span",v,"*",512),[[u,e.renderObject.required]])]),i(r,{modelValue:e.renderObject.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.renderObject.value=l),label:e.renderObject.label,class:"",dense:"","false-value":e.renderObject.falsevalue,"true-value":e.renderObject.truevalue},null,8,["modelValue","label","false-value","true-value"])]))}});export{x as default};