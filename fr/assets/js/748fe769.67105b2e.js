"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"onActivate",title:"Sur activation"},l=void 0,u={unversionedId:"Events/onActivate",id:"version-19/Events/onActivate",title:"Sur activation",description:"| Code | Peut \xeatre appel\xe9 par | D\xe9finition                                                                                                           |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/onActivate.md",sourceDirName:"Events",slug:"/Events/onActivate",permalink:"/docs/fr/19/Events/onActivate",draft:!1,tags:[],version:"19",frontMatter:{id:"onActivate",title:"Sur activation"},sidebar:"docs",previous:{title:"Vue d\u2019ensemble",permalink:"/docs/fr/19/Events/overview"},next:{title:"On After Edit",permalink:"/docs/fr/19/Events/onAfterEdit"}},c={},p=[{value:"Description",id:"description",level:2}],s={toc:p};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Peut \xeatre appel\xe9 par"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"D\xe9finition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"11"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Formulaire"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"La fen\xeatre du formulaire devient la fen\xeatre de premier plan ou bien le conteneur du sous-formulaire obtient le focus")))),(0,n.kt)("h2",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,"Si la fen\xeatre d'un formulaire a \xe9t\xe9 envoy\xe9e en arri\xe8re-plan, cet \xe9v\xe9nement est appel\xe9 lorsque la fen\xeatre devient la fen\xeatre active."),(0,n.kt)("p",null,"Cet \xe9v\xe9nement s'applique au formulaire dans son ensemble et non \xe0 un objet particulier. Par cons\xe9quent, si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire ",(0,n.kt)("inlineCode",{parentName:"p"},"On Activate")," est s\xe9lectionn\xe9e, seul le formulaire aura sa m\xe9thode formulaire appel\xe9e."),(0,n.kt)("p",null,"Dans le cas d'un sous-formulaire, cet \xe9v\xe9nement est pass\xe9 au sous-formulaire lorsque le conteneur obtient le focus (s'il poss\xe8de la propri\xe9t\xe9 ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesEntry#focusable"}),"focusable"),")."))}f.isMDXComponent=!0}}]);