"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51669],{3905:(e,o,r)=>{r.d(o,{Zo:()=>p,kt:()=>u});var t=r(67294);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=t.createContext({}),l=function(e){var o=t.useContext(d),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},p=function(e){var o=l(e.components);return t.createElement(d.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,g=m["".concat(d,".").concat(u)]||m[u]||c[u]||a;return r?t.createElement(g,i(i({ref:o},p),{},{components:r})):t.createElement(g,i({ref:o},p))}));function u(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var d in o)hasOwnProperty.call(o,d)&&(s[d]=o[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37171:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});r(67294);var t=r(3905);function n(){return n=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},n.apply(this,arguments)}function a(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"error-handling",title:"Gest\xe3o de erros"},s=void 0,d={unversionedId:"Concepts/error-handling",id:"version-19/Concepts/error-handling",title:"Gest\xe3o de erros",description:"O manejo de erros \xe9 o processo de antecipar e responder aos erros que possam ocorrer em sua aplica\xe7\xe3o. 4D oferece assist\xeancia completa \xe0 detec\xe7\xe3o e notifica\xe7\xe3o de erros no tempo de execu\xe7\xe3o, assim como a an\xe1lise de suas condi\xe7\xf5es.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/pt/19/Concepts/error-handling",draft:!1,tags:[],version:"19",frontMatter:{id:"error-handling",title:"Gest\xe3o de erros"},sidebar:"docs",previous:{title:"Transformation tags",permalink:"/docs/pt/19/Tags/tags"},next:{title:"Modos interpretado e compilado",permalink:"/docs/pt/19/Concepts/interpreted-compiled"}},l={},p=[{value:"Error or status",id:"error-or-status",level:2},{value:"Instala\xe7\xe3o de um m\xe9todo de gest\xe3o de erros",id:"instala\xe7\xe3o-de-um-m\xe9todo-de-gest\xe3o-de-erros",level:2},{value:"Alcance e componentes",id:"alcance-e-componentes",level:3},{value:"Manejo de erros dentro do m\xe9todo",id:"manejo-de-erros-dentro-do-m\xe9todo",level:3},{value:"Exemplo",id:"exemplo",level:4},{value:"Utilizar um m\xe9todo de gest\xe3o de erro vazio",id:"utilizar-um-m\xe9todo-de-gest\xe3o-de-erro-vazio",level:3}],c={toc:p};function m(e){var{components:o}=e,r=a(e,["components"]);return(0,t.kt)("wrapper",n({},c,r,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"O manejo de erros \xe9 o processo de antecipar e responder aos erros que possam ocorrer em sua aplica\xe7\xe3o. 4D oferece assist\xeancia completa \xe0 detec\xe7\xe3o e notifica\xe7\xe3o de erros no tempo de execu\xe7\xe3o, assim como a an\xe1lise de suas condi\xe7\xf5es."),(0,t.kt)("p",null,"Manejo de erros responde \xe0 duas necessidades principais:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"descobrir e consertar erros potenciais e bugs no c\xf3digo durante a fase de desenvolvimento,"),(0,t.kt)("li",{parentName:"ul"},"detectar e recuperar de erros inesperados nas aplica\xe7\xf5es implementadas; em particular pode substituir di\xe1logos de erros de sistemas (disco cheio, arquivo faltando, etc) com sua pr\xf3pria interface.",(0,t.kt)("blockquote",{parentName:"li"},(0,t.kt)("blockquote",{parentName:"blockquote"},(0,t.kt)("p",{parentName:"blockquote"},"It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. Esse m\xe9todo evitaria a apari\xe7\xe3o de caixas de di\xe1logo inesperadas no servidor e poderia registrar os erros em um arquivo especifico para sua an\xe1lise posterior."))))),(0,t.kt)("h2",n({},{id:"error-or-status"}),"Error or status"),(0,t.kt)("p",null,"Many 4D class functions, such as ",(0,t.kt)("inlineCode",{parentName:"p"},"entity.save()")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"transporter.send()"),", return a ",(0,t.kt)("em",{parentName:"p"},"status"),' object. This object is used to store "predictable" errors in the runtime context, e.g. invalid password, locked entity, etc., that do not stop program execution. This category of errors can be handled by regular code.'),(0,t.kt)("p",null,'Other "unpredictable" errors include disk write error, network failure, or in general any unexpected interruption. This category of errors generates exceptions and needs to be handled through an error-handling method.'),(0,t.kt)("h2",n({},{id:"instala\xe7\xe3o-de-um-m\xe9todo-de-gest\xe3o-de-erros"}),"Instala\xe7\xe3o de um m\xe9todo de gest\xe3o de erros"),(0,t.kt)("p",null,"In 4D, all errors can be caught and handled in a specific project method, the ",(0,t.kt)("strong",{parentName:"p"},"error-handling")," (or ",(0,t.kt)("strong",{parentName:"p"},"error-catching"),") method."),(0,t.kt)("p",null,"Este m\xe9todo projeto se instala para o processo atual e ser\xe1 chamado automaticamente para qualquer erro que se produza no processo, em modo interpretado ou compilado. Para ",(0,t.kt)("em",{parentName:"p"},"instalar")," este m\xe9todo projeto, basta com chamar ao comando ",(0,t.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," com o nome do m\xe9todo projeto como par\xe2metro. Por exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_ERRORS") //Instala o m\xe9todo de gest\xe3o de erros\n')),(0,t.kt)("p",null,"Para deixar de detectar erros e devolver o controle a 4D, chame a ",(0,t.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," com uma string vazia:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("") //devolve o controle a 4D\n')),(0,t.kt)("p",null,"The  ",(0,t.kt)("inlineCode",{parentName:"p"},"Method called on error")," command allows you to know the name of the method installed by ",(0,t.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," for the current process. It is particularly useful in the context of generic code because it enables you to temporarily change and then restore the error-catching method:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error\n ON ERR CALL("NewMethod")\n  //Se o documento n\xe3o pouder ser aberto, um erro \xe9 gerado\n $ref:=Open document("MyDocument")\n  //Reinstala\xe7\xe3o do m\xe9todo anterior\n ON ERR CALL($methCurrent)\n\n')),(0,t.kt)("h3",n({},{id:"alcance-e-componentes"}),"Alcance e componentes"),(0,t.kt)("p",null,"Pode definir um \xfanico m\xe9todo de captura de erros para toda a aplica\xe7\xe3o ou diferentes m\xe9todos por m\xf3dulo de aplica\xe7\xe3o. Entretanto, apenas um m\xe9todo pode ser instalado por processo."),(0,t.kt)("p",null,"An error-handling method installed by the ",(0,t.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command only applies to the running application. In the case of an error generated by a ",(0,t.kt)("strong",{parentName:"p"},"component"),", the ",(0,t.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," error-handling method of the host application is not called, and vice versa."),(0,t.kt)("h3",n({},{id:"manejo-de-erros-dentro-do-m\xe9todo"}),"Manejo de erros dentro do m\xe9todo"),(0,t.kt)("p",null,"Within the custom error method, you have access to several pieces of information that will help you identifying the error:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"vari\xe1veis sistema (*):"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Error")," (inteiro longo): c\xf3digo de erro"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Error method"),"(texto): nome do m\xe9todo que provocou o erro"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Error line")," (entero largo): n\xfamero de l\xednea do m\xe9todo que provocou o erro"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Error formula")," (text): f\xf3rmula do c\xf3digo 4D (texto bruto) que est\xe1 na origem do erro.")))),(0,t.kt)("p",null,"(",(0,t.kt)("em",{parentName:"p"},") 4D mant\xe9m automaticamente uma s\xe9rie de vari\xe1veis chamadas ",(0,t.kt)("strong",{parentName:"em"},"vari\xe1veis sistema"),", que respondem a diferentes necessidades. Consulte o "),"Manual da linguagem de 4D*."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"o comando ",(0,t.kt)("inlineCode",{parentName:"li"},"GET LAST ERROR STACK")," que devolve informa\xe7\xe3o sobre a pilha de erros atual da aplica\xe7\xe3o 4D."),(0,t.kt)("li",{parentName:"ul"},"o comando ",(0,t.kt)("inlineCode",{parentName:"li"},"Get call chain")," que devolve uma cole\xe7\xe3o de objetos que descrevem cada passo da string de chamadas a m\xe9todos dentro do processo atual.")),(0,t.kt)("h4",n({},{id:"exemplo"}),"Exemplo"),(0,t.kt)("p",null,"Aqui est\xe1 um sistema de gest\xe3o de erros simples:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'//instalar o m\xe9todo de gest\xe3o de erros\n ON ERR CALL("errorMethod")\n //... executar o c\xf3digo\n ON ERR CALL("") //retorna o controle para 4D\n')),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'// m\xe9todo projeto errorMethod\n If(Error#1006) //essa n\xe3o \xe9 uma interrup\xe7\xe3o do usu\xe1rio\n    ALERT("Um erro foi produzido "+String(Error)+". O c\xf3digo em quest\xe3o \xe9: \\""+Error formula+"\\"")\n End if\n')),(0,t.kt)("h3",n({},{id:"utilizar-um-m\xe9todo-de-gest\xe3o-de-erro-vazio"}),"Utilizar um m\xe9todo de gest\xe3o de erro vazio"),(0,t.kt)("p",null,"Se quiser que a caixa de di\xe1logo fique escondida, pode instalar um m\xe9todo de gest\xe3o de erros vazio. A vari\xe1vel sistema ",(0,t.kt)("inlineCode",{parentName:"p"},"Error")," pode ser provada em qualquer m\xe9todo, ou seja, fora do m\xe9todo de gest\xe3o de erros:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\n')))}m.isMDXComponent=!0}}]);