"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,y=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"onBeforeDataEntry",title:"On Before Data Entry"},l=void 0,s={unversionedId:"Events/onBeforeDataEntry",id:"version-19-R6/Events/onBeforeDataEntry",title:"On Before Data Entry",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19-R6/Events/onBeforeDataEntry.md",sourceDirName:"Events",slug:"/Events/onBeforeDataEntry",permalink:"/docs/19-R6/Events/onBeforeDataEntry",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"onBeforeDataEntry",title:"On Before Data Entry"},sidebar:"docs",previous:{title:"On Alternative Click",permalink:"/docs/19-R6/Events/onAlternativeClick"},next:{title:"On Before Keystroke",permalink:"/docs/19-R6/Events/onBeforeKeystroke"}},c={},p=[{value:"Description",id:"description",level:2}],u={toc:p};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"41"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("a",o({parentName:"td"},{href:"/docs/19-R6/FormObjects/listboxOverview"}),"List Box")," - ",(0,r.kt)("a",o({parentName:"td"},{href:"/docs/19-R6/FormObjects/listboxOverview#list-box-columns"}),"List Box Column")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"A list box cell is about to change to editing mode")))),(0,r.kt)("h2",o({},{id:"description"}),"Description"),(0,r.kt)("p",null,"This event is generated just before a cell in the list box is edited (before the entry cursor is displayed). This event allows the developer, for example, to display a different text depending on whether the user is in the display or edit mode."),(0,r.kt)("p",null,"When the cursor arrives in the cell, the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Before Data Entry")," event is generated in the list box or column method. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If, in the context of this event, $0 is set to -1, the cell is considered as not enterable. If the event was generated after ",(0,r.kt)("strong",{parentName:"li"},"Tab")," or ",(0,r.kt)("strong",{parentName:"li"},"Shift+Tab")," was pressed, the focus goes to either the next cell or the previous one, respectively."),(0,r.kt)("li",{parentName:"ul"},"If $0 is not -1 (by default $0 is 0), the cell is enterable and switches to editing mode.")),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/19-R6/FormObjects/listboxOverview#managing-entry"}),"Managing entry")," section."))}f.isMDXComponent=!0}}]);