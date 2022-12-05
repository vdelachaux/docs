"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=s,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const a={id:"authUsers",title:"Sessions et utilisateurs"},i=void 0,u={unversionedId:"REST/authUsers",id:"version-18/REST/authUsers",title:"Sessions et utilisateurs",description:"Authentification des utilisateurs",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/fr/18/REST/authUsers",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/REST/authUsers.md",tags:[],version:"18",frontMatter:{id:"authUsers",title:"Sessions et utilisateurs"},sidebar:"docs",previous:{title:"Configuration du serveur",permalink:"/docs/fr/18/REST/configuration"},next:{title:"Obtenir des informations du serveur",permalink:"/docs/fr/18/REST/genInfo"}},l={},d=[{value:"Authentification des utilisateurs",id:"authentification-des-utilisateurs",level:2},{value:"Cookie de session",id:"cookie-de-session",level:2},{value:"Exemple",id:"exemple",level:3}],c={toc:d};function p(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",s({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",s({},{id:"authentification-des-utilisateurs"}),"Authentification des utilisateurs"),(0,r.kt)("p",null,"La premi\xe8re \xe9tape \xe0 suivre pour ouvrir une session REST sur le serveur 4D, consiste \xe0 authentifier l'utilisateur qui envoie la requ\xeate."),(0,r.kt)("p",null,"Connectez un utilisateur \xe0 votre application en passant le nom et le mot de passe de l'utilisateur dans ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/fr/18/REST/directory#directorylogin"}),(0,r.kt)("inlineCode",{parentName:"a"},"$directory/login")),"."),(0,r.kt)("p",null,"Une fois qu'un utilisateur est connect\xe9, une session est ouverte. Voir ci-dessous pour savoir comment traiter le cookie de session dans les requ\xeates ult\xe9rieures du client, si n\xe9cessaire."),(0,r.kt)("p",null,"La session est automatiquement ferm\xe9e lorsque le timeout est \xe9coul\xe9."),(0,r.kt)("h2",s({},{id:"cookie-de-session"}),"Cookie de session"),(0,r.kt)("p",null,"Chaque requ\xeate REST est g\xe9r\xe9e via une session sp\xe9cifique sur le serveur 4D."),(0,r.kt)("p",null,"Lorsqu'une premi\xe8re requ\xeate REST valide est re\xe7ue, le serveur cr\xe9e la session et envoie un cookie de session nomm\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"WASID4D")," dans l'",(0,r.kt)("strong",{parentName:"p"},'en-t\xeate de r\xe9ponse "Set-Cookie"'),", contenant l'UUID de session, par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3\n")),(0,r.kt)("p",null,"Assurez-vous, dans les requ\xeates REST, que ce cookie est inclus dans ",(0,r.kt)("strong",{parentName:"p"},'l\'en-t\xeate "Cookie"')," afin de r\xe9utiliser la m\xeame session. Sinon, une nouvelle session sera ouverte et une autre licence utilis\xe9e."),(0,r.kt)("h3",s({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,"La gestion des cookies de session d\xe9pend de votre client HTTP. Cet exemple montre comment extraire et renvoyer le cookie de session dans le contexte des requ\xeates trait\xe9es via la commande 4D ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP Request"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-4d"}),'// Cr\xe9er des en-t\xeates\nARRAY TEXT(headerNames;0)\nARRAY TEXT(headerValues;0)\n\nAPPEND TO ARRAY(headerNames;"username-4D")\nAPPEND TO ARRAY(headerNames;"session-4D-length")\nAPPEND TO ARRAY(headerNames;"hashed-password-4D")\n\nAPPEND TO ARRAY(headerValues;"kind user")\nAPPEND TO ARRAY(headerValues;"60")\nAPPEND TO ARRAY(headerValues;Generate digest("test";4D digest))\n\nC_OBJECT($response)\n$response:=New object\n\n//Cette requ\xeate ouvre une session \xe0 l\'utilisateur "kind user"\n$result:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/$directory/login";"";\\  \n    $response;headerNames;headerValues;*)\n\n\n//Cr\xe9er de nouveaux tableaux pour les en-t\xeates uniquement avec le cookie WASID4D\nbuildHeader(->headerNames;->headerValues)\n\n//Cette autre requ\xeate n\'ouvrira pas une nouvelle session\n$result:=HTTP Request(HTTP GET method;"127.0.0.1:8044/rest/$catalog";"";\\  \n    $response;headerNames;headerValues;*)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-4d"}),'// m\xe9thode projet buildHeader  \n\nC_POINTER($pointerNames;$1;$pointerValues;$2)\nARRAY TEXT($headerNames;0)\nARRAY TEXT($headerValues;0)\n\nCOPY ARRAY($1->;$headerNames)\nCOPY ARRAY($2->;$headerValues)\n\n$indexCookie:=Find in array($headerValues;"WASID4D@")\n$cookie:=$headerValues{$indexCookie}\n$start:=Position("WASID4D";$cookie)\n$end:=Position(";";$cookie)\n$uuid:= Substring($cookie;$start;$end-$start)\n\nARRAY TEXT($headerNames;1)\nARRAY TEXT($headerValues;1)\n\n$headerNames{1}:="Cookie"\n$headerValues{1}:=$uuid\n\nCOPY ARRAY($headerNames;$1->)\nCOPY ARRAY($headerValues;$2->)\n')))}p.isMDXComponent=!0}}]);