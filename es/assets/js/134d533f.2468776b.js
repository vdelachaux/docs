"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14701],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(b,s(s({ref:r},l),{},{components:t})):n.createElement(b,s({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4789:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>l});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"spinner",title:"Spinner"},i=void 0,p={unversionedId:"FormObjects/spinner",id:"version-18/FormObjects/spinner",title:"Spinner",description:"Generalidades",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/FormObjects/spinner.md",sourceDirName:"FormObjects",slug:"/FormObjects/spinner",permalink:"/docs/es/18/FormObjects/spinner",draft:!1,tags:[],version:"18",frontMatter:{id:"spinner",title:"Spinner"},sidebar:"docs",previous:{title:"Formas",permalink:"/docs/es/18/FormObjects/shapesOverview"},next:{title:"Separador",permalink:"/docs/es/18/FormObjects/splitters"}},c={},l=[{value:"Generalidades",id:"generalidades",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:3}],d={toc:l};function u(e){var{components:r}=e,s=a(e,["components"]);return(0,n.kt)("wrapper",o({},d,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"generalidades"}),"Generalidades"),(0,n.kt)("p",null,"El spinner es un indicador circular que muestra una animaci\xf3n continua, como la ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/progressIndicator#barber-shop"}),"Barber shop"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(47908).Z,width:"50",height:"44"})),(0,n.kt)("p",null,"Este tipo de objeto se utiliza para indicar que una operaci\xf3n, como la b\xfasqueda de conexi\xf3n de red o la realizaci\xf3n de un c\xe1lculo, est\xe1 en curso. Cuando se selecciona este indicador, ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesScale"}),'las propiedades "Graduaciones"')," no est\xe1n disponibles."),(0,n.kt)("p",null,"Cuando se ejecuta el formulario, el objeto no se anima. La animaci\xf3n se gestiona pasando un valor a su ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#variable-or-expression"}),"variable o expresi\xf3n asociada"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 (o cualquier valor diferente de 0) = Iniciar la animaci\xf3n,"),(0,n.kt)("li",{parentName:"ul"},"0 = Detener la animaci\xf3n")),(0,n.kt)("h3",o({},{id:"propiedades-soportadas"}),"Propiedades soportadas"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Estilo de borde")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Abajo")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#css-class"}),"Clase")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#expression-type"}),"Tipo de expresi\xf3n")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Altura")," -",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesHelp#help-tip"}),"Mensaje de ayuda")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Dim. Horizontal")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Izquierda")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#object-name"}),"Nombre")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Derecha")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Superior")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#type"}),"Tipo")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#variable-or-expression"}),"Variable o expresi\xf3n")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Dimensi\xf3n vertical")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesDisplay#visibility"}),"Visibilidad")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Ancho")))}u.isMDXComponent=!0},47908:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/spinner-156274f06885f34b79b8fa4815b4e8a8.gif"}}]);