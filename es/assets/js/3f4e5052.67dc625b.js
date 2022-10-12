"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89557],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,c=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(c,o(o({ref:t},u),{},{components:a})):n.createElement(c,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"lock",title:"$lock"},i=void 0,p={unversionedId:"REST/lock",id:"version-19-R6/REST/lock",title:"$lock",description:"Bloquea y desbloquea una entidad utilizando el mecanismo pesimista.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/REST/$lock.md",sourceDirName:"REST",slug:"/REST/lock",permalink:"/docs/es/19-R6/REST/lock",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"lock",title:"$lock"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/docs/es/19-R6/REST/imageformat"},next:{title:"$method",permalink:"/docs/es/19-R6/REST/method"}},d={},u=[{value:"Sintaxis",id:"sintaxis",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Respuesta",id:"respuesta",level:3},{value:"Ejemplo",id:"ejemplo",level:2}],s={toc:u};function m(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Bloquea y desbloquea una entidad utilizando el ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19-R6/ORDA/entities#pessimistic-lock"}),"mecanismo pesimista"),"."),(0,n.kt)("h2",r({},{id:"sintaxis"}),"Sintaxis"),(0,n.kt)("p",null,"Para bloquear una entidad para las otras sesiones y procesos 4D:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"/?$lock=true\n")),(0,n.kt)("p",null,"Para desbloquear la entidad para las otras sesiones y procesos 4D:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"/?$lock=false\n")),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("a",r({parentName:"p"},{href:"../API/EntityClass.html#lock"}),(0,n.kt)("inlineCode",{parentName:"a"},"lockKindText")),' es "Locked by session".'),(0,n.kt)("h3",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,"Los bloqueos activados por la API REST se colocan al nivel de la ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19-R6/REST/authUsers#opening-sessions"}),"sesi\xf3n"),"."),(0,n.kt)("p",null,"Una entidad bloqueada se ve como ",(0,n.kt)("em",{parentName:"p"},"bloqueada")," (es decir, las acciones de bloqueo / desbloqueo / actualizaci\xf3n / eliminaci\xf3n no son posibles) por:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"otras sesiones REST"),(0,n.kt)("li",{parentName:"ul"},"los procesos 4D (cliente/servidor, almac\xe9n de datos remoto, monopuesto) ejecutadas en el servidor REST.")),(0,n.kt)("p",null,"Una entidad bloqueada por la API REST s\xf3lo puede ser desbloqueada:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"por su bloqueador, es decir un ",(0,n.kt)("inlineCode",{parentName:"li"},"/?$lock=false")," en la sesi\xf3n REST que define ",(0,n.kt)("inlineCode",{parentName:"li"},"/?$lock=true")),(0,n.kt)("li",{parentName:"ul"},"o si el ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/19-R6/REST/directory"}),"timeout de inactividad")," de la sesi\xf3n se alcanza (la sesi\xf3n se cierra).")),(0,n.kt)("h3",r({},{id:"respuesta"}),"Respuesta"),(0,n.kt)("p",null,"Una petici\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"?$lock")," devuelve un objeto JSON con ",(0,n.kt)("inlineCode",{parentName:"p"},'"result"=true')," si la operaci\xf3n de bloqueo se reutiliza y ",(0,n.kt)("inlineCode",{parentName:"p"},'"result"=false')," si falla."),(0,n.kt)("p",null,'El objeto "__STATUS" devuelto tiene las siguientes propiedades:'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propiedad"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"Disponible s\xf3lo en caso de \xe9xito:")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"true si la acci\xf3n de bloqueo tiene \xe9xito (o si la entidad ya est\xe1 bloqueada en la sesi\xf3n actual), false en caso contrario (no devuelto en este caso).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"Disponible s\xf3lo en caso de error:")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"status"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"C\xf3digo de error, ver abajo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"statusText"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Descripci\xf3n del error, ver abajo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"lockKind"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"C\xf3digo de bloqueo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"lockKindText"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"Locked by session" si est\xe1 bloqueado por una sesi\xf3n REST, "Locked by record" si est\xe1 bloqueado por un proceso 4D')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"lockInfo"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Informaci\xf3n sobre el origen del bloqueo. Las propiedades devueltas dependen del origen del bloqueo (proceso 4D o sesi\xf3n REST).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"Disponible s\xf3lo para un bloqueo por proceso 4D:")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"task_id"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID del Proceso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"user_name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre de usuario de la sesi\xf3n en la m\xe1quina")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"user4d_alias"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre o alias del usuario 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"user4d_id"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ID del usuario en el directorio de la base de datos 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"host_name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre de la m\xe1quina")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"task_name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre del proceso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"client_version"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Versi\xf3n del cliente")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"Disponible s\xf3lo para un bloqueo por sesi\xf3n REST:")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"host"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'URL que bloque\xf3 la entidad (por ejemplo, "127.0.0.1:8043")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"IPAddr"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Direcci\xf3n IP del bloqueo (por ejemplo: "127.0.0.1")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"recordNumber"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero del registro bloqueado")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"userAgent"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'userAgent del origin del bloqueo (ej: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36")')))),(0,n.kt)("p",null,"Los siguientes valores pueden ser devueltos en las propiedade ",(0,n.kt)("em",{parentName:"p"},"status")," y ",(0,n.kt)("em",{parentName:"p"},"statusText")," del objeto ",(0,n.kt)("em",{parentName:"p"},"__STATUS")," en caso de error:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"status"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"statusText"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comentario"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"Stamp has changed"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"El valor del sello interno de la entidad no coincide con el de la entidad almacenada en los datos (bloqueo optimista).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"Already locked"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"La entidad est\xe1 bloqueada por un bloqueo pesimista.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"Other error"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"Entity does not exist anymore"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"La entidad ya no existe en los datos.")))),(0,n.kt)("h2",r({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"Bloqueamos una entidad en un primer navegador:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"GET /rest/Customers(1)/?$lock=true\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Respuesta:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n')),(0,n.kt)("p",null,"En un segundo navegador (otra sesi\xf3n), enviamos la misma petici\xf3n."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Respuesta:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n        "lockInfo":{\n            "host":"127.0.0.1:8043",\n            "IPAddr":"127.0.0.1",\n            "recordNumber": 7,\n            "userAgent": ""Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36..."\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);