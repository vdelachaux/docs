"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=o(n),k=a,N=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(N,u(u({ref:t},m),{},{components:n})):r.createElement(N,u({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var o=2;o<l;o++)u[o]=n[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},60878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>u,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"time",title:"Heure"},i=void 0,p={unversionedId:"Concepts/time",id:"version-18/Concepts/time",title:"Heure",description:"- Les variables, champs ou expressions de type Heure peuvent \xeatre compris entre 0000 et 596 00000.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/dt_time.md",sourceDirName:"Concepts",slug:"/Concepts/time",permalink:"/docs/fr/18/Concepts/time",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/Concepts/dt_time.md",tags:[],version:"18",frontMatter:{id:"time",title:"Heure"},sidebar:"docs",previous:{title:"String",permalink:"/docs/fr/18/Concepts/string"},next:{title:"Variant",permalink:"/docs/fr/18/Concepts/variant"}},o={},m=[{value:"Constantes litt\xe9rales de type heure",id:"constantes-litt\xe9rales-de-type-heure",level:2},{value:"Op\xe9rateurs sur les heures",id:"op\xe9rateurs-sur-les-heures",level:2},{value:"Exemple 1",id:"exemple-1",level:3},{value:"Exemple 2",id:"exemple-2",level:3}],d={toc:m};function s(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Les variables, champs ou expressions de type Heure peuvent \xeatre compris entre 00:00:00 et 596 000:00:00."),(0,r.kt)("li",{parentName:"ul"},"Les heures sont stock\xe9es dans un format de 24 heures."),(0,r.kt)("li",{parentName:"ul"},"Une valeur de type Heure peut \xeatre utilis\xe9e en tant que num\xe9rique. Le nombre correspondant est le nombre de secondes que cette valeur repr\xe9sente \xe0 partir de minuit (00:00:00).")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note :")," Dans ce manuel de r\xe9f\xe9rence du langage 4D, les param\xe8tres de type Heure dans les descriptions des commandes sont appel\xe9s Heure, sauf sp\xe9cification explicite."),(0,r.kt)("h2",a({},{id:"constantes-litt\xe9rales-de-type-heure"}),"Constantes litt\xe9rales de type heure"),(0,r.kt)("p",null,"Une constante heure est incluse entre deux points d\u2019interrogation (?...?)."),(0,r.kt)("p",null,"Avec une version fran\xe7aise de 4D, une heure est structur\xe9e sous la forme heure:minute:seconde, deux points (:) s\xe9parant les valeurs. Les heures sont stock\xe9es dans un format de 24 heures."),(0,r.kt)("p",null,"Voici quelques exemples de constantes litt\xe9rales de type heure :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"?00:00:00? // minuit\n?09:30:00? // 9:30 du matin\n?13:01:59? // 13 heures, 1 minute et 59 secondes\n")),(0,r.kt)("p",null,"Une heure nulle s\u2019\xe9crit ?00:00:00?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Astuce :")," L'\xe9diteur de m\xe9thodes dispose d'un raccourci pour saisir une heure nulle. Pour cela, tapez un point d'interrogation (?) et appuyez sur la touche Entr\xe9e."),(0,r.kt)("h2",a({},{id:"op\xe9rateurs-sur-les-heures"}),"Op\xe9rateurs sur les heures"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Syntaxe"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Retourne"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Expression"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Addition"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure + Heure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?02:03:04? + ?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?03:05:07?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Soustraction"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure \u2013 Heure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?02:03:04? ?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:01:01?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Addition"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure + Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?02:03:04? ?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"7449")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Soustraction"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure \u2013 Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?02:03:04? ?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"7319")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Multiplication"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure * Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?02:03:04? ?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"14768")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Division"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure / Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?02:03:04? ?02:03:04?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"3692")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Division enti\xe8re"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure \\ Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?02:03:04? ?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"3692")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Modulo"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure % Heure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?20:10:00? % ?04:20:00?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?02:50:00?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Modulo"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure % Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?02:03:04? ?02:03:04?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Egalit\xe9"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure = Heure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:02:03? >=?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:04?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"In\xe9galit\xe9"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure # Heure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Sup\xe9rieur \xe0"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure > Heure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:02:03? < ?01:02:04?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:02:03? < ?01:02:04?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Inf\xe9rieur \xe0"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure < Heure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:04?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Sup\xe9rieur ou \xe9gal \xe0"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure >= Heure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:02:03? >=?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:02:03? >=?01:02:04?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Inf\xe9rieur ou \xe9gal \xe0"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Heure <= Heure"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:02:03? <=?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?01:02:03? <=?01:02:03?"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")))),(0,r.kt)("h3",a({},{id:"exemple-1"}),"Exemple 1"),(0,r.kt)("p",null,"Vous pouvez combiner des expressions de type heure et de type num\xe9rique \xe0 l'aide des fonctions ",(0,r.kt)("inlineCode",{parentName:"p"},"Time")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"Time string"),"."),(0,r.kt)("p",null,"Vous pouvez combiner des expressions Time et Number \xe0 l'aide des fonctions ",(0,r.kt)("inlineCode",{parentName:"p"},"Time")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"Current time"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"    // La ligne suivante assigne \xe0 la variable $vlSecondes le nombre de secondes qui, dans une heure \xe0 partir de maintenant, se seront \xe9coul\xe9es depuis minuit\n $vlSeconds:=Current time+3600\n  // La ligne suivante assigne \xe0 la variable $vhBient\xf4t l'heure qu'il sera dans une heure\n $vhSoon:=Time(Current time+3600)\n")),(0,r.kt)("p",null,"La seconde ligne peut \xe9galement \xeatre \xe9crite de la fa\xe7on suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"  // La ligne suivante assigne \xe0 la variable $vhBient\xf4t l'heure qu'il sera dans une heure\n $vhSoon:=Current time+?01:00:00?\n")),(0,r.kt)("h3",a({},{id:"exemple-2"}),"Exemple 2"),(0,r.kt)("p",null,"L'op\xe9rateur Modulo permet notamment d'ajouter des heures en tenant compte du format sur 24 heures d'une journ\xe9e :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"$t1:=?23:00:00? // Il est 23 heures.\n  //On souhaite ajouter 2 heures 30\n $t2:=$t1 +?02:30:00? // avec une addition simple, $t2 vaut ?25:30:00?\n$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 vaut ?01:30:00? et il est 1h 30 du matin le matin suivant le matin suivant le matin suivant le matin suivant le matin suivant\n")))}s.isMDXComponent=!0}}]);