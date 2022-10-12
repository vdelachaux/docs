"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52551],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});t(67294);var r=t(3905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"upload",title:"$upload"},l=void 0,p={unversionedId:"REST/upload",id:"version-19-R7/REST/upload",title:"$upload",description:"Devuelve un ID del archivo subido al servidor",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/es/REST/upload",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/es/REST/info"},next:{title:"dataClass",permalink:"/docs/es/REST/dataClass"}},u={},s=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Escenario de carga",id:"escenario-de-carga",level:2},{value:"Ejemplo con un cliente 4D HTTP",id:"ejemplo-con-un-cliente-4d-http",level:2}],c={toc:s};function d(e){var{components:n}=e,t=o(e,["components"]);return(0,r.kt)("wrapper",a({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Devuelve un ID del archivo subido al servidor"),(0,r.kt)("h2",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"Publique esta petici\xf3n cuando tenga un archivo que quiera subir al Servidor. Si tiene una imagen, pase ",(0,r.kt)("inlineCode",{parentName:"p"},"$rawPict=true"),". Para todos los dem\xe1s archivos, se pasa ",(0,r.kt)("inlineCode",{parentName:"p"},"$binary=true"),"."),(0,r.kt)("p",null,"Puede modificar el tiempo de espera, que por defecto es de 120 segundos, pasando un valor al par\xe1metro ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout"),"."),(0,r.kt)("h2",a({},{id:"escenario-de-carga"}),"Escenario de carga"),(0,r.kt)("p",null,"Imagine que quiere subir una imagen para actualizar el atributo imagen de una entidad."),(0,r.kt)("p",null,"Para cargar una imagen (o cualquier archivo binario), primero debe seleccionar el archivo desde la aplicaci\xf3n cliente. El archivo en s\xed debe pasarse en el ",(0,r.kt)("strong",{parentName:"p"},"cuerpo")," de la petici\xf3n."),(0,r.kt)("p",null,"A continuaci\xf3n, se sube la imagen seleccionada a 4D Server mediante una petici\xf3n como:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST  /rest/$upload?$rawPict=true")),(0,r.kt)("p",null,"Como resultado, el servidor devuelve un ID que identifica el archivo:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Respuesta"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }')),(0,r.kt)("p",null,"Despu\xe9s, se utiliza este ID para a\xf1adirlo a un atributo utilizando ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/REST/method#methodupdate"}),(0,r.kt)("inlineCode",{parentName:"a"},"$method=update")),"para a\xf1adir la imagen a una entidad. La petici\xf3n se ve as\xed:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/?$method=update")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Datos POST"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Respuesta"),":"),(0,r.kt)("p",null,"Se devuelve la entidad modificada:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n')),(0,r.kt)("h2",a({},{id:"ejemplo-con-un-cliente-4d-http"}),"Ejemplo con un cliente 4D HTTP"),(0,r.kt)("p",null,"El siguiente ejemplo muestra c\xf3mo subir un archivo ",(0,r.kt)("em",{parentName:"p"},".pdf")," al servidor utilizando el cliente 4D HTTP."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob\n\n\nARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" //preparar une petici\xf3n REST\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream"\n\nDOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) //Cargar el binario \n\n //Ejecuta la primera petici\xf3n POST para subir el archivo\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)\n\nIf ($result=200) \n    var $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" //segunda petici\xf3n para actualizar la entidad\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n    ALERT(String($result)+" Error")\nEnd if\n')))}d.isMDXComponent=!0}}]);