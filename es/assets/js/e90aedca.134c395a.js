"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68854],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"date",title:"Fecha"},i=void 0,p={unversionedId:"Concepts/date",id:"version-19/Concepts/date",title:"Fecha",description:"Las variables, campos o expresiones de tipo fecha pueden estar comprendidas entre 1/1/100 y 31/12/32.767.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/dt_date.md",sourceDirName:"Concepts",slug:"/Concepts/date",permalink:"/docs/es/19/Concepts/date",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/Concepts/dt_date.md",tags:[],version:"19",frontMatter:{id:"date",title:"Fecha"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/es/19/Concepts/collection"},next:{title:"Null e indefinido",permalink:"/docs/es/19/Concepts/null-undefined"}},d={},u=[{value:"Constantes literales de tipo fecha",id:"constantes-literales-de-tipo-fecha",level:2},{value:"Operadores de fechas",id:"operadores-de-fechas",level:2}],s={toc:u};function c(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Las variables, campos o expresiones de tipo fecha pueden estar comprendidas entre 1/1/100 y 31/12/32.767."),(0,n.kt)("p",null,"Aunque el modo de representaci\xf3n de fechas por C_DATE permite trabajar con fechas hasta el a\xf1o 32 767, ciertas operaciones que pasan por el sistema imponen un l\xedmite inferior."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," en el manual de Referencia del Lenguaje 4D, los par\xe1metros de tipo Fecha en las descripciones de los comandos se denominan Fecha, salvo que se indique lo contrario."),(0,n.kt)("h2",r({},{id:"constantes-literales-de-tipo-fecha"}),"Constantes literales de tipo fecha"),(0,n.kt)("p",null,"Una constante literal de tipo fecha est\xe1 rodeada de signos de exclamaci\xf3n (!...!). Una fecha debe estar estructurada utilizando el formato ISO (!AAAA-MM-DD!). Estos son algunos ejemplos de constantes de fechas:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"!1976-01-01!\n!2004-09-29!\n!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n!2004-09-29!\n!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n")),(0,n.kt)("p",null,"Una fecha nula es especificada por ",(0,n.kt)("em",{parentName:"p"},"!00-00-00!"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Consejo:")," el Editor de m\xe9todos incluye un acceso directo para introducir una fecha nula. Para escribir una fecha nula, introduzca el car\xe1cter de exclamaci\xf3n (!) y pulse Intro."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notas:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Por razones de compatibilidad, 4D acepta que se introduzcan a\xf1os de dos d\xedgitos. Se asume que un a\xf1o de dos d\xedgitos se encuentra en el siglo XX o en el XXI seg\xfan sea mayor o menor de 30, a menos que esta configuraci\xf3n por defecto se haya cambiado utilizando el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"SET DEFAULT CENTURY"),"."),(0,n.kt)("li",{parentName:"ul"},'Si ha marcado la opci\xf3n "Utilizar la configuraci\xf3n regional del sistema" ( ver P\xe1gina M\xe9todos), debe utilizar el formato de fecha definido en su sistema. Generalmente, en un entorno estadounidense, las fechas se introducen en la forma mes/d\xeda/a\xf1o, con una barra "/" que separa los valores.')),(0,n.kt)("h2",r({},{id:"operadores-de-fechas"}),"Operadores de fechas"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Operaci\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxis"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Devuelve"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Diferencia"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha \u2013 Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! - !2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"19")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adici\xf3n"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha + N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! + 9"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-29!")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resta"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha - N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! - 9"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-11!")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Igual"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha = Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! - !2017-01-01! =!2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-01! =!2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Desigualdad"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha # Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20! # !2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20! # !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Mayor que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha > Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20! > !2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20! > !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Menor que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha < Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! - !2017-01-01! < !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! < !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Mayor o igual que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha >= Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! !2017-01-20! >=!2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-01!>=!2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Menor o igual que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha \\<= Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-01!\\<=!2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20!\\<=!2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))))}c.isMDXComponent=!0}}]);