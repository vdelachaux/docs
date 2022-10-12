"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17943],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return a?t.createElement(f,r(r({ref:n},p),{},{components:a})):t.createElement(f,r({ref:n},p))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<s;u++)r[u]=a[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},23300:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});a(67294);var t=a(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const r={id:"branching",title:"Estruturas condicionais"},i=void 0,l={unversionedId:"Concepts/branching",id:"version-19-R6/Concepts/branching",title:"Estruturas condicionais",description:"Uma estrutura de ramifica\xe7\xe3o permite que os m\xe9todos testem uma condi\xe7\xe3o e tomem caminhos alternativos, em fun\xe7\xe3o do resultado.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/Concepts/cf_branching.md",sourceDirName:"Concepts",slug:"/Concepts/branching",permalink:"/docs/pt/19-R6/Concepts/branching",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"branching",title:"Estruturas condicionais"},sidebar:"docs",previous:{title:"Condi\xe7\xf5es e loops",permalink:"/docs/pt/19-R6/Concepts/control-flow"},next:{title:"Estruturas de loop",permalink:"/docs/pt/19-R6/Concepts/looping"}},u={},p=[{value:"If... Else... End if",id:"if-else-end-if",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"Case of... Else... End case",id:"case-of-else-end-case",level:2},{value:"Exemplo",id:"exemplo-1",level:3}],d={toc:p};function c(e){var{components:n}=e,a=s(e,["components"]);return(0,t.kt)("wrapper",o({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Uma estrutura de ramifica\xe7\xe3o permite que os m\xe9todos testem uma condi\xe7\xe3o e tomem caminhos alternativos, em fun\xe7\xe3o do resultado."),(0,t.kt)("h2",o({},{id:"if-else-end-if"}),"If... Else... End if"),(0,t.kt)("p",null,"The formal syntax of the ",(0,t.kt)("inlineCode",{parentName:"p"},"If... Else... End if")," control flow structure is:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," If(Boolean_Expression)\n    statement(s)\n Else\n    statement(s)\n End if\n")),(0,t.kt)("p",null,"Note que a parte ",(0,t.kt)("inlineCode",{parentName:"p"},"Else")," \xe9 opcional; pode escrever:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," If(Boolean_Expression)\n    statement(s)\n End if\n")),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},"If... Else... End if")," structure lets your method choose between two actions, depending on whether a test (a Boolean expression) is TRUE or FALSE. Quando a express\xe3o Booleana for TRUE, s\xe3o executadas as declara\xe7\xf5es que seguem imediatamente ao teste. Se a express\xe3o Booleana for FALSE, s\xe3o executadas as declara\xe7\xf5es que seguem a linha Else. A declara\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"Else")," \xe9 opcional; se omitir Else, a execu\xe7\xe3o continua com a primeira instru\xe7\xe3o (se houver) que seguir ",(0,t.kt)("inlineCode",{parentName:"p"},"End if"),"."),(0,t.kt)("p",null,"Note que a express\xe3o booleana \xe9 sempre avaliada completamente. Considere particularmente o teste abaixo:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," If(MethodA & MethodB)\n    ...\n End if\n")),(0,t.kt)("p",null,"The expression is TRUE only if both methods are TRUE. Entretanto, mesmo se ",(0,t.kt)("em",{parentName:"p"},"MethodA")," devolver  FALSE, 4D ainda iria avaliar ",(0,t.kt)("em",{parentName:"p"},"MethodB"),", o que seria uma perda de tempo. Nesse caso, \xe9 mais interessante usar uma estrutra como:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," If(MethodA)\n    If(MethodB)\n       ...\n    End if\n End if\n")),(0,t.kt)("p",null,"O resultado \xe9 parecido mas o ",(0,t.kt)("em",{parentName:"p"},"MethodB")," \xe9 avaliado somente se necess\xe1rio."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"Note:")," The ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/pt/19-R6/Concepts/operators#ternary-operator"}),"ternary operator")," allows writing one-line conditional expressions and can replace a full sequence of If..")),(0,t.kt)("h3",o({},{id:"exemplo"}),"Exemplo"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'  // Ask the user to enter a name\n $Find:=Request(Type a name)\n If(OK=1)\n    QUERY([People];[People]LastName=$Find)\n Else\n    ALERT("You did not enter a name.")\n End if\n End if \n')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Dica:")," A ramifica\xe7\xe3o pode ser realizada sem que as instru\xe7\xf5es sejam executadas em um caso ou no outro. Quando desenvolver um algoritmo ou uma aplica\xe7\xe3o especializada, nada impede que escreva:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," If(Boolean_Expression)\n Else\n    statement(s)\n End if\n")),(0,t.kt)("p",null,"ou :"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," If(Boolean_Expression)\n    statement(s)\n Else\n End if\n")),(0,t.kt)("h2",o({},{id:"case-of-else-end-case"}),"Case of... Else... End case"),(0,t.kt)("p",null,"The formal syntax of the ",(0,t.kt)("inlineCode",{parentName:"p"},"Case of... Else... End case")," control flow structure is:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," Case of\n    :(Boolean_Expression)\n       statement(s)\n    :(Boolean_Expression)\n       statement(s)\n       .\n       .\n       .\n\n    :(Boolean_Expression)\n       statement(s)\n    Else\n       statement(s)\n End case\n")),(0,t.kt)("p",null,"Note que a parte ",(0,t.kt)("inlineCode",{parentName:"p"},"Else")," \xe9 opcional; pode escrever:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," Case of\n    :(Boolean_Expression)\n       statement(s)\n    :(Boolean_Expression)\n       statement(s)\n       .\n       .\n       .\n\n    :(Boolean_Expression)\n       statement(s)\n End case\n")),(0,t.kt)("p",null,"As with the ",(0,t.kt)("inlineCode",{parentName:"p"},"If... End if")," structure, the ",(0,t.kt)("inlineCode",{parentName:"p"},"Case of... End case")," structure also lets your method choose between alternative actions. Unlike the ",(0,t.kt)("inlineCode",{parentName:"p"},"If... End")," if structure, the ",(0,t.kt)("inlineCode",{parentName:"p"},"Case of... End case")," structure can test a reasonable unlimited number of Boolean expressions and take action depending on which one is TRUE."),(0,t.kt)("p",null,"Cada express\xe3o booleana \xe9 precedida de dois pontos (",(0,t.kt)("inlineCode",{parentName:"p"},":"),"). A combina\xe7\xe3o dos dois pontos e da express\xe3o booleana \xe9 chamada de um caso. Por exemplo, a linha abaixo \xe9 um caso:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),":(bValidate=1)\n")),(0,t.kt)("p",null,"S\xf3 s\xe3o executadas as instru\xe7\xf5es que seguem o primeiro caso TRUE (at\xe9 o pr\xf3ximo caso). Se nenhum dos casos for TRUE, nenhuma das instru\xe7\xf5es ser\xe1 executada (se nenhuma parte ",(0,t.kt)("inlineCode",{parentName:"p"},"Else")," for incluida)."),(0,t.kt)("p",null,"Pode incluir uma instru\xe7\xe3o Else depois do \xfaltimo caso. Se todos os casos forem FALSE, as instru\xe7\xf5es que seguem ",(0,t.kt)("inlineCode",{parentName:"p"},"Else")," ser\xe3o executadas."),(0,t.kt)("h3",o({},{id:"exemplo-1"}),"Exemplo"),(0,t.kt)("p",null,"Esse exemplo testa uma vari\xe1vel num\xe9rica e exibe uma caixa de alerta com uma apalavra:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' Case of\n    :((vResult=1) & (vCondition#2)) //this case will be detected first\n       ... //statement(s)\n    :(vResult=1)\n       ... //Se for 1, mostrar um alerta\n    :(vResult=2) //Testar se o n\xfamero \xe9 2\n       ALERT("Two.") //Se for 2, exibe um alerta\n    :(vResult=3) //Testa se o n\xfamero \xe9 3\n       ALERT("Three.") //Se for 3, exibe um alerta\n    Else //Se n\xe3o for 1, 2, ou 3, exibe um alerta\n       ALERT("It was not one, two, or three.")\n //statement(s)\n End case\n')),(0,t.kt)("p",null,"For comparison, here is the ",(0,t.kt)("inlineCode",{parentName:"p"},"If... Else... End if")," version of the same method:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' If(vResult=1) //Teste se o n\xfamero \xe9 1\n    ALERT("One.") If(vResult=1) //Teste se o n\xfamero \xe9 1\n    ALERT("One.") //If it is 1, display an alert\n Else\n    If(vResult=2) //Teste se o n\xfamero \xe9  2\n       ALERT("Two.") //Se for 2, exibe um alerta\n    Else\n       If(vResult=3) //Teste se o n\xfamero \xe9 3\n          ALERT("Three.") //Se for 3, exibe um alerta\n       Else //Se n\xe3o for 1, 2, ou 3,  exibe um alerta\n          ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if //Se for 2, exibe um alerta\n    Else\n       If(vResult=3) //Teste se o n\xfamero \xe9 3\n          ALERT("Three.") //Se for 3, exibe um alerta\n       Else //Se n\xe3o for 1, 2, ou 3,  exibe um alerta\n          ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if\n')),(0,t.kt)("p",null,"Remember that with a ",(0,t.kt)("inlineCode",{parentName:"p"},"Case of... Else... End case")," structure, only the first TRUE case is executed. Mesmo se dois ou mais casos forem TRUE, s\xf3 as instru\xe7\xf5es que seguirem o primeiro caso TRUE ser\xe3o executadas."),(0,t.kt)("p",null,"Dessa maneira, quando quiser implementar testes hier\xe1rquicos, deve garantir que as declara\xe7\xf5es de condi\xe7\xe3o que estejam mais abaixo no esquema hier\xe1rquico apare\xe7am primeiro na sequ\xeancia de testes. Por exemplo, o teste para a presen\xe7a da condition1 cobre o teste para a preen\xe7a de condition1&condition2 e portanto deveria estar localizada por \xfaltimo na sequ\xeancia de testes. Por exemplo, o c\xf3digo abaixo nunca ter\xe1 sua \xfaltima condi\xe7\xe3o detectada:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' Case of\n    :(vResult=1) //Test if the number is 1\n       ALERT("One.") //If it is 1, display an alert\n    :(vResult=2) //Test if the number is 2\n       ALERT("Two.") //If it is 2, display an alert\n    :(vResult=3) //Test if the number is 3\n       ALERT("Three.") //If it is 3, display an alert\n    Else //If it is not 1, 2, or 3, display an alert\n       ALERT("It was not one, two, or three.")\n End case\n')),(0,t.kt)("p",null,'No c\xf3digo anterior, a presen\xe7a da segunda condi\xe7\xe3o n\xe3o \xe9 detectada, j\xe1 que o teste "vResult=1" ramifica o c\xf3digo antes de qualquer outro teste. Para que o c\xf3digo funcione corretamente, pode escrev\xea-lo assim:'),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' If(vResult=1) //Test if the number is 1\n    ALERT("One.") //If it is 1, display an alert\n Else\n    If(vResult=2) //Test if the number is 2\n       ALERT("Two.") //If it is 2, display an alert\n    Else\n       If(vResult=3) //Test if the number is 3\n          ALERT("Three.") //If it is 3, display an alert\n       Else //If it is not 1, 2, or 3, display an alert\n          ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if\n')),(0,t.kt)("p",null,"Al\xe9m disso, se quiser implementar teste hier\xe1rquico, pode considerar usar um c\xf3digo hier\xe1rquico."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Dica:")," a ramifica\xe7\xe3o|branching pode ser feita sem que as instru\xe7\xf5es sejam executados em um caso ou outro Quando desenvolver um algoritmo ou uma aplica\xe7\xe3o especializada, nada impede que escreva: Quando desenvolver um algoritmo ou uma aplica\xe7\xe3o especializada, nada impede que escreva: Quando desenvolver um algoritmo ou uma aplica\xe7\xe3o especializada, nada impede que escreva: Quando desenvolver um algoritmo ou uma aplica\xe7\xe3o especializada, nada impede que escreva:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," Case of\n    :(Boolean_Expression)\n    :(Boolean_Expression)\n      ...\n\n    :(Boolean_Expression)\n       statement(s)\n    Else\n       statement(s)\n End case\n")),(0,t.kt)("p",null,"ou :"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," Case of\n    :(Boolean_Expression)\n       statement(s)\n    :(Boolean_Expression)\n       statement(s)\n       ...\n\n    :(Boolean_Expression)\n       statement(s)\n    Else\n End case\n")),(0,t.kt)("p",null,"ou :"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," Case of\n    Else\n       statement(s)\n End case\n")))}c.isMDXComponent=!0}}]);