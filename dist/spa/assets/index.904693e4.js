import{Q as r}from"./QOptionGroup.ad6483b7.js";import{ae as s,av as i,aj as a,ai as n,ao as d,a8 as c,aw as l,ah as m}from"./index.3e9da833.js";import"./use-timeout.87b88655.js";import"./use-checkbox.d769db79.js";import"./QInput.32fb33ae.js";import"./QCheckbox.a067911f.js";import"./QToggle.6d9fa612.js";const p={class:"q-py-sm"},u={class:"f700 q-mb-xs fz14"},b={style:{color:"#CC0100"}},q=Object.assign({name:"RadioComponent"},{__name:"index",props:{renderObject:{type:Object,required:!0}},setup(e){return(j,t)=>(s(),i("div",p,[a("div",u,[n(d(e.renderObject.label),1),c(a("span",b,"*",512),[[l,e.renderObject.required]])]),m(r,{modelValue:e.renderObject.value,"onUpdate:modelValue":t[0]||(t[0]=o=>e.renderObject.value=o),options:e.renderObject.options,class:"",type:"radio",inline:"",dense:"",size:"xs"},null,8,["modelValue","options"])]))}});export{q as default};