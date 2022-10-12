"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26653],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=s.createContext({}),u=function(e){var n=s.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return s.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},f=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=r,m=f["".concat(o,".").concat(d)]||f[d]||p[d]||i;return t?s.createElement(m,l(l({ref:n},c),{},{components:t})):s.createElement(m,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<i;u++)l[u]=t[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64504:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});t(67294);var s=t(3905);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},r.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const l={id:"branching",title:"Structures conditionnelles"},a=void 0,o={unversionedId:"Concepts/branching",id:"version-19/Concepts/branching",title:"Structures conditionnelles",description:"Une structure de branchement permet aux m\xe9thodes de tester une condition et d'emprunter des chemins alternatifs, en fonction du r\xe9sultat.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/cf_branching.md",sourceDirName:"Concepts",slug:"/Concepts/branching",permalink:"/docs/fr/19/Concepts/branching",draft:!1,tags:[],version:"19",frontMatter:{id:"branching",title:"Structures conditionnelles"},sidebar:"docs",previous:{title:"Conditions et boucles",permalink:"/docs/fr/19/Concepts/control-flow"},next:{title:'Structures r\xe9p\xe9titives (ou "boucles")',permalink:"/docs/fr/19/Concepts/looping"}},u={},c=[{value:"If...Else...End if",id:"ifelseend-if",level:2},{value:"Exemple",id:"exemple",level:3},{value:"Au cas ou...Sinon...Fin de cas",id:"au-cas-ousinonfin-de-cas",level:2},{value:"Exemple",id:"exemple-1",level:3}],p={toc:c};function f(e){var{components:n}=e,t=i(e,["components"]);return(0,s.kt)("wrapper",r({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Une structure de branchement permet aux m\xe9thodes de tester une condition et d'emprunter des chemins alternatifs, en fonction du r\xe9sultat."),(0,s.kt)("h2",r({},{id:"ifelseend-if"}),"If...Else...End if"),(0,s.kt)("p",null,"La syntaxe de la structure conditionnelle ",(0,s.kt)("inlineCode",{parentName:"p"},"If...Else...End if")," est la suivante :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," If(Boolean_Expression)\n    instruction(s)\n Else\n    instruction(s)\nEnd if\n")),(0,s.kt)("p",null,"A noter que l'\xe9l\xe9ment ",(0,s.kt)("inlineCode",{parentName:"p"},"Else")," est optionnel, vous pouvez \xe9crire :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," If(Boolean_Expression)\n    instruction(s)\n End if\n")),(0,s.kt)("p",null,"La structure ",(0,s.kt)("inlineCode",{parentName:"p"},"If...Else...End if")," permet \xe0 votre m\xe9thode de choisir dans une alternative, en fonction du r\xe9sultat, TRUE ou FALSE, d\u2019un test (une expression bool\xe9enne). Si l\u2019expression bool\xe9enne est TRUE, les instructions qui suivent imm\xe9diatement le test sont ex\xe9cut\xe9es. Si l\u2019expression bool\xe9enne est FALSE, les instructions suivant la ligne Else sont ex\xe9cut\xe9es. Le ",(0,s.kt)("inlineCode",{parentName:"p"},"Else")," est optionnel ; lorsqu\u2019il est omis, c\u2019est la premi\xe8re ligne d\u2019instructions suivant le ",(0,s.kt)("inlineCode",{parentName:"p"},"End if")," (s\u2019il y en a une) qui est ex\xe9cut\xe9e."),(0,s.kt)("p",null,"A noter que l'expression bool\xe9enne est toujours \xe9valu\xe9e en totalit\xe9. Examinons en particulier le test suivant :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," If(MethodA & MethodB)\n    ...\n End if\n")),(0,s.kt)("p",null,"L'expression n'est TRUE que si les deux m\xe9thodes sont mises \xe0 TRUE. Or, m\xeame si ",(0,s.kt)("em",{parentName:"p"},"MethodA")," retourne FALSE, 4D \xe9valuera quand m\xeame ",(0,s.kt)("em",{parentName:"p"},"MethodB"),", ce qui repr\xe9sente une perte de temps inutile. Dans ce cas, il est pr\xe9f\xe9rable d'utiliser une structure du type :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," If(MethodA)\n    If(MethodB)\n       ...\n    End if\n End if\n")),(0,s.kt)("p",null,"Le r\xe9sultat est \xe9quivalent et ",(0,s.kt)("em",{parentName:"p"},"MethodB")," n'est \xe9valu\xe9e que si n\xe9cessaire."),(0,s.kt)("h3",r({},{id:"exemple"}),"Exemple"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  // Ask the user to enter a name\n $Find:=Request(Type a name)\n If(OK=1)\n    QUERY([People];[People]LastName=$Find)\n Else\n    ALERT("You did not enter a name.")\n End if\n End if \n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Astuce :")," Il n'est pas obligatoire que des instructions soient ex\xe9cut\xe9es dans chaque branche de l'alternative. Lorsque vous d\xe9veloppez un algorithme, ou lorsque vous poursuivez un but pr\xe9cis, rien ne vous emp\xeache d'\xe9crire :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," If(Expression_bool\xe9enne)\n Else\n    instruction(s)\n End if\n")),(0,s.kt)("p",null,"ou :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," If(Expression_bool\xe9enne)\n    instruction(s)\n Else\n End if\n")),(0,s.kt)("h2",r({},{id:"au-cas-ousinonfin-de-cas"}),"Au cas ou...Sinon...Fin de cas"),(0,s.kt)("p",null,"La syntaxe de la structure conditionnelle ",(0,s.kt)("inlineCode",{parentName:"p"},"Case of...Else...End case")," est la suivante :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," Case of\n    :(Expression_bool\xe9enne)\n       instruction(s)\n    :(Expression_bool\xe9enne)\n       statement(s)\n       .\n       .\n       .\n\n    :(Expression_bool\xe9enne)\n       instruction(s)\n    Else\n       instruction(s)\n End case\n")),(0,s.kt)("p",null,"A noter que l'\xe9l\xe9ment ",(0,s.kt)("inlineCode",{parentName:"p"},"Else")," est optionnel, vous pouvez \xe9crire :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," Case of\n    :(Expression_bool\xe9enne)\n       instruction(s)\n    :(Expression_bool\xe9enne)\n       statement(s)\n       .\n       .\n       .\n\n    :(Expression_bool\xe9enne)\n       instruction(s)\n End case\n")),(0,s.kt)("p",null,"Tout comme la structure ",(0,s.kt)("inlineCode",{parentName:"p"},"If...Else...End if"),", la structure ",(0,s.kt)("inlineCode",{parentName:"p"},"Case of...Else...End case")," permet \xe9galement \xe0 votre m\xe9thode de choisir parmi plusieurs s\xe9quences d\u2019instructions. A la diff\xe9rence de la structure ",(0,s.kt)("inlineCode",{parentName:"p"},"If...Else...End"),", la structure ",(0,s.kt)("inlineCode",{parentName:"p"},"Case of...Else...End case")," peut tester un nombre illimit\xe9 d\u2019expressions bool\xe9ennes et ex\xe9cuter la s\xe9quence d\u2019instructions correspondant \xe0 la valeur TRUE."),(0,s.kt)("p",null,"Chaque expression bool\xe9enne d\xe9bute par le caract\xe8re deux points (",(0,s.kt)("inlineCode",{parentName:"p"},":"),"). La combinaison de deux points et d\u2019une expression bool\xe9enne est appel\xe9e un cas. Par exemple, la ligne suivante est un cas :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),":(bValidate=1)\n")),(0,s.kt)("p",null,"Seules les instructions suivant le premier cas TRUE (et ce, jusqu\u2019au cas suivant) seront ex\xe9cut\xe9es. Si aucun des cas n\u2019est TRUE, aucune instruction n\u2019est ex\xe9cut\xe9e (s'il n'y a pas d'\xe9l\xe9ment ",(0,s.kt)("inlineCode",{parentName:"p"},"Else"),")."),(0,s.kt)("p",null,"Vous pouvez placer une instruction Else apr\xe8s le dernier cas. Si tous les cas sont FALSE, les instructions suivant le ",(0,s.kt)("inlineCode",{parentName:"p"},"Else")," seront ex\xe9cut\xe9es."),(0,s.kt)("h3",r({},{id:"exemple-1"}),"Exemple"),(0,s.kt)("p",null,"Cet exemple teste une variable num\xe9rique et affiche une bo\xeete de dialogue d\u2019alerte comportant un simple mot :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' Case of\n    :((vResult=1) & (vCondition#2)) //this case will be detected first\n       ... //statement(s)\n    :(vResult=1)\n       ... Case of\n    :(vResult=1) //Tester si le chiffre est 1\n       ALERT("One.") //Si le chiffre est 1, afficher une alerte\n    :(vResult=2) //Tester si le chiffre est 2\n       ALERT("Two.") //Si le chiffre est 2, afficher une alerte\n    :(vResult=3) //Tester si le chiffre est 3\n       ALERT("Three.") //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n //d\xe9claration(s)\n End case //Si le chiffre est 2, afficher une alerte\n    :(vResult=3) //Tester si le chiffre est 3\n       ALERT("Three.") //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n //statement(s)\n End case\n')),(0,s.kt)("p",null,"A titre de comparaison, voici la version avec ",(0,s.kt)("inlineCode",{parentName:"p"},"If...Else...End if")," de la m\xeame m\xe9thode :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' If(vResult=1) //Tester si le chiffre est 1\n    ALERT("One.") //Si le chiffre est 1, afficher une alerte\n Else\n    If:(vResult=2) //Tester si le chiffre est 2\n       ALERT("Two.") If(vResult=1) //Tester si le chiffre est 1\n    ALERT("One.") If(vResult=1) //Tester si le chiffre est 1\n    ALERT("One.") If(vResult=1) //Tester si le chiffre est 1\n    ALERT("One.") If(vResult=1) //Tester si le chiffre est 1\n    ALERT("One.") //Si le chiffre est 1, afficher une alerte\n Else\n    If(vResult=2) //Tester si le chiffre est 2\n       ALERT("Two.") //Si le chiffre est 2, afficher une alerte\n    Else\n    If(vResult=3) //Tester si le chiffre est 3\n       ALERT("Three.") //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if //Si le chiffre est 2, afficher une alerte\n    Else\n    If(vResult=3) //Tester si le chiffre est 3\n       ALERT("Three.") //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if //Si le chiffre est 2, afficher une alerte\n    Else\n    If(vResult=3) //Tester si le chiffre est 3\n       ALERT("Three.") //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if //Si le chiffre est 2, afficher une alerte\n    Else\n    If(vResult=3) //Tester si le chiffre est 3\n       ALERT("Three.") //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if\n')),(0,s.kt)("p",null,"Rappelez-vous qu\u2019avec une structure de type ",(0,s.kt)("inlineCode",{parentName:"p"},"Case of...Else...End case"),", seul le premier cas TRUE rencontr\xe9 est ex\xe9cut\xe9. M\xeame si d\u2019autres cas sont TRUE, seules les instructions suivant le premier cas TRUE seront prises en compte."),(0,s.kt)("p",null,"Par cons\xe9quent, lorsque vous testez dans la m\xeame m\xe9thode des cas simples et des cas complexes, vous devez placer les cas complexes avant les cas simples, sinon ils ne seront jamais ex\xe9cut\xe9s. Par exemple, si vous souhaitez traiter le cas simple (vResult=1) et le cas complexe (vResult=1) & (vCondition#2) et que vous structurez la m\xe9thode de la mani\xe8re suivante :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' Case of\n    :(vResult=1) //Test if the number is 1\n       ALERT("One.") //If it is 1, display an alert\n    :(vResult=2) //Test if the number is 2\n       ALERT("Two.") //If it is 2, display an alert\n    :(vResult=3) //Test if the number is 3\n       ALERT("Three.") //If it is 3, display an alert\n    Else //If it is not 1, 2, or 3, display an alert\n       ALERT("It was not one, two, or three.")\n End case\n')),(0,s.kt)("p",null,"... les instructions associ\xe9es au cas complexe ne seront jamais ex\xe9cut\xe9es. En effet, pour que ce cas soit TRUE, ses deux conditions bool\xe9ennes doivent l\u2019\xeatre. Or, la premi\xe8re condition est celle du cas simple situ\xe9 pr\xe9c\xe9demment. Lorsqu'elle est TRUE, le cas simple est ex\xe9cut\xe9 et 4D sort de la structure conditionnelle, sans \xe9valuer le cas complexe. Pour que ce type de m\xe9thode fonctionne, vous devez \xe9crire :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' If(vResult=1) //Test if the number is 1\n    ALERT("One.") //If it is 1, display an alert\n Else\n    If(vResult=2) //Test if the number is 2\n       ALERT("Two.") //If it is 2, display an alert\n    Else\n       If(vResult=3) //Test if the number is 3\n          ALERT("Three.") //If it is 3, display an alert\n       Else //If it is not 1, 2, or 3, display an alert\n          ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Astuce :")," Il n'est pas obligatoire que des instructions soient ex\xe9cut\xe9es dans toutes les alternatives. Lorsque vous d\xe9veloppez un algorithme, ou lorsque vous poursuivez un but pr\xe9cis, rien ne vous emp\xeache d'\xe9crire :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," Case of\n    :(Expression_bool\xe9enne)\n    :(Expression_bool\xe9enne)\n        instruction(s)\n       ...\n\n    :(Expression_bool\xe9enne)\n       instruction(s)\n    Else\n       instruction(s)\n End case\n")),(0,s.kt)("p",null,"ou :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," Case of\n    :(Expression_bool\xe9enne)\n    :(Expression_bool\xe9enne)\n      ...\n\n    :(Expression_bool\xe9enne)\n       instruction(s)\n    Else\n       instruction(s)\n End case\n")),(0,s.kt)("p",null,"ou :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," Case of\n    Else\n       instruction(s)\n End case\n")))}f.isMDXComponent=!0}}]);