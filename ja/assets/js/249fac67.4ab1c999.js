"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1700],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,k=c["".concat(i,".").concat(d)]||c[d]||s[d]||l;return r?n.createElement(k,p(p({ref:t},u),{},{components:r})):n.createElement(k,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var m=2;m<l;m++)p[m]=r[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},56292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"filter",title:"$filter"},o=void 0,i={unversionedId:"REST/filter",id:"version-18/REST/filter",title:"$filter",description:"\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u304c\u8fd4\u3059\u30c7\u30fc\u30bf\u3092\u30d5\u30a3\u30eb\u30bf\u30fc\u3057\u307e\u3059 (\u4f8b: $filter=\"firstName!='' AND salary>30000\")",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/REST/$filter.md",sourceDirName:"REST",slug:"/REST/filter",permalink:"/docs/ja/18/REST/filter",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/REST/$filter.md",tags:[],version:"18",frontMatter:{id:"filter",title:"$filter"},sidebar:"docs",previous:{title:"$expand",permalink:"/docs/ja/18/REST/expand"},next:{title:"$imageformat",permalink:"/docs/ja/18/REST/imageformat"}},m={},u=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u5358\u7d14\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528",id:"\u5358\u7d14\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528",level:3},{value:"\u8907\u96d1\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528",id:"\u8907\u96d1\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528",level:3},{value:"params\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528",id:"params\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u6bd4\u8f03\u6f14\u7b97\u5b50",id:"\u6bd4\u8f03\u6f14\u7b97\u5b50",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:2}],s={toc:u};function c(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u304c\u8fd4\u3059\u30c7\u30fc\u30bf\u3092\u30d5\u30a3\u30eb\u30bf\u30fc\u3057\u307e\u3059 ",(0,n.kt)("em",{parentName:"p"},"(\u4f8b"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"$filter=\"firstName!='' AND salary>30000\""),")"),(0,n.kt)("h2",a({},{id:"\u8aac\u660e"}),"\u8aac\u660e"),(0,n.kt)("p",null,"\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u3063\u3066\u3001\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u304c\u8fd4\u3059\u30c7\u30fc\u30bf\u306b\u5bfe\u3059\u308b\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h3",a({},{id:"\u5358\u7d14\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528"}),"\u5358\u7d14\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528"),(0,n.kt)("p",null,"\u30d5\u30a3\u30eb\u30bf\u30fc\u306f\u6b21\u306e\u8981\u7d20\u3067\u69cb\u6210\u3055\u308c\u307e\u3059:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"{attribute} {comparator} {value}")),(0,n.kt)("p",null,"\u305f\u3068\u3048\u3070 ",(0,n.kt)("inlineCode",{parentName:"p"},'$filter="firstName=john"')," \u306e\u5834\u5408\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"firstName")," \u306f ",(0,n.kt)("strong",{parentName:"p"},"\u5c5e\u6027 (attribute)"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"=")," \u306f ",(0,n.kt)("strong",{parentName:"p"},"\u6bd4\u8f03\u6f14\u7b97\u5b50 (comparator)"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"john")," \u306f ",(0,n.kt)("strong",{parentName:"p"},"\u5024 (value)")," \u306b\u3042\u305f\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",a({},{id:"\u8907\u96d1\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528"}),"\u8907\u96d1\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u5229\u7528"),(0,n.kt)("p",null,"\u8907\u96d1\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306f\u8907\u6570\u306e\u5358\u7d14\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u306e\u7d44\u307f\u5408\u308f\u305b\u3067\u69cb\u6210\u3055\u308c\u307e\u3059:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}")),(0,n.kt)("p",null,"\u305f\u3068\u3048\u3070: ",(0,n.kt)("inlineCode",{parentName:"p"},'$filter="firstName=john AND salary>20000"')," \uff08",(0,n.kt)("inlineCode",{parentName:"p"},"firstName")," \u304a\u3088\u3073 ",(0,n.kt)("inlineCode",{parentName:"p"},"salary")," \u306f Employee \u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u306e\u5c5e\u6027\u3067\u3059)\u3002"),(0,n.kt)("h3",a({},{id:"params\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528"}),"params\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528"),(0,n.kt)("p",null,"4D \u306e params\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params='",'["{value1}","{value2}"]',"\"'")),(0,n.kt)("p",null,"\u305f\u3068\u3048\u3070: ",(0,n.kt)("inlineCode",{parentName:"p"},'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\'')," (firstName \u304a\u3088\u3073 salary \u306f Employee \u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u306e\u5c5e\u6027\u3067\u3059)\u3002"),(0,n.kt)("p",null,"4D \u306b\u304a\u3044\u3066\u30c7\u30fc\u30bf\u3092\u30af\u30a8\u30ea\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.ja.html"}),"dataClass.query()")," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5358\u4e00\u5f15\u7528\u7b26 (') \u307e\u305f\u306f\u4e8c\u91cd\u5f15\u7528\u7b26 (\") \u3092\u633f\u5165\u3059\u308b\u306b\u306f\u3001\u5bfe\u5fdc\u3059\u308b\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u4f7f\u3063\u3066\u305d\u308c\u3089\u3092\u30a8\u30b9\u30b1\u30fc\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:"),(0,n.kt)("p",{parentName:"blockquote"},"\u5358\u4e00\u5f15\u7528\u7b26 ('): \\u0027 \u4e8c\u91cd\u5f15\u7528\u7b26 (\"): \\u0022"),(0,n.kt)("p",{parentName:"blockquote"},"\u305f\u3068\u3048\u3070\u3001\u5358\u4e00\u5f15\u7528\u7b26\u304c\u542b\u307e\u308c\u308b\u5024\u3092 ",(0,n.kt)("em",{parentName:"p"},"params")," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u6e21\u3059\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\'')),(0,n.kt)("p",{parentName:"blockquote"},"\u5024\u3092\u76f4\u63a5\u6e21\u3059\u5834\u5408\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u3051\u307e\u3059: ",(0,n.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'))),(0,n.kt)("h2",a({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,n.kt)("p",null,"\u540c\u3058\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u306b\u5c5e\u3057\u3066\u3044\u308b\u5c5e\u6027\u306f\u305d\u306e\u307e\u307e\u53d7\u3051\u6e21\u305b\u307e\u3059 (",(0,n.kt)("em",{parentName:"p"},"\u4f8b"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"firstName"),")\u3002 \u5225\u306e\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u3092\u30af\u30a8\u30ea\u3059\u308b\u5834\u5408\u306f\u3001\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u540d\u3068\u5c5e\u6027\u3001\u3064\u307e\u308a\u30d1\u30b9\u3092\u6e21\u3055\u306a\u304f\u3066\u306f\u306a\u308a\u307e\u305b\u3093 (",(0,n.kt)("em",{parentName:"p"},"\u4f8b"),": employer.name)\u3002 \u5c5e\u6027\u540d\u306e\u6587\u5b57\u306e\u5927\u5c0f\u306f\u533a\u5225\u3055\u308c\u307e\u3059 (",(0,n.kt)("inlineCode",{parentName:"p"},"firstName")," \u3068 ",(0,n.kt)("inlineCode",{parentName:"p"},"FirstName")," \u306f\u7570\u306a\u308a\u307e\u3059)\u3002"),(0,n.kt)("p",null,'\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u578b\u5c5e\u6027\u3082\u30c9\u30c3\u30c8\u8a18\u6cd5\u306b\u3088\u3063\u3066\u30af\u30a8\u30ea\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001"objAttribute" \u3068\u3044\u3046\u540d\u79f0\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u304c\u6b21\u306e\u69cb\u9020\u3092\u6301\u3063\u3066\u3044\u305f\u5834\u5408:'),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),'{\n    prop1: "\u4e00\u3064\u76ee\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u3059",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n')),(0,n.kt)("p",null,"\u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30af\u30a8\u30ea\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/Person/?filter="objAttribute.prop2 == 9181"')),(0,n.kt)("h2",a({},{id:"\u6bd4\u8f03\u6f14\u7b97\u5b50"}),"\u6bd4\u8f03\u6f14\u7b97\u5b50"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u6bd4\u8f03\u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u6bd4\u8f03\u6f14\u7b97\u5b50"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"="),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u7b49\u3057\u3044")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"!="),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u7b49\u3057\u304f\u306a\u3044")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),">"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u5927\u304d\u3044")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),">="),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u4ee5\u4e0a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"<"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u5c0f\u3055\u3044")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"<="),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u4ee5\u4e0b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"begin"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u524d\u65b9\u4e00\u81f4")))),(0,n.kt)("h2",a({},{id:"\u4f8b\u984c"}),"\u4f8b\u984c"),(0,n.kt)("p",null,'\u540d\u5b57\u304c "j" \u3067\u59cb\u307e\u308b\u793e\u54e1\u3092\u691c\u7d22\u3057\u307e\u3059:'),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),' GET  /rest/Employee?$filter="lastName begin j"\n')),(0,n.kt)("p",null,"Employee \u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u3088\u308a\u3001\u7d66\u4e0e\u304c 20,000 \u8d85\u3067\u3001\u304b\u3064 Acme \u3068\u3044\u3046\u540d\u79f0\u306e\u4f01\u696d\u3067\u50cd\u3044\u3066\u3044\u306a\u3044\u793e\u54e1\u3092\u691c\u7d22\u3057\u307e\u3059:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n')),(0,n.kt)("p",null,"Person \u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u3088\u308a\u3001anotherobj \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306e number \u30d7\u30ed\u30d1\u30c6\u30a3\u304c 50 \u3088\u308a\u5927\u304d\u3044\u4eba\u306e\u30c7\u30fc\u30bf\u3092\u691c\u7d22\u3057\u307e\u3059:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n')))}c.isMDXComponent=!0}}]);