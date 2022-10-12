"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"onUrlFiltering",title:"On URL Filtering"},i=void 0,p={unversionedId:"Events/onUrlFiltering",id:"version-19-R6/Events/onUrlFiltering",title:"On URL Filtering",description:"| Code | Peut \xeatre appel\xe9 par                         | D\xe9finition                            |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/Events/onUrlFiltering.md",sourceDirName:"Events",slug:"/Events/onUrlFiltering",permalink:"/docs/fr/19-R6/Events/onUrlFiltering",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onUrlFiltering",title:"On URL Filtering"},sidebar:"docs",previous:{title:"On Unload",permalink:"/docs/fr/19-R6/Events/onUnload"},next:{title:"On URL Loading Error",permalink:"/docs/fr/19-R6/Events/onUrlLoadingError"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3}],s={toc:u};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Peut \xeatre appel\xe9 par"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"D\xe9finition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"51"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("a",o({parentName:"td"},{href:"/docs/fr/19-R6/FormObjects/webAreaOverview"}),"Zones Web")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Une URL a \xe9t\xe9 bloqu\xe9e par la zone Web")))),(0,r.kt)("h2",o({},{id:"description"}),"Description"),(0,r.kt)("p",null,"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsque le chargement d'une URL est bloqu\xe9 par la zone Web en raison d'un filtre configur\xe9 \xe0 l'aide de la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"WA SET URL FILTERS"),"."),(0,r.kt)("p",null,"Vous pouvez identifier l'URL bloqu\xe9e \xe0 l'aide de la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"WA Get last filtered URL"),"."),(0,r.kt)("h3",o({},{id:"voir-\xe9galement"}),"Voir \xe9galement"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R6/Events/onOpenExternalLink"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Open External Link"))))}d.isMDXComponent=!0}}]);