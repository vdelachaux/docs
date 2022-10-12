"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20845],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,b=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(b,l(l({ref:t},d),{},{components:a})):n.createElement(b,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"attributes",title:"$attributes"},o=void 0,s={unversionedId:"REST/attributes",id:"version-19-R6/REST/attributes",title:"$attributes",description:"Permite seleccionar los atributos relacionales a obtener de la dataclass (por ejemplo, Company(1)?$attributes=employees.lastname o Employee?$attributes=employer.name).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/REST/$attributes.md",sourceDirName:"REST",slug:"/REST/attributes",permalink:"/docs/es/19-R6/REST/attributes",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"attributes",title:"$attributes"},sidebar:"docs",previous:{title:"$atomic/$atOnce",permalink:"/docs/es/19-R6/REST/atomic_$atonce"},next:{title:"$binary",permalink:"/docs/es/19-R6/REST/binary"}},p={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo con varias entidades relacionadas",id:"ejemplo-con-varias-entidades-relacionadas",level:2},{value:"Ejemplo con una entidad relacionada",id:"ejemplo-con-una-entidad-relacionada",level:2}],u={toc:d};function c(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Permite seleccionar los atributos relacionales a obtener de la dataclass (",(0,n.kt)("em",{parentName:"p"},"por ejemplo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Company(1)?$attributes=employees.lastname")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"Employee?$attributes=employer.name"),")."),(0,n.kt)("h2",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,"Cuando tenga atributos relacionales en una dataclass, utilice ",(0,n.kt)("inlineCode",{parentName:"p"},"$attributes")," para definir la ruta de los atributos cuyos valores desea obtener para la entidad o entidades relacionadas."),(0,n.kt)("p",null,"Puede aplicar ",(0,n.kt)("inlineCode",{parentName:"p"},"$attributes")," a una entidad (",(0,n.kt)("em",{parentName:"p"},"p. Ej."),", People(1)) o una entity selection (",(0,n.kt)("em",{parentName:"p"},"p. Ej."),", People/$entityset/0AF4679A5C394746BFEB68D2162A19FF)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Si ",(0,n.kt)("inlineCode",{parentName:"p"},"$attributes"),' no se especifica en una consulta, o si se pasa el valor "*", se extraen todos los atributos disponibles. Los atributos ',(0,n.kt)("strong",{parentName:"p"},"de entidad relacionada ")," se extraen con la forma simple: un objeto con la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},"__KEY")," (llave primaria) y ",(0,n.kt)("inlineCode",{parentName:"p"},"URI"),". Los atributos de las ",(0,n.kt)("strong",{parentName:"p"},"entidades relacionadas")," no se extraen.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Si se especifica ",(0,n.kt)("inlineCode",{parentName:"p"},"$attributes")," para los atributos ",(0,n.kt)("strong",{parentName:"p"},"de entidad relacionada"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity"),": se devuelve la entidad relacionada con forma simple (propiedad __KEY diferida (llave primaria)) y ",(0,n.kt)("inlineCode",{parentName:"li"},"URI"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity.*"),": se devuelven todos los atributos de la entidad relacionada"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ..."),": s\xf3lo se devuelven los atributos de la entidad relacionada.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si se especifica ",(0,n.kt)("inlineCode",{parentName:"li"},"$attributes")," para los atributos ",(0,n.kt)("strong",{parentName:"li"},"de entidades relacionadas"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntities.*"),": se devuelven todas las propiedades de todas las entidades relacionadas"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ..."),": s\xf3lo se devuelven los atributos de las entidades relacionadas.")))),(0,n.kt)("h2",r({},{id:"ejemplo-con-varias-entidades-relacionadas"}),"Ejemplo con varias entidades relacionadas"),(0,n.kt)("p",null,'Si pasamos la petici\xf3n REST siguiente para nuestra clase de datos Company (que tiene un atributo de relaci\xf3n "empleados"):'),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.lastname")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Respuesta"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n        "__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n        "__GlobalStamp": 50,\n        "__COUNT": 135,\n        "__FIRST": 0,\n        "__ENTITIES": [\n            {\n                "__KEY": "1",\n                "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n                "__STAMP": 5,\n                "lastname": "ESSEAL"\n            },\n            {\n                "__KEY": "2",\n                "__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n                "__STAMP": 6,\n                "lastname": "JONES"\n            },\n            ...\n    }\n}\n')),(0,n.kt)("p",null,"Si desea obtener todos los atributos de los empleados:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.*")),(0,n.kt)("p",null,"Si quiere obtener el apellido y los atributos de nombre del trabajo de los empleados:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname")),(0,n.kt)("h2",r({},{id:"ejemplo-con-una-entidad-relacionada"}),"Ejemplo con una entidad relacionada"),(0,n.kt)("p",null,'Si pasamos la petici\xf3n REST siguiente para nuestra clase de datos Employee (que tiene varios atributos relacionales, incluyendo "employer"):'),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.name")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Respuesta"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "__entityModel": "Employee",\n    "__KEY": "1",\n    "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n    "__STAMP": 5,\n    "employer": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n        "__STAMP": 0,\n        "name": "Adobe"\n    }\n}\n')),(0,n.kt)("p",null,"Si desea obtener todos los atributos del empleador:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.*")),(0,n.kt)("p",null,"Si desea obtener los apellidos de todos los empleados de la empresa:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.employees.lastname")))}c.isMDXComponent=!0}}]);