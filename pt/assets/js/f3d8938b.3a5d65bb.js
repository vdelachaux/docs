"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60833],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35146:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"interpreted-compiled",title:"Modos interpretado e compilado"},l=void 0,p={unversionedId:"Concepts/interpreted-compiled",id:"version-18/Concepts/interpreted-compiled",title:"Modos interpretado e compilado",description:"4D applications can work in interpreted or compiled mode:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/interpreted.md",sourceDirName:"Concepts",slug:"/Concepts/interpreted-compiled",permalink:"/docs/pt/18/Concepts/interpreted-compiled",draft:!1,tags:[],version:"18",frontMatter:{id:"interpreted-compiled",title:"Modos interpretado e compilado"},sidebar:"docs",previous:{title:"Gest\xe3o de erros",permalink:"/docs/pt/18/Concepts/error-handling"},next:{title:"Componentes",permalink:"/docs/pt/18/Concepts/components"}},d={},s=[{value:"Differences between interpreted and compiled code",id:"differences-between-interpreted-and-compiled-code",level:2},{value:"Using Compiler Directives with the Interpreter",id:"using-compiler-directives-with-the-interpreter",level:2},{value:"Using pointers to avoid retyping",id:"using-pointers-to-avoid-retyping",level:2}],c={toc:s};function m(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"4D applications can work in ",(0,n.kt)("strong",{parentName:"p"},"interpreted")," or ",(0,n.kt)("strong",{parentName:"p"},"compiled")," mode:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"in interpreted mode, statements are read and translated in machine language at the moment of their execution. You can add or modify the code whenever you need to, the application is automatically updated."),(0,n.kt)("li",{parentName:"ul"},"in compiled mode, all methods are read and translated once, at the compilation step. Afterwards, the application only contains assembly level instructions are available, it is no longer possible to edit the code.")),(0,n.kt)("p",null,"The advantages of the compilation are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Velocidade"),": seu banco de dados \xe9 executa de 3 a 1.000 vezes mais r\xe1pido."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Verifica\xe7\xe3o de c\xf3digo"),": sua aplica\xe7\xe3o de banco de dados se analisa para comprovar a coer\xeancia do c\xf3digo. Both logical and syntactical conflicts are detected."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Prote\xe7\xe3o:"),": quando seu banco de dados for compilado, pode eliminar o c\xf3digo interpretado. Ent\xe3o, o banco de dados compilado \xe9 funcionalmente id\xeantico ao original, exceto que a estrutura e m\xe9todos n\xe3o pode ser vista ou modificada, seja de forma deliberada ou por acidente."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Aplica\xe7\xf5es independentes/stand alone com duplo clique"),": os bancos compilados tamb\xe9m podem se transformar em aplica\xe7\xf5es independentes (arquivos.EXE) com seu proprio icone."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Preemptive mode"),": only compiled code can be executed in preemptive processes.")),(0,n.kt)("h2",r({},{id:"differences-between-interpreted-and-compiled-code"}),"Differences between interpreted and compiled code"),(0,n.kt)("p",null,"Although application will work the same way in interpreted and compiled modes, there are some differences to know when you write code that will be compiled. The 4D interpreter is usually more flexible than the compiler."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Compiled"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Interpreted"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"You cannot have a method with the same name as a variable."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"No error is generated, but priority is given to the method")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"All variables must by typed, either through a compiler directive (ex: ",(0,n.kt)("inlineCode",{parentName:"td"},"C_LONGINT"),"), or by the compiler at compilation time."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Variables can be typed on-the-fly (not recommended)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"You cannot change the data type of any variable or array."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Changing the data type of a variable or an array is possible (not recommended)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"You cannot change a one-dimensional array to a two-dimensional array, or change a two-dimensional array to a one-dimensional array."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Possible")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Although the compiler will type the variable for you, you should specify the data type of a variable by using compiler directives where the data type is ambiguous, such as in a form."),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"The ",(0,n.kt)("inlineCode",{parentName:"td"},"Undefined")," function always returns False for variables. Variables are always defined."),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),'If you have checked the "Can be run in preemptive processes" property for the method, the code must not call any thread-unsafe commands or other thread-unsafe methods.'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Preemptive process properties are ignored")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"The ",(0,n.kt)("inlineCode",{parentName:"td"},"IDLE")," command is necessary to call 4D in specific loops"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"It is always possible to interrupt 4D")))),(0,n.kt)("h2",r({},{id:"using-compiler-directives-with-the-interpreter"}),"Using Compiler Directives with the Interpreter"),(0,n.kt)("p",null,"Os bancos n\xe3o compilados n\xe3o exigem diretivas de compilador. O int\xe9rprete digita automaticamente cada vari\xe1vel em fun\xe7\xe3o de como \xe9 utilizada em cada declara\xe7\xe3o, e uma vari\xe1vel pode voltar a ser escrita livremente em todo o banco de dados"),(0,n.kt)("p",null,"Por causa da flexibilidade, \xe9 poss\xedvel que um banco de dado possa atuar diretamente em modos interpretado e compilado."),(0,n.kt)("p",null,"For example, if you write:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"C_LONGINT(MyInt)\n")),(0,n.kt)("p",null,"e em outras partes do banco de dados, se escreve:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"MyInt:=3.1416\n")),(0,n.kt)("p",null,"In this example, ",(0,n.kt)("inlineCode",{parentName:"p"},"MyInt")," is assigned the same value (3) in both the interpreted and compiled modes, provided the compiler directive is interpreted ",(0,n.kt)("em",{parentName:"p"},"prior")," to the assignment statement."),(0,n.kt)("p",null,"The 4D interpreter uses compiler directives to type variables. When the interpreter encounters a compiler directive, it types the variable according to the directive. If a subsequent statement tries to assign an incorrect value (e.g., assigning an alphanumeric value to a numeric variable) the assignment will not take place and will generate an error."),(0,n.kt)("p",null,"A ordem na qual as duas declara\xe7\xf5es aparecem \xe9 irrelevante para o compilador porque primeiro escaneia o banco inteiro por diretivas de compilador. The interpreter, however, is not systematic. It interprets statements in the order in which they are executed. That order, of course, can change from session to session, depending on what the user does. Por isso, \xe9 importante projetar seu banco de dados de forma que as diretivas de compilador sejam executadas antes de qualquer declara\xe7\xf5es que contenham vari\xe1veis declaradas."),(0,n.kt)("h2",r({},{id:"using-pointers-to-avoid-retyping"}),"Using pointers to avoid retyping"),(0,n.kt)("p",null,"A variable cannot be retyped. However, it is possible to use a pointer to refer to variables of different data types. For example, the following code is allowed in both interpreted and compiled modes:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_POINTER($p)\nC_TEXT($name)\nC_LONGINT($age)\n\n$name:="Smith"\n$age:=50\n\n$p:=->$name //text target for the pointer\n$p->:="Wesson" //assigns a text value\n\n$p:=->$age  \n// new target of different type for the pointer\n$p->:=55 //assigns a number value\n')),(0,n.kt)("p",null,"Imagine a function that returns the length (number of charaters) of values that can be of any type."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  // Calc_Length (how many characters)\n  // $1 = pointer to flexible variable type, numeric, text, time, boolean C_POINTER($1)\nC_TEXT($result) C_LONGINT($0)\n$result:=String($1->)\n$0:=Length($result)\n")),(0,n.kt)("p",null,"Then this method can be called:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$var1:="my text"\n$var2:=5.3\n$var3:=?10:02:24?\n$var4:=True\n\n$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4) ALERT("Total length: "+String($vLength))\n')))}m.isMDXComponent=!0}}]);