"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44014],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},11047:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"menu",title:"Menu"},l=void 0,u={unversionedId:"FormEditor/menu",id:"version-19/FormEditor/menu",title:"Menu",description:"Barre de menus associ\xe9e",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormEditor/properties_Menu.md",sourceDirName:"FormEditor",slug:"/FormEditor/menu",permalink:"/docs/fr/19/FormEditor/menu",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/FormEditor/properties_Menu.md",tags:[],version:"19",frontMatter:{id:"menu",title:"Menu"},sidebar:"docs",previous:{title:"Markers",permalink:"/docs/fr/19/FormEditor/markers"},next:{title:"Imprimer",permalink:"/docs/fr/19/FormEditor/print"}},s={},c=[{value:"Barre de menus associ\xe9e",id:"barre-de-menus-associ\xe9e",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4}],m={toc:c};function p(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"barre-de-menus-associ\xe9e"}),"Barre de menus associ\xe9e"),(0,n.kt)("p",null,"Lorsqu'une barre de menus est associ\xe9e \xe0 un formulaire, elle est ajout\xe9e \xe0 droite de la barre de menus courante lorsque le formulaire est affich\xe9 dans l'environnement d'Application."),(0,n.kt)("p",null,"La s\xe9lection d'une commande de menu entra\xeene l'envoi d'un \xe9v\xe9nement ",(0,n.kt)("inlineCode",{parentName:"p"},"Sur menu s\xe9lectionn\xe9")," \xe0 la m\xe9thode formulaire; vous pouvez ensuite utiliser la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"Menu selected")," pour tester le menu s\xe9lectionn\xe9."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si la barre de menus du formulaire est identique \xe0 la barre de menus courante, elle n'est pas ajout\xe9e.")),(0,n.kt)("p",null,"La barre de menus du formulaire fonctionnera pour les formulaires d'entr\xe9e et de sortie."),(0,n.kt)("h4",o({},{id:"grammaire-json"}),"Grammaire JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Nom"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type de donn\xe9es"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Valeurs possibles"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"menuBar"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Nom d'une barre de menu")))))}p.isMDXComponent=!0}}]);