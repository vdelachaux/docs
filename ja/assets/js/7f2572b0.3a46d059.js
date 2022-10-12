"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"upload",title:"$upload"},p=void 0,i={unversionedId:"REST/upload",id:"version-19/REST/upload",title:"$upload",description:"\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306e ID \u3092\u8fd4\u3057\u307e\u3059",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/ja/19/REST/upload",draft:!1,tags:[],version:"19",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/ja/19/REST/info"},next:{title:"dataClass",permalink:"/docs/ja/19/REST/dataClass"}},u={},s=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30b7\u30ca\u30ea\u30aa",id:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30b7\u30ca\u30ea\u30aa",level:2},{value:"4D HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u3063\u305f\u4f8b",id:"4d-http\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u3063\u305f\u4f8b",level:2}],c={toc:s};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306e ID \u3092\u8fd4\u3057\u307e\u3059"),(0,r.kt)("h2",a({},{id:"\u8aac\u660e"}),"\u8aac\u660e"),(0,r.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u3044\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308b\u5834\u5408\u306b\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092 POST \u3057\u307e\u3059\u3002 \u753b\u50cf\u306e\u5834\u5408\u306b\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"$rawPict=true")," \u3092\u6e21\u3057\u307e\u3059\u3002 \u305d\u306e\u4ed6\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u5834\u5408\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"$binary=true")," \u3092\u6e21\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306f 120\u79d2\u3067\u3059\u304c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"$timeout")," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306b\u4efb\u610f\u306e\u6570\u5024\u3092\u6e21\u3057\u3066\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",a({},{id:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30b7\u30ca\u30ea\u30aa"}),"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30b7\u30ca\u30ea\u30aa"),(0,r.kt)("p",null,"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30d4\u30af\u30c1\u30e3\u30fc\u5c5e\u6027\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u3001\u753b\u50cf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u3044\u5834\u5408\u3092\u8003\u3048\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u753b\u50cf (\u307e\u305f\u306f\u4efb\u610f\u306e\u30d0\u30a4\u30ca\u30ea\u30d5\u30a1\u30a4\u30eb) \u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001\u307e\u305a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3066\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30d5\u30a1\u30a4\u30eb\u81ea\u4f53\u306f\u30ea\u30af\u30a8\u30b9\u30c8\u306e ",(0,r.kt)("strong",{parentName:"p"},"\u30dc\u30c7\u30a3")," \u306b\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306b\u3001\u4e0b\u306e\u3088\u3046\u306a\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u9078\u629e\u3057\u305f\u753b\u50cf\u3092 4D Server \u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST  /rest/$upload?$rawPict=true")),(0,r.kt)("p",null,"\u305d\u306e\u7d50\u679c\u3001\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306f\u30d5\u30a1\u30a4\u30eb\u3092\u8b58\u5225\u3059\u308b ID \u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }')),(0,r.kt)("p",null,"\u3053\u306e\u753b\u50cf\u3092\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u8fd4\u3055\u308c\u305f ID \u3092\u4f7f\u3044 ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/ja/19/REST/method#methodupdate"}),(0,r.kt)("inlineCode",{parentName:"a"},"$method=update"))," \u3067\u753b\u50cf\u5c5e\u6027\u306b\u4fdd\u5b58\u3057\u307e\u3059. \u30ea\u30af\u30a8\u30b9\u30c8\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/?$method=update")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"POST \u30c7\u30fc\u30bf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),":"),(0,r.kt)("p",null,"\u66f4\u65b0\u5f8c\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u8fd4\u3055\u308c\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n')),(0,r.kt)("h2",a({},{id:"4d-http\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u3063\u305f\u4f8b"}),"4D HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u3063\u305f\u4f8b"),(0,r.kt)("p",null,"\u6b21\u306e\u4f8b\u3067\u306f\u30014D HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,r.kt)("em",{parentName:"p"},".pdf")," \u30d5\u30a1\u30a4\u30eb\u3092\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob\n\n\nARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" // REST\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6e96\u5099\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream"\n\nDOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) // \u30d0\u30a4\u30ca\u30ea\u306e\u8aad\u307f\u8fbc\u307f\n\n // \u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306e 1\u3064\u76ee\u306e POST\u30ea\u30af\u30a8\u30b9\u30c8\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)\n\nIf ($result=200) \n    var $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" // \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306e 2\u3064\u76ee\u306e\u30ea\u30af\u30a8\u30b9\u30c8\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n    ALERT(String($result)+" Error")\nEnd if\n')))}d.isMDXComponent=!0}}]);