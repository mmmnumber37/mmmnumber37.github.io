import{Q}from"./QCircularProgress.dc4786e5.js";import{u as C,Q as b}from"./use-quasar.a0194da4.js";import{Q as D}from"./QCheckbox.5e1deb66.js";import{b as E,a as I,Q as k}from"./QItem.0291bc4e.js";import{Q as $}from"./QItemLabel.901afb4b.js";import{Q as B,R as Y}from"./QBtn.07f5eb32.js";import{Q as M,l as N}from"./lodash.6a5db203.js";import{Q as S}from"./QPage.b7eb0fe2.js";import{d as T,a as L}from"./FirebaseConfig.bfeb572e.js";import{u as q,v as x,w as P,x as U}from"./index.esm2017.54c279e2.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";import{k as F,l as r,K as g,L as l,r as u,o as R,c as w,m as n,d as o,M as d,n as H,F as K,Y as Z,H as j,$ as V,Z as A}from"./index.c16f95ca.js";import"./render.e76746ce.js";import"./format.e3cb4f10.js";import"./use-dark.0b791828.js";import"./use-form.400795b2.js";const G=F({components:{},setup(){const e=u(T.formatDate(Date.now(),"YYYY/MM/DD")),m=C(),p=u(!1),f=u(!1),y=u(),i=u(),c=async()=>{console.log("getCalendar"),p.value=!0;try{const a=q(L,"calendar"),s=await x(a);i.value=s.docs.map(h=>({...h.data(),id:h.id})),console.log("asdf - ",[i.value,s.docs])}catch(a){y.value=a}finally{p.value=!1}};R(()=>{c()});const t=w(()=>{var a;return(a=i.value)==null?void 0:a.map(s=>s.date)}),_=w(()=>{var a;return(a=N.exports.cloneDeep(i.value))==null?void 0:a.filter(s=>s.date===e.value)});return{dateLocal:e,dateEvents:t,events:_,updateTask:async a=>{f.value=!0;try{await P(U(L,"calendar",a.id),a.task,{merge:!0}),await c()}catch(s){console.error(s),m.notify({message:s.message,color:"red"})}finally{f.value=!1}},isLoading:p,isLoadingEvent:f}}}),J={key:0,class:"tt"},O={key:1,class:"row"},W={class:"col-12"},X={key:2,class:"ttt"},ee={key:3,class:"row"},ae={key:0};function te(e,m,p,f,y,i){return r(),g(S,null,{default:l(()=>{var c;return[e.isLoading?(r(),n("div",J,[o(Q,{indeterminate:"",size:"45px",thickness:1,color:"grey-8","track-color":"lime",class:"q-ma-md"})])):d("",!0),e.isLoading?d("",!0):(r(),n("div",O,[H("div",W,[o(b,{class:"full-width calendar",modelValue:e.dateLocal,"onUpdate:modelValue":m[0]||(m[0]=t=>e.dateLocal=t),events:e.dateEvents,"first-day-of-week":"1","today-btn":""},null,8,["modelValue","events"])])])),e.isLoadingEvent?(r(),n("div",X,[o(Q,{indeterminate:"",size:"45px",thickness:1,color:"grey-8","track-color":"lime",class:"q-ma-md"})])):d("",!0),e.isLoadingEvent?d("",!0):(r(),n("div",ee,[(c=e.events)!=null&&c.length?(r(),g(E,{key:0,bordered:"",separator:"",class:"col"},{default:l(()=>[(r(!0),n(K,null,Z(e.events,(t,_)=>j((r(),g(I,{key:_,tag:"label"},{default:l(()=>[o(k,{side:"",top:""},{default:l(()=>[o(D,{modelValue:t.check,"onUpdate:modelValue":[v=>t.check=v,v=>e.updateTask({id:t.id,task:{check:v}})]},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),o(k,null,{default:l(()=>[o($,null,{default:l(()=>[t.count?(r(),n("span",ae,"("+V(t.count)+")",1)):d("",!0),A(" "+V(t.name),1)]),_:2},1024)]),_:2},1024),o(k,{side:""})]),_:2},1024)),[[Y]])),128))]),_:1})):d("",!0)])),o(M,{position:"bottom-right",offset:[18,18]},{default:l(()=>[o(B,{round:"",color:"accent",icon:"add",to:"/calendar/add"})]),_:1})]}),_:1})}var ye=z(G,[["render",te],["__scopeId","data-v-1fe7b4e0"]]);export{ye as default};