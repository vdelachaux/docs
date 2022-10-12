"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=o(n),k=r,N=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(N,i(i({ref:t},p),{},{components:n})):a.createElement(N,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"number",title:"Num\xe9rique (R\xe9el, Entier, Entier long)"},u=void 0,s={unversionedId:"Concepts/number",id:"version-18/Concepts/number",title:"Num\xe9rique (R\xe9el, Entier, Entier long)",description:"Num\xe9rique est un terme g\xe9n\xe9rique utilis\xe9 pour :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/dt_number.md",sourceDirName:"Concepts",slug:"/Concepts/number",permalink:"/docs/fr/18/Concepts/number",draft:!1,tags:[],version:"18",frontMatter:{id:"number",title:"Num\xe9rique (R\xe9el, Entier, Entier long)"},sidebar:"docs",previous:{title:"Null et Indefinie",permalink:"/docs/fr/18/Concepts/null-undefined"},next:{title:"Objets",permalink:"/docs/fr/18/Concepts/object"}},o={},p=[{value:"Constantes litt\xe9rales num\xe9riques",id:"constantes-litt\xe9rales-num\xe9riques",level:2},{value:"Op\xe9rateurs sur les nombres",id:"op\xe9rateurs-sur-les-nombres",level:2},{value:"Priorit\xe9",id:"priorit\xe9",level:3},{value:"Op\xe9rateurs sur les bits",id:"op\xe9rateurs-sur-les-bits",level:2},{value:"Notes",id:"notes",level:4},{value:"Exemples",id:"exemples",level:3}],d={toc:p};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Num\xe9rique est un terme g\xe9n\xe9rique utilis\xe9 pour :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les champs, variables ou expression de type R\xe9el. Les nombres de type R\xe9el sont compris dans l'intervalle \xb11.7e\xb1308 (13 chiffres significatifs)."),(0,a.kt)("li",{parentName:"ul"},"Les champs, variables ou expression de type Entier long. Les nombres de type Entier long (4 octets) sont compris dans l'intervalle -2^31..(2^31)-1."),(0,a.kt)("li",{parentName:"ul"},"Les champs, variables ou expression de type Entier. Les nombres de type Entier (2 octets) sont compris dans l'intervalle -32 768..32 767.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note :")," Lorsqu'elles sont utilis\xe9es dans le langage 4D, les valeurs des champs de type Entier sont automatiquement converties en Entier long."),(0,a.kt)("p",null,"Vous pouvez assigner tout nombre d'un type num\xe9rique \xe0 un nombre d'un autre type num\xe9rique, 4D effectue automatiquement la conversion, en tronquant ou en arrondissant les valeurs si n\xe9cessaire. Notez cependant que lorsqu'une valeur est situ\xe9e en-dehors de l'intervalle du type de destination, 4D ne pourra la convertir. Vous pouvez m\xe9langer tous les types de num\xe9riques au sein d'une m\xeame expression."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note :")," Dans ce manuel de r\xe9f\xe9rence du langage 4D, quel que soit le type pr\xe9cis des donn\xe9es, les param\xe8tres de type R\xe9el, Entier et Entier long dans les descriptions des commandes sont appel\xe9s num\xe9riques, sauf sp\xe9cification explicite."),(0,a.kt)("h2",r({},{id:"constantes-litt\xe9rales-num\xe9riques"}),"Constantes litt\xe9rales num\xe9riques"),(0,a.kt)("p",null,"Une constante litt\xe9rale num\xe9rique s\u2019\xe9crit comme un nombre r\xe9el. Voici quelques exemples de constantes num\xe9riques :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"27\n123.76\n0.0076\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Le s\xe9parateur d\xe9cimal est par d\xe9faut le point (.), quelle que soit la langue du syst\xe8me. Si vous avez coch\xe9 l\'option "Utiliser langage fran\xe7ais et param\xe8tres r\xe9gionaux syst\xe8me" dans la Page M\xe9thodes des Pr\xe9f\xe9rences, vous devez utiliser le s\xe9parateur d\xe9fini dans votre syst\xe8me.')),(0,a.kt)("p",null,"Les nombres n\xe9gatifs s\u2019\xe9crivent pr\xe9c\xe9d\xe9s du signe moins (-). Par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"-27\n-123.76\n-0.0076\n")),(0,a.kt)("h2",r({},{id:"op\xe9rateurs-sur-les-nombres"}),"Op\xe9rateurs sur les nombres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Syntaxe"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Retourne"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Addition"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nombre + Nombre"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"2 + 3"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Soustraction"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nombre - Nombre"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"3 \u2013 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Multiplication"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number * Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"5 * 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Division"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number / Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"5 / 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"2.5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Division enti\xe8re"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nombre \\ Nombre"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"5 \\ 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Modulo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nombre % Nombre"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"5 % 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Exponentiation"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nombre ^ Nombre"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"2 ^ 3"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Egalit\xe9"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nombre = Nombre"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10 = 10"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10 = 11"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"In\xe9galit\xe9"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nombre # Nombre"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10 #11"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10 # 10"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sup\xe9rieur \xe0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nombre > Nombre"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11 > 10"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10 > 11"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Inf\xe9rieur \xe0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nombre < Nombre"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10 < 11"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11 < 10"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sup\xe9rieur ou \xe9gal \xe0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nombre >= Nombre"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11 >= 10"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10 >= 11"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Inf\xe9rieur ou \xe9gal \xe0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nombre <= Nombre"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"10 <= 11"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"11 <= 10"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,"L'op\xe9rateur modulo % divise le premier nombre par le second et retourne le reste de la division enti\xe8re. Voici quelques exemples :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"10 % 2 retourne 0 car la division de 10 par 2 ne donne pas de reste."),(0,a.kt)("li",{parentName:"ul"},"10 % 3 retourne 1 car le reste est 1."),(0,a.kt)("li",{parentName:"ul"},"10,5 % 2 retourne 0 car le reste n'est pas un nombre entier.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ATTENTION :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L'op\xe9rateur modulo % retourne des valeurs significatives avec des nombres appartenant \xe0 la cat\xe9gorie des entiers longs (de \u20132^31 \xe0 +2^31 moins 1). Pour calculer le modulo de nombres qui ne sont pas dans cet intervalle, utilisez la fonction ",(0,a.kt)("inlineCode",{parentName:"li"},"Modulo"),"."),(0,a.kt)("li",{parentName:"ul"},"L'op\xe9rateur division enti\xe8re \\ retourne des valeurs significatives avec des nombres entiers uniquement.")),(0,a.kt)("h3",r({},{id:"priorit\xe9"}),"Priorit\xe9"),(0,a.kt)("p",null,"L'ordre dans lequel une expression est \xe9valu\xe9e s'appelle la priorit\xe9. 4D applique strictement une r\xe8gle de priorit\xe9 de gauche \xe0 droite. L'ordre alg\xe9brique n'est pas appliqu\xe9. Par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," 3+4*5\n")),(0,a.kt)("p",null,"retourne 35 car l'expression est \xe9valu\xe9e comme 3 + 4, qui donne 7, multipli\xe9 par 5, ce qui donne 35."),(0,a.kt)("p",null,"Les parenth\xe8ses doivent \xeatre utilis\xe9es pour forcer l'ordre de calcul en fonction de vos besoins. Par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," 3+(4*5)\n")),(0,a.kt)("p",null,"retourne 23 car l'expression (4 * 5) est \xe9valu\xe9e en premier lieu. Le r\xe9sultat (20) est alors ajout\xe9 \xe0 3, ce qui donne le r\xe9sultat final 23."),(0,a.kt)("p",null,"Des parenth\xe8ses peuvent \xeatre incluses dans d'autres parenth\xe8ses. Assurez-vous qu'il y ait une parenth\xe8se fermante pour chaque parenth\xe8se ouverte. Une parenth\xe8se manquante ou plac\xe9e \xe0 un mauvais endroit peut soit donner un r\xe9sultat erron\xe9, soit renvoyer une expression invalide. De plus, si vous avez l'intention de compiler vos applications, vous devez vous assurer d'une bonne utilisation des parenth\xe8ses. Le compilateur interpr\xe8tera toute parenth\xe8se manquante ou superflue comme une erreur de syntaxe."),(0,a.kt)("h2",r({},{id:"op\xe9rateurs-sur-les-bits"}),"Op\xe9rateurs sur les bits"),(0,a.kt)("p",null,"Les op\xe9rateurs sur les bits s'appliquent \xe0 des expressions ou valeurs de type ",(0,a.kt)("strong",{parentName:"p"},"Entier long"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous passez une valeur de type Entier ou R\xe9el \xe0 un op\xe9rateur sur les bits, 4D la convertit en Entier long avant de calculer le r\xe9sultat de l'expression.")),(0,a.kt)("p",null,"Lorsque vous employez des op\xe9rateurs sur les bits, vous devez consid\xe9rer une valeur de type Entier long comme un tableau de 32 bits. Les bits sont num\xe9rot\xe9s de 0 \xe0 31, de droite \xe0 gauche."),(0,a.kt)("p",null,"Comme un bit peut valoir 0 (z\xe9ro) ou 1, vous pouvez \xe9galement consid\xe9rer une valeur de type Entier long comme une expression dans laquelle vous pouvez stocker 32 valeurs de type Bool\xe9en. Lorsque le bit vaut 1, la valeur est ",(0,a.kt)("strong",{parentName:"p"},"Vrai")," et lorsque le bit vaut 0, la valeur est ",(0,a.kt)("strong",{parentName:"p"},"Faux"),"."),(0,a.kt)("p",null,"Une expression utilisant un op\xe9rateur sur les bits retourne une valeur de type Entier long, \xe0 l'exception de l'op\xe9rateur Tester bit avec lequel l'expression retourn\xe9e est du type Bool\xe9en. Le tableau suivant fournit la liste des op\xe9rateurs sur les bits et leur syntaxe :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Op\xe9rateur"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Syntaxe"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Retourne"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"ET"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"&"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"long & E. E. long"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"E. long")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"OU (inclusif)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"|"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"long ","|"," E. long"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"E. long")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"OU (exclusif)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\\^","|"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"long \\^","|"," E. long"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"E. long")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"D\xe9caler bits \xe0 gauche"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"<<"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"E. Long << E. Long"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"long (voir note n\xb01)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"D\xe9caler bits \xe0 droite"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),">>"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"E. Long >> E. Long"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"long (voir note n\xb01)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mettre bit \xe0 1"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?+"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"long ?+ E. E. long"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"long (voir note n\xb02)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mettre bit \xe0 0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"long ??"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"long (voir note n\xb02)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tester bit"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"??"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"long & E. E. long"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Bool\xe9en (voir note n\xb02)")))),(0,a.kt)("h4",r({},{id:"notes"}),"Notes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Dans les op\xe9rations utilisant ",(0,a.kt)("inlineCode",{parentName:"li"},"D\xe9caler bits \xe0 gauche")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"D\xe9caler bits \xe0 droite"),", le second op\xe9rande indique le nombre de d\xe9calages de bits du premier op\xe9rande \xe0 effectuer dans la valeur retourn\xe9e. Par cons\xe9quent, ce second op\xe9rande doit \xeatre compris entre 0 et 31. Notez qu'un d\xe9calage de 0 retourne une valeur inchang\xe9e et qu'un d\xe9calage de plus de 31 bits retourne 0x00000000 car tous les bits sont perdus. Si vous passez une autre valeur en tant que second op\xe9rande, le r\xe9sultat sera non significatif."),(0,a.kt)("li",{parentName:"ol"},"Dans les op\xe9rations utilisant ",(0,a.kt)("inlineCode",{parentName:"li"},"Mettre bit \xe0 1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Mettre bit \xe0 0")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"Tester bit"),", le second op\xe9rande indique le num\xe9ro du bit sur lequel agir. Par cons\xe9quent, ce second op\xe9rande doit \xeatre compris entre 0 et 31, sinon le r\xe9sultat de l'expression sera non significatif.")),(0,a.kt)("p",null,"Le tableau suivant dresse la liste des op\xe9rateurs sur les bits et de leurs effets :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"ET"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Chaque bit retourn\xe9 est le r\xe9sultat de l'op\xe9ration ET logique appliqu\xe9e aux deux bits op\xe9randes. Voici la table du ET logique :",(0,a.kt)("ul",null,(0,a.kt)("li",null,"1 & 1 --\x3e 1"),(0,a.kt)("li",null,"0 & 1 --\x3e 0"),"1 & 0 --\x3e 0",(0,a.kt)("li",null,"0 & 0 --\x3e 0")),"En d'autres termes, le bit r\xe9sultant est 1 si les deux bits d'op\xe9rande sont 1; sinon, le bit r\xe9sultant est 0.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"OU (inclusif)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Chaque bit retourn\xe9 est le r\xe9sultat de l'op\xe9ration OU logique appliqu\xe9e aux deux bits op\xe9randes. Voici la table du OU inclusif logique :",(0,a.kt)("ul",null,(0,a.kt)("li",null,"1 ","|"," 1 --\x3e 1"),(0,a.kt)("li",null,"0 ","|"," 1 --\x3e 1"),(0,a.kt)("li",null,"1 ","|"," 0 --\x3e 1"),(0,a.kt)("li",null,"0 ","|"," 0 --\x3e 0"))," En d'autres termes, le bit r\xe9sultant est 1 si au moins l'un des deux bits d'op\xe9rande est 1; sinon, le bit r\xe9sultant est 0.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"OU (exclusif)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Chaque bit retourn\xe9 est le r\xe9sultat de l'op\xe9ration OU logique appliqu\xe9e aux deux bits op\xe9randes. Voici la table du OU exclusif logique : ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"1 \\^","|"," 1 --\x3e 0"),(0,a.kt)("li",null,"0 \\^","|"," 1 --\x3e 1"),(0,a.kt)("li",null,"1 \\^","|"," 0 --\x3e 1"),(0,a.kt)("li",null,"0 \\^","|"," 0 --\x3e 0"))," En d'autres termes, le bit r\xe9sultant est 1 si seul l'un des deux bits d'op\xe9rande est 1; sinon, le bit r\xe9sultant est 0.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"D\xe9caler bits \xe0 gauche"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"La valeur r\xe9sultante est d\xe9finie sur la premi\xe8re valeur d'op\xe9rande, puis les bits r\xe9sultants sont d\xe9cal\xe9s vers la gauche du nombre de positions indiqu\xe9 par le deuxi\xe8me op\xe9rande. Les bits auparavant situ\xe9s \xe0 gauche sont perdus et les nouveaux bits situ\xe9s \xe0 droite ont la valeur 0. The bits on the left are lost and the new bits on the right are set to 0.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"D\xe9caler bits \xe0 droite"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"La valeur r\xe9sultante est d\xe9finie sur la premi\xe8re valeur d'op\xe9rande, puis les bits r\xe9sultants sont d\xe9cal\xe9s vers la droite du nombre de positions indiqu\xe9 par le deuxi\xe8me op\xe9rande. Les bits auparavant situ\xe9s \xe0 droite sont perdus et les nouveaux bits situ\xe9s \xe0 gauche ont la valeur 0. ",(0,a.kt)("strong",{parentName:"td"},"Note:")," en ne tenant compte que des valeurs positives, le d\xe9calage vers la droite de N bits \xe9quivaut \xe0 diviser par 2^N.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mettre bit \xe0 1"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"La valeur retourn\xe9e est la valeur du premier op\xe9rande dans lequel le bit dont le num\xe9ro est sp\xe9cifi\xe9 par le second op\xe9rande est positionn\xe9 \xe0 0. Les autres bits demeurent inchang\xe9s.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mettre bit \xe0 0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"La valeur retourn\xe9e est la valeur du premier op\xe9rande dans lequel le bit dont le num\xe9ro est sp\xe9cifi\xe9 par le second op\xe9rande est positionn\xe9 \xe0 0. Les autres bits demeurent inchang\xe9s.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tester bit"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Retourne Vrai si, dans le premier op\xe9rande, le bit dont le num\xe9ro est indiqu\xe9 par le second op\xe9rande vaut 1. Retourne Faux si, dans le premier op\xe9rande, le bit dont le num\xe9ro est indiqu\xe9 par le second op\xe9rande vaut 0.")))),(0,a.kt)("h3",r({},{id:"exemples"}),"Exemples"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Exemple"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"R\xe9sultat"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"ET"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF & 0xFF00FF00"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FF00")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"OU (inclusif)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF ","|"," 0xFF00FF00"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0xFF00FFFF")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"OU (exclusif)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF \\^","|"," 0xFF00FF00"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0xFF0000FF")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"D\xe9caler bits \xe0 gauche"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF << 8"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x00FFFF00")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"D\xe9caler bits \xe0 droite"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF >> 8"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x000000FF")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mettre bit \xe0 1"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x00000000 ?+ 16"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x00010000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mettre bit \xe0 0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x00010000 ?- 16"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x00000000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Tester bit"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0x00010000 ?? 16"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Vrai")))))}m.isMDXComponent=!0}}]);