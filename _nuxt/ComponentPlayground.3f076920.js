import{b as m,u as c,Q as p,a as i,a8 as u,r as l,M as n,x as d}from"./entry.8b15f485.js";import{u as f}from"./asyncData.e4de1926.js";import _ from"./Ellipsis.99ec3a46.js";import y from"./ComponentPlaygroundData.70e2c805.js";import"./TabsHeader.85902d96.js";import"./ComponentPlaygroundProps.54f02da9.js";import"./ProseH4.cb6610cf.js";import"./ProseCodeInline.5a0fa2b5.js";import"./Badge.97fed176.js";import"./ContentSlot.92548c65.js";import"./ProseP.4a94b8a6.js";import"./index.313f1fa3.js";import"./ComponentPlaygroundSlots.vue.67ea58fa.js";import"./ComponentPlaygroundTokens.vue.a63d2e6a.js";async function g(o){m();const t=c(o);{const{data:e}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const v=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await g(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(_,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const S=d(v,[["__scopeId","data-v-a9c00f9d"]]);export{S as default};