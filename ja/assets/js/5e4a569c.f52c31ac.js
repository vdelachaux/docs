"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(n),s=r,b=u["".concat(o,".").concat(s)]||u[s]||k[s]||l;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"webAdmin",title:"WebAdmin"},p=void 0,o={unversionedId:"Admin/webAdmin",id:"version-19-R7/Admin/webAdmin",title:"WebAdmin",description:"WebAdmin \u3068\u306f\u30014D \u304a\u3088\u3073 4D Server \u306b\u4f7f\u7528\u3055\u308c\u308b\u7d44\u307f\u8fbc\u307f\u306e Web\u30b5\u30fc\u30d0\u30fc\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u540d\u79f0\u3067\u3001\u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc \u306a\u3069\u306e\u7ba1\u7406\u6a5f\u80fd\u3078\u306e\u5b89\u5168\u306a Web\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u30d6\u30e9\u30a6\u30b6\u30fc\u3084\u3001\u4efb\u610f\u306e Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u3001\u30ed\u30fc\u30ab\u30eb\u307e\u305f\u306f\u30ea\u30e2\u30fc\u30c8\u3067\u3053\u306e Web\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3057\u3001\u95a2\u9023\u306e 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R7/Admin/webAdmin.md",sourceDirName:"Admin",slug:"/Admin/webAdmin",permalink:"/docs/ja/Admin/webAdmin",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/Admin/webAdmin.md",tags:[],version:"19-R7",frontMatter:{id:"webAdmin",title:"WebAdmin"},sidebar:"docs",previous:{title:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30e2\u30cb\u30bf\u30fc\u30da\u30fc\u30b8",permalink:"/docs/ja/ServerWindow/real-time-monitor"},next:{title:"Web\u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc",permalink:"/docs/ja/Admin/dataExplorer"}},m={},d=[{value:"WebAdmin Web\u30b5\u30fc\u30d0\u30fc\u306e\u8d77\u52d5",id:"webadmin-web\u30b5\u30fc\u30d0\u30fc\u306e\u8d77\u52d5",level:2},{value:"\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7",id:"\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7",level:3},{value:"\u958b\u59cb\u3068\u505c\u6b62",id:"\u958b\u59cb\u3068\u505c\u6b62",level:3},{value:"WebAdmin \u8a2d\u5b9a",id:"webadmin-\u8a2d\u5b9a",level:2},{value:"\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9",id:"\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9",level:3},{value:"Web\u30b5\u30fc\u30d0\u30fc\u7ba1\u7406\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7",id:"web\u30b5\u30fc\u30d0\u30fc\u7ba1\u7406\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7",level:4},{value:"\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u3067HTTP\u63a5\u7d9a\u3092\u53d7\u3051\u5165\u308c\u308b",id:"\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u3067http\u63a5\u7d9a\u3092\u53d7\u3051\u5165\u308c\u308b",level:4},{value:"HTTP \u30dd\u30fc\u30c8",id:"http-\u30dd\u30fc\u30c8",level:4},{value:"HTTPS\u3092\u53d7\u3051\u5165\u308c\u308b",id:"https\u3092\u53d7\u3051\u5165\u308c\u308b",level:4},{value:"HTTPS \u30dd\u30fc\u30c8",id:"https-\u30dd\u30fc\u30c8",level:4},{value:"\u8a8d\u8a3c\u30d5\u30a9\u30eb\u30c0\u30d1\u30b9",id:"\u8a8d\u8a3c\u30d5\u30a9\u30eb\u30c0\u30d1\u30b9",level:4},{value:"\u30c7\u30d0\u30c3\u30b0\u30ed\u30b0\u30e2\u30fc\u30c9",id:"\u30c7\u30d0\u30c3\u30b0\u30ed\u30b0\u30e2\u30fc\u30c9",level:4},{value:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc",id:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc",level:4},{value:"WebAdmin \u306e\u30d8\u30c3\u30c9\u30ec\u30b9\u8a2d\u5b9a",id:"webadmin-\u306e\u30d8\u30c3\u30c9\u30ec\u30b9\u8a2d\u5b9a",level:2},{value:"\u8a8d\u8a3c\u3068\u30bb\u30c3\u30b7\u30e7\u30f3",id:"\u8a8d\u8a3c\u3068\u30bb\u30c3\u30b7\u30e7\u30f3",level:2}],k={toc:d};function u(e){var{components:t}=e,i=l(e,["components"]);return(0,a.kt)("wrapper",r({},k,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," \u3068\u306f\u30014D \u304a\u3088\u3073 4D Server \u306b\u4f7f\u7528\u3055\u308c\u308b\u7d44\u307f\u8fbc\u307f\u306e Web\u30b5\u30fc\u30d0\u30fc\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u540d\u79f0\u3067\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/Admin/dataExplorer"}),"\u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc")," \u306a\u3069\u306e\u7ba1\u7406\u6a5f\u80fd\u3078\u306e\u5b89\u5168\u306a Web\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u30d6\u30e9\u30a6\u30b6\u30fc\u3084\u3001\u4efb\u610f\u306e Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u3001\u30ed\u30fc\u30ab\u30eb\u307e\u305f\u306f\u30ea\u30e2\u30fc\u30c8\u3067\u3053\u306e Web\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3057\u3001\u95a2\u9023\u306e 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,'WebAdmin \u5185\u90e8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001"WebAdmin" \u6a29\u9650\u3092\u6301\u3064\u30e6\u30fc\u30b6\u30fc\u306e\u8a8d\u8a3c\u3092\u51e6\u7406\u3057\u3001\u7ba1\u7406\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u3044\u3066\u5c02\u7528\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002'),(0,a.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u306f\u3001\u30d8\u30c3\u30c9\u30ec\u30b9\u3067\u52d5\u4f5c\u3059\u308b 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3082\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u6301\u3064 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",r({},{id:"webadmin-web\u30b5\u30fc\u30d0\u30fc\u306e\u8d77\u52d5"}),"WebAdmin Web\u30b5\u30fc\u30d0\u30fc\u306e\u8d77\u52d5"),(0,a.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," Web\u30b5\u30fc\u30d0\u30fc\u306f\u958b\u59cb\u3057\u307e\u305b\u3093\u3002 \u8d77\u52d5\u6642\u306b\u958b\u59cb\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308b\u304b\u3001(\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u4ed8\u304d\u306e\u5834\u5408\u306f) \u30e1\u30cb\u30e5\u30fc\u304b\u3089\u624b\u52d5\u3067\u958b\u59cb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("h3",r({},{id:"\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7"}),"\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," Web\u30b5\u30fc\u30d0\u30fc\u306f\u30014D \u307e\u305f\u306f 4D Server \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8d77\u52d5\u6642 (\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8aad\u307f\u8fbc\u307f\u524d) \u306b\u958b\u59cb\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u6301\u3064 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,a.kt)("strong",{parentName:"li"},"\u30d5\u30a1\u30a4\u30eb \uff1e Web\u7ba1\u7406 \uff1e \u8a2d\u5b9a...")," \u30e1\u30cb\u30e5\u30fc\u9805\u76ee\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(30512).Z,width:"470",height:"294"})),(0,a.kt)("p",null,"Web\u7ba1\u7406\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u3067\u3001",(0,a.kt)("strong",{parentName:"p"},"Web\u30b5\u30fc\u30d0\u30fc\u7ba1\u7406\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(56148).Z,width:"702",height:"205"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30d8\u30c3\u30c9\u30ec\u30b9\u306e 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u304b\u306b\u304b\u304b\u308f\u3089\u305a\u3001\u4ee5\u4e0b\u306e ",(0,a.kt)("em",{parentName:"li"},"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30fb\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9")," \u306e\u5f15\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u3092\u6709\u52b9\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"open ~/Desktop/4D.app --webadmin-auto-start true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," Web\u30b5\u30fc\u30d0\u30fc\u304c\u4f7f\u7528\u3059\u308b TCP\u30dd\u30fc\u30c8 (\u8a2d\u5b9a\u306b\u3088\u308a\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"#https-port"}),"HTTPS")," \u307e\u305f\u306f ",(0,a.kt)("a",r({parentName:"p"},{href:"#http-port"}),"HTTP"),") \u304c\u958b\u59cb\u6642\u306b\u7a7a\u3044\u3066\u3044\u306a\u3044\u5834\u5408\u30014D \u306f\u6b21\u306e 20\u500b\u306e\u30dd\u30fc\u30c8\u3092\u9806\u306b\u8a66\u3057\u3001\u5229\u7528\u3067\u304d\u308b\u6700\u521d\u306e\u30dd\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u5229\u7528\u53ef\u80fd\u306a\u30dd\u30fc\u30c8\u304c\u306a\u3044\u5834\u5408\u3001Web\u30b5\u30fc\u30d0\u30fc\u306f\u958b\u59cb\u305b\u305a\u3001\u30a8\u30e9\u30fc\u304c\u8868\u793a\u3055\u308c\u308b\u304b\u3001(\u30d8\u30c3\u30c9\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5834\u5408\u306f) \u30b3\u30f3\u30bd\u30fc\u30eb\u306e\u30ed\u30b0\u306b\u8a18\u9332\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("h3",r({},{id:"\u958b\u59cb\u3068\u505c\u6b62"}),"\u958b\u59cb\u3068\u505c\u6b62"),(0,a.kt)("p",null,"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u6301\u3064 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," Web\u30b5\u30fc\u30d0\u30fc\u306f\u3044\u3064\u3067\u3082\u958b\u59cb\u307e\u305f\u306f\u505c\u6b62\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u30d5\u30a1\u30a4\u30eb \uff1e Web\u7ba1\u7406 \uff1e Web\u30b5\u30fc\u30d0\u30fc\u958b\u59cb")," \u30e1\u30cb\u30e5\u30fc\u9805\u76ee\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(31031).Z,width:"473",height:"354"})),(0,a.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u304c\u958b\u59cb\u3055\u308c\u3066\u3044\u308b\u3068\u3001\u30e1\u30cb\u30e5\u30fc\u9805\u76ee\u306f ",(0,a.kt)("strong",{parentName:"p"},"Web\u30b5\u30fc\u30d0\u30fc\u505c\u6b62")," \u306b\u306a\u308a\u307e\u3059\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," Web\u30b5\u30fc\u30d0\u30fc\u3092\u505c\u6b62\u3059\u308b\u306b\u306f\u3001\u3053\u308c\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",r({},{id:"webadmin-\u8a2d\u5b9a"}),"WebAdmin \u8a2d\u5b9a"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"#access-key"}),(0,a.kt)("strong",{parentName:"a"},"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc"))," \u3092\u5b9a\u7fa9\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8a2d\u5b9a\u306f\u5fc5\u9808\u3067\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u3001\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001URL\u7d4c\u7531\u306e\u30a2\u30af\u30bb\u30b9\u306f\u8a31\u53ef\u3055\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8a2d\u5b9a\u306f\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"#settings-dialog-box"}),"Web\u7ba1\u7406\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9")," (\u5f8c\u8ff0\u53c2\u7167) \u3067\u304a\u3053\u306a\u3044\u307e\u3059\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u30d8\u30c3\u30c9\u30ec\u30b94D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"#webadmin-headless-configuration"}),(0,a.kt)("em",{parentName:"a"},"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30fb\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9")," \u306e\u5f15\u6570")," \u3092\u4f7f\u7528\u3057\u3066\u57fa\u672c\u7684\u306a\u8a2d\u5b9a\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002 \u9ad8\u5ea6\u306a\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u5b9a\u7fa9\u3059\u308b\u306b\u306f\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("h3",r({},{id:"\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9"}),"\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9"),(0,a.kt)("p",null,"Web\u7ba1\u7406\u306e\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u3092\u958b\u304f\u306b\u306f\u3001",(0,a.kt)("strong",{parentName:"p"},"\u30d5\u30a1\u30a4\u30eb \uff1e Web \u7ba1\u7406 \uff1e \u8a2d\u5b9a...")," \u30e1\u30cb\u30e5\u30fc\u9805\u76ee\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(30512).Z,width:"470",height:"294"})),(0,a.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u304c\u8868\u793a\u3055\u308c\u307e\u3059:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(90418).Z,width:"702",height:"462"})),(0,a.kt)("h4",r({},{id:"web\u30b5\u30fc\u30d0\u30fc\u7ba1\u7406\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7"}),"Web\u30b5\u30fc\u30d0\u30fc\u7ba1\u7406\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7"),(0,a.kt)("p",null,"4D \u307e\u305f\u306f 4D Server \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8d77\u52d5\u6642\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," Web\u30b5\u30fc\u30d0\u30fc\u3092\u81ea\u52d5\u7684\u306b\u958b\u59cb\u3055\u305b\u308b\u306b\u306f\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059 (",(0,a.kt)("a",r({parentName:"p"},{href:"#%E8%87%AA%E5%8B%95%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%82%A2%E3%83%83%E3%83%97"}),"\u524d\u8ff0\u53c2\u7167"),"\uff09\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"),(0,a.kt)("h4",r({},{id:"\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u3067http\u63a5\u7d9a\u3092\u53d7\u3051\u5165\u308c\u308b"}),"\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u3067HTTP\u63a5\u7d9a\u3092\u53d7\u3051\u5165\u308c\u308b"),(0,a.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u30014D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u540c\u3058\u30de\u30b7\u30f3\u4e0a\u3067 HTTP \u3092\u4ecb\u3057\u3066 ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," Web\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u4ee5\u5916\u306b\u3088\u308b HTTP\u63a5\u7d9a\u306f\u53d7\u3051\u4ed8\u3051\u307e\u305b\u3093\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u3066\u3082\u3001",(0,a.kt)("a",r({parentName:"li"},{href:"#https%E3%82%92%E5%8F%97%E3%81%91%E5%85%A5%E3%82%8C%E3%82%8B"}),"HTTPS\u3092\u53d7\u3051\u5165\u308c\u308b")," \u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u3066\u3001TLS \u306e\u8a2d\u5b9a\u304c\u6709\u52b9\u306a\u5834\u5408\u3001\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u306e\u63a5\u7d9a\u306f HTTPS \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,a.kt)("h4",r({},{id:"http-\u30dd\u30fc\u30c8"}),"HTTP \u30dd\u30fc\u30c8"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u3067HTTP\u63a5\u7d9a\u3092\u53d7\u3051\u5165\u308c\u308b")," \u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u306a\u5834\u5408\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," Web\u30b5\u30fc\u30d0\u30fc\u3078\u306e HTTP\u63a5\u7d9a\u306b\u4f7f\u7528\u3059\u308b\u30dd\u30fc\u30c8\u756a\u53f7\u3067\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f 7080 \u3067\u3059\u3002"),(0,a.kt)("h4",r({},{id:"https\u3092\u53d7\u3051\u5165\u308c\u308b"}),"HTTPS\u3092\u53d7\u3051\u5165\u308c\u308b"),(0,a.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," Web\u30b5\u30fc\u30d0\u30fc\u306b HTTPS \u3092\u4ecb\u3057\u3066\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h4",r({},{id:"https-\u30dd\u30fc\u30c8"}),"HTTPS \u30dd\u30fc\u30c8"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HTTPS\u3092\u53d7\u3051\u5165\u308c\u308b")," \u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u306a\u5834\u5408\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," Web\u30b5\u30fc\u30d0\u30fc\u3078\u306e HTTPS\u63a5\u7d9a\u306b\u4f7f\u7528\u3059\u308b\u30dd\u30fc\u30c8\u756a\u53f7\u3067\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f 7443 \u3067\u3059\u3002"),(0,a.kt)("h4",r({},{id:"\u8a8d\u8a3c\u30d5\u30a9\u30eb\u30c0\u30d1\u30b9"}),"\u8a8d\u8a3c\u30d5\u30a9\u30eb\u30c0\u30d1\u30b9"),(0,a.kt)("p",null,"TLS\u8a3c\u660e\u66f8\u30d5\u30a1\u30a4\u30eb\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u30d1\u30b9\u3067\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u8a8d\u8a3c\u30d5\u30a9\u30eb\u30c0\u30d1\u30b9\u306f\u7a7a\u3067\u30014D \u307e\u305f\u306f 4D Server \u306f 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7d44\u307f\u8fbc\u307e\u308c\u305f\u8a3c\u660e\u66f8\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u307e\u3059 (\u30ab\u30b9\u30bf\u30e0\u8a3c\u660e\u66f8\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u96a3\u306b\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059)\u3002"),(0,a.kt)("h4",r({},{id:"\u30c7\u30d0\u30c3\u30b0\u30ed\u30b0\u30e2\u30fc\u30c9"}),"\u30c7\u30d0\u30c3\u30b0\u30ed\u30b0\u30e2\u30fc\u30c9"),(0,a.kt)("p",null,'HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb (\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e "Logs" \u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b HTTPDebugLog_',(0,a.kt)("em",{parentName:"p"},"nn"),".txt (nn \u306f\u30d5\u30a1\u30a4\u30eb\u756a\u53f7)) \u306e\u72b6\u614b\u3084\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u6b21\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304b\u3089\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7121\u52b9\u5316")," (\u30c7\u30d5\u30a9\u30eb\u30c8)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"body\u30d1\u30fc\u30c4\u3092\u5168\u3066")," - \u30ec\u30b9\u30dd\u30f3\u30b9\u304a\u3088\u3073\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30dc\u30c7\u30a3\u30d1\u30fc\u30c4\u3092\u542b\u3081\u308b\u5f62\u3067\u6709\u52b9\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"body\u30d1\u30fc\u30c4\u3092\u542b\u3081\u306a\u3044")," - \u30dc\u30c7\u30a3\u30d1\u30fc\u30c4\u3092\u542b\u3081\u306a\u3044\u5f62\u3067\u6709\u52b9\u5316 (\u30dc\u30c7\u30a3\u30b6\u30a4\u30ba\u306f\u63d0\u4f9b\u3055\u308c\u307e\u3059)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u30ea\u30af\u30a8\u30b9\u30c8\u306ebody")," - \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30dc\u30c7\u30a3\u30d1\u30fc\u30c4\u306e\u307f\u3092\u542b\u3081\u308b\u5f62\u3067\u6709\u52b9\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u306ebody")," - \u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30dc\u30c7\u30a3\u30d1\u30fc\u30c4\u306e\u307f\u3092\u542b\u3081\u308b\u5f62\u3067\u6709\u52b9\u5316\u3002")),(0,a.kt)("h4",r({},{id:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc"}),"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," Web\u30b5\u30fc\u30d0\u30fc\u3078\u306e URL\u7d4c\u7531\u30a2\u30af\u30bb\u30b9\u306e\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3059\u308b\u306b\u306f\u3001\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306e\u5b9a\u7fa9\u306f\u5fc5\u9808\u3067\u3059 (4D\u30e1\u30cb\u30e5\u30fc\u30b3\u30de\u30f3\u30c9\u306b\u3088\u308b\u30a2\u30af\u30bb\u30b9\u306b\u306f\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093)\u3002 \u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/Admin/dataExplorer"}),"\u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc\u30da\u30fc\u30b8")," \u306a\u3069\u306e Web\u7ba1\u7406\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306b Web\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u3063\u3066 URL\u3092\u4ecb\u3057\u305f\u63a5\u7d9a\u306f\u3067\u304d\u307e\u305b\u3093\u3002 \u63a5\u7d9a\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u3042\u3063\u305f\u5834\u5408\u306b\u306f\u3001\u30a8\u30e9\u30fc\u30da\u30fc\u30b8\u304c\u8fd4\u3055\u308c\u307e\u3059:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(86374).Z,width:"193",height:"126"})),(0,a.kt)("p",null,"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u30ed\u30b0\u30a4\u30f3\u3068\u306f\u95a2\u4fc2\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u3057\u3044\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u5b9a\u7fa9\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("strong",{parentName:"li"},"\u5b9a\u7fa9")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306e\u6587\u5b57\u5217\u3092\u5165\u529b\u3057\u3066 ",(0,a.kt)("strong",{parentName:"li"},"OK")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 \u3059\u308b\u3068\u3001\u30dc\u30bf\u30f3\u30e9\u30d9\u30eb\u304c ",(0,a.kt)("strong",{parentName:"li"},"\u7de8\u96c6")," \u306b\u5909\u308f\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u7de8\u96c6\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("strong",{parentName:"li"},"\u7de8\u96c6")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u306b\u65b0\u3057\u3044\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306e\u6587\u5b57\u5217\u3092\u5165\u529b\u3057\u3066 ",(0,a.kt)("strong",{parentName:"li"},"OK")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u3057\u3044\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("strong",{parentName:"li"},"\u7de8\u96c6")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u6b04\u3092\u7a7a\u306b\u3057\u3066 ",(0,a.kt)("strong",{parentName:"li"},"OK")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")),(0,a.kt)("h2",r({},{id:"webadmin-\u306e\u30d8\u30c3\u30c9\u30ec\u30b9\u8a2d\u5b9a"}),"WebAdmin \u306e\u30d8\u30c3\u30c9\u30ec\u30b9\u8a2d\u5b9a"),(0,a.kt)("p",null,"\u3059\u3079\u3066\u306e ",(0,a.kt)("a",r({parentName:"p"},{href:"#webadmin-%E8%A8%AD%E5%AE%9A"}),"WebAdmin \u8a2d\u5b9a")," \u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," \u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002 4D \u304a\u3088\u3073 4D Server \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u6bce\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," \u30d5\u30a1\u30a4\u30eb\u304c 1\u3064\u5b58\u5728\u3057\u3001\u540c\u3058\u30db\u30b9\u30c8\u30de\u30b7\u30f3\u4e0a\u3067\u8907\u6570\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u904b\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"4D \u304a\u3088\u3073 4D Server \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d8\u30c3\u30c9\u30ec\u30b9\u3067\u5b9f\u884c\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," \u30d5\u30a1\u30a4\u30eb\u3092\u8a2d\u5b9a\u3057\u3066\u4f7f\u7528\u3059\u308b\u304b\u3001\u30ab\u30b9\u30bf\u30e0\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},".4DSettings")," \u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u6301\u3064 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e",(0,a.kt)("a",r({parentName:"p"},{href:"#%E8%A8%AD%E5%AE%9A%E3%83%80%E3%82%A4%E3%82%A2%E3%83%AD%E3%82%B0%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9"}),"WebAdmin\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0")," \u3092\u4f7f\u7528\u3057\u3001\u305d\u306e\u5f8c\u30d8\u30c3\u30c9\u30ec\u30b9\u3067\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3053\u306e\u3068\u304d\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," \u30d5\u30a1\u30a4\u30eb\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u307e\u305f\u3001\u30ab\u30b9\u30bf\u30e0\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},".4DSettings")," \u30d5\u30a1\u30a4\u30eb (xml\u5f62\u5f0f) \u3092\u8a2d\u5b9a\u3057\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u4ee3\u308f\u308a\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u6a5f\u80fd\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/Admin/cli"}),"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30fb\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9")," \u3067\u306f\u3044\u304f\u3064\u304b\u306e\u5c02\u7528\u306e\u5f15\u6570\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},".4DSettings")," \u30d5\u30a1\u30a4\u30eb\u306b\u304a\u3044\u3066\u3001\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306f\u5e73\u6587\u3067\u306f\u4fdd\u5b58\u3055\u308c\u307e\u305b\u3093\u3002")),(0,a.kt)("p",null,"\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n    "my Fabulous AccessKey" --webadmin-auto-start true   \n    --webadmin-store-settings\n\n')),(0,a.kt)("h2",r({},{id:"\u8a8d\u8a3c\u3068\u30bb\u30c3\u30b7\u30e7\u30f3"}),"\u8a8d\u8a3c\u3068\u30bb\u30c3\u30b7\u30e7\u30f3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e8b\u524d\u306b\u672c\u4eba\u78ba\u8a8d\u305b\u305a\u306b URL\u7d4c\u7531\u3067 Web\u7ba1\u7406\u30da\u30fc\u30b8\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u5834\u5408\u3001\u8a8d\u8a3c\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002 \u30e6\u30fc\u30b6\u30fc\u306f\u3001\u8a8d\u8a3c\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u306b ",(0,a.kt)("a",r({parentName:"p"},{href:"#%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%82%AD%E3%83%BC"}),"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc")," \u3092\u5165\u529b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," \u8a2d\u5b9a\u3067\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u306f\u3001URL\u7d4c\u7531\u306e\u30a2\u30af\u30bb\u30b9\u306f\u3067\u304d\u307e\u305b\u3093\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4D \u307e\u305f\u306f 4D Server \u306e\u30e1\u30cb\u30e5\u30fc\u9805\u76ee (",(0,a.kt)("strong",{parentName:"p"},"\u30ec\u30b3\u30fc\u30c9 \uff1e \u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc")," \u307e\u305f\u306f ",(0,a.kt)("strong",{parentName:"p"},"\u30a6\u30a3\u30f3\u30c9\u30a6 \uff1e \u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc")," (4D Server) \u306a\u3069) \u304b\u3089 Web\u7ba1\u7406\u30da\u30fc\u30b8\u306b\u76f4\u63a5\u30a2\u30af\u30bb\u30b9\u3057\u305f\u5834\u5408\u3001\u30a2\u30af\u30bb\u30b9\u306f\u8a8d\u8a3c\u306a\u3057\u3067\u8a31\u53ef\u3055\u308c\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u81ea\u52d5\u7684\u306b\u8a8d\u8a3c\u3055\u308c\u307e\u3059\u3002"))),(0,a.kt)("p",null,'\u30a2\u30af\u30bb\u30b9\u304c\u8a31\u53ef\u3055\u308c\u308b\u3068\u30014D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4e0a\u306b "WebAdmin" \u6a29\u9650\u3092\u6301\u3064 Web',(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/WebServer/sessions"}),"\u30bb\u30c3\u30b7\u30e7\u30f3"),' \u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u30ab\u30ec\u30f3\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u304c "WebAdmin" \u6a29\u9650\u3092\u6301\u3063\u3066\u3044\u308b\u9650\u308a\u3001',(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u8981\u6c42\u3055\u308c\u305f\u30da\u30fc\u30b8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"))}u.isMDXComponent=!0},86374:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},30512:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},31031:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},56148:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png"},90418:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png"}}]);