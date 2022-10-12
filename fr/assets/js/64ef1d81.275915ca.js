"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),A=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=A(e.components);return o.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=A(r),f=n,d=u["".concat(a,".").concat(f)]||u[f]||c[f]||i;return r?o.createElement(d,s(s({ref:t},l),{},{components:r})):o.createElement(d,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var A=2;A<i;A++)s[A]=r[A];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>A,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});r(67294);var o=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={id:"groupBox",title:"Zone de groupe"},p=void 0,a={unversionedId:"FormObjects/groupBox",id:"version-18/FormObjects/groupBox",title:"Zone de groupe",description:"Une zone de groupe est un objet statique qui vous permet de rassembler visuellement plusieurs objets de formulaire :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/FormObjects/groupBox.md",sourceDirName:"FormObjects",slug:"/FormObjects/groupBox",permalink:"/docs/fr/18/FormObjects/groupBox",draft:!1,tags:[],version:"18",frontMatter:{id:"groupBox",title:"Zone de groupe"},sidebar:"docs",previous:{title:"Liste d\xe9roulante",permalink:"/docs/fr/18/FormObjects/dropdownListOverview"},next:{title:"Zone de saisie",permalink:"/docs/fr/18/FormObjects/inputOverview"}},A={},l=[{value:"Exemple JSON",id:"exemple-json",level:4},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:4}],c={toc:l};function u(e){var{components:t}=e,s=i(e,["components"]);return(0,o.kt)("wrapper",n({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Une zone de groupe est un objet statique qui vous permet de rassembler visuellement plusieurs objets de formulaire :"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(52963).Z,width:"516",height:"120"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Le nom d\'une zone de groupe est un texte statique ; vous pouvez utiliser une r\xe9f\xe9rence "localisable", comme pour toute \xe9tiquette 4D (voir ',"[Utiliser des r\xe9f\xe9rences dans les textes statiques]","(",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc."}),"https://doc.")," 4d. com/4Dv17/4D/17.3/Utiliser-des-references-dans-les-textes-statiques. 300-4639972. fr. html) et la section ",(0,o.kt)("em",{parentName:"p"},"Architecture XLIFF")," dans le manuel D\xe9veloppement de 4D.")),(0,o.kt)("h4",n({},{id:"exemple-json"}),"Exemple JSON"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{}),' "myGroup": {\n  "type": "groupBox",\n  "title": "Employee Info"\n  "left": 60,\n  "top": 160,\n  "width": 100,\n  "height": 20\n  }\n')),(0,o.kt)("h4",n({},{id:"propri\xe9t\xe9s-prises-en-charge"}),"Propri\xe9t\xe9s prises en charge"),(0,o.kt)("p",null,(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bas")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesObject#css-class"}),"CSS Class")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesText#font"}),"Police")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesText#font-color"}),"Couleur de la police")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesText#font-size"}),"Taille")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Hauteur")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesText#horizontal-alignment"}),"Alignement horizontal")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Dim. horizontal")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesText#italic"}),"Italique")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Gauche")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesObject#object-name"}),"Nom")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Droite")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesObject#title"}),"Titre")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Haut")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesText#underline"}),"Soulign\xe9")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Dim. vertical")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesDisplay#visibility"}),"Visibilit\xe9")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Largeur")))}u.isMDXComponent=!0},52963:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);