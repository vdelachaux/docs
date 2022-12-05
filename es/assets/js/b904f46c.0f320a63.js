"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17122],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?t.createElement(f,i(i({ref:n},s),{},{components:r})):t.createElement(f,i({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36109:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});r(67294);var t=r(3905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"onBoundVariableChange",title:"On Bound Variable Change"},l=void 0,c={unversionedId:"Events/onBoundVariableChange",id:"version-19/Events/onBoundVariableChange",title:"On Bound Variable Change",description:"| Code | Puede ser llamado por | Definici\xf3n                                           |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onBoundVariableChange.md",sourceDirName:"Events",slug:"/Events/onBoundVariableChange",permalink:"/docs/es/19/Events/onBoundVariableChange",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/Events/onBoundVariableChange.md",tags:[],version:"19",frontMatter:{id:"onBoundVariableChange",title:"On Bound Variable Change"},sidebar:"docs",previous:{title:"On Begin URL Loading",permalink:"/docs/es/19/Events/onBeginUrlLoading"},next:{title:"On Clicked",permalink:"/docs/es/19/Events/onClicked"}},u={},s=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}],p={toc:s};function d(e){var{components:n}=e,r=o(e,["components"]);return(0,t.kt)("wrapper",a({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,t.kt)("th",a({parentName:"tr"},{align:null}),"Puede ser llamado por"),(0,t.kt)("th",a({parentName:"tr"},{align:null}),"Definici\xf3n"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",a({parentName:"tr"},{align:null}),"54"),(0,t.kt)("td",a({parentName:"tr"},{align:null}),"Formulario"),(0,t.kt)("td",a({parentName:"tr"},{align:null}),"La variable vinculada a un subformulario se modifica")))),(0,t.kt)("h2",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,t.kt)("p",null,"Este evento se genera en el contexto del m\xe9todo formulario de un ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/subformOverview"}),"subformulario")," en cuanto se asigna un valor a la variable vinculada con el subformulario del formulario padre (incluso si se reasigna el mismo valor) y si el subformulario pertenece a la p\xe1gina actual del formulario o a la p\xe1gina 0."),(0,t.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/subformOverview#managing-the-bound-variable"}),"Gesti\xf3n de la variable vinculada"),"."))}d.isMDXComponent=!0}}]);