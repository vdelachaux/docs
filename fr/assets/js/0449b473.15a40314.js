"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"onPageChange",title:"Sur changement page"},l=void 0,u={unversionedId:"Events/onPageChange",id:"version-19/Events/onPageChange",title:"Sur changement page",description:"| Code | Peut \xeatre appel\xe9 par | D\xe9finition                                  |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/onPageChange.md",sourceDirName:"Events",slug:"/Events/onPageChange",permalink:"/docs/fr/19/Events/onPageChange",draft:!1,tags:[],version:"19",frontMatter:{id:"onPageChange",title:"Sur changement page"},sidebar:"docs",previous:{title:"Sur appel ext\xe9rieur",permalink:"/docs/fr/19/Events/onOutsideCall"},next:{title:"Sur appel zone du plug in",permalink:"/docs/fr/19/Events/onPlugInArea"}},p={},s=[{value:"Description",id:"description",level:2}],c={toc:s};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Peut \xeatre appel\xe9 par"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"D\xe9finition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"56"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Formulaire"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"La page courante du formulaire est modifi\xe9e")))),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"Cet \xe9v\xe9nement n'est disponible qu'au niveau du formulaire (il est appel\xe9 dans la m\xe9thode formulaire). Il est g\xe9n\xe9r\xe9 \xe0 chaque fois que la page courante du formulaire change (suite \xe0 un appel \xe0 la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"FORM GOTO PAGE")," ou \xe0 une action de navigation standard)."),(0,r.kt)("p",null,"A noter qu'il est g\xe9n\xe9r\xe9 apr\xe8s le chargement complet de la page, c'est-\xe0-dire une fois tous les objets qu'elle contient sont initialis\xe9s, y compris les ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/webAreaOverview"}),"zones Web"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"La seule exception concerne les zones 4D View Pro, pour lesquelles vous devez appeler l'\xe9v\xe9nement sp\xe9cifique ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/Events/onVpReady"}),"On VP Ready"),".")),(0,r.kt)("p",null,"L'\xe9v\xe9nement ",(0,r.kt)("inlineCode",{parentName:"p"},"On Page Change")," est utile pour ex\xe9cuter du code qui n\xe9cessite que tous les objets soient pr\xe9alablement initialis\xe9s. Vous pouvez \xe9galement l'utiliser pour optimiser l'application en ex\xe9cutant du code (par exemple, une recherche) uniquement apr\xe8s l'affichage d'une page sp\xe9cifique du formulaire et pas seulement d\xe8s que la page 1 est charg\xe9e. Si l'utilisateur ne va pas sur cette page, le code n'est pas ex\xe9cut\xe9."))}d.isMDXComponent=!0}}]);