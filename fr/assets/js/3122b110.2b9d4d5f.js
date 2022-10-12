"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34008],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var A=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,A)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,A,n=function(e,t){if(null==e)return{};var r,A,n={},a=Object.keys(e);for(A=0;A<a.length;A++)r=a[A],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(A=0;A<a.length;A++)r=a[A],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=A.createContext({}),s=function(e){var t=A.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return A.createElement(o.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},c=A.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,m=c["".concat(o,".").concat(d)]||c[d]||i[d]||a;return r?A.createElement(m,u(u({ref:t},p),{},{components:r})):A.createElement(m,u({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var s=2;s<a;s++)u[s]=r[s];return A.createElement.apply(null,u)}return A.createElement.apply(null,r)}c.displayName="MDXCreateElement"},24475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>u,metadata:()=>o,toc:()=>p});r(67294);var A=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var A in r)Object.prototype.hasOwnProperty.call(r,A)&&(e[A]=r[A])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,A,n=function(e,t){if(null==e)return{};var r,A,n={},a=Object.keys(e);for(A=0;A<a.length;A++)r=a[A],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(A=0;A<a.length;A++)r=a[A],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const u={id:"gettingStarted",title:"Prise en main"},l=void 0,o={unversionedId:"REST/gettingStarted",id:"version-19-R6/REST/gettingStarted",title:"Prise en main",description:"4D vous fournit un serveur REST puissant, qui permet d'acc\xe9der directement aux donn\xe9es stock\xe9es dans vos applications 4D.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/REST/gettingStarted.md",sourceDirName:"REST",slug:"/REST/gettingStarted",permalink:"/docs/fr/19-R6/REST/gettingStarted",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"gettingStarted",title:"Prise en main"},sidebar:"docs",previous:{title:"Using preemptive web processes",permalink:"/docs/fr/19-R6/WebServer/preemptiveWeb"},next:{title:"Configuration du serveur",permalink:"/docs/fr/19-R6/REST/configuration"}},s={},p=[{value:"Cr\xe9er et configurer le projet 4D",id:"cr\xe9er-et-configurer-le-projet-4d",level:2},{value:"Acc\xe9der aux donn\xe9es 4D avec le navigateur",id:"acc\xe9der-aux-donn\xe9es-4d-avec-le-navigateur",level:2}],i={toc:p};function c(e){var{components:t}=e,u=a(e,["components"]);return(0,A.kt)("wrapper",n({},i,u,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"4D vous fournit un serveur REST puissant, qui permet d'acc\xe9der directement aux donn\xe9es stock\xe9es dans vos applications 4D."),(0,A.kt)("p",null,"Le serveur REST est inclus dans 4D et 4D Server et automatiquement disponible dans vos applications 4D ",(0,A.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/REST/configuration"}),"une fois configur\xe9"),"."),(0,A.kt)("p",null,"Cette section est destin\xe9e \xe0 vous familiariser avec la fonctionnalit\xe9 REST \xe0 l'aide d'un exemple simple. Nous allons :"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"cr\xe9er et configurer un projet d'application 4D basique"),(0,A.kt)("li",{parentName:"ul"},"acc\xe9der aux donn\xe9es du projet 4D via REST \xe0 l'aide d'un navigateur standard.")),(0,A.kt)("p",null,"Pour simplifier l'exemple, nous allons utiliser 4D et un navigateur qui s'ex\xe9cutent sur la m\xeame machine. Bien entendu, vous pouvez \xe9galement utiliser une architecture distante."),(0,A.kt)("h2",n({},{id:"cr\xe9er-et-configurer-le-projet-4d"}),"Cr\xe9er et configurer le projet 4D"),(0,A.kt)("ol",null,(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},'Lancez votre application 4D ou 4D Server et cr\xe9ez un nouveau projet. Vous pouvez, par exemple, le nommer "Emp4D".')),(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"Dans l'\xe9diteur de structure, cr\xe9ez une table ","[Employees]"," et ajoutez-y les champs suivants :"),(0,A.kt)("ul",{parentName:"li"},(0,A.kt)("li",{parentName:"ul"},"Lastname (Alpha)"),(0,A.kt)("li",{parentName:"ul"},"Firstname (Alpha)"),(0,A.kt)("li",{parentName:"ul"},"Salary (Longint)")))),(0,A.kt)("p",null,(0,A.kt)("img",{src:r(88969).Z,width:"122",height:"169"})),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},'L\'option "Exposer une ressource REST" est coch\xe9e par d\xe9faut pour la table et pour chaque champ ; ne modifiez pas ce param\xe8tre.')),(0,A.kt)("ol",n({},{start:3}),(0,A.kt)("li",{parentName:"ol"},"Cr\xe9ez des formulaires, puis cr\xe9ez quelques employ\xe9s :")),(0,A.kt)("p",null,(0,A.kt)("img",{src:r(36656).Z,width:"812",height:"185"})),(0,A.kt)("ol",n({},{start:4}),(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"Affichez la page ",(0,A.kt)("strong",{parentName:"p"},"Web > Web Features")," de la bo\xeete de dialogue des Propri\xe9t\xe9s et ",(0,A.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/REST/configuration#starting-the-rest-server"}),"cochez l'option Exposer en tant que serveur REST"),".")),(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"Dans le menu ",(0,A.kt)("strong",{parentName:"p"},"Ex\xe9cuter"),", s\xe9lectionnez ",(0,A.kt)("strong",{parentName:"p"},"D\xe9marrer le serveur Web")," (si n\xe9cessaire), puis s\xe9lectionnez ",(0,A.kt)("strong",{parentName:"p"},"Tester le serveur Web"),"."))),(0,A.kt)("p",null,"4D affiche la page d'accueil par d\xe9faut du serveur Web 4D."),(0,A.kt)("h2",n({},{id:"acc\xe9der-aux-donn\xe9es-4d-avec-le-navigateur"}),"Acc\xe9der aux donn\xe9es 4D avec le navigateur"),(0,A.kt)("p",null,"Vous pouvez d\xe9sormais lire et modifier des donn\xe9es dans 4D uniquement via les requ\xeates REST."),(0,A.kt)("p",null,"Toute requ\xeate d'URL 4D REST commence par ",(0,A.kt)("inlineCode",{parentName:"p"},"/ rest"),", pour \xeatre ins\xe9r\xe9e apr\xe8s la zone ",(0,A.kt)("inlineCode",{parentName:"p"},"adress:port"),". Par exemple, pour voir le contenu du datastore 4D, vous pouvez \xe9crire :"),(0,A.kt)("pre",null,(0,A.kt)("code",n({parentName:"pre"},{}),"http://127.0.0.1/rest/$catalog\n")),(0,A.kt)("p",null,"Le serveur REST r\xe9pond :"),(0,A.kt)("pre",null,(0,A.kt)("code",n({parentName:"pre"},{}),'{\n    "__UNIQID": "96A49F7EF2ABDE44BF32059D9ABC65C1",\n    "dataClasses": [\n        {\n            "name": "Employees",\n            "uri": "/rest/$catalog/Employees",\n            "dataURI": "/rest/Employees"\n        }\n    ]\n}\n')),(0,A.kt)("p",null,"Cela signifie que le datastore contient le dataclass Employees. Vous pouvez voir les attributs de la dataclass en tapant :"),(0,A.kt)("pre",null,(0,A.kt)("code",n({parentName:"pre"},{}),"/rest/$catalog/Employees\n")),(0,A.kt)("p",null,"Si vous souhaitez obtenir toutes les entit\xe9s de la dataclass Employee, vous pouvez \xe9crire :"),(0,A.kt)("pre",null,(0,A.kt)("code",n({parentName:"pre"},{}),"/rest/Employees\n")),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"R\xe9ponse :")),(0,A.kt)("pre",null,(0,A.kt)("code",n({parentName:"pre"},{}),'{\n    "__entityModel": "Employees",\n    "__GlobalStamp": 0,\n    "__COUNT": 3,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "1",\n            "__TIMESTAMP": "2020-01-07T17:07:52.467Z",\n            "__STAMP": 2,\n            "ID": 1,\n            "Lastname": "Brown",\n            "Firstname": "Michael",\n            "Salary": 25000\n        },\n        {\n            "__KEY": "2",\n            "__TIMESTAMP": "2020-01-07T17:08:14.387Z",\n            "__STAMP": 2,\n            "ID": 2,\n            "Lastname": "Jones",\n            "Firstname": "Maryanne",\n            "Salary": 35000\n        },\n        {\n            "__KEY": "3",\n            "__TIMESTAMP": "2020-01-07T17:08:34.844Z",\n            "__STAMP": 2,\n            "ID": 3,\n            "Lastname": "Smithers",\n            "Firstname": "Jack",\n            "Salary": 41000\n        }\n    ],\n    "__SENT": 3\n}\n')),(0,A.kt)("p",null,'Il existe plusieurs possibilit\xe9s pour filtrer les donn\xe9es \xe0 recevoir. Par exemple, pour obtenir uniquement la valeur de l\'attribut "Lastname" de la 2\xe8me entit\xe9, vous pouvez simplement \xe9crire :'),(0,A.kt)("pre",null,(0,A.kt)("code",n({parentName:"pre"},{}),"/rest/Employees(2)/Lastname\n")),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"R\xe9ponse :")),(0,A.kt)("pre",null,(0,A.kt)("code",n({parentName:"pre"},{}),'{\n    "__entityModel": "Employees",\n    "__KEY": "2",\n    "__TIMESTAMP": "2020-01-07T17:08:14.387Z",\n    "__STAMP": 2,\n    "Lastname": "Jones"\n}\n')),(0,A.kt)("p",null,"L'",(0,A.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/REST/REST_requests"}),"API REST")," de 4D fournit plusieurs commandes pour interagir avec les applications 4D."))}c.isMDXComponent=!0},88969:(e,t,r)=>{r.d(t,{Z:()=>A});const A="data:image/png;base64,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"},36656:(e,t,r)=>{r.d(t,{Z:()=>A});const A="data:image/png;base64,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"}}]);