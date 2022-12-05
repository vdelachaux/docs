"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,B=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(B,a(a({ref:t},p),{},{components:n})):r.createElement(B,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var i=2;i<s;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"blob",title:"BLOB"},u=void 0,l={unversionedId:"Concepts/blob",id:"version-19/Concepts/blob",title:"BLOB",description:"Un champ, une variable ou une expression de type BLOB (Binary Large OBjects) est une s\xe9rie contigu\xeb d'octets qui peut \xeatre trait\xe9e comme un seul objet ou dont les octets peuvent \xeatre adress\xe9s individuellement. Un BLOB peut \xeatre vide (longueur nulle) ou contenir jusqu'\xe0 2147483647 octets (2 Go).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/dt_blob.md",sourceDirName:"Concepts",slug:"/Concepts/blob",permalink:"/docs/fr/19/Concepts/blob",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/Concepts/dt_blob.md",tags:[],version:"19",frontMatter:{id:"blob",title:"BLOB"},sidebar:"docs",previous:{title:"Types de donn\xe9es",permalink:"/docs/fr/19/Concepts/data-types"},next:{title:"Boolean",permalink:"/docs/fr/19/Concepts/boolean"}},i={},p=[{value:"Passage des param\xe8tres, pointeurs et r\xe9sultats de fonctions",id:"passage-des-param\xe8tres-pointeurs-et-r\xe9sultats-de-fonctions",level:2},{value:"Op\xe9rateur d&#39;assignation",id:"op\xe9rateur-dassignation",level:2},{value:"Adresser le contenu d&#39;un BLOB",id:"adresser-le-contenu-dun-blob",level:2}],c={toc:p};function d(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un champ, une variable ou une expression de type BLOB (Binary Large OBjects) est une s\xe9rie contigu\xeb d'octets qui peut \xeatre trait\xe9e comme un seul objet ou dont les octets peuvent \xeatre adress\xe9s individuellement. Un BLOB peut \xeatre vide (longueur nulle) ou contenir jusqu'\xe0 2147483647 octets (2 Go)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Par d\xe9faut, la taille maximale d'un blob dans 4D est de 2 Go, mais cette taille peut \xeatre inf\xe9rieure en fonction de votre OS et l'espace m\xe9moire disponible.")),(0,r.kt)("p",null,"Lorsque vous travaillez avec un BLOB, il est stock\xe9 enti\xe8rement en m\xe9moire. Si vous travaillez avec une variable, le BLOB n'existe qu'en m\xe9moire. Si vous travaillez avec un champ de type BLOB, il est charg\xe9 en m\xe9moire \xe0 partir du disque, comme le reste de l'enregistrement auquel il appartient."),(0,r.kt)("p",null,"A l'instar des autres types de champs pouvant contenir une grande quantit\xe9 de donn\xe9es (comme les champs de type Image), les champs de type BLOB ne sont pas dupliqu\xe9s en m\xe9moire lorsque vous modifiez un enregistrement. Par cons\xe9quent, les r\xe9sultats renvoy\xe9s par ",(0,r.kt)("inlineCode",{parentName:"p"},"Ancien")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"Modifie")," ne sont pas significatifs lorsque ces fonctions sont appliqu\xe9es \xe0 des champs de type BLOB."),(0,r.kt)("h2",o({},{id:"passage-des-param\xe8tres-pointeurs-et-r\xe9sultats-de-fonctions"}),"Passage des param\xe8tres, pointeurs et r\xe9sultats de fonctions"),(0,r.kt)("p",null,"Les BLOBs dans 4D peuvent \xeatre pass\xe9s comme param\xe8tres aux commandes 4D ou aux routines des plug-ins qui attendent un param\xe8tre de type BLOB. Les BLOBs peuvent \xe9galement \xeatre pass\xe9s aux m\xe9thodes que vous cr\xe9ez ou \xeatre retourn\xe9s comme r\xe9sultats de fonctions."),(0,r.kt)("p",null,"Pour passer un BLOB \xe0 une de vos m\xe9thodes, vous pouvez aussi d\xe9finir un pointeur vers le BLOB et passer le pointeur comme param\xe8tre."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemples :")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"  // D\xe9clarer une variable de type BLOB\n C_BLOB(touteVarBLOB)\n  // Le BLOB est pass\xe9 comme param\xe8tre \xe0 une commande 4D\n SET BLOB SIZE(touteVarBLOB;1024*1024)\n  // Le BLOB est pass\xe9 comme param\xe8tre \xe0 une routine externe\n $CodeErr:=Faites_Quelque_chose_avec_ce_BLOB(touteVarBLOB)\n  // Le BLOB est pass\xe9 comme param\xe8tre \xe0 une m\xe9thode qui retourne un BLOB\n C_BLOB(recupBlob)\n recupBlob:=Remplir_Blob(touteVarBLOB)\n  // Un pointeur vers le BLOB est pass\xe9 comme param\xe8tre \xe0 une de vos m\xe9thodes\n COMPUTE BLOB(->touteVarBLOB)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note pour les d\xe9veloppeurs de plug ins 4D :")," Un param\xe8tre de type BLOB se d\xe9clare \u201c&O\u201d (la lettre \u201cO\u201d et non le chiffre \u201c0\u201d)."),(0,r.kt)("h2",o({},{id:"op\xe9rateur-dassignation"}),"Op\xe9rateur d'assignation"),(0,r.kt)("p",null,"Vous pouvez assigner la valeur d'un BLOB \xe0 d'autres BLOBs, comme dans l'exemple suivant."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Voici un exemple :")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"  // D\xe9clarer deux variables de type BLOB\n C_BLOB(vBlobA;vBlobB)\n  // Fixer la taille du premier BLOB \xe0 10Ko\n SET BLOB SIZE(vBlobA;10*1024)\n  // Assigner le premier BLOB au second\n vBlobB:=vBlobA\n")),(0,r.kt)("p",null,"En revanche, il n'existe pas d'op\xe9rateur pouvant \xeatre utilis\xe9 avec des BLOB."),(0,r.kt)("h2",o({},{id:"adresser-le-contenu-dun-blob"}),"Adresser le contenu d'un BLOB"),(0,r.kt)("p",null,"Chaque octet d'un BLOB peut \xeatre adress\xe9 individuellement, \xe0 l'aide des accolades {...}. Dans un BLOB, les octets sont num\xe9rot\xe9s de 0 \xe0 N-1, N \xe9tant la taille du BLOB. Voici un exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"  // D\xe9clarer une variable de type BLOB\n C_BLOB(vBlob)\n  // Fixer la taille du BLOB \xe0 256 octets\n SET BLOB SIZE(vBlob;256)\n  // La boucle suivante initialise les 256 octets du BLOB \xe0 z\xe9ro\n Boucle(vOctet;0;Taille BLOB(vBlob)-1)\n    vBlob{vOctet}:=0\n Fin de boucle\n")),(0,r.kt)("p",null,"Comme vous pouvez adresser individuellement tous les octets d'un BLOB, vous pouvez litt\xe9ralement stocker tout ce que vous voulez dans une variable ou un champ de type BLOB."))}d.isMDXComponent=!0}}]);