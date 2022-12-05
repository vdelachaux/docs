"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90108],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=r.createContext({}),s=function(e){var n=r.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=t,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(g,i(i({ref:n},p),{},{components:a})):r.createElement(g,i({ref:n},p))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94606:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});a(67294);var r=a(3905);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},t.apply(this,arguments)}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}const i={id:"develop-plug-ins",title:"Plugins de desarrollo"},l=void 0,u={unversionedId:"Extensions/develop-plug-ins",id:"version-19-R7/Extensions/develop-plug-ins",title:"Plugins de desarrollo",description:"\xbfPor qu\xe9 es necesario un plug-in?",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/Extensions/develop-plug-ins.md",sourceDirName:"Extensions",slug:"/Extensions/develop-plug-ins",permalink:"/docs/es/Extensions/develop-plug-ins",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/Extensions/develop-plug-ins.md",tags:[],version:"19-R7",frontMatter:{id:"develop-plug-ins",title:"Plugins de desarrollo"},sidebar:"docs",previous:{title:"Componentes de desarrollo",permalink:"/docs/es/Extensions/develop-components"},next:{title:"Generalidades",permalink:"/docs/es/WebServer/overview"}},s={},p=[{value:"\xbfPor qu\xe9 es necesario un plug-in?",id:"por-qu\xe9-es-necesario-un-plug-in",level:2},{value:"\xbfQu\xe9 es un plug-in y qu\xe9 puede hacer?",id:"qu\xe9-es-un-plug-in-y-qu\xe9-puede-hacer",level:2},{value:"Nota importante",id:"nota-importante",level:3},{value:"\xbfC\xf3mo crear un plug-in?",id:"c\xf3mo-crear-un-plug-in",level:2},{value:"Compartir los plug-ins",id:"compartir-los-plug-ins",level:2}],c={toc:p};function d(e){var{components:n}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",t({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",t({},{id:"por-qu\xe9-es-necesario-un-plug-in"}),"\xbfPor qu\xe9 es necesario un plug-in?"),(0,r.kt)("p",null,"Aunque 4D ofrece cientos de m\xe9todos integrados para manipular objetos, registros e implementar la interfaz de usuario, es posible que se necesite alg\xfan uso o caracter\xedstica especial (que a veces depende de la plataforma): uno puede necesitar ODBC en Windows, otro puede necesitar los servicios de Apple en macOS, mientras que otro puede querer implementar herramientas estad\xedsticas espec\xedficas, inicio de sesi\xf3n en redes sociales, plataforma de pago, acceso a archivos a trav\xe9s de la red, una interfaz de usuario especial o una estructura de imagen privada."),(0,r.kt)("p",null,"Es evidente que cubrir todas las \xe1reas de los sistemas operativos macOS y Windows por medio de los comandos de 4D sin duda conducir\xeda a un producto con miles de comandos, y al mismo tiempo, la mayor\xeda de los usuarios no tendr\xedan necesidad de un conjunto tan grande de funcionalidades. Adem\xe1s, la creaci\xf3n de una herramienta tan completa har\xeda que el entorno 4D fuera incre\xedblemente complejo y llevar\xeda a la mayor\xeda de los usuarios meses de estudio antes de poder esperar resultados \xfatiles."),(0,r.kt)("p",null,"La naturaleza modular del entorno 4D permite la creaci\xf3n de aplicaciones b\xe1sicas, pero no impide el desarrollo de sistemas muy complejos. La arquitectura del plug-in 4D abre el entorno 4D a todo tipo de aplicaciones o de usuario. Los plug-ins 4D multiplican la potencia y la productividad de la aplicaci\xf3n o del usuario."),(0,r.kt)("h2",t({},{id:"qu\xe9-es-un-plug-in-y-qu\xe9-puede-hacer"}),"\xbfQu\xe9 es un plug-in y qu\xe9 puede hacer?"),(0,r.kt)("p",null,"Un plug-in es una pieza de c\xf3digo que 4D lanza al inicio. A\xf1ade funcionalidad a 4D y aumenta as\xed su capacidad."),(0,r.kt)("p",null,"Normalmente, un plug-in hace cosas que:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4D no puede efectuar (es decir, una tecnolog\xeda de plataforma espec\xedfica),"),(0,r.kt)("li",{parentName:"ul"},"ser\xe1 muy dif\xedcil de escribir s\xf3lo con 4D,"),(0,r.kt)("li",{parentName:"ul"},"s\xf3lo est\xe1n disponibles como punto de entrada del plug-in")),(0,r.kt)("p",null,"Un plug-in suele contener un conjunto de rutinas entregadas al desarrollador 4D. Puede manejar un \xc1rea Externa y ejecutar un proceso externo."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Una ",(0,r.kt)("strong",{parentName:"li"},"rutina de conexi\xf3n")," es una rutina escrita en lenguaje nativo (normalmente C o C++) que provoca una acci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"Un ",(0,r.kt)("strong",{parentName:"li"},"\xe1rea externa")," es una parte de un formulario que puede mostrar casi todo e interactuar con el usuario cuando sea necesario."),(0,r.kt)("li",{parentName:"ul"},"Un ",(0,r.kt)("strong",{parentName:"li"},"proceso externo")," es un proceso que se ejecuta solo, normalmente en un bucle, haciendo casi todo lo que quiere. Todo el c\xf3digo del proceso pertenece al plug-in, 4D simplemente est\xe1 presente para recibir/enviar eventos al proceso.")),(0,r.kt)("h3",t({},{id:"nota-importante"}),"Nota importante"),(0,r.kt)("p",null,'Un plug-in puede ser muy sencillo, con una sola rutina que realice una tarea muy peque\xf1a, o puede ser muy complejo, con cientos de rutinas y \xe1reas. Pr\xe1cticamente no hay l\xedmite para lo que puede hacer un plug-in, sin embargo todo desarrollador de plug-ins debe recordar que un plug-in es una parte de c\xf3digo "de muestra". Es el plug-in que se ejecuta dentro de 4D, no lo contrario. Como parte de c\xf3digo, es el anfitri\xf3n de 4D; no es una aplicaci\xf3n independiente. Comparte el tiempo de la CPU y la memoria con 4D y otros plug-ins, por lo tanto, deber\xeda ser un c\xf3digo conciso, utilizando s\xf3lo lo necesario para funcionar. Por ejemplo, en los bucles largos, un plug-in debe llamar a ',(0,r.kt)("inlineCode",{parentName:"p"},"PA_Yield()")," para dar tiempo al planificador 4D a menos que su tarea sea cr\xedtica tanto para \xe9l como para la aplicaci\xf3n."),(0,r.kt)("h2",t({},{id:"c\xf3mo-crear-un-plug-in"}),"\xbfC\xf3mo crear un plug-in?"),(0,r.kt)("p",null,"4D ofrece en GitHub un c\xf3digo abierto ",(0,r.kt)("a",t({parentName:"p"},{href:"https://github.com/4d/4D-Plugin-SDK"}),(0,r.kt)("strong",{parentName:"a"},"plug-in SDK")),", que contiene el plug-in API 4D y el asistente de plugins 4D:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"el ",(0,r.kt)("a",t({parentName:"li"},{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API"}),(0,r.kt)("strong",{parentName:"a"},"Plugin API de 4D ")),", escrito en C, a\xf1ade m\xe1s de 400 funciones que le ayudan a crear f\xe1cilmente sus propios plug-ins para a\xf1adir nuevas funcionalidades a su aplicaci\xf3n 4D. Las funciones del plug-in de API de 4D gestionan todas las interacciones entre la aplicaci\xf3n 4D y su plug-in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",t({parentName:"li"},{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard"}),(0,r.kt)("strong",{parentName:"a"},"El Asistente de plug-in 4D"))," es una herramienta esencial que simplifica la tarea de desarrollar plugins 4D. Escribe el c\xf3digo que 4D necesita para cargar e interactuar correctamente con un plug-in, permiti\xe9ndole concentrarse en su propio c\xf3digo.")),(0,r.kt)("h2",t({},{id:"compartir-los-plug-ins"}),"Compartir los plug-ins"),(0,r.kt)("p",null,"Lo animamos a que apoye a la comunidad de desarrolladores 4D compartiendo sus plug-ins, preferiblemente en la ",(0,r.kt)("a",t({parentName:"p"},{href:"https://github.com/topics/4d-plugin"}),"plataforma GitHub"),". Recomendamos que utilice el tema ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"4d-plugin"))," para ser referenciado correctamente."))}d.isMDXComponent=!0}}]);