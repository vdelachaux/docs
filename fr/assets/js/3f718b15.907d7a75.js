"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84352],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),i=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(r),c=n,f=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var i=2;i<l;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={id:"REST_requests",title:"A propos des requ\xeates REST"},u=void 0,o={unversionedId:"REST/REST_requests",id:"version-19-R6/REST/REST_requests",title:"A propos des requ\xeates REST",description:"Les structures suivantes sont prises en charge par les requ\xeates REST :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/REST/REST_requests.md",sourceDirName:"REST",slug:"/REST/REST_requests",permalink:"/docs/fr/19-R6/REST/REST_requests",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"REST_requests",title:"A propos des requ\xeates REST"},sidebar:"docs",previous:{title:"Appeler des fonctions de classe ORDA",permalink:"/docs/fr/19-R6/REST/classFunctions"},next:{title:"$catalog",permalink:"/docs/fr/19-R6/REST/catalog"}},i={},p=[{value:"Statut et r\xe9ponse REST",id:"statut-et-r\xe9ponse-rest",level:2},{value:"Statut de la requ\xeate",id:"statut-de-la-requ\xeate",level:3},{value:"R\xe9ponse",id:"r\xe9ponse",level:3}],d={toc:p};function m(e){var{components:t}=e,r=l(e,["components"]);return(0,a.kt)("wrapper",n({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les structures suivantes sont prises en charge par les requ\xeates REST :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"URI"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Resource (Input)"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"/? ou &{filter} (Output)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"http://{servername}:{port}/rest/"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html"}),"{dataClass}")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/fr/19-R6/REST/filter"}),"$filter"),", ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/fr/19-R6/REST/attributes"}),"$attributes"),", ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/fr/19-R6/REST/skip"}),"$skip"),", ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/fr/19-R6/REST/method"}),"$method=..."),"...")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html"}),"{dataClass}"),"/",(0,a.kt)("a",n({parentName:"td"},{href:"entityset.html#entitysetentitysetid"}),"$entityset/{entitySetID}")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/fr/19-R6/REST/method"}),"$method=..."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html#dataclasskey"}),"{dataClass}({cl\xe9})")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/fr/19-R6/REST/attributes"}),"$attributes"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"%7BdataClass%7D.html#dataclassattributevalue"}),"{dataClass}:{attribut}(valeur)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))),(0,a.kt)("p",null,"Si toutes les requ\xeates REST doivent contenir les param\xe8tres URI et Resource, les filtres d'Output (qui filtrent les donn\xe9es retourn\xe9es) sont facultatifs."),(0,a.kt)("p",null,"Comme pour tous les URI, le premier param\xe8tre est d\xe9limit\xe9 par un \xab?\xbb et tous les param\xe8tres suivants par un \xab&\xbb. Par exemple :"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Vous pouvez placer toutes les valeurs entre guillemets en cas de doute. Par exemple, dans notre exemple ci-dessus, nous aurions pu saisir la valeur du nom de famille entre guillemets simples \"lastName!='Jones'\".")),(0,a.kt)("p",null,"Les param\xe8tres vous permettent de manipuler des donn\xe9es dans des dataclass de votre projet 4D. Outre la r\xe9cup\xe9ration de donn\xe9es \xe0 l'aide des m\xe9thodes HTTP ",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),", vous pouvez \xe9galement ajouter, mettre \xe0 jour et supprimer des entit\xe9s d'une dataclass \xe0 l'aide des m\xe9thodes HTTP ",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),"."),(0,a.kt)("p",null,"Si vous souhaitez que les donn\xe9es soient retourn\xe9es dans un tableau au lieu d'un JSON, utilisez le param\xe8tre ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/REST/asArray"}),(0,a.kt)("inlineCode",{parentName:"a"},"$asArray")),"."),(0,a.kt)("h2",n({},{id:"statut-et-r\xe9ponse-rest"}),"Statut et r\xe9ponse REST"),(0,a.kt)("p",null,"\xc0 chaque requ\xeate REST, le serveur retourne l'\xe9tat et une r\xe9ponse (avec ou sans erreur)."),(0,a.kt)("h3",n({},{id:"statut-de-la-requ\xeate"}),"Statut de la requ\xeate"),(0,a.kt)("p",null,"Avec chaque requ\xeate REST, vous obtenez le statut et la r\xe9ponse. Voici quelques exemples de statuts :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Statut"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Requ\xeate non trait\xe9e (le serveur n'est peut-\xeatre pas \xe9t\xe9 lanc\xe9).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"200 OK"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Requ\xeate trait\xe9e sans erreur.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"401 Unauthorized"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Erreur d'autorisation (v\xe9rifiez les autorisations de l'utilisateur).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"402 No session"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Nombre maximal de sessions ayant \xe9t\xe9 atteint.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"404 Not Found"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"La data n'est pas accessible via REST ou bien l'ensemble d'entit\xe9s n'existe pas.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"500 Internal Server Error"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Erreur lors du traitement de la requ\xeate REST.")))),(0,a.kt)("h3",n({},{id:"r\xe9ponse"}),"R\xe9ponse"),(0,a.kt)("p",null,"La r\xe9ponse (au format JSON) varie en fonction de la requ\xeate."),(0,a.kt)("p",null,"Si une erreur survient, elle sera envoy\xe9e avec la r\xe9ponse du serveur ou bien ce sera la r\xe9ponse du serveur."))}m.isMDXComponent=!0}}]);