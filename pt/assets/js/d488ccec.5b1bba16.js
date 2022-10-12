"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"allowProject",title:"Allowing project methods"},l=void 0,p={unversionedId:"WebServer/allowProject",id:"version-19-R6/WebServer/allowProject",title:"Allowing project methods",description:"The 4D tags such as 4DEVAL, 4DTEXT, 4DHTML... as well as the /4DACTION URL allow you to trigger the execution of any project method of a 4D project published on the Web. For example, the request http://www.server.com/4DACTION/login causes the execution of the login project method, if it exists.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/WebServer/allowProject.md",sourceDirName:"WebServer",slug:"/WebServer/allowProject",permalink:"/docs/pt/19-R6/WebServer/allowProject",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"allowProject",title:"Allowing project methods"},sidebar:"docs",previous:{title:"Processing HTTP requests",permalink:"/docs/pt/19-R6/WebServer/httpRequests"},next:{title:"Custom HTTP Error Pages",permalink:"/docs/pt/19-R6/WebServer/errorPages"}},c={},s=[],u={toc:s};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The 4D tags such as ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEVAL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DHTML"),"... as well as the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/19-R6/WebServer/httpRequests#/4daction"}),(0,n.kt)("inlineCode",{parentName:"a"},"/4DACTION URL"))," allow you to trigger the execution of any project method of a 4D project published on the Web. For example, the request ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",o({parentName:"em"},{href:"http://www.server.com/4DACTION/login"}),"http://www.server.com/4DACTION/login"))," causes the execution of the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"login"))," project method, if it exists."),(0,n.kt)("p",null,"This mechanism therefore presents a security risk for the application, in particular if an Internet user intentionally (or unintentionally) triggers a method not intended for execution via the web. You can avoid this risk in the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Filter the methods called via the URLS using the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/19-R6/WebServer/authentication#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," database method. Drawbacks: If the database includes a great number of methods, this system may be difficult to manage.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("strong",{parentName:"p"},"Available through 4D tags and URLs (4DACTION...)")," option found in the Method properties dialog box:"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(21589).Z,width:"577",height:"575"})),(0,n.kt)("p",null,"This option is used to individually designate each project method that can be called using the ",(0,n.kt)("inlineCode",{parentName:"p"},"4DACTION")," special URL, or the ",(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DHTML"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEVAL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DSCRIPT"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DIF"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DELSEIF")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"4DLOOP")," tags. When it is not checked, the project method concerned cannot be directly executed through an HTTP request. Conversely, it can be executed using other types of calls (formulas, other methods, etc.)."),(0,n.kt)("p",null,"This option is unchecked by default. Methods that can be executed through ",(0,n.kt)("inlineCode",{parentName:"p"},"4DACTION")," or specific tags must be specifically indicated."),(0,n.kt)("p",null,"In the Explorer, Project methods with this property are given a specific icon:"),(0,n.kt)("p",null," ",(0,n.kt)("img",{src:r(88793).Z,width:"54",height:"48"})))}d.isMDXComponent=!0},88793:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAIAAADVfh6XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVFhH7ZWxagJBEIbXIJcXyEsIVjYSEDshIQasLALBFxAvjaWVpU1O8gIiWFkEVFLYiY2NbV7CF4gQLr/OsmzQPQ3uRe9uPpZxZq8ZPmbWlO/74rK5kr8XDLdoA27RBqFs9PXTu8wO8TWoyMwMWxRi2iogFjM3iLPPFWKpPd982MIWzZBF8qc7I/T7mFgMsUXMH40ggC0lTL8/hmRbxP7SCgNMp1pz/f4Y4rXRpfs3xOlHncoA+F3cB/l7fHlGHL32EYNdpqpDRCedpjKAZFjU/emQy/LdN5UK13VlZo8kzaLneYhs8RCmdzHvdmX2m4XXkNlpRMDiH1rE/u6usCKXvVVHXlkiLhZrnQ7Ocr3GoVx++Beiv9EkLP9QplKxmIwRe80mIm+0DYsE/7uYCbaYcxwqFWzRzO5DqE9h2MTF4nmJgEVu0Qbcog24RRtwi6cjxA+unqf/blDP8gAAAABJRU5ErkJggg=="},21589:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/methodProperties-867b582c26764645149bb24d65d58006.png"}}]);