"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={id:"distinct",title:"$distinct"},l=void 0,s={unversionedId:"REST/distinct",id:"version-19/REST/distinct",title:"$distinct",description:'Retourne les diff\xe9rentes valeurs d\'un attribut sp\xe9cifique dans une collection (par exemple, Company/name?$filter="name=a*"&$distinct=true)',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/$distinct.md",sourceDirName:"REST",slug:"/REST/distinct",permalink:"/docs/fr/19/REST/distinct",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/REST/$distinct.md",tags:[],version:"19",frontMatter:{id:"distinct",title:"$distinct"},sidebar:"docs",previous:{title:"$compute",permalink:"/docs/fr/19/REST/compute"},next:{title:"$entityset",permalink:"/docs/fr/19/REST/entityset"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],u={toc:p};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Retourne les diff\xe9rentes valeurs d'un attribut sp\xe9cifique dans une collection (par exemple, ",(0,r.kt)("inlineCode",{parentName:"p"},'Company/name?$filter="name=a*"&$distinct=true'),")"),(0,r.kt)("h2",i({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$distinct")," vous permet de retourner une collection contenant les diff\xe9rentes valeurs d'une requ\xeate sur un attribut sp\xe9cifique. Un seul attribut dans la dataclass peut \xeatre sp\xe9cifi\xe9. G\xe9n\xe9ralement, le type Cha\xeene est id\xe9al; cependant, vous pouvez \xe9galement l'utiliser sur n'importe quel type d'attribut pouvant contenir plusieurs valeurs."),(0,r.kt)("p",null,"Vous pouvez \xe9galement utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"$skip")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"$top/$limit")," si vous souhaitez parcourir la s\xe9lection avant qu'elle ne soit plac\xe9e dans un tableau."),(0,r.kt)("h2",i({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,"Dans l'exemple ci-dessous, nous souhaitons r\xe9cup\xe9rer les diff\xe9rentes valeurs d'un nom de soci\xe9t\xe9 commen\xe7ant par la lettre \"a\" :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Company/name?$filter="name=a*"&$distinct=true')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),'[\n    "Adobe",\n    "Apple"\n]\n')))}d.isMDXComponent=!0}}]);