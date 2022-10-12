"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(a),m=l,k=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(k,r(r({ref:t},u),{},{components:a})):n.createElement(k,r({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var o=2;o<i;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7840:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const r={id:"classFunctions",title:"Llamar a las funciones de clase ORDA"},s=void 0,d={unversionedId:"REST/classFunctions",id:"version-19/REST/classFunctions",title:"Llamar a las funciones de clase ORDA",description:"Puede llamar a funciones de clase de modelos de datos definidas para el modelo de datos ORDA a trav\xe9s de sus peticiones REST, para poder beneficiarse de la API expuesta de la aplicaci\xf3n 4D objetivo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/ClassFunctions.md",sourceDirName:"REST",slug:"/REST/classFunctions",permalink:"/docs/es/19/REST/classFunctions",draft:!1,tags:[],version:"19",frontMatter:{id:"classFunctions",title:"Llamar a las funciones de clase ORDA"},sidebar:"docs",previous:{title:"Manipulaci\xf3n de datos",permalink:"/docs/es/19/REST/manData"},next:{title:"Acerca de las peticiones REST",permalink:"/docs/es/19/REST/REST_requests"}},o={},u=[{value:"Llamadas de las funciones",id:"llamadas-de-las-funciones",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Par\xe1metro de valor escalar",id:"par\xe1metro-de-valor-escalar",level:3},{value:"Par\xe1metro de entidad",id:"par\xe1metro-de-entidad",level:3},{value:"Par\xe1metro de entidad asociado",id:"par\xe1metro-de-entidad-asociado",level:4},{value:"Par\xe1metro de selecci\xf3n de entidad",id:"par\xe1metro-de-selecci\xf3n-de-entidad",level:3},{value:"Ejemplos de peticiones",id:"ejemplos-de-peticiones",level:2},{value:"Utilizar una funci\xf3n de clase de datastore",id:"utilizar-una-funci\xf3n-de-clase-de-datastore",level:3},{value:"Result",id:"result",level:4},{value:"Utilizar una funci\xf3n de clase de dataclass",id:"utilizar-una-funci\xf3n-de-clase-de-dataclass",level:3},{value:"Result",id:"result-1",level:4},{value:"Utilizar una funci\xf3n de clase de una entidad",id:"utilizar-una-funci\xf3n-de-clase-de-una-entidad",level:3},{value:"Result",id:"result-2",level:4},{value:"Utilizar una funci\xf3n clase entitySelection",id:"utilizar-una-funci\xf3n-clase-entityselection",level:3},{value:"Result",id:"result-3",level:4},{value:"Utilizar una funci\xf3n de clase de selecci\xf3n de entidades y un conjunto de entidades",id:"utilizar-una-funci\xf3n-de-clase-de-selecci\xf3n-de-entidades-y-un-conjunto-de-entidades",level:3},{value:"Result",id:"result-4",level:4},{value:"Utilizar una funci\xf3n de clase de selecci\xf3n de entidades y unorderBy",id:"utilizar-una-funci\xf3n-de-clase-de-selecci\xf3n-de-entidades-y-unorderby",level:3},{value:"Result",id:"result-5",level:4},{value:"Utilizar una entidad que se crear\xe1 en el servidor",id:"utilizar-una-entidad-que-se-crear\xe1-en-el-servidor",level:3},{value:"Result",id:"result-6",level:4},{value:"Utilizar una entidad a actualizar en el servidor",id:"utilizar-una-entidad-a-actualizar-en-el-servidor",level:3},{value:"Result",id:"result-7",level:4},{value:"Crear una entidad con una entidad relacionada",id:"crear-una-entidad-con-una-entidad-relacionada",level:3},{value:"Result",id:"result-8",level:4},{value:"Actualizar una entidad con una entidad relacionada",id:"actualizar-una-entidad-con-una-entidad-relacionada",level:3},{value:"Result",id:"result-9",level:4},{value:"Recibir una selecci\xf3n de entidades como par\xe1metro",id:"recibir-una-selecci\xf3n-de-entidades-como-par\xe1metro",level:3},{value:"Result",id:"result-10",level:4},{value:"Utilizar una selecci\xf3n de entidades actualizada en el cliente",id:"utilizar-una-selecci\xf3n-de-entidades-actualizada-en-el-cliente",level:3}],c={toc:u};function p(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",l({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Puede llamar a ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19/ORDA/ordaClasses"}),"funciones de clase de modelos de datos")," definidas para el modelo de datos ORDA a trav\xe9s de sus peticiones REST, para poder beneficiarse de la API expuesta de la aplicaci\xf3n 4D objetivo."),(0,n.kt)("p",null,"Las funciones se llaman simplemente en peticiones POST en la interfaz ORDA apropiada, sin (). Por ejemplo, si ha definido una funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"getCity()")," en la dataclass City, podr\xeda llamarla utilizando la siguiente petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/City/getCity")),(0,n.kt)("p",null,"con los datos en el cuerpo de la petici\xf3n POST: ",(0,n.kt)("inlineCode",{parentName:"p"},'["Aguada"]')),(0,n.kt)("p",null,"En el lenguaje 4D, esta llamada equivale a:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'$city:=ds.City.getCity("Aguada")\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"S\xf3lo las funciones con la palabra clave ",(0,n.kt)("inlineCode",{parentName:"p"},"exposed")," pueden ser llamadas directamente desde las peticiones REST. Ver la secci\xf3n ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19/ORDA/ordaClasses#exposed-vs-non-exposed-functions"}),"Funciones expuestas vs. no expuestas"),".")),(0,n.kt)("h2",l({},{id:"llamadas-de-las-funciones"}),"Llamadas de las funciones"),(0,n.kt)("p",null,"Las funciones deben llamarse siempre utilizando peticiones ",(0,n.kt)("strong",{parentName:"p"},"POST")," (una petici\xf3n GET recibir\xe1 un error)."),(0,n.kt)("p",null,"Las funciones son llamadas en el objeto correspondiente en el almac\xe9n de datos del servidor."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Funci\xf3n de clase"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Sintaxis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/es/19/ORDA/ordaClasses#datastore-class"}),"datastore class")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/$catalog/DataStoreClassFunction"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/es/19/ORDA/ordaClasses#dataclass-class"}),"dataclass class")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/DataClassClassFunction"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/es/19/ORDA/ordaClasses#entityselection-class"}),"entitySelection class")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$filter"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$orderby"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/es/19/ORDA/ordaClasses#entity-class"}),"entity class")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}(key)/EntityClassFunction/"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"/rest/{dataClass}/Function")," can be used to call either a dataclass or an entity selection function (",(0,n.kt)("inlineCode",{parentName:"p"},"/rest/{dataClass}")," returns all entities of the DataClass as an entity selection). The function is searched in the entity selection class first. Si no se encuentra, se busca en la dataclass. En otras palabras, si una funci\xf3n con el mismo nombre se define tanto en la clase DataClass como en la clase EntitySelection, la funci\xf3n de clase de DataClass nunca se ejecutar\xe1.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Todo el c\xf3digo 4D llamado desde las peticiones REST ",(0,n.kt)("strong",{parentName:"p"},"debe ser hilo seguro")," si el proyecto se ejecuta en modo compilado, porque el Servidor REST siempre utiliza procesos apropiativos en este caso (el valor de la propiedad ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server"}),(0,n.kt)("em",{parentName:"a"},"Utilizar proceso apropiativo"))," es ignorado por el Servidor REST).")),(0,n.kt)("h2",l({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("p",null,"Puede enviar los par\xe1metros a las funciones definidas en las clases usuarios ORDA. Del lado del servidor, se recibir\xe1n en las funciones de clase en los par\xe1metros normales $1, $2, etc."),(0,n.kt)("p",null,"Se aplican las siguientes reglas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Los par\xe1metros deben pasarse en el ",(0,n.kt)("strong",{parentName:"li"},"cuerpo de la petici\xf3n POST")),(0,n.kt)("li",{parentName:"ul"},"Los par\xe1metros deben estar incluidos en una colecci\xf3n (formato JSON)"),(0,n.kt)("li",{parentName:"ul"},"Todos los tipos de datos escalares soportados en las colecciones JSON pueden ser pasados como par\xe1metros."),(0,n.kt)("li",{parentName:"ul"},"La selecci\xf3n de entidades y la entidad se pueden pasar como par\xe1metros. The JSON object must contain specific attributes used by the REST server to assign data to the corresponding ORDA objects: ",(0,n.kt)("strong",{parentName:"li"},"DATACLASS,"),"ENTITY, ",(0,n.kt)("strong",{parentName:"li"},"ENTITIES,"),"DATASET.")),(0,n.kt)("p",null,"Ver ",(0,n.kt)("a",l({parentName:"p"},{href:"#request-receiving-an-entity-as-parameter"}),"este ejemplo")," y ",(0,n.kt)("a",l({parentName:"p"},{href:"#request-receiving-an-entity-selection-as-parameter"}),"este ejemplo"),"."),(0,n.kt)("h3",l({},{id:"par\xe1metro-de-valor-escalar"}),"Par\xe1metro de valor escalar"),(0,n.kt)("p",null,"El(los) par\xe1metros deben estar simplemente incluirse en una colecci\xf3n definida en el cuerpo. For example, with a  dataclass function ",(0,n.kt)("inlineCode",{parentName:"p"},"getCities()")," receiving text parameters: ",(0,n.kt)("inlineCode",{parentName:"p"},"/rest/City/getCities")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Par\xe1metros en el cuerpo:")," ",'["Aguada","Paris"]'),(0,n.kt)("p",null,'Todos los tipos de datos JSON son soportados en los par\xe1metros, incluidos los punteros JSON. Las fechas se pueden pasar como cadenas en formato de fecha ISO 8601 (por ejemplo, "2020-08-22T22:00:000Z").'),(0,n.kt)("h3",l({},{id:"par\xe1metro-de-entidad"}),"Par\xe1metro de entidad"),(0,n.kt)("p",null,"Las entidades pasadas en los par\xe1metros son referenciadas en el servidor a trav\xe9s de su llave (",(0,n.kt)("em",{parentName:"p"},"es decir,")," propiedad __KEY). Si el par\xe1metro llave se omite en una petici\xf3n, una nueva entidad se carga en memoria del servidor. Tambi\xe9n puede pasar valores para todos los atributos de la entidad. Estos valores se utilizar\xe1n autom\xe1ticamente para la entidad manejada en el servidor."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si la petici\xf3n env\xeda los valores de atributo modificados para una entidad existente en el servidor, la funci\xf3n de modelo de datos ORDA llamada se ejecutar\xe1 autom\xe1ticamente en el servidor con los valores modificados. Esta funcionalidad le permite, por ejemplo, verificar el resultado de una operaci\xf3n en una entidad, tras aplicar todas las reglas de negocio, desde la aplicaci\xf3n cliente. A continuaci\xf3n, puede decidir guardar o no la entidad en el servidor.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Propiedades"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Atributos de la entidad"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"mixto"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Opcional - Valores a modificar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__DATACLASS"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Obligatorio - Indica la Dataclass de la entidad")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__ENTITY"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Obligatorio - True para indicar al servidor que el par\xe1metro es una entidad")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__KEY"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"mixto (mismo tipo que la llave primaria)"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Opcional - llave primaria de la entidad")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si no se proporciona __KEY, se crea una nueva entidad en el servidor con los atributos dados."),(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("strong",{parentName:"li"},"KEY is provided, the entity corresponding to"),"KEY is loaded on the server with the given attributes")),(0,n.kt)("p",null,"Ver los ejemplos de ",(0,n.kt)("a",l({parentName:"p"},{href:"#creating-an-entity"}),"creaci\xf3n")," o de ",(0,n.kt)("a",l({parentName:"p"},{href:"#updating-an-entity"}),"actualizaci\xf3n")," de las entidades."),(0,n.kt)("h4",l({},{id:"par\xe1metro-de-entidad-asociado"}),"Par\xe1metro de entidad asociado"),(0,n.kt)("p",null,"Las mismas propiedades que para un ",(0,n.kt)("a",l({parentName:"p"},{href:"#entity-parameter"}),"par\xe1metro de entidad"),". Adem\xe1s, la entidad relacionada debe existir y ser referenciada por __KEY, que contiene su llave primaria."),(0,n.kt)("p",null,"Ver los ejemplos para ",(0,n.kt)("a",l({parentName:"p"},{href:"#creating-an-entity-with-a-related-entity"}),"creaci\xf3n")," o ",(0,n.kt)("a",l({parentName:"p"},{href:"#updating-an-entity-with-a-related-entity"}),"actualizaci\xf3n")," de las entidades con las entidades relacionadas."),(0,n.kt)("h3",l({},{id:"par\xe1metro-de-selecci\xf3n-de-entidad"}),"Par\xe1metro de selecci\xf3n de entidad"),(0,n.kt)("p",null,"La selecci\xf3n de entidades debe haber sido definida previamente utilizando ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19/REST/method#methodentityset"}),"$method=entityset"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si la petici\xf3n env\xeda una selecci\xf3n de entidades modificada al servidor, la funci\xf3n del modelo de datos ORDA llamada se ejecutar\xe1 autom\xe1ticamente en el servidor con la selecci\xf3n de entidades modificada.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Propiedades"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Atributos de la entidad"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"mixto"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Opcional - Valores a modificar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__DATASET"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Obligatorio - entitySetID (UUID) de la selecci\xf3n de entidades")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__ENTITIES"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Obligatorio - True para indicar al servidor que el par\xe1metro es una selecci\xf3n de entidades")))),(0,n.kt)("p",null,"Ver ejemplo para ",(0,n.kt)("a",l({parentName:"p"},{href:"#receiving-an-entity-selection-as-parameter"}),"recibir una selecci\xf3n de entidades"),"."),(0,n.kt)("h2",l({},{id:"ejemplos-de-peticiones"}),"Ejemplos de peticiones"),(0,n.kt)("p",null,"Esta base de datos se expone como un almac\xe9n de datos remoto en localhost (puerto 8111):"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(34542).Z,width:"882",height:"599"})),(0,n.kt)("h3",l({},{id:"utilizar-una-funci\xf3n-de-clase-de-datastore"}),"Utilizar una funci\xf3n de clase de datastore"),(0,n.kt)("p",null,"La clase de ",(0,n.kt)("inlineCode",{parentName:"p"},"DataStore")," US_Cities ofrece una API:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'// DataStore class\n\nClass extends DataStoreImplementation\n\nexposed Function getName()\n    $0:="US cities and zip codes manager" \n')),(0,n.kt)("p",null,"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/$catalog/getName")),(0,n.kt)("h4",l({},{id:"result"}),"Result"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n"result": "US cities and zip codes manager" \n}\n')),(0,n.kt)("h3",l({},{id:"utilizar-una-funci\xf3n-de-clase-de-dataclass"}),"Utilizar una funci\xf3n de clase de dataclass"),(0,n.kt)("p",null,"La clase de Dataclass ",(0,n.kt)("inlineCode",{parentName:"p"},"City")," ofrece una PI que devuelve una entidad de ciudad a partir del nombre pasado en par\xe1metro:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'// City class\n\nClass extends DataClass\n\nexposed Function getCity()\n var $0 : cs.CityEntity\n var $1,$nameParam : text\n $nameParam:=$1\n $0:=This.query("name = :1";$nameParam).first()\n')),(0,n.kt)("p",null,"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/City/getCity")),(0,n.kt)("p",null,"Petici\xf3n: ",'["Aguada"]'),(0,n.kt)("h4",l({},{id:"result-1"}),"Result"),(0,n.kt)("p",null,"El resultado es una entidad:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "__entityModel": "City",\n    "__DATACLASS": "City",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",\n    "__STAMP": 1,\n    "ID": 1,\n    "name": "Aguada",\n    "countyFIPS": 72003,\n    "county": {\n        "__deferred": {\n            "uri": "/rest/County(72003)",\n            "__KEY": "72003" \n        }\n    },\n    "zips": {\n        "__deferred": {\n            "uri": "/rest/City(1)/zips?$expand=zips" \n        }\n    }\n}\n')),(0,n.kt)("h3",l({},{id:"utilizar-una-funci\xf3n-de-clase-de-una-entidad"}),"Utilizar una funci\xf3n de clase de una entidad"),(0,n.kt)("p",null,"La clase de entidad ",(0,n.kt)("inlineCode",{parentName:"p"},"CityEntity")," ofrece una API:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'// CityEntity class\n\nClass extends Entity\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n')),(0,n.kt)("p",null,"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/City(2)/getPopulation")),(0,n.kt)("h4",l({},{id:"result-2"}),"Result"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "result": 48814\n}\n')),(0,n.kt)("h3",l({},{id:"utilizar-una-funci\xf3n-clase-entityselection"}),"Utilizar una funci\xf3n clase entitySelection"),(0,n.kt)("p",null,"La clase de selecci\xf3n de entidad ",(0,n.kt)("inlineCode",{parentName:"p"},"CityEntity")," ofrece una API:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'// CitySelection class\n\nClass extends EntitySelection\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n')),(0,n.kt)("p",null,"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},'127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"')),(0,n.kt)("h4",l({},{id:"result-3"}),"Result"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "result": 87256\n}\n')),(0,n.kt)("h3",l({},{id:"utilizar-una-funci\xf3n-de-clase-de-selecci\xf3n-de-entidades-y-un-conjunto-de-entidades"}),"Utilizar una funci\xf3n de clase de selecci\xf3n de entidades y un conjunto de entidades"),(0,n.kt)("p",null,"La clase ",(0,n.kt)("inlineCode",{parentName:"p"},"StudentsSelection")," tine una funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"getAgeAverage"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"// StudentsSelection Class\n\nClass extends EntitySelection\n\nexposed Function getAgeAverage\n C_LONGINT($sum;$0)\n C_OBJECT($s)\n\n $sum:=0\n For each ($s;This)\n     $sum:=$sum+$s.age()\n End for each \n $0:=$sum/This.length\n")),(0,n.kt)("p",null,"Una vez que haya creado un conjunto de entidades, puede ejecutar esta petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532")),(0,n.kt)("h4",l({},{id:"result-4"}),"Result"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "result": 34\n}\n')),(0,n.kt)("h3",l({},{id:"utilizar-una-funci\xf3n-de-clase-de-selecci\xf3n-de-entidades-y-unorderby"}),"Utilizar una funci\xf3n de clase de selecci\xf3n de entidades y unorderBy"),(0,n.kt)("p",null,"La clase ",(0,n.kt)("inlineCode",{parentName:"p"},"StudentsSelection")," tiene una funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"getLastSummary"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'// StudentsSelection Class\n\n\nClass extends EntitySelection\n\nexposed Function getLastSummary\n C_TEXT($0)\n C_OBJECT($last)\n\n $last:=This.last()\n $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())\n')),(0,n.kt)("p",null,"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},'127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"')),(0,n.kt)("h4",l({},{id:"result-5"}),"Result"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "result": "Wilbert - Bull is ... 21" \n}\n')),(0,n.kt)("h3",l({},{id:"utilizar-una-entidad-que-se-crear\xe1-en-el-servidor"}),"Utilizar una entidad que se crear\xe1 en el servidor"),(0,n.kt)("p",null,"La clase de Dataclass ",(0,n.kt)("inlineCode",{parentName:"p"},"Students")," tiene la funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"pushData()")," que recibe una entidad que contiene los datos del cliente. El m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"checkData()")," efect\xfaa algunos controles. Si son v\xe1lidos, la entidad se guarda y se devuelve."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"// Students Class\n\nClass extends DataClass\n\nexposed Function pushData\n var $1, $entity, $status, $0 : Object\n\n $entity:=$1\n\n $status:=checkData($entity) // $status is an object with a success boolean property\n\n $0:=$status\n\n If ($status.success)\n     $status:=$entity.save()\n     If ($status.success)\n         $0:=$entity\n     End if \n End if\n\n")),(0,n.kt)("p",null,"Lance esta petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,n.kt)("p",null,"Cuerpo de la petici\xf3n:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"Ann",\n"lastname":"Brown" \n}]\n')),(0,n.kt)("p",null,"Como ninguna ",(0,n.kt)("inlineCode",{parentName:"p"},"__KEY")," es dada, una nueva entidad Students est\xe1 cargada en el servidor ",(0,n.kt)("strong",{parentName:"p"},"con los atributos del cliente"),". Como la funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"pushData()")," ejecuta una acci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"save()"),", la nueva entidad es creada."),(0,n.kt)("h4",l({},{id:"result-6"}),"Result"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",\n    "__STAMP": 1,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWN",\n    "schoolID": null,\n    "school": null\n}\n')),(0,n.kt)("h3",l({},{id:"utilizar-una-entidad-a-actualizar-en-el-servidor"}),"Utilizar una entidad a actualizar en el servidor"),(0,n.kt)("p",null,"Igual que el anterior pero con el atributo __KEY"),(0,n.kt)("p",null,"Lance esta petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST:"),(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,n.kt)("p",null,"Cuerpo de la petici\xf3n:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"lastname":"Brownie",\n"__KEY":55\n}]\n')),(0,n.kt)("p",null,"Como ",(0,n.kt)("inlineCode",{parentName:"p"},"__KEY")," es dada, la entidad Students est\xe1 cargada con llave primaria 55 ",(0,n.kt)("strong",{parentName:"p"},"con el valor lastname recibido por el cliente"),". Como la funci\xf3n ejecuta una acci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"save()"),", la nueva entidad es actualizada."),(0,n.kt)("h4",l({},{id:"result-7"}),"Result"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",\n    "__STAMP": 3,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWNIE",\n    "schoolID": null,\n    "school": null \n}\n')),(0,n.kt)("h3",l({},{id:"crear-una-entidad-con-una-entidad-relacionada"}),"Crear una entidad con una entidad relacionada"),(0,n.kt)("p",null,"En este ejemplo, creamos una nueva entidad Students con la entidad Schools con la llave primaria 2."),(0,n.kt)("p",null,"Lance esta petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST:"),(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,n.kt)("p",null,"Cuerpo de la petici\xf3n:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"John",\n"lastname":"Smith",\n"school":{"__KEY":2}\n}]\n')),(0,n.kt)("h4",l({},{id:"result-8"}),"Result"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "56",\n    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",\n    "__STAMP": 1,\n    "ID": 56,\n    "firstname": "John",\n    "lastname": "SMITH",\n    "schoolID": 2,\n       "school": {\n        "__deferred": {\n            "uri": "/rest/Schools(2)",\n            "__KEY": "2" \n        }\n    }\n}\n')),(0,n.kt)("h3",l({},{id:"actualizar-una-entidad-con-una-entidad-relacionada"}),"Actualizar una entidad con una entidad relacionada"),(0,n.kt)("p",null,"En este ejemplo, asociamos una escuela existente a una entidad Students. La clase ",(0,n.kt)("inlineCode",{parentName:"p"},"StudentsEntity")," tiene una API:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"// StudentsEntity class\n\nClass extends Entity\n\nexposed Function putToSchool()\n var $1, $school , $0, $status : Object\n\n  //$1 is a Schools entity\n $school:=$1\n  //Associate the related entity school to the current Students entity\n This.school:=$school\n\n $status:=This.save()\n\n $0:=$status\n")),(0,n.kt)("p",null,"You run this request, called on a Students entity : ",(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students(1)/putToSchool")," Body of the request:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'[{\n"__DATACLASS":"Schools",\n"__ENTITY":true,\n"__KEY":2\n}]\n')),(0,n.kt)("h4",l({},{id:"result-9"}),"Result"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "result": {\n        "success": true\n    }\n}\n')),(0,n.kt)("h3",l({},{id:"recibir-una-selecci\xf3n-de-entidades-como-par\xe1metro"}),"Recibir una selecci\xf3n de entidades como par\xe1metro"),(0,n.kt)("p",null,"En la clase de Dataclass ",(0,n.kt)("inlineCode",{parentName:"p"},"Students"),", la funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"setFinalExam()")," actualiza una selecci\xf3n de entidad recibida ($1). En realidad, actualiza el atributo ",(0,n.kt)("em",{parentName:"p"},"finalExam")," con el valor recibido ($2). Devuelve las llaves primarias de las entidades actualizadas."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"// Students class\n\nClass extends DataClass\n\nexposed Function setFinalExam()\n\n    var $1, $es, $student, $status : Object\n    var $2, $examResult : Text\n\n    var $keys, $0 : Collection\n\n      //Entity selection\n    $es:=$1\n\n    $examResult:=$2\n\n    $keys:=New collection()\n\n      //Bucle en la selecci\xf3n de entidades\n    For each ($student;$es)\n        $student.finalExam:=$examResult\n        $status:=$student.save()\n        If ($status.success)\n            $keys.push($student.ID)\n        End if \n    End for each \n\n    $0:=$keys\n")),(0,n.kt)("p",null,"Un conjunto de entidades se crea primero con esta petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset')),(0,n.kt)("p",null,"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/setFinalExam")),(0,n.kt)("p",null,"Cuerpo de la petici\xf3n:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'[\n{\n"__ENTITIES":true,\n"__DATASET":"9B9C053A111E4A288E9C1E48965FE671" \n},\n"Passed" \n]\n\n')),(0,n.kt)("h4",l({},{id:"result-10"}),"Result"),(0,n.kt)("p",null,"Se han actualizado las entidades con llaves primarias 1 y 2."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    "result": [\n        1,\n        2\n    ]\n}\n')),(0,n.kt)("h3",l({},{id:"utilizar-una-selecci\xf3n-de-entidades-actualizada-en-el-cliente"}),"Utilizar una selecci\xf3n de entidades actualizada en el cliente"),(0,n.kt)("p",null,"Utilizando la funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"getAgeAverage()")," ",(0,n.kt)("a",l({parentName:"p"},{href:"#using-an-entityselection-class-function-and-an-entityset"}),"definida anteriormente"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $remoteDS, $newStudent, $students : Object\nvar $ageAverage : Integer\n\n$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")\n\n// $newStudent es una entidad "student" a procesar\n$newStudent:=...\n$students:=$remoteDS.Students.query("school.name = :1";"Math school")\n// Hemos a\xf1adido una entidad a la selecci\xf3n de entidades $students en el cliente\n$students.add($newStudent) \n\n// Llamamos a una funci\xf3n en la clase StudentsSelection que devuelve la edad media de los estudiantes en la selecci\xf3n de entidades\n// La funci\xf3n se utiliza en el servidor en la selecci\xf3n de la entidad $students actualizada, que incluye el estudiante a\xf1adido por el cliente\n$ageAverage:=$students.getAgeAverage()\n')))}p.isMDXComponent=!0},34542:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ordastructure-64d64d76ce9764a2365629e381bde282.png"}}]);