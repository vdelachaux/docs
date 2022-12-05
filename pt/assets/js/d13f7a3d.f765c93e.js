"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50707],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||n;return t?r.createElement(v,s(s({ref:a},p),{},{components:t})):r.createElement(v,s({ref:a},p))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15170:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});t(67294);var r=t(3905);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"variables",title:"Vari\xe1veis"},i=void 0,l={unversionedId:"Concepts/variables",id:"version-18/Concepts/variables",title:"Vari\xe1veis",description:"Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. Os campos armazenam os dados permanentemente no disco; as vari\xe1veis armazenam os dados na mem\xf3ria de forma temporal.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/pt/18/Concepts/variables",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/Concepts/variables.md",tags:[],version:"18",frontMatter:{id:"variables",title:"Vari\xe1veis"},sidebar:"docs",previous:{title:"Variant",permalink:"/docs/pt/18/Concepts/variant"},next:{title:"Arrays",permalink:"/docs/pt/18/Concepts/arrays"}},c={},p=[{value:"Cria\xe7\xe3o de vari\xe1veis",id:"cria\xe7\xe3o-de-vari\xe1veis",level:2},{value:"Assigning Data",id:"assigning-data",level:2},{value:"Local, Process, and Interprocess variables",id:"local-process-and-interprocess-variables",level:2},{value:"Local variables",id:"local-variables",level:3},{value:"Process variables",id:"process-variables",level:3},{value:"Interprocess variables",id:"interprocess-variables",level:3}],d={toc:p};function m(e){var{components:a}=e,t=n(e,["components"]);return(0,r.kt)("wrapper",o({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. ",(0,r.kt)("strong",{parentName:"p"},"Os campos")," armazenam os dados permanentemente no disco; ",(0,r.kt)("strong",{parentName:"p"},"as vari\xe1veis")," armazenam os dados na mem\xf3ria de forma temporal."),(0,r.kt)("p",null,"Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Com as vari\xe1veis \xe9 mais ou menos a mesma coisa, tamb\xe9m se lhes d\xe1 nomes e tipos diferentes (ver ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/Concepts/data-types"}),"Tipos de dados"),")."),(0,r.kt)("p",null,"As vari\xe1veis s\xe3o objetos da linguagem; pode criar e utilizar variables que nunca aparecer\xe3o na tela. In your forms, you can display variables (except Pointer and BLOB) on the screen, enter data into them, and print them in reports. In this way, enterable and non-enterable area variables act just like fields, and the same built-in controls are available when you create them. Form variables can also control buttons, list boxes, scrollable areas, picture buttons, and so on, or display results of calculations that do not need to be saved."),(0,r.kt)("h2",o({},{id:"cria\xe7\xe3o-de-vari\xe1veis"}),"Cria\xe7\xe3o de vari\xe1veis"),(0,r.kt)("p",null,'Voc\xea cria as vari\xe1veis declarando-as mediante um dos comandos dos temas "Compilador" ou "Arrays".'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:"),"os arrays s\xe3o um tipo particular de vari\xe1veis. Um array \xe9 uma s\xe9rie ordenada de vari\xe1veis do mesmo tipo. For more information, please refer to ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/Concepts/arrays"}),"Arrays"),"."),(0,r.kt)("p",null,"For example, if you want to define a text variable, you write:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"})," C_TEXT(myText)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:")," apesar de n\xe3o recomendado, pode criar vari\xe1veis simplesmente usando-as; n\xe3o precisa definir as vari\xe1veis formalmente como se faz com os campos. Por exemplo, se quiser criar uma vari\xe1vel que contenha a data atual mais 30 dias, pode escrever:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"})," MyDate:=Current date+30 //MyDate \xe9 criada e obt\xe9m a data atual mais  30 d\xedas\n")),(0,r.kt)("p",null,"Ap\xf3s a cria\xe7\xe3o pode usar a vari\xe1vel onde quiser no seu banco de dados. Por exemplo, pode precisar armazenar a vari\xe1vel texto em um campo do mesmo tipo"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"})," [MyTable]MyField:=MyText\n")),(0,r.kt)("p",null,"The following are some basic variable declarations:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"\n C_BLOB(vxMyBlob) // A vari\xe1vel processo vxMyBlob se declara como uma vari\xe1vel de tipo BLOB\n C_DATE($vdCurDate) // A vari\xe1vel local $vdCurDate se declara como uma vari\xe1vel de tipo Data\n C_LONGINT(vg1;vg2;vg3) // As 3 vari\xe1veis de processo vg1, vg2 y vg3 se declaram como vari\xe1veis de tipo Inteiro longo\n C_OBJECT($vObj) // A vari\xe1vel local $vObj se declara como uma vari\xe1vel de tipo Objeto\n C_COLLECTION($vCol) // A vari\xe1vel local $vCol se declara como uma vari\xe1ve de tipo Cole\xe7\xe3o\n ARRAY LONGINT(alAnArray;10) //A vari\xe1vel do processo alAnArray se declara como um array Inteiro longo de 10 elementos\n")),(0,r.kt)("h2",o({},{id:"assigning-data"}),"Assigning Data"),(0,r.kt)("p",null,"Data can be put into and copied out of variables and arrays. Putting data into a variable is called ",(0,r.kt)("strong",{parentName:"p"},"assigning the data to the variable")," and is done with the assignment operator (:=). The assignment operator is also used to assign data to fields."),(0,r.kt)("p",null,"O operador de atribui\xe7\xe3o \xe9 a maneira mais importante de criar uma vari\xe1vel e jogar dados nela. You write the name of the variable that you want to create on the left side of the assignment operator. Por exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"MyNumber:=3\n")),(0,r.kt)("p",null,"creates the variable ",(0,r.kt)("em",{parentName:"p"},"MyNumber")," and puts the number 3 into it. If MyNumber already exists, then the number 3 is just put into it."),(0,r.kt)("p",null,"Of course, variables would not be very useful if you could not get data out of them. Once again, you use the assignment operator. If you need to put the value of MyNumber in a field called ","[Products]","Size, you would write ",(0,r.kt)("em",{parentName:"p"},"MyNumber")," on the right side of the assignment operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"[Products]Size:=MyNumber\n")),(0,r.kt)("p",null,"In this case, ",(0,r.kt)("em",{parentName:"p"},"[Products]","Size")," would be equal to 3. This example is rather simple, but it illustrates the fundamental way that data is transferred from one place to another by using the language."),(0,r.kt)("p",null,"You assign data to array elements by using curly braces ({...}):"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'atNames{1}:="Richard"\n')),(0,r.kt)("h2",o({},{id:"local-process-and-interprocess-variables"}),"Local, Process, and Interprocess variables"),(0,r.kt)("p",null,"You can create three types of variables: ",(0,r.kt)("strong",{parentName:"p"},"local"),", ",(0,r.kt)("strong",{parentName:"p"},"process"),", and ",(0,r.kt)("strong",{parentName:"p"},"interprocess"),". The difference between the three types of elements is their scope, or the objects to which they are available."),(0,r.kt)("h3",o({},{id:"local-variables"}),"Local variables"),(0,r.kt)("p",null,"A local variable is, as its name implies, local to a method\u2014accessible only within the method in which it was created and not accessible outside of that method. Being local to a method is formally referred to as being \u201clocal in scope.\u201d Local variables are used to restrict a variable so that it works only within the method."),(0,r.kt)("p",null,"You may want to use a local variable to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoid conflicts with the names of other variables"),(0,r.kt)("li",{parentName:"ul"},"Use data temporarily"),(0,r.kt)("li",{parentName:"ul"},"Reduce the number of process variables")),(0,r.kt)("p",null,"The name of a local variable always starts with a dollar sign ($) and can contain up to 31 additional characters. If you enter a longer name, 4D truncates it to the appropriate length."),(0,r.kt)("p",null,"Quando trabalhar em um banco de dados com muitos m\xe9todos e vari\xe1veis, geralmente s\xf3 precisa usar uma vari\xe1vel dentro do m\xe9todo no qual trabalha. You can create and use a local variable in the method without worrying about whether you have used the same variable name somewhere else."),(0,r.kt)("p",null,"Frequentemente, em um banco de dados, pequenas peda\xe7os de informa\xe7\xe3o s\xe3o necess\xe1rios do usu\xe1rio. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," command can obtain this information. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. You usually do not need to keep this information in your methods for very long. This is a typical way to use a local variable. This is a typical way to use a local variable. Aqui um exemplo simples:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $vsID:=Request("Please enter your ID:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n')),(0,r.kt)("p",null,"This method simply asks the user to enter an ID. It puts the response into a local variable, $vsID, and then searches for the ID that the user entered. When this method finishes, the $vsID local variable is erased from memory. This is fine, because the variable is needed only once and only in this method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Parameters $1, $2... passed to methods are local variables. For more information, please refer to ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/Concepts/parameters"}),"Parameters"),"."),(0,r.kt)("h3",o({},{id:"process-variables"}),"Process variables"),(0,r.kt)("p",null,"A process variable is available only within a process. It is accessible to the process method and any other method called from within the process."),(0,r.kt)("p",null,"A process variable does not have a prefix before its name. A process variable name can contain up to 31 characters."),(0,r.kt)("p",null,"In interpreted mode, variables are maintained dynamically; they are created and erased from memory \u201con the fly.\u201d In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. For example, the variable myVar is one variable in the process P_1 and another one in the process P_2."),(0,r.kt)("p",null,"A process can \u201cpeek and poke\u201d process variables from another process using the commands ",(0,r.kt)("inlineCode",{parentName:"p"},"GET PROCESS VARIABLE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SET PROCESS VARIABLE"),". It is good programming practice to restrict the use of these commands to the situation for which they were added to 4D:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interprocess communication at specific places or your code"),(0,r.kt)("li",{parentName:"ul"},"Handling of interprocess drag and drop"),(0,r.kt)("li",{parentName:"ul"},"In Client/Server, communication between processes on client machines and the stored procedures running on the server machines")),(0,r.kt)("p",null,"For more information, see the chapter ",(0,r.kt)("strong",{parentName:"p"},"Processes")," and the description of these commands."),(0,r.kt)("h3",o({},{id:"interprocess-variables"}),"Interprocess variables"),(0,r.kt)("p",null,"Vari\xe1veis interprocessos est\xe3o dispon\xedveis pelo banco de dados e s\xe3o partilhados entre os processos cooperativos. They are primarily used to share information between processes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use of interprocess variables is not recommended since they are not available from preemptive processes and tend to make the code less maintainable.")),(0,r.kt)("p",null,"The name of an interprocess variable always begins with the symbols (",(0,r.kt)("inlineCode",{parentName:"p"},"<>"),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign\u2014 followed by 31 characters."),(0,r.kt)("p",null,"In Client/Server, each machine (Client machines and Server machine) share the same definition of interprocess variables, but each machine has a different instance for each variable."))}m.isMDXComponent=!0}}]);