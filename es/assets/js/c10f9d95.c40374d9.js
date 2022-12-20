"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18223:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"database",title:"P\xe1gina Base de datos"},s=void 0,c={unversionedId:"settings/database",id:"version-19-R7/settings/database",title:"P\xe1gina Base de datos",description:"P\xe1gina Almacenamiento de datos",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/settings/database.md",sourceDirName:"settings",slug:"/settings/database",permalink:"/docs/es/settings/database",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/settings/database.md",tags:[],version:"19-R7",frontMatter:{id:"database",title:"P\xe1gina Base de datos"},sidebar:"docs",previous:{title:"P\xe1gina Compilador",permalink:"/docs/es/settings/compiler"},next:{title:"P\xe1gina de respaldo",permalink:"/docs/es/settings/backup"}},l={},d=[{value:"P\xe1gina Almacenamiento de datos",id:"p\xe1gina-almacenamiento-de-datos",level:2},{value:"Par\xe1metros generales",id:"par\xe1metros-generales",level:3},{value:"Autorizar el uso de archivos de datos de s\xf3lo lectura",id:"autorizar-el-uso-de-archivos-de-datos-de-s\xf3lo-lectura",level:4},{value:"Sobre el bloqueo de archivos",id:"sobre-el-bloqueo-de-archivos",level:4},{value:"Ubicaci\xf3n de carpeta temporal",id:"ubicaci\xf3n-de-carpeta-temporal",level:3},{value:"Comparaci\xf3n de texto",id:"comparaci\xf3n-de-texto",level:3},{value:"Soporte de Mecab (versi\xf3n japonesa)",id:"soporte-de-mecab-versi\xf3n-japonesa",level:4},{value:"P\xe1gina Memoria",id:"p\xe1gina-memoria",level:2},{value:"Par\xe1metros de la cach\xe9 para la base",id:"par\xe1metros-de-la-cach\xe9-para-la-base",level:3}],p={toc:d};function u(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",r({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",r({},{id:"p\xe1gina-almacenamiento-de-datos"}),"P\xe1gina Almacenamiento de datos"),(0,n.kt)("p",null,"Esta p\xe1gina permite configurar el almacenamiento de datos de la base 4D en el disco."),(0,n.kt)("h3",r({},{id:"par\xe1metros-generales"}),"Par\xe1metros generales"),(0,n.kt)("h4",r({},{id:"autorizar-el-uso-de-archivos-de-datos-de-s\xf3lo-lectura"}),"Autorizar el uso de archivos de datos de s\xf3lo lectura"),(0,n.kt)("p",null,"Esta opci\xf3n permite configurar el funcionamiento de la aplicaci\xf3n al abrir un archivo de datos bloqueado a nivel del sistema operativo. 4D incluye un mecanismo que impide autom\xe1ticamente la apertura de una base cuando su archivo de datos, o uno de sus segmentos est\xe1 bloqueado. En este caso, cuando se activa esta opci\xf3n de detecci\xf3n, 4D muestra un mensaje de advertencia y no abre la base:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(95803).Z,width:"493",height:"184"})),(0,n.kt)("p",null,"A menos que se marque esta opci\xf3n, no es posible abrir una base cuando su archivo de datos est\xe1 bloqueado (funcionamiento por defecto para las bases 4D)."),(0,n.kt)("h4",r({},{id:"sobre-el-bloqueo-de-archivos"}),"Sobre el bloqueo de archivos"),(0,n.kt)("p",null,"Los archivos bloqueados pueden ser le\xeddos pero su contenido no puede ser modificado. For example, files are locked when they are stored on a non-rewritable support (DVD type) or when they are copied from this type of support. 4D can work in a transparent manner with locked data files, which allows, more particularly, the use of projects stored on DVD. However, this operation runs the risk of inadvertent use of a locked data file in which modifications will not be saved. This is why by default 4D does not allow databases with a locked data file to be opened."),(0,n.kt)("h3",r({},{id:"ubicaci\xf3n-de-carpeta-temporal"}),"Ubicaci\xf3n de carpeta temporal"),(0,n.kt)("p",null,"This area lets you change the location of temporary files created while 4D is running. The temporary files folder is used by the application, when necessary, to temporarily save the data in memory to disk."),(0,n.kt)("p",null,'The current location of this folder is displayed in the "Current:" area. Puede hacer clic en esta \xe1rea para mostrar el nombre de la ruta en forma de lista desplegable:'),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(98402).Z,width:"774",height:"101"})),(0,n.kt)("p",null,"Se ofrecen tres opciones de ubicaci\xf3n:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"System"),": When this option is selected, the 4D temporary files are created in a folder placed at the location specified by Windows and/or macOS. You can find out the current location defined by your system using the ",(0,n.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page486.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Temporary folder"))," 4D command. The files are put into a subfolder whose name consists of the database name and a unique identifier."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Data File Folder"),' (default option): When this option is selected, the 4D temporary files are created in a folder named "temporary files" located at the same level as the data file of the database.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User Defined"),": This option is used to set a custom location. If the location option is modified, it will be necessary to restart the database in order for the new option to be taken into account. 4D verifica si se puede acceder a la carpeta seleccionada mediante escritura. If this is not the case, the application tries other options until a valid folder is found.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'This option is stored in the "extra properties" of the structure that is available when the structure definition is exported in XML (see ',(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Exporting-and-importing-structure-definitions.300-5416829.en.html"}),"Exporting and importing structure definitions"),").")),(0,n.kt)("h3",r({},{id:"comparaci\xf3n-de-texto"}),"Comparaci\xf3n de texto"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you change one of these options, you have to quit and reopen the database to make the change effective. Once the database is reopened, all of the database's indexes are automatically re-indexed.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Consider @ as a wildcard only when at the beginning or end of text patterns"),': Allows you to set how the at sign "@" will be interpreted when used in a query or a character string comparison, when it is located in a word. When this option is not checked (default value), the at sign is used as the wildcard character, in other words, it replaces any character (see ',(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Query-editor.300-5416813.en.html#463876"}),"Wildcard character (@)"),")."),(0,n.kt)("p",{parentName:"li"},"When the option is checked, the at sign is regarded as a simple character if it is located within a word. This setting is especially useful when searching for E-mail addresses, where the @ sign is used internally. This option has an influence on searches, sorts, string comparisons, as well as on data stored in tables and data found in memory, like arrays. Fields and variables of the alpha (indexed or not) and text type are concerned by how the @ character is interpreted in searches and sorts."),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("strong",{parentName:"p"},"Notas:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'For searches, if the search criteria begins or ends with @, the "@" character will be treated as a wildcard. Only if the "@" character is placed in the middle of a word (for example: ',(0,n.kt)("a",r({parentName:"li"},{href:"mailto:bill@cgi.com"}),"bill@cgi.com"),") does 4D treat it differently."),(0,n.kt)("li",{parentName:"ul"},"This option can also have an influence on the behavior of the commands in the ",(0,n.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Objects-Forms.201-5391558.en.html"}),"Objects (Forms)"),' theme that accept the wildcard character ("@") in the object parameter.'),(0,n.kt)("li",{parentName:"ul"},"For security reasons, only the Administrator or Designer of the database can modify this parameter."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Current data language:")," Used to configure the language used for character string processing and comparison. La elecci\xf3n de un idioma de comparaci\xf3n afecta a la ordenaci\xf3n y la b\xfasqueda de textos, as\xed como al cambio entre min\xfasculas y may\xfasculas, pero no afecta a la traducci\xf3n de etiquetas ni a los formatos de fecha, hora o moneda, que permanecen en el idioma del sistema. Por defecto, 4D utiliza el lenguaje del sistema."),(0,n.kt)("p",{parentName:"li"},"A 4D project can thus operate in a language different from that of the system. When a project is opened, the 4D engine detects the language used by the data file and provides it to the language (interpreter or compiled mode). Text comparisons, regardless of whether they are carried out by the project engine or the language, are done in the same language."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"You can modify this setting in the application Preferences (see ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Preferences/general"}),"General Page"),"). En este caso, la configuraci\xf3n se aplica a todas las nuevas bases creadas por 4D."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Consider only non-alphanumeric chars for keywords"),": Modifies the algorithm used by 4D to identify keyword separators and hence build their indexes. By default, when this option is not checked, 4D uses a sophisticated algorithm that takes linguistic characteristics into account."),(0,n.kt)("p",{parentName:"li"},"This algorithm is similar to the one used by word-processing software to determine the boundaries when selecting a word that is double-clicked. For more information about this algorithm, refer to the following address: ",(0,n.kt)("inlineCode",{parentName:"p"},"http://userguide.icu-project.org/boundaryanalysis"),"."),(0,n.kt)("p",{parentName:"li"},"Cuando esta opci\xf3n est\xe1 marcada, 4D utiliza un algoritmo simplificado. In this configuration, any non-alphanumeric character (i.e., not a letter or a number) is considered as a keyword separator. This setting meets specific requirements associated with certain languages such as Japanese.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Sorting order appropriate for searching"),': This option is only displayed when the Japanese language is selected. Modifies the interpretation of characters such as the "Katakana-Hiragana Prolonged Sound Mark" or "\u9577\u97f3\u8a18\u53f7" or the "Japanese Iteration Marks" such as "\u309d" or "\u309e". Typical Japanese speaker is likely to prefer the results when the setting is enabled.'))),(0,n.kt)("h4",r({},{id:"soporte-de-mecab-versi\xf3n-japonesa"}),"Soporte de Mecab (versi\xf3n japonesa)"),(0,n.kt)("p",null,"On Japanese systems, 4D supports the ",(0,n.kt)("em",{parentName:"p"},"MeCab")," library, with a indexing algorithm for keywords that is particularly suited for the Japanese language."),(0,n.kt)("p",null,"Este algoritmo se utiliza por defecto en las versiones japonesas de 4D. If needed, you can disable the use of the ",(0,n.kt)("em",{parentName:"p"},"MeCab")," algorithm and use the conventional ",(0,n.kt)("em",{parentName:"p"},"ICU")," library."),(0,n.kt)("p",null,"To disable ",(0,n.kt)("em",{parentName:"p"},"MeCab"),", just check the ",(0,n.kt)("strong",{parentName:"p"},"Consider only non-alphanumeric chars for keywords")," option:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(45589).Z,width:"474",height:"78"})),(0,n.kt)("h2",r({},{id:"p\xe1gina-memoria"}),"P\xe1gina Memoria"),(0,n.kt)("p",null,"You use the settings on this tab to configure the cache memory for the database."),(0,n.kt)("h3",r({},{id:"par\xe1metros-de-la-cach\xe9-para-la-base"}),"Par\xe1metros de la cach\xe9 para la base"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Calculation of adaptive cache"),": When this option is checked, management of the memory cache is done dynamically by the system --- respecting limits that you set. This allows configuration of a high performance memory cache adapted to most configurations. The size of the memory cache is then calculated dynamically depending on set parameters. The values offered by default correspond to standard 4D usage."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Memory to be reserved for other applications and for the system"),": Portion of the RAM memory to reserve for the System and other applications. This value is increased for optimization when other applications are running on the same machine as 4D."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Percentage of available memory used for cache"),": Percentage of the remaining memory allocated to the cache by default.\\\nTo obtain the size allocated by default to the cache, simply perform the following calculation: (Physical memory -- Physical memory to be reserved) X Percentage of the memory used for the cache. In the adaptive mode, the size of the memory cache varies dynamically depending on the needs of the application and the system. Puede definir los l\xedmites utilizando las siguientes dos opciones:"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Minimum Size"),": Minimum amount of memory that must be reserved for the cache. Este valor no puede ser inferior a 100 MB."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Maximum Size"),": Maximum amount of memory that can be used by the cache. This value is virtually unlimited.\\",(0,n.kt)("br",{parentName:"li"}),"Setting limits is particularly useful for databases that are distributed on machines for which you do not know the memory configuration a priori. In this case, the limits set let you guarantee a minimum performance in all cases. El siguiente diagrama ilustra este comportamiento:")),(0,n.kt)("p",{parentName:"li"},"Example for calculating cache memory: ",(0,n.kt)("em",{parentName:"p"},"Physical memory to reserve = 256 MB Percentage of the available memory used for the cache = 50% Maximum size = 1 GB Minimum size = 128 MB")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(12446).Z,width:"1168",height:"348"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Calculation of adaptive cache not checked"),":  this mode, you set the size of the memory cache for the database yourself. 4D then displays an entry area that allows setting the memory cache to use as well as information related to the physical memory (RAM available on the machine), the current cache and cache after restart (taking your changes into account)."),(0,n.kt)("p",{parentName:"li"},"The size of the memory cache that you enter will be reserved for the 4D database, regardless of the state of machine resources. This setting can be used in certain specific configurations, or when the database is designed to be used on dissimilar systems in terms of memory. En la mayor\xeda de los casos, la cach\xe9 adaptativa ofrece un mejor rendimiento.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Escritura cach\xe9 cada... Segundos/Minutos"),": especifica el periodo de tiempo entre cada guardado autom\xe1tico de la cach\xe9 de datos, es decir, su escritura en el disco. 4D guarda los datos colocados en la cach\xe9 a intervalos regulares. Puede especificar todo intervalo de tiempo entre 1 segundo y 500 minutos. Por defecto, 4D guarda sus datos cada 20 segundos. The application also saves your data to disk each time you change to another environment or exit the application. You can also call the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page297.html"}),"FLUSH CACHE")," command to trigger the flush at any moment."),(0,n.kt)("p",{parentName:"li"},"When you anticipate heavy data entry, consider setting a short time interval between saves. In case of a power failure, you will only lose the data entered since the previous save (if the database is running without a log file)."),(0,n.kt)("p",{parentName:"li"},"If there is a noticeable slowing down of the database each time the cache is flushed, you need to adjust the frequency. Esta lentitud significa que se est\xe1 guardando una gran cantidad de registros. A shorter period between saves would therefore be more efficient since each save would involve fewer records and hence be faster."),(0,n.kt)("p",{parentName:"li"},"Por defecto, 4D muestra una peque\xf1a ventana cuando se vac\xeda la cach\xe9. If you do not want this visual reminder, you can uncheck the ",(0,n.kt)("strong",{parentName:"p"},"Flushing progress")," option on the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/settings/interface"}),"Interface page"),"."))))}u.isMDXComponent=!0},95803:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},12446:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/memory-maximum-size-2040a7588972184f9c94c68a29013ad9.png"},45589:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},98402:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);