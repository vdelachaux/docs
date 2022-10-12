"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=o(r),c=n,b=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return r?a.createElement(b,s(s({ref:t},m),{},{components:r})):a.createElement(b,s({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},59519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>m});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={id:"preemptiveWeb",title:"Using preemptive web processes"},l=void 0,p={unversionedId:"WebServer/preemptiveWeb",id:"version-19-R7/WebServer/preemptiveWeb",title:"Using preemptive web processes",description:"Le Web Server de 4D vous permet de tirer pleinement parti des ordinateurs multi-coeurs en utilisant des process Web pr\xe9emptifs dans vos applications compil\xe9es. Vous pouvez configurer votre code li\xe9 au Web, y compris les balises 4D, les m\xe9thodes base Web ou les fonctions de classe REST de ORDA, afin qu'il s'ex\xe9cute simultan\xe9ment sur le plus grand nombre de coeurs possibles.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/WebServer/preemptiveWeb.md",sourceDirName:"WebServer",slug:"/WebServer/preemptiveWeb",permalink:"/docs/fr/WebServer/preemptiveWeb",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"preemptiveWeb",title:"Using preemptive web processes"},sidebar:"docs",previous:{title:"Sessions utilisateur",permalink:"/docs/fr/WebServer/sessions"},next:{title:"Prise en main",permalink:"/docs/fr/REST/gettingStarted"}},o={},m=[{value:"Disponibilit\xe9 du mode pr\xe9emptif pour les pocess Web",id:"disponibilit\xe9-du-mode-pr\xe9emptif-pour-les-pocess-web",level:2},{value:"Ecrire du code serveur Web thread-safe",id:"ecrire-du-code-serveur-web-thread-safe",level:2},{value:"Code web 4D thread-safe",id:"code-web-4d-thread-safe",level:2},{value:"4D commands and database methods",id:"4d-commands-and-database-methods",level:3},{value:"URL Web Server",id:"url-web-server",level:3},{value:"Preemptive web process icon",id:"preemptive-web-process-icon",level:3}],d={toc:m};function u(e){var{components:t}=e,s=i(e,["components"]);return(0,a.kt)("wrapper",n({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Le Web Server de 4D vous permet de tirer pleinement parti des ordinateurs multi-coeurs en utilisant des process Web pr\xe9emptifs dans vos applications compil\xe9es. Vous pouvez configurer votre code li\xe9 au Web, y compris les balises 4D, les m\xe9thodes base Web ou les fonctions de classe REST de ORDA, afin qu'il s'ex\xe9cute simultan\xe9ment sur le plus grand nombre de coeurs possibles."),(0,a.kt)("p",null,"Pour plus d'informations sur la fonctionnalit\xe9 des process pr\xe9emptifs dans 4D, veuillez vous r\xe9f\xe9rer \xe0 la section ",(0,a.kt)("em",{parentName:"p"},"Process 4D pr\xe9emptifs")," du ",(0,a.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),(0,a.kt)("em",{parentName:"a"},"manuel de language 4D")),"."),(0,a.kt)("h2",n({},{id:"disponibilit\xe9-du-mode-pr\xe9emptif-pour-les-pocess-web"}),"Disponibilit\xe9 du mode pr\xe9emptif pour les pocess Web"),(0,a.kt)("p",null,"Le tableau suivant permet d'indiquer si l'utilisation du mode pr\xe9emptif pour les process Web est disponible dans le contexte d'ex\xe9cution suivant :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"4D Server"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Interpr\xe9t\xe9 (",(0,a.kt)("a",n({parentName:"th"},{href:"/docs/fr/Debugging/debugging-remote"}),"associ\xe9 au d\xe9bogueur"),")"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Interpr\xe9t\xe9 (non associ\xe9 au d\xe9bogueur)"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Compil\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Serveur REST"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"pr\xe9emptif"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"pr\xe9emptif")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Serveur Web"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"param\xe8tre web")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"param\xe8tre web"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Server Web Services"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"param\xe8tre web")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"param\xe8tre web"))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"4D distant/monoposte"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Interpr\xe9t\xe9"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Compil\xe9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Serveur REST"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"pr\xe9emptif")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Serveur Web"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"param\xe8tre web"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Server Web Services"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"coop\xe9ratif"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"param\xe8tre web"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Serveur REST : g\xe8re les ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/fr/REST/classFunctions"}),"fonctions de classe du mod\xe8le de donn\xe9es ORDA")),(0,a.kt)("li",{parentName:"ul"},"Serveur Web : g\xe8re les ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/fr/WebServer/templates"}),"mod\xe8les Web"),", ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/fr/WebServer/httpRequests"}),"4DACTION et les m\xe9thodes base")),(0,a.kt)("li",{parentName:"ul"},"Serveur de services Web : g\xe8re les requ\xeates SOAP"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"web setting"))," signifie que le mode pr\xe9emptif d\xe9pend d'une valeur de r\xe9glage :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"lorsque l'option ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/fr/WebServer/sessions#enabling-sessions"}),(0,a.kt)("strong",{parentName:"a"},"Scalable sessions est s\xe9lectionn\xe9e")),", le ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/fr/WebServer/sessions#preemptive-mode"}),"mode pr\xe9emptif est automatiquement utilis\xe9")," pour les process web."),(0,a.kt)("li",{parentName:"ul"},"otherwise, the ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/fr/WebServer/webServerConfig#use-preemptive-processes"}),(0,a.kt)("strong",{parentName:"a"},"Use preemptive processes"))," option is taken into account."),(0,a.kt)("li",{parentName:"ul"},'regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see ',(0,a.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html"}),"Publishing a Web Service with 4D"),") or proxy client methods (see ",(0,a.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html"}),"Subscribing to a Web Service in 4D"),") and make sure they are confirmed thread-safe by the compiler.")))),(0,a.kt)("h2",n({},{id:"ecrire-du-code-serveur-web-thread-safe"}),"Ecrire du code serveur Web thread-safe"),(0,a.kt)("p",null,"Tout le code 4D ex\xe9cut\xe9 par le serveur Web doit \xeatre thread-safe si vous souhaitez que les process Web soient lanc\xe9s en mode pr\xe9emptif. Lorsque l'option ",(0,a.kt)("a",n({parentName:"p"},{href:"#availability-of-preemptive-mode-for-web-processes"}),"Utiliser des process pr\xe9emptifs")," est coch\xe9e dans le dialogue des Propri\xe9t\xe9s, les parties de l'application list\xe9es ci-dessous sont automatiquement \xe9valu\xe9es par 4D Compiler :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Toutes les m\xe9thodes base li\xe9es au web :"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/fr/WebServer/authentication#on-web-authentication"}),(0,a.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/fr/WebServer/httpRequests#on-web-connection"}),(0,a.kt)("inlineCode",{parentName:"a"},"On Web Connection"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/fr/REST/configuration#using-the-on-rest-authentication-database-method"}),(0,a.kt)("inlineCode",{parentName:"a"},"On REST Authentication"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication"}),(0,a.kt)("inlineCode",{parentName:"a"},"On Mobile App Authentication"))," et ",(0,a.kt)("a",n({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action"}),(0,a.kt)("inlineCode",{parentName:"a"},"On Mobile App Action"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"La m\xe9thode projet ",(0,a.kt)("inlineCode",{parentName:"p"},"compiler_web"),' (ind\xe9pendamment de sa propri\xe9t\xe9 "Mode d\'ex\xe9cution") ;')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tout code trait\xe9 par la commande ",(0,a.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page816.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"PROCESS 4D TAGS"))," en contexte Web, par exemple via des pages .shtml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Toute m\xe9thode projet comportant l'attribut \"Available through 4D tags and URLS (",(0,a.kt)("inlineCode",{parentName:"p"},"4DACTION"),', etc.)"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Triggers pour les tables comportant l\'attribut "Expose as REST resource"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/REST/classFunctions"}),"Fonctions de classe du mod\xe8le de donn\xe9es ORDA")," appel\xe9es via REST"))),(0,a.kt)("p",null,"Pour chacune de ces m\xe9thodes ou parties de code, le compilateur v\xe9rifiera si les r\xe8gles thread-safe sont respect\xe9es, et retournera une erreur en cas de probl\xe8me. Pour plus d'informations \xe0 propos des r\xe8gles thread-safe, veuillez vous r\xe9f\xe9rer au paragraphe ",(0,a.kt)("em",{parentName:"p"},"Ecrire une m\xe9thode thread-safe")," dans le chapitre ",(0,a.kt)("em",{parentName:"p"},"Process")," du manuel de ",(0,a.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),"Langage 4D"),"."),(0,a.kt)("h2",n({},{id:"code-web-4d-thread-safe"}),"Code web 4D thread-safe"),(0,a.kt)("p",null,"La plupart des commandes et fonctions 4D, des m\xe9thodes base et des URL 4D sont thread-safe et peuvent \xeatre utilis\xe9es en mode pr\xe9emptif."),(0,a.kt)("h3",n({},{id:"4d-commands-and-database-methods"}),"4D commands and database methods"),(0,a.kt)("p",null,"Toutes les commandes 4D relatives au Web sont thread-safe, \xe0 savoir :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"toutes les commandes du th\xe8me ",(0,a.kt)("em",{parentName:"li"},"Web Server")),(0,a.kt)("li",{parentName:"ul"},"toutes les commandes du th\xe8me ",(0,a.kt)("em",{parentName:"li"},"Client HTTP"),".")),(0,a.kt)("p",null,"Les m\xe9thodes base ci-dessous sont thread-safe et peuvent \xeatre utilis\xe9es en mode pr\xe9emptif (voir ci-dessus) : ",(0,a.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"On Web Connection"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),"...)."),(0,a.kt)("p",null,"Bien s\xfbr, le code ex\xe9cut\xe9 par ces m\xe9thodes doit aussi \xeatre thread-safe."),(0,a.kt)("h3",n({},{id:"url-web-server"}),"URL Web Server"),(0,a.kt)("p",null,"Les URLs Web Server ci-dessous sont thread-safe et peuvent \xeatre utilis\xe9es en mode pr\xe9emptif :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"4daction/")," (la m\xe9thode projet appel\xe9e doit \xe9galement \xeatre \xe0 thread-safe)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"4dcgi/")," (les m\xe9thodes base appel\xe9es doivent \xe9galement \xeatre thread-safe)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"4dwebtest/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"4dblank/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"4dstats/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"4dhtmlstats/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"4dcacheclear/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"rest/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"4dimgfield/")," (g\xe9n\xe9r\xe9 par ",(0,a.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," pour les requ\xeates web relatives aux champs images)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"4dimg/")," (g\xe9n\xe9r\xe9 par ",(0,a.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," pour les requ\xeates web sur les variables image)")),(0,a.kt)("h3",n({},{id:"preemptive-web-process-icon"}),"Preemptive web process icon"),(0,a.kt)("p",null,"Dans l'Explorateur d'ex\xe9cution et dans la fen\xeatre d'administration de 4D Server, une icone sp\xe9cifique s'affiche pour les process Web pr\xe9emptifs :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type de process"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Ic\xf4ne"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9thode Web (process pr\xe9emptif)"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("img",{src:r(34339).Z,width:"40",height:"32"}))))))}u.isMDXComponent=!0},34339:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);