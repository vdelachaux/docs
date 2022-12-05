"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15931],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>m});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(s),m=a,v=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return s?n.createElement(v,i(i({ref:t},p),{},{components:s})):n.createElement(v,i({ref:t},p))}));function m(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,i=new Array(r);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=s[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}c.displayName="MDXCreateElement"},64151:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});s(67294);var n=s(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}const i={id:"datastores",title:"Utiliser un datastore distant"},o=void 0,l={unversionedId:"ORDA/datastores",id:"version-19/ORDA/datastores",title:"Utiliser un datastore distant",description:"Un datastore expos\xe9 sur une application 4D Server est accessible simultan\xe9ment via diff\xe9rents clients :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/ORDA/remoteDatastores.md",sourceDirName:"ORDA",slug:"/ORDA/datastores",permalink:"/docs/fr/19/ORDA/datastores",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/ORDA/remoteDatastores.md",tags:[],version:"19",frontMatter:{id:"datastores",title:"Utiliser un datastore distant"},sidebar:"docs",previous:{title:"Travailler avec des donn\xe9es",permalink:"/docs/fr/19/ORDA/entities"},next:{title:"Glossaire",permalink:"/docs/fr/19/ORDA/glossary"}},u={},p=[{value:"Ouverture des sessions",id:"ouverture-des-sessions",level:2},{value:"Visionnage des sessions",id:"visionnage-des-sessions",level:2},{value:"Verrouillage et transactions",id:"verrouillage-et-transactions",level:2},{value:"Fermeture des sessions",id:"fermeture-des-sessions",level:2}],d={toc:p};function c(e){var{components:t}=e,i=r(e,["components"]);return(0,n.kt)("wrapper",a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/ORDA/dsmapping#datastore"}),"datastore")," expos\xe9 sur une application 4D Server est accessible simultan\xe9ment via diff\xe9rents clients :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Les applications 4D distantes utilisant ORDA pour acc\xe9der au datastore principal \xe0 l\u2019aide de la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"ds"),". A noter que l'application 4D distante peut toujours acc\xe9der \xe0 la base de donn\xe9es en mode classique. Ces acc\xe8s sont g\xe9r\xe9s par le ",(0,n.kt)("strong",{parentName:"li"},"serveur d'applications 4D"),"."),(0,n.kt)("li",{parentName:"ul"},"D'autres applications 4D (4D Remote, 4D Server) ouvrant une session sur le datastore distant via la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"Open datastore"),". Ces acc\xe8s sont transmis par le ",(0,n.kt)("strong",{parentName:"li"},"serveur HTTP REST"),"."),(0,n.kt)("li",{parentName:"ul"},"Les requ\xeates 4D for iOS pour la mise \xe0 jour des applications iOS. Ces acc\xe8s sont remis par le ",(0,n.kt)("strong",{parentName:"li"},"serveur HTTP"),".")),(0,n.kt)("p",null,"Lorsque vous travaillez avec un datastore distant r\xe9f\xe9renc\xe9 par des appels \xe0 la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore"),", la connexion entre les process qui effectuent la requ\xeate et le datastore distant est g\xe9r\xe9e par des sessions."),(0,n.kt)("h2",a({},{id:"ouverture-des-sessions"}),"Ouverture des sessions"),(0,n.kt)("p",null,"Lorsqu'une application 4D (c'est-\xe0-dire un process) ouvre un datastore externe \xe0 l'aide de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore"),", une session est cr\xe9\xe9e sur le datastore distant pour g\xe9rer la connexion. Cette session est identifi\xe9e \xe0 l'aide d'un ID de session interne, associ\xe9 au ",(0,n.kt)("inlineCode",{parentName:"p"},"localID")," de l'application 4D. Cette session g\xe8re automatiquement l'acc\xe8s aux donn\xe9es, aux s\xe9lections d'entit\xe9s ou aux entit\xe9s."),(0,n.kt)("p",null,"Le ",(0,n.kt)("inlineCode",{parentName:"p"},"localID")," est local \xe0 la machine qui se connecte au datastore distant, ce qui signifie :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Que si d'autres process de la m\xeame application doivent acc\xe9der au m\xeame datastore distant, ils peuvent utiliser le m\xeame ",(0,n.kt)("inlineCode",{parentName:"li"},"localID")," et partager alors la m\xeame session."),(0,n.kt)("li",{parentName:"ul"},"Que si un autre process de la m\xeame application ouvre le m\xeame datastore distant, mais avec un autre ",(0,n.kt)("inlineCode",{parentName:"li"},"localID"),", il cr\xe9era une nouvelle session sur le datastore distant."),(0,n.kt)("li",{parentName:"ul"},"Que si un autre poste se connecte au m\xeame datastore distant avec le m\xeame ",(0,n.kt)("inlineCode",{parentName:"li"},"localID"),", il cr\xe9era une autre session avec un autre cookie.")),(0,n.kt)("p",null,"Ces principes sont illustr\xe9s dans les graphiques suivants :"),(0,n.kt)("p",null,(0,n.kt)("img",{src:s(588).Z,width:"962",height:"719"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pour les sessions ouvertes par des requ\xeates REST, veuillez consulter la page ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/REST/authUsers"}),"Utilisateurs et sessions"),".")),(0,n.kt)("h2",a({},{id:"visionnage-des-sessions"}),"Visionnage des sessions"),(0,n.kt)("p",null,"Les process qui g\xe8rent les sessions d'acc\xe8s aux datastore apparaissent dans la fen\xeatre d'administration de 4D Server :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'name: "REST Handler: \\<process name',">",'"'),(0,n.kt)("li",{parentName:"ul"},"type : type Worker Server HTTP"),(0,n.kt)("li",{parentName:"ul"},"session : le nom de session est le nom d'utilisateur pass\xe9 \xe0 la commande Open datastore.")),(0,n.kt)("p",null,"Dans l'exemple suivant, deux process sont en cours d'ex\xe9cution pour la m\xeame session :"),(0,n.kt)("p",null,(0,n.kt)("img",{src:s(43382).Z,width:"1402",height:"708"})),(0,n.kt)("h2",a({},{id:"verrouillage-et-transactions"}),"Verrouillage et transactions"),(0,n.kt)("p",null,"Les fonctionnalit\xe9s ORDA relatives au verrouillage d'entit\xe9 et aux transactions sont g\xe9r\xe9es au niveau du process dans les datastore distants, tout comme en mode client/serveur ORDA :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si un process verrouille une entit\xe9 \xe0 partir d'un datastore distant, l'entit\xe9 est verrouill\xe9e pour tous les autres process, m\xeame lorsque ces process partagent la m\xeame session (voir ",(0,n.kt)("a",a({parentName:"li"},{href:"/docs/fr/19/ORDA/entities#entity-locking"}),"Verrouillage d'entit\xe9s"),"). Si plusieurs entit\xe9s pointant vers le m\xeame enregistrement ont \xe9t\xe9 verrouill\xe9es dans un process, elles doivent toutes \xeatre d\xe9verrouill\xe9es dans le process pour supprimer le verrou. Si un verrou a \xe9t\xe9 mis sur une entit\xe9, il est supprim\xe9 lorsqu'il n'existe plus de r\xe9f\xe9rence \xe0 cette entit\xe9 en m\xe9moire."),(0,n.kt)("li",{parentName:"ul"},"Les transactions peuvent \xeatre lanc\xe9es, valid\xe9es ou annul\xe9es s\xe9par\xe9ment sur chaque datastore distant \xe0 l'aide des m\xe9thodes ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.startTransaction( )"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.cancelTransaction( )"),", et ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.validateTransaction( )"),". Elles n\u2019ont pas d\u2019incidences sur les autres datastore."),(0,n.kt)("li",{parentName:"ul"},"Les commandes classiques du langage 4D (",(0,n.kt)("inlineCode",{parentName:"li"},"START TRANSACTION"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"VALIDATE TRANSACTION"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"CANCEL TRANSACTION"),") s'appliquent uniquement au datastore principal (renvoy\xe9 par ",(0,n.kt)("inlineCode",{parentName:"li"},"ds"),"). Si une entit\xe9 d'un datastore distant est verrouill\xe9e par une transaction dans un process, les autres process ne peuvent pas la mettre \xe0 jour, m\xeame si ces process partagent la m\xeame session."),(0,n.kt)("li",{parentName:"ul"},"Les verrous sur les entit\xe9s sont supprim\xe9s et les transactions sont annul\xe9es :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"quand le processus est tu\xe9."),(0,n.kt)("li",{parentName:"ul"},"quand la session est ferm\xe9e sur le serveur"),(0,n.kt)("li",{parentName:"ul"},"lorsque la session est arr\xeat\xe9e \xe0 partir de la fen\xeatre d\u2019administration du serveur.")))),(0,n.kt)("h2",a({},{id:"fermeture-des-sessions"}),"Fermeture des sessions"),(0,n.kt)("p",null,"Une session est automatiquement ferm\xe9e par 4D lorsqu'il n'y a pas eu d'activit\xe9 durant son timeout. Le timeout par d\xe9faut est de 60 mn mais cette valeur peut \xeatre param\xe9tr\xe9e \xe0 l'aide du param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"connectionInfo")," de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore"),"."),(0,n.kt)("p",null,"Si une demande est envoy\xe9e au datastore distant apr\xe8s la fermeture de la session, elle est automatiquement recr\xe9\xe9e si possible (licence disponible, serveur non arr\xeat\xe9, etc.). A noter cependant que le contexte de la session des verrous et des transactions est perdu (voir ci-dessus)."))}c.isMDXComponent=!0},43382:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},588:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"}}]);