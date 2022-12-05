"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41938],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(a),k=r,c=s["".concat(d,".").concat(k)]||s[k]||m[k]||l;return a?n.createElement(c,o(o({ref:e},u),{},{components:a})):n.createElement(c,o({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},83061:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"Transporter",title:"Classe Transporter"},i=void 0,d={unversionedId:"API/Transporter",id:"version-19-R7/API/Transporter",title:"Classe Transporter",description:"Descri\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R7/API/Transporter.md",sourceDirName:"API",slug:"/API/Transporter",permalink:"/docs/pt/API/Transporter",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/API/Transporter.md",tags:[],version:"19-R7",frontMatter:{id:"Transporter",title:"Classe Transporter"}},p={},u=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:".acceptUnsecureConnection",id:"acceptunsecureconnection",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".authenticationMode",id:"authenticationmode",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".authenticationMode",id:"authenticationmode-1",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".authenticationMode",id:"authenticationmode-2",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".bodyCharset",id:"bodycharset",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4},{value:".connectionTimeOut",id:"connectiontimeout",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-6",level:4},{value:".headerCharset",id:"headercharset",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-7",level:4},{value:".host",id:"host",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-8",level:4},{value:".logFile",id:"logfile",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-9",level:4},{value:".port",id:"port",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-10",level:4},{value:".sendTimeOut",id:"sendtimeout",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-11",level:4},{value:".user",id:"user",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-12",level:4},{value:".checkConnection()",id:"checkconnection",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-13",level:4},{value:"Objeto devolvido",id:"objeto-devolvido",level:4}],m={toc:u};function s(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",r({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("h2",r({},{id:"acceptunsecureconnection"}),".acceptUnsecureConnection"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".acceptUnsecureConnection")," : Boolean"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".acceptUnsecureConnection")," cont\xe9m ",(0,n.kt)("strong",{parentName:"p"},"True")," if 4D is allowed to establish an unencrypted connection when encrypted connection is not possible."),(0,n.kt)("p",null,"Cont\xe9m ",(0,n.kt)("strong",{parentName:"p"},"False")," se conex\xf5es cifradas n\xe3o forem permitidas, neste caso um erro \xe9 retornado quando a conex\xe3o criptografada n\xe3o for poss\xedvel."),(0,n.kt)("p",null,"Est\xe3o dispon\xedveis portos seguros:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SMTP"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"465: SMTPS"),(0,n.kt)("li",{parentName:"ul"},"587 ou 25: SMTP com atualiza\xe7\xe3o STARTTLS se for compat[ivel com o servidor."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"IMAP"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"143: IMAP non-encrypted port"),(0,n.kt)("li",{parentName:"ul"},"993: IMAP com atualiza\xe7\xe3o STARTTLS se for compat\xedvel com o servidor"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"POP3"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"110: Porta n\xe3o criptografada POP3"),(0,n.kt)("li",{parentName:"ul"},"995: POP3 com atualiza\xe7\xe3o STARTTLS se suportado pelo servidor.")))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"authenticationmode"}),".authenticationMode"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".authenticationMode")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".authenticationMode<")," cont\xe9m o modo de autentica\xe7\xe3o utilizado para abrir a sess\xe3o no servidor de correio."),(0,n.kt)("p",null,"Por padr\xe3o, o modo mais seguro suportado pelo servidor \xe9 usado."),(0,n.kt)("p",null,"Valores poss\xedveis:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constantes"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Coment\xe1rio"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CRAM-MD5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"IMAP authentication CRAM MD5")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo CRAM-MD5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LOGIN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Autentica\xe7\xe3o do login/acesso")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo LOGIN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"OAUTH2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Autentica\xe7\xe3o IMAP OAUTH2")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo OAuth2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PLAIN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"IMAP authentication plain")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo PLAIN")))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"authenticationmode-1"}),".authenticationMode"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".authenticationMode")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-3"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".authenticationMode")," cont\xe9m o modo de autentica\xe7\xe3o utilizado para abrir a sess\xe3o no servidor de correio."),(0,n.kt)("p",null,"Por padr\xe3o, o modo mais seguro suportado pelo servidor \xe9 usado."),(0,n.kt)("p",null,"Valores poss\xedveis:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constantes"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Coment\xe1rio"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"APOP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Autentica\xe7\xe3o POP3 APOP")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo APOP (POP3 apenas)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CRAM-MD5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Autentica\xe7\xe3o POP3 CRAM-MD5")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo CRAM-MD5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LOGIN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"POP3 authentication login")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo LOGIN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"OAUTH2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"POP3 authentication OAUTH2")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo OAuth2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PLAIN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Autentica\xe7\xe3o POP3 simples")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo PLAIN")))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"authenticationmode-2"}),".authenticationMode"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".authenticationMode")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-4"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".authenticationMode")," cont\xe9m o modo de autentica\xe7\xe3o utilizado para abrir a sess\xe3o no servidor de correio."),(0,n.kt)("p",null,"Por padr\xe3o, o modo mais seguro suportado pelo servidor \xe9 usado."),(0,n.kt)("p",null,"Valores poss\xedveis:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constantes"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Coment\xe1rio"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CRAM-MD5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"SMTP authentication CRAM MD5")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo CRAM-MD5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LOGIN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"SMTP authentication login")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo LOGIN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"OAUTH2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"SMTP authentication OAUTH2")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo OAuth2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PLAIN"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"SMTP authentication plain")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Autentica\xe7\xe3o usando o protocolo PLAIN")))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"bodycharset"}),".bodyCharset"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v18"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Suporte de UTF8 base64")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".bodyCharset")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-5"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".bodyCharset")," cont\xe9m   the charset and encoding used for the body part of the email."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Valores poss\xedveis:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constante"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Coment\xe1rio"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode ISO2022JP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"US-ASCII_ISO-2022-JP_UTF8_QP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"headerCharset"),": US-ASCII se for poss\xedvel, japon\xeas (ISO-2022-JP) & Quoted-printable se for poss\xedvel, do contr\xe1rio UTF-8 & Quoted-printable"),(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII se poss\xedvel, japon\xeas (ISO-2022-JP) e 7 bits se for poss\xedvel, do contr\xe1rio UTF-8 & Quoted-printable")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode ISO88591"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ISO-8859-1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"headerCharset"),": ISO-8859-1 & Quoted-printable"),(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": ISO-8859-1 & 8-bit")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode UTF8"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"US-ASCII_UTF8_QP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"headerCharset")," & ",(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII se poss\xedvel, caso contr\xe1rio UTF-8 & Quoted-printable (",(0,n.kt)("strong",{parentName:"td"},"valor por defeito"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"modo de correio UTF8 na base64"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"US-ASCII_UTF8_B64"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"headerCharset")," & ",(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII se poss\xedvel, sen\xe3o UTF-8 & base64")))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"connectiontimeout"}),".connectionTimeOut"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".connectionTimeOut")," : Integer"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-6"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".connectionTimeOut")," cont\xe9m the maximum wait time (in seconds) allowed to establish a connection to the server. By default, if the property has not been set in the server object (used to create the transporter object with ",(0,n.kt)("inlineCode",{parentName:"p"},"SMTP New transporter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"POP3 New transporter"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"IMAP New transporter"),"), the value is 30."),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"headercharset"}),".headerCharset"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".headerCharset")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-7"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".headerCharset")," cont\xe9m  the charset and encoding used for the email header. The header includes the following parts of the email:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"subject,"),(0,n.kt)("li",{parentName:"ul"},"nome(s) de arquivo anexo,"),(0,n.kt)("li",{parentName:"ul"},"email name.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Valores poss\xedveis:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constante"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Coment\xe1rio"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode ISO2022JP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"US-ASCII_ISO-2022-JP_UTF8_QP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"headerCharset"),": US-ASCII se for poss\xedvel, japon\xeas (ISO-2022-JP) & Quoted-printable se for poss\xedvel, do contr\xe1rio UTF-8 & Quoted-printable"),(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII se poss\xedvel, japon\xeas (ISO-2022-JP) e 7 bits se for poss\xedvel, do contr\xe1rio UTF-8 & Quoted-printable")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode ISO88591"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ISO-8859-1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"headerCharset"),": ISO-8859-1 & Quoted-printable"),(0,n.kt)("li",null,(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": ISO-8859-1 & 8-bit")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail mode UTF8"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"US-ASCII_UTF8_QP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"texto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"modo de correio UTF8 na base64"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"US-ASCII_UTF8_B64"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"headerCharset")," & ",(0,n.kt)("em",{parentName:"td"},"bodyCharset"),": US-ASCII se poss\xedvel, sen\xe3o UTF-8 & base64")))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"host"}),".host"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".host")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-8"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".host")," cont\xe9m the name or the IP address of the host server. Used for mail transactions (SMTP, POP3, IMAP)."),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"logfile"}),".logFile"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".logFile")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-9"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".logFile")," property contains the path of the extended log file defined (if any) for the mail connection. It can be relative (to the current Logs folder) or absolute."),(0,n.kt)("p",null,"Unlike regular log files (enabled via the ",(0,n.kt)("inlineCode",{parentName:"p"},"SET DATABASE PARAMETER")," command), extended log files store MIME contents of all sent mails and do not have any size limit. For more information about extended log files, refer to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conex\xf5es SMTP")," - ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DSMTPLog.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conex\xf5es POP3")," - ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DPOP3Log.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conex\xf5es IMAP ")," - ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt"}),"4DIMAPLog.txt"))),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"port"}),".port"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".port")," : Integer"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-10"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".port")," cont\xe9m  the port number used for mail transactions. By default, if the ",(0,n.kt)("em",{parentName:"p"},"port")," property has not been set in the ",(0,n.kt)("em",{parentName:"p"},"server")," object (used to create the transporter object with ",(0,n.kt)("inlineCode",{parentName:"p"},"SMTP New transporter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"POP3 New transporter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"IMAP New transporter"),"), the port used is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SMTP")," - 587"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"POP3")," - 995"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IMAP")," - 993")),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"sendtimeout"}),".sendTimeOut"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".sendTimeOut")," : Integer"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-11"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".sendTimeOut")," cont\xe9m  the maximum wait time (in seconds) of a call to ",(0,n.kt)("inlineCode",{parentName:"p"},".send( )")," before a timeout occurs. ."),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"user"}),".user"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".user")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-12"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".user")," cont\xe9m  the user name used for authentication on the mail server."),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"checkconnection"}),".checkConnection()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".checkConnection()")," : Object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resultados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objeto"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Status of the transporter object connection")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-13"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".checkConnection()")," function  checks the connection using information stored in the transporter object, recreates the connection if necessary, and returns the status. This function allows you to verify that the values provided by the user are valid and consistent."),(0,n.kt)("h4",r({},{id:"objeto-devolvido"}),"Objeto devolvido"),(0,n.kt)("p",null,"The function sends a request to the mail server and returns an object describing the mail status. This object can contain the following properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True if the check is successful, False otherwise")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"status"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(SMTP only) Status code returned by the mail server (0 in case of an issue unrelated to the mail processing)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"statusText"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Status message returned by the mail server, or last error returned in the 4D error stack")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errors"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D error stack (not returned if a mail server response is received)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"["," ].errCode"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D error code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"["," ].message"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Description of the 4D error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"["," ].componentSignature"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Signature of the internal component which returned the error")))))}s.isMDXComponent=!0}}]);