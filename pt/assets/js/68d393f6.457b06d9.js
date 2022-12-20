"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25885],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=m(a),k=r,N=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return a?n.createElement(N,o(o({ref:e},u),{},{components:a})):n.createElement(N,o({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2491:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"time",title:"Hora"},i=void 0,p={unversionedId:"Concepts/time",id:"version-19/Concepts/time",title:"Hora",description:"As vari\xe1veis, campos ou express\xf5es de tipo Hora podem pertencer a um intervalo entre 0000 e 596,00000.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/dt_time.md",sourceDirName:"Concepts",slug:"/Concepts/time",permalink:"/docs/pt/19/Concepts/time",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/Concepts/dt_time.md",tags:[],version:"19",frontMatter:{id:"time",title:"Hora"},sidebar:"docs",previous:{title:"String",permalink:"/docs/pt/19/Concepts/string"},next:{title:"Variant",permalink:"/docs/pt/19/Concepts/variant"}},m={},u=[{value:"Constantes literais de tipo hora",id:"constantes-literais-de-tipo-hora",level:2},{value:"Operadores de horas",id:"operadores-de-horas",level:2},{value:"Exemplo 1",id:"exemplo-1",level:3},{value:"Exemplo 2",id:"exemplo-2",level:3}],d={toc:u};function s(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As vari\xe1veis, campos ou express\xf5es de tipo Hora podem pertencer a um intervalo entre 00:00:00 e 596,000:00:00."),(0,n.kt)("p",null,"As Horas est\xe3o no formato 24 horas."),(0,n.kt)("p",null,"Um valor de Hora pode ser tratado como um n\xfamero. O n\xfamero retornado de uma Hora ser\xe1 o n\xfamero de segundos desde a maia noite (00:00:00) contidos nesse valor de hora."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," No manual ",(0,n.kt)("em",{parentName:"p"},"4D Refer\xeancia Lingu\xedstica")," , os par\xe2metros de Tempo nas descri\xe7\xf5es de comando s\xe3o indicados como Tempo, exceto quando marcados de outra forma."),(0,n.kt)("h2",r({},{id:"constantes-literais-de-tipo-hora"}),"Constantes literais de tipo hora"),(0,n.kt)("p",null,"Uma constante hora est\xe1 rodeada por sinais de interroga\xe7\xe3o (?....?)."),(0,n.kt)("p",null,"A time literal constant is ordered hour:minute:second, with a colon (:) setting off each part. Times are specified in 24-hour format. As horas s\xe3o especificadas no formato de 24 horas."),(0,n.kt)("p",null,"Aqui s\xe3o exemplos de constantes de tipo hora:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"?00:00:00? ` meia noite\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minuto, e 59 segundos\n")),(0,n.kt)("p",null,"Uma hora nula se escreve ?00:00:00?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dica:")," o Editor de m\xe9todos inclui um acesso direto para introduzir uma hora nula. Para escrever uma hora nula, introduza o sinal de interroga\xe7\xe3o (?) e aperte Enter."),(0,n.kt)("h2",r({},{id:"operadores-de-horas"}),"Operadores de horas"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Retorna"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adi\xe7\xe3o"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora + Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? + ?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?03:05:07?")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Subtra\xe7\xe3o"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora \u2013 Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:01:01?")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adi\xe7\xe3o"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora + N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"7449")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Subtra\xe7\xe3o"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora \u2013 N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"7319")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Multiplica\xe7\xe3o"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora * N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"14768")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Divis\xe3o"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora / N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?02:03:04?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"3692")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Divis\xe3o inteira"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora \\ N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"3692")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"M\xf3dulo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora % Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?20:10:00? % ?04:20:00?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?02:50:00?")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"M\xf3dulo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora % N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? % 2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Igual"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora = Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? >=?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:04?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Desigualdade"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora # Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maior que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora > Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? < ?01:02:04?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? < ?01:02:04?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Menor que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora < Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:04?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maior ou igual a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora >= Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? >=?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? >=?01:02:04?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Menor que ou igual a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora <= Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? <=?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? <=?01:02:03?"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,n.kt)("h3",r({},{id:"exemplo-1"}),"Exemplo 1"),(0,n.kt)("p",null,"Para obter uma express\xe3o de tipo hora a partir de uma express\xe3o que combina uma express\xe3o de hora com um n\xfamero, utilize os comandos ",(0,n.kt)("inlineCode",{parentName:"p"},"Time")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"Time string"),"."),(0,n.kt)("p",null,"Pode combinar express\xf5es dos tipos hora e n\xfamero utilizando as fun\xe7\xf5es ",(0,n.kt)("inlineCode",{parentName:"p"},"Time")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"Current time"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"    //A linha abaixo atribuir a $vlSeconds o n\xfamero de segundos   \n    //que est\xe3o entre meia noite e uma hora a partir de agora\n$vlSeconds:=Current time+3600\n    //A linha abaixo atribui a $vHSoon a hora que ser\xe1 em uma hora de tempo\n$vhSoon:=Time(Current time+3600)\n")),(0,n.kt)("p",null,"A segunda linha pode ser escrita de forma mais simples:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  //A linha abaixo atribui a $vHSoon a hora que ser\xe1 em uma hora\n $vhSoon:=Current time+?01:00:00?\n")),(0,n.kt)("h3",r({},{id:"exemplo-2"}),"Exemplo 2"),(0,n.kt)("p",null,"O operador Modulo pode ser usado, mais concretamente, para somar tempos que considerem o formato de 24 horas:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$t1:=?23:00:00? $t1:=?23:00:00? // Com uma simples adi\xe7\xe3o, $t2 \xe9?25:30:00?\n$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 \xe9 ?01:30:00? // It is 23:00 hours\n  // We want to add 2 and a half hours\n$t2:=$t1 +?02:30:00?\n")))}s.isMDXComponent=!0}}]);