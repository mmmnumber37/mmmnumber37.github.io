import{E as h,am as T,w as V,o as S,g as P,P as b,an as U,ao as w}from"./index.c16f95ca.js";import{v as A}from"./QBtn.07f5eb32.js";function B(o,t,n){let u;function s(){u!==void 0&&(T.remove(u),u=void 0)}return h(()=>{o.value===!0&&s()}),{removeFromHistory:s,addToHistory(){u={condition:()=>n.value===!0,handler:t},T.add(u)}}}const E={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},F=["before-show","show","before-hide","hide"];function j({showing:o,canShow:t,hideOnRouteChange:n,handleShow:u,handleHide:s,processOnMount:H}){const f=P(),{props:l,emit:r,proxy:c}=f;let i;function M(e){o.value===!0?d(e):m(e)}function m(e){if(l.disable===!0||e!==void 0&&e.qAnchorHandled===!0||t!==void 0&&t(e)!==!0)return;const a=l["onUpdate:modelValue"]!==void 0;a===!0&&(r("update:modelValue",!0),i=e,b(()=>{i===e&&(i=void 0)})),(l.modelValue===null||a===!1)&&p(e)}function p(e){o.value!==!0&&(o.value=!0,r("before-show",e),u!==void 0?u(e):r("show",e))}function d(e){if(l.disable===!0)return;const a=l["onUpdate:modelValue"]!==void 0;a===!0&&(r("update:modelValue",!1),i=e,b(()=>{i===e&&(i=void 0)})),(l.modelValue===null||a===!1)&&v(e)}function v(e){o.value!==!1&&(o.value=!1,r("before-hide",e),s!==void 0?s(e):r("hide",e))}function y(e){l.disable===!0&&e===!0?l["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):e===!0!==o.value&&(e===!0?p:v)(i)}V(()=>l.modelValue,y),n!==void 0&&A(f)===!0&&V(()=>c.$route.fullPath,()=>{n.value===!0&&o.value===!0&&d()}),H===!0&&S(()=>{y(l.modelValue)});const g={show:m,hide:d,toggle:M};return Object.assign(c,g),g}function k(){let o;return{preventBodyScroll(t){t!==o&&(o!==void 0||t===!0)&&(o=t,U(t))}}}function q(){let o;return h(()=>{clearTimeout(o)}),{registerTimeout(t,n){clearTimeout(o),o=setTimeout(t,n)},removeTimeout(){clearTimeout(o)}}}function C(){if(window.getSelection!==void 0){const o=window.getSelection();o.empty!==void 0?o.empty():o.removeAllRanges!==void 0&&(o.removeAllRanges(),w.is.mobile!==!0&&o.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{F as a,q as b,j as c,C as d,B as e,k as f,E as u};