"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15860],{3905:(e,r,a)=>{a.d(r,{Zo:()=>d,kt:()=>m});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),p=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},d=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?t.createElement(g,i(i({ref:r},d),{},{components:a})):t.createElement(g,i({ref:r},d))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76103:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});a(67294);var t=a(3905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},n.apply(this,arguments)}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"errorPages",title:"P\xe1ginas de error HTTP personalizadas"},l=void 0,s={unversionedId:"WebServer/errorPages",id:"version-19/WebServer/errorPages",title:"P\xe1ginas de error HTTP personalizadas",description:"El servidor web de 4D le permite personalizar las p\xe1ginas de error HTTP enviadas a los clientes, bas\xe1ndose en el c\xf3digo de estado de la respuesta del servidor. Las p\xe1ginas de error se refieren a:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/WebServer/errorPages.md",sourceDirName:"WebServer",slug:"/WebServer/errorPages",permalink:"/docs/es/19/WebServer/errorPages",draft:!1,tags:[],version:"19",frontMatter:{id:"errorPages",title:"P\xe1ginas de error HTTP personalizadas"},sidebar:"docs",previous:{title:"Permitir m\xe9todos proyecto",permalink:"/docs/es/19/WebServer/allowProject"},next:{title:"Autenticaci\xf3n",permalink:"/docs/es/19/WebServer/authentication"}},p={},d=[{value:"Reemplazo de las p\xe1ginas por defecto",id:"reemplazo-de-las-p\xe1ginas-por-defecto",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],c={toc:d};function u(e){var{components:r}=e,i=o(e,["components"]);return(0,t.kt)("wrapper",n({},c,i,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"El servidor web de 4D le permite personalizar las p\xe1ginas de error HTTP enviadas a los clientes, bas\xe1ndose en el c\xf3digo de estado de la respuesta del servidor. Las p\xe1ginas de error se refieren a:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"los c\xf3digos de estado que empiezan por 4 (errores del cliente), por ejemplo 404")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"los c\xf3digos de estado que empiezan por 5 (errores del servidor), por ejemplo 501."))),(0,t.kt)("p",null,"Para una descripci\xf3n completa de los c\xf3digos de estado de error HTTP, puede consultar la ",(0,t.kt)("a",n({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"}),"lista de c\xf3digos de estado HTTP")," (Wikipedia)."),(0,t.kt)("h2",n({},{id:"reemplazo-de-las-p\xe1ginas-por-defecto"}),"Reemplazo de las p\xe1ginas por defecto"),(0,t.kt)("p",null,"Para reemplazar las p\xe1ginas de error predeterminadas de 4D Web Server por sus propias p\xe1ginas, s\xf3lo tiene que:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"poner las p\xe1ginas HTML personalizadas en el primer nivel de la carpeta web de la aplicaci\xf3n,")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},'nombrar las p\xe1ginas personalizadas "{statusCode}.html" (por ejemplo, "404.html").'))),(0,t.kt)("p",null,'Puede definir una p\xe1gina de error por c\xf3digo de estado y/o una p\xe1gina de error gen\xe9rica para un rango de errores, llamada "{number}xx.html". Por ejemplo, puede crear "4xx.html" para los errores gen\xe9ricos del cliente. El servidor web de 4D buscar\xe1 primero una p\xe1gina {statusCode}.html y, si no existe, una p\xe1gina gen\xe9rica.'),(0,t.kt)("p",null,"Por ejemplo, cuando una respuesta HTTP devuelve un c\xf3digo de estado 404:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},'4D Web Server intenta enviar una p\xe1gina "404.html" ubicada en la carpeta web de la aplicaci\xf3n.')),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},'Si no se encuentra, 4D Web Server intenta enviar una p\xe1gina "404.html" ubicada en la carpeta web de la aplicaci\xf3n.')),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Si no se encuentra, 4D Web Server utiliza su p\xe1gina de error por defecto."))),(0,t.kt)("h2",n({},{id:"ejemplo"}),"Ejemplo"),(0,t.kt)("p",null,"Si define las siguientes p\xe1ginas personalizadas en su carpeta web:"),(0,t.kt)("p",null,(0,t.kt)("img",{src:a(5434).Z,width:"166",height:"287"})),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},'se servir\xe1n las p\xe1ginas "403.html" o "404.html" cuando se devuelvan respuestas HTTP 403 o 404 respectivamente,')),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},'la p\xe1gina "4xx.html" se servir\xe1 para cualquier otro estado de error 4xx (400, 401, etc.),')),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},'la p\xe1gina "5xx.html" se servir\xe1 para cualquier estado de error 5xx.'))))}u.isMDXComponent=!0},5434:(e,r,a)=>{a.d(r,{Z:()=>t});const t=a.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"}}]);