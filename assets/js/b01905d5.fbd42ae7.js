"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35680],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>c});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},s=Object.keys(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),u=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,s=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(r),c=n,h=m["".concat(i,".").concat(c)]||m[c]||d[c]||s;return r?a.createElement(h,l(l({ref:e},p),{},{components:r})):a.createElement(h,l({ref:e},p))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var u=2;u<s;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71291:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});r(67294);var a=r(3905);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},n.apply(this,arguments)}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},s=Object.keys(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const l={id:"REST_requests",title:"About REST Requests"},o=void 0,i={unversionedId:"REST/REST_requests",id:"version-19-R7/REST/REST_requests",title:"About REST Requests",description:"The following structures are supported for REST requests:",source:"@site/versioned_docs/version-19-R7/REST/REST_requests.md",sourceDirName:"REST",slug:"/REST/REST_requests",permalink:"/docs/REST/REST_requests",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/REST/REST_requests.md",tags:[],version:"19-R7",frontMatter:{id:"REST_requests",title:"About REST Requests"},sidebar:"docs",previous:{title:"Calling ORDA class functions",permalink:"/docs/REST/classFunctions"},next:{title:"$catalog",permalink:"/docs/REST/catalog"}},u={},p=[{value:"REST Status and Response",id:"rest-status-and-response",level:2},{value:"Request Status",id:"request-status",level:3},{value:"Response",id:"response",level:3}],d={toc:p};function m(t){var{components:e}=t,r=s(t,["components"]);return(0,a.kt)("wrapper",n({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following structures are supported for REST requests:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"URI"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Resource (Input)"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"/? or &{filter} (Output)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"http://{servername}:{port}/rest/"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html"}),"{dataClass}")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/REST/filter"}),"$filter"),", ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/REST/attributes"}),"$attributes"),", ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/REST/skip"}),"$skip"),", ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/REST/method"}),"$method=..."),"...")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html"}),"{dataClass}"),"/",(0,a.kt)("a",n({parentName:"td"},{href:"entityset.html#entitysetentitysetid"}),"$entityset/{entitySetID}")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/REST/method"}),"$method=..."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html#dataclasskey"}),"{dataClass}({key})")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/REST/attributes"}),"$attributes"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html#dataclassattributevalue"}),"{dataClass}:{attribute}(value)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))),(0,a.kt)("p",null,"While all REST requests must contain the URI and Resource parameters, the Output (which filters the data returned) is optional."),(0,a.kt)("p",null,"As with all URIs, the first parameter is delimited by a \u201c?\u201d and all subsequent parameters by a \u201c&\u201d. For example:"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can place all values in quotes in case of ambiguity. For example, in our above example, we could have put the value for the last name in single quotes: \"lastName!='Jones'\".")),(0,a.kt)("p",null,"The parameters allow you to manipulate data in dataclasses in your 4D project. Besides retrieving data using ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," HTTP methods, you can also add, update, and delete entities in a dataclass using ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," HTTP methods."),(0,a.kt)("p",null,"If you want the data to be returned in an array instead of JSON, use the ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/REST/asArray"}),(0,a.kt)("inlineCode",{parentName:"a"},"$asArray"))," parameter."),(0,a.kt)("h2",n({},{id:"rest-status-and-response"}),"REST Status and Response"),(0,a.kt)("p",null,"With each REST request, the server returns the status and a response (with or without an error)."),(0,a.kt)("h3",n({},{id:"request-status"}),"Request Status"),(0,a.kt)("p",null,"With each REST request, you get the status along with the response. Below are a few of the statuses that can arise:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Status"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Request not processed (server might not be started).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"200 OK"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Request processed without error.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"401 Unauthorized"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Permissions error (check user's permissions).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"402 No session"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Maximum number of sessions has been reached.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"404 Not Found"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The data class is not accessible via REST or the entity set doesn't exist.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"500 Internal Server Error"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Error processing the REST request.")))),(0,a.kt)("h3",n({},{id:"response"}),"Response"),(0,a.kt)("p",null,"The response (in JSON format) varies depending on the request."),(0,a.kt)("p",null,"If an error arises, it will be sent along with the response from the server or it will be the response from the server."))}m.isMDXComponent=!0}}]);