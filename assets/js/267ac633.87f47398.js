"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"genInfo",title:"Getting Server Information"},l=void 0,s={unversionedId:"REST/genInfo",id:"version-18/REST/genInfo",title:"Getting Server Information",description:"You can get several information from the REST server:",source:"@site/versioned_docs/version-18/REST/genInfo.md",sourceDirName:"REST",slug:"/REST/genInfo",permalink:"/docs/18/REST/genInfo",draft:!1,tags:[],version:"18",frontMatter:{id:"genInfo",title:"Getting Server Information"},sidebar:"docs",previous:{title:"Users and sessions",permalink:"/docs/18/REST/authUsers"},next:{title:"Manipulating Data",permalink:"/docs/18/REST/manData"}},c={},u=[{value:"Catalog",id:"catalog",level:2},{value:"Cache info",id:"cache-info",level:2},{value:"queryPath and queryPlan",id:"querypath-and-queryplan",level:2}],p={toc:u};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can get several information from the REST server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the exposed datastores and their attributes"),(0,r.kt)("li",{parentName:"ul"},"the REST server cache contents, including user sessions.")),(0,r.kt)("h2",a({},{id:"catalog"}),"Catalog"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/18/REST/catalog"}),(0,r.kt)("inlineCode",{parentName:"a"},"$catalog")),", ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/18/REST/catalog#catalogdataclass"}),(0,r.kt)("inlineCode",{parentName:"a"},"$catalog/{dataClass}")),", or ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/18/REST/catalog#catalogall"}),(0,r.kt)("inlineCode",{parentName:"a"},"$catalog/$all"))," parameters to get the list of ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/18/REST/configuration#exposing-tables-and-fields"}),"exposed dataclasses and their attributes"),"."),(0,r.kt)("p",null,"To get the collection of all exposed dataclasses along with their attributes:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /rest/$catalog/$all")),(0,r.kt)("h2",a({},{id:"cache-info"}),"Cache info"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/18/REST/info"}),(0,r.kt)("inlineCode",{parentName:"a"},"$info"))," parameter to get information about the entity selections currently stored in 4D Server's cache as well as running user sessions. "),(0,r.kt)("h2",a({},{id:"querypath-and-queryplan"}),"queryPath and queryPlan"),(0,r.kt)("p",null,"Entity selections that are generated through queries can have the following two properties: ",(0,r.kt)("inlineCode",{parentName:"p"},"queryPlan")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"queryPath"),". To calculate and return these properties, you just need to add ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/18/REST/queryplan"}),(0,r.kt)("inlineCode",{parentName:"a"},"$queryPlan"))," and/or ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/18/REST/querypath"}),(0,r.kt)("inlineCode",{parentName:"a"},"$queryPath"))," in the REST request."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true')),(0,r.kt)("p",null,"These properties are objects that contain information about how the server performs composite queries internally through dataclasses and relations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"queryPlan"),": object containing the detailed description of the query just before it was executed (i.e., the planned query)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"queryPath"),": object containing the detailed description of the query as it was actually performed.")),(0,r.kt)("p",null,"The information recorded includes the query type (indexed and sequential) and each necessary subquery along with conjunction operators. Query paths also contain the number of entities found and the time required to execute each search criterion. You may find it useful to analyze this information while developing your application. Generally, the description of the query plan and its path are identical but they can differ because 4D can implement dynamic optimizations when a query is executed in order to improve performance. For example, the 4D engine can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low."))}d.isMDXComponent=!0}}]);