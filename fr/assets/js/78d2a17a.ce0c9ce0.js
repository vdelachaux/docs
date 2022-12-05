"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96357],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={id:"skip",title:"$skip"},l=void 0,p={unversionedId:"REST/skip",id:"version-18/REST/skip",title:"$skip",description:"D\xe9marre l'entit\xe9 d\xe9finie par ce num\xe9ro dans la collection (par exemple, $skip=10)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/$skip.md",sourceDirName:"REST",slug:"/REST/skip",permalink:"/docs/fr/18/REST/skip",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/REST/$skip.md",tags:[],version:"18",frontMatter:{id:"skip",title:"$skip"},sidebar:"docs",previous:{title:"$savedorderby",permalink:"/docs/fr/18/REST/savedorderby"},next:{title:"$timeout",permalink:"/docs/fr/18/REST/timeout"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],u={toc:s};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",i({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"D\xe9marre l'entit\xe9 d\xe9finie par ce num\xe9ro dans la collection (par exemple, ",(0,n.kt)("inlineCode",{parentName:"p"},"$skip=10"),")"),(0,n.kt)("h2",i({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$skip")," d\xe9finit l'entit\xe9 de la collection par laquelle commencer. Par d\xe9faut, la collection envoy\xe9e commence par la premi\xe8re entit\xe9. Pour commencer avec la 10e entit\xe9 de la collection, passez 10."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$skip")," est g\xe9n\xe9ralement utilis\xe9 avec"),(0,n.kt)("h2",i({},{id:"exemple"}),"Exemple"),(0,n.kt)("p",null,(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/18/REST/top_$limit"}),(0,n.kt)("inlineCode",{parentName:"a"},"$top/$limit"))," pour naviguer dans une entity collection."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20")))}m.isMDXComponent=!0}}]);