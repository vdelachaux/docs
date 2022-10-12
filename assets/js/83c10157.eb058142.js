"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97574],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={id:"onCollapse",title:"On Collapse"},i=void 0,s={unversionedId:"Events/onCollapse",id:"version-19-R6/Events/onCollapse",title:"On Collapse",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onCollapse.md",sourceDirName:"Events",slug:"/Events/onCollapse",permalink:"/docs/19-R6/Events/onCollapse",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onCollapse",title:"On Collapse"},sidebar:"docs",previous:{title:"On Close Detail",permalink:"/docs/19-R6/Events/onCloseDetail"},next:{title:"On Column Moved",permalink:"/docs/19-R6/Events/onColumnMoved"}},c={},p=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}],u={toc:p};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Can be called by"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"44"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/19-R6/FormObjects/listOverview#overview"}),"Hierarchical List")," - ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/19-R6/FormObjects/listboxOverview"}),"List Box")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"An element of the hierarchical list or hierarchical list box has been collapsed using a click or a keystroke")))),(0,n.kt)("h2",a({},{id:"description"}),"Description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"/docs/19-R6/FormObjects/listOverview"}),"Hierarchical list"),": This event is generated every time an element of the hierarchical list is collapsed with a mouse click or keystroke."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"/docs/19-R6/FormObjects/listboxOverview#hierarchical-list-boxes"}),"Hierarchical list boxes"),": This event is generated when a row of the hierarchical list box is collapsed.")),(0,n.kt)("h3",a({},{id:"see-also"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/19-R6/Events/onExpand"}),"On Expand")))}d.isMDXComponent=!0}}]);