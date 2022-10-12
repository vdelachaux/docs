"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"control-flow",title:"Condi\xe7\xf5es e loops"},l=void 0,s={unversionedId:"Concepts/control-flow",id:"version-19/Concepts/control-flow",title:"Condi\xe7\xf5es e loops",description:"Independentemente da simplicidade ou da complexidade de um m\xe9todo, sempre utilizar\xe1 um ou v\xe1rios dos tr\xeas tipos de estruturas de programa\xe7\xe3o. Programming structures control the flow of execution, whether and in what order statements are executed within a method. There are three types of structures:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/flow-control.md",sourceDirName:"Concepts",slug:"/Concepts/control-flow",permalink:"/docs/pt/19/Concepts/control-flow",draft:!1,tags:[],version:"19",frontMatter:{id:"control-flow",title:"Condi\xe7\xf5es e loops"},sidebar:"docs",previous:{title:"Classes",permalink:"/docs/pt/19/Concepts/classes"},next:{title:"Estruturas condicionais",permalink:"/docs/pt/19/Concepts/branching"}},p={},c=[],u={toc:c};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Independentemente da simplicidade ou da complexidade de um m\xe9todo, sempre utilizar\xe1 um ou v\xe1rios dos tr\xeas tipos de estruturas de programa\xe7\xe3o. Programming structures control the flow of execution, whether and in what order statements are executed within a method. There are three types of structures:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sequential"),": a sequential structure is a simple, linear structure. A sequence is a series of statements that 4D executes one after the other, from first to last. A one-line routine, frequently used for object methods, is the simplest case of a sequential structure. For example: ",(0,n.kt)("inlineCode",{parentName:"li"},"[People]lastName:=Uppercase([People]lastName)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",o({parentName:"strong"},{href:"/docs/pt/19/Concepts/branching"}),"Branching")),": A branching structure allows methods to test a condition and take alternative paths, depending on the result. The condition is a Boolean expression, an expression that evaluates TRUE or FALSE. One branching structure is the ",(0,n.kt)("inlineCode",{parentName:"li"},"If... End if")," structure, which directs program flow along one of two paths. The other branching structure is the ",(0,n.kt)("inlineCode",{parentName:"li"},"Case of... End case")," structure, which directs program flow to one of many paths."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",o({parentName:"strong"},{href:"/docs/pt/19/Concepts/looping"}),"Looping")),": When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. To deal with this need, the 4D language provides the following looping structures:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"While... End while")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Repeat... Until")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"For... End for")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"For each...End for each"),(0,n.kt)("br",null)," The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Each looping structure can be used in either way, but ",(0,n.kt)("inlineCode",{parentName:"li"},"While")," loops and ",(0,n.kt)("inlineCode",{parentName:"li"},"Repeat")," loops are more appropriate for repeating until a condition is met, and ",(0,n.kt)("inlineCode",{parentName:"li"},"For")," loops are more appropriate for looping a specified number of times. ",(0,n.kt)("inlineCode",{parentName:"li"},"For each...End for each")," allows mixing both ways and is designed to loop within objects and collections.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:"),' 4D allows you to embed programming structures up to a "depth" of 512 levels.'))}d.isMDXComponent=!0}}]);