import{r as n,a6 as l,at as i,ab as r,aa as d,ah as c,ai as u,au as m,a9 as o,a8 as p,R as b}from"./index.857ad1e3.js";import{d as v}from"./QInput.80cd1022.js";import"./scroll.04620254.js";const f={class:"q-py-sm"},y={class:"f700 q-mb-xs fz14"},j={style:{color:"#CC0100"}},C=Object.assign({name:"InputComponent"},{__name:"index",props:{renderObject:{type:Object,required:!0}},setup(e){const t=n(!0);return(x,a)=>(l(),i("div",f,[r("div",y,[d(c(e.renderObject.label),1),u(r("span",j," *",512),[[m,e.renderObject.required]])]),o(v,{color:"primary",class:"col",dense:"",outlined:"","stack-label":"",modelValue:e.renderObject.value,"onUpdate:modelValue":a[1]||(a[1]=s=>e.renderObject.value=s),type:t.value?"password":"text"},{append:p(()=>[o(b,{name:t.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[0]||(a[0]=s=>t.value=!t.value)},null,8,["name"])]),_:1},8,["modelValue","type"])]))}});export{C as default};
