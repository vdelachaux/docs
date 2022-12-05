"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"onOpenDetail",title:"On Open Detail"},l=void 0,s={unversionedId:"Events/onOpenDetail",id:"version-19-R6/Events/onOpenDetail",title:"On Open Detail",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onOpenDetail.md",sourceDirName:"Events",slug:"/Events/onOpenDetail",permalink:"/docs/19-R6/Events/onOpenDetail",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R6/Events/onOpenDetail.md",tags:[],version:"19-R6",frontMatter:{id:"onOpenDetail",title:"On Open Detail"},sidebar:"docs",previous:{title:"On Mouse Up",permalink:"/docs/19-R6/Events/onMouseUp"},next:{title:"On Open External Link",permalink:"/docs/19-R6/Events/onOpenExternalLink"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Displayed line number",id:"displayed-line-number",level:3}],u={toc:c};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"25"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Form - ",(0,r.kt)("a",o({parentName:"td"},{href:"/docs/19-R6/FormObjects/listboxOverview"}),"List Box")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The detail form associated with the output form or with the list box is about to be opened.")))),(0,r.kt)("h2",o({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"On Open Detail")," event can be used in the following contexts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Output forms"),": A record is about to be displayed in the detail form associated with the output form. This event cannot be selected for project forms, it is only available with ",(0,r.kt)("strong",{parentName:"li"},"table forms"),".  "),(0,r.kt)("li",{parentName:"ul"},"List box of the ",(0,r.kt)("a",o({parentName:"li"},{href:"/docs/19-R6/FormObjects/listboxOverview#selection-list-boxes"}),(0,r.kt)("strong",{parentName:"a"},"selection type")),": This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened).")),(0,r.kt)("h3",o({},{id:"displayed-line-number"}),"Displayed line number"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Displayed line number")," 4D command works with the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Open Detail")," form event. It returns the number of the row being processed while a list of records or list box rows is displayed on screen."))}d.isMDXComponent=!0}}]);