import{r as n,a5 as l,aq as i,aa as r,a9 as d,af as c,ar as u,as as m,a8 as o,a7 as p,F as v}from"./index.c7611be5.js";import{d as b}from"./QCard.a5bc13c3.js";import"./scroll.c3c1818d.js";const f={class:"q-py-sm"},y={class:"f700 q-mb-xs fz14"},j={style:{color:"#CC0100"}},w=Object.assign({name:"InputComponent"},{__name:"index",props:{renderObject:{type:Object,required:!0}},setup(e){const a=n(!0);return(x,t)=>(l(),i("div",f,[r("div",y,[d(c(e.renderObject.label),1),u(r("span",j," *",512),[[m,e.renderObject.required]])]),o(b,{color:"primary",class:"col",dense:"",outlined:"","stack-label":"",modelValue:e.renderObject.value,"onUpdate:modelValue":t[1]||(t[1]=s=>e.renderObject.value=s),type:a.value?"password":"text"},{append:p(()=>[o(v,{name:a.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[0]||(t[0]=s=>a.value=!a.value)},null,8,["name"])]),_:1},8,["modelValue","type"])]))}});export{w as default};
