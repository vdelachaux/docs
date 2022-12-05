"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49352],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>l});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function A(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?A(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},A=Object.keys(e);for(a=0;a<A.length;a++)t=A[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(a=0;a<A.length;a++)t=A[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},i=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,A=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),s=p(t),l=o,m=s["".concat(c,".").concat(l)]||s[l]||u[l]||A;return t?a.createElement(m,n(n({ref:r},i),{},{components:t})):a.createElement(m,n({ref:r},i))}));function l(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var A=t.length,n=new Array(A);n[0]=s;var d={};for(var c in r)hasOwnProperty.call(r,c)&&(d[c]=r[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,n[1]=d;for(var p=2;p<A;p++)n[p]=t[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},65791:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>s,frontMatter:()=>n,metadata:()=>c,toc:()=>i});t(67294);var a=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function A(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},A=Object.keys(e);for(a=0;a<A.length;a++)t=A[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(a=0;a<A.length;a++)t=A[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const n={id:"creating",title:"Crear un proyecto 4D"},d=void 0,c={unversionedId:"Project/creating",id:"version-18/Project/creating",title:"Crear un proyecto 4D",description:"Requisitos",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/Project/creating.md",sourceDirName:"Project",slug:"/Project/creating",permalink:"/docs/es/18/Project/creating",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/Project/creating.md",tags:[],version:"18",frontMatter:{id:"creating",title:"Crear un proyecto 4D"},sidebar:"docs",previous:{title:"Generalidades",permalink:"/docs/es/18/Project/overview"},next:{title:"Arquitectura de un proyecto 4D",permalink:"/docs/es/18/Project/architecture"}},p={},i=[{value:"Requisitos",id:"requisitos",level:2},{value:"Crear archivos de proyecto",id:"crear-archivos-de-proyecto",level:2}],u={toc:i};function s(e){var{components:r}=e,n=A(e,["components"]);return(0,a.kt)("wrapper",o({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",o({},{id:"requisitos"}),"Requisitos"),(0,a.kt)("p",null,"Los nuevos proyectos 4D s\xf3lo pueden ser creados desde ",(0,a.kt)("strong",{parentName:"p"},"4D Developer")," (ver ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/Project/developing"}),"Desarrollar un proyecto"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nota:")," 4D Server puede abrir archivos .4DProject en modo solo lectura, para pruebas \xfanicamente. Para el despliegue, los proyectos 4D se proveen como archivos .4dz (archivos comprimidos). Para m\xe1s informaci\xf3n, consulte ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/Project/building"}),"Construir un paquete de proyectos"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Puede crear bases proyecto exportando las bases binarias existentes. Ver "Exportar desde una base 4D" en ',(0,a.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com"}),"doc.4d.com"),".")),(0,a.kt)("h2",o({},{id:"crear-archivos-de-proyecto"}),"Crear archivos de proyecto"),(0,a.kt)("p",null,"Para crear un nuevo proyecto de base de datos:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Lance una aplicaci\xf3n 4D Developer."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"New > Database Project...")," from the ",(0,a.kt)("strong",{parentName:"li"},"File")," menu: ",(0,a.kt)("img",{src:t(21060).Z,width:"653",height:"217"})," OR Select ",(0,a.kt)("strong",{parentName:"li"},"Database Project...")," from the ",(0,a.kt)("strong",{parentName:"li"},"New")," toolbar button: ",(0,a.kt)("img",{src:t(16093).Z,width:"285",height:"251"})," A standard ",(0,a.kt)("strong",{parentName:"li"},"Save")," dialog box appears so that you can choose the name and location of the 4D database project main folder."),(0,a.kt)("li",{parentName:"ol"},"Introduzca el nombre de su carpeta de proyecto y haga clic en ",(0,a.kt)("strong",{parentName:"li"},"Guardar"),". Este nombre se utilizar\xe1:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'como el nombre de la carpeta principal del proyecto (llamada "MyFirstProject" en el ejemplo de la secci\xf3n ',(0,a.kt)("a",o({parentName:"li"},{href:"/docs/es/18/Project/architecture"}),"Arquitectura de un Proyecto 4D"),"),"),(0,a.kt)("li",{parentName:"ul"},'como nombre del archivo .4DProject en el primer nivel de la carpeta "Project". Puedes elegir cualquier nombre permitido por su sistema operativo. ',(0,a.kt)("em",{parentName:"li"},"Atenci\xf3n:")," si su base proyecto est\xe1 destinada a funcionar en otros sistemas o a ser guardada a trav\xe9s de una herramienta de control de c\xf3digo fuente, debe tener en cuenta sus recomendaciones espec\xedficas de denominaci\xf3n.")),(0,a.kt)("p",null,'Al validar la caja de di\xe1logo, 4D cierra la base de datos actual (si la hay), crea una carpeta "Project" en la ubicaci\xf3n indicada y coloca en ella todos los archivos necesarios para el correcto funcionamiento de la base proyecto. Para m\xe1s informaci\xf3n, consulte ',(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/Project/architecture"}),"Arquitectura de un proyecto 4D"),"."),(0,a.kt)("p",null,"A continuaci\xf3n, se muestra la ventana de la aplicaci\xf3n 4D con el Explorador en primer plano. A continuaci\xf3n puede, por ejemplo, crear formularios de proyecto o mostrar el editor de estructuras y a\xf1adir tablas, campos, etc."))}s.isMDXComponent=!0},21060:(e,r,t)=>{t.d(r,{Z:()=>a});const a="data:image/png;base64,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"},16093:(e,r,t)=>{t.d(r,{Z:()=>a});const a="data:image/png;base64,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"}}]);