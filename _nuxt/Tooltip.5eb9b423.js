import S from"./ContentSlot.4d2cd686.js";import{d as w,r as i,a6 as $,b as m,c,e as C,g as y,U as t,ab as T,w as k,n as B,a1 as N,t as F,f as M,T as R,l as W}from"./entry.ec7391a7.js";import{u as h,L as V,A as z,O as A,a as D}from"./floating-ui.vue.esm.6628abb0.js";import{a as E,b as I}from"./index.ee52d4e9.js";const K=["tabindex","aria-describedby"],O=["id"],q=w({__name:"Tooltip",props:{content:{type:String,required:!0},tabbable:{type:Boolean,default:!1},maxWidth:{type:String,default:"240px"},offset:{type:Number,default:4},delay:{type:Number,default:200},strategy:{type:String,default:"absolute"},placement:{type:String,default:"top"}},setup(n){const s=n,o=i(!1),d=E(a=>{p.value||(o.value=a)},s.delay),r=i(null),u=i(null),{x:g,y:b,strategy:_,placement:v}=h(r,u,{strategy:s.strategy,middleware:[V(s.offset),z(),A({padding:4})],placement:s.placement,whileElementsMounted:D}),{focused:p}=I(r);$(p,a=>{a?o.value=!0:o.value=!1});const f=Math.random().toString(36).slice(2,7);return(a,e)=>{const x=S;return m(),c("span",{class:"tooltip",onMouseenter:e[3]||(e[3]=l=>t(d)(!0)),onMouseleave:e[4]||(e[4]=l=>t(d)(!1))},[C("span",{ref_key:"triggerRef",ref:r,tabindex:n.tabbable?0:-1,class:"trigger","aria-describedby":t(f),onFocus:e[0]||(e[0]=l=>o.value=!0),onBlur:e[1]||(e[1]=l=>o.value=!1),onKeydown:e[2]||(e[2]=T(l=>o.value=!1,["esc"]))},[y(x,{use:a.$slots.default,unwrap:"p"},null,8,["use"])],40,K),y(R,{name:"tooltip"},{default:k(()=>[t(o)?(m(),c("span",{key:0,id:t(f),ref_key:"floatingRef",ref:u,role:"tooltip",class:B(["tooltip-content",t(v)]),style:N({position:t(_),top:`${t(b)??0}px`,left:`${t(g)??0}px`,width:"max-content",maxWidth:n.maxWidth})},F(n.content),15,O)):M("",!0)]),_:1})],32)}}});const G=W(q,[["__scopeId","data-v-22ded0b7"]]);export{G as default};
