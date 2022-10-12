"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=a(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var a=2;a<i;a++)s[a]=n[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"control-flow",title:"Conditions et boucles"},l=void 0,u={unversionedId:"Concepts/control-flow",id:"version-19-R6/Concepts/control-flow",title:"Conditions et boucles",description:"Quelle que soit la simplicit\xe9 ou la complexit\xe9 d\u2019une m\xe9thode ou d'une fonction, vous utiliserez toujours un ou plusieurs types de structure de programmation. Les structures de programmation d\xe9terminent si et dans quel ordre les lignes d\u2019instructions sont ex\xe9cut\xe9es \xe0 l\u2019int\xe9rieur d\u2019une m\xe9thode. Il existe trois types de structures :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/Concepts/flow-control.md",sourceDirName:"Concepts",slug:"/Concepts/control-flow",permalink:"/docs/fr/19-R6/Concepts/control-flow",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"control-flow",title:"Conditions et boucles"},sidebar:"docs",previous:{title:"Classes",permalink:"/docs/fr/19-R6/Concepts/classes"},next:{title:"Structures conditionnelles",permalink:"/docs/fr/19-R6/Concepts/branching"}},a={},p=[{value:"return {expression}",id:"return-expression",level:2},{value:"Exemple",id:"exemple",level:3}],c={toc:p};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Quelle que soit la simplicit\xe9 ou la complexit\xe9 d\u2019une m\xe9thode ou d'une fonction, vous utiliserez toujours un ou plusieurs types de structure de programmation. Les structures de programmation d\xe9terminent si et dans quel ordre les lignes d\u2019instructions sont ex\xe9cut\xe9es \xe0 l\u2019int\xe9rieur d\u2019une m\xe9thode. Il existe trois types de structures :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S\xe9quentielle")," : une structure s\xe9quentielle est une structure simple, lin\xe9aire. Une s\xe9quence est une s\xe9rie d\u2019instructions que 4D ex\xe9cute les unes apr\xe8s les autres, de la premi\xe8re \xe0 la derni\xe8re. Une instruction d'une ligne, fr\xe9quemment utilis\xe9e pour les m\xe9thodes objet, est le cas le plus simple de structure s\xe9quentielle. Par exemple : ",(0,r.kt)("inlineCode",{parentName:"li"},"[Personnes]Nom:=Uppercase([Personnes]Nom)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",o({parentName:"strong"},{href:"/docs/fr/19-R6/Concepts/branching"}),"Conditionnelle"))," : une structure conditionnelle permet aux m\xe9thodes de tester une condition et d\u2019ex\xe9cuter des s\xe9quences d\u2019instructions diff\xe9rentes en fonction du r\xe9sultat. La condition est une expression bool\xe9enne, c\u2019est-\xe0-dire pouvant retourner VRAI ou FAUX. L\u2019une des structures conditionnelles est la structure ",(0,r.kt)("inlineCode",{parentName:"li"},"If...Else...End if"),", qui aiguille le d\xe9roulement du programme vers une s\xe9quence ou une autre. L\u2019autre structure conditionnelle est la structure ",(0,r.kt)("inlineCode",{parentName:"li"},"Case of...Else...End case"),", qui aiguille le programme vers une s\xe9quence parmi une ou plusieurs alternatives."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",o({parentName:"strong"},{href:"/docs/fr/19-R6/Concepts/looping"}),"R\xe9p\xe9titive"))," : il est tr\xe8s courant, lorsque vous \xe9crivez des m\xe9thodes, de rencontrer des cas o\xf9 vous devez r\xe9p\xe9ter une s\xe9quence d\u2019instructions un certain nombre de fois. Pour traiter ces besoins, le langage 4D vous propose plusieurs structures r\xe9p\xe9titives :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"While...End while")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Repeat...Until")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"For...End for")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"For each...End for each"),(0,r.kt)("br",null)," The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Chaque structure r\xe9p\xe9titive peut \xeatre utilis\xe9e de l\u2019une ou l\u2019autre mani\xe8re, mais les boucles ",(0,r.kt)("inlineCode",{parentName:"li"},"While")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"Repeat")," sont mieux adapt\xe9es \xe0 la r\xe9p\xe9tition jusqu\u2019\xe0 ce qu\u2019une condition soit remplie, alors que les boucles ",(0,r.kt)("inlineCode",{parentName:"li"},"For")," sont mieux adapt\xe9es \xe0 la r\xe9p\xe9tition un certain nombre de fois. ",(0,r.kt)("inlineCode",{parentName:"li"},"For each...End for each"),", destin\xe9e \xe0 effectuer des boucles dans les objets et les collections, permet de combiner les deux mani\xe8res.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note :")," 4D vous permet d\u2019imbriquer des structures de programmation jusqu\u2019\xe0 une \u201cprofondeur\u201d de 512 niveaux."),(0,r.kt)("h2",o({},{id:"return-expression"}),"return {expression}"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Historique"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Version"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Modifications"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"v19 R4"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Ajout\xe9es"))))),(0,r.kt)("p",null,"L'instruction ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," peut \xeatre appel\xe9e de n'importe o\xf9. Lorsqu'une instruction ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," est utilis\xe9e dans une fonction ou une m\xe9thode, l'ex\xe9cution de la fonction ou de la m\xe9thode est arr\xeat\xe9e. Le code restant n'est pas ex\xe9cut\xe9 et le contr\xf4le est renvoy\xe9 \xe0 l'appelant."),(0,r.kt)("p",null,"L'instruction ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," peut \xeatre utilis\xe9e pour ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R6/Concepts/parameters#return-expression"}),"retourner une valeur")," \xe0 l'appelant."),(0,r.kt)("h3",o({},{id:"exemple"}),"Exemple"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'var $message : Text\nvar $i : Integer\n\nWhile (True) //infinite loop\n $i:=$i+1\n $message+=String($i)+"A\\r"  // until 5\n logConsole($message)\n If ($i=5)\n  return //stops the loop\n End if \n $message+=String($i)+"B\\r"  // until 4\n logConsole($message)\nEnd while \n$message+=String($i)+"C\\r"  //never executed \nlogConsole($message)\n\n// 1A\n// 1B\n// 2A\n// 2B\n// 3A\n// 3B\n// 4A\n// 4B\n// 5A\n\n')))}d.isMDXComponent=!0}}]);