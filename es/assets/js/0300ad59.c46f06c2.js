"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47881],{3905:(e,r,o)=>{o.d(r,{Zo:()=>p,kt:()=>m});var t=o(67294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=a,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return o?t.createElement(b,i(i({ref:r},p),{},{components:o})):t.createElement(b,i({ref:r},p))}));function m(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},98716:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});o(67294);var t=o(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},a.apply(this,arguments)}function n(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const i={id:"buttonGridOverview",title:"Rejilla de botones"},s=void 0,l={unversionedId:"FormObjects/buttonGridOverview",id:"version-19/FormObjects/buttonGridOverview",title:"Rejilla de botones",description:"Una rejilla de botones es un objeto transparente que se coloca sobre una imagen. La imagen debe corresponder a la forma d eun array. Cuando se hace clic en uno de los gr\xe1ficos, \xe9ste tendr\xe1 un aspecto presionado:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/FormObjects/buttonGrid_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/buttonGridOverview",permalink:"/docs/es/19/FormObjects/buttonGridOverview",draft:!1,tags:[],version:"19",frontMatter:{id:"buttonGridOverview",title:"Rejilla de botones"},sidebar:"docs",previous:{title:"Bot\xf3n",permalink:"/docs/es/19/FormObjects/buttonOverview"},next:{title:"Casilla a seleccionar",permalink:"/docs/es/19/FormObjects/checkboxOverview"}},c={},p=[{value:"Crear rejillas de botones",id:"crear-rejillas-de-botones",level:2},{value:"Utilizar rejillas de botones",id:"utilizar-rejillas-de-botones",level:2},{value:"Ir a la p\xe1gina",id:"ir-a-la-p\xe1gina",level:3},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}],d={toc:p};function u(e){var{components:r}=e,i=n(e,["components"]);return(0,t.kt)("wrapper",a({},d,i,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Una rejilla de botones es un objeto transparente que se coloca sobre una imagen. La imagen debe corresponder a la forma d eun array. Cuando se hace clic en uno de los gr\xe1ficos, \xe9ste tendr\xe1 un aspecto presionado:"),(0,t.kt)("p",null,(0,t.kt)("img",{src:o(33329).Z,width:"187",height:"129"})),(0,t.kt)("p",null,"Puede utilizar un objeto rejilla de botones para determinar d\xf3nde hace clic el usuario en la imagen. El m\xe9todo objeto utilizar\xeda el evento ",(0,t.kt)("inlineCode",{parentName:"p"},"On Clicked")," y tomar\xeda la acci\xf3n apropiada dependiendo de la ubicaci\xf3n del clic."),(0,t.kt)("h2",a({},{id:"crear-rejillas-de-botones"}),"Crear rejillas de botones"),(0,t.kt)("p",null,"Para crear la rejilla de botones, a\xf1ada una imagen de fondo al formulario y coloque una rejilla de botones sobre ella. Especifique el n\xfamero de ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCrop#rows"}),"l\xedneas")," y de ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCrop#columns"}),"columnas"),"."),(0,t.kt)("p",null,"En 4D, se utiliza una rejilla de botones para las paletas de colores:"),(0,t.kt)("p",null,(0,t.kt)("img",{src:o(45248).Z,width:"421",height:"340"})),(0,t.kt)("h2",a({},{id:"utilizar-rejillas-de-botones"}),"Utilizar rejillas de botones"),(0,t.kt)("p",null,"Los botones de la rejilla est\xe1n numerados de izquierda a derecha y de arriba a abajo. En el ejemplo anterior, la rejilla tiene 16 columnas a lo ancho por 16 l\xedneas a hacia abajo. El bot\xf3n en la posici\xf3n superior izquierda devuelve 1 cuando se hace clic. Si se selecciona el bot\xf3n rojo del extremo derecho de la segunda fila, la rejilla de botones devuelve 32. Si no se selecciona ning\xfan elemento, el valor es 0"),(0,t.kt)("h3",a({},{id:"ir-a-la-p\xe1gina"}),"Ir a la p\xe1gina"),(0,t.kt)("p",null,"Puede asociar el ",(0,t.kt)("inlineCode",{parentName:"p"},"gotoPage")," ",(0,t.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html"}),"acci\xf3n est\xe1ndar")," a una rejilla de botones. Cuando se selecciona esta acci\xf3n, 4D mostrar\xe1 autom\xe1ticamente la p\xe1gina del formulario que corresponde al n\xfamero del bot\xf3n que est\xe1 seleccionado en la rejilla de botones. Por ejemplo, si el usuario selecciona el d\xe9cimo bot\xf3n de la rejilla, 4D mostrar\xe1 la d\xe9cima p\xe1gina del formulario actual (si existe)."),(0,t.kt)("h2",a({},{id:"propiedades-soportadas"}),"Propiedades soportadas"),(0,t.kt)("p",null,(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Estilo del borde")," - ","[","Inferior","]","(properties_CoordinatesAndSizing. md#bottom) - ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesObject#css-class"}),"Clase")," - ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCrop#columns"}),"Columnas")," - ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#height"}),"Altura")," - ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesHelp#help-tip"}),"Consejo de ayuda")," - ","[","Tama\xf1o horizontal","]","(properties_ResizingOptions. md#horizontal-sizing) - ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#left"}),"Izquierda")," - ","[","Nombre del objeto","]","(properties_Object. md#object-name) - ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#right"}),"Derecha")," - ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCrop#rows"}),"Filas")," - ","[","Acci\xf3n est\xe1ndar","]","(properties_Action. md#standard-action) - ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#top"}),"Superior")," - ","[","Tipo","]","(properties_Object. md#type) - ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesObject#variable-or-expression"}),"Variable o expresi\xf3n")," - ","[","Tama\xf1o vertical","]","(properties_ResizingOptions. md#vertical-sizing) - ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#width"}),"Ancho")," - ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesDisplay#visibility"}),"Visibilidad")))}u.isMDXComponent=!0},33329:(e,r,o)=>{o.d(r,{Z:()=>t});const t="data:image/png;base64,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"},45248:(e,r,o)=>{o.d(r,{Z:()=>t});const t=o.p+"assets/images/button_buttonGrid-426d2c4a3904ebcde18441040126a4d1.png"}}]);