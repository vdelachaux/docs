"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const i={id:"looping",title:'Structures r\xe9p\xe9titives (ou "boucles")'},o=void 0,s={unversionedId:"Concepts/looping",id:"version-18/Concepts/looping",title:'Structures r\xe9p\xe9titives (ou "boucles")',description:"While...End while",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/cf_looping.md",sourceDirName:"Concepts",slug:"/Concepts/looping",permalink:"/docs/fr/18/Concepts/looping",draft:!1,tags:[],version:"18",frontMatter:{id:"looping",title:'Structures r\xe9p\xe9titives (ou "boucles")'},sidebar:"docs",previous:{title:"Structures conditionnelles",permalink:"/docs/fr/18/Concepts/branching"},next:{title:"Gestion des erreurs",permalink:"/docs/fr/18/Concepts/error-handling"}},u={},p=[{value:"While...End while",id:"whileend-while",level:2},{value:"Exemple",id:"exemple",level:3},{value:"Repeat...Until",id:"repeatuntil",level:2},{value:"Exemple",id:"exemple-1",level:3},{value:"For...End for",id:"forend-for",level:2},{value:"Exemples \xe9l\xe9mentaires",id:"exemples-\xe9l\xe9mentaires",level:3},{value:"D\xe9cr\xe9menter la variable Compteur",id:"d\xe9cr\xe9menter-la-variable-compteur",level:3},{value:"Incrementer la variable compteur de plus de 1",id:"incrementer-la-variable-compteur-de-plus-de-1",level:3},{value:"Comparaison des structures r\xe9p\xe9titives",id:"comparaison-des-structures-r\xe9p\xe9titives",level:3},{value:"Optimiser l&#39;ex\xe9cution de For...End for",id:"optimiser-lex\xe9cution-de-forend-for",level:3},{value:"Structures For...End for embo\xeet\xe9es",id:"structures-forend-for-embo\xeet\xe9es",level:3},{value:"For each...End for each",id:"for-eachend-for-each",level:2},{value:"Boucle sur collections",id:"boucle-sur-collections",level:3},{value:"Exemple",id:"exemple-2",level:4},{value:"Boucle sur entity selections",id:"boucle-sur-entity-selections",level:3},{value:"Exemple",id:"exemple-3",level:4},{value:"Boucles sur des propri\xe9t\xe9s d&#39;objets",id:"boucles-sur-des-propri\xe9t\xe9s-dobjets",level:3},{value:"Exemple",id:"exemple-4",level:4},{value:"Param\xe8tres d\xe9but / fin",id:"param\xe8tres-d\xe9but--fin",level:3},{value:"Exemple",id:"exemple-5",level:4},{value:"Conditions Until et While",id:"conditions-until-et-while",level:3},{value:"Exemple",id:"exemple-6",level:4}],m={toc:p};function c(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",l({},{id:"whileend-while"}),"While...End while"),(0,a.kt)("p",null,"La syntaxe de la structure r\xe9p\xe9titive (ou boucle) ",(0,a.kt)("inlineCode",{parentName:"p"},"While...End while")," est la suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," While(Expression_bool\xe9enne)\n    instruction(s)\n End while\n")),(0,a.kt)("p",null,"Une boucle ",(0,a.kt)("inlineCode",{parentName:"p"},"While...End while")," ex\xe9cute les instructions comprises entre ",(0,a.kt)("inlineCode",{parentName:"p"},"While")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"End while")," aussi longtemps que l\u2019expression bool\xe9enne est TRUE. Elle teste l\u2019expression bool\xe9enne initiale et n\u2019entre pas dans la boucle (et donc n'ex\xe9cute aucune instruction) si l\u2019expression est \xe0 FALSE."),(0,a.kt)("p",null,"Il est utile d\u2019initialiser la valeur test\xe9e dans l\u2019expression bool\xe9enne juste avant d\u2019entrer dans la boucle ",(0,a.kt)("inlineCode",{parentName:"p"},"While...End while"),". Initialiser la valeur signifie lui affecter un contenu appropri\xe9, g\xe9n\xe9ralement pour que l\u2019expression bool\xe9enne soit TRUE et que le programme entre dans la boucle."),(0,a.kt)("p",null,"La valeur de l'expression bool\xe9enne doit pouvoir \xeatre modifi\xe9e par un \xe9l\xe9ment situ\xe9 \xe0 l'int\xe9rieur de la boucle, sinon elle s'ex\xe9cutera ind\xe9finiment. La boucle suivante est sans fin car ",(0,a.kt)("em",{parentName:"p"},"NeverStop")," est toujours TRUE :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," NeverStop:=True\n While(NeverStop)\n End while\n")),(0,a.kt)("p",null,"Si vous vous retrouvez dans une telle situation (o\xf9 une m\xe9thode s'ex\xe9cute de mani\xe8re incontr\xf4l\xe9e), vous pouvez utiliser les fonctions de d\xe9bogage de 4D et remonter \xe0 la source du probl\xe8me. Pour plus d'informations sur ce point, reportez-vous \xe0 la section ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/fr/18/Concepts/error-handling"}),"D\xe9bogueur"),"."),(0,a.kt)("h3",l({},{id:"exemple"}),"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' CONFIRM("Add a new record?") //L\'utilisateur souhaite-t-il ajouter un enregistrement ? CONFIRM("Add a new record?") //The user wants to add a record?\n While(OK=1) // Tant que l\'utilisateur accepte\n    ADD RECORD([aTable]) // Ajouter un nouvel enregistrement\nEnd while // Une boucle While se termine toujours par End while\n')),(0,a.kt)("p",null,"Dans cet exemple, la valeur de la variable syst\xe8me ",(0,a.kt)("inlineCode",{parentName:"p"},"OK")," est d\xe9finie par la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIRM")," avant que le programme n\u2019entre dans la boucle. Si l\u2019utilisateur clique sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"OK")," dans la bo\xeete de dialogue de confirmation, la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"OK")," prend la valeur 1 et la boucle est ex\xe9cut\xe9e. Dans le cas contraire, la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"OK")," prend la valeur 0 et la boucle est ignor\xe9e. Une fois que le programme entre dans la boucle, la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD RECORD")," permet de continuer \xe0 l\u2019ex\xe9cuter car elle met la variable syst\xe8me ",(0,a.kt)("inlineCode",{parentName:"p"},"OK")," \xe0 1 lorsque l\u2019utilisateur sauvegarde l\u2019enregistrement. Lorsque l\u2019utilisateur annule (ne valide pas) le dernier enregistrement, la variable syst\xe8me ",(0,a.kt)("inlineCode",{parentName:"p"},"OK")," prend la valeur 0 et la boucle s\u2019arr\xeate."),(0,a.kt)("h2",l({},{id:"repeatuntil"}),"Repeat...Until"),(0,a.kt)("p",null,"La syntaxe de la structure r\xe9p\xe9titive (ou boucle) ",(0,a.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," est la suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," Repeat\n    instruction(s)\n Until(Boolean_Expression)\n")),(0,a.kt)("p",null,"La boucle ",(0,a.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," est semblable \xe0 la boucle ",(0,a.kt)("a",l({parentName:"p"},{href:"flow-control#whileend-while"}),"While...End while"),", \xe0 la diff\xe9rence qu\u2019elle teste la valeur de l\u2019expression bool\xe9enne apr\xe8s l\u2019ex\xe9cution de la boucle et non avant. Ainsi, la boucle est toujours ex\xe9cut\xe9e au moins une fois, tandis que si l\u2019expression bool\xe9enne est initialement \xe0 Faux, la boucle ",(0,a.kt)("inlineCode",{parentName:"p"},"While...End while")," ne s\u2019ex\xe9cute pas du tout."),(0,a.kt)("p",null,"L'autre particularit\xe9 de la boucle ",(0,a.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," est qu\u2019elle se poursuit jusqu\u2019\xe0 ce que l\u2019expression bool\xe9enne soit \xe0 TRUE."),(0,a.kt)("h3",l({},{id:"exemple-1"}),"Exemple"),(0,a.kt)("p",null,"Comparez l\u2019exemple suivant avec celui de la boucle ",(0,a.kt)("inlineCode",{parentName:"p"},"While...End while"),". Vous constatez qu\u2019il n\u2019est pas n\xe9cessaire d\u2019initialiser l\u2019expression bool\xe9enne \u2014 il n\u2019y a pas de commande ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIRM")," pour initialiser la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"OK"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," Repeat\n    ADD RECORD([aTable])\n Until(OK=0)\n")),(0,a.kt)("h2",l({},{id:"forend-for"}),"For...End for"),(0,a.kt)("p",null,"La syntaxe de la structure r\xe9p\xe9titive ",(0,a.kt)("inlineCode",{parentName:"p"},"For...End for")," est la suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})\n    instruction(s)\n End for\n")),(0,a.kt)("p",null,"La structure ",(0,a.kt)("inlineCode",{parentName:"p"},"For...End for")," est une boucle contr\xf4l\xe9e par un compteur :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La variable compteur ",(0,a.kt)("em",{parentName:"li"},"Counter_Variable")," est une variable num\xe9rique (R\xe9el ou Entier long) initialis\xe9e par ",(0,a.kt)("inlineCode",{parentName:"li"},"For...End for")," \xe0 la valeur sp\xe9cifi\xe9e par ",(0,a.kt)("em",{parentName:"li"},"Start_Expression"),"."),(0,a.kt)("li",{parentName:"ul"},"La variable Variable_Compteur est incr\xe9ment\xe9e de la valeur sp\xe9cifi\xe9e par le param\xe8tre optionnel ",(0,a.kt)("em",{parentName:"li"},"Increment_Expression")," \xe0 chaque fois que la boucle est ex\xe9cut\xe9e. Si vous ne passez pas de valeur dans ",(0,a.kt)("em",{parentName:"li"},"Increment_Expression"),", la variable compteur est incr\xe9ment\xe9e par d\xe9faut de un (1)."),(0,a.kt)("li",{parentName:"ul"},"Lorsque le compteur atteint la valeur d\xe9finie par ",(0,a.kt)("em",{parentName:"li"},"End_Expression"),", la boucle s'arr\xeate.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important :")," Les expressions num\xe9riques ",(0,a.kt)("em",{parentName:"p"},"Start_Expression"),", ",(0,a.kt)("em",{parentName:"p"},"End_Expression")," et ",(0,a.kt)("em",{parentName:"p"},"Increment_Expression")," sont \xe9valu\xe9es une seule fois, au d\xe9but de la boucle. Si ces expressions sont des variables, leur modification depuis l'int\xe9rieur de la boucle n'affectera pas l'ex\xe9cution de la boucle."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Astuce :")," En revanche, vous pouvez, si vous le souhaitez, modifier la valeur de la variable ",(0,a.kt)("em",{parentName:"p"},"Counter_Variable")," depuis l'int\xe9rieur de la boucle et cela affectera l'ex\xe9cution de la boucle."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"G\xe9n\xe9ralement, ",(0,a.kt)("em",{parentName:"li"},"Start_Expression")," est inf\xe9rieure \xe0 ",(0,a.kt)("em",{parentName:"li"},"End_Expression"),"."),(0,a.kt)("li",{parentName:"ul"},"Si les deux expressions sont \xe9gales, la boucle ne sera ex\xe9cut\xe9e qu'une fois."),(0,a.kt)("li",{parentName:"ul"},"Si ",(0,a.kt)("em",{parentName:"li"},"Start_Expression")," est sup\xe9rieure \xe0 ",(0,a.kt)("em",{parentName:"li"},"End_Expression"),", la boucle ne s'ex\xe9cutera pas du tout, \xe0 moins que vous ne sp\xe9cifiiez une ",(0,a.kt)("em",{parentName:"li"},"Increment_Expression")," n\xe9gative. Reportez-vous ci-dessous au paragraphe d\xe9crivant ce point.")),(0,a.kt)("h3",l({},{id:"exemples-\xe9l\xe9mentaires"}),"Exemples \xe9l\xe9mentaires"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"La boucle suivante s'ex\xe9cute 100 fois :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," For(vCounter;1;100)\n  //Faire quelque chose\n End for\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"L'exemple suivant permet de traiter tous les \xe9l\xe9ments du tableau anArray :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," For($vlElem;1;Size of array(anArray))\n  //Faire quelque chose avec l'\xe9l\xe9ment\n    anArray{$vlElem}:=...\n End for\n")),(0,a.kt)("ol",l({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"L'exemple suivant permet d'examiner chaque caract\xe8re du texte vtSomeText :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," For($vlChar;1;Length(vtSomeText))\n  //Faire quelque chose avec le caract\xe8re si c'est une tabulation\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n")),(0,a.kt)("ol",l({},{start:4}),(0,a.kt)("li",{parentName:"ol"},"L'exemple suivant permet de traiter tous les enregistrements de la s\xe9lection de la table ","[aTable]"," :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," FIRST RECORD([aTable])\n For($vlRecord;1;Records in selection([aTable]))\n  //Faire quelque chose avec chaque enregistrement\n    SEND RECORD([aTable])\n  //...\n  // Passer \xe0 l'enregistrement suivant\n    NEXT RECORD([aTable])\n End for\n")),(0,a.kt)("p",null,"La plupart des structures ",(0,a.kt)("inlineCode",{parentName:"p"},"For...End for")," que vous \xe9crirez dans vos bases ressembleront \xe0 celles pr\xe9sent\xe9es ci-dessus."),(0,a.kt)("h3",l({},{id:"d\xe9cr\xe9menter-la-variable-compteur"}),"D\xe9cr\xe9menter la variable Compteur"),(0,a.kt)("p",null,"Dans certains cas, vous pouvez souhaiter disposer d'une boucle dont la valeur de la variable compteur d\xe9cro\xeet au lieu de cro\xeetre. Pour cela, ",(0,a.kt)("em",{parentName:"p"},"Start_Expression")," doit \xeatre sup\xe9rieure \xe0 ",(0,a.kt)("em",{parentName:"p"},"End_Expression")," et ",(0,a.kt)("em",{parentName:"p"},"Increment_Expression")," doit \xeatre n\xe9gative. Les exemples suivants effectuent les m\xeames t\xe2ches que les pr\xe9c\xe9dents, mais en sens inverse :"),(0,a.kt)("ol",l({},{start:5}),(0,a.kt)("li",{parentName:"ol"},"La boucle suivante s'ex\xe9cute 100 fois :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," For(vCounter;100;1;-1)\n  //Faire quelque chose\n End for\n")),(0,a.kt)("ol",l({},{start:6}),(0,a.kt)("li",{parentName:"ol"},"L'exemple suivant permet de traiter tous les \xe9l\xe9ments du tableau anArray :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," For($vlElem;Size of array(anArray);1;-1)\n  //Faire quelque chose avec l'\xe9l\xe9ment\n    anArray{$vlElem}:=...\n End for\n")),(0,a.kt)("ol",l({},{start:7}),(0,a.kt)("li",{parentName:"ol"},"L'exemple suivant permet d'examiner chaque caract\xe8re du texte vtSomeText :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," For($vlChar;Length(vtSomeText);1;-1)\n  //Faire quelque chose avec le caract\xe8re si c'est une tabulation\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n")),(0,a.kt)("ol",l({},{start:8}),(0,a.kt)("li",{parentName:"ol"},"L'exemple suivant permet de traiter tous les enregistrements de la s\xe9lection de la table ","[aTable]"," :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," LAST RECORD([aTable])\n For($vlRecord;Records in selection([aTable]);1;-1)\n  //Faire quelque chose avec chaque enregistrement\n    SEND RECORD([aTable])\n  //...\n  //Passer \xe0 l'enregistrement pr\xe9c\xe9dent\n    PREVIOUS RECORD([aTable])\n End for\n")),(0,a.kt)("h3",l({},{id:"incrementer-la-variable-compteur-de-plus-de-1"}),"Incrementer la variable compteur de plus de 1"),(0,a.kt)("p",null,"Si vous le souhaitez, vous pouvez passer dans ",(0,a.kt)("em",{parentName:"p"},"Increment_Expression")," une valeur (positive ou n\xe9gative) dont la valeur absolue est sup\xe9rieure \xe0 un."),(0,a.kt)("ol",l({},{start:9}),(0,a.kt)("li",{parentName:"ol"},"La boucle suivante ne traite que les \xe9l\xe9ments pairs du tableau anArray :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," For($vlElem;2;Size of array(anArray);2)\n  //Faire quelque chose avec l'\xe9l\xe9ment 2,4...2n\n    anArray{$vlElem}:=...\n End for\n")),(0,a.kt)("h3",l({},{id:"comparaison-des-structures-r\xe9p\xe9titives"}),"Comparaison des structures r\xe9p\xe9titives"),(0,a.kt)("p",null,"Revenons au premier exemple ",(0,a.kt)("inlineCode",{parentName:"p"},"For...End for"),". La boucle suivante s'ex\xe9cute 100 fois :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," For(vCounter;1;100)\n  //Faire quelque chose\n End for\n")),(0,a.kt)("p",null,"Il est int\xe9ressant d'examiner la mani\xe8re dont les boucles ",(0,a.kt)("inlineCode",{parentName:"p"},"While...End while")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," effectuent la m\xeame action. Voici la boucle ",(0,a.kt)("inlineCode",{parentName:"p"},"While...End while")," \xe9quivalente :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," $i :=1 // Initialisation du compteur\nWhile ($i<=100) // Boucle 100 fois\n  // Faire quelque chose\n    $i :=$i +1 // Il faut incr\xe9menter le compteur\n End while\n")),(0,a.kt)("p",null,"Voici la boucle ",(0,a.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," \xe9quivalente :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," $i :=1 // Initialisation du compteur\n Repeat\n  // Faire quelque chose\n    $i :=$i +1 // Il faut incr\xe9menter le compteur\nUntil($i=100) // Boucle 100 fois\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Astuce :")," La boucle ",(0,a.kt)("inlineCode",{parentName:"p"},"For...End for")," est g\xe9n\xe9ralement plus rapide que les boucles ",(0,a.kt)("inlineCode",{parentName:"p"},"While...End while")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," car 4D teste la condition en interne pour chaque cycle de la boucle et incr\xe9mente lui-m\xeame le compteur. Par cons\xe9quent, nous vous conseillons de pr\xe9f\xe9rer \xe0 chaque fois que c'est possible la structure ",(0,a.kt)("inlineCode",{parentName:"p"},"For...End for"),"."),(0,a.kt)("h3",l({},{id:"optimiser-lex\xe9cution-de-forend-for"}),"Optimiser l'ex\xe9cution de For...End for"),(0,a.kt)("p",null,"Vous pouvez utiliser comme compteur une variable interprocess, process ou locale, et lui attribuer le type R\xe9el, Entier ou Entier long. Pour des boucles longues, et particuli\xe8rement en mode compil\xe9, nous vous conseillons d'employer des variables locales de type Entier long."),(0,a.kt)("ol",l({},{start:10}),(0,a.kt)("li",{parentName:"ol"},"Voici un exemple :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," C_LONGINT($vlCounter) // Utilisons une variable locale de type Entier long\nFor($vlCounter;1;10000)\n  // Faire quelque chose\n  End for\n")),(0,a.kt)("h3",l({},{id:"structures-forend-for-embo\xeet\xe9es"}),"Structures For...End for embo\xeet\xe9es"),(0,a.kt)("p",null,"Vous pouvez embo\xeeter autant de structures r\xe9p\xe9titives que vous voulez (dans les limites du raisonnable). Cela s'applique aux structures de type ",(0,a.kt)("inlineCode",{parentName:"p"},"For...End for"),". Il y a dans ce cas une erreur courante \xe0 \xe9viter : assurez-vous d'utiliser une variable compteur diff\xe9rente par structure de boucle."),(0,a.kt)("p",null,"Voici deux exemples :"),(0,a.kt)("ol",l({},{start:11}),(0,a.kt)("li",{parentName:"ol"},"L'exemple suivant permet de traiter tous les \xe9l\xe9ments d'un tableau \xe0 deux dimensions :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," For($vlElem;1;Size of array(anArray))\n  //...\n  // Faire quelque chose avec la ligne\n  // ...\n    For($vlSubElem;1;Size of array(anArray{$vlElem}))\n  //Faire quelque chose avec l'\xe9l\xe9ment\n       anArray{$vlElem}{$vlSubElem}:=...\n    End for\n End for\n")),(0,a.kt)("ol",l({},{start:12}),(0,a.kt)("li",{parentName:"ol"},"L'exemple suivant construit un tableau de pointeurs vers tous les champs de type Date pr\xe9sents dans la base :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," ARRAY POINTER($apDateFields;0)\n $vlElem:=0\n For($vlTable;1;Get last table number)\n    If(Is table number valid($vlTable))\n       For($vlField;1;Get last field number($vlTable))\n          If(Is field number valid($vlTable;$vlField))\n             $vpField:=Field($vlTable;$vlField)\n             If(Type($vpField->)=Is date)\n                $vlElem:=$vlElem+1\n                INSERT IN ARRAY($apDateFields;$vlElem)\n                $apDateFields{$vlElem}:=$vpField\n             End if\n          End if\n       End for\n    End if\n End for\n")),(0,a.kt)("h2",l({},{id:"for-eachend-for-each"}),"For each...End for each"),(0,a.kt)("p",null,"La syntaxe de la structure r\xe9p\xe9titive (ou boucle) ",(0,a.kt)("inlineCode",{parentName:"p"},"For each...End for each")," est la suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," For each(Element_courant;Expression{;debut{;fin}}){Until|While}(Expression_bool\xe9enne)}\n    instruction(s)\n End for each\n")),(0,a.kt)("p",null,"La structure ",(0,a.kt)("inlineCode",{parentName:"p"},"For each...End for each")," ex\xe9cute le cycle d'instructions d\xe9finies pour chaque ",(0,a.kt)("em",{parentName:"p"},"El\xe9ment_courant")," de ",(0,a.kt)("em",{parentName:"p"},"Expression"),". Le type de ",(0,a.kt)("em",{parentName:"p"},"El\xe9ment_courant")," d\xe9pend du type de ",(0,a.kt)("em",{parentName:"p"},"Expression"),". La boucle ",(0,a.kt)("inlineCode",{parentName:"p"},"For each...End for each")," peut it\xe9rer parmi trois types d'",(0,a.kt)("em",{parentName:"p"},"Expression")," :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"collections : boucle sur chaque \xe9l\xe9ment de la collection,"),(0,a.kt)("li",{parentName:"ul"},"entity selections : boucle sur chaque entity,"),(0,a.kt)("li",{parentName:"ul"},"objets : boucle sur chaque propri\xe9t\xe9 d'objet.")),(0,a.kt)("p",null,"Le tableau suivant compare les trois types de ",(0,a.kt)("inlineCode",{parentName:"p"},"Pour chaque...Fin de chaque")," :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Boucle sur collections"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Boucle sur entity selections"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Boucle sur objets"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Type El\xe9ment_courant"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Variable du m\xeame type que les \xe9l\xe9ments de la collection"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Entit\xe9 (entity)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Variable texte")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Types d\u2019expressions"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Collection (avec des \xe9l\xe9ments du m\xeame type)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Entity selection"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre de boucles (par d\xe9faut)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre d'\xe9l\xe9ments de la collection"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre d'entit\xe9s dans la s\xe9lection"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Nombre de propri\xe9t\xe9s d'objets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Prise en charge de Param\xe8tres d\xe9but / fin"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Oui"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Non")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Le nombre de boucles est \xe9valu\xe9 au d\xe9marrage et ne changera pas en cours de traitement. L'ajout ou la suppression d'\xe9l\xe9ments pendant la boucle est donc d\xe9conseill\xe9 car il pourra en r\xe9sulter une redondance ou un manque d'it\xe9rations."),(0,a.kt)("li",{parentName:"ul"},"Par d\xe9faut, les ",(0,a.kt)("em",{parentName:"li"},"instructions")," incluses sont ex\xe9cut\xe9es pour chaque valeur de ",(0,a.kt)("em",{parentName:"li"},"Expression"),". Il est toutefois possible de sortir de la boucle en testant une condition soit au d\xe9but de chaque it\xe9ration (",(0,a.kt)("inlineCode",{parentName:"li"},"While"),") ou \xe0 la fin de chaque it\xe9ration (",(0,a.kt)("inlineCode",{parentName:"li"},"Until"),")."),(0,a.kt)("li",{parentName:"ul"},"Les param\xe8tres optionnels ",(0,a.kt)("em",{parentName:"li"},"d\xe9but")," et ",(0,a.kt)("em",{parentName:"li"},"fin")," peuvent \xeatre utilis\xe9s avec les collections et les entity selections afin de d\xe9finir des bornes pour la boucle."),(0,a.kt)("li",{parentName:"ul"},"La boucle ",(0,a.kt)("inlineCode",{parentName:"li"},"For each...End for each")," peut \xeatre utilis\xe9e sur une ",(0,a.kt)("strong",{parentName:"li"},"collection partag\xe9e")," ou un ",(0,a.kt)("strong",{parentName:"li"},"objet partag\xe9"),". Si vous souhaitez modifier un ou plusieurs \xe9l\xe9ments des propri\xe9t\xe9s d'objets ou de la collection dans le code, vous devez utiliser les mots-cl\xe9s ",(0,a.kt)("inlineCode",{parentName:"li"},"Use...End use"),". Vous pouvez, si vous le souhaitez, appeler les mots-cl\xe9s ",(0,a.kt)("inlineCode",{parentName:"li"},"Use...End use")," :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"avant de saisir la boucle, si les \xe9l\xe9ments doivent \xeatre modifi\xe9s ensemble pour des raisons d'int\xe9grit\xe9, ou bien"),(0,a.kt)("li",{parentName:"ul"},"dans la boucle, lorsque quelques \xe9l\xe9ments/propri\xe9t\xe9s seulement doivent \xeatre modifi\xe9s et qu'aucune gestion de l'int\xe9grit\xe9 n'est requise.")))),(0,a.kt)("h3",l({},{id:"boucle-sur-collections"}),"Boucle sur collections"),(0,a.kt)("p",null,"Lorsque ",(0,a.kt)("inlineCode",{parentName:"p"},"For each...End for each")," est utilis\xe9e avec une ",(0,a.kt)("em",{parentName:"p"},"Expression")," de type ",(0,a.kt)("em",{parentName:"p"},"Collection"),", le param\xe8tre ",(0,a.kt)("em",{parentName:"p"},"El\xe9ment_courant")," est une variable du m\xeame type que les \xe9l\xe9ments de la collection. Par d\xe9faut, le nombre de boucles est bas\xe9 sur le nombre d'\xe9l\xe9ments de la collection."),(0,a.kt)("p",null,"La collection doit contenir uniquement des \xe9l\xe9ments du m\xeame type. Dans le cas contraire, une erreur sera retourn\xe9e d\xe8s que la premi\xe8re valeur de type diff\xe9rent sera assign\xe9e \xe0 la variable ",(0,a.kt)("em",{parentName:"p"},"El\xe9ment_courant"),"."),(0,a.kt)("p",null,"A chaque it\xe9ration de la boucle, la variable ",(0,a.kt)("em",{parentName:"p"},"El\xe9ment_courant")," re\xe7oit automatiquement l'\xe9l\xe9ment correspondant de la collection. Vous devez tenir compte des points suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("em",{parentName:"li"},"Current_Item")," variable must be of the same type as the collection elements. If any collection item is not of the same type as the variable, an error is generated and the loop stops."),(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("em",{parentName:"li"},"Current_Item")," variable is of the object type or collection type (i.e. Si un seul \xe9l\xe9ment de la collection n'est pas du m\xeame type que la variable, une erreur est g\xe9n\xe9r\xe9e et la boucle s'arr\xeate."),(0,a.kt)("li",{parentName:"ul"},"Si la collection contient des \xe9l\xe9ments de valeur ",(0,a.kt)("strong",{parentName:"li"},"Null"),", une erreur sera g\xe9n\xe9r\xe9e si le type de la variable ",(0,a.kt)("em",{parentName:"li"},"El\xe9ment_courant")," ne prend pas en charge la valeur ",(0,a.kt)("strong",{parentName:"li"},"Null")," (comme par exemple les variables entier long).")),(0,a.kt)("h4",l({},{id:"exemple-2"}),"Exemple"),(0,a.kt)("p",null,"Vous souhaitez calculer quelques statistiques sur une collection de nombres :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," C_COLLECTION($nums)\n $nums:=New collection(10;5001;6665;33;1;42;7850)\n C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)\n For each($item;$nums)\n    If($item%2=0)\n       $vEven:=$vEven+1\n    Else\n       $vOdd:=$vOdd+1\n    End if\n    Case of\n       :($item<5000)\n          $vUnder:=$vUnder+1\n       :($item>6000)\n          $vOver:=$vOver+1\n    End case\n End for each\n  //$vEven=3, $vOdd=4\n  //$vUnder=4,$vOver=2\n")),(0,a.kt)("h3",l({},{id:"boucle-sur-entity-selections"}),"Boucle sur entity selections"),(0,a.kt)("p",null,"Lorsque ",(0,a.kt)("inlineCode",{parentName:"p"},"For each...End for each")," est utilis\xe9e avec une ",(0,a.kt)("em",{parentName:"p"},"Expression")," de type ",(0,a.kt)("em",{parentName:"p"},"Entity selection"),", le param\xe8tre ",(0,a.kt)("em",{parentName:"p"},"El\xe9ment_courant")," contient l'entity en cours de traitement."),(0,a.kt)("p",null,"Le nombre de boucles est bas\xe9 sur le nombre d'entities pr\xe9sentes dans l'entity selection. A chaque it\xe9ration de la boucle, le param\xe8tre ",(0,a.kt)("em",{parentName:"p"},"El\xe9ment_courant")," re\xe7oit automatiquement l'entity qui est en cours de traitement."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note :")," Si l'entity selection contient une entity qui a \xe9t\xe9 supprim\xe9e entre-temps par un autre process, elle est automatiquement ignor\xe9e durant la boucle."),(0,a.kt)("p",null,"N'oubliez pas que toute modification effectu\xe9e sur l'entity en cours de traitement doit \xeatre explicitement sauvegard\xe9e (si n\xe9cessaire) \xe0 l'aide de la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"entity.save( )"),"."),(0,a.kt)("h4",l({},{id:"exemple-3"}),"Exemple"),(0,a.kt)("p",null,"Vous souhaitez augmenter le salaire de tous les employ\xe9s britanniques dans une entity selection :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," C_OBJECT(emp)\n For each(emp;ds.Employees.query(\"country='UK'\"))\n    emp.salary:=emp.salary*1,03\n    emp.save()\n End for each\n")),(0,a.kt)("h3",l({},{id:"boucles-sur-des-propri\xe9t\xe9s-dobjets"}),"Boucles sur des propri\xe9t\xe9s d'objets"),(0,a.kt)("p",null,"Lorsque ",(0,a.kt)("inlineCode",{parentName:"p"},"For each...End for each")," est utilis\xe9e avec une ",(0,a.kt)("em",{parentName:"p"},"Expression")," de type Objet, le param\xe8tre ",(0,a.kt)("em",{parentName:"p"},"El\xe9ment_courant")," est une variable texte qui re\xe7oit automatiquement le nom de la propri\xe9t\xe9 en cours de traitement."),(0,a.kt)("p",null,"Les propri\xe9t\xe9s de l'objet sont it\xe9r\xe9es en fonction de leur ordre de cr\xe9ation. Pendant la boucle, il est possible d'ajouter ou de supprimer des propri\xe9t\xe9s dans l'objet, sans pour autant modifier le nombre de boucles qui reste bas\xe9 sur le nombre de propri\xe9t\xe9s initial de l'objet."),(0,a.kt)("h4",l({},{id:"exemple-4"}),"Exemple"),(0,a.kt)("p",null,"Vous souhaitez passer en majuscules les propri\xe9t\xe9s contenant des noms dans l'objet suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'{\n    "firstname": "gregory",\n    "lastname": "badikora",\n    "age": 20\n}\n')),(0,a.kt)("p",null,"Vous pouvez \xe9crire :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," For each(property;vObject)\n    If(Value type(vObject[property])=Is text)\n       vObject[property]:=Uppercase(vObject[property])\n    End if\n End for each\n")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'{\n    "firstname": "GREGORY",\n    "lastname": "BADIKORA",\n    "age": 20\n}\n')),(0,a.kt)("h3",l({},{id:"param\xe8tres-d\xe9but--fin"}),"Param\xe8tres d\xe9but / fin"),(0,a.kt)("p",null,"Vous pouvez d\xe9finir des bornes pour l'it\xe9ration \xe0 l'aide des param\xe8tres optionnels d\xe9but et fin."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note :")," Les param\xe8tres ",(0,a.kt)("em",{parentName:"p"},"d\xe9but")," et ",(0,a.kt)("em",{parentName:"p"},"fin")," sont utilisables uniquement avec les boucles sur des collections et des entity selections (ils sont ignor\xe9s avec les boucles sur des propri\xe9t\xe9s d'objets)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dans le param\xe8tre ",(0,a.kt)("em",{parentName:"li"},"d\xe9but"),", passez la position de l'\xe9l\xe9ment de ",(0,a.kt)("em",{parentName:"li"},"Expression")," auquel d\xe9marrer l'it\xe9ration (",(0,a.kt)("em",{parentName:"li"},"d\xe9but")," est inclus)."),(0,a.kt)("li",{parentName:"ul"},"Dans le param\xe8tre ",(0,a.kt)("em",{parentName:"li"},"fin"),", vous pouvez passer la position de l'\xe9l\xe9ment de ",(0,a.kt)("em",{parentName:"li"},"Expression")," auquel stopper l'it\xe9ration (",(0,a.kt)("em",{parentName:"li"},"fin")," est exclus).")),(0,a.kt)("p",null,"Si ",(0,a.kt)("em",{parentName:"p"},"fin")," est omis ou si ",(0,a.kt)("em",{parentName:"p"},"fin")," est plus grand que le nombre d'\xe9l\xe9ments de ",(0,a.kt)("em",{parentName:"p"},"Expression"),", les \xe9l\xe9ments sont it\xe9r\xe9s depuis ",(0,a.kt)("em",{parentName:"p"},"d\xe9but")," jusqu'au dernier inclus. Si les param\xe8tres ",(0,a.kt)("em",{parentName:"p"},"d\xe9but")," et ",(0,a.kt)("em",{parentName:"p"},"fin")," sont des valeurs positives, ils repr\xe9sentent des positions d'\xe9l\xe9ments dans ",(0,a.kt)("em",{parentName:"p"},"Expression"),". Si ",(0,a.kt)("em",{parentName:"p"},"begin")," est une valeur n\xe9gative, elle est recalcul\xe9e comme ",(0,a.kt)("inlineCode",{parentName:"p"},"begin:=begin+Taille expression")," (elle est consid\xe9r\xe9e comme un d\xe9calage \xe0 partir de la fin de ",(0,a.kt)("em",{parentName:"p"},"Expression"),"). Si la valeur calcul\xe9e est n\xe9gative, ",(0,a.kt)("em",{parentName:"p"},"begin")," prend la valeur 0. ",(0,a.kt)("strong",{parentName:"p"},"Note :")," M\xeame si d\xe9but est une valeur n\xe9gative, l'it\xe9ration est toujours effectu\xe9e dans le m\xeame ordre. Si ",(0,a.kt)("em",{parentName:"p"},"fin")," est une valeur n\xe9gative, elle est recalcul\xe9e comme ",(0,a.kt)("inlineCode",{parentName:"p"},"fin:=fin+Taille expression")),(0,a.kt)("p",null,"Par exemple :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"une collection contient 10 \xe9l\xe9ments (num\xe9rot\xe9s de 0 \xe0 9)"),(0,a.kt)("li",{parentName:"ul"},"d\xe9but=-4 > d\xe9but=-4+10=6 > l'it\xe9ration d\xe9marre au 6e \xe9l\xe9ment (num\xe9ro 5)"),(0,a.kt)("li",{parentName:"ul"},"fin=-2 > fin=-2+10=8 > l'it\xe9ration stoppe avant le 8e \xe9l\xe9ment (num\xe9ro 7), i.e.")),(0,a.kt)("h4",l({},{id:"exemple-5"}),"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' C_COLLECTION($col;$col2)\n $col:=New collection("a";"b";"c";"d";"e")\n $col2:=New collection(1;2;3)\n C_TEXT($item)\n For each($item;$col;0;3)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c"]\n For each($item;$col;-2;-1)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c","d"]\n')),(0,a.kt)("h3",l({},{id:"conditions-until-et-while"}),"Conditions Until et While"),(0,a.kt)("p",null,"Vous pouvez contr\xf4ler l'ex\xe9cution de ",(0,a.kt)("inlineCode",{parentName:"p"},"For each...End for each")," en ajoutant une condition ",(0,a.kt)("inlineCode",{parentName:"p"},"Jusque")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"Tant que")," \xe0 la boucle. Lorsqu'une instruction ",(0,a.kt)("inlineCode",{parentName:"p"},"Until(condition)")," est associ\xe9e \xe0 la boucle, l'it\xe9ration stoppe d\xe8s que la condition est \xe9valu\xe9e \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"True"),", tandis que dans le cas d'une instruction ",(0,a.kt)("inlineCode",{parentName:"p"},"While(condition)"),", l'it\xe9ration stoppe d\xe8s que la condition est \xe9valu\xe9e \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,a.kt)("p",null,"Vous pouvez passer un mot-cl\xe9 ou l'autre en fonction de vos besoins :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La condition ",(0,a.kt)("inlineCode",{parentName:"li"},"Until")," est test\xe9e \xe0 la fin de chaque it\xe9ration, donc si ",(0,a.kt)("em",{parentName:"li"},"Expression")," n'est ni vide ni Null, la boucle sera ex\xe9cut\xe9e au moins une fois."),(0,a.kt)("li",{parentName:"ul"},"La condition ",(0,a.kt)("inlineCode",{parentName:"li"},"While")," est test\xe9e au d\xe9but de chaque it\xe9ration, donc en fonction du r\xe9sultat de la condition, la boucle peut ne pas \xeatre ex\xe9cut\xe9e du tout.")),(0,a.kt)("h4",l({},{id:"exemple-6"}),"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"})," $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)\n\n $total:=0\n For each($num;$colNum)While($total<30) //test\xe9 au d\xe9but\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)\n\n $total:=1000\n For each($num;$colNum)Until($total>30) //test\xe9 \xe0 la fin\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 1001 (1000+1)\n")))}c.isMDXComponent=!0}}]);