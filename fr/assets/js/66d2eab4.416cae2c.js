"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,g=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"onBeginUrlLoading",title:"On Begin URL Loading"},l=void 0,c={unversionedId:"Events/onBeginUrlLoading",id:"version-19-R7/Events/onBeginUrlLoading",title:"On Begin URL Loading",description:"| Code | Peut \xeatre appel\xe9 par                         | D\xe9finition                                    |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/Events/onBeginUrlLoading.md",sourceDirName:"Events",slug:"/Events/onBeginUrlLoading",permalink:"/docs/fr/Events/onBeginUrlLoading",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"onBeginUrlLoading",title:"On Begin URL Loading"},sidebar:"docs",previous:{title:"On Begin Drag Over",permalink:"/docs/fr/Events/onBeginDragOver"},next:{title:"On Bound Variable Change",permalink:"/docs/fr/Events/onBoundVariableChange"}},p={},u=[{value:"Description",id:"description",level:2}],s={toc:u};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Peut \xeatre appel\xe9 par"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"D\xe9finition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"47"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/fr/FormObjects/webAreaOverview"}),"Zones Web")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Une nouvelle URL est charg\xe9e dans la zone Web")))),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 au d\xe9but du chargement d'une nouvelle URL dans la zone Web. La variable ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," associ\xe9e \xe0 la zone Web peut \xeatre utilis\xe9e pour conna\xeetre l'URL en cours de chargement."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"L'URL en cours de chargement est diff\xe9rente de ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/FormObjects/propertiesWebArea#url-variable-and-wa-open-url-command"}),"l'URL courante")," (reportez-vous \xe0 la description de la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"WA Get current URL"),").")))}d.isMDXComponent=!0}}]);