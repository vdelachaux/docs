"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=o(n),m=a,v=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(v,s(s({ref:t},p),{},{components:n})):r.createElement(v,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var o=2;o<l;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"pointer",title:"Pointeurs"},u=void 0,i={unversionedId:"Concepts/pointer",id:"version-18/Concepts/pointer",title:"Pointeurs",description:"Les variables ou expressions de type Pointeur sont des r\xe9f\xe9rences \xe0 d'autres variables (y compris des tableaux et des \xe9l\xe9ments de tableaux), \xe0 des tables, des champs ou des objets. Il n'existe pas de champ de type Pointeur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/dt_pointer.md",sourceDirName:"Concepts",slug:"/Concepts/pointer",permalink:"/docs/fr/18/Concepts/pointer",draft:!1,tags:[],version:"18",frontMatter:{id:"pointer",title:"Pointeurs"},sidebar:"docs",previous:{title:"Images",permalink:"/docs/fr/18/Concepts/picture"},next:{title:"String",permalink:"/docs/fr/18/Concepts/string"}},o={},p=[{value:"Utiliser des pointeurs : un exemple",id:"utiliser-des-pointeurs--un-exemple",level:2},{value:"Op\xe9rateurs sur les pointeurs",id:"op\xe9rateurs-sur-les-pointeurs",level:2},{value:"Principales utilisations",id:"principales-utilisations",level:2},{value:"Utiliser des pointeurs vers des tables",id:"utiliser-des-pointeurs-vers-des-tables",level:3},{value:"Utiliser des pointeurs vers des champs",id:"utiliser-des-pointeurs-vers-des-champs",level:3},{value:"Utiliser des pointeurs vers des variables",id:"utiliser-des-pointeurs-vers-des-variables",level:3},{value:"Utiliser des pointeurs vers des \xe9l\xe9ments de tableau",id:"utiliser-des-pointeurs-vers-des-\xe9l\xe9ments-de-tableau",level:3},{value:"Utiliser des pointeurs vers des tableaux",id:"utiliser-des-pointeurs-vers-des-tableaux",level:3},{value:"Passer des pointeurs aux m\xe9thodes",id:"passer-des-pointeurs-aux-m\xe9thodes",level:3},{value:"Pointeurs vers des pointeurs",id:"pointeurs-vers-des-pointeurs",level:3}],d={toc:p};function c(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Les variables ou expressions de type Pointeur sont des r\xe9f\xe9rences \xe0 d'autres variables (y compris des tableaux et des \xe9l\xe9ments de tableaux), \xe0 des tables, des champs ou des objets. Il n'existe pas de champ de type Pointeur."),(0,r.kt)("p",null,"Les pointeurs sont des outils de programmation avanc\xe9e. Lorsque vous utilisez le langage de 4D, vous vous r\xe9f\xe9rez aux diff\xe9rents objets par l\u2019interm\xe9diaire de leur nom \u2014 en particulier les tables, champs, variables et tableaux. Pour appeler l\u2019un d\u2019entre eux, vous \xe9crivez simplement son nom. Cependant, il est parfois utile de pouvoir appeler ou r\xe9f\xe9rencer ces \xe9l\xe9ments sans n\xe9cessairement conna\xeetre leur nom. C\u2019est ce que permettent les pointeurs."),(0,r.kt)("p",null,'Le concept de pointeur n\u2019est pas tellement \xe9loign\xe9 de la vie courante. Vous vous r\xe9f\xe9rez souvent \xe0 des choses sans conna\xeetre leur identit\xe9 exacte. Par exemple, vous pourriez dire \xe0 un ami : "Allons faire un tour avec ta voiture" au lieu de "Allons faire un tour avec la voiture qui a la plaque d\u2019immatriculation 123ABD". Dans ce cas, vous faites r\xe9f\xe9rence \xe0 la voiture avec la plaque d\'immatriculation 123ABD en utilisant l\'expression "ta voiture". For example, you might say to a friend, \u201cLet\u2019s go for a ride in your car\u201d instead of \u201cLet\u2019s go for a ride in the car with license plate 123ABD.\u201d In this case, you are referencing the car with license plate 123ABD by using the phrase \u201cyour car.\u201d The phrase \u201ccar with license plate 123ABD\u201d is like the name of an object, and using the phrase \u201cyour car\u201d is like using a pointer to reference the object.'),(0,r.kt)("p",null,'La capacit\xe9 de se r\xe9f\xe9rer \xe0 quelque chose sans conna\xeetre son identit\xe9 exacte est tr\xe8s utile. Si votre ami s\u2019achetait une nouvelle voiture, l\u2019expression "ta voiture" serait toujours exacte \u2014 ce serait toujours une voiture et vous pourriez toujours aller quelque part avec. Les pointeurs fonctionnent de la m\xeame mani\xe8re. Par exemple, un pointeur peut pointer \xe0 un moment donn\xe9 vers un champ num\xe9rique appel\xe9 Age, et plus tard vers une variable num\xe9rique appel\xe9e Ancien \xe2ge. Dans les deux cas, le pointeur r\xe9f\xe9rence des donn\xe9es num\xe9riques pouvant \xeatre utilis\xe9e dans des calculs.'),(0,r.kt)("p",null,"Vous pouvez utiliser des pointeurs pour r\xe9f\xe9rencer des tables, des champs, des variables, des tableaux et des \xe9l\xe9ments de tableaux. Le tableau suivant vous fournit un exemple de chaque type :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"R\xe9f\xe9rencement"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"R\xe9f\xe9rencement"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Affectation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Table"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"vpTable:=->","[Table]"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"DEFAULT TABLE(vpTable->)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"vpField:=->","[Table]","Field"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ALERT(vpField->)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'vpField->:="John"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Variable"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"vpVar:=->Variable"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ALERT(vpVar->)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'vpVar->:="John"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Tableau"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"vpArr:=->Array"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"SORT ARRAY(vpArr->;>)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"COPY ARRAY (Arr;vpArr->)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"El\xe9m. tabl."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"vpElem:=->Array{1}"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ALERT (vpElem->)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'vpElem->:="John"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"vpObj:=->myObject"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ALERT (vpObj->myProp)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'vpObj->myProp:="John"')))),(0,r.kt)("h2",a({},{id:"utiliser-des-pointeurs--un-exemple"}),"Utiliser des pointeurs : un exemple"),(0,r.kt)("p",null,"Il est plus facile d\u2019expliquer l\u2019utilisation des pointeurs au travers d\u2019un exemple. Cet exemple vous montre comment acc\xe9der \xe0 une variable par l\u2019interm\xe9diaire d\u2019un pointeur. Nous commen\xe7ons par cr\xe9er la variable :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'$MyVar:="Hello"\n')),(0,r.kt)("p",null,"$MyVar is now a variable containing the string \u201cHello.\u201d We can now create a pointer to $MyVar: Nous pouvons alors cr\xe9er un pointeur vers $MyVar :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"C_POINTER($MyPointer)  \n$MyPointer:=->$MyVar\n")),(0,r.kt)("p",null,'Le symbole -> signifie "pointer vers". The -> symbol means \u201cget a pointer to.\u201d This symbol is formed by a dash followed by a \u201cgreater than\u201d sign. Dans ce cas, il cr\xe9e un pointeur qui r\xe9f\xe9rence ou \u201cpointe vers\u201d $MyVar. Ce pointeur est assign\xe9 \xe0 $MyPointer via l\u2019op\xe9rateur d\u2019assignation.'),(0,r.kt)("p",null,'$MyPointer est d\xe9sormais une variable qui contient un pointeur vers $MyVar. $MyPointer ne contient pas "Hello", la valeur de $MyVar, mais vous pouvez utiliser $MyPointer pour obtenir cette valeur. L\u2019expression suivante retourne la valeur de $MyVar :'),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"$MyPointer->\n")),(0,r.kt)("p",null,'Dans ce cas, la cha\xeene "Hello" est retourn\xe9e. Lorsque le symbole -> est plac\xe9 derri\xe8re un pointeur, la valeur de l\u2019objet vers lequel pointe le pointeur est r\xe9cup\xe9r\xe9e. On dit alors qu\u2019on d\xe9pointe le pointeur.'),(0,r.kt)("p",null,"Il est important de comprendre que vous pouvez utiliser un pointeur suivi du symbole -> partout o\xf9 vous auriez pu utiliser l\u2019objet point\xe9 lui-m\xeame. Vous pouvez placer l\u2019expression $MyPointer-> partout o\xf9 vous pourriez utiliser la variable originale $MyVar. Par exemple, l'instruction suivante affiche une bo\xeete de dialogue d\u2019alerte comportant le mot Hello :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"ALERT($MyPointer->)\n")),(0,r.kt)("p",null,'Vous pouvez \xe9galement utiliser $MyPointer pour modifier la valeur de $MyVar. Par exemple, l\u2019instruction suivante stocke la cha\xeene "Goodbye" dans la variable $MyVar :'),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'$MyPointer->:="Goodbye"\n')),(0,r.kt)("p",null,"Si vous examinez les deux utilisations de l\u2019expression $MyPointer-> ci-dessus, vous constatez que cette expression se comporte exactement comme si vous aviez utilis\xe9 $MyVar \xe0 sa place. En r\xe9sum\xe9 : les deux lignes suivantes effectuent la m\xeame op\xe9ration \u2014 elles affichent une bo\xeete de dialogue d\u2019alerte contenant la valeur courante de la variable $MyVar :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"ALERT($MyPointer->)\nALERT($MyVar)\n")),(0,r.kt)("p",null,'Les deux lignes suivantes effectuent la m\xeame op\xe9ration ; elles assignent la cha\xeene "Goodbye" \xe0 $MyVar :'),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'$MyPointer->:="Goodbye"\n$MyVar:="Goodbye"\n')),(0,r.kt)("h2",a({},{id:"op\xe9rateurs-sur-les-pointeurs"}),"Op\xe9rateurs sur les pointeurs"),(0,r.kt)("p",null,"Avec :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"  // vPtrA et vPtrB pointent sur le m\xeame objet\n vPtrA:=->unObjet\n vPtrB:=->unObjet\n  // vPtrC pointe sur un autre objet\n vPtrC:=->autreObjet\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Syntaxe"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Retourne"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Expression"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Egalit\xe9"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Pointeur = Pointeur"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"vPtrA = vPtrB"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"vPtrA = vPtrB"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"In\xe9galit\xe9"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Pointeur # Pointeur"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"vPtrA # vPtrC"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"vPtrA # vPtrB"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")))),(0,r.kt)("h2",a({},{id:"principales-utilisations"}),"Principales utilisations"),(0,r.kt)("h3",a({},{id:"utiliser-des-pointeurs-vers-des-tables"}),"Utiliser des pointeurs vers des tables"),(0,r.kt)("p",null,"Partout o\xf9 le langage requiert un nom de table, vous pouvez utiliser un pointeur d\xe9point\xe9 vers une table. Pour cr\xe9er un pointeur vers une table, \xe9crivez une instruction du type :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"$TablePtr:=->[touteTable]\n")),(0,r.kt)("p",null,"Vous pouvez \xe9galement r\xe9cup\xe9rer un pointeur vers une table \xe0 l\u2019aide de la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"Table"),". Par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"$TablePtr:=Table(20)\n")),(0,r.kt)("p",null,"Vous pouvez utiliser le pointeur d\xe9point\xe9 dans vos commandes, comme ceci :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"DEFAULT TABLE($TablePtr->)\n")),(0,r.kt)("h3",a({},{id:"utiliser-des-pointeurs-vers-des-champs"}),"Utiliser des pointeurs vers des champs"),(0,r.kt)("p",null,"Partout o\xf9 le langage requiert un nom de champ, vous pouvez utiliser un pointeur d\xe9point\xe9 vers un champ. Pour cr\xe9er un pointeur vers un champ, \xe9crivez une ligne d'instruction du type :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"$ChampPtr:=->[uneTable]CeChamp\n")),(0,r.kt)("p",null,"Vous pouvez \xe9galement r\xe9cup\xe9rer un pointeur vers un champ \xe0 l\u2019aide de la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"Champ"),". Par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"$FieldPtr:=Field(1;2)\n")),(0,r.kt)("p",null,"Vous pouvez utiliser le pointeur d\xe9point\xe9 dans vos commandes, comme ceci :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'OBJECT SET FONT($FieldPtr->;"Arial")\n')),(0,r.kt)("h3",a({},{id:"utiliser-des-pointeurs-vers-des-variables"}),"Utiliser des pointeurs vers des variables"),(0,r.kt)("p",null,"Lorsque vous utilisez des pointeurs vers des variables locales ou des variables process, vous devez veiller \xe0 ce que la variable point\xe9e soit bien d\xe9finie au moment de l\u2019utilisation du pointeur. Rappelons que les variables locales sont supprim\xe9es \xe0 la fin de l\u2019ex\xe9cution de la m\xe9thode qui les a cr\xe9\xe9es et les variables process \xe0 la fin du process dans lequel elles ont \xe9t\xe9 cr\xe9\xe9es. L\u2019appel d\u2019un pointeur vers une variable qui n\u2019existe plus provoque une erreur de syntaxe en mode interpr\xe9t\xe9 (variable ind\xe9finie) mais peut g\xe9n\xe9rer une erreur plus cons\xe9quente en mode compil\xe9."),(0,r.kt)("p",null,"Les pointeurs vers des variables locales permettent dans de nombreux cas d\u2019\xe9conomiser des variables process. Les pointeurs vers des variables locales peuvent \xeatre utilis\xe9s uniquement \xe0 l\u2019int\xe9rieur d\u2019un m\xeame process. Dans le d\xe9bogueur, lorsque vous affichez un pointeur vers une variable locale d\xe9clar\xe9e dans une autre m\xe9thode, le nom de la m\xe9thode d\u2019origine est indiqu\xe9e entre parenth\xe8ses, derri\xe8re le pointeur. Par exemple, si vous \xe9crivez dans M\xe9thode1 :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' $MyVar:="Hello world"\n Method2(->$MyVar)\n')),(0,r.kt)("p",null,"Dans Method2, le d\xe9bogueur affichera $1 de la fa\xe7on suivante :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"$1"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"->$MyVar (Method1)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,"La valeur de $1 sera :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"$MyVar (Method1)"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),'"Hello world"'))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))))),(0,r.kt)("h3",a({},{id:"utiliser-des-pointeurs-vers-des-\xe9l\xe9ments-de-tableau"}),"Utiliser des pointeurs vers des \xe9l\xe9ments de tableau"),(0,r.kt)("p",null,"Vous pouvez cr\xe9er un pointeur vers un \xe9l\xe9ment de tableau. Par exemple, les lignes d'instruction suivantes cr\xe9ent un tableau et assignent \xe0 une variable appel\xe9e $El\xe9mPtr un pointeur vers le premier \xe9l\xe9ment :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"ARRAY REAL($unTableau;10) // Cr\xe9er un tableau\n$El\xe9mPtr:=->$unTableau{1} // Cr\xe9er un pointeur vers l\u2019\xe9l\xe9ment de tableau\n")),(0,r.kt)("p",null,"Vous pouvez alors utiliser le pointeur d\xe9point\xe9 pour assigner une valeur \xe0 l\u2019\xe9l\xe9ment, comme ceci :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"$El\xe9mPtr->:=8\n")),(0,r.kt)("h3",a({},{id:"utiliser-des-pointeurs-vers-des-tableaux"}),"Utiliser des pointeurs vers des tableaux"),(0,r.kt)("p",null,"Vous pouvez cr\xe9er un pointeur vers un tableau. Par exemple, les lignes d'instruction suivantes cr\xe9ent un tableau et assignent \xe0 la variable nomm\xe9e $TabPtr un pointeur vers le tableau :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"ARRAY REAL($unTableau;10) // Cr\xe9er un tableau\n$TabPtr:=->$unTableau // Cr\xe9er un pointeur vers le tableau\n")),(0,r.kt)("p",null,"Il est important de comprendre que ce pointeur pointe vers le tableau, et non vers un \xe9l\xe9ment du tableau. Par exemple, vous pourriez utiliser le pointeur d\xe9point\xe9 de la mani\xe8re suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"SORT ARRAY($TabPtr->;>) // Tri du tableau\n")),(0,r.kt)("p",null,"Si vous devez vous r\xe9f\xe9rer au quatri\xe8me \xe9l\xe9ment du tableau \xe0 l\u2019aide du pointeur, vous pouvez \xe9crire :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"})," $TabPtr->{4}:=84\n")),(0,r.kt)("h3",a({},{id:"passer-des-pointeurs-aux-m\xe9thodes"}),"Passer des pointeurs aux m\xe9thodes"),(0,r.kt)("p",null,"Vous pouvez passer un pointeur en tant que param\xe8tre d\u2019une m\xe9thode. A l\u2019int\xe9rieur de la m\xe9thode, vous pouvez modifier l\u2019objet r\xe9f\xe9renc\xe9 par le pointeur. Par exemple, la m\xe9thode suivante, ",(0,r.kt)("inlineCode",{parentName:"p"},"takeTwo"),", re\xe7oit deux param\xe8tres qui sont des pointeurs. Elle passe l\u2019objet r\xe9f\xe9renc\xe9 par le premier param\xe8tre en caract\xe8res majuscules, et l\u2019objet r\xe9f\xe9renc\xe9 par le second param\xe8tre en caract\xe8res minuscules."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"  // M\xe9thode projet takeTwo\n  // $1 \u2013 Pointeur vers un champ ou une variable de type Cha\xeene. Passe la cha\xeene en majuscules.\n  // $2 \u2013 Pointeur vers un champ ou une variable de type Cha\xeene. Passe la cha\xeene en minuscules.\n $1->:=Uppercase($1->)\n $2->:=Lowercase($2->)\n")),(0,r.kt)("p",null,"L'instruction suivante emploie la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"takeTwo")," pour passer un champ en caract\xe8res majuscules et une variable en caract\xe8res minuscules :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"takeTwo(->[MaTable]MonChamp;->$MaVar)\n")),(0,r.kt)("p",null,"Si le champ, ","[MaTable]",'MonChamp, contenait la cha\xeene "dupont", celle-ci deviendrait "DUPONT". Si la variable $MaVar contenait la cha\xeene "BONJOUR", celle-ci deviendrait "bonjour".'),(0,r.kt)("p",null,"Dans la m\xe9thode takeTwo (et, en fait, \xe0 chaque fois que vous utilisez des pointeurs), il est important que les types de donn\xe9es des objets r\xe9f\xe9renc\xe9s soient corrects. Dans l\u2019exemple pr\xe9c\xe9dent, les pointeurs doivent pointer vers des objets contenant une cha\xeene ou un texte."),(0,r.kt)("h3",a({},{id:"pointeurs-vers-des-pointeurs"}),"Pointeurs vers des pointeurs"),(0,r.kt)("p",null,"Si vous aimez compliquer les choses \xe0 l'extr\xeame (bien que cela ne soit pas n\xe9cessaire dans 4D), vous pouvez utiliser des pointeurs pour r\xe9f\xe9rencer d'autres pointeurs. Examinons l\u2019exemple suivant :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' $MyVar:="Hello"\n $PointerOne:=->$MyVar\n $PointerTwo:=->$PointerOne\n ($PointerTwo->)->:="Goodbye"\n ALERT(($PointerTwo->)->)\n')),(0,r.kt)("p",null,"Cet exemple affiche une bo\xeete de dialogue d\u2019alerte contenant \u201cGoodbye\u201d."),(0,r.kt)("p",null,"Voici la description de chaque ligne de l\u2019exemple :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'$MyVar:="Hello" --\x3e This line puts the string "Hello" into the variable $MyVar.'),(0,r.kt)("li",{parentName:"ul"},"$PointerOne:=->$MyVar --\x3e $PointerOne now contains a pointer to $MyVar."),(0,r.kt)("li",{parentName:"ul"},"$PointerTwo:=->$PointerOne --\x3e $PointerTwo (a new variable) contains a pointer to $PointerOne, which in turn points to $MyVar."),(0,r.kt)("li",{parentName:"ul"},'($PointerTwo->)->:="Goodbye" --\x3e $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Par cons\xe9quent, ($PointerTwo->)-> r\xe9f\xe9rence le contenu de $MyVar. Donc, dans ce cas, la valeur "Goodbye" est assign\xe9e \xe0 $MyVar.'),(0,r.kt)("li",{parentName:"ul"},"ALERT (($PointerTwo->)->) --\x3e Same thing: $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Par cons\xe9quent, ($PointerTwo->)-> r\xe9f\xe9rence le contenu de $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar.")),(0,r.kt)("p",null,'La ligne suivante place la valeur "Hello" dans $MyVar :'),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'($PointerTwo->)->:="Hello"\n')),(0,r.kt)("p",null,'La ligne suivante r\xe9cup\xe8re "Hello" \xe0 partir de $MyVar et la place dans $NewVar :'),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"$NewVar:=($PointerTwo->)->\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important :")," Vous devez utiliser des parenth\xe8ses lors des d\xe9r\xe9f\xe9rencements multiples."))}c.isMDXComponent=!0}}]);