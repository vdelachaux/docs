"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,k=d["".concat(i,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"boolean",title:"Boolean"},p=void 0,i={unversionedId:"Concepts/boolean",id:"version-19-R7/Concepts/boolean",title:"Boolean",description:"Un champ, une variable ou une expression de type bool\xe9en peut \xeatre soit VRAI soit FAUX.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/Concepts/dt_boolean.md",sourceDirName:"Concepts",slug:"/Concepts/boolean",permalink:"/docs/fr/Concepts/boolean",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"boolean",title:"Boolean"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/fr/Concepts/blob"},next:{title:"Collection",permalink:"/docs/fr/Concepts/collection"}},u={},s=[{value:"Fonctions bool\xe9ennes",id:"fonctions-bool\xe9ennes",level:2},{value:"Exemple",id:"exemple",level:3},{value:"Op\xe9rateurs logiques",id:"op\xe9rateurs-logiques",level:2}],m={toc:s};function d(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Un champ, une variable ou une expression de type bool\xe9en peut \xeatre soit VRAI soit FAUX."),(0,a.kt)("h2",r({},{id:"fonctions-bool\xe9ennes"}),"Fonctions bool\xe9ennes"),(0,a.kt)("p",null,"Les fonctions bool\xe9ennes de 4D traitent des valeurs telles que ",(0,a.kt)("inlineCode",{parentName:"p"},"Vrai"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Faux")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"Non")," dans le th\xe8me ",(0,a.kt)("strong",{parentName:"p"},"Bool\xe9ens")," consacr\xe9. Pour plus d'informations, veuillez vous reporter \xe0 la description de ces commandes."),(0,a.kt)("h3",r({},{id:"exemple"}),"Exemple"),(0,a.kt)("p",null,"L'exemple suivant retourne Vrai dans la variable monBool\xe9en si l'utilisateur a cliqu\xe9 sur le bouton monBouton et Faux s'il n'a pas cliqu\xe9 dessus. . Lorsqu'un bouton re\xe7oit un clic, la variable du bouton prend la valeur 1."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," If(monBouton=1) // Si le bouton a re\xe7u un clic\n    monBool\xe9en:=True// monBool\xe9en prend la valeur True\n Else // Si le bouton n'a pas re\xe7u de clic,\n    monBool\xe9en:=False //monBool\xe9en prend la valeur False\n End if\n")),(0,a.kt)("p",null,"L'exemple ci-dessus peut \xeatre simplifi\xe9 et \xe9crit en une seule ligne ."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"monBool\xe9en:=(monBouton=1)\n")),(0,a.kt)("h2",r({},{id:"op\xe9rateurs-logiques"}),"Op\xe9rateurs logiques"),(0,a.kt)("p",null,"4D supporte deux op\xe9rateurs logiques : l'op\xe9rateur d'intersection (AND) et l'op\xe9rateur de r\xe9union inclusive (OR). Le AND logique retourne TRUE si les deux expressions sont VRAIES. Le OR logique retourne TRUE si au moins une des expressions est VRAIE. Le tableau suivant d\xe9crit les op\xe9rateurs logiques :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Syntaxe"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Retourne"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"AND"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Bool\xe9en & Bool\xe9en"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "A") & (15 # 3)'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") & (15 # 3)'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") & (15 = 3)'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"OU"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Bool\xe9en & Bool\xe9en"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "A") ',"|"," (15 # 3)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") ',"|","  (15 # 3)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") ',"|","  (15 = 3)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,'Voici la "table de v\xe9rit\xe9" pour l\'op\xe9rateur logique "AND" :'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expr1"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expr2"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expr1 & Expr2"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,'Voici la "table de v\xe9rit\xe9" pour l\'op\xe9rateur logique "OR" :'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expr1"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expr2"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expr1 ","|"," Expr2"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Astuce :"),' Si vous devez calculer une r\xe9union exclusive (le "Ou" exclusif) entre Expr1 et Expr2, \xe9crivez :'),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," (Expr1|Expr2) & Not(Expr1 & Expr2)  \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Dans les contextes bool\xe9ens, le langage 4D prend \xe9galement en charge les ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Concepts/operators#short-circuit-operators"}),"op\xe9rateurs de court-circuit")," (",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"||"),") et le concept de ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Concepts/operators#truthy-and-falsy"}),"truthy et falsy"),".")))}d.isMDXComponent=!0}}]);