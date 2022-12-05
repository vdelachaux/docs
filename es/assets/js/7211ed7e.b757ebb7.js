"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3066],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>p});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=r.createContext({}),l=function(e){var a=r.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},A={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=t,m=u["".concat(c,".").concat(p)]||u[p]||A[p]||o;return n?r.createElement(m,i(i({ref:a},d),{},{components:n})):r.createElement(m,i({ref:a},d))}));function p(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59249:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}const i={id:"bars",title:"Barras de men\xfas"},s=void 0,c={unversionedId:"Menus/bars",id:"version-19/Menus/bars",title:"Barras de men\xfas",description:"Las barras de men\xfa constituyen la principal interfaz de las aplicaciones personalizadas. Para cada aplicaci\xf3n personalizada, debe crear al menos una barra de men\xfa con al menos un men\xfa. Por defecto, Menu Bar #1 es la barra de men\xfas que se muestra en el entorno de la aplicaci\xf3n. Puede cambiar la barra de men\xfas que se muestra utilizando el comando SET MENU BAR.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Menus/bars.md",sourceDirName:"Menus",slug:"/Menus/bars",permalink:"/docs/es/19/Menus/bars",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/Menus/bars.md",tags:[],version:"19",frontMatter:{id:"bars",title:"Barras de men\xfas"},sidebar:"docs",previous:{title:"Propiedades de los men\xfas",permalink:"/docs/es/19/Menus/properties"},next:{title:"Mode SDI bajo Windows",permalink:"/docs/es/19/Menus/sdi"}},l={},d=[{value:"Pantalla de bienvenida",id:"pantalla-de-bienvenida",level:2},{value:"Vista previa de las barras de men\xfas",id:"vista-previa-de-las-barras-de-men\xfas",level:2}],A={toc:d};function u(e){var{components:a}=e,i=o(e,["components"]);return(0,r.kt)("wrapper",t({},A,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Las barras de men\xfa constituyen la principal interfaz de las aplicaciones personalizadas. Para cada aplicaci\xf3n personalizada, debe crear al menos una barra de men\xfa con al menos un men\xfa. Por defecto, Menu Bar #1 es la barra de men\xfas que se muestra en el entorno de la aplicaci\xf3n. Puede cambiar la barra de men\xfas que se muestra utilizando el comando ",(0,r.kt)("inlineCode",{parentName:"p"},"SET MENU BAR"),"."),(0,r.kt)("p",null,"4D le permite asociar una imagen de pantalla de inicio personalizada con cada barra de men\xfas y previsualizar esta barra de men\xfa en cualquier momento."),(0,r.kt)("h2",t({},{id:"pantalla-de-bienvenida"}),"Pantalla de bienvenida"),(0,r.kt)("p",null,"Puede mejorar la apariencia de cada barra de men\xfa asociando una pantalla de inicio personalizada. La ventana que contiene la pantalla de inicio se muestra debajo de la barra de men\xfas cuando aparece. Puede contener un logo o cualquier tipo de imagen. Por defecto, 4D muestra el logo 4D en la pantalla de inicio:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(64748).Z,width:"682",height:"533"})),(0,r.kt)("p",null,"Una imagen de pantalla de inicio personalizada puede provenir de cualquier aplicaci\xf3n gr\xe1fica. 4D le permite pegar una imagen del portapapeles o utilizar cualquier imagen presente en su disco duro. Se puede utilizar cualquier formato de imagen est\xe1ndar soportado por 4D."),(0,r.kt)("p",null,'La imagen de la pantalla de inicio s\xf3lo puede definirse en el editor de men\xfas: seleccione la barra de men\xfas a la que desea asociar la pantalla de inicio personalizada. Observe el \xe1rea "Imagen de fondo" en la parte derecha de la ventana. Para abrir directamente una imagen almacenada en su disco, haga clic en el bot\xf3n ',(0,r.kt)("strong",{parentName:"p"},"Abrir"),' o en el \xe1rea "Imagen de fondo". Aparece un men\xfa emergente:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Para pegar una imagen desde el portapapeles, seleccione ",(0,r.kt)("strong",{parentName:"li"},"Pegar"),"."),(0,r.kt)("li",{parentName:"ul"},"Para abrir una imagen almacenada en un archivo de disco, seleccione ",(0,r.kt)("strong",{parentName:"li"},"Abrir"),". Si selecciona Abrir, aparecer\xe1 una caja de di\xe1logo est\xe1ndar de Abrir archivo para que pueda seleccionar el archivo de imagen que va a utilizar. Una vez definida, la imagen se muestra en miniatura en la zona. A continuaci\xf3n, se asocia a la barra de men\xfas.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(38193).Z,width:"208",height:"188"})),(0,r.kt)("p",null,'Puede ver el resultado final probando la barra de men\xfas (ver la secci\xf3n siguiente). En el modo Aplicaci\xf3n, la imagen se muestra en la pantalla de inicio con el formato de tipo "Truncado (Centrado)".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Puede elegir si desea mostrar u ocultar esta ventana mediante la opci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Mostrar la barra de herramientas")," en las Propiedades.")),(0,r.kt)("p",null,"Para eliminar la imagen personalizada y mostrar la predeterminada en su lugar, haga clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Borrar")," o seleccione ",(0,r.kt)("strong",{parentName:"p"},"Borrar")," en el men\xfa emergente del \xe1rea."),(0,r.kt)("h2",t({},{id:"vista-previa-de-las-barras-de-men\xfas"}),"Vista previa de las barras de men\xfas"),(0,r.kt)("p",null,"El editor de la barra de men\xfas le permite ver los men\xfas personalizados y la pantalla de inicio en cualquier momento, sin cerrar la ventana de la caja de herramientas."),(0,r.kt)("p",null,"Para ello, basta con seleccionar la barra de men\xfas y elegir ",(0,r.kt)("strong",{parentName:"p"},'Probar la barra de men\xfas "Barra de men\xfas #X"')," en el men\xfa contextual o en el men\xfa de opciones del editor."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(91324).Z,width:"360",height:"175"})),(0,r.kt)("p",null,"4D muestra una vista previa de la barra de men\xfas as\xed como de la pantalla de inicio. Puede desplazarse por los men\xfas y submen\xfas para ver su contenido. Sin embargo, estos men\xfas no est\xe1n activos. Para probar el funcionamiento de los men\xfas y la barra de herramientas, debe utilizar el comando ",(0,r.kt)("strong",{parentName:"p"},"Probar la aplicaci\xf3n")," en el men\xfa ",(0,r.kt)("strong",{parentName:"p"},"Ejecutar"),"."))}u.isMDXComponent=!0},64748:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/splash1-f8af26d9ec7a3f25a766cb3e22b04cc5.png"},38193:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/splash2-a427b8fe9c79067763540d1ce0d83994.png"},91324:(e,a,n)=>{n.d(a,{Z:()=>r});const r="data:image/png;base64,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"}}]);