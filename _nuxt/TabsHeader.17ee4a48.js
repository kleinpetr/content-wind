import{a as b,r as l,a1 as m,o as a,i as s,F as v,V as x,k as u,l as g,L as k,j as y,t as I,a4 as T,s as S,v as C,x as $}from"./entry.7d514228.js";const w=t=>(S("data-v-b2a4d937"),t=t(),C(),t),B={class:"tabs-header"},L=["onClick"],N=w(()=>u("span",{class:"tab"},null,-1)),U=[N],V=b({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:h}){const p=t,n=l(),r=l(),o=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},f=(e,c)=>{h("update:activeTabIndex",c),T(()=>o(e.target))};return m(n,e=>{e&&setTimeout(()=>{o(n.value.children[p.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(a(),s("div",B,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,x(t.tabs,({label:d},i)=>(a(),s("button",{key:`${i}${d}`,class:y([t.activeTabIndex===i?"active":"not-active"]),onClick:_=>f(_,i)},I(d),11,L))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},U,512)],512)):g("",!0),k(e.$slots,"footer",{},void 0,!0)]))}}),F=$(V,[["__scopeId","data-v-b2a4d937"]]);export{F as default};