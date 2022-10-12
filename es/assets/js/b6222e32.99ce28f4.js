"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56993],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});t(67294);var r=t(3905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={id:"onPageChange",title:"On Page Change"},i=void 0,c={unversionedId:"Events/onPageChange",id:"version-19-R6/Events/onPageChange",title:"On Page Change",description:"| Code | Puede ser llamado por | Definici\xf3n                                |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/Events/onPageChange.md",sourceDirName:"Events",slug:"/Events/onPageChange",permalink:"/docs/es/19-R6/Events/onPageChange",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onPageChange",title:"On Page Change"},sidebar:"docs",previous:{title:"On Outside Call",permalink:"/docs/es/19-R6/Events/onOutsideCall"},next:{title:"On Plug in Area",permalink:"/docs/es/19-R6/Events/onPlugInArea"}},s={},u=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}],p={toc:u};function d(e){var{components:n}=e,t=o(e,["components"]);return(0,r.kt)("wrapper",a({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Puede ser llamado por"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Definici\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"56"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Formulario"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Se cambia la p\xe1gina actual del formulario")))),(0,r.kt)("h2",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"Este evento s\xf3lo est\xe1 disponible a nivel del formulario (se llama en el m\xe9todo formulario). Se genera cada vez que la p\xe1gina actual del formulario cambia (tras una llamada al comando ",(0,r.kt)("inlineCode",{parentName:"p"},"FORM GOTO PAGE")," o una acci\xf3n de navegaci\xf3n est\xe1ndar)."),(0,r.kt)("p",null,"Note que se genera despu\xe9s de que la p\xe1gina est\xe9 completamente cargada, es decir, una vez que todos los objetos que contiene est\xe1n inicializados, incluyendo ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/19-R6/FormObjects/webAreaOverview"}),"\xe1reas web"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"La \xfanica excepci\xf3n son las \xe1reas 4D View Pro, para las que hay que llamar al evento espec\xedfico ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/19-R6/Events/onVpReady"}),"On VP Ready"),".")),(0,r.kt)("p",null,"El evento ",(0,r.kt)("inlineCode",{parentName:"p"},"On Page Change")," es \xfatil para ejecutar c\xf3digo que requiere que todos los objetos sean previamente inicializados. Tambi\xe9n se puede utilizar para optimizar la aplicaci\xf3n ejecutando el c\xf3digo (por ejemplo, una b\xfasqueda) s\xf3lo despu\xe9s de que se muestre una p\xe1gina espec\xedfica del formulario y no tan pronto como se cargue la p\xe1gina 1. Si el usuario no va a esta p\xe1gina, el c\xf3digo no se ejecuta."))}d.isMDXComponent=!0}}]);