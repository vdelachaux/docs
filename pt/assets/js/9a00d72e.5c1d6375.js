"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"overview",title:"Class API Overview"},l=void 0,s={unversionedId:"API/overview",id:"version-19-R7/API/overview",title:"Class API Overview",description:"This section describes the built-in 4D class API as well as the associated constructor commands. 4D class functions and properties are available through class instance objects.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R7/API/overview.md",sourceDirName:"API",slug:"/API/overview",permalink:"/docs/pt/API/overview",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/API/overview.md",tags:[],version:"19-R7",frontMatter:{id:"overview",title:"Class API Overview"},sidebar:"docs",previous:{title:"Glossary",permalink:"/docs/pt/ORDA/glossary"},next:{title:"Blob",permalink:"/docs/pt/API/BlobClass"}},c={},p=[{value:"Writing conventions",id:"writing-conventions",level:2},{value:"Other resources",id:"other-resources",level:2}],u={toc:p};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes the built-in 4D class API as well as the associated constructor commands. 4D class functions and properties are available through class instance objects."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"functions must be called on instances with the () operator. Por exemplo, ",(0,r.kt)("inlineCode",{parentName:"p"},"collection.sort()"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"properties are accessed without parentheses, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"file.creationTime"),". You can also use the ","[","] syntax, for example ",(0,r.kt)("inlineCode",{parentName:"p"},'file["creationTime"]'),"."))),(0,r.kt)("h2",o({},{id:"writing-conventions"}),"Writing conventions"),(0,r.kt)("p",null,"The following conventions are used in the function syntax:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"{ }")," characters (braces) indicate optional parameters. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},".delete( { option : Integer } )")," means that the ",(0,r.kt)("em",{parentName:"li"},"option")," parameter may be omitted when calling the function."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"{ ; ...param }")," notation indicates an unlimited number of parameters. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},".concat( value : any { ;...valueN } ) : Collection")," means that an unlimited number of values of any type can be passed to the function."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"any")," keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...).")),(0,r.kt)("h2",o({},{id:"other-resources"}),"Other resources"),(0,r.kt)("p",null,"For an overall presentation of the 4D Language basics and concepts, please go to the ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/Concepts/about"}),"4D Language Concepts")," section."),(0,r.kt)("p",null,'For a description of the 4D "classic" language, please go to the ',(0,r.kt)("em",{parentName:"p"},"4D Language Reference")," on ",(0,r.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com"}),"doc.4d.com"),"."))}m.isMDXComponent=!0}}]);