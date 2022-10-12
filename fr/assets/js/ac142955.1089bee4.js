"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=a(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var a=2;a<i;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"control-flow",title:"Conditions et boucles"},l=void 0,u={unversionedId:"Concepts/control-flow",id:"version-18/Concepts/control-flow",title:"Conditions et boucles",description:"Quelle que soit la simplicit\xe9 ou la complexit\xe9 d\u2019une m\xe9thode, vous utiliserez toujours un ou plusieurs types de structure de programmation. Les structures de programmation d\xe9terminent si et dans quel ordre les lignes d\u2019instructions sont ex\xe9cut\xe9es \xe0 l\u2019int\xe9rieur d\u2019une m\xe9thode. Il existe trois types de structures :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/flow-control.md",sourceDirName:"Concepts",slug:"/Concepts/control-flow",permalink:"/docs/fr/18/Concepts/control-flow",draft:!1,tags:[],version:"18",frontMatter:{id:"control-flow",title:"Conditions et boucles"},sidebar:"docs",previous:{title:"Objets et collections partag\xe9s",permalink:"/docs/fr/18/Concepts/shared"},next:{title:"Structures conditionnelles",permalink:"/docs/fr/18/Concepts/branching"}},a={},c=[],p={toc:c};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Quelle que soit la simplicit\xe9 ou la complexit\xe9 d\u2019une m\xe9thode, vous utiliserez toujours un ou plusieurs types de structure de programmation. Les structures de programmation d\xe9terminent si et dans quel ordre les lignes d\u2019instructions sont ex\xe9cut\xe9es \xe0 l\u2019int\xe9rieur d\u2019une m\xe9thode. Il existe trois types de structures :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"S\xe9quentielle")," : une structure s\xe9quentielle est une structure simple, lin\xe9aire. Une s\xe9quence est une s\xe9rie d\u2019instructions que 4D ex\xe9cute les unes apr\xe8s les autres, de la premi\xe8re \xe0 la derni\xe8re. Une instruction d'une ligne, fr\xe9quemment utilis\xe9e pour les m\xe9thodes objet, est le cas le plus simple de structure s\xe9quentielle. Par exemple : ",(0,n.kt)("inlineCode",{parentName:"li"},"[Personnes]Nom:=Uppercase([Personnes]Nom)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",o({parentName:"strong"},{href:"/docs/fr/18/Concepts/branching"}),"Conditionnelle"))," : une structure conditionnelle permet aux m\xe9thodes de tester une condition et d\u2019ex\xe9cuter des s\xe9quences d\u2019instructions diff\xe9rentes en fonction du r\xe9sultat. La condition est une expression bool\xe9enne, c\u2019est-\xe0-dire pouvant retourner VRAI ou FAUX. L\u2019une des structures conditionnelles est la structure ",(0,n.kt)("inlineCode",{parentName:"li"},"If...Else...End if"),", qui aiguille le d\xe9roulement du programme vers une s\xe9quence ou une autre. L\u2019autre structure conditionnelle est la structure ",(0,n.kt)("inlineCode",{parentName:"li"},"Case of...Else...End case"),", qui aiguille le programme vers une s\xe9quence parmi une ou plusieurs alternatives."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",o({parentName:"strong"},{href:"/docs/fr/18/Concepts/looping"}),"R\xe9p\xe9titive"))," : il est tr\xe8s courant, lorsque vous \xe9crivez des m\xe9thodes, de rencontrer des cas o\xf9 vous devez r\xe9p\xe9ter une s\xe9quence d\u2019instructions un certain nombre de fois. Pour traiter ces besoins, le langage 4D vous propose plusieurs structures r\xe9p\xe9titives :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"While...End while")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Repeat...Until")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"For...End for")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"For each...End for each"),(0,n.kt)("br",null)," The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Chaque structure r\xe9p\xe9titive peut \xeatre utilis\xe9e de l\u2019une ou l\u2019autre mani\xe8re, mais les boucles ",(0,n.kt)("inlineCode",{parentName:"li"},"While")," et ",(0,n.kt)("inlineCode",{parentName:"li"},"Repeat")," sont mieux adapt\xe9es \xe0 la r\xe9p\xe9tition jusqu\u2019\xe0 ce qu\u2019une condition soit remplie, alors que les boucles ",(0,n.kt)("inlineCode",{parentName:"li"},"For")," sont mieux adapt\xe9es \xe0 la r\xe9p\xe9tition un certain nombre de fois. ",(0,n.kt)("inlineCode",{parentName:"li"},"For each...End for each"),", destin\xe9e \xe0 effectuer des boucles dans les objets et les collections, permet de combiner les deux mani\xe8res.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note :")," 4D vous permet d\u2019imbriquer des structures de programmation jusqu\u2019\xe0 une \u201cprofondeur\u201d de 512 niveaux."))}d.isMDXComponent=!0}}]);