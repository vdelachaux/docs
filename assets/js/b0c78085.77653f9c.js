"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"atomic_$atonce",title:"$atomic/$atOnce"},c=void 0,s={unversionedId:"REST/atomic_$atonce",id:"version-18/REST/atomic_$atonce",title:"$atomic/$atOnce",description:"Allows the actions in the REST request to be in a transaction. If there are no errors, the transaction is validated. Otherwise, the transaction is cancelled.",source:"@site/versioned_docs/version-18/REST/$atomic_$atonce.md",sourceDirName:"REST",slug:"/REST/atomic_$atonce",permalink:"/docs/18/REST/atomic_$atonce",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/REST/$atomic_$atonce.md",tags:[],version:"18",frontMatter:{id:"atomic_$atonce",title:"$atomic/$atOnce"},sidebar:"docs",previous:{title:"$asArray",permalink:"/docs/18/REST/asArray"},next:{title:"$attributes",permalink:"/docs/18/REST/attributes"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],u={toc:p};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Allows the actions in the REST request to be in a transaction. If there are no errors, the transaction is validated. Otherwise, the transaction is cancelled."),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"When you have multiple actions together, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"$atomic/$atOnce")," to make sure that none of the actions are completed if one of them fails. You can use either ",(0,r.kt)("inlineCode",{parentName:"p"},"$atomic")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"$atOnce"),"."),(0,r.kt)("h2",a({},{id:"example"}),"Example"),(0,r.kt)("p",null,"We call the following REST request in a transaction."),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee?$method=update&$atomic=true")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"POST data"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'[\n{\n    "__KEY": "200",\n    "firstname": "John"\n},\n{\n    "__KEY": "201",\n    "firstname": "Harry"\n}\n]\n')),(0,r.kt)("p",null,"We get the following error in the second entity and therefore the first entity is not saved either:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n    "__STATUS": {\n        "success": true\n    },\n    "__KEY": "200",\n    "__STAMP": 1,\n    "uri": "/rest/Employee(200)",\n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 200,\n    "firstname": "John",\n    "lastname": "Keeling",\n    "isWoman": false,\n    "numberOfKids": 2,\n    "addressID": 200,\n    "gender": false,\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(200)",\n            "__KEY": "200"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Cannot find entity with \\"201\\" key in the \\"Employee\\" dataclass",\n            "componentSignature": "dbmg",\n            "errCode": 1542\n        }\n    ]\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Even though the salary for the first entity has a value of 45000, this value was not saved to the server and the ",(0,r.kt)("em",{parentName:"p"},"timestamp (__STAMP)")," was not modified either. If we reload the entity, we will see the previous value.")))}m.isMDXComponent=!0}}]);