"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39442],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?n.createElement(b,o(o({ref:r},p),{},{components:t})):n.createElement(b,o({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19173:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});t(67294);var n=t(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const o={id:"propertiesHierarchy",title:"Hi\xe9rarchie"},l=void 0,s={unversionedId:"FormObjects/propertiesHierarchy",id:"version-19-R7/FormObjects/propertiesHierarchy",title:"Hi\xe9rarchie",description:"List box hi\xe9rarchique",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/FormObjects/properties_Hierarchy.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHierarchy",permalink:"/docs/fr/FormObjects/propertiesHierarchy",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/FormObjects/properties_Hierarchy.md",tags:[],version:"19-R7",frontMatter:{id:"propertiesHierarchy",title:"Hi\xe9rarchie"},sidebar:"docs",previous:{title:"Aide",permalink:"/docs/fr/FormObjects/propertiesHelp"},next:{title:"List Box",permalink:"/docs/fr/FormObjects/propertiesListBox"}},c={},p=[{value:"List box hi\xe9rarchique",id:"list-box-hi\xe9rarchique",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge",level:4}],u={toc:p};function m(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",a({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"list-box-hi\xe9rarchique"}),"List box hi\xe9rarchique"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"List box de type tableau")),(0,n.kt)("p",null,"Cette propri\xe9t\xe9 permet de d\xe9finir que la list box doit \xeatre affich\xe9e sous forme hi\xe9rarchique. Dans le formulaire JSON, cette fonctionnalit\xe9 est d\xe9clench\xe9e ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/FormObjects/propertiesObject#array-list-box"}),"lorsque la valeur de la propri\xe9t\xe9 ",(0,n.kt)("em",{parentName:"a"},"dataSource")," de la colonne est un tableau"),", c'est-\xe0-dire une collection."),(0,n.kt)("p",null,"Des options suppl\xe9mentaires (",(0,n.kt)("strong",{parentName:"p"},"Variable 1...10"),") sont disponibles lorsqu'une ",(0,n.kt)("em",{parentName:"p"},"List box hi\xe9rarchique")," est d\xe9finie, correspondant \xe0 chaque \xe9l\xe9ment du tableau ",(0,n.kt)("em",{parentName:"p"},"dataSource")," \xe0 utiliser comme colonne de rupture. A chaque saisie d\u2019une valeur dans un champ, une nouvelle ligne est ajout\xe9e. Jusqu\u2019\xe0 10 variables peuvent \xeatre d\xe9finies. Ces variables d\xe9finissent les niveaux hi\xe9rarchiques \xe0 afficher dans la premi\xe8re colonne."),(0,n.kt)("p",null,"Voir ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/FormObjects/listboxOverview#hierarchical-list-boxes"}),"List box hi\xe9rarchiques")),(0,n.kt)("h4",a({},{id:"grammaire-json"}),"Grammaire JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Nom"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type de donn\xe9es"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Valeurs possibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"datasource"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"tableau cha\xeene"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Collection de noms de tableaux d\xe9finissant la hi\xe9rarchie")))),(0,n.kt)("h4",a({},{id:"objets-pris-en-charge"}),"Objets pris en charge"),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/FormObjects/listboxOverview"}),"List Box")))}m.isMDXComponent=!0}}]);