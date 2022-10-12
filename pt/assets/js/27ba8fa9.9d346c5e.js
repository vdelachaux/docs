"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57343],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=n,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(b,i(i({ref:r},l),{},{components:t})):a.createElement(b,i({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1725:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});t(67294);var a=t(3905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const i={id:"propertiesHierarchy",title:"Hierarchy"},c=void 0,p={unversionedId:"FormObjects/propertiesHierarchy",id:"version-19/FormObjects/propertiesHierarchy",title:"Hierarchy",description:"List box hier\xe1rquica",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/FormObjects/properties_Hierarchy.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHierarchy",permalink:"/docs/pt/19/FormObjects/propertiesHierarchy",draft:!1,tags:[],version:"19",frontMatter:{id:"propertiesHierarchy",title:"Hierarchy"},sidebar:"docs",previous:{title:"Ajuda",permalink:"/docs/pt/19/FormObjects/propertiesHelp"},next:{title:"List Box",permalink:"/docs/pt/19/FormObjects/propertiesListBox"}},s={},l=[{value:"List box hier\xe1rquica",id:"list-box-hier\xe1rquica",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4}],u={toc:l};function m(e){var{components:r}=e,t=o(e,["components"]);return(0,a.kt)("wrapper",n({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",n({},{id:"list-box-hier\xe1rquica"}),"List box hier\xe1rquica"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Array type list boxes")),(0,a.kt)("p",null,"Essa propriedade especifica que o list box deve ser exibido em forma hier\xe1rquica. No formul\xe1rio JSON essa funcionalidade \xe9 ativada ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesObject#hierarchical-list-box"}),"quando o ",(0,a.kt)("em",{parentName:"a"},"dataSource")," valor de propriedade for um array"),", ou seja uma cole\xe7\xe3o."),(0,a.kt)("p",null,"Op\xe7\xf5es adicionais (",(0,a.kt)("strong",{parentName:"p"},"Variable 1...10"),") est\xe3o dispon\xedveis quando a op\xe7\xe3o ",(0,a.kt)("em",{parentName:"p"},"List box hier\xe1rquica")," for selecionada, correspondendo a cada array ",(0,a.kt)("em",{parentName:"p"},"dataSource")," para usar como quebra de coluna. A cada vez que um valor \xe9 digitado em um campo, uma nova linha \xe9 adicionada. Podem ser especificadas at\xe9 10 vari\xe1veis. Essas vari\xe1veis estabelecem os n\xedveis hier\xe1rquicos a serem exibidos na primeira coluna."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/listboxOverview#hierarchical-list-boxes"}),"Hierarchical list boxes")),(0,a.kt)("h4",n({},{id:"json-grammar"}),"JSON Grammar"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Nome"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Tipo de dados"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"datasource"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"string array"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Collection of array names defining the hierarchy")))),(0,a.kt)("h4",n({},{id:"objects-supported"}),"Objects Supported"),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/FormObjects/listboxOverview"}),"List Box")))}m.isMDXComponent=!0}}]);