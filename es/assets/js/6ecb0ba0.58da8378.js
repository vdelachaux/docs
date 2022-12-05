"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74829],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?a.createElement(m,i(i({ref:r},u),{},{components:t})):a.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9855:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});t(67294);var a=t(3905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const i={id:"structure",title:"P\xe1gina Estructura"},s=void 0,c={unversionedId:"Preferences/structure",id:"version-19/Preferences/structure",title:"P\xe1gina Estructura",description:"Llave primaria",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Preferences/structure.md",sourceDirName:"Preferences",slug:"/Preferences/structure",permalink:"/docs/es/19/Preferences/structure",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/Preferences/structure.md",tags:[],version:"19",frontMatter:{id:"structure",title:"P\xe1gina Estructura"},sidebar:"docs",previous:{title:"P\xe1gina general",permalink:"/docs/es/19/Preferences/general"},next:{title:"P\xe1gina formulario",permalink:"/docs/es/19/Preferences/forms"}},l={},u=[{value:"Llave primaria",id:"llave-primaria",level:2},{value:"Editor de estructura",id:"editor-de-estructura",level:2},{value:"Calidad gr\xe1fica de la estructura",id:"calidad-gr\xe1fica-de-la-estructura",level:3},{value:"Cuando una carpeta est\xe1 atenuada, su contenido es:",id:"cuando-una-carpeta-est\xe1-atenuada-su-contenido-es",level:3}],d={toc:u};function p(e){var{components:r}=e,t=o(e,["components"]);return(0,a.kt)("wrapper",n({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",n({},{id:"llave-primaria"}),"Llave primaria"),(0,a.kt)("p",null,"Estas opciones en las preferencias modifican el nombre y el tipo por defecto de los campos llaves primaria a\xf1adidos autom\xe1ticamente por 4D cuando se crean nuevas tablas o mediante el ",(0,a.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Primary-key-manager.300-5217742.en.html"}),"Gestor de llaves primarias"),")."),(0,a.kt)("p",null,"Las siguientes opciones est\xe1n disponibles:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name"),' ("ID" por defecto): define el nombre por defecto de los campos llaves primarias. Puede utilizar el nombre que desee, siempre que respete las ',(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/19/Concepts/identifiers#tables-and-fields"}),"reglas de denominaci\xf3n de 4D"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type")," (",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/19/Concepts/number"}),"Longint")," por defecto): define el tipo por defecto de los campos llave primaria. Puede elegir el tipo de UUID. En este caso, los campos de llave primaria creados por defecto son de ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/19/Concepts/string"}),"tipo Alfa")," y tienen marcadas las propiedades de los campos ",(0,a.kt)("strong",{parentName:"li"},"Formato UUID")," y ",(0,a.kt)("strong",{parentName:"li"},"Auto UUID"),".")),(0,a.kt)("h2",n({},{id:"editor-de-estructura"}),"Editor de estructura"),(0,a.kt)("p",null,"Este grupo de opciones configura la visualizaci\xf3n del editor de estructura de 4D."),(0,a.kt)("h3",n({},{id:"calidad-gr\xe1fica-de-la-estructura"}),"Calidad gr\xe1fica de la estructura"),(0,a.kt)("p",null,"Esta opci\xf3n var\xeda el nivel de detalle gr\xe1fico en el editor de estructura. Por defecto, la calidad se define como ",(0,a.kt)("strong",{parentName:"p"},"Alta"),'. Puede seleccionar la calidad Est\xe1ndar para dar prioridad a la velocidad de visualizaci\xf3n. El efecto de este ajuste es perceptible principalmente cuando se utiliza la funci\xf3n de zoom (ver el p\xe1rrafo "Zoom" en la secci\xf3n ',(0,a.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html"}),"Editor de estructura"),")."),(0,a.kt)("h3",n({},{id:"cuando-una-carpeta-est\xe1-atenuada-su-contenido-es"}),"Cuando una carpeta est\xe1 atenuada, su contenido es:"),(0,a.kt)("p",null,"Esta opci\xf3n establece el aspecto de las tablas atenuadas en el editor de estructuras, cuando se realizan selecciones por carpetas (ver ",(0,a.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Structure-editor.300-5217734.en.html#4592928"}),"Resaltar/atenuar tablas por carpeta"),"). Las opciones posibles son Atenuado (una sombra sustituye a la imagen de la tabla) e Invisible (la tabla desaparece por completo)."))}p.isMDXComponent=!0}}]);