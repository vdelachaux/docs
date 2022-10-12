"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5947],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var l=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=l.createContext({}),d=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||n;return a?l.createElement(k,r(r({ref:t},p),{},{components:a})):l.createElement(k,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<n;d++)r[d]=a[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46972:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});a(67294);var l=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},o.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const r={id:"stylesheets",title:"Hojas de estilo"},i=void 0,s={unversionedId:"FormEditor/stylesheets",id:"version-19-R6/FormEditor/stylesheets",title:"Hojas de estilo",description:"Una hoja de estilo agrupa una combinaci\xf3n de atributos de objetos formulario, desde los atributos de texto hasta casi todos los atributos de objeto disponibles.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/FormEditor/createStylesheet.md",sourceDirName:"FormEditor",slug:"/FormEditor/stylesheets",permalink:"/docs/es/19-R6/FormEditor/stylesheets",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"stylesheets",title:"Hojas de estilo"},sidebar:"docs",previous:{title:"Acerca de los formularios 4D",permalink:"/docs/es/19-R6/FormEditor/forms"},next:{title:"Im\xe1genes",permalink:"/docs/es/19-R6/FormEditor/pictures"}},d={},p=[{value:"Creaci\xf3n o modificaci\xf3n de hojas de estilo",id:"creaci\xf3n-o-modificaci\xf3n-de-hojas-de-estilo",level:2},{value:"Archivos hojas de estilo",id:"archivos-hojas-de-estilo",level:2},{value:"Arquitectura de las hojas de estilo",id:"arquitectura-de-las-hojas-de-estilo",level:2},{value:"Selectores de hojas de estilo",id:"selectores-de-hojas-de-estilo",level:2},{value:"Tipo de objeto",id:"tipo-de-objeto",level:3},{value:"Nombre del objeto",id:"nombre-del-objeto",level:3},{value:"Class",id:"class",level:3},{value:"Todos los objetos",id:"todos-los-objetos",level:3},{value:"Atributos espec\xedficos",id:"atributos-espec\xedficos",level:3},{value:"Sintaxis soportadas",id:"sintaxis-soportadas",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"Declaraciones de hojas de estilo",id:"declaraciones-de-hojas-de-estilo",level:2},{value:"Media Queries",id:"media-queries",level:3},{value:"Ejemplo",id:"ejemplo",level:5},{value:"Atributos de objetos",id:"atributos-de-objetos",level:3},{value:"Mapa de atributos",id:"mapa-de-atributos",level:4},{value:"Valores de atributos espec\xedficos",id:"valores-de-atributos-espec\xedficos",level:4},{value:"Orden de prioridad",id:"orden-de-prioridad",level:2},{value:"JSON vs Hoja de estilo",id:"json-vs-hoja-de-estilo",level:3},{value:"Hojas de estilo m\xfaltiples",id:"hojas-de-estilo-m\xfaltiples",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}],u={toc:p};function c(e){var{components:t}=e,r=n(e,["components"]);return(0,l.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Una hoja de estilo agrupa una combinaci\xf3n de atributos de objetos formulario, desde los atributos de texto hasta casi todos los atributos de objeto disponibles."),(0,l.kt)("p",null,"Adem\xe1s de armonizar la interfaz de sus aplicaciones, las hojas de estilo ofrecen tres grandes ventajas:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Permite ahorrar tiempo durante el desarrollo: para cada objeto tiene un grupo espec\xedfico de par\xe1metros dentro de una sola operaci\xf3n."),(0,l.kt)("li",{parentName:"ul"},"Facilita el mantenimiento: las hojas de estilo modifican la apariencia de todos los objetos que las utilicen, por lo que cambiar el tama\xf1o de la fuente en una hoja de estilo cambiar\xe1 el tama\xf1o de la fuente para todos los objetos que utilicen esta misma hoja de estilo."),(0,l.kt)("li",{parentName:"ul"},"Control del desarrollo multiplataforma: las hojas de estilo se pueden aplicar a las plataformas macOS y Windows, s\xf3lo a macOS o s\xf3lo a Windows. Cuando se aplica una hoja de estilo, 4D utiliza autom\xe1ticamente la hoja de estilo apropiada.")),(0,l.kt)("h2",o({},{id:"creaci\xf3n-o-modificaci\xf3n-de-hojas-de-estilo"}),"Creaci\xf3n o modificaci\xf3n de hojas de estilo"),(0,l.kt)("p",null,'Puede crear hojas de estilo utilizando su editor de texto preferido y guardando el archivo con extensi\xf3n ".css" en la carpeta "/SOURCES" del proyecto.'),(0,l.kt)("p",null,"La caja de herramientas de 4D ofrece una p\xe1gina ",(0,l.kt)("strong",{parentName:"p"},"Hojas de estilo")," como opci\xf3n de acceso directo para crear y editar una de las tres hojas de estilo con nombre espec\xedficas de la plataforma."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Abra la p\xe1gina ",(0,l.kt)("strong",{parentName:"p"},"Estilos")," eligiendo la ",(0,l.kt)("strong",{parentName:"p"},"Caja de herramientas > Styles")," del men\xfa Dise\xf1o o haga clic en el icono ",(0,l.kt)("strong",{parentName:"p"},"Caja de herramientas")," de la barra de herramientas del editor de formularios."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(63659).Z,width:"787",height:"582"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Seleccione el tipo de hoja de estilo que desea crear y haga clic en el bot\xf3n ",(0,l.kt)("strong",{parentName:"p"},"Crear")," o ",(0,l.kt)("strong",{parentName:"p"},"Editar"),": ",(0,l.kt)("img",{src:a(84295).Z,width:"116",height:"23"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"La hoja de estilo se abrir\xe1 en su editor de texto predeterminado."))),(0,l.kt)("h2",o({},{id:"archivos-hojas-de-estilo"}),"Archivos hojas de estilo"),(0,l.kt)("p",null,"4D acepta tres archivos espec\xedficos de hojas de estilo:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:null}),"Hoja de estilo"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"Plataforma"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"styleSheets.css"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"Hoja de estilo global por defecto para macOS y Windows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"styleSheets_mac.css"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"Para definir los estilos de atributos espec\xedficos de macOS \xfanicamente")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"styleSheets_windows.css"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"Para definir los estilos de atributos espec\xedficos para Windows \xfanicamente")))),(0,l.kt)("p",null,'Estos archivos se almacenan en la carpeta "/SOURCES" del proyecto. Tambi\xe9n se puede acceder directamente a trav\xe9s del ',(0,l.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R6/FormEditor/overview#css-preview"}),"CSS Preview")," en la barra de herramientas del editor de formularios."),(0,l.kt)("h2",o({},{id:"arquitectura-de-las-hojas-de-estilo"}),"Arquitectura de las hojas de estilo"),(0,l.kt)("p",null,"Aunque adaptadas para satisfacer las necesidades espec\xedficas de los formularios 4D, las hojas de estilo para proyectos aplicaci\xf3n suelen seguir la sintaxis y la gram\xe1tica CSS2."),(0,l.kt)("p",null,"Cada regla de estilo de una hoja de estilo contiene dos partes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"un ",(0,l.kt)("em",{parentName:"p"},"selector"),' - Un selector define d\xf3nde aplicar el estilo. 4D soporta los selectores "object type", "object name", "class", "all objects" y "attribute value".')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"una ",(0,l.kt)("em",{parentName:"p"},"declaraci\xf3n")," - La declaraci\xf3n define el estilo real a aplicar. Se pueden agrupar varias l\xedneas de declaraci\xf3n para formar un bloque de declaraci\xf3n. Cada l\xednea de un bloque de declaraci\xf3n CSS debe terminar con un punto y coma, y todo el bloque debe estar rodeado de llaves."))),(0,l.kt)("h2",o({},{id:"selectores-de-hojas-de-estilo"}),"Selectores de hojas de estilo"),(0,l.kt)("h3",o({},{id:"tipo-de-objeto"}),"Tipo de objeto"),(0,l.kt)("p",null,"El tipo de objeto define el tipo de objeto al que hay que aplicar el estilo, y corresponde al selector de elementos CSS."),(0,l.kt)("p",null,"Especifique el tipo de objeto, luego entre llaves, declare el estilo o los estilos a aplicar."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"El tipo objeto corresponde a la propiedad JSON ",(0,l.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R6/FormObjects/propertiesObject#type"}),"tipo")," de los objetos formulario.")),(0,l.kt)("p",null,"En el siguiente ejemplo, todos los objetos del tipo ",(0,l.kt)("em",{parentName:"p"},"bot\xf3n")," mostrar\xe1n el texto en la fuente Helvetica Neue, con un tama\xf1o de 20 p\xedxeles:"),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),"button {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n")),(0,l.kt)("p",null,'Para aplicar el mismo estilo a varios tipos de objetos, especifique los tipos de objetos separados por un "," y luego, entre llaves, declare el o los estilos a aplicar:'),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),"text, input {\n  text-align: left;\n  stroke: grey;\n}\n")),(0,l.kt)("h3",o({},{id:"nombre-del-objeto"}),"Nombre del objeto"),(0,l.kt)("p",null,"El nombre del objeto corresponde al ",(0,l.kt)("strong",{parentName:"p"},"selector de ID")," CSS y define un objeto espec\xedfico al que hay que dar estilo, ya que el nombre del objeto es \xfanico dentro del formulario."),(0,l.kt)("p",null,'Designe el objeto con un car\xe1cter "#" antes del nombre del objeto y, a continuaci\xf3n, entre llaves, declare el o los estilos a aplicar.'),(0,l.kt)("p",null,'En el siguiente ejemplo, el texto del objeto con el nombre "okButton" se mostrar\xe1 en fuente Helvetica Neue, con un tama\xf1o de 20 p\xedxeles:'),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),"#okButton {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n")),(0,l.kt)("h3",o({},{id:"class"}),"Class"),(0,l.kt)("p",null,"Class corresponde al ",(0,l.kt)("strong",{parentName:"p"},"selector class")," CSS y define el estilo para todos los objetos formulario con el atributo ",(0,l.kt)("inlineCode",{parentName:"p"},"class"),"."),(0,l.kt)("p",null,'Puede especificar las clases a utilizar con un caracter "." seguido del nombre de la clase, y entre llaves, declarar el o los estilos a aplicar.'),(0,l.kt)("p",null,"En el siguiente ejemplo, el texto de todos los objetos con el nombre de la clase ",(0,l.kt)("inlineCode",{parentName:"p"},"okButtons")," se mostrar\xe1 en la fuente Helvetica Neue, con un tama\xf1o de 20 p\xedxeles, alineado al centro:"),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),".okButtons {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n    text-align: center;\n}\n")),(0,l.kt)("p",null,'Para indicar que un estilo debe aplicarse s\xf3lo a los objetos de un tipo determinado, especifique el tipo seguido de "." y el nombre de la clase, y luego, entre llaves, declare el estilo o los estilos a aplicar.'),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),"text.center {\n  text-align: center;\n  stroke: red;\n}\n")),(0,l.kt)("p",null,"En la descripci\xf3n del formulario 4D, se asocia un nombre de clase a un objeto mediante el atributo ",(0,l.kt)("inlineCode",{parentName:"p"},"class"),". Este atributo contiene uno o varios nombres de clase, separados por un espacio:"),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),'class: "okButtons important"       \n')),(0,l.kt)("h3",o({},{id:"todos-los-objetos"}),"Todos los objetos"),(0,l.kt)("p",null,"En correspondencia con el selector CSS ",(0,l.kt)("strong",{parentName:"p"},"universal"),', el car\xe1cter "*" indica que el siguiente estilo se aplicar\xe1 a todos los objetos del formulario.'),(0,l.kt)("p",null,'Indique que un estilo debe aplicarse a todos los objetos formulario con el car\xe1cter "*" y, a continuaci\xf3n, entre llaves, declare el o los estilos que deben aplicarse.'),(0,l.kt)("p",null,"En el siguiente ejemplo, todos los objetos tendr\xe1n un fondo gris:"),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),"* {\n  fill: gray;\n}\n")),(0,l.kt)("h3",o({},{id:"atributos-espec\xedficos"}),"Atributos espec\xedficos"),(0,l.kt)("p",null,"Los estilos correspondientes a los ",(0,l.kt)("strong",{parentName:"p"},"selectores de atributos")," CSS se pueden aplicar a todos los objetos formulario con un atributo espec\xedfico."),(0,l.kt)("p",null,"Especifique el atributo entre corchetes y, a continuaci\xf3n, entre llaves, declare el estilo o los estilos a aplicar."),(0,l.kt)("h4",o({},{id:"sintaxis-soportadas"}),"Sintaxis soportadas"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:null}),"Sintaxis"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"[attribute]"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"coincide con objetos con el ",(0,l.kt)("inlineCode",{parentName:"td"},"attribute"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),'[attribute="value"]'),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"coincide con objetos cuyo valor del ",(0,l.kt)("inlineCode",{parentName:"td"},"attribute"),' contenga exactamente el "valor" especificado')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),'[attribute~="value"]'),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"coincide con los objetos con el valor del ",(0,l.kt)("inlineCode",{parentName:"td"},"attribute"),' que contiene el "valor" entre una lista de palabras separadas por espacios')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"[attribute","|",'="value"]'),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"coincide con objetos con un ",(0,l.kt)("inlineCode",{parentName:"td"},"attribute"),' cuyo valor empieza por "valor"')))),(0,l.kt)("h4",o({},{id:"ejemplos"}),"Ejemplos"),(0,l.kt)("p",null,"Todos los objetos con el atributo ",(0,l.kt)("inlineCode",{parentName:"p"},"borderStyle")," tendr\xe1n l\xedneas moradas:"),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),"[borderStyle]\n{\n     stroke: purple;\n}\n")),(0,l.kt)("p",null,'Todos los objetos de tipo texto con un atributo texto cuyo valor sea "Hello" tendr\xe1n letras azules:'),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),"text[text=Hello]\n{\n     stroke: blue;\n}\n")),(0,l.kt)("p",null,'Todos los objetos con un atributo texto cuyo valor sea "Hello" tendr\xe1n letras azules:'),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),"[text~=Hello]\n{\n     stroke: blue;\n}\n\n")),(0,l.kt)("p",null,'Todos los objetos de tipo texto con un atributo texto cuyo valor comience por "Hello" tendr\xe1n letras azules:'),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),"text[text|=Hello]\n{\n     stroke: yellow;\n\n\n}\n")),(0,l.kt)("h2",o({},{id:"declaraciones-de-hojas-de-estilo"}),"Declaraciones de hojas de estilo"),(0,l.kt)("h3",o({},{id:"media-queries"}),"Media Queries"),(0,l.kt)("p",null,"Media queries are used to apply color schemes to an application."),(0,l.kt)("p",null,"A media query is composed of a media feature and a value (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"\\&#060;media feature&#062;:\\&#060;value&#062;")," )."),(0,l.kt)("p",null,"Available media features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prefers-color-scheme"))),(0,l.kt)("p",null,"Available media feature expressions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"light"),(0,l.kt)("br",null),"Para utilizar un esquema de luz"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"oscuro"),(0,l.kt)("br",null),"Para utilizar un esquema oscuro")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Los esquemas de color s\xf3lo son soportados en macOS.")),(0,l.kt)("h5",o({},{id:"ejemplo"}),"Ejemplo"),(0,l.kt)("p",null,"Este CSS define una combinaci\xf3n de colores para el texto y el fondo del texto en el esquema claro (por defecto) y otra combinaci\xf3n cuando se selecciona el esquema oscuro:"),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),"@media (prefers-color-scheme: light) {\n .textScheme {\n   fill: LightGrey;\n   stroke: Black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .textScheme {\n    fill: DarkSlateGray;\n    stroke: LightGrey;\n  }\n}\n")),(0,l.kt)("h3",o({},{id:"atributos-de-objetos"}),"Atributos de objetos"),(0,l.kt)("p",null,"La mayor\xeda de los atributos del objeto formulario pueden ser definidos dentro de una hoja de estilo, excepto los siguientes atributos:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"method")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"class")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"evento")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"choiceList"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"excludedList"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"labels"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"list"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"requiredList")," (tipo de lista)")),(0,l.kt)("p",null,"Los atributos del objeto formulario pueden declararse con su ",(0,l.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R6/FormObjects/propertiesReference"}),"nombre JSON")," como atributos CSS (sin incluir los tipos de objetos, m\xe9todos, eventos y listas)."),(0,l.kt)("h4",o({},{id:"mapa-de-atributos"}),"Mapa de atributos"),(0,l.kt)("p",null,"Los atributos listados a continuaci\xf3n pueden aceptar el nombre 4D o el nombre CSS."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:null}),"4D"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"CSS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"borderStyle")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"border-style"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"fill")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"background-color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"fontFamily")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"font-family"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"fontSize")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"font-size"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"fontStyle")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"font-style"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"fontWeight")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"font-weight"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"stroke")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"textAlign")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"text-align"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"textDecoration")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"text-decoration"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"verticalAlign")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"vertical-align"))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Los valores espec\xedficos 4D (",(0,l.kt)("em",{parentName:"p"},"por ejemplo"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"hundido"),") no se soportan cuando se utilizan nombres de atributos CSS.")),(0,l.kt)("h4",o({},{id:"valores-de-atributos-espec\xedficos"}),"Valores de atributos espec\xedficos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Para los atributos ",(0,l.kt)("inlineCode",{parentName:"li"},"icon"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"picture")," y ",(0,l.kt)("inlineCode",{parentName:"li"},"customBackgroundPicture")," que soportan una ruta a una imagen, la sintaxis es:")),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{}),'icon: url("/RESOURCES/Images/Buttons/edit.png"); /* ruta absoluta */\nicon: url("edit.png"); /* ruta relativa al archivo del formulario */\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Para ",(0,l.kt)("inlineCode",{parentName:"p"},"fill"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stroke")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"alternateFill")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"horizontalLineStroke")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"verticalLineStroke"),", se soportan tres sintaxis:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Nombre del color CSS: ",(0,l.kt)("inlineCode",{parentName:"li"},"fill: red;")),(0,l.kt)("li",{parentName:"ul"},"Valor hexad\xe9cimal: ",(0,l.kt)("inlineCode",{parentName:"li"},"fill: #FF0000;")),(0,l.kt)("li",{parentName:"ul"},"funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"li"},"rgb()"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"fill:rgb(255,0,0)")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Si una cadena utiliza caracteres prohibidos en CSS, puede rodear la cadena con comillas simples o dobles. Por ejemplo:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"una referencia xliff: ",(0,l.kt)("inlineCode",{parentName:"li"},'tooltip: ":xliff:CommonMenuFile";')),(0,l.kt)("li",{parentName:"ul"},"un datasource con la expresi\xf3n de campo: ",(0,l.kt)("inlineCode",{parentName:"li"},'dataSource: "[Table_1:1]ID:1";'))))),(0,l.kt)("h2",o({},{id:"orden-de-prioridad"}),"Orden de prioridad"),(0,l.kt)("p",null,"Los proyectos 4D priorizan las definiciones de estilo en conflicto, primero por la definici\xf3n del formulario y luego por las hojas de estilo."),(0,l.kt)("h3",o({},{id:"json-vs-hoja-de-estilo"}),"JSON vs Hoja de estilo"),(0,l.kt)("p",null,"Si un atributo est\xe1 definido en la descripci\xf3n del formulario JSON y en una hoja de estilo, 4D utilizar\xe1 el valor del archivo JSON."),(0,l.kt)("p",null,"Para anular este comportamiento, el valor del estilo debe ir seguido de una declaraci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"!important"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Ejemplo 1:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:null}),"Descripci\xf3n del formulario JSON"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"Hoja de estilo"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"4D muestra"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},'"text": "Button",')),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"text: Edit;")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},'"Button"'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Ejemplo 2:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:null}),"Descripci\xf3n del formulario JSON"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"Hoja de estilo"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"4D muestra"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},'"text": "Button",')),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"text: Edit !important;")),(0,l.kt)("td",o({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},'"Edit"'))))),(0,l.kt)("h3",o({},{id:"hojas-de-estilo-m\xfaltiples"}),"Hojas de estilo m\xfaltiples"),(0,l.kt)("p",null,"Durante la ejecuci\xf3n, 4D prioriza autom\xe1ticamente las hojas de estilo en el siguiente orden:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"El formulario 4D cargar\xe1 primero el archivo CSS por defecto ",(0,l.kt)("inlineCode",{parentName:"li"},"/SOURCES/styleSheets.css"),"."),(0,l.kt)("li",{parentName:"ol"},"Luego cargar\xe1 el archivo CSS para la plataforma actual ",(0,l.kt)("inlineCode",{parentName:"li"},"/SOURCES/styleSheets_mac.css")," o ",(0,l.kt)("inlineCode",{parentName:"li"},"/SOURCES/styleSheets_windows.css"),"."),(0,l.kt)("li",{parentName:"ol"},"Si existe, entonces cargar\xe1 un archivo CSS espec\xedfico definido en el formulario JSON:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"un archivo para ambas plataformas:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",o({parentName:"pre"},{}),'"css": "<path>" \n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"o una lista de archivos para ambas plataformas:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",o({parentName:"pre"},{}),'"css": [\n     "<path1>",\n     "<path2>" \n      ],\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"o una lista de archivos por plataforma:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",o({parentName:"pre"},{}),' "css": [\n        {"path": "<path>", "media": "mac"},\n        {"path": "<path>", "media": "windows"},\n    ],\n')))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Las rutas de los archivos pueden ser relativas o absolutas."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Las rutas relativas se resuelven en relaci\xf3n con el archivo de descripci\xf3n del formulario JSON."),(0,l.kt)("li",{parentName:"ul"},"Por razones de seguridad, s\xf3lo se aceptan las rutas del sistema de archivos para las rutas absolutas. (",(0,l.kt)("em",{parentName:"li"},"e.g."),', "/RESOURCES", "/DATA")'))),(0,l.kt)("h2",o({},{id:"ver-tambi\xe9n"}),"Ver tambi\xe9n"),(0,l.kt)("p",null,"Ver la presentaci\xf3n en video ",(0,l.kt)("a",o({parentName:"p"},{href:"https://www.youtube.com/watch?v=3Hk4FUQENyQ"}),(0,l.kt)("strong",{parentName:"a"},"CSS for 4D Forms")),"."))}c.isMDXComponent=!0},84295:(e,t,a)=>{a.d(t,{Z:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAXCAIAAABVmPyEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEFSURBVGhD7ZbBDYMwDEXZiW0ySW+swipM0XMnoTF17IBDpVYYI/SffIjj30MfFm03AzdIbvd4olwKch1L5L7AcUCuI5DrSKzcaeg7ph8mvrwPcXIXsWnkLreDnH9gTBd+LFFySa2a/R/Itey6JVkplZ3W1waH85ihC+14bvKxxMltLxz5KpNqK8e0jsuoynzLxxAnt71clSBdw4VPPM8ZI7eZDyVI7q7djax1RG/yqSn3AkYrouTyDqoM/rdQyVoS0hAyJI9Grs2Lbns4hTi5GfqqBbZSy1oHyEnp6TdPP0B8jG3yotIeTiFU7t2BXEcg1xHIdWQrF3V8Qa5jZbnACch1Y57fiJdV2WNWgUcAAAAASUVORK5CYII="},63659:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/stylesheets-566a8cb29cc275a6544f20ce64e0118e.png"}}]);