"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"onOpenDetail",title:"On Open Detail"},l=void 0,p={unversionedId:"Events/onOpenDetail",id:"version-19-R6/Events/onOpenDetail",title:"On Open Detail",description:"| Code | Can be called by                                   | Defini\xe7\xe3o                                                                                   |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/Events/onOpenDetail.md",sourceDirName:"Events",slug:"/Events/onOpenDetail",permalink:"/docs/pt/19-R6/Events/onOpenDetail",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onOpenDetail",title:"On Open Detail"},sidebar:"docs",previous:{title:"On Mouse Up",permalink:"/docs/pt/19-R6/Events/onMouseUp"},next:{title:"On Open External Link",permalink:"/docs/pt/19-R6/Events/onOpenExternalLink"}},s={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Displayed line number",id:"displayed-line-number",level:3}],u={toc:c};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Defini\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"25"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Form - ",(0,r.kt)("a",o({parentName:"td"},{href:"/docs/pt/19-R6/FormObjects/listboxOverview"}),"List Box")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The detail form associated with the output form or with the list box is about to be opened.")))),(0,r.kt)("h2",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"On Open Detail")," event can be used in the following contexts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Output forms"),": A record is about to be displayed in the detail form associated with the output form. This event cannot be selected for project forms, it is only available with ",(0,r.kt)("strong",{parentName:"li"},"table forms"),"."),(0,r.kt)("li",{parentName:"ul"},"List box of the ",(0,r.kt)("a",o({parentName:"li"},{href:"/docs/pt/19-R6/FormObjects/listboxOverview#selection-list-boxes"}),(0,r.kt)("strong",{parentName:"a"},"selection type")),": This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened).")),(0,r.kt)("h3",o({},{id:"displayed-line-number"}),"Displayed line number"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Displayed line number")," 4D command works with the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Open Detail")," form event. It returns the number of the row being processed while a list of records or list box rows is displayed on screen."))}d.isMDXComponent=!0}}]);