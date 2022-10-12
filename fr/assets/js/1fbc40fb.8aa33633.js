"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"upload",title:"$upload"},l=void 0,u={unversionedId:"REST/upload",id:"version-18/REST/upload",title:"$upload",description:"Retourne un ID du fichier t\xe9l\xe9charg\xe9 sur le serveur",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/fr/18/REST/upload",draft:!1,tags:[],version:"18",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/fr/18/REST/info"},next:{title:"{dataClass}",permalink:"/docs/fr/18/REST/{dataClass}"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Exemple de t\xe9l\xe9chargement d&#39;image",id:"exemple-de-t\xe9l\xe9chargement-dimage",level:2}],s={toc:c};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Retourne un ID du fichier t\xe9l\xe9charg\xe9 sur le serveur"),(0,n.kt)("h2",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,"Publiez cette requ\xeate lorsque vous vous souhaitez t\xe9l\xe9charger un fichier sur le serveur. S'il s'agit d'une image, passez ",(0,n.kt)("inlineCode",{parentName:"p"},"$rawPict=true"),". Pour tous les autres fichiers, passez ",(0,n.kt)("inlineCode",{parentName:"p"},"$binary=true"),"."),(0,n.kt)("p",null,"Vous pouvez modifier le timeout, qui est par d\xe9faut de 120 secondes, en passant une valeur au param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"$timeout"),"."),(0,n.kt)("h2",o({},{id:"exemple-de-t\xe9l\xe9chargement-dimage"}),"Exemple de t\xe9l\xe9chargement d'image"),(0,n.kt)("p",null,"Pour t\xe9l\xe9charger une image, vous devez d'abord s\xe9lectionner l'objet fichier sur le client \xe0 l'aide de l'API int\xe9gr\xe9 HTML 5 pour utiliser le fichier \xe0 partir d'une application Web. 4D utilise l'attribut de type MIME de l'objet fichier afin de le g\xe9rer correctement."),(0,n.kt)("p",null,"T\xe9l\xe9chargez ensuite l'image s\xe9lectionn\xe9e sur 4D Server :"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/$upload?$rawPict=true")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"R\xe9sultat")," :"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }')),(0,n.kt)("p",null," Utilisez ensuite cet ID pour l'ajouter \xe0 un attribut en utilisant",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/18/REST/method#methodupdate"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=update"))," pour ajouter l'image \xe0 une entit\xe9 :"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/?$method=update")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Donn\xe9es POST")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"R\xe9ponse")," :"),(0,n.kt)("p",null,"L'entit\xe9 modifi\xe9e est retourn\xe9e :"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n')))}d.isMDXComponent=!0}}]);