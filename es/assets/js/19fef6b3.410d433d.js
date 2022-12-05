"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63648],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},25356:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});t(67294);var n=t(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"savedfilter",title:"$savedfilter"},l=void 0,d={unversionedId:"REST/savedfilter",id:"version-19-R7/REST/savedfilter",title:"$savedfilter",description:'Guarda el filtro definido por $filter al crear un conjunto de entidades (por ejemplo, $savedfilter="")',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/REST/$savedfilter.md",sourceDirName:"REST",slug:"/REST/savedfilter",permalink:"/docs/es/REST/savedfilter",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/REST/$savedfilter.md",tags:[],version:"19-R7",frontMatter:{id:"savedfilter",title:"$savedfilter"},sidebar:"docs",previous:{title:"$queryplan",permalink:"/docs/es/REST/queryplan"},next:{title:"$savedorderby",permalink:"/docs/es/REST/savedorderby"}},s={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],p={toc:c};function u(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Guarda el filtro definido por $filter al crear un conjunto de entidades (",(0,n.kt)("em",{parentName:"p"},"por ejemplo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},'$savedfilter="{filter}"'),")"),(0,n.kt)("h2",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,"Cuando se crea un conjunto de entidades, se puede guardar el filtro que se ha utilizado para crearlo como medida de seguridad. Si el conjunto de entidades que ha creado es eliminado de la cach\xe9 de 4D Server (debido al tiempo de espera, a la necesidad de espacio del servidor o a que lo ha eliminado llamando a ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/es/REST/method#methodrelease"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=release")),")."),(0,n.kt)("p",null,"Utilice ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," para guardar el filtro que defini\xf3 al crear su conjunto de entidades y luego pase ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," junto con su llamada para recuperar cada vez el conjunto de entidades."),(0,n.kt)("p",null,"Si el conjunto de entidades ya no est\xe1 en la cach\xe9 de 4D Server, se recrear\xe1 con un nuevo tiempo de espera de 10 minutos por defecto. El conjunto de entidades se refrescar\xe1 (pueden incluirse ciertas entidades y eliminarse otras) desde la \xfaltima vez que se cre\xf3, si ya no exist\xeda antes de recrearlo."),(0,n.kt)("p",null,"Si ha utilizado a la vez ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," y ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/es/REST/savedorderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedorderby"))," en su llamada al crear un conjunto de entidades y luego omite uno de ellos, el nuevo conjunto de entidades, que tendr\xe1 el mismo n\xfamero de referencia, lo reflejar\xe1."),(0,n.kt)("h2",a({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"En nuestro ejemplo, primero llamamos a `",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," con la llamada inicial para crear un conjunto de entidades como se muestra a continuaci\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset')),(0,n.kt)("p",null,"A continuaci\xf3n, cuando se accede al conjunto de entidades, se escribe lo siguiente para garantizar que el conjunto de entidades sea siempre v\xe1lido:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"')))}u.isMDXComponent=!0}}]);