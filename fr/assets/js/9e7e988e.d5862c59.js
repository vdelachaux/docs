"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84042],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,b=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42040:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"binary",title:"$binary"},l=void 0,p={unversionedId:"REST/binary",id:"version-19-R6/REST/binary",title:"$binary",description:'Passez "true" pour enregistrer le BLOB en tant que document (vous devez \xe9galement passer $expand=)',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/REST/$binary.md",sourceDirName:"REST",slug:"/REST/binary",permalink:"/docs/fr/19-R6/REST/binary",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"binary",title:"$binary"},sidebar:"docs",previous:{title:"$attributes",permalink:"/docs/fr/19-R6/REST/attributes"},next:{title:"$compute",permalink:"/docs/fr/19-R6/REST/compute"}},c={},u=[{value:"Description",id:"description",level:2}],s={toc:u};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Passez "true" pour enregistrer le BLOB en tant que document (vous devez \xe9galement passer ',(0,n.kt)("inlineCode",{parentName:"p"},"$expand={blobAttributeName}"),")"),(0,n.kt)("h2",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$binary")," vous permet d'enregistrer le BLOB en tant que document.  Vous devez \xe9galement utiliser la commande ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R6/REST/expand"}),(0,n.kt)("inlineCode",{parentName:"a"},"$expand")),"."),(0,n.kt)("p",null,"Lorsque vous faites la requ\xeate suivante :"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt\n")),(0,n.kt)("p",null,"Il vous sera demand\xe9 o\xf9 enregistrer le BLOB sur le disque :"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(25363).Z,width:"459",height:"353"})))}d.isMDXComponent=!0},25363:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/binary-31d3b11dfbe0bcc90814f0d5800a53df.png"}}]);