"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19796],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?t.createElement(f,i(i({ref:n},c),{},{components:r})):t.createElement(f,i({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32329:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var t=r(3905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"authUsers",title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3"},s=void 0,l={unversionedId:"REST/authUsers",id:"version-18/REST/authUsers",title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3",description:"\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/ja/18/REST/authUsers",draft:!1,tags:[],version:"18",frontMatter:{id:"authUsers",title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3"},sidebar:"docs",previous:{title:"\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a",permalink:"/docs/ja/18/REST/configuration"},next:{title:"\u30b5\u30fc\u30d0\u30fc\u60c5\u5831\u306e\u53d6\u5f97",permalink:"/docs/ja/18/REST/genInfo"}},u={},c=[{value:"\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c",id:"\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c",level:2},{value:"\u30bb\u30c3\u30b7\u30e7\u30f3cookie",id:"\u30bb\u30c3\u30b7\u30e7\u30f3cookie",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:3}],p={toc:c};function d(e){var{components:n}=e,r=o(e,["components"]);return(0,t.kt)("wrapper",a({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",a({},{id:"\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c"}),"\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c"),(0,t.kt)("p",null,"4D Server\u4e0a\u3067 REST\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u304f\u306b\u306f\u3001\u307e\u305a\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u304c\u8a8d\u8a3c\u3055\u308c\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"),(0,t.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u306b\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092 ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/ja/18/REST/directory#directorylogin"}),(0,t.kt)("inlineCode",{parentName:"a"},"$directory/login"))," \u306b\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,t.kt)("p",null,"\u30e6\u30fc\u30b6\u30fc\u306e\u30ed\u30b0\u30a4\u30f3\u3068\u540c\u6642\u306b\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u958b\u304b\u308c\u307e\u3059\u3002 \u4ee5\u964d\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u304a\u3051\u308b\u30bb\u30c3\u30b7\u30e7\u30f3cookie \u306e\u6271\u3044\u65b9\u306b\u3064\u3044\u3066\u306f\u3001\u5f8c\u8ff0\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,t.kt)("p",null,"\u30bb\u30c3\u30b7\u30e7\u30f3\u306f\u3001\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3059\u308b\u3068\u81ea\u52d5\u7d42\u4e86\u3057\u307e\u3059\u3002"),(0,t.kt)("h2",a({},{id:"\u30bb\u30c3\u30b7\u30e7\u30f3cookie"}),"\u30bb\u30c3\u30b7\u30e7\u30f3cookie"),(0,t.kt)("p",null,"4D Server\u4e0a\u3067\u306f\u3001\u5404 REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u5c02\u7528\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u4ecb\u3057\u3066\u51e6\u7406\u3055\u308c\u307e\u3059\u3002"),(0,t.kt)("p",null,"\u6700\u521d\u306e\u6709\u52b9\u306a REST\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u4fe1\u3059\u308b\u3068\u3001\u30b5\u30fc\u30d0\u30fc\u306f\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u751f\u6210\u3057\u3001",(0,t.kt)("strong",{parentName:"p"},'"Set-Cookie" \u30ec\u30b9\u30dd\u30f3\u30b9\u30d8\u30c3\u30c0\u30fc')," \u306b\u3001\u30bb\u30c3\u30b7\u30e7\u30f3UUID \u3092\u683c\u7d0d\u3057\u305f ",(0,t.kt)("inlineCode",{parentName:"p"},"WASID4D")," \u3068\u3044\u3046\u540d\u524d\u306e\u30bb\u30c3\u30b7\u30e7\u30f3cookie \u3092\u8fd4\u3057\u307e\u3059\u3002\u4f8b:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{}),"WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3\n")),(0,t.kt)("p",null,"\u4ee5\u964d\u306e REST\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u304a\u3044\u3066\u306f\u3001",(0,t.kt)("strong",{parentName:"p"},'"Cookie" \u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u30fc')," \u306b\u3053\u306e cookie \u3092\u542b\u3081\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u540c\u3058\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u5229\u7528\u3057\u7d9a\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u305d\u3046\u3057\u306a\u3044\u5834\u5408\u306b\u306f\u65b0\u898f\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u958b\u304b\u308c\u308b\u3053\u3068\u3068\u306a\u308a\u3001\u3057\u305f\u304c\u3063\u3066\u30e9\u30a4\u30bb\u30f3\u30b9\u304c\u5225\u9014\u6d88\u8cbb\u3055\u308c\u307e\u3059\u3002"),(0,t.kt)("h3",a({},{id:"\u4f8b\u984c"}),"\u4f8b\u984c"),(0,t.kt)("p",null,"\u5b9f\u969b\u306e\u3068\u3053\u308d\u3001\u30bb\u30c3\u30b7\u30e7\u30f3cookie \u306e\u6271\u3044\u306f HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u5bc4\u308a\u307e\u3059\u3002 \u3053\u306e\u4f8b\u984c\u3067\u306f\u30014D \u306e ",(0,t.kt)("inlineCode",{parentName:"p"},"HTTP Request")," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3063\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u5834\u5408\u306b\u3001\u30bb\u30c3\u30b7\u30e7\u30f3cookie \u3092\u62bd\u51fa\u3057\u3001\u518d\u9001\u4fe1\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'// \u30d8\u30c3\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\nARRAY TEXT(headerNames;0)\nARRAY TEXT(headerValues;0)\n\nAPPEND TO ARRAY(headerNames;"username-4D")\nAPPEND TO ARRAY(headerNames;"session-4D-length")\nAPPEND TO ARRAY(headerNames;"hashed-password-4D")\n\nAPPEND TO ARRAY(headerValues;"kind user")\nAPPEND TO ARRAY(headerValues;"60")\nAPPEND TO ARRAY(headerValues;Generate digest("test";4D digest))\n\nC_OBJECT($response)\n$response:=New object\n\n// \u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306f "kind user" \u3068\u3044\u3046\u30e6\u30fc\u30b6\u30fc\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u304d\u307e\u3059\n$result:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/$directory/login";"";\\  \n    $response;headerNames;headerValues;*)\n\n\n// \u4ee5\u964d\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u30fc\u7528\u306b cookie WASID4D \u306e\u307f\u3092\u683c\u7d0d\u3057\u305f\u914d\u5217\u3092\u4f5c\u6210\u3057\u307e\u3059\nbuildHeader(->headerNames;->headerValues)\n\n// \u6b21\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u65b0\u898f\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u304d\u307e\u305b\u3093\n$result:=HTTP Request(HTTP GET method;"127.0.0.1:8044/rest/$catalog";"";\\  \n    $response;headerNames;headerValues;*)\n')),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'// buildHeader \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9  \n\nC_POINTER($pointerNames;$1;$pointerValues;$2)\nARRAY TEXT($headerNames;0)\nARRAY TEXT($headerValues;0)\n\nCOPY ARRAY($1->;$headerNames)\nCOPY ARRAY($2->;$headerValues)\n\n$indexCookie:=Find in array($headerValues;"WASID4D@")\n$cookie:=$headerValues{$indexCookie}\n$start:=Position("WASID4D";$cookie)\n$end:=Position(";";$cookie)\n$uuid:= Substring($cookie;$start;$end-$start)\n\nARRAY TEXT($headerNames;1)\nARRAY TEXT($headerValues;1)\n\n$headerNames{1}:="Cookie"\n$headerValues{1}:=$uuid\n\nCOPY ARRAY($headerNames;$1->)\nCOPY ARRAY($headerValues;$2->)\n')))}d.isMDXComponent=!0}}]);