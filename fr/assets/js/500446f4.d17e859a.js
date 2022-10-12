"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82520],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(a),k=n,c=m["".concat(o,".").concat(k)]||m[k]||p[k]||l;return a?r.createElement(c,s(s({ref:t},u),{},{components:a})):r.createElement(c,s({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<l;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={id:"architecture",title:"Architecture d'un projet 4D"},i=void 0,o={unversionedId:"Project/architecture",id:"version-18/Project/architecture",title:"Architecture d'un projet 4D",description:"Un projet 4D est constitu\xe9 de plusieurs fichiers et dossiers, stock\xe9s dans un seul dossier parent de la base (dossier package). Par exemple :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Project/architecture.md",sourceDirName:"Project",slug:"/Project/architecture",permalink:"/docs/fr/18/Project/architecture",draft:!1,tags:[],version:"18",frontMatter:{id:"architecture",title:"Architecture d'un projet 4D"},sidebar:"docs",previous:{title:"Cr\xe9er un projet 4D",permalink:"/docs/fr/18/Project/creating"},next:{title:"D\xe9velopper un projet",permalink:"/docs/fr/18/Project/developing"}},d={},u=[{value:"Dossier Project",id:"dossier-project",level:2},{value:"Fichier <em>nomBase</em>.4DProject",id:"fichier-nombase4dproject",level:3},{value:"Dossier Sources",id:"dossier-sources",level:3},{value:"Dossier DatabaseMethods",id:"dossier-databasemethods",level:4},{value:"Dossier Methods",id:"dossier-methods",level:4},{value:"Dossier Classes",id:"dossier-classes",level:4},{value:"Dossier Forms",id:"dossier-forms",level:4},{value:"Dossier TableForms",id:"dossier-tableforms",level:4},{value:"Dossier Triggers",id:"dossier-triggers",level:4},{value:"Dossier Trash",id:"dossier-trash",level:3},{value:"Dossier DerivedData",id:"dossier-deriveddata",level:3},{value:"Dossier Resources",id:"dossier-resources",level:2},{value:"Dossier Data",id:"dossier-data",level:2},{value:"Dossier Settings",id:"dossier-settings",level:3},{value:"Dossier Logs",id:"dossier-logs",level:3},{value:"Dossier Settings",id:"dossier-settings-1",level:2},{value:"Dossier userPreferences.<em>userName</em>",id:"dossier-userpreferencesusername",level:2},{value:"Dossier Components",id:"dossier-components",level:2},{value:"Dossier Plugins",id:"dossier-plugins",level:2}],p={toc:u};function m(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)("wrapper",n({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un projet 4D est constitu\xe9 de plusieurs fichiers et dossiers, stock\xe9s dans un seul dossier parent de la base (dossier package). Par exemple :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MonProjet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Composants"),(0,r.kt)("li",{parentName:"ul"},"Data",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Logs"),(0,r.kt)("li",{parentName:"ul"},"Settings"))),(0,r.kt)("li",{parentName:"ul"},"Documentation"),(0,r.kt)("li",{parentName:"ul"},"Plugins"),(0,r.kt)("li",{parentName:"ul"},"Project",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DerivedData"),(0,r.kt)("li",{parentName:"ul"},"Sources"),(0,r.kt)("li",{parentName:"ul"},"Trash"))),(0,r.kt)("li",{parentName:"ul"},"Ressources"),(0,r.kt)("li",{parentName:"ul"},"Settings"),(0,r.kt)("li",{parentName:"ul"},"userPreferences.username"),(0,r.kt)("li",{parentName:"ul"},"WebFolder")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Si votre projet a \xe9t\xe9 converti depuis une base binaire, des dossiers suppl\xe9mentaires peuvent \xeatre pr\xe9sents. Voir "Conversion de bases en projets" sur ',(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),"doc.4d.com"),".")),(0,r.kt)("h2",n({},{id:"dossier-project"}),"Dossier Project"),(0,r.kt)("p",null,"La hi\xe9rarchie du dossier Project se pr\xe9sente g\xe9n\xe9ralement comme suit :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fichier ",(0,r.kt)("em",{parentName:"li"},"nomBase"),".4DProject"),(0,r.kt)("li",{parentName:"ul"},"Sources",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Classes"),(0,r.kt)("li",{parentName:"ul"},"DatabaseMethods"),(0,r.kt)("li",{parentName:"ul"},"Methods"),(0,r.kt)("li",{parentName:"ul"},"Forms"),(0,r.kt)("li",{parentName:"ul"},"TableForms"),(0,r.kt)("li",{parentName:"ul"},"Triggers"))),(0,r.kt)("li",{parentName:"ul"},"DerivedData"),(0,r.kt)("li",{parentName:"ul"},"Trash (le cas \xe9ch\xe9ant)")),(0,r.kt)("h3",n({},{id:"fichier-nombase4dproject"}),"Fichier ",(0,r.kt)("em",{parentName:"h3"},"nomBase"),".4DProject"),(0,r.kt)("p",null,"Le fichier de d\xe9veloppement de projet, utilis\xe9 pour d\xe9signer et lancer le projet. Ce fichier peut \xeatre ouvert par :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4D Developer"),(0,r.kt)("li",{parentName:"ul"},"4D Server (lecture seule, voir ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/18/Project/developing"}),"D\xe9velopper un projet"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note :")," Dans les projets 4D, le d\xe9veloppement est r\xe9alis\xe9 avec 4D Developer et le d\xe9veloppement multi-utilisateurs est g\xe9r\xe9 par des outils de contr\xf4le de version. 4D Server peut ouvrir des fichiers .4DProject \xe0 des fins de test."),(0,r.kt)("h3",n({},{id:"dossier-sources"}),"Dossier Sources"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenu"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Le format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"catalog.4DCatalog"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"D\xe9finit des tables et des champs"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"folders.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"D\xe9finitions des dossiers de l'Explorateur"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"menus.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"D\xe9finit les menus"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"settings.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Propri\xe9t\xe9s de la base ",(0,r.kt)("em",{parentName:"td"},"Structure"),". Elles ne sont pas prises en compte si les ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",n({parentName:"em"},{href:"#settings-folder-1"}),"param\xe8tres utilisateur"))," ou les ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",n({parentName:"em"},{href:"#settings-folder"}),"param\xe8tres utilisateur des donn\xe9es"))," sont d\xe9finis. ",(0,r.kt)("strong",{parentName:"td"},"Attention")," : dans les applications compil\xe9es, les param\xe8tres de structure sont stock\xe9s dans le fichier .4dz (lecture seule). Pour le d\xe9ploiement, il est n\xe9cessaire d'utiliser les ",(0,r.kt)("em",{parentName:"td"},"param\xe8tres utilisateur")," ou les ",(0,r.kt)("em",{parentName:"td"},"param\xe8tres utilisateur pour les donn\xe9es")," afin de d\xe9finir des param\xe8tres personnalis\xe9s."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"tips.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"D\xe9finit les messages d'aide"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"lists.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Listes d\xe9finies"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"filters.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Filtres d\xe9finis"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets.css"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Feuilles de style CSS"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets_mac.css"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Feuilles de style css sur Mac (\xe0 partir d'une base binaire convertie)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets_windows.css"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Feuilles de style css sur Windows (\xe0 partir d'une base binaire convertie)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS")))),(0,r.kt)("h4",n({},{id:"dossier-databasemethods"}),"Dossier DatabaseMethods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenu"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Le format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"databaseMethodName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9thodes base d\xe9finies dans la base. Un fichier par m\xe9thode base"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"dossier-methods"}),"Dossier Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenu"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Le format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"methodName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9thodes projet d\xe9finies dans la base. Un fichier par m\xe9thode"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"dossier-classes"}),"Dossier Classes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenu"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Le format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"className"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9thode de d\xe9finition de classe utilisateur, permettant d'instancier des objets sp\xe9cifiques. Un fichier par classe, le nom du fichier est le nom de la classe"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"dossier-forms"}),"Dossier Forms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenu"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Le format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Description du formulaire projet"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9thode formulaire projet"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,r.kt)("em",{parentName:"td"},"pictureName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Image statique du formulaire projet"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,r.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9thodes objet. Un fichier par m\xe9thode objet"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"dossier-tableforms"}),"Dossier TableForms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenu"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Le format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Description du formulaire d'entr\xe9e de la table (n \xe9tant le num\xe9ro de table)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,r.kt)("em",{parentName:"td"},"pictureName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Images statiques du formulaire d'entr\xe9e de la table"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9thode du formulaire d'entr\xe9e de la table"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,r.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9thodes objet du formulaire d'entr\xe9e. Un fichier par m\xe9thode objet"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Description du formulaire de sortie de la table (n \xe9tant le num\xe9ro de table)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,r.kt)("em",{parentName:"td"},"pictureName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Images statiques du formulaire de sortie de la table"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9thode du formulaire de sortie de la table"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,r.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9thodes objet du formulaire de sortie. Un fichier par m\xe9thode objet"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"dossier-triggers"}),"Dossier Triggers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenu"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Le format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"table_",(0,r.kt)("em",{parentName:"td"},"n"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9thodes trigger d\xe9finies dans la base. Un fichier de trigger par table (n \xe9tant le num\xe9ro de table)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The .4dm file extension is a text-based file format, containing the code of a 4D method. Il est compatible avec les outils de contr\xf4le de version."),(0,r.kt)("h3",n({},{id:"dossier-trash"}),"Dossier Trash"),(0,r.kt)("p",null,"Le dossier Trash contient des m\xe9thodes et des formulaires qui ont \xe9t\xe9 supprim\xe9s du projet (le cas \xe9ch\xe9ant). Il peut contenir les dossiers suivants :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Methods"),(0,r.kt)("li",{parentName:"ul"},"Forms"),(0,r.kt)("li",{parentName:"ul"},"TableForms")),(0,r.kt)("p",null,'Dans ces dossiers, les noms des \xe9l\xe9ments supprim\xe9s sont entre parenth\xe8ses, par exemple. "(myMethod).4dm". L\'organisation des dossiers est identique \xe0 celle du dossier ',(0,r.kt)("a",n({parentName:"p"},{href:"#sources"}),"Sources"),"."),(0,r.kt)("h3",n({},{id:"dossier-deriveddata"}),"Dossier DerivedData"),(0,r.kt)("p",null,"Le dossier DerivedData contient des donn\xe9es en cache utilis\xe9es en interne par 4D pour optimiser le traitement. Il est automatiquement cr\xe9\xe9 ou recr\xe9\xe9 si n\xe9cessaire. Vous pouvez ignorer ce dossier."),(0,r.kt)("h2",n({},{id:"dossier-resources"}),"Dossier Resources"),(0,r.kt)("p",null,"Le dossier Resources contient tous les fichiers et dossiers de ressources personnalis\xe9s de la base de donn\xe9es. Dans ce dossier, vous pouvez placer tous les fichiers n\xe9cessaires \xe0 la traduction ou \xe0 la personnalisation de l'interface de l'application (fichiers image, fichiers texte, fichiers XLIFF, etc.). 4D utilise des m\xe9canismes automatiques pour manipuler le contenu de ce dossier, notamment pour le traitement des fichiers XLIFF et des images statiques. Pour l'utilisation en mode distant, le dossier Resources vous permet de partager des fichiers entre le serveur et tous les ordinateurs clients. Voir le ",(0,r.kt)("em",{parentName:"p"},"Manuel 4D Server - R\xe9f\xe9rence"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenu"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Le format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"item")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Fichiers et dossiers de ressources de la base"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"vari\xe9s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Images/Library/",(0,r.kt)("em",{parentName:"td"},"item")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Images de la biblioth\xe8que d'images sous forme de fichiers s\xe9par\xe9s(*). Les noms de ces \xe9l\xe9ments deviennent des noms de fichiers. Si un \xe9l\xe9ment dupliqu\xe9 existe, un num\xe9ro est ajout\xe9 au nom."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")))),(0,r.kt)("p",null,"(*) uniquement si le projet a \xe9t\xe9 export\xe9 depuis une base binaire .4db."),(0,r.kt)("h2",n({},{id:"dossier-data"}),"Dossier Data"),(0,r.kt)("p",null,"Le dossier Data contient le fichier de donn\xe9es ainsi que tous les fichiers et dossiers relatifs aux donn\xe9es."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenu"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Le format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"data.4dd(*)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Fichier de donn\xe9es contenant les donn\xe9es saisies dans les enregistrements et toutes les donn\xe9es appartenant aux enregistrements. Lorsque vous ouvrez un projet 4D, l'application ouvre par d\xe9faut le fichier de donn\xe9es courant. Si vous modifiez le nom ou l'emplacement de ce fichier, la bo\xeete de dialogue ",(0,r.kt)("em",{parentName:"td"},"Ouvrir un fichier de donn\xe9es")," appara\xeet alors pour vous permettre de s\xe9lectionner le fichier de donn\xe9es \xe0 utiliser ou d'en cr\xe9er un nouveau"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"binary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"data.journal"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Cr\xe9\xe9 uniquement lorsque la base de donn\xe9es utilise un fichier journal. Le fichier journal est utilis\xe9 pour assurer la s\xe9curit\xe9 des donn\xe9es entre les sauvegardes. Toutes les op\xe9rations effectu\xe9es sur les donn\xe9es sont enregistr\xe9es s\xe9quentiellement dans ce fichier. Par cons\xe9quent, chaque op\xe9ration sur les donn\xe9es entra\xeene deux actions simultan\xe9es : la premi\xe8re sur les donn\xe9es (l'instruction est ex\xe9cut\xe9e normalement) et la seconde dans le fichier journal (une description de l'op\xe9ration est enregistr\xe9e). Le fichier journal est construit ind\xe9pendamment, sans perturber ni ralentir le travail de l'utilisateur. Une base de donn\xe9es ne peut fonctionner qu'avec un seul fichier journal \xe0 la fois. Le fichier journal enregistre des op\xe9rations telles que des ajouts, des modifications ou des suppressions d'enregistrements, des transactions, etc. Il est g\xe9n\xe9r\xe9 par d\xe9faut lors de la cr\xe9ation d'une base de donn\xe9es."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"binary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"data.match"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"(interne) UUID correspondant au num\xe9ro de la table"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")))),(0,r.kt)("p",null,"(*) Lorsque le projet est cr\xe9\xe9 depuis une base binaire .4b, le fichier de donn\xe9es demeure inchang\xe9. Ainsi, il peut \xeatre nomm\xe9 diff\xe9remment et plac\xe9 dans un autre emplacement."),(0,r.kt)("h3",n({},{id:"dossier-settings"}),"Dossier Settings"),(0,r.kt)("p",null,"Ce dossier contient des ",(0,r.kt)("strong",{parentName:"p"},"fichiers de propri\xe9t\xe9s utilisateur pour fichier de donn\xe9es")," utilis\xe9s pour l'administration de la base de donn\xe9es."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ces param\xe8tres ont la priorit\xe9 sur les ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",n({parentName:"strong"},{href:"#settings-folder-1"}),"fichiers de propri\xe9t\xe9s utilisateur"))," et les fichiers de ",(0,r.kt)("strong",{parentName:"p"},"propri\xe9t\xe9s structure"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenu"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Le format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Backup.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Param\xe8tres de sauvegarde de la base de donn\xe9es, utilis\xe9s pour d\xe9finir les ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/fr/18/Backup/settings"}),"options de sauvegarde"),") lorsque la base est lanc\xe9e avec ce fichier de donn\xe9es. Les cl\xe9s concernant la configuration de la sauvegarde sont d\xe9crites dans le manuel ",(0,r.kt)("em",{parentName:"td"},"Sauvegarde des cl\xe9s XML 4D"),"."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"settings.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Propri\xe9t\xe9s personnalis\xe9es de la base pour ce fichier de donn\xe9es"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"directory.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Description des groupes et utilisateurs 4D et leurs droits d'acc\xe8s lorsque la base est lanc\xe9e avec un fichier de donn\xe9es."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")))),(0,r.kt)("h3",n({},{id:"dossier-logs"}),"Dossier Logs"),(0,r.kt)("p",null,"Le dossier Logs contient tous les fichiers journaux utilis\xe9s par le projet. Les fichiers journaux comprennent notamment :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"conversion de base de donn\xe9es,"),(0,r.kt)("li",{parentName:"ul"},"requ\xeates de serveur Web,"),(0,r.kt)("li",{parentName:"ul"},"journal des activit\xe9s de sauvegarde/restitution (",(0,r.kt)("em",{parentName:"li"},"Journal de sauvegarde","[","xxx].txt"),", voir ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/18/Backup/backup#backup-journal"}),"Journal de sauvegarde"),")"),(0,r.kt)("li",{parentName:"ul"},"d\xe9bogage de commandes,"),(0,r.kt)("li",{parentName:"ul"},"Requ\xeates 4D Server (g\xe9n\xe9r\xe9es sur les postes clients et sur le serveur).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Un dossier Logs suppl\xe9mentaire est disponible dans le dossier des pr\xe9f\xe9rences utilisateur du syst\xe8me (dossier 4D actif, voir la commande ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html"}),"Lire dossier 4D"),") pour les fichiers journaux de maintenance et dans les cas o\xf9 le dossier de donn\xe9es est en lecture seule.")),(0,r.kt)("h2",n({},{id:"dossier-settings-1"}),"Dossier Settings"),(0,r.kt)("p",null,"Ce dossier contient des ",(0,r.kt)("strong",{parentName:"p"},"fichiers de propri\xe9t\xe9s utilisateur")," utilis\xe9s pour l'administration de la base de donn\xe9es. Les fichiers sont ajout\xe9s au dossier si n\xe9cessaire."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si un fichier de propri\xe9t\xe9s de donn\xe9es existe dans un dossier Settings du ",(0,r.kt)("a",n({parentName:"p"},{href:"#settings-folder"}),"dossier Data"),", il est prioritaire sur le fichier de propri\xe9t\xe9s utilisateur.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenu"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Le format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"directory.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Description des groupes et utilisateurs 4D pour la base de donn\xe9es, ainsi que leurs droits d'acc\xe8s"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"BuildApp.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Fichier de param\xe8tres de g\xe9n\xe9ration, cr\xe9\xe9 automatiquement lors de l'utilisation de la bo\xeete de dialogue du g\xe9n\xe9rateur d'applications ou de la commande ",(0,r.kt)("inlineCode",{parentName:"td"},"BUILD APPLICATION")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Backup.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Param\xe8tres de sauvegarde de la base de donn\xe9es, utilis\xe9s pour d\xe9finir les ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/fr/18/Backup/settings"}),"options de sauvegarde"),") \xe0 chaque lancement de sauvegarde. Ce fichier peut \xe9galement \xeatre utilis\xe9 pour lire ou d\xe9finir des options suppl\xe9mentaires, telles que la quantit\xe9 d'informations stock\xe9es dans le ",(0,r.kt)("em",{parentName:"td"},"journal de sauvegarde"),". Les cl\xe9s concernant la configuration de la sauvegarde sont d\xe9crites dans le manuel ",(0,r.kt)("em",{parentName:"td"},"Sauvegarde des cl\xe9s XML 4D"),"."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"BuildApp.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Fichier de param\xe8tres de g\xe9n\xe9ration, cr\xe9\xe9 automatiquement lors de l'utilisation de la bo\xeete de dialogue du g\xe9n\xe9rateur d'applications ou de la commande ",(0,r.kt)("inlineCode",{parentName:"td"},"BUILD APPLICATION")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")))),(0,r.kt)("h2",n({},{id:"dossier-userpreferencesusername"}),"Dossier userPreferences.",(0,r.kt)("em",{parentName:"h2"},"userName")),(0,r.kt)("p",null,"Ce dossier contient des fichiers qui m\xe9morisent les configurations utilisateur, par exemple la position des points de rupture ou de la fen\xeatre. Vous pouvez simplement ignorer ce dossier. Il contient par exemple :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenu"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Le format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"methodPreferences.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Pr\xe9f\xe9rences de l'\xe9diteur de m\xe9thodes de l'utilisateur courant"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"methodWindowPositions.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Position de la fen\xeatre de l'utilisateur courant pour les m\xe9thodes"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"formWindowPositions.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Position de la fen\xeatre de l'utilisateur courant pour les formulaires"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"workspace.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Liste de fen\xeatres ouvertes : sous macOS, ordre des fen\xeatres \xe0 onglets"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"debuggerCatches.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Appels vers commandes"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"recentTables.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Liste ordon\xe9e de tables"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"preferences.4DPreferences"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Current data path and main window positions"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")))),(0,r.kt)("h2",n({},{id:"dossier-components"}),"Dossier Components"),(0,r.kt)("p",null,"Ce dossier contient les composants disponibles dans la base projet uniquement. Il doit \xeatre stock\xe9 au m\xeame niveau que le dossier Project."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A project database can be used itself as a component:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"for development: put an alias of the .4dproject file in the Components folder of the host database."),(0,r.kt)("li",{parentName:"ul"},"\xe0 des fins de d\xe9ploiement : cr\xe9er le composant (voir ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/18/Project/building"}),"Cr\xe9er un package projet"),") et ins\xe9rer le fichier .4dz r\xe9sultant dans un dossier .4dbase dans le dossier Components de la base h\xf4te."))),(0,r.kt)("h2",n({},{id:"dossier-plugins"}),"Dossier Plugins"),(0,r.kt)("p",null,"Ce dossier contient les plug-ins disponibles dans la base projet uniquement. Il doit \xeatre stock\xe9 au m\xeame niveau que le dossier Project."))}m.isMDXComponent=!0}}]);