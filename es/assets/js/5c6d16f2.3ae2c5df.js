"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80806],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),s=r,f=c["".concat(m,".").concat(s)]||c[s]||u[s]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},89948:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>p});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"windowSize",title:"Tama\xf1o de la ventana"},o=void 0,m={unversionedId:"FormEditor/windowSize",id:"version-19-R7/FormEditor/windowSize",title:"Tama\xf1o de la ventana",description:"Alto fijo",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/FormEditor/properties_WindowSize.md",sourceDirName:"FormEditor",slug:"/FormEditor/windowSize",permalink:"/docs/es/FormEditor/windowSize",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"windowSize",title:"Tama\xf1o de la ventana"},sidebar:"docs",previous:{title:"Imprimir",permalink:"/docs/es/FormEditor/print"},next:{title:"Acerca de los objetos formularios 4D",permalink:"/docs/es/FormObjects/formObjectsOverview"}},d={},p=[{value:"Alto fijo",id:"alto-fijo",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Ancho fijo",id:"ancho-fijo",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Altura m\xe1xima, Altura m\xednima",id:"altura-m\xe1xima-altura-m\xednima",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-2",level:5},{value:"Ancho m\xe1ximo, Ancho m\xednimo",id:"ancho-m\xe1ximo-ancho-m\xednimo",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-3",level:4}],u={toc:p};function c(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",r({},{id:"alto-fijo"}),"Alto fijo"),(0,n.kt)("p",null,"Si selecciona esta opci\xf3n, la altura de la ventana quedar\xe1 bloqueada y el usuario no podr\xe1 cambiar su tama\xf1o."),(0,n.kt)("p",null,"Si no se selecciona esta opci\xf3n, se puede modificar el ancho de la ventana del formulario. En este caso, las propiedades ",(0,n.kt)("a",r({parentName:"p"},{href:"#maximum-height-minimum-height"}),"Altura m\xednima y Altura m\xe1xima")," pueden utilizarse para determinar los l\xedmites de redimensionamiento."),(0,n.kt)("h4",r({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nombre"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipos de datos"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valores posibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"windowSizingY"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"fixed", "variable"')))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"ancho-fijo"}),"Ancho fijo"),(0,n.kt)("p",null,"Si selecciona esta opci\xf3n, el ancho de la ventana quedar\xe1 bloqueada y el usuario no podr\xe1 cambiar su tama\xf1o."),(0,n.kt)("p",null,"Si no se selecciona esta opci\xf3n, se puede modificar el ancho de la ventana del formulario. En este caso, las propiedades ",(0,n.kt)("a",r({parentName:"p"},{href:"#maximum-width-minimum-width"}),"Ancho m\xednimo y Alto m\xe1ximo")," pueden utilizarse para determinar los l\xedmites de redimensionamiento."),(0,n.kt)("h4",r({},{id:"gram\xe1tica-json-1"}),"Gram\xe1tica JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nombre"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipos de datos"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valores posibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"windowSizingX"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"fixed", "variable"')))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"altura-m\xe1xima-altura-m\xednima"}),"Altura m\xe1xima, Altura m\xednima"),(0,n.kt)("p",null,"Altura m\xe1xima y m\xednima (en p\xedxeles) de una ventana de formulario redimensionable si la opci\xf3n ",(0,n.kt)("a",r({parentName:"p"},{href:"#fixed-height"}),"Alto fijo")," no est\xe1 definida."),(0,n.kt)("h5",r({},{id:"gram\xe1tica-json-2"}),"Gram\xe1tica JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nombre"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipos de datos"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valores posibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"windowMinHeight"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"valor entero largo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"windowMaxHeight"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"valor entero largo")))),(0,n.kt)("h2",r({},{id:"ancho-m\xe1ximo-ancho-m\xednimo"}),"Ancho m\xe1ximo, Ancho m\xednimo"),(0,n.kt)("p",null,"Ancho m\xe1ximo y m\xednimo (en p\xedxeles) de una ventana de formulario redimensionable si la opci\xf3n ",(0,n.kt)("a",r({parentName:"p"},{href:"#fixed-width"}),"Ancho fijo")," no est\xe1 definida."),(0,n.kt)("h4",r({},{id:"gram\xe1tica-json-3"}),"Gram\xe1tica JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nombre"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipos de datos"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valores posibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"windowMinWidth"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"valor entero largo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"windowMaxWidth"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"valor entero largo")))))}c.isMDXComponent=!0}}]);