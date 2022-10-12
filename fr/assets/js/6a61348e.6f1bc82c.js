"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"querypath",title:"$querypath"},p=void 0,u={unversionedId:"REST/querypath",id:"version-19-R6/REST/querypath",title:"$querypath",description:"Retourne la requ\xeate telle qu'elle a \xe9t\xe9 ex\xe9cut\xe9e par 4D Server (par exemple, $querypath=true)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/REST/$querypath.md",sourceDirName:"REST",slug:"/REST/querypath",permalink:"/docs/fr/19-R6/REST/querypath",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"querypath",title:"$querypath"},sidebar:"docs",previous:{title:"$orderby",permalink:"/docs/fr/19-R6/REST/orderby"},next:{title:"$queryplan",permalink:"/docs/fr/19-R6/REST/queryplan"}},i={},s=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],c={toc:s};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Retourne la requ\xeate telle qu'elle a \xe9t\xe9 ex\xe9cut\xe9e par 4D Server (par exemple, ",(0,r.kt)("inlineCode",{parentName:"p"},"$querypath=true"),")"),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$querypath")," retourne la requ\xeate telle qu'elle a \xe9t\xe9 ex\xe9cut\xe9e par 4D Server. Si, par exemple, une partie de la requ\xeate pass\xe9e ne retourne aucune entit\xe9, le reste de la requ\xeate n'est pas ex\xe9cut\xe9. La requ\xeate lanc\xe9e est optimis\xe9e, comme vous pouvez le voir dans ce $ ",(0,r.kt)("inlineCode",{parentName:"p"},"$querypath"),"."),(0,r.kt)("p",null,"Pour plus d'informations sur les chemins de requ\xeate, reportez-vous \xe0 ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/19-R6/REST/genInfo#querypath-and-queryplan"}),"queryPlan ete queryPath"),"."),(0,r.kt)("p",null,"Dans la collection d'\xe9tapes, il existe un objet avec les propri\xe9t\xe9s suivantes qui d\xe9finissent la requ\xeate ex\xe9cut\xe9e :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'Requ\xeate ex\xe9cut\xe9e ou "AND" lorsqu\'il existe plusieurs \xe9tapes')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"time"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre de millisecondes n\xe9cessaires pour ex\xe9cuter la requ\xeate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"recordsfounds"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre d'enregistrements trouv\xe9s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"steps"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Collection"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Une collection avec un objet d\xe9finissant l'\xe9tape suivante du chemin de la requ\xeate")))),(0,r.kt)("h2",a({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,"Si vous ex\xe9cutez la requ\xeate suivante :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true')),(0,r.kt)("p",null,"Et si aucune entit\xe9 n'a \xe9t\xe9 trouv\xe9e, le chemin de la requ\xeate suivant sera retourn\xe9 si vous saisissez ce qui suit :"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/$querypath")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'__queryPath: {\n\n    steps: [\n        {\n            description: "AND",\n            time: 0,\n            recordsfounds: 0,\n            steps: [\n                {\n                    description: "Join on Table : Company : People.employer = Company.ID",\n                    time: 0,\n                    recordsfounds: 0,\n                    steps: [\n                        {\n                            steps: [\n                                {\n                                    description: "Company.name = acme",\n                                    time: 0,\n                                    recordsfounds: 0\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n\n}\n')),(0,r.kt)("p",null,"En revanche, si la premi\xe8re requ\xeate retourne plus d'une entit\xe9, la seconde sera ex\xe9cut\xe9e. Si nous ex\xe9cutons la requ\xeate suivante :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true')),(0,r.kt)("p",null,"Si au moins une entit\xe9 a \xe9t\xe9 trouv\xe9e, le chemin de la requ\xeate suivant sera retourn\xe9 si vous saisissez ce qui suit :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/$querypath")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'"__queryPath": {\n    "steps": [\n        {\n            "description": "AND",\n            "time": 1,\n            "recordsfounds": 4,\n            "steps": [\n                {\n                    "description": "Join on Table : Company : Employee.employer = Company.ID",\n                    "time": 1,\n                    "recordsfounds": 4,\n                    "steps": [\n                        {\n                            "steps": [\n                                {\n                                    "description": "Company.name LIKE a*",\n                                    "time": 0,\n                                    "recordsfounds": 2\n                                }\n                            ]\n                        }\n                    ]\n                },\n                {\n                    "description": "Employee.lastName # smith",\n                    "time": 0,\n                    "recordsfounds": 4\n                }\n            ]\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);