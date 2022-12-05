"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32688],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function t(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,n,o=function(e,r){if(null==e)return{};var a,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var a=e.components,o=e.mdxType,t=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||t;return a?n.createElement(g,i(i({ref:r},c),{},{components:a})):n.createElement(g,i({ref:r},c))}));function m(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=a.length,i=new Array(t);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<t;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},97876:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function t(e,r){if(null==e)return{};var a,n,o=function(e,r){if(null==e)return{};var a,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const i={id:"basics",title:"B\xe1sicos"},l=void 0,s={unversionedId:"Debugging/basics",id:"version-19-R6/Debugging/basics",title:"B\xe1sicos",description:"Los errores son comunes. Ser\xeda inusual escribir un n\xfamero importante de l\xedneas de c\xf3digo sin generar errores. Por el contrario, tratar y/o corregir errores tambi\xe9n es normal.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/Debugging/basics.md",sourceDirName:"Debugging",slug:"/Debugging/basics",permalink:"/docs/es/19-R6/Debugging/basics",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R6/Debugging/basics.md",tags:[],version:"19-R6",frontMatter:{id:"basics",title:"B\xe1sicos"},sidebar:"docs",previous:{title:"Etiquetas de transformaci\xf3n",permalink:"/docs/es/19-R6/Tags/tags"},next:{title:"Debugger",permalink:"/docs/es/19-R6/Debugging/debugger"}},d={},c=[{value:"Tipos de error",id:"tipos-de-error",level:2},{value:"Errores de digitaci\xf3n",id:"errores-de-digitaci\xf3n",level:3},{value:"Errores de sintaxis",id:"errores-de-sintaxis",level:3},{value:"Errores del entorno",id:"errores-del-entorno",level:3},{value:"Errores de dise\xf1o o de l\xf3gica",id:"errores-de-dise\xf1o-o-de-l\xf3gica",level:3},{value:"Errores de ejecuci\xf3n",id:"errores-de-ejecuci\xf3n",level:3},{value:"Ventana de error de sintaxis",id:"ventana-de-error-de-sintaxis",level:2},{value:"Debugger",id:"debugger",level:2},{value:"Rupturas",id:"rupturas",level:2}],u={toc:c};function p(e){var{components:r}=e,i=t(e,["components"]);return(0,n.kt)("wrapper",o({},u,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Los errores son comunes. Ser\xeda inusual escribir un n\xfamero importante de l\xedneas de c\xf3digo sin generar errores. Por el contrario, tratar y/o corregir errores tambi\xe9n es normal."),(0,n.kt)("p",null,"El entorno de desarrollo 4D ofrece varias herramientas de depuraci\xf3n para todo tipo de errores."),(0,n.kt)("h2",o({},{id:"tipos-de-error"}),"Tipos de error"),(0,n.kt)("h3",o({},{id:"errores-de-digitaci\xf3n"}),"Errores de digitaci\xf3n"),(0,n.kt)("p",null,"Los errores de escritura son detectados por el Editor de c\xf3digo. Se muestran en rojo y se ofrece informaci\xf3n adicional en la parte inferior de la ventana. He aqu\xed un error de escritura:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"punto de ruptura",src:a(349).Z,width:"1824",height:"980"})),(0,n.kt)("p",null,"Estos errores de escritura suelen causar errores de sintaxis (en la imagen anterior, el nombre de la tabla es desconocido). Se obtiene la descripci\xf3n del error cuando se valida la l\xednea de c\xf3digo. Cuando esto ocurre, corrija el error de digitaci\xf3n y escriba Enter para validar la soluci\xf3n."),(0,n.kt)("h3",o({},{id:"errores-de-sintaxis"}),"Errores de sintaxis"),(0,n.kt)("p",null,"Algunos errores s\xf3lo se pueden capturar cuando se ejecuta el m\xe9todo. La ",(0,n.kt)("a",o({parentName:"p"},{href:"#syntax-error-window"}),"ventana de error de sint\xe1xis")," aparece cuando ocurre un error durante la ejecuci\xf3n del c\xf3digo. Por ejemplo:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"syntax-error",src:a(59278).Z,width:"642",height:"552"})),(0,n.kt)("p",null,"Expanda el \xe1rea ",(0,n.kt)("strong",{parentName:"p"},"Detalles")," para mostrar el \xfaltimo error y su n\xfamero."),(0,n.kt)("h3",o({},{id:"errores-del-entorno"}),"Errores del entorno"),(0,n.kt)("p",null,"Ocasionalmente, puede que no haya suficiente memoria para crear un BLOB. O, cuando acceda a un documento en el disco, el documento puede no existir o ya estar abierto por otra aplicaci\xf3n. Estos errores en el entorno no se producen directamente por su c\xf3digo o por la forma en que lo escribe. La mayor\xeda de las veces estos errores son f\xe1ciles de tratar con un ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R6/Concepts/error-handling"}),"m\xe9todo de captura de errores")," instalado utilizando el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL"),"."),(0,n.kt)("h3",o({},{id:"errores-de-dise\xf1o-o-de-l\xf3gica"}),"Errores de dise\xf1o o de l\xf3gica"),(0,n.kt)("p",null,'Estos son generalmente los tipos de errores m\xe1s dif\xedciles de encontrar. A excepci\xf3n de los errores de digitaci\xf3n, todos los tipos de errores listados arriba est\xe1n cubiertos hasta cierto punto por la expresi\xf3n "error de dise\xf1o o de l\xf3gica". Utilice el ',(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R6/Debugging/debugger"}),"depurador ")," para detectarlos. Por ejemplo:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Puede ocurrir un ",(0,n.kt)("em",{parentName:"li"},"error de sintaxis")," cuando intenta utilizar una variable que a\xfan no est\xe1 inicializada."),(0,n.kt)("li",{parentName:"ul"},"Puede ocurrir un ",(0,n.kt)("em",{parentName:"li"},"error de entorno")," cuando intenta abrir un documento, porque el nombre de ese documento es recibido por una subrutina que no obtuvo el valor correcto como par\xe1metro.")),(0,n.kt)("p",null,"Los errores de dise\xf1o o de l\xf3gica tambi\xe9n incluyen situaciones como:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Un registro no est\xe1 correctamente actualizado porque, mientras se llama a ",(0,n.kt)("inlineCode",{parentName:"li"},"SAVE RECORD"),", se olvid\xf3 de la primera prueba de si el registro estaba bloqueado o no."),(0,n.kt)("li",{parentName:"ul"},"Un m\xe9todo no hace exactamente lo que espera, ya que la presencia de un par\xe1metro opcional no est\xe1 probada.")),(0,n.kt)("p",null,"A veces el c\xf3digo que muestra el error puede ser diferente al c\xf3digo que en realidad es el origen del problema."),(0,n.kt)("h3",o({},{id:"errores-de-ejecuci\xf3n"}),"Errores de ejecuci\xf3n"),(0,n.kt)("p",null,"En modo Aplicaci\xf3n, puede obtener errores que no ve en modo interpretado. Aqu\xed un ejemplo:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"runtime-error",src:a(39969).Z,width:"662",height:"472"})),(0,n.kt)("p",null,"Para encontrar r\xe1pidamente el origen del problema, vuelva a abrir la versi\xf3n interpretada del archivo de estructura, abra el m\xe9todo y vaya a la l\xednea correspondiente."),(0,n.kt)("h2",o({},{id:"ventana-de-error-de-sintaxis"}),"Ventana de error de sintaxis"),(0,n.kt)("p",null,"La ventana de error de sintaxis aparece autom\xe1ticamente cuando se interrumpe la ejecuci\xf3n de un m\xe9todo. Esto puede ocurrir cuando:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"un error impide que el c\xf3digo siga ejecut\xe1ndose"),(0,n.kt)("li",{parentName:"ul"},"el m\xe9todo produce una afirmaci\xf3n falsa (ver el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"ASSERT"),")")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"syntax-error",src:a(59278).Z,width:"642",height:"552"})),(0,n.kt)("p",null,'El \xe1rea de texto superior muestra un mensaje describiendo el error. El \xe1rea de texto inferior muestra la l\xednea que se estaba ejecutando cuando ocurri\xf3 el error; el \xe1rea donde ocurri\xf3 el error se resalta. La secci\xf3n Detalles extendida contiene la "pila" de errores relacionados con el proceso.'),(0,n.kt)("p",null,"La ventana de error de sintaxis propone varias opciones:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Modificar"),": detiene la ejecuci\xf3n de todos los m\xe9todos. 4D cambia al entorno de Dise\xf1o y el m\xe9todo con el error se abre en el editor de C\xf3digo, permiti\xe9ndole corregirlo. Utilice esta opci\xf3n cuando reconozca inmediatamente el error y pueda arreglarlo sin m\xe1s investigaci\xf3n.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rastrear"),": entra en modo Rastrear/Depurador. Se muestra la ventana del ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R6/Debugging/debugger"}),"Depurador"),". Si la l\xednea actual solo se ha ejecutado parcialmente, es posible que tenga que hacer clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"rastrear")," varias veces.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Continuar"),": la ejecuci\xf3n continua. La l\xednea con el error puede ser parcialmente ejecutada, dependiendo de donde se encuentre el error. Contin\xfae con precauci\xf3n: el error puede impedir que el resto de su m\xe9todo se ejecute correctamente. Recomendamos hacer clic en ",(0,n.kt)("strong",{parentName:"p"},"Continuar")," s\xf3lo si el error est\xe1 en una llamada trivial (como ",(0,n.kt)("inlineCode",{parentName:"p"},"SET WINDOW TITLE"),") que no impide ejecutar y probar el resto de su c\xf3digo."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Consejo: para ignorar un error que ocurre repetidamente (por ejemplo, en bucles), puede convertir el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Continuar")," en un bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Ignorar"),". Mantenga presionada la tecla ",(0,n.kt)("strong",{parentName:"p"},"Alt")," (Windows) u ",(0,n.kt)("strong",{parentName:"p"},"Opci\xf3n")," (macOS) y haga clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Continuar")," la primera vez que aparece. La etiqueta del bot\xf3n cambia a ",(0,n.kt)("strong",{parentName:"p"},"Ignorar")," si el di\xe1logo es llamado de nuevo por el mismo error.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Abandonar"),": detiene la ejecuci\xf3n del m\xe9todo y devuelve al estado antes del inicio de la ejecuci\xf3n del m\xe9todo:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Si un m\xe9todo formulario o m\xe9todo objeto se est\xe1 ejecutando en respuesta a un evento, se detiene y se vuelve al formulario."),(0,n.kt)("li",{parentName:"ul"},"Si el m\xe9todo se est\xe1 ejecutando desde dentro del entorno de la aplicaci\xf3n, volver\xe1 a ese entorno."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Copiar"),": copia la informaci\xf3n de depuraci\xf3n en el portapapeles. La informaci\xf3n describe el entorno interno del error (n\xfamero, componente interno, etc.). Est\xe1 formateado como texto tabulado.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Guardar..."),": guarda el contenido de la ventana de error de sintaxis y la cadena de llamadas en un archivo ",(0,n.kt)("inlineCode",{parentName:"p"},".txt"),"."))),(0,n.kt)("h2",o({},{id:"debugger"}),"Debugger"),(0,n.kt)("p",null,"Un error com\xfan de los principiantes al tratar con la detecci\xf3n de errores es hacer clic en ",(0,n.kt)("strong",{parentName:"p"},"Abandonar")," en la ventana de error de sintaxis, volver al editor de c\xf3digo, y tratar de averiguar lo que est\xe1 pasando mirando el c\xf3digo. \xa1No lo haga! Ahorrar\xe1 mucho tiempo y energ\xeda utilizando siempre el ",(0,n.kt)("strong",{parentName:"p"},"Depurador"),"."),(0,n.kt)("p",null,"El depurador le permite pasar lentamente por los m\xe9todos. Muestra toda la informaci\xf3n que necesita para entender por qu\xe9 ha ocurrido un error. Una vez que tiene esta informaci\xf3n, usted sabe c\xf3mo arreglar el error."),(0,n.kt)("p",null,'Otra raz\xf3n para usar el Depurador es el desarrollo del c\xf3digo. A veces se puede escribir un algoritmo que es m\xe1s complejo de lo habitual. A pesar de todos los sentimientos de cumplimiento, no puede estar totalmente seguro de que su codificaci\xf3n sea 100% correcta. En lugar de ejecutarlo "ciego", puede utilizar el comando ',(0,n.kt)("inlineCode",{parentName:"p"},"TRACE")," al comienzo de su c\xf3digo, luego ejecutarlo paso a paso para mantener un ojo en lo que sucede."),(0,n.kt)("h2",o({},{id:"rupturas"}),"Rupturas"),(0,n.kt)("p",null,'En el proceso de depuraci\xf3n, puede que necesite saltar el seguimiento de algunas partes del c\xf3digo hasta una l\xednea determinada. O, puede querer rastrear el c\xf3digo cuando una expresi\xf3n dada tiene un determinado valor (e.. "$myVar > 1000"), o cada vez que se llama un comando 4D espec\xedfico.'),(0,n.kt)("p",null,"Estas necesidades est\xe1n cubiertas por ",(0,n.kt)("strong",{parentName:"p"},"puntos de interrupci\xf3n")," y las funciones de ",(0,n.kt)("strong",{parentName:"p"},"captura de comando"),". Pueden configurarse desde el editor de c\xf3digo, el depurador o el explorador de ejecuci\xf3n."))}p.isMDXComponent=!0},39969:(e,r,a)=>{a.d(r,{Z:()=>n});const n=a.p+"assets/images/runtimeError-80c1fe83365744c8fbc4724923d8182e.png"},59278:(e,r,a)=>{a.d(r,{Z:()=>n});const n=a.p+"assets/images/syntax-error-c4e0d1c422e1b516cbdfd695e96bde32.png"},349:(e,r,a)=>{a.d(r,{Z:()=>n});const n=a.p+"assets/images/typing-error-0347074dc677f0bc726a4aca19f3a787.png"}}]);