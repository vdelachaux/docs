"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"boolean",title:"Boolean"},i=void 0,p={unversionedId:"Concepts/boolean",id:"version-19-R7/Concepts/boolean",title:"Boolean",description:"Un champ, une variable ou une expression de type bool\xe9en peut \xeatre soit VRAI soit FAUX.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/Concepts/dt_boolean.md",sourceDirName:"Concepts",slug:"/Concepts/boolean",permalink:"/docs/fr/Concepts/boolean",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/Concepts/dt_boolean.md",tags:[],version:"19-R7",frontMatter:{id:"boolean",title:"Boolean"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/fr/Concepts/blob"},next:{title:"Collection",permalink:"/docs/fr/Concepts/collection"}},u={},s=[{value:"Fonctions bool\xe9ennes",id:"fonctions-bool\xe9ennes",level:2},{value:"Exemple",id:"exemple",level:3},{value:"Op\xe9rateurs logiques",id:"op\xe9rateurs-logiques",level:2}],d={toc:s};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un champ, une variable ou une expression de type bool\xe9en peut \xeatre soit VRAI soit FAUX."),(0,r.kt)("h2",a({},{id:"fonctions-bool\xe9ennes"}),"Fonctions bool\xe9ennes"),(0,r.kt)("p",null,"Les fonctions bool\xe9ennes de 4D traitent des valeurs telles que ",(0,r.kt)("inlineCode",{parentName:"p"},"Vrai"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Faux")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"Non")," dans le th\xe8me ",(0,r.kt)("strong",{parentName:"p"},"Bool\xe9ens")," consacr\xe9. Pour plus d'informations, veuillez vous reporter \xe0 la description de ces commandes."),(0,r.kt)("h3",a({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,"L'exemple suivant retourne Vrai dans la variable monBool\xe9en si l'utilisateur a cliqu\xe9 sur le bouton monBouton et Faux s'il n'a pas cliqu\xe9 dessus. . Lorsqu'un bouton re\xe7oit un clic, la variable du bouton prend la valeur 1."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"})," If(monBouton=1) // Si le bouton a re\xe7u un clic\n    monBool\xe9en:=True// monBool\xe9en prend la valeur True\n Else // Si le bouton n'a pas re\xe7u de clic,\n    monBool\xe9en:=False //monBool\xe9en prend la valeur False\n End if\n")),(0,r.kt)("p",null,"L'exemple ci-dessus peut \xeatre simplifi\xe9 et \xe9crit en une seule ligne ."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"monBool\xe9en:=(monBouton=1)\n")),(0,r.kt)("h2",a({},{id:"op\xe9rateurs-logiques"}),"Op\xe9rateurs logiques"),(0,r.kt)("p",null,"4D supporte deux op\xe9rateurs logiques : l'op\xe9rateur d'intersection (AND) et l'op\xe9rateur de r\xe9union inclusive (OR). Le AND logique retourne TRUE si les deux expressions sont VRAIES. Le OR logique retourne TRUE si au moins une des expressions est VRAIE. Le tableau suivant d\xe9crit les op\xe9rateurs logiques :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Syntaxe"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Retourne"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Expression"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"AND"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Bool\xe9en & Bool\xe9en"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'("A" = "A") & (15 # 3)'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'("A" = "B") & (15 # 3)'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'("A" = "B") & (15 = 3)'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"OU"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Bool\xe9en & Bool\xe9en"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'("A" = "A") ',"|"," (15 # 3)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'("A" = "B") ',"|","  (15 # 3)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'("A" = "B") ',"|","  (15 = 3)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")))),(0,r.kt)("p",null,'Voici la "table de v\xe9rit\xe9" pour l\'op\xe9rateur logique "AND" :'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Expr1"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Expr2"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Expr1 & Expr2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")))),(0,r.kt)("p",null,'Voici la "table de v\xe9rit\xe9" pour l\'op\xe9rateur logique "OR" :'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Expr1"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Expr2"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Expr1 ","|"," Expr2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Astuce :"),' Si vous devez calculer une r\xe9union exclusive (le "Ou" exclusif) entre Expr1 et Expr2, \xe9crivez :'),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"})," (Expr1|Expr2) & Not(Expr1 & Expr2)  \n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Dans les contextes bool\xe9ens, le langage 4D prend \xe9galement en charge les ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/Concepts/operators#short-circuit-operators"}),"op\xe9rateurs de court-circuit")," (",(0,r.kt)("inlineCode",{parentName:"p"},"&&")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"||"),") et le concept de ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/Concepts/operators#truthy-and-falsy"}),"truthy et falsy"),".")))}m.isMDXComponent=!0}}]);