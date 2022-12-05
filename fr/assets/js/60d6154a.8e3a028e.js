"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,b=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(b,u(u({ref:t},s),{},{components:n})):r.createElement(b,u({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>u,metadata:()=>p,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"compute",title:"$compute"},o=void 0,p={unversionedId:"REST/compute",id:"version-19-R6/REST/compute",title:"$compute",description:"Calculez des attributs sp\xe9cifiques (par exemple, Employee/salary/?$compute=sum) ou dans le cas d'un attribut Objet (par exemple, Employee/objectAtt.property1/?$compute=sum)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/REST/$compute.md",sourceDirName:"REST",slug:"/REST/compute",permalink:"/docs/fr/19-R6/REST/compute",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R6/REST/$compute.md",tags:[],version:"19-R6",frontMatter:{id:"compute",title:"$compute"},sidebar:"docs",previous:{title:"$binary",permalink:"/docs/fr/19-R6/REST/binary"},next:{title:"$distinct",permalink:"/docs/fr/19-R6/REST/distinct"}},i={},s=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],c={toc:s};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Calculez des attributs sp\xe9cifiques (par exemple, ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee/salary/?$compute=sum)")," ou dans le cas d'un attribut Objet (par exemple, Employee/objectAtt.property1/?$compute=sum)"),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"Ce param\xe8tre vous permet de r\xe9aliser des calculs avec vos donn\xe9es."),(0,r.kt)("p",null,"Si vous souhaitez effectuer un calcul avec un attribut, saisissez ce qui suit :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=$all")),(0,r.kt)("p",null,"Si vous souhaitez passer un attribut Objet, vous devez passer l'une de ses propri\xe9t\xe9s. Par exemple :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/objectAtt.property1/?$compute=$all")),(0,r.kt)("p",null,"Vous pouvez utiliser l'un des mots cl\xe9s suivants :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Mot-cl\xe9"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"$all"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Un objet JSON qui d\xe9finit toutes les fonctions de l'attribut (moyenne, nombre, min, max et somme pour les attributs de type Num\xe9rique et count, min et max pour les attributs de type Cha\xeene")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"average"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Obtenir la moyenne d'un attribut num\xe9rique")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"count"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Obtenir le nombre total dans la collection ou la dataclass (dans les deux cas, vous devez sp\xe9cifier un attribut)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"min"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Obtenir la valeur minimale d'un attribut num\xe9rique ou la plus petite valeur d'un attribut de type Cha\xeene")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"max"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Obtenir la valeur maximale d'un attribut num\xe9rique ou la plus grande valeur d'un attribut de type Cha\xeene")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"sum"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Obtenir la somme d'un attribut num\xe9rique")))),(0,r.kt)("h2",a({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,"Si vous souhaitez obtenir tous les calculs pour un attribut de type Num\xe9rique, vous pouvez \xe9crire :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=$all")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n')),(0,r.kt)("p",null,"Si vous souhaitez obtenir tous les calculs pour un attribut de type Cha\xeene, vous pouvez \xe9crire :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/firstName/?$compute=$all")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n')),(0,r.kt)("p",null,"Si vous souhaitez obtenir un calcul avec un attribut, vous pouvez \xe9crire ce qui suit :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=sum")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse")," :"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"235000")),(0,r.kt)("p",null,"Si vous souhaitez effectuer un calcul avec un attribut Objet, vous pouvez saisir ce qui suit :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/objectAttribute.property1/?$compute=sum")),(0,r.kt)("p",null,"R\xe9ponse :"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"45")))}m.isMDXComponent=!0}}]);