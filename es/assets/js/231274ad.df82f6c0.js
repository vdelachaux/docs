"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"onLongClick",title:"On Long Click"},l=void 0,s={unversionedId:"Events/onLongClick",id:"version-19-R7/Events/onLongClick",title:"On Long Click",description:"| Code | Puede ser llamado por                   | Definici\xf3n                                                                                   |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/Events/onLongClick.md",sourceDirName:"Events",slug:"/Events/onLongClick",permalink:"/docs/es/Events/onLongClick",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"onLongClick",title:"On Long Click"},sidebar:"docs",previous:{title:"On Load Record",permalink:"/docs/es/Events/onLoadRecord"},next:{title:"On Losing focus",permalink:"/docs/es/Events/onLosingFocus"}},c={},p=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}],u={toc:p};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Puede ser llamado por"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Definici\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"39"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/es/FormObjects/buttonOverview"}),"Bot\xf3n")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Se presiona un bot\xf3n y el bot\xf3n del rat\xf3n permanece presionado durante un tiempo determinado")))),(0,r.kt)("h2",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"Este evento se genera cuando un bot\xf3n recibe un clic y el bot\xf3n del rat\xf3n se mantiene presionado durante un cierto tiempo. En teor\xeda, el tiempo durante el cual se genera este evento es igual al tiempo m\xe1ximo que separa un doble clic, definido en las preferencias del sistema."),(0,r.kt)("p",null,"Este evento se puede generar para los siguientes estilos de botones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/buttonOverview#toolbar"}),"Toolbar (Barra de herramientas)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/buttonOverview#bevel"}),"Bevel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/buttonOverview#rounded-bevel"}),"Bevel redondeado")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/buttonOverview#os-x-gradient"}),"OS X Gradient")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/buttonOverview#os-x-textured"}),"OS X Texturizado")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/buttonOverview#office-xp"}),"Office XP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/buttonOverview#help"}),"Ayuda")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/buttonOverview#circle"}),"C\xedrculo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/buttonOverview#custom"}),"Personalizado"))),(0,r.kt)("p",null,"Este evento se utiliza generalmente para mostrar men\xfas emergentes en caso de presiones prolongadas en los botones. El evento ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/Events/onClicked"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Clicked")),', si est\xe1 activo, se genera si el usuario suelta el bot\xf3n del rat\xf3n antes del l\xedmite de tiempo del "clic largo".'),(0,r.kt)("h3",a({},{id:"ver-tambi\xe9n"}),"Ver tambi\xe9n"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/Events/onAlternativeClick"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Alternative Click"))))}d.isMDXComponent=!0}}]);