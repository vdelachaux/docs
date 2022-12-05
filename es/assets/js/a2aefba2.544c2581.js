"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(r),f=a,d=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},84903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"imageformat",title:"$imageformat"},l=void 0,p={unversionedId:"REST/imageformat",id:"version-19/REST/imageformat",title:"$imageformat",description:"Define qu\xe9 formato de imagen utilizar para recuperar im\xe1genes (por ejemplo, $imageformat=png)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/$imageformat.md",sourceDirName:"REST",slug:"/REST/imageformat",permalink:"/docs/es/19/REST/imageformat",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/REST/$imageformat.md",tags:[],version:"19",frontMatter:{id:"imageformat",title:"$imageformat"},sidebar:"docs",previous:{title:"$filter",permalink:"/docs/es/19/REST/filter"},next:{title:"$lock",permalink:"/docs/es/19/REST/lock"}},m={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],u={toc:c};function s(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Define qu\xe9 formato de imagen utilizar para recuperar im\xe1genes (por ejemplo, ",(0,n.kt)("inlineCode",{parentName:"p"},"$imageformat=png"),")"),(0,n.kt)("h2",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,"Definir el formato a utilizar para mostrar las im\xe1genes. Puede utilizar uno de los siguientes formatos (se soportan extensiones, tipos mime y OsType Mac):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),'"best"'),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"El mejor formato en funci\xf3n de la imagen")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),'".gif" o "image/gif"'),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Formato GIF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),'".png" o "image/png"'),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Formato PNG")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),'".jpeg" o "image/jpeg"'),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Formato JPEG")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),'".tiff" o "image/tiff"'),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Formato TIFF")))),(0,n.kt)("p",null,"Una vez que haya definido el formato, debe pasar el atributo de imagen a ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/es/19/REST/expand"}),(0,n.kt)("inlineCode",{parentName:"a"},"$expand"))," para cargar la foto completamente."),(0,n.kt)("p",null,"Si no hay ninguna imagen para cargar o el formato no permite cargar la imagen, la respuesta ser\xe1 un objeto vac\xedo ",(0,n.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,n.kt)("h2",a({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"El siguiente ejemplo define el formato de la imagen a JPEG independientemente del tipo real de la foto y pasa el n\xfamero de versi\xf3n real enviado por el servidor:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo")))}s.isMDXComponent=!0}}]);