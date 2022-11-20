import{r as y,v as ge,D as pe,P as ie,x as be,w as p,o as Ve,E as A,g as xe,y as Ne,J as fe,a as Ge,h as k,ap as Ue,aq as Je,ar as Xe,c as g,a6 as ye,ak as Ye,p as Pe,B as Ze,a7 as et,G as he,as as Be,I as tt,t as nt}from"./index.c16f95ca.js";import{d as ot,u as _e,a as Me,b as Le,c as De,e as it,f as lt}from"./selection.350f5f77.js";import{u as at,a as ut}from"./use-dark.0b791828.js";import{h as We}from"./render.e76746ce.js";import{r as we,b as st,a as Oe}from"./QInput.edfd6c5e.js";import{g as ee}from"./QBtn.07f5eb32.js";const rt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function ct({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:i,proxy:l,emit:s}=xe(),o=y(null);let h;function d(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};n===void 0&&(Object.assign(r,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){ge(a,13)===!0&&r.toggle(a)},contextClick(a){l.hide(a),pe(a),ie(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:pe,mobileTouch(a){if(r.mobileCleanup(a),d(a)!==!0)return;l.hide(a),o.value.classList.add("non-selectable");const x=a.target;be(r,"anchor",[[x,"touchmove","mobileCleanup","passive"],[x,"touchend","mobileCleanup","passive"],[x,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),h=setTimeout(()=>{l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),clearTimeout(h),e.value===!0&&a!==void 0&&ot()}}),n=function(a=i.contextMenu){if(i.noParentEvent===!0||o.value===null)return;let x;a===!0?l.$q.platform.is.mobile===!0?x=[[o.value,"touchstart","mobileTouch","passive"]]:x=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:x=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],be(r,"anchor",x)});function c(){Ne(r,"anchor")}function m(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function v(){if(i.target===!1||i.target===""||l.$el.parentNode===null)o.value=null;else if(i.target===!0)m(l.$el.parentNode);else{let a=i.target;if(typeof i.target=="string")try{a=document.querySelector(i.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,n()):(o.value=null,console.error(`Anchor: target "${i.target}" not found`))}}return p(()=>i.contextMenu,a=>{o.value!==null&&(c(),n(a))}),p(()=>i.target,()=>{o.value!==null&&c(),v()}),p(()=>i.noParentEvent,a=>{o.value!==null&&(a===!0?c():n())}),Ve(()=>{v(),t!==!0&&i.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),A(()=>{clearTimeout(h),c()}),{anchorEl:o,canShow:d,anchorEvents:r}}function dt(e,t){const n=y(null);let i;function l(h,d){const r=`${d!==void 0?"add":"remove"}EventListener`,c=d!==void 0?d:i;h!==window&&h[r]("scroll",c,fe.passive),window[r]("scroll",c,fe.passive),i=d}function s(){n.value!==null&&(l(n.value),n.value=null)}const o=p(()=>e.noParentEvent,()=>{n.value!==null&&(s(),t())});return A(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:l}}const L=[];function ft(e){return L.find(t=>t.__qPortalInnerRef.value!==null&&t.__qPortalInnerRef.value.contains(e))}function Re(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return ee(e)}else if(e.__qPortalInnerRef!==void 0){const n=ee(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=ee(e)}while(e!=null)}function ht(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortalInnerRef!==void 0){if(n--,e.$options.name==="QMenu"){e=Re(e,t);continue}e.hide(t)}e=ee(e)}}function mt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function $e(e,t,n,i){const l=y(!1),s=y(!1);let o=null;const h={},d=i===!0&&mt(e);function r(m){if(m===!0){we(h),s.value=!0;return}s.value=!1,l.value===!1&&(d===!1&&o===null&&(o=Je()),l.value=!0,L.push(e.proxy),st(h))}function c(m){if(s.value=!1,m!==!0)return;we(h),l.value=!1;const v=L.indexOf(e.proxy);v>-1&&L.splice(v,1),o!==null&&(Xe(o),o=null)}return Ge(()=>{c(!0)}),Object.assign(e.proxy,{__qPortalInnerRef:t}),{showPortal:r,hidePortal:c,portalIsActive:l,portalIsAccessible:s,renderPortal:()=>d===!0?n():l.value===!0?[k(Ue,{to:o},n())]:void 0}}const ze={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function vt(e,t){const n=y(t.value);return p(t,i=>{ie(()=>{n.value=i})}),{transition:g(()=>"q-transition--"+(n.value===!0?e.transitionHide:e.transitionShow)),transitionStyle:g(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Fe(){let e;return A(()=>{e=void 0}),{registerTick(t){e=t,ie(()=>{e===t&&(e(),e=void 0)})},removeTick(){e=void 0}}}const S=[];let D;function gt(e){D=e.keyCode===27}function xt(){D===!0&&(D=!1)}function yt(e){D===!0&&(D=!1,ge(e,27)===!0&&S[S.length-1](e))}function Ae(e){window[e]("keydown",gt),window[e]("blur",xt),window[e]("keyup",yt),D=!1}function Ie(e){ye.is.desktop===!0&&(S.push(e),S.length===1&&Ae("addEventListener"))}function te(e){const t=S.indexOf(e);t>-1&&(S.splice(t,1),S.length===0&&Ae("removeEventListener"))}const C=[];function Ke(e){C[C.length-1](e)}function Qe(e){ye.is.desktop===!0&&(C.push(e),C.length===1&&document.body.addEventListener("focusin",Ke))}function me(e){const t=C.indexOf(e);t>-1&&(C.splice(t,1),C.length===0&&document.body.removeEventListener("focusin",Ke))}let je;const{notPassiveCapture:ne}=fe,H=[];function oe(e){clearTimeout(je);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=L.length-1;for(;n>=0;){const i=L[n].$;if(i.type.name!=="QDialog")break;if(i.props.seamless!==!0)return;n--}for(let i=H.length-1;i>=0;i--){const l=H[i];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function pt(e){H.push(e),H.length===1&&(document.addEventListener("mousedown",oe,ne),document.addEventListener("touchstart",oe,ne))}function ke(e){const t=H.findIndex(n=>n===e);t>-1&&(H.splice(t,1),H.length===0&&(clearTimeout(je),document.removeEventListener("mousedown",oe,ne),document.removeEventListener("touchstart",oe,ne)))}let qe,Te;function Ee(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function bt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ve={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ve[`${e}#ltr`]=e,ve[`${e}#rtl`]=e});function Se(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:ve[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function wt(e,t){let{top:n,left:i,right:l,bottom:s,width:o,height:h}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],i-=t[0],s+=t[1],l+=t[0],o+=t[0],h+=t[1]),{top:n,left:i,right:l,bottom:s,width:o,height:h,middle:i+(l-i)/2,center:n+(s-n)/2}}function kt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function qt(e){if(ye.is.ios===!0&&window.visualViewport!==void 0){const h=document.body.style,{offsetLeft:d,offsetTop:r}=window.visualViewport;d!==qe&&(h.setProperty("--q-pe-left",d+"px"),qe=d),r!==Te&&(h.setProperty("--q-pe-top",r+"px"),Te=r)}let t;const{scrollLeft:n,scrollTop:i}=e.el;if(e.absoluteOffset===void 0)t=wt(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:h,left:d}=e.anchorEl.getBoundingClientRect(),r=h+e.absoluteOffset.top,c=d+e.absoluteOffset.left;t={top:r,left:c,width:1,height:1,right:c+1,center:r,middle:c,bottom:r+1}}let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const s=kt(e.el),o={top:t[e.anchorOrigin.vertical]-s[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-s[e.selfOrigin.horizontal]};Tt(o,t,s,e.anchorOrigin,e.selfOrigin),l={top:o.top+"px",left:o.left+"px"},o.maxHeight!==void 0&&(l.maxHeight=o.maxHeight+"px",t.height>o.maxHeight&&(l.minHeight=l.maxHeight)),o.maxWidth!==void 0&&(l.maxWidth=o.maxWidth+"px",t.width>o.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==i&&(e.el.scrollTop=i),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function Tt(e,t,n,i,l){const s=n.bottom,o=n.right,h=Ye(),d=window.innerHeight-h,r=document.body.clientWidth;if(e.top<0||e.top+s>d)if(l.vertical==="center")e.top=t[i.vertical]>d/2?Math.max(0,d-s):0,e.maxHeight=Math.min(s,d);else if(t[i.vertical]>d/2){const c=Math.min(d,i.vertical==="center"?t.center:i.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,c),e.top=Math.max(0,c-s)}else e.top=Math.max(0,i.vertical==="center"?t.center:i.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,d-e.top);if(e.left<0||e.left+o>r)if(e.maxWidth=Math.min(o,r),l.horizontal==="middle")e.left=t[i.horizontal]>r/2?Math.max(0,r-o):0;else if(t[i.horizontal]>r/2){const c=Math.min(r,i.horizontal==="middle"?t.middle:i.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(o,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,i.horizontal==="middle"?t.middle:i.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(o,r-e.left)}var Mt=Pe({name:"QMenu",inheritAttrs:!1,props:{...rt,..._e,...at,...ze,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ee},self:{type:String,validator:Ee},offset:{type:Array,validator:bt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Me,"click","escape-key"],setup(e,{slots:t,emit:n,attrs:i}){let l=null,s,o,h;const d=xe(),{proxy:r}=d,{$q:c}=r,m=y(null),v=y(!1),a=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),x=ut(e,c),{registerTick:I,removeTick:W}=Fe(),{registerTimeout:K,removeTimeout:O}=Le(),{transition:Q,transitionStyle:j}=vt(e,v),{localScrollTarget:V,changeScrollEvent:le,unconfigureScrollTarget:P}=dt(e,M),{anchorEl:w,canShow:ae}=ct({showing:v}),{hide:N}=De({showing:v,canShow:ae,handleShow:R,handleHide:$,hideOnRouteChange:a,processOnMount:!0}),{showPortal:G,hidePortal:U,renderPortal:ue}=$e(d,m,f),B={anchorEl:w,innerRef:m,onClickOutside(u){if(e.persistent!==!0&&v.value===!0)return N(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&tt(u),!0}},_=g(()=>Se(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),se=g(()=>e.cover===!0?_.value:Se(e.self||"top start",c.lang.rtl)),re=g(()=>(e.square===!0?" q-menu--square":"")+(x.value===!0?" q-menu--dark q-dark":"")),ce=g(()=>e.autoClose===!0?{onClick:de}:{}),J=g(()=>v.value===!0&&e.persistent!==!0);p(J,u=>{u===!0?(Ie(q),pt(B)):(te(q),ke(B))});function b(){Oe(()=>{let u=m.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function R(u){if(W(),O(),l=e.noRefocus===!1?document.activeElement:null,Qe(X),G(),M(),s=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const E=Ze(u);if(E.left!==void 0){const{top:Y,left:F}=w.value.getBoundingClientRect();s={left:E.left-F,top:E.top-Y}}}o===void 0&&(o=p(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,T)),e.noFocus!==!0&&document.activeElement.blur(),I(()=>{T(),e.noFocus!==!0&&b()}),K(()=>{c.platform.is.ios===!0&&(h=e.autoClose,m.value.click()),T(),G(!0),n("show",u)},e.transitionDuration)}function $(u){W(),O(),U(),z(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(l.focus(),l=null),K(()=>{U(!0),n("hide",u)},e.transitionDuration)}function z(u){s=void 0,o!==void 0&&(o(),o=void 0),(u===!0||v.value===!0)&&(me(X),P(),ke(B),te(q)),u!==!0&&(l=null)}function M(){(w.value!==null||e.scrollTarget!==void 0)&&(V.value=et(w.value,e.scrollTarget),le(V.value,T))}function de(u){h!==!0?(Re(r,u),n("click",u)):h=!1}function X(u){J.value===!0&&e.noFocus!==!0&&Be(m.value,u.target)!==!0&&b()}function q(u){n("escape-key"),N(u)}function T(){const u=m.value;u===null||w.value===null||qt({el:u,offset:e.offset,anchorEl:w.value,anchorOrigin:_.value,selfOrigin:se.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function f(){return k(he,{name:Q.value,appear:!0},()=>v.value===!0?k("div",{...i,ref:m,tabindex:-1,class:["q-menu q-position-engine scroll"+re.value,i.class],style:[i.style,j.value],...ce.value},We(t.default)):null)}return A(z),Object.assign(r,{focus:b,updatePosition:T}),ue}});let Z=0;const Et={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Ce={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Lt=Pe({name:"QDialog",inheritAttrs:!1,props:{..._e,...ze,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Me,"shake","click","escape-key"],setup(e,{slots:t,emit:n,attrs:i}){const l=xe(),s=y(null),o=y(!1),h=y(!1),d=y(!1);let r,c=null,m,v;const a=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:x}=lt(),{registerTimeout:I,removeTimeout:W}=Le(),{registerTick:K,removeTick:O}=Fe(),{showPortal:Q,hidePortal:j,portalIsAccessible:V,renderPortal:le}=$e(l,s,T,!0),{hide:P}=De({showing:o,hideOnRouteChange:a,handleShow:ce,handleHide:J,processOnMount:!0}),{addToHistory:w,removeFromHistory:ae}=it(o,P,a),N=g(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Et[e.position]}`+(d.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),G=g(()=>"q-transition--"+(e.transitionShow===void 0?Ce[e.position][0]:e.transitionShow)),U=g(()=>"q-transition--"+(e.transitionHide===void 0?Ce[e.position][1]:e.transitionHide)),ue=g(()=>h.value===!0?U.value:G.value),B=g(()=>`--q-transition-duration: ${e.transitionDuration}ms`),_=g(()=>o.value===!0&&e.seamless!==!0),se=g(()=>e.autoClose===!0?{onClick:de}:{}),re=g(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${_.value===!0?"modal":"seamless"}`,i.class]);p(o,f=>{ie(()=>{h.value=f})}),p(()=>e.maximized,f=>{o.value===!0&&M(f)}),p(_,f=>{x(f),f===!0?(Qe(q),Ie($)):(me(q),te($))});function ce(f){W(),O(),w(),c=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,M(e.maximized),Q(),d.value=!0,e.noFocus!==!0&&(document.activeElement!==null&&document.activeElement.blur(),K(b)),I(()=>{if(l.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:u,bottom:E}=document.activeElement.getBoundingClientRect(),{innerHeight:Y}=window,F=window.visualViewport!==void 0?window.visualViewport.height:Y;u>0&&E>F/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-F,E>=Y?1/0:Math.ceil(document.scrollingElement.scrollTop+E-F/2))),document.activeElement.scrollIntoView()}v=!0,s.value.click(),v=!1}Q(!0),d.value=!1,n("show",f)},e.transitionDuration)}function J(f){W(),O(),ae(),z(!0),d.value=!0,j(),c!==null&&(c.focus(),c=null),I(()=>{j(!0),d.value=!1,n("hide",f)},e.transitionDuration)}function b(f){Oe(()=>{let u=s.value;u===null||u.contains(document.activeElement)===!0||(u=u.querySelector(f||"[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function R(){b(),n("shake");const f=s.value;f!==null&&(f.classList.remove("q-animate--scale"),f.classList.add("q-animate--scale"),clearTimeout(r),r=setTimeout(()=>{s.value!==null&&(f.classList.remove("q-animate--scale"),b())},170))}function $(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&R():(n("escape-key"),P()))}function z(f){clearTimeout(r),(f===!0||o.value===!0)&&(M(!1),e.seamless!==!0&&(x(!1),me(q),te($))),f!==!0&&(c=null)}function M(f){f===!0?m!==!0&&(Z<1&&document.body.classList.add("q-body--dialog"),Z++,m=!0):m===!0&&(Z<2&&document.body.classList.remove("q-body--dialog"),Z--,m=!1)}function de(f){v!==!0&&(P(f),n("click",f))}function X(f){e.persistent!==!0&&e.noBackdropDismiss!==!0?P(f):e.noShake!==!0&&R()}function q(f){e.allowFocusOutside!==!0&&V.value===!0&&Be(s.value,f.target)!==!0&&b('[tabindex]:not([tabindex="-1"])')}Object.assign(l.proxy,{focus:b,shake:R,__updateRefocusTarget(f){c=f||null}}),A(z);function T(){return k("div",{...i,class:re.value},[k(he,{name:"q-transition--fade",appear:!0},()=>_.value===!0?k("div",{class:"q-dialog__backdrop fixed-full",style:B.value,"aria-hidden":"true",onMousedown:X}):null),k(he,{name:ue.value,appear:!0},()=>o.value===!0?k("div",{ref:s,class:N.value,style:B.value,tabindex:-1,...se.value},We(t.default)):null)])}return le}});function He(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var Dt=nt({name:"close-popup",beforeMount(e,{value:t}){const n={depth:He(t),handler(i){n.depth!==0&&setTimeout(()=>{const l=ft(e);l!==void 0&&ht(l,i,n.depth)})},handlerKey(i){ge(i,13)===!0&&n.handler(i)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=He(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{Dt as C,Lt as Q,ze as a,bt as b,Fe as c,vt as d,dt as e,ct as f,$e as g,pt as h,Mt as i,Se as p,ke as r,qt as s,rt as u,Ee as v};