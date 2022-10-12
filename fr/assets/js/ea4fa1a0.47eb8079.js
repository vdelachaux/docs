"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85703],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(a),c=l,b=p["".concat(o,".").concat(c)]||p[c]||m[c]||r;return a?n.createElement(b,u(u({ref:t},d),{},{components:a})):n.createElement(b,u({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,u=new Array(r);u[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,u[1]=s;for(var i=2;i<r;i++)u[i]=a[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},25742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>u,metadata:()=>o,toc:()=>d});a(67294);var n=a(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const u={id:"arrays",title:"Tableaux"},s=void 0,o={unversionedId:"Concepts/arrays",id:"version-19/Concepts/arrays",title:"Tableaux",description:"Un tableau est une s\xe9rie ordonn\xe9e de variables de m\xeame type. Chaque variable est appel\xe9e un \xe9l\xe9ment du tableau. La taille du tableau doit \xeatre d\xe9finie au moment de sa cr\xe9ation ; vous pouvez ensuite la modifier aussi souvent que n\xe9cessaire en ajoutant, ins\xe9rant, ou supprimant des \xe9l\xe9ments, ou en appelant de nouveau la commande que vous avez utilis\xe9e pour cr\xe9er le tableau. Les \xe9l\xe9ments sont num\xe9rot\xe9s de 1 \xe0 N, o\xf9 N est la taille du tableau. Un tableau a toujours un \xe9l\xe9ment z\xe9ro. Les tableaux sont des variables 4D. Comme toute variable, un tableau a une port\xe9e et suit les r\xe8gles du langage 4D, bien qu'il existe quelques diff\xe9rences sp\xe9cifiques.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/arrays.md",sourceDirName:"Concepts",slug:"/Concepts/arrays",permalink:"/docs/fr/19/Concepts/arrays",draft:!1,tags:[],version:"19",frontMatter:{id:"arrays",title:"Tableaux"},sidebar:"docs",previous:{title:"Variables",permalink:"/docs/fr/19/Concepts/variables"},next:{title:"Methods",permalink:"/docs/fr/19/Concepts/methods"}},i={},d=[{value:"Cr\xe9er des tableaux",id:"cr\xe9er-des-tableaux",level:2},{value:"Affecter des valeurs dans un tableau",id:"affecter-des-valeurs-dans-un-tableau",level:2},{value:"Affecter un tableau \xe0 un autre",id:"affecter-un-tableau-\xe0-un-autre",level:3},{value:"Utiliser l&#39;\xe9l\xe9ment z\xe9ro d&#39;un tableau",id:"utiliser-l\xe9l\xe9ment-z\xe9ro-dun-tableau",level:2},{value:"Tableaux \xe0 deux dimensions",id:"tableaux-\xe0-deux-dimensions",level:2},{value:"Tableaux et m\xe9moire",id:"tableaux-et-m\xe9moire",level:2}],m={toc:d};function p(e){var{components:t}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",l({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un ",(0,n.kt)("strong",{parentName:"p"},"tableau")," est une s\xe9rie ordonn\xe9e de ",(0,n.kt)("strong",{parentName:"p"},"variables")," de m\xeame type. Chaque variable est appel\xe9e un ",(0,n.kt)("strong",{parentName:"p"},"\xe9l\xe9ment")," du tableau. La taille du tableau doit \xeatre d\xe9finie au moment de sa cr\xe9ation ; vous pouvez ensuite la modifier aussi souvent que n\xe9cessaire en ajoutant, ins\xe9rant, ou supprimant des \xe9l\xe9ments, ou en appelant de nouveau la commande que vous avez utilis\xe9e pour cr\xe9er le tableau. Les \xe9l\xe9ments sont num\xe9rot\xe9s de 1 \xe0 N, o\xf9 N est la taille du tableau. Un tableau a toujours un ",(0,n.kt)("a",l({parentName:"p"},{href:"#using-the-element-zero-of-an-array"}),"\xe9l\xe9ment z\xe9ro"),". Les tableaux sont des variables 4D. Comme toute variable, un tableau a une port\xe9e et suit les r\xe8gles du langage 4D, bien qu'il existe quelques diff\xe9rences sp\xe9cifiques."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"G\xe9n\xe9ralement, il est recommand\xe9 d'utiliser des ",(0,n.kt)("strong",{parentName:"p"},"collections")," plut\xf4t que des ",(0,n.kt)("strong",{parentName:"p"},"tableaux"),". Les collections sont plus souples et fournissent un large \xe9ventail de m\xe9thodes sp\xe9cifiques. Pour plus d'informations, veuillez consutler la section ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/fr/19/Concepts/collection"}),"Collection"),".")),(0,n.kt)("h2",l({},{id:"cr\xe9er-des-tableaux"}),"Cr\xe9er des tableaux"),(0,n.kt)("p",null,"Vous cr\xe9ez un tableau au moyen de l'une des commandes de d\xe9claration du th\xe8me \"Tableaux\". Chaque commande de d\xe9claration de tableau peut cr\xe9er ou redimensionner des tableaux \xe0 une ou \xe0 deux dimensions. Pour plus d'informations sur les tableaux \xe0 deux dimensions, reportez-vous \xe0 la section ",(0,n.kt)("a",l({parentName:"p"},{href:"#two-dimensional-arrays"}),"Tableaux \xe0 deux dimensions"),"."),(0,n.kt)("p",null,"Cette ligne de code cr\xe9e (d\xe9clare) un tableau d'entiers de 10 \xe9l\xe9ments :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"})," ARRAY INTEGER(aiAnArray;10)\n")),(0,n.kt)("p",null,"Ensuite, cette ligne de code redimensionne le m\xeame tableau \xe0 20 \xe9l\xe9ments :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"ARRAY INTEGER(aiAnArray;20)\n")),(0,n.kt)("p",null,"Enfin, cette ligne de code redimensionne le m\xeame tableau \xe0 0 \xe9l\xe9ment :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"ARRAY INTEGER(aiAnArray;0)\n")),(0,n.kt)("h2",l({},{id:"affecter-des-valeurs-dans-un-tableau"}),"Affecter des valeurs dans un tableau"),(0,n.kt)("p",null,"Vous r\xe9f\xe9rencez les \xe9l\xe9ments d'un tableau en utilisant des accolades ({\u2026} ). Un nombre entre accolades donne acc\xe8s \xe0 l'adresse d'un \xe9l\xe9ment particulier. L'exemple ci-dessous place cinq noms dans le tableau nomm\xe9 atNoms et les affiche ensuite dans une fen\xeatre d'alerte :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT(atNames;5)\n atNames{1}:="Richard"\n atNames{2}:="Sarah"\n atNames{3}:="Sam"\n atNames{4}:="Jane"\n atNames{5}:="John"\n For($vlElem;1;5)\n    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})\n End for\n')),(0,n.kt)("p",null,"Notez la syntaxe atNoms{$vlElem}. Au lieu de sp\xe9cifier un nombre litt\xe9ral comme atNoms{3}, vous pouvez utiliser une variable num\xe9rique indiquant \xe0 quel \xe9l\xe9ment d'un tableau vous acc\xe9dez. Si vous utilisez les it\xe9rations permises par les structures r\xe9p\xe9titives (",(0,n.kt)("inlineCode",{parentName:"p"},"For...End for"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"While...End while"),"), vous pouvez acc\xe9der \xe0 tout ou partie des \xe9l\xe9ments d'un tableau avec tr\xe8s peu de code."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important :")," Veillez \xe0 ne pas confondre l'op\xe9rateur d'affectation (:=) avec l'op\xe9rateur de comparaison \xe9gal (=). L'affectation et la comparaison sont deux op\xe9rations totalement diff\xe9rentes."),(0,n.kt)("h3",l({},{id:"affecter-un-tableau-\xe0-un-autre"}),"Affecter un tableau \xe0 un autre"),(0,n.kt)("p",null,"Contrairement \xe0 ce que vous pouvez faire avec des variables de type Texte ou Cha\xeene, vous ne pouvez pas affecter un tableau \xe0 un autre tableau. Pour copier (affecter) un tableau \xe0 un autre, utilisez la fonction ",(0,n.kt)("inlineCode",{parentName:"p"},"COPY ARRAY"),"."),(0,n.kt)("h2",l({},{id:"utiliser-l\xe9l\xe9ment-z\xe9ro-dun-tableau"}),"Utiliser l'\xe9l\xe9ment z\xe9ro d'un tableau"),(0,n.kt)("p",null,"Un tableau a toujours un \xe9l\xe9ment z\xe9ro. M\xeame si l'\xe9l\xe9ment z\xe9ro n'est pas affich\xe9 lorsqu'un tableau est utilis\xe9 pour remplir un objet de formulaire, vous pouvez l'utiliser sans r\xe9serve(*) dans le langage."),(0,n.kt)("p",null,"Voici un autre exemple : vous souhaitez initialiser un objet de formulaire avec une valeur texte mais sans d\xe9finir de valeur par d\xe9faut. Vous pouvez utiliser l'\xe9l\xe9ment z\xe9ro du tableau :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'  // // m\xe9thode pour une combo box ou une liste d\xe9roulante  \n  // li\xe9e au tableau de variables atName\n Case of\n    : Form event code=On Load)\n  // Initialise le tableau (comme indiqu\xe9 ci-dessus)\n  // Mais utilise l\'\xe9l\xe9ment z\xe9ro\n        ARRAY TEXT(atName;5)\n        atName{0}:=Veuillez s\xe9lectionner un \xe9l\xe9ment"\n        atName{1}:="Text1"\n        atName{2}:="Text2"\n        atName{3}:="Text3"\n        atName{4}:="Text4"\n        atName{5}:="Text5"\n    // Positionne le tableau sur l\'\xe9l\xe9ment 0\n        atName: = 0\n End case\n')),(0,n.kt)("p",null,"(*) However, there is one exception: in an array type List Box, the zero element is used internally to store the previous value of an element being edited, so it is not possible to use it in this particular context."),(0,n.kt)("h2",l({},{id:"tableaux-\xe0-deux-dimensions"}),"Tableaux \xe0 deux dimensions"),(0,n.kt)("p",null,"Chaque commande de d\xe9claration de tableau permet de cr\xe9er ou de redimensionner des tableaux \xe0 une ou \xe0 deux dimensions. Voici un exemple :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT(atTopics;100;50) // Cr\xe9er un tableau texte compos\xe9 de 100 lignes de 50 colonnes\n")),(0,n.kt)("p",null,"Les tableaux \xe0 deux dimensions sont essentiellement des objets de langage ; vous ne pouvez ni les afficher ni les imprimer."),(0,n.kt)("p",null,"Dans l'exemple pr\xe9d\xe9dent :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"atTopics est un tableau \xe0 deux dimensions"),(0,n.kt)("li",{parentName:"ul"},"atTopics{8}{5} est le 5e \xe9l\xe9ment (5e colonne...) de la 8e ligne"),(0,n.kt)("li",{parentName:"ul"},"atTopics{20} est la 20e ligne et est elle-m\xeame un tableau \xe0 une dimension"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Size of array(atTopics)")," retourne 100, qui est le nombre de lignes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Size of array(atTopics{17})")," retourne 50, qui est le nombre de colonnes de la 17e ligne")),(0,n.kt)("p",null,"Dans l'exemple suivant, un pointeur vers chaque champ de chaque table de la base est stock\xe9 dans un tableau \xe0 deux dimensions :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' C_LONGINT($vlLastTable;$vlLastField)\n C_LONGINT($vlFieldNumber)\n  // Cr\xe9er autant de lignes (vides et sans colonnes) qu\'il y a de tables\n  $vlLastTable:=Get last table number\n ARRAY POINTER(<>apFields;$vlLastTable;0) //Tableau 2D avec N lignes et z\xe9ro colonnes\n  // Pour chaque table\n For($vlTable;1;$vlLastTable)\n    If(Is table number valid($vlTable))\n       $vlLastField:=Get last field number($vlTable)\n  // Donner la valeur des \xe9l\xe9ments\n             $vlColumnNumber:=0\n       For($vlField;1;$vlLastField)\n          If(Is field number valid($vlTable;$vlField))\n             $vlColumnNumber:=$vlColumnNumber+1\n  // Ins\xe9rer une colonne dans la ligne de la table en cours\n              INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)\n  // Affecter la "celulle" avec le pointeur\n             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)\n          End if\n       End for\n    End if\n End for\n')),(0,n.kt)("p",null,"Dans la mesure o\xf9 le tableau \xe0 deux dimensions a \xe9t\xe9 initialis\xe9, vous pouvez obtenir ainsi les pointeurs vers les champs d'une table de votre choix :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"  // Obtenir les pointeurs vers les champs pour la table affich\xe9e \xe0 l'\xe9cran:\n COPY ARRAY(\u25caapFields{Table(Current form table)};$apTheFieldsIamWorkingOn)\n  // Initialiser les champs bool\xe9ens et date\nFor($vlElem;1;Size of array($apTheFieldsIamWorkingOn))\n    Case of\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=True\n    End case\n End for\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note :")," Comme le montre cet exemple, les lignes des tableaux \xe0 deux dimensions peuvent \xeatre ou non de la m\xeame taille."),(0,n.kt)("h2",l({},{id:"tableaux-et-m\xe9moire"}),"Tableaux et m\xe9moire"),(0,n.kt)("p",null,"A la diff\xe9rence des donn\xe9es que vous stockez sur disque lorsque vous utilisez des tables ou des enregistrements, un tableau r\xe9side toujours en m\xe9moire dans son int\xe9gralit\xe9."),(0,n.kt)("p",null,"Par exemple, si tous les codes postaux am\xe9ricains \xe9taient saisis dans une table ","[Codes Postaux]",", celle-ci contiendrait environ 100 000 enregistrements. De plus, cette table comporterait plusieurs champs : le code postal lui-m\xeame ainsi que la ville, le comt\xe9 et l'\xe9tat correspondants. Si vous ne s\xe9lectionnez que les codes postaux de Californie, 4D cr\xe9e la s\xe9lection d'enregistrements correspondante \xe0 l'int\xe9rieur de la table ","[Codes Postaux]",", et ensuite ne charge les enregistrements que lorsque vous en avez besoin (par exemple, pour les afficher ou les imprimer). En d'autres termes, vous travaillez avec une s\xe9rie ordonn\xe9e de valeurs (du m\xeame type pour chaque champ) partiellement charg\xe9e du disque en m\xe9moire."),(0,n.kt)("p",null,"Proc\xe9der de la m\xeame mani\xe8re avec les tableaux serait laborieux, pour les raisons suivantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pour maintenir les quatre types d'information (code postal, ville, comt\xe9, \xe9tat), vous auriez besoin de quatre grands tableaux en m\xe9moire."),(0,n.kt)("li",{parentName:"ul"},"Comme un tableau r\xe9side en m\xe9moire dans son int\xe9gralit\xe9, vous seriez oblig\xe9 de garder tous les codes postaux en m\xe9moire pendant toute la session de travail, m\xeame si les donn\xe9es n'\xe9taient pas utilis\xe9es en permanence."),(0,n.kt)("li",{parentName:"ul"},"Toujours parce qu'un tableau r\xe9side en m\xe9moire dans son int\xe9gralit\xe9, les quatre tableaux devraient \xeatre charg\xe9s ou sauvegard\xe9s sur le disque \xe0 chaque fois que vous d\xe9marreriez ou quitteriez l'application, quand bien m\xeame les donn\xe9es ne seraient d'aucune utilit\xe9 pour la session de travail.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Conclusion :")," Les tableaux ont pour r\xf4le de manipuler une certaine quantit\xe9 de donn\xe9es pendant une p\xe9riode br\xe8ve. En contrepartie, comme ils r\xe9sident en m\xe9moire, ils sont d'une utilisation rapide et facile."),(0,n.kt)("p",null,"Cependant, dans certaines circonstances, vous pouvez avoir besoin de tableaux contenant des centaines ou des milliers d'\xe9l\xe9ments. Voici les formules \xe0 appliquer pour calculer la quantit\xe9 de m\xe9moire utilis\xe9e pour chaque type de tableau :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type de Tableau"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Calcul de la quantit\xe9 de m\xe9moire en octets"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(1+nombre d'\xe9l\xe9ments) * 12 + somme de la taille de chaque blob")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(31+nombre d'\xe9l\xe9ments)/8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(1+nombre d'\xe9l\xe9ments) * 6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(1+nombre d'\xe9l\xe9ments) * 2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Entier long"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(1+nombre d'\xe9l\xe9ments) * 4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(1+nombre d'\xe9l\xe9ments) * 8 + somme de la taille de chaque objet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Images"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(1+nombre d'\xe9l\xe9ments) * 8 + somme de la taille de chaque image")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Pointeurs"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(1+nombre d'\xe9l\xe9ments) * 8 + somme de la taille de chaque pointeur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Real"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(1+nombre d'\xe9l\xe9ments) * 8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(1+nombre d'\xe9l\xe9ments) ",(0,n.kt)("em",{parentName:"td"}," 20 + (somme de la taille de chaque texte) ")," 2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Heure"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(1+nombre d'\xe9l\xe9ments) * 4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Deux dimensions"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(1+nombre d'\xe9l\xe9ments) * 16 + somme de la taille de chaque tableau")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notes :")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La taille d'un texte en m\xe9moire se calcule par la formule ((Longueur + 1) * 2)"),(0,n.kt)("li",{parentName:"ul"},"Quelques octets suppl\xe9mentaires sont requis pour le rep\xe9rage de l'\xe9l\xe9ment, le nombre d'\xe9l\xe9ments et le tableau lui-m\xeame.")))}p.isMDXComponent=!0}}]);