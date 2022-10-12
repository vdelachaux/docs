"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83962],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),v=o,m=f["".concat(p,".").concat(v)]||f[v]||c[v]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},47974:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>s});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"version",title:"$version"},l=void 0,p={unversionedId:"REST/version",id:"version-19-R6/REST/version",title:"$version",description:"Num\xe9ro de version de l'image",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/REST/$version.md",sourceDirName:"REST",slug:"/REST/version",permalink:"/docs/fr/19-R6/REST/version",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"version",title:"$version"},sidebar:"docs",previous:{title:"$top/$limit",permalink:"/docs/fr/19-R6/REST/top_$limit"},next:{title:"Client/Server Management",permalink:"/docs/fr/19-R6/Desktop/clientServer"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],c={toc:s};function f(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Num\xe9ro de version de l'image"),(0,n.kt)("h2",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$version")," est le num\xe9ro de version de l'image retourn\xe9 par le serveur. Le num\xe9ro de version, qui est envoy\xe9 par le serveur, fonctionne autour du cache du navigateur afin que vous soyez s\xfbr de r\xe9cup\xe9rer la bonne image."),(0,n.kt)("p",null,"La valeur du param\xe8tre de version de l'image est modifi\xe9e par le serveur."),(0,n.kt)("h2",o({},{id:"exemple"}),"Exemple"),(0,n.kt)("p",null,"L'exemple suivant d\xe9finit le format d'image au format JPEG, quel que soit le v\xe9ritable type de la photo et passe le v\xe9ritable num\xe9ro de version envoy\xe9 par le serveur :"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo")))}f.isMDXComponent=!0}}]);