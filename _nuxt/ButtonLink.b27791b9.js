import{d as h,$ as v,I as n,X as S,b as r,W as a,w as C,f as L,g as B,n as x,U as $,Y as z,E as H,l as w}from"./entry.ec7391a7.js";import y from"./ContentSlot.4d2cd686.js";const q=h({__name:"ButtonLink",props:{blank:{type:Boolean,required:!1,default:!1},color:v("primary"),href:{type:String,required:!0,default:""},icon:{type:String,default:""},size:{required:!1,type:[String,Object],default:"medium"},ghost:{required:!1,type:[Boolean,Object],default:!1}},setup(e){const t=e,l=n(()=>((o=t)=>`{color.${o.color}.500}`)()),u=n(()=>((o=t)=>`0 0 0 1px {color.${o.color}.400}`)()),c=n(()=>((o=t)=>`{color.${o.color}.100}`)()),i=n(()=>((o=t)=>`{color.${o.color}.800}`)()),s=n(()=>((o=t)=>`{color.${o.color}.100}`)()),d=n(()=>((o=t)=>`{color.${o.color}.200}`)()),b=n(()=>((o=t)=>`{color.${o.color}.800}`)()),m=n(()=>((o=t)=>`{color.${o.color}.700}`)()),g={size:{small:{padding:"{elements.buttonLink.small.padding}",fontSize:"{elements.buttonLink.small.fontSize}",lineHeight:"{elements.buttonLink.small.lineHeight}"},medium:{padding:"{elements.buttonLink.medium.padding}",fontSize:"{elements.buttonLink.medium.fontSize}",lineHeight:"{elements.buttonLink.medium.lineHeight}"},large:{padding:"{elements.buttonLink.large.padding}",fontSize:"{elements.buttonLink.large.fontSize}",lineHeight:"{elements.buttonLink.large.lineHeight}"},giant:{padding:"{elements.buttonLink.giant.padding}",fontSize:"{elements.buttonLink.giant.fontSize}",lineHeight:"{elements.buttonLink.giant.lineHeight}"}},ghost:{true:{boxShadow:"none","--button-backgroundColor-static":"transparent","--button-backgroundColor-hover":"var(---mbm-button-background-color-hover)","@dark":{"--button-backgroundColor-hover":"var(---v-ut-button-background-color-hover)"},"&:hover":{boxShadow:"{elements.buttonLink.boxShadow}"}},false:{boxShadow:"{elements.buttonLink.boxShadow}","--button-backgroundColor-static":"var(---f-wz-button-background-color-static)","--button-backgroundColor-hover":"var(---39q-button-background-color-hover)","@dark":{"--button-backgroundColor-static":"var(---i79-button-background-color-static)","--button-backgroundColor-hover":"var(---rol-button-background-color-hover)"}}}},{$pinceau:_}=S(t,g,{_JfM_color:l,_hBB_boxShadow:u,_mbm_buttonBackgroundColorHover:c,_vUT_buttonBackgroundColorHover:i,_fWz_buttonBackgroundColorStatic:s,_39q_buttonBackgroundColorHover:d,_i79_buttonBackgroundColorStatic:b,_ROL_buttonBackgroundColorHover:m});return(o,I)=>{const k=z,f=y,p=H;return r(),a(p,{class:x(["button-link",[$(_)]]),to:e.href,target:e.blank?"_blank":void 0},{default:C(()=>[e.icon?(r(),a(k,{key:0,name:e.icon},null,8,["name"])):L("",!0),B(f,{use:o.$slots.default,unwrap:"p ul li"},null,8,["use"])]),_:1},8,["to","target","class"])}}});const V=w(q,[["__scopeId","data-v-c70572f6"]]);export{V as default};
