"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),c=a,b=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"expand",title:"$expand"},p=void 0,l={unversionedId:"REST/expand",id:"version-19-R7/REST/expand",title:"$expand",description:"Expands an image stored in an Image attribute (e.g., Employee(1)/photo?$imageformat=best&$expand=photo) or Expands an BLOB attribute to save it.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R7/REST/$expand.md",sourceDirName:"REST",slug:"/REST/expand",permalink:"/docs/pt/REST/expand",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/REST/$expand.md",tags:[],version:"19-R7",frontMatter:{id:"expand",title:"$expand"},sidebar:"docs",previous:{title:"$entityset",permalink:"/docs/pt/REST/entityset"},next:{title:"$filter",permalink:"/docs/pt/REST/filter"}},s={},u=[{value:"Vendo um atributo de imagem",id:"vendo-um-atributo-de-imagem",level:2},{value:"Salvar um atributo BLOB ao disco",id:"salvar-um-atributo-blob-ao-disco",level:2}],m={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Expands an image stored in an Image attribute (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Employee(1)/photo?$imageformat=best&$expand=photo"),")",(0,n.kt)("br",null)," or",(0,n.kt)("br",null)," Expands an BLOB attribute to save it."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Compatibility"),": For compatibility reasons, $expand can be used to expand a relational attribute (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Company(1)?$expand=staff")," or ",(0,n.kt)("inlineCode",{parentName:"p"},'Employee/?$filter="firstName BEGIN a"&$expand=employer'),"). It is however recommended to use ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/REST/attributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"$attributes"))," for this feature.")),(0,n.kt)("h2",a({},{id:"vendo-um-atributo-de-imagem"}),"Vendo um atributo de imagem"),(0,n.kt)("p",null,"Se quiser ver um atributo de imagem integralmente, escreva o abaixo:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo")),(0,n.kt)("p",null,"Para saber mais sobre formatos de imagem, veja ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/REST/imageformat"}),(0,n.kt)("inlineCode",{parentName:"a"},"$imageformat")),". Para saber mais sobre par\xe2metros de vers\xe3o, veja ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/REST/version"}),(0,n.kt)("inlineCode",{parentName:"a"},"$version")),"."),(0,n.kt)("h2",a({},{id:"salvar-um-atributo-blob-ao-disco"}),"Salvar um atributo BLOB ao disco"),(0,n.kt)("p",null,'Se quiser salvar um BLOB armazenado em sua classe de dados pode escrever o seguinte passando tamb\xe9m "true" a $binary:'),(0,n.kt)("p",null,"  ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt")))}d.isMDXComponent=!0}}]);