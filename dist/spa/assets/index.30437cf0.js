import{Q as p}from"./QCheckbox.37ad52e5.js";import{Q as a}from"./QInput.1203a3fa.js";import{ae as r,av as m,aj as l,ah as t,ag as n,ai as V,L as f,e as b,ay as O,aB as y,af as j,aF as x}from"./index.adc5c5e8.js";import{b as g,a as q}from"./use-key-composition.00bd84b0.js";import{_ as k,B}from"./IndexPage.e82de504.js";import"./use-checkbox.53414926.js";import"./use-timeout.085da037.js";import"./use-file-dom-props.7f6b9ef8.js";import"./format.b81a26d7.js";import"./index.1b4fbdb6.js";const C={class:"q-gutter-md"},Q={class:"options-title flex-ac"},U={class:"flex-ac q-ml-xs q-gutter-sm"},w={class:"flex-sb wrap"},A=Object.assign({name:"CheckboxOptionsComponent"},{__name:"index",props:{formObj:Object},setup(d){function u(s,e){try{if(!Array.isArray(e))throw new Error("The target you want to be updated is not Array.");s?e.push(new B):!s&&e.length>1&&e.pop()}catch{console.log("error, see above")}}return(s,e)=>(r(),m("div",C,[l("div",null,[e[7]||(e[7]=l("div",{class:"options-title"},"\u6B04\u4F4D\u5FC5\u586B(required)\uFF1F",-1)),t(p,{class:"",dense:"",modelValue:d.formObj.required,"onUpdate:modelValue":e[0]||(e[0]=o=>d.formObj.required=o)},{default:n(()=>e[6]||(e[6]=[V("\u5FC5\u586B")])),_:1},8,["modelValue"])]),l("div",null,[e[8]||(e[8]=l("div",{class:"options-title"},"\u7269\u4EF6\u540D\u7A31(name)",-1)),t(a,{class:"",dense:"",rounded:"",outlined:"",modelValue:d.formObj.name,"onUpdate:modelValue":e[1]||(e[1]=o=>d.formObj.name=o)},null,8,["modelValue"])]),l("div",null,[e[9]||(e[9]=l("div",{class:"options-title"},"\u8868\u55AE\u986F\u793A\u540D\u7A31(label)",-1)),t(a,{class:"",dense:"",rounded:"",outlined:"",modelValue:d.formObj.label,"onUpdate:modelValue":e[2]||(e[2]=o=>d.formObj.label=o)},null,8,["modelValue"])]),l("div",null,[e[10]||(e[10]=l("div",{class:"options-title"},"API\u5C0D\u61C9key(field)",-1)),t(a,{class:"",dense:"",rounded:"",outlined:"",modelValue:d.formObj.field,"onUpdate:modelValue":e[3]||(e[3]=o=>d.formObj.field=o)},null,8,["modelValue"])]),l("div",null,[l("div",Q,[e[11]||(e[11]=l("div",null,"\u53EF\u9078\u9078\u9805(options)",-1)),l("div",U,[t(b,{unelevated:"",color:"grey-2",size:"sm",round:"",onClick:e[4]||(e[4]=o=>u(!0,d.formObj.options))},{default:n(()=>[t(f,{name:"add",color:"grey-9"})]),_:1}),t(b,{unelevated:"",color:"grey-2",size:"sm",round:"",onClick:e[5]||(e[5]=o=>u(!1,d.formObj.options)),disable:d.formObj.options.length<=1},{default:n(()=>[t(f,{name:"remove",color:"grey-9"})]),_:1},8,["disable"])])]),l("div",w,[(r(!0),m(O,null,y(d.formObj.options,(o,v)=>(r(),j(q,{flat:"",bordered:"",class:"my-card q-pa-md q-my-xs bg-grey-4",key:v},{default:n(()=>[t(g,{class:"q-gutter-md q-pa-none"},{default:n(()=>[l("div",null,[e[12]||(e[12]=l("div",{class:"options-subtitle"},"\u9078\u9805\u986F\u793A\u540D\u7A31(label)",-1)),t(a,{class:"",dense:"",rounded:"",outlined:"",modelValue:o.label,"onUpdate:modelValue":i=>o.label=i},null,8,["modelValue","onUpdate:modelValue"])]),l("div",null,[e[13]||(e[13]=l("div",{class:"options-subtitle"},"\u9078\u9805\u503C(value)",-1)),t(a,{class:"",dense:"",rounded:"",outlined:"",modelValue:o.value,"onUpdate:modelValue":i=>o.value=i},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]),_:2},1024))),128))])]),x(s.$slots,"default",{},void 0,!0)]))}});var P=k(A,[["__scopeId","data-v-28e4270a"]]);export{P as default};
