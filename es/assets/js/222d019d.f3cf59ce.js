"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"info",title:"$info"},o=void 0,s={unversionedId:"REST/info",id:"version-18/REST/info",title:"$info",description:"Devuelve informaci\xf3n sobre los conjuntos de entidades almacenados actualmente en la cach\xe9 de 4D Server, as\xed como las sesiones usuario",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/$info.md",sourceDirName:"REST",slug:"/REST/info",permalink:"/docs/es/18/REST/info",draft:!1,tags:[],version:"18",frontMatter:{id:"info",title:"$info"},sidebar:"docs",previous:{title:"$directory",permalink:"/docs/es/18/REST/directory"},next:{title:"$upload",permalink:"/docs/es/18/REST/upload"}},d={},u=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"entitySet",id:"entityset",level:3},{value:"sessionInfo",id:"sessioninfo",level:3},{value:"Ejemplo",id:"ejemplo",level:2}],c={toc:u};function p(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Devuelve informaci\xf3n sobre los conjuntos de entidades almacenados actualmente en la cach\xe9 de 4D Server, as\xed como las sesiones usuario"),(0,a.kt)("h2",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,a.kt)("p",null,"Cuando llama a esta petici\xf3n para su proyecto, se recupera la informaci\xf3n en las propiedades siguientes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Propiedad"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"cacheSize"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tama\xf1o de la cach\xe9 del servidor 4D.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"usedCache"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cu\xe1nto se ha utilizado de la cach\xe9 de 4D Server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"entitySetCount"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de selecciones de entidades.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"entitySet"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Una colecci\xf3n en la que cada objeto contiene informaci\xf3n sobre cada selecci\xf3n de entidades.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"ProgressInfo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Una colecci\xf3n que contiene informaci\xf3n sobre el indicador de progreso.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"sessionInfo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Una colecci\xf3n en la que cada objeto contiene informaci\xf3n sobre cada sesi\xf3n usuario.")))),(0,a.kt)("h3",r({},{id:"entityset"}),"entitySet"),(0,a.kt)("p",null,"Para cada selecci\xf3n de entidad almacenada actualmente en la cach\xe9 de 4D Server, se devuelve la siguiente informaci\xf3n:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Propiedad"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Un UUID que hace referencia al conjunto de entidades.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"dataClass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nombre de la dataclass.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"selectionSize"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de entidades en la selecci\xf3n de entidades.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"sorted"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Devuelve true si el conjunto fue ordenado ( utilizando ",(0,a.kt)("inlineCode",{parentName:"td"},"$orderby"),") o false si no est\xe1 ordenado.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"refreshed"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Fecha"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cuando se cre\xf3 el conjunto de entidades o la \xfaltima vez que se utiliz\xf3.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"expires"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Fecha"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cu\xe1ndo expirar\xe1 el conjunto de entidades (esta fecha/hora cambia cada vez que se actualiza el conjunto de entidades). La diferencia entre refrescado y vencido es el tiempo de espera de un conjunto de entidades. Este valor es de dos horas por defecto o lo que hayas definido utilizando ",(0,a.kt)("inlineCode",{parentName:"td"},"$timeout"),".")))),(0,a.kt)("p",null,"Para obtener informaci\xf3n sobre c\xf3mo crear una selecci\xf3n de entidades, consulte ",(0,a.kt)("inlineCode",{parentName:"p"},"$method=entityset"),". Si desea eliminar la selecci\xf3n de entidades de la cach\xe9 de 4D Server, utilice ",(0,a.kt)("inlineCode",{parentName:"p"},"$method=release"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"4D tambi\xe9n crea sus propias selecciones de entidades con fines de optimizaci\xf3n, por lo que las que se crean con ",(0,a.kt)("inlineCode",{parentName:"p"},"$method=entityset")," no son las \xfanicas que se devuelven.\n",(0,a.kt)("strong",{parentName:"p"},"IMPORTANT")," If your project is in ",(0,a.kt)("strong",{parentName:"p"},"Controlled Admin Access Mode"),", you must first log into the project as a user in the Admin group.")),(0,a.kt)("h3",r({},{id:"sessioninfo"}),"sessionInfo"),(0,a.kt)("p",null,"Para cada sesi\xf3n de usuario, se devuelve la siguiente informaci\xf3n en la colecci\xf3n ",(0,a.kt)("em",{parentName:"p"},"sessionInfo"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Propiedad"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"sessionID"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Un UUID que referencia la sesi\xf3n.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"userName"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"El nombre del usuario que ejecuta la sesi\xf3n.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"lifeTime"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"La duraci\xf3n de una sesi\xf3n usuario en segundos (3600 por defecto).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"expiration"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Fecha"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"La fecha y la hora actuales de caducidad de la sesi\xf3n de usuario.")))),(0,a.kt)("h2",r({},{id:"ejemplo"}),"Ejemplo"),(0,a.kt)("p",null,"Recupera la informaci\xf3n sobre los conjuntos de entidades almacenados actualmente en la cach\xe9 de 4D Server, as\xed como las sesiones usuario:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /rest/$info")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resultado"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\ncacheSize: 209715200,\nusedCache: 3136000,\nentitySetCount: 4,\nentitySet: [\n    {\n        id: "1418741678864021B56F8C6D77F2FC06",\n        tableName: "Company",\n        selectionSize: 1,\n        sorted: false,\n        refreshed: "2011-11-18T10:30:30Z",\n        expires: "2011-11-18T10:35:30Z"\n    },\n    {\n        id: "CAD79E5BF339462E85DA613754C05CC0",\n        tableName: "People",\n        selectionSize: 49,\n        sorted: true,\n        refreshed: "2011-11-18T10:28:43Z",\n        expires: "2011-11-18T10:38:43Z"\n    },\n    {\n        id: "F4514C59D6B642099764C15D2BF51624",\n        tableName: "People",\n        selectionSize: 37,\n        sorted: false,\n        refreshed: "2011-11-18T10:24:24Z",\n        expires: "2011-11-18T12:24:24Z"\n    }\n],\nProgressInfo: [\n    {\n        UserInfo: "flushProgressIndicator",\n        sessions: 0,\n        percent: 0\n    },\n    {\n        UserInfo: "indexProgressIndicator",\n        sessions: 0,\n        percent: 0\n    }\n],\nsessionInfo: [ \n    {\n        sessionID: "6657ABBCEE7C3B4089C20D8995851E30",\n        userID: "36713176D42DB045B01B8E650E8FA9C6",\n        userName: "james",\n        lifeTime: 3600,\n        expiration: "2013-04-22T12:45:08Z"\n    },\n    {\n        sessionID: "A85F253EDE90CA458940337BE2939F6F",\n        userID: "00000000000000000000000000000000",\n        userName: "default guest",\n        lifeTime: 3600,\n        expiration: "2013-04-23T10:30:25Z"\n}\n]\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"La informaci\xf3n del indicador de progreso que aparece despu\xe9s de las selecciones de entidades es utilizada internamente por 4D.")))}p.isMDXComponent=!0}}]);