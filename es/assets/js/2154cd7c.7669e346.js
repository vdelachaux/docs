"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[0],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58515:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>s});t(67294);var r=t(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={id:"onMenuSelected",title:"On Menu Selected"},i=void 0,c={unversionedId:"Events/onMenuSelected",id:"version-19/Events/onMenuSelected",title:"On Menu Selected",description:"| Code | Puede ser llamado por | Definici\xf3n                                                      |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onMenuSelected.md",sourceDirName:"Events",slug:"/Events/onMenuSelected",permalink:"/docs/es/19/Events/onMenuSelected",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/Events/onMenuSelected.md",tags:[],version:"19",frontMatter:{id:"onMenuSelected",title:"On Menu Selected"},sidebar:"docs",previous:{title:"On Losing focus",permalink:"/docs/es/19/Events/onLosingFocus"},next:{title:"On Mouse Enter",permalink:"/docs/es/19/Events/onMouseEnter"}},u={},s=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}],d={toc:s};function p(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Puede ser llamado por"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Definici\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"18"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Formulario"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Se ha elegido un elemento de men\xfa en la barra de men\xfas asociada")))),(0,r.kt)("h2",o({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"El evento ",(0,r.kt)("inlineCode",{parentName:"p"},"On Menu Selected")," se env\xeda al m\xe9todo del formulario cuando se selecciona un comando de una barra de men\xfa asociada al formulario. A continuaci\xf3n, puede llamar al comando ",(0,r.kt)("inlineCode",{parentName:"p"},"Men\xfa seleccionado")," para probar el men\xfa seleccionado."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Puede asociar una barra de men\xfa a un formulario en las propiedades del mismo. Los men\xfas de una barra de men\xfas de un formulario se a\xf1aden a la barra de men\xfas actual cuando el formulario se muestra como un formulario de salida en el entorno Aplicaci\xf3n.")))}p.isMDXComponent=!0}}]);