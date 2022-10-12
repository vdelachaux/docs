"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41896],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},33882:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>p});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={id:"architecture",title:"Arquitectura de un proyecto"},i=void 0,d={unversionedId:"Project/architecture",id:"version-19-R7/Project/architecture",title:"Arquitectura de un proyecto",description:"Un proyecto 4D se compone de varias carpetas y archivos, almacenados dentro de una carpeta ra\xedz del proyecto (carpeta paquete). Por ejemplo:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/Project/architecture.md",sourceDirName:"Project",slug:"/Project/architecture",permalink:"/docs/es/Project/architecture",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"architecture",title:"Arquitectura de un proyecto"},sidebar:"docs",previous:{title:"Generalidades",permalink:"/docs/es/Project/overview"},next:{title:"Documentar un proyecto",permalink:"/docs/es/Project/documentation"}},s={},p=[{value:"Carpeta Project",id:"carpeta-project",level:2},{value:"archivo <code>&lt;applicationName&gt;.4DProject</code>",id:"archivo-applicationname4dproject",level:3},{value:"<code>Sources</code>",id:"sources",level:3},{value:"<code>DatabaseMethods</code>",id:"databasemethods",level:4},{value:"<code>M\xe9todos</code>",id:"m\xe9todos",level:4},{value:"<code>Clases</code>",id:"clases",level:4},{value:"<code>Formularios</code>",id:"formularios",level:4},{value:"<code>TableForms</code>",id:"tableforms",level:4},{value:"<code>Triggers</code>",id:"triggers",level:4},{value:"<code>Trash</code>",id:"trash",level:3},{value:"<code>DerivedData</code>",id:"deriveddata",level:3},{value:"<code>Libraries</code>",id:"libraries",level:2},{value:"<code>Resources</code>",id:"resources",level:2},{value:"<code>Datos</code>",id:"datos",level:2},{value:"<code>Settings</code>",id:"settings",level:3},{value:"<code>Logs</code>",id:"logs",level:3},{value:"<code>Settings</code>",id:"settings-1",level:2},{value:"<code>userPreferences.&lt;userName&gt;</code>",id:"userpreferencesusername",level:2},{value:"<code>Componentes</code>",id:"componentes",level:2},{value:"<code>Plugins</code>",id:"plugins",level:2},{value:"<code>Documentation</code>",id:"documentation",level:2},{value:"<code>WebFolder</code>",id:"webfolder",level:2},{value:"Archivo <code>.gitignore</code> (opcional)",id:"archivo-gitignore-opcional",level:2}],m={toc:p};function c(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)("wrapper",n({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un proyecto 4D se compone de varias carpetas y archivos, almacenados dentro de una carpeta ra\xedz del proyecto (carpeta paquete). Por ejemplo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MyProject (",(0,r.kt)("em",{parentName:"li"},"carpeta ra\xedz del proyecto"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Componentes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Datos"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Logs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Settings")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Plugins")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Project"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DerivedData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Sources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Trash")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Resources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Settings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userPreferences.jSmith")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WebFolder"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Si su proyecto se ha convertido desde una base binaria, puede haber carpetas adicionales. Ver "Conversi\xf3n de bases en proyectos" en ',(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),"doc.4d.com"),".")),(0,r.kt)("h2",n({},{id:"carpeta-project"}),"Carpeta Project"),(0,r.kt)("p",null,"La carpeta Project suele contener la siguiente jerarqu\xeda:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"archivo ",(0,r.kt)("inlineCode",{parentName:"li"},"<applicationName>.4DProject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Sources"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Clases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DatabaseMethods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"M\xe9todos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Formularios")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TableForms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Triggers")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DerivedData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Trash")," (si hay)")),(0,r.kt)("h3",n({},{id:"archivo-applicationname4dproject"}),"archivo ",(0,r.kt)("inlineCode",{parentName:"h3"},"<applicationName>.4DProject")),(0,r.kt)("p",null,"El archivo de desarrollo de proyecto, utilizado para designar y lanzar el proyecto. Este archivo puede ser abierto por:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4D"),(0,r.kt)("li",{parentName:"ul"},"4D Server (s\xf3lo lectura, ver ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/Desktop/clientServer#opening-a-remote-project"}),"Abrir un proyecto remoto"),")")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"En los proyectos 4D, el desarrollo se realiza con 4D y el desarrollo multiusuarios se gestiona a trav\xe9s de las herramientas de control de versi\xf3n. 4D Server puede abrir archivos .4DProject para realizar pruebas.")),(0,r.kt)("p",null,"Este archivo texto tambi\xe9n puede contener llaves de configuraci\xf3n, en particular ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/Preferences/general#excluding-tokens-in-existing-projects"}),(0,r.kt)("inlineCode",{parentName:"a"},'"tokenizedText": false')),"."),(0,r.kt)("h3",n({},{id:"sources"}),(0,r.kt)("inlineCode",{parentName:"h3"},"Sources")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenido"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"catalog.4DCatalog"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Definiciones de tablas y campos"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"folders.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Definiciones de carpetas del Explorador"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"menus.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Definiciones de los men\xfas"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"settings.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Propiedades de la base ",(0,r.kt)("em",{parentName:"td"},"Structure"),". No se tienen en cuenta si los ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",n({parentName:"em"},{href:"#settings-folder-1"}),"par\xe1metros usuario"))," o los ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",n({parentName:"em"},{href:"#settings-folder"}),"par\xe1metros usuario de datos"))," son definidos. ",(0,r.kt)("strong",{parentName:"td"},"Atenci\xf3n"),": en las aplicaciones compiladas, la configuraci\xf3n de la estructura se almacena en el archivo .4dz (de s\xf3lo lectura). Para las necesidades de despliegue, es necesario utilizar los ",(0,r.kt)("em",{parentName:"td"},"par\xe1metros usuario")," o los ",(0,r.kt)("em",{parentName:"td"},"par\xe1metros usuario para los datos")," para definir la configuraci\xf3n personalizada."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"tips.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Mensajes de ayuda definidos"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"lists.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Listas definidas"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"filters.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Filtros definidos"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets.css"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Hojas de estilo CSS"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets_mac.css"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Hojas de estilo css de Mac (a partir de una base binaria convertida)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets_windows.css"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Hojas de estilo css en Windows (a partir de una base binaria convertida)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS")))),(0,r.kt)("h4",n({},{id:"databasemethods"}),(0,r.kt)("inlineCode",{parentName:"h4"},"DatabaseMethods")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenido"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"databaseMethodName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos base definidos en el proyecto. Un archivo por m\xe9todo base"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"m\xe9todos"}),(0,r.kt)("inlineCode",{parentName:"h4"},"M\xe9todos")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenido"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"methodName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos proyecto definidos en el proyecto. Un archivo por m\xe9todo"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"clases"}),(0,r.kt)("inlineCode",{parentName:"h4"},"Clases")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenido"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"className"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todo de definici\xf3n de clases usuario, que permite instanciar objetos espec\xedficos. Un archivo por clase, el nombre del archivo es el nombre de la clase"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"formularios"}),(0,r.kt)("inlineCode",{parentName:"h4"},"Formularios")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenido"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Descripci\xf3n del formulario proyecto"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todo formulario proyecto"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,r.kt)("em",{parentName:"td"},"pictureName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Imagen est\xe1tica del formulario proyecto"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,r.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos objeto. Un archivo por m\xe9todo objeto"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"tableforms"}),(0,r.kt)("inlineCode",{parentName:"h4"},"TableForms")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenido"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Descripci\xf3n del formulario de entrada de la tabla (n es el n\xfamero de tabla)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,r.kt)("em",{parentName:"td"},"pictureName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Im\xe1genes est\xe1ticas del formulario de entrada de la tabla"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todo del formulario de entrada de la tabla"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,r.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos objeto del formulario de entrada. Un archivo por m\xe9todo objeto"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Descripci\xf3n del formulario de salida de la tabla (n es el n\xfamero de tabla)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,r.kt)("em",{parentName:"td"},"pictureName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Im\xe1genes est\xe1ticas del formulario de salida de la tabla"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todo del formulario de salida de la tabla"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,r.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos objeto del formulario de salida. Un archivo por m\xe9todo objeto"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"triggers"}),(0,r.kt)("inlineCode",{parentName:"h4"},"Triggers")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenido"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"table_",(0,r.kt)("em",{parentName:"td"},"n"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos trigger definidos en el proyecto. Un archivo de activaci\xf3n por tabla (n es el n\xfamero de tabla)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The .4dm file extension is a text-based file format, containing the code of a 4D method. Es compatible con las herramientas de control de versi\xf3n."),(0,r.kt)("h3",n({},{id:"trash"}),(0,r.kt)("inlineCode",{parentName:"h3"},"Trash")),(0,r.kt)("p",null,"La carpeta Trash contiene los m\xe9todos y formularios que se han eliminado del proyecto (si los hay). Puede contener las siguientes carpetas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"M\xe9todos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Formularios")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TableForms"))),(0,r.kt)("p",null,'Dentro de estas carpetas, los nombres de los elementos eliminados van entre par\xe9ntesis, por ejemplo "(myMethod).4dm". La organizaci\xf3n de las carpetas es id\xe9ntica a la carpeta ',(0,r.kt)("a",n({parentName:"p"},{href:"#sources"}),"Sources"),"."),(0,r.kt)("h3",n({},{id:"deriveddata"}),(0,r.kt)("inlineCode",{parentName:"h3"},"DerivedData")),(0,r.kt)("p",null,"La carpeta DerivedData contiene datos en cach\xe9 utilizados internamente por 4D para optimizar el procesamiento. Se crea o recrea autom\xe1ticamente cuando es necesario. Puede ignorar esta carpeta."),(0,r.kt)("h2",n({},{id:"libraries"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Libraries")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Esta carpeta se utiliza s\xf3lo en macOS.")),(0,r.kt)("p",null,"La carpeta Librairies contiene el archivo resultante de una compilaci\xf3n con el ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/Project/compiler#silicon-compiler"}),"compilador Silicon")," en macOS."),(0,r.kt)("h2",n({},{id:"resources"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Resources")),(0,r.kt)("p",null,"La carpeta Resources contiene todos los archivos y carpetas de recursos personalizados del proyecto. En esta carpeta puede colocar todos los archivos necesarios para la traducci\xf3n o personalizaci\xf3n de la interfaz de la aplicaci\xf3n (archivos imagen, archivos texto, archivos XLIFF, etc.). 4D utiliza mecanismos autom\xe1ticos para trabajar con el contenido de esta carpeta, en particular para el manejo de archivos XLIFF e im\xe1genes est\xe1ticas. Para su uso en modo remoto, la carpeta Resources permite compartir archivos entre el equipo servidor y todos los equipos cliente. Ver el ",(0,r.kt)("em",{parentName:"p"},"manual 4D Server"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenido"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"item")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Archivos y carpetas de recursos del proyecto"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"varios")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Images/Library/",(0,r.kt)("em",{parentName:"td"},"item")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Im\xe1genes de la librer\xeda de im\xe1genes como archivos separados(*). Los nombres de estos elementos se convierten en nombres de archivos. Si existe un duplicado, se a\xf1ade un n\xfamero al nombre."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")))),(0,r.kt)("p",null,"(*) s\xf3lo si el proyecto fue exportado desde una base binaria .4db."),(0,r.kt)("h2",n({},{id:"datos"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Datos")),(0,r.kt)("p",null,"La carpeta Data contiene el archivo de datos y todos los archivos y carpetas relacionados con los datos."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenido"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"data.4dd(*)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Archivo de datos que contiene los datos introducidos en los registros y todos los datos pertenecientes a los registros. Al abrir un proyecto 4D, la aplicaci\xf3n abre por defecto el archivo de datos actual. Si cambia el nombre o la ubicaci\xf3n de este archivo, aparecer\xe1 la caja de di\xe1logo ",(0,r.kt)("em",{parentName:"td"},"Abrir un archivo de datos")," para que pueda seleccionar el archivo de datos a utilizar o crear uno nuevo"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"binary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"data.journal"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Se crea s\xf3lo cuando la base de datos utiliza un archivo de registro. El archivo de registro se utiliza para garantizar la seguridad de los datos entre las copias de seguridad. Todas las operaciones realizadas sobre los datos se registran secuencialmente en este archivo. Por lo tanto, cada operaci\xf3n sobre los datos provoca dos acciones simult\xe1neas: la primera sobre los datos (la instrucci\xf3n se ejecuta normalmente) y la segunda en el archivo de registro (se registra una descripci\xf3n de la operaci\xf3n). El archivo de registro se construye de forma independiente, sin perturbar ni ralentizar el trabajo del usuario. Una base de datos s\xf3lo puede trabajar con un \xfanico archivo de registro a la vez. El archivo de historial registra operaciones como adiciones, modificaciones o eliminaciones de registros, transacciones, etc. Se genera por defecto cuando se crea una base de datos."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"binary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"data.match"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"(interno) UUID correspondiente al n\xfamero de la tabla"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")))),(0,r.kt)("p",null,"(*) Cuando el proyecto se crea a partir de una base de datos binaria .4db, el archivo de datos se deja intacto. Por lo tanto, se puede nombrar de otra manera y colocar en otro lugar."),(0,r.kt)("h3",n({},{id:"settings"}),(0,r.kt)("inlineCode",{parentName:"h3"},"Settings")),(0,r.kt)("p",null,"Esta carpeta contiene ",(0,r.kt)("strong",{parentName:"p"},"archivos de configuraci\xf3n de datos")," utilizados para la administraci\xf3n de la aplicaci\xf3n."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estos par\xe1metros tienen prioridad sobre los ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",n({parentName:"strong"},{href:"#settings-1"}),"archivos de propiedades usuario"))," y los archivos de ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",n({parentName:"strong"},{href:"#sources"}),"propiedades estructura")),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenido"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"directory.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Descripci\xf3n de los grupos y usuarios de 4D y sus derechos de acceso cuando la aplicaci\xf3n se lanza con este archivo de datos."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Backup.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe1metros de copia de seguridad de la base de datos, utilizados para definir las ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/Backup/settings"}),"opciones de copia de seguridad")," cuando la base se lanza con este archivo de datos. Las llaves relativas a la configuraci\xf3n de la copia de seguridad se describen en el manual ",(0,r.kt)("em",{parentName:"td"},"Backup de las llaves XML 4D"),"."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"settings.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Propiedades de la base personalizadas para este archivo de datos."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")))),(0,r.kt)("h3",n({},{id:"logs"}),(0,r.kt)("inlineCode",{parentName:"h3"},"Logs")),(0,r.kt)("p",null,"La carpeta Logs contiene todos los archivos de registro utilizados por el proyecto. Los archivos de registro incluyen, en particular:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"conversi\xf3n de base de datos,"),(0,r.kt)("li",{parentName:"ul"},"peticiones del servidor web,"),(0,r.kt)("li",{parentName:"ul"},"registro de actividades de backup/restituci\xf3n (",(0,r.kt)("em",{parentName:"li"},"Backup Journal","[","xxx].txt"),", ver ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/Backup/backup#backup-journal"}),"Historial de backup"),")"),(0,r.kt)("li",{parentName:"ul"},"depuraci\xf3n de comandos,"),(0,r.kt)("li",{parentName:"ul"},"Peticiones 4D Server (generadas en en los equipos cliente y en el servidor).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Una carpeta Logs adicional est\xe1 disponible en la carpeta de preferencias del usuario del sistema (carpeta 4D activa, ver el comando ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18R4/4D/18-R4/Get-4D-folder.301-4982857.en.html"}),"Get 4D folder"),") para los archivos de registro de mantenimiento y en los casos en que la carpeta de datos es de s\xf3lo lectura.")),(0,r.kt)("h2",n({},{id:"settings-1"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Settings")),(0,r.kt)("p",null,"Esta carpeta contiene ",(0,r.kt)("strong",{parentName:"p"},"archivos de propiedades usuario")," utilizados para la administraci\xf3n de la aplicaci\xf3n."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estos par\xe1metros tienen prioridad sobre los archivos ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",n({parentName:"strong"},{href:"#sources"}),"propiedades estructura")),". Sin embargo, si existe un ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",n({parentName:"strong"},{href:"#settings"}),"archivo de par\xe1metros usuario")),", \xe9ste tiene prioridad sobre el archivo de las propiedades usuario.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenido"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"directory.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Descripci\xf3n de los grupos y usuarios de 4D para la aplicacion, as\xed como sus derechos de acceso"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Backup.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe1metros de copia de seguridad de la base de datos, utilizados para definir las ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/Backup/settings"}),"opciones de copia de seguridad"),") cuando se lanza cada copia de seguridad. Este archivo tambi\xe9n puede utilizarse para leer o definir opciones adicionales, como la cantidad de informaci\xf3n almacenada en el ",(0,r.kt)("em",{parentName:"td"},"diario de backup"),". Las llaves relativas a la configuraci\xf3n de la copia de seguridad se describen en el manual ",(0,r.kt)("em",{parentName:"td"},"Backup de las llaves XML 4D"),"."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"BuildApp.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Archivo de par\xe1metros de generaci\xf3n, creado autom\xe1ticamente cuando se utiliza la caja de di\xe1logo del generador de aplicaciones o del comando ",(0,r.kt)("inlineCode",{parentName:"td"},"BUILD APPLICATION")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"settings.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe1metros personalizados para este proyecto (todos los archivos de datos)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")))),(0,r.kt)("h2",n({},{id:"userpreferencesusername"}),(0,r.kt)("inlineCode",{parentName:"h2"},"userPreferences.<userName>")),(0,r.kt)("p",null,"Esta carpeta contiene archivos que memorizan las configuraciones del usuario, por ejemplo, el punto de ruptura o las posiciones de las ventanas. Puede simplemente ignorar esta carpeta. Contiene, por ejemplo:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Contenido"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"methodPreferences.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Preferencias del editor de c\xf3digo del usuario actual"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"methodWindowPositions.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Posici\xf3n de la ventana de usuario actual para los m\xe9todos"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"formWindowPositions.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Posici\xf3n de la ventana de usuario actual para los formularios"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"workspace.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Lista de ventanas abiertas; en macOS, orden de las ventanas de la pesta\xf1a"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"debuggerCatches.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Llamadas a los comandos"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"recentTables.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Lista ordenada de tablas"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"preferences.4DPreferences"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Ruta de datos actual y posiciones de la ventana principal"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CompilerIntermediateFiles"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Archivos intermedios resultantes de la compilaci\xf3n Apple Silicon"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Folder")))),(0,r.kt)("h2",n({},{id:"componentes"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Componentes")),(0,r.kt)("p",null,"Esta carpeta contiene los componentes que deben estar disponibles en el proyecto aplicaci\xf3n. Debe almacenarse en el mismo nivel que la carpeta Project."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An application project can be used itself as a component: - for development: put an alias of the .4dproject file in the Components folder of the host project. - para el despliegue: ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/Desktop/building#build-component"}),"cree el componente")," y coloque el archivo .4dz resultante en una carpeta .4dbase en la carpeta Components de la aplicaci\xf3n local.")),(0,r.kt)("h2",n({},{id:"plugins"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Plugins")),(0,r.kt)("p",null,"Esta carpeta contiene los plug-ins que deben estar disponibles en el proyecto aplicaci\xf3n. Debe almacenarse en el mismo nivel que la carpeta Project."),(0,r.kt)("h2",n({},{id:"documentation"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Documentation")),(0,r.kt)("p",null,"Esta carpeta contiene todos los archivos de documentaci\xf3n (.md) creados para los elementos del proyecto como clases, m\xe9todos o formularios. Los archivos de documentaci\xf3n se gestionan y se muestran en el Explorador 4D."),(0,r.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/Project/documentation"}),"Documentar un proyecto"),"."),(0,r.kt)("h2",n({},{id:"webfolder"}),(0,r.kt)("inlineCode",{parentName:"h2"},"WebFolder")),(0,r.kt)("p",null,"Define la carpeta ra\xedz por defecto del servidor web 4D para las p\xe1ginas, las im\xe1genes, etc. Se crea autom\xe1ticamente cuando se lanza el servidor web por primera vez."),(0,r.kt)("h2",n({},{id:"archivo-gitignore-opcional"}),"Archivo ",(0,r.kt)("inlineCode",{parentName:"h2"},".gitignore")," (opcional)"),(0,r.kt)("p",null,"Archivo que especifica los archivos que ser\xe1n ignorados por git. Puede incluir un archivo gitignore en sus proyectos utilizando la opci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Crear un archivo .gitignore")," en la p\xe1gina ",(0,r.kt)("strong",{parentName:"p"},"General")," de las preferencias. Para configurar el contenido de ese archivo, ver ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/Preferences/general#create-gitignore-file"}),"Crear un archivo ",(0,r.kt)("inlineCode",{parentName:"a"},".gitignore")),"."))}c.isMDXComponent=!0}}]);