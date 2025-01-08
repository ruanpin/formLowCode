import{Q as V}from"./QCheckbox.8a8b92fb.js";import{c as a,b as O,a as j}from"./QInput.59e62fce.js";import{ae as u,av as i,aj as l,ah as t,ag as s,ai as x,L as r,aG as m,e as f,ay as g,aB as y,af as q,aF as k}from"./index.e49acdf2.js";import{u as b}from"./optionsArrayTools.93dc7e78.js";import{_ as C}from"./IndexPage.abbe1bc9.js";import"./use-checkbox.2dfb09cf.js";import"./use-timeout.4148a4da.js";import"./format.86fdfed8.js";import"./index.7f3d6576.js";const U={class:"q-gutter-md"},Q={class:"options-title flex-ac"},B={class:"flex-ac q-ml-xs q-gutter-sm"},I={class:"flex-sb wrap"},N=Object.assign({name:"CheckboxOptionsComponent"},{__name:"index",props:{formObj:Object},setup(d){return(v,e)=>(u(),i("div",U,[l("div",null,[e[7]||(e[7]=l("div",{class:"options-title"},"\u6B04\u4F4D\u5FC5\u586B(required)\uFF1F",-1)),t(V,{class:"",dense:"",modelValue:d.formObj.required,"onUpdate:modelValue":e[0]||(e[0]=o=>d.formObj.required=o)},{default:s(()=>e[6]||(e[6]=[x("\u5FC5\u586B")])),_:1},8,["modelValue"])]),l("div",null,[e[8]||(e[8]=l("div",{class:"options-title"},"\u7269\u4EF6\u540D\u7A31(name)",-1)),t(a,{class:"",dense:"",rounded:"",outlined:"",modelValue:d.formObj.name,"onUpdate:modelValue":e[1]||(e[1]=o=>d.formObj.name=o)},null,8,["modelValue"])]),l("div",null,[e[9]||(e[9]=l("div",{class:"options-title"},"\u8868\u55AE\u986F\u793A\u540D\u7A31(label)",-1)),t(a,{class:"",dense:"",rounded:"",outlined:"",modelValue:d.formObj.label,"onUpdate:modelValue":e[2]||(e[2]=o=>d.formObj.label=o)},null,8,["modelValue"])]),l("div",null,[e[10]||(e[10]=l("div",{class:"options-title"},"API\u5C0D\u61C9key(field)",-1)),t(a,{class:"",dense:"",rounded:"",outlined:"",modelValue:d.formObj.field,"onUpdate:modelValue":e[3]||(e[3]=o=>d.formObj.field=o)},null,8,["modelValue"])]),l("div",null,[l("div",Q,[e[11]||(e[11]=l("div",null,"\u53EF\u9078\u9078\u9805(options)",-1)),l("div",B,[t(f,{unelevated:"",color:"grey-2",size:"sm",round:"",onClick:e[4]||(e[4]=o=>m(b)(!0,d.formObj.options))},{default:s(()=>[t(r,{name:"add",color:"grey-9"})]),_:1}),t(f,{unelevated:"",color:"grey-2",size:"sm",round:"",onClick:e[5]||(e[5]=o=>m(b)(!1,d.formObj.options)),disable:d.formObj.options.length<=1},{default:s(()=>[t(r,{name:"remove",color:"grey-9"})]),_:1},8,["disable"])])]),l("div",I,[(u(!0),i(g,null,y(d.formObj.options,(o,p)=>(u(),q(j,{flat:"",bordered:"",class:"my-card q-pa-md q-my-xs bg-grey-4",key:p},{default:s(()=>[t(O,{class:"q-gutter-md q-pa-none"},{default:s(()=>[l("div",null,[e[12]||(e[12]=l("div",{class:"options-subtitle"},"\u9078\u9805\u986F\u793A\u540D\u7A31(label)",-1)),t(a,{class:"",dense:"",rounded:"",outlined:"",modelValue:o.label,"onUpdate:modelValue":n=>o.label=n},null,8,["modelValue","onUpdate:modelValue"])]),l("div",null,[e[13]||(e[13]=l("div",{class:"options-subtitle"},"\u9078\u9805\u503C(value)",-1)),t(a,{class:"",dense:"",rounded:"",outlined:"",modelValue:o.value,"onUpdate:modelValue":n=>o.value=n},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]),_:2},1024))),128))])]),k(v.$slots,"default",{},void 0,!0)]))}});var P=C(N,[["__scopeId","data-v-1326c0b8"]]);export{P as default};