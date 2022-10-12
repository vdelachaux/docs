"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||s;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"configuration",title:"Configuration du serveur"},i=void 0,u={unversionedId:"REST/configuration",id:"version-19-R6/REST/configuration",title:"Configuration du serveur",description:"\xc0 l'aide de requ\xeates HTTP standard, le serveur 4D REST permet aux applications externes d'acc\xe9der directement aux donn\xe9es de votre application, c'est-\xe0-dire de r\xe9cup\xe9rer des informations sur les dataclass de votre projet, de manipuler des donn\xe9es, de vous connecter \xe0 votre application Web et bien plus encore.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/REST/configuration.md",sourceDirName:"REST",slug:"/REST/configuration",permalink:"/docs/fr/19-R6/REST/configuration",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"configuration",title:"Configuration du serveur"},sidebar:"docs",previous:{title:"Prise en main",permalink:"/docs/fr/19-R6/REST/gettingStarted"},next:{title:"Sessions et utilisateurs",permalink:"/docs/fr/19-R6/REST/authUsers"}},l={},p=[{value:"D\xe9marrage du serveur REST",id:"d\xe9marrage-du-serveur-rest",level:2},{value:"Configuration de l&#39;acc\xe8s REST",id:"configuration-de-lacc\xe8s-rest",level:2},{value:"Utilisation des Param\xe8tres de la Structure",id:"utilisation-des-param\xe8tres-de-la-structure",level:3},{value:"M\xe9thode base On REST Authentication",id:"m\xe9thode-base-on-rest-authentication",level:3},{value:"Exposer les tables et les champs",id:"exposer-les-tables-et-les-champs",level:2},{value:"Exposer des tables",id:"exposer-des-tables",level:3},{value:"Exposer des champs",id:"exposer-des-champs",level:3}],c={toc:p};function d(e){var{components:t}=e,o=s(e,["components"]);return(0,n.kt)("wrapper",a({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\xc0 l'aide de requ\xeates HTTP standard, le serveur 4D REST permet aux applications externes d'acc\xe9der directement aux donn\xe9es de votre application, c'est-\xe0-dire de r\xe9cup\xe9rer des informations sur les dataclass de votre projet, de manipuler des donn\xe9es, de vous connecter \xe0 votre application Web et bien plus encore."),(0,n.kt)("p",null,"Pour commencer \xe0 utiliser les fonctionnalit\xe9s REST, vous devez d\xe9marrer et configurer le serveur 4D REST."),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Sur 4D Server, l'ouverture d'une session REST n\xe9cessite une licence client 4D disponible.",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},"On 4D single-user, you can open up to three REST sessions for testing purposes."),(0,n.kt)("li",{parentName:"ul"},"You need to manage the ",(0,n.kt)("a",a({parentName:"li"},{href:"/docs/fr/19-R6/REST/authUsers"}),"session")," for your requesting application."))),(0,n.kt)("h2",a({},{id:"d\xe9marrage-du-serveur-rest"}),"D\xe9marrage du serveur REST"),(0,n.kt)("p",null,"Pour des raisons de s\xe9curit\xe9, par d\xe9faut, 4D ne r\xe9pond pas aux requ\xeates REST. Si vous souhaitez d\xe9marrer le serveur REST, cochez l'option ",(0,n.kt)("strong",{parentName:"p"},"Exposer en tant que serveur REST")," dans la page ",(0,n.kt)("strong",{parentName:"p"},"Web")," > ",(0,n.kt)("strong",{parentName:"p"},"Web Features")," des param\xe8tres de la structure afin que les requ\xeates REST soient trait\xe9es."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:r(94739).Z,width:"855",height:"381"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Les services REST utilisent le serveur HTTP 4D; vous devez donc vous assurer que le serveur web 4D est lanc\xe9.")),(0,n.kt)("p",null,"Le message d'avertissement \"Attention, v\xe9rifiez les privil\xe8ges d'acc\xe8s\" s'affiche lorsque vous cochez cette option, pour attirer votre attention sur le fait que lorsque les services REST sont activ\xe9s, l'acc\xe8s par d\xe9faut aux objets de base de donn\xe9es est gratuit tant que les acc\xe8s REST n'ont pas \xe9t\xe9 configur\xe9s."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You must restart the 4D application for your changes to take effect.")),(0,n.kt)("h2",a({},{id:"configuration-de-lacc\xe8s-rest"}),"Configuration de l'acc\xe8s REST"),(0,n.kt)("p",null,"Par d\xe9faut, les acc\xe8s REST sont ouverts \xe0 tous les utilisateurs, ce qui n'est \xe9videmment pas recommand\xe9 pour des raisons de s\xe9curit\xe9 et de contr\xf4le de l'utilisation des licences clientes."),(0,n.kt)("p",null,"Vous pouvez configurer les acc\xe8s REST de l'une des mani\xe8res suivantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"en attribuant un groupe d'utilisateurs ",(0,n.kt)("strong",{parentName:"li"},"en lecture/\xe9criture"),' aux services REST dans la page "',(0,n.kt)("strong",{parentName:"li"},"Web")," > ",(0,n.kt)("strong",{parentName:"li"},"Web Features"),'" des param\xe8tres de structure ;'),(0,n.kt)("li",{parentName:"ul"},"saisir d'une m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"li"},"On REST Authentication"),"pour intercepter et g\xe9rer chaque demande REST initiale.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Vous ne pouvez pas utiliser les deux fonctionnalit\xe9s simultan\xe9ment. Une fois qu'une m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),' a \xe9t\xe9 d\xe9finie, 4D lui donne enti\xe8rement le contr\xf4le des requ\xeates REST : tout param\xe8tre effectu\xe9 \xe0 l\'aide du menu "Lecture/Ecriture" de la page de ',(0,n.kt)("strong",{parentName:"p"},"Web")," > ",(0,n.kt)("strong",{parentName:"p"},"Fonctionnalit\xe9s Web")," des param\xe8tres de la structure est ignor\xe9.")),(0,n.kt)("h3",a({},{id:"utilisation-des-param\xe8tres-de-la-structure"}),"Utilisation des Param\xe8tres de la Structure"),(0,n.kt)("p",null,"Le menu ",(0,n.kt)("strong",{parentName:"p"},"Lecture/\xc9criture"),' de la page "',(0,n.kt)("strong",{parentName:"p"},"Web")," > ",(0,n.kt)("strong",{parentName:"p"},"Web Features"),"\" des param\xe8tres de la structure indique un groupe d'utilisateurs 4D autoris\xe9 \xe0 \xe9tablir le lien vers l'application 4D \xe0 l'aide des requ\xeates REST."),(0,n.kt)("p",null,"By default, the menu displays ",(0,n.kt)("inlineCode",{parentName:"p"},"\\&#060;Anyone&#062;"),", which means that REST accesses are open to all users. Une fois que vous avez sp\xe9cifi\xe9 un groupe, seul un compte utilisateur 4D appartenant \xe0 ce groupe peut \xeatre utilis\xe9 pour ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19-R6/REST/authUsers"}),"acc\xe9der \xe0 4D via une requ\xeate REST"),". Si un compte utilis\xe9 n'appartient pas \xe0 ce groupe, 4D renvoie une erreur d'authentification \xe0 l'exp\xe9diteur de la requ\xeate."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pour que ce param\xe8tre prenne effet, la m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," ne doit pas \xeatre d\xe9finie. S'il existe, 4D ignore les param\xe8tres d'acc\xe8s d\xe9finis dans les propri\xe9t\xe9s de la structure.")),(0,n.kt)("h3",a({},{id:"m\xe9thode-base-on-rest-authentication"}),"M\xe9thode base On REST Authentication"),(0,n.kt)("p",null,"La m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," vous permet de contr\xf4ler de mani\xe8re personnalis\xe9e l\u2019ouverture des sessions REST sur 4D. Cette m\xe9thode base est automatiquement appel\xe9e lorsqu'une nouvelle session est ouverte \xe0 l'aide d'une requ\xeate REST. Lorsqu'une ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19-R6/REST/authUsers"}),"requ\xeate d\u2019ouverture de session REST")," est re\xe7ue, les identifiants de connexion sont fournis dans l\u2019en-t\xeate de la requ\xeate. La m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," est appel\xe9e afin de vous permettre d\u2019\xe9valuer ces identifiants. Pour obtenir plus d'informations, veuillez vous reporter \xe0 la ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.fe.html"}),"documentation")," de la m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),". Pour obtenir plus d'informations, veuillez vous reporter \xe0 la ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.fe.html"}),"documentation")," de la m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),"."),(0,n.kt)("h2",a({},{id:"exposer-les-tables-et-les-champs"}),"Exposer les tables et les champs"),(0,n.kt)("p",null,"Une fois les services REST sont activ\xe9s dans l'application 4D, une session REST peut par d\xe9faut acc\xe9der \xe0 toutes les tables et \xe0 tous les champs de la base de donn\xe9es 4D via l'",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19-R6/ORDA/dsmapping#datastore"}),"interface du datastore"),". Ainsi, elle peut utiliser leurs donn\xe9es. Par exemple, si votre base de donn\xe9es contient une table ","[Employee]",", il est possible d'\xe9crire :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n')),(0,n.kt)("p",null,'Cette requ\xeate retournera tous les employ\xe9s dont le champ "salary" est sup\xe9rieur \xe0 10 000.'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'Les tables et/ou champs 4D dont l\'attribut est "invisible" sont \xe9galement expos\xe9s par d\xe9faut dans REST.')),(0,n.kt)("p",null,"Si vous souhaitez personnaliser les objets du datastore accessibles via REST, vous devez d\xe9sactiver l'exposition de chaque table et/ou champ que vous souhaitez masquer. Lorsqu'une requ\xeate REST tente d'acc\xe9der \xe0 une ressource non autoris\xe9e, 4D retourne une erreur."),(0,n.kt)("h3",a({},{id:"exposer-des-tables"}),"Exposer des tables"),(0,n.kt)("p",null,"Par d\xe9faut, toutes les tables sont expos\xe9es dans REST."),(0,n.kt)("p",null,"Pour des raisons de s\xe9curit\xe9, vous pouvez choisir d'exposer uniquement certaines tables du datastore aux appels REST. Par exemple, si vous avez cr\xe9\xe9 une table ","[Users]"," stockant les noms d'utilisateur et les mots de passe, il serait pr\xe9f\xe9rable de ne pas l'exposer."),(0,n.kt)("p",null,"Pour supprimer l'exposition REST d'une table :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Affichez l'Inspecteur de table dans l'Editeur de structure et s\xe9lectionnez la table \xe0 modifier.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Uncheck the ",(0,n.kt)("strong",{parentName:"p"},"Expose as REST resource")," option: ",(0,n.kt)("img",{alt:"alt-text",src:r(81858).Z,width:"279",height:"330"})," Do this for each table whose exposure needs to be modified."))),(0,n.kt)("h3",a({},{id:"exposer-des-champs"}),"Exposer des champs"),(0,n.kt)("p",null,"Par d\xe9faut, touts les champs d'une base 4D sont expos\xe9s dans REST."),(0,n.kt)("p",null,"Vous pouvez choisir d'exposer certains champs de vos tables \xe0 REST. Par exemple, si vous ne souhaitez pas exposer le champ ","[Employees]","Salary."),(0,n.kt)("p",null,"Pour supprimer l'exposition REST d'un champ :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Affichez l'Inspecteur de champ dans l'Editeur de structure et s\xe9lectionnez le champ \xe0 modifier.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"D\xe9cochez la case ",(0,n.kt)("strong",{parentName:"p"},"Exposer en tant que ressource REST")," pour le champ. ",(0,n.kt)("img",{alt:"alt-text",src:r(43385).Z,width:"279",height:"271"})," Repeat this for each field whose exposure needs to be modified."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pour qu'un champ soit accessible via REST, la table parente doit l'\xeatre \xe9galement. Si la table parente n'est pas expos\xe9e, aucun de ses champs ne le sera, quel que soit leur statut.")))}d.isMDXComponent=!0},94739:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Settings-934d69d2618fdc41073c2f25c38ea3a6.png"},43385:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},81858:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"}}]);